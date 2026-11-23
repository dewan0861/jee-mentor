import { Question } from '@/types';

export const fluidsQuestions: Question[] = [
  {
    id: 'pyq-phy-fld-01',
    subject: 'physics',
    chapterId: 'phy-c11-fluids',
    topicId: 'phy-fld-6-torricelli-efflux',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 29 Shift 2',
    questionText: 'A large cylindrical storage tank of total height $H = 20\\text{ m}$ is filled to the brim with water. Two small holes are punched on the vertical wall of the tank: hole $A$ at depth $h_1 = 5\\text{ m}$ from the top surface, and hole $B$ at depth $h_2 = 15\\text{ m}$ from the top surface. If $R_A$ and $R_B$ are the horizontal distances (ranges) from the base of the tank where the two water jets strike the level ground, what is the ratio $\\frac{R_A}{R_B}$ and the maximum possible range $R_{\\text{max}}$ for any hole?',
    options: [
      '$\\frac{R_A}{R_B} = 1 : 1, \\quad R_{\\text{max}} = 20\\text{ m}$',
      '$\\frac{R_A}{R_B} = 1 : 3, \\quad R_{\\text{max}} = 20\\text{ m}$',
      '$\\frac{R_A}{R_B} = 1 : 1, \\quad R_{\\text{max}} = 10\\text{ m}$',
      '$\\frac{R_A}{R_B} = 3 : 1, \\quad R_{\\text{max}} = 40\\text{ m}$'
    ],
    correctAnswer: '0', // 1 : 1, R_max = 20 m
    explanation: '1. Derivation of horizontal range from Torricelli\'s Law:\n- For an orifice drilled at depth $h$ below the top surface:\n$$\\text{Efflux speed } v = \\sqrt{2gh}$$\n- The orifice is at height $(H - h)$ above the ground level.\n- Time taken for the water jet to free-fall to the ground:\n$$t = \\sqrt{\\frac{2(H - h)}{g}}$$\n- Horizontal range $R = v t$:\n$$R = \\sqrt{2gh} \\times \\sqrt{\\frac{2(H - h)}{g}} = 2\\sqrt{h(H - h)}$$\n\n2. Computing ranges for hole $A$ ($h_1 = 5\\text{ m}$) and hole $B$ ($h_2 = 15\\text{ m}$):\n- For $A$: $R_A = 2\\sqrt{5(20 - 5)} = 2\\sqrt{5 \\times 15} = 2\\sqrt{75} = 10\\sqrt{3}\\text{ m}$.\n- For $B$: $R_B = 2\\sqrt{15(20 - 15)} = 2\\sqrt{15 \\times 5} = 2\\sqrt{75} = 10\\sqrt{3}\\text{ m}$.\n- Therefore, $\\frac{R_A}{R_B} = 1 : 1$.\n(Symmetry theorem: any two orifices located symmetrically at depths $h$ and $(H - h)$ produce identical horizontal ranges!).\n\n3. Maximum possible range $R_{\\text{max}}$:\n- Range $R = 2\\sqrt{h(H - h)}$ is maximized when $h(H - h)$ is maximized, which occurs at the midpoint $h = H/2 = 10\\text{ m}$:\n$$R_{\\text{max}} = 2\\sqrt{\\left(\\frac{H}{2}\\right)\\left(\\frac{H}{2}\\right)} = 2\\left(\\frac{H}{2}\\right) = H = 20\\text{ m}$$',
    concepts: ['Torricelli\'s Law', 'Horizontal range of liquid jet', 'Calculus maximum of efflux range'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-fld-02',
    subject: 'physics',
    chapterId: 'phy-c11-fluids',
    topicId: 'phy-fld-8-stokes-terminal-velocity',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 31 Shift 1',
    questionText: 'Twenty-seven identical spherical small water droplets, each falling through air with a steady terminal velocity of $v_0 = 0.10\\text{ m/s}$, coalesce to form a single large spherical drop. Assuming viscous Stokes drag governs their descent and density of air is negligible compared to water, what is the terminal velocity of the combined large drop?',
    options: [
      '$0.90\\text{ m/s}$',
      '$0.30\\text{ m/s}$',
      '$2.70\\text{ m/s}$',
      '$0.60\\text{ m/s}$'
    ],
    correctAnswer: '0', // 0.90 m/s
    explanation: '1. Conservation of volume during coalescence of $N = 27$ droplets:\n- Let $r$ be the radius of each small droplet and $R$ be the radius of the large drop.\n$$V_{\\text{large}} = N \\times V_{\\text{small}} \\implies \\frac{4}{3}\\pi R^3 = 27 \\left(\\frac{4}{3}\\pi r^3\\right)$$\n$$R^3 = 27 r^3 \\implies R = (27)^{1/3} r = 3r$$\n\n2. Terminal velocity dependence on droplet radius:\n- By Stokes\' Law, terminal velocity is given by:\n$$v_t = \\frac{2}{9}\\frac{r^2 (\\rho - \\sigma)g}{\\eta} \\propto r^2$$\n\n3. Scaling terminal velocity:\n$$\\frac{v_t\'}{v_0} = \\left(\\frac{R}{r}\\right)^2 = (3)^2 = 9$$\n$$v_t\' = 9 \\times v_0 = 9 \\times 0.10\\text{ m/s} = 0.90\\text{ m/s}$$',
    concepts: ['Stokes\' Law', 'Terminal velocity radius squared scaling', 'Droplet coalescence'],
    estimatedTimeSec: 65,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-fld-03',
    subject: 'physics',
    chapterId: 'phy-c11-fluids',
    topicId: 'phy-fld-12-capillary-rise',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2023,
    pyqShift: 'Jan 25 Shift 2',
    questionText: 'A glass capillary tube of radius $r = 0.5\\text{ mm}$ is dipped vertically in a water reservoir. Water rises to a normal capillary height of $h = 3.0\\text{ cm}$ with a hemispherical meniscus of radius of curvature $R_0 = 0.5\\text{ mm}$. The capillary tube is now pushed downwards so that its exposed upper length above the water surface is only $L = 1.5\\text{ cm}$ (insufficient length). What happens to the water at the top opening?',
    options: [
      'Water does not overflow; the meniscus flattens to a new radius of curvature $R\' = 1.0\\text{ mm}$.',
      'Water overflows continuously from the top like a fountain.',
      'Water does not overflow; the meniscus sharpens to $R\' = 0.25\\text{ mm}$.',
      'Water level drops down to match the external reservoir level.'
    ],
    correctAnswer: '0', // Does not overflow, R' = 1.0 mm
    explanation: '1. Physics of Insufficient Capillary Tube Length:\n- A common student misconception is that water will spill out or overflow like a fountain. This violates the principle of conservation of energy (perpetual motion machine!).\n- The hydrostatic pressure at height $h$ is balanced by Laplace excess pressure across the curved meniscus:\n$$\\rho g h = \\frac{2S}{R} \\implies h R = \\frac{2S}{\\rho g} = \\text{constant}$$\nwhere $R$ is the radius of curvature of the meniscus.\n\n2. When tube length is reduced to $L < h$:\n- The water rises to the very top rim of the tube and stops.\n- It adjusts its meniscus shape (making the contact angle $\\theta$ less acute) so that the radius of curvature $R\'$ INCREASES (meniscus flattens):\n$$L \\times R\' = h \\times R_0$$\n\n3. Calculating new radius of curvature $R\'$:\n$$(1.5\\text{ cm}) R\' = (3.0\\text{ cm}) (0.5\\text{ mm})$$\n$$R\' = \\frac{3.0}{1.5} \\times 0.5\\text{ mm} = 2 \\times 0.5\\text{ mm} = 1.0\\text{ mm}$$',
    concepts: ['Capillary rise of insufficient length', 'Jurin\'s law product h*R = constant', 'Laplace excess pressure'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-fld-04',
    subject: 'physics',
    chapterId: 'phy-c11-fluids',
    topicId: 'phy-fld-10-surface-tension-energy',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 06 Shift 1',
    questionText: 'The surface tension of a soap solution is $S = 0.03\\text{ N/m}$. What is the work done in blowing a spherical soap bubble from an initial radius of $r_1 = 5\\text{ cm}$ to a final radius of $r_2 = 10\\text{ cm}$? (Take $\\pi \\approx 3.14$).',
    options: [
      '$\\approx 5.65\\text{ mJ} \\; (5.65 \\times 10^{-3}\\text{ J})$',
      '$\\approx 2.83\\text{ mJ}$',
      '$\\approx 11.3\\text{ mJ}$',
      '$\\approx 1.41\\text{ mJ}$'
    ],
    correctAnswer: '0', // approx 5.65 mJ
    explanation: '1. Soap Bubble Free Surfaces in Air:\n- A soap bubble in air has TWO liquid-air interfaces (an inner surface and an outer surface).\n- Increase in total surface area:\n$$\\Delta A_{\\text{total}} = 2 \\times \\left[4\\pi r_2^2 - 4\\pi r_1^2\\right] = 8\\pi (r_2^2 - r_1^2)$$\n\n2. Calculating area difference:\n- $r_1 = 5\\text{ cm} = 0.05\\text{ m} \\implies r_1^2 = 0.0025\\text{ m}^2$.\n- $r_2 = 10\\text{ cm} = 0.10\\text{ m} \\implies r_2^2 = 0.0100\\text{ m}^2$.\n$$(r_2^2 - r_1^2) = 0.0100 - 0.0025 = 0.0075\\text{ m}^2$$\n$$\\Delta A_{\\text{total}} = 8\\pi (0.0075) = 0.060\\pi\\text{ m}^2$$\n\n3. Work Done $W = S \\times \\Delta A_{\\text{total}}$:\n$$W = (0.03\\text{ N/m}) \\times (0.060\\pi\\text{ m}^2) = 0.0018\\pi\\text{ J}$$\n$$W = 0.0018 \\times 3.1416 \\approx 0.005655\\text{ J} = 5.655\\text{ mJ} \\approx 5.65\\text{ mJ}$$',
    concepts: ['Work done in expanding bubble', 'Two interfaces of soap bubble', 'Surface energy calculation'],
    estimatedTimeSec: 70,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-fld-05',
    subject: 'physics',
    chapterId: 'phy-c11-fluids',
    topicId: 'phy-fld-3-archimedes-buoyancy',
    type: 'single_mcq',
    difficulty: 'easy',
    pyqYear: 2024,
    pyqShift: 'Apr 04 Shift 2',
    questionText: 'An ice cube of volume $V = 100\\text{ cm}^3$ and density $\\rho_{\\text{ice}} = 0.90\\text{ g/cm}^3$ floats freely in a cylindrical beaker filled with water of density $\\rho_w = 1.00\\text{ g/cm}^3$. When the entire ice cube melts completely into water, the level of water in the beaker will:',
    options: [
      'Remain completely unchanged',
      'Rise by $10\\%$ of the ice volume',
      'Fall by $10\\%$ of the ice volume',
      'Depend on the cross-sectional area of the beaker'
    ],
    correctAnswer: '0', // Remain completely unchanged
    explanation: '1. Volume of water displaced by floating ice:\n- Mass of the ice cube: $M = \\rho_{\\text{ice}} V = (0.90\\text{ g/cm}^3)(100\\text{ cm}^3) = 90\\text{ grams}$.\n- By Archimedes\' Principle, the buoyant force equals the weight of the ice:\n$$F_B = M g \\implies \\rho_w V_{\\text{disp}} g = M g$$\n$$V_{\\text{disp}} = \\frac{M}{\\rho_w} = \\frac{90\\text{ g}}{1.00\\text{ g/cm}^3} = 90\\text{ cm}^3$$\n(The submerged portion of the ice occupies $90\\text{ cm}^3$).\n\n2. Volume of water produced upon melting:\n- When the ice melts completely, its mass is conserved: $M_{\\text{water}} = 90\\text{ grams}$.\n- Volume of this melted water:\n$$V_{\\text{melted}} = \\frac{M_{\\text{water}}}{\\rho_w} = \\frac{90\\text{ g}}{1.00\\text{ g/cm}^3} = 90\\text{ cm}^3$$\n\n3. Conclusion:\n- The volume of water formed by melting ($90\\text{ cm}^3$) EXACTLY equals the space originally displaced by the submerged ice ($90\\text{ cm}^3$).\n- Hence, the melted water exactly fills the previously displaced hole, and the water level in the beaker REMAINS COMPLETELY UNCHANGED.',
    concepts: ['Archimedes\' Principle', 'Floatation of ice', 'Level invariance upon melting'],
    estimatedTimeSec: 50,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-fld-06',
    subject: 'physics',
    chapterId: 'phy-c11-fluids',
    topicId: 'phy-fld-7-viscosity-poiseuille',
    type: 'numerical',
    difficulty: 'hard',
    pyqYear: 2023,
    pyqShift: 'Apr 11 Shift 2',
    questionText: 'Under a constant driving pressure difference, the rate of laminar flow of water through a horizontal capillary tube of radius $r$ is $Q = 16\\text{ mL/min}$. If the tube is replaced by another tube of the same length but having a radius of $2r$, while maintaining the same pressure difference, what will be the new rate of flow in $\\text{mL/min}$?',
    options: [],
    correctAnswer: '256', // 256 mL/min
    explanation: '1. Poiseuille\'s Law for Laminar Volume Flow Rate:\n$$Q = \\frac{\\pi \\Delta P r^4}{8 \\eta L}$$\n\n2. Dependence on radius $r$:\n- For fixed pressure difference $\\Delta P$, viscosity $\\eta$, and length $L$:\n$$Q \\propto r^4$$\n\n3. Scaling when radius is doubled ($r\' = 2r$):\n$$\\frac{Q\'}{Q} = \\left(\\frac{r\'}{r}\\right)^4 = \\left(\\frac{2r}{r}\\right)^4 = 2^4 = 16$$\n\n4. Calculating new flow rate:\n$$Q\' = 16 \\times Q = 16 \\times 16\\text{ mL/min} = 256\\text{ mL/min}$$',
    concepts: ['Poiseuille\'s Law', 'Radius to the fourth power scaling', 'Viscous capillary flow rate'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 0
  }
];
