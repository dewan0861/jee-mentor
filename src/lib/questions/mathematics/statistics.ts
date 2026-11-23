import { Question } from '@/types';

export const statisticsQuestions: Question[] = [
  {
    id: 'math-stat-pyq-1',
    subject: 'mathematics',
    topicId: 'math-stat-2-variance-sd-properties',
    chapterId: 'math-c11-statistics',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    text: `The variance of the first $n$ natural numbers $1, 2, 3, \\dots, n$ is equal to $10$. The value of $n$ is:`,
    options: [
      '$11$',
      '$9$',
      '$13$',
      '$15$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for variance of first $n$ natural numbers**
The mean of the first $n$ natural numbers is:
$$\\bar{x} = \\frac{n(n + 1)}{2n} = \\frac{n + 1}{2}$$

The sum of squares of the first $n$ natural numbers is:
$$\\sum_{i=1}^n x_i^2 = \\frac{n(n + 1)(2n + 1)}{6}$$

The variance $\\sigma^2$ is:
$$\\sigma^2 = \\frac{\\sum x_i^2}{n} - (\\bar{x})^2 = \\frac{(n + 1)(2n + 1)}{6} - \\frac{(n + 1)^2}{4}$$
$$= (n + 1) \\left[ \\frac{2(2n + 1) - 3(n + 1)}{12} \\right] = (n + 1) \\left[ \\frac{4n + 2 - 3n - 3}{12} \\right] = \\frac{(n + 1)(n - 1)}{12} = \\frac{n^2 - 1}{12}$$

**Step 2: Equate to the given variance $10$**
$$\\frac{n^2 - 1}{12} = 10$$
$$n^2 - 1 = 120$$
$$n^2 = 121$$
$$n = 11$$`,
    hints: [
      'Recall the standard formula for the variance of the first $n$ natural numbers: $\\sigma^2 = \\frac{n^2 - 1}{12}$.',
      'Set $\\frac{n^2 - 1}{12} = 10$ and solve for $n$.'
    ]
  },
  {
    id: 'math-stat-pyq-2',
    subject: 'mathematics',
    topicId: 'math-stat-3-combined-variance-corrections',
    chapterId: 'math-c11-statistics',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The mean and variance of $7$ observations are $8$ and $16$ respectively. If five of the observations are $2, 4, 10, 12, 14$, then the product of the remaining two observations is:`,
    options: [
      '$48$',
      '$45$',
      '$40$',
      '$54$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the mean to find the sum of the remaining two observations**
Let the remaining two observations be $a$ and $b$.
Total observations $n = 7$, mean $\\bar{x} = 8$:
$$\\sum x_i = 7 \\times 8 = 56$$

The sum of the five known observations is:
$$2 + 4 + 10 + 12 + 14 = 42$$
Therefore:
$$a + b = 56 - 42 = 14 \\quad \\text{--- (1)}$$

**Step 2: Use the variance to find $a^2 + b^2$**
Given variance $\\sigma^2 = 16$:
$$\\sigma^2 = \\frac{\\sum x_i^2}{n} - (\\bar{x})^2$$
$$16 = \\frac{\\sum x_i^2}{7} - 8^2 = \\frac{\\sum x_i^2}{7} - 64$$
$$\\frac{\\sum x_i^2}{7} = 16 + 64 = 80 \\implies \\sum x_i^2 = 7 \\times 80 = 560$$

Sum of squares of the five given observations:
$$2^2 + 4^2 + 10^2 + 12^2 + 14^2 = 4 + 16 + 100 + 144 + 196 = 460$$
Therefore:
$$a^2 + b^2 = 560 - 460 = 100 \\quad \\text{--- (2)}$$

**Step 3: Calculate the product $ab$**
Recall $(a + b)^2 = a^2 + b^2 + 2ab$:
$$14^2 = 100 + 2ab$$
$$196 = 100 + 2ab$$
$$2ab = 196 - 100 = 96$$
$$ab = 48$$

Thus, the product of the remaining two observations is $48$ (the numbers are $6$ and $8$).`,
    hints: [
      'Use the mean: $\\sum x_i = n \\bar{x} = 56$ to find $a + b = 14$.',
      'Use the variance: $\\sum x_i^2 = n(\\sigma^2 + \\bar{x}^2) = 7(16 + 64) = 560$ to find $a^2 + b^2 = 100$.',
      'Use the algebraic identity $(a + b)^2 = a^2 + b^2 + 2ab$.'
    ]
  },
  {
    id: 'math-stat-pyq-3',
    subject: 'mathematics',
    topicId: 'math-stat-2-variance-sd-properties',
    chapterId: 'math-c11-statistics',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `If the variance of a set of observations $x_1, x_2, \\dots, x_n$ is $\\sigma^2$, and each observation is transformed into $y_i = 3x_i + 2$, then the variance of the transformed data is:`,
    options: [
      '$9\\sigma^2$',
      '$3\\sigma^2 + 2$',
      '$9\\sigma^2 + 4$',
      '$3\\sigma^2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the effect of shift of origin on variance**
Adding a constant $+2$ to every observation shifts the entire data distribution by $2$ units along the number line, but does not alter the dispersion or spread of the data around its mean.
Hence, the addition of $+2$ has zero effect on variance:
$$\\text{Var}(x_i + 2) = \\text{Var}(x_i)$$

**Step 2: Understand the effect of change of scale on variance**
Multiplying each observation by a constant factor $c = 3$ scales the deviations from the mean by $3$:
$$(y_i - \\bar{y}) = 3(x_i - \\bar{x})$$
Squaring the deviations:
$$(y_i - \\bar{y})^2 = 9(x_i - \\bar{x})^2$$

Therefore:
$$\\text{Var}(y) = \\frac{\\sum (y_i - \\bar{y})^2}{n} = 9 \\frac{\\sum (x_i - \\bar{x})^2}{n} = 9\\sigma^2$$`,
    hints: [
      'Shift of origin does not affect variance.',
      'Change of scale multiplies the variance by $c^2$. Here $c = 3$, so variance is multiplied by $3^2 = 9$.'
    ]
  },
  {
    id: 'math-stat-pyq-4',
    subject: 'mathematics',
    topicId: 'math-stat-3-combined-variance-corrections',
    chapterId: 'math-c11-statistics',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Main',
    year: 2022,
    text: `The mean and variance of $10$ observations were calculated as $5$ and $4$ respectively. Later, it was discovered that one observation recorded as $4$ was incorrect and should have been $5$. The correct variance is:`,
    options: [
      '$3.89$',
      '$4.01$',
      '$3.99$',
      '$4.15$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Compute the initial incorrect sums**
Given:
- $n = 10$
- Incorrect mean $\\bar{x} = 5 \\implies \\sum x_{\\text{old}} = 10 \\times 5 = 50$
- Incorrect variance $\\sigma^2 = 4$:
  $$\\sigma^2 = \\frac{\\sum x_{\\text{old}}^2}{10} - 5^2 = 4 \\implies \\frac{\\sum x_{\\text{old}}^2}{10} = 29 \\implies \\sum x_{\\text{old}}^2 = 290$$

**Step 2: Correct the sum $\\sum x$ and calculate the correct mean**
Incorrect observation $= 4$, Correct observation $= 5$:
$$\\sum x_{\\text{new}} = \\sum x_{\\text{old}} - 4 + 5 = 50 + 1 = 51$$
$$\\bar{x}_{\\text{new}} = \\frac{51}{10} = 5.1$$

**Step 3: Correct the sum of squares $\\sum x^2$**
$$\\sum x_{\\text{new}}^2 = \\sum x_{\\text{old}}^2 - 4^2 + 5^2 = 290 - 16 + 25 = 290 + 9 = 299$$

**Step 4: Compute the correct variance**
$$\\sigma_{\\text{new}}^2 = \\frac{\\sum x_{\\text{new}}^2}{10} - (\\bar{x}_{\\text{new}})^2 = \\frac{299}{10} - (5.1)^2 = 29.9 - 26.01 = 3.89$$`,
    hints: [
      'Find the old sum $\\sum x = 50$ and old sum of squares $\\sum x^2 = 290$.',
      'Replace $4$ with $5$: new sum is $51$ (new mean is $5.1$), and new sum of squares is $290 - 16 + 25 = 299$.',
      'Compute $\\sigma^2_{\\text{new}} = 299/10 - (5.1)^2 = 29.9 - 26.01 = 3.89$.'
    ]
  },
  {
    id: 'math-stat-pyq-5',
    subject: 'mathematics',
    topicId: 'math-stat-1-mean-median-dispersion',
    chapterId: 'math-c11-statistics',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `The mean deviation about the median for the data $3, 9, 5, 3, 12, 10, 18, 4, 7, 19, 21$ is:`,
    options: [
      '$5.27$',
      '$4.85$',
      '$5.82$',
      '$4.50$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Arrange the data in ascending order**
Total observations $n = 11$ (an odd integer).
Arranging in ascending order:
$$3, 3, 4, 5, 7, 9, 10, 12, 18, 19, 21$$

**Step 2: Find the median $M$**
Since $n = 11$, the median is the $\\left(\\frac{11 + 1}{2}\\right)^{\\text{th}} = 6^{\\text{th}}$ observation:
$$M = 9$$

**Step 3: Calculate the absolute deviations $|x_i - M|$**
- $|3 - 9| = 6$
- $|3 - 9| = 6$
- $|4 - 9| = 5$
- $|5 - 9| = 4$
- $|7 - 9| = 2$
- $|9 - 9| = 0$
- $|10 - 9| = 1$
- $|12 - 9| = 3$
- $|18 - 9| = 9$
- $|19 - 9| = 10$
- $|21 - 9| = 12$

**Step 4: Sum the absolute deviations and divide by $n = 11$**
$$\\sum |x_i - M| = 6 + 6 + 5 + 4 + 2 + 0 + 1 + 3 + 9 + 10 + 12 = 58$$
$$\\text{MD}(M) = \\frac{58}{11} \\approx 5.27$$`,
    hints: [
      'Arrange the 11 numbers in ascending order to find the 6th number as median ($M = 9$).',
      'Compute the absolute differences $|x_i - 9|$, sum them ($58$), and divide by $11$.'
    ]
  },
  {
    id: 'math-stat-pyq-6',
    subject: 'mathematics',
    topicId: 'math-stat-2-variance-sd-properties',
    chapterId: 'math-c11-statistics',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `Consider $n$ numbers $x_1, x_2, \\dots, x_n$ such that $\\sum_{i=1}^n (x_i - 2) = 150$ and $\\sum_{i=1}^n (x_i - 5) = 60$. If $\\sum_{i=1}^n (x_i - 5)^2 = 600$, then the standard deviation $\\sigma$ of these $n$ numbers is:`,
    options: [
      '$4$',
      '$5$',
      '$6$',
      '$\\sqrt{20}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Determine the number of observations $n$**
We are given:
$$\\sum_{i=1}^n (x_i - 2) = 150 \\implies \\sum x_i - 2n = 150 \\quad \\text{--- (1)}$$
$$\\sum_{i=1}^n (x_i - 5) = 60 \\implies \\sum x_i - 5n = 60 \\quad \\text{--- (2)}$$

Subtract equation (2) from equation (1):
$$(-2n) - (-5n) = 150 - 60$$
$$3n = 90 \\implies n = 30$$

**Step 2: Define transformed variables $u_i = x_i - 5$**
Since standard deviation is invariant under shift of origin, the standard deviation of $x_i$ is equal to the standard deviation of $u_i = x_i - 5$.
For $u_i$:
- $n = 30$
- $\\sum u_i = 60 \\implies \\bar{u} = \\frac{60}{30} = 2$
- $\\sum u_i^2 = 600$

**Step 3: Compute the variance $\\sigma^2$ and standard deviation $\\sigma$**
$$\\sigma^2 = \\frac{\\sum u_i^2}{n} - (\\bar{u})^2 = \\frac{600}{30} - 2^2 = 20 - 4 = 16$$
$$\\sigma = \\sqrt{16} = 4$$`,
    hints: [
      'Subtract the two linear sums to find $n$: $3n = 90 \\implies n = 30$.',
      'Use $u_i = x_i - 5$ and compute $\\sigma^2 = \\frac{\\sum u_i^2}{n} - (\\bar{u})^2$.'
    ]
  }
];
