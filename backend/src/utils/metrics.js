import fs from "fs";

const METRICS_FILE =
  "./evaluation/metrics.json";

export function updateMetrics(
  success,
  repaired,
  latency
) {

  const metrics = JSON.parse(
    fs.readFileSync(
      METRICS_FILE,
      "utf8"
    )
  );

  metrics.totalRuns++;

  if (success) {
    metrics.successfulRuns++;
  } else {
    metrics.failedRuns++;
  }

  if (repaired) {
    metrics.repairCount++;
  }

  metrics.averageLatencyMs =
    (
      (
        metrics.averageLatencyMs *
        (metrics.totalRuns - 1)
      )
      +
      latency
    ) / metrics.totalRuns;

  fs.writeFileSync(
    METRICS_FILE,
    JSON.stringify(
      metrics,
      null,
      2
    )
  );
}

export function getMetrics() {

  const metrics = JSON.parse(
    fs.readFileSync(
      METRICS_FILE,
      "utf8"
    )
  );

  metrics.successRate =
    (
      metrics.successfulRuns /
      metrics.totalRuns
    ) * 100;

  return metrics;
}