# RELIQUARY — Global Heist Files

A browser-based detective game in the tradition of *Where in the World Is Carmen Sandiego?* — chase relic thieves across the globe, solving geography, history, and — in Catholic mode — saint trivia.

**Play:** open `index.html` directly, or serve the folder on any static HTTP server:

```bash
python3 -m http.server 8765
# → http://localhost:8765/
```

## Features

- **Two modes**: *Sacred Relics* (Catholic saint lore) and *World Heritage* (general history/geography).
- **55 cities** across every continent, with mode-specific hints and witnesses.
- **10 crooks + a ringleader** — the Patriarch only becomes a target once his lieutenants are in custody.
- **Obscure-synonym witness clues** (no Ctrl-F shortcut to the dossier).
- **Indiana-Jones-style flight map** with Natural Earth continent outlines, animated route, and engine/brake audio.
- **Keystone-Cops cutscenes** — silent-film aesthetic with silhouette chase, pile-on, jail cell, or thief-laughing depending on outcome.
- **In-browser state persistence** — close the tab mid-case and resume where you left off.
- **Case- and capture-tracking** across a campaign; capture all ten lieutenants, then go after the Patriarch for the final ring-busted finale.

## Credits

Built with Claude Code. Continent outlines from [world-atlas@2](https://github.com/topojson/world-atlas) (Natural Earth 110m, MIT). No frameworks or build step.
