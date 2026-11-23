import { Question } from '@/types';

export const currentElectricityQuestions: Question[] = [
  {
    id: 'pyq-phy-cur-01',
    subject: 'physics',
    chapterId: 'phy-c12-current-electricity',
    topicId: 'phy-cur-8-meter-bridge-end-errors',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 31 Shift 1',
    questionText: 'In a meter bridge experiment, an unknown resistance $X$ connected in the left gap is balanced against a standard resistance of $S = 10.0\\,\\Omega$ in the right gap, giving a null point at $l_1 = 40.0\\text{ cm}$ from the left end. If the apparatus has end corrections of $\\alpha = 1.0\\text{ cm}$ at the left end and $\\beta = 2.0\\text{ cm}$ at the right end, what is the true value of the unknown resistance $X$?',
    options: [
      '$\\approx 6.61\\,\\Omega$',
      '$\\approx 6.67\\,\\Omega$',
      '$\\approx 7.20\\,\\Omega$',
      '$\\approx 5.80\\,\\Omega$'
    ],
    correctAnswer: '0', // approx 6.61 ohms
    explanation: '1. Physics of End Corrections in a Meter Bridge:\n- Due to the finite resistance of the end copper connecting strips and solder joints, the effective zero and $100\\text{ cm}$ marks are shifted by small lengths $\\alpha$ and $\\beta$.\n- The corrected balancing lengths are:\n  - Corrected left wire length: $l_{\\text{left}} = l_1 + \\alpha$\n  - Corrected right wire length: $l_{\\text{right}} = (100 - l_1) + \\beta$\n\n2. Balancing condition with end corrections:\n$$\\frac{X}{S} = \\frac{l_1 + \\alpha}{(100 - l_1) + \\beta}$$\n\n3. Substituting values ($l_1 = 40.0\\text{ cm}, S = 10.0\\,\\Omega, \\alpha = 1.0\\text{ cm}, \\beta = 2.0\\text{ cm}$):\n$$\\frac{X}{10.0} = \\frac{40.0 + 1.0}{(100 - 40.0) + 2.0} = \\frac{41.0}{60.0 + 2.0} = \\frac{41.0}{62.0}$$\n$$X = 10.0 \\times \\frac{41}{62} = \\frac{410}{62} \\approx 6.613\\,\\Omega \\approx 6.61\\,\\Omega$$\n\n(Uncorrected answer without end errors would be $10 \\times \\frac{40}{60} = 6.67\\,\\Omega$, which is an exam trap!).',
    concepts: ['Meter bridge', 'End error calibration', 'Wheatstone bridge balance'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-cur-02',
    subject: 'physics',
    chapterId: 'phy-c12-current-electricity',
    topicId: 'phy-cur-4-emf-internal-resistance-cells',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 27 Shift 2',
    questionText: 'Two cells having EMFs $\\mathcal{E}_1 = 6.0\\text{ V}$ (internal resistance $r_1 = 1.0\\,\\Omega$) and $\\mathcal{E}_2 = 4.0\\text{ V}$ (internal resistance $r_2 = 2.0\\,\\Omega$) are connected in parallel with OPPOSING polarities (positive terminal of cell 1 connected to negative terminal of cell 2). What is the equivalent EMF $\\mathcal{E}_{\\text{eq}}$ of the parallel combination and the current flowing through an external load resistor of $R = 10.0\\,\\Omega$?',
    options: [
      '$\\mathcal{E}_{\\text{eq}} = \\frac{8}{3}\\text{ V} \\; (\\approx 2.67\\text{ V}), \\quad I = 0.25\\text{ A}$',
      '$\\mathcal{E}_{\\text{eq}} = 5.0\\text{ V}, \\quad I = 0.45\\text{ A}$',
      '$\\mathcal{E}_{\\text{eq}} = 2.0\\text{ V}, \\quad I = 0.18\\text{ A}$',
      '$\\mathcal{E}_{\\text{eq}} = \\frac{10}{3}\\text{ V}, \\quad I = 0.31\\text{ A}$'
    ],
    correctAnswer: '0', // E_eq = 8/3 V, I = 0.25 A
    explanation: '1. Formula for equivalent EMF of parallel cells with opposite polarities:\n$$\\mathcal{E}_{\\text{eq}} = \\frac{\\frac{\\mathcal{E}_1}{r_1} - \\frac{\\mathcal{E}_2}{r_2}}{\\frac{1}{r_1} + \\frac{1}{r_2}}$$\n\n2. Calculating numerator and denominator:\n- Numerator: $\\frac{6.0}{1.0} - \\frac{4.0}{2.0} = 6 - 2 = 4.0\\text{ A}$\n- Denominator: $\\frac{1}{1.0} + \\frac{1}{2.0} = 1 + 0.5 = 1.5\\,\\Omega^{-1} = \\frac{3}{2}\\,\\Omega^{-1}$\n$$\\mathcal{E}_{\\text{eq}} = \\frac{4.0}{1.5} = \\frac{8}{3}\\text{ V} \\approx 2.67\\text{ V}$$\n\n3. Equivalent internal resistance $r_{\\text{eq}}$:\n$$\\frac{1}{r_{\\text{eq}}} = \\frac{1}{r_1} + \\frac{1}{r_2} = \\frac{3}{2}\\,\\Omega^{-1} \\implies r_{\\text{eq}} = \\frac{2}{3}\\,\\Omega$$\n\n4. Current through external load $R = 10.0\\,\\Omega$:\n$$I = \\frac{\\mathcal{E}_{\\text{eq}}}{R + r_{\\text{eq}}} = \\frac{8/3\\text{ V}}{10 + 2/3\\,\\Omega} = \\frac{8/3}{32/3} = \\frac{8}{32} = \\frac{1}{4}\\text{ A} = 0.25\\text{ A}$$',
    concepts: ['Parallel cell combination', 'Opposing polarity cells', 'Equivalent EMF and internal resistance'],
    estimatedTimeSec: 80,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-cur-03',
    subject: 'physics',
    chapterId: 'phy-c12-current-electricity',
    topicId: 'phy-cur-1-drift-velocity-micro',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 24 Shift 2',
    questionText: 'A cylindrical metallic wire carrying a steady electric current $I$ has an electron drift speed $v_d$. The wire is uniformly stretched such that its length increases by $25\\%$. If the same current $I$ continues to flow through the stretched wire, what is the new electron drift speed $v_d\'$ in terms of $v_d$?',
    options: [
      '$1.25 \\, v_d \\; \\left(\\frac{5}{4} v_d\\right)$',
      '$1.56 \\, v_d$',
      '$0.80 \\, v_d$',
      '$1.00 \\, v_d$'
    ],
    correctAnswer: '0', // 1.25 v_d
    explanation: '1. Conservation of wire volume during stretching:\n- Original volume: $V = A L$.\n- Stretched length: $L\' = L + 0.25 L = 1.25 L = \\frac{5}{4} L$.\n- Since metal volume remains constant ($A L = A\' L\'$):\n$$A\' = A \\left(\\frac{L}{L\'}\\right) = \\frac{A}{1.25} = 0.80 A = \\frac{4}{5} A$$\n\n2. Relation between Current and Drift Velocity:\n$$I = n e A v_d$$\nwhere $n$ is free electron number density (a material property, unchanged by stretching).\n\n3. Since current $I$ is kept identical in the stretched wire:\n$$I = n e A\' v_d\' = n e A v_d$$\n$$A\' v_d\' = A v_d \\implies v_d\' = v_d \\left(\\frac{A}{A\'}\\right)$$\n\n4. Substituting area ratio:\n$$v_d\' = v_d \\times 1.25 = \\frac{5}{4} v_d = 1.25 \\, v_d$$',
    concepts: ['Drift velocity formula', 'Volume conservation during stretching', 'Current density relation'],
    estimatedTimeSec: 65,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-cur-04',
    subject: 'physics',
    chapterId: 'phy-c12-current-electricity',
    topicId: 'phy-cur-9-electrical-power-bulbs',
    type: 'single_mcq',
    difficulty: 'easy',
    pyqYear: 2024,
    pyqShift: 'Apr 05 Shift 2',
    questionText: 'Two incandescent bulbs are rated as $B_1(25\\text{ W}, 220\\text{ V})$ and $B_2(100\\text{ W}, 220\\text{ V})$. They are connected in series across a $220\\text{ V}$ mains voltage supply. What is the total power consumed by the series combination, and which bulb glows with greater brightness?',
    options: [
      '$20\\text{ W}$, and $B_1 (25\\text{ W})$ glows brighter',
      '$20\\text{ W}$, and $B_2 (100\\text{ W})$ glows brighter',
      '$125\\text{ W}$, and $B_2 (100\\text{ W})$ glows brighter',
      '$50\\text{ W}$, and both glow with equal brightness'
    ],
    correctAnswer: '0', // 20 W, and B1 (25 W) glows brighter
    explanation: '1. Resistance of each bulb from its nameplate rating ($R = \\frac{V_{\\text{rated}}^2}{P_{\\text{rated}}}$):\n- For $B_1$: $R_1 = \\frac{220^2}{25} = \\frac{48{,}400}{25} = 1936\\,\\Omega$.\n- For $B_2$: $R_2 = \\frac{220^2}{100} = \\frac{48{,}400}{100} = 484\\,\\Omega$.\nNotice that $R_1 = 4 R_2$ (the lower-wattage bulb has $4$ times higher resistance!).\n\n2. Series combination across $220\\text{ V}$ supply:\n- Total series resistance: $R_{\\text{total}} = R_1 + R_2 = 1936 + 484 = 2420\\,\\Omega$.\n- Total power consumed by the combination:\n$$P_{\\text{total}} = \\frac{V^2}{R_{\\text{total}}} = \\frac{48{,}400}{2420} = 20\\text{ W}$$\n(Alternatively: $\\frac{1}{P_{\\text{total}}} = \\frac{1}{P_1} + \\frac{1}{P_2} = \\frac{1}{25} + \\frac{1}{100} = \\frac{5}{100} \\implies P_{\\text{total}} = 20\\text{ W}$).\n\n3. Brightness comparison:\n- In series, the current $I$ through both bulbs is identical.\n- Power dissipated (brightness): $P_{\\text{actual}} = I^2 R$.\n- Since $R_1 = 1936\\,\\Omega > R_2 = 484\\,\\Omega$, bulb $B_1$ dissipates 4 times more power and GLOWS MUCH BRIGHTER than $B_2$!',
    concepts: ['Bulb wattage ratings', 'Series power dissipation', 'Resistance of rated incandescent lamps'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-cur-05',
    subject: 'physics',
    chapterId: 'phy-c12-current-electricity',
    topicId: 'phy-cur-3-resistor-circuits-symmetry',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2022,
    pyqShift: 'JEE Advanced Paper 2',
    questionText: 'Twelve identical metallic wires, each having resistance $R = 12.0\\,\\Omega$, are connected to form the edges of a regular skeleton cube. What is the equivalent electrical resistance between two diametrically opposite body corners (body diagonal)?',
    options: [
      '$10.0\\,\\Omega$',
      '$9.0\\,\\Omega$',
      '$7.0\\,\\Omega$',
      '$12.0\\,\\Omega$'
    ],
    correctAnswer: '0', // 10.0 ohms
    explanation: '1. Symmetry analysis for body diagonal (corners 1 and 7):\n- Let current $I$ enter at corner 1 and leave at opposite corner 7.\n- At corner 1, the current divides equally into 3 edges because of 3-fold rotational symmetry about the body diagonal axis:\n$$I_{\\text{edge}} = \\frac{I}{3}$$\n- Each of these 3 currents reaches a vertex and splits equally into 2 adjacent edges:\n$$I_{\\text{edge, middle}} = \\frac{I/3}{2} = \\frac{I}{6}$$\n- The 6 middle currents then recombine in pairs of two into the 3 edges leading into exit corner 7:\n$$I_{\\text{edge, exit}} = \\frac{I}{3}$$\n\n2. Total potential drop along the body diagonal path:\n$$V_{1-7} = \\left(\\frac{I}{3}\\right) R + \\left(\\frac{I}{6}\\right) R + \\left(\\frac{I}{3}\\right) R = I R \\left(\\frac{1}{3} + \\frac{1}{6} + \\frac{1}{3}\\right) = I R \\left(\\frac{2 + 1 + 2}{6}\\right) = \\frac{5}{6} I R$$\n\n3. Equivalent resistance:\n$$R_{\\text{body}} = \\frac{V_{1-7}}{I} = \\frac{5}{6} R$$\n\n4. Substituting $R = 12.0\\,\\Omega$:\n$$R_{\\text{body}} = \\frac{5}{6} \\times 12.0\\,\\Omega = 10.0\\,\\Omega$$',
    concepts: ['Cube resistor network', 'Rotational symmetry analysis', 'Current branch division'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-cur-06',
    subject: 'physics',
    chapterId: 'phy-c12-current-electricity',
    topicId: 'phy-cur-5-maximum-power-transfer',
    type: 'numerical',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Apr 08 Shift 2',
    questionText: 'A DC voltage source has an open-circuit terminal voltage of $\\mathcal{E} = 12.0\\text{ V}$ and a short-circuit current of $I_{\\text{sc}} = 6.0\\text{ A}$. What is the maximum power in Watts ($\\text{W}$) that this voltage source can deliver to an external variable load resistor?',
    options: [],
    correctAnswer: '18', // 18 W
    explanation: '1. Internal resistance of the source ($r$):\n- Open-circuit condition: $V_{\\text{oc}} = \\mathcal{E} = 12.0\\text{ V}$.\n- Short-circuit condition: $I_{\\text{sc}} = \\frac{\\mathcal{E}}{r} \\implies 6.0\\text{ A} = \\frac{12.0\\text{ V}}{r}$.\n$$r = \\frac{12.0\\text{ V}}{6.0\\text{ A}} = 2.0\\,\\Omega$$\n\n2. Maximum Power Transfer Theorem:\n- An electrical source transfers maximum power to an external load resistor $R_L$ when the load resistance equals the internal resistance of the source: $R_L = r = 2.0\\,\\Omega$.\n\n3. Maximum power formula:\n$$P_{\\text{max}} = I^2 R_L = \\left(\\frac{\\mathcal{E}}{R_L + r}\\right)^2 R_L = \\left(\\frac{\\mathcal{E}}{2r}\\right)^2 r = \\frac{\\mathcal{E}^2}{4 r}$$\n\n4. Numerical calculation:\n$$P_{\\text{max}} = \\frac{(12.0\\text{ V})^2}{4 \\times 2.0\\,\\Omega} = \\frac{144}{8} = 18.0\\text{ W}$$',
    concepts: ['Maximum power transfer theorem', 'Open-circuit and short-circuit parameters', 'Internal resistance calculation'],
    estimatedTimeSec: 55,
    marks: 4,
    negativeMarks: 0
  }
];
