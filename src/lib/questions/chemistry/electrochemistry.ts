import { Question } from '@/types';

export const electrochemistryQuestions: Question[] = [
  {
    id: 'chem-elec-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-elec-2-nernst-equation-concentration-cells',
    chapterId: 'chem-c12-electrochemistry',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `Consider the electrochemical cell at $298\\,\\text{K}$:
$$\\text{Zn}(s) \\mid \\text{Zn}^{2+}(0.10\\,\\text{M}) \\parallel \\text{Cu}^{2+}(0.010\\,\\text{M}) \\mid \\text{Cu}(s)$$
Given standard reduction potentials:
$$E^0_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\,\\text{V}, \\quad E^0_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\,\\text{V}$$
The EMF ($E_{\\text{cell}}$) of the cell at $298\\,\\text{K}$ is: (Take $\\frac{2.303 R T}{F} = 0.0591\\,\\text{V}$)`,
    options: [
      '$1.070\\,\\text{V}$',
      '$1.100\\,\\text{V}$',
      '$1.130\\,\\text{V}$',
      '$0.880\\,\\text{V}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write the half-reactions and overall cell reaction**
- Anode (oxidation): $\\text{Zn}(s) \\longrightarrow \\text{Zn}^{2+}(aq) + 2e^-$
- Cathode (reduction): $\\text{Cu}^{2+}(aq) + 2e^- \\longrightarrow \\text{Cu}(s)$
- Overall: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\longrightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$
Number of electrons transferred: $n = 2$.

**Step 2: Calculate standard cell potential ($E^0_{\\text{cell}}$)**
$$E^0_{\\text{cell}} = E^0_{\\text{cathode}} - E^0_{\\text{anode}} = E^0_{\\text{Cu}^{2+}/\\text{Cu}} - E^0_{\\text{Zn}^{2+}/\\text{Zn}}$$
$$E^0_{\\text{cell}} = +0.34\\,\\text{V} - (-0.76\\,\\text{V}) = +1.10\\,\\text{V}$$

**Step 3: Calculate reaction quotient ($Q$)**
$$Q = \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]} = \\frac{0.10\\,\\text{M}}{0.010\\,\\text{M}} = 10$$

**Step 4: Apply Nernst Equation**
$$E_{\\text{cell}} = E^0_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} Q$$
$$E_{\\text{cell}} = 1.10 - \\frac{0.0591}{2} \\log_{10}(10)$$
$$E_{\\text{cell}} = 1.10 - 0.02955 (1) = 1.07045\\,\\text{V} \\approx 1.070\\,\\text{V}$$`,
    hints: [
      'Find $E^0_{\\text{cell}} = E^0_{\\text{cathode}} - E^0_{\\text{anode}}$.',
      'Use Nernst equation $E_{\\text{cell}} = E^0_{\\text{cell}} - \\frac{0.0591}{n} \\log Q$ with $n = 2$ and $Q = [\\text{Zn}^{2+}]/[\\text{Cu}^{2+}]$.'
    ]
  },
  {
    id: 'chem-elec-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-elec-3-thermodynamics-equilibrium-constant',
    chapterId: 'chem-c12-electrochemistry',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    text: `Given the standard reduction potentials:
