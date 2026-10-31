# Physics@Rosmini · version history

`main` is the live site. Each finished version is also saved as its own
branch (`version-1.0`, `version-1.1`, …) that never changes afterwards.
To see or restore an older version, ask Claude, or pick the branch from the
branch menu on GitHub.

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
