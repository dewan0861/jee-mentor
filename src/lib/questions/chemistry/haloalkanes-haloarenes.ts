import { Question } from '@/types';

export const haloalkanesHaloarenesQuestions: Question[] = [
  {
    id: 'chem-rx-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-rx-2-sn1-sn2-mechanisms',
    chapterId: 'chem-c12-haloalkanes-haloarenes',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The correct increasing order of reactivity towards nucleophilic substitution by the **$\\text{S}_\\text{N}2$ mechanism** for the following alkyl bromides is:
(I) 1-Bromobutane
(II) 2-Bromobutane
(III) 2-Bromo-2-methylpropane (tert-Butyl bromide)
(IV) 1-Bromo-2,2-dimethylpropane (Neopentyl bromide)`,
    options: [
      '(III) < (IV) < (II) < (I)',
      '(III) < (II) < (IV) < (I)',
      '(IV) < (III) < (II) < (I)',
      '(I) < (II) < (IV) < (III)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the rate-determining factor in $\\text{S}_\\text{N}2$**
The $\\text{S}_\\text{N}2$ reaction proceeds via a concerted backside attack with a crowded, pentacoordinate trigonal bipyramidal transition state.
Therefore, the rate of $\\text{S}_\\text{N}2$ is governed strictly by **steric hindrance** at and adjacent to the reacting carbon:
$$\\text{Reactivity} \\propto \\frac{1}{\\text{Steric Hindrance}}$$

**Step 2: Analyze each substrate**
1. **(III) 2-Bromo-2-methylpropane** $[(\\text{CH}_3)_3\\text{C}-\\text{Br}]$:
   - Tertiary ($3^\\circ$) alkyl halide.
   - Three methyl groups surround the central carbon, completely blocking backside attack by the incoming nucleophile.
   - It is essentially **unreactive** towards $\\text{S}_\\text{N}2$ (undergoes $\\text{E}2$ or $\\text{S}_\\text{N}1$ instead).
   - Lowest $\\text{S}_\\text{N}2$ reactivity.

2. **(IV) 1-Bromo-2,2-dimethylpropane (Neopentyl bromide)** $[(\\text{CH}_3)_3\\text{C}-\\text{CH}_2-\\text{Br}]$:
   - Although it is technically a primary ($1^\\circ$) halide, the adjacent $\\beta$-carbon bears a massive tert-butyl group.
   - The three bulky methyl groups create an umbrella of steric shielding over the backside of the $-\\text{CH}_2-$ carbon, making its $\\text{S}_\\text{N}2$ rate $\\sim 10^5$ times slower than ethyl bromide!
   - Slightly more reactive than tert-butyl bromide, but much slower than secondary halides.

3. **(II) 2-Bromobutane** $[\\text{CH}_3-\\text{CH(Br)}-\\text{CH}_2\\text{CH}_3]$:
   - Secondary ($2^\\circ$) alkyl halide with moderate steric hindrance.

4. **(I) 1-Bromobutane** $[\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}]$:
   - Unbranched primary ($1^\\circ$) alkyl halide with minimal steric hindrance. Backside attack occurs rapidly.

**Step 3: Combine into the final sequence**
$$\\mathbf{(III) < (IV) < (II) < (I)}$$`,
    hints: [
      '$\\text{S}_\\text{N}2$ reactivity is controlled by steric hindrance.',
      'Neopentyl halide has severe $\\beta$-branching that shields the backside of the primary carbon.'
    ]
  },
  {
    id: 'chem-rx-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-rx-4-ambident-nucleophiles',
    chapterId: 'chem-c12-haloalkanes-haloarenes',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    text: `When bromoethane ($\\text{CH}_3\\text{CH}_2\\text{Br}$) is reacted separately with:
(A) ethanolic $\\text{KCN}$
(B) ethanolic $\\text{AgCN}$
the major organic products obtained in (A) and (B) are respectively:`,
    options: [
      '(A) Propanenitrile (Ethyl cyanide) and (B) Ethyl isocyanide',
      '(A) Ethyl isocyanide and (B) Propanenitrile (Ethyl cyanide)',
      'Both yield propanenitrile',
      'Both yield ethyl isocyanide'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Ambident character of the cyanide ion**
The cyanide ion ($[:\\text{C}\\equiv\\text{N}:]^-$) is an **ambident nucleophile** capable of donating an electron pair either through its carbon atom or through its nitrogen atom.

**Step 2: Reaction (A) with potassium cyanide ($\\text{KCN}$)**
- $\\text{KCN}$ is predominantly an **ionic compound**; in solution, it completely dissociates into $\\text{K}^+$ and free cyanide ions ($[:\\text{C}\\equiv\\text{N}:]^-$).
- Both carbon and nitrogen carry a lone pair.
- Because a carbon-carbon single bond ($\\text{C}-\\text{C}$, bond energy $\\approx 348\\,\\text{kJ/mol}$) is significantly stronger and thermodynamically more stable than a carbon-nitrogen bond ($\\text{C}-\\text{N}$, bond energy $\\approx 305\\,\\text{kJ/mol}$), attack occurs predominantly via the **carbon atom**.
- Major product: **Propanenitrile (Ethyl cyanide, $\\text{CH}_3\\text{CH}_2\\text{CN}$)**.

**Step 3: Reaction (B) with silver cyanide ($\\text{AgCN}$)**
- $\\text{AgCN}$ is predominantly a **covalent compound**; the silver-carbon bond ($\\text{Ag}-\\text{C}$) is covalent, so the carbon lone pair is unavailable for nucleophilic attack.
- Only the **nitrogen atom** possesses a free, unshared electron pair.
- Therefore, nucleophilic displacement occurs through the nitrogen atom:
  $$\\text{CH}_3\\text{CH}_2-\\text{Br} + :\\text{N}\\equiv\\text{C}-\\text{Ag} \\longrightarrow \\text{CH}_3\\text{CH}_2-\\overset{+}{\\text{N}}\\equiv\\text{C}^- \\; (\\mathbf{\\text{Ethyl isocyanide}}) + \\text{AgBr} \\downarrow$$

Thus, (A) gives propanenitrile and (B) gives ethyl isocyanide.`,
    hints: [
      '$\\text{KCN}$ is ionic and attacks through carbon to form strong $\\text{C}-\\text{C}$ bonds (nitriles).',
      '$\\text{AgCN}$ is covalent with $\\text{Ag}-\\text{C}$ bonding, so attack occurs through nitrogen (isocyanides).'
    ]
  },
  {
    id: 'chem-rx-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-rx-5-haloarenes-snar-benzyne',
    chapterId: 'chem-c12-haloalkanes-haloarenes',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `The correct decreasing order of reactivity towards nucleophilic aromatic substitution ($\\text{S}_\\text{N}\\text{Ar}$) with warm aqueous sodium hydroxide is:
(I) 2,4,6-Trinitrochlorobenzene (Picryl chloride)
(II) 2,4-Dinitrochlorobenzene
(III) 4-Nitrochlorobenzene
(IV) Chlorobenzene`,
    options: [
      '(I) > (II) > (III) > (IV)',
      '(IV) > (III) > (II) > (I)',
      '(I) > (III) > (II) > (IV)',
      '(II) > (I) > (III) > (IV)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Mechanism of $\\text{S}_\\text{N}\\text{Ar}$ (Addition-Elimination)**
The rate-determining step in nucleophilic aromatic substitution is the attack of the nucleophile on the halogen-bearing carbon, forming a resonance-stabilized carbanionic intermediate (**Meisenheimer complex**).
$$\\text{Rate of } \\text{S}_\\text{N}\\text{Ar} \\propto \\text{Stability of Meisenheimer carbanion}$$

**Step 2: Role of nitro groups ($-M$ and $-I$)**
The nitro group ($-\\text{NO}_2$) is an exceptionally strong electron-withdrawing group via both resonance ($-M$) and inductive ($-I$) effects.
- When located at positions **ortho or para** to the chlorine atom, the negative charge generated in the Meisenheimer intermediate is directly delocalized onto the electronegative oxygens of the nitro group.
- Each additional ortho or para nitro group provides an extra resonance contributor stabilizing the carbanion.

**Step 3: Compare reaction conditions**
1. **(I) 2,4,6-Trinitrochlorobenzene**: Three strong $-M$ nitro groups (two ortho, one para). It hydrolyzes instantaneously with **warm water alone at $323\\,\\text{K}$** without needing any $\\text{NaOH}$!
2. **(II) 2,4-Dinitrochlorobenzene**: Two $-M$ nitro groups (one ortho, one para). Hydrolyzes with aqueous $\\text{Na}_2\\text{CO}_3$ at $368\\,\\text{K}$.
3. **(III) 4-Nitrochlorobenzene**: One $-M$ nitro group at para position. Requires $15\\%\\,\\text{NaOH}$ at $443\\,\\text{K}$.
4. **(IV) Chlorobenzene**: No electron-withdrawing group. Requires extreme conditions: $623\\,\\text{K}$ and $300\\,\\text{atm}$ (Dow\'s process).

**Decreasing Order of Reactivity**:
$$\\mathbf{(I) > (II) > (III) > (IV)}$$`,
    hints: [
      'Rate of $\\text{S}_\\text{N}\\text{Ar}$ increases with the number of $-M$ groups at ortho and para positions.',
      'Picryl chloride (three nitro groups) hydrolyzes merely upon warming with water.'
    ]
  },
  {
    id: 'chem-rx-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-rx-3-elimination-e1-e2-saytzeff',
    chapterId: 'chem-c12-haloalkanes-haloarenes',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `When 2-bromo-2-methylbutane is reacted separately with:
(A) Sodium ethoxide ($\\text{NaOEt}$ in ethanol)
(B) Potassium tert-butoxide ($t\\text{-BuOK}$ in tert-butanol)
the major alkene products formed in (A) and (B) are respectively:`,
    options: [
      '(A) 2-Methylbut-2-ene (Saytzeff) and (B) 2-Methylbut-1-ene (Hofmann)',
      '(A) 2-Methylbut-1-ene (Hofmann) and (B) 2-Methylbut-2-ene (Saytzeff)',
      'Both reactions yield 2-methylbut-2-ene',
      'Both reactions yield 2-methylbut-1-ene'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify possible $\\beta$-hydrogens in 2-bromo-2-methylbutane**
Structure:
$$\\text{CH}_3-\\text{C(CH}_3)(\\text{Br})-\\text{CH}_2-\\text{CH}_3$$
- $\\beta_1$-hydrogens: On the C-1 methyl groups (six equivalent hydrogens, less sterically hindered, primary).
- $\\beta_2$-hydrogens: On the C-3 methylene group (two hydrogens, more sterically hindered, secondary).

**Step 2: Reaction (A) with small, unhindered base ($\\text{EtO}^-$)**
- Sodium ethoxide is a relatively compact base with small steric bulk.
- It preferentially abstracts the $\\beta$-hydrogen that leads to the thermodynamically most stable, most substituted alkene (**Saytzeff rule**).
- Abstracting from C-3 produces a trisubstituted alkene with 9 $\\alpha$-hydrogens:
  $$\\mathbf{(A) = (\\text{CH}_3)_2\\text{C}=\\text{CH}-\\text{CH}_3 \\; (\\text{2-Methylbut-2-ene, Saytzeff product, } \\approx 70\\% yield)}$$

**Step 3: Reaction (B) with sterically bulky base ($t\\text{-BuO}^-$)**
- Potassium tert-butoxide is an extremely bulky base $[(\\text{CH}_3)_3\\text{C}-\\text{O}^-]$.
- Steric repulsion between the bulky tert-butyl group and the alkyl substrate prevents the base from reaching the crowded internal secondary $\\beta_2$-hydrogen at C-3.
- It selectively and rapidly abstracts the easily accessible, sterically unhindered primary $\\beta_1$-hydrogen from the C-1 methyl group (**Hofmann rule**).
- This produces the less substituted terminal alkene:
  $$\\mathbf{(B) = \\text{CH}_2=\\text{C}(\\text{CH}_3)-\\text{CH}_2\\text{CH}_3 \\; (\\text{2-Methylbut-1-ene, Hofmann product, } \\approx 75\\% yield)}$$

Thus, (A) gives 2-methylbut-2-ene and (B) gives 2-methylbut-1-ene.`,
    hints: [
      'Small unhindered bases (like ethoxide) favor the more substituted Saytzeff alkene.',
      'Bulky hindered bases (like tert-butoxide) abstract the more accessible proton to yield the less substituted Hofmann alkene.'
    ]
  },
  {
    id: 'chem-rx-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-rx-2-sn1-sn2-mechanisms',
    chapterId: 'chem-c12-haloalkanes-haloarenes',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `An optically active sample of $(R)$-2-bromobutane is treated with sodium hydroxide ($\\text{NaOH}$) in polar aprotic solvent dimethylformamide ($\\text{DMF}$). The resulting butan-2-ol product exhibits:`,
    options: [
      'Complete inversion of configuration yielding pure $(S)$-butan-2-ol',
      'Complete retention of configuration yielding pure $(R)$-butan-2-ol',
      'Complete racemization yielding a $1:1$ equimolar mixture of $(R)$ and $(S)$ enantiomers',
      'Elimination exclusively yielding but-2-ene'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify reaction conditions and mechanism**
- Substrate: $(R)$-2-bromobutane (secondary alkyl halide).
- Nucleophile: $\\text{OH}^-$ (strong nucleophile).
- Solvent: $\\text{DMF}$ (dimethylformamide, a classic **polar aprotic solvent**).

Polar aprotic solvents solvate the $\\text{Na}^+$ cation efficiently by dipole interactions with oxygen, leaving the hydroxide anion $\\text{OH}^-$ poorly solvated ("naked") and exceptionally nucleophilic.
Under these bimolecular conditions, the reaction proceeds strictly via the **$\\text{S}_\\text{N}2$ mechanism**.

**Step 2: Stereochemical consequence of $\\text{S}_\\text{N}2$**
- The $\\text{S}_\\text{N}2$ mechanism occurs through a **concerted backside attack** ($180^\\circ$ opposite to the departing bromide leaving group).
- As the $\\text{C}-\\text{O}$ bond forms and the $\\text{C}-\\text{Br}$ bond breaks, the three non-reacting groups undergo an umbrella-like inversion (**Walden Inversion**).
- Since backside attack is stereospecific:
  $$(R)\\text{-2-Bromobutane} \\xrightarrow{\\text{S}_\\text{N}2} \\mathbf{(S)\\text{-Butan-2-ol}}$$
Because the reaction is purely $\\text{S}_\\text{N}2$, the product possesses **$100\\%$ inversion of configuration** with no racemization.`,
    hints: [
      'Polar aprotic solvent (DMF) with strong nucleophile drives pure $\\text{S}_\\text{N}2$.',
      '$\\text{S}_\\text{N}2$ backside attack produces complete Walden inversion of configuration.'
    ]
  },
  {
    id: 'chem-rx-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-rx-6-organometallics-couplings',
    chapterId: 'chem-c12-haloalkanes-haloarenes',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2020,
    text: `When methylmagnesium bromide ($\\text{CH}_3\\text{MgBr}$) is treated with heavy water ($\\text{D}_2\\text{O}$), which gas is liberated?`,
    options: [
      '$\\text{CH}_3\\text{D} \\text{ (Deuteromethane)}$',
      '$\\text{CH}_4 \\text{ (Methane)}$',
      '$\\text{CD}_4 \\text{ (Tetradeuteromethane)}$',
      '$\\text{C}_2\\text{H}_6 \\text{ (Ethane)}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the nature of Grignard Reagents**
The carbon-magnesium bond in Grignard reagents has strong carbanionic character:
$$\\overset{\\delta-}{\\text{CH}_3}-\\overset{\\delta+}{\\text{Mg}}\\text{Br}$$
The methyl carbanion ($\\text{CH}_3^-$) is the conjugate base of methane ($pK_a \\approx 50$), making it one of the **strongest Brønsted bases** in organic chemistry.

**Step 2: Proton / Deuteron abstraction from active hydrogen**
When exposed to heavy water ($\\text{D}_2\\text{O} \\equiv \\text{D}^+\\text{OD}^-$), the carbanion immediately abstracts a deuteron:
$$\\text{CH}_3-\\text{MgBr} + \\text{D}-\\text{OD} \\longrightarrow \\mathbf{\\text{CH}_3\\text{D}} \\uparrow + \\text{Mg(OD)Br}$$
The liberated gas is **Deuteromethane ($\\text{CH}_3\\text{D}$)**.`,
    hints: [
      'Grignard reagents act as powerful bases, abstracting deuterium from $\\text{D}_2\\text{O}$.',
      '$\\text{CH}_3^-$ picks up a single $\\text{D}^+$ to form $\\text{CH}_3\\text{D}$.'
    ]
  }
];
