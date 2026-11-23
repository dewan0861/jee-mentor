import { Question } from '@/types';

export const complexNumbersQuestions: Question[] = [
  {
    id: 'math-cplx-pyq-1',
    subject: 'mathematics',
    topicId: 'math-complex-2-triangle-inequality-geometry',
    chapterId: 'math-c11-complex-numbers',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `If a complex number $z$ satisfies $|z - (3 + 4i)| \\le 4$, then the maximum and minimum values of $|z|$ are respectively:`,
    options: [
      '$9$ and $1$',
      '$8$ and $2$',
      '$7$ and $1$',
      '$10$ and $2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Geometric interpretation in the Argand plane**
The inequality $|z - z_0| \\le r$ represents all points on and inside a circle with center $z_0 = 3 + 4i$ and radius $r = 4$.
The quantity $|z|$ represents the distance from the origin $(0, 0)$ to any point $z$ inside this circular disk.

**Step 2: Distance from the origin to the center**
$$|z_0| = |3 + 4i| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$$

**Step 3: Find the maximum and minimum distances**
By the triangle inequality:
- Maximum distance to a point in the disk:
  $$|z|_{\\text{max}} = |z_0| + r = 5 + 4 = 9$$
- Minimum distance to a point in the disk:
  $$|z|_{\\text{min}} = ||z_0| - r| = |5 - 4| = 1$$

Thus, the maximum and minimum values of $|z|$ are $9$ and $1$ respectively.`,
    hints: [
      'Represent the inequality $|z - z_0| \\le r$ as a closed circular disk centered at $z_0$ with radius $r$.',
      'The distance from the origin to any point in the disk has maximum $|z_0| + r$ and minimum $||z_0| - r|$.'
    ]
  },
  {
    id: 'math-cplx-pyq-2',
    subject: 'mathematics',
    topicId: 'math-complex-3-roots-unity-factorization',
    chapterId: 'math-c11-complex-numbers',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `Let $\\alpha$ and $\\beta$ be the roots of the equation $x^2 - x + 1 = 0$. Then the value of $\\alpha^{2023} + \\beta^{2023}$ is:`,
    options: [
      '$1$',
      '$-1$',
      '$2$',
      '$-2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify the roots of $x^2 - x + 1 = 0$**
Solve $x^2 - x + 1 = 0$ using the quadratic formula:
$$x = \\frac{1 \\pm \\sqrt{1 - 4}}{2} = \\frac{1 \\pm i\\sqrt{3}}{2}$$

Recall that the cube roots of unity are $\\omega = \\frac{-1 + i\\sqrt{3}}{2}$ and $\\omega^2 = \\frac{-1 - i\\sqrt{3}}{2}$.
Therefore:
$$\\alpha = -\\omega^2 = \\frac{1 + i\\sqrt{3}}{2} = e^{i\\pi/3}$$
$$\\beta = -\\omega = \\frac{1 - i\\sqrt{3}}{2} = e^{-i\\pi/3}$$

Also, note that $(x + 1)(x^2 - x + 1) = x^3 + 1 = 0 \\implies x^3 = -1$.
Hence:
$$\\alpha^3 = -1 \\quad \\text{and} \\quad \\beta^3 = -1$$

**Step 2: Reduce the powers using $\\alpha^3 = -1$**
Divide the exponent 2023 by 6:
$$2023 = 6 \\times 337 + 1 = 3 \\times 674 + 1$$
So:
$$\\alpha^{2023} = (\\alpha^3)^{674} \\cdot \\alpha = (-1)^{674} \\cdot \\alpha = 1 \\cdot \\alpha = \\alpha$$
$$\\beta^{2023} = (\\beta^3)^{674} \\cdot \\beta = (-1)^{674} \\cdot \\beta = 1 \\cdot \\beta = \\beta$$

**Step 3: Sum the results**
$$\\alpha^{2023} + \\beta^{2023} = \\alpha + \\beta$$
From the original quadratic equation $x^2 - x + 1 = 0$, the sum of roots is:
$$\\alpha + \\beta = -\\frac{-1}{1} = 1$$

Thus, $\\alpha^{2023} + \\beta^{2023} = 1$.`,
    hints: [
      'Multiply by $(x + 1)$ to obtain $x^3 + 1 = 0$, meaning $x^3 = -1$.',
      'Express 2023 as $3 \\times 674 + 1$ to reduce the high power to simply $\\alpha + \\beta$.'
    ]
  },
  {
    id: 'math-cplx-pyq-3',
    subject: 'mathematics',
    topicId: 'math-complex-2-triangle-inequality-geometry',
    chapterId: 'math-c11-complex-numbers',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `The locus of a complex number $z = x + iy$ satisfying the equation $|z - 1| = |z - i|$ represents:`,
    options: [
      'A straight line passing through the origin with slope $1$',
      'A circle with center $(1, 1)$',
      'A straight line passing through the origin with slope $-1$',
      'An ellipse with foci at $(1, 0)$ and $(0, 1)$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the geometric definition**
$|z - z_1| = |z - z_2|$ represents the perpendicular bisector of the line segment joining the points $z_1$ and $z_2$ in the complex plane.
Here, $z_1 = 1 + 0i = (1, 0)$ and $z_2 = 0 + 1i = (0, 1)$.

**Step 2: Algebraic verification**
Substitute $z = x + iy$:
$$|x + iy - 1| = |x + iy - i|$$
$$|(x - 1) + iy| = |x + i(y - 1)|$$
Squaring both sides:
$$(x - 1)^2 + y^2 = x^2 + (y - 1)^2$$
$$x^2 - 2x + 1 + y^2 = x^2 + y^2 - 2y + 1$$
$$-2x = -2y \\implies y = x$$

**Step 3: Analyze the equation $y = x$**
$y = x$ is a straight line that passes through the origin $(0, 0)$ and has slope $m = 1$.`,
    hints: [
      'Substitute $z = x + iy$ and square both sides.',
      'Geometrically, $|z - z_1| = |z - z_2|$ is the perpendicular bisector of the segment joining $z_1$ and $z_2$.'
    ]
  },
  {
    id: 'math-cplx-pyq-4',
    subject: 'mathematics',
    topicId: 'math-complex-1-algebra-mod-arg',
    chapterId: 'math-c11-complex-numbers',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2022,
    text: `The least positive integer $n$ for which $\\left(\\frac{1 + i}{1 - i}\\right)^n = 1$ is:`,
    options: [
      '$4$',
      '$2$',
      '$8$',
      '$1$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Simplify the base $\\frac{1 + i}{1 - i}$**
Multiply numerator and denominator by the conjugate of the denominator $(1 + i)$:
$$\\frac{1 + i}{1 - i} = \\frac{(1 + i)(1 + i)}{(1 - i)(1 + i)} = \\frac{(1 + i)^2}{1 - i^2} = \\frac{1 + 2i + i^2}{1 - (-1)}$$
Since $i^2 = -1$:
$$\\frac{1 + 2i - 1}{2} = \\frac{2i}{2} = i$$

**Step 2: Solve $i^n = 1$**
We require $i^n = 1$.
The powers of $i$ are cyclic with period 4:
- $i^1 = i$
- $i^2 = -1$
- $i^3 = -i$
- $i^4 = 1$

Therefore, the least positive integer is $n = 4$.`,
    hints: [
      'Multiply by $(1 + i) / (1 + i)$ to simplify $(1 + i) / (1 - i)$ into standard $a + ib$ form.',
      'Recall the cyclic powers of the imaginary unit $i$.'
    ]
  },
  {
    id: 'math-cplx-pyq-5',
    subject: 'mathematics',
    topicId: 'math-complex-2-triangle-inequality-geometry',
    chapterId: 'math-c11-complex-numbers',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Main',
    year: 2021,
    text: `If $|z| = 1$ and $z \\ne \\pm 1$, then all the points representing the complex number $w = \\frac{z}{1 - z^2}$ lie on:`,
    options: [
      'The imaginary axis (purely imaginary)',
      'The real axis (purely real)',
      'A circle of radius $1$',
      'The line $y = x$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Test the purely imaginary condition**
A complex number $w$ is purely imaginary if and only if $\\bar{w} = -w$.

**Step 2: Compute the complex conjugate of $w$**
Given $w = \\frac{z}{1 - z^2}$ and $|z| = 1$, which implies $|z|^2 = z\\bar{z} = 1 \\implies \\bar{z} = \\frac{1}{z}$.
$$\\bar{w} = \\frac{\\bar{z}}{1 - \\bar{z}^2}$$
Substitute $\\bar{z} = \\frac{1}{z}$:
$$\\bar{w} = \\frac{\\frac{1}{z}}{1 - \\left(\\frac{1}{z}\\right)^2} = \\frac{\\frac{1}{z}}{\\frac{z^2 - 1}{z^2}} = \\frac{1}{z} \\times \\frac{z^2}{z^2 - 1} = \\frac{z}{z^2 - 1} = -\\frac{z}{1 - z^2} = -w$$

**Step 3: Conclusion**
Since $\\bar{w} = -w$ and $z \\ne \\pm 1$, the real part of $w$ is zero: $\\text{Re}(w) = 0$.
Therefore, $w$ is purely imaginary, which means all points lie on the **imaginary axis**.`,
    hints: [
      'Recall the condition for a complex number to be purely imaginary: $\\bar{w} = -w$.',
      'Use the fact that $|z| = 1 \\implies \\bar{z} = 1/z$.'
    ]
  },
  {
    id: 'math-cplx-pyq-6',
    subject: 'mathematics',
    topicId: 'math-complex-2-triangle-inequality-geometry',
    chapterId: 'math-c11-complex-numbers',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `If a complex number $z$ satisfies $\\left|z - \\frac{4}{z}\\right| = 2$, then the maximum value of $|z|$ is:`,
    options: [
      '$\\sqrt{5} + 1$',
      '$\\sqrt{5} - 1$',
      '$2$',
      '$\\sqrt{5}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Apply the triangle inequality**
We want to bound $|z|$.
Notice that:
$$|z| = \\left|\\left(z - \\frac{4}{z}\\right) + \\frac{4}{z}\\right| \\le \\left|z - \\frac{4}{z}\\right| + \\left|\\frac{4}{z}\\right|$$

Given $\\left|z - \\frac{4}{z}\\right| = 2$ and $\\left|\\frac{4}{z}\\right| = \\frac{4}{|z|}$:
$$|z| \\le 2 + \\frac{4}{|z|}$$

**Step 2: Solve the inequality for $|z|$**
Let $r = |z| > 0$:
$$r \\le 2 + \\frac{4}{r}$$
Multiply both sides by $r > 0$:
$$r^2 \\le 2r + 4$$
$$r^2 - 2r - 4 \\le 0$$

Find the roots of the corresponding equation $r^2 - 2r - 4 = 0$:
$$r = \\frac{2 \\pm \\sqrt{4 - 4(1)(-4)}}{2} = \\frac{2 \\pm \\sqrt{20}}{2} = 1 \\pm \\sqrt{5}$$

Thus:
$$(r - (1 - \\sqrt{5}))(r - (1 + \\sqrt{5})) \\le 0$$
Since $r = |z| > 0$:
$$0 < r \\le \\sqrt{5} + 1$$

Therefore, the maximum value of $|z|$ is $\\sqrt{5} + 1$.`,
    hints: [
      'Write $|z| = |(z - 4/z) + 4/z|$ and apply the triangle inequality $|a + b| \\le |a| + |b|$.',
      'Solve the resulting quadratic inequality in $r = |z|$.'
    ]
  }
];
