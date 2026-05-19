import { useMemo, useState } from "react";
import { mockProject } from "../mock/mockProject";
import type { ConnectionMode } from "../types/dmx";
import type { LightmaticProject } from "../types/project";

export function useMockProject() {
  const [project] = useState<LightmaticProject>(mockProject);
  const [connectionMode] = useState<ConnectionMode>("mock");

  return useMemo(
    () => ({
      project,
      connectionMode,
      universe: project.universes[0],
    }),
    [connectionMode, project],
  );
}
