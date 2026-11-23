import { Question } from '@/types';

export const probabilityQuestions: Question[] = [
  {
    id: 'pyq-math-prob-001',
    subject: 'mathematics',
    chapterId: 'math-c12-probability',
    topicId: 'math-prob-2-total-bayes-theorem',
    text: 'A man is known to speak the truth $3$ out of $4$ times. He throws a fair six-sided die and reports that it is a $6$. The probability that it is actually a $6$ is equal to:',
    options: [
      '$\\frac{3}{8}$',
      '$\\frac{1}{8}$',
      '$\\frac{3}{4}$',
      '$\\frac{1}{6}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Define the underlying events:\n$E_1$: The die actually shows a $6$. Probability $P(E_1) = \\frac{1}{6}$.\n$E_2$: The die does NOT show a $6$. Probability $P(E_2) = 1 - \\frac{1}{6} = \\frac{5}{6}$.\n$A$: The man reports that the die shows a $6$.\n\nStep 2: Determine the conditional probabilities $P(A|E_1)$ and $P(A|E_2)$:\nIf $E_1$ occurred (it is a 6), he reports 6 if he speaks the truth: $P(A|E_1) = \\frac{3}{4}$.\nIf $E_2$ occurred (it is not a 6), he reports 6 if he lies: $P(A|E_2) = 1 - \\frac{3}{4} = \\frac{1}{4}$.\n\nStep 3: Apply Bayes\' Theorem to find $P(E_1|A)$:\n$P(E_1|A) = \\frac{P(E_1) P(A|E_1)}{P(E_1) P(A|E_1) + P(E_2) P(A|E_2)}$.\n\nStep 4: Compute numerator and denominator:\nNumerator $= \\left(\\frac{1}{6}\\right)\\left(\\frac{3}{4}\\right) = \\frac{3}{24}$.\nDenominator $= \\left(\\frac{1}{6}\\right)\\left(\\frac{3}{4}\\right) + \\left(\\frac{5}{6}\\right)\\left(\\frac{1}{4}\\right) = \\frac{3}{24} + \\frac{5}{24} = \\frac{8}{24}$.\n\nStep 5: Divide to obtain the posterior probability:\n$P(E_1|A) = \\frac{3/24}{8/24} = \\frac{3}{8}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Do not simply say the probability is 3/4! The prior probability of rolling a 6 is only 1/6, which heavily weights the denominator via Bayes\' theorem.',
    shortcut: 'Bayes formula: (1/6 * 3/4) / [1/6 * 3/4 + 5/6 * 1/4] = 3 / (3 + 5) = 3/8.'
  },
  {
    id: 'pyq-math-prob-002',
    subject: 'mathematics',
    chapterId: 'math-c12-probability',
    topicId: 'math-prob-2-total-bayes-theorem',
    text: 'Bag A contains $3$ red and $4$ black balls, while Bag B contains $5$ red and $6$ black balls. One ball is drawn at random from one of the bags and is found to be red. The probability that it was drawn from Bag B is:',
    options: [
      '$\\frac{35}{68}$',
      '$\\frac{33}{68}$',
      '$\\frac{5}{11}$',
      '$\\frac{3}{7}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Define events:\n$E_1$: Bag A is chosen, $P(E_1) = \\frac{1}{2}$.\n$E_2$: Bag B is chosen, $P(E_2) = \\frac{1}{2}$.\n$R$: A red ball is drawn.\n\nStep 2: Find conditional probabilities of drawing a red ball:\nFrom Bag A (3 red, 4 black, total 7): $P(R|E_1) = \\frac{3}{7}$.\nFrom Bag B (5 red, 6 black, total 11): $P(R|E_2) = \\frac{5}{11}$.\n\nStep 3: Apply Bayes\' Theorem for $P(E_2|R)$:\n$P(E_2|R) = \\frac{P(E_2) P(R|E_2)}{P(E_1) P(R|E_1) + P(E_2) P(R|E_2)}$\n$= \\frac{\\frac{1}{2} \\cdot \\frac{5}{11}}{\\frac{1}{2} \\cdot \\frac{3}{7} + \\frac{1}{2} \\cdot \\frac{5}{11}} = \\frac{\\frac{5}{11}}{\\frac{3}{7} + \\frac{5}{11}}$.\n\nStep 4: Simplify the fraction:\n$\\frac{3}{7} + \\frac{5}{11} = \\frac{3(11) + 5(7)}{77} = \\frac{33 + 35}{77} = \\frac{68}{77}$.\n$P(E_2|R) = \\frac{5/11}{68/77} = \\frac{5}{11} \\times \\frac{77}{68} = \\frac{5 \\times 7}{68} = \\frac{35}{68}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Check common denominator arithmetic: 3/7 + 5/11 = (33 + 35)/77 = 68/77.',
    shortcut: 'Ratio of likelihoods: Bag A weight = 3/7 = 33/77. Bag B weight = 5/11 = 35/77. P(Bag B) = 35 / (33 + 35) = 35/68.'
  },
  {
    id: 'pyq-math-prob-003',
    subject: 'mathematics',
    chapterId: 'math-c12-probability',
    topicId: 'math-prob-1-conditional-independent',
    text: 'Let $A$ and $B$ be two independent events such that $P(A \\cap B) = \\frac{1}{6}$ and $P(A\' \\cap B\') = \\frac{1}{3}$. If $P(A) > P(B)$, then the value of $P(A)$ is equal to:',
    options: [
      '$\\frac{1}{2}$',
      '$\\frac{1}{3}$',
      '$\\frac{2}{3}$',
      '$\\frac{3}{4}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Use independence of events $A$ and $B$:\n$P(A \\cap B) = P(A) \\cdot P(B) = \\frac{1}{6}$ ...(i)\nSince $A$ and $B$ are independent, $A\'$ and $B\'$ are also independent:\n$P(A\' \\cap B\') = P(A\') \\cdot P(B\') = (1 - P(A))(1 - P(B)) = \\frac{1}{3}$ ...(ii)\n\nStep 2: Expand equation (ii):\n$1 - [P(A) + P(B)] + P(A) P(B) = \\frac{1}{3}$.\n\nStep 3: Substitute $P(A) P(B) = \\frac{1}{6}$ into the expanded equation:\n$1 - [P(A) + P(B)] + \\frac{1}{6} = \\frac{1}{3}$\n$P(A) + P(B) = 1 + \\frac{1}{6} - \\frac{1}{3} = \\frac{7}{6} - \\frac{2}{6} = \\frac{5}{6}$.\n\nStep 4: Form a quadratic equation for the two numbers whose sum is $\\frac{5}{6}$ and product is $\\frac{1}{6}$:\n$t^2 - \\frac{5}{6}t + \\frac{1}{6} = 0 \\implies 6t^2 - 5t + 1 = 0$\n$(2t - 1)(3t - 1) = 0 \\implies t = \\frac{1}{2} \\text{ or } t = \\frac{1}{3}$.\n\nStep 5: Since $P(A) > P(B)$, we have:\n$P(A) = \\frac{1}{2}$ and $P(B) = \\frac{1}{3}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    trap: 'Check the condition P(A) > P(B) to distinguish between 1/2 and 1/3.',
    shortcut: 'Sum = 1 + 1/6 - 1/3 = 5/6, Product = 1/6. Numbers are 1/2 and 1/3. P(A) > P(B) gives P(A) = 1/2.'
  },
  {
    id: 'pyq-math-prob-004',
    subject: 'mathematics',
    chapterId: 'math-c12-probability',
    topicId: 'math-prob-1-conditional-independent',
    text: 'A problem in mathematics is given to three students $A, B, C$ whose chances of solving it independently are $\\frac{1}{2}, \\frac{1}{3}$, and $\\frac{1}{4}$ respectively. The probability that the problem will be solved is:',
    options: [
      '$\\frac{3}{4}$',
      '$\\frac{1}{4}$',
      '$\\frac{1}{24}$',
      '$\\frac{23}{24}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: The problem is solved if AT LEAST ONE student solves it.\nBy the complement rule:\n$P(\\text{Problem is solved}) = 1 - P(\\text{None of the students solves the problem})$.\n\nStep 2: Find the probability of each student failing to solve the problem:\n$P(A\') = 1 - \\frac{1}{2} = \\frac{1}{2}$\n$P(B\') = 1 - \\frac{1}{3} = \\frac{2}{3}$\n$P(C\') = 1 - \\frac{1}{4} = \\frac{3}{4}$.\n\nStep 3: Since the attempts are independent, multiply the failure probabilities:\n$P(\\text{None solves}) = P(A\') \\cdot P(B\') \\cdot P(C\') = \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{4}$.\n\nStep 4: Subtract from 1:\n$P(\\text{Solved}) = 1 - \\frac{1}{4} = \\frac{3}{4}$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2024,
    trap: 'Do not simply add P(A) + P(B) + P(C)! Probabilities of non-mutually exclusive events cannot be added directly.',
    shortcut: 'P(solved) = 1 - (1/2 * 2/3 * 3/4) = 1 - 1/4 = 3/4.'
  },
  {
    id: 'pyq-math-prob-005',
    subject: 'mathematics',
    chapterId: 'math-c12-probability',
    topicId: 'math-prob-3-random-variables-distribution',
    text: 'A discrete random variable $X$ has the probability distribution:\n$X = 0, 1, 2, 3$ with $P(X = x) = k, 2k, 3k, 4k$ respectively.\nThen the expected value $E(X)$ is equal to:',
    options: [
      '$2$',
      '$1.5$',
      '$0.1$',
      '$2.5$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Use the property that the sum of all probabilities in a discrete distribution must equal 1:\n$\\sum_{x=0}^3 P(X = x) = 1$\n$k + 2k + 3k + 4k = 1 \\implies 10k = 1 \\implies k = \\frac{1}{10} = 0.1$.\n\nStep 2: Write out the explicit probabilities:\n$P(X = 0) = 0.1$\n$P(X = 1) = 0.2$\n$P(X = 2) = 0.3$\n$P(X = 3) = 0.4$.\n\nStep 3: Compute the expected value (mean) $E(X) = \\sum x_i P(X = x_i)$:\n$E(X) = 0(k) + 1(2k) + 2(3k) + 3(4k)$\n$= 0 + 2k + 6k + 12k = 20k$.\n\nStep 4: Substitute $k = \\frac{1}{10}$:\n$E(X) = 20 \\times \\frac{1}{10} = 2$.',
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    trap: 'Do not forget that x = 0 has zero contribution to the expectation sum 0 * k = 0, but contributes k to the sum of probabilities.',
    shortcut: 'Sum of probs = 10k = 1 => k = 1/10. E(X) = (0 + 2 + 6 + 12)k = 20k = 20 * 0.1 = 2.'
  },
  {
    id: 'pyq-math-prob-006',
    subject: 'mathematics',
    chapterId: 'math-c12-probability',
    topicId: 'math-prob-2-total-bayes-theorem',
    text: 'An urn contains $5$ red and $5$ black balls. A ball is drawn at random, its color is noted, and it is returned to the urn. Moreover, $2$ additional balls of the color drawn are put into the urn, and then a second ball is drawn. The probability that the second ball drawn is red is equal to:',
    options: [
      '$\\frac{1}{2}$',
      '$\\frac{7}{12}$',
      '$\\frac{5}{12}$',
      '$\\frac{1}{4}$'
    ],
    correctAnswer: 0,
    explanation: 'Step 1: Define events for the first draw:\n$R_1$: First ball drawn is Red. $P(R_1) = \\frac{5}{10} = \\frac{1}{2}$.\n$B_1$: First ball drawn is Black. $P(B_1) = \\frac{5}{10} = \\frac{1}{2}$.\n\nStep 2: Update urn contents after first draw and find conditional probabilities of second ball being Red ($R_2$):\nCase 1 (First ball Red): 2 additional red balls added. Urn now contains $5 + 2 = 7$ red and $5$ black balls (total 12 balls).\n$P(R_2|R_1) = \\frac{7}{12}$.\n\nCase 2 (First ball Black): 2 additional black balls added. Urn now contains $5$ red and $5 + 2 = 7$ black balls (total 12 balls).\n$P(R_2|B_1) = \\frac{5}{12}$.\n\nStep 3: Apply the Law of Total Probability for $P(R_2)$:\n$P(R_2) = P(R_1) P(R_2|R_1) + P(B_1) P(R_2|B_1)$\n$= \\left(\\frac{1}{2}\\right)\\left(\\frac{7}{12}\\right) + \\left(\\frac{1}{2}\\right)\\left(\\frac{5}{12}\\right)$\n$= \\frac{7}{24} + \\frac{5}{24} = \\frac{12}{24} = \\frac{1}{2}$.',
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    trap: 'Check that the total number of balls increases from 10 to 12 on the second draw.',
    shortcut: 'By Pólya\'s urn invariance theorem, drawing with replacement and adding k balls of the same color leaves the marginal probability of drawing a red ball at any stage equal to the initial proportion: 5/10 = 1/2.'
  }
];
