import { Question } from '@/types';

export const permutationsCombinationsQuestions: Question[] = [
  {
    id: 'math-pnc-pyq-1',
    subject: 'mathematics',
    topicId: 'math-pnc-2-combinations-grouping',
    chapterId: 'math-c11-permutations-combinations',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `The total number of four-digit numbers such that their digits are in strictly increasing order from left to right is:`,
    options: [
      '$126$',
      '$210$',
      '$84$',
      '$120$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the constraint of strictly increasing digits**
Let the four-digit number be $d_1 d_2 d_3 d_4$, where $1 \\le d_1 < d_2 < d_3 < d_4 \\le 9$.
Notice that:
- $0$ cannot be among the digits, because if $0$ were included, being the smallest digit it would have to be the first digit $d_1 = 0$, which would make it a 3-digit number, not a 4-digit number.
- Therefore, all four digits must be chosen from the set of non-zero digits $\\{1, 2, 3, 4, 5, 6, 7, 8, 9\\}$.

**Step 2: Relate selection to ordering**
For any choice of 4 distinct non-zero digits from the 9 available digits, there is **exactly one** way to arrange them in strictly increasing order.
For example, if the chosen digits are $\\{7, 2, 5, 9\\}$, the only valid number is $2579$.

**Step 3: Compute the number of combinations**
$$\\text{Total numbers} = \\binom{9}{4} = \\frac{9 \\times 8 \\times 7 \\times 6}{4 \\times 3 \\times 2 \\times 1} = \\frac{3024}{24} = 126$$`,
    hints: [
      'Can 0 be used in a strictly increasing four-digit number?',
      'Once 4 non-zero digits are chosen, in how many ways can they be arranged in strictly increasing order?'
    ]
  },
  {
    id: 'math-pnc-pyq-2',
    subject: 'mathematics',
    topicId: 'math-pnc-3-beggar-derangements',
    chapterId: 'math-c11-permutations-combinations',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `The total number of non-negative integer solutions $(x_1, x_2, x_3, x_4)$ of the equation $x_1 + x_2 + x_3 + x_4 = 10$ is:`,
    options: [
      '$286$',
      '$220$',
      '$715$',
      '$120$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Apply Beggar\'s Method for non-negative integers**
The number of non-negative integer solutions ($x_i \\ge 0$) to the equation:
$$x_1 + x_2 + \\dots + x_r = n$$
is given by:
$$\\binom{n + r - 1}{r - 1}$$

**Step 2: Substitute the given parameters**
Here, $n = 10$ and $r = 4$ variables:
$$\\text{Number of solutions} = \\binom{10 + 4 - 1}{4 - 1} = \\binom{13}{3}$$

**Step 3: Calculate the value of $\\binom{13}{3}$**
$$\\binom{13}{3} = \\frac{13 \\times 12 \\times 11}{3 \\times 2 \\times 1} = \\frac{13 \\times 12 \\times 11}{6} = 13 \\times 2 \\times 11 = 286$$`,
    hints: [
      'Use the standard stars-and-bars / beggar\'s formula $\\binom{n + r - 1}{r - 1}$.',
      'Here $n = 10$ and $r = 4$.'
    ]
  },
  {
    id: 'math-pnc-pyq-3',
    subject: 'mathematics',
    topicId: 'math-pnc-1-counting-arrangements',
    chapterId: 'math-c11-permutations-combinations',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `If all the letters of the word 'MOTHER' are arranged in all possible orders and the words are listed as in a dictionary, then the rank of the word 'MOTHER' is:`,
    options: [
      '$309$',
      '$308$',
      '$310$',
      '$305$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: List letters in alphabetical order**
The letters of 'MOTHER' (all 6 distinct) arranged alphabetically are:
$$E (1), \\; H (2), \\; M (3), \\; O (4), \\; R (5), \\; T (6)$$

**Step 2: Count words starting with letters alphabetically before 'M'**
- Words starting with $E$: $1 \\times 5! = 120$
- Words starting with $H$: $1 \\times 5! = 120$

**Step 3: Fix 'M', count words starting with letters before 'O'**
Available remaining: $\\{E, H, O, R, T\\}$
- Words starting with $ME$: $1 \\times 4! = 24$
- Words starting with $MH$: $1 \\times 4! = 24$

**Step 4: Fix 'MO', count words starting with letters before 'T'**
Available remaining: $\\{E, H, R, T\\}$
- Words starting with $MOE$: $1 \\times 3! = 6$
- Words starting with $MOH$: $1 \\times 3! = 6$
- Words starting with $MOR$: $1 \\times 3! = 6$

**Step 5: Fix 'MOT', count words starting with letters before 'H'**
Available remaining: $\\{E, H, R\\}$
- Words starting with $MOTE$: $1 \\times 2! = 2$

**Step 6: Fix 'MOTH'**
Available remaining: $\\{E, R\\}$
- The first word formed is $MOTHER$: $1$

**Step 7: Sum all preceding words and add 1**
$$\\text{Rank} = (120 + 120) + (24 + 24) + (6 + 6 + 6) + 2 + 1$$
$$\\text{Rank} = 240 + 48 + 18 + 3 = 309$$`,
    hints: [
      'Write the letters in alphabetical order: E, H, M, O, R, T.',
      'Systematically count how many 6-letter words can be formed that appear alphabetically before MOTHER.'
    ]
  },
  {
    id: 'math-pnc-pyq-4',
    subject: 'mathematics',
    topicId: 'math-pnc-2-combinations-grouping',
    chapterId: 'math-c11-permutations-combinations',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Main',
    year: 2022,
    text: `The total number of ways of distributing $8$ distinct books to $3$ distinct students such that each student receives at least one book is:`,
    options: [
      '$5796$',
      '$6561$',
      '$5670$',
      '$6048$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the Principle of Inclusion-Exclusion (Surjection formula)**
The problem asks for the number of surjective (onto) functions from a set of 8 distinct items to a set of 3 distinct recipients.
The formula for the number of onto functions from a set of $n$ elements to a set of $m$ elements is:
$$N = \\sum_{k=0}^m (-1)^k \\binom{m}{k} (m - k)^n$$

**Step 2: Substitute $n = 8$ and $m = 3$**
$$N = \\binom{3}{0} 3^8 - \\binom{3}{1} 2^8 + \\binom{3}{2} 1^8 - \\binom{3}{3} 0^8$$
$$N = 1 \\times 3^8 - 3 \\times 2^8 + 3 \\times 1^8 - 0$$

**Step 3: Evaluate each term**
- $3^8 = (3^4)^2 = 81^2 = 6561$
- $3 \\times 2^8 = 3 \\times 256 = 768$
- $3 \\times 1^8 = 3 \\times 1 = 3$

**Step 4: Compute the final sum**
$$N = 6561 - 768 + 3 = 5796$$`,
    hints: [
      'Total distributions without restriction is $3^8$.',
      'Use inclusion-exclusion: Total - (at least 1 student gets 0) + (at least 2 students get 0).'
    ]
  },
  {
    id: 'math-pnc-pyq-5',
    subject: 'mathematics',
    topicId: 'math-pnc-3-beggar-derangements',
    chapterId: 'math-c11-permutations-combinations',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `A person has $5$ letters and $5$ addressed envelopes. The number of ways in which exactly $2$ letters go into their corresponding correct envelopes is:`,
    options: [
      '$20$',
      '$10$',
      '$30$',
      '$40$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Select the 2 letters that go into the correct envelopes**
Out of the 5 letters, choose 2 letters to be placed in their correct envelopes:
$$\\text{Number of ways to choose} = \\binom{5}{2} = \\frac{5 \\times 4}{2} = 10$$

**Step 2: Derange the remaining 3 letters**
The remaining $5 - 2 = 3$ letters must all go into INCORRECT envelopes (a derangement of 3 items):
$$D_3 = 3! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!}\\right) = 6 \\left(0 + \\frac{1}{2} - \\frac{1}{6}\\right) = 6 \\left(\\frac{2}{6}\\right) = 2$$

**Step 3: Multiply the two independent steps**
$$\\text{Total ways} = \\binom{5}{2} \\times D_3 = 10 \\times 2 = 20$$`,
    hints: [
      'First choose which 2 letters go into the correct envelopes: $\\binom{5}{2}$.',
      'The remaining 3 letters must be deranged so none of them go into their correct envelope ($D_3$).'
    ]
  },
  {
    id: 'math-pnc-pyq-6',
    subject: 'mathematics',
    topicId: 'math-pnc-2-combinations-grouping',
    chapterId: 'math-c11-permutations-combinations',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `The number of ways of choosing $4$ vertices from a regular polygon of $12$ sides such that no two chosen vertices are consecutive on the polygon is:`,
    options: [
      '$105$',
      '$75$',
      '$60$',
      '$90$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Use the standard formula for non-consecutive elements in a circle**
The number of ways of selecting $k$ non-consecutive objects from $n$ objects arranged in a circle is:
$$N = \\frac{n}{n - k} \\binom{n - k}{k}$$

**Step 2: Substitute $n = 12$ and $k = 4$**
$$n - k = 12 - 4 = 8$$
$$N = \\frac{12}{8} \\binom{8}{4}$$

**Step 3: Evaluate $\\binom{8}{4}$ and calculate $N$**
$$\\binom{8}{4} = \\frac{8 \\times 7 \\times 6 \\times 5}{4 \\times 3 \\times 2 \\times 1} = 70$$
$$N = \\frac{12}{8} \\times 70 = \\frac{3}{2} \\times 70 = 105$$

**Alternative Verification (Row splitting):**
1. If vertex 1 is selected: vertices 2 and 12 cannot be chosen. Out of the remaining 9 vertices in a line ($3$ to $11$), we must choose 3 non-consecutive:
   $$\\binom{9 - 3 + 1}{3} = \\binom{7}{3} = 35$$
2. If vertex 1 is NOT selected: out of the remaining 11 vertices in a line ($2$ to $12$), we must choose 4 non-consecutive:
   $$\\binom{11 - 4 + 1}{4} = \\binom{8}{4} = 70$$
Total ways = $35 + 70 = 105$.`,
    hints: [
      'Divide into two mutually exclusive cases: (1) vertex 1 is chosen, and (2) vertex 1 is not chosen.',
      'Recall that choosing $k$ non-consecutive items from $m$ items in a row is given by $\\binom{m - k + 1}{k}$.'
    ]
  }
];
