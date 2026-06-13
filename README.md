# D&D Character Gallery

A lightweight static webapp for browsing pre-built D&D characters. It is designed to work directly on GitHub Pages with no build step.

## Edit characters

Character data lives in `scripts/characters.js`. Each character supports:

- `id`: URL-safe identifier used by `character.html?id=...`
- `name`
- `race`
- `className`
- `image`: path to the character image
- `tagline`
- `description`

Put real character art in `assets/characters/`, then update the `image` value for each entry.

## Preview locally

Run this from the project folder:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, open Settings > Pages.
3. Set Source to "Deploy from a branch".
4. Choose the branch you want to publish, usually `main`.
5. Choose `/ (root)` as the folder.
6. Save, then use the Pages URL GitHub provides.
