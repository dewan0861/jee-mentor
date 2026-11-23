import { Chapter } from '@/types';

export const hydrocarbonsChapter: Chapter = {
  id: 'chem-c11-hydrocarbons',
  subject: 'chemistry',
  classLevel: 11,
  name: 'Hydrocarbons',
  unit: 'Organic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Wurtz Reaction}: 2 R-X + 2\\text{Na} \\xrightarrow{\\text{dry ether}} R-R + 2\\text{NaX} \\quad (\\text{best for symmetrical even-carbon alkanes})',
    "\\text{Kolbe's Electrolysis}: 2 R\\text{COONa} + 2\\text{H}_2\\text{O} \\xrightarrow{\\text{electrolysis}} R-R + 2\\text{CO}_2\\,(\\text{anode}) + \\text{H}_2 + 2\\text{NaOH}\\,(\\text{cathode})",
    '\\text{Halogenation Selectivity}: \\text{Br}_2 \\; (3^\\circ : 2^\\circ : 1^\\circ = 1600 : 82 : 1) \\implies \\text{Bromination is exceptionally regioselective for } 3^\\circ\\text{-C}',
    '\\text{Markovnikov Addition}: \\text{Electrophile } \\text{H}^+ \\text{ adds to double bond to generate the more stable carbocation intermediate}',
    '\\text{Kharasch Peroxide Effect}: \\text{Anti-Markovnikov addition of } \\text{HBr (ONLY)} \\text{ via free radicals in presence of organic peroxides}',
    '\\text{Reductive Ozonolysis}: \\text{Alkene} + \\text{O}_3 \\xrightarrow{\\text{Zn}/\\text{H}_2\\text{O}} \\text{Aldehydes / Ketones} \\quad (\\text{cleaves } \\text{C}=\\text{C} \\text{ without overoxidation})',
    '\\text{Stereoselective Alkyne Reduction}: \\text{Alkyne} + \\text{H}_2 \\xrightarrow{\\text{Lindlar catalyst}} \\text{cis-alkene}; \\quad \\text{Alkyne} + \\text{Na/liq. } \\text{NH}_3 \\xrightarrow{\\text{Birch}} \\text{trans-alkene}',
    "\\text{Kucherov Hydration}: \\text{Alkyne} + \\text{H}_2\\text{O} \\xrightarrow{\\text{HgSO}_4, \\; \\text{H}_2\\text{SO}_4, \\; 333\\,\\text{K}} \\text{Enol} \\rightleftharpoons \\text{Ketone / Acetaldehyde}",
    '\\text{Friedel-Crafts Acylium Ion}: R-\\text{COCl} + \\text{AlCl}_3 \\longrightarrow [R-\\text{C}\\equiv\\text{O}^+ \\leftrightarrow R-\\overset{+}{\\text{C}}=\\text{O}] + \\text{AlCl}_4^- \\quad (\\text{no rearrangement})'
  ],
  topics: [
    {
      id: 'chem-hyd-1-alkanes-synthesis-conformations',
      name: '11.7.1 Alkanes: Preparations, Radical Halogenation & Conformations',
      description: 'Nomenclature and isomerism; Synthesis: Sabatier-Senderens catalytic hydrogenation of alkenes/alkynes, reduction of alkyl halides (Zn + dilute HCl), Wurtz coupling reaction (mechanism via free radical or organosodium, limitations with cross-couplings and tertiary halides undergoing elimination), decarboxylation of carboxylic salts with soda-lime (NaOH + CaO 3:1), Kolbe electrolytic decarboxylation; Free radical chlorination vs bromination (Hammond postulate, transition states, reactivity-selectivity principle: bromination is highly regioselective for tertiary C-H); Conformations of ethane and n-butane: Newman and Sawhorse projections, torsional strain, steric strain, dihedral angles; stability sequence of butane conformations: Anti > Gauche > Partially Eclipsed > Fully Eclipsed.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-hyd-2-alkenes-elimination-saytzeff',
      name: '11.7.2 Alkenes: Synthesis via Eliminations & Regioselectivity',
      description: 'Geometrical isomerism (cis-trans, E-Z notation, dipole moments, melting points: trans has higher MP due to better crystal packing, cis has higher BP due to higher dipole moment); Preparation: Acid-catalyzed dehydration of alcohols (carbocation rearrangement via hydride/alkyl shifts, reactivity 3° > 2° > 1°), dehydrohalogenation of alkyl halides with alcoholic KOH (E2 mechanism, anti-periplanar transition state); Saytzeff (Zaitsev) rule (most substituted, thermodynamically stable alkene dominates) vs Hofmann elimination (less substituted alkene favored when leaving group is poor e.g. fluoride/quaternary ammonium or base is sterically hindered like potassium tert-butoxide t-BuOK).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-hyd-3-alkenes-electrophilic-additions',
      name: '11.7.3 Electrophilic Additions: Markovnikov & Peroxide Effect',
      description: 'Mechanism of electrophilic addition (formation of classical carbocation or non-classical halonium intermediate); addition of halogens (anti-stereospecific addition of Br2 in CCl4 via cyclic bromonium ion, test for unsaturation); addition of hydrogen halides (Markovnikov’s rule based on carbocation stability, Wagner-Meerwein rearrangements of intermediate carbocations); Kharasch peroxide effect: addition of HBr (only) in the presence of benzoyl peroxide proceeds via free radical chain mechanism leading to anti-Markovnikov regioselectivity; thermodynamic rationale why HCl and HI do not exhibit the peroxide effect.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-hyd-4-alkenes-oxidation-ozonolysis',
      name: '11.7.4 Alkenes: Ozonolysis, Epoxidation & Hydration Methods',
      description: 'Ozonolysis: formation of molozonide and ozonide; Reductive cleavage (O3 with Zn/H2O or (CH3)2S) producing aldehydes and ketones; Oxidative cleavage (O3 with H2O2 or hot alkaline KMnO4) oxidizing aldehydes further to carboxylic acids and terminal =CH2 to CO2 + H2O; structure elucidation of unknown alkenes from ozonolysis fragments; Hydration methods: (1) Acid-catalyzed hydration (Markovnikov, prone to rearrangement), (2) Oxymercuration-Demercuration with Hg(OAc)2/NaBH4 (Markovnikov without rearrangement), (3) Hydroboration-Oxidation with B2H6/H2O2/OH- (anti-Markovnikov hydration with syn-stereochemistry); Baeyer’s reagent (cold dilute 1% alkaline KMnO4, test for unsaturation, purple color discharged forming syn-vicinal diol).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-hyd-5-alkynes-reactions',
      name: '11.7.5 Alkynes: Acidity, Kucherov Hydration & Selective Reductions',
      description: 'Nomenclature, structure (linear sp hybridization, 180° bond angle, two mutually perpendicular pi bonds); Acidity of terminal alkynes: sp carbon high electronegativity, reaction with NaNH2 liberating H2, precipitation of metal acetylides with ammoniacal AgNO3 (white precipitate of AgC≡CAg) and ammoniacal Cu2Cl2 (red precipitate of Cu2C2) serving as qualitative test distinguishing terminal from internal alkynes; Selective reductions: Lindlar’s catalyst (H2, Pd/CaCO3, poisoned with quinoline/lead acetate) giving cis-alkene (syn-addition); Birch reduction (Na in liquid NH3 with alcohol) giving trans-alkene (anti-addition); Kucherov hydration (dilute H2SO4 with HgSO4 at 333 K): Markovnikov addition of water forming unstable enols that tautomerize quantitatively into ketones (ethyne yields acetaldehyde); Cyclic trimerization of ethyne in red-hot iron tube at 873 K forming benzene.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-hyd-6-arenes-eas-mechanism',
      name: '11.7.6 Arenes: Structure & Electrophilic Aromatic Substitution (EAS)',
      description: 'Kekulé structure of benzene, resonance energy (150.6 kJ/mol or 36 kcal/mol); General mechanism of Electrophilic Aromatic Substitution (EAS): Step 1: generation of electrophile (E+), Step 2: attack on benzene ring forming resonance-stabilized arenium ion (sigma complex / Wheland intermediate), Step 3: loss of proton to restore aromaticity; Halogenation (Cl2/FeCl3 or Br2/FeBr3), Nitration (concentrated HNO3 + concentrated H2SO4 producing nitronium ion NO2+), Sulfonation (concentrated H2SO4 or fuming sulfuric acid producing neutral SO3 electrophile, reversible reaction).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-hyd-7-friedel-crafts-directing-effects',
      name: '11.7.7 Friedel-Crafts Reactions & Directive Influences of Substituents',
      description: 'Friedel-Crafts Alkylation: reaction of benzene with alkyl halide in presence of anhydrous AlCl3; limitations of FC alkylation: (1) carbocation rearrangements leading to isomeric products (e.g. 1-chloropropane gives isopropylbenzene / cumene), (2) polyalkylation because alkyl group activates the ring, (3) failed reaction on strongly deactivated rings (nitrobenzene, benzaldehyde); Friedel-Crafts Acylation: reaction with acyl halide or acid anhydride in presence of AlCl3 producing acylium ion (R-C≡O+), completely free from carbocation rearrangement and stopping cleanly at monoacylation; Directive influence of substituents: Activating ortho/para directors (+M/-I like -OH, -NH2, -OCH3, and +I hyperconjugative like -CH3); Deactivating meta directors (-M/-I like -NO2, -COOH, -CHO, -CN, -SO3H); The Halogen anomaly: Halogens are deactivating (due to strong -I effect) but ortho/para directing (due to +M resonance stabilization of the Wheland carbocation intermediate).',
      estimatedHours: 5,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Bromination of alkanes is intensely REGIOSELECTIVE compared to chlorination. The relative reactivity for hydrogen abstraction by bromine radical is $3^\\circ : 2^\\circ : 1^\\circ = 1600 : 82 : 1$, meaning bromination of isobutane ($(\\text{CH}_3)_3\\text{CH}$) yields $> 99\\%$ 2-bromo-2-methylpropane (tert-butyl bromide).',
    'The Kharasch Peroxide Effect applies EXCLUSIVELY to $\\text{HBr}$. It does NOT occur with $\\text{HCl}$ because the $\\text{H}-\\text{Cl}$ bond is too strong ($430.5\\,\\text{kJ/mol}$) for homolytic cleavage by alkoxy radicals in the first propagation step. It does NOT occur with $\\text{HI}$ because iodine atoms prefer to recombine into $\\text{I}_2$ ($151\\,\\text{kJ/mol}$) rather than adding to the alkene in the second propagation step.',
    'Stereoselective reductions of alkynes: Hydrogenation over Lindlar\'s catalyst ($\text{Pd}/\\text{CaCO}_3$ poisoned with quinoline) produces strictly CIS-alkenes via syn-addition. Reduction with Sodium in liquid Ammonia (Birch reduction) produces strictly TRANS-alkenes via anti-addition.',
    'Why halogens are ortho/para-directing yet deactivating: The strong $-I$ (inductive) effect of electronegative halogens withdraws electron density from the benzene ring overall, slowing the rate of reaction compared to benzene (deactivating). However, during electrophilic attack at the ortho or para positions, the lone pair on the halogen can donate by resonance ($+M$) to form an extra stable octet canonical structure, making ortho/para pathways energetically favored over meta.',
    'Terminal alkynes react with ammoniacal cuprous chloride ($\text{Cu}_2\text{Cl}_2 + \text{NH}_4\text{OH}$) to produce a characteristic RED precipitate of copper acetylide, and with ammoniacal silver nitrate (Tollens\' reagent) to produce a WHITE precipitate of silver acetylide. Internal alkynes (like but-2-yne) do not react.'
  ],
  commonTraps: [
    'Carbocation rearrangement in Alkylations vs Hydrations: Alkene hydration with dilute $\\text{H}_2\\text{SO}_4$ involves a carbocation and will rearrange (e.g. 3,3-dimethylbut-1-ene gives 2,3-dimethylbutan-2-ol). To achieve Markovnikov hydration WITHOUT rearrangement, use Oxymercuration-Demercuration ($\\text{Hg(OAc)}_2 / \\text{NaBH}_4$). To achieve Anti-Markovnikov hydration, use Hydroboration-Oxidation ($\\text{B}_2\\text{H}_6 / \\text{H}_2\\text{O}_2 / \\text{OH}^-$).',
    'Friedel-Crafts alkylation rearrangements: Benzene + 1-chloropropane + $\\text{AlCl}_3$ does NOT yield 1-phenylpropane! The primary propyl carbocation rearranges via a $1,2$-hydride shift to the more stable secondary isopropyl carbocation, yielding cumene (isopropylbenzene) as the major product.',
    'Aniline and Nitrobenzene in Friedel-Crafts reactions: Aniline NEVER undergoes Friedel-Crafts reactions because the Lewis acid $\\text{AlCl}_3$ coordinates to the lone pair of $-\\text{NH}_2$ forming $-\\overset{+}{\\text{N}}\\text{H}_2\\cdot\\text{AlCl}_3^-$, which strongly deactivates the ring. Nitrobenzene is too deactivated by $-\\text{NO}_2$ to react with alkyl/acyl halides.',
    'Conformations of 2-fluoroethanol and ethylene glycol: Normally anti is more stable than gauche. However, in 2-fluoroethanol and ethylene glycol ($\text{HO}-\text{CH}_2-\text{CH}_2-\text{OH}$), the GAUCHE conformation is MORE stable than the anti conformation due to stabilizing intramolecular hydrogen bonding between $-\\text{OH}$ and $-\\text{F}$ or $-\\text{OH}$.'
  ]
};
