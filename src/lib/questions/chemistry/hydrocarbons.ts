import { Question } from '@/types';

export const hydrocarbonsQuestions: Question[] = [
  {
    id: 'chem-hyd-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-hyd-4-alkenes-oxidation-ozonolysis',
    chapterId: 'chem-c11-hydrocarbons',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `An alkene $X$ (molecular formula $\\text{C}_4\\text{H}_8$) upon reductive ozonolysis with $\\text{O}_3$ followed by $\\text{Zn}/\\text{H}_2\\text{O}$ produces an equimolar mixture of acetone ($(\\text{CH}_3)_2\\text{C}=\\text{O}$) and formaldehyde ($\\text{HCHO}$). The IUPAC name of alkene $X$ is:`,
    options: [
      '2-Methylprop-1-ene (Isobutylene)',
      'But-1-ene',
      'cis-But-2-ene',
      'trans-But-2-ene'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand reductive ozonolysis cleavage**
Reductive ozonolysis ($\\text{O}_3$ with $\\text{Zn}/\\text{H}_2\\text{O}$) cleanly cleaves the $\\text{C}=\\text{C}$ double bond and caps each carbon atom with a carbonyl oxygen ($=\\text{O}$):
$$R_1 R_2\\text{C}=\\text{C} R_3 R_4 \\xrightarrow{\\text{O}_3, \\; \\text{Zn}/\\text{H}_2\\text{O}} R_1 R_2\\text{C}=\\text{O} + \\text{O}=\\text{C} R_3 R_4$$

**Step 2: Reconstruct the alkene by removing the carbonyl oxygens and joining the fragments**
The observed products are:
1. Acetone: $(\\text{CH}_3)_2\\text{C}=\\text{O}$
2. Formaldehyde: $\\text{O}=\\text{CH}_2$

Align the carbonyl groups facing each other:
$$(\\text{CH}_3)_2\\text{C}=\\mathbf{O} + \\mathbf{O}=\\text{CH}_2$$
Remove both oxygen atoms and unite the carbons with a double bond:
$$(\\text{CH}_3)_2\\text{C}=\\text{CH}_2$$

**Step 3: IUPAC Naming**
- Longest carbon chain containing the double bond has 3 carbons (propene).
- Methyl substituent is at carbon-2.
- IUPAC Name: **2-Methylprop-1-ene** (Isobutylene).`,
    hints: [
      'Remove the carbonyl oxygen atoms from both product fragments and reconnect the remaining carbons with a double bond.',
      'Acetone plus formaldehyde gives a branched 4-carbon alkene.'
    ]
  },
  {
    id: 'chem-hyd-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-hyd-3-alkenes-electrophilic-additions',
    chapterId: 'chem-c11-hydrocarbons',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `When prop-1-ene is treated with hydrogen bromide ($\\text{HBr}$) in the presence of benzoyl peroxide ($(\\text{PhCOO})_2$), the major product formed and the type of reaction mechanism are respectively:`,
    options: [
      '1-Bromopropane via Free Radical Addition',
      '2-Bromopropane via Electrophilic Addition',
      '1-Bromopropane via Electrophilic Addition',
      '2-Bromopropane via Free Radical Addition'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Role of organic peroxide (Peroxide Effect / Kharasch Effect)**
In the presence of light or heat, benzoyl peroxide undergoes homolytic cleavage to generate alkoxy/phenyl free radicals:
$$(\\text{C}_6\\text{H}_5\\text{COO})_2 \\xrightarrow{\\Delta} 2\\,\\text{C}_6\\text{H}_5\\text{COO}^\\bullet \\longrightarrow 2\\,\\text{C}_6\\text{H}_5^\\bullet + 2\\,\\text{CO}_2$$
The phenyl radical abstracts a hydrogen atom from $\\text{HBr}$ to produce a bromine radical:
$$\\text{C}_6\\text{H}_5^\\bullet + \\text{H}-\\text{Br} \\longrightarrow \\text{C}_6\\text{H}_6 + \\text{Br}^\\bullet$$

**Step 2: Addition of bromine radical to prop-1-ene**
The $\\text{Br}^\\bullet$ radical adds to the alkene to produce the more stable carbon radical:
- If $\\text{Br}^\\bullet$ adds to C-1: generates a **$2^\\circ$ free radical** ($\\text{CH}_3-\\overset{\\bullet}{\\text{C}}\\text{H}-\\text{CH}_2\\text{Br}$, stabilized by hyperconjugation and inductive effect).
- If $\\text{Br}^\\bullet$ adds to C-2: generates a less stable **$1^\\circ$ free radical** ($\\text{CH}_3-\\text{CH(Br)}-\\overset{\\bullet}{\\text{C}}\\text{H}_2$).

Because the secondary radical is much more stable, addition occurs selectively at C-1.

**Step 3: Chain propagation and final product**
$$\\text{CH}_3-\\overset{\\bullet}{\\text{C}}\\text{H}-\\text{CH}_2\\text{Br} + \\text{H}-\\text{Br} \\longrightarrow \\text{CH}_3-\\text{CH}_2-\\text{CH}_2\\text{Br} \\; (\\mathbf{\\text{1-Bromopropane}}) + \\text{Br}^\\bullet$$
This Anti-Markovnikov addition proceeds strictly through a **Free Radical Addition mechanism**.`,
    hints: [
      'Peroxide initiates a free radical chain reaction.',
      'The bromine radical attacks first, generating the more stable secondary free radical intermediate.'
    ]
  },
  {
    id: 'chem-hyd-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-hyd-5-alkynes-reactions',
    chapterId: 'chem-c11-hydrocarbons',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `But-2-yne is separately subjected to the following two reduction conditions:
$$\\text{Reaction (A): } \\text{CH}_3-\\text{C}\\equiv\\text{C}-\\text{CH}_3 + \\text{H}_2 \\xrightarrow{\\text{Pd}/\\text{CaCO}_3, \\; \\text{quinoline}} \\mathbf{P}$$
$$\\text{Reaction (B): } \\text{CH}_3-\\text{C}\\equiv\\text{C}-\\text{CH}_3 \\xrightarrow{\\text{Na} / \\text{liquid } \\text{NH}_3} \\mathbf{Q}$$
The major organic products $\\mathbf{P}$ and $\\mathbf{Q}$ are respectively:`,
    options: [
      '$\\mathbf{P} = \\text{cis-But-2-ene}, \\quad \\mathbf{Q} = \\text{trans-But-2-ene}$',
      '$\\mathbf{P} = \\text{trans-But-2-ene}, \\quad \\mathbf{Q} = \\text{cis-But-2-ene}$',
      'Both $\\mathbf{P}$ and $\\mathbf{Q}$ are butane',
      'Both $\\mathbf{P}$ and $\\mathbf{Q}$ are cis-but-2-ene'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Reaction (A) with Lindlar's Catalyst**
- Reagents: $\\text{H}_2$ over palladium supported on calcium carbonate, partially poisoned with quinoline or lead acetate (Lindlar's catalyst).
- The catalytic poisoning prevents over-reduction to the saturated alkane.
- Both hydrogen atoms are delivered simultaneously from the metal catalyst surface to the **same face** of the alkyne triple bond (**syn-addition**).
- Therefore, the two methyl groups end up on the same side of the double bond:
  $$\\mathbf{P} = \\mathbf{\\text{cis-But-2-ene}}$$

**Step 2: Reaction (B) with Birch Reduction**
- Reagents: Sodium metal dissolving in liquid ammonia ($\\text{Na}/\\text{liq. } \\text{NH}_3$).
- The active reducing agent is the solvated electron ($e^-_{\\text{am}}$).
- The reaction proceeds through a radical-anion intermediate where the two methyl groups adopt an anti-coplanar geometry to minimize mutual steric and electrostatic repulsion.
- Successive proton transfers from ammonia yield strictly **anti-addition**:
  $$\\mathbf{Q} = \\mathbf{\\text{trans-But-2-ene}}$$

Thus, $\\mathbf{P}$ is cis-but-2-ene and $\\mathbf{Q}$ is trans-but-2-ene.`,
    hints: [
      'Lindlar\'s catalyst forces syn-addition (cis alkene).',
      'Birch reduction ($\text{Na}/\\text{liquid NH}_3$) forces anti-addition (trans alkene).'
    ]
  },
  {
    id: 'chem-hyd-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-hyd-7-friedel-crafts-directing-effects',
    chapterId: 'chem-c11-hydrocarbons',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `Treatment of benzene with 1-chloropropane in the presence of anhydrous aluminum chloride ($\\text{AlCl}_3$) at room temperature yields which major product?`,
    options: [
      'Isopropylbenzene (Cumene)',
      'n-Propylbenzene',
      '1,2-Diphenylpropane',
      'Chlorobenzene'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Generation of the primary carbocation**
The Lewis acid $\\text{AlCl}_3$ abstracts the chloride ion from 1-chloropropane:
$$\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{Cl} + \\text{AlCl}_3 \\longrightarrow [\\text{CH}_3-\\text{CH}_2-\\overset{+}{\\text{C}}\\text{H}_2] \\; (1^\\circ\\text{ carbocation}) + \\text{AlCl}_4^-$$

**Step 2: Carbocation rearrangement via 1,2-hydride shift**
The primary ($1^\\circ$) propyl carbocation is unstable and has only two $\\alpha$-hydrogens.
It undergoes a rapid, spontaneous **1,2-hydride shift** ($\\sim \\text{H}^-$) to generate the far more stable secondary ($2^\\circ$) isopropyl carbocation:
$$\\text{CH}_3-\\overset{\\text{H}}{\\underset{|}{\\text{C}}}\\text{H}-\\overset{+}{\\text{C}}\\text{H}_2 \\xrightarrow{1,2-\\text{H}^-\\text{ shift}} \\text{CH}_3-\\overset{+}{\\text{C}}\\text{H}-\\text{CH}_3 \\; (2^\\circ\\text{ carbocation, } 6\\,\\alpha\\text{-H})$$

**Step 3: Electrophilic attack on the benzene ring**
The more stable isopropyl carbocation acts as the active electrophile, attacking the benzene ring:
$$\\text{C}_6\\text{H}_6 + (\\text{CH}_3)_2\\overset{+}{\\text{C}}\\text{H} \\longrightarrow \\text{C}_6\\text{H}_5-\\text{CH}(\\text{CH}_3)_2 + \\text{H}^+$$
The major product is **Isopropylbenzene (Cumene)** ($\sim 65-70\\%$ yield), while n-propylbenzene is formed only as a minor product ($\sim 30-35\\%$).`,
    hints: [
      'Alkyl carbocations readily rearrange to more stable forms.',
      'Primary propyl carbocation undergoes a 1,2-hydride shift to form the secondary isopropyl carbocation.'
    ]
  },
  {
    id: 'chem-hyd-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-hyd-7-friedel-crafts-directing-effects',
    chapterId: 'chem-c11-hydrocarbons',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `Why is chlorobenzene **less reactive than benzene** towards electrophilic aromatic substitution, yet directs incoming electrophiles **predominantly to the ortho and para positions**?`,
    options: [
      'Strong $-I$ effect deactivates the ring overall, but $+M$ resonance donation stabilizes the Wheland intermediate at ortho/para positions.',
      'Strong $+I$ effect activates the ring, but $-M$ effect deactivates meta positions.',
      'Chlorine is a strong $\\sigma$-donor and $\\pi$-acceptor.',
      'Steric hindrance blocks electrophilic attack at the meta position.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Deactivating nature of halogens (Overall Reactivity)**
Chlorine is strongly electronegative ($EN = 3.16$) and exerts a powerful **electron-withdrawing inductive effect ($-I$)**.
- This $-I$ effect withdraws electron density from the entire $\\sigma$-framework of the benzene ring.
- Lower electron density on the aromatic ring makes it less nucleophilic towards an incoming electrophile ($E^+$).
- Consequently, the activation energy for arenium ion formation is higher than that for benzene $\\implies$ **Chlorobenzene reacts more SLOWLY than benzene (deactivated)**.

**Step 2: Ortho/Para Directing Nature (Regioselectivity)**
When an electrophile attacks:
1. **At Ortho or Para position**:
   The resulting arenium ion (Wheland intermediate) contains a canonical structure in which the positive charge resides directly on the carbon bearing the chlorine atom:
   $$\\left[ -\\overset{+}{\\text{C}}(\\text{Cl})- \\longleftrightarrow -\\text{C}(=\\overset{+}{\\text{Cl}})- \\right]$$
   Chlorine donates its non-bonding lone pair via **resonance ($+M$)**, forming an extra canonical structure where **EVERY ATOM HAS A COMPLETE OCTET**.
2. **At Meta position**:
   The positive charge never falls on the chlorine-bearing carbon, so the stabilizing $+M$ donation can never occur.

Because the arenium intermediate for ortho and para attack has lower energy due to this octet-complete contributor, substitution occurs **predominantly at ortho and para positions**.`,
    hints: [
      'Inductive effect ($-I$) controls overall reactivity (deactivating).',
      'Resonance effect ($+M$) controls regiochemistry (ortho/para directing by octet completion).'
    ]
  },
  {
    id: 'chem-hyd-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-hyd-4-alkenes-oxidation-ozonolysis',
    chapterId: 'chem-c11-hydrocarbons',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `When 3,3-dimethylbut-1-ene ($(\\text{CH}_3)_3\\text{C}-\\text{CH}=\\text{CH}_2$) is reacted with:
(I) $\\text{B}_2\\text{H}_6 / \\text{THF}$ followed by alkaline $\\text{H}_2\\text{O}_2 / \\text{OH}^-$
(II) $\\text{Hg(OAc)}_2 / \\text{H}_2\\text{O}$ followed by $\\text{NaBH}_4$
(III) Dilute $\\text{H}_2\\text{SO}_4 / \\text{H}_2\\text{O}$
the major alcohol products formed in (I), (II), and (III) are respectively:`,
    options: [
      '(I) 3,3-Dimethylbutan-1-ol, \\; (II) 3,3-Dimethylbutan-2-ol, \\; (III) 2,3-Dimethylbutan-2-ol',
      '(I) 3,3-Dimethylbutan-2-ol, \\; (II) 3,3-Dimethylbutan-1-ol, \\; (III) 2,3-Dimethylbutan-2-ol',
      '(I) 2,3-Dimethylbutan-2-ol, \\; (II) 3,3-Dimethylbutan-2-ol, \\; (III) 3,3-Dimethylbutan-1-ol',
      'All three reactions yield 2,3-dimethylbutan-2-ol due to rearrangement'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Reaction (I) - Hydroboration-Oxidation**
- Hydroboration proceeds through a concerted 4-membered cyclic transition state.
- **NO free carbocation is formed**, so no skeletal rearrangement is possible.
- Boron adds to the less hindered terminal carbon, and upon oxidation with $\\text{H}_2\\text{O}_2 / \\text{OH}^-$, it is replaced stereospecifically by $-\\text{OH}$.
- Regiochemistry: **Anti-Markovnikov hydration**:
  $$\\mathbf{\\text{(I) } = (\\text{CH}_3)_3\\text{C}-\\text{CH}_2-\\text{CH}_2\\text{OH} \\; (\\text{3,3-Dimethylbutan-1-ol})}$$

**Step 2: Reaction (II) - Oxymercuration-Demercuration**
- Electrophilic addition of $\\text{Hg(OAc)}^+$ produces a bridged, cyclic **mercurinium ion intermediate**.
- Because the positive charge is locked in the 3-membered ring, **NO carbocation rearrangement occurs**.
- Water attacks the more substituted carbon (C-2) with Markovnikov regiochemistry.
- Demercuration with $\\text{NaBH}_4$ replaces $\\text{HgOAc}$ with $\\text{H}$:
  $$\\mathbf{\\text{(II) } = (\\text{CH}_3)_3\\text{C}-\\text{CH(OH)}-\\text{CH}_3 \\; (\\text{3,3-Dimethylbutan-2-ol})}$$

**Step 3: Reaction (III) - Acid-Catalyzed Hydration**
- Protonation of the terminal double bond produces a $2^\\circ$ carbocation:
  $$(\\text{CH}_3)_3\\text{C}-\\overset{+}{\\text{C}}\\text{H}-\\text{CH}_3$$
- This $2^\\circ$ carbocation undergoes a spontaneous **1,2-methyl shift** ($\\sim \\text{CH}_3^-$) to form a far more stable $3^\\circ$ carbocation:
  $$(\\text{CH}_3)_2\\overset{+}{\\text{C}}-\\text{CH}(\\text{CH}_3)-\\text{CH}_3$$
- Attack of $\\text{H}_2\\text{O}$ followed by deprotonation yields the rearranged tertiary alcohol:
  $$\\mathbf{\\text{(III) } = (\\text{CH}_3)_2\\text{C(OH)}-\\text{CH}(\\text{CH}_3)-\\text{CH}_3 \\; (\\text{2,3-Dimethylbutan-2-ol})}$$

Thus, the sequence of products is:
3,3-dimethylbutan-1-ol, 3,3-dimethylbutan-2-ol, and 2,3-dimethylbutan-2-ol.`,
    hints: [
      'Hydroboration-oxidation gives anti-Markovnikov alcohol without rearrangement.',
      'Oxymercuration-demercuration gives Markovnikov alcohol without rearrangement.',
      'Acid-catalyzed hydration forms a free carbocation that undergoes a 1,2-methyl shift.'
    ]
  }
];
