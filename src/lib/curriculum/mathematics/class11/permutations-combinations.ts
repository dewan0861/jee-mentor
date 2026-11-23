import { Chapter } from '@/types';

export const permutationsCombinationsChapter: Chapter = {
  id: 'math-c11-permutations-combinations',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Permutations & Combinations',
  unit: 'Algebra',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    'P(n,r) = \\frac{n!}{(n-r)!}, \\quad C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}',
    '\\binom{n}{r} + \\binom{n}{r-1} = \\binom{n+1}{r} \\quad (\\text{Pascal\'s Identity})',
    '\\binom{n}{0} + \\binom{n}{1} + \\dots + \\binom{n}{n} = 2^n, \\quad \\sum_{r=0}^n (-1)^r \\binom{n}{r} = 0',
    '\\text{Permutations of } n \\text{ objects with repetitions}: \\frac{n!}{p! \\, q! \\, r!}',
    '\\text{Circular Permutations}: (n-1)! \\; (\\text{distinct}); \\quad \\frac{(n-1)!}{2} \\; (\\text{garland/necklace where clockwise = counterclockwise})',
    '\\text{Beggar\'s Method (Non-negative integers } x_i \\ge 0\\text{)}: x_1 + x_2 + \\dots + x_r = n \\implies \\binom{n+r-1}{r-1}',
    '\\text{Positive integers } x_i \\ge 1: x_1 + x_2 + \\dots + x_r = n \\implies \\binom{n-1}{r-1}',
    '\\text{Derangements Formula}: D_n = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right)',
    'D_1 = 0, \\; D_2 = 1, \\; D_3 = 2, \\; D_4 = 9, \\; D_5 = 44, \\; D_6 = 265',
    '\\text{Division into Groups}: \\frac{(m+n+p)!}{m! \\, n! \\, p!} \\; (\\text{distinct sizes}); \\quad \\frac{(3m)!}{(m!)^3 3!} \\; (\\text{equal sizes into 3 unlabelled groups})'
  ],
  topics: [
    {
      id: 'math-pnc-1-counting-arrangements',
      name: '11.5.1 Fundamental Counting, Permutations & Constraints',
      description: 'Multiplication/addition principles, string method (items kept together), gap method (no two items together), rank of a word in dictionary with and without repeated letters.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-pnc-2-combinations-grouping',
      name: '11.5.2 Combinations, Selection & Group Division',
      description: 'Properties of binomial coefficients, selection of at least one object from identical and distinct objects, division of objects into groups of equal and unequal sizes with/without distribution.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-pnc-3-beggar-derangements',
      name: '11.5.3 Beggar\'s Method, Integer Solutions & Derangements',
      description: 'Number of non-negative and positive integer solutions to linear equations with lower and upper bounds, multinomial expansion, derangements of letters into envelopes.',
      estimatedHours: 7,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Permutations & Combinations is the reasoning engine of discrete mathematics. In JEE Main, Beggar\'s method and dictionary rank problems appear regularly, while JEE Advanced favors complex constraint modeling.',
    ncertPointers: [
      'C(n, r) = C(n, n - r). If C(n, x) = C(n, y), then either x = y or x + y = n.',
      'To arrange items such that no two are together: always place the other unrestricted items first, creating gaps, and then choose from available gaps (Gap Method).',
      'The number of divisors of N = p1^a * p2^b * p3^c is (a + 1)(b + 1)(c + 1).'
    ],
    commonTraps: [
      'Dividing into equal groups: forgetting to divide by k! when dividing into k groups of equal size where group order does not matter.',
      'Confusing distinct objects distribution with identical objects distribution (n distinct balls into r boxes is r^n; n identical balls into r boxes is C(n + r - 1, r - 1)).'
    ],
    shortcutsVsConcepts: [
      'Dictionary rank shortcut: Write the letters in alphabetical order. For each letter from left to right, count remaining available letters smaller than it and multiply by remaining factorial.',
      'Beggar\'s Method: The number of solutions to x1 + x2 + ... + xr = n where xi >= k is C((n - r*k) + r - 1, r - 1).'
    ]
  },
  ncertPointers: [
    'C(n, r) = C(n, n - r). If C(n, x) = C(n, y), then either x = y or x + y = n.',
    'To arrange items such that no two are together: always place the other unrestricted items first, creating gaps, and then choose from available gaps (Gap Method).',
    'The number of divisors of N = p1^a * p2^b * p3^c is (a + 1)(b + 1)(c + 1).'
  ],
  commonTraps: [
    'Dividing into equal groups: forgetting to divide by k! when dividing into k groups of equal size where group order does not matter.',
    'Confusing distinct objects distribution with identical objects distribution (n distinct balls into r boxes is r^n; n identical balls into r boxes is C(n + r - 1, r - 1)).'
  ],
  shortcutsVsConcepts: [
    'Dictionary rank shortcut: Write the letters in alphabetical order. For each letter from left to right, count remaining available letters smaller than it and multiply by remaining factorial.',
    'Beggar\'s Method: The number of solutions to x1 + x2 + ... + xr = n where xi >= k is C((n - r*k) + r - 1, r - 1).'
  ]
};
