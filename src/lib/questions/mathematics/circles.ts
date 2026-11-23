import { Question } from '@/types';

export const circlesQuestions: Question[] = [
  {
    id: 'math-circ-pyq-1',
    subject: 'mathematics',
    topicId: 'math-circle-3-common-tangents-orthogonal',
    chapterId: 'math-c11-circles',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `The total number of common tangents to the two circles $C_1: x^2 + y^2 - 4x - 6y - 12 = 0$ and $C_2: x^2 + y^2 + 6x + 18y + 26 = 0$ is:`,
    options: [
      '$3$',
      '$4$',
      '$2$',
      '$1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Find the center and radius of Circle $C_1$**
$$x^2 + y^2 - 4x - 6y - 12 = 0$$
- Center $C_1 = (-g_1, -f_1) = (2, 3)$
- Radius $r_1 = \\sqrt{g_1^2 + f_1^2 - c_1} = \\sqrt{(-2)^2 + (-3)^2 - (-12)} = \\sqrt{4 + 9 + 12} = \\sqrt{25} = 5$

**Step 2: Find the center and radius of Circle $C_2$**
$$x^2 + y^2 + 6x + 18y + 26 = 0$$
- Center $C_2 = (-g_2, -f_2) = (-3, -9)$
- Radius $r_2 = \\sqrt{g_2^2 + f_2^2 - c_2} = \\sqrt{3^2 + 9^2 - 26} = \\sqrt{9 + 81 - 26} = \\sqrt{64} = 8$

**Step 3: Calculate the distance between centers $C_1 C_2$**
$$C_1 C_2 = \\sqrt{(-3 - 2)^2 + (-9 - 3)^2} = \\sqrt{(-5)^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$

**Step 4: Compare $C_1 C_2$ with $r_1 + r_2$**
$$r_1 + r_2 = 5 + 8 = 13$$
Since $C_1 C_2 = r_1 + r_2$, the two circles touch each other **externally**.

Two circles that touch externally have exactly **3 common tangents** (2 direct common tangents and 1 transverse common tangent at the point of contact).`,
    hints: [
      'Find the centers and radii of both circles.',
      'Compute the distance between the two centers and compare it to $r_1 + r_2$.',
      'When $C_1C_2 = r_1 + r_2$, the circles touch externally and have 3 common tangents.'
    ]
  },
  {
    id: 'math-circ-pyq-2',
    subject: 'mathematics',
    topicId: 'math-circle-3-common-tangents-orthogonal',
    chapterId: 'math-c11-circles',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `If the circles $x^2 + y^2 - 2x - 4y + c = 0$ and $x^2 + y^2 - 8x + 2y + 7 = 0$ intersect orthogonally, then the value of $c$ is:`,
    options: [
      '$-3$',
      '$3$',
      '$5$',
      '$-5$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify the coefficients of both circles**
For Circle 1: $x^2 + y^2 - 2x - 4y + c = 0$
$$g_1 = -1, \\quad f_1 = -2, \\quad c_1 = c$$

For Circle 2: $x^2 + y^2 - 8x + 2y + 7 = 0$
$$g_2 = -4, \\quad f_2 = 1, \\quad c_2 = 7$$

**Step 2: Apply the condition for orthogonality**
Two circles cut orthogonally if and only if:
$$2g_1 g_2 + 2f_1 f_2 = c_1 + c_2$$

**Step 3: Solve for $c$**
$$2(-1)(-4) + 2(-2)(1) = c + 7$$
$$2(4) - 4 = c + 7$$
$$8 - 4 = c + 7$$
$$4 = c + 7 \\implies c = -3$$

Check radii: $r_1^2 = 1 + 4 - (-3) = 8 > 0$ and $r_2^2 = 16 + 1 - 7 = 10 > 0$, both representing valid real circles.`,
    hints: [
      'Recall the condition for orthogonality: $2g_1 g_2 + 2f_1 f_2 = c_1 + c_2$.',
      'Identify $g_1 = -1, f_1 = -2, c_1 = c$ and $g_2 = -4, f_2 = 1, c_2 = 7$.'
    ]
  },
  {
    id: 'math-circ-pyq-3',
    subject: 'mathematics',
    topicId: 'math-circle-2-chords-director-power',
    chapterId: 'math-c11-circles',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `The length of the chord of the circle $x^2 + y^2 = 25$ whose midpoint is $M(2, -1)$ is:`,
    options: [
      '$4\\sqrt{5}$',
      '$2\\sqrt{5}$',
      '$2\\sqrt{21}$',
      '$4\\sqrt{21}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Distance from the center of the circle to the midpoint**
For the circle $x^2 + y^2 = 25$:
- Center $O = (0, 0)$
- Radius $R = 5$

The distance $d$ from the center $(0, 0)$ to the midpoint $M(2, -1)$ of the chord is perpendicular to the chord:
$$d = OM = \\sqrt{(2 - 0)^2 + (-1 - 0)^2} = \\sqrt{4 + 1} = \\sqrt{5}$$

**Step 2: Calculate the length of the chord**
In the right triangle formed by the radius $R$, the perpendicular distance $d$, and half the chord length $L/2$:
$$\\left(\\frac{L}{2}\\right)^2 + d^2 = R^2$$
$$\\left(\\frac{L}{2}\\right)^2 = R^2 - d^2 = 5^2 - (\\sqrt{5})^2 = 25 - 5 = 20$$
$$\\frac{L}{2} = \\sqrt{20} = 2\\sqrt{5}$$

**Step 3: Compute the total length $L$**
$$L = 2 \\times 2\\sqrt{5} = 4\\sqrt{5}$$`,
    hints: [
      'The line segment from the center to the midpoint of any chord is perpendicular to the chord.',
      'Use Pythagoras theorem: $(L/2)^2 = R^2 - d^2$.'
    ]
  },
  {
    id: 'math-circ-pyq-4',
    subject: 'mathematics',
    topicId: 'math-circle-1-standards-tangents',
    chapterId: 'math-c11-circles',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `If the line $3x + 4y = c$ is a tangent to the circle $x^2 + y^2 - 2x - 4y + 1 = 0$, then the values of $c$ are:`,
    options: [
      '$1$ and $21$',
      '$-1$ and $21$',
      '$11$ and $-9$',
      '$5$ and $25$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Find the center and radius of the circle**
Equation: $x^2 + y^2 - 2x - 4y + 1 = 0$
- Center $C = (1, 2)$
- Radius $r = \\sqrt{1^2 + 2^2 - 1} = \\sqrt{1 + 4 - 1} = \\sqrt{4} = 2$

**Step 2: Condition of tangency**
A straight line is tangent to a circle if and only if the perpendicular distance from the center to the line equals the radius $r$:
$$d = \\frac{|3(1) + 4(2) - c|}{\\sqrt{3^2 + 4^2}} = r$$
$$\\frac{|3 + 8 - c|}{\\sqrt{9 + 16}} = 2$$
$$\\frac{|11 - c|}{5} = 2 \\implies |11 - c| = 10$$

**Step 3: Solve for $c$**
- Case 1: $11 - c = 10 \\implies c = 1$
- Case 2: $11 - c = -10 \\implies c = 21$

Thus, the possible values of $c$ are $1$ and $21$.`,
    hints: [
      'Find the center $(1, 2)$ and radius $r = 2$ of the circle.',
      'Set the perpendicular distance from the center to $3x + 4y - c = 0$ equal to the radius: $\\frac{|11 - c|}{5} = 2$.'
    ]
  },
  {
    id: 'math-circ-pyq-5',
    subject: 'mathematics',
    topicId: 'math-circle-2-chords-director-power',
    chapterId: 'math-c11-circles',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `The equation of the director circle of the circle $x^2 + y^2 - 4x + 6y - 3 = 0$ is:`,
    options: [
      '$x^2 + y^2 - 4x + 6y - 19 = 0$',
      '$x^2 + y^2 - 4x + 6y + 13 = 0$',
      '$x^2 + y^2 - 4x + 6y - 6 = 0$',
      '$x^2 + y^2 - 4x + 6y - 35 = 0$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Find the center and radius of the given circle**
Equation: $x^2 + y^2 - 4x + 6y - 3 = 0$
$$(x - 2)^2 + (y + 3)^2 = 3 + 2^2 + (-3)^2 = 3 + 4 + 9 = 16$$
- Center $C = (2, -3)$
- Radius $r = \\sqrt{16} = 4$

**Step 2: Understand the director circle**
The director circle is the locus of the point of intersection of two mutually perpendicular tangents to the circle.
It is concentric with the given circle and its radius is $R = \\sqrt{2} r$.
Here:
$$R^2 = 2 r^2 = 2 \\times 16 = 32$$

**Step 3: Write the equation of the director circle**
$$(x - 2)^2 + (y + 3)^2 = 32$$
$$x^2 - 4x + 4 + y^2 + 6y + 9 = 32$$
$$x^2 + y^2 - 4x + 6y + 13 - 32 = 0$$
$$x^2 + y^2 - 4x + 6y - 19 = 0$$`,
    hints: [
      'The director circle is concentric with the original circle.',
      'The radius of the director circle is $\\sqrt{2}$ times the radius of the given circle: $R^2 = 2r^2$.'
    ]
  },
  {
    id: 'math-circ-pyq-6',
    subject: 'mathematics',
    topicId: 'math-circle-2-chords-director-power',
    chapterId: 'math-c11-circles',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `Tangents are drawn from the point $P(4, 3)$ to the circle $x^2 + y^2 = 9$. The area of the triangle formed by the pair of tangents and their chord of contact is:`,
    options: [
      '$\\frac{192}{25}$',
      '$\\frac{96}{25}$',
      '$\\frac{144}{25}$',
      '$\\frac{48}{5}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Find the radius $r$ and tangent length $L$**
For the circle $x^2 + y^2 = 9$:
- Center $O = (0, 0)$
- Radius $r = 3$
Point $P(x_1, y_1) = (4, 3)$.
The length of the tangent $L$ from $P$ is:
$$L = \\sqrt{S_1} = \\sqrt{4^2 + 3^2 - 9} = \\sqrt{16 + 9 - 9} = \\sqrt{16} = 4$$

**Step 2: Use the standard area formula for tangent triangle**
The area of the triangle formed by the pair of tangents from an external point and their chord of contact is given by:
$$\\Delta = \\frac{r L^3}{r^2 + L^2}$$

**Step 3: Substitute $r = 3$ and $L = 4$**
$$\\Delta = \\frac{3 \\times (4)^3}{3^2 + 4^2} = \\frac{3 \\times 64}{9 + 16} = \\frac{192}{25}$$

Thus, the area of the triangle is $\\frac{192}{25}$.`,
    hints: [
      'Calculate the length of the tangent $L = \\sqrt{S_1} = \\sqrt{4^2 + 3^2 - 9} = 4$.',
      'Use the standard formula for the area of the triangle formed by tangents and chord of contact: $\\Delta = \\frac{r L^3}{r^2 + L^2}$.'
    ]
  }
];
