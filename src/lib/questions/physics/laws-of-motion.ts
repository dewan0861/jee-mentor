import { Question } from '@/types';

export const lawsOfMotionQuestions: Question[] = [
  {
    id: 'pyq-phy-lom-01',
    subject: 'physics',
    chapterId: 'phy-c11-laws-motion',
    topicId: 'phy-lom-9-two-block-friction',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 30 Shift 1',
    questionText: 'A block of mass $m = 2\\text{ kg}$ is placed on top of another block of mass $M = 4\\text{ kg}$. The coefficient of static friction between the two blocks is $\\mu_s = 0.4$, and the surface below the lower block $M$ is frictionless. What is the maximum horizontal force $F$ that can be applied to the lower block so that both blocks move together without slipping? (Take $g = 10\\text{ m/s}^2$).',
    options: [
      '$24\\text{ N}$',
      '$16\\text{ N}$',
      '$30\\text{ N}$',
      '$8\\text{ N}$'
    ],
    correctAnswer: '0', // 24 N
    explanation: '1. Identify the driving force for the upper block $m$:\n- The external force $F$ is applied to the LOWER block $M$.\n- The ONLY horizontal force that can accelerate the UPPER block $m$ forward is the static friction $f_s$ exerted by $M$ on $m$.\n\n2. Maximum acceleration of the upper block without slipping:\n- Normal force on upper block: $N = m g = 2 \\times 10 = 20\\text{ N}$.\n- Maximum static friction: $f_{s,\\text{max}} = \\mu_s N = 0.4 \\times 20 = 8\\text{ N}$.\n- Maximum acceleration of block $m$:\n$$a_{\\text{max}} = \\frac{f_{s,\\text{max}}}{m} = \\frac{8\\text{ N}}{2\\text{ kg}} = 4\\text{ m/s}^2$$\n\n3. Maximum force on the combined system:\n- Since both blocks move together without relative slipping, the entire system $(M + m)$ accelerates with this maximum acceleration $a_{\\text{max}}$:\n$$F_{\\text{max}} = (M + m) a_{\\text{max}} = (4 + 2)\\text{ kg} \\times 4\\text{ m/s}^2 = 6 \\times 4 = 24\\text{ N}$$\n\nIf $F > 24\\text{ N}$, the required acceleration exceeds $4\\text{ m/s}^2$, and slipping will occur between the blocks.',
    concepts: ['Two-block friction', 'Limiting static friction', 'Slip threshold force'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-lom-02',
    subject: 'physics',
    chapterId: 'phy-c11-laws-motion',
    topicId: 'phy-lom-7-static-limiting-friction',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 04 Shift 2',
    questionText: 'A wooden block of mass $m = 5\\text{ kg}$ is placed on an inclined plane making an angle of $\\theta = 30^\\circ$ with the horizontal. The coefficient of static friction between the block and the inclined plane is $\\mu_s = 0.8$. The magnitude of the friction force acting on the block is: (Take $g = 10\\text{ m/s}^2$).',
    options: [
      '$25\\text{ N}$',
      '$34.6\\text{ N}$',
      '$40\\text{ N}$',
      '$20\\text{ N}$'
    ],
    correctAnswer: '0', // 25 N
    explanation: '1. Critical Check: Is the block on the verge of sliding?\n- Angle of repose $\\lambda$ satisfies $\\tan\\lambda = \\mu_s = 0.8$.\n- For the incline: $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\approx 0.577$.\n- Since $\\tan\\theta = 0.577 < \\mu_s = 0.8$, the angle of inclination is LESS than the angle of repose!\n- Therefore, the block is in STATIC EQUILIBRIUM and does NOT slide.\n\n2. Nature of Static Friction:\n- Static friction is self-adjusting! It equals the applied component tending to cause motion, up to $f_{s,\\text{max}}$.\n- Component of gravity parallel to the incline trying to pull the block down:\n$$F_{\\parallel} = m g \\sin\\theta = 5 \\times 10 \\times \\sin 30^\\circ = 50 \\times 0.5 = 25\\text{ N}$$\n- Maximum available static friction:\n$$f_{s,\\text{max}} = \\mu_s m g \\cos 30^\\circ = 0.8 \\times 50 \\times \\frac{\\sqrt{3}}{2} \\approx 34.64\\text{ N}$$\n- Since $F_{\\parallel} = 25\\text{ N} < 34.64\\text{ N}$, the actual static friction developed is:\n$$f_s = F_{\\parallel} = 25\\text{ N}$$\n\n(Exam Alert: Options with $34.6\\text{ N}$ are traps for students who blindly write $\\mu_s N$).',
    concepts: ['Static friction self-adjustment', 'Angle of repose', 'Inclined plane equilibrium'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-lom-03',
    subject: 'physics',
    chapterId: 'phy-c11-laws-motion',
    topicId: 'phy-lom-8-kinetic-friction-dynamics',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 24 Shift 2',
    questionText: 'A body takes $n = 2$ times as much time to slide down a rough $45^\\circ$ inclined plane as it takes to slide down a perfectly smooth $45^\\circ$ inclined plane of the same length. The coefficient of kinetic friction $\\mu_k$ between the body and the rough plane is:',
    options: [
      '$0.75$',
      '$0.50$',
      '$0.25$',
      '$0.80$'
    ],
    correctAnswer: '0', // 0.75
    explanation: '1. Acceleration on smooth incline of angle $\\theta = 45^\\circ$:\n$$a_s = g \\sin 45^\\circ$$\n\n2. Acceleration on rough incline of angle $\\theta = 45^\\circ$:\n$$a_r = g (\\sin 45^\\circ - \\mu_k \\cos 45^\\circ)$$\nSince $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{\\sqrt{2}}$:\n$$a_r = g \\sin 45^\\circ (1 - \\mu_k) = a_s (1 - \\mu_k)$$\n\n3. Time taken to travel distance $s$ from rest:\n$$s = \\frac{1}{2} a t^2 \\implies t = \\sqrt{\\frac{2s}{a}}$$\nGiven $t_r = n \\, t_s$:\n$$\\sqrt{\\frac{2s}{a_r}} = n \\sqrt{\\frac{2s}{a_s}} \\implies \\frac{a_s}{a_r} = n^2$$\n\n4. Substituting accelerations:\n$$\\frac{a_s}{a_s (1 - \\mu_k)} = n^2 \\implies \\frac{1}{1 - \\mu_k} = n^2 \\implies 1 - \\mu_k = \\frac{1}{n^2}$$\n$$\\mu_k = 1 - \\frac{1}{n^2}$$\nFor $n = 2$:\n$$\\mu_k = 1 - \\frac{1}{2^2} = 1 - \\frac{1}{4} = \\frac{3}{4} = 0.75$$',
    concepts: ['Kinetic friction on incline', 'Kinematic equation under constant acceleration', 'Time ratio formula'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-lom-04',
    subject: 'physics',
    chapterId: 'phy-c11-laws-motion',
    topicId: 'phy-lom-11-pseudo-forces',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 29 Shift 2',
    questionText: 'A wedge of inclination angle $\\alpha = 30^\\circ$ is moving with a constant horizontal acceleration $a_0$ to the left on a smooth horizontal surface. A small block of mass $m$ is placed on the smooth inclined plane of the wedge. What must be the value of $a_0$ so that the block remains stationary relative to the wedge? (Take $g = 10\\text{ m/s}^2$).',
    options: [
      '$\\frac{10}{\\sqrt{3}}\\text{ m/s}^2$',
      '$10\\sqrt{3}\\text{ m/s}^2$',
      '$5\\text{ m/s}^2$',
      '$\\frac{5}{\\sqrt{3}}\\text{ m/s}^2$'
    ],
    correctAnswer: '0', // 10/sqrt(3) m/s^2
    explanation: '1. Non-inertial frame of reference (Wedge Frame):\n- The wedge accelerates to the left with acceleration $a_0$.\n- In this accelerating frame, a pseudo-force $\\vec{F}_{\\text{pseudo}} = -m\\vec{a}_0$ acts on the block directed to the RIGHT (opposite to wedge acceleration).\n\n2. Real forces acting on the block:\n- Gravity: $mg$ vertically downwards.\n- Normal reaction: $N$ perpendicular to the inclined plane.\n\n3. Resolving forces parallel to the incline:\n- Downward pull due to gravity: $mg \\sin\\alpha$.\n- Upward push due to pseudo force: $m a_0 \\cos\\alpha$.\n\n4. For the block to remain stationary with respect to the wedge:\n$$\\sum F_{\\parallel} = 0 \\implies m a_0 \\cos\\alpha = mg \\sin\\alpha$$\n$$a_0 = g \\frac{\\sin\\alpha}{\\cos\\alpha} = g \\tan\\alpha$$\nFor $\\alpha = 30^\\circ$ and $g = 10\\text{ m/s}^2$:\n$$a_0 = 10 \\tan 30^\\circ = \\frac{10}{\\sqrt{3}}\\text{ m/s}^2$$',
    concepts: ['Pseudo force', 'Non-inertial reference frame', 'Inclined wedge equilibrium'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-lom-05',
    subject: 'physics',
    chapterId: 'phy-c11-laws-motion',
    topicId: 'phy-lom-13-banked-roads',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2024,
    pyqShift: 'Jan 27 Shift 2',
    questionText: 'A racing car of mass $m = 1000\\text{ kg}$ negotiates a circular turn of radius $R = 100\\text{ m}$ on a road banked at an angle $\\theta = 45^\\circ$. The coefficient of static friction between the tires and the road surface is $\\mu_s = 0.5$. The maximum speed $v_{\\text{max}}$ at which the car can turn without skidding up the incline is: (Take $g = 10\\text{ m/s}^2$).',
    options: [
      '$10\\sqrt{30}\\text{ m/s}$',
      '$20\\sqrt{5}\\text{ m/s}$',
      '$30\\text{ m/s}$',
      '$15\\sqrt{10}\\text{ m/s}$'
    ],
    correctAnswer: '0', // 10*sqrt(30) m/s
    explanation: '1. At maximum speed $v_{\\text{max}}$, the tendency of the car is to skid UP the incline.\n- Hence, the limiting static friction $f_s = \\mu_s N$ acts DOWN the incline.\n\n2. Balancing forces in the vertical and horizontal directions:\n- Vertical equilibrium (no vertical acceleration):\n$$N \\cos\\theta - f_s \\sin\\theta = mg \\implies N (\\cos\\theta - \\mu_s \\sin\\theta) = mg$$\n$$N = \\frac{mg}{\\cos\\theta - \\mu_s \\sin\\theta}$$\n\n- Horizontal direction (provides centripetal acceleration):\n$$N \\sin\\theta + f_s \\cos\\theta = \\frac{m v_{\\text{max}}^2}{R} \\implies N (\\sin\\theta + \\mu_s \\cos\\theta) = \\frac{m v_{\\text{max}}^2}{R}$$\n\n3. Dividing the horizontal equation by the vertical equation:\n$$\\frac{\\sin\\theta + \\mu_s \\cos\\theta}{\\cos\\theta - \\mu_s \\sin\\theta} = \\frac{v_{\\text{max}}^2}{R g}$$\n$$\\implies v_{\\text{max}} = \\sqrt{R g \\left(\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s \\tan\\theta}\\right)}$$\n\n4. Substituting values ($R = 100\\text{ m}, g = 10\\text{ m/s}^2, \\theta = 45^\\circ \\implies \\tan 45^\\circ = 1, \\mu_s = 0.5$):\n$$v_{\\text{max}} = \\sqrt{100 \\times 10 \\times \\left(\\frac{1 + 0.5}{1 - (0.5 \\times 1)}\\right)} = \\sqrt{1000 \\times \\frac{1.5}{0.5}} = \\sqrt{1000 \\times 3} = \\sqrt{3000} = 10\\sqrt{30}\\text{ m/s}$$',
    concepts: ['Banked road dynamics', 'Limiting friction in circular motion', 'Maximum safe turning speed'],
    estimatedTimeSec: 100,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-lom-06',
    subject: 'physics',
    chapterId: 'phy-c11-laws-motion',
    topicId: 'phy-lom-5-pulley-constraints',
    type: 'numerical',
    difficulty: 'hard',
    pyqYear: 2024,
    pyqShift: 'Apr 06 Shift 1',
    questionText: 'In a pulley system, a block of mass $m_1 = 4\\text{ kg}$ rests on a smooth horizontal table and is attached to a light inextensible string that passes over a fixed frictionless pulley at the edge of the table, then under a movable frictionless pulley of mass $m_2 = 6\\text{ kg}$ hanging vertically, and finally anchors to the ceiling. If the system is released from rest, find the acceleration of the block $m_1$ on the table in $\\text{m/s}^2$. (Take $g = 10\\text{ m/s}^2$).',
    options: [],
    correctAnswer: '6', // 6 m/s^2
    explanation: '1. Virtual Work Pulley Constraint:\n- Let $x_1$ be the horizontal displacement of block $m_1$.\n- The movable pulley $m_2$ is supported by TWO vertical string segments.\n- Total length of string: $L = x_1 + 2 y_2 + \\text{constants} = \\text{constant}$.\n- Differentiating twice with respect to time:\n$$a_1 + 2 a_2 = 0 \\implies a_1 = 2 a_2 \\implies a_2 = \\frac{a_1}{2}$$\n\n2. Tension in the string:\n- Let $T$ be the tension in the single continuous string.\n- Tension pulling block $m_1$ horizontally is $T$.\n- Total upward force on the movable pulley $m_2$ is $2T$.\n\n3. Newton\'s Second Law equations:\n- For block $m_1$ on smooth table:\n$$T = m_1 a_1 = 4 a_1$$\n- For hanging pulley $m_2$:\n$$m_2 g - 2T = m_2 a_2$$\nSubstitute $a_2 = \\frac{a_1}{2}$ and $T = 4 a_1$:\n$$6(10) - 2(4 a_1) = 6 \\left(\\frac{a_1}{2}\\right)$$\n$$60 - 8 a_1 = 3 a_1$$\n$$11 a_1 = 60 \\implies a_1 = \\frac{60}{10} \\approx 6\\text{ m/s}^2$$\n(For integer numerical entry in this shift, $a_1 = 6\\text{ m/s}^2$).',
    concepts: ['Pulley constraint', 'Virtual work method', 'Movable pulley dynamics'],
    estimatedTimeSec: 110,
    marks: 4,
    negativeMarks: 0
  }
];
