import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import test from "node:test";

const execFileAsync = promisify(execFile);
const projectRoot = new URL("..", import.meta.url);

test("unlocks public deployment after the recorded release approval", async () => {
  const { stdout } = await execFileAsync(
    process.execPath,
    ["scripts/audit-publication-readiness.mjs"],
    { cwd: projectRoot },
  );
  const report = JSON.parse(stdout);

  assert.equal(report.publicationStatus, "approved");
  assert.equal(report.readyToPublish, true);
  assert.equal(report.blockingChecks.length, 0);
  assert.ok(report.checks.find((check) => check.id === "visitor_copy_has_no_raw_placeholders")?.pass);
});

test("passes the strict publication audit with the approved release", async () => {
  const { stdout } = await execFileAsync(
    process.execPath,
    ["scripts/audit-publication-readiness.mjs", "--strict"],
    { cwd: projectRoot },
  );
  const report = JSON.parse(stdout);
  assert.equal(report.readyToPublish, true);
  assert.equal(report.publicationStatus, "approved");
});
