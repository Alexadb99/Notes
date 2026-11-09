# Silverback notes (app was first called IronPack)

## In progress
- Published v24 (index.html). Waiting for feedback.

## Next
- Ideas to add: progress photos, friends ("troop") to fist-bump, custom workouts, kg everywhere, sounds.
- Turning it into a real phone app would need a builder or app store account (ask before adding anything paid).

## Log (newest first)
- 2026-11-09: Achievements rebuilt as tiered challenge coins (COINS tab replaces the map). 10 tracks x 5 tiers
  (bronze, gunmetal, silver, brass, gold; +50/100/150/250/400 XP): plate clubs for bench/squat/deadlift/OHP
  (heaviest weight lifted; lb 135/225/315..., kg 60/100/140...), sessions, week streak, PRs, ghost wins, recovery
  days, total lifted. Auto-awarded (no claiming), never taken away (S.coins). Plate coins pop mid-workout.
  Camp shows the 2 closest coins with progress; exercise cards show "Next coin" when within 10%.
  Coin face shows engraved number + unit. Quote banner jungle lines replaced.
- 2026-11-08: Header slogan replaced: "NOBODY'S COMING." (rough stencil) / "GET TO WORK." (solid yellow block,
  no graffiti or drips) / "Show up. Do the work. Leave stronger." Old "Life's my jungle" line removed.
- 2026-11-08: Background is now an underground city gym: board-formed concrete, water stains, cracks, faded
  "NO DAYS OFF" paint, overhead pipes, caged work lights with light cones, chain-link section, dumbbell rack,
  rubber floor with chalk. Achievements (user: map icons looked childish) are now realistic engraved challenge
  coins (bronze/gunmetal/silver/brass, gold for Summit; iron "CLASSIFIED" when locked) on a survey-style map
  with dense contours, elevations, forest stipple, fold creases. Claim = coin flip + glint.
- 2026-11-08: Rewards reworked (user: no graffiti or brick walls in a jungle). Achievements are now objectives on a
  military field map (MAP tab): dark survey sheet with grid + coordinates, contour lines, river, dashed patrol
  route. 12 objectives with drawn icons (Base Camp, Thunder Rock, Still Lagoon, Ember Pit, Sunrise Ridge, Moon Cave,
  Ghost Swamp, Long River, Boulder Field, Vine Bridge, Troop Grounds, Silverback Summit). Unknown = dark shape +
  how to reach it; earned = yellow outline + "CLAIM IT" pill; claim reveals the icon and plants a flag.
  Same ids/rules as before, so earlier "sprayed" badges count as claimed. All graffiti/brick code removed.
  Background (user: "not Halloween", wants military/rustic metal): weathered olive-drab steel plates, weld seams,
  rivets, chipped paint, rust streaks, faded stencils (SBK-07, NO STEP...), star, worn hazard stripe.
  Eyes in the dark + red glow + claw marks removed (and their switch).
- 2026-11-08: Background made hostile (user: "too friendly"): near-black, drained greens, dark trunks,
  saw-edged leaves with bronze edges, thorny vines, claw marks, faint red fire glow at the bottom, heavy grit
  and vignette. Moonlight beams, mist and fireflies removed. New "Eyes in the dark": angry glowing eye pairs
  that appear, blink and vanish (class .lurker; kept out of the top area). Effects switch renamed to match.
- 2026-11-08: Longer workouts now add more different exercises (up to 9), always 3 sets; no filler sets.
  Extra main-lift sets only with a reason (strength goal at 45+ min, or Seasoned), shown as "Why N sets".
  8 rotating extras per session type. Experience now matters: New = how-to auto-opens on first-time
  exercises + max 5 exercises; Seasoned = half-size weight jumps + extra main-lift set. Goal and Experience
  each show a one-line "what this changes" in the YOU tab.
- 2026-11-08: Removed all sound effects (engine, calls, Sounds switch) and the "Make it yours" card (accent color,
  fur color, slogan picker). Look is fixed: yellow accent, silver fur, "Life's my jungle. I conquer it."
  Old saved choices are ignored and dropped on next save. YOU tab: profile, Training, Effects, Backup.
