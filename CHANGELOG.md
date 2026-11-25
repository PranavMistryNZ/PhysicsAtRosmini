# Physics@Rosmini · version history

`main` is the live site. Each finished version is also saved as its own
branch (`version-1.0`, `version-1.1`, …) that never changes afterwards.
To see or restore an older version, ask Claude, or pick the branch from the
branch menu on GitHub.

## v1.27 · 26 November 2026 (Home, My progress and Teacher pages use the full width)
- The home page, My progress and Teacher pages now fill the whole width of a computer screen, like the labs, instead of stopping at 1280 px.

## v1.26 · 26 November 2026 (One progress page for the whole website)
- New **My progress** page (progress.html), linked from the home page and from a My progress button beside Home in every lab. It shows every topic: self-ratings, the 3 weakest statements to revise next, quiz bests, the last self-marked exam set and when each lab was last used.
- One progress code now carries the whole website to another device. Older single-lab codes (W13., E13., M12. and so on) still load.
- Send to my teacher: one email (Gmail or the email app) with the report and the code. The student's name is needed first.
- New **Teacher** page (teacher.html): paste students' emails or codes to build a class table (students × topics), click a student for their full report, filter by year level, and download a CSV. Everything stays in the teacher's browser.
- Removed the separate "My progress" tabs from Year 13 Waves (0.7) and Electrical (0.6), and from the five Year 12 labs. Key Terms moves up one number in Waves and Electrical. The "Save or share my progress" buttons now open the new page.
- Year 13 Mechanics and Modern Physics course-map ratings now count towards My progress too.
- The Dark/Light slider on every page is now a sun and moon switch (sun on the left for light, moon on the right for dark).

## v1.25 · 26 November 2026 (Labs use the full width of the screen)
- Every Year 12 and Year 13 lab now fills the whole width of a computer screen, instead of stopping at 1280 px (Year 12) or 1400 px (Year 13). Phones and tablets are unchanged.

## v1.24 · 25 November 2026 (Year 13 Electrical: circuit and phasor diagrams in 4.4 LCR Resonance)
- 4.4 LCR Resonance has a switch between three views of the same circuit, all driven by the existing R, L, C and f sliders: the resonance curve (unchanged), circuit and phasor diagrams, and a 3D phasor spiral.
- Circuit and phasor diagrams: a series circuit showing the voltage across each component at this instant (they add to the supply voltage) and its rms value; diagram 1 with each voltage drawn from the origin; diagram 2 combining V_L and V_C first, then completing the rectangle with V_R to give V_s and φ; an impedance triangle and the worked numbers. Still by default, with a "Rotate the phasors" button.

## v1.23 · 25 November 2026 (Phone layout for every Year 12 and Year 13 lab)
- On phones (screens up to 700 px wide) the topic buttons stay in a vertical column on the left, that topic's tabs stack in a column beside them, and the content runs full width underneath. Tab labels wrap instead of making the tab row scroll sideways. Wider screens are unchanged.
- Year 13 Electrical, Mechanics and Modern: the topic buttons no longer squash into thin columns on phones.

## v1.22 · 19 November 2026 (Year 13 Mechanics: 3D phasor spiral in the SHM lab, and a better drawing coach)
- 4.2 SHM Lab has a new 3D phasor spiral view beside the reference circle and graphs, with mass, k and A carried across. The reference circle is stretched along a time axis into a spiral. Circle, graph and 3D views (snapping exactly into place), velocity and acceleration phasors, and a 3D spring and mass fixed beside the graph with ±A guide lines and a grid. Drag the phasor tip in circle view to set the phase.
- 4.9 Damping Lab drawing coach: choose light or critical damping, and how the oscillator starts (released from +A, pushed from equilibrium, or, for critical damping, pushed towards equilibrium so it overshoots once). Step 3 uses given data (amplitude after a number of periods) to draw the envelope; light damping ends with a "check your sketch" step, critical damping with a comparison of damping levels.

