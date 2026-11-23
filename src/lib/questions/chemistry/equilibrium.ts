import { Question } from '@/types';

export const chemicalEquilibriumQuestions: Question[] = [
  {
    id: 'chem-eq-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-eq-5-buffer-solutions',
    chapterId: 'chem-c11-equilibrium',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `What is the $\\text{pH}$ of a buffer solution prepared by mixing $50.0\\,\\text{mL}$ of $0.20\\,\\text{M } \\text{CH}_3\\text{COOH}$ with $50.0\\,\\text{mL}$ of $0.10\\,\\text{M } \\text{NaOH}$? (Given: $\\text{p}K_a \\text{ of } \\text{CH}_3\\text{COOH} = 4.74$)`,
    options: [
      '$4.74$',
      '$5.04$',
      '$4.44$',
      '$7.00$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Calculate millimoles of reactants**
- Millimoles of $\\text{CH}_3\\text{COOH} = M \\times V = 0.20\\,\\text{M} \\times 50.0\\,\\text{mL} = 10.0\\,\\text{mmol}$
- Millimoles of $\\text{NaOH} = M \\times V = 0.10\\,\\text{M} \\times 50.0\\,\\text{mL} = 5.0\\,\\text{mmol}$

**Step 2: Neutralization reaction**
$$\\text{CH}_3\\text{COOH} + \\text{NaOH} \\longrightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}$$
- Initial: $10.0\\,\\text{mmol}$ acid, $5.0\\,\\text{mmol}$ base, $0\\,\\text{mmol}$ salt
- Reacted: $5.0\\,\\text{mmol}$ acid reacts with all $5.0\\,\\text{mmol}$ of limiting $\\text{NaOH}$
- Remaining at equilibrium:
  - Unreacted $\\text{CH}_3\\text{COOH} = 10.0 - 5.0 = 5.0\\,\\text{mmol}$
  - Formed salt $\\text{CH}_3\\text{COONa} = 5.0\\,\\text{mmol}$

**Step 3: Apply Henderson-Hasselbalch equation**
$$\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right)$$
Since total volume ($100.0\\,\\text{mL}$) is common to both species:
$$\\frac{[\\text{Salt}]}{[\\text{Acid}]} = \\frac{5.0\\,\\text{mmol}}{5.0\\,\\text{mmol}} = 1.0$$
$$\\text{pH} = \\text{p}K_a + \\log_{10}(1.0) = 4.74 + 0 = 4.74$$

This represents the maximum buffer capacity point of the acetate buffer.

Hence, the $\\text{pH}$ of the buffer is $4.74$.`,
    hints: [
      'Write the neutralization reaction: $\\text{NaOH}$ neutralizes half of the $\\text{CH}_3\\text{COOH}$.',
      'When $[\text{Salt}] = [\text{Acid}]$, $\\log(\\text{Salt}/\\text{Acid}) = 0$, so $\\text{pH} = \\text{p}K_a$.'
    ]
  },
  {
    id: 'chem-eq-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-eq-1-chemical-kp-kc',
    chapterId: 'chem-c11-equilibrium',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `For the gas phase dissociation reaction at $250^\\circ\\text{C}$ ($523.15\\,\\text{K}$):
$$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$$
If $K_c = 0.040\\,\\text{mol/L}$, the value of the equilibrium constant $K_p$ in $\\text{bar}$ is approximately ($R = 0.08314\\,\\text{bar}\\cdot\\text{L}/(\\text{mol}\\cdot\\text{K})$):`,
    options: [
      '$1.74\\,\\text{bar}$',
      '$0.87\\,\\text{bar}$',
      '$0.04\\,\\text{bar}$',
      '$3.48\\,\\text{bar}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula relating $K_p$ and $K_c$**
$$K_p = K_c (RT)^{\\Delta n_g}$$

**Step 2: Calculate $\\Delta n_g$**
In the balanced equation:
$$\\Delta n_g = n_g(\\text{PCl}_3) + n_g(\\text{Cl}_2) - n_g(\\text{PCl}_5) = 1 + 1 - 1 = 1$$

**Step 3: Substitute given parameters**
- $K_c = 0.040\\,\\text{mol/L}$
- $R = 0.08314\\,\\text{bar}\\cdot\\text{L}/(\\text{mol}\\cdot\\text{K})$
- $T = 250^\\circ\\text{C} = 250 + 273.15 = 523.15\\,\\text{K}$

$$K_p = 0.040 \\times (0.08314 \\times 523.15)^1$$
$$R T = 0.08314 \\times 523.15 = 43.495\\,\\text{bar}\\cdot\\text{L/mol}$$
$$K_p = 0.040 \\times 43.495 \\approx 1.7398\\,\\text{bar} \\approx 1.74\\,\\text{bar}$$

Hence, $K_p = 1.74\\,\\text{bar}$.`,
    hints: [
      'Use $K_p = K_c (RT)^{\\Delta n_g}$.',
      'Here $\\Delta n_g = 2 - 1 = 1$. Convert temperature to Kelvin: $T = 523.15\\,\\text{K}$.'
    ]
  },
  {
    id: 'chem-eq-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-eq-6-solubility-ksp-precipitation',
    chapterId: 'chem-c11-equilibrium',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2022,
    text: `The solubility product $K_{sp}$ of a sparingly soluble metallic hydroxide $M(\\text{OH})_2$ is $4.0 \\times 10^{-12}$ at $298\\,\\text{K}$. The $\\text{pH}$ of a saturated aqueous solution of $M(\\text{OH})_2$ is approximately (take $\\log_{10} 2 = 0.301$):`,
    options: [
      '$10.30$',
      '$3.70$',
      '$9.70$',
      '$11.30$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Dissociation equation and solubility product expression**
Let the molar solubility of $M(\\text{OH})_2$ in pure water be $s\\,\\text{mol/L}$:
$$M(\\text{OH})_2(s) \\rightleftharpoons M^{2+}(aq) + 2\\text{OH}^-(aq)$$
At equilibrium:
$$[M^{2+}] = s, \\quad [\\text{OH}^-] = 2s$$
$$K_{sp} = [M^{2+}][\\text{OH}^-]^2 = (s)(2s)^2 = 4s^3$$

**Step 2: Solve for solubility $s$**
$$4s^3 = 4.0 \\times 10^{-12}$$
$$s^3 = 1.0 \\times 10^{-12} \\implies s = (10^{-12})^{1/3} = 1.0 \\times 10^{-4}\\,\\text{mol/L}$$

**Step 3: Calculate hydroxide ion concentration and $\\text{pOH}$**
$$[\\text{OH}^-] = 2s = 2 \\times 1.0 \\times 10^{-4} = 2.0 \\times 10^{-4}\\,\\text{mol/L}$$
$$\\text{pOH} = -\\log_{10}[\\text{OH}^-] = -\\log_{10}(2.0 \\times 10^{-4}) = 4 - \\log_{10}(2) = 4 - 0.301 = 3.699 \\approx 3.70$$

**Step 4: Calculate $\\text{pH}$**
$$\\text{pH} = 14.00 - \\text{pOH} = 14.00 - 3.70 = 10.30$$

Hence, the $\\text{pH}$ of the saturated solution is $10.30$.`,
    hints: [
      'For $M(\\text{OH})_2$, $K_{sp} = 4s^3$. Solve for $s = 10^{-4}\\,\\text{M}$.',
      'Hydroxide concentration is $[\\text{OH}^-] = 2s = 2 \\times 10^{-4}\\,\\text{M}$. Then $\\text{pH} = 14 - \\text{pOH}$.'
    ]
  },
  {
    id: 'chem-eq-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-eq-4-salt-hydrolysis',
    chapterId: 'chem-c11-equilibrium',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: `Calculate the degree of hydrolysis ($h$) and the $\\text{pH}$ of a $0.10\\,\\text{M}$ aqueous solution of Sodium Acetate ($\\text{CH}_3\\text{COONa}$) at $298\\,\\text{K}$. (Given: $K_w = 1.0 \\times 10^{-14}, \\; K_a(\\text{CH}_3\\text{COOH}) = 1.8 \\times 10^{-5}, \\; \\log_{10}(1.8) = 0.255$):`,
    options: [
      '$h = 7.45 \\times 10^{-5}, \\; \\text{pH} = 8.87$',
      '$h = 1.80 \\times 10^{-4}, \\; \\text{pH} = 9.25$',
      '$h = 7.45 \\times 10^{-5}, \\; \\text{pH} = 7.00$',
      '$h = 2.35 \\times 10^{-3}, \\; \\text{pH} = 8.35$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for degree of hydrolysis of salt of WA + SB**
Sodium acetate undergoes anionic hydrolysis:
$$\\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{OH}^-$$
$$K_h = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.556 \\times 10^{-10}$$

Since $h \\ll 1$:
$$h = \\sqrt{\\frac{K_h}{C}} = \\sqrt{\\frac{K_w}{K_a \\cdot C}} = \\sqrt{\\frac{5.556 \\times 10^{-10}}{0.10}} = \\sqrt{5.556 \\times 10^{-9}} = \\sqrt{55.56 \\times 10^{-10}} \\approx 7.45 \\times 10^{-5}$$

**Step 2: Formula for $\\text{pH}$ of salt of WA + SB**
$$\\text{pH} = 7 + \\frac{1}{2}\\text{pK}_a + \\frac{1}{2}\\log_{10} C$$

Calculate $\\text{pK}_a$:
$$\\text{pK}_a = -\\log_{10}(1.8 \\times 10^{-5}) = 5 - \\log_{10}(1.8) = 5 - 0.255 = 4.745$$

Substitute values into pH equation:
$$\\text{pH} = 7 + \\frac{1}{2}(4.745) + \\frac{1}{2}\\log_{10}(0.10) = 7 + 2.3725 + \\frac{1}{2}(-1) = 7 + 2.3725 - 0.50 = 8.8725 \\approx 8.87$$

Hence, $h = 7.45 \\times 10^{-5}$ and $\\text{pH} = 8.87$.`,
    hints: [
      'Degree of hydrolysis is $h = \\sqrt{\\frac{K_w}{K_a \\cdot C}}$.',
      'Formula for salt of weak acid and strong base: $\\text{pH} = 7 + \\frac{1}{2}\\text{pK}_a + \\frac{1}{2}\\log_{10} C$.'
    ]
  },
  {
    id: 'chem-eq-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-eq-1-chemical-kp-kc',
    chapterId: 'chem-c11-equilibrium',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `Solid ammonium hydrogen sulfide ($\\text{NH}_4\\text{HS}$) decomposes in a closed evacuated vessel at a certain temperature according to the equilibrium:
$$\\text{NH}_4\\text{HS}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{H}_2\\text{S}(g)$$
If the total equilibrium pressure developed inside the vessel is $P\\,\\text{atm}$, the equilibrium constant $K_p$ for the dissociation is:`,
    options: [
      '$\\frac{P^2}{4}$',
      '$P^2$',
      '$\\frac{P^2}{2}$',
      '$\\frac{P}{2}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Stoichiometry of gaseous products**
Since solid $\\text{NH}_4\\text{HS}$ dissociates to produce 1 mole of $\\text{NH}_3(g)$ for every 1 mole of $\\text{H}_2\\text{S}(g)$:
$$p_{\\text{NH}_3} = p_{\\text{H}_2\\text{S}}$$

**Step 2: Express partial pressures in terms of total pressure $P$**
By Dalton\'s law of partial pressures:
$$P_{\\text{total}} = p_{\\text{NH}_3} + p_{\\text{H}_2\\text{S}} = P$$
$$2 p_{\\text{NH}_3} = P \\implies p_{\\text{NH}_3} = p_{\\text{H}_2\\text{S}} = \\frac{P}{2}$$

**Step 3: Write expression for $K_p$**
Since the reactant is a pure solid, its activity is 1:
$$K_p = (p_{\\text{NH}_3})(p_{\\text{H}_2\\text{S}}) = \\left(\\frac{P}{2}\\right) \\left(\\frac{P}{2}\\right) = \\frac{P^2}{4}$$

Hence, $K_p = \\frac{P^2}{4}$.`,
    hints: [
      'The pure solid does not appear in the $K_p$ expression.',
      'Equal amounts of both gases are produced, so each contributes half of the total pressure: $p = P/2$.'
    ]
  },
  {
    id: 'chem-eq-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-eq-6-solubility-ksp-precipitation',
    chapterId: 'chem-c11-equilibrium',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `The solubility product $K_{sp}$ of Silver Chloride ($\\text{AgCl}$) in water is $1.8 \\times 10^{-10}$ at $298\\,\\text{K}$. What is the molar solubility of $\\text{AgCl}$ in a $0.10\\,\\text{M}$ aqueous Sodium Chloride ($\\text{NaCl}$) solution?`,
    options: [
      '$1.8 \\times 10^{-9}\\,\\text{M}$',
      '$1.34 \\times 10^{-5}\\,\\text{M}$',
      '$1.8 \\times 10^{-10}\\,\\text{M}$',
      '$3.6 \\times 10^{-9}\\,\\text{M}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Set up equilibrium with common ion**
Sodium chloride is a strong electrolyte that dissociates completely:
$$\\text{NaCl}(aq) \\longrightarrow \\text{Na}^+(aq) + \\text{Cl}^-(aq)$$
$$[\\text{Cl}^-]_{\\text{from NaCl}} = 0.10\\,\\text{M}$$

Let $s\'$ be the molar solubility of $\\text{AgCl}$ in this $0.10\\,\\text{M } \\text{NaCl}$ solution:
$$\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$$
At equilibrium:
$$[\\text{Ag}^+] = s\'$$
$$[\\text{Cl}^-] = 0.10 + s\' \\approx 0.10\\,\\text{M} \\quad (\\text{since } s\' \\ll 0.10)$$

**Step 2: Apply solubility product expression**
$$K_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = (s\')(0.10)$$
$$1.8 \\times 10^{-10} = s\' \\times 0.10$$
$$s\' = \\frac{1.8 \\times 10^{-10}}{0.10} = 1.8 \\times 10^{-9}\\,\\text{M}$$

Notice the dramatic suppression of solubility due to the common ion effect:
- Solubility in pure water: $s = \\sqrt{1.8 \\times 10^{-10}} \\approx 1.34 \\times 10^{-5}\\,\\text{M}$
- Solubility in $0.1\\,\\text{M } \\text{NaCl}$: $s\' = 1.8 \\times 10^{-9}\\,\\text{M}$ (reduced by a factor of $\\approx 7500$!)

Hence, the molar solubility is $1.8 \\times 10^{-9}\\,\\text{M}$.`,
    hints: [
      'Total $[\\text{Cl}^-] = 0.10 + s\' \\approx 0.10\\,\\text{M}$ due to complete dissociation of $\\text{NaCl}$.',
      'Solve $K_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = s\'(0.10) \\implies s\' = K_{sp}/0.10$.'
    ]
  }
];
