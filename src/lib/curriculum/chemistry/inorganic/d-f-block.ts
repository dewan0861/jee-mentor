import { Chapter } from '@/types';

export const dAndFBlockChapter: Chapter = {
  id: 'chem-c12-d-f-block',
  subject: 'chemistry',
  classLevel: 12,
  name: 'The d- and f-Block Elements',
  unit: 'Inorganic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{General Electronic Configuration (d-block)}: (n-1)d^{1-10} ns^{1-2}',
    '\\text{Spin-Only Magnetic Moment}: \\mu_s = \\sqrt{n(n+2)}\\,\\text{BM} \\quad (n = \\text{number of unpaired } d\\text{-electrons})',
    '\\text{Chromate-Dichromate Equilibrium}: 2\\text{CrO}_4^{2-} \\; (\\text{yellow}) + 2\\text{H}^+ \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-} \\; (\\text{orange}) + \\text{H}_2\\text{O}',
    '\\text{Dichromate in Acidic Medium}: \\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\longrightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O} \\quad (E^0 = +1.33\\,\\text{V})',
    '\\text{Permanganate in Acidic Medium}: \\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\longrightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O} \\quad (E^0 = +1.51\\,\\text{V})',
    '\\text{Permanganate in Neutral/Alkaline Medium}: \\text{MnO}_4^- + 2\\text{H}_2\\text{O} + 3e^- \\longrightarrow \\text{MnO}_2 + 4\\text{OH}^-',
    '\\text{Permanganate Oxidizing Iodide (Alkaline)}: \\text{I}^- + 2\\text{MnO}_4^- + \\text{H}_2\\text{O} \\longrightarrow \\text{IO}_3^- + 2\\text{MnO}_2 + 2\\text{OH}^-',
    '\\text{Lanthanoid Basicity Trend}: \\text{La(OH)}_3 \\; (\\text{most basic}) \\longrightarrow \\text{Lu(OH)}_3 \\; (\\text{least basic, due to contraction})'
  ],
  topics: [
    {
      id: 'chem-df-1-electronic-config-physical-props',
      name: '12.5.1 Electronic Configurations & Physical Trends of 3d Metals',
      description: 'Position in periodic table (groups 3-12); electronic configurations of 3d elements with exceptions of Cr (3d5 4s1) and Cu (3d10 4s1); atomic and ionic radii trends (initial decrease, plateau across middle, slight increase at Zn due to d10-d10 repulsions); metallic bonding enthalpy and melting points (maximum at Cr, Mo, W due to maximum unpaired d-electrons forming strong covalent bonds; Zn, Cd, Hg have low melting points because filled d10 subshells do not participate in metallic bonding); ionization enthalpies and standard electrode potentials E^0(M2+/M).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-df-2-oxidation-states-redox-stability',
      name: '12.5.2 Variable Oxidation States & Redox Potentials',
      description: 'Wide variety of oxidation states arising from small energy difference between (n-1)d and ns orbitals; maximum oxidation state equals sum of 4s and 3d electrons up to Mn (+7 in KMnO4); decrease in higher oxidation states towards copper; relative stability of +2 vs +3 states: Mn2+ (3d5 half-filled) is more stable than Mn3+ (strong oxidant), Fe3+ (3d5) is more stable than Fe2+ (reductant); Cr2+ (3d4) is a reducing agent (oxidizes to stable t2g3 Cr3+), while Mn3+ (3d4) is an oxidizing agent.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-df-3-magnetic-color-catalytic-interstitial',
      name: '12.5.3 Magnetic Properties, Colored Ions, Catalysis & Interstitial Compounds',
      description: 'Paramagnetism, diamagnetism, and ferromagnetism (Fe, Co, Ni); calculation of spin-only magnetic moment mu = sqrt(n(n+2)) BM; explanation of color in transition metal complexes via d-d electronic transitions in split d-orbitals; colorless ions with d0 (Sc3+, Ti4+) or d10 (Zn2+, Cu+); catalytic properties (variable oxidation states, vacant orbitals, surface adsorption e.g. V2O5 in Contact process, Fe in Haber process, TiCl4 in Ziegler-Natta polymerization); interstitial compounds (small atoms H, C, N trapped in crystal lattices: hard, non-stoichiometric, high melting points, retaining metallic conductivity); alloy formation (brass, bronze, stainless steel).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-df-4-dichromate-permanganate',
      name: '12.5.4 Important Compounds: Potassium Dichromate & Permanganate',
      description: 'Potassium Dichromate K2Cr2O7: preparation from chromite ore FeCr2O4; yellow chromate CrO4^2- (tetrahedral) and orange dichromate Cr2O7^2- (two tetrahedra sharing one oxygen corner, Cr-O-Cr angle 126°) pH-dependent equilibrium; strong oxidizing actions in acidic medium (oxidizes Fe2+ to Fe3+, I- to I2, H2S to S, Sn2+ to Sn4+); Chromyl chloride test (CrO2Cl2 red vapor) for chloride ions; Potassium Permanganate KMnO4: preparation from pyrolusite ore MnO2; dark green manganate K2MnO4 (paramagnetic, 3d1) disproportionation in acidic medium to purple permanganate KMnO4 (diamagnetic, 3d0, intense color due to Ligand-to-Metal Charge Transfer LMCT); quantitative oxidation reactions in acidic, neutral, and alkaline media.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-df-5-lanthanoids-contraction',
      name: '12.5.5 Lanthanoids: Configurations, Oxidation States & Contraction',
      description: 'General configuration [Xe] 4f1-14 5d0-1 6s2; predominant +3 oxidation state; anomalous oxidation states: Ce4+ (stable empty 4f0 noble gas configuration, acts as powerful oxidant in analytical chemistry), Tb4+ (half-filled 4f7), Eu2+ (stable half-filled 4f7, strong reductant), Yb2+ (fully filled 4f14); Lanthanoid Contraction: progressive, cumulative decrease in atomic and ionic radii of Ln3+ across the 14 elements due to imperfect shielding of one 4f electron by another; Consequences: (1) nearly identical radii of 4d and 5d elements (Zr-Hf, Nb-Ta), (2) tremendous difficulty in chemical separation, (3) decrease in basic strength of hydroxides: La(OH)3 is most basic, Lu(OH)3 is least basic; Mischmetall alloy composition and applications.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-df-6-actinoids-comparison',
      name: '12.5.6 Actinoids: Characteristics & Comparison with Lanthanoids',
      description: 'General configuration [Rn] 5f1-14 6d0-1 7s2; all are radioactive; exhibit much wider range of oxidation states (+3, +4, +5, +6, +7, e.g. U, Np, Pu) because 5f, 6d, and 7s subshells have very small energy differences; Actinoid Contraction is significantly greater than lanthanoid contraction due to even poorer shielding by 5f electrons compared to 4f; comparison between Lanthanoids and Actinoids (binding energies, magnetic properties, tendency to form oxocations e.g. UO2^2+, complexation tendency, and chemical reactivity).',
      estimatedHours: 3,
      isHighWeightage: false
    }
  ],
  ncertPointers: [
    '$\\text{KMnO}_4$ has an intense purple color despite $\\text{Mn}^{7+}$ having a $3d^0$ configuration (zero $d$-electrons!). This deep color is NOT caused by $d-d$ transitions, but rather by **Ligand-to-Metal Charge Transfer (LMCT)** from the filled $2p$ orbitals of oxygen to the empty $3d$ orbitals of manganese.',
    'Chromyl chloride test: Heating a solid chloride salt with $\\text{K}_2\\text{Cr}_2\\text{O}_7$ and concentrated $\\text{H}_2\\text{SO}_4$ evolves oily RED VAPORS of chromyl chloride ($\\text{CrO}_2\\text{Cl}_2$). Passing these vapors into $\\text{NaOH}$ gives a yellow solution of $\\text{Na}_2\\text{CrO}_4$, which on reaction with lead acetate gives a YELLOW precipitate of $\\text{PbCrO}_4$. Fluorides, bromides, iodides, and covalent chlorides ($\text{HgCl}_2, \text{AgCl}$) do NOT give this test!',
    '$\\text{Ce}^{4+}$ is a widely used analytical oxidizing agent (volumetric cerimetry) because its stable state in aqueous solution is $\\text{Ce}^{3+}$ ($E^0_{\\text{Ce}^{4+}/\\text{Ce}^{3+}} = +1.74\\,\\text{V}$), even though $\\text{Ce}^{4+}$ possesses the noble gas $[\\text{Xe}]$ core.',
    'Basicity of Lanthanoid hydroxides: Decreases steadily from $\\text{La(OH)}_3$ to $\\text{Lu(OH)}_3$. As size of $\\text{Ln}^{3+}$ decreases due to lanthanoid contraction, covalent character of the $\\text{Ln}-\\text{OH}$ bond increases according to Fajan\'s rules, making $\\text{La(OH)}_3$ the most basic and $\\text{Lu(OH)}_3$ the least basic.',
    'In alkaline solution, $\\text{KMnO}_4$ oxidizes iodide ion ($\\text{I}^-$) to IODATE ($\\text{IO}_3^-$), whereas in acidic solution it oxidizes $\\text{I}^-$ to IODINE ($\\text{I}_2$).'
  ],
  commonTraps: [
    'Calculating magnetic moment for transition metal ions: Always remove valence $4s$ electrons FIRST before removing $3d$ electrons! For $\\text{Fe}^{2+}$ ($Z=26$), the configuration is $[\\text{Ar}] 3d^6$ (NOT $3d^4 4s^2$). Unpaired electrons $= 4 \\implies \\mu_s = \\sqrt{4(6)} = \\sqrt{24} \\approx 4.90\\,\\text{BM}$.',
    'Confusing Manganate ($\\text{MnO}_4^{2-}$) with Permanganate ($\\text{MnO}_4^-$): Manganate is GREEN and PARAMAGNETIC ($d^1, \\text{O.S.} = +6$), whereas Permanganate is PURPLE and DIAMAGNETIC ($d^0, \\text{O.S.} = +7$).',
    'Chromate vs Dichromate structure: In yellow $\\text{CrO}_4^{2-}$, all four $\\text{Cr}-\\text{O}$ bond lengths are identical ($166\\,\\text{pm}$) due to resonance. In orange $\\text{Cr}_2\\text{O}_7^{2-}$, there are six equivalent terminal $\\text{Cr}-\\text{O}$ bonds ($163\\,\\text{pm}$) and two bridging $\\text{Cr}-\\text{O}$ bonds ($179\\,\\text{pm}$) at the $\\text{Cr}-\\text{O}-\\text{Cr}$ oxygen bridge.',
    'Assuming all transition metals are hard with high melting points: Zinc ($\\text{Zn}$), Cadmium ($\\text{Cd}$), and Mercury ($\\text{Hg}$) have completely filled $d^{10}$ subshells in both elemental and common ionic states. Because no unpaired $d$-electrons participate in metallic bonding, they are soft metals with low melting points (Mercury is a liquid at room temperature).'
  ]
};
