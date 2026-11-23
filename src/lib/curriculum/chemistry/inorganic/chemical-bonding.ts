import { Chapter } from '@/types';

export const chemicalBondingChapter: Chapter = {
  id: 'chem-c11-chemical-bonding',
  subject: 'chemistry',
  classLevel: 11,
  name: 'Chemical Bonding and Molecular Structure',
  unit: 'Inorganic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Formal Charge}: \\text{FC} = V - L - \\frac{1}{2} S \\quad (V = \\text{valence } e^-, \\; L = \\text{lone pair } e^-, \\; S = \\text{bonding } e^-)',
    '\\text{Dipole Moment}: \\mu = q \\times d \\quad (1\\,\\text{D} = 3.33564 \\times 10^{-30}\\,\\text{C}\\cdot\\text{m})',
    '\\text{Resultant Dipole Moment}: \\mu_{\\text{net}} = \\sqrt{\\mu_1^2 + \\mu_2^2 + 2 \\mu_1 \\mu_2 \\cos \\theta}',
    '\\text{Steric Number (VSEPR / Hybridization)}: \\text{SN} = \\frac{1}{2} [V + M - C + A]',
    '\\text{Bond Order (MOT)}: \\text{BO} = \\frac{N_b - N_a}{2}',
    '\\text{Magnetic Moment}: \\mu_s = \\sqrt{n(n + 2)}\\,\\text{BM} \\quad (n = \\text{number of unpaired electrons})',
    '\\text{Bond Order vs Bond Length}: \\text{Bond Length} \\propto \\frac{1}{\\text{Bond Order}}, \\quad \\text{Bond Energy} \\propto \\text{Bond Order}'
  ],
  topics: [
    {
      id: 'chem-bond-1-lewis-formal-charge-octet',
      name: '11.3.1 Kossel-Lewis Approach, Formal Charge & Octet Limitations',
      description: 'Lewis dot structures; calculation of formal charges across polyatomic ions (e.g. O3, CO3^2-, NO2^-); limitations and exceptions to octet rule: electron-deficient incomplete octets (LiCl, BeH2, BF3), odd-electron molecules (NO, NO2), and expanded octets via vacant d-orbitals (PF5, SF6, H2SO4); noble gas reactivity (XeF2, XeF4, XeO3).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-bond-2-ionic-fajans-rules',
      name: "11.3.2 Ionic Bonding, Lattice Energy & Fajan's Rules",
      description: "Formation of ionic bonds; ionization enthalpy and electron gain enthalpy energetics; lattice enthalpy (Born-Haber cycle for NaCl); Fajan's rules determining covalent character in predominantly ionic compounds: (1) small cation size, (2) large anion size, (3) high ionic charge, (4) pseudo-noble gas electron configuration (18 e- core in Ag+, Cu+ vs 8 e- noble gas core in K+, Na+); effect on melting points and solubilities (e.g. AgCl is insoluble and covalent while NaCl is soluble).",
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-bond-3-vsepr-molecular-geometry',
      name: '11.3.3 VSEPR Theory & Molecular Geometry',
      description: 'Postulates of Valence Shell Electron Pair Repulsion theory; repulsive interaction hierarchy: lp-lp > lp-bp > bp-bp; prediction of shapes and bond angles for regular and distorted geometries: Linear (BeCl2, CO2), Trigonal planar (BF3), Bent (SO2, H2O, OF2, Cl2O), Tetrahedral (CH4), Trigonal pyramidal (NH3), See-saw (SF4), T-shaped (ClF3, BrF3), Linear with lone pairs (XeF2, I3^-), Octahedral (SF6), Square pyramidal (BrF5, IF5), Square planar (XeF4), Pentagonal bipyramidal (IF7).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-bond-4-vbt-hybridization-bents-rule',
      name: "11.3.4 Valence Bond Theory, Hybridization & Bent's Rule",
      description: "Orbital overlap principle; sigma (axial overlap) vs pi (lateral/sideways overlap) bonds; concept of orbital hybridization: sp, sp2, sp3, sp3d, sp3d2, sp3d3; axial vs equatorial bond lengths in PCl5 (axial bonds are longer and weaker due to greater 90° repulsions from 3 equatorial bonds); Bent's rule: more electronegative substituents prefer hybrid orbitals with less s-character (axial in sp3d, e.g. PCl3F2 has both F atoms at axial positions), while lone pairs and multiple bonds prefer orbitals with more s-character (equatorial).",
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-bond-5-dipole-moment-polarity',
      name: '11.3.5 Dipole Moment, Molecular Polarity & NH3 vs NF3',
      description: 'Definition of dipole moment as a vector pointing from positive to negative center; cancellation of dipoles in highly symmetrical geometries (CO2, BF3, CCl4, SF6, trans-isomers); classic comparison of NH3 vs NF3: in NH3, orbital dipole of nitrogen lone pair reinforces the resultant N-H bond dipoles (net mu = 1.47 D), whereas in NF3, highly electronegative F atoms pull electron density downward, opposing the lone pair dipole (net mu = 0.24 D).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'chem-bond-6-mot-homonuclear-diatomics',
      name: '11.3.6 Molecular Orbital Theory (MOT) & Magnetic Properties',
      description: 'Linear Combination of Atomic Orbitals (LCAO) conditions (comparable energies, proper symmetry); bonding (constructive interference, psi_b) vs antibonding (destructive interference, nodal plane, psi_a) MOs; 2s-2p mixing in lighter elements (Z <= 14, B2, C2, N2) causing pi(2p_x) = pi(2p_y) to lie lower in energy than sigma(2p_z); standard energy order for Z > 14 (O2, F2); bond order calculation; magnetic character: paramagnetism of O2 (two unpaired electrons in degenerate pi* 2p_x and pi* 2p_y orbitals) and B2; stability and bond order comparisons in dioxygen series: O2^2- (BO=1), O2^- (BO=1.5), O2 (BO=2), O2^+ (BO=2.5).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-bond-7-hydrogen-bonding-intermolecular',
      name: '11.3.7 Hydrogen Bonding & Intermolecular Forces',
      description: 'Requirements for hydrogen bonding: hydrogen bonded to highly electronegative, small atoms (F, O, N); Intermolecular H-bonding (association of molecules, leading to elevated boiling points, higher viscosity, e.g. H2O vs H2S, HF vs HCl, p-nitrophenol) vs Intramolecular H-bonding (chelation ring within single molecule, leading to higher volatility and lower boiling point, e.g. o-nitrophenol, salicylaldehyde); structure of ice and anomalous open cage density maximum at 4°C.',
      estimatedHours: 3,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    '$\\text{O}_2$ is PARAMAGNETIC with two unpaired electrons located in degenerate antibonding orbitals ($\\pi^* 2p_x$ and $\\pi^* 2p_y$), which Valence Bond Theory failed to explain but Molecular Orbital Theory successfully demonstrated.',
    'For homonuclear diatomics with $\\le 14$ electrons (like $\\text{B}_2, \\text{C}_2, \\text{N}_2$), $2s-2p$ orbital mixing pushes $\\sigma 2p_z$ higher in energy than $\\pi 2p_x$ and $\\pi 2p_y$. In $\\text{C}_2$, all 4 valence bonding electrons are in $\\pi$-molecular orbitals, meaning the double bond in $\\text{C}_2$ consists of TWO $\\pi$ BONDS and NO $\\sigma$ bond!',
    'The dipole moment of $\\text{NH}_3$ ($1.47\\,\\text{D}$) is much greater than that of $\\text{NF}_3$ ($0.24\\,\\text{D}$) because in $\\text{NH}_3$, the nitrogen lone pair dipole and the three $\\text{N}-\\text{H}$ bond dipoles act in the SAME direction, whereas in $\\text{NF}_3$, the three highly electronegative fluorines pull in the OPPOSITE direction to the lone pair dipole.',
    'In $\\text{PCl}_5$ (trigonal bipyramidal, $sp^3d$), the two axial $\\text{P}-\\text{Cl}$ bonds ($240\\,\\text{pm}$) are LONGER and WEAKER than the three equatorial $\\text{P}-\\text{Cl}$ bonds ($202\\,\\text{pm}$) because axial bonds experience greater repulsive strain at $90^\\circ$ from equatorial bonds.',
    'o-Nitrophenol is steam volatile and has a lower boiling point than p-nitrophenol because of INTRAMOLECULAR hydrogen bonding (forming a 6-membered chelate ring), whereas p-nitrophenol undergoes extensive INTERMOLECULAR hydrogen bonding that associates molecules together.'
  ],
  commonTraps: [
    'Assuming bond order determines stability solely without checking antibonding electrons: If two species have identical bond orders (e.g., $\\text{NO}^+$ and $\\text{CO}$ have $\\text{BO}=3$; $\\text{O}_2^-$ and $\\text{N}_2^-$ have $\\text{BO}=2.5$), the species with FEWER antibonding electrons is MORE stable.',
    'Confusing molecular geometry with electron pair geometry: In $\\text{XeF}_4$, electron pair geometry is Octahedral ($sp^3d^2$), but because the two lone pairs occupy trans axial positions to minimize repulsions, the molecular geometry is strictly SQUARE PLANAR.',
    'Assuming higher electronegativity always means higher dipole moment: Even though F is more electronegative than Cl, the dipole moment of methyl chloride ($\\text{CH}_3\\text{Cl} = 1.86\\,\\text{D}$) is HIGHER than methyl fluoride ($\\text{CH}_3\\text{F} = 1.82\\,\\text{D}$) because the greater $\\text{C}-\\text{Cl}$ bond distance ($d$) overcompensates for the slightly smaller charge separation ($q$).',
    'Applying $s-p$ mixing to $\\text{O}_2$ or $\\text{F}_2$: In $\\text{O}_2$ and $\\text{F}_2$ ($> 14$ electrons), $\\sigma 2p_z$ is LOWER in energy than $\\pi 2p_x = \\pi 2p_y$. Never invert them for $\\text{O}_2$!'
  ]
};
