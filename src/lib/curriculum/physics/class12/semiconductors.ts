import { Chapter } from '@/types';

export const semiconductorsChapter: Chapter = {
  id: 'phy-c12-semiconductors',
  subject: 'physics',
  classLevel: 12,
  name: 'Semiconductor Electronics: Materials, Devices and Simple Circuits',
  unit: 'Optics & Modern Physics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Mass Action Law}: n_e n_h = n_i^2',
    '\\text{Conductivity}: \\sigma = e(n_e \\mu_e + n_h \\mu_h), \\quad \\rho = \\frac{1}{\\sigma}',
    '\\text{Current through Semiconductor}: I = I_e + I_h = e A E (n_e \\mu_e + n_h \\mu_h)',
    '\\text{Dynamic Resistance of Diode}: r_d = \\frac{\\Delta V}{\\Delta I}',
    '\\text{Half-Wave Rectifier}: f_{\\text{ripple}} = f_{\\text{in}}, \\quad \\eta_{\\text{max}} = 40.6\\%',
    '\\text{Full-Wave Rectifier}: f_{\\text{ripple}} = 2 f_{\\text{in}}, \\quad \\eta_{\\text{max}} = 81.2\\%',
    '\\text{LED Photon Energy}: E_g = h\\nu = \\frac{hc}{\\lambda} \\implies \\lambda = \\frac{hc}{E_g}',
    '\\text{Photodiode Condition}: h\\nu \\ge E_g'
  ],
  topics: [
    {
      id: 'phy-semi-1-energy-bands-intrinsic',
      name: '12.14.1 Energy Bands in Solids & Intrinsic Semiconductors',
      description: 'Valence band, conduction band, and forbidden energy gap E_g; classification of metals (overlapping bands, E_g = 0), semiconductors (E_g < 3 eV, e.g. Si: 1.1 eV, Ge: 0.7 eV), and insulators (E_g > 3 eV); thermal generation of electron-hole pairs; intrinsic carrier concentration n_e = n_h = n_i; negative temperature coefficient of resistivity.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-semi-2-extrinsic-doping',
      name: '12.14.2 Extrinsic Semiconductors: n-type and p-type',
      description: 'Doping principle; donor impurities (pentavalent: P, As, Sb) forming n-type semiconductors with donor energy level E_d just below conduction band; acceptor impurities (trivalent: B, Al, In) forming p-type semiconductors with acceptor level E_a just above valence band; mass action law n_e n_h = n_i^2; electrical neutrality of doped semiconductors.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-semi-3-pn-junction-characteristics',
      name: '12.14.3 p-n Junction Diode Formation & I-V Curves',
      description: 'Diffusion and drift currents; creation of depletion region and barrier potential (0.7 V for Si, 0.3 V for Ge); forward bias (depletion width decreases, barrier height lowers, exponential current growth above knee voltage); reverse bias (depletion width expands, tiny reverse saturation current due to minority carriers); dynamic resistance r_d = Delta V / Delta I.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-semi-4-rectifiers-filters',
      name: '12.14.4 Diode Rectifiers & Smoothing Filters',
      description: 'Half-wave rectifier: circuit, waveforms, peak inverse voltage (PIV = V_m), output ripple frequency f_ripple = f_in; full-wave centre-tapped and bridge rectifiers: waveforms, PIV, output ripple frequency f_ripple = 2 f_in; maximum rectification efficiency (40.6% vs 81.2%); capacitor filter action (charging at peak voltage and slow discharging across load resistor).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-semi-5-optoelectronic-devices',
      name: '12.14.5 Optoelectronic Junction Devices',
      description: 'Photodiodes: operated strictly under reverse bias to detect optical signals because fractional change in minority carrier current is much more measurable; Light Emitting Diodes (LEDs): operated under forward bias, spontaneous recombination of electrons and holes emitting photons of wavelength lambda <= hc / E_g; Solar cells: p-n junction generating EMF under solar illumination, typical I-V characteristic curve operating in 4th quadrant without external bias.',
      estimatedHours: 3,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'A doped semiconductor (whether n-type or p-type) remains electrically neutral as a whole because donor and acceptor atoms are neutral before doping and don\'t lose or gain total atomic charge.',
    'Photodiodes are operated under reverse bias because the fractional change in reverse minority current upon illumination (Delta I / I_dark) is substantially greater than the fractional change in forward majority current.',
    'In a full-wave rectifier supplied with an AC mains frequency of 50 Hz, the fundamental output ripple frequency is 100 Hz (double the input frequency), whereas in a half-wave rectifier it remains 50 Hz.',
    'For an LED to emit visible light (wavelength 400 nm to 700 nm), the semiconductor material must have a band gap E_g between 1.8 eV and 3.1 eV (e.g. Gallium Arsenide Phosphide, GaAsP).',
    'As temperature increases in a semiconductor, the generation of electron-hole pairs increases exponentially, causing electrical conductivity to rise and resistance to drop (negative temperature coefficient of resistance).'
  ],
  commonTraps: [
    'Assuming an n-type semiconductor carries a net negative charge: It is electrically NEUTRAL! The extra free electrons are balanced by positively charged immobile donor ions in the crystal lattice.',
    'Confusing minority vs majority carrier currents: In reverse bias, current is carried entirely by thermally generated minority carriers (electrons from p-side and holes from n-side).',
    'Applying Zener diode breakdown formulas for JEE 2027: Zener diodes, Transistors, and Logic Gates were completely rationalized and removed from the official JEE 2024-2027 syllabus.',
    'Confusing ripple frequency of full-wave vs half-wave rectifiers: Full-wave produces two pulses per AC cycle, so f_ripple = 2 f_in; half-wave produces one pulse per cycle, so f_ripple = f_in.',
    'Forgetting barrier potential drop in diode circuits: For silicon diodes, subtract 0.7 V knee voltage across the diode before computing current through load resistor: I = (V_supply - 0.7) / R_load.'
  ]
};
