import { Chapter } from '@/types';

export const indefiniteIntegrationChapter: Chapter = {
  id: 'math-c12-indefinite-integration',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Indefinite Integrals',
  unit: 'Calculus',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a} \\tan^{-1}\\left(\\frac{x}{a}\\right) + C, \\quad \\int \\frac{dx}{x^2 - a^2} = \\frac{1}{2a} \\ln\\left|\\frac{x - a}{x + a}\\right| + C',
    '\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\left(\\frac{x}{a}\\right) + C, \\quad \\int \\frac{dx}{\\sqrt{x^2 \\pm a^2}} = \\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right| + C',
    '\\int \\sqrt{a^2 - x^2} dx = \\frac{x}{2}\\sqrt{a^2 - x^2} + \\frac{a^2}{2}\\sin^{-1}\\left(\\frac{x}{a}\\right) + C',
    '\\int \\sqrt{x^2 \\pm a^2} dx = \\frac{x}{2}\\sqrt{x^2 \\pm a^2} \\pm \\frac{a^2}{2}\\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right| + C',
    '\\int u v dx = u \\int v dx - \\int \\left( u\' \\int v dx \\right) dx \\quad (\\text{ILATE Rule})',
    '\\int e^x [f(x) + f\'(x)] dx = e^x f(x) + C, \\quad \\int [f(x) + x f\'(x)] dx = x f(x) + C',
    '\\int \\frac{x^2 + 1}{x^4 + k x^2 + 1} dx = \\int \\frac{1 + 1/x^2}{(x - 1/x)^2 + (k + 2)} dx \\implies \\text{substitute } t = x - \\frac{1}{x}',
    '\\int \\frac{x^2 - 1}{x^4 + k x^2 + 1} dx = \\int \\frac{1 - 1/x^2}{(x + 1/x)^2 + (k - 2)} dx \\implies \\text{substitute } t = x + \\frac{1}{x}'
  ],
  topics: [
    {
      id: 'math-indef-1-substitution-standard-forms',
      name: '12.8.1 Method of Substitution & Standard Special Integrals',
      description: 'Algebraic and trigonometric substitutions, rationalization, quadratic denominators (completing the square).',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-indef-2-parts-exponential-tricks',
      name: '12.8.2 Integration by Parts & Exponential Special Forms',
      description: 'ILATE priority, reduction formulas, forms e^x [f(x) + f\'(x)] and e^(kx) [k f(x) + f\'(x)], recurring integrals.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-indef-3-partial-fractions-symmetric-quartic',
      name: '12.8.3 Partial Fractions & Symmetric Biquadratic Forms',
      description: 'Linear and quadratic partial fractions, evaluating integrals of (x^2 +- 1)/(x^4 + kx^2 + 1) by dividing by x^2.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Indefinite Integrals is both a standalone tested topic and the technical bedrock for Definite Integrals and Differential Equations. High-yield patterns include e^x[f(x) + f\'(x)] and symmetric biquadratics.',
    ncertPointers: [
      'In integration by parts, follow the ILATE priority: Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential.',
      'Always remember the constant of integration C.',
      'When integrating rational functions where degree of numerator >= degree of denominator, use polynomial long division first.'
    ],
    commonTraps: [
      'Forgetting the chain factor when integrating e^(kx)[k f(x) + f\'(x)].',
      'Confusing the signs in 1/(x^2 - a^2) vs 1/(a^2 - x^2).'
    ],
    shortcutsVsConcepts: [
      'Special form e^x [f(x) + f\'(x)] dx = e^x f(x) + C. For example, int e^x [(x - 1) / (x + 1)^3] dx = e^x / (x + 1)^2 + C.',
      'Biquadratic shortcut: (x^2 + 1)/(x^4 + 1): divide by x^2 to get (1 + 1/x^2) / [(x - 1/x)^2 + 2]. With t = x - 1/x, dt = (1 + 1/x^2) dx, yielding (1/sqrt(2)) arctan((x - 1/x)/sqrt(2)).'
    ]
  },
  ncertPointers: [
    'In integration by parts, follow the ILATE priority: Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential.',
    'Always remember the constant of integration C.',
    'When integrating rational functions where degree of numerator >= degree of denominator, use polynomial long division first.'
  ],
  commonTraps: [
    'Forgetting the chain factor when integrating e^(kx)[k f(x) + f\'(x)].',
    'Confusing the signs in 1/(x^2 - a^2) vs 1/(a^2 - x^2).'
  ],
  shortcutsVsConcepts: [
    'Special form e^x [f(x) + f\'(x)] dx = e^x f(x) + C. For example, int e^x [(x - 1) / (x + 1)^3] dx = e^x / (x + 1)^2 + C.',
    'Biquadratic shortcut: (x^2 + 1)/(x^4 + 1): divide by x^2 to get (1 + 1/x^2) / [(x - 1/x)^2 + 2]. With t = x - 1/x, dt = (1 + 1/x^2) dx, yielding (1/sqrt(2)) arctan((x - 1/x)/sqrt(2)).'
  ]
};
