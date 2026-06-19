# Fig. 5.3 Primitive SVG Reconstruction

Source figure: Goldstein Classical Mechanics, Fig. 5.3.

Crop: `tmp/figure_reconstruction_pages/GM_05_fig5_3/fig5_3_reference.png` (`860 x 405`, PDF page 3 crop `860x405+650+360`).

The final SVG is a semantic primitive reconstruction: one curved body outline path, two reference axes, three vector lines with polygon arrowheads, point markers, and text labels. It does not embed the reference PNG, does not use `data:image`, and does not use pixel-rectangle vectorization.

Final metrics on a `110 x 52` render:

- F1 = 0.9733867101075044
- RMSE = 29.42332099172047
- precision = 0.9586614173228346
- recall = 0.9885714285714285
