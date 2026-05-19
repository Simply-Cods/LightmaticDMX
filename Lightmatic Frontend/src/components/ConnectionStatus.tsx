import type { ConnectionMode } from "../types/dmx";

type ConnectionStatusProps = {
  mode: ConnectionMode;
};

const labels: Record<ConnectionMode, string> = {
  connected: "Connected",
  disconnected: "Disconnected",
  mock: "Mock mode",
};

export function ConnectionStatus({ mode }: ConnectionStatusProps) {
  return (
    <div className={`connection-status ${mode}`}>
      <span className="status-dot" aria-hidden="true" />
      <span>{labels[mode]}</span>
    </div>
  );
}
