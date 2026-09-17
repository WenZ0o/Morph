# Methods

Each cell stores position, velocity, energy, stress, neighbour count, local signal values and a target-memory coordinate. At each cycle the model: computes pairwise local interactions; samples engineered A/B, center and nutrient fields; updates energy and stress; applies positional repair or the random-policy control; integrates bounded velocity; and, when tissue is missing, periodically assigns a missing target slot to a daughter cell from a nearby sufficiently energetic parent.

The target-memory term is an explicit engineering scaffold. It means the model is not emergent morphogenesis in the strong biological sense. The experiments ask how this declared mechanism responds to perturbation.

All pseudorandom values come from a seedable xorshift generator. A repeated seed and intervention schedule therefore reproduces the same numerical run on the same implementation.
