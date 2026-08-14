# @lanxi266/dsh-cluster-agent-fs

Host-side filesystem service for cluster Agent definitions. Each class is a directory under `$DSH_HOME/cluster-agents/<id>` holding `agent.json`; the service owns create/save/delete/list, instance→class bindings, flow policy, the persisted canvas graph, and the typert Remote seam the browser and `@lanxi266/dsh-tool-cluster` consume.

## Model Experience

### Request context and condition

#### What the model sees

None directly. This package supplies class data (`name`, `prompt`, `mode`, `spaceEnabled`, directory path) that `@lanxi266/dsh-tool-cluster` renders into its `cluster-agent-persona` system-prompt section.

#### Token effect

Zero-direct: no system-prompt text originates here.

#### KV Cache effect

Independent: this package adds no request context itself.

## Known Limitations and Deferred Work

- **Instance bindings (`bindings`) are in-memory** and reset on `dsh web` restart; only the canvas graph persists (`graph.json`).
- **`openAgentSpace` opens the OS file explorer** (`explorer.exe`/`open`/`xdg-open`), so the affordance is platform-specific.
