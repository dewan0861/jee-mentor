import { Question } from '@/types';

export const dAndFBlockQuestions: Question[] = [
  {
    id: 'chem-df-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-df-3-magnetic-color-catalytic-interstitial',
    chapterId: 'chem-c12-d-f-block',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The calculated spin-only magnetic moments (in Bohr Magnetons, $\\text{BM}$) for the transition metal ions $\\text{Fe}^{3+}$, $\\text{Cr}^{3+}$, $\\text{Ni}^{2+}$, and $\\text{Sc}^{3+}$ are respectively: (Atomic numbers: $\\text{Sc}=21, \\; \\text{Cr}=24, \\; \\text{Fe}=26, \\; \\text{Ni}=28$)`,
    options: [
      '$5.92\\,\\text{BM}, \\; 3.87\\,\\text{BM}, \\; 2.83\\,\\text{BM}, \\; 0\\,\\text{BM}$',
      '$4.90\\,\\text{BM}, \\; 3.87\\,\\text{BM}, \\; 1.73\\,\\text{BM}, \\; 0\\,\\text{BM}$',
      '$5.92\\,\\text{BM}, \\; 1.73\\,\\text{BM}, \\; 2.83\\,\\text{BM}, \\; 1.73\\,\\text{BM}$',
      '$3.87\\,\\text{BM}, \\; 4.90\\,\\text{BM}, \\; 2.83\\,\\text{BM}, \\; 0\\,\\text{BM}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Write electronic configuration and count unpaired $d$-electrons ($n$)**
Formula: $\\mu_s = \\sqrt{n(n + 2)}\\,\\text{BM}$

1. **$\\text{Fe}^{3+}$**:
   - Neutral $\\text{Fe}$ ($Z=26$): $[\\text{Ar}]\\,3d^6 4s^2$.
   - $\\text{Fe}^{3+}$: Remove two $4s$ and one $3d$ electron $\\implies [\\text{Ar}]\\,3d^5$.
   - Five unpaired electrons: $n = 5$.
   - $\\mu_s = \\sqrt{5(5 + 2)} = \\sqrt{35} \\approx 5.92\\,\\text{BM}$.

2. **$\\text{Cr}^{3+}$**:
   - Neutral $\\text{Cr}$ ($Z=24$): $[\\text{Ar}]\\,3d^5 4s^1$.
   - $\\text{Cr}^{3+}$: Remove one $4s$ and two $3d$ electrons $\\implies [\\text{Ar}]\\,3d^3$.
   - Three unpaired electrons: $n = 3$.
   - $\\mu_s = \\sqrt{3(3 + 2)} = \\sqrt{15} \\approx 3.87\\,\\text{BM}$.

3. **$\\text{Ni}^{2+}$**:
   - Neutral $\\text{Ni}$ ($Z=28$): $[\\text{Ar}]\\,3d^8 4s^2$.
   - $\\text{Ni}^{2+}$: Remove two $4s$ electrons $\\implies [\\text{Ar}]\\,3d^8$.
   - Eight electrons in five $d$-orbitals: three pairs and two unpaired electrons: $n = 2$.
   - $\\mu_s = \\sqrt{2(2 + 2)} = \\sqrt{8} \\approx 2.83\\,\\text{BM}$.

4. **$\\text{Sc}^{3+}$**:
   - Neutral $\\text{Sc}$ ($Z=21$): $[\\text{Ar}]\\,3d^1 4s^2$.
   - $\\text{Sc}^{3+}$: Remove all three valence electrons $\\implies [\\text{Ar}]\\,3d^0$.
   - Zero unpaired electrons: $n = 0 \\implies \\mu_s = 0\\,\\text{BM}$ (diamagnetic).

Therefore, the magnetic moments are $5.92, \\; 3.87, \\; 2.83, \\; 0\\,\\text{BM}$.`,
    hints: [
      'Remove $4s$ electrons before $3d$ electrons when forming cations.',
      'Apply $\\mu_s = \\sqrt{n(n + 2)}\\,\\text{BM}$ where $n$ is the number of unpaired electrons.'
    ]
  },
  {
    id: 'chem-df-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-df-4-dichromate-permanganate',
    chapterId: 'chem-c12-d-f-block',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `Heating a solid ionic chloride with solid $\\text{K}_2\\text{Cr}_2\\text{O}_7$ and concentrated $\\text{H}_2\\text{SO}_4$ generates dark red vapors of chromyl chloride ($\\text{CrO}_2\\text{Cl}_2$). Which one of the following metal chlorides will **FAIL** to respond to this Chromyl Chloride test?`,
    options: [
      '$\\text{HgCl}_2$',
      '$\\text{NaCl}$',
      '$\\text{KCl}$',
      '$\\text{CaCl}_2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Mechanism of the Chromyl Chloride Test**
The reaction requires freely available chloride ions ($\\text{Cl}^-$) to react with the protonated dichromate species:
$$\\text{K}_2\\text{Cr}_2\\text{O}_7 + 4\\text{NaCl} + 6\\text{H}_2\\text{SO}_4 \\longrightarrow 2\\text{CrO}_2\\text{Cl}_2 \\uparrow \\; (\\text{red vapors}) + 2\\text{KHSO}_4 + 4\\text{NaHSO}_4 + 3\\text{H}_2\\text{O}$$

**Step 2: Limitations of the Chromyl Chloride Test**
The test succeeds ONLY with ionic chlorides that readily ionize in concentrated sulfuric acid (such as $\\text{NaCl}, \\text{KCl}, \\text{CaCl}_2, \\text{MgCl}_2, \\text{BaCl}_2$).
It **FAILS** for:
1. Strongly covalent chlorides: $\\mathbf{\\text{HgCl}_2}, \\text{SnCl}_4$ (due to high covalent character, they do not release $\\text{Cl}^-$ ions).
2. Highly insoluble chlorides: $\\text{AgCl}, \\text{PbCl}_2, \\text{Hg}_2\\text{Cl}_2$.
3. Bromides and iodides (generate $\\text{Br}_2$ and $\\text{I}_2$ instead of chromyl halides).

Therefore, mercury(II) chloride $\\text{HgCl}_2$ fails to respond to this test.`,
    hints: [
      'Chromyl chloride test requires the salt to produce free chloride ions.',
      'Covalent and poorly ionized chlorides like $\\text{HgCl}_2$ cannot form $\\text{CrO}_2\\text{Cl}_2$.'
    ]
  },
  {
    id: 'chem-df-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-df-5-lanthanoids-contraction',
    chapterId: 'chem-c12-d-f-block',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `As a direct consequence of the **lanthanoid contraction**, which of the following statements regarding the basicity of lanthanoid hydroxides is correct?`,
    options: [
      '$\\text{La(OH)}_3$ is the most basic and $\\text{Lu(OH)}_3$ is the least basic.',
      '$\\text{Lu(OH)}_3$ is the most basic and $\\text{La(OH)}_3$ is the least basic.',
      'All lanthanoid hydroxides have identical basicity.',
      'Basicity increases from $\\text{La(OH)}_3$ to $\\text{Gd(OH)}_3$ and then decreases to $\\text{Lu(OH)}_3$.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the trend in ionic radius across Lanthanoids**
Across the 14 lanthanoid elements from Lanthanum to Lutetium:
$$\\text{La}^{3+} (106\\,\\text{pm}) \\longrightarrow \\text{Lu}^{3+} (86\\,\\text{pm})$$
The ionic radius steadily decreases due to **lanthanoid contraction** (poor shielding by diffuse $4f$ electrons).

**Step 2: Apply Fajan's Rules to covalent character**
- Smaller cation size increases the charge density of the $\\text{Ln}^{3+}$ ion.
- Higher charge density produces greater polarizing power towards the hydroxide anion ($\\text{OH}^-$).
- Consequently, the covalent character of the $\\text{Ln}-\\text{OH}$ bond increases from $\\text{La(OH)}_3$ to $\\text{Lu(OH)}_3$.

**Step 3: Relate covalent character to basicity**
- In $\\text{La(OH)}_3$, the $\\text{La}^{3+}$ ion is the largest, imparting maximum ionic character to the $\\text{La}-\\text{OH}$ bond. It easily dissociates in water to release $\\text{OH}^-$ ions $\\implies$ **MOST BASIC**.
- In $\\text{Lu(OH)}_3$, the $\\text{Lu}^{3+}$ ion is the smallest, making the $\\text{Lu}-\\text{OH}$ bond predominantly covalent. It holds the $\\text{OH}^-$ group tightly and does not dissociate easily $\\implies$ **LEAST BASIC**.

Thus: $\\text{La(OH)}_3$ is the most basic and $\\text{Lu(OH)}_3$ is the least basic.`,
    hints: [
      'Lanthanoid contraction decreases the ionic size of $\\text{Ln}^{3+}$.',
      'Smaller cation size results in greater polarizing power and higher covalent character, decreasing basicity.'
    ]
  },
  {
    id: 'chem-df-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-df-4-dichromate-permanganate',
    chapterId: 'chem-c12-d-f-block',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `When an aqueous alkaline or faintly alkaline solution of potassium permanganate ($\\text{KMnO}_4$) reacts with potassium iodide ($\\text{KI}$), the oxidation state of Iodine changes from:`,
    options: [
      '$-1 \\text{ to } +5 \\; (\\text{forming } \\text{IO}_3^-)$',
      '$-1 \\text{ to } 0 \\; (\\text{forming } \\text{I}_2)$',
      '$-1 \\text{ to } +7 \\; (\\text{forming } \\text{IO}_4^-)$',
      '$-1 \\text{ to } +1 \\; (\\text{forming } \\text{IO}^-)$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Permanganate oxidation in acidic vs alkaline medium**
The redox behavior of $\\text{KMnO}_4$ depends critically on the pH of the medium:
1. **In Acidic Medium**:
   Permanganate is reduced to $\\text{Mn}^{2+}$ ($5e^-$ change), and iodide is oxidized to elemental **iodine** ($\\text{I}_2$):
   $$2\\text{MnO}_4^- + 10\\text{I}^- + 16\\text{H}^+ \\longrightarrow 2\\text{Mn}^{2+} + 5\\text{I}_2 + 8\\text{H}_2\\text{O}$$
   Here, iodine changes from $-1 \\rightarrow 0$.

2. **In Faintly Alkaline or Neutral Medium**:
   Permanganate is reduced to manganese dioxide ($\\text{MnO}_2$, $+4$ state, $3e^-$ change), and iodide is oxidized to **iodate ion** ($\\text{IO}_3^-$):
   $$2\\text{MnO}_4^- + \\text{I}^- + \\text{H}_2\\text{O} \\longrightarrow 2\\text{MnO}_2 + \\text{IO}_3^- + 2\\text{OH}^-$$

**Step 2: Determine oxidation state of Iodine in iodate ($\\text{IO}_3^-$)**
$$x + 3(-2) = -1 \\implies x - 6 = -1 \\implies x = +5$$
Hence, in alkaline solution, the oxidation state of iodine changes from **$-1$ to $+5$**.`,
    hints: [
      'In acidic medium, $\\text{I}^-$ goes to $\\text{I}_2$ ($0$).',
      'In alkaline or neutral medium, $\\text{I}^-$ is oxidized all the way to iodate $\\text{IO}_3^-$ ($+5$).'
    ]
  },
  {
    id: 'chem-df-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-df-4-dichromate-permanganate',
    chapterId: 'chem-c12-d-f-block',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `Although both $\\text{Mn}^{7+}$ in potassium permanganate ($\\text{KMnO}_4$) and $\\text{Cr}^{6+}$ in potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) have completely empty $d$-subshells ($d^0$ electronic configuration), they exhibit intense purple and orange colors respectively. What is the fundamental origin of this coloration?`,
    options: [
      'Ligand-to-Metal Charge Transfer (LMCT) transitions',
      'Metal-to-Ligand Charge Transfer (MLCT) transitions',
      'Forbidden $d-d$ electronic transitions',
      '$f-d$ electronic transitions'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Check applicability of $d-d$ transitions**
- In $\\text{KMnO}_4$: $\\text{Mn}$ has oxidation state $+7$ ($Z=25 \\implies 3d^0 4s^0$).
- In $\\text{K}_2\\text{Cr}_2\\text{O}_7$: $\\text{Cr}$ has oxidation state $+6$ ($Z=24 \\implies 3d^0 4s^0$).
Since both central metal ions possess **zero $d$-electrons** ($d^0$), conventional $d-d$ orbital transitions are **strictly impossible**!

**Step 2: Mechanism of Charge Transfer (CT)**
- The oxide ligands ($\\text{O}^{2-}$) have fully filled $2p$ orbitals of relatively high energy.
- The highly charged central cations ($\\text{Mn}^{7+}, \\text{Cr}^{6+}$) possess empty, low-lying $3d$ orbitals.
- Upon absorption of visible light, an electron is temporarily promoted from the filled $2p$ orbital of the oxide ligand to an empty $3d$ orbital of the central transition metal:
  $$\\text{Ligand (\\text{O}^{2-})} \\xrightarrow{h\\nu} \\text{Metal (\\text{Mn}^{7+} / \\text{Cr}^{6+})}$$
This fully allowed optical transition is termed **Ligand-to-Metal Charge Transfer (LMCT)**.
Because LMCT transitions are Laporte-allowed and spin-allowed, their molar extinction coefficients are exceptionally high, imparting brilliant, intense coloration.`,
    hints: [
      '$d^0$ ions cannot undergo $d-d$ transitions.',
      'Absorption occurs when an electron is transferred from the oxygen ligand to the empty metal $d$-orbitals.'
    ]
  },
  {
    id: 'chem-df-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-df-2-oxidation-states-redox-stability',
    chapterId: 'chem-c12-d-f-block',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2020,
    text: `Both $\\text{Cr}^{2+}$ and $\\text{Mn}^{3+}$ possess four $d$-electrons ($3d^4$ configuration). Yet in aqueous solution, $\\text{Cr}^{2+}$ acts as a powerful **reducing agent**, while $\\text{Mn}^{3+}$ acts as a strong **oxidizing agent**. This contrasting behavior is explained by:`,
    options: [
      '$\\text{Cr}^{3+}$ achieves a stable half-filled $t_{2g}^3$ crystal field configuration, while $\\text{Mn}^{2+}$ achieves a stable half-filled $3d^5$ configuration.',
      'Chromium has a much higher third ionization enthalpy than Manganese.',
      '$\\text{Mn}^{3+}$ undergoes disproportionation into $\\text{MnO}_2$ and $\\text{Mn}^{2+}$.',
      'The atomic radius of Manganese is significantly smaller than that of Chromium.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Analyze oxidation of $\\text{Cr}^{2+}$ ($3d^4$)**
When $\\text{Cr}^{2+}$ acts as a reducing agent, it loses one electron to form $\\text{Cr}^{3+}$:
$$\\text{Cr}^{2+} (3d^4) \\longrightarrow \\text{Cr}^{3+} (3d^3) + e^-$$
In an aqueous octahedral ligand field ($[\\text{Cr(H}_2\\text{O)}_6]^{3+}$), the five $d$-orbitals split into lower-energy $t_{2g}$ and higher-energy $e_g$ orbitals:
- $3d^3$ corresponds to an **exactly half-filled $t_{2g}^3$ configuration** with maximum exchange energy and high crystal field stabilization energy (CFSE).
- This special CFSE stability makes the formation of $\\text{Cr}^{3+}$ highly favorable $\\implies \\mathbf{\\text{Cr}^{2+} \\text{ is strongly reducing}}$ ($E^0_{\\text{Cr}^{3+}/\\text{Cr}^{2+}} = -0.41\\,\\text{V}$).

**Step 2: Analyze reduction of $\\text{Mn}^{3+}$ ($3d^4$)**
When $\\text{Mn}^{3+}$ acts as an oxidizing agent, it gains one electron to form $\\text{Mn}^{2+}$:
$$\\text{Mn}^{3+} (3d^4) + e^- \\longrightarrow \\text{Mn}^{2+} (3d^5)$$
- The resulting $\\text{Mn}^{2+}$ has a **completely half-filled $3d^5$ ($t_{2g}^3 e_g^2$) configuration**, which confers immense extra exchange stability.
- This high thermodynamic stability drives the reduction of $\\text{Mn}^{3+} \\implies \\mathbf{\\text{Mn}^{3+} \\text{ is strongly oxidizing}}$ ($E^0_{\\text{Mn}^{3+}/\\text{Mn}^{2+}} = +1.57\\,\\text{V}$).

Therefore, the stability of half-filled $t_{2g}^3$ for $\\text{Cr}^{3+}$ and half-filled $3d^5$ for $\\text{Mn}^{2+}$ dictates this redox divergence.`,
    hints: [
      'Look at the electron configurations of the reaction products: $\\text{Cr}^{3+}$ and $\\text{Mn}^{2+}$.',
      '$\\text{Cr}^{3+}$ has a stable half-filled $t_{2g}^3$ subshell in water, while $\\text{Mn}^{2+}$ has a half-filled $3d^5$ subshell.'
    ]
  }
];
