import { Question } from '@/types';

export const semiconductorsQuestions: Question[] = [
  {
    id: 'phy-semi-pyq-1',
    subject: 'physics',
    topicId: 'phy-semi-2-extrinsic-doping',
    chapterId: 'phy-c12-semiconductors',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    text: 'A pure silicon crystal at $300\\,\\text{K}$ has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{16}\\,\\text{m}^{-3}$. It is doped with phosphorus atoms such that the donor concentration is $N_d = 4.5 \\times 10^{22}\\,\\text{m}^{-3}$. Assuming complete ionization of donor impurities, the hole concentration $n_h$ in the doped silicon is:',
    options: [
      '$5.0 \\times 10^9\\,\\text{m}^{-3}$',
      '$2.5 \\times 10^9\\,\\text{m}^{-3}$',
      '$3.0 \\times 10^{10}\\,\\text{m}^{-3}$',
      '$1.5 \\times 10^9\\,\\text{m}^{-3}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify electron concentration in n-type semiconductor**
Since phosphorus is a pentavalent donor impurity and complete ionization is assumed:
$$n_e \\approx N_d = 4.5 \\times 10^{22}\\,\\text{m}^{-3}$$

**Step 2: Apply the Law of Mass Action**
At thermal equilibrium in any semiconductor:
$$n_e \\cdot n_h = n_i^2$$

**Step 3: Solve for hole concentration $n_h$**
$$n_h = \\frac{n_i^2}{n_e} = \\frac{(1.5 \\times 10^{16})^2}{4.5 \\times 10^{22}}$$
$$n_h = \\frac{2.25 \\times 10^{32}}{4.5 \\times 10^{22}} = 0.5 \\times 10^{10} = 5.0 \\times 10^9\\,\\text{m}^{-3}$$

Notice that while electron concentration is $4.5 \\times 10^{22}\\,\\text{m}^{-3}$ (majority carriers), hole concentration is suppressed down to $5.0 \\times 10^9\\,\\text{m}^{-3}$ (minority carriers) due to intense recombination.

Hence, the hole concentration is $5.0 \\times 10^9\\,\\text{m}^{-3}$.`,
    hints: [
      'In an n-type semiconductor, electron concentration is dominated by donor dopants: $n_e \\approx N_d$.',
      'Use the mass action law: $n_h = n_i^2 / n_e$.'
    ]
  },
  {
    id: 'phy-semi-pyq-2',
    subject: 'physics',
    topicId: 'phy-semi-3-pn-junction-characteristics',
    chapterId: 'phy-c12-semiconductors',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: 'In the forward bias characteristic of a silicon p-n junction diode, the current changes from $10\\,\\text{mA}$ to $30\\,\\text{mA}$ when the forward voltage is changed from $0.70\\,\\text{V}$ to $0.75\\,\\text{V}$. The dynamic resistance of the diode over this operating range is:',
    options: [
      '$2.5\\,\\Omega$',
      '$5.0\\,\\Omega$',
      '$25\\,\\Omega$',
      '$0.4\\,\\Omega$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for dynamic (AC) resistance**
Dynamic resistance $r_d$ of a diode is defined as the ratio of a small change in voltage to the corresponding small change in current:
$$r_d = \\frac{\\Delta V}{\\Delta I}$$

**Step 2: Calculate $\\Delta V$ and $\\Delta I$**
$$\\Delta V = 0.75\\,\\text{V} - 0.70\\,\\text{V} = 0.05\\,\\text{V}$$
$$\\Delta I = 30\\,\\text{mA} - 10\\,\\text{mA} = 20\\,\\text{mA} = 20 \\times 10^{-3}\\,\\text{A} = 0.02\\,\\text{A}$$

**Step 3: Compute $r_d$**
$$r_d = \\frac{0.05\\,\\text{V}}{0.02\\,\\text{A}} = \\frac{5}{2} = 2.5\\,\\Omega$$

Hence, the dynamic resistance of the diode is $2.5\\,\\Omega$.`,
    hints: [
      'Dynamic resistance is given by the derivative / ratio of increments: $r_d = \\Delta V / \\Delta I$.',
      'Convert $\\text{mA}$ to $\\text{A}$: $20\\,\\text{mA} = 0.02\\,\\text{A}$.'
    ]
  },
  {
    id: 'phy-semi-pyq-3',
    subject: 'physics',
    topicId: 'phy-semi-3-pn-junction-characteristics',
    chapterId: 'phy-c12-semiconductors',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'In a circuit, two ideal diodes $D_1$ and $D_2$ are connected in parallel with each other across a $12\\,\\text{V}$ DC supply. Diode $D_1$ is in series with a resistor $R_1 = 2\\,\\Omega$ with its anode connected to the positive terminal of the supply. Diode $D_2$ is in series with a resistor $R_2 = 4\\,\\Omega$ with its cathode connected to the positive terminal of the supply. A load resistor $R_L = 4\\,\\Omega$ is connected in series with this parallel branch. The current drawn from the $12\\,\\text{V}$ supply is:',
    options: [
      '$2.0\\,\\text{A}$',
      '$1.5\\,\\text{A}$',
      '$3.0\\,\\text{A}$',
      '$1.2\\,\\text{A}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Determine the biasing state of each diode**
- The supply has its positive terminal connected to the anode of $D_1$ and cathode of $D_2$.
- **Diode $D_1$**: Anode at higher potential $\\implies$ **Forward Biased**. For an ideal diode, it acts as a short circuit (zero resistance, $R_{D1} = 0$).
- **Diode $D_2$**: Cathode at higher potential $\\implies$ **Reverse Biased**. For an ideal diode, it acts as an open circuit (infinite resistance, zero current flows through this branch).

**Step 2: Equivalent resistance of the circuit**
Since branch 2 (with $D_2$ and $R_2$) is an open circuit, no current passes through it.
Current flows only through branch 1 and the load resistor $R_L$:
$$R_{\\text{eq}} = R_1 + R_L = 2\\,\\Omega + 4\\,\\Omega = 6\\,\\Omega$$

**Step 3: Calculate current drawn from supply**
$$I = \\frac{V}{R_{\\text{eq}}} = \\frac{12\\,\\text{V}}{6\\,\\Omega} = 2.0\\,\\text{A}$$

Hence, the current drawn is $2.0\\,\\text{A}$.`,
    hints: [
      'An ideal diode in forward bias behaves as a closed switch (short circuit).',
      'In reverse bias, an ideal diode behaves as an open switch, blocking all current through its branch.'
    ]
  },
  {
    id: 'phy-semi-pyq-4',
    subject: 'physics',
    topicId: 'phy-semi-4-rectifiers-filters',
    chapterId: 'phy-c12-semiconductors',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: 'A full-wave center-tapped rectifier circuit is supplied from an AC mains voltage of frequency $50\\,\\text{Hz}$. What is the fundamental ripple frequency of the output voltage across the load resistor?',
    options: [
      '$100\\,\\text{Hz}$',
      '$50\\,\\text{Hz}$',
      '$25\\,\\text{Hz}$',
      '$200\\,\\text{Hz}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Working of full-wave rectifier**
In a full-wave rectifier, both halves of the input AC cycle are conducted through the load in the same direction:
- During the positive half cycle, diode $D_1$ conducts.
- During the negative half cycle, diode $D_2$ conducts.

**Step 2: Frequency of output pulses**
For every single cycle of the input AC wave (period $T_{\\text{in}}$), the output voltage across the load resistor has two identical rectified pulses.
Therefore, the period of the output ripple waveform is:
$$T_{\\text{out}} = \\frac{T_{\\text{in}}}{2}$$

The fundamental ripple frequency is:
$$f_{\\text{ripple}} = \\frac{1}{T_{\\text{out}}} = 2 f_{\\text{in}}$$

**Step 3: Substitute $f_{\\text{in}} = 50\\,\\text{Hz}$**
$$f_{\\text{ripple}} = 2 \\times 50\\,\\text{Hz} = 100\\,\\text{Hz}$$

*(Note: For a half-wave rectifier, only one pulse appears per cycle, so its ripple frequency would be $50\\,\\text{Hz}$.)*

Hence, the fundamental ripple frequency is $100\\,\\text{Hz}$.`,
    hints: [
      'In a full-wave rectifier, both half cycles are rectified, producing 2 output pulses per AC period.',
      'Therefore, output ripple frequency is double the input frequency: $f_{\\text{ripple}} = 2 f_{\\text{in}}$.'
    ]
  },
  {
    id: 'phy-semi-pyq-5',
    subject: 'physics',
    topicId: 'phy-semi-5-optoelectronic-devices',
    chapterId: 'phy-c12-semiconductors',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Advanced',
    year: 2022,
    text: 'A semiconductor Light Emitting Diode (LED) emits red light of peak wavelength $\\lambda = 620\\,\\text{nm}$. The energy band gap $E_g$ of the semiconductor material from which this LED is fabricated is approximately ($h = 6.63 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}, \\; c = 3 \\times 10^8\\,\\text{m/s}, \\; 1\\,\\text{eV} = 1.6 \\times 10^{-19}\\,\\text{J}$):',
    options: [
      '$2.0\\,\\text{eV}$',
      '$1.5\\,\\text{eV}$',
      '$2.5\\,\\text{eV}$',
      '$3.0\\,\\text{eV}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for photon emission from LED**
In an LED operated under forward bias, electrons from the conduction band recombine with holes in the valence band. The energy released is emitted as a photon whose energy corresponds to the band gap $E_g$:
$$E_g = h\\nu = \\frac{hc}{\\lambda}$$

**Step 2: Calculate $E_g$ using standard constant product**
A very useful standard value for $hc$ in electron-volts is:
$$hc \\approx 1240\\,\\text{eV}\\cdot\\text{nm} \\quad (\\text{or } 1242\\,\\text{eV}\\cdot\\text{nm})$$

Substitute $\\lambda = 620\\,\\text{nm}$:
$$E_g = \\frac{1240\\,\\text{eV}\\cdot\\text{nm}}{620\\,\\text{nm}} = 2.0\\,\\text{eV}$$

**Verification via SI units:**
$$E_g = \\frac{(6.63 \\times 10^{-34}) \\times (3 \\times 10^8)}{620 \\times 10^{-9}} = \\frac{1.989 \\times 10^{-25}}{6.2 \\times 10^{-7}} = 3.208 \\times 10^{-19}\\,\\text{J}$$
In electron-volts:
$$E_g = \\frac{3.208 \\times 10^{-19}\\,\\text{J}}{1.6 \\times 10^{-19}\\,\\text{J/eV}} = 2.005\\,\\text{eV} \\approx 2.0\\,\\text{eV}$$

Hence, the band gap is $2.0\\,\\text{eV}$.`,
    hints: [
      'The energy of the emitted photon equals the band gap: $E_g = hc / \\lambda$.',
      'Use the shortcut $hc \\approx 1240\\,\\text{eV}\\cdot\\text{nm}$.'
    ]
  },
  {
    id: 'phy-semi-pyq-6',
    subject: 'physics',
    topicId: 'phy-semi-5-optoelectronic-devices',
    chapterId: 'phy-c12-semiconductors',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: 'A photodiode is used to measure optical signal intensity. Why is a photodiode preferably operated under reverse bias rather than forward bias?',
    options: [
      'The fractional change in minority carrier current upon illumination is far easier to measure than in majority carrier current.',
      'Under reverse bias, the depletion layer becomes narrower, enhancing charge collection.',
      'The barrier potential disappears under reverse bias.',
      'Forward bias damages the semiconductor crystal structure permanently.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand minority vs majority carrier populations**
In a p-n junction:
- Forward current is dominated by **majority carriers** ($n_e$ in n-side, $n_h$ in p-side), which have very large concentrations (e.g. $\\sim 10^{22}\\,\\text{m}^{-3}$).
- Reverse current is dominated by **minority carriers** ($n_h$ in n-side, $n_e$ in p-side), which have very small concentrations (e.g. $\\sim 10^9\\,\\text{m}^{-3}$).

**Step 2: Fractional change upon light illumination**
When light with $h\\nu > E_g$ shines on the junction, equal numbers of additional electrons and holes are generated ($\Delta n = \Delta p$):
- In **forward bias**:
  $$\\text{Fractional change} = \\frac{\\Delta n}{n_e} \\ll 1 \\quad (\\text{virtually undetectable against huge background})$$
- In **reverse bias**:
  $$\\text{Fractional change} = \\frac{\\Delta p}{n_h} \\gg 1 \\quad (\\text{huge and easily measured, e.g. current can increase by 1000\\%})$$

Therefore, the photodiode can detect changes in light intensity with high sensitivity and accuracy strictly in reverse bias.`,
    hints: [
      'Under reverse bias, dark current is tiny because it is carried by minority carriers.',
      'The fractional change $(\\Delta I / I)$ upon optical generation is substantially larger in reverse bias.'
    ]
  }
];
