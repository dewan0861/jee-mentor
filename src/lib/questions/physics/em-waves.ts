import { Question } from '@/types';

export const emWavesQuestions: Question[] = [
  {
    id: 'phy-emw-pyq-1',
    subject: 'physics',
    topicId: 'phy-emw-3-wave-characteristics',
    chapterId: 'phy-c12-em-waves',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'The electric field of a plane electromagnetic wave propagating along the $+z$-direction in vacuum is given by $\\vec{E} = E_0 \\cos(kz - \\omega t) \\hat{i}$. Which of the following expressions represents the corresponding magnetic field $\\vec{B}$ of the wave?',
    options: [
      '$\\vec{B} = \\frac{E_0}{c} \\cos(kz - \\omega t) \\hat{j}$',
      '$\\vec{B} = -\\frac{E_0}{c} \\cos(kz - \\omega t) \\hat{j}$',
      '$\\vec{B} = c E_0 \\cos(kz - \\omega t) \\hat{j}$',
      '$\\vec{B} = \\frac{E_0}{c} \\cos(kz - \\omega t) \\hat{k}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Determine the magnitude of $\\vec{B}$**
The relationship between electric field amplitude $E_0$ and magnetic field amplitude $B_0$ in vacuum is:
$$B_0 = \\frac{E_0}{c}$$

**Step 2: Determine the direction of $\\vec{B}$**
An electromagnetic wave propagates in the direction of the unit vector $\\hat{k}$ given by:
$$\\hat{n} = \\hat{E} \\times \\hat{B}$$

Given:
- Wave travels in the $+z$-direction, so propagation unit vector is $\\hat{k}$.
- $\\hat{E} = \\hat{i}$ (along $+x$-direction).

Let $\\hat{B}$ be along some unit vector $\\hat{u}_B$. Then:
$$\\hat{i} \\times \\hat{u}_B = \\hat{k}$$

From the right-hand cross product rule of Cartesian unit vectors:
$$\\hat{i} \\times \\hat{j} = \\hat{k}$$

Therefore, $\\hat{u}_B = \\hat{j}$ (along the $+y$-direction).

**Step 3: Combine magnitude, phase, and direction**
Since $\\vec{E}$ and $\\vec{B}$ are in phase for a plane wave:
$$\\vec{B}(z, t) = \\frac{E_0}{c} \\cos(kz - \\omega t) \\hat{j}$$

Hence, option (A) is correct.`,
    hints: [
      'The wave propagation vector is strictly along $\\hat{E} \\times \\hat{B}$.',
      'Recall the fundamental ratio: $E_0 / B_0 = c$.'
    ]
  },
  {
    id: 'phy-emw-pyq-2',
    subject: 'physics',
    topicId: 'phy-emw-1-displacement-current',
    chapterId: 'phy-c12-em-waves',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'A parallel plate capacitor with circular plates of radius $R = 0.1\\,\\text{m}$ has a capacitance of $C = 200\\,\\text{pF}$. It is connected to an AC voltage supply $V(t) = V_0 \\sin(\\omega t)$ where $V_0 = 200\\,\\text{V}$ and $\\omega = 100\\,\\text{rad/s}$. The maximum displacement current across the plates is:',
    options: [
      '$4\\,\\mu\\text{A}$',
      '$2\\,\\mu\\text{A}$',
      '$40\\,\\mu\\text{A}$',
      '$20\\,\\mu\\text{A}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Expression for displacement current in terms of capacitance**
The displacement current is given by:
$$I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$$

For a parallel plate capacitor, the electric field between the plates is $E = \\frac{V}{d}$, so the electric flux is:
$$\\Phi_E = E \\cdot A = \\frac{V}{d} A = \\frac{A}{d} V = \\frac{C}{\\epsilon_0} V$$
Therefore:
$$I_d = \\epsilon_0 \\frac{d}{dt}\\left(\\frac{C}{\\epsilon_0} V\\right) = C \\frac{dV}{dt}$$
(which identically equals the conduction current $I_c$ flowing into the capacitor).

**Step 2: Differentiate voltage with respect to time**
Given $V(t) = V_0 \\sin(\\omega t)$:
$$\\frac{dV}{dt} = V_0 \\omega \\cos(\\omega t)$$

Thus, the displacement current is:
$$I_d(t) = C V_0 \\omega \\cos(\\omega t)$$

**Step 3: Calculate maximum displacement current**
$$I_{d, \\text{max}} = C V_0 \\omega$$
Substitute:
- $C = 200\\,\\text{pF} = 200 \\times 10^{-12}\\,\\text{F} = 2 \\times 10^{-10}\\,\\text{F}$
- $V_0 = 200\\,\\text{V}$
- $\\omega = 100\\,\\text{rad/s}$

$$I_{d, \\text{max}} = (2 \\times 10^{-10}) \\times 200 \\times 100 = 4 \\times 10^{-6}\\,\\text{A} = 4\\,\\mu\\text{A}$$

Hence, the maximum displacement current is $4\\,\\mu\\text{A}$.`,
    hints: [
      'Displacement current in a capacitor is $I_d = C \\frac{dV}{dt}$.',
      'The maximum value of $\\cos(\\omega t)$ is 1, so $I_{d,\\text{max}} = C V_0 \\omega$.'
    ]
  },
  {
    id: 'phy-emw-pyq-3',
    subject: 'physics',
    topicId: 'phy-emw-4-energy-poynting-pressure',
    chapterId: 'phy-c12-em-waves',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'A beam of electromagnetic radiation of intensity $I = 6 \\times 10^5\\,\\text{W/m}^2$ falls normally on a perfectly reflecting flat surface of area $A = 20\\,\\text{cm}^2$. The total radiation force exerted on the surface by the incident beam is ($c = 3 \\times 10^8\\,\\text{m/s}$):',
    options: [
      '$8 \\times 10^{-6}\\,\\text{N}$',
      '$4 \\times 10^{-6}\\,\\text{N}$',
      '$1.6 \\times 10^{-5}\\,\\text{N}$',
      '$2 \\times 10^{-6}\\,\\text{N}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for radiation pressure on a perfectly reflecting surface**
When electromagnetic radiation is completely reflected normally, the momentum change per photon is doubled:
$$\\Delta p = 2 \\frac{E}{c}$$
Therefore, the radiation pressure is:
$$P_{\\text{rad}} = \\frac{2I}{c}$$

**Step 2: Calculate the radiation force**
The total force is pressure multiplied by surface area:
$$F = P_{\\text{rad}} \\times A = \\frac{2 I A}{c}$$

**Step 3: Substitute given values**
- $I = 6 \\times 10^5\\,\\text{W/m}^2$
- $A = 20\\,\\text{cm}^2 = 20 \\times 10^{-4}\\,\\text{m}^2 = 2 \\times 10^{-3}\\,\\text{m}^2$
- $c = 3 \\times 10^8\\,\\text{m/s}$

$$F = \\frac{2 \\times (6 \\times 10^5) \\times (2 \\times 10^{-3})}{3 \\times 10^8} = \\frac{24 \\times 10^2}{3 \\times 10^8} = 8 \\times 10^{-6}\\,\\text{N}$$

Hence, the radiation force is $8 \\times 10^{-6}\\,\\text{N}$.`,
    hints: [
      'For a perfectly reflecting surface, momentum transfer is doubled compared to complete absorption.',
      '$F = \\frac{2IA}{c}$. Ensure you convert area from $\\text{cm}^2$ to $\\text{m}^2$.'
    ]
  },
  {
    id: 'phy-emw-pyq-4',
    subject: 'physics',
    topicId: 'phy-emw-4-energy-poynting-pressure',
    chapterId: 'phy-c12-em-waves',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    text: 'In a plane electromagnetic wave propagating in free space, the ratio of the time-averaged electric energy density $\\langle u_E \\rangle$ to the time-averaged magnetic energy density $\\langle u_B \\rangle$ is:',
    options: [
      '$1 : 1$',
      '$2 : 1$',
      '$1 : 2$',
      '$c : 1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Electric energy density**
The average electric energy density in an EM wave is:
$$\\langle u_E \\rangle = \\frac{1}{4} \\epsilon_0 E_0^2$$

**Step 2: Magnetic energy density**
The average magnetic energy density is:
$$\\langle u_B \\rangle = \\frac{B_0^2}{4\\mu_0}$$

**Step 3: Relate $E_0$ and $B_0$ using $E_0 = c B_0$ and $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$**
Substitute $B_0 = \\frac{E_0}{c}$ into $\\langle u_B \\rangle$:
$$\\langle u_B \\rangle = \\frac{E_0^2}{4\\mu_0 c^2}$$
Since $c^2 = \\frac{1}{\\mu_0 \\epsilon_0}$, we have $\\mu_0 c^2 = \\frac{1}{\\epsilon_0}$.
Therefore:
$$\\langle u_B \\rangle = \\frac{E_0^2}{4(1/\\epsilon_0)} = \\frac{1}{4} \\epsilon_0 E_0^2 = \\langle u_E \\rangle$$

Thus, the ratio is:
$$\\frac{\\langle u_E \\rangle}{\\langle u_B \\rangle} = 1$$

Energy is equally partitioned between electric and magnetic fields at all points in an EM wave.`,
    hints: [
      'In any electromagnetic wave in vacuum, energy is partitioned equally between electric and magnetic fields.',
      'Substitute $E_0 = c B_0$ and $c^2 = 1/(\\mu_0 \\epsilon_0)$.'
    ]
  },
  {
    id: 'phy-emw-pyq-5',
    subject: 'physics',
    topicId: 'phy-emw-4-energy-poynting-pressure',
    chapterId: 'phy-c12-em-waves',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    text: 'A point source of isotropic electromagnetic radiation emits power $P = 1500\\,\\text{W}$. At a distance of $r = 3\\,\\text{m}$ from the source, the peak value of the electric field $E_0$ is approximately (take $\\epsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F/m}$ and $c = 3 \\times 10^8\\,\\text{m/s}$):',
    options: [
      '$100\\,\\text{V/m}$',
      '$70.7\\,\\text{V/m}$',
      '$141.4\\,\\text{V/m}$',
      '$200\\,\\text{V/m}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate intensity at distance $r$ from an isotropic source**
The radiation spreads uniformly across a spherical surface of area $4\\pi r^2$:
$$I = \\frac{P}{4\\pi r^2}$$
Given $P = 1500\\,\\text{W}$ and $r = 3\\,\\text{m}$:
$$I = \\frac{1500}{4\\pi (3)^2} = \\frac{1500}{36\\pi} = \\frac{125}{3\\pi}\\,\\text{W/m}^2 \\approx 13.26\\,\\text{W/m}^2$$

**Step 2: Relate wave intensity to peak electric field $E_0$**
$$I = \\frac{1}{2} c \\epsilon_0 E_0^2$$
Therefore:
$$E_0 = \\sqrt{\\frac{2I}{c \\epsilon_0}}$$

Alternatively, using the wave impedance of free space $Z_0 = \\frac{1}{c\\epsilon_0} = \\sqrt{\\frac{\\mu_0}{\\epsilon_0}} \\approx 377\\,\\Omega$:
$$I = \\frac{E_0^2}{2 Z_0} = \\frac{E_0^2}{2 \\times 377} = \\frac{E_0^2}{754}$$
$$E_0^2 = 2 Z_0 I = 2 \\times 377 \\times \\frac{125}{3\\pi} = 754 \\times 13.26 \\approx 10000$$

Taking the square root:
$$E_0 \\approx \\sqrt{10000} = 100\\,\\text{V/m}$$

Hence, the peak electric field is $100\\,\\text{V/m}$.`,
    hints: [
      'Intensity at distance $r$ from an isotropic source is $I = \\frac{P}{4\\pi r^2}$.',
      'The relation between intensity and peak field is $I = \\frac{1}{2}c\\epsilon_0 E_0^2 = \\frac{E_0^2}{2\\mu_0 c}$.'
    ]
  },
  {
    id: 'phy-emw-pyq-6',
    subject: 'physics',
    topicId: 'phy-emw-5-spectrum-applications',
    chapterId: 'phy-c12-em-waves',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `Match the type of electromagnetic waves listed in Column I with their typical production method in Column II:

| Column I | Column II |
|---|---|
| (A) Microwaves | (p) Nuclear transitions |
| (B) Infrared waves | (q) Special vacuum tubes like magnetrons/klystrons |
| (C) X-rays | (r) Vibration of atoms and molecules in hot bodies |
| (D) $\\gamma$-rays | (s) Bombardment of a metal target by high energy electrons |`,
    options: [
      '(A) $\\to$ (q), (B) $\\to$ (r), (C) $\\to$ (s), (D) $\\to$ (p)',
      '(A) $\\to$ (r), (B) $\\to$ (q), (C) $\\to$ (p), (D) $\\to$ (s)',
      '(A) $\\to$ (s), (B) $\\to$ (r), (C) $\\to$ (q), (D) $\\to$ (p)',
      '(A) $\\to$ (q), (B) $\\to$ (p), (C) $\\to$ (s), (D) $\\to$ (r)'
    ],
    correctAnswer: 0,
    solution: `**Step-by-step match from NCERT:**
1. **Microwaves**: Produced by special vacuum tubes such as klystrons, magnetrons, and Gunn diodes. $\\implies \\mathbf{(A) \\to (q)}$.
2. **Infrared waves**: Produced by hot bodies and thermal vibrations of atoms and molecules; often called heat waves. $\\implies \\mathbf{(B) \\to (r)}$.
3. **X-rays**: Produced when high-energy electrons decelerate upon bombarding a heavy metal target (such as tungsten/molybdenum) in Coolidge tubes. $\\implies \\mathbf{(C) \\to (s)}$.
4. **$\\gamma$-rays**: Produced during nuclear reactions and radioactive decay transitions of atomic nuclei. $\\implies \\mathbf{(D) \\to (p)}$.

Thus, the correct matching is (A)-(q), (B)-(r), (C)-(s), (D)-(p).`,
    hints: [
      'Klystrons and magnetrons produce microwaves for radar and ovens.',
      'Deceleration of fast electrons hitting a heavy target produces characteristic and bremsstrahlung X-rays.'
    ]
  }
];
