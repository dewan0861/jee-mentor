import { Chapter } from '@/types';

export const statisticsChapter: Chapter = {
  id: 'math-c11-statistics',
  subject: 'mathematics',
  classLevel: 11,
  name: 'Statistics (Measures of Central Tendency & Dispersion)',
  unit: 'Statistics & Probability',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\bar{x} = \\frac{\\sum x_i}{n} = \\frac{\\sum f_i x_i}{\\sum f_i}',
    '\\text{Mean Deviation about Mean}: \\text{MD}(\\bar{x}) = \\frac{\\sum |x_i - \\bar{x}|}{n} = \\frac{\\sum f_i |x_i - \\bar{x}|}{\\sum f_i}',
    '\\text{Variance } \\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n} = \\frac{\\sum x_i^2}{n} - (\\bar{x})^2',
    '\\text{Standard Deviation } \\sigma = \\sqrt{\\sigma^2} = \\sqrt{\\frac{\\sum x_i^2}{n} - (\\bar{x})^2}',
    '\\text{Shift of Origin } (y_i = x_i + a): \\bar{y} = \\bar{x} + a, \\quad \\sigma_y^2 = \\sigma_x^2 \\quad (\\text{Variance is invariant})',
    '\\text{Change of Scale } (y_i = c x_i): \\bar{y} = c \\bar{x}, \\quad \\sigma_y^2 = c^2 \\sigma_x^2, \\quad \\sigma_y = |c| \\sigma_x',
    '\\text{Combined Mean}: \\bar{x}_{12} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}',
    '\\text{Combined Variance}: \\sigma_{12}^2 = \\frac{n_1(\\sigma_1^2 + d_1^2) + n_2(\\sigma_2^2 + d_2^2)}{n_1 + n_2} \\quad (d_1 = \\bar{x}_1 - \\bar{x}_{12}, \\; d_2 = \\bar{x}_2 - \\bar{x}_{12})',
    '\\text{Coefficient of Variation}: CV = \\frac{\\sigma}{\\bar{x}} \\times 100'
  ],
  topics: [
    {
      id: 'math-stat-1-mean-median-dispersion',
      name: '11.11.1 Mean, Median & Mean Deviation',
      description: 'Calculation of mean, median, and mode for discrete and continuous frequency distributions; mean deviation about mean and median; properties of absolute deviations.',
      estimatedHours: 5,
      isHighWeightage: false
    },
    {
      id: 'math-stat-2-variance-sd-properties',
      name: '11.11.2 Variance & Standard Deviation for Grouped/Ungrouped Data',
      description: 'Computing variance using sigma x_i^2 / n - (mean)^2, shortcut step-deviation method, and effect of adding/subtracting/multiplying each observation by a constant.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-stat-3-combined-variance-corrections',
      name: '11.11.3 Combined Variance, Missing Observations & Data Correction',
      description: 'Finding mean and variance after adding new observations or correcting misread observations, combined variance formula for two merged sets, coefficient of variation.',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Statistics is a guaranteed 4 marks in every single session of JEE Main. Questions almost exclusively focus on variance and standard deviation with missing or corrected observations.',
    ncertPointers: [
      'Variance is independent of change of origin: If each observation is increased or decreased by a constant a, the variance and standard deviation remain UNCHANGED.',
      'If each observation is multiplied by c, the new variance is c^2 times the original variance, and standard deviation is |c| times the original standard deviation.',
      'Sum of deviations from the mean is always zero: sum (x_i - mean) = 0.'
    ],
    commonTraps: [
      'Squaring the standard deviation when updating observations instead of working directly with sum x_i and sum x_i^2.',
      'Confusing the divisor n with n - 1 (in JEE and NCERT statistics, variance uses divisor n, NOT sample variance n - 1).'
    ],
    shortcutsVsConcepts: [
      'Missing observations shortcut: Form two equations: one from the mean (sum x_i) and one from the variance (sum x_i^2 = n * (sigma^2 + mean^2)). Solves two missing values easily!',
      'Variance of first n natural numbers: sigma^2 = (n^2 - 1) / 12. Extremely fast!'
    ]
  },
  ncertPointers: [
    'Variance is independent of change of origin: If each observation is increased or decreased by a constant a, the variance and standard deviation remain UNCHANGED.',
    'If each observation is multiplied by c, the new variance is c^2 times the original variance, and standard deviation is |c| times the original standard deviation.',
    'Sum of deviations from the mean is always zero: sum (x_i - mean) = 0.'
  ],
  commonTraps: [
    'Squaring the standard deviation when updating observations instead of working directly with sum x_i and sum x_i^2.',
    'Confusing the divisor n with n - 1 (in JEE and NCERT statistics, variance uses divisor n, NOT sample variance n - 1).'
  ],
  shortcutsVsConcepts: [
    'Missing observations shortcut: Form two equations: one from the mean (sum x_i) and one from the variance (sum x_i^2 = n * (sigma^2 + mean^2)). Solves two missing values easily!',
    'Variance of first n natural numbers: sigma^2 = (n^2 - 1) / 12. Extremely fast!'
  ]
};
