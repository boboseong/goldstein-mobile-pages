# Goldstein Mobile Reader

Static GitHub Pages reader for selected Korean translation and TTS script files from
`Mechanics_Goldstein_Classical`.

Included scope:

- GM 1.0 Survey of the Elementary Principles
- GM 1.1 Mechanics of a Particle
- GM 1.2 Mechanics of a System of Particles
- GM 1.3 Constraints

PDF files are intentionally excluded. The generated site contains only the selected
translation Markdown and Korean TTS script Markdown content needed for mobile reading.

Build the embedded data file from the local source tree:

```powershell
python scripts/build_site.py
```
