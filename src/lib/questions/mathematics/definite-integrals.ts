import { Question } from '@/types';

export const definiteIntegralsQuestions: Question[] = [
  {
    id: 'pyq-math-def-001',
    subject: 'mathematics',
    chapterId: 'math-c12-definite-integrals',
    topicId: 'math-def-1-king-queen-properties',
    text: 'The value of the definite integral $\\int_{\\pi/6}^{\\pi/3} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$ is equal to:',
    options: [
      '$\\frac{\\pi}{12}$',
      '$\\frac{\\pi}{6}$',
      '$\\frac{\\pi}{4}$',
      '$\\frac{\\pi}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Let $I = \\int_{\\pi/6}^{\\pi/3} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$ ...(i)\n\nStep 2: Apply King\'s Property $\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx$:\nHere $a + b = \\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}$.\nReplace $x$ with $\\frac{\\pi}{2} - x$:\n$\\sin\\left(\\frac{\\pi}{2} - x\\right) = \\cos x$ and $\\cos\\left(\\frac{\\pi}{2} - x\\right) = \\sin x$.\n$I = \\int_{\\pi/6}^{\\pi/3} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x} + \\sqrt{\\sin x}} dx$ ...(ii)\n\nStep 3: Add equations (i) and (ii):\n$2I = \\int_{\\pi/6}^{\\pi/3} \\frac{\\sqrt{\\sin x} + \\sqrt{\\cos x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx = \\int_{\\pi/6}^{\\pi/3} 1 dx$.\n\nStep 4: Evaluate the simple integral:\n$2I = [x]_{\\pi/6}^{\\pi/3} = \\frac{\\pi}{3} - \\frac{\\pi}{6} = \\frac{\\pi}{6}$.\n$I = \\frac{\\pi}{12}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Do not forget that adding (i) and (ii) gives 2I, so the final step must divide by 2.',
    shortcut: 'For any integral of the form int_a^b [f(x) / (f(x) + f(a + b - x))] dx, the answer is always (b - a)/2. Here (pi/3 - pi/6)/2 = (pi/6)/2 = pi/12.'
  },
  {
    id: 'pyq-math-def-002',
    subject: 'mathematics',
    chapterId: 'math-c12-definite-integrals',
    topicId: 'math-def-2-leibniz-indeterminate-limits',
    text: 'The value of $\\lim_{x \\to 0} \\frac{\\int_0^{x^2} \\sin\\sqrt{t} \\, dt}{x^3}$ is equal to:',
    options: [
      '$\\frac{2}{3}$',
      '$\\frac{1}{3}$',
      '$1$',
      '$\\frac{4}{3}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Check the form of the limit as $x \\to 0$:\nAs $x \\to 0$, the integral $\\int_0^0 \\sin\\sqrt{t} \\, dt = 0$, and denominator $x^3 = 0$.\nThis is an indeterminate form of type $\\frac{0}{0}$.\n\nStep 2: Apply L\'Hospital\'s Rule and differentiate the numerator using the Leibniz Differentiation Rule:\n$\\frac{d}{dx}\\left( \\int_0^{x^2} \\sin\\sqrt{t} \\, dt \\right) = \\sin\\left(\\sqrt{x^2}\\right) \\cdot \\frac{d}{dx}(x^2) - \\sin(\\sqrt{0}) \\cdot \\frac{d}{dx}(0) = \\sin(x) \\cdot 2x$.\n\nStep 3: Differentiate the denominator:\n$\\frac{d}{dx}(x^3) = 3x^2$.\n\nStep 4: Evaluate the limit of the quotient:\n$\\lim_{x \\to 0} \\frac{2x \\sin x}{3x^2} = \\frac{2}{3} \\lim_{x \\to 0} \\frac{\\sin x}{x} = \\frac{2}{3} \\cdot 1 = \\frac{2}{3}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Forgetting to multiply by the derivative of the upper limit d/dx(x^2) = 2x in the Leibniz formula is a common error.',
    shortcut: 'Near 0, sin(sqrt(t)) ~ sqrt(t). Integral of sqrt(t) from 0 to x^2 is [2/3 t^(3/2)]_0^(x^2) = 2/3 (x^2)^(3/2) = 2/3 x^3. Dividing by x^3 gives 2/3.'
  },
  {
    id: 'pyq-math-def-003',
    subject: 'mathematics',
    chapterId: 'math-c12-definite-integrals',
    topicId: 'math-def-3-riemann-periodic-piecewise',
    text: 'The value of $\\lim_{n \\to \\infty} \\sum_{r=1}^n \\frac{n}{n^2 + r^2}$ is equal to:',
    options: [
      '$\\frac{\\pi}{4}$',
      '$\\frac{\\pi}{2}$',
      '$\\ln 2$',
      '$1$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Factor out $n^2$ from the denominator to obtain the standard Riemann sum form:\n$\\frac{n}{n^2 + r^2} = \\frac{n}{n^2\\left(1 + \\frac{r^2}{n^2}\\right)} = \\frac{1}{n} \\cdot \\frac{1}{1 + \\left(\\frac{r}{n}\\right)^2}$.\n\nStep 2: Express the limit of the sum as a definite integral:\n$\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\frac{1}{1 + (r/n)^2}$.\nConvert using standard replacements:\n$\\frac{r}{n} \\to x, \\quad \\frac{1}{n} \\to dx, \\quad \\sum_{r=1}^n \\to \\int_0^1$.\n\nStep 3: Evaluate the definite integral:\n$\\int_0^1 \\frac{1}{1 + x^2} dx = [\\tan^{-1} x]_0^1 = \\tan^{-1}(1) - \\tan^{-1}(0) = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Ensure you replace 1/n with dx and r/n with x. Lower limit is lim r/n as r=1 (0) and upper limit is lim r/n as r=n (1).',
    shortcut: 'Standard Riemann sum: 1/n sum 1/(1 + (r/n)^2) -> int_0^1 dx/(1 + x^2) = arctan(1) = pi/4.'
  },
  {
    id: 'pyq-math-def-004',
    subject: 'mathematics',
    chapterId: 'math-c12-definite-integrals',
    topicId: 'math-def-3-riemann-periodic-piecewise',
    text: 'The value of the definite integral $\\int_0^{100\\pi} |\\sin x| \\, dx$ is equal to:',
    options: [
      '$200$',
      '$100$',
      '$50$',
      '$400$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Identify the periodicity of the integrand $f(x) = |\\sin x|$:\n$|\\sin(x + \\pi)| = |-\\sin x| = |\\sin x|$.\nThus $f(x)$ is periodic with fundamental period $T = \\pi$.\n\nStep 2: Apply the periodic integral property $\\int_0^{nT} f(x) dx = n \\int_0^T f(x) dx$:\nHere $n = 100$ and $T = \\pi$:\n$\\int_0^{100\\pi} |\\sin x| dx = 100 \\int_0^\\pi |\\sin x| dx$.\n\nStep 3: On the interval $[0, \\pi]$, $\\sin x \\ge 0$, so $|\\sin x| = \\sin x$:\n$\\int_0^\\pi \\sin x \\, dx = [-\\cos x]_0^\\pi = -\\cos(\\pi) - (-\\cos 0) = -(-1) - (-1) = 1 + 1 = 2$.\n\nStep 4: Multiply by $n = 100$:\n$\\int_0^{100\\pi} |\\sin x| dx = 100 \\times 2 = 200$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Do not assume the period is 2pi; |sin x| has period pi because the negative half-cycles are reflected upward.',
    shortcut: 'Each half-cycle of |sin x| has area exactly 2. There are 100 half-cycles in [0, 100*pi]. Total area = 100 * 2 = 200.'
  },
  {
    id: 'pyq-math-def-005',
    subject: 'mathematics',
    chapterId: 'math-c12-definite-integrals',
    topicId: 'math-def-3-riemann-periodic-piecewise',
    text: 'The value of $\\int_0^2 [x^2] \\, dx$, where $[\\cdot]$ denotes the greatest integer function, is equal to:',
    options: [
      '$5 - \\sqrt{2} - \\sqrt{3}$',
      '$5 + \\sqrt{2} + \\sqrt{3}$',
      '$4 - \\sqrt{2} - \\sqrt{3}$',
      '$3 - \\sqrt{2}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Identify the points in the interval $[0, 2]$ where $x^2$ is an integer:\n$x^2 = 0 \\implies x = 0$\n$x^2 = 1 \\implies x = 1$\n$x^2 = 2 \\implies x = \\sqrt{2} \\approx 1.414$\n$x^2 = 3 \\implies x = \\sqrt{3} \\approx 1.732$\n$x^2 = 4 \\implies x = 2$.\n\nStep 2: Split the integral at these transition points:\nOn $[0, 1)$, $0 \\le x^2 < 1 \\implies [x^2] = 0$.\nOn $[1, \\sqrt{2})$, $1 \\le x^2 < 2 \\implies [x^2] = 1$.\nOn $[\\sqrt{2}, \\sqrt{3})$, $2 \\le x^2 < 3 \\implies [x^2] = 2$.\nOn $[\\sqrt{3}, 2)$, $3 \\le x^2 < 4 \\implies [x^2] = 3$.\n\nStep 3: Integrate each subinterval:\n$I = \\int_0^1 0 \\, dx + \\int_1^{\\sqrt{2}} 1 \\, dx + \\int_{\\sqrt{2}}^{\\sqrt{3}} 2 \\, dx + \\int_{\\sqrt{3}}^2 3 \\, dx$\n$= 0 + 1(\\sqrt{2} - 1) + 2(\\sqrt{3} - \\sqrt{2}) + 3(2 - \\sqrt{3})$.\n\nStep 4: Combine the terms:\n$I = \\sqrt{2} - 1 + 2\\sqrt{3} - 2\\sqrt{2} + 6 - 3\\sqrt{3}$\n$= (6 - 1) + (\\sqrt{2} - 2\\sqrt{2}) + (2\\sqrt{3} - 3\\sqrt{3})$\n$= 5 - \\sqrt{2} - \\sqrt{3}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Do not split at integer values of x! The greatest integer function acts on x^2, so you must split at x = sqrt(1), sqrt(2), sqrt(3).',
    shortcut: 'Integral of [f(x)] = sum k * Delta x_k = 1*(sqrt(2)-1) + 2*(sqrt(3)-sqrt(2)) + 3*(2-sqrt(3)) = 5 - sqrt(2) - sqrt(3).'
  },
  {
    id: 'pyq-math-def-006',
    subject: 'mathematics',
    chapterId: 'math-c12-definite-integrals',
    topicId: 'math-def-1-king-queen-properties',
    text: 'The value of the definite integral $\\int_0^\\pi \\frac{x \\sin x}{1 + \\cos^2 x} \\, dx$ is equal to:',
    options: [
      '$\\frac{\\pi^2}{4}$',
      '$\\frac{\\pi^2}{2}$',
      '$\\pi^2$',
      '$\\frac{\\pi}{4}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Let $I = \\int_0^\\pi \\frac{x \\sin x}{1 + \\cos^2 x} dx$ ...(i)\n\nStep 2: Apply King\'s property $x \\to \\pi - x$:\n$I = \\int_0^\\pi \\frac{(\\pi - x) \\sin(\\pi - x)}{1 + \\cos^2(\\pi - x)} dx = \\int_0^\\pi \\frac{(\\pi - x) \\sin x}{1 + (-\\cos x)^2} dx$\n$I = \\pi \\int_0^\\pi \\frac{\\sin x}{1 + \\cos^2 x} dx - \\int_0^\\pi \\frac{x \\sin x}{1 + \\cos^2 x} dx$.\n\nStep 3: Substitute (i) into the equation:\n$I = \\pi \\int_0^\\pi \\frac{\\sin x}{1 + \\cos^2 x} dx - I \\implies 2I = \\pi \\int_0^\\pi \\frac{\\sin x}{1 + \\cos^2 x} dx$.\n\nStep 4: Substitute $u = \\cos x$, so $du = -\\sin x dx$:\nWhen $x = 0, u = 1$; when $x = \\pi, u = -1$.\n$2I = \\pi \\int_1^{-1} \\frac{-du}{1 + u^2} = \\pi \\int_{-1}^1 \\frac{du}{1 + u^2} = \\pi [\\tan^{-1} u]_{-1}^1$.\n$2I = \\pi \\left[ \\frac{\\pi}{4} - \\left(-\\frac{\\pi}{4}\\right) \\right] = \\pi \\left( \\frac{\\pi}{2} \\right) = \\frac{\\pi^2}{2}$.\n\nStep 5: Divide by 2:\n$I = \\frac{\\pi^2}{4}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    trap: 'The factor pi comes from (pi - x) in King\'s property, eliminating the linear x term from the numerator.',
    shortcut: 'By x-removal rule: int_0^pi x f(sin x) dx = (pi / 2) int_0^pi f(sin x) dx. Here (pi / 2) * [arctan(cos x)]_pi^0 = (pi/2) * (pi/2) = pi^2 / 4.'
  }
];
