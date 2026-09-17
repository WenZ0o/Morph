# Experiments

The reference protocol uses a 250-cycle warm-up, one declared intervention, and measurement at cycle 900. Six seeds are used by the benchmark script.

- **M-01 Baseline:** no intervention.
- **M-02 Incision:** removes a left-side band of cells.
- **M-03 Signal loss:** morphogen A is set to zero.
- **M-04 Starvation:** nutrient gain is reduced.
- **M-05 Polarity flip:** A/B values are swapped.
- **M-06 Random policy:** positional repair guidance is mostly removed and replaced with stochastic movement.
- **M-07 Signal noise:** local A/B values receive seeded noise.
- **M-08 Split:** a central vertical tissue band is removed.

These are software perturbations, not biological experimental protocols.
