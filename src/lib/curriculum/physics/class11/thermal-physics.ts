import { Chapter } from '@/types';

export const thermalPhysicsChapter: Chapter = {
  id: 'phy-c11-thermal-physics',
  subject: 'physics',
  classLevel: 11,
  name: 'Thermal Properties of Matter and Thermodynamics',
  unit: 'Thermal Physics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Thermal Expansion}: \\Delta L = L_0 \\alpha \\Delta T, \\quad \\beta = 2\\alpha, \\quad \\gamma = 3\\alpha',
    '\\text{Heat Conduction}: H = \\frac{dQ}{dt} = \\frac{k A (T_1 - T_2)}{L} = \\frac{\\Delta T}{R_{\\text{th}}} \\quad \\left(R_{\\text{th}} = \\frac{L}{k A}\\right)',
    '\\text{Stefan-Boltzmann Law}: P = e \\sigma A (T^4 - T_0^4), \\quad \\sigma = 5.67 \\times 10^{-8} \\text{ W}/(\\text{m}^2\\cdot\\text{K}^4)',
    '\\text{Wien\'s Displacement Law}: \\lambda_{\\text{max}} T = b = 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}',
    '\\text{Newton\'s Law of Cooling}: \\frac{T_1 - T_2}{t} = K \\left(\\frac{T_1 + T_2}{2} - T_0\\right)',
    '\\text{KTG Gas Pressure}: P = \\frac{1}{3} \\rho v_{\\text{rms}}^2 = \\frac{1}{3} \\frac{N m}{V} v_{\\text{rms}}^2',
    '\\text{Molecular Speeds}: v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}, \\quad v_{\\text{avg}} = \\sqrt{\\frac{8RT}{\\pi M}}, \\quad v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}',
    '\\text{Internal Energy & Heat Capacities}: U = \\frac{f}{2} n R T, \\quad C_v = \\frac{f}{2}R, \\quad C_p = C_v + R, \\quad \\gamma = 1 + \\frac{2}{f}',
    '\\text{First Law of Thermodynamics}: \\Delta Q = \\Delta U + W, \\quad W = \\int P \\, dV',
    '\\text{Isothermal Work}: W_{\\text{iso}} = n R T \\ln\\left(\\frac{V_f}{V_i}\\right) = n R T \\ln\\left(\\frac{P_i}{P_f}\\right), \\quad \\Delta U = 0',
    '\\text{Adiabatic Work}: W_{\\text{adia}} = \\frac{P_i V_i - P_f V_f}{\\gamma - 1} = \\frac{n R (T_i - T_f)}{\\gamma - 1}, \\quad P V^\\gamma = \\text{constant}',
    '\\text{Adiabatic vs Isothermal Slope}: \\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = \\gamma \\left(\\frac{dP}{dV}\\right)_{\\text{iso}}'
  ],
  topics: [
    {
      id: 'phy-thm-1-thermal-expansion',
      name: '9.1 Temperature, Thermometry & Thermal Expansion',
      description: 'Linear, areal, and volumetric thermal expansion coefficients (alpha, beta, gamma with beta = 2 alpha, gamma = 3 alpha), anomalous expansion of water at 4 deg C, bimetallic thermostat strips.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-thm-2-calorimetry-latent-heat',
      name: '9.2 Calorimetry, Specific Heat & Phase Transitions',
      description: 'Specific heat capacity c, molar heat capacity, water equivalent, latent heat of fusion (80 cal/g) and vaporization (540 cal/g), principle of mixtures with ice-water-steam equilibria.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-thm-3-conduction-series-parallel',
      name: '9.3 Heat Conduction & Thermal Resistance Networks',
      description: 'Fourier\'s law of heat conduction H = -k A dT/dx, thermal resistance analogy R_th = L / (k A), composite slabs in series and parallel, interface junction temperature.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-thm-4-radiation-blackbody',
      name: '9.4 Thermal Radiation, Stefan-Boltzmann & Wien\'s Laws',
      description: 'Prevost\'s theory of heat exchange, blackbody radiation spectrum, Stefan-Boltzmann law P = e sigma A (T^4 - T0^4), Wien\'s displacement law lambda_max * T = b.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-thm-5-newtons-cooling',
      name: '9.5 Newton\'s Law of Cooling',
      description: 'Differential form dT/dt = -K(T - T0) for small temperature differences, logarithmic solution vs approximate average method for cooling between two temperatures in time t.',
      estimatedHours: 2,
      isHighWeightage: true
    },
    {
      id: 'phy-thm-6-ktg-pressure-energy',
      name: '9.6 Kinetic Theory of Gases (KTG) & Pressure Derivation',
      description: 'Kinetic postulates, microscopic derivation of pressure P = 1/3 rho v_rms^2, absolute temperature as a measure of average translational kinetic energy per molecule (3/2 k_B T).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-thm-7-molecular-speeds',
      name: '9.7 Maxwell-Boltzmann Molecular Speed Distribution',
      description: 'Root mean square speed v_rms, average speed v_avg, most probable speed v_mp; speed hierarchy v_mp < v_avg < v_rms; temperature and molar mass scaling.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-thm-8-equipartition-specific-heats',
      name: '9.8 Degrees of Freedom, Equipartition & Gas Mixtures',
      description: 'Translational, rotational, and vibrational degrees of freedom; monoatomic (f=3), diatomic (f=5 at ordinary temp, f=7 at high temp), polyatomic gases; Mayer\'s relation Cp - Cv = R; adiabatic index gamma; mixture of gases.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-thm-9-first-law-thermodynamics',
      name: '9.9 First Law of Thermodynamics & Indicator Diagrams',
      description: 'Internal energy as a state function Delta U = n Cv Delta T, work done by gas W = integral(P dV) as area under P-V curve, sign convention standards.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-thm-10-thermodynamic-processes',
      name: '9.10 Isochoric, Isobaric, Isothermal & Adiabatic Processes',
      description: 'Isochoric (W = 0, Q = n Cv dT), Isobaric (W = P dV, Q = n Cp dT), Isothermal (dT = 0, dU = 0, Q = W = nRT ln(V2/V1)), Adiabatic (Q = 0, W = -dU = (P1V1 - P2V2)/(gamma - 1)).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'phy-thm-11-cyclic-processes-work',
      name: '9.11 Cyclic Processes & Enclosed Indicator Area',
      description: 'Cyclic P-V diagrams (clockwise = positive work, counter-clockwise = negative work), net work done = enclosed geometric area (rectangles, triangles, ellipses).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-thm-12-second-law-free-expansion',
      name: '9.12 Second Law of Thermodynamics & Free Expansion',
      description: 'Clausius and Kelvin-Planck statements; adiabatic free expansion into vacuum (W = 0, Q = 0, Delta U = 0, initial and final temperatures match for ideal gas); irreversibility.',
      estimatedHours: 2,
      isHighWeightage: false
    }
  ],
  guide: {
    overview: 'Thermal Physics and Thermodynamics is one of the highest scoring, formula-dense sections in JEE Main, consistently accounting for 2-3 questions per exam (1 from Heat/KTG, 1-2 from Thermodynamics). Mastery of P-V indicator diagrams and adiabatic calculations is paramount.',
    ncertPointers: [
      'Internal Energy $U$ of an ideal gas depends EXCLUSIVELY on its temperature: $U = \\frac{f}{2} n R T$. For ANY process (whether isobaric, isochoric, adiabatic, or arbitrary), the change in internal energy is ALWAYS $\\Delta U = n C_v \\Delta T$.',
      'In an Adiabatic process ($Q = 0$), if a gas EXPANDS ($W > 0$), work is done at the expense of internal energy ($\\Delta U = -W < 0$), so the gas COOLS. If compressed adiabatically, its temperature RISES.',
      'Adiabatic P-V curve is STEEPER than the Isothermal P-V curve: Slope of adiabatic is $\\gamma$ times the slope of isothermal: $\\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = \\gamma \\left(\\frac{dP}{dV}\\right)_{\\text{iso}}$.',
      'During adiabatic free expansion into vacuum: Work done is ZERO ($P_{\\text{ext}} = 0$), Heat exchange is ZERO ($Q = 0$), so $\\Delta U = 0$. For an ideal gas, temperature remains CONSTANT ($T_f = T_i$). However, this is an IRREVERSIBLE process.',
      'A blackbody is the best absorber (absorptivity $a = 1$) as well as the best EMITTER of thermal radiation at any given temperature (Kirchhoff\'s law of radiation).'
    ],
    commonTraps: [
      'Work done sign trap: In Physics, $W = +\\int P dV$ is work done BY the gas, so $\\Delta Q = \\Delta U + W$. In Chemistry, work done ON the gas is defined as positive, so $\\Delta U = q + w$. Do NOT mix up the two conventions in Physics exams!',
      'Adiabatic temperature-volume power: $T V^{\\gamma - 1} = \\text{constant}$, NOT $T V^\\gamma$! The pressure-temperature relation is $P^{1 - \\gamma} T^\\gamma = \\text{constant} \\implies T \\propto P^{\\frac{\\gamma - 1}{\\gamma}}$.',
      'Stefan-Boltzmann net radiation: Rate of net radiative heat loss is $P_{\\text{net}} = e \\sigma A (T^4 - T_0^4)$, NOT $e \\sigma A (T - T_0)^4$! Temperatures MUST be converted to absolute KELVIN before raising to the 4th power.',
      'Degrees of freedom temperature trap: Diatomic molecules (like $O_2$ and $N_2$) have $f = 5$ at room temperatures ($300\\text{ K}$) because vibrational modes are frozen. Vibrational modes ($+2$ degrees of freedom) become active ONLY at very high temperatures ($> 1000\\text{ K}$), making $f = 7$.'
    ],
    shortcutsVsConcepts: [
      'Adiabatic Compression Work Shortcut: $W = \\frac{n R (T_1 - T_2)}{\\gamma - 1} = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$. If final temperature or pressure is unknown, find it first via $T_1 V_1^{\\gamma-1} = T_2 V_2^{\\gamma-1}$.',
      'Gas Mixture Shortcut: For a mixture of $n_1$ moles of gas 1 and $n_2$ moles of gas 2: $C_{v,\\text{mix}} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2}$ and $\\gamma_{\\text{mix}} = \\frac{n_1 C_{p1} + n_2 C_{p2}}{n_1 C_{v1} + n_2 C_{v2}}$.',
      'Elliptical Cycle Net Work Shortcut: If a cyclic process is an ellipse on the $P-V$ diagram with horizontal semi-axis $a = \\frac{V_2 - V_1}{2}$ and vertical semi-axis $b = \\frac{P_2 - P_1}{2}$, the net work done in one cycle is $W = \\pi a b = \\frac{\\pi}{4} (P_2 - P_1)(V_2 - V_1)$ instantly!'
    ]
  }
};
