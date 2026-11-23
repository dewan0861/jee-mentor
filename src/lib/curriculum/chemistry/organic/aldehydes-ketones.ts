import { Chapter } from '@/types';

export const aldehydesKetonesChapter: Chapter = {
  id: 'chem-c12-aldehydes-ketones',
  subject: 'chemistry',
  classLevel: 12,
  name: 'Aldehydes and Ketones',
  unit: 'Organic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Nucleophilic Reactivity}: \\text{HCHO} > \\text{CH}_3\\text{CHO} > \\text{CH}_3\\text{CH}_2\\text{CHO} > \\text{CH}_3\\text{COCH}_3 > \\text{ArCHO} > \\text{PhCOPh}',
    '\\text{Rosenmund Reduction}: R-\\text{COCl} + \\text{H}_2 \\xrightarrow{\\text{Pd-BaSO}_4, \\; \\text{quinoline}} R-\\text{CHO} + \\text{HCl}',
    '\\text{Stephen Reaction}: R-\\text{CN} + \\text{SnCl}_2 + \\text{HCl} \\longrightarrow R-\\text{CH}=\\text{NH}\\cdot\\text{HCl} \\xrightarrow{\\text{H}_3\\text{O}^+} R-\\text{CHO}',
    '\\text{Iodoform Test}: R-\\text{COCH}_3 + 3\\text{I}_2 + 4\\text{NaOH} \\longrightarrow R-\\text{COONa} + \\mathbf{\\text{CHI}_3} \\downarrow \\; (\\text{yellow ppt}) + 3\\text{NaI} + 3\\text{H}_2\\text{O}',
    '\\text{Tollens\' Test}: R-\\text{CHO} + 2[\\text{Ag}(\\text{NH}_3)_2]^+ + 3\\text{OH}^- \\longrightarrow R-\\text{COO}^- + 2\\mathbf{\\text{Ag}} \\downarrow \\; (\\text{silver mirror}) + 4\\text{NH}_3 + 2\\text{H}_2\\text{O}',
    '\\text{Fehling\'s Test}: R-\\text{CHO} + 2\\text{Cu}^{2+} + 5\\text{OH}^- \\longrightarrow R-\\text{COO}^- + \\mathbf{\\text{Cu}_2\\text{O}} \\downarrow \\; (\\text{red ppt}) + 3\\text{H}_2\\text{O} \\quad (\\text{aliphatic only})',
    '\\text{Clemmensen Reduction}: >\\text{C}=\\text{O} + 4[\\text{H}] \\xrightarrow{\\text{Zn-Hg} / \\text{conc. HCl}} >\\text{CH}_2 + \\text{H}_2\\text{O} \\quad (\\text{acidic medium})',
    '\\text{Wolff-Kishner Reduction}: >\\text{C}=\\text{O} \\xrightarrow{\\text{NH}_2\\text{NH}_2} >\\text{C}=\\text{N}-\\text{NH}_2 \\xrightarrow{\\text{KOH}, \\; \\text{glycol}, \\; \\Delta} >\\text{CH}_2 + \\text{N}_2 \\uparrow \\quad (\\text{basic medium})',
    '\\text{Aldol Condensation}: 2\\text{CH}_3\\text{CHO} \\xrightarrow{\\text{dil. NaOH}} \\text{CH}_3-\\text{CH(OH)}-\\text{CH}_2\\text{CHO} \\xrightarrow{\\Delta, \\; -\\text{H}_2\\text{O}} \\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CHO} \\; (\\text{crotonaldehyde})',
    '\\text{Cannizzaro Reaction}: 2\\text{HCHO} + 50\\%\\,\\text{NaOH} \\longrightarrow \\text{CH}_3\\text{OH} + \\text{HCOONa} \\quad (\\text{requires NO } \\alpha\\text{-hydrogens})'
  ],
  topics: [
    {
      id: 'chem-ald-1-nomenclature-structure-preparations',
      name: '12.9.1 Carbonyl Structure, Nomenclature & Selective Preparations',
      description: 'Sp2 hybridization of carbonyl carbon, planarity, 120° bond angles, dipole moment (2.3 - 2.8 D); Rosenmund reduction of acyl chlorides; Stephen reaction of nitriles; DIBAL-H (diisobutylaluminum hydride) reduction of nitriles and esters to aldehydes at -78°C; Etard reaction (oxidation of toluene to benzaldehyde using chromyl chloride CrO2Cl2 in CS2 via brown chromium complex); Gattermann-Koch reaction (benzene + CO + HCl with AlCl3/CuCl); Friedel-Crafts acylation for ketones; Ozonolysis of alkenes and Kucherov hydration of alkynes.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-ald-2-nucleophilic-addition-mechanism',
      name: '12.9.2 Nucleophilic Addition Reactions: Reactivity & Mechanistic Pathways',
      description: 'General mechanism: attack of nucleophile on planar carbonyl carbon forming tetrahedral alkoxide intermediate; steric and electronic factors governing reactivity (HCHO is most reactive; formaldehyde > acetaldehyde > acetone > benzaldehyde > acetophenone); Addition of HCN forming cyanohydrins; Addition of NaHSO3 forming crystalline bisulfite adducts; Addition of alcohols forming hemiacetals and acetals (ethylene glycol as protecting group for ketones in basic/reducing conditions); Addition of Grignard reagents producing primary, secondary, and tertiary alcohols.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-ald-3-ammonia-derivatives-condensation',
      name: '12.9.3 Addition of Ammonia Derivatives (Nucleophilic Addition-Elimination)',
      description: 'General formula H2N-Z: attack of primary amino nitrogen followed by dehydration forming C=N-Z double bond; pH dependence (acid catalysis activates carbonyl, but too acidic protonates the nucleophile amine, optimal pH 3.5 - 4.5); Hydroxylamine (forms oximes), Hydrazine (forms hydrazones), Phenylhydrazine, 2,4-Dinitrophenylhydrazine (2,4-DNP / Brady’s reagent: yields crystalline yellow, orange, or red precipitates, definitive diagnostic test for carbonyls); Semicarbazide (H2N-NH-CONH2: only the terminal hydrazine nitrogen attacks because the other amino group is resonance delocalized with carbonyl).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-ald-4-oxidation-diagnostic-tests',
      name: '12.9.4 Oxidation Reactions & Chemical Distinguishing Tests',
      description: 'Oxidation of aldehydes vs resistance of ketones; Tollens’ test (ammoniacal AgNO3 reduced to silver mirror by aliphatic and aromatic aldehydes, alpha-hydroxy ketones like fructose); Fehling’s test (alkaline Cu2+ tartrate reduced to red Cu2O precipitate by ALIPHATIC aldehydes only; aromatic aldehydes like benzaldehyde do NOT reduce Fehling’s solution); Benedict’s test; Popoff’s rule for unsymmetrical ketone oxidation; Haloform reaction / Iodoform test: specific for methyl carbonyls (CH3-C=O) and methyl carbinols (CH3-CH(OH)-) using I2/NaOH, precipitating yellow crystalline iodoform CHI3 (MP 119°C).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-ald-5-reduction-to-hydrocarbons',
      name: '12.9.5 Reduction of Carbonyls to Alcohols & Hydrocarbons',
      description: 'Reduction to alcohols: NaBH4 (mild, reduces aldehydes and ketones, leaves esters/acids untouched) vs LiAlH4; Reduction to hydrocarbons: (1) Clemmensen reduction (amalgamated zinc Zn-Hg and concentrated HCl, ideal for compounds with base-sensitive groups), (2) Wolff-Kishner reduction (hydrazine NH2NH2 and KOH in high-boiling ethylene glycol at 453-473 K, ideal for compounds with acid-sensitive groups), (3) Red P + HI reduction at 423 K.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-ald-6-reactions-alpha-hydrogen-aldol',
      name: '12.9.6 Reactions Driven by Alpha-Hydrogens: Aldol & Cross-Aldol Condensations',
      description: 'Acidity of alpha-hydrogens (resonance stabilization of enolate anion); Aldol reaction of aldehydes and ketones containing at least one alpha-hydrogen catalyzed by dilute alkali (NaOH, Ba(OH)2); mechanism of enolate attack on second carbonyl molecule yielding beta-hydroxy carbonyl; dehydration upon mild heating to give alpha,beta-unsaturated conjugated carbonyls (enals and enones); Cross-aldol condensation between two different carbonyls: mixture of four products; Directed cross-aldol when one partner lacks alpha-hydrogens (e.g. benzaldehyde + acetaldehyde gives cinnamaldehyde, Claisen-Schmidt reaction).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-ald-7-cannizzaro-special-reactions',
      name: '12.9.7 Reactions Lacking Alpha-Hydrogens: Cannizzaro & Benzoin Reactions',
      description: 'Cannizzaro reaction: aldehydes lacking alpha-hydrogens (HCHO, C6H5CHO, (CH3)3C-CHO, furfural) treated with concentrated alkali (50% NaOH) undergo self-disproportionation (one molecule oxidized to carboxylate salt, one reduced to alcohol); hydride ion (H:-) transfer as rate-determining step; Cross-Cannizzaro reaction between formaldehyde and another aldehyde: formaldehyde is ALWAYS oxidized to sodium formate because its carbonyl carbon is more electrophilic; Benzoin condensation (ethanolic KCN catalyst); Perkin reaction (benzaldehyde + acetic anhydride + sodium acetate yielding cinnamic acid).',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Benzaldehyde reduces Tollens\' reagent (gives silver mirror) but DOES NOT reduce Fehling\'s solution! Fehling\'s test is positive only for ALIPHATIC aldehydes.',
    'In semicarbazide ($\\text{H}_2\\text{N}-\\text{NH}-\\text{CONH}_2$), only the terminal $-\\text{NH}_2$ attached to $-\\text{NH}-$ acts as a nucleophile to form semicarbazones. The amide $-\\text{NH}_2$ group attached to $\\text{C}=\\text{O}$ has its lone pair heavily delocalized into the carbonyl by resonance ($\\text{H}_2\\overset{+}{\\text{N}}=\\text{C}-\\text{O}^-$), making it non-nucleophilic.',
    'Iodoform test is given by all compounds containing the **$\\text{CH}_3-\\text{C}=\\text{O}$** (methyl ketone or acetaldehyde) or **$\\text{CH}_3-\\text{CH(OH)}-$** (methyl carbinol, like ethanol, propan-2-ol, butan-2-ol) moiety. Ethanol is the ONLY primary alcohol that gives a positive iodoform test.',
    'Cross-Cannizzaro with formaldehyde: When any aldehyde lacking an $\\alpha$-hydrogen is reacted with formaldehyde ($\\text{HCHO}$) in $50\\%\\,\\text{NaOH}$, formaldehyde is EXCLUSIVELY oxidized to sodium formate ($\\text{HCOONa}$), because $\\text{HCHO}$ has no electron-donating alkyl/aryl groups and its carbonyl carbon is far more electrophilic.',
    'Clemmensen reduction uses strong acid ($\\text{conc. HCl}$), so it cannot be used on substrates containing acid-sensitive groups (like acetals or tertiary alcohols). Wolff-Kishner reduction uses strong base ($\\text{KOH}$), so it cannot be used on substrates containing base-sensitive groups (like alkyl halides or esters).'
  ],
  commonTraps: [
    'Confusing Tollens\' and Fehling\'s on Fructose: Even though fructose is a ketose (ketone), it undergoes enediol lobry de bruyn-alberda van ekenstein tautomeric rearrangement in alkaline medium to form glucose and mannose, giving a POSITIVE Tollens\' and Fehling\'s test!',
    'Assuming benzaldehyde undergoes Aldol condensation: Benzaldehyde has ZERO $\\alpha$-hydrogens ($-\\text{CHO}$ is attached directly to the $sp^2$ benzene ring carbon with no hydrogen). It can only act as an electrophile in cross-aldol or undergo Cannizzaro reaction.',
    'Predicting products of Cross-Aldol: If both aldehydes have $\\alpha$-hydrogens (e.g. acetaldehyde + propanal), four distinct aldol condensation products are formed. In JEE questions, look for self-condensation vs cross-condensation options.',
    'Haloform reaction on 3-pentanone: $\\text{CH}_3\\text{CH}_2-\\text{CO}-\\text{CH}_2\\text{CH}_3$ does NOT give the haloform test because it has ethyl groups on both sides, lacking the necessary methyl ketone ($\text{CH}_3-\\text{CO}-$) unit.'
  ]
};
