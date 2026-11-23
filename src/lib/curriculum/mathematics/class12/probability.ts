import { Chapter } from '@/types';

export const probabilityChapter: Chapter = {
  id: 'math-c12-probability',
  subject: 'mathematics',
  classLevel: 12,
  name: 'Probability (Conditional, Bayes & Distributions)',
  unit: 'Probability & Statistics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
    '\\text{Conditional Probability}: P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\; (P(B) > 0)',
    '\\text{Independent Events}: P(A \\cap B) = P(A) \\cdot P(B) \\iff P(A|B) = P(A)',
    '\\text{Theorem of Total Probability}: P(A) = \\sum_{i=1}^n P(E_i) \\cdot P(A|E_i)',
    '\\text{Bayes\' Theorem}: P(E_k|A) = \\frac{P(E_k) \\cdot P(A|E_k)}{\\sum_{i=1}^n P(E_i) \\cdot P(A|E_i)}',
    '\\text{Probability Distribution}: \\sum_{i=1}^n p_i = 1, \\quad p_i \\ge 0',
    '\\text{Mean (Expectation)}: E(X) = \\mu = \\sum_{i=1}^n x_i p_i',
    '\\text{Variance}: \\text{Var}(X) = E(X^2) - [E(X)]^2 = \\sum x_i^2 p_i - \\mu^2'
  ],
  topics: [
    {
      id: 'math-prob-1-conditional-independent',
      name: '12.14.1 Conditional Probability & Independent Events',
      description: 'Multiplication theorem, independent vs mutually exclusive events, pairwise vs mutual independence of 3 events.',
      estimatedHours: 6,
      isHighWeightage: true
    },
    {
      id: 'math-prob-2-total-bayes-theorem',
      name: '12.14.2 Total Probability Law & Bayes\' Theorem',
      description: 'Partition of sample space, Urn problems (drawing balls with and without replacement), false-positive diagnostic test questions, finding reverse probabilities.',
      estimatedHours: 8,
      isHighWeightage: true
    },
    {
      id: 'math-prob-3-random-variables-distribution',
      name: '12.14.3 Random Variables, Probability Distribution & Expectation',
      description: 'Discrete random variable X, probability mass function, expected value E(X) and variance Var(X).',
      estimatedHours: 6,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Probability is tested in every JEE Main session (1-2 questions). Bayes\' Theorem (urn problems, defective items) and conditional probability are standard staples.',
    ncertPointers: [
      'Two events A and B with non-zero probabilities can NEVER be simultaneously mutually exclusive and independent (if mutually exclusive, P(A cap B) = 0, but for independent events P(A cap B) = P(A)P(B) > 0).',
      'For independent events: P(A\' cap B\') = P(A\') * P(B\') = (1 - P(A)) * (1 - P(B)).',
      'Sum of all probabilities in a discrete probability distribution must strictly equal 1.'
    ],
    commonTraps: [
      'Confusing P(A|B) with P(B|A)! P(A|B) is the probability of A given B has occurred.',
      'Applying Bayes\' Theorem without defining the partition events E_1, E_2, ... clearly.'
    ],
    shortcutsVsConcepts: [
      'Urn transfer problems: If a ball is transferred from Urn 1 to Urn 2 without knowing its color, use Total Probability: P(Drawing Red from Urn 2) = P(Transferred Red)*P(Red|Transferred Red) + P(Transferred Black)*P(Red|Transferred Black).',
      'At least one occurrence among n independent events: P(at least one) = 1 - P(none) = 1 - (1 - p_1)(1 - p_2)...(1 - p_n).'
    ]
  },
  ncertPointers: [
    'Two events A and B with non-zero probabilities can NEVER be simultaneously mutually exclusive and independent (if mutually exclusive, P(A cap B) = 0, but for independent events P(A cap B) = P(A)P(B) > 0).',
    'For independent events: P(A\' cap B\') = P(A\') * P(B\') = (1 - P(A)) * (1 - P(B)).',
    'Sum of all probabilities in a discrete probability distribution must strictly equal 1.'
  ],
  commonTraps: [
    'Confusing P(A|B) with P(B|A)! P(A|B) is the probability of A given B has occurred.',
    'Applying Bayes\' Theorem without defining the partition events E_1, E_2, ... clearly.'
  ],
  shortcutsVsConcepts: [
    'Urn transfer problems: If a ball is transferred from Urn 1 to Urn 2 without knowing its color, use Total Probability: P(Drawing Red from Urn 2) = P(Transferred Red)*P(Red|Transferred Red) + P(Transferred Black)*P(Red|Transferred Black).',
    'At least one occurrence among n independent events: P(at least one) = 1 - P(none) = 1 - (1 - p_1)(1 - p_2)...(1 - p_n).'
  ]
};
