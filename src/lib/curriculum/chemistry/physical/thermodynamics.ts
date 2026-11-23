import { Chapter } from '@/types';

export const chemicalThermodynamicsChapter: Chapter = {
  id: 'chem-c11-thermodynamics',
  subject: 'chemistry',
  classLevel: 11,
  name: 'Chemical Thermodynamics and Thermochemistry',
  unit: 'Physical Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{First Law of Thermodynamics}: \\Delta U = q + w \\quad (\\text{IUPAC convention})',
    '\\text{Work in Expansion}: w = -\\int P_{\\text{ext}} dV, \\quad w_{\\text{irrev}} = -P_{\\text{ext}}(V_2 - V_1)',
    '\\text{Reversible Isothermal Work}: w_{\\text{rev}} = -nRT \\ln\\left(\\frac{V_2}{V_1}\\right) = -2.303 nRT \\log_{10}\\left(\\frac{V_2}{V_1}\\right) = -2.303 nRT \\log_{10}\\left(\\frac{P_1}{P_2}\\right)',
    '\\text{Enthalpy & Internal Energy}: \\Delta H = \\Delta U + \\Delta(PV) = \\Delta U + \\Delta n_g RT',
    '\\text{Molar Heat Capacities}: C_p - C_v = R, \\quad \\Delta U = n C_v \\Delta T, \\quad \\Delta H = n C_p \\Delta T',
    '\\text{Reversible Adiabatic}: P V^\\gamma = \\text{const}, \\quad T V^{\\gamma - 1} = \\text{const}, \\quad T^\\gamma P^{1-\\gamma} = \\text{const}, \\quad w = \\frac{n R (T_2 - T_1)}{\\gamma - 1}',
    '\\text{Hess\'s Law}: \\Delta_r H^\\circ = \\sum \\Delta_f H^\\circ(\\text{products}) - \\sum \\Delta_f H^\\circ(\\text{reactants})',
    '\\text{Bond Enthalpy}: \\Delta_r H^\\circ = \\sum \\text{B.E.}(\\text{reactants}) - \\sum \\text{B.E.}(\\text{products}) \\; (\\text{gas phase})',
    '\\text{Resonance Energy}: E_{\\text{res}} = \\Delta_f H^\\circ(\\text{experimental}) - \\Delta_f H^\\circ(\\text{calculated via B.E.})',
    '\\text{Entropy Change}: \\Delta S = \\frac{q_{\\text{rev}}}{T}, \\quad \\Delta S_{\\text{gas}} = n C_v \\ln\\left(\\frac{T_2}{T_1}\\right) + n R \\ln\\left(\\frac{V_2}{V_1}\\right)',
    '\\text{Gibbs Free Energy}: \\Delta G = \\Delta H - T \\Delta S, \\quad \\Delta G < 0 \\; (\\text{spontaneous at const } T, P)',
    '\\text{Standard Gibbs & Equilibrium}: \\Delta G^\\circ = -RT \\ln K = -2.303 RT \\log_{10} K = -n F E^\\circ_{\\text{cell}}'
  ],
  topics: [
    {
      id: 'chem-thermo-1-first-law-work',
      name: '11.3.1 System, State Functions & First Law Work Calculations',
      description: 'Open, closed, and isolated systems; state functions vs path functions (U, H, S, G vs q, w); extensive vs intensive properties; IUPAC sign conventions; reversible vs irreversible expansion work w = -P_ext Delta V vs w_rev = -2.303 nRT log(V2/V1); First Law Delta U = q + w.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-thermo-2-enthalpy-heat-capacities',
      name: '11.3.2 Enthalpy, Heat Capacities & Delta H vs Delta U',
      description: 'Enthalpy H = U + PV; connection between constant volume heat q_v = Delta U and constant pressure heat q_p = Delta H; relation Delta H = Delta U + Delta n_g RT; heat capacities C_p and C_v; Mayer\'s relation C_p - C_v = R; adiabatic reversible and irreversible expansions (T V^(gamma-1) = const).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-thermo-3-thermochemistry-hess-law',
      name: '11.3.3 Thermochemistry, Hess\'s Law & Standard Enthalpies',
      description: 'Standard state definitions (298.15 K, 1 bar); standard enthalpy of formation Delta_f H^circ (reference state elements have Delta_f H^circ = 0, e.g. C_graphite, O2 gas, Br2 liquid, I2 solid); Hess\'s law of constant heat summation; enthalpy of combustion, atomization, ionization, and hydration; strong acid-strong base neutralization enthalpy (-57.1 kJ/mol).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-thermo-4-bond-enthalpies-resonance',
      name: '11.3.4 Bond Dissociation Enthalpy & Resonance Energy',
      description: 'Bond dissociation enthalpy in diatomic molecules vs average bond enthalpy in polyatomic molecules; calculation of reaction enthalpies using bond enthalpies: Delta_r H = sum(B.E. reactants) - sum(B.E. products); calculation of resonance energy (e.g. in benzene, CO3^2-, N2O) from combustion data.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-thermo-5-entropy-second-law',
      name: '11.3.5 Entropy, Second Law of Thermodynamics & Phase Transitions',
      description: 'Spontaneous vs non-spontaneous processes; statistical and thermodynamic concept of entropy (disorder/randomness); Delta S = q_rev / T; entropy change during phase transformations (fusion Delta S = Delta H_fus / T_f, vaporization Delta S = Delta H_vap / T_b); entropy change for ideal gas heating and expansion; Clausius inequality Delta S_total = Delta S_sys + Delta S_surr >= 0.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-thermo-6-gibbs-free-energy-equilibrium',
      name: '11.3.6 Gibbs Free Energy, Spontaneity Criteria & Equilibrium Constant',
      description: 'Definition of Gibbs energy G = H - TS; Gibbs-Helmholtz equation Delta G = Delta H - T Delta S; spontaneity criteria under constant temperature and pressure (Delta G < 0); effect of temperature on spontaneity (four canonical quadrants); standard free energy change Delta G^circ and its fundamental relation to equilibrium constant Delta G^circ = -RT ln K = -2.303 RT log K and cell potential Delta G^circ = -nFE^circ; Third Law of Thermodynamics (S = 0 at 0 K for perfect crystal).',
      estimatedHours: 5,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'By thermodynamic convention, standard enthalpy of formation Delta_f H^circ is defined as ZERO for the most stable allotrope of an element in its standard state at 298.15 K and 1 bar: e.g. Carbon as graphite (NOT diamond), Sulfur as rhombic (NOT monoclinic), Phosphorus as white phosphorus.',
    'For any chemical reaction: Delta H = Delta U + Delta n_g RT, where Delta n_g = (moles of gaseous products) - (moles of gaseous reactants). Solids and liquids are completely ignored in Delta n_g.',
    'In bond enthalpy calculations, the formula is: Delta_r H^circ = sum(Bond Enthalpies of REACTANTS) - sum(Bond Enthalpies of PRODUCTS). Notice this is REVERSED compared to formation enthalpies: Delta_r H^circ = sum(Delta_f H Products) - sum(Delta_f H Reactants).',
    'Enthalpy of neutralization of ANY strong acid by ANY strong base in dilute aqueous solution is constant and equals -57.1 kJ/mol (or -13.7 kcal/mol), representing the reaction H+(aq) + OH-(aq) -> H2O(l). For weak acids or bases, magnitude is smaller because energy is consumed in ionizing the weak electrolyte.',
    'A reaction with Delta H > 0 (endothermic) and Delta S > 0 (entropy increase) becomes spontaneous ONLY at high temperatures where T Delta S > Delta H, giving Delta G < 0.'
  ],
  commonTraps: [
    'Confusing IUPAC sign conventions for work: In chemistry (IUPAC), w = -P Delta V. When gas expands (Delta V > 0), work done ON the system is negative (w < 0).',
    'Mixing up reactant/product order: With Delta_f H (formation): Products minus Reactants. With Bond Enthalpy: Reactants minus Products. Using the wrong order produces an answer with the exact opposite sign!',
    'Including solids/liquids in Delta n_g: In the decomposition CaCO3(s) -> CaO(s) + CO2(g), Delta n_g = 1 - 0 = +1 (do NOT include solid CaCO3 or CaO).',
    'Forgetting units of Delta S when calculating Delta G = Delta H - T Delta S: Delta H is typically given in kJ/mol, whereas Delta S is in J/(mol K). You MUST divide Delta S by 1000 before combining!',
    'Assuming Delta G = 0 means the reaction has stopped: Delta G = 0 means the system has reached dynamic chemical equilibrium, where forward and reverse rates are equal.'
  ]
};
