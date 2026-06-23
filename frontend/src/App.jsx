import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";


function App() {

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const [metrics, setMetrics] = useState(null);
  useEffect(() => {

  const loadMetrics = async () => {

    try {

      const response = await axios.get(
         "https://ai-app-compiler-backend-3t5i.onrender.com/api/metrics",
      );

      setMetrics(response.data);

    } catch (err) {

      console.error(err);

    }

  };

  loadMetrics();

}, []);

  const generateApp = async () => {

    try {

      const response =
        await axios.post(
          "https://ai-app-compiler-backend-3t5i.onrender.com/api/compile",
          { prompt }
        );

      setResult(response.data);

const metricsResponse =
  await axios.get(
    "https://ai-app-compiler-backend-3t5i.onrender.com/api/metrics",
  );

setMetrics(metricsResponse.data);

    } catch (err) {
      console.error(err);
    }
  };
const downloadJson = () => {

  const blob = new Blob(
    [JSON.stringify(result, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = "app-config.json";

  a.click();
};
const downloadReport = () => {

  const blob = new Blob(
    [
      JSON.stringify(
        result.report,
        null,
        2
      )
    ],
    {
      type: "application/json"
    }
  );

  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;
  a.download = "report.json";

  a.click();
};
  return (
    <div className="app">

      <div className="header">
        <h1>AI Application Compiler</h1><br></br>
        <p>
  Transform natural language into validated,
  executable application configurations.
</p>
      </div>

      <div className="pipeline">
        <span>Intent</span>
        <span>Architecture</span>
        <span>Schema</span>
        <span>Validation</span>
        <span>Repair</span>
      </div>

      <div className="main-grid">

        <div className="card">
          <h2>Prompt Input</h2>

          <textarea
            placeholder="Build CRM with login, contacts and payments..."
            value={prompt}
            onChange={(e) =>
              setPrompt(e.target.value)
            }
          />

          <button onClick={generateApp}>
            Generate Application
          </button>
          {result && (

  <div className="action-row">

    <div className="success-pill">
      ✓ Generated
    </div>

    <button
      onClick={downloadJson}
      className="download-btn"
    >
      Download JSON
    </button>
    <button
  onClick={downloadReport}
  className="download-btn"
>
  Download Report
</button>

  </div>

)}
{result && (

  <div className="status-grid">

    <div className="validation-card">

      <h3>Validation Status</h3>

      <p>
        {result.validation.ui.valid ? "✅" : "❌"}
        UI Schema
      </p>

      <p>
        {result.validation.db.valid ? "✅" : "❌"}
        Database Schema
      </p>

      <p>
        {result.validation.api.valid ? "✅" : "❌"}
        API Schema
      </p>

      <p>
        {result.validation.consistency.valid ? "✅" : "❌"}
        Consistency Check
      </p>

    </div>

    <div className="repair-card">

      <h3>Repair Engine</h3>

      {result.repair.applied ? (

        result.repair.actions.map(
          (action, index) => (
            <p key={index}>
              ✅ {action}
            </p>
          )
        )

      ) : (

        <p>No Repairs Needed</p>

      )}

    </div>

  </div>

)}

          

        </div>

        <div className="card">
          <h2>Generated Configuration</h2>

          <div className="json-box">
            <pre>
              {result
                ? JSON.stringify(result, null, 2)
                : "Generate an application..."}
            </pre>
          </div>
        </div>

      </div>

    {metrics && (

<div className="metrics">

  <div className="metric-card">

    <div className="metric-value">
      {metrics.totalRuns}
    </div>

    <div className="metric-label">
      Evaluated Prompts
    </div>

  </div>

  <div className="metric-card">

    <div className="metric-value">
      {metrics.successRate}%
    </div>

    <div className="metric-label">
      Success Rate
    </div>

  </div>

  <div className="metric-card">

    <div className="metric-value">
      {metrics.repairCount}
    </div>

    <div className="metric-label">
      Repairs Applied
    </div>

  </div>

  <div className="metric-card">

    <div className="metric-value">
      {metrics.averageLatencyMs.toFixed(2)}
    </div>

    <div className="metric-label">
      Avg Latency (ms)
    </div>

  </div>

</div>

)}

      {result?.ui?.pages && (

        <div className="preview preview-section">

          <h2>Generated Application Preview</h2>

          <br />

          <div className="preview-grid">

            {result.ui.pages.map((page) => (

              <div
                className="preview-card"
                key={page.name}
              >
                <h3>{page.name}</h3>

                <div className="chips">

  <div className="chips">
  {page.components.map((c) => (
    <span className="component-chip" key={c}>
      {c}
    </span>
  ))}
</div>

</div>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  );
}

export default App;