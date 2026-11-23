import { Chapter } from '@/types';

export const setsRelationsFunctionsClass11Chapter: Chapter = {
  id: 'math-c11-sets-relations-functions',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Sets, Relations & Functions (Class 11 Foundations)',
  unit: 'Algebra & Foundations',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    'n(A \\cup B) = n(A) + n(B) - n(A \\cap B)',
    'n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C)',
    'n(A - B) = n(A) - n(A \\cap B) = n(A \\cap B\')',
    '\\text{De Morgan\'s Laws}: (A \\cup B)\' = A\' \\cap B\', \\quad (A \\cap B)\' = A\' \\cup B\'',
    '\\text{Total Subsets of Set with } n \\text{ elements} = 2^n, \\quad \\text{Proper Subsets} = 2^n - 1',
    '\\text{Number of Relations from } A \\text{ to } B = 2^{n(A) \\times n(B)}',
    '\\text{Domain of } \\sqrt{f(x)} \\implies f(x) \\ge 0; \\quad \\text{Domain of } \\frac{1}{\\sqrt{f(x)}} \\implies f(x) > 0',
    '\\text{Domain of } \\log_a(x) \\implies x > 0, \\; a > 0, \\; a \\ne 1',
    '\\text{Domain of } \\sin^{-1}(f(x)) \\text{ or } \\cos^{-1}(f(x)) \\implies -1 \\le f(x) \\le 1'
  ],
  topics: [
    {
      id: 'math-sets-1-algebra-cardinality',
      name: '11.1.1 Sets, Operations & Cardinality Involving Venn Diagrams',
      description: 'Subsets, power sets, universal set, complement, union, intersection, difference, symmetric difference A Delta B = (A - B) U (B - A), cardinality word problems with 2 and 3 sets.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'math-sets-2-cartesian-relations',
      name: '11.1.2 Cartesian Product & Domain-Range of Relations',
      description: 'Ordered pairs, Cartesian product A x B, properties of Cartesian product, definition of a relation as a subset of A x B, domain, codomain, range of a relation, inverse relation.',
      estimatedHours: 4,
      isHighWeightage: false
    },
    {
      id: 'math-sets-3-domain-range-real-functions',
      name: '11.1.3 Domain and Range of Real Functions & Transformations',
      description: 'Polynomial, rational, modulus |x|, signum sgn(x), greatest integer [x], fractional part {x}, exponential and logarithmic functions; algebraic combination of functions and finding domain and range.',
      estimatedHours: 7,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Sets, Relations and Functions form the foundational vocabulary of all of JEE Mathematics. Finding the domain of composite and logarithmic/irrational functions is tested directly and as part of calculus.',
    ncertPointers: [
      'The empty set phi is a subset of every set. Every set is a subset of itself.',
      'If A has n elements, the power set P(A) contains 2^n elements, all of which are sets themselves.',
      'Greatest integer function [x] satisfies x - 1 < [x] <= x and [x] + [-x] = 0 (if x is integer) or -1 (if x is not integer).'
    ],
    commonTraps: [
      'Forgetting the base condition in logarithmic inequalities: if base a in (0, 1), the inequality sign flips!',
      'Canceling terms in rational inequalities without noting that the canceled factor cannot equal zero (denominator != 0).',
      'Confusing codomain with range: Range is strictly the set of all actual outputs f(x), which is a subset of codomain.'
    ],
    shortcutsVsConcepts: [
      'Wavy Curve Method (Method of Intervals): Factorize the polynomial, mark critical points on number line. For even powers, sign remains unchanged; for odd powers, sign alternates.',
      'Symmetric difference: n(A Delta B) = n(A) + n(B) - 2 n(A cap B).'
    ]
  },
  ncertPointers: [
    'The empty set phi is a subset of every set. Every set is a subset of itself.',
    'If A has n elements, the power set P(A) contains 2^n elements, all of which are sets themselves.',
    'Greatest integer function [x] satisfies x - 1 < [x] <= x and [x] + [-x] = 0 (if x is integer) or -1 (if x is not integer).'
  ],
  commonTraps: [
    'Forgetting the base condition in logarithmic inequalities: if base a in (0, 1), the inequality sign flips!',
    'Canceling terms in rational inequalities without noting that the canceled factor cannot equal zero (denominator != 0).',
    'Confusing codomain with range: Range is strictly the set of all actual outputs f(x), which is a subset of codomain.'
  ],
  shortcutsVsConcepts: [
    'Wavy Curve Method (Method of Intervals): Factorize the polynomial, mark critical points on number line. For even powers, sign remains unchanged; for odd powers, sign alternates.',
    'Symmetric difference: n(A Delta B) = n(A) + n(B) - 2 n(A cap B).'
  ]
};
