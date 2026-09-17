# Results

Run `npm run benchmark` to regenerate `data/benchmarks/reference.json`. The file contains every per-seed metric and a protocol summary.

The four displayed metrics are implementation metrics: **recovery** combines final cell count, target coverage and centroid stability; **coverage** is the fraction of target slots with a living cell within a fixed radius; **energy** and **stress** are dimensionless model state variables.

The benchmark is useful for regression testing and comparing declared software mechanisms. It is not evidence of regenerative capacity in living tissue and should not be interpreted as biological validation.
