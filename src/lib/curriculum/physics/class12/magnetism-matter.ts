import { Chapter } from '@/types';

export const magnetismMatterChapter: Chapter = {
  id: 'phy-c12-magnetism-matter',
  subject: 'physics',
  classLevel: 12,
  name: 'Magnetism and Matter',
  unit: 'Electrodynamics',
  weightage: 'medium',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Bar Magnet Dipole Moment}: M = m (2l) \\quad (m = \\text{pole strength in A}\\cdot\\text{m})',
    '\\text{Bar Magnet Axial Field}: B_{\\text{axial}} = \\frac{\\mu_0}{4\\pi} \\frac{2 M}{r^3}, \\quad B_{\\text{equatorial}} = \\frac{\\mu_0}{4\\pi} \\frac{M}{r^3}',
    '\\text{Gauss\'s Law for Magnetism}: \\oint \\vec{B} \\cdot d\\vec{A} = 0 \\quad (\\text{no isolated magnetic monopoles})',
    '\\text{Vibration Magnetometer}: T = 2\\pi\\sqrt{\\frac{I}{M B_H}} \\implies B_H = \\frac{4\\pi^2 I}{M T^2}',
    '\\text{Earth\'s Magnetic Field}: B_H = B_E \\cos\\delta, \\quad B_V = B_E \\sin\\delta, \\quad \\tan\\delta = \\frac{B_V}{B_H}',
    '\\text{Apparent Dip Relation}: \\cot^2\\delta = \\cot^2\\delta_1 + \\cot^2\\delta_2 \\quad (\\text{in two mutually perpendicular planes})',
    '\\text{Permeability & Susceptibility}: \\vec{B} = \\mu_0(\\vec{H} + \\vec{M}), \\quad \\mu_r = 1 + \\chi_m, \\quad \\mu = \\mu_0 \\mu_r',
    '\\text{Curie\'s Law (Paramagnetism)}: \\chi_m = \\frac{C}{T}, \\quad \\text{Curie-Weiss Law (Ferromagnetism)}: \\chi_m = \\frac{C}{T - T_c} \\; (T > T_c)'
  ],
  topics: [
    {
      id: 'phy-mat-1-bar-magnet-solenoid',
      name: '12.5.1 Bar Magnet, Pole Strength & Equivalent Solenoid',
      description: 'Magnetic dipole moment M = m * 2l; axial and equatorial fields; cutting a bar magnet transversely (m unchanged, l halved -> M/2) vs longitudinally (m halved, l unchanged -> M/2).',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-mat-2-gauss-law-magnetism',
      name: '12.5.2 Gauss\'s Law for Magnetism & Field Line Topology',
      description: 'Continuous closed loops of B; absence of magnetic monopoles; comparison between electric and magnetic field lines.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-mat-3-vibration-magnetometer',
      name: '12.5.3 Oscillation of Magnetic Dipoles & Vibration Magnetometer',
      description: 'Restoring torque tau = -M B_H sin theta approx -M B_H theta; period formula T = 2 pi sqrt(I / (M B_H)); comparing magnetic moments and horizontal field strengths.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-mat-4-earths-magnetism',
      name: '12.5.4 Elements of Earth\'s Magnetism (Declination, Dip & Components)',
      description: 'Geographic meridian vs magnetic meridian; magnetic declination theta; angle of dip delta (0 at magnetic equator, 90 deg at magnetic poles); true dip vs apparent dip in unaligned planes.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-mat-5-magnetization-susceptibility',
      name: '12.5.5 Magnetization (M), Magnetic Intensity (H) & Susceptibility',
      description: 'Intensity of magnetization M = m_net / V; magnetizing field H; constitutive relation B = mu_0(H + M); magnetic susceptibility chi_m = M / H and relative permeability mu_r = 1 + chi_m.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-mat-6-dia-para-ferro',
      name: '12.5.6 Dia-, Para-, and Ferromagnetic Substances',
      description: 'Atomic origin of magnetic behavior (electron orbital vs spin moments); diamagnetism (chi < 0, temperature independent, superconductors as perfect diamagnets chi = -1); paramagnetism (chi > 0, Curie\'s law); ferromagnetism (domain theory, Curie temperature Tc transition to paramagnetism).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-mat-7-permanent-electromagnets',
      name: '12.5.7 Permanent Magnets vs Electromagnets & Soft Iron Cores',
      description: 'Characteristics of permanent magnets (high retentivity, high coercivity, e.g., Alnico, steel) vs electromagnets and transformer cores (high retentivity, low coercivity, minimal energy loss, e.g., soft iron).',
      estimatedHours: 2,
      isHighWeightage: false
    }
  ],
  guide: {
    overview: 'Magnetism and Matter is a concise, formula-driven chapter that reliably features 1 direct question in JEE Main (most frequently on Earth\'s magnetic elements and apparent dip, or the classification of dia/para/ferro materials). Note that Hysteresis curves were removed in the rationalized JEE 2027 syllabus.',
    ncertPointers: [
      'Gauss\'s law for magnetism states that $\\oint \\vec{B} \\cdot d\\vec{A} = 0$ over any closed surface. This reflects the fundamental physical reality that ISOLATED MAGNETIC MONOPOLES DO NOT EXIST.',
      'Superconductors exhibit PERFECT DIAMAGNETISM (the Meissner effect). Inside a superconductor, the magnetic field is strictly zero ($\\vec{B} = 0$), which means its relative permeability is $\\mu_r = 0$ and its magnetic susceptibility is $\\chi_m = -1$.',
      'At the magnetic equator: the dip angle is $\\delta = 0^\\circ$, so the vertical component of Earth\'s field is ZERO ($B_V = 0$) and $B_E = B_H$. At the magnetic poles: the dip angle is $\\delta = 90^\\circ$, so $B_H = 0$ and $B_E = B_V$. A compass needle can rotate only in a horizontal plane, so it becomes USELESS at the magnetic poles.',
      'Above the Curie Temperature $T_c$, a ferromagnetic substance loses its domain alignment and undergoes a phase transition to become PARAMAGNETIC, with susceptibility following the Curie-Weiss law: $\\chi_m = \\frac{C}{T - T_c}$.'
    ],
    commonTraps: [
      'Apparent Dip in arbitrary plane: In a vertical plane making an angle $\\theta$ with the magnetic meridian, the horizontal component becomes $B_H\' = B_H \\cos\\theta$, while the vertical component $B_V$ is unchanged. Therefore, apparent dip $\\delta\'$ satisfies: $\\tan\\delta\' = \\frac{B_V}{B_H \\cos\\theta} = \\frac{\\tan\\delta}{\\cos\\theta}$. Since $\\cos\\theta < 1$, apparent dip is ALWAYS GREATER than true dip!',
      'Two perpendicular planes apparent dip shortcut: If $\\delta_1$ and $\\delta_2$ are apparent dips measured in ANY two mutually perpendicular vertical planes, the true dip $\\delta$ satisfies: $\\cot^2\\delta = \\cot^2\\delta_1 + \\cot^2\\delta_2$.',
      'Cutting a bar magnet: If cut perpendicular to its length into 2 equal halves, pole strength $m$ is unchanged, but length is halved, so $M\' = M/2$. If cut along its length, length is unchanged, but pole strength is halved, so $M\' = M/2$. In BOTH cases, the magnetic moment of each piece is $M/2$!',
      'Curie law for diamagnetism trap: Diamagnetism is INDEPENDENT of temperature (it arises from induced orbital electronic currents). Only paramagnetism follows Curie\'s law $\\chi \\propto 1/T$.'
    ],
    shortcutsVsConcepts: [
      'Apparent Dip Perpendicular Planes: $\\cot^2\\delta = \\cot^2\\delta_1 + \\cot^2\\delta_2$. Instant 10-second solution without drawing 3D planes.',
      'Vibration Magnetometer Period: $T \\propto \\frac{1}{\\sqrt{M B_H}}$. If two identical magnets are placed one over the other with like poles together: $M_{\\text{sum}} = M_1 + M_2$. With opposite poles: $M_{\\text{diff}} = M_1 - M_2$. Ratio of periods: $\\frac{T_{\\text{sum}}}{T_{\\text{diff}}} = \\sqrt{\\frac{M_1 - M_2}{M_1 + M_2}}$.',
      'Permeability conversion: $\\mu_r = 1 + \\chi_m$. For air $\\chi_m \\approx 0 \\implies \\mu_r = 1$. For diamagnets, $\\chi_m \\approx -10^{-5} \\implies \\mu_r < 1$.'
    ]
  }
};
