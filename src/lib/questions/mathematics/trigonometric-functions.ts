import { Question } from '@/types';

export const trigonometricFunctionsQuestions: Question[] = [
  {
    id: 'math-trig-pyq-1',
    subject: 'mathematics',
    topicId: 'math-trig-2-conditional-series',
    chapterId: 'math-c11-trigonometric-functions',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `The value of the product $\\cos\\left(\\frac{2\\pi}{7}\\right) \\cos\\left(\\frac{4\\pi}{7}\\right) \\cos\\left(\\frac{8\\pi}{7}\\right)$ is equal to:`,
    options: [
      '$\\frac{1}{8}$',
      '$-\\frac{1}{8}$',
      '$\\frac{1}{4}$',
      '$-\\frac{1}{4}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the cosine product formula**
We know the identity:
$$\\cos\\theta \\cos 2\\theta \\cos 4\\theta \\dots \\cos(2^{n-1}\\theta) = \\frac{\\sin(2^n \\theta)}{2^n \\sin\\theta}$$

Here, $\\theta = \\frac{2\\pi}{7}$ and $n = 3$:
$$\\cos\\left(\\frac{2\\pi}{7}\\right) \\cos\\left(\\frac{4\\pi}{7}\\right) \\cos\\left(\\frac{8\\pi}{7}\\right) = \\frac{\\sin\\left(2^3 \\cdot \\frac{2\\pi}{7}\\right)}{2^3 \\sin\\left(\\frac{2\\pi}{7}\\right)} = \\frac{\\sin\\left(\\frac{16\\pi}{7}\\right)}{8 \\sin\\left(\\frac{2\\pi}{7}\\right)}$$

**Step 2: Simplify the numerator**
Note that $\\frac{16\\pi}{7} = 2\\pi + \\frac{2\\pi}{7}$:
$$\\sin\\left(\\frac{16\\pi}{7}\\right) = \\sin\\left(2\\pi + \\frac{2\\pi}{7}\\right) = \\sin\\left(\\frac{2\\pi}{7}\\right)$$

**Step 3: Evaluate the expression**
$$\\frac{\\sin\\left(\\frac{2\\pi}{7}\\right)}{8 \\sin\\left(\\frac{2\\pi}{7}\\right)} = \\frac{1}{8}$$`,
    hints: [
      'Recall the identity $\\cos\\theta \\cos 2\\theta \\dots \\cos(2^{n-1}\\theta) = \\frac{\\sin(2^n \\theta)}{2^n \\sin\\theta}$.',
      'Express $\\frac{16\\pi}{7}$ as $2\\pi + \\frac{2\\pi}{7}$.'
    ]
  },
  {
    id: 'math-trig-pyq-2',
    subject: 'mathematics',
    topicId: 'math-trig-3-equations-general-solutions',
    chapterId: 'math-c11-trigonometric-functions',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `The number of solutions of the trigonometric equation $2\\sin^2 x + 3\\sin x - 2 = 0$ in the interval $[0, 2\\pi]$ is:`,
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: 1,
    solution: `**Step 1: Factor the quadratic equation in $\\sin x$**
Let $u = \\sin x$. Then:
$$2u^2 + 3u - 2 = 0$$
$$2u^2 + 4u - u - 2 = 0$$
$$2u(u + 2) - 1(u + 2) = 0$$
$$(2u - 1)(u + 2) = 0$$

Thus:
$$u = \\sin x = \\frac{1}{2} \\quad \\text{or} \\quad u = \\sin x = -2$$

**Step 2: Analyze valid solutions**
Since $-1 \\le \\sin x \\le 1$ for all real $x$, $\\sin x = -2$ has no real solution.
For $\\sin x = \\frac{1}{2}$ in $[0, 2\\pi]$:
Sine is positive in Quadrants I and II:
$$x = \\frac{\\pi}{6} \\quad \\text{and} \\quad x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$$

Thus, there are exactly 2 solutions in $[0, 2\\pi]$.`,
    hints: [
      'Treat the equation as a quadratic in $u = \\sin x$.',
      'Discard roots outside the range $[-1, 1]$.'
    ]
  },
  {
    id: 'math-trig-pyq-3',
    subject: 'mathematics',
    topicId: 'math-trig-1-compound-multiple-angles',
    chapterId: 'math-c11-trigonometric-functions',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `The range of the function $f(x) = 3\\sin x + 4\\cos x + 5$ for all $x \\in \\mathbb{R}$ is:`,
    options: [
      '$[0, 10]$',
      '$[-5, 5]$',
      '$[1, 9]$',
      '$[2, 8]$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the standard range of $a\\sin x + b\\cos x$**
For any real numbers $a$ and $b$:
$$-\\sqrt{a^2 + b^2} \\le a\\sin x + b\\cos x \\le \\sqrt{a^2 + b^2}$$

Here $a = 3$ and $b = 4$:
$$\\sqrt{a^2 + b^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

Therefore:
$$-5 \\le 3\\sin x + 4\\cos x \\le 5$$

**Step 2: Add 5 to all parts of the inequality**
$$-5 + 5 \\le 3\\sin x + 4\\cos x + 5 \\le 5 + 5$$
$$0 \\le f(x) \\le 10$$

Thus, the range of $f(x)$ is $[0, 10]$.`,
    hints: [
      'Recall that $a\\sin x + b\\cos x \\in [-\\sqrt{a^2 + b^2}, \\sqrt{a^2 + b^2}]$.',
      'Add the constant term 5 to both extrema.'
    ]
  },
  {
    id: 'math-trig-pyq-4',
    subject: 'mathematics',
    topicId: 'math-trig-1-compound-multiple-angles',
    chapterId: 'math-c11-trigonometric-functions',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The value of $\\cos 20^\\circ \\cos 40^\\circ \\cos 60^\\circ \\cos 80^\\circ$ is:`,
    options: [
      '$\\frac{1}{16}$',
      '$\\frac{1}{8}$',
      '$\\frac{1}{32}$',
      '$\\frac{\\sqrt{3}}{16}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Separate the known value $\\cos 60^\\circ$**
Since $\\cos 60^\\circ = \\frac{1}{2}$:
$$\\cos 20^\\circ \\cos 40^\\circ \\cos 60^\\circ \\cos 80^\\circ = \\frac{1}{2} \\left( \\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ \\right)$$

**Step 2: Use the identity $\\cos\\theta \\cos(60^\\circ - \\theta) \\cos(60^\\circ + \\theta) = \\frac{1}{4}\\cos 3\\theta$**
Let $\\theta = 20^\\circ$:
- $60^\\circ - \\theta = 40^\\circ$
- $60^\\circ + \\theta = 80^\\circ$

Then:
$$\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ = \\frac{1}{4} \\cos(3 \\times 20^\\circ) = \\frac{1}{4} \\cos 60^\\circ = \\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}$$

**Step 3: Calculate the full product**
$$\\frac{1}{2} \\times \\frac{1}{8} = \\frac{1}{16}$$`,
    hints: [
      'Substitute $\\cos 60^\\circ = 1/2$.',
      'Use the standard identity $\\cos\\theta \\cos(60^\\circ - \\theta) \\cos(60^\\circ + \\theta) = \\frac{1}{4}\\cos 3\\theta$.'
    ]
  },
  {
    id: 'math-trig-pyq-5',
    subject: 'mathematics',
    topicId: 'math-trig-3-equations-general-solutions',
    chapterId: 'math-c11-trigonometric-functions',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `The sum of all solutions of the equation $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$ in the interval $[0, 4\\pi]$ is:`,
    options: [
      '$\\frac{26\\pi}{3}$',
      '$\\frac{20\\pi}{3}$',
      '$\\frac{14\\pi}{3}$',
      '$8\\pi$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Convert to single sinusoidal form**
Divide the equation $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$ by $\\sqrt{(\\sqrt{3})^2 + 1^2} = 2$:
$$\\frac{\\sqrt{3}}{2}\\cos x + \\frac{1}{2}\\sin x = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$$
$$\\cos\\left(x - \\frac{\\pi}{6}\\right) = \\cos\\left(\\frac{\\pi}{4}\\right)$$

**Step 2: Find the general solutions**
$$x - \\frac{\\pi}{6} = 2n\\pi \\pm \\frac{\\pi}{4} \\implies x = 2n\\pi + \\frac{\\pi}{6} \\pm \\frac{\\pi}{4}$$

Case 1: $x = 2n\\pi + \\frac{\\pi}{6} + \\frac{\\pi}{4} = 2n\\pi + \\frac{5\\pi}{12}$
- For $n = 0$: $x_1 = \\frac{5\\pi}{12}$
- For $n = 1$: $x_2 = 2\\pi + \\frac{5\\pi}{12} = \\frac{29\\pi}{12}$

Case 2: $x = 2n\\pi + \\frac{\\pi}{6} - \\frac{\\pi}{4} = 2n\\pi - \\frac{\\pi}{12}$
- For $n = 1$: $x_3 = 2\\pi - \\frac{\\pi}{12} = \\frac{23\\pi}{12}$
- For $n = 2$: $x_4 = 4\\pi - \\frac{\\pi}{12} = \\frac{47\\pi}{12}$

All four values $x_1, x_2, x_3, x_4$ lie strictly within the interval $[0, 4\\pi]$.

**Step 3: Sum the four solutions**
$$\\sum x = \\frac{5\\pi}{12} + \\frac{29\\pi}{12} + \\frac{23\\pi}{12} + \\frac{47\\pi}{12} = \\frac{104\\pi}{12} = \\frac{26\\pi}{3}$$`,
    hints: [
      'Divide the equation by 2 to write it in the form $\\cos(x - \\pi/6) = \\cos(\\pi/4)$.',
      'Identify all four roots that fall strictly inside $[0, 4\\pi]$ and sum them.'
    ]
  },
  {
    id: 'math-trig-pyq-6',
    subject: 'mathematics',
    topicId: 'math-trig-1-compound-multiple-angles',
    chapterId: 'math-c11-trigonometric-functions',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `The minimum value of the expression $f(x) = \\sin^6 x + \\cos^6 x$ for all $x \\in \\mathbb{R}$ is:`,
    options: [
      '$\\frac{1}{4}$',
      '$\\frac{1}{2}$',
      '$\\frac{3}{4}$',
      '$1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Express $\\sin^6 x + \\cos^6 x$ using algebraic identities**
Recall $a^3 + b^3 = (a + b)(a^2 - ab + b^2) = (a + b)[(a + b)^2 - 3ab]$.
Let $a = \\sin^2 x$ and $b = \\cos^2 x$:
$$a + b = \\sin^2 x + \\cos^2 x = 1$$
$$ab = \\sin^2 x \\cos^2 x = \\frac{1}{4}(2\\sin x \\cos x)^2 = \\frac{1}{4}\\sin^2 2x$$

Then:
$$\\sin^6 x + \\cos^6 x = (1)[(1)^2 - 3(\\sin^2 x \\cos^2 x)] = 1 - \\frac{3}{4}\\sin^2 2x$$

**Step 2: Determine the extrema of $1 - \\frac{3}{4}\\sin^2 2x$**
Since $0 \\le \\sin^2 2x \\le 1$:
- When $\\sin^2 2x = 0$ (e.g. $x = 0$):
  $$f_{\\text{max}} = 1 - \\frac{3}{4}(0) = 1$$
- When $\\sin^2 2x = 1$ (e.g. $x = \\frac{\\pi}{4}$):
  $$f_{\\text{min}} = 1 - \\frac{3}{4}(1) = \\frac{1}{4}$$

Thus, the minimum value is $\\frac{1}{4}$.`,
    hints: [
      'Use the identity $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$ with $a = \\sin^2 x$ and $b = \\cos^2 x$.',
      'Express the result in terms of $\\sin^2 2x$ and use its bound $0 \\le \\sin^2 2x \\le 1$.'
    ]
  }
];
