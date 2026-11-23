import { Chapter } from '@/types';

export const coordinationCompoundsChapter: Chapter = {
  id: 'chem-c12-coordination-compounds',
  subject: 'chemistry',
  classLevel: 12,
  name: 'Coordination Compounds',
  unit: 'Inorganic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Octahedral CFSE}: \\text{CFSE} = \\left[-0.4 \\cdot n_{t_{2g}} + 0.6 \\cdot n_{e_g}\\right] \\Delta_o + m P',
    '\\text{Tetrahedral Splitting Relation}: \\Delta_t = \\frac{4}{9} \\Delta_o \\quad (\\text{always High Spin because } \\Delta_t < P)',
    '\\text{Spin-Only Magnetic Moment}: \\mu_s = \\sqrt{n(n+2)}\\,\\text{BM}',
    '\\text{High Spin vs Low Spin Criteria}: \\Delta_o < P \\implies \\text{High Spin (Weak field)}; \\quad \\Delta_o > P \\implies \\text{Low Spin (Strong field)}',
    '\\text{Spectrochemical Series}: \\text{I}^- < \\text{Br}^- < \\text{S}^{2-} < \\text{SCN}^- < \\text{Cl}^- < \\text{F}^- < \\text{OH}^- < \\text{ox}^{2-} < \\text{H}_2\\text{O} < \\text{NCS}^- < \\text{edta}^{4-} < \\text{NH}_3 < \\text{en} < \\text{NO}_2^- < \\text{CN}^- < \\text{CO}',
    '\\text{Synergic Bonding}: \\text{Higher negative charge on metal} \\implies \\text{greater } \\pi\\text{-back donation} \\implies \\text{stronger } \\text{M}-\\text{C bond, weaker } \\text{C}-\\text{O bond}',
    '\\text{Werner Relation}: \\text{Moles of AgCl ppt} = \\text{Number of ionizable chloride ions outside the coordination sphere}'
  ],
  topics: [
    {
      id: 'chem-coord-1-werners-theory',
      name: "12.6.1 Werner's Coordination Theory & Molar Conductance",
      description: "Postulates of Alfred Werner: Primary valency (ionizable, corresponds to oxidation state, non-directional, satisfied by negative ions) vs Secondary valency (non-ionizable, corresponds to coordination number, fixed directional orientation defining stereochemistry, satisfied by neutral molecules or anions); historical experiments on CoCl3 . nNH3 complexes; predicting moles of AgCl precipitated per mole of complex with AgNO3; molar conductivity and number of ions in solution (e.g. [Pt(NH3)4Cl2]Cl2 gives 3 ions, 1:2 electrolyte).",
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-coord-2-ligands-chelation-nomenclature',
      name: '12.6.2 Ligand Types, Chelate Effect & IUPAC Nomenclature',
      description: 'Coordination entity, central atom, coordination sphere, coordination polyhedron; ligand classification by denticity: unidentate (H2O, NH3, Cl-, CN-), didentate (ethane-1,2-diamine en, oxalate ox2-, glycinate gly-), polydentate (hexadentate EDTA4- ethylenediaminetetraacetate); Ambidentate ligands possessing two donor atoms (NO2- nitro vs ONO- nitrito; SCN- thiocyanato vs NCS- isothiocyanato); Chelate effect (enhanced thermodynamic stability due to multidentate ligand forming 5- or 6-membered chelate rings); IUPAC rules for naming coordination entities.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-coord-3-isomerism-structural-stereo',
      name: '12.6.3 Isomerism: Structural & Stereoisomerism',
      description: 'Structural isomerism: (1) Ionization isomerism (e.g. [Co(NH3)5SO4]Br gives AgBr ppt vs [Co(NH3)5Br]SO4 gives BaSO4 ppt), (2) Hydrate/solvate isomerism (e.g. [Cr(H2O)6]Cl3 violet vs [Cr(H2O)5Cl]Cl2 . H2O blue-green), (3) Linkage isomerism via ambidentate ligands (nitro vs nitrito), (4) Coordination isomerism; Stereoisomerism: Geometrical isomerism: cis/trans in square planar [MA2B2] and octahedral [MA4B2], facial (fac) vs meridional (mer) in octahedral [MA3B3]; Optical isomerism (chirality): non-superimposable mirror images in octahedral complexes containing didentate ligands (e.g. cis-[Co(en)2Cl2]+ is chiral/optically active, while trans-[Co(en)2Cl2]+ has a plane of symmetry and is optically inactive / achiral).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-coord-4-valence-bond-theory',
      name: '12.6.4 Valence Bond Theory (VBT) & Magnetic Moments',
      description: 'Orbital hybridization model; Octahedral complexes: Inner orbital / low spin / hyperligated complexes (d2sp3 using (n-1)d orbitals, e.g. [Fe(CN)6]4-, diamagnetic) vs Outer orbital / high spin complexes (sp3d2 using nd orbitals, e.g. [FeF6]3-, paramagnetic); Square planar complexes (dsp2, e.g. [Ni(CN)4]2-, diamagnetic) vs Tetrahedral complexes (sp3, e.g. [NiCl4]2-, paramagnetic with 2 unpaired electrons); limitations of VBT: failure to explain spectrochemical series, temperature-dependent magnetism, and electronic absorption spectra / color.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-coord-5-crystal-field-theory',
      name: '12.6.5 Crystal Field Theory (CFT) & Spectrochemical Series',
      description: 'Electrostatic crystal field model; degenerate 3d orbitals splitting in octahedral ligand field into triply degenerate t2g (dxy, dyz, dxz, energy -0.4 Delta_o) and doubly degenerate eg (dz2, dx2-y2, energy +0.6 Delta_o); calculation of Crystal Field Stabilization Energy (CFSE); pairing energy P; high spin vs low spin configurations for d4 to d7; Tetrahedral splitting Delta_t = 4/9 Delta_o (always high spin due to small Delta_t); Spectrochemical series IUPAC order; color of coordination complexes as d-d transitions; influence of heating on color loss (e.g. anhydrous CuSO4 is white).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-coord-6-metal-carbonyls-synergy-applications',
      name: '12.6.6 Metal Carbonyls, Synergic Bonding & Biological Significance',
      description: 'Homoleptic metal carbonyls: Ni(CO)4 tetrahedral, Fe(CO)5 trigonal bipyramidal, Cr(CO)6 octahedral, Co2(CO)8, Mn2(CO)10; Synergic bonding mechanism: sigma bond formed by donation of lone pair on carbon into vacant metal d-orbital, and pi-backbond formed by donation of electron density from filled metal d-orbital into empty pi* antibonding orbital of CO; strengthening of M-C bond accompanied by weakening of C-O bond (IR stretching frequency nu_CO trends); Biological coordination complexes: Chlorophyll (Mg2+), Hemoglobin (Fe2+), Vitamin B12 / cyanocobalamin (Co3+), Cisplatin cis-[Pt(NH3)2Cl2] as anti-cancer drug.',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'trans-[Co(en)2Cl2]+ is OPTICALLY INACTIVE because it possesses a plane of symmetry, whereas cis-[Co(en)2Cl2]+ lacks any plane or center of symmetry, is chiral, and resolves into dextro (d) and laevo (l) enantiomers.',
    'Square planar $[\\text{MA}_2\\text{B}_2]$ complexes (e.g. $[\\text{Pt(NH}_3)_2\\text{Cl}_2]$) exhibit geometrical isomerism (cis and trans), but can NEVER exhibit optical isomerism because the four ligands and the central metal atom lie entirely in a single plane, creating an inherent molecular plane of symmetry.',
    'Tetrahedral complexes of the type $[\\text{MA}_2\\text{B}_2]$ NEVER show geometrical isomerism because all four positions in a regular tetrahedron are mutually adjacent and equidistant from each other.',
    'Synergic back-bonding in metal carbonyls: As the negative charge on the central metal increases, the extent of $d\\pi \\rightarrow \\pi^*$ back-bonding increases. This strengthens the $\\text{M}-\\text{C}$ bond and WEAKENS the $\\text{C}-\\text{O}$ bond, leading to the lowest $\\text{C}-\\text{O}$ bond order and lowest IR stretching frequency in anionic carbonyls: $\\nu_{\\text{CO}}([\\text{V(CO)}_6]^-) < \\nu_{\\text{CO}}([\\text{Cr(CO)}_6]) < \\nu_{\\text{CO}}([\\text{Mn(CO)}_6]^+)$.',
    'Tetrahedral complexes are ALWAYS high-spin complexes because the crystal field splitting energy $\\Delta_t$ is very small ($\\Delta_t = \\frac{4}{9}\\Delta_o$), which is never large enough to overcome electron pairing energy ($P$).'
  ],
  commonTraps: [
    'Assuming $[\\text{Ni(CO)}_4]$ and $[\\text{Ni(CN)}_4]^{2-}$ have the same geometry: Both are diamagnetic ($\mu = 0$), but $[\\text{Ni(CO)}_4]$ contains neutral $\\text{Ni}(0)$ ($3d^{10}$, $sp^3$ hybridization, TETRAHEDRAL), while $[\\text{Ni(CN)}_4]^{2-}$ contains $\\text{Ni}^{2+}$ ($3d^8$, $dsp^2$ hybridization, SQUARE PLANAR).',
    'Identifying linkage isomerism: Linkage isomerism is possible ONLY when an ambidentate ligand is present ($\\text{NO}_2^-/\\text{ONO}^-$, $\\text{SCN}^-/\\text{NCS}^-$, $\\text{CN}^-/\\text{NC}^-$). If a compound has no ambidentate ligand, linkage isomerism is impossible.',
    'Calculating moles of $\\text{AgCl}$ precipitate: Only chloride ions OUTSIDE the square coordination brackets are ionizable and precipitated by $\\text{AgNO}_3$. In $[\\text{Co(NH}_3)_4\\text{Cl}_2]\\text{Cl}$, only ONE mole of $\\text{AgCl}$ precipitates per mole of complex, because two chlorido ligands are firmly bonded inside the coordination sphere.',
    'Pairing in $d^8$ octahedral complexes: In an octahedral field, whether the ligand is strong or weak, a $d^8$ ion (like $\\text{Ni}^{2+}$) ALWAYS has the configuration $t_{2g}^6 e_g^2$ with exactly TWO unpaired electrons. Ligand strength cannot force pairing in $e_g$ orbitals.'
  ]
};
