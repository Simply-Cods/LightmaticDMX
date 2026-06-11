export type ButtonAction =
  | { type: "scene"; sceneId: string }
  | { type: "channel"; address: number; value: number };

export type ButtonGroup = {
  id: string;
  name: string;
  exclusive: boolean;
};

export type ControlButton = {
  id: string;
  label: string;
  groupId?: string;
  isActive: boolean;
  action: ButtonAction;
};
