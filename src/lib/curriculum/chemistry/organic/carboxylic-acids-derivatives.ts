import { Chapter } from '@/types';

export const carboxylicAcidsDerivativesChapter: Chapter = {
  id: 'chem-c12-carboxylic-acids-derivatives',
  subject: 'chemistry',
  classLevel: 12,
  name: 'Carboxylic Acids and Their Derivatives',
  unit: 'Organic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Carboxylic Acid Relative Acidity}: \\text{CCl}_3\\text{COOH} > \\text{CHCl}_2\\text{COOH} > \\text{CH}_2\\text{ClCOOH} > \\text{HCOOH} > \\text{C}_6\\text{H}_5\\text{COOH} > \\text{CH}_3\\text{COOH}',
    '\\text{Hell-Volhard-Zelinsky (HVZ)}: R-\\text{CH}_2-\\text{COOH} + \\text{X}_2 \\xrightarrow{\\text{Red P}} R-\\text{CH(X)}-\\text{COOH} \\quad (\\text{requires } \\alpha\\text{-hydrogen})',
    '\\text{Thermal Decarboxylation (}\\beta\\text{-keto acids)}: R-\\text{CO}-\\text{CH}_2-\\text{COOH} \\xrightarrow{50-100^\\circ\\text{C}} R-\\text{CO}-\\text{CH}_3 + \\text{CO}_2 \\uparrow \\; (\\text{via 6-membered cyclic TS})',
    '\\text{Hunsdiecker Reaction}: R-\\text{COOAg} + \\text{Br}_2 \\xrightarrow{\\text{CCl}_4, \\; \\Delta} R-\\text{Br} + \\text{AgBr} \\downarrow + \\text{CO}_2 \\uparrow',
    '\\text{Nucleophilic Acyl Substitution (}\\text{S}_\\text{N}\\text{Ac) Reactivity}: R\\text{COCl} > (R\\text{CO})_2\\text{O} > R\\text{COOR}\' > R\\text{CONH}_2',
    '\\text{Fischer Esterification Mechanism}: R-\\text{COOH} + R\'\\text{-}^{18}\\text{OH} \\xrightleftharpoons{\\text{H}^+} R-\\text{CO-}^{18}\\text{OR}\' + \\text{H}_2\\text{O} \\quad (\\text{cleaves acid C-OH, not alcohol C-O})',
    '\\text{Hofmann Bromamide Degradation}: R-\\text{CONH}_2 + \\text{Br}_2 + 4\\text{NaOH} \\longrightarrow R-\\text{NH}_2 + \\text{Na}_2\\text{CO}_3 + 2\\text{NaBr} + 2\\text{H}_2\\text{O} \\; (\\text{yields } 1^\\circ \\text{ amine with } n-1 \\text{ carbons})'
  ],
  topics: [
    {
      id: 'chem-cad-1-structure-acidity-substituent-effects',
      name: '12.10.1 Structure, Acidity & Substituent Influences in Carboxylic Acids',
      description: 'Resonance stabilization of planar carboxylate anion (-COO-) where negative charge is equally delocalized across two equivalent electronegative oxygen atoms; comparison with alkoxide and phenoxide ions; factors influencing pKa: electron-withdrawing groups (-I, -M) stabilize carboxylate ion and increase acidity, electron-donating groups (+I, +M) decrease acidity; inductive distance effect (alpha > beta > gamma substitution); Formic acid vs Acetic acid; Ortho-effect in substituted benzoic acids (steric inhibition of resonance SIR makes ortho-substituted benzoic acids stronger acids than meta/para isomers and benzoic acid itself); Sodium bicarbonate test (carboxylic acids liberate CO2 effervescence from NaHCO3, distinguishing them from phenols except picric acid).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-cad-2-synthesis-methods',
      name: '12.10.2 Laboratory & Industrial Syntheses of Carboxylic Acids',
      description: 'Oxidation of primary alcohols and aldehydes with Jones reagent (CrO3/H2SO4) or alkaline KMnO4; Oxidation of alkylbenzenes with hot alkaline KMnO4 to benzoic acid (regardless of alkyl chain length, provided at least one benzylic hydrogen is present; tert-butylbenzene does not oxidize); Hydrolysis of nitriles and amides in acidic or alkaline media; Reaction of Grignard reagents with solid carbon dioxide (dry ice) followed by acidification (valuable method for lengthening carbon chain by one carbon); Hydrolysis of gem-trihalides and trichloromethylarenes.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-cad-3-oh-cleavage-esterification-chlorides',
      name: '12.10.3 Reactions Involving C-OH Cleavage: Esterification & Acid Chlorides',
      description: 'Fischer esterification: acid-catalyzed reversible condensation of carboxylic acids with alcohols; isotopic oxygen-18 labeling proving that the oxygen atom of water originates from the carboxylic acid C-OH and NOT from the alcohol; factors affecting rate: steric hindrance in acid and alcohol (reactivity: MeOH > 1° > 2° > 3°); Formation of acid anhydrides by heating with P2O5; Formation of acyl chlorides using PCl5, PCl3, and SOCl2 (thionyl chloride preferred due to gaseous SO2 and HCl byproducts); Reaction with ammonia forming ammonium carboxylates, which upon strong heating eliminate water to yield primary amides.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-cad-4-decarboxylations-hvz',
      name: '12.10.4 Decarboxylation Reactions & The Hell-Volhard-Zelinsky (HVZ) Reaction',
      description: 'Soda-lime decarboxylation (heating sodium carboxylate with NaOH + CaO in 3:1 ratio, releasing Na2CO3 and shortening carbon chain by one); Kolbe electrolytic decarboxylation; Thermal decarboxylation of beta-keto acids (occurs smoothly at 50-100°C through a 6-membered concerted cyclic transition state expelling CO2 and generating an enol that tautomerizes to ketone); Decarboxylation of gem-dicarboxylic acids (malonic acid derivatives); Hunsdiecker reaction (refluxing silver carboxylate with Br2 in CCl4 yields alkyl bromide with one less carbon via free radicals); Hell-Volhard-Zelinsky (HVZ) reaction: alpha-halogenation of carboxylic acids containing alpha-hydrogens using Br2 or Cl2 in presence of catalytic red phosphorus; synthetic versatility of alpha-halo acids.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-cad-5-acyl-derivatives-snac-reactivity',
      name: '12.10.5 Carboxylic Acid Derivatives: Nucleophilic Acyl Substitution (SNAc)',
      description: 'Structure of acyl derivatives: Acyl chlorides, Acid anhydrides, Esters, and Amides; Mechanism of Nucleophilic Acyl Substitution (SNAc): addition of nucleophile forming tetrahedral intermediate followed by elimination of leaving group; Reactivity hierarchy: RCOCl > (RCO)2O > RCOOR\' > RCONH2; underlying factors: (1) leaving group basicity (Cl- is weakest base, best leaving group; NH2- is strongest base, poorest leaving group), (2) resonance stabilization of starting material (amide has highest resonance donation from nitrogen lone pair, diminishing carbonyl electrophilicity); interconversion of acid derivatives (more reactive derivative readily converts into less reactive derivative).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-cad-6-amides-hofmann-bromamide',
      name: '12.10.6 Amides & The Hofmann Bromamide Degradation Reaction',
      description: 'Physical properties of amides: high melting points and water solubility due to strong intermolecular hydrogen bonding; Amphoteric nature of amides (weak bases, very weak acids); Hydrolysis to carboxylic acids; Dehydration with P2O5 to nitriles; Hofmann Bromamide Degradation: treatment of primary amides with bromine and aqueous/ethanolic NaOH yields a primary amine containing EXACTLY ONE LESS CARBON atom; Detailed mechanism: (1) base-induced bromination of amide forming N-bromoamide, (2) base deprotonation forming bromamide anion, (3) concerted 1,2-alkyl migration with simultaneous loss of bromide generating alkyl isocyanate (R-N=C=O) intermediate with RETENTION of configuration at migrating center, (4) alkaline hydrolysis of isocyanate expelling Na2CO3 to yield pure 1° amine.',
      estimatedHours: 5,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Carboxylic acids exist as stable CYCLIC DIMERS in the vapor phase and in non-polar solvents (like benzene) through two strong intermolecular hydrogen bonds: $\\text{O}-\\text{H}\\cdots\\text{O}=\\text{C}$. This dimerization doubles their apparent molecular weight and elevates their boiling points significantly above alcohols of comparable mass.',
    'Isotopic labeling in Fischer esterification: When acetic acid is reacted with methanol enriched with oxygen-18 ($\\text{CH}_3{}^{18}\\text{OH}$), the oxygen-18 label appears EXCLUSIVELY in the methyl acetate ester ($\\text{CH}_3\\text{CO}-{}^{18}\\text{OCH}_3$) and none in water. This proves that the $\\text{C}-\\text{OH}$ bond of the carboxylic acid is cleaved, NOT the $\\text{O}-\\text{H}$ bond of the acid.',
    'The Hell-Volhard-Zelinsky (HVZ) reaction operates ONLY on carboxylic acids possessing at least one $\\alpha$-hydrogen. Formic acid ($\\text{HCOOH}$), benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$), and pivalic acid ($(\\text{CH}_3)_3\\text{C}-\\text{COOH}$) DO NOT undergo the HVZ reaction.',
    'In the Hofmann Bromamide Degradation, the migration of the alkyl/aryl group from the carbonyl carbon to the electron-deficient nitrogen atom occurs with COMPLETE RETENTION OF CONFIGURATION. If an optically active chiral amide is used, the resulting amine retains $100\\%$ of its optical stereochemistry.',
    '$\\beta$-Keto acids undergo thermal decarboxylation with extraordinary ease (often below $100^\\circ\\text{C}$) via a 6-membered cyclic transition state involving intramolecular hydrogen bonding: $\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{COOH} \\xrightarrow{\\Delta} \\text{CH}_3-\\text{CO}-\\text{CH}_3 + \\text{CO}_2$.'
  ],
  commonTraps: [
    'Substituent effect on benzoic acid vs aliphatic acid: Benzoic acid ($pK_a = 4.20$) is a STRONGER acid than acetic acid ($pK_a = 4.76$) because the $sp^2$ hybridized phenyl carbon is more electronegative than the $sp^3$ methyl carbon. However, formic acid ($pK_a = 3.75$) is stronger than benzoic acid!',
    'Applying HVZ with red phosphorus to prepare $\\beta$-halo acids: The HVZ reaction is strictly REGIOSELECTIVE for the $\\alpha$-position. It can NEVER introduce a halogen at the $\\beta$- or $\\gamma$-position.',
    'Predicting carbon count in Hofmann degradation: The product amine always has ONE LESS carbon than the starting amide! Propanamide ($\\text{CH}_3\\text{CH}_2\\text{CONH}_2$, 3 carbons) gives ethylamine ($\\text{CH}_3\\text{CH}_2\\text{NH}_2$, 2 carbons), NOT propylamine.',
    'Reactivity of acid derivatives in nucleophilic acyl substitution: Amides are the LEAST reactive towards nucleophiles because the nitrogen lone pair strongly donates into the carbonyl by resonance, reducing the electrophilicity of the carbonyl carbon.'
  ]
};
