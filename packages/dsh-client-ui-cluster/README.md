# @lanxi266/dsh-client-ui-cluster

Cluster-mode browser surface: a `sidebar.footer.action` button that toggles a frame-wide node-graph editor registered into `shell.overlay` — add/delete/move nodes, connect them with directional arrows, snap to a toggleable grid, and manage cluster Agents (id, name, prompt, mode, space).

## Model Experience

### Request context and condition

#### What the model sees

None directly. This package only registers `sidebar.footer.action` and `shell.overlay` slots; it contributes no system-prompt text and writes nothing to the session log.

#### Token effect

Zero-direct: no system-prompt text originates here.

#### KV Cache effect

Independent: this package adds no request context itself.

## Known Limitations and Deferred Work

- **The graph is browser-local** — nodes, edges, and Agent definitions persist to `localStorage` and sync to the Host flow policy (`graph.json`), but they are per-browser and not shared across devices.
