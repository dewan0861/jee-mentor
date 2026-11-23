import { Question } from '@/types';

export const gravitationQuestions: Question[] = [
  {
    id: 'pyq-phy-grav-01',
    subject: 'physics',
    chapterId: 'phy-c11-gravitation',
    topicId: 'phy-grav-2-g-variations',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 29 Shift 1',
    questionText: 'The acceleration due to gravity at a height $h$ above the Earth\'s surface is found to be equal to the acceleration due to gravity at a depth $d$ below the surface. If $h = \\frac{R}{2}$, where $R$ is the radius of the Earth, what is the value of the depth $d$?',
    options: [
      '$\\frac{5}{9} R$',
      '$\\frac{4}{9} R$',
      '$R$ (Earth\'s center)',
      '$\\frac{2}{3} R$'
    ],
    correctAnswer: '0', // 5/9 R
    explanation: '1. Critical Check: Is $h \\ll R$?\n- Since $h = R/2 = 0.5R$, this is a VERY LARGE altitude (not small).\n- We CANNOT use the linear binomial approximation $g_h = g(1 - 2h/R)$ (which would erroneously yield $g_h = 0$ and $d = R$).\n- We MUST use the exact formula for altitude:\n$$g_h = \\frac{g}{\\left(1 + \\frac{h}{R}\\right)^2}$$\n\n2. Computing $g$ at $h = R/2$:\n$$g_h = \\frac{g}{\\left(1 + \\frac{1}{2}\\right)^2} = \\frac{g}{(3/2)^2} = \\frac{4}{9} g$$\n\n3. Formula for variation of $g$ with depth $d$:\n- The depth formula is strictly linear everywhere inside the Earth:\n$$g_d = g\\left(1 - \\frac{d}{R}\\right)$$\n\n4. Equating $g_h = g_d$:\n$$\\frac{4}{9} g = g\\left(1 - \\frac{d}{R}\\right)$$\n$$1 - \\frac{d}{R} = \\frac{4}{9} \\implies \\frac{d}{R} = 1 - \\frac{4}{9} = \\frac{5}{9} \\implies d = \\frac{5}{9} R$$',
    concepts: ['Variation of g with altitude', 'Variation of g with depth', 'Exact altitude formula vs binomial approximation'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-grav-02',
    subject: 'physics',
    chapterId: 'phy-c11-gravitation',
    topicId: 'phy-grav-6-escape-velocity',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 04 Shift 1',
    questionText: 'A body of mass $m$ is projected vertically upwards from the surface of Earth with an initial velocity equal to $\\frac{1}{2}$ of the escape velocity $v_e$. If $R$ is the radius of the Earth, the maximum height $h$ attained by the body above the Earth\'s surface is:',
    options: [
      '$\\frac{R}{3}$',
      '$\\frac{R}{4}$',
      '$\\frac{R}{2}$',
      '$\\frac{2R}{3}$'
    ],
    correctAnswer: '0', // R/3
    explanation: '1. Escape speed from Earth\'s surface:\n$$v_e = \\sqrt{\\frac{2GM}{R}} \\implies v_e^2 = \\frac{2GM}{R}$$\n\n2. Projection speed $v = \\frac{v_e}{2}$:\n$$v^2 = \\frac{v_e^2}{4} = \\frac{2GM}{4R} = \\frac{GM}{2R}$$\n\n3. Conservation of Mechanical Energy from surface ($r = R$) to apex ($r = R + h, v = 0$):\n$$K_i + U_i = K_f + U_f$$\n$$\\frac{1}{2} m v^2 - \\frac{GMm}{R} = 0 - \\frac{GMm}{R + h}$$\nSubstitute $v^2 = \\frac{GM}{2R}$:\n$$\\frac{1}{2} m \\left(\\frac{GM}{2R}\\right) - \\frac{GMm}{R} = -\\frac{GMm}{R + h}$$\n$$\\frac{GMm}{4R} - \\frac{GMm}{R} = -\\frac{GMm}{R + h}$$\n$$-\\frac{3GMm}{4R} = -\\frac{GMm}{R + h} \\implies \\frac{3}{4R} = \\frac{1}{R + h}$$\n\n4. Solving for height $h$:\n$$3(R + h) = 4R \\implies 3R + 3h = 4R \\implies 3h = R \\implies h = \\frac{R}{3}$$',
    concepts: ['Escape velocity', 'Conservation of gravitational energy', 'Sub-orbital trajectory height'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-grav-03',
    subject: 'physics',
    chapterId: 'phy-c11-gravitation',
    topicId: 'phy-grav-4-potential-field-distributions',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 31 Shift 2',
    questionText: 'The gravitational potential at the surface of a uniform solid sphere of mass $M$ and radius $R$ is $V_0$. What is the gravitational potential at an internal point located at distance $r = \\frac{R}{2}$ from the center of the sphere?',
    options: [
      '$\\frac{11}{8} V_0$',
      '$\\frac{3}{2} V_0$',
      '$\\frac{5}{4} V_0$',
      '$\\frac{7}{8} V_0$'
    ],
    correctAnswer: '0', // 11/8 V0
    explanation: '1. Standard Gravitational Potential inside a uniform solid sphere:\n$$V(r) = -\\frac{GM}{2R^3}\\left(3R^2 - r^2\\right)$$\n\n2. Potential at the surface ($r = R$):\n$$V_0 = V(R) = -\\frac{GM}{2R^3}(3R^2 - R^2) = -\\frac{GM}{R}$$\n\n3. Potential at $r = \\frac{R}{2}$:\n$$V\\left(\\frac{R}{2}\\right) = -\\frac{GM}{2R^3}\\left(3R^2 - \\left(\\frac{R}{2}\\right)^2\\right) = -\\frac{GM}{2R^3}\\left(3R^2 - \\frac{R^2}{4}\\right)$$\n$$V\\left(\\frac{R}{2}\\right) = -\\frac{GM}{2R^3}\\left(\\frac{11R^2}{4}\\right) = -\\frac{11}{8} \\frac{GM}{R}$$\n\n4. Expressing in terms of $V_0$:\n$$V\\left(\\frac{R}{2}\\right) = \\frac{11}{8} \\left(-\\frac{GM}{R}\\right) = \\frac{11}{8} V_0$$',
    concepts: ['Internal gravitational potential', 'Solid sphere potential well', 'Gauss\'s law analogy'],
    estimatedTimeSec: 70,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-grav-04',
    subject: 'physics',
    chapterId: 'phy-c11-gravitation',
    topicId: 'phy-grav-8-keplers-laws-ellipses',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 31 Shift 1',
    questionText: 'A satellite revolves in an elliptical orbit around the Earth. The distance of the satellite from the center of the Earth at perigee is $r_p = 2R$ and at apogee is $r_a = 6R$, where $R$ is the Earth\'s radius. If $T_0$ is the time period of a near-Earth circular orbit of radius $R$, what is the time period of revolution of this satellite?',
    options: [
      '$8 T_0$',
      '$4\\sqrt{2} T_0$',
      '$16 T_0$',
      '$4 T_0$'
    ],
    correctAnswer: '0', // 8 T0
    explanation: '1. Semi-major axis ($a$) of the elliptical orbit:\n$$a = \\frac{r_p + r_a}{2} = \\frac{2R + 6R}{2} = \\frac{8R}{2} = 4R$$\n\n2. Kepler\'s Third Law (Harmonic Law):\n- For any orbit (circular or elliptical), the square of the time period is proportional to the cube of the semi-major axis:\n$$T^2 \\propto a^3 \\implies T = T_0 \\left(\\frac{a}{R}\\right)^{3/2}$$\n\n3. Calculating the period ratio:\n$$T = T_0 \\left(\\frac{4R}{R}\\right)^{3/2} = T_0 (4)^{3/2} = T_0 (2^2)^{3/2} = T_0 (2^3) = 8 T_0$$',
    concepts: ['Kepler\'s Third Law', 'Semi-major axis of ellipse', 'Apsidal distances'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-grav-05',
    subject: 'physics',
    chapterId: 'phy-c11-gravitation',
    topicId: 'phy-grav-3-earth-rotation-latitude',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2022,
    pyqShift: 'JEE Advanced Paper 2',
    questionText: 'If the diurnal angular speed of rotation of the Earth were to increase such that a person standing at the equator experiences apparent weightlessness ($g_{\\text{equator}} = 0$), what would be the duration of a day in minutes? (Take $R = 6400\\text{ km}$ and $g = 10\\text{ m/s}^2$).',
    options: [
      '$\\approx 84\\text{ minutes}$',
      '$\\approx 120\\text{ minutes}$',
      '$\\approx 60\\text{ minutes}$',
      '$\\approx 42\\text{ minutes}$'
    ],
    correctAnswer: '0', // approx 84 min
    explanation: '1. Effective gravity at latitude $\\lambda$ due to rotation:\n$$g_\\lambda = g - \\omega^2 R \\cos^2\\lambda$$\nAt the equator, $\\lambda = 0^\\circ \\implies \\cos 0^\\circ = 1$:\n$$g_{\\text{equator}} = g - \\omega^2 R$$\n\n2. Condition for apparent weightlessness:\n$$g - \\omega^2 R = 0 \\implies \\omega = \\sqrt{\\frac{g}{R}}$$\n\n3. New period of Earth\'s rotation (length of day):\n$$T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{R}{g}}$$\nSubstituting $R = 6400\\text{ km} = 6.4 \\times 10^6\\text{ m}$ and $g = 10\\text{ m/s}^2$:\n$$T = 2\\pi \\sqrt{\\frac{6.4 \\times 10^6}{10}} = 2\\pi \\sqrt{640{,}000} = 2\\pi (800) = 1600\\pi\\text{ seconds}$$\n\n4. Converting to minutes:\n$$T = \\frac{1600 \\times 3.1416}{60} = \\frac{5026.5}{60} \\approx 83.8\\text{ minutes} \\approx 84\\text{ minutes}$$',
    concepts: ['Earth\'s diurnal rotation', 'Apparent weightlessness', 'Centrifugal force effect on latitude'],
    estimatedTimeSec: 90,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-grav-06',
    subject: 'physics',
    chapterId: 'phy-c11-gravitation',
    topicId: 'phy-grav-9-satellite-energetics',
    type: 'numerical',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Apr 06 Shift 1',
    questionText: 'A communication satellite of mass $m = 500\\text{ kg}$ is launched into a circular orbit at a height $h = R$ above the Earth\'s surface, where $R = 6400\\text{ km}$ is Earth\'s radius. If $g = 10\\text{ m/s}^2$ at the surface, what is the magnitude of the total mechanical energy of the satellite in gigajoules ($\\text{GJ}$)?',
    options: [],
    correctAnswer: '8', // 8 GJ
    explanation: '1. Orbital radius $r$:\n$$r = R + h = R + R = 2R$$\n\n2. Total mechanical energy of a satellite in circular orbit:\n$$E = -\\frac{GMm}{2r} = -\\frac{GMm}{2(2R)} = -\\frac{GMm}{4R}$$\n\n3. Using surface gravity relation $g = \\frac{GM}{R^2} \\implies GM = g R^2$:\n$$E = -\\frac{(g R^2) m}{4R} = -\\frac{1}{4} m g R$$\n\n4. Substituting values:\n- $m = 500\\text{ kg}$\n- $g = 10\\text{ m/s}^2$\n- $R = 6400\\text{ km} = 6.4 \\times 10^6\\text{ m}$\n\n$$|E| = \\frac{1}{4} (500\\text{ kg})(10\\text{ m/s}^2)(6.4 \\times 10^6\\text{ m}) = \\frac{1}{4} \\times 5000 \\times 6.4 \\times 10^6 = 1250 \\times 6.4 \\times 10^6$$\n$$|E| = 8000 \\times 10^6\\text{ J} = 8.0 \\times 10^9\\text{ J} = 8\\text{ GJ}$$',
    concepts: ['Orbital mechanical energy', 'Virial theorem', 'Surface gravity relation'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 0
  }
];
