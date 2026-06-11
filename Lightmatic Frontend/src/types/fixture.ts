export type FixtureChannel = {
  offset: number;
  name: string;
  value: number;
};

export type Fixture = {
  id: string;
  name: string;
  type: string;
  universeId: string;
  startAddress: number;
  channels: FixtureChannel[];
};
