import { Question } from '@/types';

export const relationsFunctionsQuestions: Question[] = [
  {
    id: 'math-rel-pyq-1',
    subject: 'mathematics',
    topicId: 'math-rel-1-types-equivalence',
    chapterId: 'math-c12-relations-functions',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `Let $\\mathbb{Z}$ denote the set of integers. A relation $R$ on $\\mathbb{Z}$ is defined by $(a, b) \\in R \\iff a^2 - b^2$ is divisible by $5$. Then the relation $R$ is:`,
    options: [
      'An equivalence relation',
      'Reflexive and symmetric, but not transitive',
      'Reflexive, but neither symmetric nor transitive',
      'Symmetric, but neither reflexive nor transitive'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Check for Reflexivity**
For any $a \\in \\mathbb{Z}$:
$$a^2 - a^2 = 0 = 5 \\times 0$$
Since $0$ is divisible by $5$, $(a, a) \\in R$ for all $a \\in \\mathbb{Z}$.
Thus, $R$ is **reflexive**.

**Step 2: Check for Symmetry**
Let $(a, b) \\in R$. Then $a^2 - b^2 = 5k$ for some integer $k$.
$$b^2 - a^2 = -(a^2 - b^2) = -5k = 5(-k)$$
Since $-k \\in \\mathbb{Z}$, $b^2 - a^2$ is also divisible by $5$, which means $(b, a) \\in R$.
Thus, $R$ is **symmetric**.

**Step 3: Check for Transitivity**
Let $(a, b) \\in R$ and $(b, c) \\in R$.
Then $a^2 - b^2 = 5k_1$ and $b^2 - c^2 = 5k_2$ for integers $k_1, k_2$.
Adding the two equations:
$$(a^2 - b^2) + (b^2 - c^2) = 5k_1 + 5k_2$$
$$a^2 - c^2 = 5(k_1 + k_2)$$
Since $k_1 + k_2 \\in \\mathbb{Z}$, $a^2 - c^2$ is divisible by $5$, which means $(a, c) \\in R$.
Thus, $R$ is **transitive**.

**Conclusion:**
Since $R$ is reflexive, symmetric, and transitive, it is an **equivalence relation**.`,
    hints: [
      'Reflexive: check if $a^2 - a^2 = 0$ is divisible by 5.',
      'Symmetric: if $a^2 - b^2$ is a multiple of 5, is $b^2 - a^2$ also a multiple of 5?',
      'Transitive: add $a^2 - b^2$ and $b^2 - c^2$ to cancel $b^2$.'
    ]
  },
  {
    id: 'math-rel-pyq-2',
    subject: 'mathematics',
    topicId: 'math-rel-2-injective-surjective-bijective',
    chapterId: 'math-c12-relations-functions',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `Consider the function $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = \\frac{x^2 - 1}{x^2 + 1}$. Then $f$ is:`,
    options: [
      'Neither one-one nor onto',
      'One-one but not onto',
      'Onto but not one-one',
      'Both one-one and onto'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Test for Injectivity (One-One)**
Notice that $f(x) = \\frac{x^2 - 1}{x^2 + 1}$ is an even function:
$$f(-x) = \\frac{(-x)^2 - 1}{(-x)^2 + 1} = \\frac{x^2 - 1}{x^2 + 1} = f(x)$$
For example:
$$f(1) = \\frac{1^2 - 1}{1^2 + 1} = 0, \\quad f(-1) = \\frac{(-1)^2 - 1}{(-1)^2 + 1} = 0$$
Since distinct inputs $x = 1$ and $x = -1$ yield the same output $0$, $f$ is **NOT one-one**.

**Step 2: Test for Surjectivity (Onto)**
Rewrite $f(x)$:
$$f(x) = \\frac{x^2 + 1 - 2}{x^2 + 1} = 1 - \\frac{2}{x^2 + 1}$$
Since $x^2 \\ge 0$ for all real $x$:
$$x^2 + 1 \\ge 1 \\implies 0 < \\frac{1}{x^2 + 1} \\le 1$$
$$-2 \\le -\\frac{2}{x^2 + 1} < 0$$
Add 1:
$$-1 \\le 1 - \\frac{2}{x^2 + 1} < 1$$
Thus, the range of $f$ is $[-1, 1)$.
However, the given codomain is $\\mathbb{R}$.
Since $\\text{Range}(f) = [-1, 1) \\ne \\mathbb{R}$, $f$ is **NOT onto**.

Therefore, $f$ is **neither one-one nor onto**.`,
    hints: [
      'Check if $f(-x) = f(x)$ to quickly test for injectivity.',
      'Find the range of $1 - \\frac{2}{x^2 + 1}$ and compare it with the codomain $\\mathbb{R}$.'
    ]
  },
  {
    id: 'math-rel-pyq-3',
    subject: 'mathematics',
    topicId: 'math-rel-2-injective-surjective-bijective',
    chapterId: 'math-c12-relations-functions',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `The total number of onto (surjective) functions from a set $A$ having $5$ elements to a set $B$ having $2$ elements is:`,
    options: [
      '$30$',
      '$32$',
      '$25$',
      '$60$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Total number of functions from $A$ to $B$**
Let $|A| = 5$ and $|B| = 2$.
Each of the 5 elements in $A$ has 2 independent choices of image in $B$:
$$\\text{Total functions} = 2^5 = 32$$

**Step 2: Subtract non-onto (constant) functions**
A function from $A$ to $B = \\{b_1, b_2\\}$ fails to be onto if all elements of $A$ map to a single element of $B$:
- Case 1: All 5 elements map to $b_1$ ($1$ function).
- Case 2: All 5 elements map to $b_2$ ($1$ function).
Total non-onto functions $= 2$.

**Step 3: Calculate the number of onto functions**
$$\\text{Number of onto functions} = 32 - 2 = 30$$`,
    hints: [
      'Total functions from $A$ to $B$ is $|B|^{|A|} = 2^5 = 32$.',
      'Subtract the functions where all elements map to the exact same element.'
    ]
  },
  {
    id: 'math-rel-pyq-4',
    subject: 'mathematics',
    topicId: 'math-rel-3-composition-invertible',
    chapterId: 'math-c12-relations-functions',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `If $f(x) = \\frac{4^x}{4^x + 2}$, then the value of $\\sum_{r=1}^{1999} f\\left(\\frac{r}{2000}\\right)$ is:`,
    options: [
      '$\\frac{1999}{2}$',
      '$999$',
      '$1000$',
      '$\\frac{1999}{4}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Prove the functional identity $f(x) + f(1 - x) = 1$**
Given $f(x) = \\frac{4^x}{4^x + 2}$.
Then:
$$f(1 - x) = \\frac{4^{1 - x}}{4^{1 - x} + 2} = \\frac{\\frac{4}{4^x}}{\\frac{4}{4^x} + 2} = \\frac{\\frac{4}{4^x}}{\\frac{4 + 2 \\cdot 4^x}{4^x}} = \\frac{4}{2(2 + 4^x)} = \\frac{2}{4^x + 2}$$

Now add $f(x)$ and $f(1 - x)$:
$$f(x) + f(1 - x) = \\frac{4^x}{4^x + 2} + \\frac{2}{4^x + 2} = \\frac{4^x + 2}{4^x + 2} = 1$$

**Step 2: Pair terms in the given summation**
Let $S = \\sum_{r=1}^{1999} f\\left(\\frac{r}{2000}\\right)$.
There are 1999 terms in total.
Pair the $r$-th term with the $(2000 - r)$-th term:
$$f\\left(\\frac{r}{2000}\\right) + f\\left(\\frac{2000 - r}{2000}\\right) = f\\left(\\frac{r}{2000}\\right) + f\\left(1 - \\frac{r}{2000}\\right) = 1$$

**Step 3: Count the pairs**
- Writing the sum in reverse:
  $$S = f(1/2000) + f(2/2000) + \\dots + f(1999/2000)$$
  $$S = f(1999/2000) + f(1998/2000) + \\dots + f(1/2000)$$
  $$2S = 1999 \\times 1 = 1999$$
  $$S = \\frac{1999}{2}$$`,
    hints: [
      'Evaluate $f(1 - x)$ by replacing $x$ with $1 - x$ and simplify.',
      'Show that $f(x) + f(1 - x) = 1$.',
      'Pair the first and last terms: $\\frac{1}{2000} + \\frac{1999}{2000} = 1$.'
    ]
  },
  {
    id: 'math-rel-pyq-5',
    subject: 'mathematics',
    topicId: 'math-rel-3-composition-invertible',
    chapterId: 'math-c12-relations-functions',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `Let $f: [1, \\infty) \\to [2, \\infty)$ be defined by $f(x) = x + \\frac{1}{x}$. Then the inverse function $f^{-1}(x)$ is given by:`,
    options: [
      '$\\frac{x + \\sqrt{x^2 - 4}}{2}$',
      '$\\frac{x - \\sqrt{x^2 - 4}}{2}$',
      '$\\frac{x + \\sqrt{x^2 + 4}}{2}$',
      '$1 + \\sqrt{x^2 - 4}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Set $y = f(x)$ and solve for $x$ in terms of $y$**
Let $y = x + \\frac{1}{x}$ for $x \\ge 1$ and $y \\ge 2$.
Multiply both sides by $x$:
$$yx = x^2 + 1$$
$$x^2 - yx + 1 = 0$$

**Step 2: Solve the quadratic equation for $x$**
Using the quadratic formula:
$$x = \\frac{y \\pm \\sqrt{y^2 - 4(1)(1)}}{2} = \\frac{y \\pm \\sqrt{y^2 - 4}}{2}$$

**Step 3: Select the appropriate branch using the domain $x \\in [1, \\infty)$**
Since $x \\ge 1$:
Notice that for $y = 2$:
$$\\frac{2 \\pm \\sqrt{4 - 4}}{2} = 1$$
For $y > 2$:
$$\\frac{y - \\sqrt{y^2 - 4}}{2} < 1 \\quad \\text{and} \\quad \\frac{y + \\sqrt{y^2 - 4}}{2} > 1$$
Since the domain of $f$ is $[1, \\infty)$, we must choose the positive sign ($+$):
$$x = \\frac{y + \\sqrt{y^2 - 4}}{2}$$

**Step 4: Write the inverse function**
Interchanging variables:
$$f^{-1}(x) = \\frac{x + \\sqrt{x^2 - 4}}{2} \\quad \\text{for } x \\ge 2$$`,
    hints: [
      'Write $y = x + 1/x$ as a quadratic in $x$: $x^2 - yx + 1 = 0$.',
      'Solve for $x$ using the quadratic formula and choose the branch satisfying $x \\ge 1$.'
    ]
  },
  {
    id: 'math-rel-pyq-6',
    subject: 'mathematics',
    topicId: 'math-rel-1-types-equivalence',
    chapterId: 'math-c12-relations-functions',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `The total number of equivalence relations that can be defined on a set $A = \\{1, 2, 3\\}$ is:`,
    options: [
      '$5$',
      '$6$',
      '$8$',
      '$9$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Relate equivalence relations to partitions of a set**
By the Fundamental Theorem of Equivalence Relations, every equivalence relation on a set $A$ corresponds to a unique partition of $A$ into non-empty disjoint subsets (equivalence classes).
The total number of partitions of a set with $n$ elements is given by the **Bell number** $B_n$.

**Step 2: Enumerate all partitions of $A = \\{1, 2, 3\\}$**
- Partition of type $1 + 1 + 1$ (3 singleton blocks):
  $$\\{\\{1\\}, \\{2\\}, \\{3\\}\\} \\implies 1 \\text{ relation (the identity relation } I_A)$$
- Partition of type $2 + 1$ (one block of 2 elements, one block of 1 element):
  $$\\{\\{1, 2\\}, \\{3\\}\\}, \\; \\{\\{1, 3\\}, \\{2\\}\\}, \\; \\{\\{2, 3\\}, \\{1\\}\\} \\implies 3 \\text{ relations}$$
- Partition of type $3$ (all elements in a single block):
  $$\\{\\{1, 2, 3\\}\\} \\implies 1 \\text{ relation (the universal relation } A \\times A)$$

**Step 3: Sum all possible partitions**
$$\\text{Total equivalence relations} = 1 + 3 + 1 = 5$$
(This matches the Bell number $B_3 = 5$).`,
    hints: [
      'Recall that every equivalence relation corresponds to a partition of the set.',
      'The number of partitions of a 3-element set is given by the Bell number $B_3 = 5$.'
    ]
  }
];
