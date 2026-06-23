import fs from "fs";

const results =
  JSON.parse(
    fs.readFileSync(
      "./evaluation/results.json",
      "utf8"
    )
  );

const totalRuns =
  results.length;

const successfulRuns =
  results.filter(
    r => r.success
  ).length;

const failedRuns =
  totalRuns -
  successfulRuns;

const repairCount =
  results.filter(
    r => r.repaired
  ).length;

const avgLatency =
  results.reduce(
    (sum, r) =>
      sum + r.latency,
    0
  ) / totalRuns;

const report = {
  totalRuns,
  successfulRuns,
  failedRuns,
  successRate:
    (
      successfulRuns /
      totalRuns
    ) * 100,
  repairCount,
  averageLatencyMs:
    avgLatency
};

fs.writeFileSync(
  "./evaluation/final-report.json",
  JSON.stringify(
    report,
    null,
    2
  )
);

console.log(report);