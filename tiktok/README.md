# TikTok videos (animated, faceless)

Two pages: Lineman tips (yellow) and Teen future tips (green).
Each video is one HTML file that draws every frame; render.js turns it into an MP4.

Make a video (Chromium + Playwright + ffmpeg needed):
1. mkdir frames
2. node render.js lineman-01-first-3-steps frames   (file name without .html)
3. ffmpeg -framerate 30 -i frames/f%05d.jpg -c:v libx264 -pix_fmt yuv420p -crf 20 out.mp4

Made so far:
- lineman-01-first-3-steps: short step, hips under you, roll the hips (pancake)
- teen-01-first-paycheck: pay yourself first, save 20%, 3 rules

Rules: original art only, label realistic AI content on TikTok, finance page is
education only ("not financial advice"), no promises of money.
