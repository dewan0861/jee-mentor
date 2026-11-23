import { Chapter } from '@/types';

export const atomsChapter: Chapter = {
  id: 'phy-c12-atoms',
  subject: 'physics',
  classLevel: 12,
  name: 'Atoms',
  unit: 'Optics & Modern Physics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Closest Approach}: r_0 = \\frac{1}{4\\pi\\epsilon_0} \\frac{2 Z e^2}{K_\\alpha}',
    '\\text{Impact Parameter}: b = \\frac{1}{4\\pi\\epsilon_0} \\frac{Z e^2 \\cot(\\theta/2)}{K_\\alpha}',
    '\\text{Rutherford Scattering}: N(\\theta) \\propto \\frac{1}{\\sin^4(\\theta/2)}',
    '\\text{Bohr Quantization}: L = m v_n r_n = n \\frac{h}{2\\pi} = n \\hbar \\quad (n = 1, 2, 3, \\dots)',
    '\\text{Bohr Radius}: r_n = \\frac{\\epsilon_0 h^2 n^2}{\\pi m Z e^2} = 0.529 \\frac{n^2}{Z}\\,\\text{Å}',
    '\\text{Orbital Velocity}: v_n = \\frac{Z e^2}{2\\epsilon_0 n h} = \\left(\\frac{c}{137}\\right) \\frac{Z}{n} = 2.18 \\times 10^6 \\frac{Z}{n}\\,\\text{m/s}',
    '\\text{Total Energy}: E_n = -\\frac{m Z^2 e^4}{8\\epsilon_0^2 h^2 n^2} = -13.6 \\frac{Z^2}{n^2}\\,\\text{eV}',
    '\\text{Virial Theorem}: K_n = -E_n = 13.6 \\frac{Z^2}{n^2}\\,\\text{eV}, \\quad U_n = 2 E_n = -27.2 \\frac{Z^2}{n^2}\\,\\text{eV}',
    '\\text{Rydberg Equation}: \\bar{\\nu} = \\frac{1}{\\lambda} = R_H Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\quad R_H = 1.097 \\times 10^7\\,\\text{m}^{-1}',
    '\\text{de Broglie Standing Wave}: 2\\pi r_n = n \\lambda = n \\left(\\frac{h}{m v_n}\\right) \\implies m v_n r_n = \\frac{nh}{2\\pi}'
  ],
  topics: [
    {
      id: 'phy-atom-1-rutherford-scattering',
      name: '12.12.1 Alpha-particle Scattering & Rutherford\'s Model',
      description: 'Geiger-Marsden alpha scattering experiment; observations and deductions; calculation of distance of closest approach r_0 by energy conservation; impact parameter b; Rutherford scattering distribution N(theta) proportional to 1 / sin^4(theta/2); nuclear size estimation; instability of classical planetary atom (Maxwell electromagnetic spiral collapse).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-atom-2-bohr-postulates-quantization',
      name: '12.12.2 Bohr\'s Postulates of Hydrogen Atom',
      description: 'Three fundamental postulates: stationary non-radiating orbits, quantization of orbital angular momentum L = n h / (2 pi), and quantum radiation transition condition h nu = E_i - E_f; de Broglie explanation using circular standing matter waves.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-atom-3-radii-velocity-energies',
      name: '12.12.3 Orbit Radii, Speeds, and Energy Levels for H-like Ions',
      description: 'Derivations for single-electron ions (H, He+, Li2+, Be3+); radius r_n = 0.529 n^2 / Z Å; orbital speed v_n = 2.18 x 10^6 Z / n m/s; orbital frequency and time period; kinetic energy K, potential energy U, and total energy E_n = -13.6 Z^2 / n^2 eV; Virial theorem relationships (U = 2E = -2K).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-atom-4-spectral-series-transitions',
      name: '12.12.4 Hydrogen Spectral Series & Rydberg Formula',
      description: 'Rydberg formula for wave number; spectral emission and absorption lines: Lyman series (ultraviolet, n_1 = 1), Balmer series (visible, n_1 = 2), Paschen series (infrared, n_1 = 3), Brackett series (infrared, n_1 = 4), Pfund series (infrared, n_1 = 5); first line (longest wavelength) vs series limit (shortest wavelength); ionization potential and excitation energy.',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'The Balmer series is the ONLY spectral series of the hydrogen atom that falls in the visible region of the electromagnetic spectrum; Lyman lies entirely in ultraviolet, and Paschen, Brackett, Pfund lie in infrared.',
    'According to the Virial theorem for Coulomb potential, the kinetic energy is positive and equals the absolute value of total energy ($K = -E$), while potential energy is negative and equals twice the total energy ($U = 2E$).',
    'The time period of an electron in the nth Bohr orbit scales with principal quantum number as $T \\propto n^3 / Z^2$, and the orbital frequency scales as $f \\propto Z^2 / n^3$.',
    'The shortest wavelength in any spectral series (series limit) occurs for transitions originating from infinity ($n_2 = \\infty$).',
    'de Broglie explained Bohr\'s quantization condition by showing that an integral number of electron matter wavelengths must fit into the circumference of the stable orbit: $2\\pi r = n \\lambda$.'
  ],
  commonTraps: [
    'Forgetting the $Z^2$ factor for hydrogen-like ions: Energy scales as $Z^2$ ($E_n = -13.6 Z^2 / n^2$ eV) and radius scales as $1/Z$ ($r_n = 0.529 n^2 / Z$ Å). For $\\text{He}^+$ ($Z=2$), ground state energy is $-13.6 \\times 4 = -54.4$ eV.',
    'Confusing ionization energy with excitation energy: Excitation energy from ground state to state $n$ is $\\Delta E = E_n - E_1 = 13.6(1 - 1/n^2)$ eV. Ionization energy is the energy required to remove the electron completely to infinity: $E_{\\text{ion}} = 13.6 Z^2$ eV.',
    'Inverting the longest and shortest wavelength transitions: Longest wavelength (minimum photon energy) occurs for $n_2 = n_1 + 1$; shortest wavelength (maximum photon energy) occurs for $n_2 = \\infty$.',
    'Applying Bohr model to multi-electron atoms: Bohr theory strictly applies only to single-electron (hydrogen-like) species ($\text{H}, \text{He}^+, \text{Li}^{2+}, \text{Be}^{3+}$). It fails for neutral Helium or Lithium due to electron-electron interactions.',
    'Forgetting the negative sign in potential energy: Potential energy is always negative ($U = -27.2 / n^2$ eV for hydrogen). Kinetic energy is always positive.'
  ]
};
