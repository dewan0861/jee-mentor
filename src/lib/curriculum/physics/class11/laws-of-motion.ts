import { Chapter } from '@/types';

export const lawsOfMotionChapter: Chapter = {
  id: 'phy-c11-laws-motion',
  subject: 'physics',
  classLevel: 11,
  name: 'Laws of Motion and Friction',
  unit: 'Mechanics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Newton\'s 2nd Law}: \\sum \\vec{F} = \\frac{d\\vec{p}}{dt} = m\\vec{a} \\; (\\text{if } m = \\text{const})',
    '\\text{Impulse-Momentum}: \\vec{J} = \\int_{t_1}^{t_2} \\vec{F} dt = \\Delta \\vec{p} = m\\vec{v}_f - m\\vec{v}_i',
    '\\text{Lami\'s Theorem}: \\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma} \\quad (\\text{for 3 concurrent coplanar equilibrium forces})',
    '\\text{Virtual Work Pulley Constraint}: \\sum_{i} \\vec{T}_i \\cdot \\vec{x}_i = 0 \\implies \\sum_i T_i v_i = 0 \\implies \\sum_i T_i a_i = 0',
    '\\text{Wedge Constraint}: (\\vec{v}_{\\text{block}} - \\vec{v}_{\\text{wedge}}) \\cdot \\hat{n} = 0 \\quad (\\hat{n} = \\text{unit normal to contact plane})',
    '\\text{Limiting Static Friction}: f_s \\le f_{s,\\text{max}} = \\mu_s N \\quad (\\text{self-adjusting direction and magnitude})',
    '\\text{Kinetic Friction}: f_k = \\mu_k N \\quad (\\mu_k \\le \\mu_s, \\text{ opposes relative slipping})',
    '\\text{Angle of Friction & Repose}: \\tan\\lambda = \\mu_s, \\quad \\theta_{\\text{repose}} = \\lambda = \\tan^{-1}(\\mu_s)',
    '\\text{Stopping Distance & Time}: s = \\frac{u^2}{2\\mu_k g}, \\quad t = \\frac{u}{\\mu_k g}',
    '\\text{Two-Block Slip Threshold (force on lower } M \\text{)}: F_{\\text{max}} = (M + m)\\mu_s g',
    '\\text{Two-Block Slip Threshold (force on upper } m \\text{)}: F_{\\text{max}} = \\mu_s m g \\left(1 + \\frac{m}{M}\\right)',
    '\\text{Pseudo Force}: \\vec{F}_{\\text{pseudo}} = -m\\vec{a}_{\\text{frame}} \\quad (\\text{applied at center of mass})',
    '\\text{Conical Pendulum}: T = \\frac{mg}{\\cos\\theta}, \\quad \\omega = \\sqrt{\\frac{g}{L\\cos\\theta}}, \\quad \\text{Period } \\tau = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}',
    '\\text{Banked Road (optimum speed)}: v_0 = \\sqrt{R g \\tan\\theta}',
    '\\text{Banked Road Maximum Speed}: v_{\\text{max}} = \\sqrt{R g \\left(\\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s \\tan\\theta}\\right)}',
    '\\text{Banked Road Minimum Speed}: v_{\\text{min}} = \\sqrt{R g \\left(\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s \\tan\\theta}\\right)} \\; (\\text{for } \\tan\\theta > \\mu_s)',
    '\\text{Rotor / Death Well}: v_{\\text{min}} = \\sqrt{\\frac{g R}{\\mu_s}}'
  ],
  topics: [
    {
      id: 'phy-lom-1-inertia-equilibrium',
      name: '3.1 Newton\'s First Law, Inertia & Equilibrium of Forces',
      description: 'Inertia of rest, motion, and direction; equilibrium of concurrent coplanar forces (sum F_x = 0, sum F_y = 0); Lami\'s theorem and string hanging systems.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-lom-2-second-law-impulse',
      name: '3.2 Newton\'s Second Law, Momentum & Impulse',
      description: 'Momentum rate of change d(mv)/dt, force-time graphs (area = impulse), variable mass systems (rocket propulsion thrust F_thrust = v_rel * |dm/dt| - mg).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-3-third-law-normal-tension',
      name: '3.3 Newton\'s Third Law, Contact Forces & Spring Balances',
      description: 'Action-reaction pairs on different bodies, normal force between contacting surfaces, ideal massless strings vs massive strings with tension gradient T(x) = (M/L) x a.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-lom-4-fbd-protocol',
      name: '3.4 Free Body Diagram (FBD) Master Methodology',
      description: 'Isolating bodies, identifying field forces (gravity) and contact forces (normal, tension, friction), choosing non-rotating Cartesian coordinate axes aligned with acceleration.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-5-pulley-constraints',
      name: '3.5 Pulley & String Constraints (Virtual Work Method)',
      description: 'Fixed and movable pulleys, length invariance of inextensible strings, virtual work sum(T . a) = 0 for rapid acceleration ratio determination.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-6-wedge-constraints',
      name: '3.6 Wedge & Surface Kinematic Constraints',
      description: 'Constraint relation across slanted wedge-block interfaces: velocity and acceleration perpendicular to contact surface must match (a_block,perp = a_wedge,perp).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-7-static-limiting-friction',
      name: '3.7 Static Friction, Limiting Value & Angle of Repose',
      description: 'Microscopic origin of friction (cold welds), self-adjusting static friction (0 <= f_s <= mu_s N), angle of friction tan(lambda) = mu_s, angle of repose on incline.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-8-kinetic-friction-dynamics',
      name: '3.8 Kinetic Friction & Motion on Rough Inclines',
      description: 'Constant kinetic friction f_k = mu_k N opposing relative velocity, acceleration up vs down an incline (a_down = g(sin theta - mu_k cos theta), a_up = g(sin theta + mu_k cos theta)).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-9-two-block-friction',
      name: '3.9 Two-Block Friction Systems (Tension & Slip Thresholds)',
      description: 'Block on block systems: identifying driving block vs driven block, calculating maximum common acceleration a_common, critical slip forces, and acceleration-force curves.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-10-three-block-systems',
      name: '3.10 Multi-Block Stacking & Complex Friction Interfaces',
      description: 'Three-block stacked systems with varying friction coefficients at each interface, determining which interface slips first as driving force increases.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-11-pseudo-forces',
      name: '3.11 Non-Inertial Frames of Reference & Pseudo Forces',
      description: 'Accelerating frames, elevators (apparent weight N = m(g +- a)), simple pendulum in an accelerating trolley (effective gravity g_eff = sqrt(g^2 + a^2), tilt angle tan theta = a/g).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-12-circular-dynamics',
      name: '3.12 Dynamics of Uniform Circular Motion',
      description: 'Centripetal force F_c = m v^2 / r, conical pendulum tension and frequency, horizontal turn on a flat rough road with maximum speed v_max = sqrt(mu_s g R).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-13-banked-roads',
      name: '3.13 Banking of Curved Roads and Railway Tracks',
      description: 'Optimum banking angle tan theta = v^2 / (R g), safe speed range with friction [v_min, v_max], elevation of outer rail in railway tracks h = v^2 d / (R g).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-lom-14-rotor-death-well',
      name: '3.14 Vertical Cylinder Rotor & Death Well Dynamics',
      description: 'Rider against vertical wall of rotating cylinder: normal force provides centripetal acceleration N = m omega^2 R, friction balances gravity f_s = mg, minimum frequency omega_min = sqrt(g / (mu_s R)).',
      estimatedHours: 2,
      isHighWeightage: false
    }
  ],
  guide: {
    overview: 'Laws of Motion and Friction forms the bedrock of Newtonian mechanics and accounts for 1-2 direct questions in JEE Main and multiple integrated multi-concept problems in JEE Advanced. The two highest-yield sub-areas are: (1) Two-block friction systems where students must distinguish between static grip and kinetic slip, and (2) Virtual work constraint analysis for multi-pulley systems.',
    ncertPointers: [
      'Static friction is a SELF-ADJUSTING force in both magnitude and direction. It equals the applied component parallel to the surface up to the limiting value f_s,max = mu_s * N. It is NEVER equal to mu_s * N unless the body is on the verge of impending motion.',
      'Friction opposes RELATIVE motion between surfaces in contact, NOT necessarily motion itself. For example, when a car accelerates forward, static friction on the drive wheels points FORWARD and accelerates the car.',
      'Action and Reaction forces NEVER act on the same body; they always act simultaneously on two DIFFERENT bodies. Hence, they never cancel each other.',
      'Centrifugal force is NOT a real force; it is an apparent (pseudo) force that arises ONLY when analyzing motion from a rotating (non-inertial) reference frame.',
      'Apparent weight of a man in an elevator: accelerating upwards with "a" gives N = m(g + a); accelerating downwards with "a" gives N = m(g - a); free fall (a = g) gives N = 0 (weightlessness).'
    ],
    commonTraps: [
      'Blunder in 2-block systems: Assuming both blocks move together with a = F / (m1 + m2) without verifying if the required friction force exceeds the limiting friction f_max = mu_s * N!',
      'Sign error in pseudo-force: Pseudo force is ALWAYS antiparallel to the frame acceleration vector: F_pseudo = -m * a_frame. Never add it in the same direction.',
      'Massive string oversight: When a string has mass m_s, the tension varies along its length. At distance x from the pulled end, T(x) = F * (1 - x/L). At the free end, T = 0.',
      'Normal reaction on an incline: N is mg * cos(theta), NOT mg! Therefore limiting friction is mu * mg * cos(theta).'
    ],
    shortcutsVsConcepts: [
      'Virtual Work Shortcut for Pulley Systems: Write sum(T_i * a_i) = 0. Count the number of string segments supporting each mass. If mass A is supported by 4 segments (Tension 4T) and mass B by 1 segment (Tension T), then 4T * a_A = T * a_B => a_B = 4 * a_A instantly, saving 5 minutes of writing coordinate equations.',
      'Two-Block Slipping Quick Rule: When the pulling force F is applied to the LOWER block M, the maximum common acceleration is set by the UPPER block m: a_max = mu_s * g. The slip threshold force is F_slip = (M + m) * mu_s * g.',
      'Incline Time Ratio Shortcut: If time taken to slide down a rough incline is n times the time taken on a smooth incline of same length: mu_k = tan(theta) * (1 - 1/n^2).'
    ]
  }
};
