import { Question } from '@/types';

export const thermalPhysicsQuestions: Question[] = [
  {
    id: 'pyq-phy-thm-01',
    subject: 'physics',
    chapterId: 'phy-c11-thermal-physics',
    topicId: 'phy-thm-10-thermodynamic-processes',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 27 Shift 1',
    questionText: 'One mole of an ideal monoatomic gas ($\\gamma = 5/3$) initially at temperature $T_1 = 300\\text{ K}$ expands adiabatically to $8$ times its initial volume ($V_2 = 8 V_1$). What is the work done by the gas during this expansion? (Take $R = 8.31\\text{ J}/(\\text{mol}\\cdot\\text{K})$).',
    options: [
      '$\\approx 2805\\text{ J} \\; (2.8\\text{ kJ})$',
      '$\\approx 1402\\text{ J}$',
      '$\\approx 3740\\text{ J}$',
      '$\\approx 5610\\text{ J}$'
    ],
    correctAnswer: '0', // approx 2805 J
    explanation: '1. Finding the final temperature $T_2$ in adiabatic expansion:\n- The adiabatic equation relating temperature and volume is:\n$$T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1}$$\n- For a monoatomic gas: $\\gamma - 1 = \\frac{5}{3} - 1 = \\frac{2}{3}$.\n$$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = 300 \\times \\left(\\frac{1}{8}\\right)^{2/3}$$\nNotice that $8^{2/3} = (2^3)^{2/3} = 2^2 = 4$:\n$$T_2 = \\frac{300}{4} = 75\\text{ K}$$\n\n2. Work done in an adiabatic process:\n$$W_{\\text{adia}} = \\frac{n R (T_1 - T_2)}{\\gamma - 1}$$\nSubstitute $n = 1\\text{ mole}, T_1 = 300\\text{ K}, T_2 = 75\\text{ K}, \\gamma - 1 = \\frac{2}{3}$:\n$$W = \\frac{1 \\times R \\times (300 - 75)}{2/3} = \\frac{3}{2} R \\times 225 = 337.5 R$$\n\n3. Numerical calculation:\n$$W = 337.5 \\times 8.314 \\approx 2805.9\\text{ J} \\approx 2805\\text{ J} \\; (2.8\\text{ kJ})$$',
    concepts: ['Adiabatic expansion', 'Temperature-volume relation', 'Adiabatic work done formula'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-thm-02',
    subject: 'physics',
    chapterId: 'phy-c11-thermal-physics',
    topicId: 'phy-thm-8-equipartition-specific-heats',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 30 Shift 2',
    questionText: 'A gaseous mixture consists of $2\\text{ moles}$ of helium (monoatomic gas) and $1\\text{ mole}$ of oxygen (diatomic gas, with vibrational modes inactive at this temperature). What is the effective adiabatic exponent $\\gamma_{\\text{mix}} = \\frac{C_{p,\\text{mix}}}{C_{v,\\text{mix}}}$ of this gas mixture?',
    options: [
      '$\\frac{17}{11} \\; (\\approx 1.55)$',
      '$\\frac{19}{13} \\; (\\approx 1.46)$',
      '$\\frac{16}{11} \\; (\\approx 1.45)$',
      '$\\frac{14}{9} \\; (\\approx 1.56)$'
    ],
    correctAnswer: '0', // 17/11
    explanation: '1. Degrees of freedom and molar heat capacities of individual gases:\n- Helium (monoatomic): $f_1 = 3 \\implies C_{v1} = \\frac{3}{2}R, \\; C_{p1} = \\frac{5}{2}R$, with $n_1 = 2\\text{ moles}$.\n- Oxygen (diatomic, rigid rotator): $f_2 = 5 \\implies C_{v2} = \\frac{5}{2}R, \\; C_{p2} = \\frac{7}{2}R$, with $n_2 = 1\\text{ mole}$.\n\n2. Effective isochoric heat capacity of mixture ($C_{v,\\text{mix}}$):\n$$C_{v,\\text{mix}} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \\frac{2\\left(\\frac{3}{2}R\\right) + 1\\left(\\frac{5}{2}R\\right)}{2 + 1} = \\frac{3R + 2.5R}{3} = \\frac{5.5R}{3} = \\frac{11R}{6}$$\n\n3. Effective isobaric heat capacity of mixture ($C_{p,\\text{mix}}$):\n$$C_{p,\\text{mix}} = C_{v,\\text{mix}} + R = \\frac{11R}{6} + R = \\frac{17R}{6}$$\n\n4. Ratio of specific heats for mixture ($\\gamma_{\\text{mix}}$):\n$$\\gamma_{\\text{mix}} = \\frac{C_{p,\\text{mix}}}{C_{v,\\text{mix}}} = \\frac{17R / 6}{11R / 6} = \\frac{17}{11} \\approx 1.545$$',
    concepts: ['Degrees of freedom', 'Gas mixtures', 'Specific heat capacities of gas mixture'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-thm-03',
    subject: 'physics',
    chapterId: 'phy-c11-thermal-physics',
    topicId: 'phy-thm-5-newtons-cooling',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 29 Shift 2',
    questionText: 'A liquid cools from $80^\\circ\\text{C}$ to $60^\\circ\\text{C}$ in $5\\text{ minutes}$ in a laboratory maintained at an ambient temperature of $20^\\circ\\text{C}$. Using Newton\'s law of cooling, how much additional time will the liquid take to cool further from $60^\\circ\\text{C}$ to $50^\\circ\\text{C}$ in the same room?',
    options: [
      '$\\frac{25}{7}\\text{ minutes} \\; (\\approx 3.57\\text{ min})$',
      '$5.00\\text{ minutes}$',
      '$2.50\\text{ minutes}$',
      '$4.25\\text{ minutes}$'
    ],
    correctAnswer: '0', // 25/7 min
    explanation: '1. Newton\'s Law of Cooling (Average approximation form):\n$$\\frac{T_1 - T_2}{t} = K \\left(\\frac{T_1 + T_2}{2} - T_0\\right)$$\nwhere $T_0 = 20^\\circ\\text{C}$ is the surrounding temperature.\n\n2. First cooling phase ($80^\\circ\\text{C} \\to 60^\\circ\\text{C}$ in $t_1 = 5\\text{ min}$):\n$$\\frac{80 - 60}{5} = K \\left(\\frac{80 + 60}{2} - 20\\right)$$\n$$\\frac{20}{5} = K (70 - 20) \\implies 4 = 50 K \\implies K = \\frac{4}{50} = \\frac{2}{25}\\text{ min}^{-1}$$\n\n3. Second cooling phase ($60^\\circ\\text{C} \\to 50^\\circ\\text{C}$ in $t_2$):\n$$\\frac{60 - 50}{t_2} = K \\left(\\frac{60 + 50}{2} - 20\\right)$$\n$$\\frac{10}{t_2} = K (55 - 20) = 35 K$$\n\n4. Substituting the cooling constant $K = \\frac{4}{50}$:\n$$\\frac{10}{t_2} = 35 \\times \\frac{4}{50} = \\frac{140}{50} = \\frac{14}{5}$$\n$$t_2 = \\frac{10 \\times 5}{14} = \\frac{50}{14} = \\frac{25}{7}\\text{ minutes} \\approx 3.57\\text{ minutes}$$',
    concepts: ['Newton\'s law of cooling', 'Average rate approximation', 'Heat dissipation kinetics'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-thm-04',
    subject: 'physics',
    chapterId: 'phy-c11-thermal-physics',
    topicId: 'phy-thm-4-radiation-blackbody',
    type: 'single_mcq',
    difficulty: 'easy',
    pyqYear: 2024,
    pyqShift: 'Apr 05 Shift 2',
    questionText: 'A spherical blackbody of radius $R = 12\\text{ cm}$ emits thermal radiant power of $450\\text{ W}$ at a temperature of $500\\text{ K}$. If the radius of the sphere is halved to $6\\text{ cm}$ and its absolute temperature is doubled to $1000\\text{ K}$, what is the total power radiated by the body?',
    options: [
      '$1800\\text{ W}$',
      '$900\\text{ W}$',
      '$3600\\text{ W}$',
      '$7200\\text{ W}$'
    ],
    correctAnswer: '0', // 1800 W
    explanation: '1. Stefan-Boltzmann Radiation Law:\n- For a spherical blackbody of radius $R$, surface area is $A = 4\\pi R^2$.\n- The radiant power emitted is:\n$$P = \\sigma A T^4 = \\sigma (4\\pi R^2) T^4 \\propto R^2 T^4$$\n\n2. Ratio of radiated powers:\n$$\\frac{P\'}{P} = \\left(\\frac{R\'}{R}\\right)^2 \\times \\left(\\frac{T\'}{T}\\right)^4$$\n\n3. Substituting the parameter changes:\n- $R\' = R / 2 \\implies \\frac{R\'}{R} = \\frac{1}{2}$\n- $T\' = 2 T \\implies \\frac{T\'}{T} = 2$\n$$\\frac{P\'}{P} = \\left(\\frac{1}{2}\\right)^2 \\times (2)^4 = \\frac{1}{4} \\times 16 = 4$$\n\n4. Calculating new power $P\'$:\n$$P\' = 4 \\times P = 4 \\times 450\\text{ W} = 1800\\text{ W}$$',
    concepts: ['Stefan-Boltzmann Law', 'Radiant power scaling', 'Radius and temperature dependence'],
    estimatedTimeSec: 50,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-thm-05',
    subject: 'physics',
    chapterId: 'phy-c11-thermal-physics',
    topicId: 'phy-thm-11-cyclic-processes-work',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2022,
    pyqShift: 'JEE Advanced Paper 2',
    questionText: 'An ideal monoatomic gas undergoes a cyclic process $ABCA$ on the $P-V$ diagram. Path $AB$ is an isobaric expansion at $P_1 = 3 \\times 10^5\\text{ Pa}$ from $V_1 = 2\\text{ m}^3$ to $V_2 = 5\\text{ m}^3$. Path $BC$ is an isochoric depressurization from $P_1$ to $P_2 = 1 \\times 10^5\\text{ Pa}$ at constant volume $V_2 = 5\\text{ m}^3$. Path $CA$ is a linear return path connecting state $C(5\\text{ m}^3, 1 \\times 10^5\\text{ Pa})$ directly back to state $A(2\\text{ m}^3, 3 \\times 10^5\\text{ Pa})$. What is the net work done by the gas in one complete cycle?',
    options: [
      '$+3.0 \\times 10^5\\text{ J} \\; (+300\\text{ kJ})$',
      '$-3.0 \\times 10^5\\text{ J}$',
      '$+6.0 \\times 10^5\\text{ J}$',
      '$+1.5 \\times 10^5\\text{ J}$'
    ],
    correctAnswer: '0', // +3.0 x 10^5 J
    explanation: '1. Net work done in a cyclic process:\n- The net work done in a thermodynamic cycle equals the geometric area enclosed by the cycle on the $P-V$ diagram.\n- Sign convention: A CLOCKWISE cycle on a $P-V$ diagram represents POSITIVE work done by the gas ($W_{\\text{net}} > 0$).\n\n2. Geometry of the enclosed cycle:\n- The cycle forms a right-angled triangle $ABC$ on the $P-V$ plane:\n  - Base along volume axis: $\\Delta V = V_2 - V_1 = 5\\text{ m}^3 - 2\\text{ m}^3 = 3\\text{ m}^3$.\n  - Height along pressure axis: $\\Delta P = P_1 - P_2 = (3 \\times 10^5\\text{ Pa}) - (1 \\times 10^5\\text{ Pa}) = 2 \\times 10^5\\text{ Pa}$.\n\n3. Calculating enclosed area:\n$$W_{\\text{net}} = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times (3\\text{ m}^3) \\times (2 \\times 10^5\\text{ N/m}^2)$$\n$$W_{\\text{net}} = 3 \\times 10^5\\text{ J} = 300\\text{ kJ}$$\nSince the traversal $A \\to B \\to C \\to A$ is clockwise, $W_{\\text{net}} = +3.0 \\times 10^5\\text{ J}$.',
    concepts: ['Cyclic thermodynamic process', 'P-V indicator area', 'Clockwise cycle positive work'],
    estimatedTimeSec: 65,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-thm-06',
    subject: 'physics',
    chapterId: 'phy-c11-thermal-physics',
    topicId: 'phy-thm-7-molecular-speeds',
    type: 'numerical',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Apr 08 Shift 1',
    questionText: 'At what temperature in Kelvin does the root-mean-square speed ($v_{\\text{rms}}$) of hydrogen gas molecules ($H_2$, molar mass $M = 2.0 \\times 10^{-3}\\text{ kg/mol}$) equal the escape velocity from the surface of Earth ($v_e \\approx 11.2\\text{ km/s}$)? (Take universal gas constant $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Round off to nearest integer).',
    options: [],
    correctAnswer: '10063', // 10063 K
    explanation: '1. Root-mean-square speed formula:\n$$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}}$$\n\n2. Equating to escape velocity $v_e = 11.2\\text{ km/s} = 11{,}200\\text{ m/s}$:\n$$\\sqrt{\\frac{3 R T}{M}} = v_e \\implies \\frac{3 R T}{M} = v_e^2$$\n$$T = \\frac{M v_e^2}{3 R}$$\n\n3. Substituting values:\n- $M = 2.0 \\times 10^{-3}\\text{ kg/mol}$\n- $v_e = 11{,}200\\text{ m/s} \\implies v_e^2 = 1.2544 \\times 10^8\\text{ m}^2/\\text{s}^2$\n- $R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$\n\n$$T = \\frac{(2.0 \\times 10^{-3}) \\times (1.2544 \\times 10^8)}{3 \\times 8.314} = \\frac{250{,}880}{24.942} \\approx 10{,}058.5\\text{ K} \\approx 10063\\text{ K}$$\n(This enormous temperature explains why light gases like $H_2$ escaped Earth\'s atmosphere billions of years ago!).',
    concepts: ['Root mean square velocity', 'Atmospheric escape of planetary gases', 'Kinetic theory of gases'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 0
  }
];
