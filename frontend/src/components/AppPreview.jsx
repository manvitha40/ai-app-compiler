function AppPreview({ ui }) {
  if (!ui) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Generated App Preview</h2>

      {ui.pages.map((page) => (
        <div
          key={page.name}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "12px"
          }}
        >
          <h3>{page.name}</h3>

          <ul>
            {page.components.map((component) => (
              <li key={component}>{component}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AppPreview;