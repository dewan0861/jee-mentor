import { Question } from '@/types';

export const coordinationCompoundsQuestions: Question[] = [
  {
    id: 'chem-coord-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-coord-5-crystal-field-theory',
    chapterId: 'chem-c12-coordination-compounds',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `What is the Crystal Field Stabilization Energy (CFSE, ignoring pairing energy) for a **high-spin $d^6$ octahedral** coordination complex in terms of $\\Delta_o$?`,
    options: [
      '$-0.4\\,\\Delta_o$',
      '$-2.4\\,\\Delta_o$',
      '$-0.6\\,\\Delta_o$',
      '$-1.2\\,\\Delta_o$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Determine electron distribution for high-spin $d^6$ octahedral field**
In a high-spin complex, the crystal field splitting energy $\\Delta_o$ is smaller than the pairing energy $P$ ($\\Delta_o < P$, weak field ligand).
Therefore, electrons occupy all five orbitals singly before pairing occurs (following Hund's rule):
- $t_{2g}$ orbitals (lower energy by $-0.4\\,\\Delta_o$)
- $e_g$ orbitals (higher energy by $+0.6\\,\\Delta_o$)

For 6 electrons:
1st, 2nd, 3rd electrons enter $t_{2g}$ singly: $t_{2g}^3$.
4th, 5th electrons enter $e_g$ singly: $e_g^2$.
6th electron must pair in $t_{2g}$: $t_{2g}^4$.
Configuration: **$t_{2g}^4 \\; e_g^2$**.

**Step 2: Calculate Crystal Field Stabilization Energy (CFSE)**
$$\\text{CFSE} = \\left[-0.4 \\cdot n(t_{2g}) + 0.6 \\cdot n(e_g)\\right] \\Delta_o$$
$$\\text{CFSE} = \\left[-0.4(4) + 0.6(2)\\right] \\Delta_o$$
$$\\text{CFSE} = [-1.6 + 1.2] \\Delta_o = -0.4\\,\\Delta_o$$

*(Note: For a low-spin $d^6$ complex like $[\\text{Co(NH}_3)_6]^{3+}$, all 6 electrons pair in $t_{2g}^6 e_g^0$, yielding $\\text{CFSE} = -2.4\\,\\Delta_o$)*.`,
    hints: [
      'For high-spin $d^6$, fill orbitals following Hund\'s rule: $t_{2g}^4 e_g^2$.',
      'Multiply $t_{2g}$ electrons by $-0.4\\Delta_o$ and $e_g$ electrons by $+0.6\\Delta_o$.'
    ]
  },
  {
    id: 'chem-coord-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-coord-3-isomerism-structural-stereo',
    chapterId: 'chem-c12-coordination-compounds',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `Which one of the following coordination complexes is **chiral** and therefore capable of exhibiting **optical isomerism** (resolving into enantiomers)?`,
    options: [
      '$\\text{cis}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$',
      '$\\text{trans}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$',
      '$\\text{trans}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$',
      '$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Criteria for optical isomerism**
A coordination complex can exhibit optical isomerism if and only if it is **chiral**, meaning its molecular structure **lacks an improper axis of rotation** (specifically, it must have no plane of symmetry $\\sigma$ and no center of inversion $i$).

**Step 2: Analyze the given complexes**
1. **$\\text{trans}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$**:
   The two chlorido ligands are trans to each other ($180^\\circ$). The complex possesses three orthogonal planes of symmetry and a center of inversion at the cobalt atom. It is **achiral and optically inactive**.

2. **$\\text{cis}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$**:
   The two chlorido ligands are at $90^\\circ$ to each other. The two chelating bidentate ethylenediamine rings are oriented in mutually perpendicular planes. This asymmetric arrangement possesses **no plane of symmetry and no center of inversion**.
   It forms a pair of non-superimposable mirror images (**dextro and laevo enantiomers**) $\\implies$ **CHIRAL and OPTICALLY ACTIVE**.

3. **$\\text{trans}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$**:
   Square planar complex. The molecular plane itself is a plane of symmetry, so all square planar complexes are strictly achiral.

4. **$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$**:
   Contains only unidentate ligands with internal mirror planes in both cis and trans forms.

Thus, only $\\text{cis}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$ is chiral.`,
    hints: [
      'Check for planes of symmetry or centers of inversion.',
      'trans isomers in octahedral bis-chelated complexes have symmetry planes; cis isomers lack symmetry planes.'
    ]
  },
  {
    id: 'chem-coord-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-coord-6-metal-carbonyls-synergy-applications',
    chapterId: 'chem-c12-coordination-compounds',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `Among the following isoelectronic homoleptic metal hexacarbonyl complexes:
$$[\\text{V}(\\text{CO})_6]^-, \\quad [\\text{Cr}(\\text{CO})_6], \\quad [\\text{Mn}(\\text{CO})_6]^+$$
which one exhibits the **longest $\\text{C}-\\text{O}$ bond length** (and lowest $\\text{C}-\\text{O}$ stretching frequency $\\nu_{\\text{CO}}$)?`,
    options: [
      '$[\\text{V}(\\text{CO})_6]^-$',
      '$[\\text{Mn}(\\text{CO})_6]^+$',
      '$[\\text{Cr}(\\text{CO})_6]$',
      'All three have identical $\\text{C}-\\text{O}$ bond lengths because they are isoelectronic.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand Synergic Bonding in metal carbonyls**
Bonding in metal carbonyls consists of two synergistic components:
1. $\\sigma$-bonding: Carbon monoxide donates its lone pair of electrons from carbon into a vacant $d$-orbital of the metal ($\\text{M} \\leftarrow \\text{C}\\equiv\\text{O}$).
2. $\\pi$-backbonding: Filled $d$-orbitals of the metal donate electron density back into the empty **$\\pi^*$ antibonding molecular orbitals** of the carbon monoxide ligand ($\\text{M} \\rightarrow \\pi^*_{\\text{CO}}$).

**Step 2: Effect of $\\pi$-backdonation on bond orders**
- As electron density is pushed into the $\\pi^*$ antibonding orbital of $\\text{C}\\equiv\\text{O}$, the $\\text{C}-\\text{O}$ bond order decreases ($3 \\rightarrow 2$).
- This **weakens and lengthens the $\\text{C}-\\text{O}$ bond** and lowers its infrared vibrational frequency ($\\nu_{\\text{CO}}$).
- Simultaneously, it strengthens and shortens the $\\text{M}-\\text{C}$ bond.

**Step 3: Compare formal charges on the central transition metal**
- $[\\text{V}(\\text{CO})_6]^-$: Central metal is $\\text{V}^-$ (anionic, highest electron density on metal).
- $[\\text{Cr}(\\text{CO})_6]$: Central metal is $\\text{Cr}^0$ (neutral).
- $[\\text{Mn}(\\text{CO})_6]^+$: Central metal is $\\text{Mn}^+$ (cationic, lowest electron density on metal).

The negatively charged vanadium ion ($\\text{V}^-$) has the greatest electron density to donate into the $\\pi^*$ orbitals of $\\text{CO}$.
Consequently:
- Extent of $\\pi$-backbonding: $[\\text{V}(\\text{CO})_6]^- > [\\text{Cr}(\\text{CO})_6] > [\\text{Mn}(\\text{CO})_6]^+$.
- $\\text{C}-\\text{O}$ bond strength: $[\\text{V}(\\text{CO})_6]^- < [\\text{Cr}(\\text{CO})_6] < [\\text{Mn}(\\text{CO})_6]^+$.
- $\\text{C}-\\text{O}$ bond length: **$[\\text{V}(\\text{CO})_6]^-$ is the LONGEST**.`,
    hints: [
      'Higher negative charge on the metal increases $\\pi$-backbonding into the $\\pi^*$ orbital of $\\text{CO}$.',
      'Populating the $\\pi^*$ antibonding orbital of $\\text{CO}$ decreases bond order, resulting in a longer and weaker $\\text{C}-\\text{O}$ bond.'
    ]
  },
  {
    id: 'chem-coord-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-coord-4-valence-bond-theory',
    chapterId: 'chem-c12-coordination-compounds',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The hybridization, geometry, and magnetic character of the complex ions $[\\text{Ni}(\\text{CN})_4]^{2-}$ and $[\\text{NiCl}_4]^{2-}$ are respectively: (Atomic number of $\\text{Ni} = 28$)`,
    options: [
      '$[\\text{Ni}(\\text{CN})_4]^{2-}: dsp^2, \\text{Square planar, Diamagnetic}; \\quad [\\text{NiCl}_4]^{2-}: sp^3, \\text{Tetrahedral, Paramagnetic}$',
      '$[\\text{Ni}(\\text{CN})_4]^{2-}: sp^3, \\text{Tetrahedral, Paramagnetic}; \\quad [\\text{NiCl}_4]^{2-}: dsp^2, \\text{Square planar, Diamagnetic}$',
      '$[\\text{Ni}(\\text{CN})_4]^{2-}: dsp^2, \\text{Square planar, Paramagnetic}; \\quad [\\text{NiCl}_4]^{2-}: sp^3, \\text{Tetrahedral, Diamagnetic}$',
      'Both are $sp^3, \\text{Tetrahedral, Diamagnetic}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Oxidation state and electronic configuration of Nickel**
In both complexes, Nickel has oxidation state $+2$:
- $\\text{Ni} \\; (Z=28): [\\text{Ar}]\\,3d^8 4s^2$.
- $\\text{Ni}^{2+}: [\\text{Ar}]\\,3d^8 4s^0 4p^0$.

**Step 2: Complex $[\\text{Ni}(\\text{CN})_4]^{2-}$**
- Cyanide ($\\text{CN}^-$) is a **strong field ligand** (high in the spectrochemical series).
- It forces the two unpaired electrons in the $3d^8$ subshell to pair up:
  $$3d^8 \\longrightarrow 4 \\text{ pairs of electrons in four } 3d \\text{ orbitals}$$
- This leaves one inner $3d$ orbital completely empty ($3d_{x^2-y^2}$).
- Hybridization involves one $3d$, one $4s$, and two $4p$ orbitals: **$dsp^2$**.
- Geometry: **Square Planar**.
- Unpaired electrons $n = 0 \\implies$ **Diamagnetic** ($\\mu = 0$).

**Step 3: Complex $[\\text{NiCl}_4]^{2-}$**
- Chloride ($\\text{Cl}^-$) is a **weak field ligand** (low in the spectrochemical series).
- It CANNOT force pairing of the $3d^8$ electrons.
- The two unpaired electrons remain in the $3d$ subshell.
- Hybridization uses outer orbitals: one $4s$ and three $4p$ orbitals: **$sp^3$**.
- Geometry: **Tetrahedral**.
- Unpaired electrons $n = 2 \\implies$ **Paramagnetic** ($\\mu_s = \\sqrt{2(4)} = \\sqrt{8} \\approx 2.83\\,\\text{BM}$).`,
    hints: [
      '$\\text{CN}^-$ is a strong field ligand that forces pairing in $3d^8$, freeing one $d$-orbital for $dsp^2$.',
      '$\\text{Cl}^-$ is a weak field ligand, leaving 2 unpaired electrons and forming $sp^3$ tetrahedral.'
    ]
  },
  {
    id: 'chem-coord-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-coord-1-werners-theory',
    chapterId: 'chem-c12-coordination-compounds',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `When $0.1\\,\\text{mol}$ of a cobalt(III) coordination compound $\\text{CoCl}_3 \\cdot 5\\text{NH}_3$ is treated with excess aqueous silver nitrate solution, exactly $0.2\\,\\text{mol}$ of $\\text{AgCl}$ precipitate is formed. The correct Werner coordination formula and total number of ions produced per formula unit in water are:`,
    options: [
      '$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2 \\text{ and } 3\\,\\text{ions}$',
      '$[\\text{Co}(\\text{NH}_3)_5]\\text{Cl}_3 \\text{ and } 4\\,\\text{ions}$',
      '$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl} \\text{ and } 2\\,\\text{ions}$',
      '$[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3] \\text{ and } 0\\,\\text{ions}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Relate moles of $\\text{AgCl}$ to ionizable chloride ions**
According to Werner's coordination theory:
$$\\text{Moles of } \\text{AgCl ppt per mole of complex} = \\frac{0.2\\,\\text{mol}}{0.1\\,\\text{mol}} = 2$$
This implies that exactly **2 chloride ions** reside outside the coordination sphere as ionizable primary valencies.

**Step 2: Formulate the coordination sphere**
- Cobalt(III) exhibits a constant coordination number (secondary valency) of $6$.
- Out of 3 total chlorine atoms, 2 are outside the brackets, so 1 chlorine atom must be bonded inside the coordination sphere.
- All 5 $\\text{NH}_3$ molecules act as neutral ligands inside the coordination sphere.
- Total ligands inside: $5\\,\\text{NH}_3 + 1\\,\\text{Cl}^- = 6$ (satisfying coordination number 6).
- Coordination formula: **$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$** (Pentaamminechloridocobalt(III) chloride).

**Step 3: Count total ions in aqueous solution**
Upon complete dissociation in water:
$$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2(s) \\xrightarrow{\\text{H}_2\\text{O}} [\\text{Co}(\\text{NH}_3)_5\\text{Cl}]^{2+}(aq) + 2\\text{Cl}^-(aq)$$
- 1 complex cation ($+2$)
- 2 chloride anions ($-1$)
Total = **$1 + 2 = 3\\,\\text{ions}$** (1:2 electrolyte, with molar conductivity corresponding to 3 ions).`,
    hints: [
      'Each mole of complex releases 2 moles of $\\text{Cl}^-$, meaning 2 chlorine atoms are outside the coordination brackets.',
      'Dissociation produces 1 complex cation and 2 chloride anions (total 3 ions).'
    ]
  },
  {
    id: 'chem-coord-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-coord-2-ligands-chelation-nomenclature',
    chapterId: 'chem-c12-coordination-compounds',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2020,
    text: `What is the correct systematic IUPAC name for the coordination complex $[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}(\\text{NO}_2)]$?`,
    options: [
      'Diamminechloridonitrito-N-platinum(II)',
      'Diamminechloronitroplatinum(II)',
      'Platinum(II)diamminechloronitrite',
      'Diamminechloronitrito-O-platinate(II)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Determine the oxidation state of the central Platinum atom**
Let oxidation state of $\\text{Pt}$ be $x$:
- Ammine ($\\text{NH}_3$): neutral ligand $\\implies 0$
- Chlorido ($\\text{Cl}^-$): anionic ligand $\\implies -1$
- Nitrito-N ($\\text{NO}_2^-$): anionic ligand $\\implies -1$
- Overall complex charge $= 0$ (neutral complex)
$$x + 2(0) + (-1) + (-1) = 0 \\implies x - 2 = 0 \\implies x = +2$$

**Step 2: Apply IUPAC naming rules**
1. **Order of ligands**: Ligands are listed in strict alphabetical order:
   - "ammine" (starts with 'a')
   - "chlorido" (starts with 'c')
   - "nitrito-N" (starts with 'n', with N indicating bonding via nitrogen atom)
2. **Multiplicative prefix**: Two ammine ligands $\\implies$ "diammine" (note double 'm').
3. **Metal name**: Because the complex is neutral (not an anion), platinum retains its standard English name "platinum" (NOT "platinate").
4. **Oxidation state**: Written in Roman numerals in parentheses immediately following the metal: "(II)".

Combining all parts:
$$\\mathbf{\\text{Diamminechloridonitrito-N-platinum(II)}}$$`,
    hints: [
      'List ligands alphabetically: ammine, chlorido, nitrito-N.',
      'For a neutral complex, the metal name does not end in "-ate".'
    ]
  }
];
