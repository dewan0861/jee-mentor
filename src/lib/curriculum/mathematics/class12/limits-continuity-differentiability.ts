import { Chapter } from '@/types';

export const limitsContinuityDifferentiabilityChapter: Chapter = {
  id: 'math-c12-limits-continuity-differentiability',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Limits, Continuity & Differentiability',
  unit: 'Calculus',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1, \\quad \\lim_{x\\to 0} \\frac{\\tan x}{x} = 1, \\quad \\lim_{x\\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}',
    '\\lim_{x\\to 0} \\frac{e^x - 1}{x} = 1, \\quad \\lim_{x\\to 0} \\frac{a^x - 1}{x} = \\ln a, \\quad \\lim_{x\\to 0} \\frac{\\ln(1 + x)}{x} = 1',
    '\\text{Form } 1^\\infty: \\lim_{x\\to a} (f(x))^{g(x)} = e^{\\lim_{x\\to a} g(x)(f(x) - 1)}',
    '\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\dots, \\quad \\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\dots',
    'e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots, \\quad \\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots',
    '\\text{Continuity at } x = c: \\lim_{x\\to c^-} f(x) = \\lim_{x\\to c^+} f(x) = f(c)',
    '\\text{Differentiability at } x = c: L f\'(c) = R f\'(c) \\implies \\lim_{h\\to 0^+} \\frac{f(c) - f(c - h)}{h} = \\lim_{h\\to 0^+} \\frac{f(c + h) - f(c)}{h}',
    '\\text{Differentiability } \\implies \\text{Continuity, but Continuity } \\not\\implies \\text{Differentiability}'
  ],
  topics: [
    {
      id: 'math-lcd-1-indeterminate-forms-expansions',
      name: '12.5.1 Indeterminate Forms (0/0, inf/inf, 1^inf) & Series Expansions',
      description: 'L\'Hospital rule, standard trigonometric and exponential limits, 1^infinity short evaluation, Taylor/Maclaurin series expansions to cancel dominant powers.',
      estimatedHours: 8,
      isHighWeightage: true
    },
    {
      id: 'math-lcd-2-continuity-piecewise',
      name: '12.5.2 Continuity of Functions & Intermediate Value Theorem',
      description: 'Piecewise functions, greatest integer [x], fractional part {x}, signum, removable and non-removable discontinuities, Intermediate Value Theorem (IVT).',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-lcd-3-differentiability-corner-points',
      name: '12.5.3 Differentiability, Corner Points & Absolute Value Functions',
      description: 'Left-hand derivative (LHD) vs Right-hand derivative (RHD), non-differentiable points of |f(x)|, cusp and corner analysis.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Limits, Continuity & Differentiability constitutes 2-3 questions per paper and lays the bedrock for all of Differential and Integral Calculus.',
    ncertPointers: [
      'For 1^infinity forms, immediately rewrite as e^[lim g(x) * (f(x) - 1)].',
      'A continuous function on [a, b] attains every value between f(a) and f(b) (Intermediate Value Theorem).',
      '|x - a| is continuous everywhere on R, but non-differentiable strictly at x = a (sharp corner).'
    ],
    commonTraps: [
      'Applying L\'Hospital\'s rule blindly when the form is NOT 0/0 or infinity/infinity.',
      'Differentiating piecewise functions term-by-term at boundary points without checking continuity first!'
    ],
    shortcutsVsConcepts: [
      'Series expansion shortcut: Whenever x -> 0 and expressions contain combinations of sin(x), tan(x), ln(1+x), e^x, replace with their first 2 non-zero terms instead of taking 3 successive derivatives with L\'Hospital!',
      'Differentiability of |f(x)|: At roots where f(a) = 0, if f\'(a) != 0, then |f(x)| is NOT differentiable at x = a. If f\'(a) = 0, then |f(x)| IS differentiable at x = a!'
    ]
  },
  ncertPointers: [
    'For 1^infinity forms, immediately rewrite as e^[lim g(x) * (f(x) - 1)].',
    'A continuous function on [a, b] attains every value between f(a) and f(b) (Intermediate Value Theorem).',
    '|x - a| is continuous everywhere on R, but non-differentiable strictly at x = a (sharp corner).'
  ],
  commonTraps: [
    'Applying L\'Hospital\'s rule blindly when the form is NOT 0/0 or infinity/infinity.',
    'Differentiating piecewise functions term-by-term at boundary points without checking continuity first!'
  ],
  shortcutsVsConcepts: [
    'Series expansion shortcut: Whenever x -> 0 and expressions contain combinations of sin(x), tan(x), ln(1+x), e^x, replace with their first 2 non-zero terms instead of taking 3 successive derivatives with L\'Hospital!',
    'Differentiability of |f(x)|: At roots where f(a) = 0, if f\'(a) != 0, then |f(x)| is NOT differentiable at x = a. If f\'(a) = 0, then |f(x)| IS differentiable at x = a!'
  ]
};
