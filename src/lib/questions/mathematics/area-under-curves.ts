import { Question } from '@/types';

export const areaUnderCurvesQuestions: Question[] = [
  {
    id: 'pyq-math-auc-001',
    subject: 'mathematics',
    chapterId: 'math-c12-area-under-curves',
    topicId: 'math-auc-2-two-curves-intersection',
    text: 'The area of the region bounded by the two parabolas $y^2 = 2x$ and $x^2 = 2y$ is equal to:',
    options: [
      '$\\frac{4}{3}$',
      '$\\frac{2}{3}$',
      '$\\frac{8}{3}$',
      '$2$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Find points of intersection of $y^2 = 2x$ and $x^2 = 2y$:\nFrom $x^2 = 2y$, $y = \\frac{x^2}{2}$.\nSubstitute into $y^2 = 2x$:\n$\\left(\\frac{x^2}{2}\\right)^2 = 2x \\implies \\frac{x^4}{4} = 2x \\implies x^4 - 8x = 0$\n$x(x^3 - 8) = 0 \\implies x = 0$ or $x = 2$.\n\nStep 2: For $x \\in [0, 2]$, determine the upper and lower curves:\nAt $x = 1$, $y_{\\text{upper}} = \\sqrt{2(1)} = \\sqrt{2} \\approx 1.414$.\n$y_{\\text{lower}} = \\frac{1^2}{2} = 0.5$.\nThus $y_{\\text{upper}} = \\sqrt{2x}$ and $y_{\\text{lower}} = \\frac{x^2}{2}$.\n\nStep 3: Set up and evaluate the definite integral:\n$A = \\int_0^2 \\left( \\sqrt{2x} - \\frac{x^2}{2} \\right) dx = \\left[ \\sqrt{2} \\cdot \\frac{2}{3} x^{3/2} - \\frac{x^3}{6} \\right]_0^2$\n$= \\left( \\frac{2\\sqrt{2}}{3} \\cdot 2\\sqrt{2} - \\frac{8}{6} \\right) - 0$\n$= \\frac{8}{3} - \\frac{4}{3} = \\frac{4}{3}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Check the coefficients carefully: $y^2 = 4ax \\implies 4a = 2 \\implies a = 1/2$. Do not confuse $4a$ with $a$.',
    shortcut: 'Standard shortcut for area between $y^2 = 4ax$ and $x^2 = 4by$: Area = 16 a b / 3. Here 4a = 2 => a = 1/2, 4b = 2 => b = 1/2. Area = 16*(1/2)*(1/2)/3 = 4/3.'
  },
  {
    id: 'pyq-math-auc-002',
    subject: 'mathematics',
    chapterId: 'math-c12-area-under-curves',
    topicId: 'math-auc-2-two-curves-intersection',
    text: 'The area of the region bounded by the parabola $y^2 = 8x$ and the line $y = 2x$ is equal to:',
    options: [
      '$\\frac{4}{3}$',
      '$\\frac{2}{3}$',
      '$\\frac{8}{3}$',
      '$\\frac{1}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Find the intersection points of $y^2 = 8x$ and $y = 2x$:\nSubstitute $y = 2x$ into the parabola equation:\n$(2x)^2 = 8x \\implies 4x^2 = 8x \\implies 4x(x - 2) = 0$.\nSo $x = 0$ and $x = 2$.\n\nStep 2: Determine upper and lower curves on $[0, 2]$:\nAt $x = 1$, parabola gives $y = \\sqrt{8} \\approx 2.83$, line gives $y = 2$.\nUpper curve: $y = \\sqrt{8x} = 2\\sqrt{2}\\sqrt{x}$.\nLower curve: $y = 2x$.\n\nStep 3: Integrate from $x = 0$ to $x = 2$:\n$A = \\int_0^2 (2\\sqrt{2} x^{1/2} - 2x) dx = \\left[ 2\\sqrt{2} \\cdot \\frac{2}{3} x^{3/2} - x^2 \\right]_0^2$\n$= \\left( \\frac{4\\sqrt{2}}{3} \\cdot 2\\sqrt{2} - 4 \\right) = \\frac{16}{3} - 4 = \\frac{4}{3}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Ensure you subtract (parabola - line) and not (line - parabola) so the area remains strictly positive.',
    shortcut: 'Formula for area between $y^2 = 4ax$ and $y = mx$: Area = 8 a^2 / (3 m^3). Here 4a = 8 => a = 2, m = 2. Area = 8*(2^2) / [3*(2^3)] = 32 / 24 = 4/3.'
  },
  {
    id: 'pyq-math-auc-003',
    subject: 'mathematics',
    chapterId: 'math-c12-area-under-curves',
    topicId: 'math-auc-3-inequalities-symmetry',
    text: 'The area of the region bounded by the curves $y = |x - 1|$ and $y = 3 - |x|$ is equal to:',
    options: [
      '$4$',
      '$3$',
      '$2$',
      '$\\frac{7}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Find points of intersection of $y = |x - 1|$ and $y = 3 - |x|$:\nCase 1: $x \\ge 1$\n$x - 1 = 3 - x \\implies 2x = 4 \\implies x = 2$.\nCase 2: $x \\le 0$\n$-(x - 1) = 3 - (-x) \\implies 1 - x = 3 + x \\implies 2x = -2 \\implies x = -1$.\nCase 3: $0 < x < 1$\n$1 - x = 3 - x \\implies 1 = 3$ (no solution).\nThus, the curves intersect at $x = -1$ and $x = 2$.\n\nStep 2: Split the integration across critical points $x = 0$ and $x = 1$ where the absolute values change definition:\n$A = \\int_{-1}^0 [(3 + x) - (1 - x)] dx + \\int_0^1 [(3 - x) - (1 - x)] dx + \\int_1^2 [(3 - x) - (x - 1)] dx$.\n\nStep 3: Evaluate each interval:\nInterval 1: $\\int_{-1}^0 (2 + 2x) dx = [2x + x^2]_{-1}^0 = 0 - (-2 + 1) = 1$.\nInterval 2: $\\int_0^1 2 dx = 2(1 - 0) = 2$.\nInterval 3: $\\int_1^2 (4 - 2x) dx = [4x - x^2]_1^2 = (8 - 4) - (4 - 1) = 4 - 3 = 1$.\n\nStep 4: Sum the three areas:\n$A = 1 + 2 + 1 = 4$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Do not integrate in one single piece from -1 to 2; the definitions of both |x| and |x - 1| switch at x = 0 and x = 1.',
    shortcut: 'Plotting the two piecewise linear shapes reveals a parallelogram/quadrilateral composed of two triangles of base 2 and height 1, plus a central rectangle of width 1 and height 2. Area = 1/2(2)(1) + 1*(2) + 1/2(2)(1) = 1 + 2 + 1 = 4.'
  },
  {
    id: 'pyq-math-auc-004',
    subject: 'mathematics',
    chapterId: 'math-c12-area-under-curves',
    topicId: 'math-auc-1-cartesian-bounded-regions',
    text: 'The area of the region bounded by the curve $y = x^2 - 1$, the x-axis, and the vertical lines $x = 0$ and $x = 2$ is equal to:',
    options: [
      '$2$',
      '$\\frac{2}{3}$',
      '$\\frac{4}{3}$',
      '$\\frac{8}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Check where the curve crosses the x-axis in $[0, 2]$:\n$x^2 - 1 = 0 \\implies x = 1$.\n\nStep 2: Break the integral at $x = 1$ to account for signs:\nFor $x \\in [0, 1]$, $x^2 - 1 \\le 0$ (the region lies below the x-axis).\nFor $x \\in [1, 2]$, $x^2 - 1 \\ge 0$ (the region lies above the x-axis).\n\nStep 3: Set up area as the sum of absolute values:\n$A = \\int_0^1 |x^2 - 1| dx + \\int_1^2 |x^2 - 1| dx$\n$= \\int_0^1 (1 - x^2) dx + \\int_1^2 (x^2 - 1) dx$.\n\nStep 4: Evaluate each integral:\n$A_1 = \\left[ x - \\frac{x^3}{3} \\right]_0^1 = 1 - \\frac{1}{3} = \\frac{2}{3}$.\n$A_2 = \\left[ \\frac{x^3}{3} - x \\right]_1^2 = \\left( \\frac{8}{3} - 2 \\right) - \\left( \\frac{1}{3} - 1 \\right) = \\frac{2}{3} - \\left(-\\frac{2}{3}\\right) = \\frac{4}{3}$.\n\nStep 5: Total Area $= \\frac{2}{3} + \\frac{4}{3} = \\frac{6}{3} = 2$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Integrating directly from 0 to 2 without splitting gives int_0^2 (x^2 - 1) dx = 8/3 - 2 = 2/3, which cancels positive and negative areas and gives the wrong answer!',
    shortcut: 'Area must be strictly positive: Split at root x = 1. A = (1 - 1/3) + [(8/3 - 2) - (1/3 - 1)] = 2/3 + 4/3 = 2.'
  },
  {
    id: 'pyq-math-auc-005',
    subject: 'mathematics',
    chapterId: 'math-c12-area-under-curves',
    topicId: 'math-auc-1-cartesian-bounded-regions',
    text: 'The area bounded by the curves $y = \\sin x$ and $y = \\cos x$ between $x = 0$ and $x = \\frac{\\pi}{2}$ is equal to:',
    options: [
      '$2(\\sqrt{2} - 1)$',
      '$\\sqrt{2} - 1$',
      '$2\\sqrt{2}$',
      '$2 - \\sqrt{2}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Find the point of intersection between $x = 0$ and $x = \\pi/2$:\n$\\sin x = \\cos x \\implies \\tan x = 1 \\implies x = \\frac{\\pi}{4}$.\n\nStep 2: Compare values on both sides of $x = \\pi/4$:\nOn $[0, \\pi/4]$: $\\cos x \\ge \\sin x$.\nOn $[\\pi/4, \\pi/2]$: $\\sin x \\ge \\cos x$.\n\nStep 3: Set up the integral with proper upper - lower curves:\n$A = \\int_0^{\\pi/4} (\\cos x - \\sin x) dx + \\int_{\\pi/4}^{\\pi/2} (\\sin x - \\cos x) dx$.\n\nStep 4: Evaluate each part:\n$A_1 = [\\sin x + \\cos x]_0^{\\pi/4} = \\left(\\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}}\\right) - (0 + 1) = \\sqrt{2} - 1$.\n$A_2 = [-\\cos x - \\sin x]_{\\pi/4}^{\\pi/2} = (-0 - 1) - \\left(-\\frac{1}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}\\right) = -1 + \\sqrt{2} = \\sqrt{2} - 1$.\n\nStep 5: Total Area $= (\\sqrt{2} - 1) + (\\sqrt{2} - 1) = 2(\\sqrt{2} - 1)$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Do not integrate (cos x - sin x) from 0 to pi/2 in one step, as that gives 0 due to cancellation of the two symmetric regions.',
    shortcut: 'By symmetry around x = pi/4, the two bounded regions have identical area. Total Area = 2 * int_0^(pi/4) (cos x - sin x) dx = 2 * (sqrt(2) - 1).'
  },
  {
    id: 'pyq-math-auc-006',
    subject: 'mathematics',
    chapterId: 'math-c12-area-under-curves',
    topicId: 'math-auc-2-two-curves-intersection',
    text: 'The area of the region bounded by $y = \\sqrt{x}$ and $y = x^2$ is equal to:',
    options: [
      '$\\frac{1}{3}$',
      '$\\frac{2}{3}$',
      '$\\frac{1}{6}$',
      '$1$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Find points of intersection:\n$\\sqrt{x} = x^2 \\implies x = x^4 \\implies x(x^3 - 1) = 0$.\nSince $x \\ge 0$, the roots are $x = 0$ and $x = 1$.\n\nStep 2: On $[0, 1]$, determine which curve is above:\nAt $x = 1/4$, $\\sqrt{1/4} = 1/2$ and $(1/4)^2 = 1/16$.\nThus $y_{\\text{upper}} = x^{1/2}$ and $y_{\\text{lower}} = x^2$.\n\nStep 3: Integrate from 0 to 1:\n$A = \\int_0^1 (x^{1/2} - x^2) dx = \\left[ \\frac{2}{3} x^{3/2} - \\frac{x^3}{3} \\right]_0^1 = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Check which function is greater on (0, 1): the square root is strictly larger than the square for positive numbers less than 1.',
    shortcut: 'Notice that y = sqrt(x) is x = y^2. So these are y^2 = x and x^2 = y. By 16ab/3: 4a = 1 => a = 1/4, 4b = 1 => b = 1/4. Area = 16*(1/4)*(1/4)/3 = 1/3.'
  }
];
