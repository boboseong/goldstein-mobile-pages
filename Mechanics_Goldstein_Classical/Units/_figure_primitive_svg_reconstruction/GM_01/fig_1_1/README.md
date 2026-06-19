# Fig. 1.1 Primitive SVG Reconstruction

Produced with the `figure-primitive-svg-reconstruction` skill.

Files:

- `fig_1_1_reference.png`: cropped reference diagram.
- `fig_1_1.svg`: semantic primitive SVG.
- `fig_1_1.png`: ImageMagick render of the SVG.
- `fig_1_1_overlay.png`: red/blue/black mask-difference overlay.
- `fig_1_1_reference_render_overlay_sheet.png`: reference, render, and overlay in one image.
- `metrics.csv`: F1/RMSE evaluation.

Final metric:

```text
F1 = 0.9525550553522354
RMSE = 29.467784226109753
precision = 0.9575757575757575
recall = 0.9475867269984917
```

The SVG uses semantic primitives only: axes, vector lines, polygon arrowheads,
particle circles, labels, and a center-of-mass leader line.
