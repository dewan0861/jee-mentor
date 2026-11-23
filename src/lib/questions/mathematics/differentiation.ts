import { Question } from '@/types';

export const differentiationQuestions: Question[] = [
  {
    id: 'pyq-math-diff-001',
    subject: 'mathematics',
    chapterId: 'math-c12-differentiation',
    topicId: 'math-diff-2-parametric-higher-order',
    text: 'Let $x = a(\\theta - \\sin\\theta)$ and $y = a(1 - \\cos\\theta)$, where $a > 0$. Then the value of $\\frac{d^2 y}{dx^2}$ at $\\theta = \\frac{\\pi}{2}$ is:',
    options: [
      '$-\\frac{1}{a}$',
      '$\\frac{1}{a}$',
      '$-\\frac{1}{2a}$',
      '$\\frac{2}{a}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Compute first derivatives with respect to $\\theta$:\n$\\frac{dx}{d\\theta} = a(1 - \\cos\\theta)$\n$\\frac{dy}{d\\theta} = a\\sin\\theta$.\n\nStep 2: Find the first derivative $\\frac{dy}{dx}$:\n$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{a\\sin\\theta}{a(1 - \\cos\\theta)} = \\frac{2\\sin(\\theta/2)\\cos(\\theta/2)}{2\\sin^2(\\theta/2)} = \\cot\\left(\\frac{\\theta}{2}\\right)$.\n\nStep 3: Differentiate $\\frac{dy}{dx}$ with respect to $x$ using the chain rule:\n$\\frac{d^2 y}{dx^2} = \\frac{d}{d\\theta}\\left[\\frac{dy}{dx}\\right] \\cdot \\frac{d\\theta}{dx} = \\frac{d}{d\\theta}\\left[\\cot\\left(\\frac{\\theta}{2}\\right)\\right] \\cdot \\frac{1}{\\frac{dx}{d\\theta}}$\n$= \\left[-\\csc^2\\left(\\frac{\\theta}{2}\\right) \\cdot \\frac{1}{2}\\right] \\cdot \\frac{1}{a(1 - \\cos\\theta)}$.\n\nStep 4: Evaluate at $\\theta = \\frac{\\pi}{2}$:\n$\\frac{\\theta}{2} = \\frac{\\pi}{4} \\implies \\csc\\left(\\frac{\\pi}{4}\\right) = \\sqrt{2} \\implies \\csc^2\\left(\\frac{\\pi}{4}\\right) = 2$.\n$1 - \\cos\\left(\\frac{\\pi}{2}\\right) = 1 - 0 = 1$.\n$\\frac{d^2 y}{dx^2} = \\left[-\\frac{1}{2} \\cdot 2\\right] \\cdot \\frac{1}{a(1)} = -1 \\cdot \\frac{1}{a} = -\\frac{1}{a}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Do not simply take (d^2y/dtheta^2) / (d^2x/dtheta^2)! That formula is algebraically invalid. You must divide d/dtheta(dy/dx) by dx/dtheta.',
    shortcut: 'dy/dx = cot(theta/2). d^2y/dx^2 = -1/2 csc^2(theta/2) / [a(1 - cos theta)]. At theta = pi/2: (-1/2 * 2) / (a * 1) = -1/a.'
  },
  {
    id: 'pyq-math-diff-002',
    subject: 'mathematics',
    chapterId: 'math-c12-differentiation',
    topicId: 'math-diff-3-inverse-trig-substitutions',
    text: 'If $f(x) = \\tan^{-1}\\left( \\frac{\\sqrt{1 + x^2} - 1}{x} \\right)$ for $x \\ne 0$, then $f\'(1)$ is equal to:',
    options: [
      '$\\frac{1}{4}$',
      '$\\frac{1}{2}$',
      '$1$',
      '$\\frac{1}{8}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Simplify $f(x)$ using the trigonometric substitution $x = \\tan\\theta$ (so $\\theta = \\tan^{-1} x$):\n$\\frac{\\sqrt{1 + x^2} - 1}{x} = \\frac{\\sqrt{1 + \\tan^2\\theta} - 1}{\\tan\\theta} = \\frac{\\sec\\theta - 1}{\\tan\\theta}$.\n\nStep 2: Express in terms of $\\sin\\theta$ and $\\cos\\theta$:\n$\\frac{\\frac{1}{\\cos\\theta} - 1}{\\frac{\\sin\\theta}{\\cos\\theta}} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{2\\sin^2(\\theta/2)}{2\\sin(\\theta/2)\\cos(\\theta/2)} = \\tan\\left(\\frac{\\theta}{2}\\right)$.\n\nStep 3: Simplify the inverse tangent expression:\n$f(x) = \\tan^{-1}\\left[\\tan\\left(\\frac{\\theta}{2}\\right)\\right] = \\frac{\\theta}{2} = \\frac{1}{2}\\tan^{-1} x$.\n\nStep 4: Differentiate with respect to $x$:\n$f\'(x) = \\frac{1}{2} \\cdot \\frac{1}{1 + x^2}$.\n\nStep 5: Evaluate at $x = 1$:\n$f\'(1) = \\frac{1}{2(1 + 1^2)} = \\frac{1}{4}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Differentiating the raw quotient with chain rule directly is extremely tedious and prone to algebraic errors. Trigonometric substitution condenses it to a single-line derivative.',
    shortcut: '(sqrt(1 + x^2) - 1)/x simplifies directly to tan(1/2 arctan x). So f(x) = 1/2 arctan x, f\'(x) = 1/[2(1 + x^2)]. f\'(1) = 1/4.'
  },
  {
    id: 'pyq-math-diff-003',
    subject: 'mathematics',
    chapterId: 'math-c12-differentiation',
    topicId: 'math-diff-1-chain-logarithmic-implicit',
    text: 'If $x^y \\cdot y^x = 1$, then $\\frac{dy}{dx}$ is equal to:',
    options: [
      '$-\\frac{y(x \\ln y + y)}{x(y \\ln x + x)}$',
      '$\\frac{y(x \\ln y + y)}{x(y \\ln x + x)}$',
      '$-\\frac{x(y \\ln x + x)}{y(x \\ln y + y)}$',
      '$-\\frac{y \\ln y}{x \\ln x}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Take the natural logarithm on both sides:\n$\\ln(x^y \\cdot y^x) = \\ln(1) = 0$\n$y \\ln x + x \\ln y = 0$.\n\nStep 2: Differentiate implicitly with respect to $x$ using the product rule:\n$\\frac{d}{dx}[y \\ln x] + \\frac{d}{dx}[x \\ln y] = 0$\n$\\left( \\frac{dy}{dx} \\ln x + \\frac{y}{x} \\right) + \\left( 1 \\cdot \\ln y + x \\cdot \\frac{1}{y} \\frac{dy}{dx} \\right) = 0$.\n\nStep 3: Collect terms containing $\\frac{dy}{dx}$:\n$\\frac{dy}{dx} \\left( \\ln x + \\frac{x}{y} \\right) = -\\left( \\ln y + \\frac{y}{x} \\right)$\n$\\frac{dy}{dx} \\left( \\frac{y \\ln x + x}{y} \\right) = -\\left( \\frac{x \\ln y + y}{x} \\right)$.\n\nStep 4: Solve for $\\frac{dy}{dx}$:\n$\\frac{dy}{dx} = -\\frac{y}{x} \\cdot \\frac{x \\ln y + y}{y \\ln x + x} = -\\frac{y(x \\ln y + y)}{x(y \\ln x + x)}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Remember that ln y differentiated with respect to x requires the chain rule factor dy/dx.',
    shortcut: 'Implicit partial derivative formula: dy/dx = - (partial F / partial x) / (partial F / partial y) = - (y/x + ln y) / (ln x + x/y) = - [y(y + x ln y)] / [x(x + y ln x)].'
  },
  {
    id: 'pyq-math-diff-004',
    subject: 'mathematics',
    chapterId: 'math-c12-differentiation',
    topicId: 'math-diff-1-chain-logarithmic-implicit',
    text: 'Let $f(x) = x^3 + e^{x/2}$ and $g(x) = f^{-1}(x)$. Then the value of $g\'(1)$ is:',
    options: [
      '$2$',
      '$\\frac{1}{2}$',
      '$1$',
      '$3$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Recall the derivative of an inverse function:\n$g(f(x)) = x \\implies g\'(f(x)) \\cdot f\'(x) = 1 \\implies g\'(f(x)) = \\frac{1}{f\'(x)}$.\n\nStep 2: We need $g\'(1)$. Set $f(x) = 1$:\n$x^3 + e^{x/2} = 1$.\nBy inspection, at $x = 0$:\n$f(0) = 0^3 + e^0 = 1$.\nSince $f\'(x) = 3x^2 + \\frac{1}{2}e^{x/2} > 0$ for all real $x$, $f$ is strictly increasing, so $x = 0$ is the unique solution.\n\nStep 3: Evaluate $f\'(0)$:\n$f\'(x) = 3x^2 + \\frac{1}{2} e^{x/2}$\n$f\'(0) = 3(0)^2 + \\frac{1}{2} e^0 = \\frac{1}{2}$.\n\nStep 4: Compute $g\'(1)$:\n$g\'(1) = \\frac{1}{f\'(0)} = \\frac{1}{1/2} = 2$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Never attempt to find an explicit closed-form expression for the inverse function f^(-1)(x). Use the inverse derivative identity g\'(b) = 1 / f\'(a) where f(a) = b.',
    shortcut: 'f(0) = 1 => a = 0. f\'(0) = 1/2. Inverse derivative = 1 / (1/2) = 2.'
  },
  {
    id: 'pyq-math-diff-005',
    subject: 'mathematics',
    chapterId: 'math-c12-differentiation',
    topicId: 'math-diff-2-parametric-higher-order',
    text: 'Let $f(x) = \\begin{vmatrix} x^3 & \\sin x & \\cos x \\\\ 6 & -1 & 0 \\\\ p & p^2 & p^3 \\end{vmatrix}$, where $p$ is a real constant. Then the value of $\\frac{d^3}{dx^3}[f(x)]$ at $x = 0$ is:',
    options: [
      '$0$',
      '$6 p^3$',
      '$-6 p$',
      '$p + p^2$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Use the rule for differentiating a determinant row by row:\nSince rows 2 and 3 are independent of $x$, only row 1 varies with $x$.\nHence, taking the $k$-th derivative of $f(x)$ simply differentiates row 1 $k$ times:\n$\\frac{d^k}{dx^k}[f(x)] = \\begin{vmatrix} \\frac{d^k}{dx^k}(x^3) & \\frac{d^k}{dx^k}(\\sin x) & \\frac{d^k}{dx^k}(\\cos x) \\\\ 6 & -1 & 0 \\\\ p & p^2 & p^3 \\end{vmatrix}$.\n\nStep 2: Differentiate the first row three times ($k = 3$):\n$\\frac{d^3}{dx^3}(x^3) = 6$\n$\\frac{d^3}{dx^3}(\\sin x) = -\\cos x$\n$\\frac{d^3}{dx^3}(\\cos x) = \\sin x$.\n\nStep 3: Evaluate at $x = 0$:\n$\\frac{d^3}{dx^3}(x^3)\\Big|_{x=0} = 6$\n$-\\cos(0) = -1$\n$\\sin(0) = 0$.\n\nStep 4: Form the resulting determinant:\n$f\'\'\'(0) = \\begin{vmatrix} 6 & -1 & 0 \\\\ 6 & -1 & 0 \\\\ p & p^2 & p^3 \\end{vmatrix}$.\nNotice that Row 1 and Row 2 are identical ($[6, -1, 0]$).\nSince two rows are identical, the determinant is identically 0.',
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    trap: 'Do not expand the determinant into a long polynomial of trigonometric functions before differentiating. Differentiating the single variable row keeps the determinant intact and immediately reveals identical rows.',
    shortcut: 'Row 1 triple derivative at 0 gives (6, -1, 0), which matches Row 2 exactly! Any determinant with two identical rows is 0.'
  },
  {
    id: 'pyq-math-diff-006',
    subject: 'mathematics',
    chapterId: 'math-c12-differentiation',
    topicId: 'math-diff-1-chain-logarithmic-implicit',
    text: 'Let $y = (\\sin x)^{\\ln x}$ for $x \\in (0, \\pi)$. Then the value of $\\frac{dy}{dx}$ at $x = \\frac{\\pi}{2}$ is:',
    options: [
      '$0$',
      '$1$',
      '$\\ln\\left(\\frac{\\pi}{2}\\right)$',
      '$\\frac{2}{\\pi}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Take natural logarithms on both sides for logarithmic differentiation:\n$\\ln y = \\ln\\left((\\sin x)^{\\ln x}\\right) = (\\ln x) \\cdot \\ln(\\sin x)$.\n\nStep 2: Differentiate with respect to $x$ using the product rule:\n$\\frac{1}{y} \\frac{dy}{dx} = \\frac{d}{dx}(\\ln x) \\cdot \\ln(\\sin x) + (\\ln x) \\cdot \\frac{d}{dx}(\\ln(\\sin x))$\n$\\frac{1}{y} \\frac{dy}{dx} = \\frac{1}{x} \\ln(\\sin x) + \\ln x \\cdot \\frac{\\cos x}{\\sin x} = \\frac{\\ln(\\sin x)}{x} + \\ln x \\cot x$.\n\nStep 3: Evaluate each term at $x = \\frac{\\pi}{2}$:\n$\\sin\\left(\\frac{\\pi}{2}\\right) = 1 \\implies \\ln(\\sin(\\pi/2)) = \\ln(1) = 0$.\n$\\cot\\left(\\frac{\\pi}{2}\\right) = 0$.\nAt $x = \\pi/2$, $y = (1)^{\\ln(\\pi/2)} = 1$.\n\nStep 4: Substitute into the derivative equation:\n$\\frac{1}{1} \\frac{dy}{dx} = \\frac{0}{\\pi/2} + \\ln(\\pi/2) \\cdot 0 = 0 \\implies \\frac{dy}{dx} = 0$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Always check if ln(1) = 0 and cot(pi/2) = 0 before computing extensive algebraic expansions.',
    shortcut: 'At x = pi/2, both ln(sin x) = 0 and d/dx(sin x) = cos(pi/2) = 0, so the derivative vanishes to 0.'
  }
];
