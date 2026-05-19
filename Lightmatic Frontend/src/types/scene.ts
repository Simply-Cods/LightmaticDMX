export type Scene = {
  id: string;
  name: string;
  description?: string;
  channelValues: Record<number, number>;
};
