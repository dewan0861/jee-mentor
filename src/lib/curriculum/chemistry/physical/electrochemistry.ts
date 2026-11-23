import { Chapter } from '@/types';

export const electrochemistryChapter: Chapter = {
  id: 'chem-c12-electrochemistry',
  subject: 'chemistry',
  classLevel: 12,
  name: 'Electrochemistry',
  unit: 'Physical Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Cell Potential}: E_{\\text{cell}} = E_{\\text{cathode}} - E_{\\text{anode}} = E_{\\text{reduction, right}} - E_{\\text{reduction, left}}',
    '\\text{Nernst Equation}: E_{\\text{cell}} = E^0_{\\text{cell}} - \\frac{2.303 R T}{n F} \\log_{10} Q = E^0_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} Q \\quad (\\text{at } 298\\,\\text{K})',
    '\\text{Equilibrium Constant from } E^0: \\log_{10} K_c = \\frac{n E^0_{\\text{cell}}}{0.0591} \\quad (\\text{at } 298\\,\\text{K})',
    '\\text{Gibbs Energy & Work}: \\Delta G = -n F E_{\\text{cell}}, \\quad \\Delta G^0 = -n F E^0_{\\text{cell}} = -2.303 R T \\log_{10} K',
    '\\text{Conductivity (}\\kappa\\text{)}: \\kappa = \\frac{1}{\\rho} = \\frac{l}{R \\cdot A} = \\frac{G^*}{R} = G \\cdot G^* \\quad (G^* = \\text{Cell Constant } l/A)',
    '\\text{Molar Conductivity}: \\Lambda_m = \\frac{\\kappa \\times 1000}{M} \\; (\\text{in } \\text{S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1} \\text{ with } \\kappa \\text{ in S/cm, } M \\text{ in mol/L})',
    "\\text{Debye-H\\\"uckel-Onsager Equation}: \\Lambda_m = \\Lambda_m^0 - A \\sqrt{c} \\quad (\\text{for strong electrolytes})",
    "\\text{Kohlrausch's Law}: \\Lambda_m^0 = \\nu_+ \\lambda_+^0 + \\nu_- \\lambda_-^0",
    '\\text{Degree of Dissociation}: \\alpha = \\frac{\\Lambda_m}{\\Lambda_m^0}, \\quad K_a = \\frac{c \\alpha^2}{1 - \\alpha} = \\frac{c (\\Lambda_m)^2}{\\Lambda_m^0 (\\Lambda_m^0 - \\Lambda_m)}',
    '\\text{Solubility of Sparingly Soluble Salt}: S = \\frac{\\kappa \\times 1000}{\\Lambda_m^0} \\; (\\text{mol/L}), \\quad K_{sp} = S^2 \\text{ (for 1:1 salt)}',
    "\\text{Faraday's First Law}: w = Z \\cdot I \\cdot t = \\left(\\frac{M}{n \\cdot F}\\right) I \\cdot t = \\left(\\frac{E_{\\text{equiv}}}{96500}\\right) Q",
    "\\text{Faraday's Second Law}: \\frac{w_1}{w_2} = \\frac{E_1}{E_2} = \\frac{M_1 / n_1}{M_2 / n_2}"
  ],
  topics: [
    {
      id: 'chem-elec-1-galvanic-cells-she',
      name: '12.2.1 Galvanic Cells, Electrode Potentials & Electrochemical Series',
      description: 'Daniel cell (Zn-Cu); salt bridge construction (agar-agar gel with inert electrolyte KCl/KNO3/NH4NO3, maintaining electrical neutrality without liquid junction potential); IUPAC cell notation (Anode | Anolyte || Catholyte | Cathode); Standard Hydrogen Electrode (SHE, E^0 = 0.00 V); measurement of standard electrode potentials; Electrochemical Series and predicting oxidizing/reducing strengths, displacement reactions, and cell feasibility (E^0_cell > 0).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-elec-2-nernst-equation-concentration-cells',
      name: '12.2.2 Nernst Equation & Concentration Cells',
      description: 'Derivation from thermodynamics Delta G = Delta G^0 + RT ln Q; calculation of cell potential at non-standard concentrations and temperatures; half-cell and full-cell Nernst formulas; concentration cells with identical electrodes and differing electrolyte concentrations (E_cell = (0.0591/n) log(c2/c1) where c2 > c1); calculation of pH from hydrogen electrode potential: E_H+/H2 = -0.0591 * pH.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-elec-3-thermodynamics-equilibrium-constant',
      name: '12.2.3 Thermodynamics of Cells: Delta G, Work & Equilibrium Constant (K_c)',
      description: 'Relationship between electrical work done and decrease in Gibbs free energy: Delta G = -n F E_cell; condition for spontaneity (Delta G < 0 <=> E_cell > 0); standard Gibbs energy Delta G^0 = -n F E^0_cell; derivation of log K_c = (n E^0) / 0.0591; temperature coefficient of cell potential (dE/dT)_p and entropy of reaction Delta S = n F (dE/dT)_p; reaction enthalpy Delta H = Delta G + T Delta S = -nFE + nFT(dE/dT)_p.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-elec-4-conductance-molar-conductivity',
      name: '12.2.4 Electrolytic Conductance, Conductivity & Molar Conductivity',
      description: 'Ohmic conduction in electrolytes; resistance R, resistivity rho, conductance G, conductivity kappa (specific conductance, S/cm or S/m); cell constant G* = l/A determined using standard KCl solutions; molar conductivity Lambda_m = 1000 * kappa / M; variation of conductivity with dilution (kappa decreases upon dilution because number of ions per unit volume decreases); variation of molar conductivity with dilution (Lambda_m increases upon dilution); Debye-Hückel-Onsager equation Lambda_m = Lambda_m^0 - A*sqrt(c) for strong electrolytes; dramatic sharp increase of Lambda_m for weak electrolytes at infinite dilution.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-elec-5-kohlrausch-law-applications',
      name: "12.2.5 Kohlrausch's Law of Independent Migration & Applications",
      description: "Statement of Kohlrausch's law: limiting molar conductivity of an electrolyte is the sum of individual contributions of anions and cations; calculation of Lambda_m^0 for weak electrolytes (e.g., Lambda_m^0(CH3COOH) = Lambda_m^0(CH3COONa) + Lambda_m^0(HCl) - Lambda_m^0(NaCl)); determination of degree of dissociation alpha = Lambda_m / Lambda_m^0 and Ostwald dissociation constant K_a; determination of solubility S and solubility product K_sp of sparingly soluble salts like AgCl and BaSO4.",
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-elec-6-electrolysis-faradays-laws',
      name: "12.2.6 Electrolysis & Faraday's Laws of Quantitative Deposition",
      description: "Electrolytic cell mechanism; preferential discharge theory and overvoltage / overpotential (e.g., discharge of Cl2 gas instead of O2 at anode during electrolysis of concentrated aqueous NaCl / brine); electrolysis of aqueous vs molten NaCl, CuSO4 with inert Pt vs active Cu electrodes; Faraday's 1st law w = Z * I * t; Faraday's 2nd law w1/w2 = E1/E2; charge on 1 mole of electrons 1 F = 96487 C approx 96500 C; calculation of gas volumes liberated at STP.",
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-elec-7-batteries-fuel-cells-corrosion',
      name: '12.2.7 Batteries, Fuel Cells & Electrochemical Corrosion',
      description: 'Primary batteries: Leclanché dry cell (anode: Zn, cathode: graphite surrounded by MnO2 + C, electrolyte: paste of NH4Cl + ZnCl2, cell voltage 1.5 V) and Mercury button cell (anode: Zn-Hg amalgam, cathode: HgO + C, constant potential 1.35 V); Secondary batteries: Lead storage battery (reactions during discharge: Pb + PbO2 + 2 H2SO4 -> 2 PbSO4 + 2 H2O; reactions during recharge: reversal of discharge), Nickel-Cadmium battery; Fuel cells: H2-O2 alkaline fuel cell (Apollo program, thermodynamic efficiency ~70% vs thermal power plants 40%, clean byproduct H2O); Corrosion: electrochemical rusting of iron (anode: Fe -> Fe2+ + 2e-, cathode: O2 + 4H+ + 4e- -> 2H2O, overall: 2Fe + O2 + 4H+ -> 2Fe2+ + 2H2O, rust: Fe2O3 . xH2O); methods of prevention: barrier protection, sacrificial anodic protection (galvanization with Zn).',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Standard electrode potentials are always tabulated as STANDARD REDUCTION POTENTIALS ($E^0_{\\text{red}}$) by IUPAC convention. A more negative $E^0$ indicates a stronger reducing agent (e.g. Li = -3.05 V), while a more positive $E^0$ indicates a stronger oxidizing agent (e.g. F2 = +2.87 V).',
    'Conductivity $\\kappa$ (specific conductance) always DECREASES with dilution because the number of current-carrying ions per unit volume of solution decreases.',
    'Molar conductivity $\\Lambda_m$ always INCREASES with dilution: for strong electrolytes because interionic attractions decrease, and for weak electrolytes because degree of dissociation $\\alpha$ increases drastically towards 1 at infinite dilution.',
    'Mercury cell provides a completely constant potential of $1.35\\,\\text{V}$ throughout its operational life because the overall cell reaction does not involve any ions in solution whose concentration can change.',
    'During discharge of a lead storage battery, $\\text{H}_2\\text{SO}_4$ is consumed and water is produced, dropping the density of electrolyte below $1.20\\,\\text{g/cm}^3$.'
  ],
  commonTraps: [
    'Multiplying $E^0$ by stoichiometric coefficients when balancing electrons: $E^0$ is an INTENSIVE property and NEVER changes when you multiply half-reactions by a scalar! However, Gibbs energy $\\Delta G^0 = -n F E^0$ is EXTENSIVE and scales with $n$.',
    'Sign errors in Nernst equation: $E = E^0 - \\frac{0.0591}{n} \\log Q$. Make sure $Q = \\frac{[\\text{products}]^{\\text{coeff}}}{[\\text{reactants}]^{\\text{coeff}}}$. Pure solids and pure liquids have activity $= 1$ and are excluded from $Q$.',
    'Confusing units of molar conductivity: In $\\Lambda_m = \\frac{\\kappa \\times 1000}{M}$, $\\kappa$ must be in $\\text{S}\\cdot\\text{cm}^{-1}$ and $M$ in $\\text{mol}\\cdot\\text{L}^{-1}$ to yield $\\Lambda_m$ in $\\text{S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$. If $\\kappa$ is given in SI units ($\\text{S}\\cdot\\text{m}^{-1}$), then $\\Lambda_m = \\frac{\\kappa}{1000 \\times C}$ with $C$ in $\\text{mol}\\cdot\\text{L}^{-1}$ or $\\frac{\\kappa}{C_{\\text{SI}}}$ with $C_{\\text{SI}}$ in $\\text{mol}\\cdot\\text{m}^{-3}$.',
    'Mixing up anode and cathode in electrolytic vs galvanic cells: In BOTH cells, Oxidation occurs at Anode and Reduction occurs at Cathode! But in galvanic cells, Anode is negative and Cathode is positive; in electrolytic cells, Anode is connected to positive terminal of battery and Cathode to negative terminal.'
  ]
};
