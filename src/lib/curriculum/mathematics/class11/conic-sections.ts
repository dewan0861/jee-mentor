import { Chapter } from '@/types';

export const conicSectionsChapter: Chapter = {
  id: 'math-c11-conic-sections',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Conic Sections (Parabola, Ellipse & Hyperbola)',
  unit: 'Coordinate Geometry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Parabola } y^2 = 4ax: \\text{Focus } (a, 0), \\; \\text{Directrix } x = -a, \\; \\text{Latus Rectum } = 4a',
    '\\text{Tangent to } y^2 = 4ax: y = mx + \\frac{a}{m} \\; (\\text{Point of contact: } (a/m^2, 2a/m)), \\quad yt = x + at^2',
    '\\text{Focal Chord of Parabola}: t_1 t_2 = -1, \\quad \\text{Length of Focal Chord} = a\\left(t + \\frac{1}{t}\\right)^2',
    '\\text{Ellipse } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1: b^2 = a^2(1 - e^2), \\; \\text{Foci } (\\pm ae, 0), \\; \\text{Directrices } x = \\pm \\frac{a}{e}',
    '\\text{Tangent to Ellipse}: y = mx \\pm \\sqrt{a^2 m^2 + b^2}, \\quad \\text{Director Circle}: x^2 + y^2 = a^2 + b^2',
    '\\text{Focal Distances of Ellipse}: SP + S\'P = 2a',
    '\\text{Hyperbola } \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1: b^2 = a^2(e^2 - 1), \\; \\text{Foci } (\\pm ae, 0), \\; \\text{Directrices } x = \\pm \\frac{a}{e}',
    '\\text{Tangent to Hyperbola}: y = mx \\pm \\sqrt{a^2 m^2 - b^2}, \\quad \\text{Director Circle}: x^2 + y^2 = a^2 - b^2',
    '\\text{Focal Distances of Hyperbola}: |SP - S\'P| = 2a',
    '\\text{Rectangular Hyperbola } x^2 - y^2 = a^2 \\implies e = \\sqrt{2}; \\quad xy = c^2 \\implies \\text{Parametric } (ct, c/t)'
  ],
  topics: [
    {
      id: 'math-conic-1-parabola',
      name: '11.10.1 Parabola: Standards, Tangents & Focal Chords',
      description: 'Standard parabolas y^2 = 4ax and x^2 = 4ay, parametric form (at^2, 2at), tangent in slope form y = mx + a/m and parametric form yt = x + at^2, properties of focal chords (t1 t2 = -1) and semi-latus rectum as harmonic mean of focal segments.',
      estimatedHours: 7,
      isHighWeightage: true
    },
    {
      id: 'math-conic-2-ellipse',
      name: '11.10.2 Ellipse: Standards, Eccentricity, Tangents & Director Circle',
      description: 'Standard ellipse forms (horizontal and vertical), auxiliary circle, eccentric angle, tangent in slope form y = mx +- sqrt(a^2 m^2 + b^2) and point form, director circle x^2 + y^2 = a^2 + b^2, reflection property.',
      estimatedHours: 7,
      isHighWeightage: true
    },
    {
      id: 'math-conic-3-hyperbola',
      name: '11.10.3 Hyperbola: Standards, Conjugate, Asymptotes & Rectangular Hyperbola',
      description: 'Standard and conjugate hyperbolas, eccentricity e^2 = 1 + b^2/a^2, tangent in slope form y = mx +- sqrt(a^2 m^2 - b^2), director circle x^2 + y^2 = a^2 - b^2, rectangular hyperbola xy = c^2 and its tangents.',
      estimatedHours: 7,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Conic Sections accounts for 3-4 questions per JEE paper. Slope forms of tangents, common tangents between a circle and parabola/ellipse, and focal distance properties are classic standards.',
    ncertPointers: [
      'For parabola y^2 = 4ax: tangent is y = mx + a/m. For vertical parabola x^2 = 4ay: tangent is y = mx - a m^2.',
      'The director circle (locus of points from which perpendicular tangents can be drawn) is x^2 + y^2 = a^2 + b^2 for ellipse and x^2 + y^2 = a^2 - b^2 for hyperbola (real only if a > b).',
      'The sum of focal distances of any point on an ellipse is constant and equal to the major axis 2a: SP + S\'P = 2a.'
    ],
    commonTraps: [
      'Using y = mx + a/m for x^2 = 4ay (it is y = mx - a m^2!).',
      'Confusing the eccentricity formulas: b^2 = a^2(1 - e^2) for ellipse (0 < e < 1), whereas b^2 = a^2(e^2 - 1) for hyperbola (e > 1).'
    ],
    shortcutsVsConcepts: [
      'Common tangent between circle x^2 + y^2 = r^2 and parabola y^2 = 4ax: Write parabola tangent y = mx + a/m, rewrite as m^2 x - m y + a = 0, and set distance from (0,0) to line equal to r.',
      'Focal chord length shortcut: If one end of focal chord of y^2 = 4ax is (at^2, 2at), the length of the chord is a(t + 1/t)^2.'
    ]
  },
  ncertPointers: [
    'For parabola y^2 = 4ax: tangent is y = mx + a/m. For vertical parabola x^2 = 4ay: tangent is y = mx - a m^2.',
    'The director circle (locus of points from which perpendicular tangents can be drawn) is x^2 + y^2 = a^2 + b^2 for ellipse and x^2 + y^2 = a^2 - b^2 for hyperbola (real only if a > b).',
    'The sum of focal distances of any point on an ellipse is constant and equal to the major axis 2a: SP + S\'P = 2a.'
  ],
  commonTraps: [
    'Using y = mx + a/m for x^2 = 4ay (it is y = mx - a m^2!).',
    'Confusing the eccentricity formulas: b^2 = a^2(1 - e^2) for ellipse (0 < e < 1), whereas b^2 = a^2(e^2 - 1) for hyperbola (e > 1).'
  ],
  shortcutsVsConcepts: [
    'Common tangent between circle x^2 + y^2 = r^2 and parabola y^2 = 4ax: Write parabola tangent y = mx + a/m, rewrite as m^2 x - m y + a = 0, and set distance from (0,0) to line equal to r.',
    'Focal chord length shortcut: If one end of focal chord of y^2 = 4ax is (at^2, 2at), the length of the chord is a(t + 1/t)^2.'
  ]
};
