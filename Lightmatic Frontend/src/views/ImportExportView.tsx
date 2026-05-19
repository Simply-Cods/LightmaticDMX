import { useRef, useState } from "react";
import type { LightmaticProject } from "../types/project";

type ImportExportViewProps = {
  project: LightmaticProject;
};

export function ImportExportView({ project }: ImportExportViewProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState("No project file selected.");

  function exportProject() {
    const blob = new Blob([JSON.stringify(project, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "lightmatic-project.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function importProject(file: File | undefined) {
    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as Partial<LightmaticProject>;
      setImportStatus(`Loaded "${parsed.name ?? file.name}" for validation. Mock mode does not replace state yet.`);
    } catch {
      setImportStatus("Could not parse selected file as JSON.");
    }
  }

  return (
    <section className="view">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Project files</p>
          <h3>Import / Export</h3>
        </div>
      </div>

      <div className="panel import-panel">
        <div>
          <h4>Local project file</h4>
          <p>{importStatus}</p>
        </div>

        <div className="actions">
          <input
            accept="application/json"
            hidden
            onChange={(event) => void importProject(event.target.files?.[0])}
            ref={inputRef}
            type="file"
          />
          <button onClick={() => inputRef.current?.click()} type="button">
            Import JSON
          </button>
          <button onClick={exportProject} type="button">
            Export JSON
          </button>
        </div>
      </div>
    </section>
  );
}
