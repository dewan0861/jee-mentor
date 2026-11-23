import { Chapter } from '@/types';

export const solidsElasticityChapter: Chapter = {
  id: 'phy-c11-solids-elasticity',
  subject: 'physics',
  classLevel: 11,
  name: 'Mechanical Properties of Solids (Elasticity)',
  unit: 'Properties of Bulk Matter',
  weightage: 'medium',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Hooke\'s Law}: \\text{Stress} = E \\times \\text{Strain} \\quad (\\text{within proportional limit})',
    '\\text{Young\'s Modulus}: Y = \\frac{\\text{Tensile Stress}}{\\text{Longitudinal Strain}} = \\frac{F/A}{\\Delta L/L} = \\frac{F L}{A \\Delta L}',
    '\\text{Shear (Rigidity) Modulus}: \\eta = \\frac{\\text{Shear Stress}}{\\text{Shear Strain}} = \\frac{F/A}{\\theta} = \\frac{F L}{A \\Delta x}',
    '\\text{Bulk Modulus & Compressibility}: B = -\\frac{\\Delta P}{\\Delta V / V} = -V \\frac{dP}{dV}, \\quad K = \\frac{1}{B}',
    '\\text{Poisson\'s Ratio}: \\sigma = -\\frac{\\text{Lateral Strain}}{\\text{Longitudinal Strain}} = -\\frac{\\Delta r / r}{\\Delta L / L} \\quad (-1 \\le \\sigma \\le 0.5)',
    '\\text{Inter-Moduli Relations}: Y = 3B(1 - 2\\sigma) = 2\\eta(1 + \\sigma), \\quad \\frac{9}{Y} = \\frac{1}{B} + \\frac{3}{\\eta}',
    '\\text{Elastic Strain Energy Density}: u = \\frac{U}{\\text{Volume}} = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain} = \\frac{1}{2} Y (\\text{Strain})^2 = \\frac{\\text{Stress}^2}{2Y}',
    '\\text{Elongation under Own Weight}: \\Delta L = \\frac{\\rho g L^2}{2Y} = \\frac{M g L}{2 Y A}',
    '\\text{Thermal Stress in Clamped Rod}: \\text{Stress} = Y \\alpha \\Delta T, \\quad \\text{Thermal Force } F = Y A \\alpha \\Delta T',
    '\\text{Depression of Centrally Loaded Beam}: \\delta = \\frac{W L^3}{4 Y b d^3} \\quad (b = \\text{breadth}, d = \\text{depth})',
    '\\text{Torsional Couple on Wire}: \\tau = C \\theta = \\left(\\frac{\\pi \\eta r^4}{2 L}\\right) \\theta'
  ],
  topics: [
    {
      id: 'phy-sol-1-stress-strain-types',
      name: '7.1 Types of Stress and Strain',
      description: 'Internal restoring force per unit area; normal stress (tensile and compressive), tangential (shear) stress, hydraulic (volumetric) stress; longitudinal, shear, and volumetric strain.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-sol-2-stress-strain-curve',
      name: '7.2 Stress-Strain Curve for Metallic Wires',
      description: 'Proportional limit (Hooke\'s law holds), elastic limit (yield point), plastic deformation, strain hardening, ultimate tensile strength (UTS), fracture point; ductile vs brittle materials and elastomers.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-sol-3-moduli-elasticity',
      name: '7.3 Young\'s Modulus, Shear Modulus & Bulk Modulus',
      description: 'Definitions, SI units (N/m^2 or Pa), physical meaning of stiffness; isothermal bulk modulus of an ideal gas B_iso = P vs adiabatic bulk modulus B_adia = gamma * P.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-sol-4-poissons-ratio-relations',
      name: '7.4 Poisson\'s Ratio & Inter-Moduli Relations',
      description: 'Lateral contraction during axial stretch; theoretical bounds (-1 to 0.5) and physical bounds (0 to 0.5 for incompressible solids); algebraic cross-relations between Y, B, eta, and sigma.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-sol-5-strain-energy-work',
      name: '7.5 Elastic Strain Energy & Work Done in Stretching',
      description: 'Derivation of work done W = 1/2 * F * Delta L; strain energy density formula u = 1/2 * stress * strain; energy lost as heat during loading/unloading (elastic hysteresis loop).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-sol-6-elongation-own-weight',
      name: '7.6 Elongation under Self-Weight & Distributed Loads',
      description: 'Integration of varying tension along a heavy hanging wire T(x) = (M/L) g x; total elongation Delta L = (rho g L^2) / (2Y) = (M g L) / (2 A Y); comparison with terminal load.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-sol-7-composite-rods',
      name: '7.7 Composite Rods in Series & Parallel',
      description: 'Spring constant analogy k = Y A / L; series combination (same tension, displacements add) vs parallel combination (same elongation, forces add); equivalent Young\'s modulus.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-sol-8-thermal-stress-clamps',
      name: '7.8 Thermal Stress in Rigidly Fixed Rods',
      description: 'Expansion prevented by rigid unyielding walls: compressive strain = alpha * Delta T; thermal stress = Y * alpha * Delta T; force on walls F = Y * A * alpha * Delta T; composite bimaterial rods.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-sol-9-beam-bending-girders',
      name: '7.9 Bending of Beams & Design of I-Section Girders',
      description: 'Depression delta = (W L^3) / (4 Y b d^3); why depth d is more effective than breadth b in reducing sag; engineering design of I-cross section girders to prevent buckling and minimize mass.',
      estimatedHours: 2,
      isHighWeightage: false
    }
  ],
  guide: {
    overview: 'Elasticity is a high-yield, compact chapter that regularly yields 1 direct question in JEE Main (frequently on Young\'s modulus of stretched wires, energy stored, or thermal stress) and conceptual calculation problems in JEE Advanced.',
    ncertPointers: [
      'Steel is MORE ELASTIC than Rubber! In physics, elasticity is measured by the Modulus of Elasticity (the ratio of stress to strain). For the same applied stress, steel deforms far less than rubber (higher Young\'s modulus), meaning steel has a greater tendency to regain its original shape.',
      'For an ideal gas: Isothermal Bulk Modulus is $B_{\\text{iso}} = P$, whereas Adiabatic Bulk Modulus is $B_{\\text{adia}} = \\gamma P$ (where $\\gamma = C_p / C_v$).',
      'The work done by gravity in stretching a wire of mass $m$ hung with weight $W = M g$ is $W_{\\text{grav}} = M g \\Delta L$. However, the elastic energy stored in the wire is ONLY $U = \\frac{1}{2} M g \\Delta L$. The remaining half ($\\%50$) is dissipated as HEAT.',
      'Poisson\'s ratio $\\sigma$ for a material whose volume remains CONSTANT during deformation is exactly $\\sigma = 0.5$ (incompressible material).'
    ],
    commonTraps: [
      'Self-weight elongation factor of 2: Elongation of a hanging wire under its own weight is $\\Delta L = \\frac{M g L}{2 Y A}$, NOT $\\frac{M g L}{Y A}$! The average tension throughout the length is $M g / 2$.',
      'Area of cross-section scaling: When a wire is stretched to double its length ($L \\to 2L$), its volume remains constant ($A L = \\text{const}$), so its area becomes $A/2$. Its stiffness $k = Y A / L$ becomes $k/4$.',
      'Beam sag depth power trap: Sag $\\delta \\propto \\frac{1}{d^3}$. Doubling the depth $d$ reduces sag by a factor of $2^3 = 8$, whereas doubling breadth $b$ only halves the sag.',
      'Elastic energy vs Force: $U = \\frac{F^2 L}{2 A Y}$. If two wires of same material and length are subjected to the SAME tension $F$, the THINNER wire stores MORE energy ($U \\propto 1/A$). If stretched by the SAME elongation $\\Delta L$, the THICKER wire stores more energy ($U \\propto A$).'
    ],
    shortcutsVsConcepts: [
      'Spring Analogy for Elastic Rods: Treat an elastic rod of length $L$, cross-section $A$, and Young\'s modulus $Y$ as an ideal spring with spring constant $k = \\frac{Y A}{L}$. All series/parallel spring formulas apply directly.',
      'Thermal Strain Shortcut: If a rod is allowed to expand freely, $\\Delta L = L \\alpha \\Delta T$ and thermal stress is ZERO! Stress develops ONLY if the expansion is prevented or constrained by walls.',
      'Work to stretch wire by $\\Delta L$: $W = \\frac{1}{2} k (\\Delta L)^2 = \\frac{1}{2} \\left(\\frac{Y A}{L}\\right) (\\Delta L)^2$.'
    ]
  }
};
