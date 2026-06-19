# Fig. 5.13 Primitive SVG Reconstruction

Source figure: Goldstein Classical Mechanics, Fig. 5.13.

Crop: `source_reference_760x265.png` derived from the source PDF page figure region. The standard evaluation reference is the same crop reduced to `190 x 66` for the metric pass.

The final SVG is a semantic primitive reconstruction of the Earth-axis/orbit geometry diagram: orbit ellipse, coordinate axes, inclined axis, angle arcs, dot marker, and labels. It does not embed the reference PNG, does not use `data:image`, and does not use pixel-rectangle vectorization.

Final metrics on a `190 x 66` render:

- F1 = 0.9903620088331424
- RMSE = 13.60605163698585
- precision = 0.9930232558139535
- recall = 0.9877149877149877
