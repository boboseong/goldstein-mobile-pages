# Figure 3.2 Primitive SVG Reconstruction

Source figure: FIGURE 3.2, area swept out by the radius vector in a time dt.

The SVG is an honest primitive reconstruction using axes, two radius lines, an
orbit curve, a small angle arc, and math text labels. It does not embed the
reference PNG or use pixel-rectangle vectorization.

Reference crop:

- Derived from the diagram-only crop of the source PDF page.
- Final scoring canvas: 150x143.

Final metrics:

- F1 = 0.978828937817566
- RMSE = 23.82235732719809
- precision = 0.9961832061068703
- recall = 0.9620689655172414

Acceptance target: F1 >= 0.95 and RMSE <= 30.
