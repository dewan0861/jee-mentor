import { Chapter } from '@/types';

export const circlesChapter: Chapter = {
  id: 'math-c11-circles',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Circles & System of Circles',
  unit: 'Coordinate Geometry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{General Equation}: x^2 + y^2 + 2gx + 2fy + c = 0, \\quad \\text{Center } (-g, -f), \\; r = \\sqrt{g^2 + f^2 - c}',
    '\\text{Intercepts}: 2\\sqrt{g^2 - c} \\; (\\text{on } x\\text{-axis}), \\quad 2\\sqrt{f^2 - c} \\; (\\text{on } y\\text{-axis})',
    '\\text{Diameter Form}: (x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0',
    '\\text{Tangent (Point Form)}: T = 0 \\implies x x_1 + y y_1 + g(x + x_1) + f(y + y_1) + c = 0',
    '\\text{Tangent (Slope Form to } x^2 + y^2 = r^2\\text{)}: y = mx \\pm r\\sqrt{1 + m^2}',
    '\\text{Condition of Tangency to } x^2 + y^2 = r^2: c^2 = r^2(1 + m^2)',
    '\\text{Length of Tangent from } (x_1, y_1): L = \\sqrt{S_1} = \\sqrt{x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c}',
    '\\text{Chord of Contact}: T = 0 \\quad (\\text{from external point } P(x_1, y_1))',
    '\\text{Director Circle}: x^2 + y^2 = 2r^2 \\quad (\\text{Locus of perpendicular tangents})',
    '\\text{Orthogonal Circles}: 2g_1 g_2 + 2f_1 f_2 = c_1 + c_2',
    '\\text{Family of Circles}: S + \\lambda L = 0, \\quad S_1 + \\lambda S_2 = 0'
  ],
  topics: [
    {
      id: 'math-circle-1-standards-tangents',
      name: '11.9.1 Standard Equations, Intercepts & Tangents',
      description: 'General equation, parametric coordinates (x0 + r cos theta, y0 + r sin theta), conditions of tangency c^2 = r^2(1 + m^2), point of contact coordinates.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-circle-2-chords-director-power',
      name: '11.9.2 Chord of Contact, Director Circle & Power of a Point',
      description: 'Equation of chord with given midpoint T = S1, chord of contact T = 0, area of triangle formed by pair of tangents and chord of contact, director circle radius sqrt(2) r.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-circle-3-common-tangents-orthogonal',
      name: '11.9.3 Common Tangents, Family of Circles & Orthogonality',
      description: 'Centers distance C1C2 vs r1 +- r2 (4, 3, 2, 1, or 0 common tangents), internal and external centers of similitude, radical axis S1 - S2 = 0, orthogonal circles condition 2g1g2 + 2f1f2 = c1 + c2.',
      estimatedHours: 7,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Circles is tested both independently (tangents, orthogonal circles, family of circles) and as the foundation for all other conic sections.',
    ncertPointers: [
      'The length of tangent from an external point (x1, y1) to circle S = 0 is sqrt(S1).',
      'Two circles cut orthogonally if and only if 2 g1 g2 + 2 f1 f2 = c1 + c2.',
      'The radical axis of two circles S1 = 0 and S2 = 0 is S1 - S2 = 0, which is perpendicular to the line joining their centers.'
    ],
    commonTraps: [
      'Applying the length of tangent formula sqrt(S1) when the coefficients of x^2 and y^2 are not 1 (must divide through by the coefficient of x^2 first!).',
      'Assuming two circles intersect when C1C2 < r1 + r2 without checking if C1C2 > |r1 - r2| (one could be entirely inside the other).'
    ],
    shortcutsVsConcepts: [
      'Condition for line y = mx + c to touch circle (x - h)^2 + (y - k)^2 = r^2: Perpendicular distance from center (h, k) to line equals radius: |mh - k + c| / sqrt(1 + m^2) = r.',
      'Area of triangle formed by pair of tangents from P and their chord of contact: Delta = (r * L^3) / (r^2 + L^2), where L = sqrt(S1).'
    ]
  },
  ncertPointers: [
    'The length of tangent from an external point (x1, y1) to circle S = 0 is sqrt(S1).',
    'Two circles cut orthogonally if and only if 2 g1 g2 + 2 f1 f2 = c1 + c2.',
    'The radical axis of two circles S1 = 0 and S2 = 0 is S1 - S2 = 0, which is perpendicular to the line joining their centers.'
  ],
  commonTraps: [
    'Applying the length of tangent formula sqrt(S1) when the coefficients of x^2 and y^2 are not 1 (must divide through by the coefficient of x^2 first!).',
    'Assuming two circles intersect when C1C2 < r1 + r2 without checking if C1C2 > |r1 - r2| (one could be entirely inside the other).'
  ],
  shortcutsVsConcepts: [
    'Condition for line y = mx + c to touch circle (x - h)^2 + (y - k)^2 = r^2: Perpendicular distance from center (h, k) to line equals radius: |mh - k + c| / sqrt(1 + m^2) = r.',
    'Area of triangle formed by pair of tangents from P and their chord of contact: Delta = (r * L^3) / (r^2 + L^2), where L = sqrt(S1).'
  ]
};
