# Fig. 4.15 Primitive SVG Reconstruction

Source figure: Goldstein Classical Mechanics, Fig. 4.15.

Crop: `tmp/figure_reconstruction_pages/GM_04_fig4_15/fig4_15_reference.png` (`1120 x 320`, PDF page 5 crop `1120x320+380+1640`).

This cyclone pattern is reconstructed with semantic SVG primitives: closed contour paths, directional arrows, and text labels. It does not embed the reference PNG, trace pixel rectangles, or preserve the earlier contour-fill candidate as the final output.

Final metrics on a `140 x 40` render:

- F1 = 0.9688259386600551
- RMSE = 18.69230647695921
- precision = 0.9882903981264637
- recall = 0.9501133786848073
- status = completed
