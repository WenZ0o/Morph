# Architecture

MORPH-1 separates simulation state from display state.

```text
SeededRandom
    ↓
Environment fields ──→ Cell state
    ↓                    ↓
Interventions ───────→ Simulation step
                         ↓
              Metrics / run record
                         ↓
              Renderer + inspector
```

`src/core/` contains deterministic model code and has no DOM dependency. `src/experiments/` declares the fixed interventions. `src/ui/` renders the current state and exposes controls. The benchmark imports only the core and experiment layers.
