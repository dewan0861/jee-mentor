import { Chapter } from '@/types';

export const wavesSoundChapter: Chapter = {
  id: 'phy-c11-waves-sound',
  subject: 'physics',
  classLevel: 11,
  name: 'Waves and Sound',
  unit: 'Oscillations and Waves',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Harmonic Wave}: y(x,t) = A\\sin(kx \\mp \\omega t + \\phi), \\quad k = \\frac{2\\pi}{\\lambda}, \\quad \\omega = 2\\pi\\nu, \\quad v = \\frac{\\omega}{k} = \\lambda\\nu',
    '\\text{Particle Velocity}: v_p = \\frac{\\partial y}{\\partial t} = -v \\frac{\\partial y}{\\partial x} = -v \\times (\\text{Wave Slope})',
    '\\text{Speed on String}: v = \\sqrt{\\frac{T}{\\mu}} \\quad (\\mu = \\text{mass per unit length } M/L)',
    '\\text{Time on Hanging Rope}: v(y) = \\sqrt{gy}, \\quad t = \\int_0^L \\frac{dy}{\\sqrt{gy}} = 2\\sqrt{\\frac{L}{g}}',
    '\\text{Speed of Sound (Laplace)}: v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}} \\propto \\sqrt{T}',
    '\\text{Sound Intensity & Level}: I = 2\\pi^2 \\rho v \\nu^2 A^2 = \\frac{P}{4\\pi r^2}, \\quad \\beta = 10\\log_{10}\\left(\\frac{I}{I_0}\\right) \\text{ dB} \\quad (I_0 = 10^{-12}\\text{ W/m}^2)',
    '\\text{Standing Wave}: y(x,t) = 2A\\sin(kx)\\cos(\\omega t), \\quad \\text{Node-Node Spacing} = \\frac{\\lambda}{2}',
    '\\text{String Both Ends Fixed}: \\nu_n = n \\left(\\frac{v}{2L}\\right) = \\frac{n}{2L}\\sqrt{\\frac{T}{\\mu}} \\quad (n = 1, 2, 3, \\dots)',
    '\\text{Closed Organ Pipe}: \\nu_n = (2n - 1)\\left(\\frac{v}{4L}\\right) \\quad (\\text{ODD harmonics only: } 1, 3, 5, \\dots)',
    '\\text{Open Organ Pipe}: \\nu_n = n \\left(\\frac{v}{2L}\\right) \\quad (\\text{ALL harmonics: } 1, 2, 3, \\dots)',
    '\\text{End Correction}: e \\approx 0.6 r, \\quad L_{\\text{eff, closed}} = L + e, \\quad L_{\\text{eff, open}} = L + 2e',
    '\\text{Resonance Tube Experiment}: v = 2\\nu (l_2 - l_1), \\quad e = \\frac{l_2 - 3l_1}{2}',
    '\\text{Beat Frequency}: f_{\\text{beat}} = |\\nu_1 - \\nu_2|'
  ],
  topics: [
    {
      id: 'phy-wav-1-wave-motion-equation',
      name: '11.1 Wave Motion, Phase Velocity & Particle Velocity',
      description: 'Wave equation d^2y/dx^2 = (1/v^2) d^2y/dt^2; harmonic traveling wave y = A sin(kx - omega t); phase velocity v = omega/k; particle velocity relation v_p = -v * (dy/dx); particle acceleration.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wav-2-string-wave-speed',
      name: '11.2 Velocity of Transverse Waves on Stretched Strings',
      description: 'Derivation of wave speed v = sqrt(T / mu) from string tension and linear mass density; wave pulse traveling up a heavy hanging rope under self-weight v(y) = sqrt(gy) taking t = 2*sqrt(L/g).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wav-3-speed-of-sound',
      name: '11.3 Speed of Longitudinal Sound Waves & Laplace Correction',
      description: 'Newton\'s isothermal assumption vs Laplace\'s adiabatic correction v = sqrt(gamma * P / rho); temperature dependence v proportional to sqrt(T); pressure independence at constant temperature; effect of humidity.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wav-4-intensity-decibels',
      name: '11.4 Intensity of Waves & Decibel Sound Level Scale',
      description: 'Energy density and power transmission, intensity I = 2 pi^2 rho v nu^2 A^2; spherical wave inverse square law I proportional to 1/r^2 (amplitude A proportional to 1/r); logarithmic decibel loudness scale beta = 10 log10(I/I0).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wav-5-boundary-reflection',
      name: '11.5 Reflection and Transmission of Waves at Discontinuities',
      description: 'Boundary conditions at rigid/fixed end (pi phase change, inverted reflection) vs free/open end (zero phase shift, constructive reflection); reflection and transmission amplitude coefficients at string junctions.',
      estimatedHours: 3,
      isHighWeightage: false
    },
    {
      id: 'phy-wav-6-standing-waves-string',
      name: '11.6 Standing Waves on Stretched Strings & Normal Modes',
      description: 'Superposition of two counter-propagating identical waves; stationary wave equation y = 2A sin(kx) cos(omega t); nodes (zero displacement) and antinodes (maximum amplitude); fundamental frequency and overtones.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-wav-7-organ-pipes-modes',
      name: '11.7 Acoustic Standing Waves in Open and Closed Organ Pipes',
      description: 'Closed organ pipe (displacement node at closed end, antinode at open end) producing only odd harmonics nu = (2n-1) v / (4L); Open organ pipe (antinodes at both ends) producing all harmonics nu = n v / (2L); musical quality comparison.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'phy-wav-8-end-correction-resonance-tube',
      name: '11.8 End Correction & Resonance Tube Apparatus Experiment',
      description: 'Rayleigh end correction e = 0.6 * r at open ends; resonance tube experiment for speed of sound: first resonance l1 + e = lambda/4, second resonance l2 + e = 3 lambda/4; determining speed v = 2 nu (l2 - l1) and end correction e.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-wav-9-beats-tuning-forks',
      name: '11.9 Phenomenon of Beats & Tuning Fork Dynamics',
      description: 'Superposition of two waves of slightly differing frequencies; beat frequency f_beat = |nu1 - nu2|; effects of waxing/loading a prong with wax (mass increases -> frequency decreases) vs filing a prong (mass decreases -> frequency increases).',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Waves and Sound is a guaranteed 1-2 question chapter in every JEE Main session and a staple of experimental and wave mechanics problems in JEE Advanced. Note that while the Doppler effect has been omitted from the rationalized JEE 2027 syllabus, Organ Pipes, End Correction in Resonance Tubes, and Beats with loaded tuning forks are intensely tested.',
    ncertPointers: [
      'In a standing wave, NO ENERGY is transported past any node! The energy remains trapped between adjacent nodes.',
      'All particles between two consecutive nodes vibrate in the SAME PHASE, while particles in adjacent segments (separated by a node) vibrate in OPPOSITE PHASES (phase difference $\\pi$).',
      'The speed of sound in an ideal gas is INDEPENDENT of gas pressure $P$ at constant temperature! Why? Because $P/\\rho = R T / M = \\text{constant}$ at constant $T$. When pressure doubles, density doubles proportionally, leaving $v$ unchanged.',
      'Sound travels FASTER in moist (humid) air than in dry air. Water vapor ($H_2 O$, molar mass $18$) is lighter than dry air ($N_2/O_2$, average molar mass $28.8$). Thus, moist air has lower density $\\rho$, increasing sound speed $v = \\sqrt{\\gamma P / \\rho}$.',
      'A Closed Organ pipe produces ONLY ODD HARMONICS ($1\\nu_0, 3\\nu_0, 5\\nu_0 \\dots$), whereas an Open Organ pipe produces ALL HARMONICS ($1\\nu_0, 2\\nu_0, 3\\nu_0, 4\\nu_0 \\dots$). This is why open organ pipes produce a richer, more melodic sound.'
    ],
    commonTraps: [
      'Harmonic vs Overtone confusion: For a closed organ pipe, the 1st overtone is the 3rd harmonic! The 2nd overtone is the 5th harmonic! For an open pipe, the $n$-th overtone is the $(n+1)$-th harmonic. Mixing these up causes immediate $-1$ mark penalties.',
      'End correction in open pipe: An open pipe has TWO open ends, so its effective length is $L_{\\text{eff}} = L + 2e = L + 2(0.6 r) = L + 1.2 r$. A closed pipe has only ONE open end, so $L_{\\text{eff}} = L + e = L + 0.6 r$.',
      'Resonance tube end correction cancellation: In the resonance tube, subtracting the two resonance lengths cancels the end correction completely: $l_2 - l_1 = \\frac{3\\lambda}{4} - \\frac{\\lambda}{4} = \\frac{\\lambda}{2} \\implies \\lambda = 2(l_2 - l_1)$. Speed of sound is $v = \\nu \\lambda = 2\\nu (l_2 - l_1)$.',
      'Waxing and Filing tuning forks: Loading prong with wax increases mass, so frequency $\\nu$ DECREASES. Filing prong decreases mass, so frequency $\\nu$ INCREASES. If beat frequency changes, analyze whether initial difference was positive or negative.'
    ],
    shortcutsVsConcepts: [
      'Resonance Tube Formula Shortcut: Speed of sound $v = 2\\nu(l_2 - l_1)$ and End correction $e = \\frac{l_2 - 3l_1}{2}$. Remember this directly for 10-second experimental question solutions.',
      'Tuning Fork Waxing Shortcut: If fork $A$ of known frequency $\\nu_A$ gives $b$ beats/s with fork $B$, then $\\nu_B = \\nu_A \\pm b$. When $B$ is loaded with wax ($\nu_B \\downarrow$), if beat frequency DECREASES, then $\\nu_B$ was originally greater ($\nu_B = \\nu_A + b$). If beat frequency INCREASES, $\\nu_B$ was originally smaller ($\nu_B = \\nu_A - b$).',
      'Wave on Heavy Hanging Rope: Pulse takes time $t = 2\\sqrt{L/g}$ to reach the top. Speed at distance $y$ from bottom is $v = \\sqrt{gy}$, independent of rope mass!'
    ]
  }
};
