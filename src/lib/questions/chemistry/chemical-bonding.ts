import { Question } from '@/types';

export const chemicalBondingQuestions: Question[] = [
  {
    id: 'chem-bond-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-bond-6-mot-homonuclear-diatomics',
    chapterId: 'chem-c11-chemical-bonding',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `According to Molecular Orbital Theory (MOT), which one of the following species in the dioxygen family is **diamagnetic** and what is its bond order?
Species: $\\text{O}_2^+, \\; \\text{O}_2, \\; \\text{O}_2^-, \\; \\text{O}_2^{2-}$`,
    options: [
      '$\\text{O}_2^{2-}$ is diamagnetic with $\\text{Bond Order} = 1.0$',
      '$\\text{O}_2$ is diamagnetic with $\\text{Bond Order} = 2.0$',
      '$\\text{O}_2^-$ is diamagnetic with $\\text{Bond Order} = 1.5$',
      '$\\text{O}_2^+$ is diamagnetic with $\\text{Bond Order} = 2.5$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write MO electronic configuration for $\\text{O}_2$ ($16\\,e^-$)**
$$\\sigma 1s^2 \\; \\sigma^* 1s^2 \\; \\sigma 2s^2 \\; \\sigma^* 2s^2 \\; \\sigma 2p_z^2 \\; (\\pi 2p_x^2 = \\pi 2p_y^2) \\; (\\pi^* 2p_x^1 = \\pi^* 2p_y^1)$$
- Bonding electrons ($N_b$): $2 + 2 + 2 + 4 = 10$
- Antibonding electrons ($N_a$): $2 + 2 + 2 = 6$
- $\\text{Bond Order} = \\frac{10 - 6}{2} = 2.0$.
- Two unpaired electrons in $\\pi^* 2p_x$ and $\\pi^* 2p_y \\implies$ **Paramagnetic**.

**Step 2: Evaluate the related oxygen ions**
1. **$\\text{O}_2^+$ ($15\\,e^-$)**:
   - Removes one electron from $\\pi^* 2p$: $N_b = 10, N_a = 5$.
   - $\\text{Bond Order} = \\frac{10 - 5}{2} = 2.5$.
   - Has 1 unpaired electron $\\implies$ **Paramagnetic**.

2. **$\\text{O}_2^-$ ($17\\,e^-$ Superoxide)**:
   - Adds one electron to $\\pi^* 2p$: $N_b = 10, N_a = 7$.
   - $\\text{Bond Order} = \\frac{10 - 7}{2} = 1.5$.
   - Has 1 unpaired electron $\\implies$ **Paramagnetic**.

3. **$\\text{O}_2^{2-}$ ($18\\,e^-$ Peroxide)**:
   - Adds two electrons to fill $\\pi^* 2p_x^2$ and $\\pi^* 2p_y^2$: $N_b = 10, N_a = 8$.
   - $\\text{Bond Order} = \\frac{10 - 8}{2} = 1.0$.
   - **All electrons are completely paired** $\\implies$ **DIAMAGNETIC**.`,
    hints: [
      'Write the number of electrons: $\\text{O}_2^+ = 15, \\text{O}_2 = 16, \\text{O}_2^- = 17, \\text{O}_2^{2-} = 18$.',
      'At 18 electrons (peroxide $\\text{O}_2^{2-}$), all degenerate antibonding orbitals are fully filled with no unpaired electrons.'
    ]
  },
  {
    id: 'chem-bond-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-bond-3-vsepr-molecular-geometry',
    chapterId: 'chem-c11-chemical-bonding',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The number of lone pairs of electrons residing on the central atom in $\\text{SF}_4$, $\\text{XeF}_4$, $\\text{ClF}_3$, and $\\text{I}_3^-$ are respectively:`,
    options: [
      '$1, \\; 2, \\; 2, \\; 3$',
      '$2, \\; 2, \\; 1, \\; 3$',
      '$1, \\; 1, \\; 2, \\; 2$',
      '$0, \\; 2, \\; 2, \\; 1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate Steric Number (SN) and Lone Pairs (LP) for each species**
Formula: $\\text{SN} = \\frac{1}{2} [V + M - C + A]$, \\quad $\\text{LP} = \\text{SN} - \\text{Bond Pairs (BP)}$

1. **$\\text{SF}_4$**:
   - Central atom: $\\text{S}$ ($V = 6$, $M = 4$, $C = 0$, $A = 0$).
   - $\\text{SN} = \\frac{6 + 4}{2} = 5$ ($sp^3d$).
   - $\\text{BP} = 4 \\implies \\text{LP} = 5 - 4 = \\mathbf{1}$ (Seesaw geometry).

2. **$\\text{XeF}_4$**:
   - Central atom: $\\text{Xe}$ ($V = 8$, $M = 4$, $C = 0$, $A = 0$).
   - $\\text{SN} = \\frac{8 + 4}{2} = 6$ ($sp^3d^2$).
   - $\\text{BP} = 4 \\implies \\text{LP} = 6 - 4 = \\mathbf{2}$ (Square planar geometry).

3. **$\\text{ClF}_3$**:
   - Central atom: $\\text{Cl}$ ($V = 7$, $M = 3$, $C = 0$, $A = 0$).
   - $\\text{SN} = \\frac{7 + 3}{2} = 5$ ($sp^3d$).
   - $\\text{BP} = 3 \\implies \\text{LP} = 5 - 3 = \\mathbf{2}$ (T-shaped geometry).

4. **$\\text{I}_3^-$ (Triiodide ion, $[\\text{I}-\\text{I}_2]^-$)**:
   - Central atom: $\\text{I}$ ($V = 7$, monovalent surrounding I atoms $M = 2$, anion $A = 1$).
   - $\\text{SN} = \\frac{7 + 2 + 1}{2} = 5$ ($sp^3d$).
   - $\\text{BP} = 2 \\implies \\text{LP} = 5 - 2 = \\mathbf{3}$ (Linear geometry with 3 equatorial lone pairs).

Therefore, the number of lone pairs on the central atoms are $1, 2, 2, 3$.`,
    hints: [
      'Use $\\text{Steric Number} = \\frac{1}{2}(V + M - C + A)$.',
      'Subtract the number of surrounding bonded atoms to find the number of lone pairs.'
    ]
  },
  {
    id: 'chem-bond-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-bond-5-dipole-moment-polarity',
    chapterId: 'chem-c11-chemical-bonding',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `Why is the dipole moment of ammonia ($\\text{NH}_3$, $\\mu = 1.47\\,\\text{D}$) significantly greater than that of nitrogen trifluoride ($\\text{NF}_3$, $\\mu = 0.24\\,\\text{D}$), despite Fluorine being much more electronegative than Hydrogen?`,
    options: [
      'In $\\text{NH}_3$, the nitrogen lone pair dipole reinforces the $\\text{N}-\\text{H}$ bond dipoles, while in $\\text{NF}_3$, the $\\text{N}-\\text{F}$ bond dipoles oppose the lone pair dipole.',
      '$\\text{NH}_3$ is trigonal pyramidal while $\\text{NF}_3$ is planar.',
      '$\\text{N}-\\text{H}$ bond is much longer than the $\\text{N}-\\text{F}$ bond.',
      'Nitrogen in $\\text{NF}_3$ undergoes $sp^2$ hybridization instead of $sp^3$.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Analyze geometries and hybridization**
Both $\\text{NH}_3$ and $\\text{NF}_3$ have identical $sp^3$ hybridization with 3 bond pairs and 1 lone pair, resulting in trigonal pyramidal geometries.

**Step 2: Vector analysis of dipole moments**
1. **In $\\text{NH}_3$**:
   - Nitrogen ($EN = 3.0$) is more electronegative than Hydrogen ($EN = 2.1$).
   - The three $\\text{N}-\\text{H}$ bond dipoles point UPWARD towards the nitrogen atom.
   - The orbital dipole due to the lone pair of electrons also points UPWARD away from the nitrogen nucleus.
   - Hence, the bond dipoles and the lone pair dipole act in the **SAME direction**, reinforcing each other to produce a large resultant dipole moment ($\\mu = 1.47\\,\\text{D}$).

2. **In $\\text{NF}_3$**:
   - Fluorine ($EN = 4.0$) is much more electronegative than Nitrogen ($EN = 3.0$).
   - The three $\\text{N}-\\text{F}$ bond dipoles point DOWNWARD towards the fluorine atoms.
   - The lone pair dipole points UPWARD away from nitrogen.
   - Hence, the three $\\text{N}-\\text{F}$ bond dipoles **OPPOSE** the lone pair dipole, nearly cancelling it out and resulting in a very small net dipole moment ($\\mu = 0.24\\,\\text{D}$).`,
    hints: [
      'Draw the vector arrows from electropositive to electronegative atom.',
      'Check whether the bond dipoles add to or subtract from the lone pair orbital dipole.'
    ]
  },
  {
    id: 'chem-bond-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-bond-4-vbt-hybridization-bents-rule',
    chapterId: 'chem-c11-chemical-bonding',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    text: `According to Bent's Rule and VSEPR theory, in the molecule phosphorus trichloride difluoride ($\\text{PCl}_3\\text{F}_2$, trigonal bipyramidal), the two fluorine atoms strictly occupy which positions?`,
    options: [
      'Both occupy axial positions',
      'Both occupy equatorial positions',
      'One occupies an axial position and one occupies an equatorial position',
      'Positioning is completely random due to Berry pseudorotation'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Hybridization of central Phosphorus atom in $\\text{PCl}_3\\text{F}_2$**
- Valence electrons of $\\text{P} = 5$.
- Surrounding monovalent atoms: $3\\,\\text{Cl} + 2\\,\\text{F} = 5$.
- $\\text{Steric Number} = \\frac{5 + 5}{2} = 5 \\implies sp^3d$ hybridization (Trigonal Bipyramidal geometry).

**Step 2: Understand hybrid orbital character in Trigonal Bipyramidal geometry**
An $sp^3d$ hybrid set splits into two non-equivalent sets of orbitals:
1. **Equatorial hybrid orbitals ($sp^2$)**: Lie in a plane at $120^\\circ$ angles, possessing **$33.3\\%$ s-character** and higher electron density near the nucleus.
2. **Axial hybrid orbitals ($pd$ or $p_z d_{z^2}$)**: Formed along the z-axis at $180^\\circ$ to each other, possessing **$0\\%$ s-character** ($100\\%$ p/d-character).

**Step 3: Apply Bent's Rule**
Bent's Rule states: *"More electronegative substituents prefer hybrid orbitals having LESS s-character (greater p-character), while less electronegative substituents, lone pairs, and multiple bonds prefer hybrid orbitals having MORE s-character."*
- Fluorine is significantly more electronegative ($EN = 4.0$) than Chlorine ($EN = 3.0$).
- Therefore, both Fluorine atoms exclusively occupy the **axial positions** (which have zero s-character).
- The three Chlorine atoms occupy the **equatorial positions**.
This orientation also minimizes repulsive interactions, giving a non-polar symmetrical structure ($\\mu = 0$).`,
    hints: [
      'Bent\'s rule: More electronegative atoms prefer orbitals with less s-character.',
      'Axial orbitals in trigonal bipyramidal geometry ($p_z d_{z^2}$) have zero s-character.'
    ]
  },
  {
    id: 'chem-bond-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-bond-2-ionic-fajans-rules',
    chapterId: 'chem-c11-chemical-bonding',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `According to Fajan's rules, the correct order of **increasing covalent character** among the metal chlorides $\\text{KCl}, \\; \\text{NaCl}, \\; \\text{LiCl}, \\; \\text{BeCl}_2$ is:`,
    options: [
      '$\\text{KCl} < \\text{NaCl} < \\text{LiCl} < \\text{BeCl}_2$',
      '$\\text{BeCl}_2 < \\text{LiCl} < \\text{NaCl} < \\text{KCl}$',
      '$\\text{NaCl} < \\text{KCl} < \\text{LiCl} < \\text{BeCl}_2$',
      '$\\text{LiCl} < \\text{NaCl} < \\text{KCl} < \\text{BeCl}_2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Recall Fajan's Rules for covalent character in ionic compounds**
Covalent character increases with:
1. **Smaller cation size** (higher charge density pulls anion electron cloud more strongly).
2. **Higher positive charge on the cation**.
3. **Larger anion size**.
4. **Pseudo-noble gas configuration** ($18\\,e^-$ core).

**Step 2: Compare charges on cations**
- $\\text{K}^+, \\text{Na}^+, \\text{Li}^+$ have $+1$ charge.
- $\\text{Be}^{2+}$ has $+2$ charge and an extremely small ionic radius ($31\\,\\text{pm}$).
Due to high charge and tiny size, $\\text{Be}^{2+}$ has an enormous polarizing power, making $\\text{BeCl}_2$ predominantly **covalent** (melting point only $405^\\circ\\text{C}$).

**Step 3: Compare alkali metal cations ($+1$) by size**
Down Group 1, cationic radius increases:
$$\\text{Li}^+ (76\\,\\text{pm}) < \\text{Na}^+ (102\\,\\text{pm}) < \\text{K}^+ (138\\,\\text{pm})$$
Polarizing power: $\\text{Li}^+ > \\text{Na}^+ > \\text{K}^+$.
Therefore, covalent character increases in the order:
$$\\text{KCl} < \\text{NaCl} < \\text{LiCl} < \\text{BeCl}_2$$`,
    hints: [
      'Smaller cation and higher positive charge produce greater polarizing power.',
      '$\\text{Be}^{2+}$ has $+2$ charge and tiny size, imparting maximum covalent character.'
    ]
  },
  {
    id: 'chem-bond-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-bond-7-hydrogen-bonding-intermolecular',
    chapterId: 'chem-c11-chemical-bonding',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2020,
    text: `Why is ortho-nitrophenol **steam volatile** and has a lower boiling point than para-nitrophenol?`,
    options: [
      'ortho-Nitrophenol forms intramolecular hydrogen bonding, whereas para-nitrophenol forms intermolecular hydrogen bonding.',
      'ortho-Nitrophenol has a higher molecular weight than para-nitrophenol.',
      'para-Nitrophenol forms a stable intramolecular chelate ring.',
      'ortho-Nitrophenol is completely non-polar.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Structural analysis of ortho-nitrophenol**
In ortho-nitrophenol, the $-\\text{OH}$ group and $-\\text{NO}_2$ group are adjacent to each other on the benzene ring:
- The hydrogen of the phenolic $-\\text{OH}$ group forms an **INTRAMOLECULAR hydrogen bond** with the oxygen of the ortho-nitro group.
- This creates a stable 6-membered chelate ring within the single molecule.
- Because the hydrogen bonding is entirely internal, individual ortho-nitrophenol molecules do NOT strongly associate with neighboring molecules.
- Consequently, it has a lower boiling point ($216^\\circ\\text{C}$) and is easily entrained with steam (**steam volatile**).

**Step 2: Structural analysis of para-nitrophenol**
In para-nitrophenol, the $-\\text{OH}$ and $-\\text{NO}_2$ groups are far apart at positions 1 and 4:
- Intramolecular H-bonding is geometrically impossible.
- It engages in extensive **INTERMOLECULAR hydrogen bonding**, linking molecules into long associated chains.
- Breaking these extensive intermolecular attractions requires significant thermal energy, resulting in a much higher boiling point ($279^\\circ\\text{C}$) and non-volatility in steam.

Thus, intramolecular H-bonding in ortho-nitrophenol is the direct reason for its steam volatility.`,
    hints: [
      'Check the spatial proximity of $-\\text{OH}$ and $-\\text{NO}_2$ groups.',
      'Intramolecular H-bonding prevents association between different molecules, lowering boiling point.'
    ]
  }
];
