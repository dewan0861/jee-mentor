import { Chapter } from '@/types';

export const classificationPeriodicityChapter: Chapter = {
  id: 'chem-c11-periodicity',
  subject: 'chemistry',
  classLevel: 11,
  name: 'Classification of Elements and Periodicity in Properties',
  unit: 'Inorganic Chemistry',
  weightage: 'medium',
  isRationalizedJEE2027: true,
  formulaList: [
    "\\text{Moseley's Law}: \\sqrt{\\nu} = a (Z - b) \\quad (\\nu = \\text{characteristic X-ray frequency, } Z = \\text{atomic number})",
    "\\text{Effective Nuclear Charge}: Z_{\\text{eff}} = Z - \\sigma \\quad (\\sigma = \\text{Slater's screening constant})",
    '\\text{Slater Rules for }(ns, np): \\sigma = 0.35 \\times (\\text{same shell}) + 0.85 \\times (n-1\\text{ shell}) + 1.00 \\times (n-2\\text{ and deeper})',
    '\\text{Isoelectronic Radii Rule}: r \\propto \\frac{1}{Z} \\quad (\\text{e.g. } r_{\\text{N}^{3-}} > r_{\\text{O}^{2-}} > r_{\\text{F}^-} > r_{\\text{Na}^+} > r_{\\text{Mg}^{2+}} > r_{\\text{Al}^{3+}})',
    '\\text{Pauling Electronegativity Difference}: X_A - X_B = 0.208 \\sqrt{\\Delta} \\; (\\text{in kcal/mol}) = 0.1017 \\sqrt{\\Delta} \\; (\\text{in kJ/mol})',
    '\\text{Mulliken Electronegativity}: X_M = \\frac{IE + EA}{2} \\; (\\text{in eV}), \\quad X_P \\approx \\frac{X_M}{2.8}',
    '\\text{Percentage Ionic Character (Hannay-Smith)}: \\% \\text{ Ionic} = 16 |X_A - X_B| + 3.5 (X_A - X_B)^2',
    '\\text{Electron Gain Enthalpy}: \\Delta_{eg} H = -EA \\quad (\\text{Cl is most negative: } -349\\,\\text{kJ/mol} > \\text{F: } -328\\,\\text{kJ/mol})'
  ],
  topics: [
    {
      id: 'chem-per-1-modern-law-blocks',
      name: '11.2.1 Modern Periodic Law & Long Form of Periodic Table',
      description: "Moseley's X-ray experiment establishing atomic number Z as fundamental basis; statement of Modern Periodic Law: physical and chemical properties of elements are periodic functions of their atomic numbers; horizontal periods (7) and vertical groups (18); IUPAC nomenclature for elements with Z > 100 (e.g. 101 Unnilunium Unu, 118 Ununoctium Uuo); electronic configuration basis for classification into s, p, d, and f blocks.",
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'chem-per-2-radii-trends-isoelectronic',
      name: '11.2.2 Atomic & Ionic Radii Trends & Isoelectronic Series',
      description: 'Types of radii: Covalent radius (homonuclear and heteronuclear), Metallic radius, and van der Waals radius (order: r_vdw > r_metallic > r_covalent); general periodic trends: radius decreases across period from left to right due to increase in Z_eff, increases down group due to addition of principal shells; Lanthanoid contraction effect on 4d vs 5d pairs (Zr ≈ Hf, Nb ≈ Ta); radii of isoelectronic ions: inversely proportional to nuclear charge Z (O2- > F- > Na+ > Mg2+ > Al3+).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-per-3-ionization-enthalpy-exceptions',
      name: '11.2.3 Ionization Enthalpy & Crucial Anomalies',
      description: 'Definition of first, second, and third ionization enthalpies (successive IE1 < IE2 < IE3); factors governing IE: nuclear charge, atomic size, screening effect, penetration of orbitals (s > p > d > f), and electronic subshell stability (half-filled and completely filled); famous anomalies: B (2p1) < Be (2s2 full subshell penetration), O (2p4) < N (2p3 half-filled stability), Ga ≈ Al anomaly due to transition contraction (poor shielding by 3d10 electrons), Tl > In anomaly due to lanthanoid contraction (4f14 shielding).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-per-4-electron-gain-enthalpy',
      name: '11.2.4 Electron Gain Enthalpy & Group 16/17 Reversals',
      description: 'Definition of electron gain enthalpy Delta_eg H; exothermic first electron gain vs always endothermic second electron gain (e.g. O + e- -> O- is exothermic, but O- + e- -> O2- is endothermic due to strong electrostatic electron-electron repulsion); periodic trends; the famous 2nd vs 3rd period anomaly: Cl has a more negative Delta_eg H (-349 kJ/mol) than F (-328 kJ/mol), and S (-200 kJ/mol) is more negative than O (-141 kJ/mol) due to small compact 2p orbitals experiencing intense interelectronic repulsions; positive Delta_eg H of noble gases, Be, Mg, and N.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-per-5-electronegativity-scales',
      name: '11.2.5 Electronegativity Trends, Scales & Bond Polarity',
      description: 'Definition of electronegativity as tendency of an atom in a molecule to attract shared pair of electrons towards itself; Pauling scale (Fluorine = 4.0, Oxygen = 3.5, Chlorine = 3.0, Nitrogen = 3.0); Mulliken scale and Allred-Rochow scale; relationship with hybridization (sp 50% s-character > sp2 33% > sp3 25%) and oxidation state (higher O.S. = higher EN); calculating percentage ionic character using Hannay-Smith equation.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-per-6-reactivity-diagonal-oxides',
      name: '11.2.6 Periodic Trends in Chemical Reactivity, Oxides & Diagonal Relationships',
      description: 'Anomalous behaviour of second period elements (small size, high charge/radius ratio, high EN, non-availability of d-orbitals restricting covalency to 4); Diagonal relationship: Li resembling Mg, Be resembling Al (both form amphoteric oxides/hydroxides, covalent chlorides, polymeric structures), B resembling Si; periodic trends in oxide nature: across period oxides change from strongly basic (Na2O) -> amphoteric (Al2O3, BeO, ZnO, SnO, PbO) -> acidic (P4O10, SO3, Cl2O7); acidity of oxoacids increases with higher oxidation state of central atom.',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Chlorine has the HIGHEST (most negative) electron gain enthalpy of all elements in the periodic table ($-349\\,\\text{kJ/mol}$), beating Fluorine ($-328\\,\\text{kJ/mol}$). This is because adding an electron to the compact $2p$ orbital of Fluorine encounters massive interelectronic repulsion, whereas the larger $3p$ orbital of Chlorine accommodates the electron easily.',
    'Fluorine is the MOST electronegative element ($4.0$ on Pauling scale), followed by Oxygen ($3.5$), Nitrogen ($3.0$), and Chlorine ($3.0$). Note that while Cl and N have nearly equal electronegativity ($3.0$), Nitrogen forms stronger hydrogen bonds due to its much smaller atomic radius.',
    'Second electron gain enthalpy is ALWAYS endothermic ($\\Delta_{eg} H > 0$) for every element, because the incoming electron must overcome strong electrostatic repulsion from the already negative monoanion: $\\text{O}^-(g) + e^- \\longrightarrow \\text{O}^{2-}(g)$ has $\\Delta_{eg} H = +780\\,\\text{kJ/mol}$.',
    'Lanthanoid contraction causes pairs of $4d$ and $5d$ transition elements in the same group to have virtually identical atomic and ionic radii: $\\text{Zr} (160\\,\\text{pm}) \\approx \\text{Hf} (159\\,\\text{pm})$ and $\\text{Nb} (146\\,\\text{pm}) \\approx \\text{Ta} (146\\,\\text{pm})$.',
    'Amphoteric oxides include: $\\text{BeO}, \\text{Al}_2\\text{O}_3, \\text{Ga}_2\\text{O}_3, \\text{ZnO}, \\text{SnO}, \\text{SnO}_2, \\text{PbO}, \\text{PbO}_2, \\text{Cr}_2\\text{O}_3$. Neutral oxides include: $\\text{CO}, \\text{NO}, \\text{N}_2\\text{O}$.'
  ],
  commonTraps: [
    'Confusing Electron Gain Enthalpy ($\\Delta_{eg} H$) with Electronegativity: Fluorine has the highest electronegativity, but Chlorine has the most negative electron gain enthalpy! Never mix these up in MCQ options.',
    'Ionization enthalpy trend across Period 2: The correct increasing order is $\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{O} < \\text{N} < \\text{F} < \\text{Ne}$. Note that $\\text{B} < \\text{Be}$ (penetration of $2s$ vs $2p$) and $\\text{O} < \\text{N}$ (half-filled $2p^3$ stability).',
    'Isoelectronic radii: More protons = smaller radius. For $\\text{N}^{3-}, \\text{O}^{2-}, \\text{F}^-, \\text{Na}^+, \\text{Mg}^{2+}, \\text{Al}^{3+}$, the radius DECREASES from $\\text{N}^{3-}$ to $\\text{Al}^{3+}$. $\\text{Al}^{3+}$ is the smallest and $\\text{N}^{3-}$ is the largest.',
    'Assuming noble gases have zero electron gain enthalpy: Noble gases have large POSITIVE electron gain enthalpies because the incoming electron must enter the next higher principal energy shell.'
  ]
};
