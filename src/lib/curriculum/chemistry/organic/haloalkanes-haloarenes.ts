import { Chapter } from '@/types';

export const haloalkanesHaloarenesChapter: Chapter = {
  id: 'chem-c12-haloalkanes-haloarenes',
  subject: 'chemistry',
  classLevel: 12,
  name: 'Haloalkanes and Haloarenes',
  unit: 'Organic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{S}_\\text{N}2 \\text{ Rate Law}: \\text{Rate} = k [R-\\text{X}] [\\text{Nu}^-] \\quad (\\text{Order } 2, \\; \\text{Reactivity: } \\text{CH}_3\\text{X} > 1^\\circ > 2^\\circ \\gg 3^\\circ, \\; 100\\% \\text{ Walden Inversion})',
    '\\text{S}_\\text{N}1 \\text{ Rate Law}: \\text{Rate} = k [R-\\text{X}] \\quad (\\text{Order } 1, \\; \\text{Reactivity: } 3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3\\text{X}, \\; \\text{Racemization with slight inversion})',
    '\\text{Leaving Group Ability}: \\text{I}^- > \\text{Br}^- > \\text{Cl}^- \\gg \\text{F}^- \\quad (\\text{parallels conjugate acid strength: } \\text{HI} > \\text{HBr} > \\text{HCl} \\gg \\text{HF})',
    "\\text{Finkelstein Reaction}: R-\\text{Cl}/R-\\text{Br} + \\text{NaI} \\xrightarrow{\\text{dry acetone}} R-\\text{I} + \\text{NaCl}/\\text{NaBr} \\downarrow \\quad (\\text{driven by Le Chatelier's principle})",
    '\\text{Swarts Reaction}: 2 R-\\text{Cl} + \\text{SbF}_3 \\; (\\text{or } \\text{AgF}, \\text{Hg}_2\\text{F}_2, \\text{CoF}_2) \\longrightarrow 2 R-\\text{F} + \\text{SbCl}_3',
    '\\text{Ambident Cyanide}: R-\\text{X} + \\text{KCN} \\xrightarrow{\\text{aq. EtOH}} R-\\text{CN} \\; (\\text{nitrile}); \\quad R-\\text{X} + \\text{AgCN} \\longrightarrow R-\\text{NC} \\; (\\text{isonitrile})',
    '\\text{Ambident Nitrite}: R-\\text{X} + \\text{KNO}_2 \\longrightarrow R-\\text{ONO} \\; (\\text{nitrite}); \\quad R-\\text{X} + \\text{AgNO}_2 \\longrightarrow R-\\text{NO}_2 \\; (\\text{nitroalkane})',
    "\\text{Grignard Reagent Acid-Base}: R-\\text{MgX} + \\text{H-Z} \\; (\\text{Z} = -\\text{OH}, -\\text{OR}, -\\text{NH}_2, -\\text{C}\\equiv\\text{CH}) \\longrightarrow R-\\text{H} + \\text{Mg(Z)X}",
    '\\text{Fittig Reaction}: 2 \\text{Ar}-\\text{X} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\text{Ar}-\\text{Ar} \\; (\\text{Biphenyl}) + 2\\text{NaX}'
  ],
  topics: [
    {
      id: 'chem-rx-1-preparations-halogen-exchange',
      name: '12.7.1 Synthesis of Haloalkanes & Halogen Exchange Reactions',
      description: 'Preparation from alcohols: using hydrogen halides (Lucas reagent ZnCl2 + HCl), phosphorus halides (PCl5, PCl3), and thionyl chloride SOCl2 (Darzens procedure: best method because byproducts SO2 and HCl are gases that escape cleanly); Halogen exchange reactions: Finkelstein reaction (synthesis of alkyl iodides from chlorides/bromides using NaI in dry acetone, where NaCl/NaBr precipitates driving reaction to completion) and Swarts reaction (synthesis of alkyl fluorides using metallic fluorides AgF, Hg2F2, CoF3, SbF3); Free radical allylic/benzylic halogenation using NBS (N-bromosuccinimide).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-rx-2-sn1-sn2-mechanisms',
      name: '12.7.2 Nucleophilic Substitution: Comprehensive SN1 vs SN2 Mechanisms',
      description: 'SN2 mechanism: bimolecular, concerted, single-step, backside attack, pentacoordinate carbon transition state, strict Walden inversion of configuration, steric hindrance control (reactivity CH3X > 1° > 2° >> 3°, neopentyl halide is inert due to extreme steric congestion), acceleration by polar aprotic solvents (DMSO, DMF, acetone); SN1 mechanism: unimolecular, two-step, rate-determining ionization into planar sp2 carbocation intermediate, nucleophilic attack from both faces yielding racemization (with partial inversion due to intimate ion pair shielding), electronic carbocation stability control (3° > 2° > 1°, allylic and benzylic halides exceptionally reactive), carbocation rearrangements (hydride/methyl shifts), acceleration by polar protic solvents (H2O, EtOH).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-rx-3-elimination-e1-e2-saytzeff',
      name: '12.7.3 Elimination Reactions (E1 and E2) & Competition with Substitution',
      description: 'E2 elimination: concerted, anti-periplanar geometry requirement for beta-hydrogen and leaving halogen; regioselectivity: Saytzeff product (more substituted, more stable alkene) formed with unhindered bases (alcoholic KOH), Hofmann product (less substituted alkene) formed when base is sterically hindered (potassium tert-butoxide t-BuOK) or leaving group is fluoride; E1 elimination: two steps via carbocation intermediate; factors deciding substitution vs elimination: nature of alkyl halide (3° favors elimination, 1° favors substitution), strength and steric bulk of base/nucleophile, temperature (higher temperature favors elimination due to favorable entropy Delta S > 0).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-rx-4-ambident-nucleophiles',
      name: '12.7.4 Ambident Nucleophiles: Cyanide & Nitrite Divergence',
      description: 'Ambident nucleophiles possess two nucleophilic centers: (1) Cyanide ion (:C≡N:^-): KCN is ionic, carbon atom is less electronegative and forms a stronger C-C bond with alkyl group yielding alkyl cyanides / nitriles (R-CN); AgCN is predominantly covalent with Ag-C bond, leaving the nitrogen lone pair free to attack, yielding alkyl isocyanides / carbylamines (R-NC); (2) Nitrite ion (O=N-O^-): KNO2 is predominantly ionic, oxygen attacks yielding alkyl nitrites (R-ONO); AgNO2 is covalent with Ag-O bond, nitrogen attacks yielding nitroalkanes (R-NO2).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-rx-5-haloarenes-snar-benzyne',
      name: '12.7.5 Haloarenes: Inertness, SNAr & Benzyne Elimination-Addition',
      description: 'Extreme unreactivity of chlorobenzene towards nucleophilic substitution explained by: (1) resonance stabilization giving partial double bond character to C-Cl bond, (2) sp2 hybridized carbon holding halogen more tightly than sp3, (3) instability of phenyl cation, (4) electrostatic repulsion from benzene pi-electron cloud; Drastic conditions for Dow’s process (NaOH at 623 K, 300 atm); Dramatic activation of SNAr by strong electron-withdrawing groups (-NO2) at ORTHO and PARA positions (stabilizing the Meisenheimer carbanionic sigma-complex); 2,4,6-trinitrochlorobenzene (picryl chloride) hydrolyzes smoothly merely upon warming with water; Elimination-Addition (Benzyne) mechanism: reaction of halobenzenes with KNH2 in liquid NH3 involving neutral aromatic benzyne intermediate leading to cine-substitution and direct substitution mixture.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-rx-6-organometallics-couplings',
      name: '12.7.6 Organometallics & Carbon-Carbon Couplings (Grignard, Fittig, Wurtz-Fittig)',
      description: 'Grignard Reagents (R-MgX): synthesis in anhydrous diethyl ether (ether coordinates to Mg stabilizing the reagent); highly polar carbon-metal bond (R^delta- - Mg^delta+); dual behavior as powerful carbanion nucleophile and strong Bronsted base; instantaneous proton abstraction from compounds containing active hydrogen (H2O, D2O, ROH, RCOOH, RNH2, terminal alkynes) to form alkanes; reactions with carbonyls to synthesize alcohols; Wurtz-Fittig reaction (Ar-X + R-X + 2 Na -> Ar-R); Fittig reaction (2 Ar-X + 2 Na -> Biphenyl); Ullmann reaction (2 Ar-I + Cu -> Biphenyl).',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Thionyl chloride ($\\text{SOCl}_2$) is the most preferred reagent for preparing alkyl chlorides from alcohols because the two byproducts, sulfur dioxide ($\\text{SO}_2$) and hydrogen chloride ($\\text{HCl}$), are both gases that escape cleanly from the reaction mixture, leaving behind virtually pure alkyl chloride.',
    'Neopentyl chloride ($(\\text{CH}_3)_3\\text{C}-\\text{CH}_2\\text{Cl}$) is a primary alkyl halide, yet it is VIRTUALLY INERT towards $\\text{S}_\\text{N}2$ nucleophilic displacement because the bulky tert-butyl group creates massive steric hindrance that shields the backside of the primary carbon.',
    '$\\text{S}_\\text{N}1$ reactions on chiral alkyl halides proceed with RACEMIZATION accompanied by a slight excess of INVERSION. This slight excess of inversion occurs because the departed halide ion shields the front face as an intimate ion pair, leaving the back face slightly more accessible to the incoming nucleophile.',
    'Ortho and para nitro groups activate chlorobenzene towards nucleophilic substitution ($\text{S}_\\text{N}\\text{Ar}$), but meta nitro groups have negligible activating effect. This is because the negative charge in the Meisenheimer intermediate can be delocalized directly onto the electronegative oxygens of the $-\\text{NO}_2$ group ONLY when $-\\text{NO}_2$ is at ortho or para positions.',
    'Grignard reagents MUST be prepared under strictly anhydrous conditions because they react violently with trace amounts of water or any protic solvent to form alkanes: $\\text{CH}_3\\text{MgBr} + \\text{H}_2\\text{O} \\longrightarrow \\text{CH}_4 + \\text{Mg(OH)Br}$.'
  ],
  commonTraps: [
    'Reaction of alkyl halides with $\\text{KCN}$ vs $\\text{AgCN}$: $\\text{KCN}$ gives cyanides ($R-\\text{CN}$), while $\\text{AgCN}$ gives isocyanides ($R-\\text{NC}$). Similarly, $\\text{KNO}_2$ gives nitrites ($R-\\text{ONO}$), while $\\text{AgNO}_2$ gives nitroalkanes ($R-\\text{NO}_2$). Memorize this ionic vs covalent donor rule!',
    'Solvent effects in $\\text{S}_\\text{N}1$ vs $\\text{S}_\\text{N}2$: Polar protic solvents ($\text{H}_2\text{O}, \text{EtOH}$) favor $\\text{S}_\\text{N}1$ because hydrogen bonding stabilizes both the developing carbocation and the halide leaving group. Polar aprotic solvents ($\text{acetone}, \text{DMSO}, \text{DMF}$) favor $\\text{S}_\\text{N}2$ because they solvate cations without hydrogen-bonding to nucleophilic anions, maximizing nucleophilicity.',
    'Assuming chlorobenzene will not react with nucleophiles under any condition: While chlorobenzene requires $623\\,\\text{K}$ and $300\\,\\text{atm}$ ($\text{Dow\'s process}$), adding three $-\\text{NO}_2$ groups ($2,4,6$-trinitrochlorobenzene) allows substitution to occur simply by warming with warm water at $323\\,\\text{K}$!',
    'Elimination with bulky base: Potassium tert-butoxide ($t\\text{-BuOK}$) is sterically hindered and abstracts the most accessible, least sterically hindered $\\beta$-hydrogen, giving the **Hofmann alkene** (less substituted) as the major product, NOT the Saytzeff alkene.'
  ]
};
