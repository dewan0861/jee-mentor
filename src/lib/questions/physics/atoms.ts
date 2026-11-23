import { Question } from '@/types';

export const atomsQuestions: Question[] = [
  {
    id: 'phy-atom-pyq-1',
    subject: 'physics',
    topicId: 'phy-atom-4-spectral-series-transitions',
    chapterId: 'phy-c12-atoms',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'The ratio of the longest wavelength in the Lyman series to the longest wavelength in the Balmer series of the hydrogen atom spectrum is:',
    options: [
      '$\\frac{5}{27}$',
      '$\\frac{27}{5}$',
      '$\\frac{9}{31}$',
      '$\\frac{4}{9}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Longest wavelength in Lyman series**
Longest wavelength corresponds to the minimum energy transition in the Lyman series ($n_1 = 1$), which is from $n_2 = 2$:
$$\\frac{1}{\\lambda_{L, \\text{max}}} = R_H \\left(\\frac{1}{1^2} - \\frac{1}{2^2}\\right) = R_H \\left(1 - \\frac{1}{4}\\right) = \\frac{3}{4} R_H$$
$$\\lambda_{L, \\text{max}} = \\frac{4}{3 R_H}$$

**Step 2: Longest wavelength in Balmer series**
Longest wavelength in the Balmer series ($n_1 = 2$) corresponds to transition from $n_2 = 3$:
$$\\frac{1}{\\lambda_{B, \\text{max}}} = R_H \\left(\\frac{1}{2^2} - \\frac{1}{3^2}\\right) = R_H \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = \\frac{5}{36} R_H$$
$$\\lambda_{B, \\text{max}} = \\frac{36}{5 R_H}$$

**Step 3: Calculate the ratio**
$$\\frac{\\lambda_{L, \\text{max}}}{\\lambda_{B, \\text{max}}} = \\frac{\\frac{4}{3 R_H}}{\\frac{36}{5 R_H}} = \\frac{4}{3} \\times \\frac{5}{36} = \\frac{5}{27}$$

Hence, the ratio is $\\frac{5}{27}$.`,
    hints: [
      'Longest wavelength corresponds to the lowest photon energy transition ($n_2 = n_1 + 1$).',
      'For Lyman: $n_2 = 2 \\to n_1 = 1$. For Balmer: $n_2 = 3 \\to n_1 = 2$.'
    ]
  },
  {
    id: 'phy-atom-pyq-2',
    subject: 'physics',
    topicId: 'phy-atom-1-rutherford-scattering',
    chapterId: 'phy-c12-atoms',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'An $\\alpha$-particle of kinetic energy $K = 10\\,\\text{MeV}$ is projected head-on towards a stationary gold nucleus ($Z = 79$). The distance of closest approach $r_0$ is approximately (take $\\frac{1}{4\\pi\\epsilon_0} = 9 \\times 10^9\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2, \\; e = 1.6 \\times 10^{-19}\\,\\text{C}$):',
    options: [
      '$2.27 \\times 10^{-14}\\,\\text{m}$',
      '$4.54 \\times 10^{-14}\\,\\text{m}$',
      '$1.14 \\times 10^{-14}\\,\\text{m}$',
      '$3.80 \\times 10^{-15}\\,\\text{m}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Apply conservation of mechanical energy**
At the distance of closest approach $r_0$ for a head-on collision, all the initial kinetic energy of the $\\alpha$-particle converts into electrostatic potential energy:
$$K_\\alpha = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_\\alpha q_{\\text{nucleus}}}{r_0}$$

Given:
- $q_\\alpha = 2e$
- $q_{\\text{gold}} = Z e = 79e$
- $K_\\alpha = 10\\,\\text{MeV} = 10 \\times 10^6 \\times (1.6 \\times 10^{-19}\\,\\text{J}) = 1.6 \\times 10^{-12}\\,\\text{J}$

**Step 2: Solve for $r_0$**
$$r_0 = \\frac{1}{4\\pi\\epsilon_0} \\frac{2 Z e^2}{K_\\alpha}$$

Substitute the values:
$$r_0 = \\frac{(9 \\times 10^9) \\times 2 \\times 79 \\times (1.6 \\times 10^{-19})^2}{1.6 \\times 10^{-12}}$$
$$r_0 = \\frac{(9 \\times 10^9) \\times 158 \\times (2.56 \\times 10^{-38})}{1.6 \\times 10^{-12}}$$
$$r_0 = \\frac{3640.32 \\times 10^{-29}}{1.6 \\times 10^{-12}} = 2275.2 \\times 10^{-17}\\,\\text{m} \\approx 2.27 \\times 10^{-14}\\,\\text{m} = 22.7\\,\\text{fm}$$

Hence, the distance of closest approach is $2.27 \\times 10^{-14}\\,\\text{m}$.`,
    hints: [
      'At closest approach, kinetic energy equals potential energy: $K = \\frac{1}{4\\pi\\epsilon_0}\\frac{2Ze^2}{r_0}$.',
      'Remember to convert kinetic energy from $\\text{MeV}$ to Joules ($1\\,\\text{eV} = 1.6 \\times 10^{-19}\\,\\text{J}$).'
    ]
  },
  {
    id: 'phy-atom-pyq-3',
    subject: 'physics',
    topicId: 'phy-atom-3-radii-velocity-energies',
    chapterId: 'phy-c12-atoms',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    text: 'According to the Bohr model of the hydrogen atom, let $r_n$ denote the radius, $v_n$ the orbital speed, and $T_n$ the orbital time period of an electron in the $n$th stationary orbit. Which of the following relationships is correct?',
    options: [
      '$T_n \\propto n^3, \\quad T_n \\propto r_n^{3/2}$',
      '$T_n \\propto n^2, \\quad T_n \\propto r_n$',
      '$T_n \\propto n, \\quad T_n \\propto r_n^{1/2}$',
      '$T_n \\propto n^4, \\quad T_n \\propto r_n^2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Dependencies on principal quantum number $n$**
From Bohr\'s quantization and Coulomb central force:
1. Radius: $r_n \\propto n^2$
2. Speed: $v_n \\propto \\frac{1}{n}$

**Step 2: Time period of revolution $T_n$**
The time period is the orbital circumference divided by speed:
$$T_n = \\frac{2\\pi r_n}{v_n} \\propto \\frac{n^2}{1/n} = n^3$$

**Step 3: Relate $T_n$ to radius $r_n$**
Since $r_n \\propto n^2$, we have $n \\propto r_n^{1/2}$.
Substituting into $T_n \\propto n^3$:
$$T_n \\propto (r_n^{1/2})^3 = r_n^{3/2}$$
$$T_n^2 \\propto r_n^3$$
This precisely matches Kepler\'s third law of planetary motion ($T^2 \\propto r^3$) extended to the subatomic Coulomb regime!

Hence, $T_n \\propto n^3$ and $T_n \\propto r_n^{3/2}$.`,
    hints: [
      'Orbital period is $T = 2\\pi r / v$.',
      'Since $r_n \\propto n^2$ and $v_n \\propto 1/n$, we get $T_n \\propto n^3 \\propto r_n^{3/2}$.'
    ]
  },
  {
    id: 'phy-atom-pyq-4',
    subject: 'physics',
    topicId: 'phy-atom-3-radii-velocity-energies',
    chapterId: 'phy-c12-atoms',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'The total energy of an electron in the second excited state of a doubly ionized lithium ion ($\\text{Li}^{2+}$, $Z = 3$) is:',
    options: [
      '$-13.6\\,\\text{eV}$',
      '$-30.6\\,\\text{eV}$',
      '$-3.4\\,\\text{eV}$',
      '$-122.4\\,\\text{eV}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify the quantum state $n$ and atomic number $Z$**
- For Lithium: $Z = 3$
- Second excited state corresponds to principal quantum number:
  $$n = 1 + 2 = 3$$
  *(Ground state is $n=1$, 1st excited state is $n=2$, 2nd excited state is $n=3$)*.

**Step 2: Formula for total energy of hydrogen-like ion**
$$E_n = -13.6 \\frac{Z^2}{n^2}\\,\\text{eV}$$

**Step 3: Substitute $Z = 3$ and $n = 3$**
$$E_3 = -13.6 \\times \\frac{3^2}{3^2} = -13.6 \\times 1 = -13.6\\,\\text{eV}$$

Notice that the factor $Z^2/n^2 = 9/9 = 1$, so the total energy is precisely $-13.6\\,\\text{eV}$.

Hence, the total energy is $-13.6\\,\\text{eV}$.`,
    hints: [
      'Second excited state means $n = 3$.',
      'For $\\text{Li}^{2+}$, $Z = 3$, so $Z^2/n^2 = 3^2/3^2 = 1$.'
    ]
  },
  {
    id: 'phy-atom-pyq-5',
    subject: 'physics',
    topicId: 'phy-atom-4-spectral-series-transitions',
    chapterId: 'phy-c12-atoms',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: 'A stationary hydrogen atom in its first excited state ($n = 2$) emits a photon and drops to the ground state ($n = 1$). If the mass of the hydrogen atom is $m_H = 1.67 \\times 10^{-27}\\,\\text{kg}$, the recoil speed of the hydrogen atom is approximately:',
    options: [
      '$3.26\\,\\text{m/s}$',
      '$1.63\\,\\text{m/s}$',
      '$0.81\\,\\text{m/s}$',
      '$6.52\\,\\text{m/s}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Energy of the emitted photon**
The energy released in the transition from $n = 2$ to $n = 1$ in hydrogen ($Z=1$) is:
$$\\Delta E = E_2 - E_1 = -3.4\\,\\text{eV} - (-13.6\\,\\text{eV}) = 10.2\\,\\text{eV}$$
Convert to Joules:
$$\\Delta E = 10.2 \\times 1.6 \\times 10^{-19}\\,\\text{J} = 1.632 \\times 10^{-18}\\,\\text{J}$$

**Step 2: Momentum of the emitted photon**
$$p_{\\text{photon}} = \\frac{\\Delta E}{c} = \\frac{1.632 \\times 10^{-18}}{3 \\times 10^8} = 5.44 \\times 10^{-27}\\,\\text{kg}\\cdot\\text{m/s}$$

**Step 3: Recoil momentum of the hydrogen atom**
By conservation of linear momentum (since initially at rest):
$$p_{\\text{recoil}} = p_{\\text{photon}}$$
$$m_H v_{\\text{recoil}} = 5.44 \\times 10^{-27}\\,\\text{kg}\\cdot\\text{m/s}$$

**Step 4: Calculate recoil speed $v_{\\text{recoil}}$**
$$v_{\\text{recoil}} = \\frac{5.44 \\times 10^{-27}\\,\\text{kg}\\cdot\\text{m/s}}{1.67 \\times 10^{-27}\\,\\text{kg}} \\approx 3.26\\,\\text{m/s}$$

Hence, the recoil speed of the hydrogen atom is $3.26\\,\\text{m/s}$.`,
    hints: [
      'The photon momentum is $p = \\Delta E / c$.',
      'By momentum conservation, atom recoil momentum equals photon momentum: $m_H v = \\Delta E / c$.'
    ]
  },
  {
    id: 'phy-atom-pyq-6',
    subject: 'physics',
    topicId: 'phy-atom-2-bohr-postulates-quantization',
    chapterId: 'phy-c12-atoms',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: 'According to de Broglie\'s hypothesis, an electron revolving in the $n$th Bohr orbit of hydrogen atom has a matter wavelength $\\lambda$. The circumference of the $n$th orbit is equal to:',
    options: [
      '$n\\lambda$',
      '$\\frac{\\lambda}{n}$',
      '$2\\pi n\\lambda$',
      '$\\frac{n\\lambda}{2\\pi}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Bohr\'s angular momentum quantization postulate**
$$m v r_n = \\frac{n h}{2\\pi}$$

**Step 2: Rearrange to express the circumference ($2\\pi r_n$)**
Multiply both sides by $2\\pi$:
$$2\\pi r_n = \\frac{n h}{m v}$$

**Step 3: Substitute de Broglie wavelength $\\lambda = \\frac{h}{m v}$**
$$2\\pi r_n = n \\left(\\frac{h}{mv}\\right) = n \\lambda$$

This proves that for an electron orbit to be stable and non-radiating, the circumference of the orbit must contain an integral number of de Broglie wavelengths ($2\\pi r_n = n \\lambda$), forming a constructive standing matter wave around the nucleus.

Hence, the circumference is $n\\lambda$.`,
    hints: [
      'From Bohr quantization: $mvr = \\frac{nh}{2\\pi} \\implies 2\\pi r = n\\left(\\frac{h}{mv}\\right)$.',
      'Since de Broglie wavelength is $\\lambda = h/(mv)$, the circumference equals $n\\lambda$.'
    ]
  }
];
