import { Question } from '@/types';

export const acQuestions: Question[] = [
  {
    id: 'phy-ac-pyq-1',
    subject: 'physics',
    topicId: 'phy-ac-4-resonance-sharpness-q',
    chapterId: 'phy-c12-ac',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'A series $LCR$ circuit contains a resistor $R = 10\\,\\Omega$, an inductor $L = 50\\,\\text{mH}$, and a capacitor $C = 20\\,\\mu\\text{F}$ connected across an AC voltage source of $V = 220\\,\\text{V}$ (RMS) with variable frequency. At the condition of electrical resonance, the quality factor $Q$ of the circuit and the RMS current $I_{\\text{rms}}$ flowing through the circuit are respectively:',
    options: [
      '$Q = 5, \\; I_{\\text{rms}} = 22\\,\\text{A}$',
      '$Q = 2.5, \\; I_{\\text{rms}} = 11\\,\\text{A}$',
      '$Q = 50, \\; I_{\\text{rms}} = 22\\,\\text{A}$',
      '$Q = 10, \\; I_{\\text{rms}} = 4.4\\,\\text{A}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for Quality factor ($Q$) of a series LCR circuit**
$$Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$$

**Step 2: Substitute the given circuit parameters**
Given:
- $R = 10\\,\\Omega$
- $L = 50\\,\\text{mH} = 50 \\times 10^{-3}\\,\\text{H} = 5 \\times 10^{-2}\\,\\text{H}$
- $C = 20\\,\\mu\\text{F} = 20 \\times 10^{-6}\\,\\text{F} = 2 \\times 10^{-5}\\,\\text{F}$

Calculate the ratio $\\frac{L}{C}$:
$$\\frac{L}{C} = \\frac{5 \\times 10^{-2}}{2 \\times 10^{-5}} = 2.5 \\times 10^3 = 2500$$

Taking the square root:
$$\\sqrt{\\frac{L}{C}} = \\sqrt{2500} = 50\\,\\Omega$$

Now calculate $Q$:
$$Q = \\frac{1}{10} \\times 50 = 5$$

**Step 3: Calculate current at resonance**
At resonance, inductive reactance equals capacitive reactance ($X_L = X_C$), so the impedance is purely resistive:
$$Z_{\\text{res}} = R = 10\\,\\Omega$$

Therefore, the RMS current at resonance is:
$$I_{\\text{rms}} = \\frac{V_{\\text{rms}}}{Z_{\\text{res}}} = \\frac{220\\,\\text{V}}{10\\,\\Omega} = 22\\,\\text{A}$$

Hence, $Q = 5$ and $I_{\\text{rms}} = 22\\,\\text{A}$.`,
    hints: [
      'At resonance, $X_L = X_C$ so the total impedance simplifies strictly to $Z = R$.',
      'The quality factor in terms of circuit components is $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.'
    ]
  },
  {
    id: 'phy-ac-pyq-2',
    subject: 'physics',
    topicId: 'phy-ac-5-power-powerfactor-wattless',
    chapterId: 'phy-c12-ac',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'In a series $LCR$ circuit, $R = 100\\,\\Omega$, $X_L = 200\\,\\Omega$, and $X_C = 100\\,\\Omega$. The circuit is connected to an alternating source of voltage $V_{\\text{rms}} = 200\\,\\text{V}$. The power factor of the circuit and the wattless component of current are respectively:',
    options: [
      '$\\cos\\phi = \\frac{1}{\\sqrt{2}}, \\; I_{\\text{wattless}} = 1\\,\\text{A}$',
      '$\\cos\\phi = \\frac{1}{2}, \\; I_{\\text{wattless}} = \\sqrt{3}\\,\\text{A}$',
      '$\\cos\\phi = \\frac{\\sqrt{3}}{2}, \\; I_{\\text{wattless}} = 0.5\\,\\text{A}$',
      '$\\cos\\phi = 1, \\; I_{\\text{wattless}} = 0\\,\\text{A}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate total impedance ($Z$)**
$$Z = \\sqrt{R^2 + (X_L - X_C)^2}$$
Given:
- $R = 100\\,\\Omega$
- $X_L = 200\\,\\Omega$
- $X_C = 100\\,\\Omega$
$$X_L - X_C = 200 - 100 = 100\\,\\Omega$$
$$Z = \\sqrt{100^2 + 100^2} = 100\\sqrt{2}\\,\\Omega$$

**Step 2: Find the power factor ($\\cos\\phi$)**
$$\\cos\\phi = \\frac{R}{Z} = \\frac{100}{100\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$$
Since $\\cos\\phi = \\frac{1}{\\sqrt{2}}$, the phase angle is $\\phi = 45^\\circ$, and $\\sin\\phi = \\frac{1}{\\sqrt{2}}$.

**Step 3: Calculate RMS current and wattless current**
Total RMS current:
$$I_{\\text{rms}} = \\frac{V_{\\text{rms}}}{Z} = \\frac{200}{100\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}\\,\\text{A}$$

The wattless component of current is:
$$I_{\\text{wattless}} = I_{\\text{rms}} \\sin\\phi = \\sqrt{2} \\times \\frac{1}{\\sqrt{2}} = 1\\,\\text{A}$$

Thus, $\\cos\\phi = \\frac{1}{\\sqrt{2}}$ and $I_{\\text{wattless}} = 1\\,\\text{A}$.`,
    hints: [
      'The wattless component of current is perpendicular to voltage, given by $I_{\\text{wattless}} = I_{\\text{rms}} \\sin\\phi$.',
      'Power factor is the ratio $\\cos\\phi = R/Z$.'
    ]
  },
  {
    id: 'phy-ac-pyq-3',
    subject: 'physics',
    topicId: 'phy-ac-4-resonance-sharpness-q',
    chapterId: 'phy-c12-ac',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: 'A series $LCR$ circuit with $L = 0.1\\,\\text{H}$, $C = 10\\,\\mu\\text{F}$, and $R = 10\\,\\Omega$ is driven by a sinusoidal AC source of RMS voltage $V_0 = 10\\,\\text{V}$ operating at the circuit\'s resonant angular frequency $\\omega_0$. At resonance, the RMS voltage across the inductor $V_L$ and the capacitor $V_C$ are:',
    options: [
      '$V_L = V_C = 100\\,\\text{V}$',
      '$V_L = V_C = 10\\,\\text{V}$',
      '$V_L = V_C = 50\\,\\text{V}$',
      '$V_L = V_C = 1000\\,\\text{V}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate the resonant frequency $\\omega_0$**
$$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{0.1 \\times 10 \\times 10^{-6}}} = \\frac{1}{\\sqrt{10^{-6}}} = 10^3\\,\\text{rad/s} = 1000\\,\\text{rad/s}$$

**Step 2: Calculate the inductive and capacitive reactances at resonance**
$$X_L = \\omega_0 L = 1000 \\times 0.1 = 100\\,\\Omega$$
$$X_C = \\frac{1}{\\omega_0 C} = \\frac{1}{1000 \\times 10^{-5}} = 100\\,\\Omega$$

**Step 3: Calculate current at resonance**
At resonance, total impedance is purely resistive: $Z = R = 10\\,\\Omega$.
$$I_{\\text{rms}} = \\frac{V_{\\text{source}}}{R} = \\frac{10\\,\\text{V}}{10\\,\\Omega} = 1\\,\\text{A}$$

**Step 4: Find voltages across $L$ and $C$**
$$V_L = I_{\\text{rms}} X_L = 1\\,\\text{A} \\times 100\\,\\Omega = 100\\,\\text{V}$$
$$V_C = I_{\\text{rms}} X_C = 1\\,\\text{A} \\times 100\\,\\Omega = 100\\,\\text{V}$$

Notice that $V_L = V_C = Q \\times V_{\\text{source}} = 10 \\times 10 = 100\\,\\text{V}$.
Although the source provides only $10\\,\\text{V}$, the individual voltages across $L$ and $C$ are each $100\\,\\text{V}$! They are $180^\\circ$ out of phase with each other, so their phasor sum cancels out ($V_L + V_C = 0$), leaving the net voltage across the series combination equal to $V_R = 10\\,\\text{V}$.`,
    hints: [
      'At resonance, $V_L = Q \\times V_{\\text{source}}$. Calculate $Q$ or multiply current by reactance $X_L$.',
      'The voltages across $L$ and $C$ are $180^\\circ$ out of phase, so they cancel completely across the pair.'
    ]
  },
  {
    id: 'phy-ac-pyq-4',
    subject: 'physics',
    topicId: 'phy-ac-6-lc-oscillations',
    chapterId: 'phy-c12-ac',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'An ideal $LC$ oscillation circuit consists of a capacitor $C$ fully charged with charge $Q_0$ and an inductor $L$. The switch is closed at $t = 0$. The minimum time $t$ after closing the switch when the electrical energy stored in the capacitor equals the magnetic energy stored in the inductor is ($T$ is the total time period of oscillation):',
    options: [
      '$\\frac{T}{8}$',
      '$\\frac{T}{4}$',
      '$\\frac{T}{6}$',
      '$\\frac{T}{2}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Total energy in an LC circuit**
The total energy is conserved and equal to the initial electrostatic energy of the capacitor:
$$U_{\\text{total}} = \\frac{Q_0^2}{2C}$$

**Step 2: Condition for equal energy partition**
When the electrical energy $U_E$ equals the magnetic energy $U_B$:
$$U_E = U_B = \\frac{1}{2} U_{\\text{total}} = \\frac{Q_0^2}{4C}$$

Since $U_E = \\frac{q(t)^2}{2C}$, we have:
$$\\frac{q(t)^2}{2C} = \\frac{Q_0^2}{4C} \\implies q(t) = \\frac{Q_0}{\\sqrt{2}}$$

**Step 3: Solve for time $t$**
The charge on the capacitor oscillates as:
$$q(t) = Q_0 \\cos(\\omega t)$$
Setting $q(t) = \\frac{Q_0}{\\sqrt{2}}$:
$$\\cos(\\omega t) = \\frac{1}{\\sqrt{2}} \\implies \\omega t = \\frac{\\pi}{4}$$

Since the angular frequency is $\\omega = \\frac{2\\pi}{T}$:
$$\\left(\\frac{2\\pi}{T}\\right) t = \\frac{\\pi}{4} \\implies t = \\frac{T}{8}$$

Hence, the minimum time is $T/8$.`,
    hints: [
      'When energies are equal, each holds half of the total energy: $U_E = \\frac{1}{2}U_{\\text{total}}$.',
      'This means $q^2 / (2C) = Q_0^2 / (4C) \\implies q = Q_0 / \\sqrt{2}$.'
    ]
  },
  {
    id: 'phy-ac-pyq-5',
    subject: 'physics',
    topicId: 'phy-ac-4-resonance-sharpness-q',
    chapterId: 'phy-c12-ac',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: 'A series $LCR$ circuit has $L = 2.0\\,\\text{H}$, $C = 32\\,\\mu\\text{F}$, and $R = 10\\,\\Omega$. What is the bandwidth $\\Delta \\omega$ of the resonance curve?',
    options: [
      '$5\\,\\text{rad/s}$',
      '$10\\,\\text{rad/s}$',
      '$2.5\\,\\text{rad/s}$',
      '$20\\,\\text{rad/s}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for resonance bandwidth**
The bandwidth of a series $LCR$ circuit is defined as the frequency interval between the two half-power frequencies:
$$\\Delta \\omega = \\omega_2 - \\omega_1 = \\frac{R}{L}$$

**Step 2: Calculate $\\Delta \\omega$ directly**
Given:
- $R = 10\\,\\Omega$
- $L = 2.0\\,\\text{H}$
- $C = 32\\,\\mu\\text{F}$ (not needed for bandwidth $\\Delta \\omega$)

$$\\Delta \\omega = \\frac{R}{L} = \\frac{10}{2.0} = 5\\,\\text{rad/s}$$

*(Note: The resonant frequency would be $\\omega_0 = 1/\\sqrt{LC} = 1/\\sqrt{2 \\times 32 \\times 10^{-6}} = 1/\\sqrt{64 \\times 10^{-6}} = 1000/8 = 125\\,\\text{rad/s}$, so $Q = \\omega_0 / \\Delta \\omega = 125/5 = 25$.)*

Hence, the bandwidth is $5\\,\\text{rad/s}$.`,
    hints: [
      'Bandwidth of a series LCR circuit depends only on resistance and inductance: $\\Delta \\omega = R/L$.',
      'The value of capacitance $C$ determines the center resonant frequency $\\omega_0$, not the bandwidth width.'
    ]
  },
  {
    id: 'phy-ac-pyq-6',
    subject: 'physics',
    topicId: 'phy-ac-7-transformers',
    chapterId: 'phy-c12-ac',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'A step-down transformer transforms a supply voltage of $220\\,\\text{V}$ to $22\\,\\text{V}$. The primary coil draws a current of $5\\,\\text{A}$ from the main line. If the efficiency of the transformer is $90\\%$, the current in the secondary coil is:',
    options: [
      '$45\\,\\text{A}$',
      '$50\\,\\text{A}$',
      '$40\\,\\text{A}$',
      '$55\\,\\text{A}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Efficiency definition of a transformer**
$$\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} = \\frac{V_s I_s}{V_p I_p}$$
(assuming resistive loads where power factors equal 1).

**Step 2: Substitute given parameters**
Given:
- $V_p = 220\\,\\text{V}$
- $I_p = 5\\,\\text{A}$
- $V_s = 22\\,\\text{V}$
- $\\eta = 90\\% = 0.90$

Input power:
$$P_{\\text{in}} = V_p I_p = 220\\,\\text{V} \\times 5\\,\\text{A} = 1100\\,\\text{W}$$

Output power:
$$P_{\\text{out}} = \\eta \\times P_{\\text{in}} = 0.90 \\times 1100\\,\\text{W} = 990\\,\\text{W}$$

**Step 3: Solve for secondary current $I_s$**
$$P_{\\text{out}} = V_s I_s \\implies 990 = 22 \\times I_s$$
$$I_s = \\frac{990}{22} = 45\\,\\text{A}$$

Hence, the current in the secondary coil is $45\\,\\text{A}$.`,
    hints: [
      'Transformer efficiency equation: $P_{\\text{out}} = \\eta P_{\\text{in}}$.',
      'First calculate input power $V_p I_p$, multiply by efficiency 0.90, then divide by $V_s$.'
    ]
  }
];
