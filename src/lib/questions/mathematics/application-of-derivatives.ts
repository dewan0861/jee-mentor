import { Question } from '@/types';

export const applicationOfDerivativesQuestions: Question[] = [
  {
    id: 'pyq-math-aod-001',
    subject: 'mathematics',
    chapterId: 'math-c12-application-of-derivatives',
    topicId: 'math-aod-3-maxima-minima-optimization',
    text: 'Let $f(x) = 2x^3 - 9x^2 + 12x + 5$ on the closed interval $[0, 3]$. The difference between the absolute maximum and absolute minimum values of $f(x)$ on $[0, 3]$ is:',
    options: [
      '$9$',
      '$14$',
      '$5$',
      '$7$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Find critical points of $f(x)$ by setting $f\'(x) = 0$:\n$f\'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2)$.\nSetting $f\'(x) = 0$ gives critical points $x = 1$ and $x = 2$. Both lie in the interval $[0, 3]$.\n\nStep 2: Evaluate $f(x)$ at all critical points and interval boundary endpoints:\nAt $x = 0$ (endpoint): $f(0) = 2(0)^3 - 9(0)^2 + 12(0) + 5 = 5$.\nAt $x = 1$ (critical point): $f(1) = 2(1) - 9(1) + 12(1) + 5 = 10$.\nAt $x = 2$ (critical point): $f(2) = 2(8) - 9(4) + 12(2) + 5 = 16 - 36 + 24 + 5 = 9$.\nAt $x = 3$ (endpoint): $f(3) = 2(27) - 9(9) + 12(3) + 5 = 54 - 81 + 36 + 5 = 14$.\n\nStep 3: Identify absolute extrema:\nAbsolute Maximum $= M = \\max(5, 10, 9, 14) = 14$ (at $x = 3$).\nAbsolute Minimum $= m = \\min(5, 10, 9, 14) = 5$ (at $x = 0$).\n\nStep 4: Compute the difference:\n$M - m = 14 - 5 = 9$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Do not simply compare local extrema f(1) and f(2)! Absolute extrema on a closed interval frequently occur at the endpoints x = 0 or x = 3.',
    shortcut: 'Candidates are x = {0, 1, 2, 3}. Values are {5, 10, 9, 14}. Difference = 14 - 5 = 9.'
  },
  {
    id: 'pyq-math-aod-002',
    subject: 'mathematics',
    chapterId: 'math-c12-application-of-derivatives',
    topicId: 'math-aod-1-rate-of-change',
    text: 'A spherical balloon is being inflated such that its volume increases at a constant rate of $35\\text{ cm}^3/\\text{s}$. The rate of increase of its surface area when its diameter is $14\\text{ cm}$ is:',
    options: [
      '$10\\text{ cm}^2/\\text{s}$',
      '$20\\text{ cm}^2/\\text{s}$',
      '$5\\text{ cm}^2/\\text{s}$',
      '$\\frac{35}{2}\\text{ cm}^2/\\text{s}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Write formulas for volume $V$ and surface area $S$ of a sphere of radius $r$:\n$V = \\frac{4}{3}\\pi r^3$\n$S = 4\\pi r^2$.\n\nStep 2: Differentiate both with respect to time $t$:\n$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$\n$\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.\n\nStep 3: Relate $\\frac{dS}{dt}$ directly to $\\frac{dV}{dt}$:\n$\\frac{dS}{dt} = \\frac{8\\pi r \\frac{dr}{dt}}{4\\pi r^2 \\frac{dr}{dt}} \\cdot \\frac{dV}{dt} = \\frac{2}{r} \\frac{dV}{dt}$.\n\nStep 4: Given diameter $d = 14\\text{ cm} \\implies r = 7\\text{ cm}$, and $\\frac{dV}{dt} = 35\\text{ cm}^3/\\text{s}$:\n$\\frac{dS}{dt} = \\frac{2}{7} \\times 35 = 10\\text{ cm}^2/\\text{s}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Diameter is given as 14 cm, which means radius r = 7 cm! Using r = 14 cm gives an incorrect answer.',
    shortcut: 'For a sphere, dS/dt = (2/r) * (dV/dt). Here (2/7) * 35 = 10 cm^2/s.'
  },
  {
    id: 'pyq-math-aod-003',
    subject: 'mathematics',
    chapterId: 'math-c12-application-of-derivatives',
    topicId: 'math-aod-2-monotonicity-intervals',
    text: 'The function $f(x) = \\frac{x}{x^2 + 1}$ is strictly decreasing on the interval:',
    options: [
      '$(-\\infty, -1) \\cup (1, \\infty)$',
      '$(-1, 1)$',
      '$(0, \\infty)$',
      '$(-\\infty, 0)$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Compute $f\'(x)$ using the quotient rule:\n$f\'(x) = \\frac{(x^2 + 1)(1) - x(2x)}{(x^2 + 1)^2} = \\frac{x^2 + 1 - 2x^2}{(x^2 + 1)^2} = \\frac{1 - x^2}{(x^2 + 1)^2}$.\n\nStep 2: For $f(x)$ to be strictly decreasing, set $f\'(x) < 0$:\nSince the denominator $(x^2 + 1)^2 > 0$ for all real $x$, the sign is determined solely by the numerator:\n$1 - x^2 < 0 \\implies x^2 > 1$.\n\nStep 3: Solve the inequality $x^2 > 1$:\n$x \\in (-\\infty, -1) \\cup (1, \\infty)$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Do not confuse strictly decreasing (f\' < 0) with strictly increasing (f\' > 0, which occurs on (-1, 1)).',
    shortcut: 'Numerator of derivative is 1 - x^2. Decreasing when 1 - x^2 < 0 <=> |x| > 1.'
  },
  {
    id: 'pyq-math-aod-004',
    subject: 'mathematics',
    chapterId: 'math-c12-application-of-derivatives',
    topicId: 'math-aod-3-maxima-minima-optimization',
    text: 'A right circular cylinder of maximum volume is inscribed in a right circular cone of height $H$ and base radius $R$. The maximum volume of the inscribed cylinder is equal to:',
    options: [
      '$\\frac{4}{27} \\pi R^2 H$',
      '$\\frac{2}{9} \\pi R^2 H$',
      '$\\frac{4}{9} \\pi R^2 H$',
      '$\\frac{1}{3} \\pi R^2 H$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Let the cylinder have radius $r$ and height $h$.\nBy similar right-angled triangles between the cone and the upper unused cone section:\n$\\frac{H - h}{H} = \\frac{r}{R} \\implies h = H\\left(1 - \\frac{r}{R}\\right)$.\n\nStep 2: Express the volume $V(r)$ of the cylinder as a function of $r$:\n$V(r) = \\pi r^2 h = \\pi r^2 H\\left(1 - \\frac{r}{R}\\right) = \\pi H \\left( r^2 - \\frac{r^3}{R} \\right)$.\n\nStep 3: Find the critical point by differentiating with respect to $r$:\n$\\frac{dV}{dr} = \\pi H \\left( 2r - \\frac{3r^2}{R} \\right) = 0$.\nSince $r \\ne 0$, $2 - \\frac{3r}{R} = 0 \\implies r = \\frac{2}{3}R$.\nCheck concavity: $\\frac{d^2V}{dr^2} = \\pi H(2 - 6r/R) = \\pi H(2 - 4) = -2\\pi H < 0$ (Maximum confirmed).\n\nStep 4: Find the cylinder height $h$ and maximum volume:\n$h = H\\left(1 - \\frac{2}{3}\\right) = \\frac{H}{3}$.\n$V_{\\max} = \\pi \\left(\\frac{2R}{3}\\right)^2 \\left(\\frac{H}{3}\\right) = \\pi \\cdot \\frac{4R^2}{9} \\cdot \\frac{H}{3} = \\frac{4}{27} \\pi R^2 H$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Notice that 4/27 * pi * R^2 * H is equal to 4/9 * (1/3 pi R^2 H) = 4/9 of the cone\'s volume. Read the options carefully to see if the formula is in terms of cone volume or pi R^2 H.',
    shortcut: 'Standard JEE Maxima result: Inscribed cylinder in cone has radius r = 2/3 R, height h = 1/3 H. V_max = 4/27 pi R^2 H = 4/9 V_cone.'
  },
  {
    id: 'pyq-math-aod-005',
    subject: 'mathematics',
    chapterId: 'math-c12-application-of-derivatives',
    topicId: 'math-aod-2-monotonicity-intervals',
    text: 'The value of $\\lambda \\in \\mathbb{R}$ for which the function $f(x) = 2x^3 - 3(\\lambda + 2)x^2 + 12\\lambda x + 7$ is strictly increasing on all of $\\mathbb{R}$ is:',
    options: [
      '$\\lambda = 2$',
      '$\\lambda = 4$',
      '$\\lambda \\in (2, 4)$',
      'No such real $\\lambda$ exists'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Compute $f\'(x)$:\n$f\'(x) = 6x^2 - 6(\\lambda + 2)x + 12\\lambda = 6[x^2 - (\\lambda + 2)x + 2\\lambda]$.\n\nStep 2: Factor the quadratic expression inside the brackets:\n$x^2 - (\\lambda + 2)x + 2\\lambda = (x - 2)(x - \\lambda)$.\nThus $f\'(x) = 6(x - 2)(x - \\lambda)$.\n\nStep 3: Apply the condition for $f(x)$ to be strictly increasing on all of $\\mathbb{R}$:\nA polynomial function is strictly increasing on $\\mathbb{R}$ if and only if $f\'(x) \\ge 0$ for all $x \\in \\mathbb{R}$ (with $f\'(x) = 0$ at isolated points only).\nFor a quadratic $(x - 2)(x - \\lambda)$ to be $\\ge 0$ for all $x \\in \\mathbb{R}$, its discriminant must satisfy $D \\le 0$.\n$D = (\\lambda + 2)^2 - 4(1)(2\\lambda) = \\lambda^2 + 4\\lambda + 4 - 8\\lambda = \\lambda^2 - 4\\lambda + 4 = (\\lambda - 2)^2$.\n\nStep 4: Since $(\\lambda - 2)^2 \\ge 0$ for all real $\\lambda$, the condition $D \\le 0$ can ONLY be satisfied when:\n$(\\lambda - 2)^2 = 0 \\implies \\lambda = 2$.\n\nWhen $\\lambda = 2$, $f\'(x) = 6(x - 2)^2 \\ge 0$ for all $x \\in \\mathbb{R}$, vanishing only at the isolated point $x = 2$, making $f$ strictly increasing on $\\mathbb{R}$.',
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    trap: 'If lambda != 2, the quadratic has two distinct roots, so f\'(x) < 0 strictly between the two roots, which violates increasing behavior on R. Hence only lambda = 2 works.',
    shortcut: 'Discriminant of x^2 - (lambda+2)x + 2*lambda is (lambda - 2)^2. To be non-negative everywhere, D <= 0 => (lambda - 2)^2 <= 0 => lambda = 2.'
  },
  {
    id: 'pyq-math-aod-006',
    subject: 'mathematics',
    chapterId: 'math-c12-application-of-derivatives',
    topicId: 'math-aod-3-maxima-minima-optimization',
    text: 'Let $f(x) = x^x$ for $x > 0$. The minimum value of $f(x)$ is equal to:',
    options: [
      '$e^{-1/e}$',
      '$e^{1/e}$',
      '$\\frac{1}{e}$',
      '$1$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Use logarithmic differentiation to find $f\'(x)$ for $f(x) = x^x$:\nLet $y = x^x \\implies \\ln y = x \\ln x$.\n$\\frac{1}{y} \\frac{dy}{dx} = 1 \\cdot \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$.\n$\\frac{dy}{dx} = x^x (1 + \\ln x)$.\n\nStep 2: Find the critical point by setting $f\'(x) = 0$:\nSince $x^x > 0$ for all $x > 0$:\n$1 + \\ln x = 0 \\implies \\ln x = -1 \\implies x = e^{-1} = \\frac{1}{e}$.\n\nStep 3: Verify that $x = 1/e$ is a local minimum:\nFor $x < 1/e$, $\\ln x < -1 \\implies f\'(x) < 0$ (decreasing).\nFor $x > 1/e$, $\\ln x > -1 \\implies f\'(x) > 0$ (increasing).\nHence $x = 1/e$ is a strict minimum point.\n\nStep 4: Compute the minimum value $f(1/e)$:\n$f\\left(\\frac{1}{e}\\right) = \\left(\\frac{1}{e}\\right)^{1/e} = (e^{-1})^{1/e} = e^{-1/e}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Do not confuse the location of the minimum x = 1/e with the value of the minimum e^(-1/e).',
    shortcut: 'd/dx(x^x) = x^x(1 + ln x) = 0 => x = 1/e. Min value = (1/e)^(1/e) = e^(-1/e).'
  }
];
