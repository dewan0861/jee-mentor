import { Question } from '@/types';

export const aldehydesKetonesQuestions: Question[] = [
  {
    id: 'chem-ald-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-ald-4-oxidation-diagnostic-tests',
    chapterId: 'chem-c12-aldehydes-ketones',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `Which one of the following carbonyl compounds will **FAIL** to produce a yellow precipitate of iodoform ($\\text{CHI}_3$) when warmed with iodine in aqueous sodium hydroxide ($\\text{I}_2 / \\text{NaOH}$)?`,
    options: [
      'Pentan-3-one ($\\text{CH}_3\\text{CH}_2-\\text{CO}-\\text{CH}_2\\text{CH}_3$)',
      'Pentan-2-one ($\\text{CH}_3-\\text{CO}-\\text{CH}_2\\text{CH}_2\\text{CH}_3$)',
      'Acetophenone ($\\text{C}_6\\text{H}_5-\\text{CO}-\\text{CH}_3$)',
      'Acetaldehyde ($\\text{CH}_3-\\text{CHO}$)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Structural requirement for positive Iodoform Test**
A compound gives a positive iodoform test (yellow precipitate of $\\text{CHI}_3$, MP $119^\\circ\\text{C}$) if and only if it contains either:
1. A **methyl carbonyl group**: $\\mathbf{\\text{CH}_3-\\text{C}=\\text{O}}$ (such as acetaldehyde or a methyl ketone).
2. A **methyl carbinol group**: $\\mathbf{\\text{CH}_3-\\text{CH(OH)}-}$ (which oxidizes in situ via $\\text{NaOI}$ to $\\text{CH}_3-\\text{C}=\\text{O}$).

**Step 2: Examine each candidate compound**
1. **Pentan-3-one** ($\\text{CH}_3\\text{CH}_2-\\text{CO}-\\text{CH}_2\\text{CH}_3$):
   - Symmetrical ketone with two ethyl groups attached to the carbonyl.
   - It possesses **NO methyl carbonyl ($\\text{CH}_3-\\text{C}=\\text{O}$) group**!
   - Therefore, it **FAILS** the iodoform test.

2. **Pentan-2-one** ($\\text{CH}_3-\\text{CO}-\\text{CH}_2\\text{CH}_2\\text{CH}_3$):
   - Contains $\\text{CH}_3-\\text{CO}-$ attached to propyl $\\implies$ Gives yellow $\\text{CHI}_3$ precipitate.
3. **Acetophenone** ($\\text{C}_6\\text{H}_5-\\text{CO}-\\text{CH}_3$):
   - Contains $\\text{CH}_3-\\text{CO}-$ attached to phenyl $\\implies$ Gives yellow $\\text{CHI}_3$ precipitate.
4. **Acetaldehyde** ($\\text{CH}_3-\\text{CHO}$):
   - Contains $\\text{CH}_3-\\text{CO}-$ attached to hydrogen $\\implies$ Gives yellow $\\text{CHI}_3$ precipitate.

Thus, Pentan-3-one does not give the iodoform test.`,
    hints: [
      'The haloform reaction requires a $-\\text{CO}-\\text{CH}_3$ or $-\\text{CH(OH)}-\\text{CH}_3$ group.',
      'Check whether the carbonyl carbon is directly bonded to at least one methyl group.'
    ]
  },
  {
    id: 'chem-ald-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-ald-7-cannizzaro-special-reactions',
    chapterId: 'chem-c12-aldehydes-ketones',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `When an equimolar mixture of benzaldehyde ($\\text{C}_6\\text{H}_5\\text{CHO}$) and formaldehyde ($\\text{HCHO}$) is warmed with concentrated aqueous sodium hydroxide ($50\\%\\,\\text{NaOH}$, Cross-Cannizzaro reaction), the major organic products formed are:`,
    options: [
      'Benzyl alcohol ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH}$) and Sodium formate ($\\text{HCOONa}$)',
      'Sodium benzoate ($\\text{C}_6\\text{H}_5\\text{COONa}$) and Methanol ($\\text{CH}_3\\text{OH}$)',
      'Sodium benzoate and Benzyl alcohol',
      'Sodium formate and Methanol'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Prerequisites for Cannizzaro reaction**
Both benzaldehyde and formaldehyde possess **zero $\\alpha$-hydrogens**.
Under the action of concentrated alkali ($50\\%\\,\\text{NaOH}$), an aldol reaction cannot occur; instead, they undergo a **Cross-Cannizzaro redox reaction**.

**Step 2: Comparison of carbonyl electrophilicity**
- In formaldehyde ($\\text{HCHO}$), the carbonyl carbon is bonded only to two small hydrogen atoms with zero $+I$ or $+M$ electronic donation. It is steric-free and **extremely electrophilic**.
- In benzaldehyde ($\\text{C}_6\\text{H}_5\\text{CHO}$), resonance donation from the aromatic benzene ring ($+M$) reduces the partial positive charge on the carbonyl carbon, making it noticeably less electrophilic.

**Step 3: Mechanism of Cross-Cannizzaro**
1. The hydroxide ion ($\\text{OH}^-$) preferentially and rapidly attacks the more electrophilic carbonyl carbon of **formaldehyde**, forming a dianionic tetrahedral species:
   $$\\text{HCHO} + \\text{OH}^- \\rightleftharpoons \\text{H}_2\\text{C}(\\text{OH})\\text{O}^- \\xrightarrow{\\text{OH}^-} \\text{H}_2\\text{C}(\\text{O}^-)_2$$
2. In the rate-determining step, a hydride ion ($\\text{H}^-$) is transferred from this formaldehyde adduct to the carbonyl carbon of benzaldehyde:
   $$\\text{H}_2\\text{C}(\\text{O}^-)_2 + \\text{C}_6\\text{H}_5\\text{CHO} \\longrightarrow \\text{HCOO}^- + \\text{C}_6\\text{H}_5\\text{CH}_2\\text{O}^-$$
3. Proton exchange yields:
   - **Sodium formate ($\\text{HCOONa}$)** (oxidation product of formaldehyde)
   - **Benzyl alcohol ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH}$)** (reduction product of benzaldehyde).

Formaldehyde is always oxidized, and the other aldehyde is reduced.`,
    hints: [
      'Formaldehyde is much more electrophilic than benzaldehyde, so $\\text{OH}^-$ attacks formaldehyde first.',
      'Hydride is transferred from formaldehyde to benzaldehyde, oxidizing formaldehyde to formate and reducing benzaldehyde to benzyl alcohol.'
    ]
  },
  {
    id: 'chem-ald-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-ald-6-reactions-alpha-hydrogen-aldol',
    chapterId: 'chem-c12-aldehydes-ketones',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `When propan-2-one (acetone) is warmed with barium hydroxide ($\\text{Ba(OH)}_2$) followed by heating with a catalytic crystal of iodine, the major final condensation product is:`,
    options: [
      '4-Methylpent-3-en-2-one (Mesityl oxide)',
      '4-Hydroxy-4-methylpentan-2-one (Diacetone alcohol)',
      'Phorone',
      'Mesitylene'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formation of the Aldol (Diacetone Alcohol)**
Acetone contains active $\\alpha$-hydrogens.
In the presence of mild base ($\\text{Ba(OH)}_2$), an enolate ion is generated from one molecule of acetone:
$$\\text{CH}_3-\\text{CO}-\\text{CH}_3 + \\text{OH}^- \\rightleftharpoons [:\\text{CH}_2-\\text{CO}-\\text{CH}_3]^- + \\text{H}_2\\text{O}$$
The enolate nucleophilically attacks the carbonyl carbon of a second acetone molecule:
$$(\\text{CH}_3)_2\\text{C}=\\text{O} + \\bar{\\text{C}}\\text{H}_2-\\text{CO}-\\text{CH}_3 \\xrightarrow{\\text{H}_2\\text{O}} (\\text{CH}_3)_2\\text{C(OH)}-\\text{CH}_2-\\text{CO}-\\text{CH}_3$$
This intermediate $\\beta$-hydroxy ketone is called **Diacetone alcohol**.

**Step 2: Dehydration upon heating**
Upon heating in the presence of trace acid or iodine catalyst, diacetone alcohol readily undergoes elimination of a water molecule ($-\\text{H}_2\\text{O}$):
$$(\\text{CH}_3)_2\\text{C(OH)}-\\text{CH}_2-\\text{CO}-\\text{CH}_3 \\xrightarrow{\\Delta, \\; -\\text{H}_2\\text{O}} \\mathbf{(\\text{CH}_3)_2\\text{C}=\\text{CH}-\\text{CO}-\\text{CH}_3}$$
The resulting $\\alpha,\\beta$-unsaturated conjugated ketone is **4-Methylpent-3-en-2-one**, commonly known as **Mesityl oxide**.`,
    hints: [
      'Two molecules of acetone undergo aldol condensation to give a $\\beta$-hydroxy ketone.',
      'Heating causes dehydration to form an $\\alpha,\\beta$-unsaturated conjugated ketone known as mesityl oxide.'
    ]
  },
  {
    id: 'chem-ald-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-ald-2-nucleophilic-addition-mechanism',
    chapterId: 'chem-c12-aldehydes-ketones',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `The correct decreasing order of reactivity towards nucleophilic addition of hydrogen cyanide ($\\text{HCN}$) is:
(I) Formaldehyde ($\\text{HCHO}$)
(II) Acetaldehyde ($\\text{CH}_3\\text{CHO}$)
(III) Acetone ($\\text{CH}_3\\text{COCH}_3$)
(IV) Acetophenone ($\\text{C}_6\\text{H}_5\\text{COCH}_3$)`,
    options: [
      '(I) > (II) > (III) > (IV)',
      '(IV) > (III) > (II) > (I)',
      '(I) > (III) > (II) > (IV)',
      '(II) > (I) > (III) > (IV)'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Electronic and Steric Factors in Nucleophilic Addition**
Reactivity towards nucleophilic attack on the carbonyl carbon depends on:
1. **Magnitude of partial positive charge ($\delta+$) on the carbonyl carbon**: Electron-donating groups ($+I, +M$) disperse the positive charge and reduce reactivity.
2. **Steric hindrance in the tetrahedral transition state**: Bulkier substituents crowding the carbonyl carbon increase activation energy and reduce reactivity.

**Step 2: Evaluate the substrates**
1. **(I) Formaldehyde ($\\text{HCHO}$)**:
   - Two small hydrogen atoms. Zero $+I$ or $+M$ dispersal; minimum steric congestion $\\implies$ **Highest reactivity**.
2. **(II) Acetaldehyde ($\\text{CH}_3\\text{CHO}$)**:
   - One methyl group ($+I$) disperses positive charge slightly; small steric increase.
3. **(III) Acetone ($\\text{CH}_3\\text{COCH}_3$)**:
   - Two methyl groups ($+I$) disperse positive charge significantly from both sides; greater steric hindrance.
4. **(IV) Acetophenone ($\\text{C}_6\\text{H}_5\\text{COCH}_3$)**:
   - Phenyl ring donates electron density into the carbonyl carbon via strong **resonance ($+M$)**, drastically decreasing its electrophilicity; large bulky phenyl group creates severe steric hindrance $\\implies$ **Lowest reactivity**.

**Decreasing Order**:
$$\\mathbf{(I) > (II) > (III) > (IV)}$$`,
    hints: [
      'Aldehydes are more reactive than ketones due to less steric hindrance and less $+I$ donation.',
      'Aromatic rings donate electron density by resonance, strongly reducing carbonyl electrophilicity.'
    ]
  },
  {
    id: 'chem-ald-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-ald-3-ammonia-derivatives-condensation',
    chapterId: 'chem-c12-aldehydes-ketones',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `Although semicarbazide ($\\text{H}_2\\text{N}^a-\\text{NH}-\\text{C}(=\\text{O})-\\text{N}^b\\text{H}_2$) contains two distinct amino groups ($\\text{N}^a$ and $\\text{N}^b$), only the hydrazine nitrogen ($\\text{N}^a$) acts as the nucleophile in forming semicarbazones with aldehydes and ketones. Why?`,
    options: [
      'The lone pair on $\\text{N}^b$ is delocalized into the carbonyl group via resonance, whereas the lone pair on $\\text{N}^a$ is localized and available.',
      '$\\text{N}^b$ is more electronegative than $\\text{N}^a$.',
      'Steric hindrance around $\\text{N}^b$ prevents nucleophilic attack.',
      '$\\text{N}^a$ is protonated in acidic medium while $\\text{N}^b$ is not.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Structural analysis of semicarbazide**
$$\\mathbf{\\text{H}_2\\overset{\\bullet\\bullet}{\\text{N}}^a-\\text{NH}}-\\mathbf{\\text{C}(=\\text{O})-\\overset{\\bullet\\bullet}{\\text{N}}^b\\text{H}_2}$$

**Step 2: Resonance delocalization of nitrogen $\\text{N}^b$**
The $\\text{N}^b\\text{H}_2$ group is part of an **amide functional group** ($-\\text{CONH}_2$):
- The lone pair of electrons on $\\text{N}^b$ is directly conjugated with the adjacent carbonyl group:
  $$\\text{O}=\\text{C}-\\overset{\\bullet\\bullet}{\\text{N}}^b\\text{H}_2 \\longleftrightarrow \\bar{\\text{O}}-\\text{C}=\\overset{+}{\\text{N}}^b\\text{H}_2$$
- Due to this continuous resonance delocalization, the lone pair on $\\text{N}^b$ is not localized on nitrogen; its electron density is strongly shifted towards oxygen.
- Consequently, $\\text{N}^b$ has virtually **zero nucleophilic character**.

**Step 3: Availability of nitrogen $\\text{N}^a$**
- The terminal $\\text{N}^a\\text{H}_2$ group is attached to an $sp^3$ hybridized secondary amine nitrogen ($-\\text{NH}-$), isolated from the carbonyl group.
- Its lone pair cannot conjugate with $\\text{C}=\\text{O}$.
- Therefore, the lone pair on $\\text{N}^a$ remains **fully localized** and strongly nucleophilic, easily attacking the carbonyl group of aldehydes and ketones to yield semicarbazones.`,
    hints: [
      'Look at the functional group around $\\text{N}^b$: it is an amide.',
      'Amide nitrogen lone pairs are resonance-delocalized into the carbonyl group, destroying nucleophilicity.'
    ]
  },
  {
    id: 'chem-ald-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-ald-5-reduction-to-hydrocarbons',
    chapterId: 'chem-c12-aldehydes-ketones',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `To reduce the carbonyl group in 4-oxopentanoic acid ($\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{CH}_2-\\text{COOH}$) selectively to a methylene group ($-\\text{CH}_2-$) without altering or destroying the molecule, which reducing method is strictly preferred?`,
    options: [
      'Wolff-Kishner reduction ($\\text{NH}_2\\text{NH}_2 / \\text{KOH}$, ethylene glycol, $\\Delta$)',
      'Clemmensen reduction ($\\text{Zn-Hg} / \\text{conc. HCl}$)',
      'Catalytic hydrogenation with $\\text{H}_2 / \\text{Pd-C}$',
      '$\\text{NaBH}_4$ in ethanol'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Analyze functional groups in the substrate**
Substrate: $\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{CH}_2-\\text{COOH}$ (4-oxopentanoic acid / levulinic acid).
- Contains a ketone group ($-\\text{CO}-$) to be reduced to $-\\text{CH}_2-$.
- Contains a carboxylic acid group ($-\\text{COOH}$).

**Step 2: Evaluate Clemmensen reduction ($\\text{Zn-Hg} / \\text{conc. HCl}$)**
Clemmensen reduction operates in **hot concentrated $\\text{HCl}$ (strongly acidic)**.
Under these severe acidic conditions, the carboxylic acid and intermediate enols can undergo complex acid-catalyzed lactonization, polymerization, and side reactions. More critically, if any acid-sensitive functionality is present in the substrate (like acetals, ethers, or tertiary $-\\text{OH}$ groups), Clemmensen destroys it.

**Step 3: Evaluate Wolff-Kishner reduction ($\\text{NH}_2\\text{NH}_2 / \\text{KOH}$)**
Wolff-Kishner reduction operates in **strongly basic medium ($\\text{KOH}$ in high-boiling ethylene glycol at $453-473\\,\\text{K}$)**:
- In basic medium, the carboxylic acid simply deprotonates cleanly to form a stable, unreactive carboxylate anion ($-\\text{COO}^-$).
- The carboxylate anion is completely inert and immune to reduction or side reactions.
- Hydrazine selectively attacks the ketone to form a hydrazone, which undergoes base-catalyzed proton transfers and expulsion of nitrogen gas ($\\text{N}_2$):
  $$\\text{CH}_3-\\text{CO}-\\text{CH}_2\\text{CH}_2\\text{COO}^- \\xrightarrow{\\text{NH}_2\\text{NH}_2, \\; \\text{KOH}} \\text{CH}_3-\\text{CH}_2-\\text{CH}_2\\text{CH}_2\\text{COO}^- + \\text{N}_2 \\uparrow$$
- Subsequent acidification yields **pentanoic acid (valeric acid)** cleanly.

Therefore, the **Wolff-Kishner reduction** is strictly preferred for substrates containing acidic or acid-sensitive groups.`,
    hints: [
      'Clemmensen reduction operates in strong acid (conc. HCl).',
      'Wolff-Kishner reduction operates in basic medium where $-\\text{COOH}$ forms a protected, stable carboxylate salt.'
    ]
  }
];
