import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import test from "node:test";

const execFileAsync = promisify(execFile);
const projectRoot = new URL("..", import.meta.url);

test("keeps public deployment blocked until content and approval are complete", async () => {
  const { stdout } = await execFileAsync(
    process.execPath,
    ["scripts/audit-publication-readiness.mjs"],
    { cwd: projectRoot },
  );
  const report = JSON.parse(stdout);

  assert.equal(report.publicationStatus, "draft");
  assert.equal(report.readyToPublish, false);
  assert.ok(report.blockingChecks.length >= 6);
  assert.ok(
    report.blockingChecks.some(
      (check) => check.id === "explicit_publication_approval",
    ),
  );
  assert.ok(
    report.blockingChecks.some(
      (check) => check.id === "visitor_copy_has_no_raw_placeholders",
    ),
  );
});

test("fails the strict publication audit while the release is still a draft", async () => {
  await assert.rejects(
    execFileAsync(
      process.execPath,
      ["scripts/audit-publication-readiness.mjs", "--strict"],
      { cwd: projectRoot },
    ),
    (error) => {
      assert.equal(error.code, 1);
      const report = JSON.parse(error.stdout);
      assert.equal(report.readyToPublish, false);
      return true;
    },
  );
});
