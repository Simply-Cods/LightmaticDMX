import type { Scene } from "../types/scene";

type ScenesViewProps = {
  scenes: Scene[];
};

export function ScenesView({ scenes }: ScenesViewProps) {
  return (
    <section className="view">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Cues</p>
          <h3>Scenes</h3>
        </div>
      </div>

      <div className="list-layout">
        {scenes.map((scene) => (
          <article className="panel" key={scene.id}>
            <div className="panel-heading">
              <div>
                <h4>{scene.name}</h4>
                <p>{scene.description}</p>
              </div>
              <span className="address-badge">{Object.keys(scene.channelValues).length} values</span>
            </div>

            <div className="scene-values">
              {Object.entries(scene.channelValues).map(([address, value]) => (
                <span key={address}>
                  {address}: {value}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
