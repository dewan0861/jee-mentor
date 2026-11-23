import { Chapter } from '@/types';

export const rotationalMotionChapter: Chapter = {
  id: 'phy-c11-rotational-motion',
  subject: 'physics',
  classLevel: 11,
  name: 'System of Particles and Rotational Motion',
  unit: 'Mechanics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Center of Mass}: \\vec{r}_{\\text{cm}} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i} = \\frac{1}{M}\\int \\vec{r} \\, dm',
    '\\text{COM Cavity Theorem}: \\vec{r}_{\\text{rem}} = \\frac{M \\vec{r}_0 - m_{\\text{cavity}} \\vec{r}_{\\text{cavity}}}{M - m_{\\text{cavity}}}',
    '\\text{COM Coordinates}: \\text{Half Ring } \\left(0, \\frac{2R}{\\pi}\\right), \\; \\text{Half Disc } \\left(0, \\frac{4R}{3\\pi}\\right), \\; \\text{Hemi Shell } \\frac{R}{2}, \\; \\text{Solid Hemi } \\frac{3R}{8}, \\; \\text{Cone } \\frac{h}{4}',
    '\\text{Torque & Angular Momentum}: \\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\frac{d\\vec{L}}{dt} = I\\vec{\\alpha}, \\quad \\vec{L} = \\vec{r} \\times \\vec{p} = I\\vec{\\omega}',
    '\\text{Angular Momentum (Translation + Rotation)}: \\vec{L}_O = \\vec{r}_{\\text{cm}} \\times M\\vec{v}_{\\text{cm}} + I_{\\text{cm}}\\vec{\\omega}',
    '\\text{Parallel Axis Theorem}: I = I_{\\text{cm}} + M d^2 \\quad (\\text{valid for any rigid body})',
    '\\text{Perpendicular Axis Theorem}: I_z = I_x + I_y \\quad (\\text{ONLY for 2D flat planar laminae in } xy\\text{-plane})',
    '\\text{Moments of Inertia}: \\text{Ring } MR^2, \\; \\text{Disc } \\frac{1}{2}MR^2, \\; \\text{Solid Sphere } \\frac{2}{5}MR^2, \\; \\text{Hollow Sphere } \\frac{2}{3}MR^2, \\; \\text{Rod (center) } \\frac{1}{12}ML^2',
    '\\text{Rolling Kinetic Energy}: K_{\\text{total}} = \\frac{1}{2} M v_{\\text{cm}}^2 + \\frac{1}{2} I_{\\text{cm}} \\omega^2 = \\frac{1}{2} M v_{\\text{cm}}^2 \\left(1 + \\frac{k^2}{R^2}\\right)',
    '\\text{Incline Pure Rolling Acceleration}: a = \\frac{g \\sin\\theta}{1 + \\frac{I_{\\text{cm}}}{M R^2}} = \\frac{g \\sin\\theta}{1 + \\frac{k^2}{R^2}}',
    '\\text{Friction for Pure Rolling on Incline}: f = \\frac{M g \\sin\\theta}{1 + \\frac{M R^2}{I_{\\text{cm}}}} \\le \\mu_s M g \\cos\\theta \\implies \\mu_s \\ge \\frac{\\tan\\theta}{1 + \\frac{M R^2}{I_{\\text{cm}}}}',
    '\\text{Toppling of Block (width } b, \\text{ height } h\\text{)}: F_{\\text{topple}} = \\frac{m g b}{2 h}, \\quad \\text{Topple before slide if } \\mu > \\frac{b}{h}'
  ],
  topics: [
    {
      id: 'phy-rot-1-com-discrete-continuous',
      name: '5.1 Center of Mass (Discrete Particles & Symmetrical Bodies)',
      description: 'Position vector, velocity, and acceleration of COM; zero internal force acceleration sum(F_ext) = M * a_cm; COM of rod, semicircular wire, disc, hollow/solid hemispheres, and cones.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-2-com-cavity',
      name: '5.2 Negative Mass Theorem & Cavity Problems',
      description: 'Removing circular or spherical portions from uniform discs, plates, and spheres; shifts in center of mass and new principal axes.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-3-com-motion-explosions',
      name: '5.3 Center of Mass Motion, Explosions & Internal Forces',
      description: 'Man walking on a boat/plank on frictionless water, projectile exploding mid-air into fragments (trajectory of COM remains undisturbed parabolic arc under gravity).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-4-angular-kinematics',
      name: '5.4 Kinematics of Rotational Motion',
      description: 'Angular displacement theta, angular velocity omega, angular acceleration alpha; circular kinematic equations; vector relation v = omega x r, a = alpha x r + omega x v.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-rot-5-torque-equilibrium',
      name: '5.5 Torque, Couple & Rotational Equilibrium',
      description: 'Torque tau = r x F, lever arm (perpendicular distance), couple of forces (pure torque independent of origin), conditions for static equilibrium (sum F = 0 and sum tau = 0).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-6-moment-of-inertia',
      name: '5.6 Moment of Inertia & Radius of Gyration',
      description: 'Rotational inertia I = sum(m_i r_i^2) = integral(r^2 dm), physical significance as mass analogue, radius of gyration k = sqrt(I/M), formulas for standard geometric bodies.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-7-parallel-perpendicular-theorems',
      name: '5.7 Parallel & Perpendicular Axis Theorems',
      description: 'Parallel axis theorem I = I_cm + M d^2 (axis must be parallel to COM axis); Perpendicular axis theorem I_z = I_x + I_y (valid STRICTLY for planar 2D bodies); common application mistakes.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-8-angular-momentum',
      name: '5.8 Angular Momentum of Particles and Rigid Bodies',
      description: 'Angular momentum L = r x p for a particle, L = I omega for fixed-axis rotation, general planar motion L_O = r_cm x M v_cm + I_cm omega about any arbitrary origin O.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-9-conservation-angular-momentum',
      name: '5.9 Principle of Conservation of Angular Momentum',
      description: 'External torque tau_ext = 0 implies L = constant; spinning skater, collapsing star to neutron star, bullet embedding in a pivoted rod, turntable with walking person.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-10-rotational-energy-work',
      name: '5.10 Work, Power & Energy in Rotational Motion',
      description: 'Rotational kinetic energy K_rot = 1/2 I omega^2, work-energy theorem for rotating bodies W_rot = integral(tau d theta) = Delta K_rot, power P = tau * omega.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-11-pure-rolling-flat',
      name: '5.11 Pure Rolling Dynamics & Instantaneous Axis of Rotation (IAOR)',
      description: 'Kinematic condition of pure rolling v_cm = R omega, velocity of contact point = 0, velocities of different points on the perimeter (v_top = 2 v_cm), concept of IAOR.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-12-rolling-incline',
      name: '5.12 Rolling Down an Inclined Plane',
      description: 'Acceleration a = g sin(theta) / (1 + k^2/R^2), velocity at bottom, ranking arrival times (Sphere first, Disc second, Ring last), minimum coefficient of friction mu_s to prevent slipping.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-13-slipping-to-rolling',
      name: '5.13 Kinetic Friction & Transition to Pure Rolling',
      description: 'Projecting a sphere with pure translation (v0, omega=0) on a rough floor: kinetic friction slows translation while producing torque that accelerates spin until v = R omega.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-rot-14-toppling-vs-sliding',
      name: '5.14 Toppling vs Sliding Mechanics',
      description: 'Shifting of normal force to prevent tipping, critical force F for toppling F = m g b / (2 h), condition for toppling before sliding mu > b / h.',
      estimatedHours: 3,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Rotational Motion is universally considered the most conceptually demanding and highest-scoring chapter in JEE Physics mechanics. Every year, JEE Main features 2-3 questions from this chapter (typically cavity theorem, rolling on incline, and angular momentum conservation), while JEE Advanced features deep multi-concept questions combining rolling with slipping, collision of rigid bodies, and toppling.',
    ncertPointers: [
      'The Perpendicular Axis Theorem (I_z = I_x + I_y) is strictly applicable ONLY to 2D planar (laminar) objects. Applying it to spheres, cylinders, or 3D cubes is a major error.',
      'In pure rolling without slipping on a horizontal surface at constant velocity, static friction is ZERO. Static friction is called into play ONLY when an external force attempts to accelerate or decelerate the body, or on an inclined plane.',
      'Work done by static friction in pure rolling is ZERO because the point of contact is instantaneously at rest relative to the surface ($ds = 0$). Hence, mechanical energy is conserved in pure rolling down an incline.',
      'Center of Mass of a system depends ONLY on the distribution of mass and geometry, NOT on the frame of reference or acceleration of the observer.',
      'When an external force is applied at a height h above the center of a rolling sphere on a rough table, friction can act FORWARD, BACKWARD, or be ZERO depending on the sweet spot height $h = I_{\\text{cm}} / (M R) = \\frac{2}{5} R$.'
    ],
    commonTraps: [
      'Parallel Axis Theorem Reference Point Blunder: I = I_0 + M d^2 is valid ONLY when one of the axes passes through the CENTER OF MASS ($I_0 = I_{\\text{cm}}$). You CANNOT use it between two random arbitrary parallel axes without passing through the COM first!',
      'Torque Origin Pitfall: Torque $\\tau = I \\alpha$ is valid only if moments are calculated either: (1) about the Center of Mass, OR (2) about a FIXED axis of rotation. Calculating torque about an accelerating non-COM point introduces fictitious pseudo-torques.',
      'Toppling Height Blunder: The torque of normal force balances overturning torque up to the corner edge. Once the normal reaction shifts completely to the corner edge, the block topples.',
      'Sphere vs Ring on Incline: Students often memorize that "heavier bodies roll faster". Mass CANCELS completely! Acceleration depends solely on the shape factor $k^2/R^2$: Solid Sphere (0.4) > Disc (0.5) > Hollow Sphere (0.67) > Ring (1.0).'
    ],
    shortcutsVsConcepts: [
      'Incline Arrival Order Mnemonic: "Sphere Wins, Ring Loses". The smaller the $k^2/R^2$, the greater the translational acceleration $a = g\\sin\\theta / (1 + k^2/R^2)$ and the faster it reaches the bottom.',
      'Angular Momentum Conservation about Contact Point: When a rolling object collides with a small step or obstacle, linear momentum is NOT conserved (due to impulse at the corner), BUT angular momentum about the corner pivot IS conserved because the impulsive normal force passes directly through the pivot!',
      'Cavity Moment of Inertia Principle: $I_{\\text{remaining}} = I_{\\text{complete}} - I_{\\text{removed}}$. Always apply parallel axis theorem on the removed cavity about the parent axis before subtracting.'
    ]
  }
};
