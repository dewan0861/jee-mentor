import { Question } from '@/types';

export const nucleiQuestions: Question[] = [
  {
    id: 'phy-nuc-pyq-1',
    subject: 'physics',
    topicId: 'phy-nuc-1-composition-size-density',
    chapterId: 'phy-c12-nuclei',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    text: 'The ratio of the nuclear radius of $^{27}_{13}\\text{Al}$ to that of $^{125}_{52}\\text{Te}$ is:',
    options: [
      '$3 : 5$',
      '$5 : 3$',
      '$9 : 25$',
      '$27 : 125$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for nuclear radius**
The radius of an atomic nucleus of mass number $A$ is given by:
$$R = R_0 A^{1/3}$$
where $R_0 \\approx 1.2\\,\\text{fm}$ is an empirical constant.

**Step 2: Calculate the ratio of radii**
For Aluminum-27: $A_1 = 27$
$$R_1 = R_0 (27)^{1/3} = R_0 (3^3)^{1/3} = 3 R_0$$

For Tellurium-125: $A_2 = 125$
$$R_2 = R_0 (125)^{1/3} = R_0 (5^3)^{1/3} = 5 R_0$$

Taking the ratio:
$$\\frac{R_1}{R_2} = \\frac{3 R_0}{5 R_0} = \\frac{3}{5}$$

Hence, the ratio is $3 : 5$.`,
    hints: [
      'Nuclear radius scales with mass number as $R \\propto A^{1/3}$.',
      'Take the cube root of the mass numbers: $27^{1/3} = 3$ and $125^{1/3} = 5$.'
    ]
  },
  {
    id: 'phy-nuc-pyq-2',
    subject: 'physics',
    topicId: 'phy-nuc-2-mass-defect-binding-energy',
    chapterId: 'phy-c12-nuclei',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `Calculate the binding energy per nucleon of an $\\alpha$-particle ($^4_2\\text{He}$) given:
- Mass of proton $m_p = 1.007276\\,\\text{u}$
- Mass of neutron $m_n = 1.008665\\,\\text{u}$
- Mass of helium nucleus $m_\\alpha = 4.001506\\,\\text{u}$
- $1\\,\\text{u} = 931.5\\,\\text{MeV}$`,
    options: [
      '$7.07\\,\\text{MeV/nucleon}$',
      '$28.3\\,\\text{MeV/nucleon}$',
      '$14.1\\,\\text{MeV/nucleon}$',
      '$3.54\\,\\text{MeV/nucleon}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Determine the mass defect $\\Delta m$**
An $\\alpha$-particle ($^4_2\\text{He}$) consists of $Z = 2$ protons and $(A - Z) = 2$ neutrons:
$$\\Delta m = (2 m_p + 2 m_n) - m_\\alpha$$

Calculate combined nucleon mass:
$$2 m_p = 2 \\times 1.007276 = 2.014552\\,\\text{u}$$
$$2 m_n = 2 \\times 1.008665 = 2.017330\\,\\text{u}$$
$$2 m_p + 2 m_n = 4.031882\\,\\text{u}$$

Mass defect:
$$\\Delta m = 4.031882 - 4.001506 = 0.030376\\,\\text{u}$$

**Step 2: Total binding energy $E_b$**
$$E_b = \\Delta m \\times 931.5\\,\\text{MeV} = 0.030376 \\times 931.5 \\approx 28.295\\,\\text{MeV}$$

**Step 3: Binding energy per nucleon $E_{bn}$**
There are $A = 4$ nucleons in an $\\alpha$-particle:
$$E_{bn} = \\frac{E_b}{A} = \\frac{28.295\\,\\text{MeV}}{4} \\approx 7.07\\,\\text{MeV/nucleon}$$

Hence, the binding energy per nucleon is $7.07\\,\\text{MeV/nucleon}$.`,
    hints: [
      'Mass defect is $\\Delta m = (2m_p + 2m_n) - m_\\alpha$.',
      'Multiply $\\Delta m$ by $931.5\\,\\text{MeV}$ to get total BE, then divide by $A = 4$.'
    ]
  },
  {
    id: 'phy-nuc-pyq-3',
    subject: 'physics',
    topicId: 'phy-nuc-3-binding-energy-curve',
    chapterId: 'phy-c12-nuclei',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    text: 'A heavy nucleus of mass number $A = 240$ has a binding energy per nucleon of $7.6\\,\\text{MeV}$. It undergoes nuclear fission into two identical fragment nuclei, each of mass number $A = 120$, where the binding energy per nucleon of each fragment is $8.5\\,\\text{MeV}$. The total energy liberated during the fission of one such nucleus is:',
    options: [
      '$216\\,\\text{MeV}$',
      '$108\\,\\text{MeV}$',
      '$432\\,\\text{MeV}$',
      '$180\\,\\text{MeV}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Total binding energy of parent nucleus**
Parent nucleus has $A = 240$ nucleons with binding energy $7.6\\,\\text{MeV/nucleon}$:
$$E_{b, \\text{parent}} = 240 \\times 7.6\\,\\text{MeV} = 1824\\,\\text{MeV}$$

**Step 2: Total binding energy of daughter fragments**
Each fragment has $A = 120$ nucleons with binding energy $8.5\\,\\text{MeV/nucleon}$:
$$E_{b, \\text{one fragment}} = 120 \\times 8.5\\,\\text{MeV} = 1020\\,\\text{MeV}$$
Since two identical fragments are formed:
$$E_{b, \\text{products}} = 2 \\times 1020\\,\\text{MeV} = 2040\\,\\text{MeV}$$

**Step 3: Energy liberated ($Q$-value)**
Energy released in nuclear fission is the difference in total binding energies:
$$Q = E_{b, \\text{products}} - E_{b, \\text{reactants}}$$
$$Q = 2040\\,\\text{MeV} - 1824\\,\\text{MeV} = 216\\,\\text{MeV}$$

*(Shortcut: $Q = A_{\\text{total}} \\times \\Delta(E_{bn}) = 240 \\times (8.5 - 7.6) = 240 \\times 0.9 = 216\\,\\text{MeV}$.)*

Hence, the total energy liberated is $216\\,\\text{MeV}$.`,
    hints: [
      'Energy released is $Q = E_{b,\\text{products}} - E_{b,\\text{reactants}}$.',
      'Shortcut: $Q = A \\times (\\text{BE/nucleon of fragments} - \\text{BE/nucleon of parent})$.'
    ]
  },
  {
    id: 'phy-nuc-pyq-4',
    subject: 'physics',
    topicId: 'phy-nuc-5-fission-fusion-q-value',
    chapterId: 'phy-c12-nuclei',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `In a nuclear fusion reaction, two deuterons ($^2_1\\text{H}$) combine to form a helium nucleus ($^4_2\\text{He}$):
$$^2_1\\text{H} + ^2_1\\text{H} \\longrightarrow ^4_2\\text{He}$$
The binding energy per nucleon of deuteron is $1.1\\,\\text{MeV}$ and that of helium is $7.0\\,\\text{MeV}$. The total energy released in this reaction is:`,
    options: [
      '$23.6\\,\\text{MeV}$',
      '$28.0\\,\\text{MeV}$',
      '$5.9\\,\\text{MeV}$',
      '$11.8\\,\\text{MeV}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate total binding energy of reactants**
There are 2 deuterons, each having $A = 2$ nucleons:
- Binding energy of one deuteron $= 2 \\times 1.1\\,\\text{MeV} = 2.2\\,\\text{MeV}$
- Total binding energy of both deuterons:
$$E_{b, \\text{reactants}} = 2 \\times 2.2\\,\\text{MeV} = 4.4\\,\\text{MeV}$$

**Step 2: Calculate total binding energy of product**
The product is one $^4_2\\text{He}$ nucleus having $A = 4$ nucleons:
$$E_{b, \\text{product}} = 4 \\times 7.0\\,\\text{MeV} = 28.0\\,\\text{MeV}$$

**Step 3: Energy released in the fusion reaction**
$$Q = E_{b, \\text{product}} - E_{b, \\text{reactants}}$$
$$Q = 28.0\\,\\text{MeV} - 4.4\\,\\text{MeV} = 23.6\\,\\text{MeV}$$

Hence, the total energy released is $23.6\\,\\text{MeV}$.`,
    hints: [
      'Total BE of reactants is $2 \\times (2 \\times 1.1) = 4.4\\,\\text{MeV}$.',
      'Total BE of product is $4 \\times 7.0 = 28.0\\,\\text{MeV}$. Subtract: $28.0 - 4.4 = 23.6\\,\\text{MeV}$.'
    ]
  },
  {
    id: 'phy-nuc-pyq-5',
    subject: 'physics',
    topicId: 'phy-nuc-1-composition-size-density',
    chapterId: 'phy-c12-nuclei',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Advanced',
    year: 2021,
    text: 'Let $\\rho_1$ and $\\rho_2$ denote the nuclear matter densities of Carbon-12 ($^{12}_6\\text{C}$) and Uranium-238 ($^{238}_{92}\\text{U}$) respectively. The ratio $\\frac{\\rho_1}{\\rho_2}$ is equal to:',
    options: [
      '$1$',
      '$\\frac{12}{238}$',
      '$\\left(\\frac{12}{238}\\right)^{1/3}$',
      '$\\left(\\frac{238}{12}\\right)^{1/3}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for nuclear density**
Mass of a nucleus of mass number $A$ is:
$$m = A \\cdot m_u$$
where $m_u$ is the mass of one nucleon.

Radius of the nucleus is:
$$R = R_0 A^{1/3}$$

Volume of the spherical nucleus is:
$$V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (R_0 A^{1/3})^3 = \\frac{4}{3}\\pi R_0^3 A$$

**Step 2: Density calculation**
$$\\rho = \\frac{m}{V} = \\frac{A \\cdot m_u}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3 m_u}{4\\pi R_0^3}$$

Notice that the mass number $A$ cancels out completely!
Thus, nuclear density is a universal constant ($\\\\approx 2.3 \\times 10^{17}\\,\\text{kg/m}^3$), completely independent of the mass number $A$ or atomic number $Z$.

Therefore:
$$\\frac{\\rho_1}{\\rho_2} = 1$$

Hence, the density ratio is $1$.`,
    hints: [
      'Mass is proportional to $A$, and volume is proportional to $R^3 \\propto A$.',
      'Therefore density $\\rho = \\text{mass}/\\text{volume}$ is independent of $A$.'
    ]
  },
  {
    id: 'phy-nuc-pyq-6',
    subject: 'physics',
    topicId: 'phy-nuc-5-fission-fusion-q-value',
    chapterId: 'phy-c12-nuclei',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `A proton strikes a stationary lithium nucleus ($^7_3\\text{Li}$) producing two $\\alpha$-particles:
$$^1_1\\text{H} + ^7_3\\text{Li} \\longrightarrow 2\\,^4_2\\text{He}$$
Given masses:
- $m(^1_1\\text{H}) = 1.00783\\,\\text{u}$
- $m(^7_3\\text{Li}) = 7.01600\\,\\text{u}$
- $m(^4_2\\text{He}) = 4.00260\\,\\text{u}$
- $1\\,\\text{u} = 931.5\\,\\text{MeV}$

The $Q$-value of the reaction is approximately:`,
    options: [
      '$17.35\\,\\text{MeV}$',
      '$8.68\\,\\text{MeV}$',
      '$34.7\\,\\text{MeV}$',
      '$4.34\\,\\text{MeV}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate mass of reactants**
$$m_{\\text{reactants}} = m(^1_1\\text{H}) + m(^7_3\\text{Li}) = 1.00783 + 7.01600 = 8.02383\\,\\text{u}$$

**Step 2: Calculate mass of products**
$$m_{\\text{products}} = 2 \\times m(^4_2\\text{He}) = 2 \\times 4.00260 = 8.00520\\,\\text{u}$$

**Step 3: Mass decrease $\\Delta m$**
$$\\Delta m = m_{\\text{reactants}} - m_{\\text{products}} = 8.02383 - 8.00520 = 0.01863\\,\\text{u}$$

**Step 4: Calculate $Q$-value**
$$Q = \\Delta m \\times 931.5\\,\\text{MeV} = 0.01863 \\times 931.5 \\approx 17.354\\,\\text{MeV}$$

Since $Q > 0$, the reaction is strongly exothermic, releasing approximately $17.35\\,\\text{MeV}$ as kinetic energy of the two outgoing alpha particles.`,
    hints: [
      'Mass of reactants is $1.00783 + 7.01600 = 8.02383\\,\\text{u}$.',
      'Mass of products is $2 \\times 4.00260 = 8.00520\\,\\text{u}$. Multiply mass defect by $931.5\\,\\text{MeV}$.'
    ]
  }
];
