import { Chapter } from '@/types';

export const straightLinesChapter: Chapter = {
  id: 'math-c11-straight-lines',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Straight Lines & Pair of Lines',
  unit: 'Coordinate Geometry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Slope } m = \\tan\\theta = \\frac{y_2 - y_1}{x_2 - x_1}, \\quad \\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|',
    '\\text{Parallel}: m_1 = m_2; \\quad \\text{Perpendicular}: m_1 m_2 = -1',
    '\\text{Intercept Form}: \\frac{x}{a} + \\frac{y}{b} = 1, \\quad \\text{Normal Form}: x\\cos\\alpha + y\\sin\\alpha = p',
    '\\text{Perpendicular Distance}: d = \\frac{|a x_0 + b y_0 + c|}{\\sqrt{a^2 + b^2}}, \\quad d_{\\text{parallel}} = \\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}}',
    '\\text{Foot of Perpendicular } (x, y) \\text{ from } (x_1, y_1): \\frac{x - x_1}{a} = \\frac{y - y_1}{b} = -\\frac{a x_1 + b y_1 + c}{a^2 + b^2}',
    '\\text{Image (Reflection) } (x, y) \\text{ of } (x_1, y_1): \\frac{x - x_1}{a} = \\frac{y - y_1}{b} = -2\\frac{a x_1 + b y_1 + c}{a^2 + b^2}',
    '\\text{Family of Lines}: L_1 + \\lambda L_2 = 0',
    '\\text{Euler Line}: H(\\text{Orthocenter}), \\; G(\\text{Centroid}), \\; O(\\text{Circumcenter}) \\text{ are collinear with } HG : GO = 2 : 1'
  ],
  topics: [
    {
      id: 'math-line-1-forms-slopes-angles',
      name: '11.8.1 Forms of Straight Lines, Slopes & Angles',
      description: 'Point-slope, two-point, intercept, normal, parametric symmetric forms (x - x1)/cos theta = (y - y1)/sin theta = r, angle between lines, concurrency of three lines.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-line-2-distance-foot-image',
      name: '11.8.2 Perpendicular Distance, Foot of Perpendicular & Image of Point',
      description: 'Distance from point to line, distance between parallel lines, coordinates of foot of perpendicular, image/reflection of point in a line, position of points relative to a line.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-line-3-family-centers-bisectors',
      name: '11.8.3 Family of Lines, Triangle Centers & Angle Bisectors',
      description: 'Equation of family of lines L1 + lambda L2 = 0, fixed point of concurrent lines, finding centroid, circumcenter, orthocenter, incenter, and equations of acute/obtuse angle bisectors.',
      estimatedHours: 7,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Straight Lines is the cornerstone of coordinate geometry. Foot of perpendicular, reflection formulas, and family of lines (fixed points) are tested extensively.',
    ncertPointers: [
      'The foot of perpendicular from (x1, y1) onto ax + by + c = 0 is obtained directly via (x - x1)/a = (y - y1)/b = -(ax1 + by1 + c)/(a^2 + b^2).',
      'The image/reflection of (x1, y1) uses the exact same formula with a factor of -2.',
      'In any triangle, the orthocenter (H), centroid (G), and circumcenter (O) are collinear, with G dividing HO in the ratio 2 : 1.'
    ],
    commonTraps: [
      'Calculating distance between parallel lines when their coefficients a and b are not identical (e.g. 2x + 3y + 4 = 0 and 4x + 6y + 5 = 0; must divide the second equation by 2 first!).',
      'Confusing the acute angle bisector with the obtuse angle bisector: check the sign of a1 a2 + b1 b2 after making constant terms c1, c2 positive.'
    ],
    shortcutsVsConcepts: [
      'Parametric form shortcut: To find points on a line at distance r from (x1, y1): (x1 + r cos theta, y1 + r sin theta). Extremely fast for intersection with conics!',
      'Fixed point of a variable line: If a line equation can be rearranged as (a1 x + b1 y + c1) + lambda (a2 x + b2 y + c2) = 0, it ALWAYS passes through the fixed point of intersection of L1 and L2.'
    ]
  },
  ncertPointers: [
    'The foot of perpendicular from (x1, y1) onto ax + by + c = 0 is obtained directly via (x - x1)/a = (y - y1)/b = -(ax1 + by1 + c)/(a^2 + b^2).',
    'The image/reflection of (x1, y1) uses the exact same formula with a factor of -2.',
    'In any triangle, the orthocenter (H), centroid (G), and circumcenter (O) are collinear, with G dividing HO in the ratio 2 : 1.'
  ],
  commonTraps: [
    'Calculating distance between parallel lines when their coefficients a and b are not identical (e.g. 2x + 3y + 4 = 0 and 4x + 6y + 5 = 0; must divide the second equation by 2 first!).',
    'Confusing the acute angle bisector with the obtuse angle bisector: check the sign of a1 a2 + b1 b2 after making constant terms c1, c2 positive.'
  ],
  shortcutsVsConcepts: [
    'Parametric form shortcut: To find points on a line at distance r from (x1, y1): (x1 + r cos theta, y1 + r sin theta). Extremely fast for intersection with conics!',
    'Fixed point of a variable line: If a line equation can be rearranged as (a1 x + b1 y + c1) + lambda (a2 x + b2 y + c2) = 0, it ALWAYS passes through the fixed point of intersection of L1 and L2.'
  ]
};
