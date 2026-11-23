import { Question } from '@/types';

export const sequencesSeriesQuestions: Question[] = [
  {
    id: 'math-seq-pyq-1',
    subject: 'mathematics',
    topicId: 'math-seq-2-agp-series',
    chapterId: 'math-c11-sequences-series',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `The sum to infinity of the arithmetico-geometric series $S = 1 + \\frac{2}{3} + \\frac{3}{3^2} + \\frac{4}{3^3} + \\frac{5}{3^4} + \\dots$ is:`,
    options: [
      '$\\frac{9}{4}$',
      '$\\frac{3}{2}$',
      '$\\frac{9}{2}$',
      '$\\frac{5}{4}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write down the series and multiply by the common ratio**
Given:
$$S = 1 + \\frac{2}{3} + \\frac{3}{3^2} + \\frac{4}{3^3} + \\dots \\quad \\text{--- (1)}$$

The common ratio of the geometric component is $r = \\frac{1}{3}$.
Multiply equation (1) by $\\frac{1}{3}$ and shift terms by one position:
$$\\frac{1}{3}S = \\frac{1}{3} + \\frac{2}{3^2} + \\frac{3}{3^3} + \\dots \\quad \\text{--- (2)}$$

**Step 2: Subtract equation (2) from equation (1)**
$$S - \\frac{1}{3}S = 1 + \\left(\\frac{2}{3} - \\frac{1}{3}\\right) + \\left(\\frac{3}{3^2} - \\frac{2}{3^2}\\right) + \\left(\\frac{4}{3^3} - \\frac{3}{3^3}\\right) + \\dots$$
$$\\frac{2}{3}S = 1 + \\frac{1}{3} + \\frac{1}{3^2} + \\frac{1}{3^3} + \\dots$$

**Step 3: Sum the resulting infinite geometric series**
The right side is an infinite GP with first term $a = 1$ and common ratio $r = \\frac{1}{3}$:
$$\\frac{2}{3}S = \\frac{1}{1 - \\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}$$

**Step 4: Solve for $S$**
$$S = \\frac{3}{2} \\times \\frac{3}{2} = \\frac{9}{4}$$`,
    hints: [
      'Identify this as an Arithmetico-Geometric Progression (AGP).',
      'Multiply the series by $r = 1/3$ and subtract: $S - \\frac{1}{3}S$.'
    ]
  },
  {
    id: 'math-seq-pyq-2',
    subject: 'mathematics',
    topicId: 'math-seq-1-ap-gp-means',
    chapterId: 'math-c11-sequences-series',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `If the ratio of the sum of $n$ terms of two arithmetic progressions is $\\frac{S_n}{S'_n} = \\frac{7n + 1}{4n + 27}$, then the ratio of their $11^{\\text{th}}$ terms $\\frac{T_{11}}{T'_{11}}$ is:`,
    options: [
      '$\\frac{4}{3}$',
      '$\\frac{3}{4}$',
      '$\\frac{7}{4}$',
      '$\\frac{5}{3}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Express the ratio of sums of $n$ terms**
Let the first AP have first term $a_1$ and common difference $d_1$, and the second AP have first term $a_2$ and common difference $d_2$.
$$\\frac{S_n}{S'_n} = \\frac{\\frac{n}{2}[2a_1 + (n - 1)d_1]}{\\frac{n}{2}[2a_2 + (n - 1)d_2]} = \\frac{2a_1 + (n - 1)d_1}{2a_2 + (n - 1)d_2} = \\frac{7n + 1}{4n + 27}$$
Divide numerator and denominator by 2:
$$\\frac{a_1 + \\left(\\frac{n - 1}{2}\\right)d_1}{a_2 + \\left(\\frac{n - 1}{2}\\right)d_2} = \\frac{7n + 1}{4n + 27}$$

**Step 2: Relate to the $11^{\\text{th}}$ term**
The $11^{\\text{th}}$ term of an AP is $T_{11} = a + 10d$.
Comparing the coefficients of $d$:
$$\\frac{n - 1}{2} = 10 \\implies n - 1 = 20 \\implies n = 21$$

**Step 3: Substitute $n = 21$ into the ratio**
$$\\frac{T_{11}}{T'_{11}} = \\frac{7(21) + 1}{4(21) + 27} = \\frac{147 + 1}{84 + 27} = \\frac{148}{111}$$

Dividing numerator and denominator by 37:
$$\\frac{148}{111} = \\frac{4 \\times 37}{3 \\times 37} = \\frac{4}{3}$$`,
    hints: [
      'Express the ratio of sums $S_n / S\'_n$ and compare with $T_m = a + (m - 1)d$.',
      'Use the shortcut: to find the ratio of $m$-th terms, replace $n$ with $2m - 1$. Here $2(11) - 1 = 21$.'
    ]
  },
  {
    id: 'math-seq-pyq-3',
    subject: 'mathematics',
    topicId: 'math-seq-3-special-sums-telescoping',
    chapterId: 'math-c11-sequences-series',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `The sum of the series $\\sum_{k=1}^{20} \\frac{1}{k(k+1)}$ is:`,
    options: [
      '$\\frac{20}{21}$',
      '$\\frac{19}{20}$',
      '$\\frac{21}{22}$',
      '$\\frac{1}{21}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Decompose into partial fractions**
Observe that:
$$\\frac{1}{k(k+1)} = \\frac{(k+1) - k}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$$

**Step 2: Expand the telescoping sum**
$$\\sum_{k=1}^{20} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right)$$
$$= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\dots + \\left(\\frac{1}{20} - \\frac{1}{21}\\right)$$

**Step 3: Cancel intermediate terms**
All intermediate terms cancel out, leaving only the first and last terms:
$$= 1 - \\frac{1}{21} = \\frac{20}{21}$$`,
    hints: [
      'Use partial fractions: $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$.',
      'Notice that all middle terms cancel telescopically.'
    ]
  },
  {
    id: 'math-seq-pyq-4',
    subject: 'mathematics',
    topicId: 'math-seq-3-special-sums-telescoping',
    chapterId: 'math-c11-sequences-series',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Main',
    year: 2022,
    text: `If $a_1, a_2, a_3, \\dots, a_n$ are in Arithmetic Progression with common difference $d \\ne 0$, then the sum $\\sum_{k=1}^{n-1} \\sec a_k \\sec a_{k+1}$ is equal to:`,
    options: [
      '$\\frac{\\tan a_n - \\tan a_1}{\\sin d}$',
      '$\\frac{\\tan a_n - \\tan a_1}{\\cos d}$',
      '$\\frac{\\cot a_1 - \\cot a_n}{\\sin d}$',
      '$\\frac{\\sin a_n - \\sin a_1}{\\sin d}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Rewrite each term in terms of sines and cosines**
$$\\sec a_k \\sec a_{k+1} = \\frac{1}{\\cos a_k \\cos a_{k+1}}$$
Multiply and divide by $\\sin d$:
$$\\frac{1}{\\sin d} \\cdot \\frac{\\sin d}{\\cos a_k \\cos a_{k+1}}$$

Since $a_1, a_2, \\dots$ is an AP, the common difference is $d = a_{k+1} - a_k$:
$$\\sin d = \\sin(a_{k+1} - a_k) = \\sin a_{k+1} \\cos a_k - \\cos a_{k+1} \\sin a_k$$

**Step 2: Simplify the fraction**
$$\\frac{\\sin(a_{k+1} - a_k)}{\\cos a_k \\cos a_{k+1}} = \\frac{\\sin a_{k+1} \\cos a_k}{\\cos a_k \\cos a_{k+1}} - \\frac{\\cos a_{k+1} \\sin a_k}{\\cos a_k \\cos a_{k+1}} = \\tan a_{k+1} - \\tan a_k$$

**Step 3: Sum telescopically from $k = 1$ to $n - 1$**
$$\\sum_{k=1}^{n-1} \\sec a_k \\sec a_{k+1} = \\frac{1}{\\sin d} \\sum_{k=1}^{n-1} (\\tan a_{k+1} - \\tan a_k)$$
$$= \\frac{1}{\\sin d} [(\\tan a_2 - \\tan a_1) + (\\tan a_3 - \\tan a_2) + \\dots + (\\tan a_n - \\tan a_{n-1})]$$
$$= \\frac{\\tan a_n - \\tan a_1}{\\sin d}$$`,
    hints: [
      'Multiply and divide by $\\sin d$, noting that $d = a_{k+1} - a_k$.',
      'Expand $\\sin(a_{k+1} - a_k)$ to obtain $\\tan a_{k+1} - \\tan a_k$.'
    ]
  },
  {
    id: 'math-seq-pyq-5',
    subject: 'mathematics',
    topicId: 'math-seq-1-ap-gp-means',
    chapterId: 'math-c11-sequences-series',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `The minimum value of $f(x) = 4^x + 4^{1 - x}$ for all $x \\in \\mathbb{R}$ is:`,
    options: [
      '$4$',
      '$2$',
      '$8$',
      '$1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Apply the AM-GM Inequality**
For any positive real numbers $A$ and $B$:
$$\\frac{A + B}{2} \\ge \\sqrt{A \\cdot B} \\implies A + B \\ge 2\\sqrt{AB}$$

**Step 2: Set $A = 4^x$ and $B = 4^{1 - x}$**
Since exponential functions are always strictly positive ($4^x > 0$ and $4^{1-x} > 0$ for all $x \\in \\mathbb{R}$):
$$4^x + 4^{1 - x} \\ge 2 \\sqrt{4^x \\cdot 4^{1 - x}} = 2 \\sqrt{4^{x + 1 - x}} = 2 \\sqrt{4^1} = 2 \\times 2 = 4$$

**Step 3: Check equality condition**
Equality holds when $A = B$:
$$4^x = 4^{1 - x} \\implies x = 1 - x \\implies 2x = 1 \\implies x = \\frac{1}{2}$$
At $x = \\frac{1}{2}$:
$$f\\left(\\frac{1}{2}\\right) = 4^{1/2} + 4^{1 - 1/2} = 2 + 2 = 4$$

Thus, the minimum value is $4$.`,
    hints: [
      'Apply the Arithmetic Mean - Geometric Mean (AM-GM) inequality: $\\frac{A + B}{2} \\ge \\sqrt{AB}$.',
      'Notice that the product $4^x \\cdot 4^{1-x} = 4^1$ is constant and independent of $x$.'
    ]
  },
  {
    id: 'math-seq-pyq-6',
    subject: 'mathematics',
    topicId: 'math-seq-3-special-sums-telescoping',
    chapterId: 'math-c11-sequences-series',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `Let $S_n = \\sum_{k=1}^n \\frac{k}{k^4 + k^2 + 1}$. The value of $\\lim_{n \\to \\infty} S_n$ is:`,
    options: [
      '$\\frac{1}{2}$',
      '$\\frac{1}{4}$',
      '$1$',
      '$\\frac{3}{4}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Factor the quartic denominator $k^4 + k^2 + 1$**
Using Sophie Germain / completing the square:
$$k^4 + k^2 + 1 = (k^2 + 1)^2 - k^2 = (k^2 + 1 - k)(k^2 + 1 + k) = (k^2 - k + 1)(k^2 + k + 1)$$

**Step 2: Express the numerator $k$ as the difference of the factors**
Notice that:
$$(k^2 + k + 1) - (k^2 - k + 1) = 2k$$
Therefore:
$$k = \\frac{1}{2} [(k^2 + k + 1) - (k^2 - k + 1)]$$

**Step 3: Split into partial fractions**
$$\\frac{k}{k^4 + k^2 + 1} = \\frac{1}{2} \\left[ \\frac{(k^2 + k + 1) - (k^2 - k + 1)}{(k^2 - k + 1)(k^2 + k + 1)} \\right] = \\frac{1}{2} \\left[ \\frac{1}{k^2 - k + 1} - \\frac{1}{k^2 + k + 1} \\right]$$

Let $V_k = \\frac{1}{k^2 - k + 1}$.
Notice that $V_{k+1} = \\frac{1}{(k+1)^2 - (k+1) + 1} = \\frac{1}{k^2 + 2k + 1 - k - 1 + 1} = \\frac{1}{k^2 + k + 1}$.
Thus, each term is:
$$\\frac{1}{2}(V_k - V_{k+1})$$

**Step 4: Sum telescopically**
$$S_n = \\frac{1}{2} \\sum_{k=1}^n (V_k - V_{k+1}) = \\frac{1}{2} [V_1 - V_{n+1}]$$
- $V_1 = \\frac{1}{1^2 - 1 + 1} = 1$
- $V_{n+1} = \\frac{1}{(n+1)^2 + (n+1) + 1} \\to 0$ as $n \\to \\infty$

Therefore:
$$\\lim_{n \\to \\infty} S_n = \\frac{1}{2} (1 - 0) = \\frac{1}{2}$$`,
    hints: [
      'Factor $k^4 + k^2 + 1 = (k^2 - k + 1)(k^2 + k + 1)$.',
      'Express the numerator as $\\frac{1}{2}[(k^2 + k + 1) - (k^2 - k + 1)]$ to create a telescoping form.'
    ]
  }
];
