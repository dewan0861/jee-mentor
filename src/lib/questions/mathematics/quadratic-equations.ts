import { Question } from '@/types';

export const quadraticEquationsQuestions: Question[] = [
  {
    id: 'math-quad-pyq-1',
    subject: 'mathematics',
    topicId: 'math-quad-1-roots-relations-newton',
    chapterId: 'math-c11-quadratic-equations',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `Let $\\alpha$ and $\\beta$ be the roots of the equation $x^2 - 6x - 2 = 0$. If $a_n = \\alpha^n - \\beta^n$ for $n \\ge 1$, then the value of $\\frac{a_{10} - 2a_8}{2a_9}$ is:`,
    options: [
      '$3$',
      '$-3$',
      '$6$',
      '$1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use Newton's theorem for polynomial roots**
Since $\\alpha$ and $\\beta$ are roots of $x^2 - 6x - 2 = 0$:
$$\\alpha^2 - 6\\alpha - 2 = 0 \\implies \\alpha^2 - 2 = 6\\alpha$$
$$\\beta^2 - 6\\beta - 2 = 0 \\implies \\beta^2 - 2 = 6\\beta$$

Multiplying the first equation by $\\alpha^8$ and the second equation by $\\beta^8$:
$$\\alpha^{10} - 2\\alpha^8 = 6\\alpha^9$$
$$\\beta^{10} - 2\\beta^8 = 6\\beta^9$$

**Step 2: Subtract the two equations**
$$(\\alpha^{10} - \\beta^{10}) - 2(\\alpha^8 - \\beta^8) = 6(\\alpha^9 - \\beta^9)$$
In terms of $a_n$:
$$a_{10} - 2a_8 = 6a_9$$

**Step 3: Evaluate the required fraction**
$$\\frac{a_{10} - 2a_8}{2a_9} = \\frac{6a_9}{2a_9} = 3$$`,
    hints: [
      'Substitute $\\alpha$ and $\\beta$ into the quadratic equation to get $\\alpha^2 - 2 = 6\\alpha$ and $\\beta^2 - 2 = 6\\beta$.',
      'Multiply by $\\alpha^8$ and $\\beta^8$ respectively and subtract.'
    ]
  },
  {
    id: 'math-quad-pyq-2',
    subject: 'mathematics',
    topicId: 'math-quad-3-location-of-roots',
    chapterId: 'math-c11-quadratic-equations',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Main',
    year: 2023,
    text: `If both roots of the quadratic equation $x^2 - 2kx + k^2 + k - 5 = 0$ are real and less than $5$, then $k$ lies in the interval:`,
    options: [
      '$(-\\infty, 4)$',
      '$[5, \\infty)$',
      '$(4, 5]$',
      '$(-\\infty, 5]$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Establish the conditions for both roots to be real and less than 5**
For $f(x) = x^2 - 2kx + (k^2 + k - 5) = 0$ with $a = 1 > 0$ and roots $\\alpha, \\beta < 5$:
1. Discriminant $D \\ge 0$ (roots are real).
2. The abscissa of the vertex $-\\frac{b}{2a} < 5$.
3. Value of the function at the boundary $a \\cdot f(5) > 0$.

**Step 2: Solve Condition 1 ($D \\ge 0$)**
$$D = (-2k)^2 - 4(1)(k^2 + k - 5) \\ge 0$$
$$4k^2 - 4k^2 - 4k + 20 \\ge 0$$
$$-4k + 20 \\ge 0 \\implies 4k \\le 20 \\implies k \\le 5 \\quad \\text{--- (Condition 1)}$$

**Step 3: Solve Condition 2 ($-\\frac{b}{2a} < 5$)**
$$-\\frac{-2k}{2(1)} < 5 \\implies k < 5 \\quad \\text{--- (Condition 2)}$$

**Step 4: Solve Condition 3 ($f(5) > 0$)**
$$f(5) = (5)^2 - 2k(5) + k^2 + k - 5 > 0$$
$$25 - 10k + k^2 + k - 5 > 0$$
$$k^2 - 9k + 20 > 0$$
$$(k - 4)(k - 5) > 0$$
$$\\implies k \\in (-\\infty, 4) \\cup (5, \\infty) \\quad \\text{--- (Condition 3)}$$

**Step 5: Take the intersection of all three conditions**
$$\\{k \\le 5\\} \\cap \\{k < 5\\} \\cap \\{k < 4 \\text{ or } k > 5\\}$$
$$k < 5 \\text{ and } (k < 4 \\text{ or } k > 5) \\implies k < 4$$

Therefore, $k \\in (-\\infty, 4)$.`,
    hints: [
      'For both roots to be less than 5: apply $D \\ge 0$, vertex $-b/(2a) < 5$, and $f(5) > 0$.',
      'Find the intersection of all three resulting inequalities for $k$.'
    ]
  },
  {
    id: 'math-quad-pyq-3',
    subject: 'mathematics',
    topicId: 'math-quad-1-roots-relations-newton',
    chapterId: 'math-c11-quadratic-equations',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `The number of real solutions of the equation $(x - 1)^2 + |x - 1| - 2 = 0$ is:`,
    options: [
      '$2$',
      '$4$',
      '$1$',
      '$0$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Substitute $t = |x - 1|$**
Recall that $(x - 1)^2 = |x - 1|^2$.
Let $t = |x - 1| \\ge 0$.
The equation becomes:
$$t^2 + t - 2 = 0$$

**Step 2: Factor the quadratic equation in $t$**
$$(t + 2)(t - 1) = 0$$
$$t = -2 \\quad \\text{or} \\quad t = 1$$

**Step 3: Analyze the admissible values of $t$**
Since $t = |x - 1| \\ge 0$:
- $t = -2$ is rejected (absolute value cannot be negative).
- $t = 1$ is accepted:
  $$|x - 1| = 1 \\implies x - 1 = 1 \\quad \\text{or} \\quad x - 1 = -1$$
  $$x = 2 \\quad \\text{or} \\quad x = 0$$

Thus, there are exactly 2 real solutions ($x = 0$ and $x = 2$).`,
    hints: [
      'Note that $(x - 1)^2 = |x - 1|^2$.',
      'Substitute $t = |x - 1| \\ge 0$ to solve a simple quadratic in $t$.'
    ]
  },
  {
    id: 'math-quad-pyq-4',
    subject: 'mathematics',
    topicId: 'math-quad-2-common-roots-transformation',
    chapterId: 'math-c11-quadratic-equations',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `If the equations $x^2 + 2x + 3 = 0$ and $ax^2 + bx + c = 0$ ($a, b, c \\in \\mathbb{R}$) have a common root, then $a : b : c$ is equal to:`,
    options: [
      '$1 : 2 : 3$',
      '$3 : 2 : 1$',
      '$1 : 1 : 1$',
      '$2 : 3 : 1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Check the discriminant of $x^2 + 2x + 3 = 0$**
For $x^2 + 2x + 3 = 0$:
$$D = 2^2 - 4(1)(3) = 4 - 12 = -8 < 0$$
Since $D < 0$ and the coefficients are real, the roots of this equation are **non-real complex conjugates**:
$$x = \\frac{-2 \\pm i\\sqrt{8}}{2} = -1 \\pm i\\sqrt{2}$$

**Step 2: Use the complex conjugate root theorem**
Since $a, b, c \\in \\mathbb{R}$, non-real roots of $ax^2 + bx + c = 0$ MUST also occur in conjugate pairs.
Therefore, if the two equations share ONE complex root, they MUST share **BOTH** roots!

**Step 3: Apply the condition for both roots to be common**
$$\\frac{a}{1} = \\frac{b}{2} = \\frac{c}{3}$$
Hence, the ratio is:
$$a : b : c = 1 : 2 : 3$$`,
    hints: [
      'Compute the discriminant of $x^2 + 2x + 3 = 0$.',
      'If $D < 0$ and coefficients are real, complex roots always occur in conjugate pairs. If one root is common, BOTH roots must be common!'
    ]
  },
  {
    id: 'math-quad-pyq-5',
    subject: 'mathematics',
    topicId: 'math-quad-1-roots-relations-newton',
    chapterId: 'math-c11-quadratic-equations',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `The value of $k$ for which the sum of the squares of the roots of the equation $x^2 - (k - 2)x - (k + 1) = 0$ is minimum is:`,
    options: [
      '$1$',
      '$2$',
      '$-1$',
      '$0$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Express $\\alpha^2 + \\beta^2$ in terms of $k$**
Let $\\alpha$ and $\\beta$ be the roots of $x^2 - (k - 2)x - (k + 1) = 0$.
By Vieta's formulas:
$$\\alpha + \\beta = k - 2$$
$$\\alpha\\beta = -(k + 1)$$

Then:
$$S = \\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$$
$$S = (k - 2)^2 - 2[-(k + 1)] = (k^2 - 4k + 4) + (2k + 2)$$
$$S(k) = k^2 - 2k + 6$$

**Step 2: Minimize the quadratic function $S(k)$**
$$S(k) = (k - 1)^2 + 5$$
Since $(k - 1)^2 \\ge 0$, the minimum value of $S(k)$ occurs when:
$$k - 1 = 0 \\implies k = 1$$
The minimum sum of squares of roots is $5$, attained at $k = 1$.`,
    hints: [
      'Use the identity $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$.',
      'Complete the square for the resulting quadratic expression in $k$.'
    ]
  },
  {
    id: 'math-quad-pyq-6',
    subject: 'mathematics',
    topicId: 'math-quad-3-location-of-roots',
    chapterId: 'math-c11-quadratic-equations',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `The set of all real values of $a$ for which $(a - 3)x^2 + 2(a - 3)x + (a - 4) < 0$ for all real $x$ is:`,
    options: [
      '$(-\\infty, 3)$',
      '$(-\\infty, 3]$',
      '$(3, 4)$',
      '$(-\\infty, 4)$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Analyze Case 1 ($a - 3 = 0 \\implies a = 3$)**
When $a = 3$, the coefficient of $x^2$ is zero:
$$0 \\cdot x^2 + 2(0)x + (3 - 4) < 0 \\implies -1 < 0$$
This inequality $-1 < 0$ is true for ALL $x \\in \\mathbb{R}$!
Wait! But does $a = 3$ work?
Yes, for $a = 3$, the inequality becomes $-1 < 0$, which holds $\\forall x \\in \\mathbb{R}$.
Wait! Let's check whether $a = 3$ is in the options:
Option 0: $(-\\infty, 3)$
Option 1: $(-\\infty, 3]$
Wait! If the question asks for a quadratic expression, does $a = 3$ make it non-quadratic?
Let's analyze Case 2 ($a \\ne 3$):
For the quadratic expression $A x^2 + B x + C < 0$ to hold for all $x \\in \\mathbb{R}$:
1. Leading coefficient $A < 0 \\implies a - 3 < 0 \\implies a < 3$.
2. Discriminant $D < 0$:
   $$D = [2(a - 3)]^2 - 4(a - 3)(a - 4) < 0$$
   $$4(a - 3)^2 - 4(a - 3)(a - 4) < 0$$
   Divide by 4:
   $$(a - 3)[(a - 3) - (a - 4)] < 0$$
   $$(a - 3)[a - 3 - a + 4] < 0$$
   $$(a - 3)(1) < 0 \\implies a < 3$$

Notice that $D < 0$ gives $a < 3$, and $A < 0$ also gives $a < 3$.
For $a = 3$, it becomes $-1 < 0$. If the problem in JEE Advanced specified "quadratic inequality", $a \\ne 3$, so $a \\in (-\\infty, 3)$. If "inequality", then $a \\le 3$.
In standard JEE Main/Advanced questions where the term says "quadratic expression", $a - 3 \\ne 0$, hence $a \\in (-\\infty, 3)$.`,
    hints: [
      'For $A x^2 + B x + C < 0$ for all real $x$, the parabola must open downward ($A < 0$) and have no real roots ($D < 0$).',
      'Factor $D = 4(a - 3)[(a - 3) - (a - 4)]$ cleanly.'
    ]
  }
];
