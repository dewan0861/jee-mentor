import { Chapter } from '@/types';

export const nucleiChapter: Chapter = {
  id: 'phy-c12-nuclei',
  subject: 'physics',
  classLevel: 12,
  name: 'Nuclei',
  unit: 'Optics & Modern Physics',
  weightage: 'medium',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Nuclear Radius}: R = R_0 A^{1/3}, \\quad R_0 \\approx 1.2\\,\\text{fm} = 1.2 \\times 10^{-15}\\,\\text{m}',
    '\\text{Nuclear Density}: \\rho = \\frac{m_{\\text{nucleus}}}{V} = \\frac{A \\cdot m_u}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3 m_u}{4\\pi R_0^3} \\approx 2.3 \\times 10^{17}\\,\\text{kg/m}^3 \\; (\\text{constant})',
    '\\text{Mass-Energy Equivalence}: E = \\Delta m \\cdot c^2, \\quad 1\\,\\text{u} = 931.5\\,\\text{MeV}/c^2',
    '\\text{Mass Defect}: \\Delta m = \\left[Z m_p + (A - Z) m_n\\right] - M(A, Z)',
    '\\text{Binding Energy}: E_b = \\Delta m \\times 931.5\\,\\text{MeV}',
    '\\text{Binding Energy per Nucleon}: E_{bn} = \\frac{E_b}{A}',
    '\\text{Q-Value of Nuclear Reaction}: Q = [\\sum m_{\\text{reactants}} - \\sum m_{\\text{products}}] c^2 = \\sum E_{b,\\text{products}} - \\sum E_{b,\\text{reactants}}',
    '\\text{Exothermic Reaction}: Q > 0 \\; (\\text{energy released}), \\quad \\text{Endothermic}: Q < 0'
  ],
  topics: [
    {
      id: 'phy-nuc-1-composition-size-density',
      name: '12.13.1 Nuclear Composition, Radius & Invariant Density',
      description: 'Constituents of nucleus: protons and neutrons (nucleons); atomic mass number A and atomic number Z; isotopes, isobars, and isotones; experimental determination of nuclear radius via electron scattering R = R_0 A^(1/3); calculation of nuclear density and proof that density is universally constant (~2.3 x 10^17 kg/m^3) independent of mass number A.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-nuc-2-mass-defect-binding-energy',
      name: '12.13.2 Mass Defect & Nuclear Binding Energy',
      description: 'Einstein\'s mass-energy equivalence E = mc^2; definition of unified atomic mass unit (1 u = 1.6605 x 10^-27 kg = 931.5 MeV); mass defect Delta m = [Z m_p + (A - Z)m_n] - M_nucleus; nuclear binding energy E_b = Delta m c^2.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-nuc-3-binding-energy-curve',
      name: '12.13.3 Binding Energy per Nucleon Curve & Stability',
      description: 'Graph of E_b/A versus mass number A; key features: broad plateau around 8.5 MeV/nucleon for 30 < A < 170; peak at Fe-56 (8.75 MeV/nucleon); sharp drops for very light nuclei (A < 20) and heavy nuclei (A > 200); saturation property of nuclear forces; energetic explanation of nuclear fission in heavy nuclei and nuclear fusion in light nuclei.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-nuc-4-nuclear-forces',
      name: '12.13.4 Characteristics of the Strong Nuclear Force',
      description: 'Strongest fundamental force in nature; short-range character (~ 1 to 2 fm); attractive at distances > 0.8 fm and strongly repulsive at distances < 0.5 fm (preventing nuclear collapse); charge independence (p-p, n-n, and p-n forces equal); non-central and spin-dependent nature.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-nuc-5-fission-fusion-q-value',
      name: '12.13.5 Nuclear Fission, Fusion & Q-Value Calculations',
      description: 'Mechanisms of nuclear fission of Uranium-235; prompt neutrons and chain reactions; nuclear fusion of hydrogen isotopes (proton-proton chain in the sun); extreme temperature (thermonuclear) and pressure conditions; detailed calculation of reaction Q-values using both rest masses and binding energies.',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'The density of nuclear matter is invariant and approximately 2.3 x 10^17 kg/m^3 for all atomic nuclei from hydrogen to uranium, which is roughly 2.3 x 10^14 times denser than liquid water.',
    'The maximum binding energy per nucleon occurs for Iron-56 (56_26 Fe) with a value of approximately 8.75 MeV per nucleon, making it the most tightly bound and stable nucleus.',
    'In any nuclear reaction, the Q-value can be computed either from mass differences: Q = [m_reactants - m_products] * c^2, OR from binding energies: Q = [Total E_b of products - Total E_b of reactants]. Note the reversed order!',
    'The nuclear force exhibits saturation: a nucleon interacts only with its immediate nearest neighbors, which explains why binding energy per nucleon remains nearly constant (~8.5 MeV) across the wide range 30 < A < 170.',
    'Nuclear fusion releases substantially more energy per unit mass of fuel than nuclear fission, which makes thermonuclear fusion an extremely high-density energy source.'
  ],
  commonTraps: [
    'Confusing Q-value formulas: With mass defect, Q = (Mass_reactants - Mass_products) c^2. With binding energy, Q = (BE_products - BE_reactants). Using (BE_reactants - BE_products) gives the exact negative answer!',
    'Assuming nuclear density depends on mass number: The volume is proportional to R^3 proportional to A, and mass is proportional to A, so density rho = Mass/Volume is completely independent of A.',
    'Mixing nuclear mass with atomic mass: When using atomic masses in mass defect calculations, ensure the electron masses cancel out or are explicitly accounted for in the isotope masses.',
    'Assuming Coulomb repulsion affects nuclear force: The strong nuclear force is strictly charge-independent (force between p-p, n-n, and p-n is identical within nuclear range).',
    'Studying deleted radioactivity topics for JEE 2027: Half-life, mean life, and alpha/beta decay displacement laws were pruned by NTA; focus on binding energy, Q-value, and nuclear size.'
  ]
};
