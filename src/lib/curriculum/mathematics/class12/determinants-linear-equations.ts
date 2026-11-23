import { Chapter } from '@/types';

export const determinantsLinearEquationsChapter: Chapter = {
  id: 'math-c12-determinants-linear-equations',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Determinants & System of Linear Equations',
  unit: 'Algebra',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '|A B| = |A| \\cdot |B|, \\quad |A^T| = |A|, \\quad |k A| = k^n |A| \\; (A \\text{ is } n \\times n)',
    'A \\cdot \\text{adj}(A) = \\text{adj}(A) \\cdot A = |A| I_n',
    '|\\text{adj}(A)| = |A|^{n-1}, \\quad |\\text{adj}(\\text{adj}(A))| = |A|^{(n-1)^2}',
    '\\text{adj}(A B) = \\text{adj}(B) \\cdot \\text{adj}(A), \\quad \\text{adj}(A^T) = (\\text{adj}(A))^T',
    'A^{-1} = \\frac{\\text{adj}(A)}{|A|} \\; (|A| \\ne 0)',
    '\\text{Cramer\'s Rule}: x = \\frac{D_x}{D}, \\; y = \\frac{D_y}{D}, \\; z = \\frac{D_z}{D}',
    'D \\ne 0 \\implies \\text{Unique consistent solution}',
    'D = 0 \\text{ and at least one of } D_x, D_y, D_z \\ne 0 \\implies \\text{No solution (Inconsistent)}',
    'D = D_x = D_y = D_z = 0 \\implies \\text{Infinitely many solutions or inconsistent (planes parallel)}',
    '\\text{Homogeneous System } (D_x=D_y=D_z=0): D \\ne 0 \\implies \\text{Trivial solution } (0,0,0); \\; D = 0 \\implies \\text{Non-trivial solutions}'
  ],
  topics: [
    {
      id: 'math-det-1-properties-evaluation',
      name: '12.4.1 Determinant Properties, Minors, Cofactors & Adjoint Identities',
      description: 'Determinant expansion, properties of adjoint |adj(A)| = |A|^(n-1), |adj(adj(A))| = |A|^((n-1)^2), inverse matrix formulas.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-det-2-system-linear-equations-nonhomogeneous',
      name: '12.4.2 Non-Homogeneous Linear Systems & Cramer\'s Rule',
      description: 'Consistency criteria using determinants: unique solution (D != 0), infinite solutions vs no solution with parameters lambda and mu.',
      estimatedHours: 7,
      isHighWeightage: true
    },
    {
      id: 'math-det-3-homogeneous-systems',
      name: '12.4.3 Homogeneous Linear Systems (Trivial vs Non-Trivial Solutions)',
      description: 'Systems of the form Ax = 0, condition for existence of non-zero (non-trivial) solutions det(A) = 0, geometric interpretation.',
      estimatedHours: 5,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Determinants and System of Linear Equations has a 100% guarantee of 1 to 2 questions in every JEE Main session. The vast majority involve consistency of a 3-variable linear system with unknown parameters lambda and mu.',
    ncertPointers: [
      '|k A| = k^n |A| for an n x n matrix. For 3x3, |2A| = 8|A|.',
      'A square matrix A is invertible if and only if |A| != 0 (non-singular).',
      'For Cramer\'s rule, if D = 0 and Dx = Dy = Dz = 0, verify whether two equations represent parallel, non-coincident planes (which makes the system inconsistent despite D = 0).'
    ],
    commonTraps: [
      'Forgetting that for a 3x3 matrix, |adj(A)| = |A|^2, NOT |A|.',
      'Assuming D = 0 and Dx = Dy = Dz = 0 always means infinite solutions. If two equations are parallel (e.g., x + y + z = 1 and x + y + z = 2), there is NO solution!'
    ],
    shortcutsVsConcepts: [
      'To test infinite solutions: Eliminate one variable (say z) between equation (1) and (2), then between (2) and (3). The two resulting 2-variable equations must be identical multiples of each other!',
      'Adjoint power shortcut: |adj(adj(A))| = |A|^( (n-1)^2 ). For 3x3 (n=3), (3-1)^2 = 4, so |adj(adj(A))| = |A|^4.'
    ]
  },
  ncertPointers: [
    '|k A| = k^n |A| for an n x n matrix. For 3x3, |2A| = 8|A|.',
    'A square matrix A is invertible if and only if |A| != 0 (non-singular).',
    'For Cramer\'s rule, if D = 0 and Dx = Dy = Dz = 0, verify whether two equations represent parallel, non-coincident planes (which makes the system inconsistent despite D = 0).'
  ],
  commonTraps: [
    'Forgetting that for a 3x3 matrix, |adj(A)| = |A|^2, NOT |A|.',
    'Assuming D = 0 and Dx = Dy = Dz = 0 always means infinite solutions. If two equations are parallel (e.g., x + y + z = 1 and x + y + z = 2), there is NO solution!'
  ],
  shortcutsVsConcepts: [
    'To test infinite solutions: Eliminate one variable (say z) between equation (1) and (2), then between (2) and (3). The two resulting 2-variable equations must be identical multiples of each other!',
    'Adjoint power shortcut: |adj(adj(A))| = |A|^( (n-1)^2 ). For 3x3 (n=3), (3-1)^2 = 4, so |adj(adj(A))| = |A|^4.'
  ]
};
