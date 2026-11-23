import { Chapter } from '@/types';

export const currentElectricityChapter: Chapter = {
  id: 'phy-c12-current-electricity',
  subject: 'physics',
  classLevel: 12,
  name: 'Current Electricity',
  unit: 'Electrodynamics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Current & Drift Velocity}: I = n e A v_d, \\quad v_d = \\frac{e E \\tau}{m} = \\frac{e V \\tau}{m L}',
    '\\text{Current Density & Ohm\'s Law}: \\vec{J} = \\sigma \\vec{E} = \\frac{\\vec{E}}{\\rho}, \\quad \\rho = \\frac{m}{n e^2 \\tau}, \\quad R = \\rho \\frac{L}{A}',
    '\\text{Temperature Dependence}: R(T) = R_0 (1 + \\alpha \\Delta T), \\quad \\rho(T) = \\rho_0 (1 + \\alpha \\Delta T)',
    '\\text{Terminal Potential Difference}: V = \\mathcal{E} - I r \\; (\\text{discharging}), \\quad V = \\mathcal{E} + I r \\; (\\text{charging})',
    '\\text{Parallel Cells}: \\mathcal{E}_{\\text{eq}} = \\frac{\\sum \\frac{\\mathcal{E}_i}{r_i}}{\\sum \\frac{1}{r_i}} = \\frac{\\mathcal{E}_1 r_2 + \\mathcal{E}_2 r_1}{r_1 + r_2}, \\quad \\frac{1}{r_{\\text{eq}}} = \\sum \\frac{1}{r_i}',
    '\\text{Maximum Power Transfer}: P_{\\text{max}} = \\frac{\\mathcal{E}^2}{4 r} \\quad (\\text{when } R_{\\text{load}} = r_{\\text{internal}})',
    '\\text{Wheatstone Bridge (Balanced)}: \\frac{R_1}{R_2} = \\frac{R_3}{R_4} \\implies I_{\\text{galvanometer}} = 0',
    '\\text{Meter Bridge}: \\frac{R}{S} = \\frac{l_1}{100 - l_1}, \\quad \\text{With End Errors}: \\frac{R}{S} = \\frac{l_1 + \\alpha}{100 - l_1 + \\beta}',
    '\\text{Joule Heating}: H = I^2 R t = \\frac{V^2}{R} t, \\quad \\text{Fuse Wire Law}: I^2 \\propto r^3',
    '\\text{Cube Resistor Network}: R_{\\text{body diag}} = \\frac{5}{6}R, \\quad R_{\\text{face diag}} = \\frac{3}{4}R, \\quad R_{\\text{edge}} = \\frac{7}{12}R'
  ],
  topics: [
    {
      id: 'phy-cur-1-drift-velocity-micro',
      name: '12.3.1 Drift Velocity, Relaxation Time & Microscopic Ohm\'s Law',
      description: 'Free electron gas model, thermal speed vs drift velocity (order of mm/s), relaxation time tau, derivation of J = sigma * E, mobility mu = v_d / E.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-cur-2-resistivity-temperature',
      name: '12.3.2 Resistivity, Conductivity & Temperature Coefficients',
      description: 'Temperature coefficient alpha (positive for metals, negative for semiconductors), carbon resistors, standard resistance alloys (Manganin, Constantan with nearly zero alpha).',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-cur-3-resistor-circuits-symmetry',
      name: '12.3.3 Advanced Resistor Networks & Circuit Symmetries',
      description: 'Series and parallel grouping; infinite ladder networks; symmetry operations (perpendicular bisector equi-potential plane and folding symmetry); 12-resistor wire cube equivalent resistances.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-cur-4-emf-internal-resistance-cells',
      name: '12.3.4 EMF, Internal Resistance & Grouping of Cells',
      description: 'Chemical origin of EMF, terminal voltage during discharge and recharge, series and parallel cell combinations with opposing polarities, mixed grouping for maximum power output.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-cur-5-maximum-power-transfer',
      name: '12.3.5 Maximum Power Transfer Theorem',
      description: 'Derivation of maximum power dissipated across an external variable load R = r_int; power curve P(R) vs R showing peak at R = r and 50% power transfer efficiency.',
      estimatedHours: 2,
      isHighWeightage: true
    },
    {
      id: 'phy-cur-6-kirchhoff-laws',
      name: '12.3.6 Kirchhoff\'s Rules (KCL, KVL & Loop Analysis)',
      description: 'Junction rule (conservation of charge) and loop rule (conservation of energy); rigorous sign conventions for batteries and resistors; nodal analysis for multi-loop circuits.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-cur-7-wheatstone-bridge',
      name: '12.3.7 Wheatstone Bridge Principle & Sensitivity',
      description: 'Proof of null balance condition P/Q = R/S; condition for maximum bridge sensitivity (all 4 branch resistances approximately equal); conjugate galvanometer-battery arms.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-cur-8-meter-bridge-end-errors',
      name: '12.3.8 Meter Bridge Apparatus & Experimental End Corrections',
      description: 'Experimental setup for measuring unknown resistance; end resistance corrections alpha and beta arising from brass strip contact resistance; interchanging unknown and known resistances to eliminate systematic errors.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-cur-9-electrical-power-bulbs',
      name: '12.3.9 Electric Power, Joule Heating & Bulb Rating Dynamics',
      description: 'Rated power and voltage P_rated = V_rated^2 / R; series connected bulbs (smaller wattage bulb glows brighter due to higher resistance); parallel connected bulbs; fuse wire rating I^2 proportional to r^3.',
      estimatedHours: 3,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Current Electricity is a cornerstone chapter that delivers 2-3 guaranteed questions per JEE Main session. Note that while the Potentiometer has been omitted from the rationalized JEE 2027 syllabus, the Meter Bridge, Grouping of Parallel Cells, and Maximum Power Transfer Theorem are tested with high frequency.',
    ncertPointers: [
      'Current is a SCALAR quantity even though it has magnitude and a specific direction, because it does NOT obey vector addition rules (currents at a junction simply add algebraically: $I_3 = I_1 + I_2$).',
      'The drift speed of conduction electrons in a typical household copper wire carrying normal currents is remarkably slow: only a fraction of a millimeter per second ($v_d \\sim 10^{-4}\\text{ m/s}$). Yet an electric bulb turns on almost instantaneously because the electric field travels down the wire at nearly the speed of light ($c$).',
      'During discharging of a battery, the terminal potential difference is LESS than the EMF: $V = \\mathcal{E} - I r$. During RECHARGING of a battery by an external charger, the terminal potential difference is GREATER than the EMF: $V = \\mathcal{E} + I r$.',
      'In a balanced Wheatstone bridge, the galvanometer and battery arms are CONJUGATE: interchanging the positions of the galvanometer and the battery does NOT alter the balance condition.',
      'For a wire stretched to $n$ times its original length ($L \\to n L$): since volume is conserved ($A \\to A/n$), its resistance increases by a factor of $n^2$: $R_{\\text{new}} = n^2 R_{\\text{old}}$.'
    ],
    commonTraps: [
      'Stretched wire percent change trap: If length of a wire is stretched by a SMALL percentage ($< 5\\%$, say $+1\\%$), its resistance increases by TWICE that percentage ($+2\\%$): $\\frac{\\Delta R}{R} \\approx 2 \\frac{\\Delta L}{L}$. But if stretched by $100\\%$ ($L \\to 2L$), resistance becomes $4R$, which is a $+300\\%$ increase, NOT $+200\\%$!',
      'Bulb in series trap: Students often assume a $100\\text{ W}$ bulb is always brighter than a $25\\text{ W}$ bulb. In PARALLEL (household), the $100\\text{ W}$ bulb is brighter. But in SERIES, the $25\\text{ W}$ bulb has a HIGHER resistance ($R = V^2/P$), draws the same current, and therefore dissipates MORE power ($I^2 R$) and GLOWS BRIGHTER!',
      'Meter bridge end error calculation: If end errors are $\\alpha$ and $\\beta$, the true lengths are $(l_1 + \\alpha)$ and $(100 - l_1 + \\beta)$. Notice that $\\alpha$ is added to $l_1$, and $\\beta$ is added to $(100 - l_1)$.',
      'Parallel cells with reversed polarity: In $\\mathcal{E}_{\\text{eq}} = \\frac{\\mathcal{E}_1/r_1 + \\mathcal{E}_2/r_2}{1/r_1 + 1/r_2}$, if cell 2 is connected in opposing polarity, its EMF enters with a MINUS sign: $(\\mathcal{E}_1/r_1 - \\mathcal{E}_2/r_2)$.'
    ],
    shortcutsVsConcepts: [
      'Cube Resistor Network Mnemonic: For 12 identical resistors $R$ on a cube frame: Body diagonal is $\\frac{5}{6}R$, Face diagonal is $\\frac{3}{4}R = \\frac{6}{8}R$, Edge is $\\frac{7}{12}R$. Remember "5/6, 6/8, 7/12" to solve in 3 seconds.',
      'Maximum Power Output: A battery of EMF $\\mathcal{E}$ and internal resistance $r$ delivers maximum power $P_{\\text{max}} = \\frac{\\mathcal{E}^2}{4r}$ to an external load when $R = r$.',
      'Parallel Cells Shortcut: If two identical cells of EMF $\\mathcal{E}$ and internal resistance $r$ are in parallel, equivalent EMF is still $\\mathcal{E}$, while internal resistance is $r/2$.'
    ]
  }
};
