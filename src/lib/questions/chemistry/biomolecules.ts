import { Question } from '@/types';

export const biomoleculesQuestions: Question[] = [
  {
    id: 'chem-bio-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-bio-4-amino-acids-zwitterion',
    chapterId: 'chem-c12-biomolecules',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `Which one of the following standard natural $\\alpha$-amino acids is **achiral** and does **NOT** exhibit optical isomerism?`,
    options: [
      'Glycine ($\\text{H}_2\\text{N}-\\text{CH}_2-\\text{COOH}$)',
      'Alanine ($\\text{CH}_3-\\text{CH(NH}_2)-\\text{COOH}$)',
      'Valine ($(\\text{CH}_3)_2\\text{CH}-\\text{CH(NH}_2)-\\text{COOH}$)',
      'Leucine ($(\\text{CH}_3)_2\\text{CH}-\\text{CH}_2-\\text{CH(NH}_2)-\\text{COOH}$)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Structural requirement for chirality in amino acids**
An $\\alpha$-amino acid has the general structure:
$$\\text{R}-\\overset{*}{\\text{C}}\\text{H}(\\text{NH}_2)-\\text{COOH}$$
For the $\\alpha$-carbon to be an asymmetric (chiral) center, all four substituents attached to it must be chemically distinct:
1. Carboxyl group ($-\\text{COOH}$)
2. Amino group ($-\\text{NH}_2$)
3. Hydrogen atom ($-\\text{H}$)
4. Side-chain group ($-\\text{R}$)

**Step 2: Examine Glycine**
In **Glycine**, the side-chain group $R$ is simply a hydrogen atom:
$$\\text{H}-\\mathbf{C}(\\text{H})(\\text{NH}_2)-\\text{COOH} \\equiv \\text{H}_2\\text{N}-\\text{CH}_2-\\text{COOH}$$
- The $\\alpha$-carbon is bonded to **two identical hydrogen atoms**.
- Because it possesses a plane of symmetry, the molecule is **achiral**.
- It does not rotate plane-polarized light and is **optically inactive**.

All other 19 natural amino acids have distinct $R$ groups ($-\\text{CH}_3$ in alanine, isopropyl in valine, isobutyl in leucine), making their $\\alpha$-carbons chiral and giving them the L-configuration.

Therefore, Glycine is strictly achiral.`,
    hints: [
      'A chiral carbon must be bonded to four different groups.',
      'Check which amino acid has two hydrogen atoms on the $\\alpha$-carbon.'
    ]
  },
  {
    id: 'chem-bio-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-bio-3-disaccharides-polysaccharides',
    chapterId: 'chem-c12-biomolecules',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `Why is sucrose (ordinary cane sugar, $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$) classified as a **non-reducing sugar**, whereas maltose and lactose are reducing sugars?`,
    options: [
      'Both the anomeric carbon C-1 of $\\alpha$-D-glucose and anomeric carbon C-2 of $\\beta$-D-fructose are tied up in the glycosidic linkage.',
      'Sucrose lacks hydroxyl groups capable of participating in oxidation.',
      'Sucrose is an invert sugar with a negative specific rotation.',
      'Fructose in sucrose exists in an open-chain form.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Criteria for a Reducing Sugar**
A sugar is classified as a **reducing sugar** if it can reduce Fehling's solution or Tollens' reagent.
This ability requires the sugar to possess a **free hemiacetal or hemiketal group** (at an anomeric carbon atom) that is free to open in aqueous alkaline solution into a reactive aldehyde or $\\alpha$-hydroxy ketone.

**Step 2: Structural analysis of Sucrose**
Sucrose is composed of two monosaccharide units:
1. $\\alpha$-D-Glucopyranose (anomeric carbon is **C-1**)
2. $\\beta$-D-Fructofuranose (anomeric carbon is **C-2**)

The glycosidic bond connects the **C-1 of glucose** directly to the **C-2 of fructose**:
$$\\alpha\\text{-D-Glucopyranosyl}-(1 \\rightarrow 2)-\\beta\\text{-D-fructofuranoside}$$
- Because **BOTH anomeric carbons** participate in the glycosidic bond, there is no free hemiacetal or hemiketal group in the molecule.
- The rings cannot open in aqueous solution to yield a free carbonyl group.
- Consequently, sucrose **cannot reduce Fehling\'s or Tollens\' reagents $\\implies$ Non-reducing sugar**.

**Step 3: Comparison with Maltose and Lactose**
- In Maltose, the linkage is $\\alpha-1,4$ (C-1 to C-4), leaving the second glucose C-1 anomeric carbon free $\\implies$ Reducing.
- In Lactose, the linkage is $\\beta-1,4$ (C-1 of galactose to C-4 of glucose), leaving the glucose C-1 anomeric carbon free $\\implies$ Reducing.`,
    hints: [
      'Non-reducing sugars have both anomeric carbons locked in a glycosidic bond.',
      'Check the carbon numbers involved in the glycosidic linkage of sucrose.'
    ]
  },
  {
    id: 'chem-bio-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-bio-1-carbohydrates-open-chain-proofs',
    chapterId: 'chem-c12-biomolecules',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `Which one of the following chemical reactions of D-glucose provides direct, conclusive proof that all six carbon atoms are linked together in an **unbranched continuous straight chain**?`,
    options: [
      'Prolonged heating with hydroiodic acid and red phosphorus ($\\text{HI} / \\text{Red P}$) yielding n-hexane',
      'Reaction with hydroxylamine yielding glucose oxime',
      'Oxidation with bromine water yielding gluconic acid',
      'Acetylation with acetic anhydride yielding glucose pentaacetate'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Structural deducing reactions of D-Glucose**
1. **Prolonged heating with $\\text{HI} / \\text{Red P}$ at $373\\,\\text{K}$**:
   $$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 14\\,\\text{HI} \\xrightarrow{\\text{Red P}, \\; 373\\,\\text{K}} \\mathbf{\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3} \\; (\\mathbf{\\text{n-Hexane}}) + 6\\,\\text{H}_2\\text{O} + 7\\,\\text{I}_2$$
   - Hydrogen iodide with red phosphorus is a vigorous universal reducing agent that reduces all carbonyl and hydroxyl groups completely to saturated hydrocarbons.
   - The exclusive formation of **n-hexane** (an unbranched, straight-chain 6-carbon alkane) proves unequivocally that all six carbon atoms in glucose are linked in a **continuous straight chain**.

2. **Hydroxylamine ($\\text{NH}_2\\text{OH}$)**: Proves the presence of a carbonyl group ($>\\text{C}=\\text{O}$).
3. **Bromine water ($\\text{Br}_2 / \\text{H}_2\\text{O}$)**: Proves that the carbonyl group is an **aldehyde** ($-\\text{CHO}$).
4. **Acetic anhydride**: Proves the presence of **five $-\\text{OH}$ groups**.

Thus, the reaction with $\\text{HI}$ confirms the continuous linear 6-carbon skeleton.`,
    hints: [
      'Universal reduction of all oxygen functionalities to an alkane reveals the carbon skeleton.',
      'Formation of n-hexane demonstrates that the six carbons form an unbranched linear chain.'
    ]
  },
  {
    id: 'chem-bio-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-bio-5-proteins-structure-denaturation',
    chapterId: 'chem-c12-biomolecules',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `During the **denaturation of proteins** (e.g. coagulation of egg white on boiling or curdling of milk by lactic acid), which level of protein structural organization remains **completely intact and unaltered**?`,
    options: [
      'Primary structure',
      'Secondary structure',
      'Tertiary structure',
      'Quaternary structure'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the nature of Denaturation**
Denaturation is a process in which a biologically active native protein loses its higher-order spatial conformation and biological activity due to physical or chemical stress (such as heating, drastic change in pH, or addition of urea/guanidinium chloride).

**Step 2: Structural bonds disrupted during denaturation**
- **Secondary, Tertiary, and Quaternary structures** are maintained by relatively weak non-covalent interactions:
  - Hydrogen bonds (in $\\alpha$-helices and $\\beta$-sheets)
  - Hydrophobic van der Waals interactions
  - Electrostatic ionic attractions (salt bridges)
  - Disulfide bridges ($-\\text{S}-\\text{S}-$)
- Under denaturing conditions, these weak stabilizing forces are disrupted. Globules unfold and helices uncoil, causing the protein to precipitate as a disorganized, biologically inactive tangle.

**Step 3: What remains intact?**
- The **Primary structure** consists of amino acid residues linked together by strong, covalent **peptide (amide) bonds** ($-\\text{CO}-\\text{NH}-$).
- Covalent peptide bonds are thermodynamically stable and do NOT hydrolyze under mild thermal or pH changes (they require boiling in $6\\,\\text{M HCl}$ for 24 hours to break).
- Therefore, the **Primary structure remains completely intact**.`,
    hints: [
      'Denaturation breaks weak hydrogen bonds and hydrophobic interactions.',
      'Covalent peptide bonds forming the linear amino acid sequence are not cleaved.'
    ]
  },
  {
    id: 'chem-bio-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-bio-6-nucleic-acids-dna-rna',
    chapterId: 'chem-c12-biomolecules',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `A sample of double-stranded DNA is analyzed and found to contain **$30\\%$ Adenine (A)**. According to Chargaff's rules of base pairing, what is the percentage of **Cytosine (C)** in this DNA sample?`,
    options: [
      '$20\\%$',
      '$30\\%$',
      '$40\\%$',
      '$70\\%$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: State Chargaff's Rules for double-stranded DNA**
In double-stranded DNA:
1. Adenine pairs exclusively with Thymine via two hydrogen bonds:
   $$\\%\\text{A} = \\%\\text{T}$$
2. Guanine pairs exclusively with Cytosine via three hydrogen bonds:
   $$\\%\\text{G} = \\%\\text{C}$$
3. The sum of all four bases equals $100\\%$:
   $$\\%\\text{A} + \\%\\text{T} + \\%\\text{G} + \\%\\text{C} = 100\\%$$

**Step 2: Calculate percentage of Thymine**
Given $\\%\\text{A} = 30\\%$:
$$\\%\\text{T} = \\%\\text{A} = 30\\%$$
$$\\%\\text{A} + \\%\\text{T} = 30\\% + 30\\% = 60\\%$$

**Step 3: Calculate percentage of Cytosine**
The remaining base fraction belongs to Guanine and Cytosine:
$$\\%\\text{G} + \\%\\text{C} = 100\\% - 60\\% = 40\\%$$
Since $\\%\\text{G} = \\%\\text{C}$:
$$2 \\times \\%\\text{C} = 40\\% \\implies \\%\\text{C} = \\frac{40\\%}{2} = \\mathbf{20\\%}$$

Thus, the DNA sample contains $20\\%$ Cytosine (and $20\\%$ Guanine).`,
    hints: [
      'Apply Chargaff\'s rule: $\\%\\text{A} = \\%\\text{T}$ and $\\%\\text{G} = \\%\\text{C}$.',
      'Subtract $\\%\\text{A} + \\%\\text{T}$ from $100\\%$ and divide the remainder by 2.'
    ]
  },
  {
    id: 'chem-bio-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-bio-7-vitamins-classification-deficiency',
    chapterId: 'chem-c12-biomolecules',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `Which one of the following pairs correctly matches a **water-soluble vitamin** that is uniquely **stored in the human liver** with its corresponding deficiency disease?`,
    options: [
      'Vitamin $\\text{B}_{12}$ (Cyanocobalamin) — Pernicious anaemia',
      'Vitamin C (Ascorbic acid) — Scurvy',
      'Vitamin A (Retinol) — Night blindness',
      'Vitamin $\\text{B}_1$ (Thiamine) — Beriberi'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Classification of vitamins by solubility**
1. **Fat-soluble**: Vitamins A, D, E, and K (stored in adipose tissue and liver).
2. **Water-soluble**: B-complex vitamins ($\\text{B}_1, \\text{B}_2, \\text{B}_6, \\text{B}_{12}$) and Vitamin C.

**Step 2: Excretion vs Storage of water-soluble vitamins**
- Most water-soluble vitamins are not stored in the body to any significant degree; they are rapidly filtered by the kidneys and excreted in urine, necessitating a regular dietary intake.
- **Vitamin $\\text{B}_{12}$ (Cyanocobalamin)** is the **one critical exception**: it is stored in substantial quantities in the human liver (typically a 3 to 5 year reserve).

**Step 3: Deficiency diseases**
- Severe deficiency of Vitamin $\\text{B}_{12}$ leads to failure of RBC maturation, causing **Pernicious anaemia** (a megaloblastic anaemia characterized by low hemoglobin count and neurological dysfunction).
- Vitamin C deficiency causes Scurvy (but Vitamin C is not stored in the liver).
- Vitamin A causes night blindness (but Vitamin A is fat-soluble, not water-soluble).
- Vitamin $\\text{B}_1$ causes Beriberi (but is not stored in the liver).

Therefore, Vitamin $\\text{B}_{12}$ matches all criteria.`,
    hints: [
      'Identify the unique water-soluble vitamin that is stored in the liver for years.',
      'Its deficiency causes failure of red blood cell maturation (pernicious anaemia).'
    ]
  }
];
