import { Chapter } from '@/types';

export const differentiationChapter: Chapter = {
  id: 'math-c12-differentiation',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Methods of Differentiation',
  unit: 'Calculus',
  weightage: 'medium',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Chain Rule}: \\frac{d}{dx} f(g(x)) = f\'(g(x)) \\cdot g\'(x)',
    '\\text{Implicit Differentiation}: F(x, y) = 0 \\implies \\frac{dy}{dx} = -\\frac{\\partial F / \\partial x}{\\partial F / \\partial y}',
    '\\text{Logarithmic Differentiation}: y = [u(x)]^{v(x)} \\implies \\frac{dy}{dx} = [u(x)]^{v(x)} \\left[ v\'(x) \\ln(u(x)) + \\frac{v(x) u\'(x)}{u(x)} \\right]',
    '\\text{Parametric}: x = f(t), y = g(t) \\implies \\frac{dy}{dx} = \\frac{g\'(t)}{f\'(t)}, \\quad \\frac{d^2 y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\cdot \\frac{1}{f\'(t)} = \\frac{g\'\'(t) f\'(t) - g\'(t) f\'\'(t)}{(f\'(t))^3}',
    '\\text{Derivative of Inverse}: (f^{-1})\'(y) = \\frac{1}{f\'(x)} \\quad \\text{where } y = f(x)',
    '\\frac{d}{dx} \\sin^{-1} x = \\frac{1}{\\sqrt{1 - x^2}}, \\quad \\frac{d}{dx} \\tan^{-1} x = \\frac{1}{1 + x^2}, \\quad \\frac{d}{dx} \\sec^{-1} x = \\frac{1}{|x|\\sqrt{x^2 - 1}}',
    '\\text{Differentiation of Determinant}: \\frac{d}{dx} \\begin{vmatrix} f & g \\\\ u & v \\end{vmatrix} = \\begin{vmatrix} f\' & g\' \\\\ u & v \\end{vmatrix} + \\begin{vmatrix} f & g \\\\ u\' & v\' \\end{vmatrix}'
  ],
  topics: [
    {
      id: 'math-diff-1-chain-logarithmic-implicit',
      name: '12.6.1 Chain Rule, Logarithmic & Implicit Differentiation',
      description: 'Derivatives of variable-raised-to-variable functions u(x)^v(x), infinite power towers, partial derivative shortcut for implicit functions.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'math-diff-2-parametric-higher-order',
      name: '12.6.2 Parametric Functions & Higher-Order Derivatives',
      description: 'First and second derivatives in parametric forms, eliminating parameters, second derivative d^2y/dx^2 = (d/dt(dy/dx)) / (dx/dt).',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-diff-3-inverse-trig-substitutions',
      name: '12.6.3 Inverse Trigonometric Derivatives & Substitutions',
      description: 'Trigonometric substitutions (x = tan theta, sin theta) for simplifying complex arguments before differentiation.',
      estimatedHours: 5,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Methods of Differentiation provides the algebraic engine for all calculus. JEE Main frequently tests second derivatives of parametric functions and logarithmic differentiation of power towers.',
    ncertPointers: [
      'In parametric differentiation, d^2y/dx^2 is NOT simply (d^2y/dt^2) / (d^2x/dt^2). You must divide d/dt(dy/dx) by dx/dt!',
      'When differentiating implicit functions, terms like y^2 differentiate to 2y * (dy/dx).',
      'For y = x^x, dy/dx = x^x (1 + ln x).'
    ],
    commonTraps: [
      'Writing d^2y/dx^2 = y\'\'(t) / x\'\'(t) in parametric equations! This is the most common mistake in calculus.',
      'Forgetting the chain rule factor when differentiating inverse trig functions with composite arguments.'
    ],
    shortcutsVsConcepts: [
      'Partial derivative trick for implicit F(x, y) = 0: dy/dx = - (F_x) / (F_y), treating y as constant in numerator and x as constant in denominator.',
      'Infinite power tower y = x^(x^(x^...)): Rewrite as y = x^y, take ln: ln y = y ln x. Differentiate implicitly: y\'/y = y\' ln x + y/x => y\' = y^2 / [x (1 - y ln x)].'
    ]
  },
  ncertPointers: [
    'In parametric differentiation, d^2y/dx^2 is NOT simply (d^2y/dt^2) / (d^2x/dt^2). You must divide d/dt(dy/dx) by dx/dt!',
    'When differentiating implicit functions, terms like y^2 differentiate to 2y * (dy/dx).',
    'For y = x^x, dy/dx = x^x (1 + ln x).'
  ],
  commonTraps: [
    'Writing d^2y/dx^2 = y\'\'(t) / x\'\'(t) in parametric equations! This is the most common mistake in calculus.',
    'Forgetting the chain rule factor when differentiating inverse trig functions with composite arguments.'
  ],
  shortcutsVsConcepts: [
    'Partial derivative trick for implicit F(x, y) = 0: dy/dx = - (F_x) / (F_y), treating y as constant in numerator and x as constant in denominator.',
    'Infinite power tower y = x^(x^(x^...)): Rewrite as y = x^y, take ln: ln y = y ln x. Differentiate implicitly: y\'/y = y\' ln x + y/x => y\' = y^2 / [x (1 - y ln x)].'
  ]
};
