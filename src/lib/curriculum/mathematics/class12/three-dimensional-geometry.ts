import { Chapter } from '@/types';

export const threeDimensionalGeometryChapter: Chapter = {
  id: 'math-c12-three-dimensional-geometry',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Three Dimensional Geometry (Lines & Direction Cosines)',
  unit: 'Vectors & 3D Geometry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Direction Cosines}: l = \\cos\\alpha, \\; m = \\cos\\beta, \\; n = \\cos\\gamma \\implies l^2 + m^2 + n^2 = 1',
    '\\text{Relation with Direction Ratios } (a, b, c): l = \\frac{a}{\\sqrt{a^2 + b^2 + c^2}}, \\; m = \\frac{b}{\\sqrt{a^2 + b^2 + c^2}}, \\; n = \\frac{c}{\\sqrt{a^2 + b^2 + c^2}}',
    '\\text{Vector Line}: \\vec{r} = \\vec{a} + \\lambda \\vec{b}, \\quad \\text{Cartesian Line}: \\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c} = \\lambda',
    '\\text{Angle between two lines}: \\cos\\theta = \\frac{|\\vec{b}_1 \\cdot \\vec{b}_2|}{|b_1||b_2|} = \\frac{|a_1 a_2 + b_1 b_2 + c_1 c_2|}{\\sqrt{a_1^2 + b_1^2 + c_1^2}\\sqrt{a_2^2 + b_2^2 + c_2^2}}',
    '\\text{Shortest Distance (Skew Lines)}: d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}',
    '\\text{Condition for Lines to Intersect (Coplanar)}: (\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 0 \\iff \\begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\\\ a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\end{vmatrix} = 0',
    '\\text{Shortest Distance (Parallel Lines)}: d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\times \\vec{b}|}{|b|}',
    '\\text{Foot of Perpendicular from } P(x_0, y_0, z_0) \\text{ to line}: Q(x_1 + a\\lambda, y_1 + b\\lambda, z_1 + c\\lambda) \\text{ where } \\vec{PQ} \\cdot \\vec{b} = 0'
  ],
  topics: [
    {
      id: 'math-3d-1-direction-cosines-ratios',
      name: '12.13.1 Direction Cosines, Direction Ratios & Line Equations',
      description: 'Direction cosines (l, m, n) and ratios (a, b, c), vector and Cartesian forms of lines passing through a point and parallel to a vector or passing through two points.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-3d-2-skew-lines-shortest-distance',
      name: '12.13.2 Skew Lines, Shortest Distance & Coplanar Intersecting Lines',
      description: 'Shortest distance between two skew lines in space, testing coplanarity and finding point of intersection of two 3D lines.',
      estimatedHours: 8,
      isHighWeightage: true
    },
    {
      id: 'math-3d-3-foot-perpendicular-image',
      name: '12.13.3 Foot of Perpendicular, Perpendicular Distance & Reflection in a Line',
      description: 'Parametric coordinates on a line Q(lambda), orthogonality condition PQ . b = 0, distance of a point from a 3D line, coordinates of reflected image.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'In the rationalized JEE 2027 syllabus, NTA completely removed the topic "Planes" from 3D Geometry. Consequently, all questions in 3D Geometry are concentrated on 3D Lines: Skew lines, Shortest distance, and Foot of perpendicular from a point to a line.',
    ncertPointers: [
      'Two lines in space are either intersecting, parallel, or skew (neither parallel nor intersecting, lying in different planes).',
      'For any direction cosines, l^2 + m^2 + n^2 = 1. If sum of squares is not 1, they are direction ratios, not direction cosines.',
      'To find foot of perpendicular from P to line L: write coordinates of a general point Q on L in terms of parameter lambda, set PQ . b = 0, solve for lambda.'
    ],
    commonTraps: [
      'Assuming two lines that do not intersect must be parallel! In 3D space, non-intersecting lines can be skew.',
      'Studying equations of planes (Planes are completely removed from the JEE 2024-2027 syllabus).'
    ],
    shortcutsVsConcepts: [
      'Intersection of two lines: Equate general points (x1 + a1*s, y1 + b1*s, z1 + c1*s) = (x2 + a2*t, y2 + b2*t, z2 + c2*t). Solve s and t using first two coordinates, then verify in the third coordinate!',
      'Foot of perpendicular: Parameter lambda = - [ (x1 - x0)a + (y1 - y0)b + (z1 - z0)c ] / (a^2 + b^2 + c^2).'
    ]
  },
  ncertPointers: [
    'Two lines in space are either intersecting, parallel, or skew (neither parallel nor intersecting, lying in different planes).',
    'For any direction cosines, l^2 + m^2 + n^2 = 1. If sum of squares is not 1, they are direction ratios, not direction cosines.',
    'To find foot of perpendicular from P to line L: write coordinates of a general point Q on L in terms of parameter lambda, set PQ . b = 0, solve for lambda.'
  ],
  commonTraps: [
    'Assuming two lines that do not intersect must be parallel! In 3D space, non-intersecting lines can be skew.',
    'Studying equations of planes (Planes are completely removed from the JEE 2024-2027 syllabus).'
  ],
  shortcutsVsConcepts: [
    'Intersection of two lines: Equate general points (x1 + a1*s, y1 + b1*s, z1 + c1*s) = (x2 + a2*t, y2 + b2*t, z2 + c2*t). Solve s and t using first two coordinates, then verify in the third coordinate!',
    'Foot of perpendicular: Parameter lambda = - [ (x1 - x0)a + (y1 - y0)b + (z1 - z0)c ] / (a^2 + b^2 + c^2).'
  ]
};
