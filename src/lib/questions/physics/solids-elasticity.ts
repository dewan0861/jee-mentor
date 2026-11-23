import { Question } from '@/types';

export const solidsElasticityQuestions: Question[] = [
  {
    id: 'pyq-phy-sol-01',
    subject: 'physics',
    chapterId: 'phy-c11-solids-elasticity',
    topicId: 'phy-sol-5-strain-energy-work',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 27 Shift 2',
    questionText: 'A steel wire of length $L = 2\\text{ m}$ and cross-sectional area $A = 2\\text{ mm}^2$ is stretched by a suspended load of $W = 100\\text{ N}$. If the Young\'s modulus of steel is $Y = 2.0 \\times 10^{11}\\text{ N/m}^2$, what is the elastic potential energy stored in the stretched wire?',
    options: [
      '$0.025\\text{ J} \\; (25\\text{ mJ})$',
      '$0.050\\text{ J} \\; (50\\text{ mJ})$',
      '$0.100\\text{ J}$',
      '$0.0125\\text{ J}$'
    ],
    correctAnswer: '0', // 0.025 J
    explanation: '1. Elastic Potential Energy formula in terms of stretching force $F$:\n- Since $\\Delta L = \\frac{F L}{A Y}$, the energy stored is:\n$$U = \\frac{1}{2} F \\Delta L = \\frac{1}{2} F \\left(\\frac{F L}{A Y}\\right) = \\frac{F^2 L}{2 A Y}$$\n\n2. Converting units to SI:\n- $F = 100\\text{ N}$\n- $L = 2\\text{ m}$\n- $A = 2\\text{ mm}^2 = 2 \\times 10^{-6}\\text{ m}^2$\n- $Y = 2.0 \\times 10^{11}\\text{ N/m}^2$\n\n3. Calculating energy stored:\n$$U = \\frac{(100)^2 \\times 2}{2 \\times (2 \\times 10^{-6}) \\times (2.0 \\times 10^{11})} = \\frac{10{,}000 \\times 2}{8 \\times 10^5} = \\frac{20{,}000}{800{,}000} = \\frac{2}{80} = 0.025\\text{ J} = 25\\text{ mJ}$$\n\n(Trap note: The work done by the falling weight is $W_{\\text{ext}} = F \\Delta L = 0.050\\text{ J}$. Half of this work is stored as elastic energy, and the other half is dissipated as heat!).',
    concepts: ['Elastic strain energy', 'Young\'s modulus', 'Work-energy dissipation in stretching'],
    estimatedTimeSec: 65,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-sol-02',
    subject: 'physics',
    chapterId: 'phy-c11-solids-elasticity',
    topicId: 'phy-sol-6-elongation-own-weight',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 05 Shift 1',
    questionText: 'A heavy uniform brass cable of mass $M = 6\\text{ kg}$, length $L = 10\\text{ m}$, and uniform cross-sectional area $A = 1.0 \\times 10^{-4}\\text{ m}^2$ hangs vertically under its own weight from a rigid ceiling. If Young\'s modulus of brass is $Y = 1.0 \\times 10^{11}\\text{ N/m}^2$ and $g = 10\\text{ m/s}^2$, what is the total elongation produced in the cable?',
    options: [
      '$3.0 \\times 10^{-5}\\text{ m} \\; (0.03\\text{ mm})$',
      '$6.0 \\times 10^{-5}\\text{ m} \\; (0.06\\text{ mm})$',
      '$1.5 \\times 10^{-5}\\text{ m}$',
      '$3.0 \\times 10^{-4}\\text{ m}$'
    ],
    correctAnswer: '0', // 3.0 x 10^-5 m
    explanation: '1. Tension along a hanging wire of self-weight:\n- Consider an element $dy$ at distance $y$ from the free lower end.\n- Mass below this element is $m(y) = \\frac{M}{L} y$.\n- Tension at this point: $T(y) = m(y) g = \\frac{M g}{L} y$.\n\n2. Integrating elongation over the total length $L$:\n$$d(\\Delta L) = \\frac{T(y) dy}{A Y} = \\frac{M g y}{L A Y} dy$$\n$$\\Delta L = \\int_0^L \\frac{M g y}{L A Y} dy = \\frac{M g}{L A Y} \\left[\\frac{y^2}{2}\\right]_0^L = \\frac{M g L^2}{2 L A Y} = \\frac{M g L}{2 A Y}$$\n\n(Notice the factor of $2$ in the denominator! The effective weight causing stretch is $\\frac{1}{2} M g$ acting at the center of mass).\n\n3. Numerical calculation:\n$$\\Delta L = \\frac{(6\\text{ kg})(10\\text{ m/s}^2)(10\\text{ m})}{2 \\times (1.0 \\times 10^{-4}\\text{ m}^2) \\times (1.0 \\times 10^{11}\\text{ N/m}^2)} = \\frac{600}{2 \\times 10^7} = 3.0 \\times 10^{-5}\\text{ m} = 0.03\\text{ mm}$$',
    concepts: ['Elongation under self-weight', 'Calculus integration along hanging wire', 'Center of mass effective weight'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-sol-03',
    subject: 'physics',
    chapterId: 'phy-c11-solids-elasticity',
    topicId: 'phy-sol-8-thermal-stress-clamps',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 24 Shift 1',
    questionText: 'A copper rod of cross-sectional area $A = 4.0 \\times 10^{-4}\\text{ m}^2$ and initial length $L = 1\\text{ m}$ is held firmly between two rigid unyielding walls at temperature $T_1 = 20^\\circ\\text{C}$. If the temperature is raised to $T_2 = 70^\\circ\\text{C}$, what is the compressive thermal force exerted by the rod against the walls? (Take coefficient of linear expansion $\\alpha = 1.7 \\times 10^{-5}\\text{ K}^{-1}$ and Young\'s modulus $Y = 1.2 \\times 10^{11}\\text{ N/m}^2$).',
    options: [
      '$40.8\\text{ kN}$',
      '$20.4\\text{ kN}$',
      '$81.6\\text{ kN}$',
      '$10.2\\text{ kN}$'
    ],
    correctAnswer: '0', // 40.8 kN
    explanation: '1. Thermal strain prevented by the rigid walls:\n- Temperature change: $\\Delta T = 70^\\circ\\text{C} - 20^\\circ\\text{C} = 50\\text{ K}$.\n- Free thermal expansion if unconstrained would be: $\\Delta L_{\\text{thermal}} = L \\alpha \\Delta T$.\n- Thermal compressive strain forced upon the rod:\n$$\\text{Strain} = \\frac{\\Delta L_{\\text{thermal}}}{L} = \\alpha \\Delta T$$\n\n2. Thermal stress:\n$$\\text{Stress} = Y \\times \\text{Strain} = Y \\alpha \\Delta T$$\n$$\\text{Stress} = (1.2 \\times 10^{11}\\text{ N/m}^2) \\times (1.7 \\times 10^{-5}\\text{ K}^{-1}) \\times (50\\text{ K}) = 1.2 \\times 1.7 \\times 50 \\times 10^6 = 102 \\times 10^6\\text{ N/m}^2$$\n\n3. Compressive force exerted on the walls:\n$$F = \\text{Stress} \\times A = (102 \\times 10^6\\text{ N/m}^2) \\times (4.0 \\times 10^{-4}\\text{ m}^2) = 408 \\times 10^2\\text{ N} = 40{,}800\\text{ N} = 40.8\\text{ kN}$$',
    concepts: ['Thermal stress', 'Rigid wall constraint', 'Thermal force calculation'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-sol-04',
    subject: 'physics',
    chapterId: 'phy-c11-solids-elasticity',
    topicId: 'phy-sol-7-composite-rods',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Apr 10 Shift 2',
    questionText: 'Two metal wires of identical length $L$ and identical cross-sectional area $A$ are connected end-to-end (in series) to form a combined rod of total length $2L$. If their respective Young\'s moduli are $Y_1$ and $Y_2$, the equivalent Young\'s modulus $Y_{\\text{eq}}$ of the composite rod is given by:',
    options: [
      '$\\frac{2 Y_1 Y_2}{Y_1 + Y_2}$',
      '$\\frac{Y_1 + Y_2}{2}$',
      '$\\sqrt{Y_1 Y_2}$',
      '$\\frac{Y_1 Y_2}{Y_1 + Y_2}$'
    ],
    correctAnswer: '0', // 2 Y1 Y2 / (Y1 + Y2)
    explanation: '1. In series connection under tensile force $F$:\n- The tension $F$ is uniform throughout both wires.\n- Total elongation is the sum of individual elongations:\n$$\\Delta L_{\\text{total}} = \\Delta L_1 + \\Delta L_2$$\n\n2. Expressing elongation in terms of Young\'s modulus:\n$$\\Delta L_1 = \\frac{F L}{A Y_1}, \\quad \\Delta L_2 = \\frac{F L}{A Y_2}$$\n$$\\Delta L_{\\text{total}} = \\frac{F (2L)}{A Y_{\\text{eq}}}$$\n\n3. Equating:\n$$\\frac{F (2L)}{A Y_{\\text{eq}}} = \\frac{F L}{A Y_1} + \\frac{F L}{A Y_2}$$\nCanceling $\\frac{FL}{A}$ on both sides:\n$$\\frac{2}{Y_{\\text{eq}}} = \\frac{1}{Y_1} + \\frac{1}{Y_2} = \\frac{Y_1 + Y_2}{Y_1 Y_2}$$\n$$\\implies Y_{\\text{eq}} = \\frac{2 Y_1 Y_2}{Y_1 + Y_2}$$\n\n(The equivalent Young\'s modulus of two wires in series is the HARMONIC MEAN of their individual moduli).',
    concepts: ['Composite rods in series', 'Harmonic mean equivalent modulus', 'Spring analogy for elasticity'],
    estimatedTimeSec: 65,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-sol-05',
    subject: 'physics',
    chapterId: 'phy-c11-solids-elasticity',
    topicId: 'phy-sol-4-poissons-ratio-relations',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2022,
    pyqShift: 'JEE Advanced Paper 1',
    questionText: 'A cylindrical metallic wire has Poisson\'s ratio $\\sigma = 0.25$. Under an axial tensile stress, a longitudinal strain of $\\frac{\\Delta L}{L} = +0.20\\%$ is produced in the wire. What is the percentage change in the volume of the wire $\\left(\\frac{\\Delta V}{V} \\times 100\\%\\right)$?',
    options: [
      '$+0.10\\%$',
      '$+0.20\\%$',
      '$-0.10\\%$',
      '$+0.05\\%$'
    ],
    correctAnswer: '0', // +0.10%
    explanation: '1. Formula for volume of a cylindrical wire of length $L$ and radius $r$:\n$$V = \\pi r^2 L$$\n\n2. Taking natural logarithm and differentiating:\n$$\\ln V = \\ln \\pi + 2 \\ln r + \\ln L$$\n$$\\frac{\\Delta V}{V} = 2 \\frac{\\Delta r}{r} + \\frac{\\Delta L}{L}$$\n\n3. Relation with Poisson\'s ratio $\\sigma$:\n- Poisson\'s ratio is the negative ratio of lateral strain to longitudinal strain:\n$$\\sigma = -\\frac{\\Delta r / r}{\\Delta L / L} \\implies \\frac{\\Delta r}{r} = -\\sigma \\frac{\\Delta L}{L}$$\n\n4. Substituting into the fractional volume change expression:\n$$\\frac{\\Delta V}{V} = 2\\left(-\\sigma \\frac{\\Delta L}{L}\\right) + \\frac{\\Delta L}{L} = (1 - 2\\sigma) \\frac{\\Delta L}{L}$$\n\n5. Substituting given values ($\\sigma = 0.25, \\frac{\\Delta L}{L} = +0.20\\%$):\n$$\\frac{\\Delta V}{V} = (1 - 2(0.25)) (+0.20\\%) = (1 - 0.50) (+0.20\\%) = 0.50 \\times 0.20\\% = +0.10\\%$$',
    concepts: ['Poisson\'s ratio', 'Fractional volume change', 'Differential calculus of geometry'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-sol-06',
    subject: 'physics',
    chapterId: 'phy-c11-solids-elasticity',
    topicId: 'phy-sol-2-stress-strain-curve',
    type: 'numerical',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 08 Shift 2',
    questionText: 'A crane cable of steel has a safe permissible tensile stress of $2.4 \\times 10^8\\text{ N/m}^2$. The crane is designed to lift a maximum mass of $M = 2000\\text{ kg}$ with an upward acceleration of $a = 4\\text{ m/s}^2$. If $g = 10\\text{ m/s}^2$ and $\\pi \\approx 3.14$, what is the minimum required cross-sectional area of the steel cable in square millimeters ($\\text{mm}^2$)? (Round off to nearest integer).',
    options: [],
    correctAnswer: '117', // 117 mm^2
    explanation: '1. Upward tension in the cable during acceleration:\n$$T = M(g + a) = (2000\\text{ kg})(10 + 4\\text{ m/s}^2) = 2000 \\times 14 = 28{,}000\\text{ N}$$\n\n2. Relation between tensile stress, tension, and area:\n$$\\text{Stress} = \\frac{T}{A} \\le \\sigma_{\\text{perm}}$$\n$$A \\ge \\frac{T}{\\sigma_{\\text{perm}}} = \\frac{28{,}000\\text{ N}}{2.4 \\times 10^8\\text{ N/m}^2} = \\frac{28}{2.4 \\times 10^5} = \\frac{7}{0.6 \\times 10^5} = 1.1667 \\times 10^{-4}\\text{ m}^2$$\n\n3. Converting to $\\text{mm}^2$ ($1\\text{ m}^2 = 10^6\\text{ mm}^2$):\n$$A = 1.1667 \\times 10^{-4} \\times 10^6\\text{ mm}^2 = 116.67\\text{ mm}^2 \\approx 117\\text{ mm}^2$$',
    concepts: ['Tensile stress in accelerating cable', 'Permissible stress', 'Design of structural cables'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 0
  }
];
