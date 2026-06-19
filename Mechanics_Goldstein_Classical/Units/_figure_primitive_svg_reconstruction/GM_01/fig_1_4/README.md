# Fig. 1.4 Primitive SVG Reconstruction

Produced while applying the `figure-primitive-svg-reconstruction` skill.

Final metric:

```text
F1 = 0.9763396407234469
RMSE = 24.28265544695546
precision = 0.9827242524916944
recall = 0.9700374531835206
```

Status: `completed`.

The reconstruction uses semantic SVG primitives only: dashed reference lines, two rigid rods, point masses, simple arc paths with polygon arrowheads, and primitive glyph strokes for the angle labels. It does not embed the reference PNG or pixel-vectorize the crop.
