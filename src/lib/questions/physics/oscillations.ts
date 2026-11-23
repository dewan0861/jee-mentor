import { Question } from '@/types';

export const oscillationsQuestions: Question[] = [
  {
    id: 'pyq-phy-osc-01',
    subject: 'physics',
    chapterId: 'phy-c11-oscillations',
    topicId: 'phy-osc-1-shm-kinematics-phasors',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 29 Shift 1',
    questionText: 'A particle executes simple harmonic motion along the $x$-axis with an amplitude $A$ and time period $T$, starting from the mean position $x = 0$ at $t = 0$. What is the minimum time taken by the particle to travel from position $x = +A/2$ to the extreme position $x = +A$?',
    options: [
      '$\\frac{T}{6}$',
      '$\\frac{T}{12}$',
      '$\\frac{T}{8}$',
      '$\\frac{T}{4}$'
    ],
    correctAnswer: '0', // T/6
    explanation: '1. Displacement equation starting from mean position:\n$$x(t) = A \\sin(\\omega t)$$\nwhere $\\omega = \\frac{2\\pi}{T}$.\n\n2. Time $t_1$ to reach $x = +A/2$:\n$$A \\sin(\\omega t_1) = \\frac{A}{2} \\implies \\sin(\\omega t_1) = \\frac{1}{2} \\implies \\omega t_1 = \\frac{\\pi}{6}$$\n$$t_1 = \\frac{\\pi / 6}{2\\pi / T} = \\frac{T}{12}$$\n\n3. Time $t_2$ to reach extreme position $x = +A$:\n$$A \\sin(\\omega t_2) = A \\implies \\sin(\\omega t_2) = 1 \\implies \\omega t_2 = \\frac{\\pi}{2}$$\n$$t_2 = \\frac{\\pi / 2}{2\\pi / T} = \\frac{T}{4}$$\n\n4. Minimum time taken to travel from $+A/2$ to $+A$:\n$$\\Delta t = t_2 - t_1 = \\frac{T}{4} - \\frac{T}{12} = \\frac{3T - T}{12} = \\frac{2T}{12} = \\frac{T}{6}$$\n\n(Phasor confirmation: Rotation on reference circle from $\\theta = 30^\\circ$ to $90^\\circ$ is $\\Delta\\theta = 60^\\circ = \\frac{360^\\circ}{6}$, which requires $\\frac{T}{6}$ seconds).',
    concepts: ['SHM kinematics', 'Phasor reference circle', 'Non-uniform velocity in harmonic motion'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-osc-02',
    subject: 'physics',
    chapterId: 'phy-c11-oscillations',
    topicId: 'phy-osc-2-energy-shm',
    type: 'single_mcq',
    difficulty: 'easy',
    pyqYear: 2024,
    pyqShift: 'Apr 04 Shift 1',
    questionText: 'In a simple harmonic oscillator of amplitude $A$, at what displacement $x$ from the mean position is the kinetic energy of the oscillating particle equal to three times its potential energy ($K = 3U$)? (Assume potential energy at mean position is zero).',
    options: [
      '$x = \\pm \\frac{A}{2}$',
      '$x = \\pm \\frac{A}{\\sqrt{2}}$',
      '$x = \\pm \\frac{\\sqrt{3}}{2} A$',
      '$x = \\pm \\frac{A}{4}$'
    ],
    correctAnswer: '0', // x = +- A/2
    explanation: '1. Expressions for Kinetic and Potential Energy in SHM:\n$$K = \\frac{1}{2} m \\omega^2 (A^2 - x^2)$$\n$$U = \\frac{1}{2} m \\omega^2 x^2$$\n\n2. Given condition $K = 3 U$:\n$$\\frac{1}{2} m \\omega^2 (A^2 - x^2) = 3 \\left(\\frac{1}{2} m \\omega^2 x^2\\right)$$\nCanceling common factor $\\frac{1}{2} m \\omega^2$:\n$$A^2 - x^2 = 3 x^2$$\n$$4 x^2 = A^2 \\implies x^2 = \\frac{A^2}{4} \\implies x = \\pm \\frac{A}{2}$$',
    concepts: ['Kinetic and Potential Energy in SHM', 'Energy partition', 'Displacement relation'],
    estimatedTimeSec: 45,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-osc-03',
    subject: 'physics',
    chapterId: 'phy-c11-oscillations',
    topicId: 'phy-osc-3-spring-block-systems',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2023,
    pyqShift: 'Jan 24 Shift 2',
    questionText: 'A uniform ideal spring of force constant $k = 600\\text{ N/m}$ and length $L$ is cut into two pieces whose lengths are in the ratio $1 : 2$. The two resulting springs are then connected in parallel, and a mass of $M = 3\\text{ kg}$ is attached to this parallel combination. What is the frequency of oscillation of the mass in hertz?',
    options: [
      '$\\frac{15}{\\pi}\\text{ Hz} \\; (\\approx 4.77\\text{ Hz})$',
      '$\\frac{30}{\\pi}\\text{ Hz}$',
      '$\\frac{10}{\\pi}\\text{ Hz}$',
      '$15\\pi\\text{ Hz}$'
    ],
    correctAnswer: '0', // 15/pi Hz
    explanation: '1. Spring cutting rule ($k \\times L = \\text{constant}$):\n- Total length is $L = L_1 + L_2$ with $L_1 : L_2 = 1 : 2$.\n- Length of piece 1: $L_1 = \\frac{1}{3} L$.\n- Length of piece 2: $L_2 = \\frac{2}{3} L$.\n\n2. Spring constant of each cut piece:\n- $k_1 = \\frac{k L}{L_1} = \\frac{k L}{L/3} = 3 k = 3(600) = 1800\\text{ N/m}$.\n- $k_2 = \\frac{k L}{L_2} = \\frac{k L}{2L/3} = \\frac{3}{2} k = \\frac{3}{2}(600) = 900\\text{ N/m}$.\n\n3. Parallel combination of the two springs:\n- In parallel, spring constants add directly:\n$$k_{\\text{eq}} = k_1 + k_2 = 1800 + 900 = 2700\\text{ N/m}$$\n\n4. Frequency of oscillation:\n$$\\omega = \\sqrt{\\frac{k_{\\text{eq}}}{M}} = \\sqrt{\\frac{2700\\text{ N/m}}{3\\text{ kg}}} = \\sqrt{900} = 30\\text{ rad/s}$$\n$$f = \\frac{\\omega}{2\\pi} = \\frac{30}{2\\pi} = \\frac{15}{\\pi}\\text{ Hz} \\approx 4.77\\text{ Hz}$$',
    concepts: ['Spring cutting', 'Parallel spring combination', 'Oscillation frequency of spring-mass'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-osc-04',
    subject: 'physics',
    chapterId: 'phy-c11-oscillations',
    topicId: 'phy-osc-5-simple-pendulum-accelerating',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 31 Shift 2',
    questionText: 'A simple pendulum has time period $T_0$ when stationary on the ground. It is placed inside a trolley moving horizontally with a constant acceleration $a = g$. The new time period of small oscillations of the pendulum is:',
    options: [
      '$\\frac{T_0}{2^{1/4}}$',
      '$\\frac{T_0}{\\sqrt{2}}$',
      '$\\sqrt{2} T_0$',
      '$2^{1/4} T_0$'
    ],
    correctAnswer: '0', // T0 / 2^(1/4)
    explanation: '1. Stationary Pendulum Time Period:\n$$T_0 = 2\\pi \\sqrt{\\frac{L}{g}}$$\n\n2. Effective Acceleration Due to Gravity in Horizontally Accelerating Frame:\n- Downward gravitational acceleration: $\\vec{g} = -g\\hat{j}$.\n- Horizontal pseudo-acceleration: $\\vec{a}_{\\text{pseudo}} = -a\\hat{i} = -g\\hat{i}$.\n- Resultant effective gravity vector:\n$$\\vec{g}_{\\text{eff}} = \\vec{g} - \\vec{a} = -g\\hat{j} - g\\hat{i}$$\n$$|g_{\\text{eff}}| = \\sqrt{g^2 + g^2} = \\sqrt{2g^2} = g\\sqrt{2} = g \\cdot 2^{1/2}$$\n\n3. New Time Period:\n$$T = 2\\pi \\sqrt{\\frac{L}{g_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{L}{g \\cdot 2^{1/2}}} = \\frac{2\\pi \\sqrt{\\frac{L}{g}}}{(2^{1/2})^{1/2}} = \\frac{T_0}{2^{1/4}}$$',
    concepts: ['Effective gravity in accelerating frame', 'Simple pendulum time period', 'Pseudo-force vector superposition'],
    estimatedTimeSec: 65,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-osc-05',
    subject: 'physics',
    chapterId: 'phy-c11-oscillations',
    topicId: 'phy-osc-4-two-body-oscillations',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2023,
    pyqShift: 'JEE Advanced Paper 1',
    questionText: 'Two blocks of masses $m_1 = 2\\text{ kg}$ and $m_2 = 3\\text{ kg}$ are connected by a light spring of force constant $k = 300\\text{ N/m}$ on a smooth frictionless horizontal floor. The blocks are pulled apart stretching the spring and released from rest simultaneously. What is the time period of oscillation of the system? (Take $\\pi^2 \\approx 10$).',
    options: [
      '$0.40\\text{ s}$',
      '$0.80\\text{ s}$',
      '$0.20\\text{ s}$',
      '$0.60\\text{ s}$'
    ],
    correctAnswer: '0', // 0.40 s
    explanation: '1. Two-Body System Reduced Mass Formulation:\n- Since no external horizontal force acts on the two-block system ($\\sum F_{\\text{ext}} = 0$), the center of mass remains completely at rest.\n- The relative motion of the two masses oscillating against each other is equivalent to a single particle of reduced mass $\\mu$ oscillating on a spring of constant $k$:\n$$\\mu = \\frac{m_1 m_2}{m_1 + m_2}$$\n\n2. Calculating Reduced Mass $\\mu$:\n$$\\mu = \\frac{(2\\text{ kg}) \\times (3\\text{ kg})}{2 + 3} = \\frac{6}{5} = 1.2\\text{ kg}$$\n\n3. Calculating Time Period $T$:\n$$T = 2\\pi \\sqrt{\\frac{\\mu}{k}} = 2\\pi \\sqrt{\\frac{1.2\\text{ kg}}{300\\text{ N/m}}} = 2\\pi \\sqrt{\\frac{12}{3000}} = 2\\pi \\sqrt{\\frac{4}{1000}} = 2\\pi \\sqrt{\\frac{1}{250}}$$\n$$T = \\frac{2\\pi}{\\sqrt{250}} = \\frac{2\\pi}{5\\sqrt{10}}$$\nUsing the standard approximation $\\pi \\approx \\sqrt{10}$ (since $\\pi^2 \\approx 10$):\n$$T = \\frac{2\\pi}{5\\pi} = \\frac{2}{5} = 0.40\\text{ s}$$',
    concepts: ['Two-body oscillation', 'Reduced mass concept', 'Center of mass invariance'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-osc-06',
    subject: 'physics',
    chapterId: 'phy-c11-oscillations',
    topicId: 'phy-osc-9-damped-forced-resonance',
    type: 'numerical',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Apr 11 Shift 1',
    questionText: 'In a damped harmonic oscillator, the amplitude of oscillation decays exponentially with time according to $A(t) = A_0 e^{-\\gamma t}$. If the amplitude drops to $\\frac{1}{2}$ of its initial value after $t = 10\\text{ seconds}$, after how many total seconds from the start ($t = 0$) will the amplitude drop to $\\frac{1}{8}$ of its initial value?',
    options: [],
    correctAnswer: '30', // 30 seconds
    explanation: '1. Exponential amplitude decay relation:\n$$A(t) = A_0 e^{-\\gamma t}$$\n\n2. At $t_1 = 10\\text{ s}$, amplitude is $A(10) = \\frac{1}{2} A_0$:\n$$\\frac{1}{2} A_0 = A_0 e^{-10\\gamma} \\implies e^{-10\\gamma} = \\frac{1}{2}$$\n\n3. Time $t_2$ when amplitude becomes $A(t_2) = \\frac{1}{8} A_0$:\n$$\\frac{1}{8} A_0 = A_0 e^{-\\gamma t_2} \\implies e^{-\\gamma t_2} = \\frac{1}{8}$$\nNotice that $\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$:\n$$e^{-\\gamma t_2} = \\left(e^{-10\\gamma}\\right)^3 = e^{-30\\gamma}$$\n\n4. Equating exponents:\n$$-\\gamma t_2 = -30\\gamma \\implies t_2 = 30\\text{ seconds}$$',
    concepts: ['Damped harmonic oscillations', 'Exponential decay of amplitude', 'Half-life of oscillation amplitude'],
    estimatedTimeSec: 50,
    marks: 4,
    negativeMarks: 0
  }
];
