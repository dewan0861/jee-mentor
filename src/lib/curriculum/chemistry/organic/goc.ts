import { Chapter } from '@/types';

export const gocChapter: Chapter = {
  id: 'chem-c11-goc',
  subject: 'chemistry',
  classLevel: 11,
  name: 'General Organic Chemistry (GOC)',
  unit: 'Organic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    "\\text{H\\\"uckel's Rule for Aromaticity}: \\text{Planar, cyclic, fully conjugated system with } (4n + 2)\\pi \\text{ electrons } (n = 0, 1, 2, \\dots)",
    "\\text{Anti-aromaticity Criterion}: \\text{Planar, cyclic, fully conjugated system with } 4n\\pi \\text{ electrons } (n = 1, 2, \\dots)",
    '\\text{Hyperconjugation Structures}: \\text{Number of hyperconjugative forms} = \\text{Number of } \\alpha\\text{-hydrogens} + 1',
    '\\text{Carbocation Stability}: \\text{Aromatic} > \\text{Tropylium} > \\text{Cyclopropenyl} > 3^\\circ > 2^\\circ > 1^\\circ > \\text{Methyl} > \\text{Vinyl}',
    '\\text{Carbanion Stability (Hybridization)}: sp \\; (50\\% \\text{ s-character}) > sp^2 \\; (33.3\\%) > sp^3 \\; (25\\%)',
    '\\text{Acidic Strength Relation}: K_a \\uparrow, \\; pK_a \\downarrow \\implies \\text{Acidic Strength} \\propto \\text{Stability of conjugate base}',
    '\\text{Basicity in Aqueous Medium (Methyl)}: 2^\\circ > 1^\\circ > 3^\\circ > \\text{NH}_3 \\implies (\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_3\\text{N} > \\text{NH}_3',
    '\\text{Basicity in Aqueous Medium (Ethyl)}: 2^\\circ > 3^\\circ > 1^\\circ > \\text{NH}_3 \\implies (\\text{C}_2\\text{H}_5)_2\\text{NH} > (\\text{C}_2\\text{H}_5)_3\\text{N} > \\text{C}_2\\text{H}_5\\text{NH}_2 > \\text{NH}_3',
    '\\text{Number of Optical Isomers}: 2^n \\quad (n = \\text{number of non-equivalent chiral centers})'
  ],
  topics: [
    {
      id: 'chem-goc-1-iupac-nomenclature',
      name: '11.6.1 Systematic IUPAC Nomenclature of Polyfunctional Compounds',
      description: 'IUPAC rules for naming branched hydrocarbons; priority hierarchy of functional groups: -COOH > -SO3H > anhydride > ester > acid halide > amide > nitrile > aldehyde > ketone > alcohol > thiol > amine > ether > alkene > alkyne > halo/nitro/alkyl; principal functional group selection; numbering of principal carbon chain; naming aromatic derivatives and bridgehead/spiro compounds.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-goc-2-electronic-effects',
      name: '11.6.2 Electronic Displacements: Inductive, Resonance & Hyperconjugation',
      description: 'Inductive effect (+I and -I): permanent polarization along sigma framework, distance decay; Resonance / Mesomeric effect (+M and -M): pi-electron delocalization, resonance hybrid, rules for drawing valid canonical structures and judging relative resonance contributor stability; Hyperconjugation (no-bond resonance): sigma(C-H) to empty p or pi* overlap, heat of hydrogenation of alkenes (more substituted = lower heat of hydrogenation = more stable); Electromeric effect (+E and -E).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-goc-3-aromaticity-huckel',
      name: "11.6.3 Aromaticity, Anti-Aromaticity & Hückel's Rule",
      description: "Requirements for aromaticity: cyclic, planar, completely conjugated with (4n+2) pi-electrons; stability hierarchy: Aromatic > Non-aromatic > Anti-aromatic; benzenoid vs non-benzenoid aromatic compounds (azulene, ferrocene); aromatic cations and anions: tropylium cation (7-membered ring, 6 pi e-), cyclopropenyl cation (3-membered ring, 2 pi e-), cyclopentadienyl anion (5-membered ring, 6 pi e-); non-aromaticity of cyclooctatetraene (COT, 8 pi e-, adopts tub conformation to escape anti-aromatic destabilization).",
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-goc-4-reaction-intermediates',
      name: '11.6.4 Reactive Intermediates: Carbocations, Carbanions & Free Radicals',
      description: 'Homolytic vs heterolytic covalent fission; Carbocations: sp2 hybridized, planar, electron-deficient (6 e-), stability orders, rearrangements via 1,2-hydride shift, 1,2-methyl shift, ring expansion (4->5, 5->6) and ring contraction; Carbanions: sp3 pyramidal (or sp2 if conjugated), 8 e-, stability dictated by -I/-M effects and s-character; Carbon Free Radicals: sp2 planar, 7 e-, paramagnetic, stability parallels carbocations; transient intermediates: Carbenes (:CH2 singlet vs triplet) and Nitrenes.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-goc-5-acid-base-strengths',
      name: '11.6.5 Relative Acidic & Basic Strengths',
      description: 'Acidity of carboxylic acids: role of electron-withdrawing groups (-I, -M) in stabilizing carboxylate anion; Ortho effect in substituted benzoic acids (ortho-substituted benzoic acid is stronger than meta/para due to steric inhibition of resonance SIR); Phenols acidity: comparison with alcohols, nitrophenols (picric acid is extremely acidic pKa = 0.38); Basicity of amines: inductive vs steric vs hydration effects in water; aromatic amines (aniline is weakly basic due to lone pair resonance delocalization into benzene ring); ortho effect in aniline (ortho-substituted aniline is weaker base).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-goc-6-structural-isomerism-tautomerism',
      name: '11.6.6 Structural Isomerism & Tautomerism',
      description: 'Chain, position, functional, metamerism, ring-chain isomerism; Tautomerism: dynamic equilibrium between functional isomers differing in proton and pi-electron positions; Keto-enol tautomerism: mechanism (acid and base catalyzed), requirements (must possess alpha-hydrogen); factors stabilizing enol content: intramolecular hydrogen bonding, extended conjugation, and aromaticity (e.g. phenol exists ~100% in enol form, acetylacetone CH3COCH2COCH3 has ~76% enol in gas phase due to quasi-aromatic 6-membered H-bonded ring).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-goc-7-stereoisomerism',
      name: '11.6.7 Stereoisomerism: Geometrical & Optical Isomerism',
      description: 'Geometrical isomerism: restricted rotation across C=C, cycloalkanes, and oximes; cis/trans and E/Z notation via Cahn-Ingold-Prelog (CIP) priority rules; dipole moments, boiling points, and melting points of geometrical isomers; Optical isomerism: chirality, asymmetric carbon, plane of symmetry, center of inversion; enantiomers (non-superimposable mirror images, identical physical properties except optical rotation, opposite sign [+]/[-]); diastereomers (non-mirror images, distinct physical properties); meso compounds (optically inactive by internal compensation); racemic mixture (optically inactive by external compensation); R/S descriptor assignment on Fischer projections; Newman and Sawhorse conformational projections of ethane and n-butane (staggered vs eclipsed vs gauche).',
      estimatedHours: 5,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'The heat of hydrogenation ($\\Delta H_{\\text{hydro}}$) of an alkene is INVERSELY proportional to its thermodynamic stability: $\\text{Stability} \\propto \\frac{1}{\\Delta H_{\\text{hydro}}}$. Trans-alkenes are more stable than cis-alkenes and have lower heats of hydrogenation.',
    'Ortho-substituted benzoic acids (like o-toluic acid, o-chlorobenzoic acid, o-nitrobenzoic acid) are STRONGER acids than benzoic acid and their meta/para isomers regardless of whether the substituent is electron-donating or electron-withdrawing! This is due to the **ortho effect** (steric hindrance forces the $-\\text{COOH}$ out of the benzene plane, preventing cross-conjugation and localizing the negative charge strictly on carboxylate oxygens).',
    'Cyclooctatetraene (COT, $\\text{C}_8\\text{H}_8$) is NON-AROMATIC (NOT anti-aromatic). Although it has $8\\pi$ electrons, it escapes anti-aromatic destabilization by adopting a non-planar "tub-shaped" conformation.',
    'Basicity of alkylamines in aqueous solution is a combined interplay of Inductive effect ($+I$), Steric hindrance, and Hydration energy of the conjugate ammonium cation: For methyl group: $2^\\circ > 1^\\circ > 3^\\circ > \\text{NH}_3$; For ethyl group: $2^\\circ > 3^\\circ > 1^\\circ > \\text{NH}_3$. In gaseous phase or non-polar solvents, it follows purely $+I$: $3^\\circ > 2^\\circ > 1^\\circ > \\text{NH}_3$.',
    'Phenol is much more acidic than ethanol because the phenoxide ion is resonance-stabilized over the aromatic ring, whereas the ethoxide ion has no resonance and is destabilized by the $+I$ ethyl group.'
  ],
  commonTraps: [
    'Assuming higher hyperconjugation always means carbocation is more stable than resonance: Resonance stabilization ALWAYS takes precedence over hyperconjugation! An allyl or benzyl carbocation is generally more stable than an alkyl carbocation with 6 $\\alpha$-hydrogens.',
    'Confusing meso compounds with racemic mixtures: A meso compound is a SINGLE achiral compound that is optically inactive due to **internal compensation** (internal plane of symmetry). A racemic mixture is a $1:1$ equimolar mixture of two enantiomers that is optically inactive due to **external compensation**.',
    'Applying Huckel\'s rule to non-planar systems: Huckel\'s $(4n+2)\\pi$ rule applies ONLY to systems that are strictly PLANAR and FULLY CONJUGATED. If any ring atom is $sp^3$ hybridized or the ring twists out of planarity, the molecule is simply non-aromatic.',
    'Assigning CIP priority in E/Z: Priorities are determined by **atomic number of the directly attached atom**, NOT by the total molecular mass of the substituent! For example, $-\\text{CH}_2\\text{Cl}$ has higher priority than $-\\text{C(CH}_3)_3$ because Cl ($Z=17$) beats C ($Z=6$) at the second point of difference.'
  ]
};
