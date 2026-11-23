import { Question } from '@/types';

export const matricesQuestions: Question[] = [
  {
    id: 'pyq-math-mat-001',
    subject: 'mathematics',
    chapterId: 'math-c12-matrices',
    topicId: 'math-mat-2-special-matrices-powers',
    text: 'Let $P = \\begin{pmatrix} \\frac{\\sqrt{3}}{2} & \\frac{1}{2} \\\\ -\\frac{1}{2} & \\frac{\\sqrt{3}}{2} \\end{pmatrix}$, $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$, and $Q = P A P^T$. If $X = P^T Q^{2024} P$, then $X$ is equal to:',
    options: [
      '$\\begin{pmatrix} 1 & 2024 \\\\ 0 & 1 \\end{pmatrix}$',
      '$\\begin{pmatrix} 2024 & 1 \\\\ 0 & 2024 \\end{pmatrix}$',
      '$\\begin{pmatrix} 1 & 0 \\\\ 2024 & 1 \\end{pmatrix}$',
      '$\\begin{pmatrix} 0 & 2024 \\\\ 2024 & 0 \\end{pmatrix}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Check the properties of matrix $P$:\n$P P^T = \\begin{pmatrix} \\frac{\\sqrt{3}}{2} & \\frac{1}{2} \\\\ -\\frac{1}{2} & \\frac{\\sqrt{3}}{2} \\end{pmatrix} \\begin{pmatrix} \\frac{\\sqrt{3}}{2} & -\\frac{1}{2} \\\\ \\frac{1}{2} & \\frac{\\sqrt{3}}{2} \\end{pmatrix} = \\begin{pmatrix} \\frac{3}{4} + \\frac{1}{4} & 0 \\\\ 0 & \\frac{1}{4} + \\frac{3}{4} \\end{pmatrix} = I$.\nThus $P$ is an orthogonal matrix ($P^T = P^{-1}$).\n\nStep 2: Express $Q^n$:\n$Q = P A P^T \\implies Q^2 = (P A P^T)(P A P^T) = P A (P^T P) A P^T = P A^2 P^T$.\nBy mathematical induction, $Q^n = P A^n P^T$ for any positive integer $n$.\n\nStep 3: Evaluate $X = P^T Q^{2024} P$:\n$X = P^T (P A^{2024} P^T) P = (P^T P) A^{2024} (P^T P) = I A^{2024} I = A^{2024}$.\n\nStep 4: Compute powers of $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$:\n$A^2 = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}, \\quad A^3 = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}, \\dots, \\quad A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$.\nTherefore, $A^{2024} = \\begin{pmatrix} 1 & 2024 \\\\ 0 & 1 \\end{pmatrix}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Do not attempt to multiply out $Q$ explicitly 2024 times. Recognizing the similarity transformation $Q = P A P^{-1}$ telescopes $P^T Q^n P$ immediately to $A^n$.',
    shortcut: 'For any orthogonal $P$, $P^T (P A P^T)^n P = A^n$. For upper triangular with 1s on the diagonal, $A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$.'
  },
  {
    id: 'pyq-math-mat-002',
    subject: 'mathematics',
    chapterId: 'math-c12-matrices',
    topicId: 'math-mat-3-cayley-hamilton-trace',
    text: 'Let $A = \\begin{pmatrix} 1 & 2 \\\\ \\alpha & \\beta \\end{pmatrix}$ such that $A^2 - 5A + 7I = O$, where $I$ is the identity matrix of order 2. Then the value of $2\\alpha + \\beta$ is:',
    options: [
      '$1$',
      '$7$',
      '$-1$',
      '$5$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Use the Cayley-Hamilton Theorem for a $2 \\times 2$ matrix $A$:\nEvery $2 \\times 2$ matrix $A$ satisfies its characteristic equation:\n$A^2 - \\text{tr}(A) A + |A| I = O$.\n\nStep 2: Compare coefficients with the given relation $A^2 - 5A + 7I = O$:\n$\\text{tr}(A) = 5 \\implies 1 + \\beta = 5 \\implies \\beta = 4$.\n$|A| = 7 \\implies (1)(\\beta) - (2)(\\alpha) = 7$.\n\nStep 3: Substitute $\\beta = 4$ into the determinant equation:\n$4 - 2\\alpha = 7 \\implies 2\\alpha = -3 \\implies \\alpha = -\\frac{3}{2}$.\n\nStep 4: Compute $2\\alpha + \\beta$:\n$2\\alpha + \\beta = 2\\left(-\\frac{3}{2}\\right) + 4 = -3 + 4 = 1$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Calculating $A^2$ element by element and equating four equations is tedious and prone to arithmetic mistakes. Comparing trace and determinant takes under 15 seconds.',
    shortcut: 'Trace = 5 => 1 + beta = 5 => beta = 4. Det = 7 => 4 - 2*alpha = 7 => 2*alpha = -3. Then 2*alpha + beta = -3 + 4 = 1.'
  },
  {
    id: 'pyq-math-mat-003',
    subject: 'mathematics',
    chapterId: 'math-c12-matrices',
    topicId: 'math-mat-1-operations-multiplication',
    text: 'Let $A$ and $B$ be two $3 \\times 3$ real matrices such that $A^T = -A$ and $B^T = B$. Then the matrix $C = A^3 B^2 - B^2 A^3$ is always:',
    options: [
      'a symmetric matrix',
      'a skew-symmetric matrix',
      'an orthogonal matrix',
      'an identity matrix'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Recall the definition of symmetric and skew-symmetric matrices:\n$M$ is symmetric if $M^T = M$, and skew-symmetric if $M^T = -M$.\n\nStep 2: Given $A^T = -A$ and $B^T = B$, consider $(A^3)^T$ and $(B^2)^T$:\n$(A^3)^T = (A^T)^3 = (-A)^3 = -A^3$.\n$(B^2)^T = (B^T)^2 = B^2$.\n\nStep 3: Take the transpose of $C = A^3 B^2 - B^2 A^3$ using the reversal law $(X Y)^T = Y^T X^T$:\n$C^T = (A^3 B^2)^T - (B^2 A^3)^T$\n$= (B^2)^T (A^3)^T - (A^3)^T (B^2)^T$\n$= (B^2)(-A^3) - (-A^3)(B^2)$\n$= -B^2 A^3 + A^3 B^2$\n$= A^3 B^2 - B^2 A^3 = C$.\n\nStep 4: Since $C^T = C$, $C$ is strictly a symmetric matrix.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Do not forget the reversal law $(XY)^T = Y^T X^T$. An odd power of a skew-symmetric matrix is skew-symmetric, while an even power of any symmetric matrix is symmetric.',
    shortcut: 'Sign check: Transpose reverses order and gives $(-1)^3 = -1$ on $A^3$. The first term becomes $B^2(-A^3) = -B^2 A^3$, second term $-(-A^3)(B^2) = +A^3 B^2$, exactly reproducing $C$. Hence Symmetric.'
  },
  {
    id: 'pyq-math-mat-004',
    subject: 'mathematics',
    chapterId: 'math-c12-matrices',
    topicId: 'math-mat-2-special-matrices-powers',
    text: 'Let $P = \\begin{pmatrix} 1 & 0 & 0 \\\\ 4 & 1 & 0 \\\\ 16 & 4 & 1 \\end{pmatrix}$ and $I$ be the identity matrix of order 3. If $Q = [q_{ij}]$ is a matrix such that $P^{50} - Q = I$, then the value of $\\frac{q_{31} + q_{32}}{q_{21}}$ is equal to:',
    options: [
      '$103$',
      '$102$',
      '$52$',
      '$204$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Decompose $P$ into $I + N$:\n$P = I + N$, where $N = \\begin{pmatrix} 0 & 0 & 0 \\\\ 4 & 0 & 0 \\\\ 16 & 4 & 0 \\end{pmatrix}$.\n\nStep 2: Check nilpotency of $N$:\n$N^2 = \\begin{pmatrix} 0 & 0 & 0 \\\\ 4 & 0 & 0 \\\\ 16 & 4 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 0 & 0 \\\\ 4 & 0 & 0 \\\\ 16 & 4 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 16 & 0 & 0 \\end{pmatrix}$.\n$N^3 = N^2 \\cdot N = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix} = O$.\nThus $N$ is strictly nilpotent of index 3 (i.e., $N^k = O$ for all $k \\ge 3$).\n\nStep 3: Expand $P^{50} = (I + N)^{50}$ using the Binomial Theorem (since $I$ and $N$ commute):\n$P^{50} = I + 50 N + \\frac{50 \\times 49}{2} N^2 + O$\n$= I + 50 N + 1225 N^2$.\n\nStep 4: Find $Q = P^{50} - I$:\n$Q = 50 N + 1225 N^2 = 50 \\begin{pmatrix} 0 & 0 & 0 \\\\ 4 & 0 & 0 \\\\ 16 & 4 & 0 \\end{pmatrix} + 1225 \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 16 & 0 & 0 \\end{pmatrix}$\n$Q = \\begin{pmatrix} 0 & 0 & 0 \\\\ 200 & 0 & 0 \\\\ 800 + 19600 & 200 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 & 0 \\\\ 200 & 0 & 0 \\\\ 20400 & 200 & 0 \\end{pmatrix}$.\n\nStep 5: Identify the required elements:\n$q_{21} = 200$, $q_{32} = 200$, $q_{31} = 20400$.\n$\\frac{q_{31} + q_{32}}{q_{21}} = \\frac{20400 + 200}{200} = \\frac{20600}{200} = 103$.',
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    trap: 'Multiplying $P$ repeatedly is impossible for $P^{50}$. Recognizing $P = I + N$ where $N$ is strictly lower triangular (hence nilpotent) truncates the infinite binomial sum at $N^2$.',
    shortcut: 'q_{21} = 50(4) = 200. q_{32} = 50(4) = 200. q_{31} = 50(16) + C(50,2)*16 = 16*(50 + 1225) = 20400. (20400 + 200)/200 = 103.'
  },
  {
    id: 'pyq-math-mat-005',
    subject: 'mathematics',
    chapterId: 'math-c12-matrices',
    topicId: 'math-mat-2-special-matrices-powers',
    text: 'Let $A = \\begin{pmatrix} 0 & 2q & r \\\\ p & q & -r \\\\ p & -q & r \\end{pmatrix}$ be an orthogonal matrix with $p, q, r > 0$. Then the value of $|p|$ is:',
    options: [
      '$\\frac{1}{\\sqrt{2}}$',
      '$\\frac{1}{\\sqrt{3}}$',
      '$\\frac{1}{\\sqrt{6}}$',
      '$\\frac{1}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Orthogonal matrix condition $A A^T = I$ means rows of $A$ are orthonormal vectors:\nLength of Row 1: $0^2 + (2q)^2 + r^2 = 1 \\implies 4q^2 + r^2 = 1$ ...(i)\nLength of Row 2: $p^2 + q^2 + (-r)^2 = 1 \\implies p^2 + q^2 + r^2 = 1$ ...(ii)\nDot product of Row 1 and Row 2: $0(p) + (2q)(q) + r(-r) = 0 \\implies 2q^2 - r^2 = 0 \\implies r^2 = 2q^2$ ...(iii)\n\nStep 2: Solve for $q^2$ and $r^2$:\nSubstitute (iii) into (i): $4q^2 + 2q^2 = 1 \\implies 6q^2 = 1 \\implies q^2 = \\frac{1}{6}$.\nThen $r^2 = 2q^2 = 2\\left(\\frac{1}{6}\\right) = \\frac{1}{3}$.\n\nStep 3: Solve for $p^2$ from (ii):\n$p^2 + \\frac{1}{6} + \\frac{1}{3} = 1 \\implies p^2 + \\frac{1}{2} = 1 \\implies p^2 = \\frac{1}{2}$.\nTherefore, $|p| = \\frac{1}{\\sqrt{2}}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Do not multiply the full 3x3 matrices $A$ and $A^T$. Using the orthonormality property of rows (unit length and mutual orthogonality) gives the equations in seconds.',
    shortcut: 'Row 1 dot Row 2 = 0 gives r^2 = 2q^2. Row 1 unit norm gives 4q^2 + 2q^2 = 1 => q^2 = 1/6. Row 2 unit norm gives p^2 = 1 - 3q^2 = 1 - 1/2 = 1/2 => |p| = 1/sqrt(2).'
  },
  {
    id: 'pyq-math-mat-006',
    subject: 'mathematics',
    chapterId: 'math-c12-matrices',
    topicId: 'math-mat-1-operations-multiplication',
    text: 'If $A = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$, and $A + A^T = I$, where $I$ is the $2 \\times 2$ identity matrix and $\\theta \\in (0, \\pi)$, then $\\theta$ is equal to:',
    options: [
      '$\\frac{\\pi}{3}$',
      '$\\frac{\\pi}{6}$',
      '$\\frac{\\pi}{2}$',
      '$\\frac{2\\pi}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Write $A^T$:\n$A^T = \\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix}$.\n\nStep 2: Add $A$ and $A^T$:\n$A + A^T = \\begin{pmatrix} 2\\cos\\theta & 0 \\\\ 0 & 2\\cos\\theta \\end{pmatrix}$.\n\nStep 3: Equate to the identity matrix $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$:\n$2\\cos\\theta = 1 \\implies \\cos\\theta = \\frac{1}{2}$.\n\nStep 4: Solve for $\\theta \\in (0, \\pi)$:\n$\\theta = \\frac{\\pi}{3}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Pay attention to the interval $(0, \\pi)$. For $\\cos\\theta = 1/2$, the only solution in $(0, \\pi)$ is $\\pi/3$.',
    shortcut: 'A + A^T has diagonal entries 2cos(theta). 2cos(theta) = 1 => cos(theta) = 1/2 => theta = pi/3.'
  }
];
