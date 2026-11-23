import { Chapter } from '@/types';

export const applicationOfDerivativesChapter: Chapter = {
  id: 'math-c12-application-of-derivatives',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Applications of Derivatives (Monotonicity & Extrema)',
  unit: 'Calculus',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Rate of Change}: \\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}',
    '\\text{Strictly Increasing on } [a, b]: f\'(x) > 0 \\; \\forall x \\in (a, b) \\quad (f\'(x) = 0 \\text{ at isolated points only})',
    '\\text{Strictly Decreasing on } [a, b]: f\'(x) < 0 \\; \\forall x \\in (a, b)',
    '\\text{Critical Points}: x = c \\text{ where } f\'(c) = 0 \\text{ or } f\'(c) \\text{ is undefined}',
    '\\text{First Derivative Test}: f\'(x) \\text{ changes from } + \\to - \\implies \\text{Local Maximum}; \\; - \\to + \\implies \\text{Local Minimum}',
    '\\text{Second Derivative Test}: f\'(c) = 0 \\text{ and } f\'\'(c) < 0 \\implies \\text{Local Max}; \\; f\'\'(c) > 0 \\implies \\text{Local Min}',
    '\\text{Absolute Extrema on } [a, b]: \\text{Compare values at all critical points and interval boundary endpoints } a, b',
    '\\text{Point of Inflection}: f\'\'(c) = 0 \\text{ or undefined, and } f\'\'(x) \\text{ changes sign across } c'
  ],
  topics: [
    {
      id: 'math-aod-1-rate-of-change',
      name: '12.7.1 Rate of Change of Quantities',
      description: 'Geometric problems (expanding spheres, conical tanks, moving ladders, shadows), relating rates using chain rule dy/dt = (dy/dx) * (dx/dt).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'math-aod-2-monotonicity-intervals',
      name: '12.7.2 Increasing & Decreasing Functions (Monotonicity)',
      description: 'Determining intervals of increase/decrease, proving inequalities using monotonicity f(x) > f(0), roots of transcendental equations.',
      estimatedHours: 7,
      isHighWeightage: true
    },
    {
      id: 'math-aod-3-maxima-minima-optimization',
      name: '12.7.3 Local & Absolute Maxima/Minima and Applied Optimization',
      description: 'First and second derivative tests, maximizing volume/area of geometric figures inscribed in cones/spheres, finding global extrema on closed intervals.',
      estimatedHours: 8,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Application of Derivatives is a cornerstone of JEE Main calculus. Following NTA\'s rationalization (which pruned Tangents/Normals and Rolle\'s/LMVT), questions strictly focus on Intervals of Monotonicity, Rate of Change, and Applied Maxima/Minima optimization.',
    ncertPointers: [
      'f(x) can be strictly increasing even if f\'(x) = 0 at isolated points (e.g., f(x) = x^3 has f\'(0) = 0 but is strictly increasing on R).',
      'For absolute extrema on a closed interval [a, b], you MUST test both endpoints f(a) and f(b) in addition to critical points inside (a, b).',
      'At a local extremum, the derivative is either 0 or DOES NOT EXIST (e.g., f(x) = |x| has a minimum at x = 0 where f\'(0) does not exist).'
    ],
    commonTraps: [
      'Assuming f\'(c) = 0 and f\'\'(c) = 0 implies no extremum. Use the First Derivative Test (sign change of f\') when f\'\'(c) = 0 (e.g. f(x) = x^4 has a minimum at 0).',
      'Forgetting to check boundary endpoints when asked for the MAXIMUM value of f(x) on [a, b].'
    ],
    shortcutsVsConcepts: [
      'Proving inequalities f(x) > g(x) for x > 0: Define h(x) = f(x) - g(x). Check h(0) = 0 and show h\'(x) > 0 for all x > 0. Then h(x) is strictly increasing => h(x) > h(0) = 0!',
      'Cylinder of maximum volume inscribed in a cone of height H and radius R has height h = H / 3 and radius r = 2R / 3.'
    ]
  },
  ncertPointers: [
    'f(x) can be strictly increasing even if f\'(x) = 0 at isolated points (e.g., f(x) = x^3 has f\'(0) = 0 but is strictly increasing on R).',
    'For absolute extrema on a closed interval [a, b], you MUST test both endpoints f(a) and f(b) in addition to critical points inside (a, b).',
    'At a local extremum, the derivative is either 0 or DOES NOT EXIST (e.g., f(x) = |x| has a minimum at x = 0 where f\'(0) does not exist).'
  ],
  commonTraps: [
    'Assuming f\'(c) = 0 and f\'\'(c) = 0 implies no extremum. Use the First Derivative Test (sign change of f\') when f\'\'(c) = 0 (e.g. f(x) = x^4 has a minimum at 0).',
    'Forgetting to check boundary endpoints when asked for the MAXIMUM value of f(x) on [a, b].'
  ],
  shortcutsVsConcepts: [
    'Proving inequalities f(x) > g(x) for x > 0: Define h(x) = f(x) - g(x). Check h(0) = 0 and show h\'(x) > 0 for all x > 0. Then h(x) is strictly increasing => h(x) > h(0) = 0!',
    'Cylinder of maximum volume inscribed in a cone of height H and radius R has height h = H / 3 and radius r = 2R / 3.'
  ]
};
