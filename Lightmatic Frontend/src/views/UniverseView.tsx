import type { DmxUniverse } from "../types/dmx";

type UniverseViewProps = {
  universe: DmxUniverse;
};

export function UniverseView({ universe }: UniverseViewProps) {
  return (
    <section className="view">
      <div className="view-heading">
        <div>
          <p className="eyebrow">512 channels</p>
          <h3>{universe.name}</h3>
        </div>
      </div>

      <div className="universe-grid" aria-label="DMX universe channels">
        {universe.channels.map((channel) => (
          <div className={channel.value > 0 ? "channel-cell active" : "channel-cell"} key={channel.address}>
            <span className="channel-address">{channel.address}</span>
            <strong>{channel.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
