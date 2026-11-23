import { Question } from '@/types';

export const setsRelationsFunctionsQuestions: Question[] = [
  {
    id: 'math-srf-pyq-1',
    subject: 'mathematics',
    topicId: 'math-sets-3-domain-range-real-functions',
    chapterId: 'math-c11-sets-relations-functions',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `The domain of the function $f(x) = \\sqrt{\\log_{0.5}\\left(\\frac{x - 1}{x + 5}\\right)}$ is:`,
    options: [
      '$(1, \\infty)$',
      '$(-\\infty, -5) \\cup (1, \\infty)$',
      '$(-5, 1)$',
      '$[1, \\infty)$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Set up the domain conditions**
For $f(x) = \\sqrt{\\log_{0.5}\\left(\\frac{x - 1}{x + 5}\\right)}$ to be real and defined:
1. Argument of logarithm must be strictly positive:
   $$\\frac{x - 1}{x + 5} > 0 \\implies x \\in (-\\infty, -5) \\cup (1, \\infty) \\quad \\text{--- (Condition 1)}$$
2. Expression inside square root must be non-negative:
   $$\\log_{0.5}\\left(\\frac{x - 1}{x + 5}\\right) \\ge 0$$

**Step 2: Solve the logarithmic inequality**
Since the base $b = 0.5 < 1$, taking antilog flips the direction of the inequality:
$$\\frac{x - 1}{x + 5} \\le (0.5)^0 = 1$$
$$\\frac{x - 1}{x + 5} - 1 \\le 0 \\implies \\frac{(x - 1) - (x + 5)}{x + 5} \\le 0$$
$$\\frac{-6}{x + 5} \\le 0$$
Since the numerator $-6$ is negative, for the fraction to be $\\le 0$, the denominator must be strictly positive:
$$x + 5 > 0 \\implies x > -5 \\quad \\text{--- (Condition 2)}$$

**Step 3: Find the intersection of conditions**
Taking the intersection of Condition 1 and Condition 2:
$$x \\in \\{ x < -5 \\text{ or } x > 1 \\} \\cap \\{ x > -5 \\}$$
Hence, the domain of the function is $(1, \\infty)$.`,
    hints: [
      'Argument of logarithm must be strictly positive.',
      'Since the base of the logarithm is 0.5 (which is less than 1), the inequality flips when taking the antilog.'
    ]
  },
  {
    id: 'math-srf-pyq-2',
    subject: 'mathematics',
    topicId: 'math-sets-1-algebra-cardinality',
    chapterId: 'math-c11-sets-relations-functions',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `In a group of 100 students, 60 students study Mathematics, 45 study Physics, and 35 study Chemistry. 20 study both Mathematics and Physics, 15 study both Physics and Chemistry, and 15 study both Mathematics and Chemistry. If every student studies at least one of the three subjects, find the number of students who study all three subjects.`,
    options: [
      '5',
      '10',
      '15',
      '20'
    ],
    correctAnswer: 1,
    solution: `**Step 1: Use the Principle of Inclusion-Exclusion for 3 sets**
Let $M, P, C$ be the sets of students studying Mathematics, Physics, and Chemistry respectively.
Given:
- $n(M \\cup P \\cup C) = 100$ (since every student studies at least one subject)
- $n(M) = 60, \\; n(P) = 45, \\; n(C) = 35$
- $n(M \\cap P) = 20, \\; n(P \\cap C) = 15, \\; n(M \\cap C) = 15$

**Step 2: Apply the cardinality formula**
$$n(M \\cup P \\cup C) = n(M) + n(P) + n(C) - [n(M \\cap P) + n(P \\cap C) + n(M \\cap C)] + n(M \\cap P \\cap C)$$
Substitute the given values:
$$100 = 60 + 45 + 35 - [20 + 15 + 15] + n(M \\cap P \\cap C)$$
$$100 = 140 - 50 + n(M \\cap P \\cap C)$$
$$100 = 90 + n(M \\cap P \\cap C)$$
$$n(M \\cap P \\cap C) = 100 - 90 = 10$$

Thus, exactly 10 students study all three subjects.`,
    hints: [
      'Write down the 3-set inclusion-exclusion formula.',
      'Substitute all 1-set, 2-set intersections and total union to isolate the 3-set intersection.'
    ]
  },
  {
    id: 'math-srf-pyq-3',
    subject: 'mathematics',
    topicId: 'math-sets-3-domain-range-real-functions',
    chapterId: 'math-c11-sets-relations-functions',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The range of the function $f(x) = \\frac{x^2 - x + 1}{x^2 + x + 1}$ for all $x \\in \\mathbb{R}$ is:`,
    options: [
      '$\\left[\\frac{1}{3}, 3\\right]$',
      '$\\left(\\frac{1}{3}, 3\\right)$',
      '$[1, 3]$',
      '$\\left[\\frac{1}{2}, 2\\right]$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Set $y = f(x)$ and form a quadratic in $x$**
Let $y = \\frac{x^2 - x + 1}{x^2 + x + 1}$.
Note that the denominator $x^2 + x + 1 = \\left(x + \\frac{1}{2}\\right)^2 + \\frac{3}{4} > 0$ for all real $x$, so the function is continuous on all of $\\mathbb{R}$.

Cross-multiplying:
$$y(x^2 + x + 1) = x^2 - x + 1$$
$$yx^2 + yx + y - x^2 + x - 1 = 0$$
$$(y - 1)x^2 + (y + 1)x + (y - 1) = 0$$

**Step 2: Use the condition that $x$ is real ($D \\ge 0$)**
For $x \\in \\mathbb{R}$, the discriminant $D$ of this quadratic equation must be non-negative:
$$D = B^2 - 4AC \\ge 0$$
$$(y + 1)^2 - 4(y - 1)(y - 1) \\ge 0$$
$$(y + 1)^2 - 4(y - 1)^2 \\ge 0$$

Using $a^2 - b^2 = (a - b)(a + b)$ with $a = y + 1$ and $b = 2(y - 1)$:
$$[(y + 1) - 2(y - 1)][(y + 1) + 2(y - 1)] \\ge 0$$
$$[y + 1 - 2y + 2][y + 1 + 2y - 2] \\ge 0$$
$$(-y + 3)(3y - 1) \\ge 0$$
$$-(y - 3)(3y - 1) \\ge 0$$
Multiply by $-1$ (flips inequality):
$$(3y - 1)(y - 3) \\le 0$$
$$\\frac{1}{3} \\le y \\le 3$$

If $y = 1$: equation becomes $(1 + 1)x + 0 = 0 \\implies 2x = 0 \\implies x = 0$, which is valid and gives $y = 1$.
Therefore, the range of $f(x)$ is $\\left[\\frac{1}{3}, 3\\right]$.`,
    hints: [
      'Express the equation as a quadratic in $x$: $A x^2 + B x + C = 0$.',
      'Since $x$ is real, set Discriminant $D \\ge 0$ and solve the resulting inequality in $y$.'
    ]
  },
  {
    id: 'math-srf-pyq-4',
    subject: 'mathematics',
    topicId: 'math-sets-2-cartesian-relations',
    chapterId: 'math-c11-sets-relations-functions',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    text: `Let $A = \\{1, 2, 3, 4\\}$ and $B = \\{a, b, c\\}$. The total number of non-empty relations from set $A$ to set $B$ is:`,
    options: [
      '$2^{12} - 1$',
      '$2^{12}$',
      '$2^7 - 1$',
      '$12^2 - 1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate the cardinality of $A \\times B$**
- $n(A) = 4$
- $n(B) = 3$
The number of elements in the Cartesian product $A \\times B$ is:
$$n(A \\times B) = n(A) \\times n(B) = 4 \\times 3 = 12$$

**Step 2: Find the total number of subsets of $A \\times B$**
A relation from $A$ to $B$ is defined as any subset of $A \\times B$.
Total number of subsets = $2^{n(A \\times B)} = 2^{12} = 4096$.

**Step 3: Exclude the empty relation**
The question specifies *non-empty* relations:
$$\\text{Number of non-empty relations} = 2^{12} - 1 = 4096 - 1 = 4095$$`,
    hints: [
      'Recall that any relation from A to B is a subset of the Cartesian product A x B.',
      'A set with n elements has 2^n total subsets, of which exactly 1 is empty (phi).'
    ]
  },
  {
    id: 'math-srf-pyq-5',
    subject: 'mathematics',
    topicId: 'math-sets-3-domain-range-real-functions',
    chapterId: 'math-c11-sets-relations-functions',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Main',
    year: 2022,
    text: `The domain of the function $f(x) = \\sin^{-1}\\left(\\frac{x^2 - 3x + 2}{x^2 + 2x + 7}\\right) + \\log_{10}(x^2 - 4)$ is:`,
    options: [
      '$(-\\infty, -2) \\cup (2, \\infty)$',
      '$[ -1, 5 ]$',
      '$(2, \\infty)$',
      '$(-\\infty, -2) \\cup [2, 5]$'
    ],
    correctAnswer: 2,
    solution: `**Step 1: Condition for the inverse sine term**
For $\\sin^{-1}(g(x))$ to be defined:
$$-1 \\le \\frac{x^2 - 3x + 2}{x^2 + 2x + 7} \\le 1$$
Notice that the denominator $x^2 + 2x + 7 = (x + 1)^2 + 6 > 0$ for all real $x$.
Thus we can multiply by the denominator without changing the inequality signs:

Left inequality:
$$-(x^2 + 2x + 7) \\le x^2 - 3x + 2$$
$$2x^2 - x + 9 \\ge 0$$
For $2x^2 - x + 9$, discriminant $D = (-1)^2 - 4(2)(9) = 1 - 72 = -71 < 0$.
Since leading coefficient $2 > 0$ and $D < 0$, $2x^2 - x + 9 > 0$ is true for ALL $x \\in \\mathbb{R}$.

Right inequality:
$$x^2 - 3x + 2 \\le x^2 + 2x + 7$$
$$-3x + 2 \\le 2x + 7$$
$$-5 \\le 5x \\implies x \\ge -1$$
So the inverse sine term is defined for all $x \\in [-1, \\infty)$.

**Step 2: Condition for the logarithmic term**
For $\\log_{10}(x^2 - 4)$ to be defined:
$$x^2 - 4 > 0 \\implies x \\in (-\\infty, -2) \\cup (2, \\infty)$$

**Step 3: Find the intersection of both conditions**
We require:
$$x \\in [-1, \\infty) \\cap [ (-\\infty, -2) \\cup (2, \\infty) ]$$
- $x \\in [-1, \\infty)$ and $x < -2$ has no intersection (empty set).
- $x \\in [-1, \\infty)$ and $x > 2$ gives $x \\in (2, \\infty)$.

Therefore, the domain of $f(x)$ is $(2, \\infty)$.`,
    hints: [
      'The argument of sin^-1(u) must satisfy -1 <= u <= 1.',
      'Notice that x^2 + 2x + 7 has D < 0 and is strictly positive for all real x.',
      'The argument of log_10(v) must be strictly positive: v > 0.'
    ]
  },
  {
    id: 'math-srf-pyq-6',
    subject: 'mathematics',
    topicId: 'math-sets-3-domain-range-real-functions',
    chapterId: 'math-c11-sets-relations-functions',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `Let $f(x) = [x] + \\sqrt{x - [x]}$, where $[x]$ denotes the greatest integer less than or equal to $x$. If $f(x) = \\frac{7}{2}$, then the value of $x$ is:`,
    options: [
      '$\\frac{13}{4}$',
      '$\\frac{15}{4}$',
      '$\\frac{7}{2}$',
      '$\\frac{9}{2}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Decompose $x$ into its integer and fractional parts**
Any real number $x$ can be uniquely written as:
$$x = [x] + \\{x\\}$$
where $[x] = n \\in \\mathbb{Z}$ and $\\{x\\} = x - [x] \\in [0, 1)$.

Then the given equation becomes:
$$n + \\sqrt{\\{x\\}} = \\frac{7}{2} = 3.5$$
$$\\sqrt{\\{x\\}} = 3.5 - n$$

**Step 2: Use the bounds of the fractional part $\\{x\\}$**
Since $0 \\le \\{x\\} < 1$, we must have:
$$0 \\le \\sqrt{\\{x\\}} < 1$$
Substitute $\\sqrt{\\{x\\}} = 3.5 - n$:
$$0 \\le 3.5 - n < 1$$
$$-3.5 \\le -n < -2.5$$
$$2.5 < n \\le 3.5$$

Since $n$ must be an integer, the only possible value is:
$$n = [x] = 3$$

**Step 3: Solve for $\\{x\\}$ and $x$**
Substitute $n = 3$ back into the equation:
$$\\sqrt{\\{x\\}} = 3.5 - 3 = 0.5 = \\frac{1}{2}$$
Squaring both sides:
$$\\{x\\} = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$$

Finally:
$$x = [x] + \\{x\\} = 3 + \\frac{1}{4} = \\frac{13}{4}$$`,
    hints: [
      'Express x as [x] + {x}, where [x] is an integer and {x} in [0, 1).',
      'Isolate sqrt({x}) and use the bound 0 <= sqrt({x}) < 1 to uniquely determine the integer [x].'
    ]
  }
];
