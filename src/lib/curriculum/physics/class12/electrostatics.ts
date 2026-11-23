import { Chapter } from '@/types';

export const electrostaticsChapter: Chapter = {
  id: 'phy-c12-electrostatics',
  subject: 'physics',
  classLevel: 12,
  name: 'Electrostatics and Electric Potential',
  unit: 'Electrodynamics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Coulomb\'s Law}: F = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r^2} = k \\frac{q_1 q_2}{r^2} \\quad \\left(k = \\frac{1}{4\\pi\\epsilon_0} \\approx 9 \\times 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2\\right)',
    '\\text{Ring on Axis}: E(x) = \\frac{k Q x}{(x^2 + R^2)^{3/2}} \\quad \\left(E_{\\text{max}} \\text{ at } x = \\pm \\frac{R}{\\sqrt{2}}\\right)',
    '\\text{Infinite Line Charge}: E = \\frac{\\lambda}{2\\pi\\epsilon_0 r} = \\frac{2 k \\lambda}{r}',
    '\\text{Infinite Sheet of Charge}: E = \\frac{\\sigma}{2\\epsilon_0} \\quad (\\text{conducting plate: } E = \\frac{\\sigma}{\\epsilon_0})',
    '\\text{Electric Dipole Field}: E_{\\text{axial}} = \\frac{2 k p}{r^3}, \\quad E_{\\text{equatorial}} = \\frac{k p}{r^3}, \\quad E(r,\\theta) = \\frac{k p}{r^3}\\sqrt{1 + 3\\cos^2\\theta}',
    '\\text{Dipole Torque & Energy}: \\vec{\\tau} = \\vec{p} \\times \\vec{E}, \\quad U = -\\vec{p} \\cdot \\vec{E} = -p E \\cos\\theta',
    '\\text{Gauss\'s Law}: \\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\epsilon_0}',
    '\\text{Electric Potential}: V(r) = \\frac{k Q}{r}, \\quad \\vec{E} = -\\vec{\\nabla} V = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)',
    '\\text{Potential (Uniform Solid Sphere)}: V_{\\text{in}}(r) = \\frac{k Q}{2 R^3}(3 R^2 - r^2), \\quad V_{\\text{center}} = \\frac{3}{2} \\frac{k Q}{R} = 1.5 V_{\\text{surface}}',
    '\\text{Electrostatic Pressure on Conductor}: P_{\\text{es}} = \\frac{\\sigma^2}{2\\epsilon_0} = \\frac{1}{2}\\epsilon_0 E^2',
    '\\text{Self-Energy}: U_{\\text{shell}} = \\frac{k Q^2}{2 R}, \\quad U_{\\text{solid sphere}} = \\frac{3 k Q^2}{5 R}'
  ],
  topics: [
    {
      id: 'phy-ele-1-coulomb-superposition',
      name: '12.1.1 Coulomb\'s Law & Principle of Superposition',
      description: 'Point charges, vector form, permittivity of free space and relative dielectric constant epsilon_r, vector superposition, stable vs unstable equilibrium of 3 charges (Earnshaw\'s theorem).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-ele-2-continuous-distributions',
      name: '12.1.2 Electric Field of Continuous Charge Distributions',
      description: 'Linear, surface, and volume charge distributions; field of a finite and semi-infinite wire; charged circular ring on its axis (maximum field at x = R/sqrt(2)); charged disc and infinite plane sheet.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-ele-3-electric-dipoles',
      name: '12.1.3 Electric Dipole Mechanics & Potential Energy',
      description: 'Dipole moment p = q * 2a, electric field on axial, equatorial, and general coordinates; torque tau = p x E, potential energy U = -p . E, work done in rotating a dipole in uniform field.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-ele-4-gauss-law-flux',
      name: '12.1.4 Gauss\'s Law & Flux Calculations',
      description: 'Electric flux through flat and curved closed surfaces, solid angle concept, symmetrical Gaussian surfaces (cylinder, pillbox, sphere), field of uniform spherical shell and solid sphere.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-ele-5-potential-gradient',
      name: '12.1.5 Electric Potential & Field Gradient Relation',
      description: 'Definition of potential V as work done per unit test charge, potential due to point charge, group of charges, and continuous charge bodies; calculating E from partial derivatives of V.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-ele-6-equipotential-surfaces',
      name: '12.1.6 Equipotential Surfaces & Field Geometry',
      description: 'Properties of equipotential surfaces (no work done in moving a charge along surface, field lines always cut normally, closer spacing indicates stronger field regions).',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-ele-7-potential-energy-self-energy',
      name: '12.1.7 Electrostatic Potential Energy & Self-Energy',
      description: 'Potential energy of a discrete charge configuration sum(k qi qj / rij); assembly work; self-energy of a conducting spherical shell kQ^2/(2R) and non-conducting solid sphere 3kQ^2/(5R).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-ele-8-conductor-electrostatics',
      name: '12.1.8 Electrostatics of Conductors & Cavity Shielding',
      description: 'Excess charge resides solely on outer surface; E = 0 inside bulk metal; surface field E = sigma / epsilon_0; electrostatic shielding; electrostatic pressure P = sigma^2 / (2 epsilon_0).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-ele-9-concentric-shells-earthing',
      name: '12.1.9 Concentric Spherical Shells & Earthing Problems',
      description: 'Charge distribution on concentric metallic shells; earthing a shell (setting its total potential V = 0 and determining the charge flow to ground); spark discharge when shells are connected by wire.',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Electrostatics is the cornerstone of Class 12 Physics, carrying 2-3 direct questions in JEE Main and heavy conceptual weight in JEE Advanced. Key recurring patterns include: (1) Concentric shell earthing systems, (2) Dipole potential and torque in uniform/non-uniform fields, (3) Ring axis maximum field, and (4) Self-energy and assembly work.',
    ncertPointers: [
      'Inside a conductor of any arbitrary shape (with or without cavities containing no charges), the electrostatic field is STRICTLY ZERO. Any excess charge resides entirely on the OUTER surface.',
      'The electric field just outside any charged conductor is PERPENDICULAR to the surface and has magnitude $E = \\frac{\\sigma}{\\epsilon_0}$. (Contrast with an infinite non-conducting sheet where $E = \\frac{\\sigma}{2\\epsilon_0}$).',
      'When an object is earthed, its ELECTRIC POTENTIAL becomes zero ($V = 0$), NOT necessarily its charge! If surrounding charges create an external potential, the earthed conductor acquires an induced charge from Earth to cancel that potential.',
      'Electric field lines NEVER form closed loops because electrostatic fields are conservative ($\\oint \\vec{E} \\cdot d\\vec{r} = 0$). Induced electric fields in EMI, however, DO form closed loops.',
      'Earnshaw\'s Theorem: A system of stationary point charges CANNOT be maintained in stable equilibrium by electrostatic forces alone.'
    ],
    commonTraps: [
      'Earthing myth: Believing "earthing always removes all charge from a conductor". An earthed sphere inside a concentric charged shell will have a NON-ZERO induced charge such that $V_{\\text{total}} = 0$!',
      'Dipole force in non-uniform field: In a UNIFORM field, net force on a dipole is ZERO ($F = 0, \\tau = p E \\sin\\theta$). In a NON-UNIFORM field, there is BOTH a net torque AND a net force $F = p \\frac{\\partial E}{\\partial x}$.',
      'Ring field apex: The electric field of a charged ring is zero at the center, increases to a MAXIMUM at distance $x = \\frac{R}{\\sqrt{2}}$ on its axis, and then decreases as $1/x^2$ at large distances.',
      'Potential of solid sphere center: $V_{\\text{center}} = \\frac{3}{2} \\frac{kQ}{R} = 1.5 V_{\\text{surface}}$, NOT zero! It is 50% greater than the surface potential.'
    ],
    shortcutsVsConcepts: [
      'Concentric Shell Charge Distribution: The charge on the INNER surface of shell 2 is ALWAYS the exact negative of the charge on the outer surface of shell 1 ($-q_1$) to guarantee $E = 0$ inside the metallic bulk of shell 2.',
      'Earthing Potential Shortcut: To find the charge $q\'$ on an earthed sphere of radius $R_1$ inside a shell of radius $R_2$ with charge $Q$: $V_1 = \\frac{k q\'}{R_1} + \\frac{k Q}{R_2} = 0 \\implies q\' = -Q \\frac{R_1}{R_2}$. Done in 10 seconds.',
      'Ring Field Maximum Shortcut: $x_{\\text{max}} = \\frac{R}{\\sqrt{2}}$ and $E_{\\text{max}} = \\frac{2 k Q}{3\\sqrt{3} R^2}$.'
    ]
  }
};
