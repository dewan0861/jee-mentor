import { Question } from '@/types';

export const differentialEquationsQuestions: Question[] = [
  {
    id: 'pyq-math-de-001',
    subject: 'mathematics',
    chapterId: 'math-c12-differential-equations',
    topicId: 'math-de-3-linear-differential-exact',
    text: 'Let $y = y(x)$ be the solution of the differential equation $\\frac{dy}{dx} + 2y \\tan x = \\sin x$, satisfying the initial condition $y\\left(\\frac{\\pi}{3}\\right) = 0$. Then the value of $y(0)$ is equal to:',
    options: [
      '$-1$',
      '$1$',
      '$0$',
      '$-2$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Identify the type of differential equation:\n$\\frac{dy}{dx} + (2\\tan x) y = \\sin x$.\nThis is a standard first-order linear differential equation $\\frac{dy}{dx} + P(x) y = Q(x)$ where $P(x) = 2\\tan x$ and $Q(x) = \\sin x$.\n\nStep 2: Find the Integrating Factor (IF):\n$\\text{IF} = e^{\\int P(x) dx} = e^{\\int 2\\tan x dx} = e^{2\\ln|\\sec x|} = e^{\\ln(\\sec^2 x)} = \\sec^2 x$.\n\nStep 3: Write the general solution:\n$y \\cdot \\text{IF} = \\int Q(x) \\cdot \\text{IF} \\, dx + C$\n$y \\sec^2 x = \\int \\sin x \\sec^2 x \\, dx + C = \\int \\sec x \\tan x \\, dx + C$\n$y \\sec^2 x = \\sec x + C \\implies y(x) = \\cos x + C \\cos^2 x$.\n\nStep 4: Use the initial condition $y(\\pi/3) = 0$:\n$\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$.\n$0 = \\frac{1}{2} + C\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{2} + \\frac{C}{4} \\implies \\frac{C}{4} = -\\frac{1}{2} \\implies C = -2$.\nSo $y(x) = \\cos x - 2\\cos^2 x$.\n\nStep 5: Compute $y(0)$:\n$y(0) = \\cos(0) - 2\\cos^2(0) = 1 - 2(1)^2 = 1 - 2 = -1$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Check that e^(2 ln(sec x)) = sec^2 x, NOT 2 sec x.',
    shortcut: 'IF = sec^2 x. y * sec^2 x = sec x + C => y = cos x + C cos^2 x. y(pi/3)=0 gives 1/2 + C/4 = 0 => C = -2. y(0) = 1 - 2 = -1.'
  },
  {
    id: 'pyq-math-de-002',
    subject: 'mathematics',
    chapterId: 'math-c12-differential-equations',
    topicId: 'math-de-3-linear-differential-exact',
    text: 'Let $y = y(x)$ be the solution of the differential equation $(1 + y^2) dx = (\\tan^{-1} y - x) dy$, with $y(0) = 0$. Then the value of $x$ when $y = 1$ is:',
    options: [
      '$\\frac{\\pi}{4} - 1 + e^{-\\pi/4}$',
      '$\\frac{\\pi}{4} + 1 - e^{-\\pi/4}$',
      '$\\frac{\\pi}{4} - e^{-\\pi/4}$',
      '$\\frac{\\pi}{4} - 1 + e^{\\pi/4}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Check whether the equation is linear in $x$ or $y$:\nExpress as a derivative:\n$\\frac{dx}{dy} = \\frac{\\tan^{-1} y - x}{1 + y^2} = \\frac{\\tan^{-1} y}{1 + y^2} - \\frac{x}{1 + y^2}$\n$\\frac{dx}{dy} + \\frac{1}{1 + y^2} x = \\frac{\\tan^{-1} y}{1 + y^2}$.\nThis is a first-order linear differential equation in $x$ of the form $\\frac{dx}{dy} + P(y) x = Q(y)$.\n\nStep 2: Find the integrating factor:\n$\\text{IF} = e^{\\int \\frac{1}{1 + y^2} dy} = e^{\\tan^{-1} y}$.\n\nStep 3: Solve the linear equation:\n$x \\cdot e^{\\tan^{-1} y} = \\int \\frac{\\tan^{-1} y}{1 + y^2} e^{\\tan^{-1} y} dy + C$.\nSubstitute $t = \\tan^{-1} y \\implies dt = \\frac{dy}{1 + y^2}$:\n$\\int t e^t dt = t e^t - e^t = e^{\\tan^{-1} y}(\\tan^{-1} y - 1)$.\nThus $x \\cdot e^{\\tan^{-1} y} = e^{\\tan^{-1} y}(\\tan^{-1} y - 1) + C$\n$x = \\tan^{-1} y - 1 + C e^{-\\tan^{-1} y}$.\n\nStep 4: Use initial condition $y(0) = 0$, meaning $x = 0$ when $y = 0$:\n$0 = \\tan^{-1}(0) - 1 + C e^0 = 0 - 1 + C \\implies C = 1$.\nHence $x = \\tan^{-1} y - 1 + e^{-\\tan^{-1} y}$.\n\nStep 5: Evaluate $x$ at $y = 1$:\n$x = \\tan^{-1}(1) - 1 + e^{-\\tan^{-1}(1)} = \\frac{\\pi}{4} - 1 + e^{-\\pi/4}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Do not attempt to solve for dy/dx because the denominator contains (tan^-1 y - x), which is non-linear. Inverting to dx/dy makes it cleanly linear in x.',
    shortcut: 'Linear in x with IF = e^(arctan y). Direct integration of t*e^t gives e^t*(t - 1). With C = 1, x = arctan(y) - 1 + e^(-arctan y). At y = 1: pi/4 - 1 + e^(-pi/4).'
  },
  {
    id: 'pyq-math-de-003',
    subject: 'mathematics',
    chapterId: 'math-c12-differential-equations',
    topicId: 'math-de-2-separable-homogeneous',
    text: 'The solution curve of the differential equation $(x^2 - y^2) dx + 2xy \\, dy = 0$ passing through $(1, 1)$ represents:',
    options: [
      'a circle passing through the origin with center on the x-axis',
      'a circle with center on the y-axis',
      'a parabola with vertex at the origin',
      'a straight line passing through the origin'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Express $\\frac{dy}{dx}$:\n$2xy \\, dy = (y^2 - x^2) dx \\implies \\frac{dy}{dx} = \\frac{y^2 - x^2}{2xy}$.\nThis is a homogeneous differential equation of degree 2.\n\nStep 2: Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$v + x\\frac{dv}{dx} = \\frac{v^2 x^2 - x^2}{2x(vx)} = \\frac{v^2 - 1}{2v}$.\n$x\\frac{dv}{dx} = \\frac{v^2 - 1}{2v} - v = \\frac{v^2 - 1 - 2v^2}{2v} = -\\frac{v^2 + 1}{2v}$.\n\nStep 3: Separate variables and integrate:\n$\\frac{2v}{v^2 + 1} dv = -\\frac{dx}{x}$\n$\\ln(v^2 + 1) = -\\ln|x| + \\ln C = \\ln\\left|\\frac{C}{x}\\right|$\n$v^2 + 1 = \\frac{C}{x}$.\n\nStep 4: Substitute back $v = \\frac{y}{x}$:\n$\\frac{y^2}{x^2} + 1 = \\frac{C}{x} \\implies \\frac{x^2 + y^2}{x^2} = \\frac{C}{x} \\implies x^2 + y^2 = C x$.\n\nStep 5: Apply the condition that the curve passes through $(1, 1)$:\n$1^2 + 1^2 = C(1) \\implies C = 2$.\nEquation: $x^2 + y^2 - 2x = 0 \\implies (x - 1)^2 + y^2 = 1$.\nThis is a circle with center $(1, 0)$ on the x-axis, radius $1$, and passing through the origin $(0, 0)$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Check that (x^2 - y^2)dx + 2xy dy = 0 can also be grouped as x^2 dx - (y^2 dx - 2xy dy) = 0 or by multiplying by dx/x^2.',
    shortcut: 'Notice d((x^2 + y^2)/x) = [(2x dx + 2y dy)x - (x^2 + y^2)dx] / x^2 = [x^2 dx - y^2 dx + 2xy dy]/x^2 = 0. Hence (x^2 + y^2)/x = C => circle with center (1, 0).'
  },
  {
    id: 'pyq-math-de-004',
    subject: 'mathematics',
    chapterId: 'math-c12-differential-equations',
    topicId: 'math-de-3-linear-differential-exact',
    text: 'Let $y = y(x)$ be the solution of $x \\, dy - y \\, dx = \\sqrt{x^2 + y^2} \\, dx$, satisfying $y(1) = 0$. Then the value of $y(2)$ is equal to:',
    options: [
      '$\\frac{3}{2}$',
      '$\\frac{5}{2}$',
      '$2$',
      '$\\frac{1}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Divide both sides by $x^2$ (for $x > 0$):\n$\\frac{x \\, dy - y \\, dx}{x^2} = \\frac{\\sqrt{x^2 + y^2}}{x^2} dx = \\sqrt{1 + \\left(\\frac{y}{x}\\right)^2} \\frac{dx}{x}$.\n\nStep 2: Recognize $\\frac{x \\, dy - y \\, dx}{x^2} = d\\left(\\frac{y}{x}\\right)$:\nLet $u = \\frac{y}{x}$, then $du = \\frac{x dy - y dx}{x^2}$.\nThe equation becomes:\n$du = \\sqrt{1 + u^2} \\frac{dx}{x} \\implies \\frac{du}{\\sqrt{1 + u^2}} = \\frac{dx}{x}$.\n\nStep 3: Integrate both sides:\n$\\ln|u + \\sqrt{1 + u^2}| = \\ln|x| + \\ln C = \\ln|C x|$\n$u + \\sqrt{1 + u^2} = C x$.\nSubstitute $u = \\frac{y}{x}$:\n$\\frac{y}{x} + \\sqrt{1 + \\frac{y^2}{x^2}} = C x \\implies y + \\sqrt{x^2 + y^2} = C x^2$.\n\nStep 4: Use initial condition $y(1) = 0$:\n$0 + \\sqrt{1^2 + 0^2} = C(1)^2 \\implies 1 = C \\implies C = 1$.\nThus $y + \\sqrt{x^2 + y^2} = x^2$.\n\nStep 5: Solve for $y(2)$ when $x = 2$:\n$y + \\sqrt{2^2 + y^2} = 2^2 = 4$\n$\\sqrt{4 + y^2} = 4 - y$.\nSquare both sides:\n$4 + y^2 = 16 - 8y + y^2$\n$8y = 12 \\implies y = \\frac{12}{8} = \\frac{3}{2}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Ensure you verify the squared equation: 4 - y = 4 - 3/2 = 5/2 > 0, which is positive, confirming y = 3/2 is a valid non-extraneous root.',
    shortcut: 'Dividing by x^2 yields du / sqrt(1 + u^2) = dx / x. Hence u + sqrt(1 + u^2) = x (since C = 1). At x = 2: u + sqrt(1 + u^2) = 2 => u = 3/4 => y = 2 * (3/4) = 3/2.'
  },
  {
    id: 'pyq-math-de-005',
    subject: 'mathematics',
    chapterId: 'math-c12-differential-equations',
    topicId: 'math-de-1-order-degree-formation',
    text: 'The sum of the order and degree of the differential equation $\\left[ 1 + \\left(\\frac{dy}{dx}\\right)^2 \\right]^{3/2} = k \\frac{d^2 y}{dx^2}$ (where $k$ is a non-zero constant) is equal to:',
    options: [
      '$4$',
      '$5$',
      '$3$',
      '$2$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Understand the definition of order and degree:\nOrder: The order of the highest derivative occurring in the equation.\nDegree: The power of the highest order derivative after the differential equation is made free from radicals and fractions as far as derivatives are concerned.\n\nStep 2: Clear fractional powers by squaring both sides:\n$\\left( \\left[ 1 + \\left(\\frac{dy}{dx}\\right)^2 \\right]^{3/2} \\right)^2 = \\left( k \\frac{d^2 y}{dx^2} \\right)^2$\n$\\left[ 1 + \\left(\\frac{dy}{dx}\\right)^2 \\right]^3 = k^2 \\left(\\frac{d^2 y}{dx^2}\\right)^2$.\n\nStep 3: Determine order and degree:\nThe highest derivative present is $\\frac{d^2 y}{dx^2}$, so $\\text{Order} = 2$.\nThe exponent of the highest derivative $\\left(\\frac{d^2 y}{dx^2}\\right)^2$ is $2$, so $\\text{Degree} = 2$.\n\nStep 4: Compute the sum:\n$\\text{Order} + \\text{Degree} = 2 + 2 = 4$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Do not say the degree is 1 based on the un-squared equation; degree is defined only after all derivatives are cleared of rational/fractional powers.',
    shortcut: 'Highest derivative is d^2y/dx^2 (order 2). Squaring gives (d^2y/dx^2)^2 (degree 2). Sum = 2 + 2 = 4.'
  },
  {
    id: 'pyq-math-de-006',
    subject: 'mathematics',
    chapterId: 'math-c12-differential-equations',
    topicId: 'math-de-3-linear-differential-exact',
    text: 'Let $y = y(x)$ be the solution of the differential equation $\\frac{dy}{dx} + \\frac{y}{x} = y^2 x$, with $y(1) = 1$. Then the value of $y\\left(\\frac{1}{2}\\right)$ is equal to:',
    options: [
      '$\\frac{4}{3}$',
      '$\\frac{3}{4}$',
      '$2$',
      '$\\frac{1}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Identify Bernoulli\'s equation of the form $\\frac{dy}{dx} + P(x) y = Q(x) y^n$ with $n = 2$:\nDivide throughout by $y^2$:\n$y^{-2} \\frac{dy}{dx} + \\frac{1}{x} y^{-1} = x$.\n\nStep 2: Substitute $z = y^{-1}$:\n$\\frac{dz}{dx} = -y^{-2} \\frac{dy}{dx} \\implies y^{-2} \\frac{dy}{dx} = -\\frac{dz}{dx}$.\nSubstituting gives:\n$-\\frac{dz}{dx} + \\frac{1}{x} z = x \\implies \\frac{dz}{dx} - \\frac{1}{x} z = -x$.\n\nStep 3: Solve the linear differential equation in $z$:\n$\\text{IF} = e^{\\int -\\frac{1}{x} dx} = e^{-\\ln x} = \\frac{1}{x}$.\n$z \\cdot \\frac{1}{x} = \\int (-x) \\cdot \\frac{1}{x} dx = \\int -1 dx = -x + C$\n$z = -x^2 + C x \\implies \\frac{1}{y} = C x - x^2$.\n\nStep 4: Use initial condition $y(1) = 1$:\n$\\frac{1}{1} = C(1) - 1^2 \\implies 1 = C - 1 \\implies C = 2$.\nThus $\\frac{1}{y} = 2x - x^2 \\implies y(x) = \\frac{1}{2x - x^2}$.\n\nStep 5: Evaluate $y(1/2)$:\n$y\\left(\\frac{1}{2}\\right) = \\frac{1}{2(1/2) - (1/2)^2} = \\frac{1}{1 - 1/4} = \\frac{1}{3/4} = \\frac{4}{3}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Check the sign when substituting dz/dx = -y^-2 dy/dx; forgetting the minus sign changes the integrating factor.',
    shortcut: 'Bernoulli reduction to linear: IF = 1/x, z = -x^2 + 2x = 1/y. At x = 1/2, 1/y = 1 - 1/4 = 3/4 => y = 4/3.'
  }
];
