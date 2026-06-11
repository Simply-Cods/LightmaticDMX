export type ConnectionMode = "mock" | "disconnected" | "connected";

export type DmxChannel = {
  address: number;
  value: number;
  fixtureId?: string;
  label?: string;
};

export type DmxUniverse = {
  id: string;
  name: string;
  channelCount: 512;
  channels: DmxChannel[];
};
