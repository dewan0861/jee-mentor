import { Chapter } from '@/types';

export const areaUnderCurvesChapter: Chapter = {
  id: 'math-c12-area-under-curves',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Area Under Curves & Applications of Integrals',
  unit: 'Calculus',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Area with x-axis}: A = \\int_a^b |y| dx = \\int_a^b |f(x)| dx',
    '\\text{Area with y-axis}: A = \\int_c^d |x| dy = \\int_c^d |g(y)| dy',
    '\\text{Area between two curves}: A = \\int_a^b [f_{\\text{upper}}(x) - g_{\\text{lower}}(x)] dx',
    '\\text{Area between } y^2 = 4ax \\text{ and } x^2 = 4by: A = \\frac{16 a b}{3}',
    '\\text{Area between } y^2 = 4ax \\text{ and } y = mx: A = \\frac{8 a^2}{3 m^3}',
    '\\text{Area of Ellipse } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1: A = \\pi a b',
    '\\text{Area between } y = |x| \\text{ and } y = 2 - x^2: \\text{use symmetry across } y\\text{-axis}: 2\\int_0^{x_0} (y_1 - y_2) dx'
  ],
  topics: [
    {
      id: 'math-auc-1-cartesian-bounded-regions',
      name: '12.10.1 Area Bounded by Standard Curves & Coordinate Axes',
      description: 'Single-curve bounded areas, finding intersection points with axes, accounting for regions below x-axis by taking absolute values.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'math-auc-2-two-curves-intersection',
      name: '12.10.2 Area Between Two Intersecting Curves (Conics & Lines)',
      description: 'Parabola-line, circle-parabola, and ellipse-line bounded regions, horizontal vs vertical strip selection, standard 16ab/3 and 8a^2/(3m^3) shortcuts.',
      estimatedHours: 7,
      isHighWeightage: true
    },
    {
      id: 'math-auc-3-inequalities-symmetry',
      name: '12.10.3 Regions Defined by Systems of Inequalities & Absolute Values',
      description: 'Graphing systems of inequalities (e.g. y >= x^2, x^2 + y^2 <= 2, y <= |x|), using symmetry to double/quadruple single-quadrant integrals.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Area Under Curves is tested in every JEE Main session (1 guaranteed question). Questions typically specify a region via simultaneous inequalities involving parabolas, lines, and absolute values.',
    ncertPointers: [
      'Always sketch the rough figure and find all intersection points before setting integration limits.',
      'If two curves intersect and cross each other, split the integral at the crossing point to ensure upper - lower is always positive.',
      'Check whether horizontal strips (dy integration) require fewer split intervals than vertical strips (dx integration).'
    ],
    commonTraps: [
      'Integrating without finding the intersection point, leading to wrong limits.',
      'Subtracting in the wrong order (lower - upper) producing a negative area.'
    ],
    shortcutsVsConcepts: [
      'Parabola y^2 = 4ax and line y = mx: Area = 8 a^2 / (3 m^3). Use directly to verify or solve in 10 seconds!',
      'Two parabolas y^2 = 4ax and x^2 = 4by: Area = 16 a b / 3.'
    ]
  },
  ncertPointers: [
    'Always sketch the rough figure and find all intersection points before setting integration limits.',
    'If two curves intersect and cross each other, split the integral at the crossing point to ensure upper - lower is always positive.',
    'Check whether horizontal strips (dy integration) require fewer split intervals than vertical strips (dx integration).'
  ],
  commonTraps: [
    'Integrating without finding the intersection point, leading to wrong limits.',
    'Subtracting in the wrong order (lower - upper) producing a negative area.'
  ],
  shortcutsVsConcepts: [
    'Parabola y^2 = 4ax and line y = mx: Area = 8 a^2 / (3 m^3). Use directly to verify or solve in 10 seconds!',
    'Two parabolas y^2 = 4ax and x^2 = 4by: Area = 16 a b / 3.'
  ]
};
