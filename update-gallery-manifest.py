#!/usr/bin/env python3
"""Regenerates gallery-manifest.json after adding/removing photos.
Run:  python3 update-gallery-manifest.py   (or just ask opencode to push photos)
"""
import json, os

GALLERIES = [
    ("Rooftop", "assets/rooftop"),
    ("Calcio", "assets/calcio"),
    ("Wheat", "assets/wheat"),
    ("Travelin", "assets/travelin"),
    ("Night Tide", "assets/night tide"),
    ("Barbacue", "assets/barbacue"),
    ("Poolside", "assets/poolside"),
]
EXTS = (".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif")

manifest = {}
for title, folder in GALLERIES:
    files = sorted(
        f for f in os.listdir(folder)
        if f.lower().endswith(EXTS) and os.path.isfile(os.path.join(folder, f))
    )
    manifest[folder] = files

with open("gallery-manifest.json", "w") as f:
    json.dump(manifest, f, indent=2)
print("gallery-manifest.json updated")
