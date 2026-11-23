import { Chapter } from '@/types';

export const sequencesSeriesChapter: Chapter = {
  id: 'math-c11-sequences-series',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Sequences and Series',
  unit: 'Algebra',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    'T_n(\\text{AP}) = a + (n-1)d, \\quad S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}(a + l)',
    'T_n(\\text{GP}) = a r^{n-1}, \\quad S_n = \\frac{a(1 - r^n)}{1 - r} \\; (r \\ne 1), \\quad S_\\infty = \\frac{a}{1 - r} \\; (|r| < 1)',
    '\\text{AM} = \\frac{a + b}{2}, \\quad \\text{GM} = \\sqrt{ab}, \\quad \\text{AM} \\ge \\text{GM} \\; (\\text{for } a, b > 0)',
    '\\sum_{k=1}^n k = \\frac{n(n+1)}{2}, \\quad \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2',
    '\\text{AGP Sum}: S_\\infty = \\frac{a}{1 - r} + \\frac{d \\cdot r}{(1 - r)^2} \\quad (|r| < 1)',
    '\\text{Telescoping Sum}: \\sum_{k=1}^n (V_k - V_{k-1}) = V_n - V_0',
    '\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}, \\quad \\frac{1}{k(k+1)(k+2)} = \\frac{1}{2}\\left[\\frac{1}{k(k+1)} - \\frac{1}{(k+1)(k+2)}\\right]'
  ],
  topics: [
    {
      id: 'math-seq-1-ap-gp-means',
      name: '11.7.1 Arithmetic & Geometric Progressions, Means & AM-GM Inequality',
      description: 'General term, sum of n terms, insertion of arithmetic and geometric means between two numbers, application of AM >= GM inequality to find minimum/maximum values.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-seq-2-agp-series',
      name: '11.7.2 Arithmetico-Geometric Progressions (AGP)',
      description: 'Finite and infinite AGP series, standard technique of multiplying by common ratio and subtracting (S - rS).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'math-seq-3-special-sums-telescoping',
      name: '11.7.3 Sums of Powers, Method of Differences & Telescoping Series',
      description: 'Sigma notation properties, sum of k, k^2, k^3, partial fractions telescoping series (V_n - V_(n-1)), method of differences for sequence whose second differences form AP/GP.',
      estimatedHours: 7,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Sequences and Series is a core scoring chapter in JEE Main. Telescoping series and AGP sums are guaranteed appearances in nearly every shift.',
    ncertPointers: [
      'In an AP, the sum of terms equidistant from the beginning and end is constant and equal to the sum of the first and last terms: a_k + a_(n-k+1) = a_1 + a_n.',
      'For any set of positive numbers: AM >= GM. Equality holds if and only if all numbers in the set are equal.',
      'If the ratio of sums of two APs is given as S_n / S\'_n = f(n), to find the ratio of their n-th terms T_n / T\'_n, replace n with (2n - 1).'
    ],
    commonTraps: [
      'Using the infinite GP formula S_inf = a / (1 - r) when |r| >= 1! The formula is valid strictly for |r| < 1.',
      'In telescoping sums, failing to check which initial and terminal terms survive cancellation.'
    ],
    shortcutsVsConcepts: [
      'Ratio of n-th terms of two APs: If S_n / S\'_n = (an + b) / (cn + d), then T_n / T\'_n = [a(2n - 1) + b] / [c(2n - 1) + d]. Solves in 10 seconds!',
      'AM-GM for expressions like a^x + a^(-x) >= 2 or x + 1/x >= 2 (for x > 0).'
    ]
  },
  ncertPointers: [
    'In an AP, the sum of terms equidistant from the beginning and end is constant and equal to the sum of the first and last terms: a_k + a_(n-k+1) = a_1 + a_n.',
    'For any set of positive numbers: AM >= GM. Equality holds if and only if all numbers in the set are equal.',
    'If the ratio of sums of two APs is given as S_n / S\'_n = f(n), to find the ratio of their n-th terms T_n / T\'_n, replace n with (2n - 1).'
  ],
  commonTraps: [
    'Using the infinite GP formula S_inf = a / (1 - r) when |r| >= 1! The formula is valid strictly for |r| < 1.',
    'In telescoping sums, failing to check which initial and terminal terms survive cancellation.'
  ],
  shortcutsVsConcepts: [
    'Ratio of n-th terms of two APs: If S_n / S\'_n = (an + b) / (cn + d), then T_n / T\'_n = [a(2n - 1) + b] / [c(2n - 1) + d]. Solves in 10 seconds!',
    'AM-GM for expressions like a^x + a^(-x) >= 2 or x + 1/x >= 2 (for x > 0).'
  ]
};
