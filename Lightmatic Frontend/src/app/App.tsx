import { useState } from "react";
import { ConnectionStatus } from "../components/ConnectionStatus";
import { ButtonsView } from "../views/ButtonsView";
import { DashboardView } from "../views/DashboardView";
import { FixturesView } from "../views/FixturesView";
import { ImportExportView } from "../views/ImportExportView";
import { ScenesView } from "../views/ScenesView";
import { UniverseView } from "../views/UniverseView";
import { useMockProject } from "../store/useMockProject";

type ViewId = "dashboard" | "universe" | "fixtures" | "scenes" | "buttons" | "import-export";

const views: Array<{ id: ViewId; label: string }> = [
  { id: "dashboard", label: "Dashboard" },
  { id: "universe", label: "Universe" },
  { id: "fixtures", label: "Fixtures" },
  { id: "scenes", label: "Scenes" },
  { id: "buttons", label: "Buttons" },
  { id: "import-export", label: "Import / Export" },
];

export function App() {
  const [activeView, setActiveView] = useState<ViewId>("dashboard");
  const { project, universe, connectionMode } = useMockProject();

  const page = {
    dashboard: <DashboardView project={project} universe={universe} />,
    universe: <UniverseView universe={universe} />,
    fixtures: <FixturesView fixtures={project.fixtures} />,
    scenes: <ScenesView scenes={project.scenes} />,
    buttons: <ButtonsView buttons={project.buttons} groups={project.groups} />,
    "import-export": <ImportExportView project={project} />,
  }[activeView];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">LM</span>
          <div>
            <h1>Lightmatic DMX</h1>
            <p>Local lighting control</p>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {views.map((view) => (
            <button
              className={view.id === activeView ? "nav-item active" : "nav-item"}
              key={view.id}
              onClick={() => setActiveView(view.id)}
              type="button"
            >
              {view.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Project</p>
            <h2>{project.name}</h2>
          </div>
          <ConnectionStatus mode={connectionMode} />
        </header>

        {page}
      </main>
    </div>
  );
}
