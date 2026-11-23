import { Question } from '@/types';

export const electrostaticsQuestions: Question[] = [
  {
    id: 'pyq-phy-ele-01',
    subject: 'physics',
    chapterId: 'phy-c12-electrostatics',
    topicId: 'phy-ele-2-continuous-distributions',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 27 Shift 1',
    questionText: 'A thin circular ring of radius $R = 10\\text{ cm}$ carries a uniformly distributed positive charge $Q = 4.0\\text{ }\\mu\\text{C}$. At what axial distance $x$ from the center of the ring is the electric field magnitude maximum, and what is the value of this peak electric field? (Take $\\frac{1}{4\\pi\\epsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$).',
    options: [
      '$x = 5\\sqrt{2}\\text{ cm} \\; (\\approx 7.07\\text{ cm}), \\quad E_{\\text{max}} \\approx 1.39 \\times 10^6\\text{ N/C}$',
      '$x = 10\\text{ cm}, \\quad E_{\\text{max}} \\approx 1.80 \\times 10^6\\text{ N/C}$',
      '$x = 5\\text{ cm}, \\quad E_{\\text{max}} \\approx 2.40 \\times 10^6\\text{ N/C}$',
      '$x = 10\\sqrt{2}\\text{ cm}, \\quad E_{\\text{max}} \\approx 0.98 \\times 10^6\\text{ N/C}$'
    ],
    correctAnswer: '0', // x = 5*sqrt(2) cm, E_max approx 1.39 x 10^6 N/C
    explanation: '1. Electric field on the axis of a uniformly charged ring:\n$$E(x) = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q x}{(x^2 + R^2)^{3/2}}$$\n\n2. Maximizing the field with respect to axial distance $x$:\n$$\\frac{dE}{dx} = 0 \\implies \\frac{(x^2 + R^2)^{3/2}(1) - x \\cdot \\frac{3}{2}(x^2 + R^2)^{1/2}(2x)}{(x^2 + R^2)^3} = 0$$\n$$(x^2 + R^2) - 3x^2 = 0 \\implies 2x^2 = R^2 \\implies x_{\\text{max}} = \\frac{R}{\\sqrt{2}}$$\nFor $R = 10\\text{ cm}$:\n$$x_{\\text{max}} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}\\text{ cm} \\approx 7.07\\text{ cm} = 0.0707\\text{ m}$$\n\n3. Peak field magnitude $E_{\\text{max}}$:\n$$E_{\\text{max}} = E\\left(\\frac{R}{\\sqrt{2}}\\right) = \\frac{k Q (R / \\sqrt{2})}{\\left(\\frac{R^2}{2} + R^2\\right)^{3/2}} = \\frac{k Q R / \\sqrt{2}}{\\left(\\frac{3}{2} R^2\\right)^{3/2}} = \\frac{2 k Q}{3\\sqrt{3} R^2}$$\nSubstituting numerical values ($k = 9 \\times 10^9, Q = 4 \\times 10^{-6}\\text{ C}, R = 0.10\\text{ m}$):\n$$E_{\\text{max}} = \\frac{2 \\times (9 \\times 10^9) \\times (4 \\times 10^{-6})}{3\\sqrt{3} \\times (0.10)^2} = \\frac{72{,}000}{3\\sqrt{3} \\times 0.01} = \\frac{2{,}400{,}000}{\\sqrt{3}} \\approx 1.386 \\times 10^6\\text{ N/C}$$',
    concepts: ['Electric field of charged ring', 'Calculus extremum of ring field', 'Axial field profile'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-ele-02',
    subject: 'physics',
    chapterId: 'phy-c12-electrostatics',
    topicId: 'phy-ele-9-concentric-shells-earthing',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2024,
    pyqShift: 'Jan 30 Shift 2',
    questionText: 'Two concentric conducting spherical shells of radii $R_1 = 10\\text{ cm}$ and $R_2 = 20\\text{ cm}$ are arranged in vacuum. The outer shell is given a positive charge $Q = +6.0\\text{ }\\mu\\text{C}$, while the inner shell is connected to ground (earthed) via a thin conducting wire. What is the charge induced on the inner shell from Earth?',
    options: [
      '$-3.0\\text{ }\\mu\\text{C}$',
      '$0\\text{ }\\mu\\text{C}$',
      '$-6.0\\text{ }\\mu\\text{C}$',
      '$+3.0\\text{ }\\mu\\text{C}$'
    ],
    correctAnswer: '0', // -3.0 uC
    explanation: '1. Physics of Earthing:\n- When a conductor is earthed, its net electrostatic potential becomes ZERO ($V = 0$).\n- It does NOT mean the conductor\'s charge becomes zero! Charges flow between the conductor and Earth until the net potential at the conductor equals zero.\n\n2. Potential of the inner shell ($r = R_1$):\n- Let $q_1$ be the charge acquired by the inner shell.\n- Potential at surface of inner shell is the sum of potentials due to its own charge $q_1$ and the surrounding outer shell of charge $Q$:\n$$V_1 = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1}{R_1} + \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{R_2}$$\n\n3. Setting $V_1 = 0$ (Earthing condition):\n$$\\frac{k q_1}{R_1} + \\frac{k Q}{R_2} = 0 \\implies \\frac{q_1}{R_1} = -\\frac{Q}{R_2}$$\n$$q_1 = -Q \\left(\\frac{R_1}{R_2}\\right)$$\n\n4. Substituting values ($Q = +6.0\\text{ }\\mu\\text{C}, R_1 = 10\\text{ cm}, R_2 = 20\\text{ cm}$):\n$$q_1 = -(+6.0\\text{ }\\mu\\text{C}) \\times \\left(\\frac{10\\text{ cm}}{20\\text{ cm}}\\right) = -3.0\\text{ }\\mu\\text{C}$$',
    concepts: ['Earthing of spherical shell', 'Superposition of electric potential', 'Concentric metallic conductors'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-ele-03',
    subject: 'physics',
    chapterId: 'phy-c12-electrostatics',
    topicId: 'phy-ele-5-potential-gradient',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 25 Shift 1',
    questionText: 'The electric field in a certain region of space is described by $\\vec{E} = (20x \\hat{i} + 30y^2 \\hat{j})\\text{ N/C}$, where $x$ and $y$ are in meters. If the potential at the origin $(0, 0)$ is taken as zero ($V(0,0) = 0$), what is the electric potential at point $P(2\\text{ m}, 1\\text{ m})$?',
    options: [
      '$-50\\text{ V}$',
      '$+50\\text{ V}$',
      '$-70\\text{ V}$',
      '$-40\\text{ V}$'
    ],
    correctAnswer: '0', // -50 V
    explanation: '1. Relation between Electric Potential and Electric Field:\n$$dV = -\\vec{E} \\cdot d\\vec{r} = -(E_x \\, dx + E_y \\, dy + E_z \\, dz)$$\n\n2. Integrating from origin $(0, 0)$ to point $(2, 1)$:\n$$V(2, 1) - V(0, 0) = -\\int_0^2 E_x \\, dx - \\int_0^1 E_y \\, dy$$\n$$V(2, 1) - 0 = -\\int_0^2 20x \\, dx - \\int_0^1 30y^2 \\, dy$$\n\n3. Evaluating the definite integrals:\n$$-\\int_0^2 20x \\, dx = -\\left[ 10 x^2 \\right]_0^2 = -10(2^2 - 0) = -40\\text{ V}$$\n$$-\\int_0^1 30y^2 \\, dy = -\\left[ 10 y^3 \\right]_0^1 = -10(1^3 - 0) = -10\\text{ V}$$\n\n4. Summing the potential contributions:\n$$V(2, 1) = -40 - 10 = -50\\text{ V}$$',
    concepts: ['Potential gradient', 'Line integral of electric field', 'Conservative field integration'],
    estimatedTimeSec: 65,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-ele-04',
    subject: 'physics',
    chapterId: 'phy-c12-electrostatics',
    topicId: 'phy-ele-3-electric-dipoles',
    type: 'single_mcq',
    difficulty: 'easy',
    pyqYear: 2024,
    pyqShift: 'Apr 04 Shift 1',
    questionText: 'An electric dipole with dipole moment $p = 4.0 \\times 10^{-9}\\text{ C}\\cdot\\text{m}$ is initially oriented parallel to a uniform electric field of magnitude $E = 5.0 \\times 10^4\\text{ N/C}$. What is the work done by an external agent to rotate the dipole by $180^\\circ$ to an antiparallel orientation?',
    options: [
      '$4.0 \\times 10^{-4}\\text{ J} \\; (0.40\\text{ mJ})$',
      '$2.0 \\times 10^{-4}\\text{ J}$',
      '$8.0 \\times 10^{-4}\\text{ J}$',
      '$0\\text{ J}$'
    ],
    correctAnswer: '0', // 4.0 x 10^-4 J
    explanation: '1. Potential energy of an electric dipole in a uniform electric field:\n$$U(\\theta) = -\\vec{p} \\cdot \\vec{E} = -p E \\cos\\theta$$\n\n2. Initial state (aligned parallel, stable equilibrium, $\\theta_1 = 0^\\circ$):\n$$U_i = -p E \\cos 0^\\circ = -p E$$\n\n3. Final state (aligned antiparallel, unstable equilibrium, $\\theta_2 = 180^\\circ$):\n$$U_f = -p E \\cos 180^\\circ = -p E (-1) = +p E$$\n\n4. Work done by the external agent against electrostatic torque:\n$$W_{\\text{ext}} = U_f - U_i = (+p E) - (-p E) = 2 p E$$\n\n5. Numerical calculation:\n$$W_{\\text{ext}} = 2 \\times (4.0 \\times 10^{-9}\\text{ C}\\cdot\\text{m}) \\times (5.0 \\times 10^4\\text{ N/C}) = 40.0 \\times 10^{-5}\\text{ J} = 4.0 \\times 10^{-4}\\text{ J} = 0.40\\text{ mJ}$$',
    concepts: ['Dipole potential energy', 'Work done in dipole rotation', 'Stable vs unstable equilibrium'],
    estimatedTimeSec: 50,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-ele-05',
    subject: 'physics',
    chapterId: 'phy-c12-electrostatics',
    topicId: 'phy-ele-7-potential-energy-self-energy',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2023,
    pyqShift: 'JEE Advanced Paper 1',
    questionText: 'A thin spherical metallic shell of radius $R = 10\\text{ cm}$ carries a total charge of $Q = 2.0\\text{ }\\mu\\text{C}$. Due to mutual electrostatic repulsion of the charges, the radius of the shell expands uniformly from $R$ to $2R = 20\\text{ cm}$. What is the work done by the electrostatic repulsion forces during this expansion?',
    options: [
      '$90\\text{ mJ} \\; (0.090\\text{ J})$',
      '$180\\text{ mJ}$',
      '$45\\text{ mJ}$',
      '$135\\text{ mJ}$'
    ],
    correctAnswer: '0', // 90 mJ
    explanation: '1. Electrostatic Self-Energy of a conducting spherical shell:\n- The self-energy represents the total energy stored in the electric field from $r = R$ to $\\infty$:\n$$U_{\\text{self}} = \\frac{1}{2} \\frac{Q^2}{4\\pi\\epsilon_0 R} = \\frac{k Q^2}{2 R}$$\n\n2. Initial Self-Energy ($R_1 = 10\\text{ cm} = 0.10\\text{ m}$):\n$$U_i = \\frac{(9 \\times 10^9) \\times (2.0 \\times 10^{-6})^2}{2 \\times 0.10} = \\frac{9 \\times 10^9 \\times 4.0 \\times 10^{-12}}{0.20} = \\frac{0.036}{0.20} = 0.180\\text{ J} = 180\\text{ mJ}$$\n\n3. Final Self-Energy ($R_2 = 2R_1 = 0.20\\text{ m}$):\n$$U_f = \\frac{k Q^2}{2 (2 R_1)} = \\frac{U_i}{2} = \\frac{180\\text{ mJ}}{2} = 90\\text{ mJ}$$\n\n4. Work done by electrostatic repulsion forces:\n- By the Work-Energy theorem for conservative fields:\n$$W_{\\text{field}} = -\\Delta U = U_i - U_f = 180\\text{ mJ} - 90\\text{ mJ} = 90\\text{ mJ} = 0.090\\text{ J}$$',
    concepts: ['Electrostatic self-energy', 'Field energy integration', 'Work done by electrostatic repulsion'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-ele-06',
    subject: 'physics',
    chapterId: 'phy-c12-electrostatics',
    topicId: 'phy-ele-4-gauss-law-flux',
    type: 'numerical',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 08 Shift 1',
    questionText: 'A point charge $q = 8.85\\text{ nC}$ is located exactly at the apex of a right circular cone having a semi-vertical angle $\\alpha = 60^\\circ$. What is the electric flux passing through the base of the cone in $\\text{N}\\cdot\\text{m}^2/\\text{C}$? (Take permittivity of free space $\\epsilon_0 = 8.85 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$).',
    options: [],
    correctAnswer: '250', // 250 N m^2 / C
    explanation: '1. Solid angle subtended by a cone of semi-vertical angle $\\alpha$:\n$$\\Omega = 2\\pi (1 - \\cos\\alpha)$$\nFor $\\alpha = 60^\\circ$:\n$$\\Omega = 2\\pi (1 - \\cos 60^\\circ) = 2\\pi \\left(1 - \\frac{1}{2}\\right) = \\pi\\text{ steradians}$$\n\n2. Fraction of total flux captured by this solid angle:\n- Total solid angle enclosed by a sphere around a point charge is $4\\pi\\text{ steradians}$.\n- By Gauss\'s Law, total flux emanating from charge $q$ is $\\Phi_{\\text{total}} = \\frac{q}{\\epsilon_0}$.\n- Electric flux passing through the base of the cone:\n$$\\Phi = \\left(\\frac{\\Omega}{4\\pi}\\right) \\frac{q}{\\epsilon_0} = \\left(\\frac{\\pi}{4\\pi}\\right) \\frac{q}{\\epsilon_0} = \\frac{q}{4\\epsilon_0}$$\n\n3. Numerical calculation:\n$$\\Phi = \\frac{8.85 \\times 10^{-9}\\text{ C}}{4 \\times (8.85 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2))} = \\frac{10^3}{4} = 250\\text{ N}\\cdot\\text{m}^2/\\text{C}$$',
    concepts: ['Gauss\'s Law with solid angle', 'Flux through cone base', 'Geometry of field lines'],
    estimatedTimeSec: 70,
    marks: 4,
    negativeMarks: 0
  }
];
