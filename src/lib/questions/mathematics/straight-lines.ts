import { Question } from '@/types';

export const straightLinesQuestions: Question[] = [
  {
    id: 'math-line-pyq-1',
    subject: 'mathematics',
    topicId: 'math-line-2-distance-foot-image',
    chapterId: 'math-c11-straight-lines',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `The image (reflection) of the point $P(3, 5)$ with respect to the line $x - y + 1 = 0$ is:`,
    options: [
      '$(4, 4)$',
      '$(5, 3)$',
      '$(2, 6)$',
      '$(3, 4)$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the standard image formula**
For a point $(x_1, y_1)$ and a line $ax + by + c = 0$, the coordinates of the image $(x, y)$ satisfy:
$$\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = -2 \\frac{a x_1 + b y_1 + c}{a^2 + b^2}$$

**Step 2: Identify parameters**
- Point $(x_1, y_1) = (3, 5)$
- Line: $1x + (-1)y + 1 = 0 \\implies a = 1, \\; b = -1, \\; c = 1$

**Step 3: Calculate the common ratio**
$$-2 \\frac{a x_1 + b y_1 + c}{a^2 + b^2} = -2 \\frac{1(3) + (-1)(5) + 1}{1^2 + (-1)^2} = -2 \\frac{3 - 5 + 1}{1 + 1} = -2 \\frac{-1}{2} = 1$$

**Step 4: Solve for $x$ and $y$**
$$\\frac{x - 3}{1} = 1 \\implies x = 3 + 1 = 4$$
$$\\frac{y - 5}{-1} = 1 \\implies y = 5 - 1 = 4$$

Thus, the image is the point $(4, 4)$.`,
    hints: [
      'Apply the reflection formula: $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = -2 \\frac{a x_1 + b y_1 + c}{a^2 + b^2}$.',
      'Plug in $x_1 = 3, y_1 = 5, a = 1, b = -1, c = 1$.'
    ]
  },
  {
    id: 'math-line-pyq-2',
    subject: 'mathematics',
    topicId: 'math-line-2-distance-foot-image',
    chapterId: 'math-c11-straight-lines',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `The perpendicular distance between the parallel lines $2x + 3y = 7$ and $4x + 6y = 5$ is:`,
    options: [
      '$\\frac{9}{2\\sqrt{13}}$',
      '$\\frac{2}{\\sqrt{13}}$',
      '$\\frac{9}{\\sqrt{13}}$',
      '$\\frac{1}{2\\sqrt{13}}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write both equations with identical coefficients of $x$ and $y$**
Line 1: $2x + 3y - 7 = 0$
Multiply Line 1 by 2:
$$4x + 6y - 14 = 0$$

Line 2:
$$4x + 6y - 5 = 0$$

Now both lines are in the standard form $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$ with:
$$A = 4, \\quad B = 6, \\quad C_1 = -14, \\quad C_2 = -5$$

**Step 2: Apply the distance formula between parallel lines**
$$d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$$
$$d = \\frac{|-14 - (-5)|}{\\sqrt{4^2 + 6^2}} = \\frac{|-9|}{\\sqrt{16 + 36}} = \\frac{9}{\\sqrt{52}} = \\frac{9}{2\\sqrt{13}}$$`,
    hints: [
      'Ensure the coefficients of $x$ and $y$ are identical before applying the formula.',
      'Recall $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$ with $\\sqrt{52} = 2\\sqrt{13}$.'
    ]
  },
  {
    id: 'math-line-pyq-3',
    subject: 'mathematics',
    topicId: 'math-line-1-forms-slopes-angles',
    chapterId: 'math-c11-straight-lines',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `If the lines $x - y + 1 = 0$, $2x - y - 1 = 0$, and $3x - ky + 1 = 0$ are concurrent, then the value of $k$ is:`,
    options: [
      '$\\frac{7}{3}$',
      '$\\frac{5}{3}$',
      '$2$',
      '$3$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Find the point of intersection of the first two lines**
Equation 1: $x - y + 1 = 0 \\implies y = x + 1$
Equation 2: $2x - y - 1 = 0$

Substitute $y = x + 1$ into Equation 2:
$$2x - (x + 1) - 1 = 0$$
$$x - 2 = 0 \\implies x = 2$$
Then:
$$y = 2 + 1 = 3$$
So the common point of intersection is $(2, 3)$.

**Step 2: Substitute $(2, 3)$ into the third line**
Since the three lines are concurrent, $(2, 3)$ must satisfy the third line $3x - ky + 1 = 0$:
$$3(2) - k(3) + 1 = 0$$
$$6 - 3k + 1 = 0$$
$$7 - 3k = 0 \\implies 3k = 7 \\implies k = \\frac{7}{3}$$`,
    hints: [
      'Find the intersection point of the first two lines by solving them simultaneously.',
      'Substitute that intersection point into the third line to solve for $k$.'
    ]
  },
  {
    id: 'math-line-pyq-4',
    subject: 'mathematics',
    topicId: 'math-line-2-distance-foot-image',
    chapterId: 'math-c11-straight-lines',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The foot of the perpendicular drawn from the point $P(2, 3)$ to the line $x + y - 1 = 0$ is:`,
    options: [
      '$(0, 1)$',
      '$(1, 0)$',
      '$(-\\frac{1}{2}, \\frac{3}{2})$',
      '$(1, 1)$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the foot of perpendicular formula**
$$\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = -\\frac{a x_1 + b y_1 + c}{a^2 + b^2}$$

**Step 2: Substitute the coordinates and coefficients**
- Point $(x_1, y_1) = (2, 3)$
- Line $1x + 1y - 1 = 0 \\implies a = 1, b = 1, c = -1$

$$-\\frac{a x_1 + b y_1 + c}{a^2 + b^2} = -\\frac{1(2) + 1(3) - 1}{1^2 + 1^2} = -\\frac{4}{2} = -2$$

**Step 3: Solve for $(x, y)$**
$$\\frac{x - 2}{1} = -2 \\implies x = 2 - 2 = 0$$
$$\\frac{y - 3}{1} = -2 \\implies y = 3 - 2 = 1$$

Thus, the foot of the perpendicular is $(0, 1)$.`,
    hints: [
      'Use $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = -\\frac{a x_1 + b y_1 + c}{a^2 + b^2}$.',
      'Evaluate with $x_1 = 2, y_1 = 3, a = 1, b = 1, c = -1$.'
    ]
  },
  {
    id: 'math-line-pyq-5',
    subject: 'mathematics',
    topicId: 'math-line-1-forms-slopes-angles',
    chapterId: 'math-c11-straight-lines',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `A straight line passes through the point $P(4, 3)$ and forms a triangle with the positive coordinate axes whose area is minimum. The equation of this straight line is:`,
    options: [
      '$3x + 4y = 24$',
      '$4x + 3y = 24$',
      '$3x + 4y = 12$',
      '$x + y = 7$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write equation of line in intercept form**
Let the intercepts on the axes be $a > 0$ and $b > 0$:
$$\\frac{x}{a} + \\frac{y}{b} = 1$$

Since the line passes through $P(4, 3)$:
$$\\frac{4}{a} + \\frac{3}{b} = 1$$

**Step 2: Express the area of the triangle and apply AM-GM inequality**
Area of the triangle in the first quadrant is:
$$\\Delta = \\frac{1}{2} ab$$
By the AM-GM inequality on the two positive numbers $\\frac{4}{a}$ and $\\frac{3}{b}$:
$$\\frac{\\frac{4}{a} + \\frac{3}{b}}{2} \\ge \\sqrt{\\frac{4}{a} \\cdot \\frac{3}{b}}$$
$$\\frac{1}{2} \\ge \\sqrt{\\frac{12}{ab}}$$
Squaring both sides:
$$\\frac{1}{4} \\ge \\frac{12}{ab} \\implies ab \\ge 48$$

Therefore, the minimum area is:
$$\\Delta_{\\text{min}} = \\frac{1}{2}(48) = 24$$

**Step 3: Find $a$ and $b$ at equality**
Equality holds when both terms are equal:
$$\\frac{4}{a} = \\frac{3}{b} = \\frac{1}{2}$$
$$a = 8, \\quad b = 6$$

**Step 4: Write the equation of the line**
$$\\frac{x}{8} + \\frac{y}{6} = 1$$
Multiply by 24:
$$3x + 4y = 24$$`,
    hints: [
      'Write the line as $x/a + y/b = 1$, where $4/a + 3/b = 1$.',
      'Apply the AM-GM inequality to $\\frac{4}{a}$ and $\\frac{3}{b}$ to minimize $\\frac{1}{2}ab$.'
    ]
  },
  {
    id: 'math-line-pyq-6',
    subject: 'mathematics',
    topicId: 'math-line-3-family-centers-bisectors',
    chapterId: 'math-c11-straight-lines',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `The orthocenter of the triangle formed by the lines $x = 0$, $y = 0$, and $3x + 4y = 12$ is:`,
    options: [
      '$(0, 0)$',
      '$(1, 1)$',
      '$\\left(\\frac{4}{3}, 1\\right)$',
      '$\\left(1, \\frac{3}{4}\\right)$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify the nature of the triangle**
The given sides of the triangle are:
- $L_1: x = 0$ (the y-axis)
- $L_2: y = 0$ (the x-axis)
- $L_3: 3x + 4y = 12$

The lines $x = 0$ and $y = 0$ are perpendicular to each other ($x$-axis $\\perp y$-axis), forming a right angle at their vertex of intersection $(0, 0)$.

**Step 2: Use the geometric property of right-angled triangles**
In any right-angled triangle, the **orthocenter** (point of concurrency of altitudes) is always situated exactly at the vertex containing the **right angle**!

Since the right angle is at the origin $(0, 0)$, the orthocenter is precisely $(0, 0)$.`,
    hints: [
      'Look at the lines $x = 0$ and $y = 0$. What is the angle between them?',
      'Recall where the orthocenter lies in a right-angled triangle.'
    ]
  }
];
