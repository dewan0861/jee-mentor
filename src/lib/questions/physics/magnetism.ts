import { Question } from '@/types';

export const movingChargesMagnetismQuestions: Question[] = [
  {
    id: 'pyq-phy-mag-01',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism',
    topicId: 'phy-mag-5-helical-motion-trajectories',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2024,
    pyqShift: 'Jan 29 Shift 2',
    questionText: 'A proton of mass $m_p = 1.67 \\times 10^{-27}\\text{ kg}$ and charge $q = 1.6 \\times 10^{-19}\\text{ C}$ enters a uniform magnetic field of $B = 0.20\\text{ T}$ with a speed of $v = 4.0 \\times 10^6\\text{ m/s}$ at an angle of $\\theta = 60^\\circ$ to the direction of the magnetic field. What is the radius of the helical trajectory and the pitch of the helix?',
    options: [
      '$r \\approx 18.1\\text{ cm}, \\quad p \\approx 65.6\\text{ cm}$',
      '$r \\approx 9.0\\text{ cm}, \\quad p \\approx 32.8\\text{ cm}$',
      '$r \\approx 20.9\\text{ cm}, \\quad p \\approx 75.8\\text{ cm}$',
      '$r \\approx 18.1\\text{ cm}, \\quad p \\approx 32.8\\text{ cm}$'
    ],
    correctAnswer: '0', // r approx 18.1 cm, p approx 65.6 cm
    explanation: '1. Decomposing the velocity vector:\n- Component perpendicular to $\\vec{B}$ (governs circular radius):\n$$v_\\perp = v \\sin 60^\\circ = (4.0 \\times 10^6\\text{ m/s}) \\times \\frac{\\sqrt{3}}{2} = 2\\sqrt{3} \\times 10^6\\text{ m/s} \\approx 3.464 \\times 10^6\\text{ m/s}$$\n- Component parallel to $\\vec{B}$ (governs axial pitch drift):\n$$v_\\parallel = v \\cos 60^\\circ = (4.0 \\times 10^6\\text{ m/s}) \\times 0.5 = 2.0 \\times 10^6\\text{ m/s}$$\n\n2. Radius of the helix ($r$):\n$$r = \\frac{m v_\\perp}{q B} = \\frac{(1.67 \\times 10^{-27}\\text{ kg})(3.464 \\times 10^6\\text{ m/s})}{(1.60 \\times 10^{-19}\\text{ C})(0.20\\text{ T})} = \\frac{5.785 \\times 10^{-21}}{0.32 \\times 10^{-19}} = 0.1808\\text{ m} \\approx 18.1\\text{ cm}$$\n\n3. Time period of one revolution ($T$):\n$$T = \\frac{2\\pi m}{q B} = \\frac{2 \\times 3.1416 \\times 1.67 \\times 10^{-27}}{1.60 \\times 10^{-19} \\times 0.20} = \\frac{10.493 \\times 10^{-27}}{0.32 \\times 10^{-19}} \\approx 3.279 \\times 10^{-7}\\text{ s}$$\n\n4. Pitch of the helix ($p$):\n$$p = v_\\parallel T = (2.0 \\times 10^6\\text{ m/s}) \\times (3.279 \\times 10^{-7}\\text{ s}) = 0.6558\\text{ m} \\approx 65.6\\text{ cm}$$',
    concepts: ['Helical motion in magnetic field', 'Radius of curvature', 'Pitch of helix'],
    estimatedTimeSec: 90,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-mag-02',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism',
    topicId: 'phy-mag-9-ammeter-voltmeter-conversion',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 31 Shift 2',
    questionText: 'A moving coil galvanometer has a coil resistance of $R_g = 50\\,\\Omega$ and exhibits a full-scale deflection for a current of $I_g = 5.0\\text{ mA}$. What resistance must be connected in parallel (shunt resistance $S$) to convert it into an ammeter capable of measuring currents up to $I = 5.0\\text{ A}$?',
    options: [
      '$\\approx 0.050\\,\\Omega \\; (50\\text{ m}\\Omega)$',
      '$\\approx 0.50\\,\\Omega$',
      '$\\approx 0.025\\,\\Omega$',
      '$\\approx 5.0\\,\\Omega$'
    ],
    correctAnswer: '0', // approx 0.050 ohms
    explanation: '1. Ammeter Shunt Principle:\n- To convert a galvanometer to an ammeter, a very low resistance shunt $S$ is connected in PARALLEL with the galvanometer coil.\n- Potential difference across the galvanometer equals potential difference across the shunt:\n$$I_g R_g = (I - I_g) S$$\n\n2. Shunt formula:\n$$S = \\frac{I_g R_g}{I - I_g}$$\n\n3. Substituting values:\n- $R_g = 50\\,\\Omega$\n- $I_g = 5.0\\text{ mA} = 0.005\\text{ A}$\n- $I = 5.0\\text{ A}$\n\n$$S = \\frac{(0.005\\text{ A}) \\times (50\\,\\Omega)}{5.0\\text{ A} - 0.005\\text{ A}} = \\frac{0.250}{4.995} \\approx 0.05005\\,\\Omega \\approx 0.050\\,\\Omega = 50\\text{ m}\\Omega$$',
    concepts: ['Galvanometer to ammeter conversion', 'Parallel shunt resistance', 'Full scale deflection range scaling'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-mag-03',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism',
    topicId: 'phy-mag-1-biot-savart-ring',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 25 Shift 2',
    questionText: 'A wire carrying a current $I = 10.0\\text{ A}$ consists of a circular arc of radius $R = 5.0\\text{ cm}$ subtending an angle $\\theta = 120^\\circ$ at its center $O$, connected to two long straight radial lead-in wires. What is the magnitude of the magnetic field at the center $O$? (Take $\\frac{\\mu_0}{4\\pi} = 10^{-7}\\text{ T}\\cdot\\text{m}/\\text{A}$ and $\\pi \\approx 3.14$).',
    options: [
      '$\\approx 4.19 \\times 10^{-5}\\text{ T} \\; (41.9\\text{ }\\mu\\text{T})$',
      '$\\approx 1.26 \\times 10^{-4}\\text{ T}$',
      '$\\approx 2.09 \\times 10^{-5}\\text{ T}$',
      '$\\approx 8.38 \\times 10^{-5}\\text{ T}$'
    ],
    correctAnswer: '0', // approx 4.19 x 10^-5 T
    explanation: '1. Field due to the radial straight lead-in wires:\n- By the Biot-Savart Law: $d\\vec{B} \\propto d\\vec{l} \\times \\hat{r}$.\n- Since the straight lead-in wires lie along radial lines pointing directly toward and away from the center $O$, the angle between $d\\vec{l}$ and $\\hat{r}$ is $0^\\circ$ or $180^\\circ$.\n- Therefore, $d\\vec{l} \\times \\hat{r} = 0$, and the straight segments contribute ZERO magnetic field at $O$!\n\n2. Field due to the circular arc of angle $\\theta$:\n- Angle in radians: $\\theta = 120^\\circ = 120 \\times \\frac{\\pi}{180} = \\frac{2\\pi}{3}\\text{ rad}$.\n$$B_{\\text{arc}} = \\frac{\\mu_0 I}{4\\pi R} \\times \\theta$$\n\n3. Numerical calculation:\n- $\\frac{\\mu_0}{4\\pi} = 10^{-7}\\text{ T}\\cdot\\text{m}/\\text{A}$\n- $I = 10.0\\text{ A}$\n- $R = 5.0\\text{ cm} = 0.05\\text{ m}$\n\n$$B = \\frac{(10^{-7})(10.0)}{0.05} \\times \\frac{2\\pi}{3} = \\frac{10^{-6}}{0.05} \\times \\frac{2\\pi}{3} = (2 \\times 10^{-5}) \\times \\frac{2\\pi}{3} = \\frac{4\\pi}{3} \\times 10^{-5}\\text{ T}$$\n$$B \\approx \\frac{4 \\times 3.1416}{3} \\times 10^{-5} \\approx 4.189 \\times 10^{-5}\\text{ T} \\approx 41.9\\text{ }\\mu\\text{T}$$',
    concepts: ['Biot-Savart Law for circular arc', 'Radial current zero contribution', 'Magnetic field at arc center'],
    estimatedTimeSec: 70,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-mag-04',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism',
    topicId: 'phy-mag-6-force-conductors-parallel-wires',
    type: 'single_mcq',
    difficulty: 'easy',
    pyqYear: 2024,
    pyqShift: 'Apr 04 Shift 2',
    questionText: 'A rigid semicircular wire of radius $R = 0.20\\text{ m}$ carries a current of $I = 5.0\\text{ A}$ in the $xy$-plane. A uniform external magnetic field of magnitude $B = 0.50\\text{ T}$ directed along the $+z$-axis is applied. What is the magnitude of the net magnetic force acting on the semicircular wire?',
    options: [
      '$1.0\\text{ N}$',
      '$0.5\\text{ N}$',
      '$2.0\\text{ N}$',
      '$0\\text{ N}$'
    ],
    correctAnswer: '0', // 1.0 N
    explanation: '1. Master Theorem for Magnetic Force in a Uniform Magnetic Field:\n- For ANY arbitrarily curved wire carrying steady current $I$ placed in a UNIFORM magnetic field $\\vec{B}$:\n$$\\vec{F} = I \\int (d\\vec{l} \\times \\vec{B}) = I \\left( \\int d\\vec{l} \\right) \\times \\vec{B} = I (\\vec{L} \\times \\vec{B})$$\nwhere $\\vec{L}$ is the straight VECTOR DISPLACEMENT from the beginning point to the ending point of the wire!\n\n2. Vector displacement for a semicircle:\n- The straight line distance connecting the two endpoints of a semicircle is its DIAMETER:\n$$|\\vec{L}| = 2 R = 2(0.20\\text{ m}) = 0.40\\text{ m}$$\n\n3. Magnitude of magnetic force:\n- Since the wire lies in the $xy$-plane and $\\vec{B}$ is along the $z$-axis, $\\vec{L} \\perp \\vec{B}$:\n$$F = I |\\vec{L}| B = (5.0\\text{ A}) \\times (0.40\\text{ m}) \\times (0.50\\text{ T}) = 1.0\\text{ N}$$',
    concepts: ['Magnetic force on curved wire', 'Displacement vector shortcut', 'Uniform magnetic field force'],
    estimatedTimeSec: 45,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-mag-05',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism',
    topicId: 'phy-mag-5-helical-motion-trajectories',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2022,
    pyqShift: 'JEE Advanced Paper 1',
    questionText: 'A proton and an alpha particle are accelerated from rest through the same electric potential difference $V$. They subsequently enter a region of uniform magnetic field $\\vec{B}$ perpendicular to their velocity vectors. What is the ratio of the radius of the circular path of the proton to that of the alpha particle ($r_p / r_\\alpha$)?',
    options: [
      '$\\frac{1}{\\sqrt{2}} \\; (\\approx 0.71)$',
      '$\\sqrt{2}$',
      '$1 : 1$',
      '$1 : 2$'
    ],
    correctAnswer: '0', // 1 / sqrt(2)
    explanation: '1. Kinetic energy gained through accelerating potential $V$:\n$$K = q V$$\n\n2. Radius of circular path in magnetic field:\n$$r = \\frac{m v}{q B} = \\frac{\\sqrt{2m K}}{q B} = \\frac{\\sqrt{2m (q V)}}{q B} = \\frac{1}{B}\\sqrt{\\frac{2m V}{q}}$$\nNotice that for identical $B$ and $V$:\n$$r \\propto \\sqrt{\\frac{m}{q}}$$\n\n3. Substituting parameters for proton and alpha particle:\n- For proton ($p$): mass $m_p = m$, charge $q_p = e$.\n- For alpha particle ($\\alpha$): mass $m_\\alpha = 4m$, charge $q_\\alpha = 2e$.\n\n$$\\frac{r_p}{r_\\alpha} = \\frac{\\sqrt{m_p / q_p}}{\\sqrt{m_\\alpha / q_\\alpha}} = \\frac{\\sqrt{m / e}}{\\sqrt{4m / 2e}} = \\frac{1}{\\sqrt{2}}$$',
    concepts: ['Radius in magnetic field with potential', 'Charge-to-mass ratio', 'Proton vs alpha particle comparison'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-mag-06',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism',
    topicId: 'phy-mag-6-force-conductors-parallel-wires',
    type: 'numerical',
    difficulty: 'easy',
    pyqYear: 2023,
    pyqShift: 'Apr 11 Shift 2',
    questionText: 'Two long, straight, parallel conducting wires separated by a distance $d = 10\\text{ cm}$ in air carry steady currents of $I_1 = 5.0\\text{ A}$ and $I_2 = 10.0\\text{ A}$ in the same direction. What is the magnitude of the attractive magnetic force per unit length between the two wires in micro-Newtons per meter ($\\mu\\text{N/m}$)? (Take $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$).',
    options: [],
    correctAnswer: '100', // 100 uN/m
    explanation: '1. Force per unit length between two parallel current-carrying wires:\n$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$\n\n2. Substituting given values:\n- $I_1 = 5.0\\text{ A}$\n- $I_2 = 10.0\\text{ A}$\n- $d = 10\\text{ cm} = 0.10\\text{ m}$\n- $\\frac{\\mu_0}{2\\pi} = 2 \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$\n\n$$\\frac{F}{L} = \\frac{(2 \\times 10^{-7}) \\times (5.0) \\times (10.0)}{0.10} = \\frac{100 \\times 10^{-7}}{0.10} = 1000 \\times 10^{-7} = 1.0 \\times 10^{-4}\\text{ N/m}$$\n\n3. Converting to micro-Newtons per meter ($\\mu\\text{N/m}$):\n$$\\frac{F}{L} = 1.0 \\times 10^{-4} \\times 10^6\\text{ }\\mu\\text{N/m} = 100\\text{ }\\mu\\text{N/m}$$',
    concepts: ['Force between parallel currents', 'Definition of Ampere', 'Attractive magnetic interaction'],
    estimatedTimeSec: 50,
    marks: 4,
    negativeMarks: 0
  }
];
