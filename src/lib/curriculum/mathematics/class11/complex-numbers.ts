import { Chapter } from '@/types';

export const complexNumbersChapter: Chapter = {
  id: 'math-c11-complex-numbers',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Complex Numbers & Quadratic Equations (Part 1: Complex Numbers)',
  unit: 'Algebra',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    'z = x + iy, \\quad \\bar{z} = x - iy, \\quad |z| = \\sqrt{x^2 + y^2}, \\quad z\\bar{z} = |z|^2',
    '\\text{Polar Form}: z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}, \\quad r = |z|, \\; \\theta = \\text{arg}(z) \\in (-\\pi, \\pi]',
    '\\text{Triangle Inequalities}: ||z_1| - |z_2|| \\le |z_1 \\pm z_2| \\le |z_1| + |z_2|',
    '|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2) \\quad (\\text{Parallelogram Law})',
    '\\text{Cube Roots of Unity}: 1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1, \\quad \\omega = e^{i 2\\pi/3} = \\frac{-1 + i\\sqrt{3}}{2}, \\; \\omega^2 = \\frac{-1 - i\\sqrt{3}}{2}',
    '\\text{Square root of } x + iy = \\pm \\left(\\sqrt{\\frac{|z| + x}{2}} + i \\operatorname{sgn}(y)\\sqrt{\\frac{|z| - x}{2}}\\right)',
    '\\text{Equation of Circle}: |z - z_0| = r, \\quad z\\bar{z} + \\bar{a}z + a\\bar{z} + b = 0 \\; (\\text{Center } -a, \\; \\text{Radius } \\sqrt{|a|^2 - b})',
    '\\text{Perpendicular Bisector}: |z - z_1| = |z - z_2|'
  ],
  topics: [
    {
      id: 'math-complex-1-algebra-mod-arg',
      name: '11.3.1 Modulus, Conjugate, Argument & Polar/Euler Representation',
      description: 'Algebraic operations, properties of conjugate and modulus, principal argument in all four quadrants, Euler\'s formula e^(i theta) and De Moivre\'s Theorem.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-complex-2-triangle-inequality-geometry',
      name: '11.3.2 Triangle Inequality & Geometric Loci in Argand Plane',
      description: 'Maximum/minimum values of |z| given |z + a/z| = b, collinearity of three complex numbers, circles, straight lines, ellipses |z - z1| + |z - z2| = 2a, perpendicular bisectors.',
      estimatedHours: 7,
      isHighWeightage: true
    },
    {
      id: 'math-complex-3-roots-unity-factorization',
      name: '11.3.3 Cube Roots of Unity & Polynomial Factorization',
      description: 'Properties of omega and omega^2, factorization of a^3 + b^3 + c^3 - 3abc, 1 + x + x^2 = 0 roots, powers of omega in sums and determinants.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Complex numbers are heavily tested in JEE Main and Advanced. Problems frequently combine triangle inequalities for extrema with properties of cube roots of unity (omega).',
    ncertPointers: [
      'The principal argument Arg(z) is strictly in the interval (-pi, pi]. Quadrant II: pi - alpha; Quadrant III: -(pi - alpha).',
      'The expression 1 + omega^r + omega^(2r) equals 3 if r is a multiple of 3, and equals 0 if r is not a multiple of 3.',
      '|z - z1| = |z - z2| represents the perpendicular bisector of the line segment joining z1 and z2.'
    ],
    commonTraps: [
      'Assuming Arg(z1 * z2) = Arg(z1) + Arg(z2) without adding/subtracting 2pi when the sum exceeds the principal range (-pi, pi].',
      'Forgetting that sqrt(a) * sqrt(b) = sqrt(ab) is TRUE ONLY when at least one of a or b is non-negative! sqrt(-1) * sqrt(-1) = i * i = -1 != sqrt((-1)(-1)) = 1.'
    ],
    shortcutsVsConcepts: [
      'Extrema of |z|: If |z - z0| = r, then the maximum value of |z| is |z0| + r and the minimum value of |z| is ||z0| - r|.',
      'Factorization shortcut: x^2 + x + 1 = (x - omega)(x - omega^2) and x^2 - x + 1 = (x + omega)(x + omega^2).'
    ]
  },
  ncertPointers: [
    'The principal argument Arg(z) is strictly in the interval (-pi, pi]. Quadrant II: pi - alpha; Quadrant III: -(pi - alpha).',
    'The expression 1 + omega^r + omega^(2r) equals 3 if r is a multiple of 3, and equals 0 if r is not a multiple of 3.',
    '|z - z1| = |z - z2| represents the perpendicular bisector of the line segment joining z1 and z2.'
  ],
  commonTraps: [
    'Assuming Arg(z1 * z2) = Arg(z1) + Arg(z2) without adding/subtracting 2pi when the sum exceeds the principal range (-pi, pi].',
    'Forgetting that sqrt(a) * sqrt(b) = sqrt(ab) is TRUE ONLY when at least one of a or b is non-negative! sqrt(-1) * sqrt(-1) = i * i = -1 != sqrt((-1)(-1)) = 1.'
  ],
  shortcutsVsConcepts: [
    'Extrema of |z|: If |z - z0| = r, then the maximum value of |z| is |z0| + r and the minimum value of |z| is ||z0| - r|.',
    'Factorization shortcut: x^2 + x + 1 = (x - omega)(x - omega^2) and x^2 - x + 1 = (x + omega)(x + omega^2).'
  ]
};
