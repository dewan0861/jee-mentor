import { Question } from '@/types';

export const inverseTrigFunctionsQuestions: Question[] = [
  {
    id: 'math-itf-pyq-1',
    subject: 'mathematics',
    topicId: 'math-itf-2-graphs-piecewise-self-composition',
    chapterId: 'math-c12-inverse-trig-functions',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `The principal value of $\\sin^{-1}(\\sin 10)$ (where the angle $10$ is measured in radians) is equal to:`,
    options: [
      '$3\\pi - 10$',
      '$10 - 3\\pi$',
      '$10 - 2\\pi$',
      '$4\\pi - 10$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Locate $10$ radians relative to multiples of $\\pi$**
Recall that $\\pi \\approx 3.14159$:
- $3\\pi \\approx 3 \\times 3.14159 = 9.42477$
- $4\\pi \\approx 12.56637$
- $\\frac{\\pi}{2} \\approx 1.57079$

Notice that $10$ is closest to $3\\pi$:
$$10 - 3\\pi \\approx 10 - 9.42477 = 0.57523$$
This difference $0.57523$ lies well within the principal value interval $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] \\approx [-1.57, 1.57]$.

**Step 2: Use trigonometric reduction**
$$\\sin(3\\pi - 10) = \\sin(10 - 3\\pi + 3\\pi) = \\sin(\\pi - (10 - 2\\pi)) = \\sin(10)$$
Formally:
$$\\sin(3\\pi - 10) = \\sin(\\pi - 10) = \\sin(10)$$
Since $3\\pi - 10 \\approx -0.575 \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$:
$$\\sin^{-1}(\\sin 10) = \\sin^{-1}(\\sin(3\\pi - 10)) = 3\\pi - 10$$`,
    hints: [
      'Approximate $\\pi \\approx 3.1416$. Which multiple of $\\pi$ is closest to $10$?',
      'Check whether $3\\pi - 10$ falls inside the principal value range $[-\\pi/2, \\pi/2]$.'
    ]
  },
  {
    id: 'math-itf-pyq-2',
    subject: 'mathematics',
    topicId: 'math-itf-3-identities-series-equations',
    chapterId: 'math-c12-inverse-trig-functions',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The sum of the infinite series $\\sum_{k=1}^\\infty \\tan^{-1}\\left( \\frac{1}{1 + k + k^2} \\right)$ is:`,
    options: [
      '$\\frac{\\pi}{4}$',
      '$\\frac{\\pi}{2}$',
      '$\\frac{\\pi}{3}$',
      '$\\frac{3\\pi}{4}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Rewrite the argument to match the tangent difference formula**
Recall the difference formula:
$$\\tan^{-1} A - \\tan^{-1} B = \\tan^{-1}\\left(\\frac{A - B}{1 + AB}\\right)$$

Examine the argument:
$$\\frac{1}{1 + k + k^2} = \\frac{1}{1 + k(k + 1)}$$
Notice that the numerator $1 = (k + 1) - k$:
$$\\frac{1}{1 + k(k + 1)} = \\frac{(k + 1) - k}{1 + (k + 1)k}$$

**Step 2: Decompose each term telescopically**
$$\\tan^{-1}\\left( \\frac{1}{1 + k + k^2} \\right) = \\tan^{-1}(k + 1) - \\tan^{-1}(k)$$

**Step 3: Sum the series from $k = 1$ to $n$**
$$S_n = \\sum_{k=1}^n [\\tan^{-1}(k + 1) - \\tan^{-1}(k)]$$
$$= [\\tan^{-1} 2 - \\tan^{-1} 1] + [\\tan^{-1} 3 - \\tan^{-1} 2] + \\dots + [\\tan^{-1}(n + 1) - \\tan^{-1} n]$$
$$= \\tan^{-1}(n + 1) - \\tan^{-1} 1$$

**Step 4: Take the limit as $n \\to \\infty$**
$$S_\\infty = \\lim_{n \\to \\infty} [\\tan^{-1}(n + 1) - \\tan^{-1} 1] = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$$`,
    hints: [
      'Write the numerator $1$ as $(k + 1) - k$.',
      'Use $\\tan^{-1}\\left(\\frac{A - B}{1 + AB}\\right) = \\tan^{-1} A - \\tan^{-1} B$ to telescope the sum.'
    ]
  },
  {
    id: 'math-itf-pyq-3',
    subject: 'mathematics',
    topicId: 'math-itf-1-domain-range-principal-values',
    chapterId: 'math-c12-inverse-trig-functions',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `If $\\sin^{-1} x + \\sin^{-1} y + \\sin^{-1} z = \\frac{3\\pi}{2}$, then the value of $x^{100} + y^{100} + z^{100} - \\frac{9}{x^{101} + y^{101} + z^{101}}$ is:`,
    options: [
      '$0$',
      '$1$',
      '$3$',
      '$-1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the maximum value of the inverse sine function**
For any $u \\in [-1, 1]$:
$$-\\frac{\\pi}{2} \\le \\sin^{-1} u \\le \\frac{\\pi}{2}$$
The maximum possible value of $\\sin^{-1} u$ is $\\frac{\\pi}{2}$, attained if and only if $u = 1$.

**Step 2: Deduce the values of $x, y, z$**
The given equation is:
$$\\sin^{-1} x + \\sin^{-1} y + \\sin^{-1} z = \\frac{3\\pi}{2}$$
Since the maximum possible value of each term is $\\frac{\\pi}{2}$ and the sum of three terms is $3 \\times \\frac{\\pi}{2} = \\frac{3\\pi}{2}$, each individual term must reach its absolute maximum:
$$\\sin^{-1} x = \\frac{\\pi}{2} \\implies x = 1$$
$$\\sin^{-1} y = \\frac{\\pi}{2} \\implies y = 1$$
$$\\sin^{-1} z = \\frac{\\pi}{2} \\implies z = 1$$

**Step 3: Evaluate the required algebraic expression**
$$x^{100} + y^{100} + z^{100} - \\frac{9}{x^{101} + y^{101} + z^{101}}$$
$$= 1^{100} + 1^{100} + 1^{100} - \\frac{9}{1^{101} + 1^{101} + 1^{101}}$$
$$= (1 + 1 + 1) - \\frac{9}{1 + 1 + 1} = 3 - \\frac{9}{3} = 3 - 3 = 0$$`,
    hints: [
      'What is the maximum value of $\\sin^{-1} u$ for real $u$?',
      'Since the sum of three terms is $3\\pi/2$, each term must achieve its maximum value $\\pi/2$.'
    ]
  },
  {
    id: 'math-itf-pyq-4',
    subject: 'mathematics',
    topicId: 'math-itf-3-identities-series-equations',
    chapterId: 'math-c12-inverse-trig-functions',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The value of $\\tan\\left( 2\\tan^{-1}\\left(\\frac{1}{5}\\right) - \\frac{\\pi}{4} \\right)$ is:`,
    options: [
      '$-\\frac{7}{17}$',
      '$\\frac{7}{17}$',
      '$-\\frac{17}{7}$',
      '$\\frac{5}{12}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Compute $2\\tan^{-1}(1/5)$**
Using the double angle identity $2\\tan^{-1} x = \\tan^{-1}\\left(\\frac{2x}{1 - x^2}\\right)$ for $|x| < 1$:
$$2\\tan^{-1}\\left(\\frac{1}{5}\\right) = \\tan^{-1}\\left( \\frac{2 \\times \\frac{1}{5}}{1 - \\left(\\frac{1}{5}\\right)^2} \\right) = \\tan^{-1}\\left( \\frac{\\frac{2}{5}}{\\frac{24}{25}} \\right) = \\tan^{-1}\\left( \\frac{2}{5} \\times \\frac{25}{24} \\right) = \\tan^{-1}\\left(\\frac{5}{12}\\right)$$

Let $\\theta = 2\\tan^{-1}(1/5) = \\tan^{-1}(5/12) \\implies \\tan\\theta = \\frac{5}{12}$.

**Step 2: Apply the tangent subtraction formula**
We want to evaluate:
$$\\tan\\left(\\theta - \\frac{\\pi}{4}\\right) = \\frac{\\tan\\theta - \\tan(\\pi/4)}{1 + \\tan\\theta \\tan(\\pi/4)}$$
Since $\\tan(\\pi/4) = 1$:
$$= \\frac{\\frac{5}{12} - 1}{1 + \\frac{5}{12}(1)} = \\frac{-\\frac{7}{12}}{\\frac{17}{12}} = -\\frac{7}{17}$$`,
    hints: [
      'Use $2\\tan^{-1}(x) = \\tan^{-1}\\left(\\frac{2x}{1 - x^2}\\right)$ to find $\\tan(2\\tan^{-1}(1/5)) = 5/12$.',
      'Apply $\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$.'
    ]
  },
  {
    id: 'math-itf-pyq-5',
    subject: 'mathematics',
    topicId: 'math-itf-3-identities-series-equations',
    chapterId: 'math-c12-inverse-trig-functions',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `The real solution to the equation $\\cos^{-1} x - \\sin^{-1} x = 0$ is:`,
    options: [
      '$\\frac{1}{\\sqrt{2}}$',
      '$\\frac{\\sqrt{3}}{2}$',
      '$\\frac{1}{2}$',
      '$0$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the co-function identity**
Recall that for any $x \\in [-1, 1]$:
$$\\cos^{-1} x + \\sin^{-1} x = \\frac{\\pi}{2} \\implies \\cos^{-1} x = \\frac{\\pi}{2} - \\sin^{-1} x$$

**Step 2: Substitute into the given equation**
$$\\left(\\frac{\\pi}{2} - \\sin^{-1} x\\right) - \\sin^{-1} x = 0$$
$$\\frac{\\pi}{2} - 2\\sin^{-1} x = 0$$
$$2\\sin^{-1} x = \\frac{\\pi}{2} \\implies \\sin^{-1} x = \\frac{\\pi}{4}$$

**Step 3: Solve for $x$**
$$x = \\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}}$$`,
    hints: [
      'Use $\\cos^{-1} x + \\sin^{-1} x = \\pi/2$.',
      'Substitute to get a simple equation in $\\sin^{-1} x$.'
    ]
  },
  {
    id: 'math-itf-pyq-6',
    subject: 'mathematics',
    topicId: 'math-itf-3-identities-series-equations',
    chapterId: 'math-c12-inverse-trig-functions',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `The value of the infinite sum $S = \\sum_{n=1}^\\infty \\tan^{-1}\\left(\\frac{2}{n^2}\\right)$ is:`,
    options: [
      '$\\frac{3\\pi}{4}$',
      '$\\frac{\\pi}{2}$',
      '$\\pi$',
      '$\\frac{5\\pi}{4}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Transform the argument into a difference form**
Notice that:
$$\\frac{2}{n^2} = \\frac{2}{1 + (n^2 - 1)} = \\frac{2}{1 + (n - 1)(n + 1)}$$
Notice that the difference between the factors in the denominator is:
$$(n + 1) - (n - 1) = 2$$
Therefore:
$$\\tan^{-1}\\left(\\frac{2}{n^2}\\right) = \\tan^{-1}\\left( \\frac{(n + 1) - (n - 1)}{1 + (n + 1)(n - 1)} \\right)$$

**Step 2: Decompose each term**
$$\\tan^{-1}\\left(\\frac{2}{n^2}\\right) = \\tan^{-1}(n + 1) - \\tan^{-1}(n - 1)$$

**Step 3: Sum from $n = 1$ to $N$**
Write out the first few terms:
- For $n = 1$: $\\tan^{-1}(2) - \\tan^{-1}(0)$
- For $n = 2$: $\\tan^{-1}(3) - \\tan^{-1}(1)$
- For $n = 3$: $\\tan^{-1}(4) - \\tan^{-1}(2)$
- For $n = 4$: $\\tan^{-1}(5) - \\tan^{-1}(3)$
...
- For $n = N - 1$: $\\tan^{-1}(N) - \\tan^{-1}(N - 2)$
- For $n = N$: $\\tan^{-1}(N + 1) - \\tan^{-1}(N - 1)$

**Step 4: Cancel telescoping terms**
Notice that each term $\\tan^{-1}(k)$ for $k \\ge 2$ cancels out.
The surviving negative terms are:
$$-\\tan^{-1}(0) - \\tan^{-1}(1) = 0 - \\frac{\\pi}{4} = -\\frac{\\pi}{4}$$
The surviving positive terms as $N \\to \\infty$ are:
$$\\lim_{N \\to \\infty} [\\tan^{-1}(N) + \\tan^{-1}(N + 1)] = \\frac{\\pi}{2} + \\frac{\\pi}{2} = \\pi$$

**Step 5: Compute the net sum**
$$S = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$$`,
    hints: [
      'Rewrite $\\frac{2}{n^2} = \\frac{(n + 1) - (n - 1)}{1 + (n + 1)(n - 1)}$.',
      'Telescope the sum and identify the two initial terms and two asymptotic terms that survive.'
    ]
  }
];