$$E^0_{\\text{Fe}^{3+}/\\text{Fe}^{2+}} = +0.771\\,\\text{V}$$
$$E^0_{\\text{Fe}^{2+}/\\text{Fe}} = -0.440\\,\\text{V}$$
What is the standard reduction potential for the three-electron reduction $E^0_{\\text{Fe}^{3+}/\\text{Fe}}$?`,
    options: [
      '$-0.036\\,\\text{V}$',
      '$+0.331\\,\\text{V}$',
      '$+0.110\\,\\text{V}$',
      '$-0.110\\,\\text{V}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Recognize that $E^0$ is an intensive property and cannot be added directly**
To combine half-reactions, we MUST use the extensive property **standard Gibbs free energy**:
$$\\Delta G^0 = -n F E^0$$

**Step 2: Write half-reactions with their $\\Delta G^0$ values**
1. $\\text{Fe}^{3+} + e^- \\longrightarrow \\text{Fe}^{2+}$:
   $$n_1 = 1, \\quad \\Delta G^0_1 = -1 \\cdot F \\cdot E^0_1 = -1 F (0.771) = -0.771 F$$

2. $\\text{Fe}^{2+} + 2e^- \\longrightarrow \\text{Fe}$:
   $$n_2 = 2, \\quad \\Delta G^0_2 = -2 \\cdot F \\cdot E^0_2 = -2 F (-0.440) = +0.880 F$$

**Step 3: Add reactions to obtain the target reaction**
$$\\text{Fe}^{3+} + 3e^- \\longrightarrow \\text{Fe}$$
Target electron transfer: $n_3 = 3$.
$$\\Delta G^0_3 = \\Delta G^0_1 + \\Delta G^0_2$$
$$-3 F E^0_3 = -0.771 F + 0.880 F = +0.109 F$$

**Step 4: Solve for $E^0_3$**
$$-3 E^0_3 = 0.109$$
$$E^0_3 = -\\frac{0.109}{3} \\approx -0.0363\\,\\text{V} \\approx -0.036\\,\\text{V}$$`,
    hints: [
      'Never simply add or average reduction potentials! Convert to Gibbs energy: $\\Delta G^0 = -n F E^0$.',
      'Use $-3 F E^0_3 = -1 F E^0_1 + (-2 F E^0_2)$.'
    ]
  },
  {
    id: 'chem-elec-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-elec-5-kohlrausch-law-applications',
    chapterId: 'chem-c12-electrochemistry',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The limiting molar conductivities at $298\\,\\text{K}$ are:
$$\\Lambda_m^0(\\text{CH}_3\\text{COONa}) = 91.0\\,\\text{S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$$
$$\\Lambda_m^0(\\text{HCl}) = 426.0\\,\\text{S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$$
$$\\Lambda_m^0(\\text{NaCl}) = 126.0\\,\\text{S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$$
If the molar conductivity of a $0.0010\\,\\text{M}$ acetic acid solution is $39.1\\,\\text{S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$, what is the degree of dissociation ($\\alpha$) of acetic acid?`,
    options: [
      '$0.10$',
      '$0.05$',
      '$0.20$',
      '$0.01$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate $\\Lambda_m^0(\\text{CH}_3\\text{COOH})$ using Kohlrausch's Law**
According to Kohlrausch's law of independent migration of ions:
$$\\Lambda_m^0(\\text{CH}_3\\text{COOH}) = \\lambda^0_{\\text{CH}_3\\text{COO}^-} + \\lambda^0_{\\text{H}^+}$$
We can construct this by combining strong electrolytes:
$$\\Lambda_m^0(\\text{CH}_3\\text{COOH}) = \\Lambda_m^0(\\text{CH}_3\\text{COONa}) + \\Lambda_m^0(\\text{HCl}) - \\Lambda_m^0(\\text{NaCl})$$
$$\\Lambda_m^0(\\text{CH}_3\\text{COOH}) = 91.0 + 426.0 - 126.0 = 391.0\\,\\text{S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$$

**Step 2: Calculate the degree of dissociation ($\\alpha$)**
$$\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^0}$$
Given $\\Lambda_m = 39.1\\,\\text{S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$:
$$\\alpha = \\frac{39.1}{391.0} = 0.10 \\quad (\\text{or } 10\\%)$$`,
    hints: [
      'Apply Kohlrausch\'s law: $\\Lambda_m^0(\\text{CH}_3\\text{COOH}) = \\Lambda_m^0(\\text{CH}_3\\text{COONa}) + \\Lambda_m^0(\\text{HCl}) - \\Lambda_m^0(\\text{NaCl})$.',
      'Degree of dissociation $\\alpha = \\Lambda_m / \\Lambda_m^0$.'
    ]
  },
  {
    id: 'chem-elec-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-elec-6-electrolysis-faradays-laws',
    chapterId: 'chem-c12-electrochemistry',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `A steady current of $2.0\\,\\text{A}$ is passed for $9650\\,\\text{seconds}$ through an aqueous solution of copper(II) sulfate ($\\text{CuSO}_4$). What mass of pure copper will be deposited at the cathode? (Molar mass of $\\text{Cu} = 63.5\\,\\text{g/mol}$, Faraday constant $F = 96500\\,\\text{C/mol}$)`,
    options: [
      '$6.35\\,\\text{g}$',
      '$12.70\\,\\text{g}$',
      '$3.175\\,\\text{g}$',
      '$1.588\\,\\text{g}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate total electric charge passed ($Q$)**
$$Q = I \\times t = 2.0\\,\\text{A} \\times 9650\\,\\text{s} = 19{,}300\\,\\text{C}$$

**Step 2: Convert charge to moles of electrons (Faradays)**
$$\\text{Number of Faradays} = \\frac{Q}{F} = \\frac{19{,}300\\,\\text{C}}{96{,}500\\,\\text{C/mol}} = 0.20\\,\\text{mol of electrons}$$

**Step 3: Analyze cathodic reduction reaction**
$$\\text{Cu}^{2+}(aq) + 2e^- \\longrightarrow \\text{Cu}(s)$$
From stoichiometry:
- $2\\,\\text{moles of } e^-$ ($2\\,\\text{F}$) deposit $1\\,\\text{mole of } \\text{Cu}$ ($63.5\\,\\text{g}$).
- Therefore, $1\\,\\text{F}$ deposits $\\frac{63.5}{2} = 31.75\\,\\text{g}$ of $\\text{Cu}$ (equivalent mass).

**Step 4: Calculate mass of copper deposited**
$$w = \\frac{Q}{n F} \\times M = \\frac{0.20}{2} \\times 63.5\\,\\text{g} = 0.10 \\times 63.5\\,\\text{g} = 6.35\\,\\text{g}$$`,
    hints: [
      'Calculate total charge: $Q = I \\cdot t$.',
      'Use Faraday\'s formula: $w = \\frac{M \\cdot I \\cdot t}{n \\cdot 96500}$, where $n = 2$ for $\\text{Cu}^{2+}$.'
    ]
  },
  {
    id: 'chem-elec-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-elec-2-nernst-equation-concentration-cells',
    chapterId: 'chem-c12-electrochemistry',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Main',
    year: 2022,
    text: `For the hydrogen concentration cell at $298\\,\\text{K}$:
$$\\text{Pt} \\mid \\text{H}_2(1\\,\\text{bar}) \\mid \\text{H}^+(\\text{pH} = x) \\parallel \\text{H}^+(\\text{pH} = 2.0) \\mid \\text{H}_2(1\\,\\text{bar}) \\mid \\text{Pt}$$
The EMF of the cell is found to be $0.1182\\,\\text{V}$. The value of $x$ (pH of the anolyte) is: (Take $\\frac{2.303 R T}{F} = 0.0591\\,\\text{V}$)`,
    options: [
      '$4.0$',
      '$3.0$',
      '$5.0$',
      '$1.0$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write half-reactions and cell potential**
- Anode (oxidation): $\\frac{1}{2}\\text{H}_2(1\\,\\text{bar}) \\longrightarrow \\text{H}^+_{\\text{anode}} + e^-$
- Cathode (reduction): $\\text{H}^+_{\\text{cathode}} + e^- \\longrightarrow \\frac{1}{2}\\text{H}_2(1\\,\\text{bar})$
- Overall reaction: $\\text{H}^+_{\\text{cathode}} \\rightleftharpoons \\text{H}^+_{\\text{anode}}$
Here $n = 1$, and $E^0_{\\text{cell}} = 0.00\\,\\text{V}$ (identical hydrogen electrodes).

**Step 2: Formulate Nernst equation in terms of pH**
$$E_{\\text{cell}} = E^0_{\\text{cell}} - \\frac{0.0591}{1} \\log_{10}\\left(\\frac{[\\text{H}^+]_{\\text{anode}}}{[\\text{H}^+]_{\\text{cathode}}}\\right)$$
$$E_{\\text{cell}} = -0.0591 \\left( \\log_{10}[\\text{H}^+]_{\\text{anode}} - \\log_{10}[\\text{H}^+]_{\\text{cathode}} \\right)$$
Recall definition: $\\text{pH} = -\\log_{10}[\\text{H}^+]$, hence $\\log_{10}[\\text{H}^+] = -\\text{pH}$:
$$E_{\\text{cell}} = -0.0591 (-\\text{pH}_{\\text{anode}} - (-\\text{pH}_{\\text{cathode}})) = 0.0591 (\\text{pH}_{\\text{anode}} - \\text{pH}_{\\text{cathode}})$$

**Step 3: Substitute given values and solve for $x$**
$$0.1182 = 0.0591 (x - 2.0)$$
$$x - 2.0 = \\frac{0.1182}{0.0591} = 2.0$$
$$x = 2.0 + 2.0 = 4.0$$

Therefore, the pH of the anodic half-cell solution is $4.0$.`,
    hints: [
      'In a hydrogen concentration cell, $E_{\\text{cell}} = 0.0591 (\\text{pH}_{\\text{anode}} - \\text{pH}_{\\text{cathode}})$.',
      'Set $0.1182 = 0.0591 (x - 2.0)$ and solve for $x$.'
    ]
  },
  {
    id: 'chem-elec-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-elec-7-batteries-fuel-cells-corrosion',
    chapterId: 'chem-c12-electrochemistry',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `During the **recharging** (charging) of a secondary lead storage battery, which chemical transformation occurs at the electrode connected to the negative terminal of the external power supply (cathode during recharge)?`,
    options: [
      '$\\text{PbSO}_4(s)$ is reduced to metallic $\\text{Pb}(s)$',
      '$\\text{PbSO}_4(s)$ is oxidized to $\\text{PbO}_2(s)$',
      '$\\text{Pb}(s)$ is oxidized to $\\text{PbSO}_4(s)$',
      '$\\text{PbO}_2(s)$ is reduced to $\\text{PbSO}_4(s)$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Recall discharging vs recharging reactions of lead storage battery**
During **discharging** (spontaneous galvanic cell mode):
- Anode (negative): $\\text{Pb}(s) + \\text{SO}_4^{2-}(aq) \\longrightarrow \\text{PbSO}_4(s) + 2e^-$ (oxidation)
- Cathode (positive): $\\text{PbO}_2(s) + 4\\text{H}^+(aq) + \\text{SO}_4^{2-}(aq) + 2e^- \\longrightarrow \\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l)$ (reduction)

**Step 2: Recharging process (electrolytic cell mode)**
An external DC voltage is applied to force electrons in the reverse direction:
- The lead plate connected to the negative terminal becomes the **cathode** (site of reduction):
  $$\\text{PbSO}_4(s) + 2e^- \\longrightarrow \\text{Pb}(s) + \\text{SO}_4^{2-}(aq)$$
  Here, insoluble $\\text{PbSO}_4$ is **reduced to spongy metallic lead ($\\text{Pb}$)**.
- The plate connected to the positive terminal becomes the **anode** (site of oxidation):
  $$\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l) \\longrightarrow \\text{PbO}_2(s) + 4\\text{H}^+(aq) + \\text{SO}_4^{2-}(aq) + 2e^-$$
  Here, $\\text{PbSO}_4$ is oxidized back to $\\text{PbO}_2$, regenerating $\\text{H}_2\\text{SO}_4$.

Thus, at the negative terminal during recharge, $\\text{PbSO}_4(s)$ is reduced to $\\text{Pb}(s)$.`,
    hints: [
      'Recharging reverses the discharge reactions.',
      'Reduction always occurs at the cathode, which is connected to the negative terminal of the DC charger.'
    ]
  }
];
