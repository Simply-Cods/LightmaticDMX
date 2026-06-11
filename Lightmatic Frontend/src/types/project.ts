import type { ControlButton, ButtonGroup } from "./button";
import type { DmxUniverse } from "./dmx";
import type { Fixture } from "./fixture";
import type { Scene } from "./scene";

export type LightmaticProject = {
  name: string;
  universes: DmxUniverse[];
  fixtures: Fixture[];
  scenes: Scene[];
  buttons: ControlButton[];
  groups: ButtonGroup[];
};
