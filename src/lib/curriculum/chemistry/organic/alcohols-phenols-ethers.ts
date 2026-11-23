import { Chapter } from '@/types';

export const alcoholsPhenolsEthersChapter: Chapter = {
  id: 'chem-c12-alcohols-phenols-ethers',
  subject: 'chemistry',
  classLevel: 12,
  name: 'Alcohols, Phenols and Ethers',
  unit: 'Organic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Lucas Test}: \\text{Alcohol} + \\text{conc. HCl} \\xrightarrow{\\text{anhyd. } \\text{ZnCl}_2} R-\\text{Cl} \\downarrow \\; (3^\\circ \\text{ immediate, } 2^\\circ \\text{ in 5 min, } 1^\\circ \\text{ clear at room temp})',
    '\\text{Dehydrogenation over Cu / 573 K}: 1^\\circ \\rightarrow \\text{Aldehyde}; \\; 2^\\circ \\rightarrow \\text{Ketone}; \\; 3^\\circ \\rightarrow \\text{Alkene (dehydration)}',
    '\\text{Cumene Process}: \\text{Cumene} + \\text{O}_2 \\longrightarrow \\text{Cumene Hydroperoxide} \\xrightarrow{\\text{H}_3\\text{O}^+} \\text{Phenol} + \\text{CH}_3\\text{COCH}_3 \\; (\\text{Acetone})',
    "\\text{Kolbe's Synthesis}: \\text{Phenol} + \\text{NaOH} \\xrightarrow{\\text{CO}_2, \\; 400\\,\\text{K}, \\; 4-7\\,\\text{atm}} \\xrightarrow{\\text{H}^+} \\text{Salicylic acid (2-hydroxybenzoic acid)}",
    '\\text{Reimer-Tiemann Reaction}: \\text{Phenol} + \\text{CHCl}_3 + \\text{aq. NaOH} \\longrightarrow \\xrightarrow{\\text{H}^+} \\text{Salicylaldehyde} \\quad (\\text{Electrophile: } :\\text{CCl}_2)',
    "\\text{Williamson Synthesis}: R-\\text{X} \\; (1^\\circ \\text{ strictly}) + R'-\\text{O}^-\\text{Na}^+ \\longrightarrow R-\\text{O}-R' + \\text{NaX} \\quad (\\text{If } R-\\text{X is } 3^\\circ, \\text{alkene forms})",
    '\\text{Ether Cleavage (1°/2°)}: R-\\text{O}-R\' + \\text{HI} \\xrightarrow{\\text{S}_\\text{N}2} R_{\\text{smaller}}-\\text{I} + R\'_{\\text{larger}}-\\text{OH}',
    '\\text{Ether Cleavage (3°)}: (\\text{CH}_3)_3\\text{C}-\\text{O}-\\text{CH}_3 + \\text{HI} \\xrightarrow{\\text{S}_\\text{N}1} (\\text{CH}_3)_3\\text{C}-\\text{I} + \\text{CH}_3\\text{OH} \\quad (\\text{stable } 3^\\circ \\text{ carbocation})',
    '\\text{Anisole Cleavage}: \\text{C}_6\\text{H}_5-\\text{O}-\\text{CH}_3 + \\text{HI} \\longrightarrow \\text{C}_6\\text{H}_5\\text{OH} \\; (\\text{Phenol}) + \\text{CH}_3\\text{I} \\quad (\\text{Ar-O bond has partial double bond character})'
  ],
  topics: [
    {
      id: 'chem-ape-1-alcohols-classification-synthesis',
      name: '12.8.1 Alcohols: Classification, Industrial Syntheses & Physical Properties',
      description: 'Classification into 1°, 2°, 3° and allylic/benzylic alcohols; Industrial preparations: hydration of alkenes, hydroboration-oxidation, oxymercuration-demercuration, reduction of aldehydes/ketones/esters using NaBH4 and LiAlH4, reaction of Grignard reagents with formaldehyde (gives 1° alcohol), other aldehydes (gives 2° alcohol), and ketones/esters (gives 3° alcohol); Physical properties: intermolecular hydrogen bonding, elevated boiling points compared to ethers and alkanes of comparable molar mass, solubility in water decreasing with growing hydrophobic hydrocarbon chain.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-ape-2-alcohols-chemical-reactions',
      name: '12.8.2 Chemical Reactions of Alcohols & Diagnostic Tests',
      description: 'Acidity of alcohols (reactions with Na/K, order: 1° > 2° > 3°); Esterification with carboxylic acids, acid chlorides, and anhydrides; Reaction with hydrogen halides and Lucas test (turbidity formation rate: 3° immediately, 2° in 5 minutes, 1° clear at room temperature); Dehydration: mechanism, temperature-dependent pathways (443 K yields alkene via Saytzeff elimination; 413 K yields symmetrical ether); Oxidation: selective reagents (PCC/PDC oxidizes 1° to aldehyde; Jones reagent CrO3/H2SO4 or acidic KMnO4 oxidizes to carboxylic acid); Catalytic dehydrogenation over heated Cu at 573 K (1° -> aldehyde, 2° -> ketone, 3° -> alkene by dehydration).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-ape-3-phenols-synthesis-acidity',
      name: '12.8.3 Phenols: Syntheses, Acidity & Resonance Stabilization',
      description: 'Industrial syntheses: (1) From Cumene (isopropylbenzene air oxidation yields cumene hydroperoxide, which upon acid cleavage yields phenol and valuable byproduct acetone), (2) Dow’s process from chlorobenzene, (3) Diazotization of aniline followed by warming diazonium salt with water; Acidity of Phenol: resonance delocalization of negative charge in phenoxide ion into ortho and para positions of benzene ring (pKa ≈ 10); effect of substituents on acidity: electron-withdrawing groups (-NO2, -CN) at ortho and para positions drastically enhance acidity (picric acid 2,4,6-trinitrophenol pKa = 0.38 is stronger than acetic acid); electron-donating groups (-CH3, -OCH3) decrease acidity; phenol dissolves in aqueous NaOH but does not dissolve in aqueous NaHCO3.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-ape-4-phenols-electrophilic-reactions',
      name: '12.8.4 Electrophilic Aromatic Substitutions of Phenols',
      description: 'Halogenation: Bromination in polar protic solvent (Br2 in H2O) yields white precipitate of 2,4,6-tribromophenol (due to phenoxide ion ionization activating ring tremendously); Bromination in non-polar solvent (Br2 in CS2 or CHCl3 at 273 K) stops cleanly at monobromination giving para-bromophenol as major product; Nitration: dilute HNO3 at room temperature gives mixture of ortho- and para-nitrophenol (ortho is steam-volatile due to intramolecular H-bonding and separates easily); concentrated HNO3 yields picric acid; Nitrosation forming p-nitrosophenol; Oxidation with acidified sodium dichromate yielding conjugated p-benzoquinone.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-ape-5-phenols-named-reactions',
      name: "12.8.5 Landmark Named Reactions of Phenols: Kolbe & Reimer-Tiemann",
      description: "Kolbe's Reaction: sodium phenoxide reacts with electrophilic carbon dioxide (CO2) at 400 K and 4-7 atm followed by acidification to produce salicylic acid (2-hydroxybenzoic acid); conversion to Aspirin (acetylsalicylic acid) via acetylation with acetic anhydride; Reimer-Tiemann Reaction: heating phenol with chloroform (CHCl3) and aqueous NaOH introduces a formyl (-CHO) group at ortho position yielding salicylaldehyde; detailed mechanism: alpha-elimination generates neutral electrophile dichlorocarbene (:CCl2), attack on phenoxide forming benzylidene dichloride intermediate followed by alkaline hydrolysis; reaction with CCl4 yielding salicylic acid; Reaction of phenol with Zinc dust producing benzene.",
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-ape-6-ethers-synthesis-williamson',
      name: '12.8.6 Ethers: Synthesis, Williamson Reaction & Industrial Methods',
      description: 'Nomenclature and structure (bent C-O-C bond angle ~111.7° due to repulsive lone pair-lone pair and steric interactions); Preparation: (1) Intermolecular acid-catalyzed dehydration of primary alcohols at 413 K (limited to symmetrical ethers, higher temperatures yield alkene), (2) Williamson Ether Synthesis: SN2 nucleophilic displacement of primary alkyl halide or methyl halide by sodium alkoxide/phenoxide; crucial limitation: if tertiary alkyl halide is used, the strongly basic alkoxide causes E2 elimination to yield alkene exclusively; synthesis of unsymmetrical ethers and alkyl aryl ethers.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-ape-7-ethers-chemical-cleavage',
      name: '12.8.7 Chemical Reactions of Ethers & Acidic Cleavage with HI',
      description: 'Inertness of ethers towards bases and oxidizing agents; Cleavage of C-O bond by concentrated hydroiodic acid (HI) or HBr: (1) With 1° or 2° unsymmetrical ethers, reaction proceeds via SN2 where I- attacks the smaller, less sterically hindered alkyl group, forming smaller alkyl iodide and larger alcohol, (2) With ethers containing a tertiary alkyl group, reaction proceeds via SN1 because tertiary carbocation intermediate is exceptionally stable, yielding tertiary alkyl iodide and primary alcohol, (3) Alkyl aryl ethers (anisole C6H5-O-CH3): the sp2 oxygen-benzene ring bond has partial double bond character and cannot be cleaved; cleavage yields exclusively Phenol (C6H5OH) and methyl iodide (CH3I); Electrophilic aromatic substitution of anisole (o/p directing); Auto-oxidation of ethers upon prolonged exposure to air and light forming shock-sensitive, explosive ether peroxides.',
      estimatedHours: 5,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'In the Reimer-Tiemann reaction, the active attacking electrophile is **Dichlorocarbene ($:\\text{CCl}_2$)**, a neutral divalent carbon intermediate generated in situ by $\\alpha$-elimination of $\\text{HCl}$ from chloroform: $\\text{CHCl}_3 + \\text{OH}^- \\rightleftharpoons :\\text{CCl}_3^- + \\text{H}_2\\text{O} \\longrightarrow :\\text{CCl}_2 + \\text{Cl}^-$.',
    'Bromination of phenol in water vs carbon disulfide: In aqueous solution, phenol ionizes into the phenoxide ion ($-\\text{O}^-$), which activates the benzene ring so massively that electrophilic substitution occurs at ALL ortho and para positions simultaneously, precipitating **2,4,6-tribromophenol** (white ppt). In non-polar solvents like $\\text{CS}_2$ or $\\text{CHCl}_3$, phenol does not ionize, ring activation is modest, and substitution stops at **para-bromophenol** (major).',
    'Aspirin synthesis: Salicylic acid (prepared via Kolbe\'s reaction) undergoes acetylation with acetic anhydride in the presence of trace concentrated $\\text{H}_2\\text{SO}_4$ to yield **Acetylsalicylic acid (Aspirin)**, an analgesic, antipyretic, and anti-inflammatory drug.',
    'Cleavage of tert-butyl methyl ether with $\\text{HI}$: Protonation gives $[(\\text{CH}_3)_3\\text{C}-\\overset{+}{\\text{O}}\\text{H}-\\text{CH}_3]$. The reaction proceeds via the $\\text{S}_\\text{N}1$ mechanism because the stable tertiary carbocation ($(\\text{CH}_3)_3\\text{C}^+$) forms easily, yielding **tert-butyl iodide and methanol** (NOT methyl iodide!).',
    'Williamson ether synthesis failure with tertiary halides: When tert-butyl bromide is treated with sodium ethoxide, the ethoxide ion acts as a strong Brønsted base rather than a nucleophile, causing $\\text{E}2$ elimination to yield **2-methylprop-1-ene (isobutylene)** as the exclusive product.'
  ],
  commonTraps: [
    'Applying Williamson synthesis to make tert-butyl ethyl ether: You MUST react sodium tert-butoxide ($(\\text{CH}_3)_3\\text{C}-\\text{O}^-\\text{Na}^+$) with ethyl bromide ($\\text{CH}_3\\text{CH}_2\\text{Br}$). If you attempt to react sodium ethoxide with tert-butyl bromide, elimination dominates $100\\%$ to give isobutylene!',
    'Cleavage of anisole ($\text{C}_6\text{H}_5-\text{O}-\text{CH}_3$) with $\\text{HI}$: The products are strictly Phenol and Methyl iodide! The $\\text{C}_6\\text{H}_5-\\text{O}$ bond has partial double bond character due to resonance and cannot be attacked by iodide.',
    'Lucas test on allylic/benzylic alcohols: Even primary allylic and benzylic alcohols give an IMMEDIATE positive Lucas test (cloudiness in seconds) because the resulting allyl and benzyl carbocations are resonance-stabilized, mimicking tertiary alcohols!',
    'Assuming phenol reacts with sodium bicarbonate: Phenol is a weaker acid than carbonic acid ($\\text{H}_2\\text{CO}_3$); therefore, it DOES NOT dissolve in or react with aqueous $\\text{NaHCO}_3$, and cannot liberate $\\text{CO}_2$ gas (unlike carboxylic acids or picric acid).'
  ]
};
