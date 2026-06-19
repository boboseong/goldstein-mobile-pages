# Fig. 2.1 Primitive SVG Reconstruction

Produced while applying the `figure-primitive-svg-reconstruction` skill.

Final metric:

```text
F1 = 0.9651978596640333
RMSE = 29.727622708223087
precision = 0.9712879409351928
recall = 0.9591836734693877
```

Status: `completed`.

The reference crop is taken from the figure area only, with surrounding white margin and without caption/body text. The reconstruction uses semantic SVG primitives only: coordinate axes, three path primitives for the actual and neighboring configuration-space paths, endpoint dots, and math labels. It does not embed the reference PNG or pixel-vectorize the crop.
