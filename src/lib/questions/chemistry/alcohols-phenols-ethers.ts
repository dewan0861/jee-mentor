import { Question } from '@/types';

export const alcoholsPhenolsEthersQuestions: Question[] = [
  {
    id: 'chem-ape-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-ape-7-ethers-chemical-cleavage',
    chapterId: 'chem-c12-alcohols-phenols-ethers',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `When tert-butyl methyl ether ($(\\text{CH}_3)_3\\text{C}-\\text{O}-\\text{CH}_3$) is treated with one equivalent of concentrated hydroiodic acid ($\\text{HI}$) at room temperature, the major products formed are:`,
    options: [
      'tert-Butyl iodide and Methanol',
      'Methyl iodide and tert-Butyl alcohol',
      'tert-Butyl iodide and Methyl iodide',
      'Isobutylene and Methanol'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Protonation of the ether oxygen**
The ether oxygen attacks the strong hydracid $\\text{HI}$ to form an oxonium ion:
$$(\\text{CH}_3)_3\\text{C}-\\text{O}-\\text{CH}_3 + \\text{H}^+ \\rightleftharpoons (\\text{CH}_3)_3\\text{C}-\\overset{+}{\\text{O}}\\text{H}-\\text{CH}_3$$

**Step 2: Determine mechanism ($\text{S}_\\text{N}1$ vs $\text{S}_\\text{N}2$)**
- For simple primary or secondary ethers, nucleophilic attack by iodide ($\\text{I}^-$) proceeds via the $\\text{S}_\\text{N}2$ mechanism at the less sterically hindered carbon.
- However, when one of the alkyl groups is **tertiary ($3^\\circ$)**, the heterolytic cleavage of the $\\text{C}-\\text{O}$ bond produces an exceptionally stable tertiary carbocation:
  $$(\\text{CH}_3)_3\\text{C}-\\overset{+}{\\text{O}}\\text{H}-\\text{CH}_3 \\xrightarrow{\\text{slow (rate-determining)}} (\\text{CH}_3)_3\\text{C}^+ \\; (3^\\circ\\text{ carbocation, } 9\\,\\alpha\\text{-H}) + \\text{CH}_3\\text{OH}$$

**Step 3: Fast nucleophilic capture by iodide**
The persistent $3^\\circ$ carbocation is captured by the iodide ion:
$$(\\text{CH}_3)_3\\text{C}^+ + \\text{I}^- \\xrightarrow{\\text{fast}} (\\text{CH}_3)_3\\text{C}-\\text{I} \\; (\\mathbf{\\text{tert-Butyl iodide}})$$

Therefore, the cleavage proceeds via the **$\\text{S}_\\text{N}1$ pathway**, yielding **tert-butyl iodide and methanol**.`,
    hints: [
      'With a tertiary alkyl group, the ether cleaves via $\\text{S}_\\text{N}1$ because a stable tertiary carbocation is formed.',
      'Iodide attacks the tertiary carbocation, leaving the primary group as an alcohol.'
    ]
  },
  {
    id: 'chem-ape-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-ape-5-phenols-named-reactions',
    chapterId: 'chem-c12-alcohols-phenols-ethers',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    text: `In the Reimer-Tiemann reaction of phenol with chloroform and aqueous $\\text{NaOH}$ to yield salicylaldehyde, what is the nature and identity of the active attacking electrophile?`,
    options: [
      'Dichlorocarbene ($:\\text{CCl}_2$), neutral with 6 valence electrons',
      'Trichloromethyl anion ($:\\text{CCl}_3^-$), anionic with 8 valence electrons',
      'Formyl cation ($\\text{H}-\\overset{+}{\\text{C}}=\\text{O}$), cationic',
      'Chloronium ion ($\\text{Cl}^+$), cationic'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Generation of the intermediate electrophile**
In alkaline medium, the strongly basic hydroxide ion abstracts the acidic proton from chloroform:
$$\\text{CHCl}_3 + \\text{OH}^- \\rightleftharpoons :\\text{CCl}_3^- + \\text{H}_2\\text{O}$$
The resulting trichloromethyl carbanion rapidly loses a chloride ion via $\\alpha$-elimination:
$$:\\text{CCl}_3^- \\xrightarrow{\\alpha\\text{-elimination}} \\mathbf{:\\text{CCl}_2} \\; (\\text{Dichlorocarbene}) + \\text{Cl}^-$$

**Step 2: Electronic nature of Dichlorocarbene**
- The central carbon in $:\\text{CCl}_2$ possesses two bonding pairs and one non-bonding lone pair:
  $$\\text{Total valence electrons} = 2 \\times 2 + 2 = 6\\,\\text{electrons (sextet)}$$
- It has an empty $2p$ orbital and is electron-deficient.
- Therefore, despite carrying a lone pair and possessing zero formal charge, **Dichlorocarbene is a potent neutral electrophile**.

**Step 3: Attack on phenoxide ring**
Dichlorocarbene attacks the electron-rich ortho position of the sodium phenoxide ring, forming a benzylidene dichloride intermediate which upon alkaline hydrolysis yields **salicylaldehyde**.`,
    hints: [
      'Chloroform in strong base undergoes $\\alpha$-elimination.',
      'The generated carbene has an incomplete octet (6 electrons), acting as a neutral electrophile.'
    ]
  },
  {
    id: 'chem-ape-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-ape-6-ethers-synthesis-williamson',
    chapterId: 'chem-c12-alcohols-phenols-ethers',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `Which one of the following reaction combinations is the **best and only viable method** to prepare tert-butyl ethyl ether via the Williamson ether synthesis?`,
    options: [
      'Sodium tert-butoxide ($(\\text{CH}_3)_3\\text{C}-\\text{O}^-\\text{Na}^+$) + Bromoethane ($\\text{CH}_3\\text{CH}_2\\text{Br}$)',
      'Sodium ethoxide ($\\text{CH}_3\\text{CH}_2\\text{O}^-\\text{Na}^+$) + 2-Bromo-2-methylpropane ($(\\text{CH}_3)_3\\text{C}-\\text{Br}$)',
      'Ethanol + tert-Butyl alcohol in concentrated $\\text{H}_2\\text{SO}_4$ at $413\\,\\text{K}$',
      'tert-Butyl alcohol + Bromoethane in acidic medium'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Mechanism of Williamson Ether Synthesis**
Williamson ether synthesis is an **$\\text{S}_\\text{N}2$ nucleophilic displacement** of a halide ion from an alkyl halide by an alkoxide ion:
$$R'-\\text{O}^- + R-\\text{X} \\xrightarrow{\\text{S}_\\text{N}2} R'-\\text{O}-R + \\text{X}^-$$

**Step 2: Analyze Option A**
- Alkoxide: Sodium tert-butoxide $[(\\text{CH}_3)_3\\text{C}-\\text{O}^-]$. Even though it is sterically bulky, it acts successfully as a nucleophile.
- Alkyl Halide: Bromoethane ($\\text{CH}_3\\text{CH}_2\\text{Br}$, primary $1^\\circ$ halide).
- Primary alkyl halides have minimal steric hindrance and undergo backside $\\text{S}_\\text{N}2$ displacement smoothly:
  $$(\\text{CH}_3)_3\\text{C}-\\text{O}^- + \\text{CH}_3\\text{CH}_2-\\text{Br} \\xrightarrow{\\text{S}_\\text{N}2} (\\text{CH}_3)_3\\text{C}-\\text{O}-\\text{CH}_2\\text{CH}_3 + \\text{Br}^-$$
- Yields the desired **tert-butyl ethyl ether** in high yield.

**Step 3: Analyze Option B (Common Trap)**
- Alkoxide: Sodium ethoxide ($\\text{CH}_3\\text{CH}_2\\text{O}^-$).
- Alkyl Halide: tert-Butyl bromide ($3^\\circ$ halide).
- Strongly basic alkoxides cause **exclusive $\\text{E}2$ elimination** on tertiary alkyl halides:
  $$\\text{CH}_3\\text{CH}_2\\text{O}^- + (\\text{CH}_3)_3\\text{C}-\\text{Br} \\xrightarrow{\\text{E}2} \\text{CH}_2=\\text{C}(\\text{CH}_3)_2 \\; (\\text{Isobutylene, } 100\\%) + \\text{EtOH} + \\text{Br}^-$$
No ether is formed!

Thus, Option A is strictly the only viable synthetic route.`,
    hints: [
      'In Williamson synthesis, the alkyl halide MUST be primary ($1^\\circ$) or methyl.',
      'A tertiary halide with an alkoxide undergoes 100% elimination to yield an alkene.'
    ]
  },
  {
    id: 'chem-ape-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-ape-4-phenols-electrophilic-reactions',
    chapterId: 'chem-c12-alcohols-phenols-ethers',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `Phenol is treated separately with bromine under two different solvent conditions:
$$\\text{Reaction (A): } \\text{Phenol} + \\text{Br}_2 \\; (\\text{in } \\text{H}_2\\text{O}) \\longrightarrow \\mathbf{X}$$
$$\\text{Reaction (B): } \\text{Phenol} + \\text{Br}_2 \\; (\\text{in } \\text{CS}_2, \\; 273\\,\\text{K}) \\longrightarrow \\mathbf{Y} \\; (\\text{major product})$$
The organic products $\\mathbf{X}$ and $\\mathbf{Y}$ are respectively:`,
    options: [
      '$\\mathbf{X} = \\text{2,4,6-Tribromophenol (white ppt)}, \\quad \\mathbf{Y} = \\text{4-Bromophenol (p-bromophenol)}$',
      '$\\mathbf{X} = \\text{4-Bromophenol}, \\quad \\mathbf{Y} = \\text{2,4,6-Tribromophenol}$',
      'Both $\\mathbf{X}$ and $\\mathbf{Y}$ are 2-bromophenol',
      'Both $\\mathbf{X}$ and $\\mathbf{Y}$ are 2,4,6-tribromophenol'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Reaction (A) in polar protic solvent (water)**
- Water is a polar protic solvent with high dielectric constant.
- It promotes ionization of phenol into the **phenoxide ion** ($\\text{C}_6\\text{H}_5\\text{O}^-$):
  $$\\text{C}_6\\text{H}_5\\text{OH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{C}_6\\text{H}_5\\text{O}^- + \\text{H}_3\\text{O}^+$$
- The negatively charged oxygen ($-\\text{O}^-$) has tremendous $+M$ electron-donating ability, activating the benzene ring to an extreme degree.
- Consequently, bromination occurs simultaneously at **all available ortho and para positions**, precipitating **2,4,6-tribromophenol** as a characteristic white precipitate:
  $$\\mathbf{X} = \\mathbf{\\text{2,4,6-Tribromophenol}}$$

**Step 2: Reaction (B) in non-polar solvent ($\\text{CS}_2$ or $\\text{CHCl}_3$) at $273\\,\\text{K}$**
- Carbon disulfide is non-polar and prevents ionization of phenol into phenoxide ion.
- Un-ionized phenol is only moderately activated by the neutral $-\\text{OH}$ group.
- Bromination stops cleanly at **monobromination**.
- Para position experiences less steric hindrance than the ortho position, making **4-bromophenol (p-bromophenol)** the dominant major product ($\sim 80\\%$):
  $$\\mathbf{Y} = \\mathbf{\\text{4-Bromophenol}}$$`,
    hints: [
      'Water ionizes phenol to phenoxide, causing rapid tribromination to give a white precipitate.',
      'Non-polar $\\text{CS}_2$ suppresses ionization, resulting in monobromination at the unhindered para position.'
    ]
  },
  {
    id: 'chem-ape-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-ape-2-alcohols-chemical-reactions',
    chapterId: 'chem-c12-alcohols-phenols-ethers',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    text: `When the vapors of 2-methylpropan-2-ol (tert-butyl alcohol) are passed over heated metallic copper catalyst at $573\\,\\text{K}$, the major organic product obtained is:`,
    options: [
      '2-Methylprop-1-ene (Isobutylene) via dehydration',
      '2-Methylpropanal via dehydrogenation',
      'Acetone and carbon dioxide',
      'tert-Butyl methyl ether'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand catalytic behavior of heated copper at $573\\,\\text{K}$**
Passing alcohol vapors over heated copper at $573\\,\\text{K}$ typically causes **dehydrogenation** (loss of $\\text{H}_2$):
- $1^\\circ$ alcohols possess $\\alpha$-hydrogens:
  $$R-\\text{CH}_2\\text{OH} \\xrightarrow{\\text{Cu} / 573\\,\\text{K}} R-\\text{CHO} + \\text{H}_2 \\; (\\text{Aldehyde})$$
- $2^\\circ$ alcohols possess one $\\alpha$-hydrogen:
  $$R_2\\text{CHOH} \\xrightarrow{\\text{Cu} / 573\\,\\text{K}} R_2\\text{C}=\\text{O} + \\text{H}_2 \\; (\\text{Ketone})$$

**Step 2: Behavior of tertiary ($3^\\circ$) alcohol**
In 2-methylpropan-2-ol ($(\\text{CH}_3)_3\\text{C}-\\text{OH}$):
- The central carbon bearing the $-\\text{OH}$ group has **NO $\\alpha$-hydrogen**!
- Therefore, dehydrogenation is impossible.
- Under the high thermal energy of $573\\,\\text{K}$, the tertiary alcohol instead undergoes **catalytic dehydration** (elimination of water, $-\\text{H}_2\\text{O}$):
  $$(\\text{CH}_3)_3\\text{C}-\\text{OH} \\xrightarrow{\\text{Cu} / 573\\,\\text{K}} \\mathbf{\\text{CH}_2=\\text{C}(\\text{CH}_3)_2} \\; (\\mathbf{\\text{2-Methylprop-1-ene / Isobutylene}}) + \\text{H}_2\\text{O}$$

Thus, 2-methylprop-1-ene is formed via dehydration.`,
    hints: [
      '$1^\\circ$ and $2^\\circ$ alcohols dehydrogenate over heated Cu to form carbonyls.',
      '$3^\\circ$ alcohols lack an $\\alpha$-hydrogen and undergo dehydration to form an alkene.'
    ]
  },
  {
    id: 'chem-ape-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-ape-3-phenols-synthesis-acidity',
    chapterId: 'chem-c12-alcohols-phenols-ethers',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `In the industrial Cumene process for the manufacturing of phenol:
$$\\text{Benzene} \\xrightarrow{\\text{CH}_3\\text{CH}=\\text{CH}_2, \\; \\text{H}_3\\text{PO}_4} \\mathbf{A} \\xrightarrow{\\text{O}_2} \\mathbf{B} \\xrightarrow{\\text{H}_3\\text{O}^+} \\text{Phenol} + \\mathbf{C}$$
What are the chemical identities of intermediate $\\mathbf{B}$ and industrial byproduct $\\mathbf{C}$?`,
    options: [
      '$\\mathbf{B} = \\text{Cumene hydroperoxide}, \\quad \\mathbf{C} = \\text{Acetone (Propan-2-one)}$',
      '$\\mathbf{B} = \\text{Cumene peroxide}, \\quad \\mathbf{C} = \\text{Acetaldehyde}$',
      '$\\mathbf{B} = \\text{Benzoic acid}, \\quad \\mathbf{C} = \\text{Methanol}$',
      '$\\mathbf{B} = \\text{Phenoxide ion}, \\quad \\mathbf{C} = \\text{Propane}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formation of Cumene (Compound A)**
Friedel-Crafts alkylation of benzene with propene in the presence of phosphoric acid ($\\text{H}_3\\text{PO}_4$) at $523\\,\\text{K}$ produces isopropylbenzene (**Cumene**, $\\mathbf{A}$):
$$\\text{C}_6\\text{H}_6 + \\text{CH}_3\\text{CH}=\\text{CH}_2 \\longrightarrow \\text{C}_6\\text{H}_5-\\text{CH}(\\text{CH}_3)_2$$

**Step 2: Auto-oxidation to Cumene Hydroperoxide (Compound B)**
Air or oxygen is bubbled through cumene in a slightly alkaline aqueous medium.
The tertiary benzylic $\\text{C}-\\text{H}$ bond readily undergoes free radical auto-oxidation to form **Cumene hydroperoxide** ($\\mathbf{B}$):
$$\\text{C}_6\\text{H}_5-\\text{CH}(\\text{CH}_3)_2 + \\text{O}_2 \\longrightarrow \\mathbf{\\text{C}_6\\text{H}_5-\\text{C}(\\text{CH}_3)_2-\\text{O}-\\text{O}-\\text{H}} \\; (\\mathbf{\\text{Cumene Hydroperoxide}})$$

**Step 3: Acid-catalyzed rearrangement and cleavage**
Treatment with dilute sulfuric acid ($\\text{H}_3\\text{O}^+$) protonates the terminal peroxide oxygen, triggering a spontaneous rearrangement:
- Water departs as a leaving group.
- The phenyl group undergoes a concerted $1,2$-migration to the electron-deficient peroxide oxygen (**Hock rearrangement**).
- Subsequent hydrolysis breaks the $\\text{C}-\\text{O}$ bond, cleaving the intermediate into:
  1. **Phenol** ($\\text{C}_6\\text{H}_5\\text{OH}$)
  2. **Acetone** ($\\text{CH}_3\\text{COCH}_3$, byproduct $\\mathbf{C}$).

Because acetone is a high-value industrial solvent, this process provides an economically superior commercial route to both chemicals.`,
    hints: [
      'Cumene undergoes auto-oxidation at the benzylic carbon to form a hydroperoxide.',
      'Acid hydrolysis cleaves the hydroperoxide into phenol and acetone.'
    ]
  }
];
