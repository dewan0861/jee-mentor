import { Chapter } from '@/types';

export const capacitanceChapter: Chapter = {
  id: 'phy-c12-capacitance',
  subject: 'physics',
  classLevel: 12,
  name: 'Capacitance and Dielectrics',
  unit: 'Electrodynamics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Capacitance}: Q = C V, \\quad C_{\\text{sphere}} = 4\\pi\\epsilon_0 R',
    '\\text{Parallel Plate Capacitor}: C_0 = \\frac{\\epsilon_0 A}{d}, \\quad E = \\frac{V}{d} = \\frac{\\sigma}{\\epsilon_0}',
    '\\text{Attraction Force between Plates}: F = \\frac{Q^2}{2\\epsilon_0 A} = \\frac{1}{2} Q E = \\frac{1}{2} C V^2 \\frac{1}{d}',
    '\\text{Partially Filled Dielectric}: C = \\frac{\\epsilon_0 A}{d - t + \\frac{t}{K}}',
    '\\text{Stored Energy}: U = \\frac{1}{2} Q V = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}, \\quad u_E = \\frac{1}{2} \\epsilon_0 E^2',
    '\\text{Common Potential (Charge Sharing)}: V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}',
    '\\text{Energy Loss in Sharing}: \\Delta U_{\\text{loss}} = \\frac{1}{2} \\frac{C_1 C_2}{C_1 + C_2} (V_1 - V_2)^2',
    '\\text{Dielectric Insertion (Battery Connected)}: V = \\text{const}, \\; C = K C_0, \\; Q = K Q_0, \\; U = K U_0, \\; W_{\\text{battery}} = \\Delta Q \\cdot V',
    '\\text{Dielectric Insertion (Battery Disconnected)}: Q = \\text{const}, \\; C = K C_0, \\; V = \\frac{V_0}{K}, \\; U = \\frac{U_0}{K}',
    '\\text{RC Charging}: q(t) = Q_0 (1 - e^{-t/RC}), \\quad i(t) = \\frac{V_0}{R} e^{-t/RC}, \\quad \\tau = R C',
    '\\text{RC Discharging}: q(t) = Q_0 e^{-t/RC}, \\quad i(t) = -\\frac{Q_0}{RC} e^{-t/RC}',
    '\\text{Energy Partition in Charging}: W_{\\text{battery}} = Q_0 V_0, \\quad U_{\\text{capacitor}} = \\frac{1}{2} Q_0 V_0, \\quad H_{\\text{heat}} = \\frac{1}{2} Q_0 V_0'
  ],
  topics: [
    {
      id: 'phy-cap-1-concept-parallel-plate',
      name: '12.2.1 Concept of Capacitance & Parallel Plate Capacitor',
      description: 'Physical meaning of capacitance, charge storage, potential difference; derivation of C = epsilon_0 * A / d; attractive electrostatic force between opposing plates F = Q^2 / (2 epsilon_0 A).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-cap-2-spherical-cylindrical',
      name: '12.2.2 Spherical and Cylindrical Capacitors',
      description: 'Concentric spherical capacitor C = 4 pi epsilon_0 a b / (b - a); coaxial cylindrical cable capacitor C = 2 pi epsilon_0 L / ln(b/a); isolated sphere limit.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-cap-3-combinations-charge-sharing',
      name: '12.2.3 Capacitor Networks & Charge Sharing Losses',
      description: 'Series and parallel equivalent capacitances; bridge circuits; connecting charged capacitors: common potential V_c and heat loss Delta U = 1/2 [C1 C2 / (C1 + C2)] (V1 - V2)^2.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-cap-4-dielectrics-polarization',
      name: '12.2.4 Dielectric Materials, Bound Charges & Polarization',
      description: 'Polar vs non-polar molecules, electric susceptibility chi_e, polarization vector P, induced bound surface charge density sigma_b = sigma(1 - 1/K), electric displacement vector D.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-cap-5-dielectric-slabs-variable',
      name: '12.2.5 Dielectric Slabs (Partial, Multiple & Inhomogeneous)',
      description: 'Capacitance with slab of thickness t: C = epsilon_0 A / (d - t + t/K); layered dielectrics in series vs parallel; continuously varying dielectric constant K(x) via differential slices.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-cap-6-battery-cases-work',
      name: '12.2.6 Battery Connected vs Disconnected Dielectric Insertion',
      description: 'Detailed thermodynamic bookkeeping: changes in C, V, Q, E, and U; work done by battery W = Delta Q * V; mechanical work done by electric field on dielectric slab.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-cap-7-energy-density-lateral-force',
      name: '12.2.7 Electrostatic Energy Density & Force on Dielectric Slabs',
      description: 'Energy density u_E = 1/2 epsilon_0 E^2; fringe field origin of inward lateral force sucking a dielectric slab into a charged capacitor F = (epsilon_0 b V^2 / 2d) * (K - 1).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-cap-8-rc-transients',
      name: '12.2.8 RC Circuit Transients (Charging, Discharging & Heat)',
      description: 'Differential equations for RC charging and discharging; time constant tau = RC (63.2% charged, 36.8% remaining); steady-state DC analysis (capacitor acts as open circuit); 50% heat loss rule.',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Capacitance is one of the highest-yield chapters in JEE Physics, accounting for 1-2 questions in every JEE Main session and intricate multi-loop RC/dielectric problems in JEE Advanced. The two most critical areas are: (1) Battery connected vs disconnected dielectric insertion energetics, and (2) RC circuit charging/discharging transients.',
    ncertPointers: [
      'In charging a capacitor through a resistor from a battery of EMF $V_0$: Total energy delivered by the battery is $W_{\\text{battery}} = Q_0 V_0$. The energy stored in the capacitor is ONLY $U = \\frac{1}{2} Q_0 V_0 = \\frac{1}{2} C V_0^2$. EXACTLY HALF ($50\\%$) of the battery energy is ALWAYS dissipated as heat in the resistor, INDEPENDENT of the resistance value $R$!',
      'In DC circuits at STEADY STATE ($t \\to \\infty$), a fully charged capacitor draws ZERO current and acts as an OPEN CIRCUIT ($i_C = 0$). At the instant of switching ($t = 0^+$), an uncharged capacitor acts as a SHORT CIRCUIT ($V_C = 0$).',
      'The attractive force between two capacitor plates is $F = \\frac{Q^2}{2\\epsilon_0 A} = \\frac{1}{2} Q E$. The factor of $1/2$ appears because each plate experiences the electric field produced by the OTHER plate ($E_{\\text{single plate}} = \\frac{\\sigma}{2\\epsilon_0} = \\frac{E}{2}$), not the total field $E$.',
      'When two charged capacitors are connected, charge flows until they reach a COMMON POTENTIAL. During this sharing, electrostatic energy is ALWAYS LOST as heat and electromagnetic radiation, given by $\\Delta U = \\frac{1}{2} \\frac{C_1 C_2}{C_1 + C_2} (V_1 - V_2)^2$.'
    ],
    commonTraps: [
      'Battery state during dielectric insertion: If battery remains CONNECTED, potential $V$ stays constant, so charge $Q$ and stored energy $U$ INCREASE by factor $K$. If battery is DISCONNECTED, charge $Q$ is trapped, potential $V$ drops by $1/K$, and energy $U$ DECREASES by $1/K$!',
      'Force on plate factor of 1/2: Never write $F = Q E$! The correct force is $F = \\frac{1}{2} Q E$. Using $Q E$ doubles the answer and leads to immediate negative marking.',
      'Partial dielectric slab location: The capacitance $C = \\frac{\\epsilon_0 A}{d - t + t/K}$ is completely INDEPENDENT of where the slab of thickness $t$ is placed between the plates (whether touching the left plate, right plate, or floating in the middle).',
      'Variable dielectric slicing: If $K(x)$ varies along the distance between plates $x$, divide into infinitesimal capacitors in SERIES ($d(1/C) = \\frac{dx}{\\epsilon_0 A K(x)}$). If $K(y)$ varies parallel to the plates, divide into slices in PARALLEL ($dC = \\frac{\\epsilon_0 K(y) dA}{d}$).'
    ],
    shortcutsVsConcepts: [
      'RC Transient Instantaneous Rules: At $t = 0^+$, replace uncharged capacitors with a SHORT CIRCUIT (plain wire). At $t \\to \\infty$, replace fully charged capacitors with an OPEN CIRCUIT (broken wire). This solves 90% of JEE Main RC circuit questions without differential equations!',
      'Dielectric Energy Change Shortcut: When a slab of constant $K$ is inserted with battery connected: $\\Delta U = +\\frac{1}{2} (K - 1) C_0 V^2$, while battery work is $W_{\\text{battery}} = +(K - 1) C_0 V^2$. The remaining half is the work done by the electric field pulling the slab inward!',
      'Charge Sharing Formula: Common potential $V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}$. Energy dissipated $\\Delta H = \\frac{C_1 C_2 (V_1 - V_2)^2}{2(C_1 + C_2)}$.'
    ]
  }
};
