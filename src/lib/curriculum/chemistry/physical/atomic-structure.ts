import { Chapter } from '@/types';

export const atomicStructureChapter: Chapter = {
  id: 'chem-c11-atomic-structure',
  subject: 'chemistry',
  classLevel: 11,
  name: 'Structure of Atom',
  unit: 'Physical Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Photon Energy}: E = h\\nu = \\frac{hc}{\\lambda} \\approx \\frac{1240\\,\\text{eV}\\cdot\\text{nm}}{\\lambda}',
    '\\text{Bohr Radius}: r_n = 0.529 \\frac{n^2}{Z}\\,\\text{Å}',
    '\\text{Bohr Energy}: E_n = -13.6 \\frac{Z^2}{n^2}\\,\\text{eV} = -2.18 \\times 10^{-18} \\frac{Z^2}{n^2}\\,\\text{J}',
    '\\text{Rydberg Equation}: \\bar{\\nu} = \\frac{1}{\\lambda} = R_H Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) \\quad (R_H \\approx 1.09677 \\times 10^7\\,\\text{m}^{-1})',
    '\\text{de Broglie Wavelength}: \\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mE_k}}',
    '\\text{Heisenberg Uncertainty Principle}: \\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi} \\implies \\Delta x \\cdot \\Delta v \\ge \\frac{h}{4\\pi m}',
    '\\text{Orbital Angular Momentum}: L = \\sqrt{l(l+1)} \\frac{h}{2\\pi} = \\sqrt{l(l+1)} \\hbar',
    '\\text{Spin Angular Momentum}: S = \\sqrt{s(s+1)} \\frac{h}{2\\pi} = \\frac{\\sqrt{3}}{2} \\hbar',
    '\\text{Spin-Only Magnetic Moment}: \\mu_s = \\sqrt{n(n+2)}\\,\\text{BM} \\quad (n = \\text{unpaired electrons})',
    '\\text{Nodes}: \\text{Radial Nodes} = n - l - 1, \\; \\text{Angular Nodes} = l, \\; \\text{Total Nodes} = n - 1',
    '\\text{Total Orbitals in Shell } n: n^2, \\quad \\text{Max Electrons in Shell } n: 2n^2'
  ],
  topics: [
    {
      id: 'chem-atom-1-subatomic-bohr-model',
      name: '11.2.1 Dual Nature of Radiation & Bohr Model of Hydrogen',
      description: 'Planck\'s quantum theory; photoelectric effect in chemistry; Bohr\'s atomic model for single-electron species (H, He+, Li2+, Be3+); derivation of radius, velocity, and quantized energy states; absorption and emission spectra of hydrogen; spectral series (Lyman, Balmer, Paschen, Brackett, Pfund) and Rydberg formula.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-atom-2-de-broglie-heisenberg',
      name: '11.2.2 Dual Nature of Matter & Heisenberg Uncertainty Principle',
      description: 'de Broglie hypothesis lambda = h/p; wave nature of microscopic particles; Heisenberg\'s uncertainty principle Delta x * Delta p >= h / (4 pi); physical significance: concept of definite classical trajectories replaced by probabilistic orbital clouds.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-atom-3-quantum-mechanical-model',
      name: '11.2.3 Quantum Mechanical Model, Wavefunctions & Orbitals',
      description: 'Schrödinger wave equation (Hamiltonian H psi = E psi); physical interpretation of wave function psi and probability density psi^2; boundary surface diagrams and 3D shapes of s (spherical), p (dumb-bell), and d (double dumb-bell / dumb-bell with donut) orbitals; radial wavefunctions R(r) and radial probability distribution curves 4 pi r^2 R^2(r); radial and angular nodes.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-atom-4-quantum-numbers',
      name: '11.2.4 Four Quantum Numbers & Orbital Characterization',
      description: 'Principal quantum number (n), Azimuthal / orbital angular momentum quantum number (l), Magnetic quantum number (m_l), and Electron spin quantum number (m_s); orbital angular momentum formula sqrt(l(l+1)) * hbar; maximum number of electrons in shells (2n^2), subshells (2(2l+1)), and individual orbitals (2).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-atom-5-electronic-configurations-rules',
      name: '11.2.5 Electronic Configuration Rules & Anomalous Configurations',
      description: 'Aufbau principle and (n + l) energy ordering rule; Pauli\'s exclusion principle; Hund\'s rule of maximum multiplicity; exceptional stability of half-filled and completely filled subshells explained via symmetrical charge distribution and maximum quantum exchange energy (e.g. Chromium [Ar] 3d^5 4s^1 and Copper [Ar] 3d^10 4s^1); spin-only magnetic moment mu = sqrt(n(n+2)) BM.',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'An orbital is defined as a three-dimensional region of space around the nucleus where the probability of finding an electron is maximum (typically chosen at 90% probability boundary surface).',
    'For hydrogen and single-electron species, orbital energies depend SOLELY on the principal quantum number $n$ (so $3s, 3p, 3d$ are completely degenerate). In multi-electron atoms, electron shielding causes orbital energies to depend on $(n + l)$.',
    'The number of radial nodes is $n - l - 1$, the number of angular / planar nodes is $l$, and the total number of nodes is always $(n - 1)$, irrespective of the subshell type.',
    'Chromium ($Z = 24$) has ground state configuration $[\text{Ar}] 3d^5 4s^1$ (not $3d^4 4s^2$) and Copper ($Z = 29$) has $[\text{Ar}] 3d^{10} 4s^1$ (not $3d^9 4s^2$), driven by high exchange energy and spherical charge symmetry.',
    'The spin-only magnetic moment depends exclusively on the number of unpaired electrons: $\\mu = \\sqrt{n(n+2)}\\text{ Bohr Magnetons (BM)}$.'
  ],
  commonTraps: [
    'Applying the $(n + l)$ rule to hydrogen atom: In hydrogen (single-electron), $3s, 3p, 3d$ have the EXACT SAME energy ($E = -13.6/3^2 = -1.51\\text{ eV}$). The $(n+l)$ rule applies ONLY to multi-electron atoms!',
    'Confusing radial nodes with angular nodes: A $3p$ orbital has $n=3, l=1$: Radial nodes $= 3 - 1 - 1 = 1$, Angular nodes $= l = 1$, Total nodes $= 3 - 1 = 2$. Do not mix up the formulas.',
    'Forgetting the square root in orbital angular momentum: $L = \\sqrt{l(l+1)}\\hbar$. For an s-electron ($l=0$), orbital angular momentum is ZERO. For a p-electron ($l=1$), $L = \\sqrt{2}\\hbar$.',
    'Ignoring electron spin pairing in Hund\'s rule: All singly occupied orbitals must have parallel (same) spins before any orbital receives a second electron.',
    'Calculating exchange pairs incorrectly: For $n$ electrons with parallel spins in degenerate orbitals, the number of exchange pairs is $\\frac{n(n-1)}{2}$. For $d^5$ (5 parallel spins), there are $\\frac{5 \\times 4}{2} = 10$ exchange pairs.'
  ]
};
