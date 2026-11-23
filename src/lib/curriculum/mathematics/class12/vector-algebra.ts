import { Chapter } from '@/types';

export const vectorAlgebraChapter: Chapter = {
  id: 'math-c12-vector-algebra',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Vector Algebra',
  unit: 'Vectors & 3D Geometry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Unit Vector}: \\hat{a} = \\frac{\\vec{a}}{|a|}',
    '\\text{Dot Product}: \\vec{a} \\cdot \\vec{b} = |a||b|\\cos\\theta = a_1 b_1 + a_2 b_2 + a_3 b_3',
    '\\text{Projection of } \\vec{a} \\text{ on } \\vec{b}: \\text{proj}_{\\vec{b}}(\\vec{a}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|b|} = \\vec{a} \\cdot \\hat{b}',
    '\\text{Vector Projection of } \\vec{a} \\text{ on } \\vec{b}: (\\vec{a} \\cdot \\hat{b}) \\hat{b} = \\frac{\\vec{a} \\cdot \\vec{b}}{|b|^2} \\vec{b}',
    '\\text{Cross Product}: \\vec{a} \\times \\vec{b} = |a||b|\\sin\\theta \\hat{n} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}',
    '\\text{Area of Triangle}: \\Delta = \\frac{1}{2} |\\vec{a} \\times \\vec{b}| = \\frac{1}{2} |\\vec{AB} \\times \\vec{AC}|',
    '\\text{Area of Parallelogram with sides } \\vec{a}, \\vec{b}: A = |\\vec{a} \\times \\vec{b}|; \\quad \\text{with diagonals } \\vec{d}_1, \\vec{d}_2: A = \\frac{1}{2} |\\vec{d}_1 \\times \\vec{d}_2|',
    '\\text{Lagrange\'s Identity}: |\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2 = |a|^2 |b|^2',
    '\\text{Collinearity}: \\vec{a} \\parallel \\vec{b} \\iff \\vec{a} \\times \\vec{b} = \\vec{0} \\iff \\frac{a_1}{b_1} = \\frac{a_2}{b_2} = \\frac{a_3}{b_3}'
  ],
  topics: [
    {
      id: 'math-vec-1-dot-product-projections',
      name: '12.12.1 Scalar (Dot) Product, Angles & Projections',
      description: 'Orthogonality condition a . b = 0, scalar and vector projections, Cauchy-Schwarz inequality, angle between vectors.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-vec-2-cross-product-areas',
      name: '12.12.2 Vector (Cross) Product & Geometric Applications',
      description: 'Determinant expansion of cross product, unit normal vectors, areas of triangles and parallelograms, Lagrange identity.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-vec-3-linear-combinations-collinearity',
      name: '12.12.3 Linear Combinations, Collinearity & Vector Equations',
      description: 'Section formulas, linear independence of 2 and 3 vectors, solving vector linear equations for unknown vectors r.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Vector Algebra is tested heavily in JEE Main (often 1-2 questions) and links directly with 3D Lines. Following NTA\'s rationalization (which pruned Scalar and Vector Triple Products), questions focus strictly on Dot Products, Cross Products, and Vector Equations.',
    ncertPointers: [
      'Two non-zero vectors a and b are perpendicular if and only if a . b = 0.',
      'Two non-zero vectors a and b are parallel/collinear if and only if a x b = 0.',
      'Lagrange\'s identity relates dot and cross products: |a x b|^2 + (a . b)^2 = |a|^2 * |b|^2.'
    ],
    commonTraps: [
      'Confusing scalar projection (a . b / |b|) with vector projection (scalar projection multiplied by unit vector b_hat).',
      'Forgetting that cross product is anti-commutative: a x b = - (b x a).'
    ],
    shortcutsVsConcepts: [
      'Lagrange identity shortcut: If given |a|, |b|, and a . b, find |a x b| instantly via sqrt(|a|^2 * |b|^2 - (a . b)^2) without calculating angles!',
      'Area of parallelogram given diagonals d1 and d2: Area is 1/2 |d1 x d2|, NOT |d1 x d2|.'
    ]
  },
  ncertPointers: [
    'Two non-zero vectors a and b are perpendicular if and only if a . b = 0.',
    'Two non-zero vectors a and b are parallel/collinear if and only if a x b = 0.',
    'Lagrange\'s identity relates dot and cross products: |a x b|^2 + (a . b)^2 = |a|^2 * |b|^2.'
  ],
  commonTraps: [
    'Confusing scalar projection (a . b / |b|) with vector projection (scalar projection multiplied by unit vector b_hat).',
    'Forgetting that cross product is anti-commutative: a x b = - (b x a).'
  ],
  shortcutsVsConcepts: [
    'Lagrange identity shortcut: If given |a|, |b|, and a . b, find |a x b| instantly via sqrt(|a|^2 * |b|^2 - (a . b)^2) without calculating angles!',
    'Area of parallelogram given diagonals d1 and d2: Area is 1/2 |d1 x d2|, NOT |d1 x d2|.'
  ]
};