- 2026-11-08: Added, then removed (user asked) a "Preview max rank" switch. Load step clears any leftover setting.
- 2026-11-08: Game-style rank gorillas. 8 ranks (Rookie 0, Climber 300, Brawler 900, Blackback 1800,
  Silverback 3000, Warlord 5000, Apex 8000, Jungle King 12000 XP), each with divisions I/II/III, its own
  hex badge color and gorilla gear (tuft, bandana, fight tape + scar, war stripes, gold hoop, spiked band +
  red paint, leaf crown + ice eyes, gold crown + rays). Your mascot wears your rank's gear. Top-bar chip shows
  badge + division and opens the rank ladder (locked ranks = silhouettes, next rank's look teased).
  Rank up = full-screen reveal (old badge flips out, new one slams in, roar). Division up = stamp on finish screen.
  Also restored the missing "fadein" animation (the PR detail line had been invisible).
- 2026-11-08: User saw blurry text on iPhone. Removed every blur (spray-in animation, steam, tape) and soft
  text glows; replaced with hard offset shadows. Steam is now speckled spray-paint dots (iPhone Safari ignores
  blur on SVG parts, which made solid circles). Glow pulses became small scale/opacity pulses. Badges,
  background and wall now render at full 3x phone sharpness. Rule going forward: clear and rough, never blurry.
- 2026-11-08: Fixed slogan "I conquer it." being cut off with a dark box: the spray-in animation ended with a
  tight clip box that trimmed the leaning letters, glow and drips. Clip box now ends larger than the text
  (also fixes the logo drips). Steam puffs softened (more blur, lower opacity).
- 2026-11-08: Added "How long do you have?" picker (20/30/45/60/75/90+ min) on Train and Camp; saved in settings.
  Workouts are built to fit the time using the rest setting (main lift gets more sets on longer days).
  Main lifts stay fixed for progress; extra exercises rotate every session (new extras + swaps + how-tos added).
  Recovery now picks 1 item each from cardio / stretching / loosen-up (+ light core on 60+ min), never repeating
  last time's picks; swaps stay within the same part and length. Warm-up instructions shown at session start.
- 2026-11-08: Fixed messy new-badge card on the wall (it shared the "ready" class with the readiness buttons,
  so it got their 3-column layout). Renamed to "fresh"; label + dashed button replaced by one yellow pill
  button "SPRAY IT ON" (spray-can icon). Dragging across the outline still works too.
- 2026-11-08: Big pass on what makes Silverback different.
  Graffiti badges now drawn on canvas as real pieces (3D block, white cut line, outline, color fade, shine,
  drips from real letter bottoms, overspray). Locked = faint chalk outline; earned = glowing outline you
  drag across to spray on (hiss + rattle sounds, "Spray it for me" button). Wall tab shows a dot when one is waiting.
  Ghost race: two lanes, set for set, scored in strength points (more weight or reps = more points), says ahead/behind.
  Weights: no assumed numbers. First time = empty boxes + target rep range for the goal. Returning = based on last
  time (step up weight, add a rep, or pick a weight that keeps the effort when reps overshot the goal range).
  Coach notes appear only when something is off (reps out of range, reps crash, big jump, too many sets).
  Exercise swaps (3-4 per exercise, small dropdown) + "How to" steps for less obvious moves and all recovery items.
  Gorilla no longer reacts to taps; idle animation kept. Explanations added for XP, embers, max, ghost.
- 2026-11-08: Readability pass. Rough "Rubik Dirt" font now only on big headlines (logo, slogan, card titles,
  big numbers); buttons, tabs, numbers, inputs, toasts use clean Rubik (same shapes). Typewriter labels bigger,
  grey text brighter, less speckle on cards. Removed "DONE" stamp that covered reps; fixed ghost icon overlap.
- 2026-11-08: Gorilla mouth now flat and stern. Compared with Liftoff (global leaderboards, Wood-to-Olympian
  ranks, per-muscle ranks, social feed, 3-day streak). Overlap: XP ranks, streaks, badges. Proposed a signature
  "Conquer the Jungle" territory map (muscle groups = jungle areas you clear; neglected ones regrow). Waiting on yes/no.
- 2026-11-08: User said the hooded version looked happy. Restored the very first gorilla face exactly
  (silver head, dark face, yellow eyes). Hood removed; setting renamed back to "Fur color", Camo removed.
  Kept the animations (steam snort, head shake, red-eye roar with fangs). Original mouth has a slight
  upward curve; offered to make it a stern flat line if it still reads as happy.
- 2026-11-08: Hood was too big for the face. Thinned the hood edges, made the face opening ~30% bigger,
  moved the face up and enlarged it so the gorilla fills the hood.
- 2026-11-08: User disliked the full-body gorilla. Back to face only, now inside a shadowed hoodie hood
  (hood color setting replaces fur color; drawstrings use the accent color). Moves: steam snort, head shake, roar
  with fangs + red eyes (chest beat removed). Added first-run setup: name + units, enter PRs (or skip), summary.
  PRs feed the chalkboard, starting weights (~85% of max) and PR detection. Edit PRs later in YOU > Training.
  Entering PRs clears the example lifts; skipping keeps them. Reset everything reopens setup.
- 2026-11-08: Animated gorilla (bust with arms): snorts steam twice, bull-style head shake, red eyes,
  chest beat with open mouth. Moves on its own every few seconds; tap it for full rage. Also plays on PR screen.
  Added YOU tab: profile (name, @username, bodyweight, goal, experience, stats), look (accent color, fur color,
  slogan presets or custom), training (lb/kg, weekly target, rest time, auto rest, hype level),
  effects (sounds off by default, gorilla moves, shake, splatter, fireflies), data (copy backup, remove examples, reset).
- 2026-11-08: Switched wolf to gorilla. Renamed app Silverback. Slogan "Life's my jungle. I conquer it."
  Night-jungle background (leaves, vines, mist, fireflies), badge wall is now overgrown temple stones.
  Ranks: Rookie, Climber, Brawler, Blackback, Silverback, Apex. PR screen says "Beat your chest" with a double shake.
  Tabs: Camp, Train, Wall, Tools. Fixed a bug that hid the background behind the page color.
- 2026-11-08: Built first draft. Weekly streak + embers, readiness check-in, ghost race vs. last session,
  PR flash, spray-paint badge wall, plate math, rest timer, max finder. Example lifts loaded; "Start fresh" wipes them.
  Data saves in the browser only.
