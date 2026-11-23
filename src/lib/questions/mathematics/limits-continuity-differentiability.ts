import { Question } from '@/types';

export const limitsContinuityDifferentiabilityQuestions: Question[] = [
  {
    id: 'pyq-math-lcd-001',
    subject: 'mathematics',
    chapterId: 'math-c12-limits-continuity-differentiability',
    topicId: 'math-lcd-1-indeterminate-forms-expansions',
    text: 'The value of the limit $\\lim_{x \\to 0} \\left( \\frac{1 + 5x^2}{1 + 3x^2} \\right)^{1/x^2}$ is equal to:',
    options: [
      '$e^2$',
      '$e$',
      '$e^4$',
      '$e^{-2}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Identify the form of the limit as $x \\to 0$:\n$\\lim_{x \\to 0} \\frac{1 + 5(0)}{1 + 3(0)} = 1$, and the exponent $\\frac{1}{x^2} \\to \\infty$.\nThis is the indeterminate form $1^\\infty$.\n\nStep 2: Apply the standard identity for $1^\\infty$ limits:\n$\\lim_{x \\to a} [f(x)]^{g(x)} = e^{\\lim_{x \\to a} g(x)[f(x) - 1]}$.\n\nStep 3: Evaluate the exponent:\n$\\lim_{x \\to 0} \\frac{1}{x^2} \\left( \\frac{1 + 5x^2}{1 + 3x^2} - 1 \\right)$\n$= \\lim_{x \\to 0} \\frac{1}{x^2} \\left( \\frac{1 + 5x^2 - (1 + 3x^2)}{1 + 3x^2} \\right)$\n$= \\lim_{x \\to 0} \\frac{1}{x^2} \\left( \\frac{2x^2}{1 + 3x^2} \\right)$\n$= \\lim_{x \\to 0} \\frac{2}{1 + 3x^2} = \\frac{2}{1 + 0} = 2$.\n\nStep 4: Exponentiate to obtain the limit:\n$L = e^2$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Do not take logs and differentiate twice using L\'Hospital; the algebraic reduction $[f(x) - 1]*g(x)$ is direct and takes less than 20 seconds.',
    shortcut: 'lim ( (1 + ax^2)/(1 + bx^2) )^(1/x^2) = e^(a - b). Here a = 5, b = 3 => e^(5 - 3) = e^2.'
  },
  {
    id: 'pyq-math-lcd-002',
    subject: 'mathematics',
    chapterId: 'math-c12-limits-continuity-differentiability',
    topicId: 'math-lcd-1-indeterminate-forms-expansions',
    text: 'If $\\lim_{x \\to 0} \\frac{a e^x - b \\cos x + c e^{-x}}{x \\sin x} = 2$, then the value of $a + b + c$ is equal to:',
    options: [
      '$4$',
      '$2$',
      '$0$',
      '$6$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Replace denominator using Taylor series near $x = 0$:\n$\\sin x = x - \\frac{x^3}{6} + \\dots \\implies x \\sin x = x^2 + O(x^4)$.\n\nStep 2: Expand the numerator terms up to degree 2:\n$e^x = 1 + x + \\frac{x^2}{2} + \\dots$\n$\\cos x = 1 - \\frac{x^2}{2} + \\dots$\n$e^{-x} = 1 - x + \\frac{x^2}{2} + \\dots$\n\nNumerator $= a\\left(1 + x + \\frac{x^2}{2}\\right) - b\\left(1 - \\frac{x^2}{2}\\right) + c\\left(1 - x + \\frac{x^2}{2}\\right)$\n$= (a - b + c) + (a - c)x + \\left(\\frac{a + b + c}{2}\\right) x^2$.\n\nStep 3: For the limit to exist as a finite number 2 when denominator is $x^2$:\nCoefficient of $x^0$: $a - b + c = 0$ ...(i)\nCoefficient of $x^1$: $a - c = 0 \\implies a = c$ ...(ii)\n\nStep 4: Equate coefficient of $x^2$ to the limit value:\n$\\frac{a + b + c}{2} = 2 \\implies a + b + c = 4$.\n(Notice that from (i) and (ii): $b = 2a$, so $a + 2a + a = 4a = 4 \\implies a = 1, b = 2, c = 1$).',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Trying to use L\'Hospital\'s rule requires differentiating three times and solving simultaneous equations with mixed trig/exp terms, easily leading to algebra slips. Taylor expansion resolves it instantly.',
    shortcut: 'Comparing degree 2: The limit is directly (a + b + c)/2 = 2 => a + b + c = 4.'
  },
  {
    id: 'pyq-math-lcd-003',
    subject: 'mathematics',
    chapterId: 'math-c12-limits-continuity-differentiability',
    topicId: 'math-lcd-2-continuity-piecewise',
    text: 'Let $f(x) = \\begin{cases} \\frac{\\sin(p+1)x + \\sin x}{x}, & x < 0 \\\\ q, & x = 0 \\\\ \\frac{\\sqrt{x + x^2} - \\sqrt{x}}{x^{3/2}}, & x > 0 \\end{cases}$ is continuous at $x = 0$. Then the ordered pair $(p, q)$ is:',
    options: [
      '$\\left(-\\frac{3}{2}, \\frac{1}{2}\\right)$',
      '$\\left(-\\frac{1}{2}, \\frac{3}{2}\\right)$',
      '$\\left(\\frac{3}{2}, \\frac{1}{2}\\right)$',
      '$\\left(-\\frac{3}{2}, -\\frac{1}{2}\\right)$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Compute Left-Hand Limit (LHL) as $x \\to 0^-$:\n$\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^-} \\left[ \\frac{\\sin(p+1)x}{x} + \\frac{\\sin x}{x} \\right] = (p + 1) + 1 = p + 2$.\n\nStep 2: Compute Right-Hand Limit (RHL) as $x \\to 0^+$:\n$\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} \\frac{\\sqrt{x}(\\sqrt{1 + x} - 1)}{x^{3/2}} = \\lim_{x \\to 0^+} \\frac{\\sqrt{1 + x} - 1}{x}$.\nRationalize the numerator:\n$= \\lim_{x \\to 0^+} \\frac{(1 + x) - 1}{x(\\sqrt{1 + x} + 1)} = \\lim_{x \\to 0^+} \\frac{x}{x(\\sqrt{1 + x} + 1)} = \\frac{1}{\\sqrt{1 + 0} + 1} = \\frac{1}{2}$.\n\nStep 3: Apply the condition for continuity at $x = 0$:\n$\\text{LHL} = \\text{RHL} = f(0) = q$\n$p + 2 = \\frac{1}{2} \\implies p = \\frac{1}{2} - 2 = -\\frac{3}{2}$.\n$q = \\frac{1}{2}$.\n\nThus, $(p, q) = \\left(-\\frac{3}{2}, \\frac{1}{2}\\right)$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Remember to factor out sqrt(x) in the RHL numerator to cancel with x^(3/2) = x * sqrt(x). Do not try to apply L\'Hospital immediately to fractional powers without simplifying.',
    shortcut: 'LHL = (p+1) + 1 = p + 2. RHL = limit (sqrt(1+x)-1)/x = 1/2. Equating: q = 1/2, p = 1/2 - 2 = -3/2.'
  },
  {
    id: 'pyq-math-lcd-004',
    subject: 'mathematics',
    chapterId: 'math-c12-limits-continuity-differentiability',
    topicId: 'math-lcd-3-differentiability-corner-points',
    text: 'Let $f(x) = |x - 1| + |x - 2| + \\cos x$, for $x \\in [0, 4]$. The number of points in $(0, 4)$ where $f(x)$ is not differentiable is:',
    options: [
      '$2$',
      '$1$',
      '$3$',
      '$0$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Analyze each component of the sum $f(x) = g(x) + h(x) + k(x)$ where:\n$g(x) = |x - 1|$, $h(x) = |x - 2|$, and $k(x) = \\cos x$.\n\nStep 2: Check differentiability of $\\cos x$:\n$\\cos x$ is infinitely differentiable everywhere on $\\mathbb{R}$.\n\nStep 3: Check differentiability of $|x - 1|$ and $|x - 2|$:\n$|x - 1|$ has a sharp corner at $x = 1$ with $LHD = -1$ and $RHD = +1$. At all $x \\ne 1$, $|x - 1|$ is differentiable.\nSimilarly, $|x - 2|$ has a sharp corner at $x = 2$ with $LHD = -1$ and $RHD = +1$. At all $x \\ne 2$, $|x - 2|$ is differentiable.\n\nStep 4: At $x = 1$:\n$h(x) = |x - 2| = 2 - x$ is smooth, $k(x) = \\cos x$ is smooth, but $g(x) = |x - 1|$ is non-differentiable.\nHence the sum $f(x)$ is strictly non-differentiable at $x = 1$.\nSimilarly, at $x = 2$, only $h(x)$ is non-differentiable, making $f(x)$ non-differentiable at $x = 2$.\n\nBoth $x = 1$ and $x = 2$ lie within $(0, 4)$. Thus, there are exactly 2 points of non-differentiability.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    trap: 'If two non-differentiable functions are added at the SAME point, their non-differentiability can cancel (e.g., |x| + (-|x|) = 0). But here the corners occur at distinct points x = 1 and x = 2, so no cancellation can occur.',
    shortcut: 'Sum of differentiable function + absolute value functions |x - c_i| with distinct roots c_i has non-differentiable points exactly at each root c_i.'
  },
  {
    id: 'pyq-math-lcd-005',
    subject: 'mathematics',
    chapterId: 'math-c12-limits-continuity-differentiability',
    topicId: 'math-lcd-3-differentiability-corner-points',
    text: 'Let $f(x) = \\begin{cases} x^2 \\sin\\left(\\frac{1}{x}\\right), & x \\ne 0 \\\\ 0, & x = 0 \\end{cases}$. Then at $x = 0$, $f(x)$ is:',
    options: [
      'differentiable with $f\'(0) = 0$, but $f\'(x)$ is discontinuous at $x = 0$',
      'differentiable and $f\'(x)$ is continuous at $x = 0$',
      'continuous, but not differentiable at $x = 0$',
      'neither continuous nor differentiable at $x = 0$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Check differentiability at $x = 0$ from first principles:\n$f\'(0) = \\lim_{h \\to 0} \\frac{f(h) - f(0)}{h} = \\lim_{h \\to 0} \\frac{h^2 \\sin(1/h) - 0}{h} = \\lim_{h \\to 0} h \\sin\\left(\\frac{1}{h}\\right)$.\nSince $-1 \\le \\sin(1/h) \\le 1$, $|h \\sin(1/h)| \\le |h| \\to 0$ as $h \\to 0$.\nBy the Squeeze Theorem, $f\'(0) = 0$. Thus $f$ is differentiable at $x = 0$.\n\nStep 2: Find $f\'(x)$ for $x \\ne 0$ using product and chain rules:\n$f\'(x) = \\frac{d}{dx}\\left[x^2 \\sin\\left(\\frac{1}{x}\\right)\\right] = 2x \\sin\\left(\\frac{1}{x}\\right) + x^2 \\cos\\left(\\frac{1}{x}\\right) \\cdot \\left(-\\frac{1}{x^2}\\right)$\n$= 2x \\sin\\left(\\frac{1}{x}\\right) - \\cos\\left(\\frac{1}{x}\\right)$.\n\nStep 3: Check continuity of $f\'(x)$ as $x \\to 0$:\n$\\lim_{x \\to 0} f\'(x) = \\lim_{x \\to 0} \\left[ 2x \\sin\\left(\\frac{1}{x}\\right) - \\cos\\left(\\frac{1}{x}\\right) \\right]$.\nHere $2x \\sin(1/x) \\to 0$, but $\\cos(1/x)$ oscillates between $-1$ and $1$ as $x \\to 0$, so $\\lim_{x \\to 0} f\'(x)$ does not exist.\n\nSince $\\lim_{x \\to 0} f\'(x) \\ne f\'(0)$, the derivative $f\'(x)$ is discontinuous at $x = 0$.',
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    trap: 'Do not compute f\'(x) by formulas and take limit as x -> 0 to determine f\'(0)! You MUST use the first-principles definition of derivative at x = 0.',
    shortcut: 'x^k sin(1/x) is: continuous for k > 0, differentiable for k > 1, continuously differentiable for k > 2. Here k = 2, so differentiable, but derivative discontinuous.'
  },
  {
    id: 'pyq-math-lcd-006',
    subject: 'mathematics',
    chapterId: 'math-c12-limits-continuity-differentiability',
    topicId: 'math-lcd-1-indeterminate-forms-expansions',
    text: 'The value of $\\lim_{x \\to 0} \\frac{x \\cot(4x)}{\\sin^2 x \\cot^2(2x)}$ is equal to:',
    options: [
      '$1$',
      '$4$',
      '$\\frac{1}{4}$',
      '$2$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Rewrite $\\cot$ terms in terms of $\\tan$:\n$\\cot(4x) = \\frac{1}{\\tan(4x)}$ and $\\cot^2(2x) = \\frac{1}{\\tan^2(2x)}$.\n\nStep 2: Substitute into the limit expression:\n$L = \\lim_{x \\to 0} \\frac{x \\cdot \\frac{1}{\\tan(4x)}}{\\sin^2 x \\cdot \\frac{1}{\\tan^2(2x)}} = \\lim_{x \\to 0} \\left( \\frac{x}{\\tan(4x)} \\right) \\cdot \\left( \\frac{\\tan^2(2x)}{\\sin^2 x} \\right)$.\n\nStep 3: Normalize using standard limits $\\lim_{u \\to 0} \\frac{\\tan u}{u} = 1$ and $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$:\n$\\frac{x}{\\tan(4x)} = \\frac{1}{4} \\cdot \\frac{4x}{\\tan(4x)} \\to \\frac{1}{4} \\cdot 1 = \\frac{1}{4}$.\n\n$\\frac{\\tan^2(2x)}{\\sin^2 x} = \\left( \\frac{\\tan(2x)}{2x} \\right)^2 \\cdot \\left( \\frac{x}{\\sin x} \\right)^2 \\cdot \\frac{(2x)^2}{x^2} \\to (1)^2 \\cdot (1)^2 \\cdot 4 = 4$.\n\nStep 4: Multiply the evaluated factors:\n$L = \\frac{1}{4} \\times 4 = 1$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Do not convert into sin and cos and multiply out all double-angle expansions. Using tan standard limits directly groups terms into neat ratios.',
    shortcut: 'lim x * (1/4x) * (2x)^2 / (x^2) = (1/4) * 4 = 1.'
  }
];
