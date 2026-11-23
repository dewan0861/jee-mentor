import { Question } from '@/types';

export const threeDimensionalGeometryQuestions: Question[] = [
  {
    id: 'pyq-math-3d-001',
    subject: 'mathematics',
    chapterId: 'math-c12-three-dimensional-geometry',
    topicId: 'math-3d-2-skew-lines-shortest-distance',
    text: 'The shortest distance between the skew lines $\\frac{x - 1}{2} = \\frac{y + 1}{3} = \\frac{z - 1}{4}$ and $\\frac{x - 3}{1} = \\frac{y - 1}{2} = \\frac{z}{1}$ is equal to:',
    options: [
      '$\\frac{7}{\\sqrt{30}}$',
      '$\\frac{5}{\\sqrt{30}}$',
      '$\\frac{9}{\\sqrt{30}}$',
      '$\\frac{11}{\\sqrt{30}}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Identify point vectors $\\vec{a}_1, \\vec{a}_2$ and direction vectors $\\vec{b}_1, \\vec{b}_2$:\nLine 1: passes through $A(1, -1, 1)$, parallel to $\\vec{b}_1 = 2\\hat{i} + 3\\hat{j} + 4\\hat{k}$.\nLine 2: passes through $B(3, 1, 0)$, parallel to $\\vec{b}_2 = \\hat{i} + 2\\hat{j} + \\hat{k}$.\n\nStep 2: Find displacement vector $\\vec{a}_2 - \\vec{a}_1$:\n$\\vec{a}_2 - \\vec{a}_1 = (3 - 1)\\hat{i} + (1 - (-1))\\hat{j} + (0 - 1)\\hat{k} = 2\\hat{i} + 2\\hat{j} - \\hat{k}$.\n\nStep 3: Compute the cross product $\\vec{b}_1 \\times \\vec{b}_2$:\n$\\vec{b}_1 \\times \\vec{b}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & 3 & 4 \\\\ 1 & 2 & 1 \\end{vmatrix} = \\hat{i}(3 - 8) - \\hat{j}(2 - 4) + \\hat{k}(4 - 3) = -5\\hat{i} + 2\\hat{j} + \\hat{k}$.\n\nStep 4: Compute the magnitude $|\\vec{b}_1 \\times \\vec{b}_2|$:\n$|\\vec{b}_1 \\times \\vec{b}_2| = \\sqrt{(-5)^2 + 2^2 + 1^2} = \\sqrt{25 + 4 + 1} = \\sqrt{30}$.\n\nStep 5: Compute the scalar dot product $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)$:\n$(2)(-5) + (2)(2) + (-1)(1) = -10 + 4 - 1 = -7$.\n\nStep 6: Calculate shortest distance $d$:\n$d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|} = \\frac{|-7|}{\\sqrt{30}} = \\frac{7}{\\sqrt{30}}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Check coordinates of the point on line 1: (x - 1)/2 = (y + 1)/3 means y - (-1), so y_1 = -1, NOT +1.',
    shortcut: 'Distance formula: |det([a2 - a1; b1; b2])| / |b1 x b2|. Determinant = -7, cross product magnitude = sqrt(30). d = 7 / sqrt(30).'
  },
  {
    id: 'pyq-math-3d-002',
    subject: 'mathematics',
    chapterId: 'math-c12-three-dimensional-geometry',
    topicId: 'math-3d-3-foot-perpendicular-image',
    text: 'The length of the perpendicular drawn from the point $P(1, 2, 3)$ to the line $\\frac{x - 6}{3} = \\frac{y - 7}{2} = \\frac{z - 7}{-2}$ is equal to:',
    options: [
      '$7$',
      '$\\sqrt{49}$',
      '$5$',
      '$\\sqrt{35}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Write parametric coordinates of a general point $Q$ on the line in terms of parameter $\\lambda$:\n$\\frac{x - 6}{3} = \\frac{y - 7}{2} = \\frac{z - 7}{-2} = \\lambda \\implies Q(6 + 3\\lambda, 7 + 2\\lambda, 7 - 2\\lambda)$.\n\nStep 2: Form vector $\\vec{PQ}$ from point $P(1, 2, 3)$ to $Q$:\n$\\vec{PQ} = (6 + 3\\lambda - 1)\\hat{i} + (7 + 2\\lambda - 2)\\hat{j} + (7 - 2\\lambda - 3)\\hat{k}$\n$= (5 + 3\\lambda)\\hat{i} + (5 + 2\\lambda)\\hat{j} + (4 - 2\\lambda)\\hat{k}$.\n\nStep 3: Since $PQ$ is perpendicular to the line, $\\vec{PQ} \\cdot \\vec{b} = 0$ where $\\vec{b} = 3\\hat{i} + 2\\hat{j} - 2\\hat{k}$:\n$3(5 + 3\\lambda) + 2(5 + 2\\lambda) - 2(4 - 2\\lambda) = 0$\n$15 + 9\\lambda + 10 + 4\\lambda - 8 + 4\\lambda = 0$\n$17 + 17\\lambda = 0 \\implies \\lambda = -1$.\n\nStep 4: Find the coordinates of the foot of perpendicular $Q$:\n$Q = (6 + 3(-1), 7 + 2(-1), 7 - 2(-1)) = (3, 5, 9)$.\n\nStep 5: Compute distance $PQ$:\n$PQ = \\sqrt{(3 - 1)^2 + (5 - 2)^2 + (9 - 3)^2} = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Check signs when substituting lambda = -1 into z = 7 - 2lambda: 7 - 2(-1) = 7 + 2 = 9.',
    shortcut: 'Orthogonality condition 17 + 17*lambda = 0 gives lambda = -1. Foot Q = (3, 5, 9). Distance = sqrt(4 + 9 + 36) = 7.'
  },
  {
    id: 'pyq-math-3d-003',
    subject: 'mathematics',
    chapterId: 'math-c12-three-dimensional-geometry',
    topicId: 'math-3d-1-direction-cosines-ratios',
    text: 'The angle between two lines whose direction cosines satisfy the equations $l + m + n = 0$ and $l^2 + m^2 - n^2 = 0$ is equal to:',
    options: [
      '$\\frac{\\pi}{3}$',
      '$\\frac{\\pi}{4}$',
      '$\\frac{\\pi}{6}$',
      '$\\frac{\\pi}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Express $n$ from the first equation:\n$n = -(l + m)$.\n\nStep 2: Substitute $n = -(l + m)$ into the second equation $l^2 + m^2 - n^2 = 0$:\n$l^2 + m^2 - [-(l + m)]^2 = 0$\n$l^2 + m^2 - (l^2 + 2lm + m^2) = 0$\n$-2lm = 0 \\implies lm = 0$.\n\nStep 3: This gives two independent cases:\nCase 1: $l = 0$\nThen $n = -(0 + m) = -m$. Direction ratios are $(0, m, -m) \\sim (0, 1, -1)$.\n\nCase 2: $m = 0$\nThen $n = -(l + 0) = -l$. Direction ratios are $(l, 0, -l) \\sim (1, 0, -1)$.\n\nStep 4: Find the angle $\\theta$ between vectors $\\vec{v}_1 = (0, 1, -1)$ and $\\vec{v}_2 = (1, 0, -1)$:\n$\\cos\\theta = \\frac{|\\vec{v}_1 \\cdot \\vec{v}_2|}{|v_1||v_2|} = \\frac{|(0)(1) + (1)(0) + (-1)(-1)|}{\\sqrt{0^2 + 1^2 + (-1)^2} \\sqrt{1^2 + 0^2 + (-1)^2}} = \\frac{1}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2}$.\n\nStep 5: Solve for $\\theta$:\n$\\cos\\theta = \\frac{1}{2} \\implies \\theta = \\frac{\\pi}{3}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Remember that lm = 0 yields two distinct directions (l = 0 OR m = 0), each corresponding to one of the two lines.',
    shortcut: 'l^2 + m^2 - (l+m)^2 = -2lm = 0 => l = 0 or m = 0. Lines are (0, 1, -1) and (1, 0, -1). cos(theta) = 1 / (sqrt(2)*sqrt(2)) = 1/2 => theta = pi/3.'
  },
  {
    id: 'pyq-math-3d-004',
    subject: 'mathematics',
    chapterId: 'math-c12-three-dimensional-geometry',
    topicId: 'math-3d-3-foot-perpendicular-image',
    text: 'The coordinates of the image of the point $P(1, 6, 3)$ with respect to the line $\\frac{x}{1} = \\frac{y - 1}{2} = \\frac{z - 2}{3}$ are:',
    options: [
      '$(1, 0, 7)$',
      '$(1, 2, 5)$',
      '$(0, 1, 7)$',
      '$(2, 0, 6)$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Write the general point $Q$ on the line:\n$Q(\\lambda, 2\\lambda + 1, 3\\lambda + 2)$.\n\nStep 2: Vector $\\vec{PQ}$ from $P(1, 6, 3)$ to $Q$ is:\n$\\vec{PQ} = (\\lambda - 1)\\hat{i} + (2\\lambda + 1 - 6)\\hat{j} + (3\\lambda + 2 - 3)\\hat{k} = (\\lambda - 1)\\hat{i} + (2\\lambda - 5)\\hat{j} + (3\\lambda - 1)\\hat{k}$.\n\nStep 3: Line direction vector is $\\vec{b} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$. Set $\\vec{PQ} \\cdot \\vec{b} = 0$:\n$1(\\lambda - 1) + 2(2\\lambda - 5) + 3(3\\lambda - 1) = 0$\n$\\lambda - 1 + 4\\lambda - 10 + 9\\lambda - 3 = 0$\n$14\\lambda - 14 = 0 \\implies \\lambda = 1$.\n\nStep 4: The foot of perpendicular is $Q(1, 2(1)+1, 3(1)+2) = Q(1, 3, 5)$.\n\nStep 5: If $R(x, y, z)$ is the image of $P$ in the line, $Q$ must be the midpoint of $PR$:\n$\\frac{x + 1}{2} = 1 \\implies x = 2 - 1 = 1$.\n$\\frac{y + 6}{2} = 3 \\implies y = 6 - 6 = 0$.\n$\\frac{z + 3}{2} = 5 \\implies z = 10 - 3 = 7$.\n\nTherefore, the image is $R(1, 0, 7)$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Do not stop after finding Q(1, 3, 5)! Q is the foot of the perpendicular; the image R is twice Q minus P.',
    shortcut: 'Foot Q: lambda = (1*1 + 2*5 + 3*1) / (1 + 4 + 9) = 14 / 14 = 1 => Q = (1, 3, 5). Image R = 2Q - P = (2, 6, 10) - (1, 6, 3) = (1, 0, 7).'
  },
  {
    id: 'pyq-math-3d-005',
    subject: 'mathematics',
    chapterId: 'math-c12-three-dimensional-geometry',
    topicId: 'math-3d-1-direction-cosines-ratios',
    text: 'If the lines $L_1: \\frac{x - 1}{2} = \\frac{y + 1}{k} = \\frac{z + 2}{-2}$ and $L_2: \\frac{x + 2}{-3} = \\frac{y - 3}{2} = \\frac{z - 1}{4}$ are mutually perpendicular, then the value of $k$ is equal to:',
    options: [
      '$7$',
      '$-7$',
      '$5$',
      '$-5$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Identify direction ratios of both lines:\nFor $L_1$: $(a_1, b_1, c_1) = (2, k, -2)$.\nFor $L_2$: $(a_2, b_2, c_2) = (-3, 2, 4)$.\n\nStep 2: Condition for two lines to be mutually perpendicular:\n$a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$.\n\nStep 3: Substitute the direction ratios:\n$2(-3) + k(2) + (-2)(4) = 0$\n$-6 + 2k - 8 = 0$\n$2k - 14 = 0$\n$2k = 14 \\implies k = 7$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Check negative signs in c_1 = -2 and c_2 = 4, so (-2)(4) = -8.',
    shortcut: 'Perpendicularity: 2(-3) + 2k - 8 = 0 => 2k = 14 => k = 7.'
  },
  {
    id: 'pyq-math-3d-006',
    subject: 'mathematics',
    chapterId: 'math-c12-three-dimensional-geometry',
    topicId: 'math-3d-2-skew-lines-shortest-distance',
    text: 'If the lines $\\frac{x - 1}{1} = \\frac{y - 1}{1} = \\frac{z - 1}{-k}$ and $\\frac{x - 2}{k} = \\frac{y - 2}{2} = \\frac{z}{1}$ are coplanar, then the possible values of $k$ are:',
    options: [
      '$1$ or $2$',
      '$-1$ or $2$',
      '$1$ or $-2$',
      '$0$ or $3$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Two lines are coplanar if and only if $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 0$, which is equivalent to the $3 \\times 3$ determinant condition:\n$\\begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\\\ a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\end{vmatrix} = 0$.\n\nStep 2: Identify points and direction ratios:\nLine 1: passes through $A_1(1, 1, 1)$, parallel to $\\vec{b}_1 = (1, 1, -k)$.\nLine 2: passes through $A_2(2, 2, 0)$, parallel to $\\vec{b}_2 = (k, 2, 1)$.\n$\\vec{a}_2 - \\vec{a}_1 = (2 - 1)\\hat{i} + (2 - 1)\\hat{j} + (0 - 1)\\hat{k} = \\hat{i} + \\hat{j} - \\hat{k}$.\n\nStep 3: Set up and expand the determinant along Row 1:\n$\\begin{vmatrix} 1 & 1 & -1 \\\\ 1 & 1 & -k \\\\ k & 2 & 1 \\end{vmatrix} = 0$\n$1[1(1) - (-k)(2)] - 1[1(1) - (-k)(k)] - 1[1(2) - 1(k)] = 0$\n$(1 + 2k) - (1 + k^2) - (2 - k) = 0$\n$1 + 2k - 1 - k^2 - 2 + k = 0$\n$-k^2 + 3k - 2 = 0 \\implies k^2 - 3k + 2 = 0$.\n\nStep 4: Factor the quadratic:\n$(k - 1)(k - 2) = 0 \\implies k = 1 \\text{ or } k = 2$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Ensure you correctly identify the coordinates of the point on line 2: (x - 2)/k = (y - 2)/2 = z/1 means z - 0, so z_2 = 0.',
    shortcut: 'Coplanar lines determinant = 0: -(k^2 - 3k + 2) = 0 => (k - 1)(k - 2) = 0 => k = 1 or k = 2.'
  }
];
