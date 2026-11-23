import { Chapter } from '@/types';

export const definiteIntegralsChapter: Chapter = {
  id: 'math-c12-definite-integrals',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Definite Integrals & Properties',
  unit: 'Calculus',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx \\quad (\\text{King\'s Property})',
    '\\int_0^{2a} f(x) dx = 2\\int_0^a f(x) dx \\; [f(2a-x)=f(x)], \\quad 0 \\; [f(2a-x)=-f(x)] \\quad (\\text{Queen\'s Property})',
    '\\int_{-a}^a f(x) dx = 2\\int_0^a f(x) dx \\; (\\text{even } f(-x)=f(x)), \\quad 0 \\; (\\text{odd } f(-x)=-f(x))',
    '\\int_0^{nT} f(x) dx = n \\int_0^T f(x) dx \\quad (\\text{where } f(x + T) = f(x))',
    '\\int_a^{a + nT} f(x) dx = n \\int_0^T f(x) dx, \\quad \\int_{a + nT}^{b + nT} f(x) dx = \\int_a^b f(x) dx',
    '\\frac{d}{dx}\\left(\\int_{u(x)}^{v(x)} f(t) dt\\right) = f(v(x)) v\'(x) - f(u(x)) u\'(x) \\quad (\\text{Leibniz Differentiation Rule})',
    '\\lim_{n\\to\\infty} \\sum_{r=1}^{kn} \\frac{1}{n} f\\left(\\frac{r}{n}\\right) = \\int_0^k f(x) dx \\quad (\\text{Definite Integral as Limit of a Sum})',
    '\\int_0^{\\pi/2} \\ln(\\sin x) dx = \\int_0^{\\pi/2} \\ln(\\cos x) dx = -\\frac{\\pi}{2}\\ln 2'
  ],
  topics: [
    {
      id: 'math-def-1-king-queen-properties',
      name: '12.9.1 King & Queen Properties, Symmetry & Trigonometric Integrals',
      description: 'Applying f(a + b - x), eliminating x factors (int x f(sin x) dx), standard logs of trig functions, symmetrical cancellations.',
      estimatedHours: 8,
      isHighWeightage: true
    },
    {
      id: 'math-def-2-leibniz-indeterminate-limits',
      name: '12.9.2 Leibniz Rule (Differentiating Under the Integral Sign)',
      description: 'Variable limits in integrals, applying L\'Hospital rule to limits containing definite integrals, finding unknown functions from integral equations.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-def-3-riemann-periodic-piecewise',
      name: '12.9.3 Limit of Riemann Sums, Periodic Functions & Greatest Integer Integrals',
      description: 'Expressing series limits as definite integrals, periodic function properties, breaking intervals for greatest integer [x], {x}, and |f(x)|.',
      estimatedHours: 8,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Definite Integrals is one of the top 3 highest-weightage topics in JEE Mathematics. Expect at least 2 questions in every JEE Main session, typically testing the King property, Leibniz rule, or Riemann sums.',
    ncertPointers: [
      'If f(a + b - x) + f(x) = c (constant), then int_a^b f(x) dx = c * (b - a) / 2.',
      'In Riemann sums: 1/n -> dx, r/n -> x, sum -> integral.',
      'Leibniz rule requires differentiating the upper limit, substituting into the integrand, minus differentiating the lower limit and substituting.'
    ],
    commonTraps: [
      'Forgetting that Leibniz rule multiplies by the derivatives v\'(x) and u\'(x)!',
      'For periodic functions, forgetting that period must strictly divide the interval length before pulling n out.'
    ],
    shortcutsVsConcepts: [
      'Symmetric King shortcut: int_a^b [f(x) / (f(x) + f(a + b - x))] dx = (b - a) / 2 immediately, without writing out the 2I addition!',
      'Riemann sum shortcut: lim 1/n sum (r/n)^p from r=1 to n is simply int_0^1 x^p dx = 1 / (p + 1).'
    ]
  },
  ncertPointers: [
    'If f(a + b - x) + f(x) = c (constant), then int_a^b f(x) dx = c * (b - a) / 2.',
    'In Riemann sums: 1/n -> dx, r/n -> x, sum -> integral.',
    'Leibniz rule requires differentiating the upper limit, substituting into the integrand, minus differentiating the lower limit and substituting.'
  ],
  commonTraps: [
    'Forgetting that Leibniz rule multiplies by the derivatives v\'(x) and u\'(x)!',
    'For periodic functions, forgetting that period must strictly divide the interval length before pulling n out.'
  ],
  shortcutsVsConcepts: [
    'Symmetric King shortcut: int_a^b [f(x) / (f(x) + f(a + b - x))] dx = (b - a) / 2 immediately, without writing out the 2I addition!',
    'Riemann sum shortcut: lim 1/n sum (r/n)^p from r=1 to n is simply int_0^1 x^p dx = 1 / (p + 1).'
  ]
};