## v1.21 · 18 November 2026 (Year 12 Non-linear data: Graph practice lab, and tab styling)
- Year 12 Non-linear data: a Graph practice lab built from the real class data sets (distance and time, pendulum, spring, power and current, wave speed, Ohm's law). Students choose the transform, read the gradient, find the unknown, and can open the worked steps.
- Quick check tabs (e.g. 3.9) and the Mixed challenge tab now use the same tab style as the rest.

## v1.20 · 18 November 2026 (Year 12 Non-linear data: three experiment labs, Key Terms and My progress)
- Year 12 Non-linear data, three new simulations: Run the experiment (four experiments with readings, outlier exclusion, a choice of transform, a line of best fit and r²), a Shape matcher, and a Range trap showing how a short range can look straight.
- Key Terms tab with 14 terms in two groups, and a filter.
- My progress tab for the practical page: save, load and share your self-ratings and scores as a code.
- The Mixed challenge tab now uses the same tab style as the others.

## v1.19 · 18 November 2026 (Year 12 Nuclear physics: four interactive labs, Key Terms and My progress)
- Year 12 Nuclear physics, four new simulations: an isotope builder (drag on a chart of nuclides), a half-life graph reader, a binding energy lab for fusion and fission, and a power station lab where each part can be clicked.
- Key Terms tab with 25 terms in three groups, and a filter.
- My progress tab: save, load and share your self-ratings, scores and exam notes as a code, the same as the other Year 12 pages.
- The existing gold foil, radiation, decay equation, half-life, chain reaction and clinic labs are unchanged.

## v1.18 · 18 November 2026 (Year 12 Waves: four draggable labs, Key Terms and My progress)
- Year 12 Waves, four new simulations: wavefront refraction (drag the incoming ray to change the angle; slider for shallow-water speed), pulses at fixed ends, free ends and boundaries between ropes (click to send, drag the boundary), standing waves on a string with a draggable length and a travelling-waves view, and a dispersion prism (drag the white beam).
- Key Terms tab with 50 terms in three groups, and a filter.
- My progress tab: save, load and share your self-ratings, scores and exam notes as a code, the same as the other Year 12 pages.
- The existing wave, mirror and lens labs are unchanged.

## v1.17 · 18 November 2026 (Year 12 Electricity: six simulations, Key Terms and My progress)
- Year 12 Electricity, six new simulations: field lines (drag a test charge through the field), Millikan floating charge (drag the top plate and the drop), V–I graphs for a resistor, filament lamp and diode, voltage divider (drag the share bar, add a load), fields around currents (drag the compass, reverse the current) and a loop moving through a field.
- The new labs can be driven by clicking and dragging on the canvas as well as with the sliders.
- Key Terms tab with 50 terms in four groups, and a filter.
- My progress tab: save, load and share your self-ratings and scores as a code, the same as Year 12 Mechanics.

## v1.16 · 17 November 2026 (Year 12 Mechanics: five new simulations and a Key Terms tab)
- Year 12 Mechanics, five new simulations: Newton's 2nd law (push a box, net force, moving grid), Ramp
  (components of weight on a slope), Stopping distance (thinking and braking distance as areas under a
  v-t graph), Spring launcher (elastic potential energy) and Work & power (motor lifting a load, efficiency).
- The new labs can be driven by clicking and dragging on the canvas as well as with the sliders.
- New Key Terms tab in Summary & course map: 68 definitions in six groups, with a filter box.
- Lift lab: the reading on the scales is larger and shows its unit.
- Year 13 Waves 2.2: fixed the node/antinode readout that kept repeating.

## v1.15 · 17 November 2026 (Year 13 Mechanics: SHM projection, resonance and damping)
- Year 13 Mechanics 4.2 SHM: the displacement curve is now built from the motion itself, with a projection line,
  a reference circle, live x, v and a graphs, aligned energy-time graphs and an energy-position diagram.
  The moving mass and bob carry a yellow position dot, a fading trail and a direction arrow.
- 4.8 Resonance Lab reworked: click or drag the resonance curve, a damping slider, a motor-driven support and
  light/heavy damping comparison curves.
- New 4.9 Damping Lab: light, heavy, critical and over-damping, with an envelope toggle, period marks, a
  comparison view and a six-step drawing coach.
- New 4.1.10 panel: definitions of damping types and how to draw them. Key Terms gains light damping,
  heavy damping, critical damping, over-damping and envelope (84 terms).

## v1.14 · 17 November 2026 (Year 13 Mechanics: six new simulations; key terms on every Year 13 page)
- Year 13 Mechanics, six new simulations: 1.6 Centre of Mass (drag the masses), 2.8 Conical
  Pendulum, 2.9 Rises & Dips, 3.8 Roundabout Lab (L = mvr), 4.7 Spring Combinations and
  4.8 Resonance Lab.
- Year 13 Mechanics, new topic panels: finding the centre of mass; explosions and recoil; the
  conical pendulum; rises and dips; linear and rotational quantities side by side; angular
  momentum of an object moving in a straight line; spring combinations; forced oscillations and
  resonance; phasors.
- New Key Terms tab, with a filter box, on all four Year 13 pages: Mechanics (79 terms), Waves (63),
  Electrical (85) and Modern Physics (52).
- Year 13 Waves, new panels: phase in degrees, diffraction and gap size, nodal and antinodal
  lines, what changes an interference pattern, highest order and overlapping spectra, square gaps
  and woven fabric, wave speed on strings and in pipes, and six Doppler extensions (apparent
  wavelength, observer to the side, circular motion, Doppler with beats, sonic boom, red shift).
- Year 13 Electrical, new panels: combination circuits, mutual inductance and instantaneous AC
  values.
- Year 13 Modern Physics, new panels: wave-particle duality, alpha, beta and gamma radiation, and
  average mass per nucleon; Brackett and Pfund series added. Also includes the 3D electron
  clouds, quarks and photocell lab updates uploaded on 16 November.

## v1.13 · 13 November 2026 (Year 12 Mechanics: livelier simulations)
- Collisions: trolleys with wheels that turn as they roll, a fading trail, a flash and sparks at
  impact, and one joined arrow once the trolleys latch together.
- Impulse: the impact replays in slow motion (tap the graph to replay), the cushion squashes and
  springs back, and the force-time graph fills in to scale as the impact plays.
- Circular motion: a fading trail behind the object, a car with wheels and headlights on a
  banked road, a shaded string bob, a satellite with solar panels, and a starfield around Earth.

## v1.12 · 12 November 2026 (Year 13 Electrical becomes a revision site first)
- 0.1 is now a revision Summary and loads first: eight cards covering AS91526 (DC circuits,
  capacitors, flux and Faraday, inductors, capacitor and inductor side by side, transformers,
  AC, LCR resonance). The course map and self-ratings sit underneath.
- Summary tools: cover and recall, a "Start here today" list of the weakest rated areas, and a
  printable summary (two A4 pages).
- 0.2 Exam Skills: CEO now covers explain questions, with four model explain answers.
- New 0.4 Answer Practice: build a CEO answer (four questions) and spot the mistake (twelve).
- New 0.5 Exam Set: a 40-minute timed set (one question per section) or single untimed
  questions, self-marked against Achieved, Merit and Excellence points (nine questions).
- New 0.6 My Progress: save or load progress with a code or file, and share results with any
  teacher by email. Nothing is stored on a server.
- Problems tabs: a write-first box and a tick list for each part of all 18 questions.

## v1.11 · 12 November 2026 (Year 13 Waves: save progress and share results with a teacher)
- New 0.7 My Progress tab: one report of the student's self-ratings, quiz best scores, answer
  practice and self-marked exam sets.
- Save or load progress: a progress code (or a small file) carries a student's progress to another
  device. No accounts; nothing is stored on a server.
- Share with a teacher: the student types their name and any teacher's email address, and the
  page opens a ready-written email in Gmail or their mail app for them to send. Works for any
  school. The site itself never sends or collects the name or address.
- Answer practice and exam-set results are now remembered on the device.

## v1.10 · 12 November 2026 (Year 13 Waves becomes a revision site first)
- 0.1 is now a revision Summary and is the first thing that loads: six cards covering the whole
  standard (key ideas, equations, a "say it like this" sentence, the common mistake, and links to
  the tabs that teach it). The course map and self-ratings sit underneath.
- Summary tools: "Cover and recall" hides the cards so students recall before revealing; a
  "Start here today" list shows their three weakest areas from the course-map ratings; "Print
  one-page summary" prints the six cards on one A4 sheet.
- 0.2 Exam Skills: CEO (Conceptualise, Execute, Outcomes) now covers explain questions as well as
  calculations, with four model explain answers (fringes, closed pipe, Doppler, beats).
- New 0.5 Answer Practice: build a CEO answer by sorting sentences into C, E, O or "leave out";
  spot the mistake in a student's answer; draw standing waves by placing nodes and antinodes.
- New 0.6 Exam Set: a 30-minute timed set (one question from each topic) or single untimed
  questions, self-marked against Achieved, Merit and Excellence points.
- Problems tabs: a box to write an answer before opening the worked answer, and a tick list to
  mark each part.

## v1.9 · 11 November 2026 (Year 13 Mechanics and Modern Physics labs; pages follow the ESA study guide)
- New Year 13 Mechanical Systems lab (AS91524), in ESA chapter order: 01 Translational motion
  (collision lab with momentum vectors and centre of mass), 02 Circular motion & gravity (vertical
  circle, banked curve and orbit labs), 03 Rotating systems (torque lab, angular momentum skater,
  rolling race), 04 Oscillating systems (SHM lab with reference circle and damping, period graphs
  to find k or g). Each section has an introduction, quick check, exam-style problems and
  applications; the course map, exam skills (from the 2023 and 2024 NZQA reports) and formula sheet
  match the other Year 13 labs.
- New Year 13 Modern Physics lab (AS91525): 01 The photoelectric effect and atomic energy levels
  (photoelectric lab with E_k–f graph, hydrogen energy level lab with spectrum), 02 Nuclear
  reactions (binding energy per nucleon curve, reaction energy calculator for fission, fusion and
  decay), with assessment skills for an internal standard.
- Year 13 Waves reordered to the ESA chapters: 01 Wave systems & interference (now starting with
  the wave foundations), 02 Standing waves & music, 03 Doppler. Saved course-map ratings are kept.
- Year 13 Electrical reordered to the ESA chapters: 01 Resistors in DC, 02 Capacitors in DC,
  03 Inductors in DC (flux and Faraday, inductors and transformers, with one combined quick check,
  problem set and applications tab), 04 AC circuits.
- Home page: Mechanical Systems and Modern Physics cards now open their labs; Year 13 cards are in
  study-guide order.

## v1.8 · 31 October 2026 (Year 13 Electrical lab, magnetism, inductors, transformers and AC)
- Pages now open in the same light or dark mode as the student's device, until they choose with
  the toggle (Year 13 Electrical and Waves; the home page and Year 12 Mechanics already did this).
- 0.2 Exam skills (Electrical and Waves): exam walkthrough videos and the exam preparation webinar.
- 2.2 parallel plates: the NCEA formula \(C = \varepsilon_{0}\varepsilon_{r}A/d\); 2.3 RC: a discharge current
  column and a tidier table and panel; the 33% and 67% marks stay on the graph.
- 3.2 Magnet and coil: drag the magnet or animate it at a set speed, with fixed axes and a voltmeter;
  a copper pipe eddy-current demo with F_mag and mg, eddy-current field loops and a zoomed view.
  3.3 combines the Φ against t and ε against t graphs.
- 4 Inductors: new 4.2 Coil Builder (turns, area, length and core, on fixed axes); the LR lab
  matches the RC lab; looped inductor symbols; questions on where and how energy is stored.
  4.4 switching off: clickable switch, proper lamp symbol, labelled currents, coloured charges and
  FAQs on why the field collapses quickly.
- 5.2 Transformer: a 3-D transformer with input source, output lamp and magnetic domains in the
  core, a separate flux graph, a tidier panel and a "Types of transformer" section with presets.
- 6.3 Phase: why current leads or lags, "V leads"/"i leads" labels on the moving peaks, separate
  voltage and current graphs each with its own phasor diagram, and a tidier panel.
- 6.4 LCR resonance: click or drag along the graphs to set f; tiles show each formula with its value;
  the phase angle reads "i leads V" or "i lags V"; an explanation of the resonance curve, cards for
  explanations exams often ask for, and a step-by-step "Adding phasors nose to tail" diagram
  (voltages or impedances, inductor-first or capacitor-first), with a reminder that V_R is always in
  phase with the current.

## v1.7 · 30 October 2026 (Year 13 Electrical lab, capacitor explanations and exam skills)
- 0.2 Exam skills: a four-step structure for "explain" questions, the CEO framework
  (Conceptualise, Execute, Outcomes) written for electrical systems, two CEO worked examples
  (battery with internal resistance; charging a capacitor), clickable examiner traps that jump to
  the right section, and a fuller significant figures and units list.
- 2.2 parallel plates: the graph is back to V against Q, titled "V = (1/C) Q (gradient = 1/C)",
  with the capacitance shown under the title. εr is now described as the relative permittivity
  (dielectric constant), with a note not to confuse it with relative permeability μr.
- 2.3 RC circuit: click A, B or C (open) on the switch; the capacitor keeps its charge when the
  switch moves or a slider changes, and the graph keeps its history and scrolls. Charges in every
  wire are coloured by potential and only move where current flows; bigger + and − marks on both
  plates. New table of charging and discharging values from 0 to 5τ, with the current row lit.
  New "Zoom in: why does the current stop?" view showing electrons, the push from the supply and
  the repulsion from charge on the plate, plus a model exam answer.
- 4.2 LR circuit: the same clickable A/B/C switch, and charges coloured by potential.

## v1.6 · 30 October 2026 (Year 13 Electrical lab, interactive Kirchhoff and capacitors)
- 1.2 internal resistance: charges are coloured by their energy (bright leaving the cell, dimmer after
  the resistor and inside the cell); chevron current arrow; energy bar labelled "energy per coulomb",
  \(V = E/Q\) and \(\varepsilon = V + ir\); compare a good and a poor battery on the graph.
- 1.3 Kirchhoff: click any current arrow or voltage loop (or use the compact Reverse buttons) to flip
  it, and the + and − marks, the method table and the readout all update. All current arrows sit at
  one height near junction Y, and the current rule is now applied at Y. The method table explains the
  sign rule for loops (each term takes the sign of the end of the component you leave by). The
  readout is a clear table of the signed currents and each equation with its numbers. Charge
  animation removed from 1.3; controls made more compact.
- 2.2 parallel plates: the graph now plots \(Q\) against \(V\) with the title "Q = CV (gradient = C)"
  and an "air only" comparison line. Drag a dielectric slab (paper, glass or water) into the gap or
  use the "Dielectric inserted" slider; capacitance follows \(C = \frac{\varepsilon_0 A}{d}[(1-x) + x\varepsilon_r]\).

## v1.5 · 29 October 2026 (hub note)
- Hub footer: added a "Work in progress" note explaining that the pages are one teacher's classroom
  project, not a finished or official product.

## v1.4 · 29 October 2026 (Year 12 Mechanics lab)
- New lab `y12/mechanics.html` for AS91171, the first Year 12 lab, in the Mission Control style
  (light and dark themes with the Dark/Light slider). Six sections: Course map & exam skills,
  Motion & projectiles, Forces, torque & springs, Circular motion, Momentum & impulse,
  Work, energy & power.
- Interactive labs: motion graphs (d–t and v–t drawn live, area shading); projectile launcher
  with launch height, predict-first and vx/vy arrows; force vectors (tip to tail, components);
  torque and balance with tipping; springs (F–x graph, ½kx²); circular motion (string, rover,
  satellite, release, Δv); docking collisions (stick or elastic, momentum bars); impulse
  (force–time area); energy track with friction and energy bars.
- Each section has foundations, a systems check quiz, exam-style problems with worked answers,
  a pre-flight checklist linked to the course map ratings, and an exam tip. Search covers every phase.
- Hub: the Year 12 Mechanics card now opens the lab.

## v1.3 · 29 October 2026 (Year 13 Waves lab, clickable labs)
- 1.4 pipe explorer: response curve now dashed; new **Noise (all frequencies)** source, where the
  pipe picks out its harmonics and the curve turns solid ("loudness out"); click or drag along the
  graph to set the driving frequency.
- 1.4 driven oscillator: click or drag along the resonance curve to set the driving frequency.
- 1.4 resonance tube: drag the water up or down, or click at a height, to set the air column length.
- 2.3 grating: click a bright spot (beam view or intensity graph) to see its order and angle, with a
  d sin θ = nλ check.
- 3.3 Doppler graphs: drag the observer towards or away from the road.
- Contact email in the Waves and Electrical lab footers is written out ("pmistry [at] …") instead
  of a clickable link.

## v1.2 · 28 October 2026 (Year 13 Electrical Systems lab)
- New lab `y13/electrical.html` for AS91526, covering the whole standard in seven sections:
  00 Course Map, 01 DC Circuits, 02 Capacitors, 03 Flux & Faraday, 04 Inductors,
  05 Transformers, 06 AC Circuits.
- Interactive labs: battery V–i graph with best-fit ε and r (and a mystery battery);
  Kirchhoff explorer with + and − markings, clockwise ΣV = 0 loops and Σi = 0 at the junction;
  parallel-plate builder (connected vs disconnected); RC and LR charge/discharge with τ markers;
  combining capacitors; magnet and coil; moving loop (ε = BvL); flux–time to emf–time sketcher;
  switching off an inductor (neon and diode); transformer (AC/DC); transmission losses;
  rms and heating; phase and reactance with rotating phasors; LCR resonance.
- Each section has an introduction, quick check, exam-style problems with worked answers and
  an Applications tab. Course map, exam skills (2025 examiners' report) and formula sheet
  cover the whole standard.
- All equations use LaTeX (KaTeX); current is written as lowercase i throughout.
- Hub: the Electrical Systems card now opens the lab.

## v1.1 · 28 October 2026 (Year 13 Waves lab)
- New tabs: **1.4 Resonance** and **1.5 Beats** (split from one tab), and **2.4 Multi-slit**
  (2 to 10 slits with peaks growing as N², square-root intensity option; white light through a
  double slit, 5 slits or a grating with preset gratings). Later tabs renumbered and links updated.
- 1.4: tuning-fork demo replaced by a "resonance in a pipe" explorer (closed/open pipe, sweep the
  driving frequency, peaks at each harmonic, animated standing wave, speaker sending sound).
  Resonance tube now has a proper labelled tuning fork.
- 2.2: new "path difference = nλ" explorer (drag P, zoomed path difference with 1λ ticks, both θ
  angles shown with the shaded triangle, steps to nλ = dx/L). Clearer slits and screen; fringe
  strip shorter and coloured to match the wavelength; λ, d and L shown on the sliders.
- 3.2: click the picture to move the Doppler source left or right; f and λ labels ahead and behind.
- Wording: "path difference" instead of Δr, "fringe spacing" instead of Δx, and notes that x is
  measured from the central maximum and that dx in nλ = dx/L means d × x.
- Layout: compact control bars, Home button aligned with the Dark/Light switch, selected rail
  button matches the hub, no underline on hover; animations run on all devices (the Pause button
  still stops them).

## v1.0 · 28 October 2026
- Hub (`index.html`): year-level rail, topic cards, search and filters,
  Dark/Light switch, Google Analytics tag.
- Year 13 Wave Systems lab (`y13/waves.html`), aligned with AS91523:
  formula sheet linked to topics, compact control bars, near/far Doppler
  explanation, 2025 examiners' advice, Home button back to the hub.
