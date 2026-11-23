import { Chapter } from '@/types';

export const emWavesChapter: Chapter = {
  id: 'phy-c12-em-waves',
  subject: 'physics',
  classLevel: 12,
  name: 'Electromagnetic Waves',
  unit: 'Optics & Modern Physics',
  weightage: 'medium',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Displacement Current}: I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt} = C \\frac{dV}{dt}',
    '\\text{Ampere-Maxwell Law}: \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 \\left(I_c + \\epsilon_0 \\frac{d\\Phi_E}{dt}\\right)',
    '\\text{Wave Speed}: c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} = 3 \\times 10^8\\,\\text{m/s}, \\quad v = \\frac{1}{\\sqrt{\\mu \\epsilon}} = \\frac{c}{\\sqrt{\\mu_r \\epsilon_r}}',
    '\\text{Field Ratio}: \\frac{E_0}{B_0} = \\frac{E_{\\text{rms}}}{B_{\\text{rms}}} = c',
    '\\text{Propagation Vector}: \\hat{k} = \\hat{E} \\times \\hat{B}',
    '\\text{Energy Density}: u = u_E + u_B = \\frac{1}{2}\\epsilon_0 E^2 + \\frac{B^2}{2\\mu_0}, \\quad \\langle u_E \\rangle = \\langle u_B \\rangle = \\frac{1}{4}\\epsilon_0 E_0^2 = \\frac{B_0^2}{4\\mu_0}',
    '\\text{Poynting Vector & Intensity}: \\vec{S} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B}), \\quad I = \\langle S \\rangle = \\frac{1}{2} c \\epsilon_0 E_0^2 = \\frac{E_0 B_0}{2\\mu_0} = c \\langle u \\rangle',
    '\\text{Radiation Momentum & Pressure}: p = \\frac{U}{c} \\; (\\text{absorb}), \\; p = \\frac{2U}{c} \\; (\\text{reflect}); \\quad P_{\\text{rad}} = \\frac{I}{c} \\; (\\text{absorb}), \\; P_{\\text{rad}} = \\frac{2I}{c} \\; (\\text{reflect})'
  ],
  topics: [
    {
      id: 'phy-emw-1-displacement-current',
      name: '12.8.1 Inconsistency of Ampere\'s Law & Displacement Current',
      description: 'Analysis of capacitor charging circuit; failure of Ampere\'s circuital law for surface between capacitor plates; Maxwell\'s hypothesis of displacement current I_d = epsilon_0 (dPhi_E / dt); continuity of total current (I_c = I_d).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-emw-2-maxwell-equations',
      name: '12.8.2 Maxwell\'s Four Fundamental Equations',
      description: 'Integral and differential formulations: Gauss\'s law in electrostatics, Gauss\'s law in magnetism, Faraday\'s law of induction, and Ampere-Maxwell law; unification of electricity, magnetism, and optics.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-emw-3-wave-characteristics',
      name: '12.8.3 Nature, Propagation & Speed of EM Waves',
      description: 'Transverse nature of electromagnetic waves; sinusoidal solutions for E(x, t) and B(x, t); orthogonality of E, B and propagation direction k = E x B; relation E_0 / B_0 = c = 1 / sqrt(mu_0 epsilon_0).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-emw-4-energy-poynting-pressure',
      name: '12.8.4 Energy Density, Poynting Vector & Radiation Pressure',
      description: 'Equipartition of electric and magnetic energy densities; Poynting vector S = (E x B) / mu_0; average wave intensity I = 1/2 c epsilon_0 E_0^2; linear momentum carried by EM waves p = U/c; radiation pressure on fully absorbing (I/c) and reflecting (2I/c) surfaces.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-emw-5-spectrum-applications',
      name: '12.8.5 The Electromagnetic Spectrum & Practical Uses',
      description: 'Systematic classification by wavelength and frequency: Gamma rays, X-rays, UV rays, Visible light (400–700 nm), Infrared rays (greenhouse effect, night vision), Microwaves (radar, ovens), Radio waves (communication); specific production mechanisms and detectors.',
      estimatedHours: 3,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Inside a parallel plate capacitor during charging or discharging, the conduction current is zero, and current is entirely displacement current I_d = epsilon_0 dPhi_E / dt.',
    'The total energy in an electromagnetic wave is divided equally on average between the electric field and the magnetic field: <u_E> = <u_B> = (1/4) epsilon_0 E_0^2.',
    'Accelerated charges radiate electromagnetic waves; an electric dipole oscillating sinusoidally produces continuous EM radiation of the same frequency.',
    'Microwaves have frequencies tuned to match the rotational frequency of water molecules in foods (around 2.45 GHz), leading to resonant dielectric heating.',
    'Ozone layer in the stratosphere absorbs harmful ultraviolet radiation (UV-B and UV-C) from solar rays, safeguarding life on Earth.'
  ],
  commonTraps: [
    'Assuming the direction of propagation is B x E: The wave travels strictly along the vector direction E x B. Reversing the cross product reverses the direction of propagation.',
    'Forgetting factor of 2 in radiation pressure for reflection: For complete absorption, pressure is P = I/c. For complete reflection, momentum change doubles, so pressure is P = 2I/c.',
    'Using peak field values instead of RMS when computing intensity: Average intensity is (1/2) epsilon_0 c E_0^2 = epsilon_0 c E_rms^2. Using E_0^2 without the 1/2 factor overestimates intensity by a factor of 2.',
    'Confusing displacement current with real charge flow: Displacement current does NOT involve transport of physical charges; it arises purely from a time-varying electric flux.',
    'Ordering the EM spectrum incorrectly by energy vs wavelength: Remember E = h*nu = hc/lambda. Gamma rays have highest frequency and energy but smallest wavelength; radio waves have longest wavelength and lowest frequency.'
  ]
};
