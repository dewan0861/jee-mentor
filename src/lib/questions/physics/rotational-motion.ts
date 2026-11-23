import { Question } from '@/types';

export const rotationalMotionQuestions: Question[] = [
  {
    id: 'pyq-phy-rot-01',
    subject: 'physics',
    chapterId: 'phy-c11-rotational-motion',
    topicId: 'phy-rot-12-rolling-incline',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 27 Shift 1',
    questionText: 'A solid sphere, a uniform disc, and a hollow thin cylinder of identical mass $M$ and radius $R$ are released from rest from the top of an inclined plane of inclination $\\theta$ and vertical height $H$. Assuming pure rolling down the incline, what is the ratio of their translational kinetic energies when they reach the bottom of the incline?',
    options: [
      '$\\frac{5}{7} : \\frac{2}{3} : \\frac{1}{2}$',
      '$1 : 1 : 1$',
      '$\\frac{10}{7} : \\frac{4}{3} : 1$',
      '$\\frac{7}{5} : \\frac{3}{2} : 2$'
    ],
    correctAnswer: '0', // 5/7 : 2/3 : 1/2
    explanation: '1. Conservation of Mechanical Energy in pure rolling:\n- Since the instantaneous point of contact is at rest, static friction does no net work.\n$$M g H = K_{\\text{total}} = K_{\\text{trans}} + K_{\\text{rot}}$$\n\n2. Expressing $K_{\\text{rot}}$ in terms of $K_{\\text{trans}}$ for pure rolling ($v = \\omega R$):\n$$K_{\\text{rot}} = \\frac{1}{2} I_{\\text{cm}} \\omega^2 = \\frac{1}{2} I_{\\text{cm}} \\left(\\frac{v^2}{R^2}\\right) = \\left(\\frac{I_{\\text{cm}}}{M R^2}\\right) \\left(\\frac{1}{2} M v^2\\right) = \\left(\\frac{I_{\\text{cm}}}{M R^2}\\right) K_{\\text{trans}}$$\n\n3. Total energy relation:\n$$M g H = K_{\\text{trans}} \\left(1 + \\frac{I_{\\text{cm}}}{M R^2}\\right) \\implies K_{\\text{trans}} = \\frac{M g H}{1 + \\frac{I_{\\text{cm}}}{M R^2}}$$\n\n4. Evaluating for each body:\n- Solid sphere: $\\frac{I_{\\text{cm}}}{M R^2} = \\frac{2}{5} \\implies K_{\\text{trans}} = \\frac{M g H}{1 + 2/5} = \\frac{5}{7} M g H$.\n- Disc: $\\frac{I_{\\text{cm}}}{M R^2} = \\frac{1}{2} \\implies K_{\\text{trans}} = \\frac{M g H}{1 + 1/2} = \\frac{2}{3} M g H$.\n- Hollow cylinder: $\\frac{I_{\\text{cm}}}{M R^2} = 1 \\implies K_{\\text{trans}} = \\frac{M g H}{1 + 1} = \\frac{1}{2} M g H$.\n\nRatio of translational kinetic energies = $\\frac{5}{7} : \\frac{2}{3} : \\frac{1}{2}$.',
    concepts: ['Pure rolling on incline', 'Energy partition', 'Translational vs Rotational kinetic energy'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-rot-02',
    subject: 'physics',
    chapterId: 'phy-c11-rotational-motion',
    topicId: 'phy-rot-2-com-cavity',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2024,
    pyqShift: 'Apr 05 Shift 2',
    questionText: 'From a uniform circular disc of radius $R$ and mass $M$, a circular hole of radius $R/2$ is scooped out touching the circumference of the disc. What is the moment of inertia of the remaining portion about an axis passing through the center of the original disc and perpendicular to its plane?',
    options: [
      '$\\frac{13}{32} M R^2$',
      '$\\frac{11}{32} M R^2$',
      '$\\frac{9}{32} M R^2$',
      '$\\frac{15}{32} M R^2$'
    ],
    correctAnswer: '0', // 13/32 M R^2
    explanation: '1. Negative Mass Principle:\n- Complete disc has area $A_0 = \\pi R^2$ and mass $M$.\n- Scooped circular cavity has radius $R/2$, area $A\' = \\pi (R/2)^2 = \\frac{\\pi R^2}{4} = \\frac{A_0}{4}$.\n- By uniform mass distribution, mass of the cavity is $m = \\frac{M}{4}$.\n\n2. Distance of cavity center from original center:\n- Since the cavity touches the outer rim and the original center, its center is at $d = \\frac{R}{2}$.\n\n3. Moment of inertia of complete disc about central perpendicular axis:\n$$I_0 = \\frac{1}{2} M R^2$$\n\n4. Moment of inertia of cavity about the SAME central axis (Parallel Axis Theorem):\n$$I_{\\text{cavity}} = I_{\\text{cm, cavity}} + m d^2 = \\frac{1}{2} m \\left(\\frac{R}{2}\\right)^2 + m \\left(\\frac{R}{2}\\right)^2 = \\frac{3}{2} m \\left(\\frac{R^2}{4}\\right) = \\frac{3}{8} m R^2$$\nSubstitute $m = M/4$:\n$$I_{\\text{cavity}} = \\frac{3}{8} \\left(\\frac{M}{4}\\right) R^2 = \\frac{3}{32} M R^2$$\n\n5. Moment of inertia of remaining portion:\n$$I_{\\text{rem}} = I_0 - I_{\\text{cavity}} = \\frac{1}{2} M R^2 - \\frac{3}{32} M R^2 = \\left(\\frac{16 - 3}{32}\\right) M R^2 = \\frac{13}{32} M R^2$$',
    concepts: ['Cavity theorem', 'Parallel axis theorem', 'Moment of inertia superposition'],
    estimatedTimeSec: 100,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-rot-03',
    subject: 'physics',
    chapterId: 'phy-c11-rotational-motion',
    topicId: 'phy-rot-9-conservation-angular-momentum',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2024,
    pyqShift: 'Jan 30 Shift 2',
    questionText: 'A uniform thin rod of mass $M = 2\\text{ kg}$ and length $L = 1.2\\text{ m}$ is freely pivoted at its upper end to rotate in a vertical plane. A small sticky projectile of mass $m = 0.5\\text{ kg}$ moving horizontally with speed $v_0 = 10\\text{ m/s}$ strikes the lower tip of the hanging rod and gets embedded in it. What is the angular speed $\\omega$ of the composite system immediately after the impact?',
    options: [
      '$\\frac{25}{7}\\text{ rad/s} \\; (\\approx 3.57\\text{ rad/s})$',
      '$\\frac{15}{7}\\text{ rad/s}$',
      '$5.0\\text{ rad/s}$',
      '$\\frac{20}{7}\\text{ rad/s}$'
    ],
    correctAnswer: '0', // 25/7 rad/s
    explanation: '1. Conservation of Angular Momentum about the fixed Pivot Point:\n- The pivot exerts an unknown impulsive reaction during the collision, so linear momentum is NOT conserved.\n- However, the line of action of the pivot reaction passes directly through the pivot point, producing ZERO torque about the pivot.\n- Therefore, total angular momentum about the pivot is strictly conserved: $L_i = L_f$.\n\n2. Initial Angular Momentum about pivot ($O$):\n$$L_i = m v_0 L = (0.5\\text{ kg})(10\\text{ m/s})(1.2\\text{ m}) = 6.0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$\n\n3. Total Moment of Inertia about pivot after embedding:\n- Rod pivoted at one end: $I_{\\text{rod}} = \\frac{1}{3} M L^2 = \\frac{1}{3} (2) (1.2)^2 = \\frac{2}{3} \\times 1.44 = 0.96\\text{ kg}\\cdot\\text{m}^2$.\n- Embedded projectile at distance $L$: $I_{\\text{proj}} = m L^2 = (0.5)(1.2)^2 = 0.5 \\times 1.44 = 0.72\\text{ kg}\\cdot\\text{m}^2$.\n- Combined moment of inertia:\n$$I_{\\text{total}} = 0.96 + 0.72 = 1.68\\text{ kg}\\cdot\\text{m}^2 = \\frac{168}{100} = \\frac{42}{25}\\text{ kg}\\cdot\\text{m}^2$$\n\n4. Angular speed immediately after impact:\n$$\\omega = \\frac{L_i}{I_{\\text{total}}} = \\frac{6.0}{1.68} = \\frac{600}{168} = \\frac{25}{7}\\text{ rad/s} \\approx 3.57\\text{ rad/s}$$',
    concepts: ['Conservation of angular momentum', 'Pivot reaction impulse', 'Rotational inertia of composite body'],
    estimatedTimeSec: 110,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-rot-04',
    subject: 'physics',
    chapterId: 'phy-c11-rotational-motion',
    topicId: 'phy-rot-13-slipping-to-rolling',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2023,
    pyqShift: 'JEE Advanced Paper 1',
    questionText: 'A uniform solid sphere of mass $M$ and radius $R$ is projected horizontally on a rough flat horizontal floor with initial translational speed $v_0$ and zero initial rotation ($\\omega_0 = 0$). If $\\mu_k$ is the coefficient of kinetic friction between the sphere and the floor, what is the speed $v_f$ of the center of mass of the sphere when it begins pure rolling without slipping?',
    options: [
      '$\\frac{5}{7} v_0$',
      '$\\frac{2}{5} v_0$',
      '$\\frac{3}{5} v_0$',
      '$\\frac{5}{9} v_0$'
    ],
    correctAnswer: '0', // 5/7 v0
    explanation: '1. Master Insight: Angular momentum conservation about a point on the ground level!\n- The kinetic friction force $f_k$ acts backward along the ground surface.\n- Normal force $N$ and gravity $Mg$ act along the vertical and cancel each other out.\n- Notice that the line of action of friction $f_k$ lies ON the ground line. Therefore, about ANY point $P$ located on the ground line, the torque of all forces is ZERO: $\\vec{\\tau}_P = 0$!\n- Hence, total angular momentum about point $P$ on the ground is conserved from the moment of projection until pure rolling is achieved!\n\n2. Initial Angular Momentum about ground point $P$:\n- The sphere has only translational speed $v_0$ at height $R$ above the ground:\n$$L_i = M v_0 R$$\n\n3. Final Angular Momentum about $P$ in pure rolling ($v_f = \\omega_f R$):\n$$L_f = M v_f R + I_{\\text{cm}} \\omega_f = M v_f R + \\left(\\frac{2}{5} M R^2\\right) \\left(\\frac{v_f}{R}\\right) = M v_f R + \\frac{2}{5} M v_f R = \\frac{7}{5} M v_f R$$\n\n4. Equating $L_i = L_f$:\n$$M v_0 R = \\frac{7}{5} M v_f R \\implies v_f = \\frac{5}{7} v_0$$\n\n(Note: This elegant result is completely independent of $\\mu_k$ and $g$!).',
    concepts: ['Transition to pure rolling', 'Angular momentum conservation about ground', 'Instantaneous rolling condition'],
    estimatedTimeSec: 95,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-rot-05',
    subject: 'physics',
    chapterId: 'phy-c11-rotational-motion',
    topicId: 'phy-rot-12-rolling-incline',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 29 Shift 1',
    questionText: 'A solid cylinder of mass $M$ and radius $R$ is placed on a rough inclined plane of inclination $\\theta = 30^\\circ$. What is the minimum coefficient of static friction $\\mu_{\\text{min}}$ between the cylinder and the inclined plane required to ensure pure rolling without slipping down the incline?',
    options: [
      '$\\frac{1}{3\\sqrt{3}} \\; (\\approx 0.192)$',
      '$\\frac{1}{\\sqrt{3}} \\; (\\approx 0.577)$',
      '$\\frac{2}{3\\sqrt{3}}$',
      '$\\frac{1}{2\\sqrt{3}}$'
    ],
    correctAnswer: '0', // 1 / (3*sqrt(3))
    explanation: '1. Incline pure rolling acceleration:\n$$a = \\frac{g \\sin\\theta}{1 + \\frac{I_{\\text{cm}}}{M R^2}}$$\nFor a solid cylinder, $I_{\\text{cm}} = \\frac{1}{2} M R^2 \\implies \\frac{I_{\\text{cm}}}{M R^2} = \\frac{1}{2}$:\n$$a = \\frac{g \\sin 30^\\circ}{1 + 1/2} = \\frac{g/2}{3/2} = \\frac{g}{3}$$\n\n2. Friction force required to prevent slipping:\n- From Newton\'s 2nd Law down the incline: $M g \\sin\\theta - f = M a$\n$$f = M g \\sin 30^\\circ - M \\left(\\frac{g}{3}\\right) = \\frac{M g}{2} - \\frac{M g}{3} = \\frac{M g}{6}$$\n\n3. Condition for no slipping: $f \\le f_{s,\\text{max}} = \\mu_s N = \\mu_s M g \\cos\\theta$\n$$\\frac{M g}{6} \\le \\mu_s M g \\cos 30^\\circ = \\mu_s M g \\left(\\frac{\\sqrt{3}}{2}\\right)$$\n$$\\mu_s \\ge \\frac{2}{6\\sqrt{3}} = \\frac{1}{3\\sqrt{3}}$$\n\nAlternatively, direct formula: $\\mu_{\\text{min}} = \\frac{\\tan\\theta}{1 + \\frac{M R^2}{I_{\\text{cm}}}} = \\frac{\\tan 30^\\circ}{1 + 2} = \\frac{1/\\sqrt{3}}{3} = \\frac{1}{3\\sqrt{3}} \\approx 0.192$.',
    concepts: ['Pure rolling friction threshold', 'Inclined plane dynamics', 'Solid cylinder moment of inertia'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-rot-06',
    subject: 'physics',
    chapterId: 'phy-c11-rotational-motion',
    topicId: 'phy-rot-1-com-discrete-continuous',
    type: 'numerical',
    difficulty: 'easy',
    pyqYear: 2024,
    pyqShift: 'Apr 06 Shift 2',
    questionText: 'Two particles of masses $m_1 = 1\\text{ kg}$ and $m_2 = 3\\text{ kg}$ are separated by a distance of $L = 20\\text{ cm}$. If the mass $m_1$ is shifted towards $m_2$ by a distance of $6\\text{ cm}$, by what distance (in $\\text{cm}$) must the mass $m_2$ be shifted so that the position of the center of mass remains unchanged?',
    options: [],
    correctAnswer: '2', // 2 cm
    explanation: '1. Shift in Center of Mass formula:\n$$\\Delta x_{\\text{cm}} = \\frac{m_1 \\Delta x_1 + m_2 \\Delta x_2}{m_1 + m_2}$$\n\n2. For the position of the center of mass to remain unchanged, $\\Delta x_{\\text{cm}} = 0$:\n$$m_1 \\Delta x_1 + m_2 \\Delta x_2 = 0$$\n\n3. Given:\n- $m_1 = 1\\text{ kg}$, shifted towards $m_2$ by $\\Delta x_1 = +6\\text{ cm}$.\n- $m_2 = 3\\text{ kg}$, let displacement be $\\Delta x_2$.\n\n$$(1\\text{ kg})(+6\\text{ cm}) + (3\\text{ kg})(\\Delta x_2) = 0$$\n$$6 + 3 \\Delta x_2 = 0 \\implies 3 \\Delta x_2 = -6 \\implies \\Delta x_2 = -2\\text{ cm}$$\n\nThe magnitude of the shift required for mass $m_2$ is $2\\text{ cm}$ (directed towards $m_1$).',
    concepts: ['Center of mass invariance', 'Displacement of particles in COM', 'Discrete mass distribution'],
    estimatedTimeSec: 45,
    marks: 4,
    negativeMarks: 0
  }
];
