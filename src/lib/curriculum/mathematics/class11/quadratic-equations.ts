import { Chapter } from '@/types';

export const quadraticEquationsChapter: Chapter = {
  id: 'math-c11-quadratic-equations',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Quadratic Equations & Expressions',
  unit: 'Algebra',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    'a x^2 + b x + c = 0 \\implies x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad D = b^2 - 4ac',
    '\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha \\beta = \\frac{c}{a}, \\quad |\\alpha - \\beta| = \\frac{\\sqrt{D}}{|a|}',
    '\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = \\frac{b^2 - 2ac}{a^2}, \\quad \\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta)',
    '\\text{Newton\'s Sums}: S_n = a\\alpha^n + b\\beta^n \\implies a S_n + b S_{n-1} + c S_{n-2} = 0',
    '\\text{Both roots common to } a_1 x^2 + b_1 x + c_1 = 0 \\text{ and } a_2 x^2 + b_2 x + c_2 = 0 \\implies \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}',
    '\\text{One common root}: (c_1 a_2 - c_2 a_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)',
    'f(x) = ax^2 + bx + c > 0 \\; \\forall x \\in \\mathbb{R} \\iff a > 0 \\text{ and } D < 0',
    '\\text{Vertex of parabola } y = ax^2 + bx + c: \\left(-\\frac{b}{2a}, -\\frac{D}{4a}\\right)'
  ],
  topics: [
    {
      id: 'math-quad-1-roots-relations-newton',
      name: '11.4.1 Roots, Symmetric Functions & Newton\'s Sum Theorem',
      description: 'Discriminant, nature of roots (rational, irrational conjugate, complex conjugate), symmetric expressions of roots, Newton\'s recurrence relation a S_n + b S_(n-1) + c S_(n-2) = 0.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-quad-2-common-roots-transformation',
      name: '11.4.2 Common Roots & Transformation of Equations',
      description: 'Conditions for one common root and both common roots, equations whose roots are f(alpha), f(beta), reciprocal equations and higher-degree reducible equations.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'math-quad-3-location-of-roots',
      name: '11.4.3 Location of Roots & Quadratic Inequalities',
      description: 'Conditions on parameters for both roots greater than k, both roots less than k, k lying between roots (af(k) < 0), exactly one root in (k1, k2), and both roots in (k1, k2).',
      estimatedHours: 7,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Quadratic Equations is one of the highest-yield chapters in JEE Algebra. Newton\'s sum formula and Location of Roots problems are guaranteed questions in almost every session.',
    ncertPointers: [
      'If coefficients a, b, c are rational and D is not a perfect square, roots occur in conjugate irrational pairs (p + sqrt(q) and p - sqrt(q)).',
      'If a, b, c are real, complex roots always occur in conjugate pairs (p + iq and p - iq).',
      'Newton\'s identity: If alpha, beta are roots of ax^2 + bx + c = 0 and S_n = alpha^n + beta^n, then a S_n + b S_(n-1) + c S_(n-2) = 0.'
    ],
    commonTraps: [
      'Forgetting that if D < 0 and a > 0, the quadratic expression is strictly positive for ALL real x (never crosses zero).',
      'In location of roots with a number k lying between the roots: the ONLY necessary and sufficient condition is a * f(k) < 0 (no need to check D >= 0 because a*f(k) < 0 guarantees real distinct roots!).'
    ],
    shortcutsVsConcepts: [
      'Newton\'s Sum shortcut: To evaluate expressions like (alpha^10 - beta^10 - 2 alpha^8 + 2 beta^8) / (2 alpha^9 - 2 beta^9), use Newton\'s relation directly in 2 lines!',
      'Common root between quadratic and higher degree polynomial: Find the roots of the quadratic (often 1, omega, omega^2 or simple integers) and substitute into the other equation.'
    ]
  },
  ncertPointers: [
    'If coefficients a, b, c are rational and D is not a perfect square, roots occur in conjugate irrational pairs (p + sqrt(q) and p - sqrt(q)).',
    'If a, b, c are real, complex roots always occur in conjugate pairs (p + iq and p - iq).',
    'Newton\'s identity: If alpha, beta are roots of ax^2 + bx + c = 0 and S_n = alpha^n + beta^n, then a S_n + b S_(n-1) + c S_(n-2) = 0.'
  ],
  commonTraps: [
    'Forgetting that if D < 0 and a > 0, the quadratic expression is strictly positive for ALL real x (never crosses zero).',
    'In location of roots with a number k lying between the roots: the ONLY necessary and sufficient condition is a * f(k) < 0 (no need to check D >= 0 because a*f(k) < 0 guarantees real distinct roots!).'
  ],
  shortcutsVsConcepts: [
    'Newton\'s Sum shortcut: To evaluate expressions like (alpha^10 - beta^10 - 2 alpha^8 + 2 beta^8) / (2 alpha^9 - 2 beta^9), use Newton\'s relation directly in 2 lines!',
    'Common root between quadratic and higher degree polynomial: Find the roots of the quadratic (often 1, omega, omega^2 or simple integers) and substitute into the other equation.'
  ]
};
