import { Chapter } from '@/types';

export const chemicalKineticsChapter: Chapter = {
  id: 'chem-c12-chemical-kinetics',
  subject: 'chemistry',
  classLevel: 12,
  name: 'Chemical Kinetics',
  unit: 'Physical Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Rate of Reaction}: r = -\\frac{1}{a}\\frac{d[A]}{dt} = -\\frac{1}{b}\\frac{d[B]}{dt} = +\\frac{1}{c}\\frac{d[C]}{dt}',
    '\\text{Differential Rate Law}: r = k [A]^x [B]^y \\quad (\\text{Order } n = x + y)',
    '\\text{Units of Rate Constant } k: (\\text{mol}\\cdot\\text{L}^{-1})^{1-n}\\cdot\\text{s}^{-1}',
    '\\text{Zero Order Integrated Rate}: [A]_t = [A]_0 - k t, \\quad t_{1/2} = \\frac{[A]_0}{2 k}, \\quad t_{\\text{completion}} = \\frac{[A]_0}{k}',
    '\\text{First Order Integrated Rate}: k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{[A]_0}{[A]_t}\\right), \\quad [A]_t = [A]_0 e^{-k t}',
    '\\text{First Order Half-Life}: t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k} \\quad (\\text{strictly independent of initial concentration } [A]_0)',
    '\\text{First Order Fractional Lifetimes}: t_{75\\%} = 2 t_{1/2}, \\quad t_{87.5\\%} = 3 t_{1/2}, \\quad t_{99.9\\%} = 10 t_{1/2}',
    '\\text{Gaseous 1st Order } [A(g) \\rightarrow B(g) + C(g)]: k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{P_0}{2 P_0 - P_t}\\right)',
    '\\text{Arrhenius Equation}: k = A e^{-E_a / (R T)}, \\quad \\ln k = \\ln A - \\frac{E_a}{R T}',
    '\\text{Arrhenius Two-Temperature Form}: \\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)',
    '\\text{Collision Theory}: k = P \\cdot Z_{AB} \\cdot e^{-E_a / (R T)} \\quad (P = \\text{steric factor, } Z_{AB} = \\text{collision frequency})'
  ],
  topics: [
    {
      id: 'chem-kin-1-rate-factors',
      name: '12.3.1 Rate of Reaction & Experimental Factors',
      description: 'Average rate vs instantaneous rate; stoichiometric rate expressions with appropriate stoichiometric reciprocal signs; experimental measurement techniques (spectrophotometry, titrimetry, polarimetry, manometry); factors influencing reaction rate: concentration of reactants, nature of reactants, temperature, surface area of solid reactants, presence of catalyst, and light (photochemical reactions).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-kin-2-rate-law-order-molecularity',
      name: '12.3.2 Rate Law, Order of Reaction & Molecularity',
      description: 'Rate law and experimental rate constant k; distinction between order (experimentally determined, can be zero, fractional, or negative) and molecularity (theoretical integer count of colliding particles in elementary step, cannot be zero or non-integer, never exceeds 3); elementary vs multi-step complex reactions; identification of rate-determining step (RDS); pseudo-first-order reactions (acid-catalyzed hydrolysis of ethyl acetate, inversion of cane sugar with polarimeter data).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-kin-3-integrated-rate-laws-halflife',
      name: '12.3.3 Integrated Rate Equations & Half-Life (0th and 1st Order)',
      description: 'Zero order kinetics: linear plot of [A] vs t (slope = -k), half-life directly proportional to [A]_0; First order kinetics: exponential decay [A]_t = [A]_0 exp(-kt), linear plot of ln[A] vs t (slope = -k) and log[A] vs t (slope = -k/2.303); half-life t_1/2 = 0.693/k completely independent of [A]_0; consecutive half-life rules (t_75% = 2 t_50%, t_87.5% = 3 t_50%, t_99.9% = 10 t_50%); calculation of rate constants and remaining concentrations at arbitrary times.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-kin-4-gaseous-kinetics',
      name: '12.3.4 Kinetics of Gaseous Reactions & Manometric Calculations',
      description: 'First order gas-phase decomposition of type A(g) -> B(g) + C(g) and 2 A(g) -> 2 B(g) + C(g) (e.g. decomposition of N2O5 and SO2Cl2); expressing instantaneous concentration in terms of initial pressure P_0 and total pressure P_t at time t; derivation and numerical problems calculating rate constant k from total pressure gauge readings.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-kin-5-arrhenius-activation-energy',
      name: '12.3.5 Temperature Dependence & The Arrhenius Equation',
      description: 'Temperature coefficient of reaction (rate doubles or triples for every 10 K rise); Arrhenius equation k = A exp(-Ea/RT); activation energy Ea as minimum kinetic energy needed by colliding molecules to cross energy barrier; transition state / activated complex theory; Maxwell-Boltzmann distribution curve and graphical explanation of why temperature increases fraction of molecules possessing E >= Ea; linear plot of ln k vs 1/T (slope = -Ea/R) and log k vs 1/T (slope = -Ea / 2.303 R); two-temperature formula log(k2/k1) = (Ea / 2.303 R) * (1/T1 - 1/T2); role of catalyst: provides alternative pathway with lower Ea without altering Delta H or equilibrium position.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-kin-6-collision-theory',
      name: '12.3.6 Collision Theory of Chemical Reactions',
      description: 'Postulates of collision theory for bimolecular gaseous reactions; collision frequency Z; activation energy requirement; orientation / steric factor P accounting for proper spatial alignment during collision; effective collision formula k = P * Z * exp(-Ea/RT); limitations of collision theory (treating molecules as hard spheres and ignoring internal vibrational/rotational degrees of freedom).',
      estimatedHours: 2,
      isHighWeightage: false
    }
  ],
  ncertPointers: [
    'Order of a reaction is an EXPERIMENTALLY determined quantity. It can be zero, positive, negative, or a fraction. It CANNOT be deduced simply from balanced stoichiometric coefficients of a complex reaction.',
    'Molecularity is applicable ONLY to elementary reactions. For complex reactions, molecularity has no theoretical meaning.',
    'For a first order reaction, the time required to complete 99.9% of the reaction is approximately 10 times its half-life: $t_{99.9\\%} = \\frac{2.303}{k} \\log_{10}(1000) = \\frac{2.303 \\times 3}{0.693 / t_{1/2}} \\approx 10\\,t_{1/2}$.',
    'A catalyst accelerates reaction rate by providing an alternate reaction pathway with a LOWER activation energy ($E_a$). A catalyst speeds up forward and reverse reactions equally, leaving equilibrium constant $K_{eq}$ and enthalpy change $\\Delta H$ completely unchanged.',
    'In the inversion of cane sugar, although water participates as a reactant, it is present in huge excess ($[\\text{H}_2\\text{O}] \\approx 55.5\\,\\text{M}$); hence its concentration remains virtually constant, making the reaction pseudo-first order.'
  ],
  commonTraps: [
    'Confusing rate of reaction with rate of disappearance of a reactant: For $2\\text{A} \\rightarrow \\text{B}$, $\\text{Rate of Reaction} = -\\frac{1}{2} \\frac{d[A]}{dt}$. The rate of disappearance of A is $-\\frac{d[A]}{dt} = 2 \\times \\text{Rate of Reaction}$. Always check whether the question asks for rate of reaction or rate of disappearance!',
    'Units of rate constant $k$: For zero order, $k$ is in $\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$. For first order, $k$ is in $\\text{s}^{-1}$. For second order, $k$ is in $\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$. Never forget that $k$ units depend on overall order $n$ as $(\\text{mol/L})^{1-n} \\text{s}^{-1}$.',
    'Using degrees Celsius in Arrhenius equation: $T$ MUST always be converted to Kelvin ($T\\,\\text{K} = T^\\circ\\text{C} + 273.15$).',
    'Units of $R$ vs $E_a$: If $E_a$ is given in $\\text{kJ/mol}$, $R$ MUST be taken as $8.314 \\times 10^{-3}\\,\\text{kJ}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$ or $E_a$ must be multiplied by $1000$ to use $R = 8.314\\,\\text{J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$.'
  ]
};
