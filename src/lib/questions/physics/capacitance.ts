import { Question } from '@/types';

export const capacitanceQuestions: Question[] = [
  {
    id: 'pyq-phy-cap-01',
    subject: 'physics',
    chapterId: 'phy-c12-capacitance',
    topicId: 'phy-cap-6-battery-cases-work',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 30 Shift 2',
    questionText: 'A parallel plate capacitor with air between its plates has capacitance $C_0$ and is charged to potential difference $V_0$. The charging battery is then disconnected. A dielectric slab of dielectric constant $K = 4$ is now carefully inserted, completely filling the space between the plates. What is the work done by the electrostatic field in drawing the dielectric slab into the capacitor?',
    options: [
      '$\\frac{3}{8} C_0 V_0^2$',
      '$\\frac{1}{2} C_0 V_0^2$',
      '$\\frac{3}{4} C_0 V_0^2$',
      '$\\frac{1}{8} C_0 V_0^2$'
    ],
    correctAnswer: '0', // 3/8 C0 V0^2
    explanation: '1. Conservation of charge:\n- Since the battery is disconnected before inserting the dielectric, the free charge on the plates remains trapped and strictly conserved:\n$$Q_0 = C_0 V_0 = \\text{constant}$$\n\n2. Initial electrostatic energy stored in air capacitor:\n$$U_i = \\frac{Q_0^2}{2 C_0} = \\frac{1}{2} C_0 V_0^2$$\n\n3. Final capacitance with dielectric $K = 4$:\n$$C_f = K C_0 = 4 C_0$$\n\n4. Final electrostatic energy:\n$$U_f = \\frac{Q_0^2}{2 C_f} = \\frac{Q_0^2}{2(4 C_0)} = \\frac{1}{4} U_i = \\frac{1}{8} C_0 V_0^2$$\n\n5. Work done by the electrostatic field on the dielectric slab:\n- By the Work-Energy theorem for conservative fields, work done by the field equals the decrease in stored potential energy:\n$$W_{\\text{field}} = -\\Delta U = U_i - U_f = \\frac{1}{2} C_0 V_0^2 - \\frac{1}{8} C_0 V_0^2 = \\left(\\frac{4 - 1}{8}\\right) C_0 V_0^2 = \\frac{3}{8} C_0 V_0^2$$',
    concepts: ['Dielectric insertion with battery disconnected', 'Charge conservation', 'Work done by electrostatic field'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-cap-02',
    subject: 'physics',
    chapterId: 'phy-c12-capacitance',
    topicId: 'phy-cap-3-combinations-charge-sharing',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 29 Shift 1',
    questionText: 'A capacitor of capacitance $C_1 = 4.0\\text{ }\\mu\\text{F}$ is charged to a potential difference $V_1 = 200\\text{ V}$. It is then disconnected from the power source and connected in parallel to an uncharged capacitor of capacitance $C_2 = 6.0\\text{ }\\mu\\text{F}$. What is the common potential of the combination and the electrostatic energy lost as heat during the charge redistribution?',
    options: [
      '$V_c = 80\\text{ V}, \\quad \\Delta U_{\\text{loss}} = 48\\text{ mJ}$',
      '$V_c = 100\\text{ V}, \\quad \\Delta U_{\\text{loss}} = 40\\text{ mJ}$',
      '$V_c = 80\\text{ V}, \\quad \\Delta U_{\\text{loss}} = 32\\text{ mJ}$',
      '$V_c = 120\\text{ V}, \\quad \\Delta U_{\\text{loss}} = 24\\text{ mJ}$'
    ],
    correctAnswer: '0', // V_c = 80 V, Delta U = 48 mJ
    explanation: '1. Common potential after connecting in parallel:\n- By conservation of charge: $Q_{\\text{total}} = C_1 V_1 + C_2 (0) = (4.0\\text{ }\\mu\\text{F})(200\\text{ V}) = 800\\text{ }\\mu\\text{C}$.\n- Equivalent parallel capacitance: $C_{\\text{eq}} = C_1 + C_2 = 4.0 + 6.0 = 10.0\\text{ }\\mu\\text{F}$.\n$$V_c = \\frac{Q_{\\text{total}}}{C_1 + C_2} = \\frac{800\\text{ }\\mu\\text{C}}{10.0\\text{ }\\mu\\text{F}} = 80\\text{ V}$$\n\n2. Initial electrostatic energy:\n$$U_i = \\frac{1}{2} C_1 V_1^2 = \\frac{1}{2} (4.0 \\times 10^{-6}\\text{ F}) (200\\text{ V})^2 = 2.0 \\times 10^{-6} \\times 40{,}000 = 0.080\\text{ J} = 80\\text{ mJ}$$\n\n3. Final electrostatic energy:\n$$U_f = \\frac{1}{2} (C_1 + C_2) V_c^2 = \\frac{1}{2} (10.0 \\times 10^{-6}\\text{ F}) (80\\text{ V})^2 = 5.0 \\times 10^{-6} \\times 6400 = 0.032\\text{ J} = 32\\text{ mJ}$$\n\n4. Electrostatic energy dissipated as heat:\n$$\\Delta U_{\\text{loss}} = U_i - U_f = 80\\text{ mJ} - 32\\text{ mJ} = 48\\text{ mJ}$$\n\n(Shortcut check: $\\Delta U_{\\text{loss}} = \\frac{1}{2} \\frac{C_1 C_2}{C_1 + C_2} (V_1 - V_2)^2 = \\frac{1}{2} \\frac{4 \\times 6}{10} \\times 10^{-6} \\times (200)^2 = 1.2 \\times 10^{-6} \\times 40{,}000 = 0.048\\text{ J} = 48\\text{ mJ}$).',
    concepts: ['Charge sharing', 'Common potential formula', 'Energy dissipation in capacitor interconnection'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-cap-03',
    subject: 'physics',
    chapterId: 'phy-c12-capacitance',
    topicId: 'phy-cap-5-dielectric-slabs-variable',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2023,
    pyqShift: 'Jan 31 Shift 1',
    questionText: 'A parallel plate capacitor with plate area $A$ and plate separation $d$ is filled with an inhomogeneous dielectric whose dielectric constant varies linearly with distance $x$ from one plate ($x = 0$) to the other ($x = d$) according to $K(x) = K_1 + \\left(\\frac{K_2 - K_1}{d}\\right) x$. The capacitance of this capacitor is:',
    options: [
      '$\\frac{\\epsilon_0 A (K_2 - K_1)}{d \\ln\\left(\\frac{K_2}{K_1}\\right)}$',
      '$\\frac{\\epsilon_0 A (K_1 + K_2)}{2 d}$',
      '$\\frac{\\epsilon_0 A \\sqrt{K_1 K_2}}{d}$',
      '$\\frac{\\epsilon_0 A}{d \\ln\\left(\\frac{K_2}{K_1}\\right)}$'
    ],
    correctAnswer: '0', // eps0 * A * (K2 - K1) / (d * ln(K2/K1))
    explanation: '1. Slicing into differential capacitors in series:\n- Since the dielectric constant varies along the direction perpendicular to the plates (along $x$), we slice the medium into thin planar slabs of thickness $dx$ and area $A$.\n- Each differential element acts as a miniature capacitor of capacitance:\n$$dC = \\frac{\\epsilon_0 K(x) A}{dx}$$\n\n2. Summing differential capacitances in series:\n$$\\frac{1}{C} = \\int_0^d \\frac{1}{dC} = \\int_0^d \\frac{dx}{\\epsilon_0 A K(x)}$$\n\n3. Performing the integration:\n- Let $K(x) = K_1 + \\beta x$ where $\\beta = \\frac{K_2 - K_1}{d}$, so $dK = \\beta \\, dx$:\n$$\\frac{1}{C} = \\frac{1}{\\epsilon_0 A \\beta} \\int_{K_1}^{K_2} \\frac{dK}{K} = \\frac{d}{\\epsilon_0 A (K_2 - K_1)} \\ln\\left(\\frac{K_2}{K_1}\\right)$$\n\n4. Taking the reciprocal:\n$$C = \\frac{\\epsilon_0 A (K_2 - K_1)}{d \\ln\\left(\\frac{K_2}{K_1}\\right)}$$',
    concepts: ['Variable dielectric constant', 'Differential capacitor slicing', 'Series capacitor integration'],
    estimatedTimeSec: 95,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-cap-04',
    subject: 'physics',
    chapterId: 'phy-c12-capacitance',
    topicId: 'phy-cap-1-concept-parallel-plate',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 06 Shift 2',
    questionText: 'A parallel plate capacitor has plate area $A = 0.02\\text{ m}^2$ and plate separation $d = 2.0\\text{ mm}$. It is maintained at a constant DC potential difference of $V = 100\\text{ V}$ by a battery. What is the attractive electrostatic force exerted by one plate on the other? (Take $\\epsilon_0 = 8.85 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$).',
    options: [
      '$\\approx 2.21 \\times 10^{-4}\\text{ N} \\; (0.22\\text{ mN})$',
      '$\\approx 4.43 \\times 10^{-4}\\text{ N}$',
      '$\\approx 1.11 \\times 10^{-4}\\text{ N}$',
      '$\\approx 8.85 \\times 10^{-4}\\text{ N}$'
    ],
    correctAnswer: '0', // approx 2.21 x 10^-4 N
    explanation: '1. Force between two charged parallel plates:\n- The attractive electrostatic force between the plates is:\n$$F = \\frac{Q^2}{2\\epsilon_0 A} = \\frac{1}{2} Q E = \\frac{1}{2} C V \\left(\\frac{V}{d}\\right) = \\frac{1}{2} \\frac{\\epsilon_0 A V^2}{d^2}$$\n(Important: The factor of $1/2$ arises because one plate is in the field created solely by the other plate: $E_1 = \\frac{\\sigma}{2\\epsilon_0}$).' ,
    concepts: ['Electrostatic attraction force', 'Plate interaction factor 1/2', 'Capacitor mechanics'],
    estimatedTimeSec: 65,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-cap-05',
    subject: 'physics',
    chapterId: 'phy-c12-capacitance',
    topicId: 'phy-cap-8-rc-transients',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2023,
    pyqShift: 'JEE Advanced Paper 2',
    questionText: 'An uncharged capacitor of capacitance $C = 50\\text{ }\\mu\\text{F}$ is connected in series with a resistor $R = 20\\text{ k}\\Omega$ and an ideal battery of EMF $\\mathcal{E} = 10\\text{ V}$ at time $t = 0$. What is the instantaneous current flowing in the circuit at time $t = 1.0\\text{ second}$? (Take $e \\approx 2.718$).',
    options: [
      '$\\approx 184\\text{ }\\mu\\text{A}$',
      '$\\approx 500\\text{ }\\mu\\text{A}$',
      '$\\approx 316\\text{ }\\mu\\text{A}$',
      '$\\approx 68\\text{ }\\mu\\text{A}$'
    ],
    correctAnswer: '0', // approx 184 uA
    explanation: '1. Time constant of the RC circuit:\n$$\\tau = R C = (20 \\times 10^3\\text{ }\\Omega) \\times (50 \\times 10^{-6}\\text{ F}) = 1000 \\times 10^{-3} = 1.0\\text{ second}$$\n\n2. RC Charging Current Equation:\n- The charging current decays exponentially from its initial value $I_0 = \\frac{\\mathcal{E}}{R}$:\n$$i(t) = \\frac{\\mathcal{E}}{R} e^{-t/\\tau}$$\n\n3. Initial current $I_0$ at $t = 0$:\n$$I_0 = \\frac{10\\text{ V}}{20{,}000\\text{ }\\Omega} = 0.50 \\times 10^{-3}\\text{ A} = 500\\text{ }\\mu\\text{A}$$\n\n4. Current at $t = 1.0\\text{ s} = \\tau$:\n$$i(1.0) = I_0 e^{-1.0 / 1.0} = 500\\text{ }\\mu\\text{A} \\times e^{-1} = \\frac{500\\text{ }\\mu\\text{A}}{2.718} \\approx 183.96\\text{ }\\mu\\text{A} \\approx 184\\text{ }\\mu\\text{A}$$',
    concepts: ['RC transient charging current', 'Time constant tau = RC', 'Exponential current decay'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-cap-06',
    subject: 'physics',
    chapterId: 'phy-c12-capacitance',
    topicId: 'phy-cap-8-rc-transients',
    type: 'numerical',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Apr 10 Shift 1',
    questionText: 'An uncharged capacitor of capacitance $C = 10\\text{ }\\mu\\text{F}$ is connected in series with a resistor of resistance $R = 1000\\,\\Omega$ to a DC power supply of $V = 50\\text{ V}$. During the entire process of charging the capacitor to its steady state, what is the total heat energy dissipated in the resistor in millijoules ($\\text{mJ}$)?',
    options: [],
    correctAnswer: '12.5', // 12.5 mJ
    explanation: '1. Charge delivered by the battery in reaching steady state:\n$$Q = C V = (10 \\times 10^{-6}\\text{ F})(50\\text{ V}) = 500 \\times 10^{-6}\\text{ C}$$\n\n2. Work done by the battery:\n$$W_{\\text{battery}} = Q V = C V^2 = (10 \\times 10^{-6})(50)^2 = 10^{-5} \\times 2500 = 0.025\\text{ J} = 25\\text{ mJ}$$\n\n3. Electrostatic energy stored in the capacitor at steady state:\n$$U_{\\text{capacitor}} = \\frac{1}{2} C V^2 = \\frac{1}{2} (25\\text{ mJ}) = 12.5\\text{ mJ}$$\n\n4. Heat dissipated in the resistor ($H$):\n- By conservation of energy:\n$$H = W_{\\text{battery}} - U_{\\text{capacitor}} = 25\\text{ mJ} - 12.5\\text{ mJ} = 12.5\\text{ mJ}$$\n\n(Important JEE Principle: In charging an uncharged capacitor through ANY resistance from a constant voltage source, EXACTLY 50% of the energy supplied by the battery is ALWAYS converted into heat in the resistor, completely independent of the value of $R$!).',
    concepts: ['RC charging energetics', '50% heat loss theorem', 'Battery work partition'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 0
  }
];
