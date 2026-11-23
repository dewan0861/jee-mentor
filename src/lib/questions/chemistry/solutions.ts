import { Question } from '@/types';

export const solutionsQuestions: Question[] = [
  {
    id: 'chem-sol-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-sol-2-raoult-law-vapour-pressure',
    chapterId: 'chem-c12-solutions',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `At $300\\,\\text{K}$, the vapour pressure of pure benzene is $120\\,\\text{torr}$ and that of pure toluene is $80\\,\\text{torr}$. In an equimolar ideal liquid mixture of benzene and toluene, what is the mole fraction of benzene in the vapour phase at equilibrium?`,
    options: [
      '$0.60$',
      '$0.50$',
      '$0.40$',
      '$0.75$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the given parameters**
- Pure benzene vapour pressure: $P_B^0 = 120\\,\\text{torr}$
- Pure toluene vapour pressure: $P_T^0 = 80\\,\\text{torr}$
- Equimolar liquid mixture:
  $$x_B = x_T = 0.50$$

**Step 2: Apply Raoult's Law to calculate partial vapour pressures**
$$P_B = P_B^0 \\cdot x_B = 120 \\times 0.50 = 60\\,\\text{torr}$$
$$P_T = P_T^0 \\cdot x_T = 80 \\times 0.50 = 40\\,\\text{torr}$$

**Step 3: Calculate total vapour pressure**
$$P_{\\text{total}} = P_B + P_T = 60 + 40 = 100\\,\\text{torr}$$

**Step 4: Determine mole fraction of benzene in the vapour phase ($y_B$)**
By Dalton's law of partial pressures:
$$y_B = \\frac{P_B}{P_{\\text{total}}} = \\frac{60\\,\\text{torr}}{100\\,\\text{torr}} = 0.60$$

Notice that benzene, being more volatile ($P_B^0 > P_T^0$), is enriched in the vapour phase ($y_B = 0.60 > x_B = 0.50$), strictly conforming to Konovalov's rule.`,
    hints: [
      'Calculate partial pressures of each component using $P_i = P_i^0 \\cdot x_i$.',
      'Mole fraction in vapour phase is the ratio of partial pressure to total pressure: $y_B = P_B / P_{\\text{total}}$.'
    ]
  },
  {
    id: 'chem-sol-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-sol-5-elevation-boiling-depression-freezing',
    chapterId: 'chem-c12-solutions',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `A $0.10\\,m$ aqueous solution of a weak monobasic acid $\\text{HA}$ boils at $100.078^\\circ\\text{C}$ at $1\\,\\text{atm}$. Given that the molal boiling point elevation constant of water $K_b = 0.52\\,\\text{K}\\cdot\\text{kg}\\cdot\\text{mol}^{-1}$ and the normal boiling point of pure water is $100.000^\\circ\\text{C}$, the percentage degree of dissociation ($\\alpha$) of the acid is:`,
    options: [
      '$50\\%$',
      '$25\\%$',
      '$15\\%$',
      '$75\\%$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate elevation in boiling point ($\\Delta T_b$)**
$$\\Delta T_b = T_b - T_b^0 = 100.078^\\circ\\text{C} - 100.000^\\circ\\text{C} = 0.078\\,\\text{K}$$

**Step 2: Relate $\\Delta T_b$ to molality through van 't Hoff factor ($i$)**
$$\\Delta T_b = i \\cdot K_b \\cdot m$$
$$0.078 = i \\times 0.52 \\times 0.10$$
$$0.078 = i \\times 0.052$$
$$i = \\frac{0.078}{0.052} = 1.50$$

**Step 3: Relate van 't Hoff factor to degree of dissociation ($\\alpha$)**
For a monobasic acid $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$:
- Initial moles: $1$
- At equilibrium: $1 - \\alpha$, $\\alpha$, $\\alpha$
- Total particles: $n_{\\text{total}} = 1 - \\alpha + \\alpha + \\alpha = 1 + \\alpha$

Since $n = 2$ ions per formula unit:
$$i = 1 + (n - 1)\\alpha = 1 + (2 - 1)\\alpha = 1 + \\alpha$$
$$1.50 = 1 + \\alpha \\implies \\alpha = 0.50$$

In percentage:
$$\\%\\,\\alpha = 0.50 \\times 100\\% = 50\\%$$`,
    hints: [
      'Find boiling point elevation $\\Delta T_b = T_b - T_b^0$.',
      'Calculate van \'t Hoff factor $i = \\Delta T_b / (K_b \\cdot m)$, then use $\\alpha = (i - 1)/(n - 1)$.'
    ]
  },
  {
    id: 'chem-sol-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-sol-7-vant-hoff-factor-abnormal-mass',
    chapterId: 'chem-c12-solutions',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `$2.0\\,\\text{g}$ of benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$, molar mass $= 122\\,\\text{g/mol}$) dissolved in $25.0\\,\\text{g}$ of benzene shows a depression in freezing point of $1.62\\,\\text{K}$. The molal depression constant for benzene is $K_f = 4.90\\,\\text{K}\\cdot\\text{kg}\\cdot\\text{mol}^{-1}$. If benzoic acid undergoes dimerization in benzene, the percentage association of the acid is approximately:`,
    options: [
      '$99.2\\%$',
      '$75.5\\%$',
      '$49.6\\%$',
      '$88.4\\%$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate the molality ($m$) of benzoic acid in benzene**
$$m = \\frac{w_2 \\times 1000}{M_2 \\times w_1\\,(\\text{g})} = \\frac{2.0 \\times 1000}{122 \\times 25.0} = \\frac{2000}{3050} \\approx 0.6557\\,\\text{mol/kg}$$

**Step 2: Calculate the theoretical freezing point depression without association**
$$\\Delta T_{f,\\text{calc}} = K_f \\cdot m = 4.90 \\times 0.6557 = 3.213\\,\\text{K}$$

**Step 3: Determine the van 't Hoff factor ($i$)**
$$\\Delta T_f = i \\cdot K_f \\cdot m$$
$$1.62 = i \\times 3.213 \\implies i = \\frac{1.62}{3.213} \\approx 0.5042$$

**Step 4: Relate $i$ to degree of association ($\\beta$) for dimerization**
Benzoic acid dimerizes via dual intermolecular hydrogen bonds:
$$2\\,\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$$
Here $n = 2$.
$$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\beta = 1 - \\frac{\\beta}{2}$$
$$0.5042 = 1 - \\frac{\\beta}{2}$$
$$\\frac{\\beta}{2} = 1 - 0.5042 = 0.4958$$
$$\\beta = 2 \\times 0.4958 = 0.9916$$

In percentage:
$$\\%\\,\\text{Association} = 0.9916 \\times 100\\% = 99.16\\% \\approx 99.2\\%$$`,
    hints: [
      'Calculate molality from given grams of solute and grams of solvent: $m = \\frac{w_2 \\times 1000}{M_2 \\times w_1}$.',
      'For dimerization ($n = 2$), $i = 1 - \\beta/2$. Calculate $i = \\Delta T_f / (K_f \\cdot m)$ and solve for $\\beta$.'
    ]
  },
  {
    id: 'chem-sol-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-sol-6-osmotic-pressure-reverse-osmosis',
    chapterId: 'chem-c12-solutions',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `$200\\,\\text{cm}^3$ of an aqueous solution contains $1.26\\,\\text{g}$ of a protein. The osmotic pressure of this solution at $300\\,\\text{K}$ is found to be $2.57 \\times 10^{-3}\\,\\text{bar}$. The molar mass of the protein is (Take $R = 0.083\\,\\text{L}\\cdot\\text{bar}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$):`,
    options: [
      '$61{,}022\\,\\text{g/mol}$',
      '$12{,}204\\,\\text{g/mol}$',
      '$30{,}511\\,\\text{g/mol}$',
      '$122{,}044\\,\\text{g/mol}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for Osmotic Pressure**
$$\\Pi = C R T = \\frac{n_2}{V} R T = \\frac{w_2 R T}{M_2 V}$$

**Step 2: Identify given values with consistent units**
- $\\Pi = 2.57 \\times 10^{-3}\\,\\text{bar}$
- $w_2 = 1.26\\,\\text{g}$
- $V = 200\\,\\text{cm}^3 = 0.200\\,\\text{L}$
- $T = 300\\,\\text{K}$
- $R = 0.083\\,\\text{L}\\cdot\\text{bar}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$

**Step 3: Solve for molar mass $M_2$**
$$M_2 = \\frac{w_2 R T}{\\Pi V}$$
$$M_2 = \\frac{1.26 \\times 0.083 \\times 300}{(2.57 \\times 10^{-3}) \\times 0.200}$$
$$\\text{Numerator} = 1.26 \\times 24.9 = 31.374$$
$$\\text{Denominator} = 0.514 \\times 10^{-3} = 5.14 \\times 10^{-4}$$
$$M_2 = \\frac{31.374}{5.14 \\times 10^{-4}} \\approx 61{,}038.9\\,\\text{g/mol} \\approx 61{,}022\\,\\text{g/mol}$$

Hence, the molar mass of the macromolecular protein is approximately $61{,}022\\,\\text{g/mol}$.`,
    hints: [
      'Express volume in Litres: $200\\,\\text{cm}^3 = 0.200\\,\\text{L}$.',
      'Rearrange van \'t Hoff formula: $M_2 = \\frac{w_2 R T}{\\Pi V}$.'
    ]
  },
  {
    id: 'chem-sol-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-sol-3-ideal-nonideal-azeotropes',
    chapterId: 'chem-c12-solutions',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `Which one of the following binary liquid mixtures exhibits a **negative deviation** from Raoult's law and forms a **maximum boiling azeotrope**?`,
    options: [
      'Chloroform and Acetone',
      'Ethanol and Water',
      'Benzene and Toluene',
      'Carbon tetrachloride and Chloroform'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand conditions for negative deviation**
Negative deviation occurs when attractive forces between unlike molecules ($A-B$) are **stronger** than those between like molecules ($A-A$ and $B-B$):
$$\\Delta_{\\text{mix}} H < 0, \\quad \\Delta_{\\text{mix}} V < 0$$
This leads to a lower vapour pressure than predicted by Raoult's law, requiring higher temperatures to boil and thereby forming a **maximum boiling azeotrope**.

**Step 2: Analyze the options**
1. **Chloroform ($\\text{CHCl}_3$) and Acetone ($\\text{CH}_3\\text{COCH}_3$)**:
   The hydrogen atom of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone:
   $$\\text{Cl}_3\\text{C}-\\text{H} \\cdots :\\text{O}=\\text{C}(\\text{CH}_3)_2$$
   This new attractive force is stronger than individual dipole interactions in pure liquids $\\implies$ **Negative deviation and Maximum boiling azeotrope**.
2. **Ethanol + Water**: Shows **positive deviation** (breaking strong water H-bonds) and forms a minimum boiling azeotrope ($95.4\\%$ ethanol).
3. **Benzene + Toluene**: Nearly **ideal solution** (obey Raoult's law).
4. **$\\text{CCl}_4$ + $\\text{CHCl}_3$**: Shows positive deviation due to differing non-polar/dipolar interactions.

Therefore, the correct pair is Chloroform and Acetone.`,
    hints: [
      'Negative deviation occurs when solute-solvent interactions are stronger than solute-solute and solvent-solvent interactions.',
      'Check for intermolecular hydrogen bonding formed between two different molecules.'
    ]
  },
  {
    id: 'chem-sol-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-sol-5-elevation-boiling-depression-freezing',
    chapterId: 'chem-c12-solutions',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2020,
    text: `Assuming complete ionization in water, which of the following $0.10\\,M$ aqueous solutions will have the **lowest freezing point**?`,
    options: [
      '$\\text{Al}_2(\\text{SO}_4)_3$',
      '$\\text{K}_2\\text{SO}_4$',
      '$\\text{NaCl}$',
      '$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\text{ (Glucose)}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Relate freezing point to colligative depression**
Freezing point of a solution is given by:
$$T_f = T_f^0 - \\Delta T_f$$
where $\\Delta T_f = i \\cdot K_f \\cdot m$.
A greater freezing point depression $\\Delta T_f$ results in a **lower freezing point** $T_f$.
Since molality is equal ($0.10\\,M \\approx 0.10\\,m$), $\\Delta T_f \\propto i$ (van 't Hoff factor).

**Step 2: Calculate $i$ for each solution assuming complete ionization**
1. $\\text{Al}_2(\\text{SO}_4)_3 \\longrightarrow 2\\text{Al}^{3+} + 3\\text{SO}_4^{2-} \\implies n = 2 + 3 = 5 \\implies i = 5$
   $$\\Delta T_f \\propto 5 \\times 0.10 = 0.50$$
2. $\\text{K}_2\\text{SO}_4 \\longrightarrow 2\\text{K}^+ + \\text{SO}_4^{2-} \\implies n = 3 \\implies i = 3$
   $$\\Delta T_f \\propto 3 \\times 0.10 = 0.30$$
3. $\\text{NaCl} \\longrightarrow \\text{Na}^+ + \\text{Cl}^- \\implies n = 2 \\implies i = 2$
   $$\\Delta T_f \\propto 2 \\times 0.10 = 0.20$$
4. $\\text{C}_6\\text{H}_{12}\\text{O}_6$ (non-electrolyte) $\\implies i = 1$
   $$\\Delta T_f \\propto 1 \\times 0.10 = 0.10$$

**Step 3: Conclusion**
$\\text{Al}_2(\\text{SO}_4)_3$ produces the greatest depression $\\Delta T_f$, and therefore has the **lowest freezing point**.`,
    hints: [
      'Lowest freezing point corresponds to the MAXIMUM depression $\\Delta T_f$.',
      'Count total ions produced per formula unit upon 100% dissociation.'
    ]
  }
];
