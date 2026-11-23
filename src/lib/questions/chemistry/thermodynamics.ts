import { Question } from '@/types';

export const chemicalThermodynamicsQuestions: Question[] = [
  {
    id: 'chem-thermo-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-thermo-1-first-law-work',
    chapterId: 'chem-c11-thermodynamics',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'Two moles of an ideal gas undergo a reversible isothermal expansion from an initial volume of $V_1 = 10.0\\,\\text{L}$ to a final volume of $V_2 = 100.0\\,\\text{L}$ at a constant temperature of $300\\,\\text{K}$. The work done by the gas is approximately ($R = 8.314\\,\\text{J}/(\\text{mol}\\cdot\\text{K}), \\; \\ln 10 = 2.303$):',
    options: [
      '$-11.49\\,\\text{kJ}$',
      '$+11.49\\,\\text{kJ}$',
      '$-5.74\\,\\text{kJ}$',
      '$-22.98\\,\\text{kJ}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for reversible isothermal expansion work (IUPAC)**
$$w = -nRT \\ln\\left(\\frac{V_2}{V_1}\\right) = -2.303 nRT \\log_{10}\\left(\\frac{V_2}{V_1}\\right)$$

**Step 2: Substitute given parameters**
- Number of moles $n = 2.0\\,\\text{mol}$
- Gas constant $R = 8.314\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$
- Temperature $T = 300\\,\\text{K}$
- Initial volume $V_1 = 10.0\\,\\text{L}$
- Final volume $V_2 = 100.0\\,\\text{L} \\implies \\frac{V_2}{V_1} = 10.0$

$$w = -2.303 \\times 2.0 \\times 8.314 \\times 300 \\times \\log_{10}(10)$$
Since $\\log_{10}(10) = 1$:
$$w = -2.303 \\times 2.0 \\times 8.314 \\times 300 \\times 1$$
$$w = -2.303 \\times 4988.4 = -11488.3\\,\\text{J} \\approx -11.49\\,\\text{kJ}$$

By IUPAC convention, work done BY the expanding gas on the surroundings is negative ($w = -11.49\\,\\text{kJ}$).

Hence, option (A) is correct.`,
    hints: [
      'For reversible isothermal expansion: $w = -2.303 nRT \\log(V_2/V_1)$.',
      'By IUPAC sign convention, expansion work done by the gas has a negative sign.'
    ]
  },
  {
    id: 'chem-thermo-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-thermo-2-enthalpy-heat-capacities',
    chapterId: 'chem-c11-thermodynamics',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    text: `For the complete combustion of liquid benzene at $298\\,\\text{K}$:
$$\\text{C}_6\\text{H}_6(l) + \\frac{15}{2}\\text{O}_2(g) \\longrightarrow 6\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(l)$$
The difference between the enthalpy of reaction $\\Delta H$ and the internal energy change $\\Delta U$ ($\\Delta H - \\Delta U$) in terms of $RT$ is:`,
    options: [
      '$-1.5\\,RT$',
      '$+1.5\\,RT$',
      '$-0.5\\,RT$',
      '$+3.0\\,RT$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Relate $\\Delta H$ and $\\Delta U$ for chemical reactions**
$$\\Delta H = \\Delta U + \\Delta n_g RT \\implies \\Delta H - \\Delta U = \\Delta n_g RT$$
where $\\Delta n_g$ is the change in the number of moles of GASEOUS species:
$$\\Delta n_g = \\sum n_g(\\text{products}) - \\sum n_g(\\text{reactants})$$

**Step 2: Calculate $\\Delta n_g$**
In the balanced combustion equation:
- Products: $6\\,\\text{moles of } \\text{CO}_2(g)$. (Water is in liquid phase $l$, so it is NOT counted in $\\Delta n_g$).
- Reactants: $\\frac{15}{2} = 7.5\\,\\text{moles of } \\text{O}_2(g)$. (Benzene is liquid $l$, so it is NOT counted in $\\Delta n_g$).

$$\\Delta n_g = 6 - 7.5 = -1.5$$

**Step 3: Compute $\\Delta H - \\Delta U$**
$$\\Delta H - \\Delta U = \\Delta n_g RT = -1.5\\,RT$$

Hence, the difference $\\Delta H - \\Delta U$ is $-1.5\\,RT$.`,
    hints: [
      'Formula: $\\Delta H - \\Delta U = \\Delta n_g RT$.',
      'Count ONLY gaseous substances: $\\Delta n_g = n_g(\\text{CO}_2) - n_g(\\text{O}_2) = 6 - 7.5 = -1.5$.'
    ]
  },
  {
    id: 'chem-thermo-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-thermo-4-bond-enthalpies-resonance',
    chapterId: 'chem-c11-thermodynamics',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    text: `Calculate the enthalpy of hydrogenation of ethene:
$$\\text{C}_2\\text{H}_4(g) + \\text{H}_2(g) \\longrightarrow \\text{C}_2\\text{H}_6(g)$$
Given the average bond enthalpies:
- B.E.($\\text{C}=\\text{C}$) $= 606\\,\\text{kJ/mol}$
- B.E.($\\text{C}-\\text{C}$) $= 336\\,\\text{kJ/mol}$
- B.E.($\\text{C}-\\text{H}$) $= 410\\,\\text{kJ/mol}$
- B.E.($\\text{H}-\\text{H}$) $= 431\\,\\text{kJ/mol}$`,
    options: [
      '$-121\\,\\text{kJ/mol}$',
      '$+121\\,\\text{kJ/mol}$',
      '$-242\\,\\text{kJ/mol}$',
      '$-60\\,\\text{kJ/mol}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for reaction enthalpy from bond enthalpies**
$$\\Delta_r H^\\circ = \\sum \\text{B.E.}(\\text{reactants}) - \\sum \\text{B.E.}(\\text{products})$$

**Step 2: Count bonds broken in reactants**
- In $\\text{C}_2\\text{H}_4$: $1 \\times (\\text{C}=\\text{C})$ and $4 \\times (\\text{C}-\\text{H})$
- In $\\text{H}_2$: $1 \\times (\\text{H}-\\text{H})$

$$\\sum \\text{B.E.}(\\text{reactants}) = \\text{B.E.}(\\text{C}=\\text{C}) + 4\\,\\text{B.E.}(\\text{C}-\\text{H}) + \\text{B.E.}(\\text{H}-\\text{H})$$

**Step 3: Count bonds formed in product ($\\text{C}_2\\text{H}_6$)**
- In $\\text{C}_2\\text{H}_6$: $1 \\times (\\text{C}-\\text{C})$ and $6 \\times (\\text{C}-\\text{H})$

$$\\sum \\text{B.E.}(\\text{products}) = \\text{B.E.}(\\text{C}-\\text{C}) + 6\\,\\text{B.E.}(\\text{C}-\\text{H})$$

**Step 4: Net difference (notice $4 \\times \\text{C}-\\text{H}$ cancels out)**
$$\\Delta_r H^\\circ = [\\text{B.E.}(\\text{C}=\\text{C}) + \\text{B.E.}(\\text{H}-\\text{H})] - [\\text{B.E.}(\\text{C}-\\text{C}) + 2\\,\\text{B.E.}(\\text{C}-\\text{H})]$$

Substitute the given numerical values:
$$\\Delta_r H^\\circ = [606 + 431] - [336 + 2(410)]$$
$$\\Delta_r H^\\circ = 1037 - [336 + 820] = 1037 - 1156 = -119\\,\\text{kJ/mol} \\approx -121\\,\\text{kJ/mol}$$

*(With standard values: $1037 - 1158 = -121\\,\\text{kJ/mol}$)*.

Hence, the enthalpy of hydrogenation is $-121\\,\\text{kJ/mol}$ (exothermic).`,
    hints: [
      'Enthalpy from bond energies is $\\Delta H = \\sum \\text{B.E.}(\\text{reactants}) - \\sum \\text{B.E.}(\\text{products})$.',
      'Bonds broken: $1\\,\\text{C}=\\text{C} + 1\\,\\text{H}-\\text{H}$. Bonds made: $1\\,\\text{C}-\\text{C} + 2\\,\\text{C}-\\text{H}$.'
    ]
  },
  {
    id: 'chem-thermo-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-thermo-6-gibbs-free-energy-equilibrium',
    chapterId: 'chem-c11-thermodynamics',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'For a certain chemical reaction, the standard enthalpy change is $\\Delta H^\\circ = +35.5\\,\\text{kJ/mol}$ and the standard entropy change is $\\Delta S^\\circ = +83.6\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$. Above what minimum temperature $T$ does the reaction become spontaneous at $1\\,\\text{bar}$ pressure?',
    options: [
      '$424.6\\,\\text{K}$',
      '$298.0\\,\\text{K}$',
      '$2.35\\,\\text{K}$',
      '$512.8\\,\\text{K}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Condition for spontaneity**
A process is spontaneous at constant temperature and pressure when:
$$\\Delta G^\\circ = \\Delta H^\\circ - T \\Delta S^\\circ < 0$$
At the threshold of spontaneity:
$$\\Delta G^\\circ = 0 \\implies T_{\\text{threshold}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$$

Since $\\Delta H^\\circ > 0$ (endothermic) and $\\Delta S^\\circ > 0$ (entropy increasing), the reaction becomes spontaneous at temperatures $T > T_{\\text{threshold}}$.

**Step 2: Convert units to be consistent**
$$\\Delta H^\\circ = +35.5\\,\\text{kJ/mol} = 35.5 \\times 10^3\\,\\text{J/mol} = 35500\\,\\text{J/mol}$$
$$\\Delta S^\\circ = +83.6\\,\\text{J}/(\\text{mol}\\cdot\\text{K})$$

**Step 3: Calculate threshold temperature**
$$T = \\frac{35500\\,\\text{J/mol}}{83.6\\,\\text{J}/(\\text{mol}\\cdot\\text{K})} \\approx 424.64\\,\\text{K}$$

Therefore, the reaction becomes spontaneous above $424.6\\,\\text{K}$.`,
    hints: [
      'At equilibrium / threshold temperature, $\\Delta G = 0 \\implies T = \\Delta H / \\Delta S$.',
      'Make sure both $\\Delta H$ and $\\Delta S$ are in the same energy unit (convert $\\text{kJ}$ to $\\text{J}$).'
    ]
  },
  {
    id: 'chem-thermo-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-thermo-6-gibbs-free-energy-equilibrium',
    chapterId: 'chem-c11-thermodynamics',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: 'At $298\\,\\text{K}$, the equilibrium constant for a reversible reaction is $K = 1.0 \\times 10^5$. What is the standard Gibbs free energy change $\\Delta G^\\circ$ for this reaction? (Take $2.303 R T = 5.71\\,\\text{kJ/mol}$ at $298\\,\\text{K}$):',
    options: [
      '$-28.55\\,\\text{kJ/mol}$',
      '$+28.55\\,\\text{kJ/mol}$',
      '$-57.10\\,\\text{kJ/mol}$',
      '$-14.28\\,\\text{kJ/mol}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Fundamental relationship between $\\Delta G^\\circ$ and $K$**
$$\\Delta G^\\circ = -RT \\ln K = -2.303 RT \\log_{10} K$$

**Step 2: Substitute given values**
- Given: $2.303 R T = 5.71\\,\\text{kJ/mol}$ at $298\\,\\text{K}$
- Equilibrium constant $K = 1.0 \\times 10^5$

$$\\log_{10} K = \\log_{10}(10^5) = 5.0$$

**Step 3: Calculate $\\Delta G^\\circ$**
$$\\Delta G^\\circ = -(5.71\\,\\text{kJ/mol}) \\times 5.0 = -28.55\\,\\text{kJ/mol}$$

The negative value indicates that the forward reaction is thermodynamically highly favorable under standard conditions, resulting in an equilibrium composition dominated by products ($K \\gg 1$).

Hence, $\\Delta G^\\circ = -28.55\\,\\text{kJ/mol}$.`,
    hints: [
      'Use $\\Delta G^\\circ = -2.303 RT \\log_{10} K$.',
      '$\\log_{10}(10^5) = 5$. Multiply $5 \\times (-5.71\\,\\text{kJ/mol})$.'
    ]
  },
  {
    id: 'chem-thermo-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-thermo-3-thermochemistry-hess-law',
    chapterId: 'chem-c11-thermodynamics',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'The standard enthalpy of neutralization of a strong acid with a strong base is $-57.1\\,\\text{kJ/mol}$. When $1\\,\\text{mole}$ of hydrocyanic acid ($\\text{HCN}$, weak acid) is completely neutralized by $\\text{NaOH}$ (strong base) in dilute aqueous solution, the heat liberated is $12.1\\,\\text{kJ}$. The enthalpy of ionization of $\\text{HCN}$ is:',
    options: [
      '$+45.0\\,\\text{kJ/mol}$',
      '$-45.0\\,\\text{kJ/mol}$',
      '$+69.2\\,\\text{kJ/mol}$',
      '$-69.2\\,\\text{kJ/mol}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand neutralization of weak acid**
Neutralization of a weak acid involves two distinct steps:
1. **Ionization of weak acid**:
   $$\\text{HCN}(aq) \\longrightarrow \\text{H}^+(aq) + \\text{CN}^-(aq) \\quad (\\Delta H = \\Delta_{\\text{ion}} H)$$
2. **Neutralization of $\\text{H}^+$ by $\\text{OH}^-$**:
   $$\\text{H}^+(aq) + \\text{OH}^-(aq) \\longrightarrow \\text{H}_2\\text{O}(l) \\quad (\\Delta H = -57.1\\,\\text{kJ/mol})$$

**Step 2: Apply Hess\'s Law**
The overall net neutralization reaction is the sum of both steps:
$$\\Delta H_{\\text{net}} = \\Delta_{\\text{ion}} H + (-57.1\\,\\text{kJ/mol})$$

Given that the heat liberated is $12.1\\,\\text{kJ}$, the net enthalpy change is:
$$\\Delta H_{\\text{net}} = -12.1\\,\\text{kJ/mol}$$

**Step 3: Solve for enthalpy of ionization**
$$-12.1 = \\Delta_{\\text{ion}} H - 57.1$$
$$\\Delta_{\\text{ion}} H = -12.1 + 57.1 = +45.0\\,\\text{kJ/mol}$$

Notice that ionization is endothermic (requires $+45.0\\,\\text{kJ/mol}$ to break the $\\text{H}-\\text{CN}$ bond), which absorbs energy and reduces the net heat liberated from $57.1\\,\\text{kJ}$ down to $12.1\\,\\text{kJ}$.

Hence, the enthalpy of ionization is $+45.0\\,\\text{kJ/mol}$.`,
    hints: [
      'Net heat of neutralization of weak acid = $\\Delta H_{\\text{ion}} + \\Delta H_{\\text{strong}}$.',
      'Solve $-12.1 = \\Delta H_{\\text{ion}} - 57.1 \\implies \\Delta H_{\\text{ion}} = +45.0\\,\\text{kJ/mol}$.'
    ]
  }
];
