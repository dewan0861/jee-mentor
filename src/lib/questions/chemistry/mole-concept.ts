import { Question } from '@/types';

export const moleConceptQuestions: Question[] = [
  {
    id: 'chem-mole-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-mole-6-stoichiometry-limiting-reagent',
    chapterId: 'chem-c11-mole-concept',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    text: `In the Haber process for the synthesis of ammonia:
$$\\text{N}_2(g) + 3\\text{H}_2(g) \\longrightarrow 2\\text{NH}_3(g)$$
If $50.0\\,\\text{kg}$ of $\\text{N}_2(g)$ and $10.0\\,\\text{kg}$ of $\\text{H}_2(g)$ are mixed together, which reactant is the limiting reagent and what is the maximum mass of $\\text{NH}_3$ produced?`,
    options: [
      '$\\text{H}_2$ is limiting, $56.67\\,\\text{kg of } \\text{NH}_3$',
      '$\\text{N}_2$ is limiting, $60.71\\,\\text{kg of } \\text{NH}_3$',
      '$\\text{H}_2$ is limiting, $10.0\\,\\text{kg of } \\text{NH}_3$',
      '$\\text{N}_2$ is limiting, $50.0\\,\\text{kg of } \\text{NH}_3$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate moles of given reactants**
Molar mass of $\\text{N}_2 = 28.0\\,\\text{g/mol} = 0.028\\,\\text{kg/mol}$.
$$n_{\\text{N}_2} = \\frac{50.0\\,\\text{kg}}{0.028\\,\\text{kg/mol}} = 1.786 \\times 10^3\\,\\text{moles} = 1786\\,\\text{mol}$$

Molar mass of $\\text{H}_2 = 2.016\\,\\text{g/mol} = 2.016 \\times 10^{-3}\\,\\text{kg/mol}$.
$$n_{\\text{H}_2} = \\frac{10.0\\,\\text{kg}}{2.016 \\times 10^{-3}\\,\\text{kg/mol}} = 4.960 \\times 10^3\\,\\text{moles} = 4960\\,\\text{mol}$$

**Step 2: Determine limiting reagent**
According to the balanced equation:
- 1 mole of $\\text{N}_2$ requires 3 moles of $\\text{H}_2$.
- For $1786\\,\\text{moles}$ of $\\text{N}_2$, the required moles of $\\text{H}_2$ is:
$$n_{\\text{H}_2, \\text{required}} = 3 \\times 1786 = 5358\\,\\text{moles}$$

We only have $4960\\,\\text{moles}$ of $\\text{H}_2$ available ($4960 < 5358$).
Therefore, **$\\text{H}_2$ is strictly the limiting reagent**.

**Step 3: Calculate mass of $\\text{NH}_3$ produced**
From stoichiometry, 3 moles of $\\text{H}_2$ produce 2 moles of $\\text{NH}_3$:
$$n_{\\text{NH}_3} = \\frac{2}{3} \\times n_{\\text{H}_2} = \\frac{2}{3} \\times 4960 = 3306.7\\,\\text{moles}$$

Molar mass of $\\text{NH}_3 = 17.03\\,\\text{g/mol} = 0.01703\\,\\text{kg/mol}$.
$$\\text{Mass of } \\text{NH}_3 = 3306.7\\,\\text{mol} \\times 0.01703\\,\\text{kg/mol} \\approx 56.67\\,\\text{kg}$$

Hence, $\\text{H}_2$ is limiting and $56.67\\,\\text{kg}$ of $\\text{NH}_3$ is produced.`,
    hints: [
      'Convert initial kilograms to moles first: $n = \\text{mass}/\\text{molar mass}$.',
      'Compare $\\frac{n_{\\text{N}_2}}{1}$ with $\\frac{n_{\\text{H}_2}}{3}$. The smaller ratio indicates the limiting reagent.'
    ]
  },
  {
    id: 'chem-mole-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-mole-7-concentration-terms',
    chapterId: 'chem-c11-mole-concept',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'A $20\\%\\, (w/w)$ aqueous solution of Potassium Iodide ($\\text{KI}$, molar mass $= 166.0\\,\\text{g/mol}$) has a density of $1.202\\,\\text{g/mL}$. The molality ($m$) and molarity ($M$) of the solution are respectively:',
    options: [
      '$m = 1.506\\,\\text{mol/kg}, \\; M = 1.448\\,\\text{mol/L}$',
      '$m = 1.205\\,\\text{mol/kg}, \\; M = 1.202\\,\\text{mol/L}$',
      '$m = 2.015\\,\\text{mol/kg}, \\; M = 1.850\\,\\text{mol/L}$',
      '$m = 1.506\\,\\text{mol/kg}, \\; M = 1.202\\,\\text{mol/L}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Basis of calculation (take $100\\,\\text{g}$ solution)**
In $100\\,\\text{g}$ of a $20\\%\\,(w/w)$ solution:
- Mass of solute ($\\text{KI}$): $w_{\\text{solute}} = 20.0\\,\\text{g}$
- Mass of solvent ($\\text{H}_2\\text{O}$): $W_{\\text{solvent}} = 100.0 - 20.0 = 80.0\\,\\text{g} = 0.080\\,\\text{kg}$

Moles of $\\text{KI}$:
$$n = \\frac{20.0\\,\\text{g}}{166.0\\,\\text{g/mol}} = 0.12048\\,\\text{mol}$$

**Step 2: Calculate molality ($m$)**
$$m = \\frac{n_{\\text{solute}}}{W_{\\text{solvent (kg)}}} = \\frac{0.12048\\,\\text{mol}}{0.080\\,\\text{kg}} = 1.506\\,\\text{mol/kg}$$

**Step 3: Calculate molarity ($M$)**
Volume of $100\\,\\text{g}$ solution with density $d = 1.202\\,\\text{g/mL}$:
$$V_{\\text{soln}} = \\frac{\\text{Mass}}{\\text{Density}} = \\frac{100.0\\,\\text{g}}{1.202\\,\\text{g/mL}} = 83.195\\,\\text{mL} = 0.083195\\,\\text{L}$$

Molarity:
$$M = \\frac{n_{\\text{solute}}}{V_{\\text{soln (L)}}} = \\frac{0.12048\\,\\text{mol}}{0.083195\\,\\text{L}} \\approx 1.448\\,\\text{mol/L}$$

Hence, $m = 1.506\\,\\text{mol/kg}$ and $M = 1.448\\,\\text{mol/L}$.`,
    hints: [
      'Take $100\\,\\text{g}$ of solution: $20\\,\\text{g}$ of $\\text{KI}$ and $80\\,\\text{g}$ of water.',
      'Remember that molality uses mass of solvent ($80\\,\\text{g}$), while molarity uses solution volume ($100/1.202\\,\\text{mL}$).'
    ]
  },
  {
    id: 'chem-mole-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-mole-5-empirical-molecular-formula',
    chapterId: 'chem-c11-mole-concept',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    text: 'A gaseous hydrocarbon contains $82.76\\%$ Carbon and $17.24\\%$ Hydrogen by mass. If the vapour density of the hydrocarbon is $29.0$, its molecular formula is:',
    options: [
      '$\\text{C}_4\\text{H}_{10}$',
      '$\\text{C}_2\\text{H}_6$',
      '$\\text{C}_3\\text{H}_8$',
      '$\\text{C}_5\\text{H}_{12}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate moles of atoms per $100\\,\\text{g}$ sample**
- Moles of $\\text{C}$:
  $$n_C = \\frac{82.76\\,\\text{g}}{12.01\\,\\text{g/mol}} = 6.891\\,\\text{mol}$$
- Moles of $\\text{H}$:
  $$n_H = \\frac{17.24\\,\\text{g}}{1.008\\,\\text{g/mol}} = 17.103\\,\\text{mol}$$

**Step 2: Find atomic ratio and empirical formula**
Divide by the smallest mole value ($6.891$):
$$\\text{C} = \\frac{6.891}{6.891} = 1.00$$
$$\\text{H} = \\frac{17.103}{6.891} = 2.482 \\approx 2.50 = \\frac{5}{2}$$

Multiply by 2 to obtain whole numbers:
$$\\text{C} = 1 \\times 2 = 2, \\quad \\text{H} = 2.5 \\times 2 = 5$$
Empirical formula $= \\text{C}_2\\text{H}_5$.
Empirical formula mass $= (2 \\times 12.01) + (5 \\times 1.008) = 24.02 + 5.04 = 29.06\\,\\text{g/mol}$.

**Step 3: Determine molecular mass from vapour density**
$$M = 2 \\times \\text{V.D.} = 2 \\times 29.0 = 58.0\\,\\text{g/mol}$$

**Step 4: Find integer multiplier $n$ and molecular formula**
$$n = \\frac{\\text{Molar Mass}}{\\text{Empirical Formula Mass}} = \\frac{58.0}{29.06} \\approx 2$$
$$\\text{Molecular Formula} = (\\text{C}_2\\text{H}_5)_2 = \\text{C}_4\\text{H}_{10}$$

Hence, the molecular formula is $\\text{C}_4\\text{H}_{10}$ (Butane).`,
    hints: [
      'Molar mass is double the vapour density: $M = 2 \\times 29 = 58\\,\\text{g/mol}$.',
      'Atomic ratio of $\\text{C}:\\text{H}$ is $1:2.5$, multiplying by 2 gives empirical formula $\\text{C}_2\\text{H}_5$.'
    ]
  },
  {
    id: 'chem-mole-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-mole-7-concentration-terms',
    chapterId: 'chem-c11-mole-concept',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    text: 'If $250\\,\\text{mL}$ of a $0.50\\,\\text{M } \\text{HCl}$ solution is mixed with $750\\,\\text{mL}$ of a $0.10\\,\\text{M } \\text{HCl}$ solution, assuming volumes are strictly additive, the molarity of the resulting mixture is:',
    options: [
      '$0.20\\,\\text{M}$',
      '$0.30\\,\\text{M}$',
      '$0.25\\,\\text{M}$',
      '$0.40\\,\\text{M}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate total millimoles (mmol) of $\\text{HCl}$**
From solution 1:
$$\\text{mmol}_1 = M_1 \\times V_1 = 0.50\\,\\text{M} \\times 250\\,\\text{mL} = 125\\,\\text{mmol}$$

From solution 2:
$$\\text{mmol}_2 = M_2 \\times V_2 = 0.10\\,\\text{M} \\times 750\\,\\text{mL} = 75\\,\\text{mmol}$$

Total millimoles:
$$\\text{mmol}_{\\text{total}} = 125 + 75 = 200\\,\\text{mmol}$$

**Step 2: Total volume of mixed solution**
$$V_{\\text{total}} = V_1 + V_2 = 250\\,\\text{mL} + 750\\,\\text{mL} = 1000\\,\\text{mL} = 1.0\\,\\text{L}$$

**Step 3: Resulting molarity**
$$M_{\\text{mix}} = \\frac{\\text{mmol}_{\\text{total}}}{V_{\\text{total (mL)}}} = \\frac{200\\,\\text{mmol}}{1000\\,\\text{mL}} = 0.20\\,\\text{M}$$

Hence, the molarity of the resulting solution is $0.20\\,\\text{M}$.`,
    hints: [
      'Formula for mixing solutions of the same solute: $M_{\\text{mix}} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2}$.',
      'Total moles $= 0.125 + 0.075 = 0.20\\,\\text{mol}$ in $1.0\\,\\text{L}$ total volume.'
    ]
  },
  {
    id: 'chem-mole-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-mole-4-mole-avogadro',
    chapterId: 'chem-c11-mole-concept',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Advanced',
    year: 2021,
    text: 'Equal masses ($m\\,\\text{grams}$) of Helium ($\\text{He}$), Methane ($\\text{CH}_4$), and Sulfur Dioxide ($\\text{SO}_2$) are taken in three separate containers. The ratio of the total number of atoms present in the three containers ($\\text{He} : \\text{CH}_4 : \\text{SO}_2$) is:',
    options: [
      '$16 : 20 : 3$',
      '$1 : 5 : 3$',
      '$4 : 16 : 64$',
      '$4 : 5 : 3$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify molar masses and atomicity**
1. **Helium ($\\text{He}$)**:
   - Molar mass $M_1 = 4\\,\\text{g/mol}$
   - Atomicity $= 1$ atom/molecule
2. **Methane ($\\text{CH}_4$)**:
   - Molar mass $M_2 = 12 + 4 = 16\\,\\text{g/mol}$
   - Atomicity $= 1 + 4 = 5$ atoms/molecule
3. **Sulfur Dioxide ($\\text{SO}_2$)**:
   - Molar mass $M_3 = 32 + 32 = 64\\,\\text{g/mol}$
   - Atomicity $= 1 + 2 = 3$ atoms/molecule

**Step 2: Express total number of atoms for equal mass $m$**
$$\\text{Number of atoms} = \\left(\\frac{m}{M}\\right) \\times N_A \\times \\text{Atomicity}$$

- For $\\text{He}$:
  $$N_{\\text{He}} = \\left(\\frac{m}{4}\\right) \\times N_A \\times 1 = \\frac{m N_A}{4}$$
- For $\\text{CH}_4$:
  $$N_{\\text{CH}_4} = \\left(\\frac{m}{16}\\right) \\times N_A \\times 5 = \\frac{5 m N_A}{16}$$
- For $\\text{SO}_2$:
  $$N_{\\text{SO}_2} = \\left(\\frac{m}{64}\\right) \\times N_A \\times 3 = \\frac{3 m N_A}{64}$$

**Step 3: Calculate the ratio**
$$\\frac{1}{4} : \\frac{5}{16} : \\frac{3}{64}$$
Multiply through by the common denominator $64$:
$$64 \\times \\frac{1}{4} : 64 \\times \\frac{5}{16} : 64 \\times \\frac{3}{64}$$
$$16 : 20 : 3$$

Hence, the ratio of the total number of atoms is $16 : 20 : 3$.`,
    hints: [
      'Number of atoms is $\\text{moles} \\times N_A \\times \\text{atomicity}$.',
      'Atomicity of $\\text{He}$ is 1, $\\text{CH}_4$ is 5, and $\\text{SO}_2$ is 3.'
    ]
  },
  {
    id: 'chem-mole-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-mole-3-atomic-molecular-mass',
    chapterId: 'chem-c11-mole-concept',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: 'Naturally occurring Boron consists of two stable isotopes: $^{10}_5\\text{B}$ with atomic mass $10.01\\,\\text{u}$ and $^{11}_5\\text{B}$ with atomic mass $11.01\\,\\text{u}$. If the average atomic mass of natural Boron is $10.81\\,\\text{u}$, the percentage abundance of the $^{10}_5\\text{B}$ isotope is:',
    options: [
      '$20.0\\%$',
      '$80.0\\%$',
      '$10.0\\%$',
      '$15.0\\%$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Set up the average isotopic atomic mass formula**
Let the percentage abundance of $^{10}_5\\text{B}$ be $x\\%$.
Then the percentage abundance of $^{11}_5\\text{B}$ is $(100 - x)\\%$.

$$A_{\\text{avg}} = \\frac{x \\cdot A_1 + (100 - x) \\cdot A_2}{100}$$

**Step 2: Substitute given masses**
$$10.81 = \\frac{x(10.01) + (100 - x)(11.01)}{100}$$
$$10.81 \\times 100 = 10.01 x + 1101 - 11.01 x$$
$$1081 = 1101 - 1.00 x$$
$$1.00 x = 1101 - 1081 = 20$$
$$x = 20.0\\%$$

Therefore, the abundance of $^{10}_5\\text{B}$ is $20.0\\%$ (and $^{11}_5\\text{B}$ is $80.0\\%$).

Hence, option (A) is correct.`,
    hints: [
      'Use average atomic mass formula: $A_{\\text{avg}} = \\frac{x A_1 + (100-x) A_2}{100}$.',
      'Solve linear equation: $10.81 = 0.1001 x + 11.01 - 0.1101 x$.'
    ]
  }
];
