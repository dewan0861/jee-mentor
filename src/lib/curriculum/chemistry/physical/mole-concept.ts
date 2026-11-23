import { Chapter } from '@/types';

export const moleConceptChapter: Chapter = {
  id: 'chem-c11-mole-concept',
  subject: 'chemistry',
  classLevel: 11,
  name: 'Some Basic Concepts of Chemistry (Mole Concept)',
  unit: 'Physical Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Number of Moles}: n = \\frac{w}{M} = \\frac{N}{N_A} = \\frac{V_{\\text{STP}}}{22.7\\,\\text{L}} \\; (\\text{STP: } 1\\,\\text{bar}, 273.15\\,\\text{K}) = \\frac{V}{22.4\\,\\text{L}} \\; (\\text{1 atm})',
    '\\text{Average Atomic Mass}: A_{\\text{avg}} = \\frac{\\sum A_i \\cdot x_i}{100} \\quad (x_i = \\text{percentage abundance})',
    '\\text{Vapour Density}: \\text{V.D.} = \\frac{M_{\\text{gas}}}{M_{\\text{H}_2}} = \\frac{M}{2} \\implies M = 2 \\times \\text{V.D.}',
    '\\text{Empirical to Molecular Formula}: \\text{Molecular Formula} = (\\text{Empirical Formula})_n, \\quad n = \\frac{\\text{Molar Mass}}{\\text{Empirical Formula Mass}}',
    '\\text{Molarity}: M = \\frac{n_{\\text{solute}}}{V_{\\text{solution (L)}}} = \\frac{w \\times 1000}{M_{\\text{solute}} \\times V_{\\text{mL}}}',
    '\\text{Molality}: m = \\frac{n_{\\text{solute}}}{W_{\\text{solvent (kg)}}} = \\frac{w \\times 1000}{M_{\\text{solute}} \\times W_{\\text{solvent (g)}}}',
    '\\text{Mole Fraction}: X_A = \\frac{n_A}{n_A + n_B}, \\quad X_A + X_B = 1',
    '\\text{Molarity vs Molality}: m = \\frac{1000 M}{1000 d - M \\cdot M_{\\text{solute}}} \\quad (d = \\text{density in g/mL})',
    '\\text{Parts per Million}: \\text{ppm} = \\frac{w_{\\text{solute}}}{w_{\\text{solution}}} \\times 10^6',
    '\\text{Percentage Yield}: \\% \\text{ Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100\\%'
  ],
  topics: [
    {
      id: 'chem-mole-1-nature-significant-figures',
      name: '11.1.1 Matter, SI Units & Significant Figures',
      description: 'Classification of matter: elements, compounds, homogeneous and heterogeneous mixtures; fundamental and derived SI units; precision vs accuracy; rules for counting significant figures and rounding off in scientific additions, subtractions, multiplications, and divisions.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'chem-mole-2-laws-combinations',
      name: '11.1.2 Laws of Chemical Combinations & Dalton\'s Atomic Theory',
      description: 'Law of conservation of mass (Lavoisier), Law of definite proportions (Proust), Law of multiple proportions (Dalton), Gay-Lussac\'s law of gaseous volumes, and Avogadro\'s law; postulates and limitations of Dalton\'s atomic theory.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'chem-mole-3-atomic-molecular-mass',
      name: '11.1.3 Atomic, Molecular & Average Isotopic Mass',
      description: 'Carbon-12 scale definition of atomic mass unit (1 u = 1/12th mass of C-12 atom = 1.6605 x 10^-24 g); average atomic mass of multi-isotopic elements (e.g. Chlorine 35.5 u); molecular mass and formula unit mass in ionic crystals.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-mole-4-mole-avogadro',
      name: '11.1.4 The Mole Concept & Molar Gas Volume',
      description: 'Definition of mole as amount containing 6.02214 x 10^23 entities (Avogadro constant N_A); molar mass in g/mol; molar volume of ideal gas at STP (22.7 L at 1 bar vs 22.4 L at 1 atm); relationships between mass, number of moles, number of atoms/molecules, and total electrons/protons.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-mole-5-empirical-molecular-formula',
      name: '11.1.5 Percentage Composition, Empirical & Molecular Formulas',
      description: 'Mass percentage of elements in a compound; stepwise calculation of simplest whole-number atomic ratios for empirical formula; determination of molecular formula using molar mass or vapour density (M = 2 x V.D.); combustion analysis of hydrocarbons producing CO2 and H2O.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-mole-6-stoichiometry-limiting-reagent',
      name: '11.1.6 Stoichiometry, Limiting Reagent & Percentage Yield',
      description: 'Stoichiometric coefficient interpretations (mole-mole, mass-mass, volume-volume); identification of the limiting reagent (dividing given moles by stoichiometric coefficient: the smallest ratio is limiting); calculating theoretical product yield and excess reagent left unreacted; actual yield and percentage purity calculations.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-mole-7-concentration-terms',
      name: '11.1.7 Concentration Units of Solutions & Interconversions',
      description: 'Definitions and quantitative formulas: Molarity (M), Molality (m), Mole fraction (X), Mass percentage (% w/w), Volume percentage (% v/v), Mass by volume (% w/v), Parts per million (ppm); temperature dependence (Molarity is temperature-dependent because volume expands, whereas Molality and Mole Fraction are temperature-independent); density-based interconversion formula between M and m; dilution formula M1 V1 = M2 V2 and mixture molarity M_mix = (M1 V1 + M2 V2) / (V1 + V2).',
      estimatedHours: 5,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Molality (m) and mole fraction (X) are independent of temperature because they depend strictly on masses of solute and solvent, whereas molarity (M) changes with temperature due to thermal expansion/contraction of solution volume.',
    'At IUPAC standard temperature and pressure (STP: T = 273.15 K, P = 1 bar = 10^5 Pa), one mole of any ideal gas occupies 22.71 L (often approximated as 22.7 L). At traditional standard conditions (1 atm = 1.01325 bar), one mole occupies 22.4 L.',
    'To find the limiting reagent quickly: calculate the ratio (moles given / stoichiometric coefficient) for each reactant. The reactant with the SMALLEST ratio is strictly the limiting reagent.',
    'Vapour density is the ratio of the mass of a certain volume of gas to the mass of the same volume of hydrogen gas under identical conditions of temperature and pressure: Molar Mass = 2 * Vapour Density.',
    'One atomic mass unit (1 u or 1 amu) equals 1.66056 x 10^-24 g, which is numerically equal to 1 / N_A.'
  ],
  commonTraps: [
    'Confusing mass of solvent with mass of solution in molality: Molality is moles of solute per kg of SOLVENT (not kg of solution!). Always subtract solute mass from solution mass: W_solvent = W_solution - w_solute.',
    'Applying M_1 V_1 = M_2 V_2 to chemical reactions directly without stoichiometric balancing: M_1 V_1 = M_2 V_2 is strictly for physical dilution of the SAME solution! For neutralization, use n_1 M_1 V_1 = n_2 M_2 V_2 or (M_1 V_1 / a) = (M_2 V_2 / b).',
    'Assuming the reactant present in the least quantity by mass is the limiting reagent: The limiting reagent depends on MOLES and stoichiometric coefficients, NOT on initial grams. 10 g of H2 (5 moles) will react with 10 g of O2 (0.3125 moles), making O2 limiting despite equal mass.',
    'Forgetting to double atomic mass when calculating moles of diatomic molecules: 32 g of Oxygen gas (O2) contains 1 mole of O2 molecules but 2 moles of oxygen atoms ($1.204 \\times 10^{24}$ atoms).',
    'Mixing up % w/w with % w/v: 10% (w/w) means 10 g solute in 100 g solution; 10% (w/v) means 10 g solute in 100 mL solution. They are identical ONLY if solution density is exactly 1.00 g/mL.'
  ]
};
