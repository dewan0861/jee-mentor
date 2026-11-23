import { Chapter } from '@/types';

export const redoxReactionsChapter: Chapter = {
  id: 'chem-c11-redox-reactions',
  subject: 'chemistry',
  classLevel: 11,
  name: 'Redox Reactions',
  unit: 'Physical Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Oxidation Number Definition}: \\text{Formal charge an atom retains when all bonded electrons are awarded to more electronegative atoms}',
    '\\text{Equivalent Weight}: E = \\frac{\\text{Molar Mass}}{n\\text{-factor}} = \\frac{M}{n_f}',
    '\\text{Number of Equivalents}: \\text{Eq} = \\frac{w}{E} = \\text{Moles} \\times n_f = \\text{Normality} \\times V_{\\text{(L)}} = (n_f \\times M) \\times V_{\\text{(L)}}',
    '\\text{Law of Chemical Equivalence}: \\text{Equivalents of Oxidant} = \\text{Equivalents of Reductant} \\implies N_1 V_1 = N_2 V_2',
    'n\\text{-factor of } \\text{KMnO}_4 \\text{ (Acidic)}: \\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O} \\implies n_f = 5, \\; E = M/5',
    'n\\text{-factor of } \\text{KMnO}_4 \\text{ (Neutral/Faintly Alkaline)}: \\text{MnO}_4^- + 2\\text{H}_2\\text{O} + 3e^- \\longrightarrow \\text{MnO}_2 + 4\\text{OH}^- \\implies n_f = 3, \\; E = M/3',
    'n\\text{-factor of } \\text{KMnO}_4 \\text{ (Strongly Basic)}: \\text{MnO}_4^- + e^- \\longrightarrow \\text{MnO}_4^{2-} \\implies n_f = 1, \\; E = M/1',
    'n\\text{-factor of } \\text{K}_2\\text{Cr}_2\\text{O}_7 \\text{ (Acidic)}: \\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\longrightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O} \\implies n_f = 6, \\; E = M/6',
    'n\\text{-factor of } \\text{FeC}_2\\text{O}_4 \\text{ (Oxidized to } \\text{Fe}^{3+} \\text{ and } \\text{CO}_2\\text{)}: \\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} (1e^-) + \\text{C}_2\\text{O}_4^{2-} \\rightarrow 2\\text{CO}_2 (2e^-) \\implies n_f = 3, \\; E = M/3',
    'n\\text{-factor in Disproportionation}: \\frac{1}{n_{\\text{disprop}}} = \\frac{1}{n_{\\text{ox}}} + \\frac{1}{n_{\\text{red}}} \\implies n_{\\text{disprop}} = \\frac{n_{\\text{ox}} \\cdot n_{\\text{red}}}{n_{\\text{ox}} + n_{\\text{red}}}'
  ],
  topics: [
    {
      id: 'chem-redox-1-concept-oxidation-reduction',
      name: '11.5.1 Concept of Redox: Classical vs Electronic Transfer',
      description: 'Historical definitions (addition/removal of oxygen and hydrogen); modern electronic concept: Oxidation as de-electronation (loss of electrons, increase in oxidation number), Reduction as electronation (gain of electrons, decrease in oxidation number); oxidizing agent / oxidant (accepts electrons, gets reduced) vs reducing agent / reductant (donates electrons, gets oxidized); competitive electron transfer experiments (Zn rod in CuSO4 vs Cu rod in AgNO3).',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'chem-redox-2-oxidation-number-peroxy-linkage',
      name: '11.5.2 Oxidation Number Determination & Special Structures',
      description: 'IUPAC rules for assigning oxidation numbers; fractional oxidation states in mixed-valence oxides (Fe3O4 = FeO . Fe2O3, Pb3O4 = 2PbO . PbO2) and organic suboxides (carbon suboxide C3O2 has C states +2, 0, +2; tribromooctoxide Br3O8 has Br states +6, +4, +6; tetrathionate S4O6^2- has S states +5, 0, 0, +5); peroxide and superperoxide linkages: Caro’s acid (H2SO5, S is +6 not +8 due to -O-O- bond), Marshall’s acid (H2S2O8, S is +6), chromium peroxide butterfly structure (CrO5 has two peroxy linkages, Cr is +6 not +10).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-redox-3-types-disproportionation',
      name: '11.5.3 Types of Redox Reactions: Disproportionation & Comproportionation',
      description: 'Classification: Combination reactions, Decomposition reactions, Displacement reactions (metal and non-metal displacement); Disproportionation reactions where an element in an intermediate oxidation state is simultaneously oxidized and reduced (e.g. decomposition of H2O2, action of cold dilute NaOH on Cl2 giving Cl- and ClO-, hot concentrated NaOH on Cl2 giving Cl- and ClO3-, decomposition of phosphorus in alkaline medium P4 + 3OH- + 3H2O -> PH3 + 3H2PO2-); Comproportionation (synproportionation) reactions where two species containing an element in different oxidation states react to yield a single intermediate state.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-redox-4-balancing-ion-electron',
      name: '11.5.4 Balancing Redox Reactions: Ion-Electron & Oxidation Number Methods',
      description: 'Stepwise balancing using Ion-Electron (Half-reaction) method: (1) split into oxidation and reduction half-reactions, (2) balance atoms other than O and H, (3) balance O atoms by adding H2O, (4) balance H atoms by adding H+ (in acidic medium) or adding H2O and OH- (in basic medium), (5) balance charges by adding electrons, (6) equalize electrons transferred and sum half-reactions; Oxidation Number method based on total increase in oxidation number = total decrease in oxidation number.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-redox-5-equivalent-concept-n-factor',
      name: '11.5.5 The Equivalent Concept & Comprehensive n-Factor Rules',
      description: 'Rigorous definition of n-factor (valence factor): (1) for acids: basicity (replaceable H+), e.g. H3PO4 (n=3), H3PO3 (n=2), H3PO2 (n=1); (2) for bases: acidity (replaceable OH-); (3) for non-redox salts: total positive or negative charge; (4) for oxidizing/reducing agents: total change in oxidation state or moles of electrons exchanged per mole of compound; comprehensive n-factor determination for complex multi-center redox species (e.g., FeS2, Cu2S, FeC2O4).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-redox-6-redox-titrations',
      name: '11.5.6 Redox Titrations & Volumetric Indicators',
      description: 'Permanganate titrations (permanganometry): KMnO4 serves as a self-indicator (intense purple MnO4- reduced to virtually colourless Mn2+, first permanent faint pink drop marks endpoint; acidic medium maintained strictly with dilute H2SO4, NEVER HCl due to oxidation to Cl2, and NEVER HNO3 due to competing oxidation); Dichromate titrations: K2Cr2O7 as primary standard with redox indicator diphenylamine; Iodometry (indirect titration of liberated I2 with standard Na2S2O3 hypo using starch indicator forming intense blue-black starch-triiodide complex) vs Iodimetry (direct titration with standard I2 solution); quantitative calculations: percentage purity, volume strength of H2O2 (Volume strength = 5.6 * Normality = 11.2 * Molarity).',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'In Caro’s acid ($\\text{H}_2\\text{SO}_5$), sulfur has an apparent oxidation state of $+8$ by algebraic formula, which is impossible because sulfur has only 6 valence electrons! The actual oxidation state is $+6$ because two oxygen atoms form a peroxy bond ($\\text{O}-\\text{O}$) with oxidation number $-1$ each: $\\text{H}-\\text{O}-\\text{SO}_2-\\text{O}-\\text{O}-\\text{H}$.',
    'Chromium pentoxide ($\\text{CrO}_5$) contains two peroxy linkages in a butterfly structure. The oxidation state of chromium is $+6$, NOT $+10$.',
    'In permanganate titrations, dilute $\\text{H}_2\\text{SO}_4$ is the only suitable acid. Dilute $\\text{HCl}$ cannot be used because $\\text{KMnO}_4$ oxidizes $\\text{Cl}^-$ into poisonous $\\text{Cl}_2$ gas, causing erroneous overconsumption. Dilute $\\text{HNO}_3$ cannot be used because it is itself a strong oxidizing agent.',
    'Volume strength of hydrogen peroxide: $\\text{Volume Strength} = 11.2 \\times \\text{Molarity} = 5.6 \\times \\text{Normality}$. Thus, a "10 volume" $\\text{H}_2\\text{O}_2$ solution has molarity $M = 10 / 11.2 \\approx 0.89\\,\\text{M}$.',
    'Fluorine exhibits ONLY $-1$ oxidation state in all its compounds because it is the most electronegative element in the periodic table and possesses no vacant d-orbitals to expand its octet.'
  ],
  commonTraps: [
    'Calculating n-factor for $\\text{FeC}_2\\text{O}_4$ during oxidation by $\\text{KMnO}_4$: Both $\\text{Fe}^{2+}$ AND $\\text{C}_2\\text{O}_4^{2-}$ are oxidized! $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + 1e^-$ ($1$ electron) and $\\text{C}_2\\text{O}_4^{2-} \\rightarrow 2\\text{CO}_2 + 2e^-$ ($2$ electrons). The total moles of electrons lost per mole of $\\text{FeC}_2\\text{O}_4$ is $1 + 2 = 3$, so $n_f = 3$ (NOT 1 or 2!).',
    'Confusing average oxidation state with individual atom oxidation state: In sodium thiosulfate $\\text{Na}_2\\text{S}_2\\text{O}_3$, the average oxidation state of sulfur is $+2$. However, structurally, the terminal sulfur has an oxidation state of $-2$ (or $0$) and the central sulfur is $+6$ (or $+4$). In tetrathionate $\\text{S}_4\\text{O}_6^{2-}$, the two bridging sulfurs have oxidation state $0$ while terminal sulfurs are $+5$.',
    'Using Normality equation ($N_1 V_1 = N_2 V_2$) without multiplying Molarity by $n$-factor: $N = M \\times n_f$. When equating moles, use: $n_1 M_1 V_1 = n_2 M_2 V_2$.',
    'Assuming disproportionation occurs in all halogen reactions: Fluorine NEVER undergoes disproportionation because it cannot show any positive oxidation state.'
  ]
};
