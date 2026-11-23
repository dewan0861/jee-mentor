import { Chapter } from '@/types';

export const fluidsChapter: Chapter = {
  id: 'phy-c11-fluids',
  subject: 'physics',
  classLevel: 11,
  name: 'Mechanical Properties of Fluids',
  unit: 'Properties of Bulk Matter',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Hydrostatic Pressure}: P = P_0 + \\rho g h, \\quad \\Delta P = \\rho g \\Delta h',
    '\\text{Accelerating Fluid Surface}: \\tan\\theta = \\frac{a_x}{g + a_z}, \\quad \\text{Rotating Cylinder}: z(r) = \\frac{\\omega^2 r^2}{2g}',
    '\\text{Archimedes\' Buoyant Force}: F_B = \\rho_f V_{\\text{submerged}} g, \\quad W_{\\text{app}} = W \\left(1 - \\frac{\\rho_f}{\\rho_s}\\right)',
    '\\text{Equation of Continuity}: A_1 v_1 = A_2 v_2 = Q \\quad (\\text{volume flow rate})',
    '\\text{Bernoulli\'s Equation}: P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}',
    '\\text{Torricelli\'s Efflux Speed}: v = \\sqrt{2gh}, \\quad \\text{Range on ground } R = 2\\sqrt{h(H-h)} \\; (R_{\\text{max}} = H \\text{ at } h = H/2)',
    '\\text{Time to Empty Tank}: t = \\frac{A}{a} \\sqrt{\\frac{2H}{g}}',
    '\\text{Venturi Meter}: Q = A_1 A_2 \\sqrt{\\frac{2\\Delta P}{\\rho (A_1^2 - A_2^2)}}',
    '\\text{Stokes\' Law & Terminal Velocity}: F_v = 6\\pi \\eta r v, \\quad v_t = \\frac{2}{9} \\frac{r^2 (\\rho - \\sigma) g}{\\eta}',
    '\\text{Poiseuille\'s Flow Rate}: Q = \\frac{\\pi \\Delta P r^4}{8 \\eta L}',
    '\\text{Reynolds Number}: R_e = \\frac{\\rho v D}{\\eta}',
    '\\text{Excess Pressure}: \\Delta P_{\\text{drop}} = \\frac{2S}{R}, \\quad \\Delta P_{\\text{soap bubble}} = \\frac{4S}{R}',
    '\\text{Capillary Rise (Jurin\'s Law)}: h = \\frac{2S\\cos\\theta}{\\rho g r}, \\quad h r = \\text{constant}'
  ],
  topics: [
    {
      id: 'phy-fld-1-pressure-pascal',
      name: '8.1 Fluid Pressure & Pascal\'s Principle',
      description: 'Isotropy of fluid pressure, absolute vs gauge pressure, Pascal\'s hydraulic press principle F1/A1 = F2/A2, U-tube manometers with immiscible liquids.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-fld-2-accelerating-fluids',
      name: '8.2 Hydrostatics in Accelerating Reference Frames',
      description: 'Pressure gradient in horizontally accelerating tanks dP/dx = -rho * a_x, free surface tilt tan(theta) = a/g, rotating fluid containers creating paraboloid free surfaces z = omega^2 * r^2 / (2g).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-fld-3-archimedes-buoyancy',
      name: '8.3 Archimedes\' Principle & Laws of Floatation',
      description: 'Buoyant force derivation, fractional submerged volume V_sub/V_total = rho_solid / rho_liquid, apparent weight in fluids, ice cube melting in water (liquid level remains constant).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-fld-4-continuity-equation',
      name: '8.4 Streamline Flow & Equation of Continuity',
      description: 'Steady, incompressible, irrotational, non-viscous flow; streamlines and stream tubes; conservation of mass giving A1 * v1 = A2 * v2.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-fld-5-bernoulli-principle',
      name: '8.5 Bernoulli\'s Theorem & Applications',
      description: 'Derivation of Bernoulli\'s equation from work-energy theorem, static vs dynamic pressure, Venturi meter flow measurement, aerodynamic lift on wings, Magnus effect on spinning balls.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-fld-6-torricelli-efflux',
      name: '8.6 Torricelli\'s Law of Efflux & Leaking Tanks',
      description: 'Velocity of efflux v = sqrt(2gh) with open vs pressurized top, horizontal projectile range on ground R = 2*sqrt(h*(H-h)), maximum range at midpoint, time required to drain a tank.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-fld-7-viscosity-poiseuille',
      name: '8.7 Viscosity & Poiseuille\'s Capillary Flow',
      description: 'Newtonian fluids, shear stress F/A = -eta * dv/dy, Poiseuille\'s equation for laminar volumetric flow through pipe Q = (pi * Delta P * r^4) / (8 * eta * L), series/parallel fluid resistance.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-fld-8-stokes-terminal-velocity',
      name: '8.8 Stokes\' Law & Terminal Velocity in Viscous Media',
      description: 'Viscous drag force F = 6 pi eta r v, dynamic equilibrium between gravity, buoyancy, and viscous drag yielding terminal velocity v_t proportional to r^2, Millikan oil drop experiment.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-fld-9-reynolds-number',
      name: '8.9 Reynolds Number & Onset of Turbulence',
      description: 'Dimensionless ratio of inertial to viscous forces R_e = (rho * v * D) / eta; laminar regime (Re < 1000), transition zone, and fully turbulent flow (Re > 2000).',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-fld-10-surface-tension-energy',
      name: '8.10 Surface Tension & Surface Energy',
      description: 'Intermolecular cohesion vs adhesion, surface energy Delta U = S * Delta A, work done in blowing soap bubbles (2 surfaces!), isothermal coalescence of n droplets into one droplet.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-fld-11-excess-pressure',
      name: '8.11 Excess Pressure Across Curved Fluid Interfaces',
      description: 'Laplace pressure derivation for spherical liquid drop Delta P = 2S/R, soap bubble in air (two liquid-air interfaces) Delta P = 4S/R, contact bubble formed by joining two bubbles of radii R1 and R2.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-fld-12-capillary-rise',
      name: '8.12 Capillary Rise & Jurin\'s Law',
      description: 'Angle of contact theta (acute for wetting, obtuse for mercury/glass), Jurin\'s law h = (2 S cos theta) / (rho g r), capillary tube of insufficient length (liquid does NOT overflow; radius of curvature adjusts).',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Fluid Mechanics is an exceptionally rich JEE chapter that reliably produces 1-2 questions in JEE Main and intricate multi-concept questions in JEE Advanced. Key problem archetypes include: (1) Torricelli efflux with draining tanks, (2) Terminal velocity with buoyancy and Stokes drag, (3) Coalescence of surface droplets, and (4) Capillary rise with insufficient tube length.',
    ncertPointers: [
      'A floating ice cube in a beaker filled to the brim with water: when the ice melts completely, the water level DOES NOT OVERFLOW and DOES NOT DROP; it remains EXACTLY THE SAME! This is because the volume of water produced by melting matches the volume of water displaced by the floating ice.',
      'A soap bubble in air has TWO liquid-gas interfaces (inner and outer). Hence, its excess pressure is $\\Delta P = \\frac{4S}{R}$, and the work done to blow it to radius $R$ is $W = 2 \\times (4\\pi R^2 S) = 8\\pi R^2 S$. A water drop in air has only ONE interface: $\\Delta P = \\frac{2S}{R}$.',
      'If two soap bubbles of radii $R_1$ and $R_2$ ($R_1 > R_2$) are connected by a valve, the SMALLER bubble will SHRINK and the LARGER bubble will EXPAND! Why? Because excess pressure $\\Delta P = 4S/R$ is HIGHER inside the smaller bubble, forcing air into the lower-pressure larger bubble.',
      'In a capillary tube of insufficient length ($L < h$), liquid DOES NOT OVERFLOW! Instead, the meniscus flattens out, increasing its radius of curvature $R$ such that $h R = \\text{constant} = \\frac{2S}{\\rho g}$.'
    ],
    commonTraps: [
      'Terminal velocity buoyancy neglect: $v_t = \\frac{2}{9}\\frac{r^2 (\\rho - \\sigma)g}{\\eta}$. Many students forget the fluid density $\\sigma$ and write $\\rho$ instead of $(\\rho - \\sigma)$. In liquids (like a steel ball falling in glycerin), buoyancy is significant and MUST NOT be neglected!',
      'Poiseuille radius power trap: Flow rate $Q \\propto r^4$. Halving the radius of a blood vessel or pipe reduces volume flow rate by a factor of $2^4 = 16$ (a 93.75% reduction!) for the same pressure difference.',
      'Bernoulli elevation term oversight: Bernoulli equation has three terms: $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{const}$. In a horizontal pipe $\\rho g h$ is constant, but in vertical or sloping pipes, never drop the potential head $\\rho g h$.',
      'Coalescence Temperature Trap: When $N$ tiny droplets coalesce into a single large drop, total surface area DECREASES. Therefore, surface energy is RELEASED as heat, causing the temperature of the liquid to RISE!'
    ],
    shortcutsVsConcepts: [
      'Two Drops Coalescence Radius & Temperature Rise Shortcut: When $N$ identical droplets of radius $r$ coalesce into one drop of radius $R = N^{1/3} r$, the decrease in surface area is $\\Delta A = 4\\pi r^2 (N - N^{2/3})$. Temperature rise is $\\Delta T = \\frac{3S}{J \\rho c} \\left(\\frac{1}{r} - \\frac{1}{R}\\right)$.',
      'Efflux Maximum Range Shortcut: The horizontal range of a jet from an orifice at depth $h$ in a tank of total height $H$ is $R = 2\\sqrt{h(H-h)}$. Maximum range $R_{\\text{max}} = H$ occurs when the hole is drilled at the exact midpoint $h = H/2$. Two holes at depths $h$ and $(H-h)$ have identical horizontal ranges!',
      'Common Interface of Joined Bubbles: Radius of common spherical film $R = \\frac{R_1 R_2}{R_1 - R_2}$ with concave surface facing the smaller bubble.'
    ]
  }
};
