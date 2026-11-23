import { Question } from '@/types';

export const indefiniteIntegrationQuestions: Question[] = [
  {
    id: 'pyq-math-indef-001',
    subject: 'mathematics',
    chapterId: 'math-c12-indefinite-integration',
    topicId: 'math-indef-2-parts-exponential-tricks',
    text: 'The integral $\\int e^x \\left( \\frac{1 - \\sin x}{1 - \\cos x} \\right) dx$ is equal to (where $C$ is a constant of integration):',
    options: [
      '$-e^x \\cot\\left(\\frac{x}{2}\\right) + C$',
      '$e^x \\cot\\left(\\frac{x}{2}\\right) + C$',
      '$-e^x \\tan\\left(\\frac{x}{2}\\right) + C$',
      '$e^x \\csc^2\\left(\\frac{x}{2}\\right) + C$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Simplify the integrand using half-angle formulas:\n$1 - \\cos x = 2\\sin^2\\left(\\frac{x}{2}\\right)$\n$\\sin x = 2\\sin\\left(\\frac{x}{2}\\right)\\cos\\left(\\frac{x}{2}\\right)$.\n\nStep 2: Rewrite the expression inside the brackets:\n$\\frac{1 - \\sin x}{1 - \\cos x} = \\frac{1 - 2\\sin(x/2)\\cos(x/2)}{2\\sin^2(x/2)} = \\frac{1}{2}\\csc^2\\left(\\frac{x}{2}\\right) - \\cot\\left(\\frac{x}{2}\\right)$.\n\nStep 3: Recognize the standard form $\\int e^x [f(x) + f\'(x)] dx = e^x f(x) + C$:\nLet $f(x) = -\\cot\\left(\\frac{x}{2}\\right)$.\nThen $f\'(x) = -\\left(-\\csc^2\\left(\\frac{x}{2}\\right) \\cdot \\frac{1}{2}\\right) = \\frac{1}{2}\\csc^2\\left(\\frac{x}{2}\\right)$.\n\nStep 4: Integrate directly:\n$\\int e^x \\left[ -\\cot\\left(\\frac{x}{2}\\right) + \\frac{1}{2}\\csc^2\\left(\\frac{x}{2}\\right) \\right] dx = e^x f(x) + C = -e^x \\cot\\left(\\frac{x}{2}\\right) + C$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Check negative signs carefully: the derivative of -cot(x/2) is +(1/2) csc^2(x/2), so f(x) is -cot(x/2), not +cot(x/2).',
    shortcut: 'Express in terms of x/2: (1 - sin x)/(1 - cos x) = 1/2 csc^2(x/2) - cot(x/2). This is exactly d/dx[-cot(x/2)] - cot(x/2). Answer: -e^x cot(x/2) + C.'
  },
  {
    id: 'pyq-math-indef-002',
    subject: 'mathematics',
    chapterId: 'math-c12-indefinite-integration',
    topicId: 'math-indef-3-partial-fractions-symmetric-quartic',
    text: 'The integral $\\int \\frac{x^2 - 1}{x^4 + 3x^2 + 1} dx$ is equal to:',
    options: [
      '$\\tan^{-1}\\left( \\frac{x^2 + 1}{x} \\right) + C$',
      '$\\tan^{-1}\\left( \\frac{x^2 - 1}{x} \\right) + C$',
      '$\\frac{1}{2}\\ln\\left| \\frac{x^2 - x + 1}{x^2 + x + 1} \\right| + C$',
      '$\\tan^{-1}\\left( x + \\frac{1}{x} \\right)^2 + C$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Divide both numerator and denominator by $x^2$:\n$\\int \\frac{x^2 - 1}{x^4 + 3x^2 + 1} dx = \\int \\frac{1 - \\frac{1}{x^2}}{x^2 + 3 + \\frac{1}{x^2}} dx$.\n\nStep 2: Express the denominator in terms of $\\left(x + \\frac{1}{x}\\right)$:\nNotice that $\\frac{d}{dx}\\left(x + \\frac{1}{x}\\right) = 1 - \\frac{1}{x^2}$, which matches the numerator!\nNow express $x^2 + \\frac{1}{x^2} = \\left(x + \\frac{1}{x}\\right)^2 - 2$.\nDenominator $= \\left(x + \\frac{1}{x}\\right)^2 - 2 + 3 = \\left(x + \\frac{1}{x}\\right)^2 + 1$.\n\nStep 3: Substitute $t = x + \\frac{1}{x}$, so $dt = \\left(1 - \\frac{1}{x^2}\\right) dx$:\n$\\int \\frac{dt}{t^2 + 1} = \\tan^{-1}(t) + C$.\n\nStep 4: Substitute back $t = x + \\frac{1}{x} = \\frac{x^2 + 1}{x}$:\n$= \\tan^{-1}\\left(\\frac{x^2 + 1}{x}\\right) + C$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    trap: 'When numerator has (x^2 - 1), substitute t = x + 1/x (since dt = (1 - 1/x^2) dx). When numerator has (x^2 + 1), substitute t = x - 1/x.',
    shortcut: 'Dividing by x^2 yields dt / (t^2 + 1) with t = x + 1/x = (x^2 + 1)/x. Integral = arctan((x^2 + 1)/x) + C.'
  },
  {
    id: 'pyq-math-indef-003',
    subject: 'mathematics',
    chapterId: 'math-c12-indefinite-integration',
    topicId: 'math-indef-1-substitution-standard-forms',
    text: 'The integral $\\int \\frac{dx}{x^2(x^4 + 1)^{3/4}}$ is equal to:',
    options: [
      '$-\\frac{(x^4 + 1)^{1/4}}{x} + C$',
      '$\\frac{(x^4 + 1)^{1/4}}{x} + C$',
      '$-\\frac{(x^4 + 1)^{3/4}}{x} + C$',
      '$-\\frac{1}{x(x^4 + 1)^{1/4}} + C$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Factor out the highest power $x^4$ from $(x^4 + 1)^{3/4}$:\n$(x^4 + 1)^{3/4} = [x^4(1 + x^{-4})]^{3/4} = (x^4)^{3/4} (1 + x^{-4})^{3/4} = x^3 (1 + x^{-4})^{3/4}$.\n\nStep 2: Combine powers of $x$ in the denominator:\n$x^2 \\cdot x^3 (1 + x^{-4})^{3/4} = x^5 (1 + x^{-4})^{3/4}$.\nSo the integral becomes:\n$I = \\int \\frac{x^{-5} dx}{(1 + x^{-4})^{3/4}} = \\int x^{-5} (1 + x^{-4})^{-3/4} dx$.\n\nStep 3: Substitute $t = 1 + x^{-4}$:\n$dt = -4 x^{-5} dx \\implies x^{-5} dx = -\\frac{dt}{4}$.\n\nStep 4: Integrate in terms of $t$:\n$I = -\\frac{1}{4} \\int t^{-3/4} dt = -\\frac{1}{4} \\left( \\frac{t^{1/4}}{1/4} \\right) + C = -t^{1/4} + C$.\n\nStep 5: Substitute back $t = 1 + x^{-4} = \\frac{x^4 + 1}{x^4}$:\n$I = -\\left( \\frac{x^4 + 1}{x^4} \\right)^{1/4} + C = -\\frac{(x^4 + 1)^{1/4}}{x} + C$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Do not use trigonometric substitution x = tan theta or x^2 = tan theta; factoring out x^4 to create 1 + x^(-4) is the canonical JEE method for expressions of form x^m (a + b x^n)^p.',
    shortcut: 'Factor out x^4 => x^5 outside => substitute t = 1 + x^(-4). dt = -4 x^(-5) dx. Integral of t^(-3/4) is 4 t^(1/4). Coefficient (-1/4)*4 = -1. Result: - (1 + x^(-4))^(1/4) = -(x^4 + 1)^(1/4) / x.'
  },
  {
    id: 'pyq-math-indef-004',
    subject: 'mathematics',
    chapterId: 'math-c12-indefinite-integration',
    topicId: 'math-indef-2-parts-exponential-tricks',
    text: 'The integral $\\int \\frac{e^x(x - 3)}{(x - 1)^3} dx$ is equal to:',
    options: [
      '$\\frac{e^x}{(x - 1)^2} + C$',
      '$\\frac{e^x}{(x - 1)^3} + C$',
      '$-\\frac{e^x}{(x - 1)^2} + C$',
      '$\\frac{e^x(x - 2)}{(x - 1)^2} + C$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Express the algebraic part $\\frac{x - 3}{(x - 1)^3}$ in terms of $(x - 1)$:\n$x - 3 = (x - 1) - 2$.\n$\\frac{x - 3}{(x - 1)^3} = \\frac{(x - 1) - 2}{(x - 1)^3} = \\frac{1}{(x - 1)^2} - \\frac{2}{(x - 1)^3}$.\n\nStep 2: Check the derivative of the first term:\nLet $f(x) = \\frac{1}{(x - 1)^2} = (x - 1)^{-2}$.\nThen $f\'(x) = -2(x - 1)^{-3} = -\\frac{2}{(x - 1)^3}$.\n\nStep 3: This matches the exact form $\\int e^x [f(x) + f\'(x)] dx = e^x f(x) + C$:\n$\\int e^x \\left[ \\frac{1}{(x - 1)^2} - \\frac{2}{(x - 1)^3} \\right] dx = e^x f(x) + C = \\frac{e^x}{(x - 1)^2} + C$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Check signs when breaking into partial fractions: (x - 3) = (x - 1) - 2, giving +f(x) and +f\'(x) with f(x) = 1/(x - 1)^2.',
    shortcut: 'x - 3 = (x - 1) - 2 => 1/(x-1)^2 - 2/(x-1)^3 = f + f\'. Answer: e^x / (x - 1)^2 + C.'
  },
  {
    id: 'pyq-math-indef-005',
    subject: 'mathematics',
    chapterId: 'math-c12-indefinite-integration',
    topicId: 'math-indef-1-substitution-standard-forms',
    text: 'The integral $\\int \\frac{\\sin 2x}{\\sin^4 x + \\cos^4 x} dx$ is equal to:',
    options: [
      '$\\tan^{-1}(\\tan^2 x) + C$',
      '$\\tan^{-1}(\\sin^2 x) + C$',
      '$\\frac{1}{2}\\tan^{-1}(\\tan^2 x) + C$',
      '$\\ln(\\sin^4 x + \\cos^4 x) + C$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Write $\\sin 2x = 2\\sin x \\cos x$:\n$I = \\int \\frac{2\\sin x \\cos x}{\\sin^4 x + \\cos^4 x} dx$.\n\nStep 2: Divide both numerator and denominator by $\\cos^4 x$:\nNumerator: $\\frac{2\\sin x \\cos x}{\\cos^4 x} = 2\\left(\\frac{\\sin x}{\\cos x}\\right)\\left(\\frac{1}{\\cos^2 x}\\right) = 2\\tan x \\sec^2 x$.\nDenominator: $\\frac{\\sin^4 x + \\cos^4 x}{\\cos^4 x} = \\tan^4 x + 1$.\n\nStep 3: Substitute $t = \\tan^2 x$:\nThen $dt = 2\\tan x \\cdot \\sec^2 x dx$.\n\nStep 4: Integrate with respect to $t$:\n$I = \\int \\frac{dt}{t^2 + 1} = \\tan^{-1}(t) + C = \\tan^{-1}(\\tan^2 x) + C$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Alternative method: rewrite denominator as 1 - 2 sin^2 x cos^2 x = 1 - 1/2 sin^2(2x). Then substitute cos(2x) or sin^2(x). Both give identical forms up to an additive constant.',
    shortcut: 'Dividing numerator and denominator by cos^4(x) yields 2 tan x sec^2 x / (tan^4 x + 1). With t = tan^2 x, it is simply dt / (t^2 + 1) = arctan(t) = arctan(tan^2 x) + C.'
  },
  {
    id: 'pyq-math-indef-006',
    subject: 'mathematics',
    chapterId: 'math-c12-indefinite-integration',
    topicId: 'math-indef-3-partial-fractions-symmetric-quartic',
    text: 'If $\\int \\frac{2x - 1}{(x - 1)(x + 2)(x - 3)} dx = A \\ln|x - 1| + B \\ln|x + 2| + C \\ln|x - 3| + D$, then the value of $A + B + C$ is equal to:',
    options: [
      '$0$',
      '$1$',
      '$-\\frac{1}{2}$',
      '$\\frac{2}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Use the Heaviside cover-up method to find partial fraction coefficients $A, B, C$:\n$\\frac{2x - 1}{(x - 1)(x + 2)(x - 3)} = \\frac{A}{x - 1} + \\frac{B}{x + 2} + \\frac{C}{x - 3}$.\n\nStep 2: Find $A$ by multiplying by $(x - 1)$ and setting $x = 1$:\n$A = \\frac{2(1) - 1}{(1 + 2)(1 - 3)} = \\frac{1}{(3)(-2)} = -\\frac{1}{6}$.\n\nStep 3: Find $B$ by multiplying by $(x + 2)$ and setting $x = -2$:\n$B = \\frac{2(-2) - 1}{(-2 - 1)(-2 - 3)} = \\frac{-5}{(-3)(-5)} = -\\frac{5}{15} = -\\frac{1}{3}$.\n\nStep 4: Find $C$ by multiplying by $(x - 3)$ and setting $x = 3$:\n$C = \\frac{2(3) - 1}{(3 - 1)(3 + 2)} = \\frac{5}{(2)(5)} = \\frac{1}{2}$.\n\nStep 5: Compute the sum $A + B + C$:\n$A + B + C = -\\frac{1}{6} - \\frac{1}{3} + \\frac{1}{2} = -\\frac{1 + 2}{6} + \\frac{1}{2} = -\\frac{3}{6} + \\frac{1}{2} = -\\frac{1}{2} + \\frac{1}{2} = 0$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Do not multiply out a system of 3 linear equations to find A, B, C; the cover-up method computes each coefficient in one arithmetic line.',
    shortcut: 'General principle: For any rational function P(x)/Q(x) where deg(P) <= deg(Q) - 2, the sum of residues A + B + C + ... is identically 0! Here deg(P)=1, deg(Q)=3, so 1 <= 3 - 2 holds => sum is immediately 0!'
  }
];
