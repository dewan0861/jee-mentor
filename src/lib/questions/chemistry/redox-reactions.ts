import { Question } from '@/types';

export const redoxReactionsQuestions: Question[] = [
  {
    id: 'chem-redox-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-redox-5-equivalent-concept-n-factor',
    chapterId: 'chem-c11-redox-reactions',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `How many moles of potassium permanganate ($\\text{KMnO}_4$) are strictly required to completely oxidize $1.0\\,\\text{mole}$ of ferrous oxalate ($\\text{FeC}_2\\text{O}_4$) in an acidic medium?`,
    options: [
      '$0.60\\,\\text{moles}$',
      '$0.40\\,\\text{moles}$',
      '$1.00\\,\\text{mole}$',
      '$0.20\\,\\text{moles}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Determine the n-factor of ferrous oxalate ($\\text{FeC}_2\\text{O}_4$)**
In $\\text{FeC}_2\\text{O}_4$, BOTH the cation and the anion undergo oxidation:
1. Iron(II) oxidizes to Iron(III):
   $$\\text{Fe}^{2+} \\longrightarrow \\text{Fe}^{3+} + 1e^- \\quad (\\Delta \\text{O.S.} = 1)$$
2. Oxalate ion oxidizes to Carbon Dioxide:
   $$\\text{C}_2\\text{O}_4^{2-} \\longrightarrow 2\\text{CO}_2 + 2e^- \\quad (\\Delta \\text{O.S.} = 2 \\times (+4 - +3) = 2)$$

Total moles of electrons lost per mole of $\\text{FeC}_2\\text{O}_4$:
$$n_f(\\text{FeC}_2\\text{O}_4) = 1 + 2 = 3$$

**Step 2: Determine the n-factor of $\\text{KMnO}_4$ in acidic medium**
In acidic solution, permanganate ion is reduced to $\\text{Mn}^{2+}$:
$$\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$$
Change in oxidation state of Mn: $+7 \\longrightarrow +2$:
$$n_f(\\text{KMnO}_4) = 5$$

**Step 3: Apply the Law of Chemical Equivalence**
$$\\text{Equivalents of } \\text{KMnO}_4 = \\text{Equivalents of } \\text{FeC}_2\\text{O}_4$$
$$(\\text{Moles of } \\text{KMnO}_4) \\times n_f(\\text{KMnO}_4) = (\\text{Moles of } \\text{FeC}_2\\text{O}_4) \\times n_f(\\text{FeC}_2\\text{O}_4)$$
$$n_{\\text{KMnO}_4} \\times 5 = 1.0 \\times 3$$
$$n_{\\text{KMnO}_4} = \\frac{3}{5} = 0.60\\,\\text{moles}$$`,
    hints: [
      'Both $\\text{Fe}^{2+}$ and $\\text{C}_2\\text{O}_4^{2-}$ are oxidized, losing a total of 3 electrons per mole of $\\text{FeC}_2\\text{O}_4$.',
      '$\\text{MnO}_4^-$ gains 5 electrons in acidic medium. Equate total equivalents.'
    ]
  },
  {
    id: 'chem-redox-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-redox-2-oxidation-number-peroxy-linkage',
    chapterId: 'chem-c11-redox-reactions',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The oxidation states of Chromium in chromium pentoxide ($\\text{CrO}_5$, butterfly structure) and Sulfur in peroxomonosulfuric acid ($\\text{H}_2\\text{SO}_5$, Caro's acid) are respectively:`,
    options: [
      '$+6 \\text{ and } +6$',
      '$+10 \\text{ and } +8$',
      '$+6 \\text{ and } +8$',
      '$+5 \\text{ and } +6$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Structural analysis of $\\text{CrO}_5$**
In $\\text{CrO}_5$, chromium is bonded to one oxo-oxygen ($=\\text{O}$) and four peroxy-oxygens forming two peroxide rings (butterfly shape):
$$\\text{O}=\\text{Cr}\\left(\\text{O}_2\\right)_2$$
- Oxo-oxygen ($=\\text{O}$) has oxidation state $-2$.
- Four peroxide oxygens ($-\\text{O}-\\text{O}-$) have oxidation state $-1$ each.
Let oxidation state of Cr be $x$:
$$x + 1(-2) + 4(-1) = 0 \\implies x - 6 = 0 \\implies x = +6$$
*(Note: An apparent formula calculation yields $x - 10 = 0 \\implies +10$, which is chemically impossible as Cr only has 6 valence electrons).*

**Step 2: Structural analysis of $\\text{H}_2\\text{SO}_5$ (Caro's acid)**
The structure of Caro's acid is $\\text{H}-\\text{O}-\\text{SO}_2-\\text{O}-\\text{O}-\\text{H}$:
- Three normal oxide oxygens have oxidation state $-2$ each (total $-6$).
- Two peroxide oxygens ($-\\text{O}-\\text{O}-$) have oxidation state $-1$ each (total $-2$).
- Two hydrogens have oxidation state $+1$ each (total $+2$).
Let oxidation state of Sulfur be $y$:
$$2(+1) + y + 3(-2) + 2(-1) = 0$$
$$+2 + y - 6 - 2 = 0 \\implies y - 6 = 0 \\implies y = +6$$

Therefore, both Chromium and Sulfur have oxidation state $+6$.`,
    hints: [
      'Account for the peroxy linkage ($-\\text{O}-\\text{O}-$) where each oxygen has an oxidation state of $-1$.',
      'The maximum oxidation state of an element cannot exceed its group valence number (Cr = +6, S = +6).'
    ]
  },
  {
    id: 'chem-redox-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-redox-4-balancing-ion-electron',
    chapterId: 'chem-c11-redox-reactions',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `Consider the following balanced redox equation in acidic aqueous medium:
$$x\\,\\text{MnO}_4^- + y\\,\\text{C}_2\\text{O}_4^{2-} + z\\,\\text{H}^+ \\longrightarrow a\\,\\text{Mn}^{2+} + b\\,\\text{CO}_2 + c\\,\\text{H}_2\\text{O}$$
The stoichiometric coefficients $x$, $y$, and $z$ are respectively:`,
    options: [
      '$x = 2, \\; y = 5, \\; z = 16$',
      '$x = 1, \\; y = 2, \\; z = 8$',
      '$x = 5, \\; y = 2, \\; z = 16$',
      '$x = 2, \\; y = 5, \\; z = 8$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Balance reduction half-reaction**
$$\\text{MnO}_4^- \\longrightarrow \\text{Mn}^{2+}$$
- Balance O with $\\text{H}_2\\text{O}$: $\\text{MnO}_4^- \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$
- Balance H with $\\text{H}^+$: $\\text{MnO}_4^- + 8\\text{H}^+ \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$
- Balance charge with electrons:
  $$\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O} \\quad \\text{--- (1)}$$

**Step 2: Balance oxidation half-reaction**
$$\\text{C}_2\\text{O}_4^{2-} \\longrightarrow 2\\text{CO}_2$$
- Balance charge with electrons:
  $$\\text{C}_2\\text{O}_4^{2-} \\longrightarrow 2\\text{CO}_2 + 2e^- \\quad \\text{--- (2)}$$

**Step 3: Equalize electron transfer**
Multiply equation (1) by 2 and equation (2) by 5:
$$2\\text{MnO}_4^- + 16\\text{H}^+ + 10e^- \\longrightarrow 2\\text{Mn}^{2+} + 8\\text{H}_2\\text{O}$$
$$5\\text{C}_2\\text{O}_4^{2-} \\longrightarrow 10\\text{CO}_2 + 10e^-$$

**Step 4: Sum the balanced equations**
$$2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\longrightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$$

Comparing with coefficients: $x = 2, \\; y = 5, \\; z = 16$.`,
    hints: [
      'Write separate half-reactions and balance charge using electrons ($5e^-$ for $\\text{MnO}_4^-$, $2e^-$ for $\\text{C}_2\\text{O}_4^{2-}$).',
      'LCM of electrons is 10, so multiply permanganate by 2 and oxalate by 5.'
    ]
  },
  {
    id: 'chem-redox-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-redox-3-types-disproportionation',
    chapterId: 'chem-c11-redox-reactions',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `Which one of the following chemical reactions represents a true **disproportionation** reaction?`,
    options: [
      '$\\text{P}_4 + 3\\text{OH}^- + 3\\text{H}_2\\text{O} \\longrightarrow \\text{PH}_3 + 3\\text{H}_2\\text{PO}_2^-$',
      '$2\\text{KClO}_3 \\longrightarrow 2\\text{KCl} + 3\\text{O}_2$',
      '$\\text{Zn} + 2\\text{HCl} \\longrightarrow \\text{ZnCl}_2 + \\text{H}_2$',
      '$\\text{CH}_4 + 2\\text{O}_2 \\longrightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Definition of Disproportionation Reaction**
A disproportionation reaction is a special redox reaction in which atoms of the **same element** present in an intermediate oxidation state simultaneously undergo **both oxidation and reduction**, forming two different products.

**Step 2: Analyze each reaction**
1. **$\\text{P}_4 + 3\\text{OH}^- + 3\\text{H}_2\\text{O} \\longrightarrow \\text{PH}_3 + 3\\text{H}_2\\text{PO}_2^-$**:
   - Elemental phosphorus $\\text{P}_4$ has an oxidation state of $0$.
   - In phosphine ($\\text{PH}_3$), phosphorus has an oxidation state of $-3$ (reduction: $0 \\rightarrow -3$).
   - In hypophosphite ion ($\\text{H}_2\\text{PO}_2^-$), phosphorus has an oxidation state of $+1$ (oxidation: $0 \\rightarrow +1$).
   - Since the SAME element P is both oxidized and reduced $\\implies$ **True disproportionation reaction**.

2. **$2\\text{KClO}_3 \\longrightarrow 2\\text{KCl} + 3\\text{O}_2$**:
   - $\\text{Cl}$ is reduced ($+5 \\rightarrow -1$), while $\\text{O}$ is oxidized ($-2 \\rightarrow 0$). This is an intramolecular redox reaction, NOT disproportionation.
3. **$\\text{Zn} + 2\\text{HCl} \\longrightarrow \\text{ZnCl}_2 + \\text{H}_2$**:
   - Intermolecular displacement redox reaction.
4. **$\\text{CH}_4 + 2\\text{O}_2 \\longrightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$**:
   - Combustion redox reaction.`,
    hints: [
      'In a disproportionation reaction, the same element must undergo an increase and a decrease in oxidation state simultaneously.',
      'Check the oxidation state of Phosphorus in $\\text{P}_4$, $\\text{PH}_3$, and $\\text{H}_2\\text{PO}_2^-$.'
    ]
  },
  {
    id: 'chem-redox-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-redox-6-redox-titrations',
    chapterId: 'chem-c11-redox-reactions',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `A commercial aqueous solution of hydrogen peroxide ($\\text{H}_2\\text{O}_2$) is labeled as **"28 Volume"**. The molarity ($M$) and normality ($N$) of this solution are respectively:`,
    options: [
      '$M = 2.50\\,\\text{mol/L}, \\; N = 5.00\\,\\text{eq/L}$',
      '$M = 5.00\\,\\text{mol/L}, \\; N = 2.50\\,\\text{eq/L}$',
      '$M = 2.80\\,\\text{mol/L}, \\; N = 5.60\\,\\text{eq/L}$',
      '$M = 1.25\\,\\text{mol/L}, \\; N = 2.50\\,\\text{eq/L}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the definition of Volume Strength of $\\text{H}_2\\text{O}_2$**
"28 Volume $\\text{H}_2\\text{O}_2$" means that $1\\,\\text{L}$ of this $\\text{H}_2\\text{O}_2$ solution decomposes at STP to liberate $28\\,\\text{L}$ of oxygen gas ($\\text{O}_2$).

**Step 2: Relate decomposition stoichiometry to Molarity**
$$2\\,\\text{H}_2\\text{O}_2(aq) \\longrightarrow 2\\,\\text{H}_2\\text{O}(l) + \\text{O}_2(g)$$
$2\\,\\text{moles}$ of $\\text{H}_2\\text{O}_2$ produce $1\\,\\text{mole of } \\text{O}_2$ ($22.4\\,\\text{L}$ at STP).
$$\\text{Volume Strength} = 11.2 \\times M$$
$$28 = 11.2 \\times M \\implies M = \\frac{28}{11.2} = 2.50\\,\\text{mol/L}$$

**Step 3: Calculate Normality ($N$)**
For $\\text{H}_2\\text{O}_2$, the redox change is:
$$\\text{H}_2\\text{O}_2 \\longrightarrow \\text{O}_2 + 2\\text{H}^+ + 2e^-$$
Each mole of $\\text{H}_2\\text{O}_2$ exchanges 2 electrons $\\implies n_f = 2$.
$$N = n_f \\times M = 2 \\times 2.50 = 5.00\\,\\text{eq/L}$$
Alternatively:
$$\\text{Volume Strength} = 5.6 \\times N \\implies N = \\frac{28}{5.6} = 5.00\\,\\text{N}$$`,
    hints: [
      '$\\text{Volume Strength} = 11.2 \\times M = 5.6 \\times N$.',
      'Divide 28 by 11.2 for molarity and by 5.6 for normality.'
    ]
  },
  {
    id: 'chem-redox-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-redox-5-equivalent-concept-n-factor',
    chapterId: 'chem-c11-redox-reactions',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `For the disproportionation reaction of elemental bromine in hot concentrated aqueous alkali:
$$3\\,\\text{Br}_2 + 6\\,\\text{OH}^- \\longrightarrow 5\\,\\text{Br}^- + \\text{BrO}_3^- + 3\\,\\text{H}_2\\text{O}$$
What is the equivalent weight of bromine ($\\text{Br}_2$, molar mass $= M$) in this reaction?`,
    options: [
      '$\\frac{3}{5} M$',
      '$\\frac{5}{3} M$',
      '$\\frac{1}{2} M$',
      '$\\frac{5}{6} M$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Analyze oxidation and reduction changes per mole of $\\text{Br}_2$**
In the balanced reaction:
$$3\\,\\text{Br}_2 + 6\\,\\text{OH}^- \\longrightarrow 5\\,\\text{Br}^- + \\text{BrO}_3^- + 3\\,\\text{H}_2\\text{O}$$
- $3\\,\\text{moles of } \\text{Br}_2$ contain $6\\,\\text{moles of Br atoms}$ (oxidation state $0$).
- $5\\,\\text{Br atoms}$ are reduced from $0$ to $-1$ ($5 \\times 1 = 5\\,\\text{moles of electrons gained}$).
- $1\\,\\text{Br atom}$ is oxidized from $0$ to $+5$ ($1 \\times 5 = 5\\,\\text{moles of electrons lost}$).
Therefore, for every $3\\,\\text{moles of } \\text{Br}_2$ reacted, exactly $5\\,\\text{moles of electrons}$ are exchanged.

**Step 2: Calculate n-factor of $\\text{Br}_2$**
The n-factor is the number of moles of electrons transferred **per mole** of the reactant:
$$n_f(\\text{Br}_2) = \\frac{\\text{Total electrons transferred}}{\\text{Moles of } \\text{Br}_2} = \\frac{5}{3}$$

**Step 3: Determine Equivalent Weight**
$$\\text{Equivalent Weight } E = \\frac{\\text{Molar Mass } M}{n_f} = \\frac{M}{5/3} = \\frac{3}{5} M$$`,
    hints: [
      'Find the total number of electrons exchanged for 3 moles of $\\text{Br}_2$ (which is 5 electrons).',
      'The n-factor per mole of $\\text{Br}_2$ is $5/3$, so equivalent weight is $M / (5/3) = 3M/5$.'
    ]
  }
];
