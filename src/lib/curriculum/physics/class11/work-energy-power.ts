import { Chapter } from '@/types';

export const workEnergyPowerChapter: Chapter = {
  id: 'phy-c11-work-energy',
  subject: 'physics',
  classLevel: 11,
  name: 'Work, Energy and Power',
  unit: 'Mechanics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Work by Variable Force}: W = \\int_{\\vec{r}_i}^{\\vec{r}_f} \\vec{F} \\cdot d\\vec{r} = \\int_{x_i}^{x_f} F_x dx + \\int_{y_i}^{y_f} F_y dy + \\int_{z_i}^{z_f} F_z dz',
    '\\text{Work-Energy Theorem}: W_{\\text{total}} = W_{\\text{conservative}} + W_{\\text{non-conservative}} + W_{\\text{pseudo}} = \\Delta K = K_f - K_i',
    '\\text{Potential Energy Gradient}: \\vec{F} = -\\vec{\\nabla} U = -\\left(\\frac{\\partial U}{\\partial x}\\hat{i} + \\frac{\\partial U}{\\partial y}\\hat{j} + \\frac{\\partial U}{\\partial z}\\hat{k}\\right)',
    '\\text{Equilibrium Condition}: \\frac{dU}{dx} = 0, \\quad \\text{Stable}: \\frac{d^2 U}{dx^2} > 0, \\quad \\text{Unstable}: \\frac{d^2 U}{dx^2} < 0',
    '\\text{Spring Potential Energy}: U_s = \\frac{1}{2} k x^2, \\quad W_s = -\\Delta U_s = -\\frac{1}{2} k (x_f^2 - x_i^2)',
    '\\text{Vertical Circle (String)}: v_{\\text{bottom}} \\ge \\sqrt{5gR}, \\quad v_{\\text{top}} \\ge \\sqrt{gR}, \\quad T_{\\text{bottom}} - T_{\\text{top}} = 6mg',
    '\\text{Vertical Circle (Light Rod)}: v_{\\text{bottom}} \\ge \\sqrt{4gR}, \\quad v_{\\text{top}} \\ge 0',
    '\\text{Leaving Circle (String)}: \\cos\\theta = \\frac{2gR - u^2}{3gR} \\quad (\\text{where } T = 0 \\text{ for } \\sqrt{2gR} < u < \\sqrt{5gR})',
    '\\text{Instantaneous Power}: P = \\vec{F} \\cdot \\vec{v} = \\frac{dW}{dt}',
    '\\text{Constant Power Motion}: v = \\left(\\frac{2Pt}{m}\\right)^{1/2} \\propto t^{1/2}, \\quad x = \\left(\\frac{8P}{9m}\\right)^{1/2} t^{3/2} \\propto t^{3/2}',
    '\\text{Coefficient of Restitution}: e = \\frac{v_2 - v_1}{u_1 - u_2} = \\frac{\\text{relative velocity of separation}}{\\text{relative velocity of approach}}',
    '\\text{1D Collision Velocities}: v_1 = \\left(\\frac{m_1 - e m_2}{m_1 + m_2}\\right) u_1 + \\frac{m_2(1 + e)}{m_1 + m_2} u_2',
    '\\text{Loss in Kinetic Energy (Inelastic)}: \\Delta K_{\\text{loss}} = \\frac{1}{2} \\left(\\frac{m_1 m_2}{m_1 + m_2}\\right) (1 - e^2) (u_1 - u_2)^2'
  ],
  topics: [
    {
      id: 'phy-wep-1-work-forces',
      name: '4.1 Work Done by Constant & Variable Forces',
      description: 'Dot product definition W = F . d * cos(theta), work done by variable 1D/3D forces via line integral, area under F-x curve, frame dependency of work.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wep-2-conservative-pe',
      name: '4.2 Conservative Forces & Potential Energy Fields',
      description: 'Path independence, zero work in closed loop oint(F . dr) = 0, condition for conservative force curl(F) = 0, relation between F and -grad(U).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wep-3-we-theorem',
      name: '4.3 The Master Work-Energy Theorem',
      description: 'Proof of W_net = Delta K for a particle and system of particles, application to spring-mass systems, sliding on curved tracks, and stopping distance.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-wep-4-pe-curves-equilibrium',
      name: '4.4 Potential Energy Curves & Stability Analysis',
      description: 'Plotting U(x) vs x, identifying equilibrium points where dU/dx = 0, second derivative test for stable (minimum U), unstable (maximum U), and neutral equilibrium, SHM near stable minima.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wep-5-vertical-circle-string',
      name: '4.5 Vertical Circular Motion with a Light Inextensible String',
      description: 'Dynamics at arbitrary angle theta, tension formula T = mg(3 cos theta - 2) + m u^2 / R, condition for looping (u >= sqrt(5gR)), oscillation regime (u <= sqrt(2gR)), and string slackening regime (parabolic trajectory after leaving circle).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'phy-wep-6-vertical-circle-rod',
      name: '4.6 Vertical Circular Motion with a Rigid Rod or Track',
      description: 'Rigid rod and bead on wire vs hollow cylinder: critical velocity at apex v_top = 0, bottom velocity u = sqrt(4gR), tension sign reversal (compressive to tensile).',
      estimatedHours: 3,
      isHighWeightage: false
    },
    {
      id: 'phy-wep-7-power-constant-engine',
      name: '4.7 Power, Efficiency & Constant-Power Dynamics',
      description: 'Instantaneous vs average power, efficiency eta = P_out / P_in, calculus of a vehicle accelerated by an engine delivering constant power P: v(t), x(t), and a(x) scaling laws.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wep-8-collisions-1d',
      name: '4.8 One-Dimensional Collisions & Coefficient of Restitution',
      description: 'Momentum conservation, Newton\'s experimental law of restitution e, perfectly elastic (e = 1), inelastic (0 < e < 1), and perfectly plastic/inelastic (e = 0) collisions, velocity exchange for equal masses.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-wep-9-energy-loss-collisions',
      name: '4.9 Kinetic Energy Loss in Inelastic Collisions',
      description: 'Derivation of Delta K_loss using reduced mass mu = m1 m2 / (m1 + m2), maximum energy loss in perfectly inelastic impact, deformation energy dissipated as heat/sound.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wep-10-oblique-collisions',
      name: '4.10 Two-Dimensional (Oblique) Collisions',
      description: 'Line of impact (common normal) vs plane of contact (common tangent), momentum conserved along common tangent, coefficient of restitution applied ONLY along common normal.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-wep-11-ballistic-pendulum',
      name: '4.11 Ballistic Pendulum & Spring-Mass Impact',
      description: 'Two-stage analysis: rapid collision (momentum conserved, energy lost) followed by smooth swing (mechanical energy conserved), finding muzzle velocity of bullet.',
      estimatedHours: 2,
      isHighWeightage: false
    }
  ],
  guide: {
    overview: 'Work, Energy, and Power is the single most versatile toolkit in JEE physics. When Newton\'s Second Law produces complicated non-linear differential equations (such as motion on curved tracks, spring compression, or changing incline angles), the Work-Energy theorem provides an instantaneous scalar equation. It accounts for 1-2 questions in JEE Main and is ubiquitous in JEE Advanced multi-concept mechanics problems.',
    ncertPointers: [
      'Work done by friction is NOT always negative: Static friction does POSITIVE work on a block placed on an accelerating truck bed; it does ZERO net work on a rolling sphere; kinetic friction does NEGATIVE net work on a closed system (dissipating mechanical energy into heat).',
      'The Work-Energy theorem is valid in BOTH inertial and non-inertial reference frames, provided the work done by pseudo forces is included in the non-inertial frame: W_real + W_pseudo = Delta K.',
      'Potential energy can ONLY be defined for CONSERVATIVE forces. There is NO potential energy associated with friction, viscous drag, or induction electric fields.',
      'In a collision between two isolated bodies, total linear momentum is ALWAYS conserved during the impact, whether the collision is elastic, inelastic, or explosive.',
      'In a 1D elastic collision between two EQUAL masses (m1 = m2), the bodies completely EXCHANGE their velocities after impact.'
    ],
    commonTraps: [
      'Spring Work Sign Blunder: The work done BY the spring is W_spring = -(1/2) k (x_f^2 - x_i^2). If the spring is stretched from 0 to x, work done BY the spring is NEGATIVE (-1/2 k x^2), while work done by the external pulling force is POSITIVE (+1/2 k x^2).',
      'Vertical Circle Tension Pitfall: The condition for a particle on a string to complete a vertical circle is that tension at the highest point must be GREATER THAN OR EQUAL TO ZERO (T_top >= 0), NOT velocity = 0! Velocity at the top must be v_top >= sqrt(gR).',
      'Line of Impact in Oblique Collisions: The coefficient of restitution e = (v2_n - v1_n)/(u1_n - u2_n) applies ONLY to components along the common normal (line of impact), NEVER to the tangential components.',
      'Power vs Velocity Trap: For a car moving at constant speed v on level ground against drag force F_drag = c v^2, the power required is P = F * v = c v^3 (proportional to CUBE of speed, not square!).'
    ],
    shortcutsVsConcepts: [
      'Constant Power Scaling Shortcut: For an engine delivering constant power P to an object of mass m starting from rest: Velocity v(t) scales as t^(1/2), Displacement x(t) scales as t^(3/2), Acceleration a(t) scales as t^(-1/2), and v(x) scales as x^(1/3). This solves 4 JEE Main numericals directly without integrating.',
      'Two-Particle Inelastic Energy Loss Shortcut: Delta K_loss = (1/2) * [m1 * m2 / (m1 + m2)] * (1 - e^2) * (u1 - u2)^2. Memorize the reduced mass factor mu = (m1*m2)/(m1+m2); it saves 8 lines of algebra.',
      'Vertical Circle Slackening Angle Shortcut: When projected with speed u where sqrt(2gR) < u < sqrt(5gR), the string slacks at angle cos(theta) = (2gR - u^2)/(3gR) measured from the upward vertical.'
    ]
  }
};
