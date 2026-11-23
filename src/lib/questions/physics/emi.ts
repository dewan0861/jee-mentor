import { Question } from '@/types';

export const emiQuestions: Question[] = [
  {
    id: 'pyq-phy-emi-01',
    subject: 'physics',
    chapterId: 'phy-c12-emi',
    topicId: 'phy-emi-3-motional-emf-rails',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 27 Shift 1',
    questionText: 'A conducting rod of length $l = 0.50\\text{ m}$ and mass $m = 0.10\\text{ kg}$ slides frictionlessly on two parallel horizontal conducting rails connected through an external resistor of resistance $R = 2.0\\,\\Omega$. A uniform magnetic field of $B = 0.80\\text{ T}$ is directed vertically downwards perpendicular to the rails. A constant horizontal pulling force of $F = 0.40\\text{ N}$ is applied to the rod. What is the steady terminal velocity $v_t$ achieved by the rod?',
    options: [
      '$5.0\\text{ m/s}$',
      '$2.5\\text{ m/s}$',
      '$10.0\\text{ m/s}$',
      '$1.25\\text{ m/s}$'
    ],
    correctAnswer: '0', // 5.0 m/s
    explanation: '1. Motional EMF and induced current:\n- When the rod moves with velocity $v$, the motional EMF generated across its ends is:\n$$\\mathcal{E} = B v l$$\n- Induced current through the circuit loop of resistance $R$:\n$$I = \\frac{\\mathcal{E}}{R} = \\frac{B v l}{R}$$\n\n2. Magnetic braking force (Lorentz force):\n- By Lenz\'s law, the induced current experiences a magnetic retarding force opposing motion:\n$$F_{\\text{magnetic}} = I l B = \\left(\\frac{B v l}{R}\\right) l B = \\frac{B^2 l^2 v}{R}$$\n\n3. Terminal velocity condition (zero net acceleration):\n$$F_{\\text{pull}} = F_{\\text{magnetic}} \\implies 0.40 = \\frac{B^2 l^2 v_t}{R}$$\n$$v_t = \\frac{F_{\\text{pull}} R}{B^2 l^2}$$\n\n4. Substituting values ($F = 0.40\\text{ N}, R = 2.0\\,\\Omega, B = 0.80\\text{ T}, l = 0.50\\text{ m}$):\n$$v_t = \\frac{0.40 \\times 2.0}{(0.80)^2 \\times (0.50)^2} = \\frac{0.80}{0.64 \\times 0.25} = \\frac{0.80}{0.16} = 5.0\\text{ m/s}$$',
    concepts: ['Motional EMF', 'Magnetic braking Lorentz force', 'Terminal velocity on rails'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-emi-02',
    subject: 'physics',
    chapterId: 'phy-c12-emi',
    topicId: 'phy-emi-4-rotational-emf-dynamos',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 04 Shift 2',
    questionText: 'A metal rod of length $L = 1.0\\text{ m}$ rotates with a constant angular velocity $\\omega = 10.0\\text{ rad/s}$ about a perpendicular axis passing through one of its ends in a uniform magnetic field $B = 0.50\\text{ T}$ parallel to the rotation axis. What is the induced EMF developed between the midpoint ($r = L/2$) and the outer rotating tip ($r = L$) of the rod?',
    options: [
      '$1.875\\text{ V} \\; \\left(\\frac{15}{8}\\text{ V}\\right)$',
      '$2.500\\text{ V}$',
      '$1.250\\text{ V}$',
      '$0.625\\text{ V}$'
    ],
    correctAnswer: '0', // 1.875 V
    explanation: '1. Rotational Motional EMF from pivot:\n- Consider an element $dr$ at distance $r$ from the pivot moving with speed $v = \\omega r$.\n- Differential EMF: $d\\mathcal{E} = B v \\, dr = B (\\omega r) dr$.\n- Potential difference between pivot ($r = 0$) and any point at distance $r$:\n$$V(r) = \\int_0^r B \\omega x \\, dx = \\frac{1}{2} B \\omega r^2$$\n\n2. Potential at midpoint ($r = L/2 = 0.50\\text{ m}$):\n$$V_{\\text{mid}} = \\frac{1}{2} B \\omega \\left(\\frac{L}{2}\\right)^2 = \\frac{1}{8} B \\omega L^2 = \\frac{1}{8} \\times 0.50 \\times 10.0 \\times (1.0)^2 = \\frac{5.0}{8} = 0.625\\text{ V}$$\n\n3. Potential at outer rotating tip ($r = L = 1.0\\text{ m}$):\n$$V_{\\text{tip}} = \\frac{1}{2} B \\omega L^2 = \\frac{1}{2} \\times 0.50 \\times 10.0 \\times (1.0)^2 = 2.500\\text{ V}$$\n\n4. Induced EMF between midpoint and outer tip:\n$$\\mathcal{E}_{\\text{mid-tip}} = V_{\\text{tip}} - V_{\\text{mid}} = \\frac{1}{2} B \\omega L^2 - \\frac{1}{8} B \\omega L^2 = \\frac{3}{8} B \\omega L^2$$\n$$\\mathcal{E} = \\frac{3}{8} \\times (0.50\\text{ T}) \\times (10.0\\text{ rad/s}) \\times (1.0\\text{ m})^2 = \\frac{15}{8} = 1.875\\text{ V}$$',
    concepts: ['Rotational motional EMF', 'Calculus integration along rotating rod', 'Potential difference between internal points'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-emi-03',
    subject: 'physics',
    chapterId: 'phy-c12-emi',
    topicId: 'phy-emi-1-faraday-flux-charge',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 24 Shift 1',
    questionText: 'A circular coil of $N = 500\\text{ turns}$, radius $r = 5.0\\text{ cm}$, and total electrical resistance $R = 10.0\\,\\Omega$ is placed in a uniform magnetic field $B = 0.20\\text{ T}$ with its plane perpendicular to the field. If the coil is flipped through an angle of $180^\\circ$ in a time interval of $\\Delta t = 0.05\\text{ s}$, what is the total electric charge that flows through the coil?',
    options: [
      '$\\approx 157\\text{ mC} \\; (0.05\\pi\\text{ C})$',
      '$\\approx 78.5\\text{ mC}$',
      '$\\approx 314\\text{ mC}$',
      '$\\approx 15.7\\text{ mC}$'
    ],
    correctAnswer: '0', // approx 157 mC
    explanation: '1. Magnetic flux linked with the coil:\n- Area of the coil: $A = \\pi r^2 = \\pi (0.05\\text{ m})^2 = 0.0025\\pi\\text{ m}^2$.\n- Initial flux per turn ($\\theta_1 = 0^\\circ$): $\\Phi_1 = B A \\cos 0^\\circ = +B A$.\n- Final flux per turn after $180^\\circ$ rotation ($\\theta_2 = 180^\\circ$): $\\Phi_2 = B A \\cos 180^\\circ = -B A$.\n- Change in flux per turn: $\\Delta \\Phi = \\Phi_2 - \\Phi_1 = -2 B A$.\n- Magnitude of total flux linkage change: $|\\Delta \\Phi_{\\text{total}}| = N |\\Delta \\Phi| = 2 N B A$.\n\n2. Master Formula for Induced Charge:\n- By Faraday\'s Law, $\\mathcal{E} = -\\frac{d\\Phi}{dt} \\implies I = \\frac{\\mathcal{E}}{R} = -\\frac{1}{R}\\frac{d\\Phi}{dt}$.\n- Integrating current over time yields total induced charge $q$:\n$$q = \\int I \\, dt = \\frac{|\\Delta \\Phi_{\\text{total}}|}{R} = \\frac{2 N B A}{R}$$\n(Notice that induced charge is completely INDEPENDENT of the time interval $\\Delta t$ taken to flip the coil!).\n\n3. Calculating charge:\n$$q = \\frac{2 \\times 500 \\times 0.20 \\times (0.0025\\pi)}{10.0} = \\frac{200 \\times 0.0025\\pi}{10.0} = 0.05\\pi\\text{ C}$$\n$$q \\approx 0.05 \\times 3.1416\\text{ C} \\approx 0.157\\text{ C} = 157\\text{ mC}$$',
    concepts: ['Induced charge independence of time', 'Faraday\'s Law of induction', 'Coil inversion flux change'],
    estimatedTimeSec: 70,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-emi-04',
    subject: 'physics',
    chapterId: 'phy-c12-emi',
    topicId: 'phy-emi-5-induced-electric-field',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2024,
    pyqShift: 'Jan 31 Shift 1',
    questionText: 'A cylindrical region of radius $R = 10.0\\text{ cm}$ contains a uniform magnetic field directed into the page that increases at a constant rate of $\\frac{dB}{dt} = 4.0\\text{ T/s}$. What is the magnitude of the non-conservative induced electric field at an interior point located at distance $r = 5.0\\text{ cm}$ from the central axis of the cylinder?',
    options: [
      '$0.10\\text{ V/m}$',
      '$0.20\\text{ V/m}$',
      '$0.05\\text{ V/m}$',
      '$0.40\\text{ V/m}$'
    ],
    correctAnswer: '0', // 0.10 V/m
    explanation: '1. Faraday\'s Law in terms of Induced Electric Field:\n$$\\oint \\vec{E}_{\\text{ind}} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$$\n\n2. Choosing a circular path of radius $r = 5.0\\text{ cm} < R = 10.0\\text{ cm}$ concentric with the cylinder:\n- By cylindrical symmetry, $\\vec{E}_{\\text{ind}}$ is tangent to the circle and uniform in magnitude everywhere along the circumference.\n$$\\oint \\vec{E}_{\\text{ind}} \\cdot d\\vec{l} = E (2\\pi r)$$\n- Magnetic flux linked inside radius $r$:\n$$\\Phi_B = B \\times (\\pi r^2)$$\n$$\\frac{d\\Phi_B}{dt} = \\pi r^2 \\frac{dB}{dt}$$\n\n3. Equating:\n$$E (2\\pi r) = \\pi r^2 \\frac{dB}{dt} \\implies E(r) = \\frac{r}{2} \\frac{dB}{dt}$$\n\n4. Substituting values ($r = 5.0\\text{ cm} = 0.05\\text{ m}, \\frac{dB}{dt} = 4.0\\text{ T/s}$):\n$$E = \\frac{0.05\\text{ m}}{2} \\times 4.0\\text{ T/s} = 0.10\\text{ V/m} = 0.10\\text{ N/C}$$',
    concepts: ['Non-conservative induced electric field', 'Faraday line integral', 'Time-varying magnetic flux'],
    estimatedTimeSec: 65,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-emi-05',
    subject: 'physics',
    chapterId: 'phy-c12-emi',
    topicId: 'phy-emi-7-mutual-inductance-coupling',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2022,
    pyqShift: 'JEE Advanced Paper 1',
    questionText: 'A small circular wire loop of radius $r = 1.0\\text{ cm}$ is placed at the center of a much larger coplanar circular wire loop of radius $R = 50.0\\text{ cm}$ ($r \\ll R$). What is the mutual inductance $M$ of this pair of concentric coplanar loops? (Take $\\pi^2 \\approx 10$ and $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$).',
    options: [
      '$\\approx 4.0 \\times 10^{-10}\\text{ H} \\; (0.40\\text{ nH})$',
      '$\\approx 8.0 \\times 10^{-10}\\text{ H}$',
      '$\\approx 2.0 \\times 10^{-10}\\text{ H}$',
      '$\\approx 1.25 \\times 10^{-9}\\text{ H}$'
    ],
    correctAnswer: '0', // approx 4.0 x 10^-10 H
    explanation: '1. Reciprocity principle of mutual inductance ($M_{12} = M_{21} = M$):\n- It is far easier to calculate the magnetic field produced by the LARGE outer loop at its center.\n- Let current $I$ flow in the outer loop of radius $R$.\n- Magnetic field at the center of the outer loop:\n$$B_{\\text{center}} = \\frac{\\mu_0 I}{2R}$$\n\n2. Magnetic flux linked with the small inner loop:\n- Since $r = 1\\text{ cm} \\ll R = 50\\text{ cm}$, the field $B_{\\text{center}}$ is nearly uniform over the entire area of the small loop ($A_{\\text{small}} = \\pi r^2$):\n$$\\Phi_{\\text{small}} = B_{\\text{center}} A_{\\text{small}} = \\left(\\frac{\\mu_0 I}{2R}\\right) (\\pi r^2) = \\left(\\frac{\\mu_0 \\pi r^2}{2R}\\right) I$$\n\n3. Extracting mutual inductance $M$ (where $\\Phi = M I$):\n$$M = \\frac{\\mu_0 \\pi r^2}{2R}$$\n\n4. Numerical calculation ($r = 0.01\\text{ m}, R = 0.50\\text{ m}$):\n$$M = \\frac{(4\\pi \\times 10^{-7}) \\times \\pi \\times (0.01)^2}{2 \\times 0.50} = \\frac{4\\pi^2 \\times 10^{-7} \\times 10^{-4}}{1.0} = 4\\pi^2 \\times 10^{-11}\\text{ H}$$\nUsing $\\pi^2 \\approx 10$:\n$$M \\approx 4(10) \\times 10^{-11} = 40 \\times 10^{-11} = 4.0 \\times 10^{-10}\\text{ H} = 0.40\\text{ nH}$$',
    concepts: ['Mutual inductance of concentric loops', 'Reciprocity theorem', 'Small loop flux approximation'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-emi-06',
    subject: 'physics',
    chapterId: 'phy-c12-emi',
    topicId: 'phy-emi-8-rl-transients',
    type: 'numerical',
    difficulty: 'easy',
    pyqYear: 2023,
    pyqShift: 'Apr 06 Shift 1',
    questionText: 'An inductor of inductance $L = 2.0\\text{ H}$ and a resistor of resistance $R = 10.0\\,\\Omega$ are connected in series with an ideal DC battery of EMF $\\mathcal{E} = 20.0\\text{ V}$ and a switch. What is the steady-state current in the circuit in Amperes ($\\text{A}$) a very long time after the switch is closed ($t \\to \\infty$)?',
    options: [],
    correctAnswer: '2', // 2 A
    explanation: '1. RL Circuit Behavior at Steady State ($t \\to \\infty$):\n- In an RL growth circuit, the current grows according to:\n$$i(t) = \\frac{\\mathcal{E}}{R}\\left(1 - e^{-t / \\tau_L}\\right)$$\nwhere $\\tau_L = \\frac{L}{R}$ is the inductive time constant.\n\n2. As $t \\to \\infty$:\n- The exponential term $e^{-\\infty} \\to 0$.\n- The rate of change of current becomes zero: $\\frac{di}{dt} = 0$.\n- Therefore, the back EMF induced in the inductor vanishes: $\\mathcal{E}_L = -L \\frac{di}{dt} = 0$.\n- The inductor acts as an ideal plain conductor (SHORT CIRCUIT) with zero resistance.\n\n3. Steady-state current:\n$$I_{\\text{steady}} = \\frac{\\mathcal{E}}{R} = \\frac{20.0\\text{ V}}{10.0\\,\\Omega} = 2.0\\text{ A}$$',
    concepts: ['RL circuit steady state', 'Inductor short circuit rule', 'Growth of current in inductor'],
    estimatedTimeSec: 40,
    marks: 4,
    negativeMarks: 0
  }
];
