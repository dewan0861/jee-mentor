import { Chapter } from '@/types';

export const matricesChapter: Chapter = {
  id: 'math-c12-matrices',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Matrices & Matrix Algebra',
  unit: 'Algebra',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '(A B)^T = B^T A^T, \\quad (A B C)^T = C^T B^T A^T',
    '\\text{Symmetric}: A^T = A, \\quad \\text{Skew-Symmetric}: A^T = -A \\; (\\text{diagonal elements are always } 0)',
    'A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T) \\; (\\text{Unique sum of Symmetric and Skew-Symmetric})',
    '\\text{Orthogonal Matrix}: A A^T = A^T A = I \\implies A^{-1} = A^T \\text{ and } |A| = \\pm 1',
    '\\text{Trace of Matrix}: \\text{tr}(A) = \\sum_{i=1}^n a_{ii}, \\quad \\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B), \\quad \\text{tr}(AB) = \\text{tr}(BA)',
    '\\text{Idempotent}: A^2 = A, \\quad \\text{Involutory}: A^2 = I, \\quad \\text{Nilpotent}: A^k = 0',
    '\\text{Cayley-Hamilton Theorem}: \\det(A - \\lambda I) = 0 \\implies \\text{Matrix satisfies its characteristic equation}',
    '\\text{Powers of 2x2 Matrix } \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}^n = \\begin{pmatrix} \\cos(n\\theta) & -\\sin(n\\theta) \\\\ \\sin(n\\theta) & \\cos(n\\theta) \\end{pmatrix}'
  ],
  topics: [
    {
      id: 'math-mat-1-operations-multiplication',
      name: '12.3.1 Matrix Operations, Transpose & Symmetric/Skew-Symmetric',
      description: 'Matrix addition, scalar and matrix multiplication, non-commutativity (AB != BA in general), properties of transpose, decomposition into symmetric and skew-symmetric parts.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-mat-2-special-matrices-powers',
      name: '12.3.2 Special Matrices (Orthogonal, Idempotent, Involutory, Nilpotent)',
      description: 'Orthogonal matrices AA^T = I, idempotent A^2 = A, involutory A^2 = I, nilpotent of index k, evaluating high powers A^n by mathematical pattern or diagonalization.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-mat-3-cayley-hamilton-trace',
      name: '12.3.3 Cayley-Hamilton Theorem & Matrix Inverses/Powers',
      description: 'Characteristic equation det(A - lambda I) = 0, applying Cayley-Hamilton theorem to evaluate A^3, A^4, and A^(-1) in terms of A and I, trace properties.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Matrices is one of the highest-scoring chapters in JEE Main and Advanced. Questions regularly feature powers of matrices (A^n), orthogonal matrix identities, and Cayley-Hamilton shortcuts.',
    ncertPointers: [
      'Matrix multiplication is associative: A(BC) = (AB)C, but NOT commutative: AB != BA in general.',
      'All principal diagonal entries of a skew-symmetric matrix are strictly zero: a_ii = -a_ii => a_ii = 0.',
      'The determinant of an odd-order skew-symmetric matrix is always zero: |A| = 0.'
    ],
    commonTraps: [
      'Assuming (A + B)^2 = A^2 + 2AB + B^2! (It is A^2 + AB + BA + B^2, which equals A^2 + 2AB + B^2 ONLY if AB = BA).',
      'Assuming AB = 0 implies A = 0 or B = 0 (the product of two non-zero matrices CAN be the zero matrix!).'
    ],
    shortcutsVsConcepts: [
      'Cayley-Hamilton shortcut for 2x2 matrix: A^2 - tr(A) * A + det(A) * I = 0. Use this immediately to express high powers A^n without computing matrix multiplications!',
      'Rotation matrix: [cos theta, -sin theta; sin theta, cos theta]^n = [cos n*theta, -sin n*theta; sin n*theta, cos n*theta].'
    ]
  },
  ncertPointers: [
    'Matrix multiplication is associative: A(BC) = (AB)C, but NOT commutative: AB != BA in general.',
    'All principal diagonal entries of a skew-symmetric matrix are strictly zero: a_ii = -a_ii => a_ii = 0.',
    'The determinant of an odd-order skew-symmetric matrix is always zero: |A| = 0.'
  ],
  commonTraps: [
    'Assuming (A + B)^2 = A^2 + 2AB + B^2! (It is A^2 + AB + BA + B^2, which equals A^2 + 2AB + B^2 ONLY if AB = BA).',
    'Assuming AB = 0 implies A = 0 or B = 0 (the product of two non-zero matrices CAN be the zero matrix!).'
  ],
  shortcutsVsConcepts: [
    'Cayley-Hamilton shortcut for 2x2 matrix: A^2 - tr(A) * A + det(A) * I = 0. Use this immediately to express high powers A^n without computing matrix multiplications!',
    'Rotation matrix: [cos theta, -sin theta; sin theta, cos theta]^n = [cos n*theta, -sin n*theta; sin n*theta, cos n*theta].'
  ]
};
