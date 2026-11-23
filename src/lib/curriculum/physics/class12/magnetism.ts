import { Chapter } from '@/types';

export const movingChargesMagnetismChapter: Chapter = {
  id: 'phy-c12-magnetism',
  subject: 'physics',
  classLevel: 12,
  name: 'Moving Charges and Magnetism',
  unit: 'Electrodynamics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Biot-Savart Law}: d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\hat{r})}{r^2} \\quad \\left(\\frac{\\mu_0}{4\\pi} = 10^{-7} \\text{ T}\\cdot\\text{m}/\\text{A}\\right)',
    '\\text{Circular Ring on Axis}: B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}, \\quad B_{\\text{center}} = \\frac{\\mu_0 I}{2R}',
    '\\text{Straight Wire}: B = \\frac{\\mu_0 I}{4\\pi d}(\\sin\\theta_1 + \\sin\\theta_2), \\quad B_{\\text{infinite}} = \\frac{\\mu_0 I}{2\\pi d}',
    '\\text{Ampere\'s Circuital Law}: \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}}',
    '\\text{Solenoid & Toroid}: B_{\\text{solenoid}} = \\mu_0 n I, \\quad B_{\\text{toroid}} = \\frac{\\mu_0 N I}{2\\pi r}',
    '\\text{Lorentz Force}: \\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}), \\quad \\text{Magnetic Work} = \\vec{F}_B \\cdot \\vec{v} \\equiv 0',
    '\\text{Helical Motion}: r = \\frac{m v_\\perp}{q B} = \\frac{m v \\sin\\theta}{q B}, \\quad T = \\frac{2\\pi m}{q B}, \\quad \\text{Pitch } p = v_\\parallel T = \\frac{2\\pi m v \\cos\\theta}{q B}',
    '\\text{Force on Current Element}: \\vec{F} = I (\\vec{L} \\times \\vec{B}), \\quad \\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} \\; (\\text{parallel currents})',
    '\\text{Magnetic Dipole Moment & Torque}: \\vec{M} = N I \\vec{A}, \\quad \\vec{\\tau} = \\vec{M} \\times \\vec{B}, \\quad U = -\\vec{M} \\cdot \\vec{B}',
    '\\text{Galvanometer Conversion to Ammeter}: S = \\frac{I_g R_g}{I - I_g} \\quad (\\text{low shunt in parallel})',
    '\\text{Galvanometer Conversion to Voltmeter}: R = \\frac{V}{I_g} - R_g \\quad (\\text{high multiplier in series})'
  ],
  topics: [
    {
      id: 'phy-mag-1-biot-savart-ring',
      name: '12.4.1 Biot-Savart Law & Circular Current Loops',
      description: 'Differential magnetic field vector, permeability of free space mu_0; axial and central field of circular coils; circular arcs B = (mu_0 I theta) / (4 pi R); Helmholz coil uniform field.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-mag-2-straight-wire-polygons',
      name: '12.4.2 Field of Finite Straight Wires & Regular Polygons',
      description: 'Derivation of B = (mu_0 I / 4 pi d)(sin theta1 + sin theta2); infinite and semi-infinite wires; magnetic field at the center of regular polygons (triangles, squares, hexagons).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-mag-3-ampere-law-solenoid',
      name: '12.4.3 Ampere\'s Circuital Law, Solenoids & Toroids',
      description: 'Line integral of B around closed loops; solid cylindrical conductors (B proportional to r inside, 1/r outside); ideal long solenoids and toroids; end field B_end = 1/2 mu_0 n I.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-mag-4-lorentz-force-velocity-filter',
      name: '12.4.4 Lorentz Force & Velocity Selector',
      description: 'Crossed electric and magnetic fields; velocity filter v = E / B for undeflected particle transmission; magnetic force does zero work on moving charges (constant kinetic energy).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-mag-5-helical-motion-trajectories',
      name: '12.4.5 Charged Particle Trajectories in Uniform Magnetic Fields',
      description: 'Perpendicular entry (uniform circular motion, radius r = mv / qB = sqrt(2mK) / qB, frequency independent of speed); oblique entry (helical spiral, pitch p = v_parallel * T).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-mag-6-force-conductors-parallel-wires',
      name: '12.4.6 Magnetic Force on Conductors & Parallel Currents',
      description: 'Laplace force F = I (L x B) on straight and arbitrary curved wires (L = displacement vector connecting endpoints); force between parallel currents; definition of the SI Ampere.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-mag-7-magnetic-dipole-torque',
      name: '12.4.7 Magnetic Dipole Moment of Planar Loops & Torque',
      description: 'Dipole moment vector M = N I A (right hand rule); torque tau = M x B; magnetic potential energy U = -M . B; orbital magnetic moment of electron and Bohr magneton mu_B = e hbar / (2 m_e).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-mag-8-mcg-principles',
      name: '12.4.8 Moving Coil Galvanometer (MCG) & Sensitivities',
      description: 'Radial magnetic field using concave pole pieces and soft iron core; restoring torque of phosphor bronze spring; current sensitivity Si = theta/I and voltage sensitivity Sv = theta/V.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-mag-9-ammeter-voltmeter-conversion',
      name: '12.4.9 Conversion of Galvanometer to Ammeter & Voltmeter',
      description: 'Calculating shunt resistance S = Ig * Rg / (I - Ig) for ammeters; calculating series multiplier resistance R = V / Ig - Rg for voltmeters; voltmeter loading error.',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Moving Charges and Magnetism is a powerhouse chapter in JEE Physics, accounting for 2 questions in every JEE Main session and intricate multi-concept questions in JEE Advanced. The high-yield core focuses on: (1) Helical trajectories and radius-energy formulas, (2) Biot-Savart law on loop axes and polygon centers, (3) Galvanometer shunts and multipliers, and (4) Force between parallel currents.',
    ncertPointers: [
      'The magnetic force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ is ALWAYS perpendicular to the particle velocity $\\vec{v}$. Therefore, the instantaneous power delivered by magnetic force is ZERO ($\\vec{F} \\cdot \\vec{v} \\equiv 0$). A purely magnetic field CANNOT change the speed or kinetic energy of a charged particle; it changes ONLY its direction of motion.',
      'Unlike currents in parallel wires REPEL, and LIKE currents in parallel wires ATTRACT! (Notice the contrast with electrostatic charges, where like charges repel).',
      'The time period of circular motion of a charged particle in a uniform magnetic field ($T = \\frac{2\\pi m}{q B}$) is completely INDEPENDENT of its speed $v$ and radius $r$. Fast particles describe larger circles, but take the exact same time per revolution.',
      'In a Moving Coil Galvanometer, a RADIAL magnetic field is achieved by using CONCAVE magnetic pole pieces combined with a cylindrical soft iron core. This ensures that the coil plane is always parallel to the field lines ($\\theta = 90^\\circ$), giving a strictly linear scale: $I \\propto \\theta$.',
      'Increasing current sensitivity by doubling the number of turns $N$ ($S_i \\to 2S_i$) DOES NOT necessarily increase voltage sensitivity ($S_v$) because doubling turns doubles the coil wire resistance $R_g$, leaving $S_v = S_i / R_g$ unchanged!'
    ],
    commonTraps: [
      'Curved wire magnetic force: For ANY curved wire in a uniform magnetic field $\\vec{B}$, the magnetic force is $\\vec{F} = I(\\vec{L} \\times \\vec{B})$, where $\\vec{L}$ is the straight VECTOR DISPLACEMENT from the starting point to the ending point! For a closed loop, $\\vec{L} = 0$, so net force is ZERO.',
      'Radius in terms of kinetic energy: $r = \\frac{p}{q B} = \\frac{\\sqrt{2m K}}{q B} = \\frac{\\sqrt{2m q V}}{q B}$. When comparing an alpha particle ($m_\\alpha = 4m_p, q_\\alpha = 2e$) and a proton ($m_p, e$) accelerated through the same potential $V$: $r \\propto \\frac{\\sqrt{m/q}}{B}$.',
      'Solenoid end field factor of 1/2: At the exact end of a long ideal solenoid, the axial magnetic field is HALVED: $B_{\\text{end}} = \\frac{1}{2} \\mu_0 n I$, compared to $B_{\\text{center}} = \\mu_0 n I$.',
      'Ammeter vs Voltmeter conversion: Shunt is in PARALLEL to convert to ammeter ($S \\ll R_g$); Multiplier is in SERIES to convert to voltmeter ($R \\gg R_g$).'
    ],
    shortcutsVsConcepts: [
      'Radius of Curvature in Magnetic Field: $r = \\frac{m v}{q B}$. In terms of accelerating voltage $V$: $r = \\frac{1}{B}\\sqrt{\\frac{2m V}{q}}$.',
      'Parallel Currents Force Shortcut: $F/L = \\frac{2 \\times 10^{-7} I_1 I_2}{d}$. If currents are in the same direction, force is attractive; if opposite, repulsive.',
      'Ammeter Shunt Shortcut: If an ammeter needs to increase its range by a factor of $n$ ($I = n I_g$), the required shunt is simply $S = \\frac{R_g}{n - 1}$. Instant 5-second calculation!'
    ]
  }
};
