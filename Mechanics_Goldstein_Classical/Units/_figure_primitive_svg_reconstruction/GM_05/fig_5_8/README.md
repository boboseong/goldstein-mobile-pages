# Fig. 5.8 Primitive SVG Reconstruction

Source figure: Goldstein Classical Mechanics, Fig. 5.8.

Crop: `source_reference_760x300.png` derived from the source PDF page figure region. The standard evaluation reference is the same crop reduced to `120 x 47` for the metric pass.

The final SVG is a semantic primitive reconstruction of the f(u) turning-angle graph: axes, tick marks, arrowhead, cubic-like curve, and math labels. It does not embed the reference PNG, does not use `data:image`, and does not use pixel-rectangle vectorization.

Final metrics on a `120 x 47` render:

- F1 = 0.9680373261239262
- RMSE = 13.36501333932307
- precision = 0.9652173913043478
- recall = 0.9708737864077670
