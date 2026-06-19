# Fig. 5.2 Primitive SVG Reconstruction

Source figure: Goldstein Classical Mechanics, Fig. 5.2.

Crop: `tmp/figure_reconstruction_pages/GM_05_fig5_2/fig5_2_reference.png` (`670 x 430`, PDF page 2 crop `670x430+610+1550`).

The final SVG is a semantic primitive reconstruction: one curved body outline path, axis/vector lines, polygon arrowheads, dashed construction line, origin dot, and math text labels. It does not embed the reference PNG, does not use `data:image`, and does not use pixel-rectangle vectorization.

Final metrics on a `110 x 71` render:

- F1 = 0.9782583181738160
- RMSE = 28.96990358458903
- precision = 0.9818594104308390
- recall = 0.9746835443037974
