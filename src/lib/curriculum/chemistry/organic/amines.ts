import { Chapter } from '@/types';

export const aminesChapter: Chapter = {
  id: 'chem-c12-amines',
  subject: 'chemistry',
  classLevel: 12,
  name: 'Amines and Diazonium Salts',
  unit: 'Organic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Basicity in Aqueous Medium (Methyl)}: (\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_3\\text{N} > \\text{NH}_3 \\quad (2^\\circ > 1^\\circ > 3^\\circ > \\text{NH}_3)',
    '\\text{Basicity in Aqueous Medium (Ethyl)}: (\\text{C}_2\\text{H}_5)_2\\text{NH} > (\\text{C}_2\\text{H}_5)_3\\text{N} > \\text{C}_2\\text{H}_5\\text{NH}_2 > \\text{NH}_3 \\quad (2^\\circ > 3^\\circ > 1^\\circ > \\text{NH}_3)',
    '\\text{Gas Phase Basicity}: 3^\\circ > 2^\\circ > 1^\\circ > \\text{NH}_3 \\quad (\\text{governed strictly by inductive }+I\\text{ effect})',
    '\\text{Carbylamine Test}: R-\\text{NH}_2 + \\text{CHCl}_3 + 3\\text{KOH} \\xrightarrow{\\Delta} R-\\text{NC} \\; (\\text{foul odor}) + 3\\text{KCl} + 3\\text{H}_2\\text{O} \\quad (1^\\circ \\text{ only})',
    '\\text{Hinsberg Reagent}: \\text{PhSO}_2\\text{Cl} \\; (1^\\circ \\text{ yields alkali-soluble sulfonamide; } 2^\\circ \\text{ yields alkali-insoluble; } 3^\\circ \\text{ no reaction})',
    '\\text{Diazotization}: \\text{Ar}-\\text{NH}_2 + \\text{NaNO}_2 + 2\\text{HCl} \\xrightarrow{273-278\\,\\text{K}} \\text{Ar}-\\text{N}_2^+\\text{Cl}^- + \\text{NaCl} + 2\\text{H}_2\\text{O}',
    '\\text{Sandmeyer Reaction}: \\text{Ar}-\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\text{Cu}_2\\text{X}_2/\\text{HX}} \\text{Ar}-\\text{X} + \\text{N}_2 \\uparrow \\quad (\\text{X} = \\text{Cl, Br, CN})',
    '\\text{Balz-Schiemann Reaction}: \\text{Ar}-\\text{N}_2^+\\text{Cl}^- + \\text{HBF}_4 \\longrightarrow \\text{Ar}-\\text{N}_2^+\\text{BF}_4^- \\xrightarrow{\\Delta} \\text{Ar}-\\text{F} + \\text{BF}_3 + \\text{N}_2 \\uparrow',
    '\\text{Deamination of Diazonium}: \\text{Ar}-\\text{N}_2^+\\text{Cl}^- + \\text{H}_3\\text{PO}_2 + \\text{H}_2\\text{O} \\longrightarrow \\text{Ar}-\\text{H} + \\text{H}_3\\text{PO}_3 + \\text{HCl} + \\text{N}_2 \\uparrow',
    '\\text{Azo Coupling (Phenol)}: \\text{Ar}-\\text{N}_2^+\\text{Cl}^- + \\text{C}_6\\text{H}_5\\text{OH} \\xrightarrow{\\text{pH } 9-10} p\\text{-Hydroxyazobenzene (orange dye)} + \\text{HCl}'
  ],
  topics: [
    {
      id: 'chem-amn-1-structure-nomenclature-basicity',
      name: '12.11.1 Structure, Nomenclature & Detailed Basicity Trends of Amines',
      description: 'Classification into primary (1°), secondary (2°), tertiary (3°), and quaternary ammonium salts; pyramidal geometry (sp3 hybridized with lone pair, C-N-C bond angle ~108° due to lone pair-bond pair repulsion); amine inversion (pyramidal inversion / umbrella effect, rendering simple tertiary amines achiral at room temperature); Basicity of amines in gas phase (3° > 2° > 1° > NH3 governed by +I effect); Basicity in aqueous solution: competition between inductive (+I), steric hindrance, and hydration of conjugate cation (methyl series: 2° > 1° > 3° > NH3; ethyl series: 2° > 3° > 1° > NH3); Aromatic amines: aniline is much weaker base than ammonia (pKb = 9.4) due to resonance delocalization of nitrogen lone pair into benzene ring; effect of substituents on aniline basicity; ortho-effect in aniline.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-amn-2-synthetic-preparations',
      name: '12.11.2 Synthetic Preparations of Amines',
      description: 'Reduction of nitro compounds (using catalytic H2/Pd, or active metals in acid: Fe + concentrated HCl preferred industrially because FeCl2 hydrolyzes to regenerate HCl requiring only catalytic acid); Ammonolysis of alkyl halides (Hofmann ammonolysis, yielding nucleophilic mixture of 1°, 2°, 3° amines and quaternary salt, separation using Hinsberg or fractional distillation); Reduction of nitriles and isonitriles using LiAlH4 or Na/EtOH (Mendius reaction); Reduction of amides with LiAlH4; Gabriel Phthalimide Synthesis: potassium phthalimide alkylation with primary alkyl halide followed by alkaline hydrolysis to yield pure 1° aliphatic amine (crucial limitation: cannot prepare aromatic primary amines like aniline because aryl halides cannot undergo SN2 attack); Hofmann Bromamide Degradation.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-amn-3-chemical-tests-hinsberg-carbylamine',
      name: '12.11.3 Diagnostic Tests: Carbylamine, Hinsberg & Nitrous Acid',
      description: 'Carbylamine reaction (Isocyanide test): warming primary aliphatic or aromatic amines with chloroform (CHCl3) and alcoholic KOH generates an intensely offensive, foul odor of carbylamine / isocyanide (R-NC); secondary and tertiary amines do not react; Hinsberg Test: benzenesulfonyl chloride (C6H5SO2Cl) used to separate and distinguish 1°, 2°, 3° amines: 1° amine forms N-alkylbenzenesulfonamide having acidic N-H proton that dissolves in aqueous NaOH; 2° amine forms N,N-dialkylbenzenesulfonamide lacking N-H proton, insoluble in NaOH; 3° amine does not react; Reaction with nitrous acid (HNO2 generated from NaNO2 + HCl at 0-5°C): 1° aliphatic amines give quantitative N2 gas effervescence and alcohols; 1° aromatic amines form stable benzene diazonium chloride; 2° amines form yellow oily N-nitrosoamines.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-amn-4-aniline-electrophilic-substitutions',
      name: '12.11.4 Electrophilic Aromatic Substitutions of Aniline & Protection Strategy',
      description: 'Powerful activating nature of -NH2 group due to strong +M resonance; Bromination: reaction with aqueous bromine water yields immediate white precipitate of 2,4,6-tribromoaniline; Protection of amino group by acetylation: reaction with acetic anhydride (Ac2O) in pyridine converts -NH2 into acetamido group (-NHCOCH3), decreasing activating power due to resonance with carbonyl, enabling clean monobromination at para position followed by acidic/basic deprotection back to 4-bromoaniline; Nitration: direct nitration with conc. HNO3 + H2SO4 yields unexpected mixture: 51% para, 47% meta, and 2% ortho (large 47% meta product forms because in strongly acidic medium aniline is protonated into anilinium ion -NH3+, which is meta-directing); Sulfonation forming sulfanilic acid, existing as dipolar zwitterion (+H3N-C6H4-SO3-).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-amn-5-diazonium-salts-synthesis-stability',
      name: '12.11.5 Diazonium Salts: Diazotization Mechanism & Resonance Stability',
      description: 'Diazotization of primary aromatic amines with NaNO2 and HCl at low temperature (273-278 K / 0-5°C); active electrophile is nitrosonium ion (NO+); resonance stability of arenediazonium cation (delocalization of positive charge into benzene ring); why aliphatic diazonium salts are extremely unstable and decompose instantaneously even at 0°C with nitrogen expulsion; physical properties of benzene diazonium chloride.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-amn-6-diazonium-displacements-sandmeyer',
      name: '12.11.6 Synthetic Transformations: Nitrogen Replacement Reactions',
      description: 'Superiority of diazonium group as leaving group (expulsion of exceptionally stable N2 gas, Delta S > 0); Sandmeyer reaction: replacement by -Cl, -Br, -CN using Cu2Cl2/HCl, Cu2Br2/HBr, Cu2(CN)2/KCN (proceeds via free radical cuprous pathway); Gattermann reaction: using Cu powder with halogen acid; Replacement by Iodine: warming with aqueous KI (no copper catalyst needed); Balz-Schiemann reaction: precipitation of fluoroborate salt (Ar-N2+ BF4-) followed by dry heating yielding aryl fluoride (Ar-F); Replacement by -H (Deamination): reduction using hypophosphorous acid (H3PO2) or ethanol (CH3CH2OH); Replacement by -OH: warming aqueous solution to 283 K yielding phenol; Replacement by -NO2: heating fluoroborate with aqueous NaNO2 in presence of Cu powder.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-amn-7-azo-coupling-synthetic-routes',
      name: '12.11.7 Azo Coupling Reactions & Multi-Step Synthetic Strategies',
      description: 'Azo coupling reactions (retention of diazo group): Arenediazonium salts act as weak electrophiles reacting with highly activated aromatic substrates; Coupling with Phenol in mildly alkaline medium (pH 9-10) to form p-hydroxyazobenzene (bright orange dye); Coupling with Aniline in mildly acidic medium (pH 4-5) to form p-aminoazobenzene (bright yellow dye); Importance of pH control: in strong acid diazonium amine is protonated losing nucleophilicity, in strong base diazonium converts to unreactive diazotate; Multi-step synthetic roadmaps for preparing polysubstituted benzenes (e.g. synthesis of 1,3,5-tribromobenzene from aniline, p-bromophenol from nitrobenzene).',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Aniline on direct nitration with concentrated $\\text{HNO}_3 + \\text{H}_2\\text{SO}_4$ gives an unusually high yield ($47\\%$) of the **META-nitro product**: $51\\%$ para, $47\\%$ meta, and $2\\%$ ortho. This happens because in strongly acidic nitrating mixture, the $-\\text{NH}_2$ group is extensively protonated into the **anilinium ion ($-\\overset{+}{\\text{N}}\\text{H}_3$)**, which is a powerful $-I$ deactivating and strictly meta-directing group.',
    'Gabriel phthalimide synthesis CANNOT be used to prepare aromatic primary amines (like aniline). This is because the nucleophile potassium phthalimide cannot displace halide from an aryl halide via $\\text{S}_\\text{N}2$ mechanism, since the $\\text{C}_{\\text{Ar}}-\\text{X}$ bond possesses partial double bond character due to resonance.',
    'Sulfanilic acid exists as a **Zwitterion (dipolar ion)**: $\\overset{+}{\\text{H}}_3\\text{N}-\\text{C}_6\\text{H}_4-\\text{SO}_3^-$. The basic amino group ($-\\text{NH}_2$) captures the proton from the acidic sulfonic group ($-\\text{SO}_3\\text{H}$) within the same molecule.',
    'In the Hinsberg test, the derivative of a primary amine ($N$-alkylbenzenesulfonamide) is **SOLUBLE in aqueous $\\text{NaOH}$** because the hydrogen atom attached to nitrogen is strongly acidic due to the electron-withdrawing sulfonyl ($-\\text{SO}_2-$) group. The derivative of a secondary amine ($N,N$-dialkylbenzenesulfonamide) has no hydrogen on nitrogen and is **INSOLUBLE in $\\text{NaOH}$**.',
    'Azo coupling of benzene diazonium chloride with phenol requires an alkaline medium ($\text{pH } 9-10$) because phenol must be converted to the more reactive phenoxide ion, whereas coupling with aniline requires a mildly acidic medium ($\text{pH } 4-5$) to prevent diazotate formation while maintaining free unprotonated aniline.'
  ],
  commonTraps: [
    'Basicity order of methylamines vs ethylamines in water: For methyl: $2^\\circ > 1^\\circ > 3^\\circ > \\text{NH}_3$ ($(\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_3\\text{N}$). For ethyl: $2^\\circ > 3^\\circ > 1^\\circ > \\text{NH}_3$ ($(\\text{C}_2\\text{H}_5)_2\\text{NH} > (\\text{C}_2\\text{H}_5)_3\\text{N} > \\text{C}_2\\text{H}_5\\text{NH}_2$). Do not confuse the two sequences!',
    'Carbylamine test applicability: The carbylamine test is positive for ALL primary amines, BOTH ALIPHATIC AND AROMATIC (aniline gives a positive carbylamine test!). It is negative for all $2^\\circ$ and $3^\\circ$ amines.',
    'Aniline in Friedel-Crafts reaction: Aniline DOES NOT undergo Friedel-Crafts alkylation or acylation because the Lewis acid catalyst ($\\text{AlCl}_3$) forms a coordination complex with the lone pair of $-\\text{NH}_2$, creating a positive charge on nitrogen that powerfully deactivates the benzene ring.',
    'Diazonium salt temperature: Diazotization MUST be carried out at ice-cold temperature ($0-5^\\circ\\text{C}$ or $273-278\\,\\text{K}$). At temperatures above $5^\\circ\\text{C}$, benzenediazonium chloride hydrolyzes with water to form phenol and nitrogen gas.'
  ]
};
