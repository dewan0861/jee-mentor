import { Chapter } from '@/types';

export const trigonometricFunctionsChapter: Chapter = {
  id: 'math-c11-trigonometric-functions',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Trigonometric Functions & Equations',
  unit: 'Trigonometry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B, \\quad \\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B',
    '\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}, \\quad \\tan(A + B + C) = \\frac{S_1 - S_3}{1 - S_2}',
    '\\sin 2A = 2\\sin A \\cos A = \\frac{2\\tan A}{1 + \\tan^2 A}, \\quad \\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A = \\frac{1 - \\tan^2 A}{1 + \\tan^2 A}',
    '\\sin 3A = 3\\sin A - 4\\sin^3 A, \\quad \\cos 3A = 4\\cos^3 A - 3\\cos A, \\quad \\tan 3A = \\frac{3\\tan A - \\tan^3 A}{1 - 3\\tan^2 A}',
    '2\\sin A \\cos B = \\sin(A + B) + \\sin(A - B), \\quad 2\\cos A \\cos B = \\cos(A + B) + \\cos(A - B)',
    '\\sin C + \\sin D = 2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right), \\quad \\cos C - \\cos D = -2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)',
    '\\sin x = \\sin \\alpha \\implies x = n\\pi + (-1)^n \\alpha, \\; n \\in \\mathbb{Z}',
    '\\cos x = \\cos \\alpha \\implies x = 2n\\pi \\pm \\alpha, \\; n \\in \\mathbb{Z}',
    '\\tan x = \\tan \\alpha \\implies x = n\\pi + \\alpha, \\; n \\in \\mathbb{Z}',
    '\\sin^2 x = \\sin^2 \\alpha \\implies x = n\\pi \\pm \\alpha, \\; n \\in \\mathbb{Z}',
    'a\\cos x + b\\sin x = r\\cos(x - \\phi) \\implies -\\sqrt{a^2 + b^2} \\le a\\cos x + b\\sin x \\le \\sqrt{a^2 + b^2}'
  ],
  topics: [
    {
      id: 'math-trig-1-compound-multiple-angles',
      name: '11.2.1 Compound, Multiple & Sub-Multiple Angle Identities',
      description: 'Addition and subtraction formulas, double and triple angle identities, product-to-sum and sum-to-product transformations, values at special angles 15, 75, 18, 36, 54, 72 degrees.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'math-trig-2-conditional-series',
      name: '11.2.2 Conditional Identities & Trigonometric Summation Series',
      description: 'Identities in a triangle A + B + C = pi; telescoping series of sine and cosine products like cos(x)cos(2x)...cos(2^(n-1)x) = sin(2^n x) / (2^n sin x).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'math-trig-3-equations-general-solutions',
      name: '11.2.3 Trigonometric Equations, General Solutions & Boundedness',
      description: 'Principal and general solutions, solving quadratic forms in sin/cos, a cos x + b sin x = c solubility condition c^2 <= a^2 + b^2, extraneous root filtering.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Trigonometry is an essential structural tool in JEE. While tested directly through trigonometric equations and series products, its identities appear in nearly every calculus and coordinate geometry problem.',
    ncertPointers: [
      'sin(18 deg) = (sqrt(5) - 1) / 4 and cos(36 deg) = (sqrt(5) + 1) / 4. These two values appear frequently.',
      'The range of a cos x + b sin x is [-sqrt(a^2 + b^2), sqrt(a^2 + b^2)]. The equation a cos x + b sin x = c has real solutions if and only if |c| <= sqrt(a^2 + b^2).',
      'For general solutions: remember that squaring both sides introduces extraneous roots. Always check roots in the original equation.'
    ],
    commonTraps: [
      'Dividing an equation by cos x or sin x without checking if cos x = 0 is a root (leads to lost roots).',
      'Forgetting that tan x, cot x, sec x, and csc x have points of discontinuity: tan x and sec x are undefined when x = (2n + 1) pi / 2.'
    ],
    shortcutsVsConcepts: [
      'Product formula: cos theta * cos 2theta * cos 4theta ... cos(2^(n-1) theta) = sin(2^n theta) / (2^n sin theta).',
      'Sum of sines with angles in AP: sin alpha + sin(alpha + beta) + ... + sin(alpha + (n-1)beta) = [sin(n beta / 2) / sin(beta / 2)] * sin(alpha + (n-1)beta / 2).'
    ]
  },
  ncertPointers: [
    'sin(18 deg) = (sqrt(5) - 1) / 4 and cos(36 deg) = (sqrt(5) + 1) / 4. These two values appear frequently.',
    'The range of a cos x + b sin x is [-sqrt(a^2 + b^2), sqrt(a^2 + b^2)]. The equation a cos x + b sin x = c has real solutions if and only if |c| <= sqrt(a^2 + b^2).',
    'For general solutions: remember that squaring both sides introduces extraneous roots. Always check roots in the original equation.'
  ],
  commonTraps: [
    'Dividing an equation by cos x or sin x without checking if cos x = 0 is a root (leads to lost roots).',
    'Forgetting that tan x, cot x, sec x, and csc x have points of discontinuity: tan x and sec x are undefined when x = (2n + 1) pi / 2.'
  ],
  shortcutsVsConcepts: [
    'Product formula: cos theta * cos 2theta * cos 4theta ... cos(2^(n-1) theta) = sin(2^n theta) / (2^n sin theta).',
    'Sum of sines with angles in AP: sin alpha + sin(alpha + beta) + ... + sin(alpha + (n-1)beta) = [sin(n beta / 2) / sin(beta / 2)] * sin(alpha + (n-1)beta / 2).'
  ]
};
