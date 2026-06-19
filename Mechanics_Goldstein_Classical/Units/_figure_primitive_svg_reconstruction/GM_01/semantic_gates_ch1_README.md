# Chapter 1 Semantic Gates

This directory now has a semantic validation layer for the Chapter 1 primitive
SVG reconstructions.

Run it from the repository root:

```powershell
python scripts\validate_figure_semantic_gates.py --config Mechanics_Goldstein_Classical\Units\_figure_primitive_svg_reconstruction\GM_01\semantic_gates_ch1.json
```

To write a CSV report without failing the shell command:

```powershell
python scripts\validate_figure_semantic_gates.py --no-fail --write-csv Mechanics_Goldstein_Classical\Units\_figure_primitive_svg_reconstruction\GM_01\semantic_gate_results.csv
```

## Gate Scope

The pixel metrics still check global visual similarity. These semantic gates
check relationships that global F1/RMSE can miss:

- `fig_1_1`: shared origin; `r_i` and `r_j` arrow tips must land on their particle dots, and `R` must land on the center-of-mass point.
- `fig_1_2`: `r_i`, `r_j`, and `r_ij` must terminate on real particle dots, not blank space.
- `fig_1_3`: triangle closure `r_i = R + r'_i` with endpoints on particle and center-of-mass dots.
- `fig_1_4`: double-pendulum rod chain, vertical references, bob/joint attachment, and angle-arc attachment.
- `fig_1_5`: axes, vertical disk outline, phi construction triangle, theta construction, and velocity/tangent support.
- `fig_1_6`: radial-vector triangle closure and delta-theta arc attachment to the two radial directions.
- `fig_1_7`: Atwood pulley tangency, mass attachment, mass ordering, and dimension-arrow anchoring.

The intended final gate is:

```text
pixel_score_pass && semantic_gate_pass
```

For exploratory auditing, use `--no-fail`; for production acceptance, omit it.
