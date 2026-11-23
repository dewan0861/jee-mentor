import { Question } from '@/types';

export const binomialTheoremQuestions: Question[] = [
  {
    id: 'math-binom-pyq-1',
    subject: 'mathematics',
    topicId: 'math-binom-3-divisibility-remainders',
    chapterId: 'math-c11-binomial-theorem',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `The remainder when $7^{103}$ is divided by $25$ is:`,
    options: [
      '$18$',
      '$7$',
      '$14$',
      '$21$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Express $7^{103}$ in terms of a power close to a multiple of 25**
Notice that:
$$7^2 = 49 = 50 - 1 = 2(25) - 1$$
We can rewrite $7^{103}$ as:
$$7^{103} = 7^1 \\times (7^2)^{51} = 7 \\times (49)^{51} = 7 \\times (50 - 1)^{51}$$

**Step 2: Expand $(50 - 1)^{51}$ using Binomial Theorem**
$$(50 - 1)^{51} = \\binom{51}{0} 50^{51} - \\binom{51}{1} 50^{50} + \\dots + \\binom{51}{50} 50^1 (-1)^{50} + \\binom{51}{51} (-1)^{51}$$
Every term except the last term contains at least one factor of $50 = 2 \\times 25$, so all those terms are divisible by 25:
$$(50 - 1)^{51} = 25 k + (-1)^{51} = 25 k - 1$$
where $k$ is an integer.

**Step 3: Multiply by 7 and find the remainder modulo 25**
$$7^{103} = 7(25 k - 1) = 175 k - 7 = 25(7k) - 7$$
Since the remainder must be in the range $[0, 24]$:
$$-7 \\equiv 25 - 7 = 18 \\pmod{25}$$
Formally:
$$7^{103} = 25(7k - 1) + (25 - 7) = 25(7k - 1) + 18$$

Thus, the remainder is $18$.`,
    hints: [
      'Write $7^{103} = 7 \\times (7^2)^{51} = 7 \\times (50 - 1)^{51}$.',
      'Expand binomially modulo 25 and adjust negative remainders into $[0, 24]$.'
    ]
  },
  {
    id: 'math-binom-pyq-2',
    subject: 'mathematics',
    topicId: 'math-binom-1-general-middle-term',
    chapterId: 'math-c11-binomial-theorem',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The term independent of $x$ in the expansion of $\\left( \\frac{x + 1}{x^{2/3} - x^{1/3} + 1} - \\frac{x - 1}{x - x^{1/2}} \\right)^{10}$ is:`,
    options: [
      '$210$',
      '$120$',
      '$315$',
      '$105$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Simplify each algebraic term inside the parentheses**
First term:
Recall the sum of cubes factorization: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.
Let $a = x^{1/3}$ and $b = 1$:
$$x + 1 = (x^{1/3})^3 + 1^3 = (x^{1/3} + 1)(x^{2/3} - x^{1/3} + 1)$$
Therefore:
$$\\frac{x + 1}{x^{2/3} - x^{1/3} + 1} = x^{1/3} + 1$$

Second term:
$$x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1) = (x^{1/2} - 1)(x^{1/2} + 1)$$
$$x - x^{1/2} = x^{1/2}(x^{1/2} - 1)$$
Therefore:
$$\\frac{x - 1}{x - x^{1/2}} = \\frac{(x^{1/2} - 1)(x^{1/2} + 1)}{x^{1/2}(x^{1/2} - 1)} = \\frac{x^{1/2} + 1}{x^{1/2}} = 1 + x^{-1/2}$$

**Step 2: Subtract the two simplified expressions**
$$(x^{1/3} + 1) - (1 + x^{-1/2}) = x^{1/3} - x^{-1/2}$$
So the given expression simplifies dramatically to:
$$(x^{1/3} - x^{-1/2})^{10}$$

**Step 3: Find the term independent of $x$**
The general term in $(x^{1/3} - x^{-1/2})^{10}$ is:
$$T_{r+1} = \\binom{10}{r} (x^{1/3})^{10 - r} (-x^{-1/2})^r = (-1)^r \\binom{10}{r} x^{\\frac{10 - r}{3} - \\frac{r}{2}}$$

For the term to be independent of $x$, the power of $x$ must be zero:
$$\\frac{10 - r}{3} - \\frac{r}{2} = 0 \\implies \\frac{2(10 - r) - 3r}{6} = 0$$
$$20 - 2r - 3r = 0 \\implies 5r = 20 \\implies r = 4$$

**Step 4: Compute the value of the term**
$$T_5 = (-1)^4 \\binom{10}{4} = \\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210$$`,
    hints: [
      'Factor $x + 1$ as $(x^{1/3} + 1)(x^{2/3} - x^{1/3} + 1)$.',
      'Factor $x - 1$ as $(\\sqrt{x} - 1)(\\sqrt{x} + 1)$ and simplify the entire bracket to $(x^{1/3} - x^{-1/2})^{10}$.',
      'Set the net exponent of $x$ equal to zero in the general term.'
    ]
  },
  {
    id: 'math-binom-pyq-3',
    subject: 'mathematics',
    topicId: 'math-binom-1-general-middle-term',
    chapterId: 'math-c11-binomial-theorem',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `If the coefficient of $x^7$ in $\\left(x^2 + \\frac{1}{bx}\\right)^{11}$ and the coefficient of $x^{-7}$ in $\\left(x - \\frac{1}{bx^2}\\right)^{11}$ are equal, then the value of $b$ is:`,
    options: [
      '$1$',
      '$-1$',
      '$2$',
      '$-2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Find coefficient of $x^7$ in $\\left(x^2 + \\frac{1}{bx}\\right)^{11}$**
General term:
$$T_{r+1} = \\binom{11}{r} (x^2)^{11-r} \\left(\\frac{1}{bx}\\right)^r = \\binom{11}{r} \\frac{1}{b^r} x^{22 - 3r}$$
Set $22 - 3r = 7 \\implies 3r = 15 \\implies r = 5$.
$$\\text{Coefficient of } x^7 = \\binom{11}{5} \\frac{1}{b^5}$$

**Step 2: Find coefficient of $x^{-7}$ in $\\left(x - \\frac{1}{bx^2}\\right)^{11}$**
General term:
$$T'_{k+1} = \\binom{11}{k} x^{11-k} \\left(-\\frac{1}{bx^2}\\right)^k = \\binom{11}{k} \\frac{(-1)^k}{b^k} x^{11 - 3k}$$
Set $11 - 3k = -7 \\implies 3k = 18 \\implies k = 6$.
$$\\text{Coefficient of } x^{-7} = \\binom{11}{6} \\frac{(-1)^6}{b^6} = \\binom{11}{6} \\frac{1}{b^6}$$

**Step 3: Equate the two coefficients**
Since $\\binom{11}{5} = \\binom{11}{6}$:
$$\\binom{11}{5} \\frac{1}{b^5} = \\binom{11}{6} \\frac{1}{b^6}$$
$$\\frac{1}{b^5} = \\frac{1}{b^6} \\implies b = 1$$`,
    hints: [
      'Write the general term for both expansions.',
      'Equate the exponents of $x$ to $7$ and $-7$ respectively to determine $r$ and $k$.',
      'Recall $\\binom{11}{5} = \\binom{11}{6}$ by symmetry.'
    ]
  },
  {
    id: 'math-binom-pyq-4',
    subject: 'mathematics',
    topicId: 'math-binom-2-properties-coefficients-series',
    chapterId: 'math-c11-binomial-theorem',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Main',
    year: 2022,
    text: `The value of the sum $\\sum_{r=0}^{20} r \\binom{20}{r}^2$ is equal to:`,
    options: [
      '$10 \\binom{40}{20}$',
      '$20 \\binom{40}{20}$',
      '$10 \\binom{40}{19}$',
      '$20 \\binom{39}{19}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the index reversal symmetry trick**
Let $S = \\sum_{r=0}^{20} r \\binom{20}{r}^2$.
Using the property $\\binom{n}{r} = \\binom{n}{n - r}$, replace $r$ with $20 - r$:
$$S = \\sum_{r=0}^{20} (20 - r) \\binom{20}{20 - r}^2 = \\sum_{r=0}^{20} (20 - r) \\binom{20}{r}^2$$

**Step 2: Add the two representations of $S$**
$$2S = \\sum_{r=0}^{20} [r + (20 - r)] \\binom{20}{r}^2 = \\sum_{r=0}^{20} 20 \\binom{20}{r}^2 = 20 \\sum_{r=0}^{20} \\binom{20}{r}^2$$
$$S = 10 \\sum_{r=0}^{20} \\binom{20}{r}^2$$

**Step 3: Evaluate the sum of squares of binomial coefficients**
Recall the standard identity:
$$\\sum_{r=0}^n \\binom{n}{r}^2 = \\binom{2n}{n}$$
Here $n = 20$:
$$\\sum_{r=0}^{20} \\binom{20}{r}^2 = \\binom{40}{20}$$

**Step 4: Substitute back**
$$S = 10 \\binom{40}{20}$$`,
    hints: [
      'Write the sum in reverse order by replacing $r$ with $20 - r$.',
      'Add the two equations to isolate $\\sum \\binom{20}{r}^2$.',
      'Recall $\\sum_{r=0}^n C_r^2 = \\binom{2n}{n}$.'
    ]
  },
  {
    id: 'math-binom-pyq-5',
    subject: 'mathematics',
    topicId: 'math-binom-3-divisibility-remainders',
    chapterId: 'math-c11-binomial-theorem',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `The remainder when $2021^{2023}$ is divided by $7$ is:`,
    options: [
      '$5$',
      '$2$',
      '$1$',
      '$4$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Reduce the base $2021$ modulo $7$**
Divide $2021$ by $7$:
$$2021 = 7 \\times 288 + 5$$
So:
$$2021 \\equiv 5 \\equiv -2 \\pmod{7}$$

**Step 2: Evaluate $(-2)^{2023} \\pmod{7}$**
$$2021^{2023} \\equiv (-2)^{2023} = - (2^{2023}) \\pmod{7}$$
Observe powers of $2$ modulo $7$:
$$2^3 = 8 \\equiv 1 \\pmod{7}$$

**Step 3: Express the exponent in terms of multiples of 3**
$$2023 = 3 \\times 674 + 1$$
Therefore:
$$2^{2023} = (2^3)^{674} \\times 2^1 \\equiv (1)^{674} \\times 2 \\equiv 2 \\pmod{7}$$

**Step 4: Account for the negative sign**
$$- (2^{2023}) \\equiv -2 \\equiv 7 - 2 = 5 \\pmod{7}$$

Thus, the remainder when $2021^{2023}$ is divided by $7$ is $5$.`,
    hints: [
      'Divide the base 2021 by 7 to find its remainder: $2021 \\equiv 5 \\equiv -2 \\pmod{7}$.',
      'Use $2^3 = 8 \\equiv 1 \\pmod{7}$ to reduce the large power.'
    ]
  },
  {
    id: 'math-binom-pyq-6',
    subject: 'mathematics',
    topicId: 'math-binom-3-divisibility-remainders',
    chapterId: 'math-c11-binomial-theorem',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `If the fractional part of the number $\\frac{2^{403}}{15}$ is $\\frac{k}{15}$, then the integer $k$ is equal to:`,
    options: [
      '$8$',
      '$2$',
      '$4$',
      '$1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the definition of fractional part**
For any real number $x$, the fractional part $\\{x\\} = x - [x] = \\frac{\\text{Remainder}}{\\text{Divisor}}$.
Thus, $\\left\\{\\frac{2^{403}}{15}\\right\\} = \\frac{k}{15}$, where $k$ is the remainder when $2^{403}$ is divided by $15$.

**Step 2: Express $2^{403}$ using powers of 2 close to 15**
Notice that:
$$2^4 = 16 = 15 + 1$$
Now divide the exponent 403 by 4:
$$403 = 4 \\times 100 + 3$$
Thus:
$$2^{403} = 2^3 \\times (2^4)^{100} = 8 \\times (15 + 1)^{100}$$

**Step 3: Expand $(15 + 1)^{100}$ binomially**
$$(15 + 1)^{100} = \\binom{100}{0} 15^{100} + \\binom{100}{1} 15^{99} + \\dots + \\binom{100}{99} 15^1 + 1$$
$$= 15 M + 1$$
where $M$ is a positive integer.

**Step 4: Compute the remainder**
$$2^{403} = 8(15 M + 1) = 15(8M) + 8$$
Therefore:
$$\\frac{2^{403}}{15} = 8M + \\frac{8}{15}$$
Since $8M$ is an integer and $0 \\le \\frac{8}{15} < 1$, the fractional part is:
$$\\left\\{\\frac{2^{403}}{15}\\right\\} = \\frac{8}{15}$$
Hence, $k = 8$.`,
    hints: [
      'Note that $2^4 = 16 = 15 + 1$.',
      'Write $2^{403} = 2^3 \\times (16)^{100} = 8 \\times (15 + 1)^{100}$.',
      'The remainder directly gives the numerator of the fractional part.'
    ]
  }
];
