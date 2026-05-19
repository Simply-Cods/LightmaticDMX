import type { Fixture } from "../types/fixture";

type FixturesViewProps = {
  fixtures: Fixture[];
};

export function FixturesView({ fixtures }: FixturesViewProps) {
  return (
    <section className="view">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Patch</p>
          <h3>Fixtures</h3>
        </div>
      </div>

      <div className="list-layout">
        {fixtures.map((fixture) => (
          <article className="panel" key={fixture.id}>
            <div className="panel-heading">
              <div>
                <h4>{fixture.name}</h4>
                <p>{fixture.type}</p>
              </div>
              <span className="address-badge">DMX {fixture.startAddress}</span>
            </div>

            <div className="channel-list">
              {fixture.channels.map((channel) => (
                <div className="channel-row" key={channel.offset}>
                  <span>{channel.name}</span>
                  <input max="255" min="0" readOnly type="range" value={channel.value} />
                  <strong>{channel.value}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
