import { Question } from '@/types';

export const workEnergyPowerQuestions: Question[] = [
  {
    id: 'pyq-phy-wep-01',
    subject: 'physics',
    chapterId: 'phy-c11-work-energy',
    topicId: 'phy-wep-4-pe-curves-equilibrium',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 31 Shift 2',
    questionText: 'A particle of mass $m = 0.5\\text{ kg}$ moves in a conservative force field where the potential energy function is given by $U(x) = \\frac{a}{x^2} - \\frac{b}{x}$, with positive constants $a = 2\\text{ J}\\cdot\\text{m}^2$ and $b = 4\\text{ J}\\cdot\\text{m}$. What is the position $x_0$ of stable equilibrium and the minimum potential energy $U_{\\text{min}}$ of the particle?',
    options: [
      '$x_0 = 1.0\\text{ m}, \\; U_{\\text{min}} = -2.0\\text{ J}$',
      '$x_0 = 2.0\\text{ m}, \\; U_{\\text{min}} = -1.0\\text{ J}$',
      '$x_0 = 0.5\\text{ m}, \\; U_{\\text{min}} = -4.0\\text{ J}$',
      '$x_0 = 1.0\\text{ m}, \\; U_{\\text{min}} = +2.0\\text{ J}$'
    ],
    correctAnswer: '0', // x0 = 1.0 m, U_min = -2.0 J
    explanation: '1. Finding the equilibrium point:\n- Force is the negative gradient of potential energy:\n$$F(x) = -\\frac{dU}{dx} = -\\left(-\\frac{2a}{x^3} + \\frac{b}{x^2}\\right) = \\frac{2a}{x^3} - \\frac{b}{x^2}$$\n- At equilibrium, $F(x) = 0 \\implies \\frac{dU}{dx} = 0$:\n$$\\frac{b}{x^2} = \\frac{2a}{x^3} \\implies x_0 = \\frac{2a}{b}$$\nSubstituting $a = 2$ and $b = 4$:\n$$x_0 = \\frac{2(2)}{4} = 1.0\\text{ m}$$\n\n2. Verifying stability using second derivative test:\n$$\\frac{d^2 U}{dx^2} = \\frac{d}{dx}\\left(-\\frac{2a}{x^3} + \\frac{b}{x^2}\\right) = \\frac{6a}{x^4} - \\frac{2b}{x^3}$$\nAt $x_0 = 1.0\\text{ m}$:\n$$\\frac{d^2 U}{dx^2}\\Bigg|_{x=1} = \\frac{6(2)}{1^4} - \\frac{2(4)}{1^3} = 12 - 8 = +4 > 0$$\nSince the second derivative is strictly POSITIVE, $x_0 = 1.0\\text{ m}$ is indeed a point of STABLE EQUILIBRIUM (potential energy well minimum).\n\n3. Minimum Potential Energy:\n$$U_{\\text{min}} = U(1.0) = \\frac{2}{(1.0)^2} - \\frac{4}{1.0} = 2 - 4 = -2.0\\text{ J}$$',
    concepts: ['Potential energy curves', 'Stable equilibrium condition', 'Calculus optimization'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-wep-02',
    subject: 'physics',
    chapterId: 'phy-c11-work-energy',
    topicId: 'phy-wep-7-power-constant-engine',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 08 Shift 1',
    questionText: 'A vehicle of mass $M = 1000\\text{ kg}$ starts from rest on a level frictionless road. Its engine delivers a constant mechanical power $P = 20\\text{ kW}$. What is the distance traversed by the vehicle by the time its speed reaches $v = 20\\text{ m/s}$?',
    options: [
      '$\\frac{400}{3}\\text{ m} \\; (\\approx 133.3\\text{ m})$',
      '$200\\text{ m}$',
      '$\\frac{200}{3}\\text{ m} \\; (\\approx 66.7\\text{ m})$',
      '$100\\text{ m}$'
    ],
    correctAnswer: '0', // 400/3 m
    explanation: '1. Power-force-acceleration relation:\n$$P = F v = \\left(M \\frac{dv}{dt}\\right) v = M v \\left(v \\frac{dv}{dx}\\right) = M v^2 \\frac{dv}{dx}$$\n\n2. Separating variables $(x$ and $v)$:\n$$P \\, dx = M v^2 \\, dv$$\n\n3. Integrating from rest $(v=0, x=0)$ to speed $v$ and distance $s$:\n$$\\int_0^s P \\, dx = \\int_0^v M v^2 \\, dv$$\n$$P s = \\frac{1}{3} M v^3 \\implies s = \\frac{M v^3}{3 P}$$\n\n4. Substituting the given numerical parameters:\n- $M = 1000\\text{ kg}$\n- $v = 20\\text{ m/s} \\implies v^3 = 8000\\text{ m}^3/\\text{s}^3$\n- $P = 20\\text{ kW} = 20{,}000\\text{ W}$\n\n$$s = \\frac{1000 \\times 8000}{3 \\times 20{,}000} = \\frac{8{,}000{,}000}{60{,}000} = \\frac{800}{6} = \\frac{400}{3}\\text{ m} \\approx 133.3\\text{ m}$$',
    concepts: ['Constant power motion', 'Variable separation integration', 'Work-power calculus'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-wep-03',
    subject: 'physics',
    chapterId: 'phy-c11-work-energy',
    topicId: 'phy-wep-5-vertical-circle-string',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 25 Shift 1',
    questionText: 'A small bob attached to a light inextensible string of length $R$ is projected horizontally from its lowest position with the minimum speed required to complete a full vertical circle. What is the ratio of the tension in the string when the bob is at its lowest position to the tension when the string is horizontal?',
    options: [
      '$2 : 1$',
      '$3 : 1$',
      '$6 : 1$',
      '$5 : 2$'
    ],
    correctAnswer: '0', // 2 : 1
    explanation: '1. Minimum speed at lowest point to complete vertical circle:\n$$u = \\sqrt{5 g R}$$\n\n2. Tension at lowest point ($B$):\n- Both gravity $mg$ (downward) and tension $T_B$ (upward) act along the vertical.\n$$T_B - mg = \\frac{m u^2}{R} \\implies T_B = mg + \\frac{m(5gR)}{R} = mg + 5mg = 6mg$$\n\n3. Velocity and tension when string is horizontal ($H$, at height $h = R$):\n- Using conservation of mechanical energy:\n$$\\frac{1}{2} m u^2 = \\frac{1}{2} m v_H^2 + mg R$$\n$$v_H^2 = u^2 - 2gR = 5gR - 2gR = 3gR$$\n- At horizontal position, gravity $mg$ acts vertically downwards (tangential) and does not contribute to radial centripetal force:\n$$T_H = \\frac{m v_H^2}{R} = \\frac{m (3gR)}{R} = 3mg$$\n\n4. Ratio of tensions:\n$$\\frac{T_B}{T_H} = \\frac{6mg}{3mg} = \\frac{2}{1} = 2 : 1$$',
    concepts: ['Vertical circular motion', 'Conservation of mechanical energy', 'Radial dynamic equilibrium'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-wep-04',
    subject: 'physics',
    chapterId: 'phy-c11-work-energy',
    topicId: 'phy-wep-8-collisions-1d',
    type: 'single_mcq',
    difficulty: 'easy',
    pyqYear: 2024,
    pyqShift: 'Jan 27 Shift 1',
    questionText: 'A body of mass $m_1 = 2\\text{ kg}$ moving with an initial velocity of $u_1 = 6\\text{ m/s}$ along a straight line collides head-on elastically with another body of mass $m_2 = 4\\text{ kg}$ initially at rest. The velocities of $m_1$ and $m_2$ after the collision are, respectively:',
    options: [
      '$-2\\text{ m/s}$ and $+4\\text{ m/s}$',
      '$+2\\text{ m/s}$ and $+4\\text{ m/s}$',
      '$-1\\text{ m/s}$ and $+3\\text{ m/s}$',
      '$0\\text{ m/s}$ and $+3\\text{ m/s}$'
    ],
    correctAnswer: '0', // -2 m/s and +4 m/s
    explanation: '1. Standard 1D elastic collision formulas ($u_2 = 0, e = 1$):\n$$v_1 = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right) u_1$$\n$$v_2 = \\left(\\frac{2 m_1}{m_1 + m_2}\\right) u_1$$\n\n2. Substituting values ($m_1 = 2\\text{ kg}, m_2 = 4\\text{ kg}, u_1 = 6\\text{ m/s}$):\n$$v_1 = \\left(\\frac{2 - 4}{2 + 4}\\right) \\times 6 = \\left(\\frac{-2}{6}\\right) \\times 6 = -2\\text{ m/s}$$\n(The negative sign indicates that mass $m_1$ rebounds backwards with speed $2\\text{ m/s}$).\n\n$$v_2 = \\left(\\frac{2 \\times 2}{2 + 4}\\right) \\times 6 = \\left(\\frac{4}{6}\\right) \\times 6 = +4\\text{ m/s}$$\n(Mass $m_2$ moves forward in the original direction with speed $4\\text{ m/s}$).',
    concepts: ['1D elastic collision', 'Momentum conservation', 'Velocity formulas'],
    estimatedTimeSec: 50,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-wep-05',
    subject: 'physics',
    chapterId: 'phy-c11-work-energy',
    topicId: 'phy-wep-2-conservative-pe',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2023,
    pyqShift: 'JEE Advanced Paper 2',
    questionText: 'A force given by $\\vec{F} = (2x y \\hat{i} + x^2 \\hat{j})\\text{ N}$ acts on a particle moving in the $xy$-plane from the origin $(0, 0)$ to the point $(2, 3)\\text{ m}$. Which of the following statements is correct regarding the nature of the force and the work done?',
    options: [
      'The force is conservative and the work done is $12\\text{ J}$, independent of path.',
      'The force is non-conservative and the work done depends on the path taken.',
      'The force is conservative and the work done is $18\\text{ J}$.',
      'The force is conservative and the work done is $6\\text{ J}$.'
    ],
    correctAnswer: '0', // Conservative and W = 12 J
    explanation: '1. Checking whether the force is conservative:\n- For a 2D force $\\vec{F} = F_x \\hat{i} + F_y \\hat{j}$ to be conservative, its curl must vanish:\n$$\\vec{\\nabla} \\times \\vec{F} = \\left(\\frac{\\partial F_y}{\\partial x} - \\frac{\\partial F_x}{\\partial y}\\right) \\hat{k}$$\n- Given $F_x = 2xy$ and $F_y = x^2$:\n$$\\frac{\\partial F_y}{\\partial x} = \\frac{\\partial}{\\partial x}(x^2) = 2x$$\n$$\\frac{\\partial F_x}{\\partial y} = \\frac{\\partial}{\\partial y}(2xy) = 2x$$\n- Since $\\frac{\\partial F_y}{\\partial x} = \\frac{\\partial F_x}{\\partial y} = 2x$, the curl is zero: $\\vec{\\nabla} \\times \\vec{F} = 0$.\n- Therefore, $\\vec{F}$ is a CONSERVATIVE force field and work done is PATH-INDEPENDENT!\n\n2. Computing work done using exact differential:\n$$dW = \\vec{F} \\cdot d\\vec{r} = 2xy \\, dx + x^2 \\, dy$$\nNotice that $d(x^2 y) = 2xy \\, dx + x^2 \\, dy$ via product rule.\n$$W = \\int_{(0,0)}^{(2,3)} d(x^2 y) = \\Big[ x^2 y \\Big]_{(0,0)}^{(2,3)} = (2)^2 (3) - 0 = 4 \\times 3 = 12\\text{ J}$$',
    concepts: ['Conservative force condition', 'Curl of vector field', 'Exact differentials and line integrals'],
    estimatedTimeSec: 90,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-wep-06',
    subject: 'physics',
    chapterId: 'phy-c11-work-energy',
    topicId: 'phy-wep-11-ballistic-pendulum',
    type: 'numerical',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Apr 11 Shift 1',
    questionText: 'A bullet of mass $m = 20\\text{ g}$ moving horizontally with a speed of $v_0 = 400\\text{ m/s}$ strikes a wooden block of mass $M = 3.98\\text{ kg}$ resting on a smooth horizontal surface attached to a horizontal ideal spring of spring constant $k = 400\\text{ N/m}$. The bullet gets embedded in the block. What is the maximum compression of the spring in $\\text{cm}$?',
    options: [],
    correctAnswer: '20', // 20 cm
    explanation: '1. Stage 1: Inelastic impact (Momentum Conservation):\n- Mass of bullet $m = 20\\text{ g} = 0.02\\text{ kg}$.\n- Combined mass after embedding: $M_{\\text{total}} = m + M = 0.02 + 3.98 = 4.0\\text{ kg}$.\n- Conservation of linear momentum during the rapid collision:\n$$m v_0 = M_{\\text{total}} V$$\n$$(0.02\\text{ kg})(400\\text{ m/s}) = (4.0\\text{ kg}) V$$\n$$8 = 4 V \\implies V = 2\\text{ m/s}$$\n\n2. Stage 2: Spring Compression (Conservation of Mechanical Energy):\n- As the block and embedded bullet compress the spring against its restoring force on the smooth surface, kinetic energy is completely converted into elastic potential energy at maximum compression $x_{\\text{max}}$:\n$$\\frac{1}{2} M_{\\text{total}} V^2 = \\frac{1}{2} k x_{\\text{max}}^2$$\n$$M_{\\text{total}} V^2 = k x_{\\text{max}}^2$$\n$$(4.0)(2)^2 = 400 \\, x_{\\text{max}}^2$$\n$$16 = 400 \\, x_{\\text{max}}^2$$\n$$x_{\\text{max}}^2 = \\frac{16}{400} = \\frac{4}{100} \\implies x_{\\text{max}} = \\frac{2}{10}\\text{ m} = 0.20\\text{ m}$$\n\n3. Converting to centimeters:\n$$x_{\\text{max}} = 0.20 \\times 100 = 20\\text{ cm}$$',
    concepts: ['Inelastic collision', 'Spring potential energy', 'Two-stage energy-momentum method'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 0
  }
];
