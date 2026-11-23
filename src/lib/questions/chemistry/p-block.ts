import { Question } from '@/types';

export const pBlockQuestions: Question[] = [
  {
    id: 'chem-pblk-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-pblk-2-group-13-boron',
    chapterId: 'chem-c11-c12-p-block',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The correct increasing order of Lewis acid strength among the boron trihalides $\\text{BF}_3, \\; \\text{BCl}_3, \\; \\text{BBr}_3, \\; \\text{BI}_3$ is:`,
    options: [
      '$\\text{BF}_3 < \\text{BCl}_3 < \\text{BBr}_3 < \\text{BI}_3$',
      '$\\text{BI}_3 < \\text{BBr}_3 < \\text{BCl}_3 < \\text{BF}_3$',
      '$\\text{BF}_3 < \\text{BI}_3 < \\text{BCl}_3 < \\text{BBr}_3$',
      '$\\text{BCl}_3 < \\text{BF}_3 < \\text{BBr}_3 < \\text{BI}_3$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the origin of Lewis acidity in boron trihalides**
Boron in $\\text{BX}_3$ has $sp^2$ hybridization with a vacant unhybridized $2p$ orbital, making it electron-deficient (6 valence electrons, sextet). It behaves as a Lewis acid by accepting an electron pair from a Lewis base.

**Step 2: Mechanism of $p\\pi-p\\pi$ back-bonding**
Halogens possess fully filled $np$ lone pair orbitals that can donate electron density sideways into the vacant $2p$ orbital of boron:
- In $\\text{BF}_3$: Boron ($2p$) and Fluorine ($2p$) have identical size and comparable energy levels, allowing maximum orbital overlap. This strong $2p\\pi-2p\\pi$ back-bonding significantly satisfies the electron deficiency of the central boron atom.
- In $\\text{BCl}_3$: Overlap is between $2p$ (B) and larger $3p$ (Cl), which is noticeably less effective.
- In $\\text{BBr}_3$: Overlap between $2p$ (B) and $4p$ (Br) is very weak.
- In $\\text{BI}_3$: Overlap between $2p$ (B) and diffuse $5p$ (I) is virtually negligible.

**Step 3: Deduce relative Lewis acidity**
As back-bonding efficiency decreases from $\\text{BF}_3$ to $\\text{BI}_3$, the vacant $2p$ orbital of boron remains most available and electron-deficient in $\\text{BI}_3$.
Hence, the tendency to accept an incoming lone pair from an external donor is highest in $\\text{BI}_3$ and lowest in $\\text{BF}_3$:
$$\\text{BF}_3 < \\text{BCl}_3 < \\text{BBr}_3 < \\text{BI}_3$$`,
    hints: [
      'Do not rely solely on halogen electronegativities.',
      'Consider the efficiency of $p\\pi-p\\pi$ back-bonding between boron and halogen orbitals ($2p-2p$ vs $2p-5p$).'
    ]
  },
  {
    id: 'chem-pblk-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-pblk-4-group-15-nitrogen-phosphorus',
    chapterId: 'chem-c11-c12-p-block',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `Which one of the following oxoacids of phosphorus is **monobasic** in aqueous solution and acts as a **strong reducing agent** (e.g. reducing $\\text{AgNO}_3$ to metallic silver)?`,
    options: [
      '$\\text{H}_3\\text{PO}_2 \\text{ (Hypophosphorous / Phosphinic acid)}$',
      '$\\text{H}_3\\text{PO}_3 \\text{ (Orthophosphorous / Phosphonic acid)}$',
      '$\\text{H}_3\\text{PO}_4 \\text{ (Orthophosphoric acid)}$',
      '$\\text{H}_4\\text{P}_2\\text{O}_7 \\text{ (Pyrophosphoric acid)}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Structural analysis of $\\text{H}_3\\text{PO}_2$**
In hypophosphorous acid (phosphinic acid, $\\text{H}_3\\text{PO}_2$):
- Phosphorus is in $+1$ oxidation state.
- Structure contains:
  - One $\\text{P}=\\text{O}$ bond.
  - One ionizable $\\text{P}-\\text{OH}$ bond.
  - Two non-ionizable $\\text{P}-\\text{H}$ bonds directly attached to phosphorus.

**Step 2: Basicity determination**
Only the hydrogen atom attached to oxygen as $-\\text{OH}$ is ionizable as $\\text{H}^+$.
Since $\\text{H}_3\\text{PO}_2$ contains exactly **one $\\text{P}-\\text{OH}$ group**, its basicity is **1 (monobasic)**:
$$\\text{H}_3\\text{PO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons [\\text{H}_2\\text{PO}_2]^- + \\text{H}_3\\text{O}^+$$

**Step 3: Reducing behavior**
Hydrogen atoms directly bonded to phosphorus ($\\text{P}-\\text{H}$) impart strong reducing properties to the acid:
$$\\text{H}_3\\text{PO}_2 + 4\\text{AgNO}_3 + 2\\text{H}_2\\text{O} \\longrightarrow 4\\text{Ag}(s) \\downarrow + \\text{H}_3\\text{PO}_4 + 4\\text{HNO}_3$$
Because it possesses two $\\text{P}-\\text{H}$ bonds, $\\text{H}_3\\text{PO}_2$ is a more powerful reducing agent than $\\text{H}_3\\text{PO}_3$ (which has only one $\\text{P}-\\text{H}$ bond). $\\text{H}_3\\text{PO}_4$ has zero $\\text{P}-\\text{H}$ bonds and has no reducing properties.`,
    hints: [
      'Basicity equals the count of $\\text{P}-\\text{OH}$ bonds.',
      'Reducing property originates from direct $\\text{P}-\\text{H}$ bonds.'
    ]
  },
  {
    id: 'chem-pblk-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-pblk-6-group-17-halogens',
    chapterId: 'chem-c11-c12-p-block',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2021,
    text: `The correct decreasing order of bond dissociation enthalpy ($\\text{kJ/mol}$) among the halogen molecules $\\text{Cl}_2, \\; \\text{Br}_2, \\; \\text{F}_2, \\; \\text{I}_2$ is:`,
    options: [
      '$\\text{Cl}_2 > \\text{Br}_2 > \\text{F}_2 > \\text{I}_2$',
      '$\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2$',
      '$\\text{Cl}_2 > \\text{F}_2 > \\text{Br}_2 > \\text{I}_2$',
      '$\\text{I}_2 > \\text{Br}_2 > \\text{Cl}_2 > \\text{F}_2$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Expected periodic trend**
Normally, as atomic size increases down Group 17, bond length increases and orbital overlap becomes poorer, so bond dissociation enthalpy should decrease from $\\text{F}_2$ to $\\text{I}_2$.

**Step 2: The anomaly of the $\\text{F}-\\text{F}$ bond**
- The fluorine atom has a tiny covalent radius, resulting in an exceptionally short $\\text{F}-\\text{F}$ bond distance ($142\\,\\text{pm}$).
- Each fluorine atom possesses 3 non-bonding lone pairs in compact $2p$ subshells.
- When two fluorine atoms form a single covalent bond, these six lone pairs are brought very close together in space, resulting in severe **lone pair-lone pair electrostatic repulsion**.
- This intense interelectronic repulsion significantly weakens the $\\text{F}-\\text{F}$ bond, making its bond dissociation enthalpy unexpectedly low ($158.8\\,\\text{kJ/mol}$).

**Step 3: Comparison with experimental values**
- $\\text{Cl}_2: 242.6\\,\\text{kJ/mol}$
- $\\text{Br}_2: 192.8\\,\\text{kJ/mol}$
- $\\text{F}_2: 158.8\\,\\text{kJ/mol}$
- $\\text{I}_2: 151.1\\,\\text{kJ/mol}$

Notice that the bond energy of $\\text{F}_2$ is smaller than both $\\text{Cl}_2$ and $\\text{Br}_2$, and only slightly greater than $\\text{I}_2$.
Therefore, the decreasing order is:
$$\\text{Cl}_2 > \\text{Br}_2 > \\text{F}_2 > \\text{I}_2$$`,
    hints: [
      'Compact size of fluorine leads to severe lone pair-lone pair repulsion that weakens the $\\text{F}-\\text{F}$ bond.',
      '$\\text{Cl}_2$ has the highest bond dissociation enthalpy of all halogens.'
    ]
  },
  {
    id: 'chem-pblk-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-pblk-7-group-18-noble-gases',
    chapterId: 'chem-c11-c12-p-block',
    classLevel: 12,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `Complete hydrolysis of xenon hexafluoride ($\\text{XeF}_6$) produces a colorless, highly explosive solid compound $X$. What is the formula and molecular geometry of compound $X$?`,
    options: [
      '$\\text{XeO}_3$, Trigonal Pyramidal',
      '$\\text{XeOF}_4$, Square Pyramidal',
      '$\\text{XeO}_2\\text{F}_2$, Seesaw',
      '$\\text{XeO}_4$, Tetrahedral'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Chemical equation for complete hydrolysis of $\\text{XeF}_6$**
$$\\text{XeF}_6 + 3\\text{H}_2\\text{O} \\longrightarrow \\text{XeO}_3 + 6\\text{HF}$$
The reaction product $X$ is Xenon trioxide ($\\text{XeO}_3$). It is a white, non-volatile crystalline solid that is dangerously explosive upon contact or mild heating.

*(Note: Partial hydrolysis yields oxyfluorides: $\\text{XeF}_6 + \\text{H}_2\\text{O} \\rightarrow \\text{XeOF}_4 + 2\\text{HF}$ and $\\text{XeF}_6 + 2\\text{H}_2\\text{O} \\rightarrow \\text{XeO}_2\\text{F}_2 + 4\\text{HF}$)*.

**Step 2: Determine hybridization and molecular geometry of $\\text{XeO}_3$**
- Central atom: $\\text{Xe}$ ($V = 8$ valence electrons).
- Oxygen is divalent ($M = 0$).
- $\\text{Steric Number} = \\frac{1}{2}(V + M - C + A) = \\frac{8 + 0}{2} = 4 \\implies sp^3$ hybridization.
- Xenon forms three $\\text{Xe}=\\text{O}$ double bonds (3 bond pairs, consisting of $\\sigma$ and $d\\pi-p\\pi$ bonds).
- Remaining electrons form **one lone pair**: $\\text{LP} = 4 - 3 = 1$.
- With 3 bond pairs and 1 lone pair, the molecular shape is **Trigonal Pyramidal** (analogous to $\\text{NH}_3$).`,
    hints: [
      'Complete hydrolysis converts all fluorine atoms to $\\text{HF}$, forming $\\text{XeO}_3$.',
      '$\\text{XeO}_3$ has $sp^3$ hybridization with 3 bond pairs and 1 lone pair.'
    ]
  },
  {
    id: 'chem-pblk-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-pblk-3-group-14-carbon',
    chapterId: 'chem-c11-c12-p-block',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `Why is lead dioxide ($\\text{PbO}_2$) a powerful **oxidizing agent**, whereas tin(II) chloride ($\\text{SnCl}_2$) acts as a strong **reducing agent**?`,
    options: [
      'Due to the inert pair effect, the $+2$ oxidation state is more stable than $+4$ in Lead, while $+4$ is more stable than $+2$ in Tin.',
      'Lead has a higher ionization enthalpy than Tin.',
      'Tin has accessible $d$-orbitals while Lead does not.',
      'Lead dioxide is a covalent network solid while tin(II) chloride is ionic.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: The Inert Pair Effect down Group 14**
In Group 14 ($\\text{C}, \\text{Si}, \\text{Ge}, \\text{Sn}, \\text{Pb}$), the elements possess the outer configuration $ns^2 np^2$.
- For lighter elements (C to Sn), all four valence electrons ($ns^2 np^2$) participate in bonding, so the $+4$ oxidation state is the most stable.
- In Lead ($\\text{Pb}$, $Z=82$), the valence $6s^2$ electrons are shielded by intervening $4f^{14}$ and $5d^{10}$ subshells. Because $f$ and $d$ orbitals shield poorly, the $6s^2$ electrons experience a strong effective nuclear charge and remain tightly held ("inert pair").
- Consequently, in Lead, the **$+2$ oxidation state is thermodynamically far more stable than $+4$** ($\\text{Pb}^{2+} > \\text{Pb}^{4+}$).

**Step 2: Chemical consequences for $\\text{PbO}_2$ and $\\text{SnCl}_2$**
1. In $\\text{PbO}_2$, lead is in the unstable $+4$ state. It spontaneously and strongly accepts two electrons to reduce to the much more stable $+2$ state:
   $$\\text{PbO}_2 + 4\\text{HCl} \\longrightarrow \\text{PbCl}_2 + \\text{Cl}_2 + 2\\text{H}_2\\text{O}$$
   Hence, $\\text{PbO}_2$ acts as a **powerful oxidizing agent**.

2. In $\\text{SnCl}_2$, tin is in the $+2$ state. In Tin, the $+4$ state is more stable than $+2$ ($\\text{Sn}^{4+} > \\text{Sn}^{2+}$). Therefore, $\\text{Sn}^{2+}$ readily loses two electrons to oxidize to $\\text{Sn}^{4+}$:
   $$\\text{Sn}^{2+} \\longrightarrow \\text{Sn}^{4+} + 2e^-$$
   Hence, $\\text{SnCl}_2$ readily acts as a **strong reducing agent** (e.g. reducing $\\text{Fe}^{3+}$ to $\\text{Fe}^{2+}$ or $\\text{HgCl}_2$ to $\\text{Hg}_2\\text{Cl}_2$).`,
    hints: [
      'Inert pair effect increases down the group.',
      '$\\text{Pb}^{2+}$ is more stable than $\\text{Pb}^{4+}$, while $\\text{Sn}^{4+}$ is more stable than $\\text{Sn}^{2+}$.'
    ]
  },
  {
    id: 'chem-pblk-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-pblk-2-group-13-boron',
    chapterId: 'chem-c11-c12-p-block',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: `In the diborane molecule ($\\text{B}_2\\text{H}_6$), which statement correctly describes its structural bonding?`,
    options: [
      'It contains four 2-center 2-electron (2c-2e) terminal $\\text{B}-\\text{H}$ bonds and two 3-center 2-electron (3c-2e) bridging $\\text{B}-\\text{H}-\\text{B}$ banana bonds.',
      'It contains six classical 2-center 2-electron covalent $\\text{B}-\\text{H}$ bonds and a direct $\\text{B}-\\text{B}$ single bond.',
      'It contains two 3-center 4-electron bridging bonds.',
      'All six hydrogen atoms lie in the same geometric plane as the two boron atoms.'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Valence electron count of $\\text{B}_2\\text{H}_6$**
- Each Boron atom contributes 3 valence electrons ($2 \\times 3 = 6$).
- Each Hydrogen atom contributes 1 electron ($6 \\times 1 = 6$).
- Total valence electrons available $= 12$ electrons (6 electron pairs).
If all bonds were conventional 2-center 2-electron (2c-2e) single bonds, 7 bonds would require 14 electrons. Hence, diborane is an **electron-deficient** molecule.

**Step 2: Molecular geometry and orbital hybridization**
Both boron atoms are $sp^3$ hybridized:
1. **Four terminal $\\text{B}-\\text{H}_t$ bonds**:
   - The four terminal hydrogen atoms and the two boron atoms lie in the **same plane**.
   - These are standard, conventional **2-center 2-electron (2c-2e)** covalent bonds.
   - They consume $4 \\times 2 = 8$ valence electrons.

2. **Two bridging $\\text{B}-\\text{H}_b-\\text{B}$ bonds**:
   - The remaining two hydrogen atoms are bridging hydrogens (one positioned ABOVE the molecular plane, one positioned BELOW the plane).
   - In each bridge, an $sp^3$ hybrid orbital of one boron, a $1s$ orbital of the bridge hydrogen, and an empty $sp^3$ hybrid orbital of the other boron overlap.
   - This produces a delocalized molecular orbital shared across three nuclei containing only 2 electrons.
   - These two bonds are famously termed **3-center 2-electron (3c-2e) "banana bonds"**.
   - They consume the remaining $2 \\times 2 = 4$ electrons (total $8 + 4 = 12$ electrons).

Therefore, diborane contains four 2c-2e terminal bonds and two 3c-2e bridging banana bonds.`,
    hints: [
      'Count total valence electrons: $2 \\times 3 + 6 \\times 1 = 12$ electrons.',
      'Four terminal bonds use 8 electrons; two bridging banana bonds use the remaining 4 electrons.'
    ]
  }
];
