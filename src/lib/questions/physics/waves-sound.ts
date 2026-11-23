import { Question } from '@/types';

export const wavesSoundQuestions: Question[] = [
  {
    id: 'pyq-phy-wav-01',
    subject: 'physics',
    chapterId: 'phy-c11-waves-sound',
    topicId: 'phy-wav-8-end-correction-resonance-tube',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 29 Shift 1',
    questionText: 'In a resonance air column tube apparatus operated with a tuning fork of frequency $\\nu = 512\\text{ Hz}$, the first resonance occurs at a water column length of $l_1 = 15.0\\text{ cm}$ and the second resonance occurs at $l_2 = 48.0\\text{ cm}$. What is the speed of sound in the laboratory air and the end correction of the resonance tube?',
    options: [
      '$v \\approx 338\\text{ m/s}, \\quad e = 1.5\\text{ cm}$',
      '$v \\approx 330\\text{ m/s}, \\quad e = 1.0\\text{ cm}$',
      '$v \\approx 345\\text{ m/s}, \\quad e = 2.0\\text{ cm}$',
      '$v \\approx 338\\text{ m/s}, \\quad e = 3.0\\text{ cm}$'
    ],
    correctAnswer: '0', // v approx 338 m/s, e = 1.5 cm
    explanation: '1. Resonance tube equations including end correction $e$:\n- For the first resonance (fundamental mode):\n$$l_1 + e = \\frac{\\lambda}{4}$$\n- For the second resonance (first overtone / 3rd harmonic):\n$$l_2 + e = \\frac{3\\lambda}{4}$$\n\n2. Subtracting the two equations to eliminate end correction $e$:\n$$(l_2 + e) - (l_1 + e) = \\frac{3\\lambda}{4} - \\frac{\\lambda}{4} = \\frac{\\lambda}{2}$$\n$$l_2 - l_1 = \\frac{\\lambda}{2} \\implies \\lambda = 2(l_2 - l_1)$$\nSubstitute $l_1 = 15.0\\text{ cm} = 0.150\\text{ m}$ and $l_2 = 48.0\\text{ cm} = 0.480\\text{ m}$:\n$$\\lambda = 2(48.0 - 15.0) = 2(33.0\\text{ cm}) = 66.0\\text{ cm} = 0.660\\text{ m}$$\n\n3. Calculating speed of sound $v$:\n$$v = \\nu \\lambda = 512\\text{ s}^{-1} \\times 0.660\\text{ m} = 337.92\\text{ m/s} \\approx 338\\text{ m/s}$$\n\n4. Calculating end correction $e$:\n$$e = \\frac{\\lambda}{4} - l_1 = \\frac{66.0}{4} - 15.0 = 16.5 - 15.0 = 1.5\\text{ cm}$$\n(Alternatively: $e = \\frac{l_2 - 3l_1}{2} = \\frac{48.0 - 3(15.0)}{2} = \\frac{48 - 45}{2} = 1.5\\text{ cm}$).',
    concepts: ['Resonance tube apparatus', 'Speed of sound determination', 'End correction calculation'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-wav-02',
    subject: 'physics',
    chapterId: 'phy-c11-waves-sound',
    topicId: 'phy-wav-7-organ-pipes-modes',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Jan 24 Shift 1',
    questionText: 'A closed organ pipe of length $L_c$ has its first overtone equal in frequency to the second overtone of an open organ pipe of length $L_o$. What is the ratio of their lengths $\\frac{L_c}{L_o}$?',
    options: [
      '$1 : 2 \\; (0.50)$',
      '$1 : 4$',
      '$3 : 4$',
      '$2 : 3$'
    ],
    correctAnswer: '0', // 1 : 2
    explanation: '1. Harmonic modes of a closed organ pipe:\n- Fundamental frequency (1st harmonic): $\\nu_1 = \\frac{v}{4 L_c}$.\n- First overtone is the 3rd harmonic ($n=3$):\n$$\\nu_{c,1} = \\frac{3 v}{4 L_c}$$\n\n2. Harmonic modes of an open organ pipe:\n- Fundamental frequency (1st harmonic): $\\nu_1 = \\frac{v}{2 L_o}$.\n- First overtone is the 2nd harmonic: $\\nu_2 = \\frac{2v}{2 L_o}$.\n- Second overtone is the 3rd harmonic ($n=3$):\n$$\\nu_{o,2} = \\frac{3 v}{2 L_o}$$\n\n3. Equating frequencies:\n$$\\nu_{c,1} = \\nu_{o,2} \\implies \\frac{3 v}{4 L_c} = \\frac{3 v}{2 L_o}$$\nCanceling common factor $3v$:\n$$\\frac{1}{4 L_c} = \\frac{1}{2 L_o} \\implies 4 L_c = 2 L_o \\implies \\frac{L_c}{L_o} = \\frac{2}{4} = \\frac{1}{2} = 0.50$$',
    concepts: ['Closed vs open organ pipes', 'Harmonics vs overtones', 'Acoustic standing waves'],
    estimatedTimeSec: 65,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-wav-03',
    subject: 'physics',
    chapterId: 'phy-c11-waves-sound',
    topicId: 'phy-wav-9-beats-tuning-forks',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2023,
    pyqShift: 'Apr 06 Shift 2',
    questionText: 'A standard tuning fork $A$ of known frequency $\\nu_A = 256\\text{ Hz}$ produces $4\\text{ beats/second}$ when sounded simultaneously with another tuning fork $B$. When the prongs of fork $B$ are loaded with a small amount of wax, the beat frequency decreases to $2\\text{ beats/second}$. What was the original frequency of tuning fork $B$ before loading?',
    options: [
      '$260\\text{ Hz}$',
      '$252\\text{ Hz}$',
      '$258\\text{ Hz}$',
      '$254\\text{ Hz}$'
    ],
    correctAnswer: '0', // 260 Hz
    explanation: '1. Possible initial frequencies of fork $B$:\n- The beat frequency is $f_{\\text{beat}} = |\\nu_B - \\nu_A| = 4\\text{ Hz}$.\n- Since $\\nu_A = 256\\text{ Hz}$, fork $B$ could be either:\n$$\\nu_B = 256 + 4 = 260\\text{ Hz} \\quad \\text{OR} \\quad \\nu_B = 256 - 4 = 252\\text{ Hz}$$\n\n2. Effect of loading a tuning fork with wax:\n- Adding wax increases the inertia (mass) of the prongs, which always DECREASES its oscillation frequency: $\\nu_B\' < \\nu_B$.\n\n3. Analyzing both possibilities:\n- Hypothesis 1: If original $\\nu_B = 260\\text{ Hz}$:\n  - Upon loading, its frequency drops slightly to, say, $258\\text{ Hz}$.\n  - New beat frequency: $|258 - 256| = 2\\text{ beats/s}$.\n  - This MATCHES the observation that the beat frequency decreased from 4 to 2!\n- Hypothesis 2: If original $\\nu_B = 252\\text{ Hz}$:\n  - Upon loading, its frequency drops further to, say, $250\\text{ Hz}$.\n  - New beat frequency: $|250 - 256| = 6\\text{ beats/s}$ (which would INCREASE, contradicting the observation).\n\n4. Conclusion:\n- The original frequency of tuning fork $B$ was unambiguously $260\\text{ Hz}$.',
    concepts: ['Phenomenon of beats', 'Tuning fork loading with wax', 'Frequency discrimination'],
    estimatedTimeSec: 60,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-wav-04',
    subject: 'physics',
    chapterId: 'phy-c11-waves-sound',
    topicId: 'phy-wav-2-string-wave-speed',
    type: 'single_mcq',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Apr 05 Shift 1',
    questionText: 'A heavy uniform flexible cable of length $L = 10\\text{ m}$ and mass $M = 2\\text{ kg}$ hangs vertically from a rigid ceiling under its own weight. A transverse wave pulse is generated at the lower free end of the cable. What is the time taken by the wave pulse to travel to the top fixed end? (Take $g = 10\\text{ m/s}^2$).',
    options: [
      '$2.0\\text{ seconds}$',
      '$1.0\\text{ second}$',
      '$1.41\\text{ seconds}$',
      '$4.0\\text{ seconds}$'
    ],
    correctAnswer: '0', // 2.0 seconds
    explanation: '1. Tension along a hanging rope under its own weight:\n- At distance $y$ from the bottom free end, the tension is equal to the weight of the segment below it:\n$$T(y) = \\mu g y$$\nwhere $\\mu = \\frac{M}{L}$ is the mass per unit length.\n\n2. Wave speed as a function of height $y$:\n$$v(y) = \\sqrt{\\frac{T(y)}{\\mu}} = \\sqrt{\\frac{\\mu g y}{\\mu}} = \\sqrt{g y}$$\n(Notice that the wave speed is completely independent of the mass of the rope!).\n\n3. Setting up the calculus integral for time $t$:\n$$v = \\frac{dy}{dt} = \\sqrt{g y} \\implies dt = \\frac{dy}{\\sqrt{g y}} = \\frac{1}{\\sqrt{g}} y^{-1/2} \\, dy$$\n$$\\int_0^t dt = \\frac{1}{\\sqrt{g}} \\int_0^L y^{-1/2} \\, dy$$\n$$t = \\frac{1}{\\sqrt{g}} \\left[ 2\\sqrt{y} \\right]_0^L = 2\\sqrt{\\frac{L}{g}}$$\n\n4. Substituting values ($L = 10\\text{ m}, g = 10\\text{ m/s}^2$):\n$$t = 2\\sqrt{\\frac{10}{10}} = 2\\sqrt{1} = 2.0\\text{ seconds}$$',
    concepts: ['Wave speed on heavy hanging rope', 'Calculus integration of wave velocity', 'Self-weight tension variation'],
    estimatedTimeSec: 75,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-wav-05',
    subject: 'physics',
    chapterId: 'phy-c11-waves-sound',
    topicId: 'phy-wav-4-intensity-decibels',
    type: 'single_mcq',
    difficulty: 'hard',
    pyqYear: 2022,
    pyqShift: 'JEE Advanced Paper 1',
    questionText: 'A single point-source speaker produces a sound level of $\\beta_1 = 90\\text{ dB}$ at a distance of $r_1 = 5\\text{ m}$. If $9$ identical speakers are now operated simultaneously and positioned at the same point, what is the sound level $\\beta_2$ at a distance of $r_2 = 15\\text{ m}$ from the speaker bank? (Assume spherical sound emission and negligible absorption).',
    options: [
      '$90\\text{ dB}$',
      '$99\\text{ dB}$',
      '$81\\text{ dB}$',
      '$93\\text{ dB}$'
    ],
    correctAnswer: '0', // 90 dB
    explanation: '1. Initial sound level $\\beta_1 = 90\\text{ dB}$ at $r_1 = 5\\text{ m}$ from 1 speaker:\n$$\\beta_1 = 10 \\log_{10}\\left(\\frac{I_1}{I_0}\\right) = 90\\text{ dB} \\implies \\log_{10}\\left(\\frac{I_1}{I_0}\\right) = 9 \\implies I_1 = 10^9 I_0$$\n\n2. Inverse square law for single speaker at new distance $r_2 = 15\\text{ m}$:\n- Intensity scales inversely with distance squared:\n$$I_{1,\\text{new}} = I_1 \\left(\\frac{r_1}{r_2}\\right)^2 = I_1 \\left(\\frac{5}{15}\\right)^2 = I_1 \\left(\\frac{1}{3}\\right)^2 = \\frac{I_1}{9}$$\n\n3. Combined intensity of $N = 9$ identical speakers:\n- Intensities of mutually incoherent sources add directly:\n$$I_{\\text{total}} = 9 \\times I_{1,\\text{new}} = 9 \\times \\left(\\frac{I_1}{9}\\right) = I_1 = 10^9 I_0$$\n\n4. Resultant sound level $\\beta_2$:\n$$\\beta_2 = 10 \\log_{10}\\left(\\frac{I_{\\text{total}}}{I_0}\\right) = 10 \\log_{10}\\left(\\frac{I_1}{I_0}\\right) = 90\\text{ dB}$$',
    concepts: ['Decibel sound level', 'Inverse square law for intensity', 'Superposition of incoherent sources'],
    estimatedTimeSec: 85,
    marks: 4,
    negativeMarks: 1
  },
  {
    id: 'pyq-phy-wav-06',
    subject: 'physics',
    chapterId: 'phy-c11-waves-sound',
    topicId: 'phy-wav-6-standing-waves-string',
    type: 'numerical',
    difficulty: 'medium',
    pyqYear: 2024,
    pyqShift: 'Jan 31 Shift 2',
    questionText: 'A string of length $L = 0.5\\text{ m}$ and linear mass density $\\mu = 4.0 \\times 10^{-3}\\text{ kg/m}$ is fixed at both ends and held under a tension of $T = 160\\text{ N}$. What is the frequency of its third harmonic in hertz ($\\text{Hz}$)?',
    options: [],
    correctAnswer: '600', // 600 Hz
    explanation: '1. Velocity of transverse waves on the stretched string:\n$$v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{160\\text{ N}}{4.0 \\times 10^{-3}\\text{ kg/m}}} = \\sqrt{40{,}000} = 200\\text{ m/s}$$\n\n2. Fundamental frequency ($n = 1$):\n$$\\nu_1 = \\frac{v}{2L} = \\frac{200\\text{ m/s}}{2 \\times 0.5\\text{ m}} = \\frac{200}{1.0} = 200\\text{ Hz}$$\n\n3. Frequency of the third harmonic ($n = 3$):\n$$\\nu_3 = 3 \\times \\nu_1 = 3 \\times 200\\text{ Hz} = 600\\text{ Hz}$$',
    concepts: ['Transverse wave velocity', 'String harmonics', 'Normal modes on fixed strings'],
    estimatedTimeSec: 50,
    marks: 4,
    negativeMarks: 0
  }
];
