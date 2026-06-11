import type { ButtonGroup, ControlButton } from "../types/button";

type ButtonsViewProps = {
  buttons: ControlButton[];
  groups: ButtonGroup[];
};

export function ButtonsView({ buttons, groups }: ButtonsViewProps) {
  return (
    <section className="view">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Controls</p>
          <h3>Buttons</h3>
        </div>
      </div>

      <div className="button-groups">
        {groups.map((group) => {
          const groupButtons = buttons.filter((button) => button.groupId === group.id);

          return (
            <section className="button-group" key={group.id}>
              <div className="group-heading">
                <h4>{group.name}</h4>
                <span>{group.exclusive ? "Exclusive" : "Multi-select"}</span>
              </div>
              <div className="button-grid">
                {groupButtons.map((button) => (
                  <button className={button.isActive ? "control-button active" : "control-button"} key={button.id} type="button">
                    {button.label}
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
