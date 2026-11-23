import { Question } from '@/types';

export const waveOpticsQuestions: Question[] = [
  {
    id: 'phy-wo-pyq-1',
    subject: 'physics',
    topicId: 'phy-wo-4-ydse-slabs-mediums',
    chapterId: 'phy-c12-wave-optics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'In a Young\'s double slit experiment using monochromatic light of wavelength $\\lambda = 600\\,\\text{nm}$, a thin transparent sheet of refractive index $\\mu = 1.5$ and thickness $t = 1.2\\,\\mu\\text{m}$ is introduced in front of one of the slits. The number of fringes that shift across the central point of the screen is:',
    options: [
      '$1$',
      '$2$',
      '$3$',
      '$4$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for optical path difference introduced by a thin sheet**
When a transparent sheet of thickness $t$ and refractive index $\\mu$ is placed in the path of one interfering beam, the extra optical path introduced is:
$$\\Delta x = (\\mu - 1)t$$

**Step 2: Number of fringes shifted**
Each shift of one full fringe corresponds to an optical path difference of one wavelength $\\lambda$. Therefore, the total number of fringes shifted is:
$$N = \\frac{\\Delta x}{\\lambda} = \\frac{(\\mu - 1)t}{\\lambda}$$

**Step 3: Substitute the numerical values**
Given:
- $\\mu = 1.5$
- $t = 1.2\\,\\mu\\text{m} = 1.2 \\times 10^{-6}\\,\\text{m}$
- $\\lambda = 600\\,\\text{nm} = 600 \\times 10^{-9}\\,\\text{m} = 6 \\times 10^{-7}\\,\\text{m}$

Calculate $(\\mu - 1)t$:
$$(\\mu - 1)t = (1.5 - 1) \\times (1.2 \\times 10^{-6}) = 0.5 \\times 1.2 \\times 10^{-6} = 0.6 \\times 10^{-6}\\,\\text{m} = 6 \\times 10^{-7}\\,\\text{m}$$

Now find $N$:
$$N = \\frac{6 \\times 10^{-7}\\,\\text{m}}{6 \\times 10^{-7}\\,\\text{m}} = 1$$

Hence, exactly $1$ fringe shifts across the center of the screen.`,
    hints: [
      'The optical path difference introduced by a transparent plate is $\\Delta x = (\\mu - 1)t$.',
      'The number of fringes shifted is $N = \\frac{(\\mu - 1)t}{\\lambda}$.'
    ]
  },
  {
    id: 'phy-wo-pyq-2',
    subject: 'physics',
    topicId: 'phy-wo-2-interference-coherence',
    chapterId: 'phy-c12-wave-optics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'In a Young\'s double slit experiment, two identical slits each produce intensity $I_0$ at the screen. Let $I_1$ be the intensity at a point on the screen where the path difference is $\\frac{\\lambda}{4}$, and $I_2$ be the intensity where the path difference is $\\frac{\\lambda}{3}$. The ratio $\\frac{I_1}{I_2}$ is:',
    options: [
      '$2$',
      '$\\frac{1}{2}$',
      '$\\sqrt{2}$',
      '$\\frac{3}{2}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for resultant intensity in terms of phase difference**
When two coherent waves of equal intensity $I_0$ interfere, the resultant intensity is:
$$I = 4I_0 \\cos^2\\left(\\frac{\\phi}{2}\\right)$$
where phase difference is $\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.

**Step 2: Calculate $I_1$ for path difference $\\Delta x_1 = \\frac{\\lambda}{4}$**
$$\\phi_1 = \\frac{2\\pi}{\\lambda} \\left(\\frac{\\lambda}{4}\\right) = \\frac{\\pi}{2}$$
$$I_1 = 4I_0 \\cos^2\\left(\\frac{\\pi/2}{2}\\right) = 4I_0 \\cos^2\\left(\\frac{\\pi}{4}\\right) = 4I_0 \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = 4I_0 \\times \\frac{1}{2} = 2I_0$$

**Step 3: Calculate $I_2$ for path difference $\\Delta x_2 = \\frac{\\lambda}{3}$**
$$\\phi_2 = \\frac{2\\pi}{\\lambda} \\left(\\frac{\\lambda}{3}\\right) = \\frac{2\\pi}{3}$$
$$I_2 = 4I_0 \\cos^2\\left(\\frac{2\\pi/3}{2}\\right) = 4I_0 \\cos^2\\left(\\frac{\\pi}{3}\\right) = 4I_0 \\left(\\frac{1}{2}\\right)^2 = 4I_0 \\times \\frac{1}{4} = I_0$$

**Step 4: Find the ratio $\\frac{I_1}{I_2}$**
$$\\frac{I_1}{I_2} = \\frac{2I_0}{I_0} = 2$$

Hence, the ratio $\\frac{I_1}{I_2}$ is $2$.`,
    hints: [
      'Phase difference is $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x$.',
      'Resultant intensity for two identical slits is $I = 4I_0 \\cos^2(\\phi/2)$.'
    ]
  },
  {
    id: 'phy-wo-pyq-3',
    subject: 'physics',
    topicId: 'phy-wo-5-single-slit-diffraction',
    chapterId: 'phy-c12-wave-optics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Advanced',
    year: 2021,
    text: 'A parallel beam of monochromatic light of wavelength $\\lambda = 600\\,\\text{nm}$ is incident normally on a single slit of width $a = 0.2\\,\\text{mm}$. The diffraction pattern is observed on a screen placed at a distance $D = 2.0\\,\\text{m}$ from the slit. The linear distance between the first minimum and the third minimum on the same side of the central maximum is:',
    options: [
      '$12\\,\\text{mm}$',
      '$6\\,\\text{mm}$',
      '$18\\,\\text{mm}$',
      '$24\\,\\text{mm}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Condition for minima in single slit Fraunhofer diffraction**
The positions of dark fringes (minima) on the screen measured from the center are given by:
$$a \\sin\\theta_n = n \\lambda \\implies y_n = n \\frac{\\lambda D}{a} \\quad (n = 1, 2, 3, \\dots)$$

**Step 2: Position of 1st and 3rd minima on the same side**
For $n = 1$:
$$y_1 = 1 \\times \\frac{\\lambda D}{a}$$
For $n = 3$:
$$y_3 = 3 \\times \\frac{\\lambda D}{a}$$

The linear separation between them is:
$$\\Delta y = y_3 - y_1 = (3 - 1) \\frac{\\lambda D}{a} = 2 \\frac{\\lambda D}{a}$$

**Step 3: Substitute the numerical values**
Given:
- $\\lambda = 600\\,\\text{nm} = 6 \\times 10^{-7}\\,\\text{m}$
- $D = 2.0\\,\\text{m}$
- $a = 0.2\\,\\text{mm} = 2 \\times 10^{-4}\\,\\text{m}$

$$\\Delta y = 2 \\times \\frac{(6 \\times 10^{-7}) \\times 2.0}{2 \\times 10^{-4}} = 2 \\times \\frac{12 \\times 10^{-7}}{2 \\times 10^{-4}} = 1.2 \\times 10^{-2}\\,\\text{m} = 12\\,\\text{mm}$$

Hence, the separation is $12\\,\\text{mm}$.`,
    hints: [
      'In single slit diffraction, minima occur at $y_n = n \\frac{\\lambda D}{a}$.',
      'The separation between 1st and 3rd minima is $\\Delta y = (3 - 1)\\frac{\\lambda D}{a} = 2\\frac{\\lambda D}{a}$.'
    ]
  },
  {
    id: 'phy-wo-pyq-4',
    subject: 'physics',
    topicId: 'phy-wo-2-interference-coherence',
    chapterId: 'phy-c12-wave-optics',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    text: 'In an interference experiment, the ratio of intensities of the two interfering coherent sources is $\\frac{I_1}{I_2} = \\frac{16}{9}$. The ratio of the maximum intensity to the minimum intensity in the interference pattern is:',
    options: [
      '$49 : 1$',
      '$7 : 1$',
      '$25 : 1$',
      '$16 : 9$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Relation between amplitudes and intensities**
$$I \\propto A^2 \\implies \\frac{A_1}{A_2} = \\sqrt{\\frac{I_1}{I_2}} = \\sqrt{\\frac{16}{9}} = \\frac{4}{3}$$
Let $A_1 = 4k$ and $A_2 = 3k$.

**Step 2: Formula for maximum and minimum intensity**
$$I_{\\text{max}} = (A_1 + A_2)^2 = (4k + 3k)^2 = (7k)^2 = 49k^2$$
$$I_{\\text{min}} = (A_1 - A_2)^2 = (4k - 3k)^2 = (1k)^2 = 1k^2$$

**Step 3: Calculate the ratio**
$$\\frac{I_{\\text{max}}}{I_{\\text{min}}} = \\frac{49k^2}{1k^2} = \\frac{49}{1} = 49 : 1$$

Hence, the ratio of maximum to minimum intensity is $49 : 1$.`,
    hints: [
      'Find the amplitude ratio first: $A_1/A_2 = \\sqrt{I_1/I_2} = 4/3$.',
      'Then $I_{\\text{max}}/I_{\\text{min}} = ((A_1 + A_2)/(A_1 - A_2))^2$.'
    ]
  },
  {
    id: 'phy-wo-pyq-5',
    subject: 'physics',
    topicId: 'phy-wo-5-single-slit-diffraction',
    chapterId: 'phy-c12-wave-optics',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    text: 'In a double-slit experiment, the width of the central diffraction peak of each slit contains exactly $10$ complete interference fringes of the double-slit pattern. If the slit separation is $d = 1.0\\,\\text{mm}$, the width $a$ of each individual slit is:',
    options: [
      '$0.2\\,\\text{mm}$',
      '$0.1\\,\\text{mm}$',
      '$0.05\\,\\text{mm}$',
      '$0.4\\,\\text{mm}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Angular width of central diffraction maximum**
For a slit of width $a$, the first diffraction minima occur at $\\sin\\theta = \\pm \\frac{\\lambda}{a}$.
Thus, the total angular width of the central maximum is:
$$2\\theta_0 = \\frac{2\\lambda}{a}$$

**Step 2: Angular width of one double-slit interference fringe**
The angular fringe width of the double slit pattern with slit separation $d$ is:
$$\\beta_\\theta = \\frac{\\lambda}{d}$$

**Step 3: Relate the two widths to find $a$**
Given that the central diffraction maximum contains $N = 10$ interference fringes:
$$2\\theta_0 = N \\times \\beta_\\theta$$
$$\\frac{2\\lambda}{a} = 10 \\times \\frac{\\lambda}{d}$$
$$\\frac{2}{a} = \\frac{10}{d} \\implies a = \\frac{2d}{10} = \\frac{d}{5}$$

**Step 4: Substitute $d = 1.0\\,\\text{mm}$**
$$a = \\frac{1.0\\,\\text{mm}}{5} = 0.2\\,\\text{mm}$$

Hence, the slit width is $0.2\\,\\text{mm}$.`,
    hints: [
      'The width of the central diffraction peak is $2\\lambda / a$.',
      'The angular spacing of interference fringes is $\\lambda / d$. Equate $2\\lambda / a = 10 (\\lambda / d)$.'
    ]
  },
  {
    id: 'phy-wo-pyq-6',
    subject: 'physics',
    topicId: 'phy-wo-3-ydse-geometry-fringes',
    chapterId: 'phy-c12-wave-optics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'In a Young\'s double slit experiment, fringe width on a screen is measured to be $\\beta = 0.4\\,\\text{mm}$. If the entire experimental setup is completely immersed in water of refractive index $\\mu = \\frac{4}{3}$, the new fringe width $\\beta\'$ will be:',
    options: [
      '$0.3\\,\\text{mm}$',
      '$0.4\\,\\text{mm}$',
      '$0.53\\,\\text{mm}$',
      '$0.12\\,\\text{mm}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Wavelength change in medium**
When light propagates into an optical medium of refractive index $\\mu$, its frequency remains unchanged while its speed and wavelength decrease:
$$\\lambda\' = \\frac{\\lambda}{\\mu}$$

**Step 2: Fringe width variation**
In air:
$$\\beta = \\frac{\\lambda D}{d}$$
In water:
$$\\beta\' = \\frac{\\lambda\' D}{d} = \\frac{(\\lambda/\\mu) D}{d} = \\frac{\\beta}{\\mu}$$

**Step 3: Calculate new fringe width**
Given:
- $\\beta = 0.4\\,\\text{mm}$
- $\\mu = 4/3$

$$\\beta\' = \\frac{0.4}{4/3} = 0.4 \\times \\frac{3}{4} = 0.3\\,\\text{mm}$$

Hence, the new fringe width is $0.3\\,\\text{mm}$.`,
    hints: [
      'In a medium of refractive index $\\mu$, wavelength decreases to $\\lambda / \\mu$.',
      'Since fringe width is proportional to wavelength, $\\beta\' = \\beta / \\mu$.'
    ]
  }
];
