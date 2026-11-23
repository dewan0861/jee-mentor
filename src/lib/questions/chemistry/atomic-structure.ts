import { Question } from '@/types';

export const atomicStructureQuestions: Question[] = [
  {
    id: 'chem-atom-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-atom-3-quantum-mechanical-model',
    chapterId: 'chem-c11-atomic-structure',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    text: 'The number of radial nodes and angular (planar) nodes respectively for a $4d$ orbital are:',
    options: [
      '$1 \\text{ and } 2$',
      '$2 \\text{ and } 1$',
      '$3 \\text{ and } 0$',
      '$1 \\text{ and } 1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify quantum numbers for $4d$ orbital**
For a $4d$ orbital:
- Principal quantum number: $n = 4$
- Azimuthal quantum number: $l = 2$ (since $s=0, p=1, d=2, f=3$)

**Step 2: Formula for nodes**
1. **Radial nodes** (spherical nodes):
   $$\\text{Radial nodes} = n - l - 1 = 4 - 2 - 1 = 1$$
2. **Angular nodes** (nodal planes/cones):
   $$\\text{Angular nodes} = l = 2$$
3. **Total nodes**:
   $$\\text{Total nodes} = n - 1 = 4 - 1 = 3 = (1 + 2)$$

Hence, a $4d$ orbital has $1$ radial node and $2$ angular nodes.`,
    hints: [
      'Number of radial nodes is given by $n - l - 1$.',
      'Number of angular nodes is given by $l$. For a $d$ orbital, $l = 2$.'
    ]
  },
  {
    id: 'chem-atom-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-atom-2-de-broglie-heisenberg',
    chapterId: 'chem-c11-atomic-structure',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'A golf ball has a mass of $40\\,\\text{g}$ and a speed of $45\\,\\text{m/s}$. If the speed can be measured within an accuracy of $2\\%$, the minimum uncertainty in its position $\\Delta x$ is approximately ($h = 6.626 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$):',
    options: [
      '$1.46 \\times 10^{-33}\\,\\text{m}$',
      '$2.92 \\times 10^{-33}\\,\\text{m}$',
      '$7.30 \\times 10^{-34}\\,\\text{m}$',
      '$1.46 \\times 10^{-31}\\,\\text{m}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate the uncertainty in velocity $\\Delta v$**
Speed $v = 45\\,\\text{m/s}$ with uncertainty of $2\\%$:
$$\\Delta v = 45 \\times \\frac{2}{100} = 0.90\\,\\text{m/s}$$

**Step 2: Apply Heisenberg\'s Uncertainty Principle**
$$\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi} \\implies \\Delta x \\ge \\frac{h}{4\\pi m \\Delta v}$$

**Step 3: Substitute the numerical values**
- $h = 6.626 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$
- $m = 40\\,\\text{g} = 0.040\\,\\text{kg} = 4 \\times 10^{-2}\\,\\text{kg}$
- $\\Delta v = 0.90\\,\\text{m/s}$

$$\\Delta x = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.1416 \\times (0.040) \\times 0.90}$$
$$\\Delta x = \\frac{6.626 \\times 10^{-34}}{0.4524} \\approx 1.46 \\times 10^{-33}\\,\\text{m}$$

Notice that this uncertainty ($10^{-33}\\,\\text{m}$) is utterly negligible compared to macroscopic dimensions, explaining why quantum uncertainty does not affect macroscopic objects like golf balls.

Hence, the uncertainty in position is $1.46 \\times 10^{-33}\\,\\text{m}$.`,
    hints: [
      'Uncertainty in velocity is $\\Delta v = 45 \\times 0.02 = 0.9\\,\\text{m/s}$.',
      'Heisenberg formula: $\\Delta x = \\frac{h}{4\\pi m \\Delta v}$. Remember to convert mass to $\\text{kg}$ ($0.04\\,\\text{kg}$).'
    ]
  },
  {
    id: 'chem-atom-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-atom-4-quantum-numbers',
    chapterId: 'chem-c11-atomic-structure',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Advanced',
    year: 2022,
    text: 'The orbital angular momentum of an electron in a $3p$ orbital is $L_1$, and that in a $4d$ orbital is $L_2$. The ratio $\\frac{L_1}{L_2}$ is equal to:',
    options: [
      '$\\frac{1}{\\sqrt{3}}$',
      '$\\frac{3}{4}$',
      '$\\frac{\\sqrt{2}}{\\sqrt{3}}$',
      '$\\frac{1}{2}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for orbital angular momentum**
The orbital angular momentum of an electron in an orbital is determined entirely by its azimuthal quantum number $l$:
$$L = \\sqrt{l(l+1)} \\hbar = \\sqrt{l(l+1)} \\frac{h}{2\\pi}$$
Notice that orbital angular momentum is **completely independent** of the principal quantum number $n$!

**Step 2: Calculate $L_1$ for $3p$ orbital**
For a $p$ orbital: $l = 1$
$$L_1 = \\sqrt{1(1+1)} \\hbar = \\sqrt{2} \\hbar$$

**Step 3: Calculate $L_2$ for $4d$ orbital**
For a $d$ orbital: $l = 2$
$$L_2 = \\sqrt{2(2+1)} \\hbar = \\sqrt{6} \\hbar$$

**Step 4: Compute the ratio**
$$\\frac{L_1}{L_2} = \\frac{\\sqrt{2}\\hbar}{\\sqrt{6}\\hbar} = \\sqrt{\\frac{2}{6}} = \\sqrt{\\frac{1}{3}} = \\frac{1}{\\sqrt{3}}$$

Hence, the ratio is $\\frac{1}{\\sqrt{3}}$.`,
    hints: [
      'Orbital angular momentum formula is $L = \\sqrt{l(l+1)}\\hbar$.',
      'For $p$ orbital $l=1 \\implies L_1 = \\sqrt{2}\\hbar$. For $d$ orbital $l=2 \\implies L_2 = \\sqrt{6}\\hbar$.'
    ]
  },
  {
    id: 'chem-atom-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-atom-1-subatomic-bohr-model',
    chapterId: 'chem-c11-atomic-structure',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: 'In the ground state of a hydrogen atom ($Z = 1$), the energy of the electron is $-13.6\\,\\text{eV}$. For a hydrogen atom in an excited state with principal quantum number $n = 4$, the total number of degenerate atomic orbitals in this shell is:',
    options: [
      '$16$',
      '$32$',
      '$8$',
      '$4$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Degeneracy in hydrogen (single-electron system)**
In a single-electron species like the hydrogen atom, electron-electron repulsions do not exist. Therefore, all subshells ($s, p, d, f$) belonging to the same principal shell $n$ possess the exact same energy ($E_n = -13.6/n^2\\,\\text{eV}$).
Thus, all orbitals in the $n$th shell are degenerate.

**Step 2: Total number of orbitals in shell $n$**
The total number of orbitals in the $n$th shell is:
$$\\text{Total orbitals} = \\sum_{l=0}^{n-1} (2l + 1) = n^2$$

For $n = 4$:
- $s$ subshell ($l=0$): $1$ orbital ($4s$)
- $p$ subshell ($l=1$): $3$ orbitals ($4p_x, 4p_y, 4p_z$)
- $d$ subshell ($l=2$): $5$ orbitals ($4d_{xy}, 4d_{yz}, 4d_{zx}, 4d_{x^2-y^2}, 4d_{z^2}$)
- $f$ subshell ($l=3$): $7$ orbitals ($4f$)

$$\\text{Total orbitals} = 1 + 3 + 5 + 7 = 16 = 4^2$$

Hence, there are $16$ degenerate orbitals in the $n = 4$ shell of hydrogen.`,
    hints: [
      'In a hydrogen atom (1 electron), orbital energy depends only on $n$, not on $l$.',
      'The total number of orbitals in the $n$th principal shell is $n^2 = 4^2 = 16$.'
    ]
  },
  {
    id: 'chem-atom-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-atom-5-electronic-configurations-rules',
    chapterId: 'chem-c11-atomic-structure',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'The spin-only magnetic moments of $\\text{Cr}^{3+}$ ($Z = 24$) and $\\text{Fe}^{2+}$ ($Z = 26$) gaseous ions respectively are:',
    options: [
      '$3.87\\,\\text{BM} \\text{ and } 4.90\\,\\text{BM}$',
      '$4.90\\,\\text{BM} \\text{ and } 3.87\\,\\text{BM}$',
      '$3.87\\,\\text{BM} \\text{ and } 5.92\\,\\text{BM}$',
      '$2.83\\,\\text{BM} \\text{ and } 4.90\\,\\text{BM}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Electronic configuration of $\\text{Cr}^{3+}$**
Neutral Chromium ($Z = 24$): $[\text{Ar}] 3d^5 4s^1$
To form $\\text{Cr}^{3+}$, remove 1 electron from $4s$ and 2 electrons from $3d$:
$$\\text{Cr}^{3+}: [\\text{Ar}] 3d^3$$
Number of unpaired electrons: $n = 3$.

Spin-only magnetic moment:
$$\\mu = \\sqrt{n(n+2)} = \\sqrt{3(3+2)} = \\sqrt{15} \\approx 3.87\\,\\text{BM}$$

**Step 2: Electronic configuration of $\\text{Fe}^{2+}$**
Neutral Iron ($Z = 26$): $[\text{Ar}] 3d^6 4s^2$
To form $\\text{Fe}^{2+}$, remove 2 electrons from $4s$:
$$\\text{Fe}^{2+}: [\\text{Ar}] 3d^6$$
In the five $3d$ orbitals: one orbital has paired electrons ($2\\,e^-$) and four orbitals have single unpaired electrons ($4\\,e^-$).
Number of unpaired electrons: $n = 4$.

Spin-only magnetic moment:
$$\\mu = \\sqrt{n(n+2)} = \\sqrt{4(4+2)} = \\sqrt{24} \\approx 4.90\\,\\text{BM}$$

Hence, the magnetic moments are $3.87\\,\\text{BM}$ and $4.90\\,\\text{BM}$.`,
    hints: [
      'Write ground state configuration and remove electrons from the outermost $4s$ orbital first.',
      'Formula for spin-only magnetic moment is $\\mu = \\sqrt{n(n+2)}\\,\\text{BM}$.'
    ]
  },
  {
    id: 'chem-atom-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-atom-2-de-broglie-heisenberg',
    chapterId: 'chem-c11-atomic-structure',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'According to de Broglie\'s concept, what is the matter wavelength $\\lambda$ of an electron revolving in the second ($n = 2$) Bohr orbit of a hydrogen atom in terms of the Bohr radius $a_0$ ($a_0 = 0.529\\,\\text{Å}$)?',
    options: [
      '$4\\pi a_0$',
      '$2\\pi a_0$',
      '$\\pi a_0$',
      '$8\\pi a_0$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Radius of second Bohr orbit ($n = 2$) in hydrogen ($Z = 1$)**
$$r_n = a_0 \\frac{n^2}{Z}$$
For $n = 2, Z = 1$:
$$r_2 = a_0 (2^2) = 4 a_0$$

**Step 2: Apply de Broglie condition for stationary orbits**
The circumference of the $n$th stationary orbit must equal an integral number of de Broglie wavelengths:
$$2\\pi r_n = n \\lambda$$

For $n = 2$:
$$2\\pi r_2 = 2 \\lambda \\implies \\lambda = \\pi r_2$$

**Step 3: Substitute $r_2 = 4 a_0$**
$$\\lambda = \\pi (4 a_0) = 4\\pi a_0$$

Hence, the de Broglie wavelength is $4\\pi a_0$.`,
    hints: [
      'The radius of the $n=2$ orbit in hydrogen is $r_2 = n^2 a_0 = 4 a_0$.',
      'The standing wave condition is $2\\pi r_n = n\\lambda$, which gives $\\lambda = \\pi r_2 = 4\\pi a_0$.'
    ]
  }
];
