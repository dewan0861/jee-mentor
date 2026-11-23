import { Question } from '@/types';

export const magnetismMatterQuestions: Question[] = [
  {
    id: 'pyq-phy-mat-01',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism-matter',
    topicId: 'phy-mat-4-earths-magnetism',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 27 Shift 1',
    questionText: 'At a certain location on Earth\'s surface, the apparent angles of dip measured in two mutually perpendicular vertical planes are $\\delta_1 = 45^\\circ$ and $\\delta_2 = 30^\\circ$. What is the true angle of dip $\\delta$ at this location?',
    options: [
      '$\\tan^{-1}(0.5) \\; (\\approx 26.6^\\circ)$',
      '$37.5^\\circ$',
      '$\\tan^{-1}(2) \\; (\\approx 63.4^\\circ)$',
      '$60^\\circ$'
    ],
    correctAnswer: '0', // tan^-1(0.5) approx 26.6 deg
    explanation: '1. Apparent dip in two mutually perpendicular vertical planes:\n- Let the true dip in the magnetic meridian be $\\delta$.\n- If plane 1 makes an angle $\\theta$ with the magnetic meridian, then plane 2 (being perpendicular) makes an angle $(90^\\circ - \\theta)$.\n- Apparent dips satisfy:\n$$\\tan\\delta_1 = \\frac{\\tan\\delta}{\\cos\\theta} \\implies \\cot\\delta_1 = \\cot\\delta \\cos\\theta$$\n$$\\tan\\delta_2 = \\frac{\\tan\\delta}{\\cos(90^\\circ - \\theta)} = \\frac{\\tan\\delta}{\\sin\\theta} \\implies \\cot\\delta_2 = \\cot\\delta \\sin\\theta$$\n\n2. Squaring and adding the two relations:\n$$\\cot^2\\delta_1 + \\cot^2\\delta_2 = \\cot^2\\delta (\\cos^2\\theta + \\sin^2\\theta) = \\cot^2\\delta$$\n\n3. Substituting given values ($\\delta_1 = 45^\\circ, \\delta_2 = 30^\\circ$):\n- $\\cot 45^\\circ = 1 \\implies \\cot^2 45^\\circ = 1^2 = 1$\n- $\\cot 30^\\circ = \\sqrt{3} \\implies \\cot^2 30^\\circ = (\\sqrt{3})^2 = 3$\n$$\\cot^2\\delta = 1 + 3 = 4 \\implies \\cot\\delta = 2$$\n$$\\tan\\delta = \\frac{1}{\\cot\\delta} = \\frac{1}{2} = 0.5 \\implies \\delta = \\tan^{-1}(0.5) \\approx 26.6^\\circ$$',
    concepts: ['True dip vs apparent dip', 'Mutually perpendicular planes relation', 'Earth\'s magnetic field elements'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-mat-02',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism-matter',
    topicId: 'phy-mat-3-vibration-magnetometer',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 30 Shift 1',
    questionText: 'A thin bar magnet of magnetic dipole moment $M$ and moment of inertia $I$ oscillates with a time period $T_1 = 2.0\\text{ seconds}$ in a vibration magnetometer in Earth\'s horizontal magnetic field $B_H$. An identical bar magnet of the same mass, dimensions, and magnetic moment is placed directly on top of it with like poles aligned together. What is the new oscillation time period $T_2$ of the combined system?',
    options: [
      '$2.0\\text{ seconds}$',
      '$4.0\\text{ seconds}$',
      '$1.41\\text{ seconds} \\; (\\sqrt{2}\\text{ s})$',
      '$1.0\\text{ second}$'
    ],
    correctAnswer: '0', // 2.0 seconds
    explanation: '1. Formula for oscillation period in a vibration magnetometer:\n$$T = 2\\pi \\sqrt{\\frac{I}{M B_H}}$$\n\n2. For the combined system of two identical stacked magnets with like poles aligned:\n- Moments of inertia add directly: $I\' = I + I = 2I$.\n- Magnetic dipole moments add directly: $M\' = M + M = 2M$.\n\n3. Calculating the new time period $T_2$:\n$$T_2 = 2\\pi \\sqrt{\\frac{I\'}{M\' B_H}} = 2\\pi \\sqrt{\\frac{2I}{2M B_H}} = 2\\pi \\sqrt{\\frac{I}{M B_H}} = T_1 = 2.0\\text{ seconds}$$\n\n(Physics Insight: Since both the rotational inertia and the restoring magnetic torque scale by the exact same factor of 2, the angular acceleration $\\alpha = -\\frac{M B_H}{I}\\theta$ is completely unchanged, leaving the time period invariant!).',
    concepts: ['Vibration magnetometer', 'Composite magnetic moments', 'Rotational inertia invariance of oscillation period'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-mat-03',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism-matter',
    topicId: 'phy-mat-4-earths-magnetism',
    type: 'single_mcq',
    difficulty: 'easy',
    pyqYear: 2023,
    pyqShift: 'Jan 29 Shift 1',
    questionText: 'At a geographic station, the horizontal component of Earth\'s magnetic field is $B_H = 0.30\\text{ Gauss}$, and the angle of dip is $\\delta = 60^\\circ$. What is the magnitude of the total magnetic field of the Earth $B_E$ and its vertical component $B_V$ at that station?',
    options: [
      '$B_E = 0.60\\text{ G}, \\quad B_V = 0.30\\sqrt{3}\\text{ G} \\; (\\approx 0.52\\text{ G})$',
      '$B_E = 0.30\\text{ G}, \\quad B_V = 0.15\\text{ G}$',
      '$B_E = 0.60\\text{ G}, \\quad B_V = 0.30\\text{ G}$',
      '$B_E = 0.52\\text{ G}, \\quad B_V = 0.60\\text{ G}$'
    ],
    correctAnswer: '0', // B_E = 0.60 G, B_V = 0.30*sqrt(3) G
    explanation: '1. Relation between horizontal component $B_H$, total field $B_E$, and dip $\\delta$:\n$$B_H = B_E \\cos\\delta$$\n$$0.30\\text{ G} = B_E \\cos 60^\\circ = B_E \\left(\\frac{1}{2}\\right) \\implies B_E = 2 \\times 0.30\\text{ G} = 0.60\\text{ Gauss}$$\n\n2. Vertical component $B_V$:\n$$B_V = B_E \\sin\\delta = 0.60 \\times \\sin 60^\\circ = 0.60 \\times \\frac{\\sqrt{3}}{2} = 0.30\\sqrt{3}\\text{ Gauss} \\approx 0.5196\\text{ Gauss} \\approx 0.52\\text{ Gauss}$$',
    concepts: ['Earth\'s magnetic components', 'Angle of dip resolution', 'Total terrestrial magnetic field'],
    estimatedTimeSec: 50,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-mat-04',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism-matter',
    topicId: 'phy-mat-6-dia-para-ferro',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 06 Shift 1',
    questionText: 'A sample of paramagnetic salt has a magnetic susceptibility of $\\chi_1 = 1.2 \\times 10^{-4}$ at absolute temperature $T_1 = 300\\text{ K}$. According to Curie\'s Law, what is its magnetic susceptibility $\\chi_2$ and relative permeability $\\mu_r$ when the salt is cooled down to $T_2 = 150\\text{ K}$?',
    options: [
      '$\\chi_2 = 2.4 \\times 10^{-4}, \\quad \\mu_r = 1.00024$',
      '$\\chi_2 = 0.6 \\times 10^{-4}, \\quad \\mu_r = 1.00006$',
      '$\\chi_2 = 2.4 \\times 10^{-4}, \\quad \\mu_r = 0.99976$',
      '$\\chi_2 = 4.8 \\times 10^{-4}, \\quad \\mu_r = 1.00048$'
    ],
    correctAnswer: '0', // chi_2 = 2.4 x 10^-4, mu_r = 1.00024
    explanation: '1. Curie\'s Law for Paramagnetism:\n- In weak fields, susceptibility varies inversely with absolute temperature:\n$$\\chi_m = \\frac{C}{T} \\implies \\chi_1 T_1 = \\chi_2 T_2$$\n\n2. Calculating susceptibility at $T_2 = 150\\text{ K}$:\n$$\\chi_2 = \\chi_1 \\left(\\frac{T_1}{T_2}\\right) = (1.2 \\times 10^{-4}) \\times \\left(\\frac{300\\text{ K}}{150\\text{ K}}\\right) = 1.2 \\times 10^{-4} \\times 2 = 2.4 \\times 10^{-4}$$\n\n3. Calculating Relative Permeability $\\mu_r$:\n$$\\mu_r = 1 + \\chi_m = 1 + 2.4 \\times 10^{-4} = 1.00024$$',
    concepts: ['Curie\'s Law', 'Paramagnetic susceptibility temperature scaling', 'Relative permeability'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-mat-05',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism-matter',
    topicId: 'phy-mat-1-bar-magnet-solenoid',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2022,
    pyqShift: 'JEE Advanced Paper 2',
    questionText: 'A thin uniform bar magnet of length $L$ and magnetic dipole moment $M$ is bent into a uniform semicircular arc. What is the new magnetic dipole moment $M\'$ of the bent magnet?',
    options: [
      '$\\frac{2}{\\pi} M \\; (\\approx 0.637 M)$',
      '$\\frac{\\pi}{2} M$',
      '$\\frac{M}{\\pi}$',
      '$M$ (unchanged)'
    ],
    correctAnswer: '0', // (2 / pi) * M
    explanation: '1. Original straight bar magnet:\n- Let $m$ be the pole strength of each magnetic pole.\n- Distance between poles is $L$.\n- Original magnetic dipole moment: $M = m L$.\n\n2. Geometry of the semicircular arc:\n- When the wire is bent into a semicircle of radius $R$, the length of the arc is the original length $L$:\n$$\\pi R = L \\implies R = \\frac{L}{\\pi}$$\n\n3. Distance between the poles in the bent configuration:\n- The two magnetic poles are now located at the opposite ends of the diameter of the semicircle.\n- Effective distance between poles: $d = 2 R = 2 \\left(\\frac{L}{\\pi}\\right) = \\frac{2L}{\\pi}$.\n\n4. New magnetic dipole moment $M\'$:\n- The pole strength $m$ is completely unaffected by bending:\n$$M\' = m \\times d = m \\left(\\frac{2L}{\\pi}\\right) = \\frac{2}{\\pi} (m L) = \\frac{2}{\\pi} M \\approx 0.637 M$$',
    concepts: ['Magnetic dipole moment of bent magnet', 'Pole strength conservation', 'Geometric distance between magnetic poles'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-mat-06',
    subject: 'physics',
    chapterId: 'phy-c12-magnetism-matter',
    topicId: 'phy-mat-1-bar-magnet-solenoid',
    type: 'numerical',
    difficulty: 'easy',
    pyqYear: 2023,
    pyqShift: 'Apr 11 Shift 1',
    questionText: 'A short magnetic dipole has a magnetic moment $M$. If the magnitude of the magnetic field at a distance of $d = 20\\text{ cm}$ along its axial line is $B_{\\text{axial}}$, and at the same distance $d$ along its equatorial line is $B_{\\text{equatorial}}$, what is the exact integer ratio $\\frac{B_{\\text{axial}}}{B_{\\text{equatorial}}}$?',
    options: [],
    correctAnswer: '2', // 2
    explanation: '1. Magnetic field of a short magnetic dipole ($d \\gg l$):\n- Field on the axial line:\n$$B_{\\text{axial}} = \\frac{\\mu_0}{4\\pi} \\frac{2M}{d^3}$$\n- Field on the equatorial line:\n$$B_{\\text{equatorial}} = \\frac{\\mu_0}{4\\pi} \\frac{M}{d^3}$$\n\n2. Taking the ratio:\n$$\\frac{B_{\\text{axial}}}{B_{\\text{equatorial}}} = \\frac{\\frac{\\mu_0}{4\\pi} \\frac{2M}{d^3}}{\\frac{\\mu_0}{4\\pi} \\frac{M}{d^3}} = \\frac{2}{1} = 2$$',
    concepts: ['Axial vs equatorial magnetic field', 'Short dipole field ratio', 'Inverse cube distance dependence'],
    estimatedTimeSec: 40,
    marks: 4,
    negativeMarks: 0
  }
];
