import { Question } from '@/types';

export const vectorAlgebraQuestions: Question[] = [
  {
    id: 'pyq-math-vec-001',
    subject: 'mathematics',
    chapterId: 'math-c12-vector-algebra',
    topicId: 'math-vec-2-cross-product-areas',
    text: 'Let $\\vec{a}$ and $\\vec{b}$ be two vectors such that $|\\vec{a}| = 2$, $|\\vec{b}| = 5$, and $\\vec{a} \\cdot \\vec{b} = 8$. Then the value of $|\\vec{a} \\times \\vec{b}|$ is equal to:',
    options: [
      '$6$',
      '$8$',
      '$10$',
      '$\\sqrt{68}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Apply Lagrange\'s Identity relating dot and cross products:\n$|\\vec{a} \\times \\vec{b}|^2 + (\\vec{a} \\cdot \\vec{b})^2 = |\\vec{a}|^2 |\\vec{b}|^2$.\n\nStep 2: Substitute the given values:\n$|\\vec{a}|^2 = 2^2 = 4$\n$|\\vec{b}|^2 = 5^2 = 25$\n$(\\vec{a} \\cdot \\vec{b})^2 = 8^2 = 64$.\n\nStep 3: Solve for $|\\vec{a} \\times \\vec{b}|^2$:\n$|\\vec{a} \\times \\vec{b}|^2 + 64 = 4 \\times 25 = 100$\n$|\\vec{a} \\times \\vec{b}|^2 = 100 - 64 = 36$.\n\nStep 4: Take the positive square root (since magnitude is always non-negative):\n$|\\vec{a} \\times \\vec{b}| = \\sqrt{36} = 6$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Do not find angle theta = arccos(8/10) and then compute sin theta; Lagrange\'s identity gives the magnitude directly without inverse trigonometric evaluation.',
    shortcut: '|a x b| = sqrt(|a|^2 * |b|^2 - (a . b)^2) = sqrt(100 - 64) = sqrt(36) = 6.'
  },
  {
    id: 'pyq-math-vec-002',
    subject: 'mathematics',
    chapterId: 'math-c12-vector-algebra',
    topicId: 'math-vec-2-cross-product-areas',
    text: 'The diagonals of a parallelogram are represented by the vectors $\\vec{d}_1 = 3\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{d}_2 = \\hat{i} - 3\\hat{j} + 4\\hat{k}$. The area of the parallelogram (in square units) is equal to:',
    options: [
      '$5\\sqrt{3}$',
      '$10\\sqrt{3}$',
      '$15\\sqrt{3}$',
      '$20$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Recall the formula for the area of a parallelogram when diagonals $\\vec{d}_1$ and $\\vec{d}_2$ are given:\n$\\text{Area} = \\frac{1}{2} |\\vec{d}_1 \\times \\vec{d}_2|$.\n\nStep 2: Compute the cross product $\\vec{d}_1 \\times \\vec{d}_2$:\n$\\vec{d}_1 \\times \\vec{d}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 1 & -2 \\\\ 1 & -3 & 4 \\end{vmatrix}$\n$= \\hat{i}(4 - 6) - \\hat{j}(12 - (-2)) + \\hat{k}(-9 - 1)$\n$= -2\\hat{i} - 14\\hat{j} - 10\\hat{k}$.\n\nStep 3: Calculate the magnitude $|\\vec{d}_1 \\times \\vec{d}_2|$:\n$|\\vec{d}_1 \\times \\vec{d}_2| = \\sqrt{(-2)^2 + (-14)^2 + (-10)^2} = \\sqrt{4 + 196 + 100} = \\sqrt{300} = 10\\sqrt{3}$.\n\nStep 4: Compute the area:\n$\\text{Area} = \\frac{1}{2} (10\\sqrt{3}) = 5\\sqrt{3}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'When adjacent sides a and b are given, area = |a x b|. But when diagonals d1 and d2 are given, area = 1/2 |d1 x d2|!',
    shortcut: 'Diagonals cross product = (-2, -14, -10). Magnitude = sqrt(300) = 10*sqrt(3). Area = 1/2 * 10*sqrt(3) = 5*sqrt(3).'
  },
  {
    id: 'pyq-math-vec-003',
    subject: 'mathematics',
    chapterId: 'math-c12-vector-algebra',
    topicId: 'math-vec-3-linear-combinations-collinearity',
    text: 'Let $\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}$, $\\vec{b} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$, and $\\vec{c} = 2\\hat{i} - \\hat{j} + 4\\hat{k}$. If a vector $\\vec{r}$ satisfies $\\vec{r} \\times \\vec{a} = \\vec{b} \\times \\vec{a}$ and $\\vec{r} \\cdot \\vec{c} = 0$, then the value of $\\vec{r} \\cdot \\vec{a}$ is equal to:',
    options: [
      '$-\\frac{6}{5}$',
      '$\\frac{6}{5}$',
      '$-\\frac{12}{5}$',
      '$6$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Simplify the cross-product relation:\n$\\vec{r} \\times \\vec{a} = \\vec{b} \\times \\vec{a} \\implies (\\vec{r} - \\vec{b}) \\times \\vec{a} = \\vec{0}$.\nThis implies that $(\\vec{r} - \\vec{b})$ is collinear with $\\vec{a}$:\n$\\vec{r} - \\vec{b} = \\lambda \\vec{a} \\implies \\vec{r} = \\vec{b} + \\lambda \\vec{a}$ for some scalar $\\lambda$.\n\nStep 2: Use the condition $\\vec{r} \\cdot \\vec{c} = 0$:\n$(\\vec{b} + \\lambda \\vec{a}) \\cdot \\vec{c} = 0 \\implies \\vec{b} \\cdot \\vec{c} + \\lambda (\\vec{a} \\cdot \\vec{c}) = 0$.\nCompute dot products:\n$\\vec{b} \\cdot \\vec{c} = (1)(2) + (2)(-1) + (3)(4) = 2 - 2 + 12 = 12$.\n$\\vec{a} \\cdot \\vec{c} = (1)(2) + (1)(-1) + (1)(4) = 2 - 1 + 4 = 5$.\n$12 + 5\\lambda = 0 \\implies \\lambda = -\\frac{12}{5}$.\n\nStep 3: Compute $\\vec{r} \\cdot \\vec{a}$:\n$\\vec{r} \\cdot \\vec{a} = (\\vec{b} + \\lambda \\vec{a}) \\cdot \\vec{a} = \\vec{b} \\cdot \\vec{a} + \\lambda |\\vec{a}|^2$.\n$\\vec{b} \\cdot \\vec{a} = (1)(1) + (2)(1) + (3)(1) = 6$.\n$|\\vec{a}|^2 = 1^2 + 1^2 + 1^2 = 3$.\n$\\vec{r} \\cdot \\vec{a} = 6 + \\left(-\\frac{12}{5}\\right)(3) = 6 - \\frac{36}{5} = \\frac{30 - 36}{5} = -\\frac{6}{5}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Do not assume r = b! (r - b) x a = 0 means r - b is parallel to a, so r = b + lambda * a.',
    shortcut: 'r = b + lambda * a. Dot with c: 12 + 5*lambda = 0 => lambda = -12/5. r . a = 6 + 3*(-12/5) = 6 - 36/5 = -6/5.'
  },
  {
    id: 'pyq-math-vec-004',
    subject: 'mathematics',
    chapterId: 'math-c12-vector-algebra',
    topicId: 'math-vec-1-dot-product-projections',
    text: 'Let $\\vec{a} = 2\\hat{i} - \\hat{j} + \\hat{k}$ and $\\vec{b} = \\hat{i} + 2\\hat{j} - 2\\hat{k}$. The projection of $\\vec{a}$ on $\\vec{b}$ is equal to:',
    options: [
      '$-\\frac{2}{3}$',
      '$\\frac{2}{3}$',
      '$-2$',
      '$\\frac{1}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Recall the scalar projection formula of vector $\\vec{a}$ on vector $\\vec{b}$:\n$\\text{Projection} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$.\n\nStep 2: Calculate $\\vec{a} \\cdot \\vec{b}$:\n$\\vec{a} \\cdot \\vec{b} = (2)(1) + (-1)(2) + (1)(-2) = 2 - 2 - 2 = -2$.\n\nStep 3: Calculate the magnitude $|\\vec{b}|$:\n$|\\vec{b}| = \\sqrt{1^2 + 2^2 + (-2)^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$.\n\nStep 4: Compute the scalar projection:\n$\\text{Projection} = \\frac{-2}{3} = -\\frac{2}{3}$.\n(Note: The algebraic/scalar projection preserves direction sign; magnitude of projection is $2/3$).',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Do not divide by |a|; projection on b requires dividing by the magnitude of b.',
    shortcut: 'Projection = (a . b) / |b| = (2 - 2 - 2) / 3 = -2/3.'
  },
  {
    id: 'pyq-math-vec-005',
    subject: 'mathematics',
    chapterId: 'math-c12-vector-algebra',
    topicId: 'math-vec-1-dot-product-projections',
    text: 'Let $\\vec{a}, \\vec{b}, \\vec{c}$ be three unit vectors such that $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$. Then the value of $\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}$ is equal to:',
    options: [
      '$-\\frac{3}{2}$',
      '$\\frac{3}{2}$',
      '$-1$',
      '$0$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Take the magnitude square of the vector sum $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$:\n$|\\vec{a} + \\vec{b} + \\vec{c}|^2 = 0$.\n\nStep 2: Expand the dot product $(\\vec{a} + \\vec{b} + \\vec{c}) \\cdot (\\vec{a} + \\vec{b} + \\vec{c})$:\n$|\\vec{a}|^2 + |\\vec{b}|^2 + |\\vec{c}|^2 + 2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = 0$.\n\nStep 3: Given that $\\vec{a}, \\vec{b}, \\vec{c}$ are unit vectors:\n$|\\vec{a}| = |\\vec{b}| = |\\vec{c}| = 1 \\implies |\\vec{a}|^2 + |\\vec{b}|^2 + |\\vec{c}|^2 = 1 + 1 + 1 = 3$.\n\nStep 4: Substitute and solve:\n$3 + 2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = 0$\n$2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = -3$\n$\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a} = -\\frac{3}{2}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Remember the factor of 2 in the expansion of |a + b + c|^2.',
    shortcut: '|a + b + c|^2 = 3 + 2S = 0 => S = -3/2.'
  },
  {
    id: 'pyq-math-vec-006',
    subject: 'mathematics',
    chapterId: 'math-c12-vector-algebra',
    topicId: 'math-vec-2-cross-product-areas',
    text: 'A unit vector perpendicular to both vectors $\\vec{a} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$ and $\\vec{b} = \\hat{j} + \\hat{k}$ is:',
    options: [
      '$\\frac{-\\hat{i} - 2\\hat{j} + 2\\hat{k}}{3}$',
      '$\\frac{\\hat{i} + 2\\hat{j} + 2\\hat{k}}{3}$',
      '$\\frac{-\\hat{i} + 2\\hat{j} - 2\\hat{k}}{3}$',
      '$\\frac{2\\hat{i} - \\hat{j} + 2\\hat{k}}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: A vector perpendicular to both $\\vec{a}$ and $\\vec{b}$ is given by their cross product $\\vec{a} \\times \\vec{b}$:\n$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & 1 & 2 \\\\ 0 & 1 & 1 \\end{vmatrix}$.\n\nStep 2: Expand the determinant:\n$= \\hat{i}(1(1) - 2(1)) - \\hat{j}(2(1) - 2(0)) + \\hat{k}(2(1) - 1(0))$\n$= \\hat{i}(-1) - \\hat{j}(2) + \\hat{k}(2) = -\\hat{i} - 2\\hat{j} + 2\\hat{k}$.\n\nStep 3: Find the magnitude $|\\vec{a} \\times \\vec{b}|$:\n$|\\vec{a} \\times \\vec{b}| = \\sqrt{(-1)^2 + (-2)^2 + 2^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$.\n\nStep 4: Form the unit vector:\n$\\hat{n} = \\frac{\\vec{a} \\times \\vec{b}}{|\\vec{a} \\times \\vec{b}|} = \\frac{-\\hat{i} - 2\\hat{j} + 2\\hat{k}}{3}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Check that vector b has i-component equal to 0, not 1.',
    shortcut: 'Cross product is (-1, -2, 2). Magnitude is sqrt(1 + 4 + 4) = 3. Unit vector is (-i - 2j + 2k)/3.'
  }
];
