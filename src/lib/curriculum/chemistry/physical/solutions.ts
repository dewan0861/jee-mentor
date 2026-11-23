import { Chapter } from '@/types';

export const solutionsChapter: Chapter = {
  id: 'chem-c12-solutions',
  subject: 'chemistry',
  classLevel: 12,
  name: 'Solutions',
  unit: 'Physical Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    "\\text{Henry's Law}: p = K_H \\cdot x \\quad (p = \\text{partial pressure, } x = \\text{mole fraction in liquid})",
    "\\text{Raoult's Law (Volatile liquid-liquid)}: P_{\\text{total}} = P_A^0 x_A + P_B^0 x_B = P_A^0 + (P_B^0 - P_A^0) x_B",
    "\\text{Dalton's Law in Vapour Phase}: y_A = \\frac{P_A}{P_{\\text{total}}} = \\frac{P_A^0 x_A}{P_{\\text{total}}}, \\quad \\frac{1}{P_{\\text{total}}} = \\frac{y_A}{P_A^0} + \\frac{y_B}{P_B^0}",
    '\\text{Relative Lowering of Vapour Pressure}: \\frac{P^0 - P_s}{P^0} = i X_{\\text{solute}} = i \\left(\\frac{n_2}{n_1 + n_2}\\right) \\approx i \\frac{w_2 M_1}{M_2 w_1}',
    '\\text{Elevation in Boiling Point}: \\Delta T_b = T_b - T_b^0 = i K_b m = i K_b \\left(\\frac{w_2 \\times 1000}{M_2 \\times w_1\\,\\text{(g)}}\\right)',
    '\\text{Depression in Freezing Point}: \\Delta T_f = T_f^0 - T_f = i K_f m = i K_f \\left(\\frac{w_2 \\times 1000}{M_2 \\times w_1\\,\\text{(g)}}\\right)',
    '\\text{Cryoscopic / Ebullioscopic Constants}: K_f = \\frac{R M_1 (T_f^0)^2}{1000 \\Delta_{\\text{fus}} H}, \\quad K_b = \\frac{R M_1 (T_b^0)^2}{1000 \\Delta_{\\text{vap}} H}',
    '\\text{Osmotic Pressure}: \\Pi = i C R T = i \\left(\\frac{n_2}{V}\\right) R T = i \\left(\\frac{w_2 R T}{M_2 V}\\right)',
    "\\text{van 't Hoff Factor}: i = \\frac{\\text{Experimental Colligative Property}}{\\text{Calculated Colligative Property}} = \\frac{\\text{Normal Molar Mass}}{\\text{Observed Molar Mass}} = \\frac{\\text{Total particles after dissociation/association}}{\\text{Initial particles}}",
    '\\text{Degree of Dissociation (}\\alpha\\text{)}: \\alpha = \\frac{i - 1}{n - 1} \\quad (n = \\text{ions produced per formula unit})',
    '\\text{Degree of Association (}\\beta\\text{)}: \\beta = \\frac{1 - i}{1 - 1/n} \\quad (n = \\text{molecules associated into a polymer/dimer})'
  ],
  topics: [
    {
      id: 'chem-sol-1-solubility-henry',
      name: "12.1.1 Types of Solutions & Henry's Law",
      description: "Binary solutions (gas-liquid, liquid-liquid, solid-liquid); solubility of gases in liquids; effect of temperature (exothermic dissolution, solubility decreases with rising temperature); Henry's law statement, formula p = K_H * x, characteristics of Henry's constant K_H (higher K_H means lower solubility at given pressure); practical applications: carbonated beverages, deep-sea diving (bends and helium dilution), high altitude anoxia.",
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-sol-2-raoult-law-vapour-pressure',
      name: "12.1.2 Vapour Pressure of Liquid Solutions & Raoult's Law",
      description: "Dynamic liquid-vapour equilibrium and definition of vapour pressure; Raoult's law for volatile solute and solvent pairs: partial vapour pressure is directly proportional to its mole fraction; total pressure vs composition curves; vapor phase mole fractions (Dalton's law) y_A and y_B; vapour-liquid equilibrium relationship: 1/P_total = y_A/P_A^0 + y_B/P_B^0.",
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-sol-3-ideal-nonideal-azeotropes',
      name: '12.1.3 Ideal and Non-Ideal Solutions & Azeotropic Mixtures',
      description: 'Ideal solutions (obey Raoult’s law over entire concentration range, Delta_mix H = 0, Delta_mix V = 0, intermolecular forces A-B equal to A-A and B-B, e.g. benzene + toluene, n-hexane + n-heptane); Non-ideal solutions: Positive deviation (A-B interactions weaker than A-A/B-B, Delta_mix H > 0, Delta_mix V > 0, vapour pressure higher than Raoult’s law, forms minimum boiling azeotrope, e.g. ethanol + water); Negative deviation (A-B interactions stronger via H-bonding, Delta_mix H < 0, Delta_mix V < 0, forms maximum boiling azeotrope, e.g. chloroform + acetone, nitric acid + water); definition and distillation limitations of azeotropes.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-sol-4-rlvp-colligative',
      name: '12.1.4 Relative Lowering of Vapour Pressure (RLVP)',
      description: "Colligative properties depend strictly on number of solute particles, not on their nature; addition of non-volatile solute reduces surface fraction of solvent molecules; derivation of RLVP: (P^0 - P_s)/P^0 = X_solute; Ostwald-Walker dynamic method for experimental determination; calculation of solute molar mass.",
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-sol-5-elevation-boiling-depression-freezing',
      name: '12.1.5 Elevation of Boiling Point & Depression of Freezing Point',
      description: 'Thermodynamic explanation using vapour pressure curves; boiling point elevation Delta T_b = K_b * m; ebullioscopic constant K_b (molal boiling point elevation constant, unit K kg/mol); freezing point depression Delta T_f = K_f * m; cryoscopic constant K_f (molal depression constant); thermodynamic formulas for K_b and K_f in terms of Delta_vap H and Delta_fus H; ethylene glycol as automotive antifreeze; salting roads for de-icing.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-sol-6-osmotic-pressure-reverse-osmosis',
      name: '12.1.6 Osmosis, Osmotic Pressure & Reverse Osmosis',
      description: 'Semipermeable membrane (SPM: cellophane, parchment, copper ferrocyanide Cu2[Fe(CN)6]); phenomenon of osmosis; definition of osmotic pressure Pi as excess hydrostatic pressure required to prevent osmosis; van ’t Hoff equation Pi = CRT; advantage of osmotic pressure over other colligative methods for biomolecules (proteins, polymers) due to large measurable values at room temperature and use of molarity; isotonic, hypertonic, and hypotonic solutions; crenation and plasmolysis of RBCs; reverse osmosis (RO) for water desalination when applied pressure P > Pi.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-sol-7-vant-hoff-factor-abnormal-mass',
      name: "12.1.7 Abnormal Molar Masses & van 't Hoff Factor (i)",
      description: "Electrolytes dissociate into ions producing higher colligative effects (observed M_exp < normal M_calc); molecules in non-polar solvents (e.g. benzoic acid in benzene) associate into dimers through intermolecular H-bonding (observed M_exp > normal M_calc); definition of van 't Hoff factor i; mathematical derivation of degree of dissociation alpha = (i - 1)/(n - 1) and degree of association beta = (1 - i)/(1 - 1/n); modified colligative formulas: RLVP = i * X_2, Delta T_b = i * K_b * m, Delta T_f = i * K_f * m, Pi = i * C * R * T.",
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    "Henry's law constant K_H increases with increase in temperature; therefore, gases are less soluble in liquids at higher temperatures. Aquatic species are more comfortable in cold waters rather than warm waters.",
    'Minimum boiling azeotrope is formed by solutions showing large POSITIVE deviation from Raoult’s law (e.g., 95.4% ethanol + 4.6% water by volume, boils at 351.15 K, lower than pure ethanol 351.5 K and water 373.15 K).',
    'Maximum boiling azeotrope is formed by solutions showing large NEGATIVE deviation from Raoult’s law (e.g., 68% HNO3 + 32% water by mass, boils at 393.5 K, higher than water 373.15 K and pure HNO3 359 K).',
    'Osmotic pressure is widely preferred for determining molecular weights of polymers, proteins, and biomolecules because: (1) pressure measurements are taken at room temperature, (2) molarity is used rather than molality, and (3) osmotic pressure values are sufficiently large even for very dilute solutions compared to imperceptibly tiny freezing point depressions.',
    'For association into an n-mer: i < 1. For benzoic acid dimerization in benzene (2 C6H5COOH <=> (C6H5COOH)2), n = 2 and i = 1 - beta/2. Complete dimerization (beta = 1) yields i = 0.5, halving the colligative effect and doubling observed molecular weight.'
  ],
  commonTraps: [
    'Forgetting the van \'t Hoff factor (i) in colligative calculations: For strong electrolytes like K2SO4 (n = 3, complete dissociation i = 3), freezing point depression is three times greater than that of an equimolar non-electrolyte like glucose (i = 1).',
    'Confusing vapor phase mole fraction (y_A) with liquid phase mole fraction (x_A): y_A = P_A / P_total = (P_A^0 * x_A) / P_total. The more volatile component is always enriched in the vapor phase (Konovalov’s rule).',
    'Approximation error in RLVP: (P^0 - P_s)/P^0 = n_2 / (n_1 + n_2). If the solution is not extremely dilute (e.g., > 5% concentration), using the simplified n_2 / n_1 produces significant numerical error in JEE! For exact calculation, use: (P^0 - P_s)/P_s = n_2 / n_1.',
    'Units mismatch in Osmotic Pressure: Pi = CRT. If R = 0.0821 L atm /(mol K), concentration C must be in mol/L, T in Kelvin, and Pi will be obtained in atmospheres (1 atm = 1.01325 bar = 1.01325 x 10^5 Pa).'
  ]
};
