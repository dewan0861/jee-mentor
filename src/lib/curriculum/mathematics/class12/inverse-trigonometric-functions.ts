import { Chapter } from '@/types';

export const inverseTrigFunctionsChapter: Chapter = {
  id: 'math-c12-inverse-trig-functions',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Inverse Trigonometric Functions',
  unit: 'Trigonometry & Calculus',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\sin^{-1} x: [-1, 1] \\to \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right], \\quad \\cos^{-1} x: [-1, 1] \\to [0, \\pi]',
    '\\tan^{-1} x: \\mathbb{R} \\to \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right), \\quad \\cot^{-1} x: \\mathbb{R} \\to (0, \\pi)',
    '\\sin^{-1}(-x) = -\\sin^{-1} x, \\quad \\cos^{-1}(-x) = \\pi - \\cos^{-1} x, \\quad \\tan^{-1}(-x) = -\\tan^{-1} x',
    '\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}, \\quad \\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2}, \\quad \\sec^{-1} x + \\csc^{-1} x = \\frac{\\pi}{2}',
    '\\tan^{-1} x + \\tan^{-1} y = \\begin{cases} \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right) & xy < 1 \\\\ \\pi + \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right) & x > 0, y > 0, xy > 1 \\\\ -\\pi + \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right) & x < 0, y < 0, xy > 1 \\end{cases}',
    '\\tan^{-1} x - \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x-y}{1+xy}\\right) \\quad (xy > -1)',
    '2\\tan^{-1} x = \\sin^{-1}\\left(\\frac{2x}{1+x^2}\\right) = \\cos^{-1}\\left(\\frac{1-x^2}{1+x^2}\\right) = \\tan^{-1}\\left(\\frac{2x}{1-x^2}\\right) \\quad (|x| < 1)'
  ],
  topics: [
    {
      id: 'math-itf-1-domain-range-principal-values',
      name: '12.2.1 Domain, Range & Principal Value Branches',
      description: 'Definitions, domains, and principal value branches of the six inverse trigonometric functions; evaluating exact values for standard negative and non-standard arguments.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'math-itf-2-graphs-piecewise-self-composition',
      name: '12.2.2 Self-Composition Graphs: f^(-1)(f(x)) and f(f^(-1)(x))',
      description: 'Sawtooth graph of sin^(-1)(sin x), triangular wave of cos^(-1)(cos x), tan^(-1)(tan x), reduction of angles outside principal branches to values within principal intervals.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-itf-3-identities-series-equations',
      name: '12.2.3 Inverse Trigonometric Identities & Telescoping Series',
      description: 'Sum and difference of inverse tangents, telescoping summation series sum tan^(-1)((a_(k+1) - a_k) / (1 + a_k a_(k+1))), solving equations involving inverse trigonometric expressions.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Inverse Trigonometric Functions is high-yield in JEE Main and Advanced. Questions primarily test reduction of large angles in sin^(-1)(sin x) and telescoping summation of inverse tangents.',
    ncertPointers: [
      'The range of cos^(-1) x is [0, pi]. cos^(-1)(-x) = pi - cos^(-1) x, NOT -cos^(-1) x!',
      'sin^(-1)(sin x) = x is valid ONLY when x in [-pi/2, pi/2]. For x = 10 (radians), write x = 3pi + (10 - 3pi) so sin^(-1)(sin 10) = 3pi - 10.',
      'tan^(-1) x + cot^(-1) x = pi/2 for all real x.'
    ],
    commonTraps: [
      'Applying tan^(-1) x + tan^(-1) y = tan^(-1)((x+y)/(1-xy)) without checking if xy > 1! If x > 0, y > 0 and xy > 1, you MUST add pi!',
      'Assuming cot^(-1)(-x) = -cot^(-1) x (it is pi - cot^(-1) x because cot^(-1) range is (0, pi)).'
    ],
    shortcutsVsConcepts: [
      'Telescoping series shortcut: tan^(-1)(1 / (1 + k + k^2)) = tan^(-1)((k+1) - k / (1 + k(k+1))) = tan^(-1)(k+1) - tan^(-1)(k). All intermediate terms cancel!',
      'Graph shortcut for sin^(-1)(sin x): For odd multiples of pi (like pi, 3pi), slope is -1: y = (2n + 1)pi - x. For even multiples of pi (like 0, 2pi), slope is +1: y = x - 2n pi.'
    ]
  },
  ncertPointers: [
    'The range of cos^(-1) x is [0, pi]. cos^(-1)(-x) = pi - cos^(-1) x, NOT -cos^(-1) x!',
    'sin^(-1)(sin x) = x is valid ONLY when x in [-pi/2, pi/2]. For x = 10 (radians), write x = 3pi + (10 - 3pi) so sin^(-1)(sin 10) = 3pi - 10.',
    'tan^(-1) x + cot^(-1) x = pi/2 for all real x.'
  ],
  commonTraps: [
    'Applying tan^(-1) x + tan^(-1) y = tan^(-1)((x+y)/(1-xy)) without checking if xy > 1! If x > 0, y > 0 and xy > 1, you MUST add pi!',
    'Assuming cot^(-1)(-x) = -cot^(-1) x (it is pi - cot^(-1) x because cot^(-1) range is (0, pi)).'
  ],
  shortcutsVsConcepts: [
    'Telescoping series shortcut: tan^(-1)(1 / (1 + k + k^2)) = tan^(-1)((k+1) - k / (1 + k(k+1))) = tan^(-1)(k+1) - tan^(-1)(k). All intermediate terms cancel!',
    'Graph shortcut for sin^(-1)(sin x): For odd multiples of pi (like pi, 3pi), slope is -1: y = (2n + 1)pi - x. For even multiples of pi (like 0, 2pi), slope is +1: y = x - 2n pi.'
  ]
};
