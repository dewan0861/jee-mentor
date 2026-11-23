import { Question } from '@/types';

export const aminesQuestions: Question[] = [
  {
    id: 'chem-amn-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-amn-1-structure-nomenclature-basicity',
    chapterId: 'chem-c12-amines',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The correct decreasing order of basic strength ($pK_b$ values reversed) in **aqueous medium** for the methyl-substituted amines and ammonia is:`,
    options: [
      '$(\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_3\\text{N} > \\text{NH}_3$',
      '$(\\text{CH}_3)_3\\text{N} > (\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > \\text{NH}_3$',
      '$\\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_2\\text{NH} > (\\text{CH}_3)_3\\text{N} > \\text{NH}_3$',
      '$(\\text{CH}_3)_2\\text{NH} > (\\text{CH}_3)_3\\text{N} > \\text{CH}_3\\text{NH}_2 > \\text{NH}_3$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the factors governing amine basicity in water**
In aqueous solution, the basicity of an amine is NOT governed solely by the inductive effect ($+I$). It is a delicate thermodynamic balance among three competing effects:
1. **Inductive Effect ($+I$)**: Electron-donating alkyl groups push electron density onto nitrogen, stabilizing the conjugate ammonium cation:
   $$\\text{Order: } 3^\\circ > 2^\\circ > 1^\\circ > \\text{NH}_3$$
2. **Steric Hindrance**: Bulky alkyl groups crowd the nitrogen atom, hindering the attack of $\\text{H}^+$ and interfering with hydration:
   $$\\text{Order: } \\text{NH}_3 > 1^\\circ > 2^\\circ > 3^\\circ$$
3. **Hydration Energy of the Conjugate Cation**: The protonated ammonium ion ($R_n\\text{NH}_{4-n}^+$) is stabilized by hydrogen bonding with surrounding water molecules. More $\\text{N}-\\text{H}$ bonds permit greater hydration:
   $$\\text{Order of hydration: } \\text{NH}_4^+ > R\\text{NH}_3^+ > R_2\\text{NH}_2^+ > R_3\\text{NH}^+$$

**Step 2: Net result for Methyl group**
For the compact methyl group ($-\\text{CH}_3$), steric hindrance is small, but hydration of the cation combined with the inductive effect produces a maximum stability at the **secondary amine**:
$$(\\text{CH}_3)_2\\text{NH} \\; (2^\\circ) > \\text{CH}_3\\text{NH}_2 \\; (1^\\circ) > (\\text{CH}_3)_3\\text{N} \\; (3^\\circ) > \\text{NH}_3$$
$$(pK_b \\text{ values: } 3.27 < 3.38 < 4.22 < 4.75)$$

*(Note: For the bulkier ethyl group, the order is $2^\\circ > 3^\\circ > 1^\\circ > \\text{NH}_3$)*.`,
    hints: [
      'In aqueous solution, basicity is a balance of inductive effect, steric hindrance, and hydration.',
      'For methylamines: $2^\\circ > 1^\\circ > 3^\\circ > \\text{NH}_3$.'
    ]
  },
  {
    id: 'chem-amn-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-amn-4-aniline-electrophilic-substitutions',
    chapterId: 'chem-c12-amines',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `Direct nitration of aniline with a nitrating mixture of concentrated $\\text{HNO}_3$ and concentrated $\\text{H}_2\\text{SO}_4$ at $288\\,\\text{K}$ produces an unexpectedly high yield of **meta-nitroaniline ($47\\%$)** alongside para-nitroaniline ($51\\%$) and ortho-nitroaniline ($2\\%$). What is the chemical reason for this substantial meta-substitution?`,
    options: [
      'In strongly acidic medium, aniline is extensively protonated to the anilinium ion ($-\\overset{+}{\\text{N}}\\text{H}_3$), which is strongly deactivating and meta-directing.',
      'The $-\\text{NH}_2$ group undergoes oxidative cleavage by $\\text{HNO}_3$.',
      'The ortho and para positions are blocked by steric hindrance of the $-\\text{NH}_2$ group.',
      'Nitrous acid is formed in situ, which directs substitution to the meta position.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Electronic nature of free aniline**
In neutral or non-acidic conditions, the amino group ($-\\text{NH}_2$) donates its lone pair of electrons into the benzene ring by strong **resonance ($+M$)**, acting as a powerful activating and strictly **ortho/para-directing** group.

**Step 2: Protonation in the nitrating mixture**
The nitrating mixture contains concentrated sulfuric acid ($\\text{H}_2\\text{SO}_4$), an extremely strong Brønsted acid.
Aniline acts as a base and undergoes extensive protonation:
$$\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{H}^+ \\rightleftharpoons \\mathbf{\\text{C}_6\\text{H}_5-\\overset{+}{\\text{N}}\\text{H}_3} \\; (\\mathbf{\\text{Anilinium ion}})$$

**Step 3: Directing influence of the anilinium ion**
- In the anilinium ion ($-\\overset{+}{\\text{N}}\\text{H}_3$), nitrogen carries a full formal positive charge and has NO lone pair for resonance donation.
- Instead, it exerts an intense electron-withdrawing **inductive effect ($-I$)**.
- This powerful $-I$ pull severely depletes electron density from the benzene ring, especially at the ortho and para positions.
- Consequently, electrophilic attack by the nitronium ion ($\\text{NO}_2^+$) is directed to the **meta position**:
  $$\\text{meta-Nitroaniline yield} = 47\\%$$
- The unprotonated aniline remaining in equilibrium undergoes normal ortho/para attack, giving $51\\%$ para and $2\\%$ ortho.

Thus, extensive formation of the meta-directing anilinium ion is the direct cause.`,
    hints: [
      'Strong acid protonates the basic $-\\text{NH}_2$ group.',
      'The resulting $-\\overset{+}{\\text{N}}\\text{H}_3$ group has a positive charge, making it strongly deactivating and meta-directing.'
    ]
  },
  {
    id: 'chem-amn-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-amn-2-synthetic-preparations',
    chapterId: 'chem-c12-amines',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `Which one of the following primary amines **CANNOT** be prepared by the **Gabriel Phthalimide Synthesis**?`,
    options: [
      'Aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$)',
      'Ethylamine ($\\text{CH}_3\\text{CH}_2\\text{NH}_2$)',
      'Benzylamine ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$)',
      'Methylamine ($\\text{CH}_3\\text{NH}_2$)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Mechanism of Gabriel Phthalimide Synthesis**
The key step in Gabriel synthesis involves the nucleophilic attack of potassium phthalimide on an alkyl halide:
$$\\text{Phthalimide anion} + R-\\text{X} \\xrightarrow{\\mathbf{\\text{S}_\\text{N}2}} N\\text{-alkylphthalimide} + \\text{X}^-$$
Subsequent alkaline hydrolysis yields a pure primary aliphatic amine ($R-\\text{NH}_2$).

**Step 2: Limitation of the nucleophilic displacement step**
For the $\\text{S}_\\text{N}2$ displacement to succeed, the halide substrate must be capable of undergoing backside nucleophilic attack.
- To prepare **aniline** ($\\text{C}_6\\text{H}_5\\text{NH}_2$), one would need to react potassium phthalimide with a halobenzene (chlorobenzene or bromobenzene, $\\text{C}_6\\text{H}_5-\\text{Cl}$).
- In halobenzenes, the carbon-halogen bond possesses significant **partial double bond character** due to resonance delocalization of the halogen lone pairs into the aromatic ring.
- In addition, the phenyl ring carbon is $sp^2$ hybridized and sterically shields backside attack.
- Therefore, aryl halides **CANNOT undergo nucleophilic substitution ($\\text{S}_\\text{N}2$)** with the phthalimide anion under normal conditions.

*(Note: Benzylamine $\\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$ CAN be synthesized because benzyl chloride $\\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl}$ is an aliphatic primary halide that undergoes rapid $\\text{S}_\\text{N}2$ attack!)*

Hence, Aniline cannot be prepared via Gabriel synthesis.`,
    hints: [
      'Gabriel synthesis requires an $\\text{S}_\\text{N}2$ displacement by phthalimide anion.',
      'Aryl halides cannot undergo $\\text{S}_\\text{N}2$ due to resonance partial double bond character.'
    ]
  },
  {
    id: 'chem-amn-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-amn-3-chemical-tests-hinsberg-carbylamine',
    chapterId: 'chem-c12-amines',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `An unknown amine compound $X$ (molecular formula $\\text{C}_4\\text{H}_{11}\\text{N}$) reacts with benzenesulfonyl chloride (Hinsberg reagent) to form a white precipitate that is **completely insoluble in aqueous sodium hydroxide ($\\text{NaOH}$)**. Compound $X$ is:`,
    options: [
      'A secondary ($2^\\circ$) amine, such as Diethylamine',
      'A primary ($1^\\circ$) amine, such as Butan-1-amine',
      'A tertiary ($3^\\circ$) amine, such as N,N-Dimethylethanamine',
      'A quaternary ammonium salt'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Principle of the Hinsberg Test**
Benzenesulfonyl chloride ($\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) distinguishes $1^\\circ, 2^\\circ, 3^\\circ$ amines:

1. **Primary ($1^\\circ$) amine**:
   $$\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl} + R-\\text{NH}_2 \\longrightarrow \\text{C}_6\\text{H}_5\\text{SO}_2-\\overset{\\mathbf{H}}{\\underset{|}{\\text{N}}}-R + \\text{HCl}$$
   The resulting $N$-alkylbenzenesulfonamide still retains an **acidic hydrogen attached to nitrogen** (due to the strongly electron-withdrawing sulfonyl group).
   Therefore, it easily deprotonates in base and **DISSOLVES in aqueous $\\text{NaOH}$**.

2. **Secondary ($2^\\circ$) amine**:
   $$\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl} + R_2\\text{NH} \\longrightarrow \\text{C}_6\\text{H}_5\\text{SO}_2-\\text{N}R_2 + \\text{HCl}$$
   The resulting $N,N$-dialkylbenzenesulfonamide **contains NO acidic hydrogen on nitrogen**.
   Because it cannot form a water-soluble sodium salt, it remains **COMPLETELY INSOLUBLE in aqueous $\\text{NaOH}$**.

3. **Tertiary ($3^\\circ$) amine**:
   Possesses no replaceable hydrogen on nitrogen and does not react at all with benzenesulfonyl chloride.

**Step 2: Conclusion**
Since compound $X$ reacts to form an alkali-insoluble sulfonamide, it must be a **secondary ($2^\\circ$) amine** (e.g. Diethylamine, $(\\text{C}_2\\text{H}_5)_2\\text{NH}$).`,
    hints: [
      'Primary amine sulfonamides dissolve in $\\text{NaOH}$ because of the acidic $\\text{N}-\\text{H}$ proton.',
      'Secondary amine sulfonamides lack an $\\text{N}-\\text{H}$ proton and remain insoluble in alkali.'
    ]
  },
  {
    id: 'chem-amn-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-amn-7-azo-coupling-synthetic-routes',
    chapterId: 'chem-c12-amines',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    text: `Ice-cold benzene diazonium chloride ($\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^-$) is coupled separately with:
(A) Phenol in mildly alkaline medium ($\\text{pH } 9-10$)
(B) Aniline in mildly acidic medium ($\\text{pH } 4-5$)
The colors of the azo dyes produced in (A) and (B) are respectively:`,
    options: [
      '(A) Orange dye and (B) Yellow dye',
      '(A) Yellow dye and (B) Orange dye',
      '(A) Red dye and (B) Blue dye',
      'Both yield red dyes'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Coupling reaction with Phenol (Reaction A)**
- Substrate: Phenol ($\\text{C}_6\\text{H}_5\\text{OH}$).
- Medium: Mildly alkaline ($\\text{pH } 9-10$).
- Under alkaline conditions, phenol is converted to the **phenoxide ion** ($\\text{C}_6\\text{H}_5\\text{O}^-$), which is far more activated towards electrophilic attack by the weakly electrophilic diazonium cation.
- Coupling occurs stereoselectively at the para position:
  $$\\text{C}_6\\text{H}_5-\\text{N}_2^+\\text{Cl}^- + \\text{C}_6\\text{H}_5\\text{OH} \\xrightarrow{\\text{pH } 9-10} \\mathbf{\\text{C}_6\\text{H}_5-\\text{N}=\\text{N}-\\text{C}_6\\text{H}_4-\\text{OH}(p)} \\; (\\mathbf{\\text{p-Hydroxyazobenzene}})$$
- This compound is an intensely colored **ORANGE DYE**.

**Step 2: Coupling reaction with Aniline (Reaction B)**
- Substrate: Aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$).
- Medium: Mildly acidic ($\\text{pH } 4-5$).
- In mildly acidic conditions, aniline remains largely unprotonated as free base, allowing the $-\\text{NH}_2$ lone pair to activate the ring for electrophilic attack at the para position:
  $$\\text{C}_6\\text{H}_5-\\text{N}_2^+\\text{Cl}^- + \\text{C}_6\\text{H}_5\\text{NH}_2 \\xrightarrow{\\text{pH } 4-5} \\mathbf{\\text{C}_6\\text{H}_5-\\text{N}=\\text{N}-\\text{C}_6\\text{H}_4-\\text{NH}_2(p)} \\; (\\mathbf{\\text{p-Aminoazobenzene}})$$
- This compound is a brilliant **YELLOW DYE**.

Thus, (A) gives an orange dye and (B) gives a yellow dye.`,
    hints: [
      'Phenol coupling in alkaline medium produces p-hydroxyazobenzene (orange dye).',
      'Aniline coupling in mildly acidic medium produces p-aminoazobenzene (yellow dye).'
    ]
  },
  {
    id: 'chem-amn-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-amn-6-diazonium-displacements-sandmeyer',
    chapterId: 'chem-c12-amines',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `To convert aniline into **1,3,5-tribromobenzene** in high yield, which sequential synthetic roadmap is correct?`,
    options: [
      '(1) $\\text{Br}_2 / \\text{H}_2\\text{O} \\longrightarrow$ 2,4,6-tribromoaniline; (2) $\\text{NaNO}_2 + \\text{HCl} \\; (273-278\\,\\text{K}) \\longrightarrow$ 2,4,6-tribromobenzenediazonium chloride; (3) $\\text{H}_3\\text{PO}_2 / \\text{H}_2\\text{O} \\longrightarrow$ 1,3,5-tribromobenzene',
      '(1) $\\text{Br}_2 / \\text{FeBr}_3 \\longrightarrow$ 1,3,5-tribromobenzene directly',
      '(1) $\\text{NaNO}_2 + \\text{HCl} \\longrightarrow$ Diazonium salt; (2) $\\text{Cu}_2\\text{Br}_2 / \\text{HBr} \\longrightarrow$ Bromobenzene; (3) $\\text{Br}_2 / \\text{FeBr}_3$',
      '(1) Acylation with $\\text{Ac}_2\\text{O}$; (2) $\\text{Br}_2 / \\text{CS}_2$; (3) Hydrolysis; (4) $\\text{H}_3\\text{PO}_2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Direct tribromination using activating power of $-\\text{NH}_2$**
In 1,3,5-tribromobenzene, all three bromine atoms are meta to each other.
Direct bromination of benzene cannot introduce three meta bromines because halogens are ortho/para directing.
However, in aniline, the $-\\text{NH}_2$ group activates both ortho positions (2 and 6) and the para position (4):
$$\\text{C}_6\\text{H}_5\\text{NH}_2 + 3\\text{Br}_2 \\xrightarrow{\\text{H}_2\\text{O}} \\mathbf{\\text{2,4,6-Tribromoaniline}} \\downarrow \\; (\\text{white ppt}) + 3\\text{HBr}$$
Notice that relative to each other, the bromines at positions 2, 4, and 6 are already mutually meta!

**Step 2: Diazotization of 2,4,6-tribromoaniline**
Treatment with nitrous acid at ice-cold temperature ($273-278\\,\\text{K}$):
$$\\text{2,4,6-Tribromoaniline} + \\text{NaNO}_2 + 2\\text{HCl} \\longrightarrow \\mathbf{\\text{2,4,6-Tribromobenzenediazonium chloride}} + \\text{NaCl} + 2\\text{H}_2\\text{O}$$

**Step 3: Reductive deamination (removal of diazonium group)**
The diazonium group is replaced by hydrogen using hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) or boiling ethanol:
$$\\text{2,4,6-Br}_3\\text{C}_6\\text{H}_2-\\text{N}_2^+\\text{Cl}^- + \\text{H}_3\\text{PO}_2 + \\text{H}_2\\text{O} \\longrightarrow \\mathbf{\\text{1,3,5-Tribromobenzene}} + \\text{H}_3\\text{PO}_3 + \\text{HCl} + \\text{N}_2 \\uparrow$$

This elegant sequence exploits $-\\text{NH}_2$ as a temporary directing group and then removes it cleanly.`,
    hints: [
      'Use $-\\text{NH}_2$ to direct three bromines to positions 2, 4, 6.',
      'Diazotize the amino group and remove it (deamination) using $\\text{H}_3\\text{PO}_2$.'
    ]
  }
];
