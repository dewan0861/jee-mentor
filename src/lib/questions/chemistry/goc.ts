import { Question } from '@/types';

export const gocQuestions: Question[] = [
  {
    id: 'chem-goc-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-goc-4-reaction-intermediates',
    chapterId: 'chem-c11-goc',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The correct increasing order of thermodynamic stability among the following carbocations is:
(I) Isopropyl cation $[(\\text{CH}_3)_2\\text{CH}^+]$
(II) tert-Butyl cation $[(\\text{CH}_3)_3\\text{C}^+]$
(III) Triphenylmethyl cation $[\\text{Ph}_3\\text{C}^+]$
(IV) Tropylium cation $[\\text{C}_7\\text{H}_7^+]$`,
    options: [
      '(I) < (II) < (III) < (IV)',
      '(I) < (III) < (II) < (IV)',
      '(IV) < (III) < (II) < (I)',
      '(II) < (I) < (III) < (IV)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Analyze stabilizing electronic factors for each carbocation**
1. **(I) Isopropyl cation $[(\\text{CH}_3)_2\\text{CH}^+]$**:
   - Secondary ($2^\\circ$) alkyl carbocation.
   - Stabilized by inductive effect ($+I$) and **6 $\\alpha$-hydrogens** via hyperconjugation.

2. **(II) tert-Butyl cation $[(\\text{CH}_3)_3\\text{C}^+]$**:
   - Tertiary ($3^\\circ$) alkyl carbocation.
   - Stabilized by three methyl groups ($+I$) and **9 $\\alpha$-hydrogens** via hyperconjugation.
   - More stable than isopropyl: (I) < (II).

3. **(III) Triphenylmethyl cation $[\\text{Ph}_3\\text{C}^+]$ (Trityl cation)**:
   - The empty $p$-orbital on the central carbon is in direct resonance with **three benzene rings** (nine major canonical resonance structures delocalizing the positive charge over ortho and para positions).
   - Resonance stabilization strongly supersedes hyperconjugation: (II) < (III).

4. **(IV) Tropylium cation $[\\text{C}_7\\text{H}_7^+]$**:
   - 7-membered planar ring with 6 $\\pi$-electrons ($n=1$ in $4n+2$).
   - The positive charge is completely delocalized across all 7 carbon atoms.
   - Because it possesses **aromatic stabilization**, it is exceptionally stable and exists even as an ionic bromide salt (tropylium bromide is a stable, water-soluble crystalline salt).
   - Aromatic stabilization surpasses simple resonance stabilization: (III) < (IV).

**Step 2: Conclusion**
Increasing order of stability:
$$\\mathbf{(I) < (II) < (III) < (IV)}$$`,
    hints: [
      'Aromatic carbocations (tropylium) have exceptional thermodynamic stability.',
      'Resonance across three phenyl rings (trityl) is more stabilizing than hyperconjugation (tert-butyl).'
    ]
  },
  {
    id: 'chem-goc-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-goc-3-aromaticity-huckel',
    chapterId: 'chem-c11-goc',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `Which one of the following species is **anti-aromatic** and therefore exceptionally unstable at room temperature?`,
    options: [
      'Cyclobutadiene',
      'Cyclopentadienyl anion',
      'Tropylium cation',
      'Cyclooctatetraene'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Criteria for Aromatic, Anti-Aromatic, and Non-Aromatic species**
- **Aromatic**: Cyclic, planar, completely conjugated with **$(4n + 2)\\pi$ electrons** ($2, 6, 10, 14 \\dots$).
- **Anti-Aromatic**: Cyclic, planar, completely conjugated with **$4n\\pi$ electrons** ($4, 8, 12 \\dots$).
- **Non-Aromatic**: Species that are non-cyclic, non-planar, or have broken conjugation ($sp^3$ ring atom).

**Step 2: Evaluate the given options**
1. **Cyclobutadiene ($\\text{C}_4\\text{H}_4$)**:
   - 4-membered cyclic ring with two conjugated double bonds.
   - Completely planar with all four carbons $sp^2$ hybridized.
   - Contains **$4\\pi$ electrons** ($n=1$ in $4n$).
   - Conforms strictly to the criteria for **anti-aromaticity**. It is extremely unstable and rapidly dimerizes even at cryogenic temperatures.

2. **Cyclopentadienyl anion ($\\text{C}_5\\text{H}_5^-$)**:
   - 5-membered planar ring with two double bonds and one lone pair: $2 \\times 2 + 2 = 6\\pi$ electrons.
   - $(4n+2)$ with $n=1 \\implies$ **Aromatic**.

3. **Tropylium cation ($\\text{C}_7\\text{H}_7^+$)**:
   - 7-membered planar ring with three double bonds: $3 \\times 2 = 6\\pi$ electrons $\\implies$ **Aromatic**.

4. **Cyclooctatetraene (COT, $\\text{C}_8\\text{H}_8$)**:
   - Contains $8\\pi$ electrons. However, to avoid the tremendous destabilization of anti-aromaticity, it flexes out of planarity to adopt a non-planar **tub-shaped conformation**.
   - Because it is non-planar, it is **Non-Aromatic** (NOT anti-aromatic).

Therefore, Cyclobutadiene is strictly anti-aromatic.`,
    hints: [
      'Anti-aromatic systems must be planar, cyclic, fully conjugated, and possess $4n\\pi$ electrons.',
      'Cyclooctatetraene avoids anti-aromaticity by adopting a non-planar tub shape.'
    ]
  },
  {
    id: 'chem-goc-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-goc-5-acid-base-strengths',
    chapterId: 'chem-c11-goc',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The correct decreasing order of acidic strength for the following substituted benzoic acids is:
(I) ortho-Nitrobenzoic acid
(II) para-Nitrobenzoic acid
(III) meta-Nitrobenzoic acid
(IV) Benzoic acid`,
    options: [
      '(I) > (II) > (III) > (IV)',
      '(II) > (I) > (III) > (IV)',
      '(I) > (III) > (II) > (IV)',
      '(II) > (III) > (I) > (IV)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: The Ortho Effect in Benzoic Acids**
Any substituent present at the **ortho-position** of benzoic acid (regardless of whether it is electron-withdrawing or electron-donating) increases its acidity relative to benzoic acid and its meta/para isomers.
- Steric hindrance from the bulky ortho-substituent forces the $-\\text{COOH}$ group out of coplanarity with the benzene ring.
- This inhibits the resonance donation of the benzene ring into the carbonyl carbon (**Steric Inhibition of Resonance / SIR**), allowing the negative charge of the carboxylate ion ($-\\text{COO}^-$) to remain deeply stabilized by the two electronegative oxygen atoms.
- In addition, the $-\\text{NO}_2$ group exerts a powerful electron-withdrawing inductive effect ($-I$) at close proximity.
- Consequently, **(I) ortho-Nitrobenzoic acid is the STRONGEST acid** ($pK_a = 2.17$).

**Step 2: Compare para- vs meta-nitrobenzoic acid**
- **(II) para-Nitrobenzoic acid**:
  The $-\\text{NO}_2$ group is at the para-position and withdraws electron density through BOTH strong resonance ($-M$) and inductive ($-I$) effects, stabilizing the carboxylate anion ($pK_a = 3.44$).
- **(III) meta-Nitrobenzoic acid**:
  At the meta-position, the mesomeric ($-M$) effect CANNOT operate! It withdraws electrons strictly through the inductive ($-I$) effect ($pK_a = 3.45$).
  Since $-M$ operates at para, para-nitrobenzoic acid is stronger than meta: (II) > (III).

**Step 3: Benzoic acid**
- **(IV) Benzoic acid**: Lacks any electron-withdrawing nitro group ($pK_a = 4.20$).

**Final Order**:
$$\\mathbf{(I) > (II) > (III) > (IV)}$$`,
    hints: [
      'Ortho-substituted benzoic acids are stronger than meta and para isomers due to the ortho effect.',
      '$-M$ operates at ortho and para positions, but never at the meta position.'
    ]
  },
  {
    id: 'chem-goc-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-goc-6-structural-isomerism-tautomerism',
    chapterId: 'chem-c11-goc',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `Which one of the following carbonyl compounds exhibits the **highest percentage of enol content** at equilibrium in liquid phase?`,
    options: [
      'Acetylacetone ($\\text{CH}_3\\text{COCH}_2\\text{COCH}_3$)',
      'Acetone ($\\text{CH}_3\\text{COCH}_3$)',
      'Acetaldehyde ($\\text{CH}_3\\text{CHO}$)',
      'Ethyl acetoacetate ($\\text{CH}_3\\text{COCH}_2\\text{COOCH}_2\\text{CH}_3$)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand factors that thermodynamically stabilize the enol tautomer**
Normally, simple monocarbonyls (like acetone or acetaldehyde) exist predominantly in the keto form ($> 99.9\\%$ keto) because the $\\text{C}=\\text{O}$ bond is much stronger than a $\\text{C}=\\text{C}$ bond.
However, enol content increases dramatically when the enol tautomer gains special stabilization via:
1. **Extended conjugation** of $\\text{C}=\\text{C}$ with a second carbonyl group.
2. **Intramolecular Hydrogen Bonding** forming a stable 6-membered chelate ring.
3. Quasi-aromatic delocalization.

**Step 2: Compare $\\beta$-dicarbonyl systems**
1. **Acetylacetone ($\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{CO}-\\text{CH}_3$)**:
   The enol form is:
   $$\\text{CH}_3-\\text{C(OH)}=\\text{CH}-\\text{C}(=\\text{O})-\\text{CH}_3$$
   - The enol contains an $\\alpha,\\beta$-unsaturated conjugated system.
   - The enolic $-\\text{OH}$ hydrogen forms a very strong **intramolecular hydrogen bond** with the carbonyl oxygen, completing a planar, stable **6-membered pseudo-aromatic ring**.
   - As a result, acetylacetone has an exceptionally high **enol content of $\\sim 76\\%$** in liquid phase (and $> 90\\%$ in gas phase!).

2. **Ethyl acetoacetate (EAA)**:
   Also a $\\beta$-dicarbonyl, but the ester oxygen cross-conjugates with the ester carbonyl, reducing its electron deficiency and lowering the enol content to only $\\sim 8\\%$.

3. **Acetone and Acetaldehyde**: Enol content is negligible ($< 0.001\\%$).

Thus, Acetylacetone possesses the highest enol percentage.`,
    hints: [
      'Look for a $\\beta$-diketone that forms an intramolecularly hydrogen-bonded 6-membered ring.',
      'Esters have lower enol content than pure ketones due to cross-conjugation of the ester oxygen.'
    ]
  },
  {
    id: 'chem-goc-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-goc-2-electronic-effects',
    chapterId: 'chem-c11-goc',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    text: `The **heat of hydrogenation** ($\\Delta H_{\\text{hydro}}$) is lowest (least exothermic) for which of the following isomeric alkenes?`,
    options: [
      '2,3-Dimethylbut-2-ene',
      '2-Methylbut-2-ene',
      'trans-But-2-ene',
      'But-1-ene'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Relationship between alkene stability and heat of hydrogenation**
Hydrogenation of an alkene converts it into the corresponding alkane, releasing heat:
$$\\text{Alkene} + \\text{H}_2 \\xrightarrow{\\text{Pt/Pd/Ni}} \\text{Alkane} + \\Delta H_{\\text{hydro}}$$
Since the product alkane lies at a constant energy reference, a more stable alkene starts at a lower initial potential energy level, releasing **LESS energy** upon hydrogenation:
$$\\text{Heat of Hydrogenation (}\\Delta H_{\\text{hydro}}\\text{)} \\propto \\frac{1}{\\text{Thermodynamic Stability of Alkene}}$$

**Step 2: Determine alkene stability using hyperconjugation (count $\\alpha$-hydrogens)**
1. **2,3-Dimethylbut-2-ene** $[(\\text{CH}_3)_2\\text{C}=\\text{C}(\\text{CH}_3)_2]$:
   - Tetrasubstituted alkene.
   - Four methyl groups directly attached to $sp^2$ carbons $\\implies \\mathbf{12\\,\\alpha\\text{-hydrogens}}$.
   - Maximum hyperconjugative stabilization $\\implies$ **MOST STABLE alkene**.

2. **2-Methylbut-2-ene** $[(\\text{CH}_3)_2\\text{C}=\\text{CH}-\\text{CH}_3]$:
   - Trisubstituted alkene with $6 + 3 = 9\\,\\alpha$-hydrogens.

3. **trans-But-2-ene** $[\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_3]$:
   - Disubstituted alkene with $6\\,\\alpha$-hydrogens.

4. **But-1-ene** $[\\text{CH}_3-\\text{CH}_2-\\text{CH}=\\text{CH}_2]$:
   - Monosubstituted alkene with only $2\\,\\alpha$-hydrogens $\\implies$ LEAST STABLE.

**Step 3: Conclusion**
Because 2,3-dimethylbut-2-ene is the most stable alkene, it possesses the **lowest (least exothermic) heat of hydrogenation** ($-111\\,\\text{kJ/mol}$).`,
    hints: [
      'Heat of hydrogenation is inversely proportional to alkene stability.',
      'Alkene stability increases with the number of $\\alpha$-hydrogens (hyperconjugation).'
    ]
  },
  {
    id: 'chem-goc-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-goc-7-stereoisomerism',
    chapterId: 'chem-c11-goc',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `Tartaric acid ($\\text{HOOC}-\\text{CH(OH)}-\\text{CH(OH)}-\\text{COOH}$) possesses two identical chiral carbon centers. What is the total number of stereoisomers and how many of them are **optically active**?`,
    options: [
      'Total $= 3$ stereoisomers; $2$ are optically active and $1$ is optically inactive (meso)',
      'Total $= 4$ stereoisomers; $4$ are optically active and $0$ are meso',
      'Total $= 3$ stereoisomers; all $3$ are optically active',
      'Total $= 2$ stereoisomers; $1$ is optically active and $1$ is meso'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify chiral carbons and molecular symmetry**
Tartaric acid has the structural formula:
$$\\text{HOOC}-\\overset{*}{\\text{C}}\\text{H(OH)}-\\overset{*}{\\text{C}}\\text{H(OH)}-\\text{COOH}$$
- There are two asymmetric carbon atoms ($n = 2$).
- Both chiral centers have identical substituents: $-\\text{H}, -\\text{OH}, -\\text{COOH}$, and the other $-\\text{CH(OH)COOH}$ fragment.
- Hence, the molecule has identical ends.

**Step 2: Enumerate stereoisomeric configurations**
1. **$(2R, 3R)$-Tartaric acid** and **$(2S, 3S)$-Tartaric acid**:
   - These are non-superimposable mirror images of each other.
   - They have no plane of symmetry or center of inversion.
   - They form a pair of enantiomers: dextrorotatory ($+12^\\circ$) and laevorotatory ($-12^\\circ$).
   - Both are **optically active** ($2$ optically active isomers).

2. **$(2R, 3S)$-Tartaric acid** (identical to $(2S, 3R)$):
   - In the Fischer projection, both $-\\text{OH}$ groups lie on the same side.
   - The molecule possesses a horizontal **internal plane of symmetry** ($\sigma$).
   - The upper half of the molecule rotates plane-polarized light in one direction, while the lower half rotates it in the opposite direction by an exactly equal magnitude (**internal compensation**).
   - This isomer is **meso-tartaric acid**, which is **optically inactive**.

**Step 3: Total count**
- Total stereoisomers $= 2 + 1 = \\mathbf{3}$.
- Optically active isomers $= \\mathbf{2}$ (the $d$- and $l$-enantiomers).
- Optically inactive meso isomer $= \\mathbf{1}$.`,
    hints: [
      'Apply formula for molecules with identical ends: $a = 2^{n-1} = 2^1 = 2$ optically active forms, and $m = 2^{(n/2)-1} = 2^0 = 1$ meso form.',
      'The meso form has an internal plane of symmetry that cancels optical rotation.'
    ]
  }
];
