import type { LightmaticProject } from "../types/project";

const channels = Array.from({ length: 512 }, (_, index) => {
  const address = index + 1;
  const isFrontWash = address >= 1 && address <= 8;
  const isMovingHead = address >= 17 && address <= 32;
  const value = isFrontWash ? 180 - index * 8 : isMovingHead ? (index % 8) * 28 : 0;

  return {
    address,
    value: Math.max(0, Math.min(255, value)),
    fixtureId: isFrontWash ? "fixture-front-wash" : isMovingHead ? "fixture-moving-head" : undefined,
    label: isFrontWash ? `Front Wash ${address}` : isMovingHead ? `MH ${address - 16}` : undefined,
  };
});

export const mockProject: LightmaticProject = {
  name: "Lightmatic Demo Rig",
  universes: [
    {
      id: "universe-1",
      name: "Universe 1",
      channelCount: 512,
      channels,
    },
  ],
  fixtures: [
    {
      id: "fixture-front-wash",
      name: "Front Wash Bar",
      type: "RGBW LED Bar",
      universeId: "universe-1",
      startAddress: 1,
      channels: [
        { offset: 0, name: "Dimmer", value: 180 },
        { offset: 1, name: "Red", value: 220 },
        { offset: 2, name: "Green", value: 120 },
        { offset: 3, name: "Blue", value: 40 },
        { offset: 4, name: "White", value: 80 },
      ],
    },
    {
      id: "fixture-moving-head",
      name: "Center Moving Head",
      type: "Spot Moving Head",
      universeId: "universe-1",
      startAddress: 17,
      channels: [
        { offset: 0, name: "Pan", value: 64 },
        { offset: 1, name: "Tilt", value: 96 },
        { offset: 2, name: "Dimmer", value: 200 },
        { offset: 3, name: "Color", value: 32 },
        { offset: 4, name: "Gobo", value: 0 },
      ],
    },
  ],
  scenes: [
    {
      id: "scene-warm-wash",
      name: "Warm Wash",
      description: "Static front light for setup and rehearsal.",
      channelValues: { 1: 200, 2: 255, 3: 120, 4: 40, 5: 80 },
    },
    {
      id: "scene-blackout",
      name: "Blackout",
      description: "All output channels down.",
      channelValues: { 1: 0, 17: 0, 19: 0 },
    },
  ],
  groups: [
    { id: "group-scenes", name: "Scenes", exclusive: true },
    { id: "group-effects", name: "Effects", exclusive: true },
  ],
  buttons: [
    {
      id: "button-warm-wash",
      label: "Warm Wash",
      groupId: "group-scenes",
      isActive: true,
      action: { type: "scene", sceneId: "scene-warm-wash" },
    },
    {
      id: "button-blackout",
      label: "Blackout",
      groupId: "group-scenes",
      isActive: false,
      action: { type: "scene", sceneId: "scene-blackout" },
    },
    {
      id: "button-strobe",
      label: "Strobe Hit",
      groupId: "group-effects",
      isActive: false,
      action: { type: "channel", address: 24, value: 255 },
    },
  ],
};
