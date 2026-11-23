import { Question } from '@/types';

export const classificationPeriodicityQuestions: Question[] = [
  {
    id: 'chem-per-pyq-1',
    subject: 'chemistry',
    topicId: 'chem-per-3-ionization-enthalpy-exceptions',
    chapterId: 'chem-c11-periodicity',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: `The correct increasing order of first ionization enthalpy ($\\Delta_i H_1$) for the second period elements $\\text{B}$, $\\text{Be}$, $\\text{C}$, $\\text{O}$, and $\\text{N}$ is:`,
    options: [
      '$\\text{B} < \\text{Be} < \\text{C} < \\text{O} < \\text{N}$',
      '$\\text{B} < \\text{Be} < \\text{C} < \\text{N} < \\text{O}$',
      '$\\text{Be} < \\text{B} < \\text{C} < \\text{O} < \\text{N}$',
      '$\\text{B} < \\text{C} < \\text{Be} < \\text{O} < \\text{N}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: General trend across a period**
Across a period from left to right, effective nuclear charge ($Z_{\\text{eff}}$) increases, so first ionization enthalpy generally increases.

**Step 2: Analyze specific electronic configurations and anomalies**
1. **Boron vs Beryllium**:
   - $\\text{Be} \\; (Z=4): 1s^2 2s^2$ (completely filled $2s$ subshell, higher penetration power of $s$-electrons).
   - $\\text{B} \\; (Z=5): 1s^2 2s^2 2p^1$ (electron removed from higher-energy $2p$ subshell, which is shielded by inner $2s$ electrons).
   - Therefore, $\\text{IE}_1(\\text{B}) < \\text{IE}_1(\\text{Be})$ ($801\\,\\text{kJ/mol} < 899\\,\\text{kJ/mol}$).

2. **Carbon**:
   - $\\text{C} \\; (Z=6): 1s^2 2s^2 2p^2$ (higher $Z_{\\text{eff}}$ than Be, $\\text{IE}_1 = 1086\\,\\text{kJ/mol}$).

3. **Oxygen vs Nitrogen**:
   - $\\text{N} \\; (Z=7): 1s^2 2s^2 2p_x^1 2p_y^1 2p_z^1$ (extra stability of exactly half-filled $2p^3$ subshell, maximum exchange energy).
   - $\\text{O} \\; (Z=8): 1s^2 2s^2 2p_x^2 2p_y^1 2p_z^1$ (pairing in $2p_x$ orbital causes interelectronic repulsion, making it easier to lose an electron).
   - Therefore, $\\text{IE}_1(\\text{O}) < \\text{IE}_1(\\text{N})$ ($1314\\,\\text{kJ/mol} < 1402\\,\\text{kJ/mol}$).

**Step 3: Combine into the final sequence**
$$\\text{B} < \\text{Be} < \\text{C} < \\text{O} < \\text{N}$$`,
    hints: [
      'Be has a fully filled $2s^2$ subshell, making it harder to ionize than B ($2p^1$).',
      'N has a half-filled $2p^3$ subshell, making it harder to ionize than O ($2p^4$).'
    ]
  },
  {
    id: 'chem-per-pyq-2',
    subject: 'chemistry',
    topicId: 'chem-per-4-electron-gain-enthalpy',
    chapterId: 'chem-c11-periodicity',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The correct order of magnitude of negative electron gain enthalpy ($-\\Delta_{eg} H$) for Group 16 elements (Chalcogens) is:`,
    options: [
      '$\\text{S} > \\text{Se} > \\text{Te} > \\text{Po} > \\text{O}$',
      '$\\text{O} > \\text{S} > \\text{Se} > \\text{Te} > \\text{Po}$',
      '$\\text{S} > \\text{O} > \\text{Se} > \\text{Te} > \\text{Po}$',
      '$\\text{S} > \\text{Se} > \\text{O} > \\text{Te} > \\text{Po}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: General trend down a group**
Down Group 16, atomic radius increases and the attractive force exerted by the nucleus on an incoming electron decreases, so electron gain enthalpy generally becomes less negative from $\\text{S}$ to $\\text{Po}$.

**Step 2: The anomalous position of Oxygen**
- Oxygen has an exceptionally compact atomic radius ($n=2$).
- Its six valence electrons are confined to the small $2p$ subshell, creating high electron density.
- When an extra electron enters this compact space, it experiences massive **interelectronic repulsion**.
- In Sulfur ($n=3$), the valence electrons occupy larger $3p$ orbitals with much lower electron density, accommodating the incoming electron with minimal repulsion.

**Step 3: Experimental values of $\\Delta_{eg} H$**
- $\\text{S}: -200\\,\\text{kJ/mol}$
- $\\text{Se}: -195\\,\\text{kJ/mol}$
- $\\text{Te}: -190\\,\\text{kJ/mol}$
- $\\text{Po}: -174\\,\\text{kJ/mol}$
- $\\text{O}: -141\\,\\text{kJ/mol}$

Notice that Oxygen has the **LEAST negative** electron gain enthalpy in the entire group!
Thus, the decreasing order of negative $\\Delta_{eg} H$ is:
$$\\text{S} > \\text{Se} > \\text{Te} > \\text{Po} > \\text{O}$$`,
    hints: [
      'Oxygen has high interelectronic repulsions in its compact $2p$ subshell.',
      'Oxygen has the least negative electron gain enthalpy among all Group 16 elements.'
    ]
  },
  {
    id: 'chem-per-pyq-3',
    subject: 'chemistry',
    topicId: 'chem-per-2-radii-trends-isoelectronic',
    chapterId: 'chem-c11-periodicity',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2021,
    text: `The correct increasing order of ionic radii for the following isoelectronic ions: $\\text{Al}^{3+}, \\; \\text{Mg}^{2+}, \\; \\text{Na}^+, \\; \\text{F}^-, \\; \\text{O}^{2-}$ is:`,
    options: [
      '$\\text{Al}^{3+} < \\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-}$',
      '$\\text{O}^{2-} < \\text{F}^- < \\text{Na}^+ < \\text{Mg}^{2+} < \\text{Al}^{3+}$',
      '$\\text{Na}^+ < \\text{Mg}^{2+} < \\text{Al}^{3+} < \\text{F}^- < \\text{O}^{2-}$',
      '$\\text{Al}^{3+} < \\text{Na}^+ < \\text{Mg}^{2+} < \\text{O}^{2-} < \\text{F}^-$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify electron count (isoelectronic nature)**
All five species possess exactly 10 electrons ($1s^2 2s^2 2p^6$ neon configuration):
- $\\text{Al}^{3+}$: $13 - 3 = 10\\,e^-$
- $\\text{Mg}^{2+}$: $12 - 2 = 10\\,e^-$
- $\\text{Na}^+$: $11 - 1 = 10\\,e^-$
- $\\text{F}^-$: $9 + 1 = 10\\,e^-$
- $\\text{O}^{2-}$: $8 + 2 = 10\\,e^-$

**Step 2: Apply the isoelectronic radius rule ($r \\propto 1/Z$)**
For isoelectronic species, as the nuclear charge (atomic number $Z$) increases, the protons pull the identical 10 electrons closer to the nucleus, causing the ionic radius to decrease:
- $\\text{Al}^{3+}$: $Z = 13 \\implies \\text{Smallest radius}$ ($53.5\\,\\text{pm}$)
- $\\text{Mg}^{2+}$: $Z = 12$ ($72\\,\\text{pm}$)
- $\\text{Na}^+$: $Z = 11$ ($102\\,\\text{pm}$)
- $\\text{F}^-$: $Z = 9$ ($133\\,\\text{pm}$)
- $\\text{O}^{2-}$: $Z = 8 \\implies \\text{Largest radius}$ ($140\\,\\text{pm}$)

**Step 3: Arrange in increasing order**
$$\\text{Al}^{3+} < \\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-}$$`,
    hints: [
      'All these ions have 10 electrons.',
      'Higher nuclear charge (more protons) pulls electrons tighter, producing smaller ionic radius.'
    ]
  },
  {
    id: 'chem-per-pyq-4',
    subject: 'chemistry',
    topicId: 'chem-per-2-radii-trends-isoelectronic',
    chapterId: 'chem-c11-periodicity',
    classLevel: 11,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2022,
    text: `The atomic radii of Zirconium ($\\text{Zr}$, $4d$ series, $Z=40$) and Hafnium ($\\text{Hf}$, $5d$ series, $Z=72$) are nearly identical ($160\\,\\text{pm}$ and $159\\,\\text{pm}$ respectively). This phenomenon is primarily attributable to:`,
    options: [
      'Lanthanoid contraction due to poor shielding of $4f$ electrons',
      'Diagonal relationship between Group 4 elements',
      'Inert pair effect in the $5d$ series',
      'Shielding effect of $3d$ electrons'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the expected vertical trend**
Moving down Group 4 from $\\text{Zr}$ ($4d$) to $\\text{Hf}$ ($5d$), one might expect a significant increase in atomic radius due to the addition of a new principal quantum shell ($n=6$).

**Step 2: Identify intervening subshell filling**
Between $\\text{La}$ ($Z=57$) and $\\text{Hf}$ ($Z=72$), the $4f$ subshell is filled across the 14 lanthanoid elements ($Z=58$ to $71$).

**Step 3: Mechanism of Lanthanoid Contraction**
- The $4f$ orbitals have diffused shapes with extremely poor radial shielding ability.
- The 14 additional nuclear charges ($+14$ protons in the nucleus) are poorly shielded by the $4f^{14}$ electrons.
- As a consequence, the outer valence electrons ($5d$ and $6s$) experience an unusually high effective nuclear charge ($Z_{\\text{eff}}$), drawing them inward.
- This contraction precisely cancels the normal expansion expected from adding the 6th shell.
- Hence, $r(\\text{Zr}) = 160\\,\\text{pm} \\approx r(\\text{Hf}) = 159\\,\\text{pm}$.`,
    hints: [
      'Recall the elements between Lanthanum and Hafnium.',
      'The poor shielding of 14 $4f$ electrons causes the famous Lanthanoid contraction.'
    ]
  },
  {
    id: 'chem-per-pyq-5',
    subject: 'chemistry',
    topicId: 'chem-per-6-reactivity-diagonal-oxides',
    chapterId: 'chem-c11-periodicity',
    classLevel: 11,
    difficulty: 'easy',
    examType: 'JEE Main',
    year: 2023,
    text: `Which one of the following sets contains **only amphoteric oxides**?`,
    options: [
      '$\\text{BeO}, \\; \\text{Al}_2\\text{O}_3, \\; \\text{ZnO}, \\; \\text{SnO}_2$',
      '$\\text{Na}_2\\text{O}, \\; \\text{MgO}, \\; \\text{Al}_2\\text{O}_3, \\; \\text{SiO}_2$',
      '$\\text{CO}, \\; \\text{NO}, \\; \\text{N}_2\\text{O}, \\; \\text{SO}_2$',
      '$\\text{CaO}, \\; \\text{BaO}, \\; \\text{ZnO}, \\; \\text{PbO}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Definition of amphoteric oxides**
Amphoteric oxides are oxides that react with BOTH acids and bases to produce salt and water.

**Step 2: Key amphoteric oxides in JEE syllabus**
- $\\text{BeO}$ (reacts with $\\text{HCl}$ to give $\\text{BeCl}_2$ and with $\\text{NaOH}$ to give sodium beryllate $\\text{Na}_2[\\text{Be(OH)}_4]$)
- $\\text{Al}_2\\text{O}_3$ (reacts with $\\text{HCl}$ to give $\\text{AlCl}_3$ and with $\\text{NaOH}$ to give sodium aluminate $\\text{Na}[\\text{Al(OH)}_4]$)
- $\\text{ZnO}$ (reacts with $\\text{HCl}$ to give $\\text{ZnCl}_2$ and with $\\text{NaOH}$ to give sodium zincate $\\text{Na}_2\\text{ZnO}_2$)
- $\\text{SnO}, \\text{SnO}_2, \\text{PbO}, \\text{PbO}_2, \\text{Ga}_2\\text{O}_3, \\text{Cr}_2\\text{O}_3$

**Step 3: Analyze incorrect options**
- Option B contains strongly basic $\\text{Na}_2\\text{O}$ and basic $\\text{MgO}$.
- Option C contains neutral oxides ($\\text{CO}, \\text{NO}, \\text{N}_2\\text{O}$) and acidic $\\text{SO}_2$.
- Option D contains strongly basic $\\text{CaO}$ and $\\text{BaO}$.

Thus, $\\text{BeO}, \\text{Al}_2\\text{O}_3, \\text{ZnO}, \\text{SnO}_2$ is strictly amphoteric throughout.`,
    hints: [
      'Amphoteric oxides react with both acids and bases.',
      'Remember the classic amphoteric metals: Be, Al, Zn, Sn, Pb, Ga.'
    ]
  },
  {
    id: 'chem-per-pyq-6',
    subject: 'chemistry',
    topicId: 'chem-per-3-ionization-enthalpy-exceptions',
    chapterId: 'chem-c11-periodicity',
    classLevel: 11,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2020,
    text: `The first five successive ionization enthalpies of an element $X$ are:
$$\\text{IE}_1 = 801\\,\\text{kJ/mol}, \\quad \\text{IE}_2 = 2427\\,\\text{kJ/mol}, \\quad \\text{IE}_3 = 3660\\,\\text{kJ/mol}$$
$$\\text{IE}_4 = 25{,}026\\,\\text{kJ/mol}, \\quad \\text{IE}_5 = 32{,}828\\,\\text{kJ/mol}$$
To which Group of the Modern Periodic Table does element $X$ belong?`,
    options: [
      'Group 13',
      'Group 2',
      'Group 14',
      'Group 15'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Analyze successive jumps in ionization enthalpies**
- $\\text{IE}_1 \\rightarrow \\text{IE}_2$: increases by $\\approx 1626\\,\\text{kJ/mol}$ (normal increase as $Z_{\\text{eff}}$ increases).
- $\\text{IE}_2 \\rightarrow \\text{IE}_3$: increases by $\\approx 1233\\,\\text{kJ/mol}$ (normal increase).
- $\\text{IE}_3 \\rightarrow \\text{IE}_4$: jumps drastically from $3660\\,\\text{kJ/mol}$ to $25{,}026\\,\\text{kJ/mol}$ (an enormous **nearly 7-fold jump** of over $21{,}300\\,\\text{kJ/mol}$!).

**Step 2: Relate the giant jump to electronic configuration**
A massive discontinuous increase in ionization enthalpy occurs when all valence shell electrons have been stripped away and an electron must be removed from a completely filled, deeply penetrating noble gas core shell (e.g., $1s^2$ or $2p^6$).

**Step 3: Deduce the valence shell and Group number**
- Since three electrons can be removed with relatively modest energy, element $X$ possesses **3 valence electrons** ($ns^2 np^1$).
- The 4th electron is removed from a noble gas core ($1s^2$).
- Elements with 3 valence electrons belong to **Group 13** (Boron family: Boron $Z=5$ has $1s^2 2s^2 2p^1$).

Hence, element $X$ belongs to Group 13.`,
    hints: [
      'Look for the largest jump between successive ionization enthalpies.',
      'The jump from $\\text{IE}_3$ to $\\text{IE}_4$ means 3 valence electrons exist in the outermost shell.'
    ]
  }
];
