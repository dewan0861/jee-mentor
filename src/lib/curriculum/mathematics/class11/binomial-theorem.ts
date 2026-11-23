import { Chapter } from '@/types';

export const binomialTheoremChapter: Chapter = {
  id: 'math-c11-binomial-theorem',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Binomial Theorem & Its Simple Applications',
  unit: 'Algebra',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '(x + y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r = \\binom{n}{0}x^n + \\binom{n}{1}x^{n-1}y + \\dots + \\binom{n}{n}y^n',
    'T_{r+1} = \\binom{n}{r} x^{n-r} y^r \\quad (\\text{General Term})',
    '\\text{Middle Term}: \\text{If } n \\text{ is even, } T_{n/2 + 1}; \\quad \\text{If } n \\text{ is odd, } T_{(n+1)/2} \\text{ and } T_{(n+3)/2}',
    '\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\cdot \\frac{y}{x}',
    'C_0 + C_1 + C_2 + \\dots + C_n = 2^n, \\quad C_0 - C_1 + C_2 - \\dots + (-1)^n C_n = 0',
    'C_0 + C_2 + C_4 + \\dots = C_1 + C_3 + C_5 + \\dots = 2^{n-1}',
    '\\sum_{r=1}^n r \\binom{n}{r} = n 2^{n-1}, \\quad \\sum_{r=0}^n \\frac{1}{r+1}\\binom{n}{r} = \\frac{2^{n+1} - 1}{n + 1}',
    '\\sum_{r=0}^n \\binom{n}{r}^2 = \\binom{2n}{n}, \\quad \\sum_{r=0}^{n-k} \\binom{n}{r}\\binom{n}{r+k} = \\binom{2n}{n-k}',
    '\\text{Numerically Greatest Term (NGT)}: r \\le \\frac{n + 1}{1 + |x/y|}'
  ],
  topics: [
    {
      id: 'math-binom-1-general-middle-term',
      name: '11.6.1 General Term, Middle Term & Term Independent of x',
      description: 'Finding specific coefficients, term independent of variable x, middle term(s), numerically greatest term, and ratio of consecutive terms in expansions.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-binom-2-properties-coefficients-series',
      name: '11.6.2 Properties and Sums of Binomial Coefficients',
      description: 'Differentiation and integration of binomial expansions to evaluate series with r and (r+1) factors, products of coefficients Vandermonde identity sum C(m,k)C(n,r-k) = C(m+n,r).',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-binom-3-divisibility-remainders',
      name: '11.6.3 Divisibility, Remainders & Fractional Parts',
      description: 'Finding the remainder when large powers a^n are divided by an integer m; integer part and fractional part problems like (a + b sqrt(p))^n = I + f.',
      estimatedHours: 7,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Binomial Theorem is one of the most reliable scoring chapters in JEE Main. Remainder problems (using (1 + x)^n or modular binomial expansion) and coefficient relations are tested in nearly every shift.',
    ncertPointers: [
      'The number of terms in the expansion of (x + y)^n is (n + 1).',
      'The expansion of (x + y + z)^n contains (n + 1)(n + 2) / 2 terms.',
      'To find remainder of a^n mod m: express base a as (k*m + r) where r is a small integer (preferably 1, -1, or a small power of 2).'
    ],
    commonTraps: [
      'Writing the general term with the wrong index: The (r + 1)-th term has coefficient C(n, r), NOT C(n, r + 1)!',
      'Forgetting the negative sign in the expansion of (x - y)^n: The general term is (-1)^r C(n, r) x^(n-r) y^r.'
    ],
    shortcutsVsConcepts: [
      'Remainder shortcut: 7^103 mod 25 = 7 * (7^2)^51 = 7 * (49)^51 = 7 * (50 - 1)^51 = 7 * (-1)^51 = -7 = 18 mod 25. Takes 30 seconds!',
      'Sum of coefficients of a polynomial P(x, y, ...): Simply substitute all variables x = 1, y = 1, ... into the expression!'
    ]
  },
  ncertPointers: [
    'The number of terms in the expansion of (x + y)^n is (n + 1).',
    'The expansion of (x + y + z)^n contains (n + 1)(n + 2) / 2 terms.',
    'To find remainder of a^n mod m: express base a as (k*m + r) where r is a small integer (preferably 1, -1, or a small power of 2).'
  ],
  commonTraps: [
    'Writing the general term with the wrong index: The (r + 1)-th term has coefficient C(n, r), NOT C(n, r + 1)!',
    'Forgetting the negative sign in the expansion of (x - y)^n: The general term is (-1)^r C(n, r) x^(n-r) y^r.'
  ],
  shortcutsVsConcepts: [
    'Remainder shortcut: 7^103 mod 25 = 7 * (7^2)^51 = 7 * (49)^51 = 7 * (50 - 1)^51 = 7 * (-1)^51 = -7 = 18 mod 25. Takes 30 seconds!',
    'Sum of coefficients of a polynomial P(x, y, ...): Simply substitute all variables x = 1, y = 1, ... into the expression!'
  ]
};
