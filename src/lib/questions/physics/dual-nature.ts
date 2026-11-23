import { Question } from '@/types';

export const dualNatureQuestions: Question[] = [
  {
    id: 'phy-dn-pyq-1',
    subject: 'physics',
    topicId: 'phy-dn-2-einstein-equation-photons',
    chapterId: 'phy-c12-dual-nature',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'When light of wavelength $\\lambda$ is incident on a photosensitive metal surface, the stopping potential is $V_0$. When light of wavelength $\\frac{\\lambda}{2}$ is incident on the same metal surface, the stopping potential becomes $3V_0$. The work function $\\Phi_0$ of the metal surface is:',
    options: [
      '$\\frac{hc}{2\\lambda}$',
      '$\\frac{hc}{\\lambda}$',
      '$\\frac{2hc}{3\\lambda}$',
      '$\\frac{hc}{3\\lambda}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write Einstein\'s photoelectric equation for both cases**
$$e V_0 = \\frac{hc}{\\lambda} - \\Phi_0 \\quad \\text{--- (Equation 1)}$$

For incident wavelength $\\frac{\\lambda}{2}$, photon energy is $\\frac{hc}{\\lambda/2} = \\frac{2hc}{\\lambda}$:
$$e (3V_0) = \\frac{2hc}{\\lambda} - \\Phi_0 \\quad \\text{--- (Equation 2)}$$

**Step 2: Eliminate $V_0$ to solve for work function $\\Phi_0$**
Multiply Equation 1 by 3:
$$3 e V_0 = \\frac{3hc}{\\lambda} - 3\\Phi_0$$

Equate this to Equation 2:
$$\\frac{3hc}{\\lambda} - 3\\Phi_0 = \\frac{2hc}{\\lambda} - \\Phi_0$$

Rearrange terms:
$$\\frac{3hc}{\\lambda} - \\frac{2hc}{\\lambda} = 3\\Phi_0 - \\Phi_0$$
$$\\frac{hc}{\\lambda} = 2\\Phi_0$$
$$\\Phi_0 = \\frac{hc}{2\\lambda}$$

Hence, the work function of the metal is $\\frac{hc}{2\\lambda}$.`,
    hints: [
      'Write $e V_0 = \\frac{hc}{\\lambda} - \\Phi_0$ and $3e V_0 = \\frac{2hc}{\\lambda} - \\Phi_0$.',
      'Multiply the first equation by 3 and equate to eliminate the stopping potential $V_0$.'
    ]
  },
  {
    id: 'phy-dn-pyq-2',
    subject: 'physics',
    topicId: 'phy-dn-4-de-broglie-matter-waves',
    chapterId: 'phy-c12-dual-nature',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'An electron of mass $m_e$ and a proton of mass $m_p$ have the same de Broglie wavelength $\\lambda$. The ratio of their kinetic energies $\\frac{K_e}{K_p}$ is:',
    options: [
      '$\\frac{m_p}{m_e}$',
      '$\\frac{m_e}{m_p}$',
      '$\\sqrt{\\frac{m_p}{m_e}}$',
      '$1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Relate kinetic energy and de Broglie wavelength**
The de Broglie wavelength is:
$$\\lambda = \\frac{h}{p} \\implies p = \\frac{h}{\\lambda}$$
Kinetic energy in terms of momentum $p$ is:
$$K = \\frac{p^2}{2m} = \\frac{h^2}{2m\\lambda^2}$$

**Step 2: Compare kinetic energies for equal wavelength $\\lambda$**
Since $h$ and $\\lambda$ are identical for both particles:
$$K \\propto \\frac{1}{m}$$

Therefore:
$$\\frac{K_e}{K_p} = \\frac{1/m_e}{1/m_p} = \\frac{m_p}{m_e}$$

Since $m_p \\approx 1836\\,m_e$, the electron has roughly 1836 times greater kinetic energy than the proton for the same matter wavelength.`,
    hints: [
      'Kinetic energy is related to momentum by $K = p^2 / (2m)$.',
      'Since $\\lambda = h/p$ is the same, both particles have equal momentum $p$. Thus $K \\propto 1/m$.'
    ]
  },
  {
    id: 'phy-dn-pyq-3',
    subject: 'physics',
    topicId: 'phy-dn-5-charged-particles-thermal',
    chapterId: 'phy-c12-dual-nature',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    text: 'A proton and an $\\alpha$-particle are accelerated from rest through the same electric potential difference $V$. The ratio of the de Broglie wavelength of the $\\alpha$-particle to that of the proton, $\\frac{\\lambda_\\alpha}{\\lambda_p}$, is:',
    options: [
      '$\\frac{1}{2\\sqrt{2}}$',
      '$\\frac{1}{4}$',
      '$\\frac{1}{8}$',
      '$\\frac{1}{\\sqrt{2}}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for de Broglie wavelength of an accelerated charged particle**
When a particle of mass $m$ and charge $q$ is accelerated through potential difference $V$, its kinetic energy is:
$$K = q V$$
The de Broglie wavelength is:
$$\\lambda = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2mqV}}$$

**Step 2: Relate mass and charge of proton and alpha particle**
- For proton: $m_p = m, \\quad q_p = e$
- For $\\alpha$-particle: $m_\\alpha = 4m, \\quad q_\\alpha = 2e$

**Step 3: Calculate the ratio $\\frac{\\lambda_\\alpha}{\\lambda_p}$**
$$\\frac{\\lambda_\\alpha}{\\lambda_p} = \\frac{\\frac{h}{\\sqrt{2 m_\\alpha q_\\alpha V}}}{\\frac{h}{\\sqrt{2 m_p q_p V}}} = \\sqrt{\\frac{m_p q_p}{m_\\alpha q_\\alpha}}$$

Substitute $m_\\alpha = 4m_p$ and $q_\\alpha = 2q_p$:
$$\\frac{\\lambda_\\alpha}{\\lambda_p} = \\sqrt{\\frac{m_p \\cdot q_p}{(4m_p) \\cdot (2q_p)}} = \\sqrt{\\frac{1}{8}} = \\frac{1}{2\\sqrt{2}}$$

Hence, the ratio is $\\frac{1}{2\\sqrt{2}}$.`,
    hints: [
      'The de Broglie wavelength for potential $V$ is $\\lambda = \\frac{h}{\\sqrt{2mqV}}$.',
      'Substitute $m_\\alpha = 4m_p$ and $q_\\alpha = 2q_p$ into the inverse square root ratio.'
    ]
  },
  {
    id: 'phy-dn-pyq-4',
    subject: 'physics',
    topicId: 'phy-dn-3-photon-mechanics-pressure',
    chapterId: 'phy-c12-dual-nature',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    text: 'A laser source emits light of wavelength $\\lambda = 663\\,\\text{nm}$ with an output power of $P = 10\\,\\text{mW}$. The number of photons emitted per second by the laser source is ($h = 6.63 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}, \\; c = 3 \\times 10^8\\,\\text{m/s}$):',
    options: [
      '$3.33 \\times 10^{16}$',
      '$1.5 \\times 10^{16}$',
      '$6.63 \\times 10^{17}$',
      '$2.0 \\times 10^{15}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Energy of a single photon**
$$E = \\frac{hc}{\\lambda}$$
Substitute values:
$$E = \\frac{(6.63 \\times 10^{-34}) \\times (3 \\times 10^8)}{663 \\times 10^{-9}} = \\frac{19.89 \\times 10^{-26}}{6.63 \\times 10^{-7}} = 3.0 \\times 10^{-19}\\,\\text{J}$$

**Step 2: Number of photons emitted per second**
If $n$ is the photon emission rate:
$$P = n \\cdot E \\implies n = \\frac{P}{E}$$
Given $P = 10\\,\\text{mW} = 10 \\times 10^{-3}\\,\\text{W} = 10^{-2}\\,\\text{W}$:
$$n = \\frac{10^{-2}\\,\\text{J/s}}{3.0 \\times 10^{-19}\\,\\text{J}} = \\frac{1}{3} \\times 10^{17} \\approx 3.33 \\times 10^{16}\\,\\text{photons/s}$$

Hence, the number of photons emitted per second is $3.33 \\times 10^{16}$.`,
    hints: [
      'Energy of each photon is $E = hc/\\lambda$.',
      'The number of photons per second is $n = P / E$.'
    ]
  },
  {
    id: 'phy-dn-pyq-5',
    subject: 'physics',
    topicId: 'phy-dn-2-einstein-equation-photons',
    chapterId: 'phy-c12-dual-nature',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: 'In a photoelectric experiment, graphs of stopping potential $V_0$ against frequency of incident radiation $\\nu$ are plotted for two different photosensitive metals $A$ and $B$. Metal $A$ has threshold frequency $\\nu_{0A} = 4 \\times 10^{14}\\,\\text{Hz}$ and Metal $B$ has threshold frequency $\\nu_{0B} = 8 \\times 10^{14}\\,\\text{Hz}$. The ratio of the slopes of the graphs for metal $A$ to metal $B$ is:',
    options: [
      '$1 : 1$',
      '$1 : 2$',
      '$2 : 1$',
      '$4 : 1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Equation of the $V_0$ versus $\\nu$ graph**
Einstein\'s photoelectric equation is:
$$e V_0 = h\\nu - \\Phi_0$$
Dividing by electron charge $e$:
$$V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\Phi_0}{e}$$

**Step 2: Identify the slope**
Comparing with the standard linear equation $y = mx + c$:
$$\\text{Slope } m = \\frac{h}{e}$$
The slope is the ratio of Planck\'s constant $h$ to elementary charge $e$.
Both $h$ and $e$ are fundamental physical constants of nature and are completely independent of the material, surface properties, or work function of the metal.

Therefore:
$$\\text{Slope}_A = \\frac{h}{e}, \\quad \\text{Slope}_B = \\frac{h}{e}$$
$$\\frac{\\text{Slope}_A}{\\text{Slope}_B} = 1 : 1$$

Both graphs are straight lines with identical slope $\\frac{h}{e}$, shifted horizontally along the frequency axis according to their individual threshold frequencies.`,
    hints: [
      'The slope of the stopping potential vs frequency graph is $h/e$.',
      'Since $h$ and $e$ are universal constants, the slope is identical ($1:1$) for all metals.'
    ]
  },
  {
    id: 'phy-dn-pyq-6',
    subject: 'physics',
    topicId: 'phy-dn-5-charged-particles-thermal',
    chapterId: 'phy-c12-dual-nature',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'A thermal neutron at temperature $T_1 = 300\\,\\text{K}$ has a de Broglie wavelength $\\lambda_1$. When the temperature is increased to $T_2 = 1200\\,\\text{K}$, its new de Broglie wavelength $\\lambda_2$ will be:',
    options: [
      '$\\frac{\\lambda_1}{2}$',
      '$\\frac{\\lambda_1}{4}$',
      '$2\\lambda_1$',
      '$\\frac{\\lambda_1}{\\sqrt{2}}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for de Broglie wavelength of a thermal particle**
The mean kinetic energy of a thermal neutron in thermal equilibrium at absolute temperature $T$ is:
$$K = \\frac{3}{2} k_B T$$
The de Broglie wavelength is:
$$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2m\\left(\\frac{3}{2} k_B T\\right)}} = \\frac{h}{\\sqrt{3m k_B T}}$$

**Step 2: Proportionality with temperature**
Since $h, m$, and $k_B$ are constant:
$$\\lambda \\propto \\frac{1}{\\sqrt{T}}$$

**Step 3: Calculate the ratio**
$$\\frac{\\lambda_2}{\\lambda_1} = \\sqrt{\\frac{T_1}{T_2}} = \\sqrt{\\frac{300}{1200}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2}$$

Therefore:
$$\\lambda_2 = \\frac{\\lambda_1}{2}$$

Hence, the wavelength is halved.`,
    hints: [
      'Average kinetic energy of a thermal neutron is $K = \\frac{3}{2} k_B T$.',
      'The de Broglie wavelength scales inversely with the square root of temperature: $\\lambda \\propto 1/\\sqrt{T}$.'
    ]
  }
];
