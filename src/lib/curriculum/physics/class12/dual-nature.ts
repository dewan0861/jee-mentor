import { Chapter } from '@/types';

export const dualNatureChapter: Chapter = {
  id: 'phy-c12-dual-nature',
  subject: 'physics',
  classLevel: 12,
  name: 'Dual Nature of Radiation and Matter',
  unit: 'Optics & Modern Physics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Photon Energy & Momentum}: E = h\\nu = \\frac{hc}{\\lambda}, \\quad p = \\frac{E}{c} = \\frac{h}{\\lambda}',
    '\\text{Photon Flux & Rate}: n = \\frac{P}{E} = \\frac{P\\lambda}{hc}, \\quad I = \\frac{P}{A} = n_{\\text{area}} \\frac{hc}{\\lambda}',
    '\\text{Einstein\'s Photoelectric Equation}: h\\nu = \\Phi_0 + K_{\\text{max}}, \\quad K_{\\text{max}} = e V_0',
    '\\text{Stopping Potential}: V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\Phi_0}{e} = \\left(\\frac{hc}{e}\\right)\\frac{1}{\\lambda} - \\frac{\\Phi_0}{e}',
    '\\text{Threshold Frequency & Wavelength}: \\Phi_0 = h\\nu_0 = \\frac{hc}{\\lambda_0}',
    '\\text{de Broglie Wavelength}: \\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mK}}',
    '\\text{Accelerated Electron}: \\lambda_e = \\frac{h}{\\sqrt{2m_e e V}} = \\frac{1.227}{\\sqrt{V}}\\,\\text{nm} = \\frac{\\sqrt{150}}{\\sqrt{V}}\\,\\text{Å}',
    '\\text{Proton & Alpha Particle}: \\lambda_p = \\frac{0.286}{\\sqrt{V}}\\,\\text{nm}, \\quad \\lambda_\\alpha = \\frac{0.101}{\\sqrt{V}}\\,\\text{nm}',
    '\\text{Thermal Neutron}: \\lambda_{\\text{thermal}} = \\frac{h}{\\sqrt{3m k_B T}}'
  ],
  topics: [
    {
      id: 'phy-dn-1-photoelectric-observations',
      name: '12.11.1 Experimental Study of the Photoelectric Effect',
      description: 'Lenard and Millikan experimental observations: effect of intensity on saturation photocurrent (linear proportionality); effect of potential on photocurrent; definition and measurement of stopping potential V_0; existence of sharp threshold frequency nu_0 below which no emission occurs; instantaneous nature of emission (time delay < 10^-9 s); catastrophic failure of classical wave theory.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-dn-2-einstein-equation-photons',
      name: '12.11.2 Einstein\'s Photoelectric Equation & Energy Quanta',
      description: 'Quantum postulate: light absorption in discrete packets (quanta/photons) of energy E = h nu; work function Phi_0; conservation equation h nu = Phi_0 + K_max = Phi_0 + e V_0; linear plot of V_0 versus frequency nu (universal slope h/e); work function from intercept.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-dn-3-photon-mechanics-pressure',
      name: '12.11.3 Particle Properties of Photons & Radiation Impact',
      description: 'Zero rest mass, invariant speed c in vacuum; energy E = pc; linear momentum p = h/lambda; number of photons emitted per second n = P lambda / (hc); photon density; collision conservation laws (energy and momentum); radiation pressure on absorbing and reflecting surfaces.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-dn-4-de-broglie-matter-waves',
      name: '12.11.4 de Broglie Hypothesis & Matter Wave Characteristics',
      description: 'Wave-particle duality of matter; de Broglie relation lambda = h/p = h/mv; dependence on kinetic energy lambda = h / sqrt(2mK); why wave nature of macroscopic objects (cricket balls) is undetectable due to tiny h (6.63 x 10^-34 J s); phase velocity and group velocity.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-dn-5-charged-particles-thermal',
      name: '12.11.5 Matter Waves for Accelerated & Thermal Particles',
      description: 'Wavelength of particles accelerated through potential difference V: electron lambda = 1.227 / sqrt(V) nm; proton, deuteron, and alpha particle comparisons; de Broglie wavelength of monoatomic gas particles at absolute temperature T: lambda = h / sqrt(3 m k_B T).',
      estimatedHours: 3,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Increasing the intensity of incident monochromatic radiation increases the number of photons per second, hence increases saturation photocurrent linearly, but leaves the stopping potential V_0 and maximum kinetic energy K_max completely unchanged.',
    'Increasing the frequency of incident radiation increases the stopping potential V_0 linearly, but has NO effect on the saturation photocurrent (provided total incident intensity is held constant).',
    'The slope of the graph of stopping potential V_0 against incident frequency nu is h/e, which is a universal constant independent of the nature of the photosensitive emitter material.',
    'Photoelectric emission is strictly an instantaneous one-to-one photon-electron collision process; there is no measurable time lag (delay < 10^-9 seconds).',
    'The rest mass of a photon is identically zero, and in every inertial reference frame, all photons in vacuum travel at the invariant speed c = 3 x 10^8 m/s.'
  ],
  commonTraps: [
    'Confusing intensity with frequency: Intensity controls current (number of electrons ejected per second); frequency controls voltage (kinetic energy of individual ejected electrons).',
    'Mixing electron-volts (eV) and Joules in Einstein\'s equation: When using h in J*s, work function must be converted from eV to Joules (multiply by 1.6 x 10^-19) or use hc = 1240 eV*nm.',
    'Forgetting particle mass when comparing de Broglie wavelengths at equal potential: lambda = h / sqrt(2mqV). For equal V, lambda is inversely proportional to sqrt(m * q). An alpha particle (mass 4m_p, charge 2e) has much smaller lambda than a proton.',
    'Neglecting work function when calculating kinetic energy: If photon energy is 5 eV and work function is 2 eV, K_max is 3 eV (NOT 5 eV).',
    'Using de Broglie formula for photons: For a photon, p = h/lambda is valid, but kinetic energy is E = pc (NOT 1/2 m v^2).'
  ]
};
