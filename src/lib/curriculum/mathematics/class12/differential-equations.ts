import { Chapter } from '@/types';

export const differentialEquationsChapter: Chapter = {
  id: 'math-c12-differential-equations',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Differential Equations',
  unit: 'Calculus',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Order: highest derivative order; Degree: highest power of highest derivative after clearing radicals/fractions}',
    '\\text{Separable Variables}: f(x) dx + g(y) dy = 0 \\implies \\int f(x) dx + \\int g(y) dy = C',
    '\\text{Homogeneous}: \\frac{dy}{dx} = f\\left(\\frac{y}{x}\\right) \\implies \\text{substitute } y = v x, \\; \\frac{dy}{dx} = v + x\\frac{dv}{dx}',
    '\\text{Linear in } y: \\frac{dy}{dx} + P(x) y = Q(x) \\implies \\text{IF} = e^{\\int P(x) dx}, \\quad y \\cdot \\text{IF} = \\int Q(x) \\cdot \\text{IF} \\, dx + C',
    '\\text{Linear in } x: \\frac{dx}{dy} + P(y) x = Q(y) \\implies \\text{IF} = e^{\\int P(y) dy}, \\quad x \\cdot \\text{IF} = \\int Q(y) \\cdot \\text{IF} \\, dy + C',
    '\\text{Bernoulli Equation}: \\frac{dy}{dx} + P(x)y = Q(x) y^n \\implies \\text{divide by } y^n, \\text{ let } z = y^{1-n}',
    'd(xy) = x dy + y dx, \\quad d\\left(\\frac{y}{x}\\right) = \\frac{x dy - y dx}{x^2}, \\quad d\\left(\\tan^{-1}\\frac{y}{x}\\right) = \\frac{x dy - y dx}{x^2 + y^2}',
    'd(x^2 + y^2) = 2(x dx + y dy)'
  ],
  topics: [
    {
      id: 'math-de-1-order-degree-formation',
      name: '12.11.1 Order, Degree & Formation of Differential Equations',
      description: 'Identifying order and polynomial degree (when defined), eliminating arbitrary constants to formulate differential equations of families of curves.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'math-de-2-separable-homogeneous',
      name: '12.11.2 Variable Separable & Homogeneous Differential Equations',
      description: 'Separation of variables, substitution reducible to separable (ax + by + c), homogeneous equations y = vx, orthogonal trajectories.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-de-3-linear-differential-exact',
      name: '12.11.3 Linear Differential Equations (LDE) & Exact Differentials',
      description: 'Integrating factors e^(int P dx), LDE in y and LDE in x, Bernoulli reductions, exact differential inspection shortcuts.',
      estimatedHours: 8,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Differential Equations is tested in 100% of JEE Main shifts (1 to 2 questions). The vast majority of questions either test First-Order Linear Differential Equations (LDE) or exact differential grouping.',
    ncertPointers: [
      'Always ensure the coefficient of dy/dx is strictly 1 before identifying P(x) for the integrating factor!',
      'Recall exponent rules: e^(ln f(x)) = f(x) and e^(k ln f(x)) = [f(x)]^k.',
      'If dy/dx has complicated y terms in the denominator, consider inverting to dx/dy to check if it is linear in x.'
    ],
    commonTraps: [
      'Computing IF without dividing by the leading coefficient of dy/dx.',
      'Missing the constant of integration C when evaluating y * IF, which corrupts initial value problems y(x0) = y0.'
    ],
    shortcutsVsConcepts: [
      'Exact differential trick: If an equation has (x dy - y dx), divide by x^2 to get d(y/x), by y^2 to get -d(x/y), or by (x^2 + y^2) to get d(arctan(y/x)).',
      'Linear in x recognition: When an equation contains y and dy/dx in non-linear ways, but x appears strictly to degree 1, flip to dx/dy + P(y) x = Q(y).'
    ]
  },
  ncertPointers: [
    'Always ensure the coefficient of dy/dx is strictly 1 before identifying P(x) for the integrating factor!',
    'Recall exponent rules: e^(ln f(x)) = f(x) and e^(k ln f(x)) = [f(x)]^k.',
    'If dy/dx has complicated y terms in the denominator, consider inverting to dx/dy to check if it is linear in x.'
  ],
  commonTraps: [
    'Computing IF without dividing by the leading coefficient of dy/dx.',
    'Missing the constant of integration C when evaluating y * IF, which corrupts initial value problems y(x0) = y0.'
  ],
  shortcutsVsConcepts: [
    'Exact differential trick: If an equation has (x dy - y dx), divide by x^2 to get d(y/x), by y^2 to get -d(x/y), or by (x^2 + y^2) to get d(arctan(y/x)).',
    'Linear in x recognition: When an equation contains y and dy/dx in non-linear ways, but x appears strictly to degree 1, flip to dx/dy + P(y) x = Q(y).'
  ]
};
