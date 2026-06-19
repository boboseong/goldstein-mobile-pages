# Fig. 2.3b Primitive SVG Reconstruction

Produced while applying the `figure-primitive-svg-reconstruction` skill.

Final metric:

```text
F1 = 0.9559440146028554
RMSE = 20.51838989807251
precision = 0.9534368070953437
recall = 0.9584644430459408
```

Status: `completed`.

The reconstruction uses semantic SVG primitives only: coordinate axes, tick marks, one catenary path, endpoint dots, and math labels. It does not embed the reference PNG or pixel-vectorize the crop.
