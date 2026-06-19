# Fig. 2.3a Primitive SVG Reconstruction

Produced while applying the `figure-primitive-svg-reconstruction` skill.

Final metric:

```text
F1 = 0.9649535514800142
RMSE = 29.67909928061374
precision = 0.9547094188376753
recall = 0.9754199098730029
```

Status: `completed`.

The reference crop is taken from the figure area only, with horizontal surrounding white margin and without caption/body text. The reconstruction uses semantic SVG primitives only: axes, ellipses, surface side curves, filled band primitives, hatch/guide strokes, and math labels. It does not embed the reference PNG or pixel-vectorize the crop.
