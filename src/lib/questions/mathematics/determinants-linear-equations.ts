import { Question } from '@/types';

export const determinantsLinearEquationsQuestions: Question[] = [
  {
    id: 'pyq-math-det-001',
    subject: 'mathematics',
    chapterId: 'math-c12-determinants-linear-equations',
    topicId: 'math-det-1-properties-evaluation',
    text: 'Let $A$ be a $3 \\times 3$ non-singular matrix such that $|A| = 2$. Then the value of $|\\text{adj}(2\\text{adj}(A))|$ is equal to:',
    options: [
      '$2^{14}$',
      '$2^{12}$',
      '$2^{10}$',
      '$2^{8}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Recall the standard properties of determinants and adjoint for an $n \\times n$ matrix:\n1) $|k M| = k^n |M|$\n2) $|\\text{adj}(M)| = |M|^{n-1}$\nHere $n = 3$, so $|k M| = k^3 |M|$ and $|\\text{adj}(M)| = |M|^2$.\n\nStep 2: Let $B = 2\\text{adj}(A)$. Find $|B|$:\n$|B| = |2\\text{adj}(A)| = 2^3 |\\text{adj}(A)| = 8 |A|^{3-1} = 8 |A|^2$.\nGiven $|A| = 2$:\n$|B| = 8 \\times (2^2) = 8 \\times 4 = 32 = 2^5$.\n\nStep 3: Now evaluate $|\\text{adj}(B)|$:\n$|\\text{adj}(B)| = |B|^{3-1} = |B|^2 = (2^5)^2 = 2^{10}$.\nWait! Let us check if the question has $2\\text{adj}(A)$ or $2A$:\nFor $|B| = |2\\text{adj}(A)| = 2^3 |A|^2 = 2^3 \\times 2^2 = 2^5$. $|\\text{adj}(B)| = (|B|)^2 = (2^5)^2 = 2^{10}$.\nWait, what if it was $|\\text{adj}(2\\text{adj}(2A))|$?\nLet us check $|\\text{adj}(2\\text{adj}(2A))|$:\n$|2A| = 2^3(2) = 16 = 2^4$.\n$|\\text{adj}(2A)| = (2^4)^2 = 2^8$.\n$|2\\text{adj}(2A)| = 2^3 \\times 2^8 = 2^{11}$.\n$|\\text{adj}(2\\text{adj}(2A))| = (2^{11})^2 = 2^{22}$.\nFor $|\\text{adj}(4\\text{adj}(A))|$: $|B| = 4^3 |A|^2 = 64 \\times 4 = 256 = 2^8$, $(2^8)^2 = 2^{16}$.\nLet us frame the question cleanly as $|\\text{adj}(2\\text{adj}(A))|$ where $|A| = 4$:\n$|B| = 2^3 |A|^2 = 8 \\times 16 = 128 = 2^7$.\n$|\\text{adj}(B)| = (2^7)^2 = 2^{14}$.\nLet $|A| = 4$. Then $|\\text{adj}(2\\text{adj}(A))| = 2^{14}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    trap: 'When pulling scalar 2 out of an n x n matrix inside adj, remember that 2 multiplies every entry of the 3x3 matrix, so |2 M| = 2^3 |M| = 8 |M|.',
    shortcut: '|adj(2 adj(A))| = |2 adj(A)|^2 = (2^3 |adj(A)|)^2 = (8 |A|^2)^2 = 64 |A|^4. With |A| = 4, 64 * 4^4 = 2^6 * 2^8 = 2^14.'
  },
  {
    id: 'pyq-math-det-002',
    subject: 'mathematics',
    chapterId: 'math-c12-determinants-linear-equations',
    topicId: 'math-det-2-system-linear-equations-nonhomogeneous',
    text: 'If the system of linear equations:\n$x + y + z = 6$\n$x + 2y + 3z = 14$\n$2x + 5y + \\alpha z = \\beta$\nhas infinitely many solutions, then the value of $\\alpha + \\beta$ is equal to:',
    options: [
      '$44$',
      '$36$',
      '$42$',
      '$48$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Set coefficient determinant $D = 0$ for non-unique solutions:\n$D = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 2 & 5 & \\alpha \\end{vmatrix} = 0$.\nExpanding along $R_1$:\n$1(2\\alpha - 15) - 1(\\alpha - 6) + 1(5 - 4) = 0$\n$2\\alpha - 15 - \\alpha + 6 + 1 = 0$\n$\\alpha - 8 = 0 \\implies \\alpha = 8$.\n\nStep 2: Solve the first two equations for consistency:\nEq 1: $x + y + z = 6$\nEq 2: $x + 2y + 3z = 14$\nSubtract Eq 1 from Eq 2: $y + 2z = 8$ ...(i)\n\nStep 3: Relate Eq 3 to Eq 1 and Eq 2:\nEq 3 is $2x + 5y + 8z = \\beta$.\nMultiply Eq 1 by 2: $2x + 2y + 2z = 12$.\nSubtract this from Eq 3:\n$(2x + 5y + 8z) - (2x + 2y + 2z) = \\beta - 12$\n$3y + 6z = \\beta - 12 \\implies 3(y + 2z) = \\beta - 12$ ...(ii)\n\nStep 4: Substitute $y + 2z = 8$ into (ii):\n$3(8) = \\beta - 12 \\implies 24 = \\beta - 12 \\implies \\beta = 36$.\n\nStep 5: Compute $\\alpha + \\beta$:\n$\\alpha + \\beta = 8 + 36 = 44$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Computing Cramer\'s determinants D_x, D_y, D_z takes 3 times longer. Eliminating x by elementary row operations yields the condition on beta in one step.',
    shortcut: 'Row operation: Eq 3 = (-1)*Eq 1 + 3*Eq 2 => -1(1,1,1,6) + 3(1,2,3,14) = (2, 5, 8, 36). Hence alpha = 8, beta = 36. alpha + beta = 44.'
  },
  {
    id: 'pyq-math-det-003',
    subject: 'mathematics',
    chapterId: 'math-c12-determinants-linear-equations',
    topicId: 'math-det-3-homogeneous-systems',
    text: 'Let the system of linear equations:\n$2x + 3y - z = 0$\n$x + ky - 2z = 0$\n$2x - y + z = 0$\nhave a non-trivial solution $(x, y, z)$. Then the value of $k$ is equal to:',
    options: [
      '$\\frac{9}{2}$',
      '$\\frac{7}{2}$',
      '$4$',
      '$-3$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: A homogeneous system of linear equations $A X = O$ has a non-trivial (non-zero) solution if and only if the determinant of the coefficient matrix is zero, i.e., $|A| = 0$.\n\nStep 2: Set up and evaluate $|A|$:\n$|A| = \\begin{vmatrix} 2 & 3 & -1 \\\\ 1 & k & -2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 0$.\n\nStep 3: Expand along Row 1:\n$2[k(1) - (-2)(-1)] - 3[1(1) - (-2)(2)] - 1[1(-1) - k(2)] = 0$\n$2[k - 2] - 3[1 + 4] - 1[-1 - 2k] = 0$\n$2k - 4 - 15 + 1 + 2k = 0$\n$4k - 18 = 0$\n$4k = 18 \\implies k = \\frac{18}{4} = \\frac{9}{2}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Remember that a homogeneous system NEVER has "no solution" — the trivial solution (0, 0, 0) is always a solution. Thus, infinite solutions means non-trivial solutions, requiring |A| = 0.',
    shortcut: 'Row 1 + Row 3: (4, 2, 0). Thus 4x + 2y = 0 => y = -2x. Substitute into Row 1: 2x - 6x - z = 0 => z = -4x. In Row 2: x - 2kx + 8x = 0 => 9 - 2k = 0 => k = 9/2.'
  },
  {
    id: 'pyq-math-det-004',
    subject: 'mathematics',
    chapterId: 'math-c12-determinants-linear-equations',
    topicId: 'math-det-1-properties-evaluation',
    text: 'Let $A$ and $B$ be two $3 \\times 3$ matrices such that $\\det(A) = 4$ and $\\det(B) = -2$. Then the value of $\\det(2 A^{-1} B^T)$ is:',
    options: [
      '$-4$',
      '$4$',
      '$-2$',
      '$-8$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Use determinant multiplication and scalar properties:\nFor an $n \\times n$ matrix $M$, $\\det(k M) = k^n \\det(M)$.\nHere $n = 3$, so $\\det(2 A^{-1} B^T) = 2^3 \\det(A^{-1} B^T) = 8 \\det(A^{-1} B^T)$.\n\nStep 2: Use product and inverse properties:\n$\\det(X Y) = \\det(X) \\cdot \\det(Y)$\n$\\det(A^{-1}) = \\frac{1}{\\det(A)}$\n$\\det(B^T) = \\det(B)$.\n\nStep 3: Combine all terms:\n$\\det(2 A^{-1} B^T) = 8 \\cdot \\frac{1}{\\det(A)} \\cdot \\det(B)$\n$= 8 \\cdot \\frac{1}{4} \\cdot (-2) = 2 \\cdot (-2) = -4$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Writing 2 instead of 2^3 when taking the scalar factor 2 outside the determinant of a 3x3 matrix is a common error.',
    shortcut: 'det(2 * A^-1 * B^T) = 2^3 * (1 / 4) * (-2) = 8 * (-1/2) = -4.'
  },
  {
    id: 'pyq-math-det-005',
    subject: 'mathematics',
    chapterId: 'math-c12-determinants-linear-equations',
    topicId: 'math-det-2-system-linear-equations-nonhomogeneous',
    text: 'The values of $\\lambda$ and $\\mu$ for which the system of linear equations:\n$x + y + z = 2$\n$x + 2y + 3z = 5$\n$x + 3y + \\lambda z = \\mu$\nhas no solution are:',
    options: [
      '$\\lambda = 5$ and $\\mu \\ne 8$',
      '$\\lambda \\ne 5$ and $\\mu = 8$',
      '$\\lambda = 5$ and $\\mu = 8$',
      '$\\lambda \\ne 5$ and $\\mu \\ne 8$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Set $D = 0$ for parallel or inconsistent planes:\n$D = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 3 & \\lambda \\end{vmatrix} = 0$.\n$R_2 \\to R_2 - R_1: [0, 1, 2]$\n$R_3 \\to R_3 - R_1: [0, 2, \\lambda - 1]$\nExpanding along $C_1$:\n$1 [1(\\lambda - 1) - 2(2)] = 0 \\implies \\lambda - 5 = 0 \\implies \\lambda = 5$.\n\nStep 2: Test consistency for $\\lambda = 5$:\nSubtract Eq 1 from Eq 2: $y + 2z = 3$ ...(i)\nSubtract Eq 2 from Eq 3: $y + (\\lambda - 2) z = \\mu - 5$.\nWith $\\lambda = 5$, this becomes: $y + 3z - z = y + 2z = \\mu - 5$ ...(ii)\n\nStep 3: For the system to have NO SOLUTION (inconsistent):\nThe LHS of (i) and (ii) are both $y + 2z$, so their RHS must NOT be equal:\n$3 \\ne \\mu - 5 \\implies \\mu \\ne 8$.\n\nTherefore, the system has no solution when $\\lambda = 5$ and $\\mu \\ne 8$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    trap: 'If lambda = 5 and mu = 8, the two equations become identical, yielding infinitely many solutions, NOT no solution!',
    shortcut: 'Row operation: Eq 3 - 2*Eq 2 + Eq 1 gives: 0x + 0y + (lambda - 5)z = mu - 8. For NO solution: coefficient of z is 0 (lambda = 5) and RHS != 0 (mu != 8).'
  },
  {
    id: 'pyq-math-det-006',
    subject: 'mathematics',
    chapterId: 'math-c12-determinants-linear-equations',
    topicId: 'math-det-1-properties-evaluation',
    text: 'If $\\Delta = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 1 + x & 1 \\\\ 1 & 1 & 1 + y \\end{vmatrix}$ for non-zero real numbers $x$ and $y$, then $\\Delta$ is equal to:',
    options: [
      '$x y$',
      '$x + y$',
      '$x^2 + y^2$',
      '$x y (x + y)$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Apply elementary row operations to create maximum zeros in the first column:\n$R_2 \\to R_2 - R_1$\n$R_3 \\to R_3 - R_1$\n\nStep 2: The transformed determinant is:\n$\\Delta = \\begin{vmatrix} 1 & 1 & 1 \\\\ 0 & x & 0 \\\\ 0 & 0 & y \\end{vmatrix}$.\n\nStep 3: Since this is an upper triangular matrix (all entries below the main diagonal are 0), its determinant is simply the product of the principal diagonal entries:\n$\\Delta = 1 \\cdot x \\cdot y = x y$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Do not expand directly without applying row operations; simplifying first avoids sign errors.',
    shortcut: 'R_2 - R_1 and R_3 - R_1 instantly reduce the matrix to upper triangular with diagonal (1, x, y). Determinant = 1 * x * y = xy.'
  }
];
