import { Chapter } from '@/types';

export const relationsFunctionsClass12Chapter: Chapter = {
  id: 'math-c12-relations-functions',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Relations and Functions (Class 12 Advanced)',
  unit: 'Calculus & Foundations',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Reflexive}: (a, a) \\in R \\; \\forall a \\in A',
    '\\text{Symmetric}: (a, b) \\in R \\implies (b, a) \\in R',
    '\\text{Transitive}: (a, b) \\in R \\text{ and } (b, c) \\in R \\implies (a, c) \\in R',
    '\\text{Equivalence Relation}: \\text{Reflexive, Symmetric, and Transitive}',
    '\\text{One-One (Injective)}: f(x_1) = f(x_2) \\implies x_1 = x_2',
    '\\text{Onto (Surjective)}: \\text{Range}(f) = \\text{Codomain}(f)',
    '\\text{Bijective}: \\text{Both One-One and Onto} \\iff f \\text{ is invertible } (f^{-1} \\text{ exists})',
    '\\text{Number of One-One Functions from } A \\text{ to } B \\; (|A|=n, |B|=m): \\begin{cases} P(m, n) & \\text{if } m \\ge n \\\\ 0 & \\text{if } m < n \\end{cases}',
    '\\text{Number of Onto Functions } (|A|=n, |B|=m): \\sum_{k=0}^m (-1)^k \\binom{m}{k}(m - k)^n',
    '\\text{Composite Functions}: (g \\circ f)(x) = g(f(x)), \\quad \\text{Domain}: x \\in \\text{Dom}(f) \\text{ and } f(x) \\in \\text{Dom}(g)'
  ],
  topics: [
    {
      id: 'math-rel-1-types-equivalence',
      name: '12.1.1 Types of Relations & Equivalence Classes',
      description: 'Reflexive, symmetric, transitive relations, equivalence relations, equivalence classes, partition of a set into disjoint equivalence classes, smallest equivalence relation.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'math-rel-2-injective-surjective-bijective',
      name: '12.1.2 Injective, Surjective & Bijective Functions',
      description: 'Horizontal line test, calculus monotonicity test (strictly increasing/decreasing over domain implies one-one), finding range and checking onto condition, counting one-one, onto, and bijective functions.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-rel-3-composition-invertible',
      name: '12.1.3 Composition of Functions & Inverse Functions',
      description: 'Composition of piecewise defined functions, domain of g(f(x)), conditions for invertibility, finding the explicit inverse function f^(-1)(x), and symmetry about y = x.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Class 12 Relations and Functions connects algebra and calculus. Equivalence relations and the determination of injectivity/surjectivity using derivatives are frequently tested.',
    ncertPointers: [
      'A relation R is an equivalence relation if and only if it is reflexive, symmetric, and transitive.',
      'A function f is invertible if and only if it is a bijection (both one-one and onto).',
      'The graphs of y = f(x) and y = f^(-1)(x) are reflections of each other across the identity line y = x.'
    ],
    commonTraps: [
      'Checking injectivity on piecewise functions: testing each branch separately is NOT enough! Must verify whether ranges of distinct branches overlap.',
      'Forgetting that onto depends strictly on the given CODOMAIN. If codomain is R and range is [0, inf), f is NOT onto!'
    ],
    shortcutsVsConcepts: [
      'Calculus test for injectivity: If f\'(x) > 0 for all x in domain (strictly increasing) or f\'(x) < 0 for all x (strictly decreasing), then f(x) is guaranteed to be one-one!',
      'Counting bijections: If |A| = |B| = n, the total number of bijective functions is n!.'
    ]
  },
  ncertPointers: [
    'A relation R is an equivalence relation if and only if it is reflexive, symmetric, and transitive.',
    'A function f is invertible if and only if it is a bijection (both one-one and onto).',
    'The graphs of y = f(x) and y = f^(-1)(x) are reflections of each other across the identity line y = x.'
  ],
  commonTraps: [
    'Checking injectivity on piecewise functions: testing each branch separately is NOT enough! Must verify whether ranges of distinct branches overlap.',
    'Forgetting that onto depends strictly on the given CODOMAIN. If codomain is R and range is [0, inf), f is NOT onto!'
  ],
  shortcutsVsConcepts: [
    'Calculus test for injectivity: If f\'(x) > 0 for all x in domain (strictly increasing) or f\'(x) < 0 for all x (strictly decreasing), then f(x) is guaranteed to be one-one!',
    'Counting bijections: If |A| = |B| = n, the total number of bijective functions is n!.'
  ]
};
