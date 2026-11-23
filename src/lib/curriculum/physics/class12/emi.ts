import { Chapter } from '@/types';

export const emiChapter: Chapter = {
  id: 'phy-c12-emi',
  subject: 'physics',
  classLevel: 12,
  name: 'Electromagnetic Induction',
  unit: 'Electrodynamics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Magnetic Flux}: \\Phi_B = \\int \\vec{B} \\cdot d\\vec{A} = B A \\cos\\theta',
    '\\text{Faraday\'s Law}: \\mathcal{E} = -N \\frac{d\\Phi_B}{dt}, \\quad q_{\\text{induced}} = \\frac{\\Delta \\Phi_B}{R} \\; (\\text{time-independent})',
    '\\text{Translational Motional EMF}: \\mathcal{E} = B v l, \\quad F_{\\text{braking}} = \\frac{B^2 l^2 v}{R}, \\quad P_{\\text{mech}} = P_{\\text{joule}} = \\frac{B^2 l^2 v^2}{R}',
    '\\text{Rotational Motional EMF}: \\mathcal{E} = \\frac{1}{2} B \\omega l^2 = \\frac{1}{2} B \\omega R^2 \\; (\\text{rotating disc})',
    '\\text{Induced Electric Field}: \\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt} \\implies E_{\\text{in}}(r) = \\frac{r}{2}\\frac{dB}{dt}, \\; E_{\\text{out}}(r) = \\frac{R^2}{2r}\\frac{dB}{dt}',
    '\\text{Self-Inductance}: N \\Phi = L I, \\quad \\mathcal{E}_L = -L \\frac{dI}{dt}, \\quad L_{\\text{solenoid}} = \\mu_0 n^2 A l = \\frac{\\mu_0 N^2 A}{l}',
    '\\text{Magnetic Energy}: U_B = \\frac{1}{2} L I^2, \\quad u_B = \\frac{B^2}{2\\mu_0}',
    '\\text{Mutual Inductance}: M = \\mu_0 n_1 n_2 A l, \\quad k = \\frac{M}{\\sqrt{L_1 L_2}} \\quad (0 \\le k \\le 1)',
    '\\text{RL Circuit Growth}: i(t) = \\frac{V}{R}\\left(1 - e^{-t/\\tau_L}\\right), \\quad \\tau_L = \\frac{L}{R}',
    '\\text{RL Circuit Decay}: i(t) = I_0 e^{-t/\\tau_L}'
  ],
  topics: [
    {
      id: 'phy-emi-1-faraday-flux-charge',
      name: '12.6.1 Magnetic Flux, Faraday\'s Law & Induced Charge',
      description: 'Magnetic flux definition, Faraday\'s two laws of induction; Lenz\'s law as consequence of energy conservation; proof that total induced charge q = Delta Phi / R is independent of time and rate of flux change.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-emi-2-lenz-eddy-currents',
      name: '12.6.2 Lenz\'s Law Mechanics & Eddy Current Damping',
      description: 'Lenz\'s opposing forces; magnet dropped through a hollow conducting copper pipe (terminal velocity reached due to upward eddy drag); laminated cores and slotting in transformers; induction furnaces.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-emi-3-motional-emf-rails',
      name: '12.6.3 Motional EMF on Rails & Energy Conservation',
      description: 'Conductor moving across uniform magnetic field E = B v l; sliding rail circuit with external load; magnetic retarding Lorentz force; equivalence of mechanical work done and Joule heating P = B^2 l^2 v^2 / R.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-emi-4-rotational-emf-dynamos',
      name: '12.6.4 Rotational Motional EMF in Rods and Discs',
      description: 'Conducting rod pivoted at one end rotating in perpendicular B field E = 1/2 B omega l^2; Faraday copper disc dynamo; rotating spokes in bicycle wheel.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-emi-5-induced-electric-field',
      name: '12.6.5 Non-Conservative Induced Electric Fields',
      description: 'Cylindrical region of time-varying magnetic field dB/dt; induced circular electric field lines; internal field E = (r/2) dB/dt vs external field E = (R^2 / 2r) dB/dt; line integral around closed loop.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-emi-6-self-inductance-solenoid',
      name: '12.6.6 Self-Induction & Inductor Energetics',
      description: 'Back EMF opposing current changes; self-inductance of long solenoid L = mu_0 n^2 A l; magnetic energy stored U = 1/2 L I^2; magnetic field energy density u_B = B^2 / (2 mu_0).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-emi-7-mutual-inductance-coupling',
      name: '12.6.7 Mutual Induction & Coupling Coefficient',
      description: 'Reciprocity theorem M_12 = M_21 = M; coaxial solenoids and concentric coplanar loops; coupling coefficient k = M / sqrt(L1 L2); series inductors with mutual coupling L_eq = L1 + L2 +- 2M.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-emi-8-rl-transients',
      name: '12.6.8 RL Circuit Transients (Growth, Decay & Steady State)',
      description: 'Differential equation L di/dt + i R = V; inductive time constant tau = L / R; instantaneous switching rules (at t = 0^+ inductor acts as an OPEN CIRCUIT; at t -> infty inductor acts as a SHORT CIRCUIT).',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Electromagnetic Induction is one of the most intellectually satisfying chapters in JEE Physics, combining mechanics, calculus, and electrodynamics. It accounts for 1-2 questions in JEE Main and prominent multi-concept sliding rod / rotation / transient problems in JEE Advanced.',
    ncertPointers: [
      'The induced charge $\\Delta q$ passing through a circuit when magnetic flux changes by $\\Delta \\Phi$ is $\\Delta q = \\frac{\\Delta \\Phi}{R}$. It is COMPLETELY INDEPENDENT of how rapidly or slowly the flux change takes place!',
      'When a bar magnet is dropped vertically along the axis of a long vertical copper tube, it rapidly accelerates at first, but as eddy currents develop, the upward magnetic braking force balances gravity, and the magnet falls with a CONSTANT TERMINAL VELOCITY with acceleration $a = 0$ (much slower than free fall $g$).',
      'The electric field $\\vec{E}_{\\text{ind}}$ produced by a time-varying magnetic field is NON-CONSERVATIVE ($\\oint \\vec{E} \\cdot d\\vec{l} \\ne 0$). Its field lines form concentric CLOSED LOOPS, and electric potential cannot be uniquely defined.',
      'In a DC circuit with an inductor: at $t = 0^+$ (immediately after switch is closed), the inductor presents INFINITE impedance and acts as an OPEN CIRCUIT ($i = 0$). At $t \\to \\infty$ (steady state), the inductor presents ZERO resistance and acts as a SHORT CIRCUIT (plain copper wire).'
    ],
    commonTraps: [
      'Self-inductance turns density power: $L = \\mu_0 n^2 A l$. Note that $L$ is proportional to the SQUARE of turns per unit length ($n^2$), or $N^2/l$. Doubling the total turns $N$ on a given core increases $L$ by a factor of FOUR ($4\\times$).',
      'Motional EMF direction via Right Hand Rule: $\\mathcal{E} = \\int (\\vec{v} \\times \\vec{B}) \\cdot d\\vec{l}$. The positive terminal is the end in the direction of $(\\vec{v} \\times \\vec{B})$. Positive charges accumulate at this end.',
      'Coupling coefficient bound: The mutual inductance between two coils can NEVER exceed the geometric mean of their self-inductances: $M \\le \\sqrt{L_1 L_2}$ ($k \\le 1$).',
      'Rotating rod EMF pivot vs tip: $\\mathcal{E} = \\frac{1}{2} B \\omega l^2$. If the rod of length $L$ is rotated about its center of mass ($l_1 = L/2, l_2 = L/2$), the EMF between the two ends is ZERO because both halves generate identical EMFs pointing outward towards the tips!'
    ],
    shortcutsVsConcepts: [
      'Instantaneous Inductor Rules: At $t = 0^+$, replace unenergized inductors with an OPEN CIRCUIT (break the wire). At $t \\to \\infty$, replace inductors with a SHORT CIRCUIT (plain straight wire). Solves 95% of JEE Main RL circuit questions in 15 seconds!',
      'Sliding Rod Terminal Velocity Shortcut: For a rod of mass $m$ sliding down smooth rails inclined at $\\theta$ in vertical $B$ field: $v_t = \\frac{m g R \\sin\\theta}{B^2 l^2 \\cos^2\\theta}$.',
      'Rotating Coil Generator: Peak EMF $\\mathcal{E}_0 = N B A \\omega$. Instantaneous EMF $\\mathcal{E}(t) = \\mathcal{E}_0 \\sin(\\omega t)$.'
    ]
  }
};
