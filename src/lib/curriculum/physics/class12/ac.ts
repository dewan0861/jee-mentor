import { Chapter } from '@/types';

export const acChapter: Chapter = {
  id: 'phy-c12-ac',
  subject: 'physics',
  classLevel: 12,
  name: 'Alternating Current',
  unit: 'Electrodynamics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{RMS & Mean Current}: I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 I_0, \\quad I_{\\text{avg, half}} = \\frac{2I_0}{\\pi} \\approx 0.637 I_0, \\quad I_{\\text{avg, full}} = 0',
    '\\text{Reactances}: X_L = \\omega L = 2\\pi f L, \\quad X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}',
    '\\text{Series LCR Impedance}: Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad \\tan\\phi = \\frac{X_L - X_C}{R}',
    '\\text{Resonance Frequency}: \\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad f_0 = \\frac{1}{2\\pi\\sqrt{LC}}',
    '\\text{Quality Factor (Q-factor)}: Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{\\omega_0}{\\Delta \\omega}',
    '\\text{Bandwidth}: \\Delta \\omega = \\omega_2 - \\omega_1 = \\frac{R}{L}, \\quad P_{\\text{half}} = \\frac{P_{\\text{max}}}{2}',
    '\\text{AC Average Power}: P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi = I_{\\text{rms}}^2 R',
    '\\text{Power Factor}: \\cos\\phi = \\frac{R}{Z} = \\frac{R}{\\sqrt{R^2 + (X_L - X_C)^2}}',
    '\\text{Wattless Current}: I_{\\text{wattless}} = I_{\\text{rms}} \\sin\\phi',
    '\\text{LC Oscillations}: q(t) = Q_0 \\cos(\\omega_0 t), \\; i(t) = -\\omega_0 Q_0 \\sin(\\omega_0 t), \\; U_{\\text{total}} = \\frac{q^2}{2C} + \\frac{1}{2}Li^2 = \\frac{Q_0^2}{2C}',
    '\\text{Ideal Transformer}: \\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}, \\quad \\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} = \\frac{V_s I_s \\cos\\phi_s}{V_p I_p \\cos\\phi_p}'
  ],
  topics: [
    {
      id: 'phy-ac-1-rms-mean-ac',
      name: '12.7.1 Peak, RMS and Average Values of AC',
      description: 'Mathematical derivation of root-mean-square (RMS) and average/mean values for sinusoidal AC over half and full cycle; heating effect basis of RMS definition; form factor and crest factor; response of moving coil DC meters (read 0 on AC) vs hot-wire ammeters/voltmeters (read RMS).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-ac-2-pure-elements-phasors',
      name: '12.7.2 AC Through Pure R, Pure L, and Pure C',
      description: 'Phasor representations and time graphs; pure resistor (current in phase); pure inductor (current lags voltage by pi/2, inductive reactance X_L = omega L); pure capacitor (current leads voltage by pi/2, capacitive reactance X_C = 1 / omega C); frequency dependence of reactances.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-ac-3-series-lcr-impedance',
      name: '12.7.3 Series LCR Circuit & Impedance Triangle',
      description: 'Series combination of R, L, C connected to alternating voltage V = V_0 sin(omega t); phasor diagram solution; impedance Z = sqrt(R^2 + (X_L - X_C)^2); phase angle tan phi = (X_L - X_C) / R; inductive vs capacitive operating regimes.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-ac-4-resonance-sharpness-q',
      name: '12.7.4 Series Resonance, Sharpness & Quality Factor',
      description: 'Resonance condition X_L = X_C; minimum impedance Z = R; maximum current I_0 = V_0 / R; resonance curve of current vs frequency; half-power frequencies omega_1, omega_2; bandwidth Delta omega = R/L; Quality factor Q = omega_0 L / R = (1/R) sqrt(L/C); tuning circuits.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-ac-5-power-powerfactor-wattless',
      name: '12.7.5 Power in AC Circuits, Power Factor & Wattless Current',
      description: 'Instantaneous power and average power P_avg = V_rms I_rms cos phi; power factor cos phi = R/Z; true power vs apparent power; choke coil principle (high L, low R for negligible energy dissipation); wattless current I_rms sin phi.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-ac-6-lc-oscillations',
      name: '12.7.6 LC Oscillations & Energy Transfer',
      description: 'Charged capacitor connected across pure inductor; differential equation d^2 q / dt^2 + omega_0^2 q = 0; periodic transfer of electrostatic energy in capacitor to magnetic energy in inductor; mechanical analogy to mass-spring SHM.',
      estimatedHours: 3,
      isHighWeightage: false
    },
    {
      id: 'phy-ac-7-transformers',
      name: '12.7.7 Transformers: Principle, Types & Energy Losses',
      description: 'Mutual induction in soft iron laminated core; turn ratio N_s / N_p = V_s / V_p = I_p / I_s; step-up vs step-down; power efficiency; physical origin of losses: flux leakage, copper resistance (I^2 R), eddy currents (laminated sheets), hysteresis loss, and magnetostriction hum.',
      estimatedHours: 3,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Hot-wire ammeters and voltmeters are calibrated to read RMS values of alternating currents and voltages, based on the Joule heating effect (H proportional to I^2), irrespective of current direction.',
    'A DC voltmeter connected across an AC supply measures zero because the net average voltage over a complete cycle of sinusoidal AC is identically zero.',
    'In a pure inductor or pure capacitor, the average power dissipated per cycle is zero because the phase angle between voltage and current is 90 degrees (cos 90 = 0).',
    'At resonance in a series LCR circuit, the voltages across the inductor and capacitor can be individually much higher than the applied source voltage (V_L = V_C = Q * V_source), governed by the Quality factor Q.',
    'A choke coil is preferred over a rheostat in AC circuits to reduce current because an ideal choke dissipates zero average power (cos phi = 0).'
  ],
  commonTraps: [
    'Adding voltages algebraically in AC circuits: Never write V = V_R + V_L + V_C! Because of phase differences, voltages must be added vectorially/phasorially: V = sqrt(V_R^2 + (V_L - V_C)^2).',
    'Confusing maximum power with resonance: Maximum power is dissipated when the circuit is purely resistive at resonance (Z = R, cos phi = 1). If frequency is altered, impedance increases and power decreases.',
    'Using peak voltage instead of RMS in power calculations: Average power is V_rms * I_rms * cos phi = (V_0 I_0 / 2) cos phi. Using V_0 * I_0 yields double the true power.',
    'Assuming wattless current means zero total current: Wattless current is the component of current perpendicular to voltage (I_rms sin phi); total current still flows and causes heating if R is non-zero.',
    'Assuming a step-up transformer increases power: Energy conservation requires P_out <= P_in. If voltage is stepped up, current is proportionately stepped down.'
  ]
};
