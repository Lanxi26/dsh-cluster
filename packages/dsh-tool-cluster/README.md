# @lanxi266/dsh-tool-cluster

Model-facing cluster tools (`cluster_view`, `cluster_send`, `cluster_spawn`) and the cluster Agent persona injection. Registers three tools plus one `systemPrompt` section so any instance bound to a cluster Agent class sees that class's persona and can route messages across the canvas flow graph.

## Model Experience

### Request context and condition

#### What the model sees

The `cluster-agent-persona` system-prompt section (order `-50`) is injected for every instance bound to a cluster Agent class. `{name}` and `{prompt}` come from the class's `agent.json`; when `prompt` is empty the first line is `你是 {name}。`. The space line appears only when the class enables its Agent space (`spaceEnabled`), with `{path}` the class's absolute directory. The three tools return model-visible text too; see the generated [tool catalog](../../docs/tool-catalog.md).

##### cluster-agent-persona section

```markdown
【Agent 设定】
你是 {name}，{prompt}
你正在工作流中，请使用 cluster_view 来确保你的信息流向正确；如果你是最后一环，那么你的 view 将为空。
你的身份空间是【{path}】，请先浏览身份空间。
```

#### Token effect

Fixed plus data-dependent: the workflow sentence is fixed per request; `{name}`/`{prompt}`/the optional space line scale with the class definition.

#### KV Cache effect

Prefix-stable: the section registers once at plugin load and its rendered text changes only when the class's `agent.json` name, prompt, or space toggle changes.

## Known Limitations and Deferred Work

- **Flow is open by default** — with no canvas edges, `allowFlow` permits every route; deny-by-default applies only once edges exist.
- **The graph is browser-synced** — nodes and edges are pushed from the canvas via `syncGraph` and persisted as `graph.json`; the browser must have synced at least once.
