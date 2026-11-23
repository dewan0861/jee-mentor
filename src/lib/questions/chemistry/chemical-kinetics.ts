import { Question } from '@/types';

export const chemicalKineticsQuestions: Question[] = [
  {
    id: 'chem-kin-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-kin-2-rate-law-order-molecularity',
    chapterId: 'chem-c12-chemical-kinetics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `For the reaction $2\\text{A} + \\text{B} \\longrightarrow \\text{C} + \\text{D}$, the initial rates were measured at various concentrations:
1. $[\\text{A}] = 0.10\\,\\text{M}, \\; [\\text{B}] = 0.10\\,\\text{M} \\implies \\text{Rate} = 6.0 \\times 10^{-3}\\,\\text{M}\\cdot\\text{s}^{-1}$
2. $[\\text{A}] = 0.30\\,\\text{M}, \\; [\\text{B}] = 0.10\\,\\text{M} \\implies \\text{Rate} = 5.4 \\times 10^{-2}\\,\\text{M}\\cdot\\text{s}^{-1}$
3. $[\\text{A}] = 0.10\\,\\text{M}, \\; [\\text{B}] = 0.20\\,\\text{M} \\implies \\text{Rate} = 1.2 \\times 10^{-2}\\,\\text{M}\\cdot\\text{s}^{-1}$

The overall rate law and the value of rate constant $k$ are respectively:`,
    options: [
      '$\\text{Rate} = k [\\text{A}]^2 [\\text{B}], \\quad k = 6.0\\,\\text{L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1}$',
      '$\\text{Rate} = k [\\text{A}] [\\text{B}]^2, \\quad k = 6.0\\,\\text{L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1}$',
      '$\\text{Rate} = k [\\text{A}]^2 [\\text{B}]^2, \\quad k = 60.0\\,\\text{L}^3\\cdot\\text{mol}^{-3}\\cdot\\text{s}^{-1}$',
      '$\\text{Rate} = k [\\text{A}] [\\text{B}], \\quad k = 0.60\\,\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Set up the differential rate law**
Let $\\text{Rate} = k [\\text{A}]^x [\\text{B}]^y$.

**Step 2: Determine order with respect to A ($x$)**
Compare Experiment 1 and Experiment 2 where $[\\text{B}]$ is held constant ($0.10\\,\\text{M}$):
$$\\frac{\\text{Rate}_2}{\\text{Rate}_1} = \\frac{5.4 \\times 10^{-2}}{6.0 \\times 10^{-3}} = \\frac{54 \\times 10^{-3}}{6.0 \\times 10^{-3}} = 9$$
$$\\left(\\frac{[\\text{A}]_2}{[\\text{A}]_1}\\right)^x = \\left(\\frac{0.30}{0.10}\\right)^x = 3^x$$
$$3^x = 9 = 3^2 \\implies x = 2$$
The reaction is **second order in A**.

**Step 3: Determine order with respect to B ($y$)**
Compare Experiment 1 and Experiment 3 where $[\\text{A}]$ is held constant ($0.10\\,\\text{M}$):
$$\\frac{\\text{Rate}_3}{\\text{Rate}_1} = \\frac{1.2 \\times 10^{-2}}{6.0 \\times 10^{-3}} = 2$$
$$\\left(\\frac{[\\text{B}]_3}{[\\text{B}]_1}\\right)^y = \\left(\\frac{0.20}{0.10}\\right)^y = 2^y$$
$$2^y = 2 = 2^1 \\implies y = 1$$
The reaction is **first order in B**.
Overall rate law: $\\text{Rate} = k [\\text{A}]^2 [\\text{B}]$ (overall order $n = 2 + 1 = 3$).

**Step 4: Calculate rate constant $k$ using Experiment 1**
$$6.0 \\times 10^{-3} = k (0.10)^2 (0.10) = k (1.0 \\times 10^{-3})$$
$$k = \\frac{6.0 \\times 10^{-3}}{1.0 \\times 10^{-3}} = 6.0\\,\\text{L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1}$$`,
    hints: [
      'Find the power of $[\\text{A}]$ by comparing experiments where $[\\text{B}]$ is constant.',
      'Substitute values into $\\text{Rate} = k [\\text{A}]^2 [\\text{B}]$ to solve for $k$.'
    ]
  },
  {
    id: 'chem-kin-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-kin-3-integrated-rate-laws-halflife',
    chapterId: 'chem-c12-chemical-kinetics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `A first order reaction takes $40.0\\,\\text{minutes}$ for $30\\%$ decomposition of the reactant. The half-life period ($t_{1/2}$) of this reaction is: (Given $\\log_{10}(10) = 1.000$, $\\log_{10}(7) = 0.8451$, $\\ln 2 = 0.693$)`,
    options: [
      '$77.7\\,\\text{minutes}$',
      '$53.3\\,\\text{minutes}$',
      '$92.4\\,\\text{minutes}$',
      '$35.0\\,\\text{minutes}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write first order integrated rate equation**
$$k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{[A]_0}{[A]_t}\\right)$$

**Step 2: Calculate rate constant $k$**
For $30\\%$ decomposition:
- $[A]_0 = 100$
- $[A]_t = 100 - 30 = 70$
- $t = 40.0\\,\\text{min}$

$$k = \\frac{2.303}{40.0} \\log_{10}\\left(\\frac{100}{70}\\right) = \\frac{2.303}{40.0} \\left(\\log_{10} 10 - \\log_{10} 7\\right)$$
$$k = \\frac{2.303}{40.0} (1.000 - 0.8451) = \\frac{2.303 \\times 0.1549}{40.0} = \\frac{0.3567}{40.0} \\approx 8.918 \\times 10^{-3}\\,\\text{min}^{-1}$$

**Step 3: Calculate half-life ($t_{1/2}$)**
For a first order reaction:
$$t_{1/2} = \\frac{0.693}{k} = \\frac{0.693}{8.918 \\times 10^{-3}} \\approx 77.71\\,\\text{minutes}$$`,
    hints: [
      'Remaining concentration after $30\\%$ decomposition is $70\\%$ of original.',
      'Calculate $k = \\frac{2.303}{40} \\log\\frac{100}{70}$, then evaluate $t_{1/2} = \\frac{0.693}{k}$.'
    ]
  },
  {
    id: 'chem-kin-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-kin-5-arrhenius-activation-energy',
    chapterId: 'chem-c12-chemical-kinetics',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Main',
    year: 2021,
    text: `The rate of a chemical reaction quadruples (increases by a factor of 4) when the temperature is raised from $293\\,\\text{K}$ to $313\\,\\text{K}$. The activation energy ($E_a$) of the reaction is: (Given $R = 8.314\\,\\text{J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$, $\\log_{10} 2 = 0.3010$, $2.303 \\times 8.314 = 19.147$)`,
    options: [
      '$52.85\\,\\text{kJ/mol}$',
      '$105.7\\,\\text{kJ/mol}$',
      '$26.42\\,\\text{kJ/mol}$',
      '$12.50\\,\\text{kJ/mol}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write the two-temperature Arrhenius equation**
$$\\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$$

**Step 2: Substitute given values**
- $\\frac{k_2}{k_1} = 4 \\implies \\log_{10}(4) = 2 \\log_{10}(2) = 2(0.3010) = 0.6020$
- $T_1 = 293\\,\\text{K}, \\; T_2 = 313\\,\\text{K}$
- $T_2 - T_1 = 313 - 293 = 20\\,\\text{K}$
- $T_1 T_2 = 293 \\times 313 = 91{,}709\\,\\text{K}^2$
- $2.303 R = 19.147\\,\\text{J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$

$$0.6020 = \\frac{E_a}{19.147} \\left(\\frac{20}{91{,}709}\\right)$$

**Step 3: Solve for activation energy $E_a$**
$$E_a = \\frac{0.6020 \\times 19.147 \\times 91{,}709}{20}$$
$$E_a = \\frac{1{,}057{,}089}{20} \\approx 52{,}854\\,\\text{J/mol} = 52.85\\,\\text{kJ/mol}$$`,
    hints: [
      'Note that $\\log_{10}(4) = 2 \\times 0.3010 = 0.6020$.',
      'Rearrange: $E_a = \\frac{2.303 R \\cdot T_1 T_2 \\cdot \\log(k_2/k_1)}{T_2 - T_1}$.'
    ]
  },
  {
    id: 'chem-kin-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-kin-4-gaseous-kinetics',
    chapterId: 'chem-c12-chemical-kinetics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The thermal decomposition of gaseous sulfuryl chloride:
$$\\text{SO}_2\\text{Cl}_2(g) \\longrightarrow \\text{SO}_2(g) + \\text{Cl}_2(g)$$
is a first order reaction. In an experiment at constant volume and $591\\,\\text{K}$, the initial pressure of pure $\\text{SO}_2\\text{Cl}_2$ was $0.50\\,\\text{atm}$. After $100\\,\\text{seconds}$, the total pressure of the gas mixture rose to $0.60\\,\\text{atm}$. The rate constant $k$ is: (Given $\\log_{10}(1.25) = 0.0969$)`,
    options: [
      '$2.23 \\times 10^{-3}\\,\\text{s}^{-1}$',
      '$1.12 \\times 10^{-3}\\,\\text{s}^{-1}$',
      '$4.46 \\times 10^{-3}\\,\\text{s}^{-1}$',
      '$9.69 \\times 10^{-4}\\,\\text{s}^{-1}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Set up partial pressure expressions**
Let the initial pressure of $\\text{SO}_2\\text{Cl}_2$ be $P_0 = 0.50\\,\\text{atm}$.
At time $t$:
$$\\begin{array}{lccc}
& \\text{SO}_2\\text{Cl}_2(g) & \\longrightarrow & \\text{SO}_2(g) & + & \\text{Cl}_2(g) \\\\
\\text{At } t = 0: & P_0 & & 0 & & 0 \\\\
\\text{At time } t: & P_0 - x & & x & & x
\\end{array}$$

Total pressure at time $t$:
$$P_t = (P_0 - x) + x + x = P_0 + x$$
$$x = P_t - P_0$$

**Step 2: Express partial pressure of reactant at time $t$**
$$P_{\\text{SO}_2\\text{Cl}_2} = P_0 - x = P_0 - (P_t - P_0) = 2 P_0 - P_t$$
Given $P_0 = 0.50\\,\\text{atm}$ and $P_t = 0.60\\,\\text{atm}$:
$$P_{\\text{SO}_2\\text{Cl}_2} = 2(0.50) - 0.60 = 1.00 - 0.60 = 0.40\\,\\text{atm}$$

**Step 3: Calculate first order rate constant $k$**
$$k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{P_0}{P_{\\text{SO}_2\\text{Cl}_2}}\\right) = \\frac{2.303}{t} \\log_{10}\\left(\\frac{P_0}{2 P_0 - P_t}\\right)$$
$$k = \\frac{2.303}{100} \\log_{10}\\left(\\frac{0.50}{0.40}\\right) = \\frac{2.303}{100} \\log_{10}(1.25)$$
$$k = \\frac{2.303 \\times 0.0969}{100} = \\frac{0.22316}{100} \\approx 2.23 \\times 10^{-3}\\,\\text{s}^{-1}$$`,
    hints: [
      'Express remaining reactant pressure as $P_A = 2 P_0 - P_t$.',
      'Use $k = \\frac{2.303}{t} \\log\\frac{P_0}{2 P_0 - P_t}$.'
    ]
  },
  {
    id: 'chem-kin-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-kin-3-integrated-rate-laws-halflife',
    chapterId: 'chem-c12-chemical-kinetics',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2020,
    text: `For a zero order reaction $\\text{A} \\longrightarrow 2\\text{B}$, the rate constant $k$ is $0.0030\\,\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$. If the initial concentration of reactant $\\text{A}$ is $0.60\\,\\text{M}$, the half-life ($t_{1/2}$) and the time required for complete conversion ($t_{\\text{comp}}$) are respectively:`,
    options: [
      '$t_{1/2} = 100\\,\\text{s}, \\quad t_{\\text{comp}} = 200\\,\\text{s}$',
      '$t_{1/2} = 200\\,\\text{s}, \\quad t_{\\text{comp}} = 400\\,\\text{s}$',
      '$t_{1/2} = 50\\,\\text{s}, \\quad t_{\\text{comp}} = 100\\,\\text{s}$',
      '$t_{1/2} = 100\\,\\text{s}, \\quad t_{\\text{comp}} = \\infty$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Integrated rate law for zero order reaction**
For zero order kinetics:
$$[A]_t = [A]_0 - k t$$

**Step 2: Calculate half-life ($t_{1/2}$)**
At $t = t_{1/2}$, $[A]_t = \\frac{[A]_0}{2}$:
$$\\frac{[A]_0}{2} = [A]_0 - k t_{1/2} \\implies t_{1/2} = \\frac{[A]_0}{2 k}$$
Substitute $[A]_0 = 0.60\\,\\text{M}$ and $k = 0.0030\\,\\text{M}\\cdot\\text{s}^{-1}$:
$$t_{1/2} = \\frac{0.60}{2 \\times 0.0030} = \\frac{0.60}{0.0060} = 100\\,\\text{seconds}$$

**Step 3: Calculate completion time ($t_{\\text{comp}}$)**
At complete conversion, $[A]_t = 0$:
$$0 = [A]_0 - k t_{\\text{comp}} \\implies t_{\\text{comp}} = \\frac{[A]_0}{k}$$
$$t_{\\text{comp}} = \\frac{0.60}{0.0030} = 200\\,\\text{seconds}$$

Notice that for zero order reactions, $t_{\\text{comp}} = 2 \\times t_{1/2} = 200\\,\\text{s}$, unlike first order reactions which theoretically take infinite time.`,
    hints: [
      'For zero order reactions, $t_{1/2} = \\frac{[A]_0}{2 k}$.',
      'Time for completion is exactly double the half-life: $t_{\\text{comp}} = \\frac{[A]_0}{k} = 2 t_{1/2}$.'
    ]
  },
  {
    id: 'chem-kin-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-kin-2-rate-law-order-molecularity',
    chapterId: 'chem-c12-chemical-kinetics',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `The gaseous oxidation of nitric oxide proceeds by the following two-step proposed mechanism:
$$\\text{Step 1: } \\text{NO}(g) + \\text{NO}(g) \\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}} \\text{N}_2\\text{O}_2(g) \\quad (\\text{fast pre-equilibrium})$$
$$\\text{Step 2: } \\text{N}_2\\text{O}_2(g) + \\text{O}_2(g) \\xrightarrow{k_2} 2\\text{NO}_2(g) \\quad (\\text{slow, rate-determining step})$$
What is the overall rate law for the reaction and its overall reaction order?`,
    options: [
      '$\\text{Rate} = k [\\text{NO}]^2 [\\text{O}_2], \\quad \\text{Order} = 3$',
      '$\\text{Rate} = k [\\text{NO}] [\\text{O}_2], \\quad \\text{Order} = 2$',
      '$\\text{Rate} = k [\\text{N}_2\\text{O}_2] [\\text{O}_2], \\quad \\text{Order} = 2$',
      '$\\text{Rate} = k [\\text{NO}]^2, \\quad \\text{Order} = 2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write rate expression for the slow rate-determining step (RDS)**
The overall reaction rate is governed by Step 2:
$$\\text{Rate} = k_2 [\\text{N}_2\\text{O}_2] [\\text{O}_2]$$
However, $\\text{N}_2\\text{O}_2$ is a transient reaction intermediate and cannot appear in the final rate law!

**Step 2: Express intermediate $[\\text{N}_2\\text{O}_2]$ using the fast pre-equilibrium (Step 1)**
For Step 1 at equilibrium:
$$\\text{Rate of forward reaction} = \\text{Rate of backward reaction}$$
$$k_1 [\\text{NO}]^2 = k_{-1} [\\text{N}_2\\text{O}_2]$$
$$[\\text{N}_2\\text{O}_2] = \\frac{k_1}{k_{-1}} [\\text{NO}]^2 = K_c [\\text{NO}]^2$$

**Step 3: Substitute $[\\text{N}_2\\text{O}_2]$ into the RDS rate law**
$$\\text{Rate} = k_2 \\left( \\frac{k_1}{k_{-1}} [\\text{NO}]^2 \\right) [\\text{O}_2]$$
$$\\text{Rate} = k_{\\text{obs}} [\\text{NO}]^2 [\\text{O}_2]$$
where $k_{\\text{obs}} = \\frac{k_1 k_2}{k_{-1}}$.

**Step 4: Determine overall order**
- Order with respect to $\\text{NO}$ is $2$.
- Order with respect to $\\text{O}_2$ is $1$.
- Overall reaction order:
$$n = 2 + 1 = 3$$`,
    hints: [
      'The slow step determines the rate: $\\text{Rate} = k_2 [\\text{N}_2\\text{O}_2][\\text{O}_2]$.',
      'Eliminate intermediate $[\\text{N}_2\\text{O}_2]$ using equilibrium condition: $k_1 [\\text{NO}]^2 = k_{-1} [\\text{N}_2\\text{O}_2]$.'
    ]
  }
];
