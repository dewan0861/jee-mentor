import { Question } from '@/types';

export const carboxylicAcidsDerivativesQuestions: Question[] = [
  {
    id: 'chem-cad-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-cad-4-decarboxylations-hvz',
    chapterId: 'chem-c12-carboxylic-acids-derivatives',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `Which one of the following carboxylic acids will **FAIL** to undergo $\\alpha$-bromination via the **Hell-Volhard-Zelinsky (HVZ)** reaction when treated with bromine in the presence of red phosphorus ($\\text{Br}_2 / \\text{Red P}$)?`,
    options: [
      '2,2-Dimethylpropanoic acid (Pivalic acid, $(\\text{CH}_3)_3\\text{C}-\\text{COOH}$)',
      'Propanoic acid ($\\text{CH}_3\\text{CH}_2\\text{COOH}$)',
      'Ethanoic acid ($\\text{CH}_3\\text{COOH}$)',
      '2-Methylpropanoic acid ($(\\text{CH}_3)_2\\text{CH}-\\text{COOH}$)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the mechanism and requirement of the HVZ reaction**
In the Hell-Volhard-Zelinsky (HVZ) reaction:
$$R-\\text{CH}_2-\\text{COOH} + \\text{X}_2 \\xrightarrow{\\text{Red P}} R-\\text{CH(X)}-\\text{COOH} + \\text{HX} \\quad (\\text{where } \\text{X} = \\text{Cl, Br})$$
- The reaction proceeds via in situ conversion of a small fraction of the carboxylic acid to acyl halide ($R-\\text{CH}_2-\\text{COX}$).
- The acyl halide undergoes keto-enol tautomerization to form an **enediol/enol intermediate** containing a $\\text{C}=\\text{C}$ double bond.
- This enolization is possible **ONLY IF the $\\alpha$-carbon possesses at least one ionizable $\\alpha$-hydrogen**.

**Step 2: Examine the candidates for $\\alpha$-hydrogens**
1. **2,2-Dimethylpropanoic acid** $[(\\text{CH}_3)_3\\mathbf{C}-\\text{COOH}]$:
   - The $\\alpha$-carbon is a quaternary carbon bonded to three methyl groups and one carboxyl group.
   - It possesses **ZERO $\\alpha$-hydrogens**!
   - Because it cannot form an enol intermediate, it **CANNOT undergo the HVZ reaction**.

2. **Propanoic acid** ($\\text{CH}_3\\mathbf{CH}_2\\text{COOH}$): Has two $\\alpha$-hydrogens $\\implies$ Gives 2-bromopropanoic acid.
3. **Ethanoic acid** ($\\mathbf{CH}_3\\text{COOH}$): Has three $\\alpha$-hydrogens $\\implies$ Gives bromoethanoic acid.
4. **2-Methylpropanoic acid** $[(\\text{CH}_3)_2\\mathbf{CH}\\text{COOH}]$: Has one $\\alpha$-hydrogen $\\implies$ Gives 2-bromo-2-methylpropanoic acid.

Thus, 2,2-dimethylpropanoic acid fails to undergo the HVZ reaction.`,
    hints: [
      'The HVZ reaction requires at least one $\\alpha$-hydrogen to form an enol intermediate.',
      'Check which acid has a quaternary $\\alpha$-carbon with no attached hydrogens.'
    ]
  },
  {
    id: 'chem-cad-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-cad-4-decarboxylations-hvz',
    chapterId: 'chem-c12-carboxylic-acids-derivatives',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `When acetoacetic acid ($\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{COOH}$, a $\\beta$-keto acid) is gently warmed ($50-100^\\circ\\text{C}$), it spontaneously undergoes **decarboxylation** to yield which major product?`,
    options: [
      'Propan-2-one (Acetone) and $\\text{CO}_2$',
      'Propanoic acid and $\\text{CO}$',
      'Acetaldehyde and acetic acid',
      'Butan-2-one and $\\text{CO}_2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Special reactivity of $\\beta$-keto acids**
Carboxylic acids normally resist thermal decarboxylation and require extreme heating with harsh reagents (like soda-lime at $300^\\circ\\text{C}$).
However, **$\\beta$-keto acids** (acids containing a carbonyl group at the $\\beta$-position relative to $-\\text{COOH}$) are uniquely unstable and decarboxylate very smoothly upon gentle warming.

**Step 2: Six-membered cyclic transition state mechanism**
The acidic proton of the carboxyl group forms an intramolecular hydrogen bond with the $\\beta$-carbonyl oxygen:
$$\\begin{array}{rcc}
& \\text{O} \\cdots \\mathbf{H}-\\text{O} & \\\\
& / \\qquad \\quad \\backslash & \\\\
\\text{CH}_3-\\text{C} \\qquad \\quad \\text{C}=\\text{O} & \\\\
& \\backslash \\qquad \\quad / & \\\\
& \\text{CH}_2 &
\\end{array}$$
A concerted rearrangement of three electron pairs occurs across this planar **6-membered cyclic transition state**:
1. The $\\text{O}-\\text{H}$ bond cleaves, transferring $\\text{H}^+$ to the $\\beta$-carbonyl oxygen.
2. The $\\text{C}-\\text{C}$ bond between $\\alpha$ and carboxyl carbon breaks, expelling a molecule of carbon dioxide ($\\mathbf{\\text{CO}_2}$).
3. The remaining fragment initially forms the **enol tautomer** of acetone:
   $$\\text{CH}_3-\\text{C(OH)}=\\text{CH}_2 + \\text{CO}_2 \\uparrow$$

**Step 3: Rapid keto-enol tautomerization**
The enol tautomer rapidly and quantitatively isomerizes to the more stable ketone form:
$$\\text{CH}_3-\\text{C(OH)}=\\text{CH}_2 \\rightleftharpoons \\mathbf{\\text{CH}_3-\\text{CO}-\\text{CH}_3} \\; (\\mathbf{\\text{Acetone}})$$

Hence, the product is propan-2-one (acetone) and carbon dioxide.`,
    hints: [
      '$\\beta$-Keto acids decarboxylate readily via a 6-membered cyclic transition state.',
      'Loss of $\\text{CO}_2$ from acetoacetic acid leaves an enol that tautomerizes to acetone.'
    ]
  },
  {
    id: 'chem-cad-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-cad-6-amides-hofmann-bromamide',
    chapterId: 'chem-c12-carboxylic-acids-derivatives',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `In the Hofmann Bromamide Degradation of an optically active primary amide:
$$R^*-\\text{CONH}_2 + \\text{Br}_2 + 4\\text{NaOH} \\longrightarrow R^*-\\text{NH}_2 + \\text{Na}_2\\text{CO}_3 + 2\\text{NaBr} + 2\\text{H}_2\\text{O}$$
What is the key intermediate formed prior to hydrolysis, and what happens to the stereochemical configuration of the chiral migrating group $R^*$?`,
    options: [
      'Alkyl isocyanate ($R^*-\\text{N}=\\text{C}=\\text{O}$) with $100\\%$ retention of configuration',
      'Carbocation ($R^{*+}$) with complete racemization',
      'Nitrene ($R^*-\\text{CO}-\\ddot{\\text{N}}$) with inversion of configuration',
      'Acyl isocyanate with retention of configuration'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Stepwise mechanism of Hofmann Bromamide Degradation**
1. **N-Bromination**:
   $$R-\\text{CONH}_2 + \\text{Br}_2 + \\text{OH}^- \\longrightarrow R-\\text{CONHBr} + \\text{H}_2\\text{O} + \\text{Br}^-$$
2. **Deprotonation**:
   Base removes the acidic proton from nitrogen, forming the bromamide anion $[R-\\text{CONBr}]^-$.
3. **Concerted 1,2-rearrangement (Rate-determining step)**:
   As the bromide ion departs from the electron-rich nitrogen, the alkyl/aryl group $R$ migrates with its bonding electron pair from the carbonyl carbon directly to the electron-deficient nitrogen atom:
   $$[R-\\text{C}(=\\text{O})-\\bar{\\text{N}}-\\text{Br}]^- \\xrightarrow{-\\text{Br}^-} \\mathbf{R-\\text{N}=\\text{C}=\\text{O}} \\; (\\mathbf{\\text{Alkyl isocyanate}})$$

**Step 2: Stereochemical outcome of the 1,2-migration**
- Because the migration of $R^*$ to nitrogen and the departure of $\\text{Br}^-$ occur simultaneously in a **concerted intramolecular step**, the chiral migrating group NEVER detaches as a free carbocation or free carbanion.
- The bond to the chiral center is transferred from the front face directly to the adjacent nitrogen atom.
- Consequently, the migration proceeds with **COMPLETE RETENTION OF CONFIGURATION** ($100\\%$ retention).

**Step 3: Alkaline hydrolysis of the isocyanate**
$$R^*-\\text{N}=\\text{C}=\\text{O} + 2\\text{OH}^- \\longrightarrow R^*-\\text{NH}_2 + \\text{CO}_3^{2-}$$
The resulting primary amine retains the exact stereochemical configuration of the parent chiral center.`,
    hints: [
      'The key intermediate formed by 1,2-migration is an isocyanate ($R-\\text{N}=\\text{C}=\\text{O}$).',
      'The migration is concerted and intramolecular, preserving stereochemical configuration.'
    ]
  },
  {
    id: 'chem-cad-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-cad-5-acyl-derivatives-snac-reactivity',
    chapterId: 'chem-c12-carboxylic-acids-derivatives',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The correct decreasing order of reactivity towards nucleophilic acyl substitution ($\\text{S}_\\text{N}\\text{Ac}$, such as alkaline hydrolysis) for the following carboxylic acid derivatives is:
(I) Acetyl chloride ($\\text{CH}_3\\text{COCl}$)
(II) Acetic anhydride ($(\\text{CH}_3\\text{CO})_2\\text{O}$)
(III) Ethyl acetate ($\\text{CH}_3\\text{COOCH}_2\\text{CH}_3$)
(IV) Acetamide ($\\text{CH}_3\\text{CONH}_2$)`,
    options: [
      '(I) > (II) > (III) > (IV)',
      '(IV) > (III) > (II) > (I)',
      '(I) > (III) > (II) > (IV)',
      '(II) > (I) > (III) > (IV)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Factors controlling $\\text{S}_\\text{N}\\text{Ac}$ reactivity**
Nucleophilic acyl substitution proceeds via addition of a nucleophile to the carbonyl carbon followed by expulsion of the leaving group ($L^-$):
$$R-\\text{COL} + \\text{Nu}^- \\rightleftharpoons R-\\text{C(O}^-)(\\text{Nu})(\\text{L}) \\longrightarrow R-\\text{CONu} + \\text{L}^-$$
Reactivity is governed by two synergistic factors:
1. **Leaving group ability (Basicity of $L^-$)**: Weaker bases are superior leaving groups:
   $$\\text{Cl}^- \\; (pK_a \\text{ of } \\text{HCl} = -7) > \\text{CH}_3\\text{COO}^- \\; (pK_a = 4.76) > \\text{EtO}^- \\; (pK_a = 16) > \\text{NH}_2^- \\; (pK_a = 38)$$
2. **Resonance donation into the carbonyl carbon**: Stronger $+M$ resonance from the substituent decreases the electrophilicity ($\delta+$) of the carbonyl carbon:
   - $-\\text{Cl}$: Weakest $+M$ ($3p-2p$ poor overlap); strong $-I$ activates carbonyl.
   - $-\\text{NH}_2$: Strongest $+M$ (nitrogen lone pair donates heavily, diminishing carbonyl electrophilicity).

**Step 2: Sequence of reactivity**
- **(I) Acyl chloride**: Best leaving group ($\\text{Cl}^-$), highly electrophilic carbonyl $\\implies$ **Most reactive** (hydrolyzes vigorously with water at room temperature).
- **(II) Acid anhydride**: Good leaving group (carboxylate ion).
- **(III) Ester**: Moderate leaving group (alkoxide $\\text{RO}^-$).
- **(IV) Amide**: Poorest leaving group ($\\text{NH}_2^-$), high resonance stabilization $\\implies$ **Least reactive** (requires prolonged refluxing with strong acid or base).

**Decreasing Order of Reactivity**:
$$\\mathbf{(I) > (II) > (III) > (IV)}$$`,
    hints: [
      'Reactivity in $\\text{S}_\\text{N}\\text{Ac}$ depends on leaving group ability (weaker base = better leaving group).',
      'Chlorides are best leaving groups; amides are worst leaving groups.'
    ]
  },
  {
    id: 'chem-cad-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-cad-3-oh-cleavage-esterification-chlorides',
    chapterId: 'chem-c12-carboxylic-acids-derivatives',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: 'When propanoic acid ($\\text{CH}_3\\text{CH}_2\\text{COOH}$) is refluxed with oxygen-18 labeled methanol ($\\text{CH}_3{}^{18}\\text{OH}$) in the presence of trace concentrated $\\text{H}_2\\text{SO}_4$, the isotopic $^{18}\\text{O}$ label appears:',
    options: [
      'Exclusively in the methyl propanoate ester and none in water',
      'Exclusively in the water byproduct',
      'Equally distributed between ester and water',
      'In the propanoic acid starting material'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Mechanism of Fischer Esterification**
Fischer esterification proceeds via the following acid-catalyzed steps:
1. Protonation of the carbonyl oxygen of propanoic acid:
   $$\\text{CH}_3\\text{CH}_2-\\text{C}(=\\text{O})-\\text{OH} + \\text{H}^+ \\rightleftharpoons \\text{CH}_3\\text{CH}_2-\\overset{+}{\\text{C}}(\\text{OH})-\\text{OH}$$
2. Nucleophilic attack by the labeled alcohol ($\\text{CH}_3{}^{18}\\text{OH}$):
   $$\\text{CH}_3\\text{CH}_2-\\overset{+}{\\text{C}}(\\text{OH})_2 + \\text{CH}_3{}^{18}\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{CH}_2-\\text{C}(\\text{OH})_2-{}^{18}\\overset{+}{\\text{O}}(\\text{H})\\text{CH}_3$$
3. Proton transfer from oxygen-18 to one of the carboxylic $-\\text{OH}$ groups:
   $$\\text{CH}_3\\text{CH}_2-\\text{C}(\\text{OH})(\\overset{+}{\\text{O}}\\text{H}_2)-{}^{18}\\text{OCH}_3$$
4. Elimination of neutral water ($\\text{H}_2\\text{O}$):
   The leaving water molecule contains ordinary oxygen ($^{16}\\text{O}$) from the carboxylic acid!
   $$\\text{CH}_3\\text{CH}_2-\\text{C}(\\text{OH})(\\overset{+}{\\text{O}}\\text{H}_2)-{}^{18}\\text{OCH}_3 \\xrightarrow{-\\text{H}_2\\text{O}} \\mathbf{\\text{CH}_3\\text{CH}_2-\\text{CO-}^{18}\\text{OCH}_3} + \\text{H}^+$$

**Step 2: Conclusion**
The oxygen-18 isotope remains bonded to the methyl group and resides **exclusively in the methyl propanoate ester** ($\\text{CH}_3\\text{CH}_2\\text{CO-}^{18}\\text{OCH}_3$), proving that the $\\text{C}-\\text{OH}$ bond of the acid is broken, NOT the $\\text{C}-\\text{O}$ bond of the alcohol.`,
    hints: [
      'The nucleophilic alcohol attacks the carbonyl with its labeled oxygen.',
      'Water is eliminated from the carboxylic acid $-\\text{OH}$ groups, retaining the $^{18}\\text{O}$ in the ester.'
    ]
  },
  {
    id: 'chem-cad-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-cad-1-structure-acidity-substituent-effects',
    chapterId: 'chem-c12-carboxylic-acids-derivatives',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2020,
    text: `The correct decreasing order of acidic strength ($K_a$) for the following carboxylic acids is:
(I) Trichloroacetic acid ($\\text{CCl}_3\\text{COOH}$)
(II) Formic acid ($\\text{HCOOH}$)
(III) Benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$)
(IV) Acetic acid ($\\text{CH}_3\\text{COOH}$)`,
    options: [
      '(I) > (II) > (III) > (IV)',
      '(I) > (III) > (II) > (IV)',
      '(II) > (I) > (III) > (IV)',
      '(I) > (IV) > (III) > (II)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Electronic factors governing carboxylic acid acidity**
Acidity depends on the stability of the conjugate carboxylate anion ($-\\text{COO}^-$):
- Electron-withdrawing groups ($-I, -M$) disperse the negative charge, stabilizing the anion and increasing acidity.
- Electron-donating groups ($+I, +M$) intensify the negative charge, destabilizing the anion and decreasing acidity.

**Step 2: Analyze each acid**
1. **(I) Trichloroacetic acid ($\\text{CCl}_3\\text{COOH}$)**:
   - Three strongly electronegative chlorine atoms exert a massive $-I$ inductive pull right at the $\\alpha$-carbon.
   - Extremely strong acid: $pK_a = 0.65$ ($K_a = 2.2 \\times 10^{-1}$).
   - Far stronger than any unsubstituted monocarboxylic acid $\\implies$ **Highest acidity**.

2. **(II) Formic acid ($\\text{HCOOH}$)**:
   - Contains a hydrogen atom attached to $-\\text{COOH}$ with zero inductive donation: $pK_a = 3.75$ ($K_a = 1.77 \\times 10^{-4}$).

3. **(III) Benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$)**:
   - Phenyl carbon attached to $-\\text{COOH}$ is $sp^2$ hybridized, exerting a weak electron-withdrawing inductive effect ($-I$) relative to $sp^3$ alkyl: $pK_a = 4.20$ ($K_a = 6.3 \\times 10^{-5}$).
   - Stronger than acetic acid, but weaker than formic acid due to $+M$ electron donation from the benzene ring into the carbonyl group.

4. **(IV) Acetic acid ($\\text{CH}_3\\text{COOH}$)**:
   - The methyl group ($-\\text{CH}_3$) is an electron-donating alkyl group ($+I$) that pushes electron density towards the carboxylate group, destabilizing the acetate ion: $pK_a = 4.76$ ($K_a = 1.75 \\times 10^{-5}$) $\\implies$ **Lowest acidity**.

**Decreasing Order of Acidity**:
$$\\mathbf{(I) > (II) > (III) > (IV)}$$`,
    hints: [
      'Trichloroacetic acid is strongly acidic due to three $-I$ chlorine atoms ($pK_a = 0.65$).',
      'Formic acid ($pK_a = 3.75$) is stronger than benzoic acid ($pK_a = 4.20$), which is stronger than acetic acid ($pK_a = 4.76$).'
    ]
  }
];
