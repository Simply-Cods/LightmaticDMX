import type { DmxUniverse } from "../types/dmx";
import type { LightmaticProject } from "../types/project";

type DashboardViewProps = {
  project: LightmaticProject;
  universe: DmxUniverse;
};

export function DashboardView({ project, universe }: DashboardViewProps) {
  const activeChannels = universe.channels.filter((channel) => channel.value > 0).length;

  return (
    <section className="view">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Overview</p>
          <h3>Dashboard</h3>
        </div>
      </div>

      <div className="metric-grid">
        <div className="metric">
          <span>Universe</span>
          <strong>{universe.name}</strong>
        </div>
        <div className="metric">
          <span>Active channels</span>
          <strong>{activeChannels}/512</strong>
        </div>
        <div className="metric">
          <span>Fixtures</span>
          <strong>{project.fixtures.length}</strong>
        </div>
        <div className="metric">
          <span>Scenes</span>
          <strong>{project.scenes.length}</strong>
        </div>
        <div className="metric">
          <span>Buttons</span>
          <strong>{project.buttons.length}</strong>
        </div>
      </div>
    </section>
  );
}
