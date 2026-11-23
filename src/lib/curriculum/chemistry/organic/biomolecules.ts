import { Chapter } from '@/types';

export const biomoleculesChapter: Chapter = {
  id: 'chem-c12-biomolecules',
  subject: 'chemistry',
  classLevel: 12,
  name: 'Biomolecules',
  unit: 'Organic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Isoelectric Point (Amino Acid)}: pI = \\frac{pK_{a1} + pK_{a2}}{2} \\quad (\\text{pH where net electrical charge is zero})',
    '\\text{Sucrose Hydrolysis (Inversion)}: \\text{C}_{12}\\text{H}_{22}\\text{O}_{11} \\; (+66.5^\\circ) + \\text{H}_2\\text{O} \\xrightarrow{\\text{invertase}} \\text{D-glucose} \\; (+52.7^\\circ) + \\text{D-fructose} \\; (-92.4^\\circ) \\implies [\\alpha]_D = -39.9^\\circ',
    '\\text{Mutarotation Equilibrium}: \\alpha\\text{-D-glucopyranose} \\; (+112^\\circ) \\rightleftharpoons \\text{Equilibrium} \\; (+52.7^\\circ) \\rightleftharpoons \\beta\\text{-D-glucopyranose} \\; (+19^\\circ)',
    '\\text{DNA Complementary Base Pairing}: \\text{Adenine} = \\text{Thymine (2 H-bonds)}; \\quad \\text{Guanine} \\equiv \\text{Cytosine (3 H-bonds)}',
    '\\text{Nucleotide Composition}: \\text{Nucleotide} = \\text{Nitrogenous Base} + \\text{Pentose Sugar} + \\text{Phosphate Group (at } C_5\'\\text{)}',
    '\\text{Phosphodiester Linkage}: 3\', 5\'\\text{-phosphodiester linkage joins successive nucleotide monomers in DNA and RNA}'
  ],
  topics: [
    {
      id: 'chem-bio-1-carbohydrates-open-chain-proofs',
      name: '12.12.1 Carbohydrates: Classification, D/L Notation & Glucose Open-Chain Reactions',
      description: 'Definition of carbohydrates as optically active polyhydroxy aldehydes or ketones; classification: monosaccharides, oligosaccharides, polysaccharides; D- and L- stereochemical configurations referenced to D-(+)-glyceraldehyde; D-Glucose reactions confirming open-chain structure: (1) reduction with HI and red P at 373 K yielding n-hexane proving an unbranched 6-carbon chain, (2) reaction with hydroxylamine yielding oxime and HCN yielding cyanohydrin proving carbonyl group, (3) oxidation with mild bromine water Br2/H2O yielding gluconic acid proving aldehyde group, (4) acetylation with acetic anhydride yielding glucose pentaacetate proving five -OH groups, (5) oxidation with concentrated HNO3 yielding dicarboxylic saccharic acid (glucaric acid) proving terminal primary alcohol.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-bio-2-cyclic-glucose-anomers-mutarotation',
      name: '12.12.2 Cyclic Pyranose/Furanose Rings, Anomers & Mutarotation',
      description: 'Limitations of open-chain structure: failure to form NaHSO3 adduct, negative Schiff’s test, and glucose pentaacetate not reacting with hydroxylamine (proving absence of free -CHO); intramolecular hemiacetal formation between C-1 aldehyde and C-5 hydroxyl group forming 6-membered glucopyranose ring; creation of new chiral center at C-1 generating anomers: alpha-D-glucopyranose (anomeric -OH at C-1 is down/trans to C-5 -CH2OH, [alpha] = +112°) and beta-D-glucopyranose (anomeric -OH is up/cis to C-5 -CH2OH, [alpha] = +19°); phenomenon of Mutarotation (spontaneous change in specific rotation of freshly prepared anomer solution until equilibrium is reached at +52.7°); Haworth projection formulas; D-Fructose furanose cyclic structure.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-bio-3-disaccharides-polysaccharides',
      name: '12.12.3 Disaccharides, Invert Sugar & Polysaccharides',
      description: 'Glycosidic linkage (oxide linkage formed by loss of water between two monosaccharide hemiacetals); Sucrose: non-reducing sugar formed by alpha-D-glucose (C-1) and beta-D-fructose (C-2) through alpha,beta-1,2-glycosidic bond; Inversion of cane sugar (sucrose is dextrorotatory +66.5°, but hydrolysis yields equimolar glucose and strongly laevorotatory fructose -92.4°, reversing net optical rotation to laevorotatory -39.9°); Maltose (reducing, two alpha-D-glucose linked via alpha-1,4); Lactose (reducing, beta-D-galactose C-1 to beta-D-glucose C-4 via beta-1,4); Polysaccharides: Starch (amylose 15-20% water-soluble unbranched alpha-1,4 chain giving blue iodine complex + amylopectin 80-85% water-insoluble branched alpha-1,4 with alpha-1,6 branches); Cellulose (unbranched beta-D-glucose linked by beta-1,4, linear rigid fibers stabilized by intra/intermolecular H-bonding); Glycogen (animal starch, highly branched amylopectin-like).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-bio-4-amino-acids-zwitterion',
      name: '12.12.4 Amino Acids: Classification, Zwitterion & Isoelectric Point',
      description: 'Structure of alpha-amino acids R-CH(NH2)-COOH; 20 natural standard amino acids; optical activity: all natural amino acids have L-configuration and are optically active EXCEPT Glycine (H2N-CH2-COOH is achiral); Essential amino acids (valine, leucine, isoleucine, lysine, methionine, phenylalanine, threonine, tryptophan, histidine, arginine) vs non-essential; Neutral, acidic (aspartic acid, glutamic acid), and basic (lysine, arginine, histidine) amino acids; Dipolar Zwitterion structure (+H3N-CH(R)-COO-); high melting points and water solubility; Isoelectric point (pI): characteristic pH where amino acid has zero net electrical charge and does not migrate in an electric field.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-bio-5-proteins-structure-denaturation',
      name: '12.12.5 Proteins: Peptide Linkage, Hierarchical Structure & Denaturation',
      description: 'Peptide bond (-CO-NH-): planar rigid amide bond with partial double bond character formed by condensation; Primary structure (covalent linear sequence of amino acids from N-terminus to C-terminus); Secondary structure: regular folding of polypeptide backbone stabilized by hydrogen bonds: alpha-helix (intramolecular H-bonding between C=O of residue n and N-H of residue n+4) and beta-pleated sheets; Tertiary structure: overall 3D folding into Fibrous (keratin in hair, myosin in muscle, insoluble in water) and Globular proteins (insulin, albumin, water-soluble); stabilizing forces: disulfide bonds (-S-S- from cysteine), hydrogen bonds, electrostatic salt bridges, van der Waals hydrophobic interactions; Quaternary structure (spatial subunit arrangement e.g. hemoglobin); Denaturation of proteins: disruption of secondary, tertiary, quaternary structures by heat, acid, or urea, precipitating unfolded protein while leaving the PRIMARY structure completely INTACT (coagulation of egg white, curdling of milk).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-bio-6-nucleic-acids-dna-rna',
      name: '12.12.6 Nucleic Acids: Nucleosides, Nucleotides & DNA Double Helix',
      description: 'Chemical composition: Pentose sugar (beta-D-ribose in RNA vs beta-D-2-deoxyribose in DNA lacking oxygen at C-2\'), Phosphoric acid, and Nitrogenous bases: Purines (Adenine A, Guanine G) and Pyrimidines (Cytosine C, Thymine T in DNA, Uracil U in RNA); Nucleoside (base attached to C-1\' of sugar via beta-N-glycosidic bond); Nucleotide (nucleoside esterified with phosphate at C-5\' of sugar); Polynucleotide backbone formed by 3\', 5\'-phosphodiester linkages; Watson-Crick DNA double helix model: two antiparallel polynucleotide strands (5\'->3\' and 3\'->5\') wound in right-handed double helix, complementary base pairing via hydrogen bonds (A=T with two H-bonds, G≡C with three H-bonds); Chargaff’s rules (molar ratio A:T = 1 and G:C = 1); Types of RNA (mRNA, tRNA, rRNA) and protein biosynthesis.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-bio-7-vitamins-classification-deficiency',
      name: '12.12.7 Vitamins: Classification, Biological Functions & Deficiency Diseases',
      description: 'Classification based on solubility: (1) Fat-soluble vitamins: A, D, E, K (stored in liver and adipose tissue, excess causes hypervitaminosis), (2) Water-soluble vitamins: B-complex (B1 thiamine, B2 riboflavin, B6 pyridoxine, B12 cyanocobalamin) and Vitamin C (ascorbic acid); water-soluble vitamins must be supplied regularly in diet because they are readily excreted in urine (exception: Vitamin B12 is stored in the liver); Deficiency diseases: Vitamin A (night blindness, xerophthalmia), Vitamin B1 (beriberi), Vitamin B2 (cheilosis, digestive disorders), Vitamin B6 (convulsions), Vitamin B12 (pernicious anaemia, RBC deficiency), Vitamin C (scurvy, bleeding gums), Vitamin D (rickets in children, osteomalacia in adults), Vitamin E (muscular weakness, sterility), Vitamin K (increased blood clotting time, haemorrhage).',
      estimatedHours: 3,
      isHighWeightage: false
    }
  ],
  ncertPointers: [
    'Glycine ($\\text{H}_2\\text{N}-\\text{CH}_2-\\text{COOH}$) is the ONLY natural $\\alpha$-amino acid that is ACHIRAL and optically inactive, because its $\\alpha$-carbon is bonded to two identical hydrogen atoms. All other 19 natural amino acids are chiral and possess the L-configuration.',
    'Sucrose is a NON-REDUCING sugar because both of its anomeric carbon atoms (C-1 of $\\alpha$-D-glucose and C-2 of $\\beta$-D-fructose) are tied up in the $\\alpha,\\beta-1,2$-glycosidic linkage, leaving no free hemiacetal or hemiketal group to open into a free carbonyl.',
    'Upon denaturation of a protein (by heat, change in pH, or chemical denaturants), the secondary, tertiary, and quaternary structures are completely destroyed, but the **PRIMARY STRUCTURE REMAINS COMPLETELY INTACT** because covalent peptide bonds (amido linkages) are not cleaved under mild denaturing conditions.',
    'Vitamin $\\text{B}_{12}$ (Cyanocobalamin) is a water-soluble vitamin that is UNIQUE because it CAN be stored in the human liver for several years, unlike all other water-soluble vitamins which must be ingested continuously and are excreted in urine.',
    'In DNA, the two strands are complementary and antiparallel ($5\' \\rightarrow 3\'$ and $3\' \\rightarrow 5\'$). Adenine pairs exclusively with Thymine via TWO hydrogen bonds ($\\text{A}=\\text{T}$), and Guanine pairs exclusively with Cytosine via THREE hydrogen bonds ($\\text{G}\\equiv\\text{C}$). Uracil is found ONLY in RNA in place of Thymine.'
  ],
  commonTraps: [
    'Assuming glucose pentaacetate can form an oxime: D-glucose reacts with hydroxylamine to form an oxime because its cyclic hemiacetal ring opens in solution into the free aldehyde. However, glucose pentaacetate CANNOT mutarotate or open its ring because the anomeric $-\\text{OH}$ is locked as an acetate ester; hence it does NOT react with hydroxylamine!',
    'Distinguishing Amylose from Amylopectin: Amylose is water-soluble, unbranched, and consists solely of $\\alpha-1,4$-glycosidic linkages ($15-20\\%$ of starch). Amylopectin is water-insoluble, branched, and possesses $\\alpha-1,4$ linkages in the main chain and $\\alpha-1,6$ linkages at branching points ($80-85\\%$ of starch).',
    'Isoelectric point migration: At a pH BELOW its isoelectric point ($pH < pI$), an amino acid exists predominantly as a cation ($-\\overset{+}{\\text{N}}\\text{H}_3$) and migrates towards the **CATHODE** (negative electrode). At a pH ABOVE its isoelectric point ($pH > pI$), it exists as an anion ($-\\text{COO}^-$) and migrates towards the **ANODE** (positive electrode).',
    'Sugar unit in DNA vs RNA: The sugar in DNA is $\\beta$-D-2-deoxyribose, which lacks an oxygen atom at the $C_2\'$ position (possesses $-\\text{H}$ instead of $-\\text{OH}$). The sugar in RNA is $\\beta$-D-ribose, which possesses an $-\\text{OH}$ group at $C_2\'$.'
  ]
};
