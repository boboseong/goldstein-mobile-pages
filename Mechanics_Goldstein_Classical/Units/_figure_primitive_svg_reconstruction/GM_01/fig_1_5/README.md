# Fig. 1.5 Primitive SVG Reconstruction

Produced while applying the `figure-primitive-svg-reconstruction` skill.

Final metric:

```text
F1 = 0.9609248056064702
RMSE = 29.97156027192595
precision = 0.950197628458498
recall = 0.9718969555035128
```

Status: `completed`.

The reconstruction uses semantic SVG primitives only: axes, guide lines, curve paths, an outline path for the rolling disk, vector arrowheads, text labels, and small primitive glyph strokes for the `phi` label. It does not embed the reference PNG or pixel-vectorize the crop.
