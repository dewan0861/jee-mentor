import { Question } from '@/types';

export const conicSectionsQuestions: Question[] = [
  {
    id: 'math-conic-pyq-1',
    subject: 'mathematics',
    topicId: 'math-conic-1-parabola',
    chapterId: 'math-c11-conic-sections',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `If the line $y = mx + 4$ is a common tangent to the parabola $y^2 = 4x$ and the ellipse $\\frac{x^2}{2} + \\frac{y^2}{b} = 1$ ($b > 0$), then the value of $b$ is:`,
    options: [
      '$\\frac{127}{8}$',
      '$\\frac{63}{4}$',
      '$\\frac{31}{2}$',
      '$16$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the condition of tangency for the parabola $y^2 = 4x$**
For the standard parabola $y^2 = 4ax$, $4a = 4 \\implies a = 1$.
The equation of any tangent with slope $m$ is:
$$y = mx + \\frac{a}{m} = mx + \\frac{1}{m}$$

We are given that the line is $y = mx + 4$. Comparing constant terms:
$$\\frac{1}{m} = 4 \\implies m = \\frac{1}{4}$$

**Step 2: Use the condition of tangency for the ellipse $\\frac{x^2}{2} + \\frac{y^2}{b} = 1$**
For the ellipse $\\frac{x^2}{a_e^2} + \\frac{y^2}{b_e^2} = 1$, we have $a_e^2 = 2$ and $b_e^2 = b$.
The condition for the line $y = mx + c$ to be a tangent is:
$$c^2 = a_e^2 m^2 + b_e^2$$

**Step 3: Substitute $c = 4$, $m = \\frac{1}{4}$, and $a_e^2 = 2$**
$$4^2 = 2\\left(\\frac{1}{4}\\right)^2 + b$$
$$16 = 2\\left(\\frac{1}{16}\\right) + b$$
$$16 = \\frac{1}{8} + b$$
$$b = 16 - \\frac{1}{8} = \\frac{128 - 1}{8} = \\frac{127}{8}$$`,
    hints: [
      'For $y^2 = 4ax$, the tangent with slope $m$ is $y = mx + a/m$. Equate $a/m = 4$ to determine $m$.',
      'For $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, apply the tangency condition $c^2 = a^2 m^2 + b^2$.'
    ]
  },
  {
    id: 'math-conic-pyq-2',
    subject: 'mathematics',
    topicId: 'math-conic-1-parabola',
    chapterId: 'math-c11-conic-sections',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `If a focal chord of the parabola $y^2 = 16x$ makes an angle of $60^\\circ$ with the positive $x$-axis, then the length of this focal chord is:`,
    options: [
      '$\\frac{64}{3}$',
      '$\\frac{32}{3}$',
      '$\\frac{16}{3}$',
      '$16$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify the parameter $a$ of the parabola**
Given $y^2 = 16x$:
$$4a = 16 \\implies a = 4$$

**Step 2: Use the standard length of a focal chord inclined at angle $\\alpha$**
The length of a focal chord of the parabola $y^2 = 4ax$ making an angle $\\alpha$ with the axis of the parabola (the $x$-axis) is given by:
$$L = \\frac{4a}{\\sin^2\\alpha}$$

**Step 3: Substitute $a = 4$ and $\\alpha = 60^\\circ$**
$$\\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\implies \\sin^2 60^\\circ = \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4}$$
$$L = \\frac{4(4)}{\\frac{3}{4}} = \\frac{16}{\\frac{3}{4}} = \\frac{16 \\times 4}{3} = \\frac{64}{3}$$`,
    hints: [
      'Recall that the length of a focal chord inclined at angle $\\alpha$ to the axis of the parabola $y^2 = 4ax$ is $L = \\frac{4a}{\\sin^2\\alpha}$.',
      'Substitute $a = 4$ and $\\alpha = 60^\\circ$.'
    ]
  },
  {
    id: 'math-conic-pyq-3',
    subject: 'mathematics',
    topicId: 'math-conic-2-ellipse',
    chapterId: 'math-c11-conic-sections',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `If the distance between the foci of an ellipse is equal to the length of its latus rectum, then the eccentricity $e$ of the ellipse is:`,
    options: [
      '$\\frac{\\sqrt{5} - 1}{2}$',
      '$\\frac{\\sqrt{5} + 1}{2}$',
      '$\\frac{\\sqrt{3} - 1}{2}$',
      '$\\frac{1}{2}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Set up the given geometric condition**
For an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$):
- Distance between foci $= 2ae$
- Length of latus rectum $= \\frac{2b^2}{a}$

Given that they are equal:
$$2ae = \\frac{2b^2}{a} \\implies ae = \\frac{b^2}{a} \\implies a^2 e = b^2$$

**Step 2: Use the standard relation $b^2 = a^2(1 - e^2)$**
$$a^2 e = a^2(1 - e^2)$$
Since $a^2 \\ne 0$:
$$e = 1 - e^2$$
$$e^2 + e - 1 = 0$$

**Step 3: Solve for eccentricity $e$**
By the quadratic formula:
$$e = \\frac{-1 \\pm \\sqrt{1^2 - 4(1)(-1)}}{2} = \\frac{-1 \\pm \\sqrt{5}}{2}$$

Since eccentricity of an ellipse must be strictly positive and less than 1 ($0 < e < 1$), we take the positive root:
$$e = \\frac{\\sqrt{5} - 1}{2}$$`,
    hints: [
      'Equate distance between foci ($2ae$) to length of latus rectum ($2b^2/a$).',
      'Substitute $b^2 = a^2(1 - e^2)$ and solve the resulting quadratic in $e$.'
    ]
  },
  {
    id: 'math-conic-pyq-4',
    subject: 'mathematics',
    topicId: 'math-conic-1-parabola',
    chapterId: 'math-c11-conic-sections',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The equation of a common tangent to the circle $x^2 + y^2 = 2$ and the parabola $y^2 = 8x$ with positive slope is:`,
    options: [
      '$x - y + 2 = 0$',
      '$x - y - 2 = 0$',
      '$2x - y + 1 = 0$',
      '$x + y + 2 = 0$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write the equation of a tangent to the parabola $y^2 = 8x$**
For the parabola $y^2 = 4ax$, here $4a = 8 \\implies a = 2$.
The equation of any tangent with slope $m > 0$ is:
$$y = mx + \\frac{a}{m} = mx + \\frac{2}{m} \\implies mx - y + \\frac{2}{m} = 0$$

**Step 2: Apply the tangency condition to the circle $x^2 + y^2 = 2$**
The circle has center $(0, 0)$ and radius $r = \\sqrt{2}$.
The perpendicular distance from the center $(0, 0)$ to the tangent line must equal the radius $r$:
$$d = \\frac{\\left|m(0) - (0) + \\frac{2}{m}\\right|}{\\sqrt{m^2 + (-1)^2}} = \\sqrt{2}$$
$$\\frac{2/m}{\\sqrt{m^2 + 1}} = \\sqrt{2}$$

**Step 3: Solve for the slope $m$**
Squaring both sides:
$$\\frac{4}{m^2(m^2 + 1)} = 2$$
$$m^2(m^2 + 1) = 2$$
$$m^4 + m^2 - 2 = 0$$
$$(m^2 + 2)(m^2 - 1) = 0$$
Since $m^2 > 0$, we have $m^2 = 1 \\implies m = 1$ (given positive slope).

**Step 4: Form the equation of the common tangent**
Substitute $m = 1$ into $y = mx + \\frac{2}{m}$:
$$y = 1x + \\frac{2}{1} \\implies y = x + 2 \\implies x - y + 2 = 0$$`,
    hints: [
      'Write the tangent to the parabola $y^2 = 8x$ with slope $m$: $y = mx + 2/m$.',
      'Set the perpendicular distance from the center $(0, 0)$ to this line equal to the radius $\\sqrt{2}$.'
    ]
  },
  {
    id: 'math-conic-pyq-5',
    subject: 'mathematics',
    topicId: 'math-conic-3-hyperbola',
    chapterId: 'math-c11-conic-sections',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `If $e_1$ is the eccentricity of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ and $e_2$ is the eccentricity of its conjugate hyperbola $-\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, and $e_1 = \\sqrt{3}$, then the value of $e_2$ is:`,
    options: [
      '$\\sqrt{\\frac{3}{2}}$',
      '$\\sqrt{3}$',
      '$\\frac{\\sqrt{3}}{2}$',
      '$\\sqrt{2}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Recall the standard relationship between eccentricities of conjugate hyperbolas**
For any hyperbola and its conjugate hyperbola:
$$\\frac{1}{e_1^2} + \\frac{1}{e_2^2} = 1$$

**Step 2: Proof of the identity**
For $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$:
$$e_1^2 = 1 + \\frac{b^2}{a^2} = \\frac{a^2 + b^2}{a^2} \\implies \\frac{1}{e_1^2} = \\frac{a^2}{a^2 + b^2}$$

For conjugate hyperbola $\\frac{y^2}{b^2} - \\frac{x^2}{a^2} = 1$:
$$e_2^2 = 1 + \\frac{a^2}{b^2} = \\frac{a^2 + b^2}{b^2} \\implies \\frac{1}{e_2^2} = \\frac{b^2}{a^2 + b^2}$$

Adding both:
$$\\frac{1}{e_1^2} + \\frac{1}{e_2^2} = \\frac{a^2 + b^2}{a^2 + b^2} = 1$$

**Step 3: Substitute $e_1 = \\sqrt{3}$**
$$\\frac{1}{(\\sqrt{3})^2} + \\frac{1}{e_2^2} = 1$$
$$\\frac{1}{3} + \\frac{1}{e_2^2} = 1 \\implies \\frac{1}{e_2^2} = 1 - \\frac{1}{3} = \\frac{2}{3}$$
$$e_2^2 = \\frac{3}{2} \\implies e_2 = \\sqrt{\\frac{3}{2}}$$`,
    hints: [
      'Use the fundamental relationship between a hyperbola and its conjugate: $\\frac{1}{e_1^2} + \\frac{1}{e_2^2} = 1$.',
      'Substitute $e_1 = \\sqrt{3}$ to solve for $e_2$.'
    ]
  },
  {
    id: 'math-conic-pyq-6',
    subject: 'mathematics',
    topicId: 'math-conic-3-hyperbola',
    chapterId: 'math-c11-conic-sections',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `The locus of the point of intersection of two perpendicular tangents to the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ is:`,
    options: [
      '$x^2 + y^2 = 7$',
      '$x^2 + y^2 = 25$',
      '$x^2 + y^2 = 9$',
      '$x^2 - y^2 = 7$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the definition of a director circle**
The locus of the point of intersection of two mutually perpendicular tangents to any conic is called its **Director Circle**.

**Step 2: Equation of the director circle of a hyperbola**
For the standard hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the equation of the director circle is:
$$x^2 + y^2 = a^2 - b^2$$
(Note that the director circle is real if $a > b$, a point circle at origin if $a = b$, and imaginary if $a < b$).

**Step 3: Substitute $a^2 = 16$ and $b^2 = 9$**
Here $a^2 = 16$ and $b^2 = 9$.
Since $a^2 > b^2$ ($16 > 9$), the director circle is real:
$$x^2 + y^2 = 16 - 9$$
$$x^2 + y^2 = 7$$`,
    hints: [
      'Recall that the locus of perpendicular tangents is the director circle.',
      'For a hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, the director circle is $x^2 + y^2 = a^2 - b^2$.'
    ]
  }
];
