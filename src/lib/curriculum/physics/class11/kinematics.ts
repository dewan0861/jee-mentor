import { Chapter } from '@/types';

export const kinematicsChapter: Chapter = {
  id: 'phy-c11-kinematics',
  subject: 'physics',
  classLevel: 11,
  name: 'Kinematics (Motion in 1D & 2D)',
  unit: 'Mechanics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    'v = \\frac{dx}{dt}, \\quad a = \\frac{dv}{dt} = v\\frac{dv}{dx} = \\frac{d^2 x}{dt^2}',
    'v = u + at, \\quad s = ut + \\frac{1}{2}at^2, \\quad v^2 = u^2 + 2as, \\quad s_n = u + \\frac{a}{2}(2n - 1)',
    'v_{\\text{avg}} = \\frac{\\text{Total Displacement}}{\\text{Total Time}}, \\quad \\text{Average Speed} = \\frac{\\text{Total Distance}}{\\text{Total Time}}',
    '\\text{Equal distances with } v_1, v_2 \\implies v_{\\text{avg}} = \\frac{2v_1 v_2}{v_1 + v_2} \\; (\\text{Harmonic Mean})',
    '\\text{Equal time intervals with } v_1, v_2 \\implies v_{\\text{avg}} = \\frac{v_1 + v_2}{2} \\; (\\text{Arithmetic Mean})',
    'T = \\frac{2u\\sin\\theta}{g}, \\quad H_{\\text{max}} = \\frac{u^2\\sin^2\\theta}{2g}, \\quad R = \\frac{u^2\\sin 2\\theta}{g} = \\frac{2u_x u_y}{g}',
    'y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta} = x\\tan\\theta\\left(1 - \\frac{x}{R}\\right) \\quad (\\text{Trajectory equation})',
    'R_c = \\frac{v^2}{a_\\perp} \\quad (\\text{Radius of Curvature}); \\quad \\text{At vertex } R_c = \\frac{(u\\cos\\theta)^2}{g}',
    'T_{\\text{incline}} = \\frac{2u\\sin(\\alpha - \\beta)}{g\\cos\\beta}, \\quad R_{\\text{incline up}} = \\frac{u^2}{g\\cos^2\\beta}[\\sin(2\\alpha - \\beta) - \\sin\\beta]',
    '\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B, \\quad \\vec{v}_{m,g} = \\vec{v}_{m,r} + \\vec{v}_{r,g} \\; (\\text{Relative Velocity})',
    '\\text{River-Boat Shortest Time}: t_{\\text{min}} = \\frac{d}{v_m} \\; (\\theta = 90^\\circ \\text{ to flow}), \\quad \\text{Drift } x = v_r \\left(\\frac{d}{v_m}\\right)',
    '\\text{River-Boat Zero Drift}: \\sin\\theta = \\frac{v_r}{v_m} \\; (v_m > v_r), \\quad t = \\frac{d}{\\sqrt{v_m^2 - v_r^2}}',
    '\\text{Rain-Man}: \\vec{v}_{r,m} = \\vec{v}_r - \\vec{v}_m \\implies \\tan\\theta = \\frac{v_m}{v_r} \\; (\\theta \\text{ with vertical})'
  ],
  topics: [
    {
      id: 'phy-k1-pos-disp',
      name: '2.1 Distance, Displacement & Average Speed vs Velocity',
      description: 'Magnitude of displacement <= distance, equality holds only for straight line without turning back, instantaneous velocity vector is always tangent to path.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-k2-calculus-motion',
      name: '2.2 Calculus of Motion with Variable Acceleration',
      description: 'Position-dependent acceleration a(x) via integral v dv = integral a(x) dx, velocity-dependent acceleration a(v) = -k v or -k v^2 (resistive fluid drag).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'phy-k3-graphs',
      name: '2.3 Graphical Kinematics (x-t, v-t, a-t, v-x, a-x)',
      description: 'Area under v-t graph = displacement, slope of v-t = acceleration, area under a-t = change in velocity (v_f - v_i), slope of v-x = a/v.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-k4-kinematic-eqs',
      name: '2.4 Uniformly Accelerated Motion & Stopping Distance',
      description: 'Derivation and application of kinematic equations, stopping distance s = u^2 / (2a), stopping time t = u/a, ratio of distances in successive equal time intervals 1:3:5:7 (Galileo law of odd numbers).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-k5-free-fall',
      name: '2.5 Motion Under Gravity in 1D',
      description: 'Symmetry of flight time (time of ascent = time of descent = u/g), velocity at same height on way up and down |v_1| = |v_2|, drops from ascending/descending balloon with inertia.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-k6-ground-projectile',
      name: '2.6 Projectile Motion Ground-to-Ground',
      description: 'Independence of horizontal (vx = u cos theta = const) and vertical (vy = u sin theta - gt) motions, complementary angles of projection (theta and 90-theta have identical range R), speed at any time v = sqrt(ux^2 + vy^2).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'phy-k7-tower-projectile',
      name: '2.7 Horizontal & Oblique Projectiles from a Tower / Height',
      description: 'Landing speed v = sqrt(u^2 + 2gh) independent of launch angle, time of flight quadratic equation h = -u sin theta * t + 1/2 g t^2.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-k8-radius-curvature',
      name: '2.8 Radius of Curvature Along Trajectory',
      description: 'R_c = v^2 / a_perp, normal acceleration component a_perp = g cos phi, radius of curvature at vertex R_c = (u cos theta)^2 / g, radius of curvature at launch R_c = u^2 / (g cos theta).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-k9-incline-projectile',
      name: '2.9 Projectile on an Inclined Plane',
      description: 'Resolving g along the incline (g sin beta) and perpendicular to incline (g cos beta), time of flight 2 u_perp / g_perp, condition to hit perpendicular to incline (v_parallel = 0), maximum range up and down incline.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'phy-k10-rel-1d-2d',
      name: '2.10 Relative Velocity & Frames of Reference',
      description: 'Vector subtraction v_AB = v_A - v_B, two cars approaching each other, overtaking conditions, relative acceleration.',
      estimatedHours: 3,
      isHighWeightage: false
    },
    {
      id: 'phy-k11-river-boat',
      name: '2.11 River-Boat Crossing & Minimum Drift',
      description: 'Crossing in shortest time (steer straight across), crossing with zero drift (drift = 0 when v_m > v_r, sin theta = v_r / v_m), crossing with minimum drift when river is faster than boat (v_r > v_m, sin theta = v_m / v_r, minimum drift = d * sqrt(vr^2 - vm^2) / vm).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'phy-k12-rain-man-wind',
      name: '2.12 Rain-Man & Airplane-Wind Problems',
      description: 'Apparent direction of falling rain v_rm = v_r - v_m, umbrella orientation, aircraft heading vs ground track in crosswinds.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-k13-shortest-distance',
      name: '2.13 Shortest Distance of Approach Between Moving Particles',
      description: 'Relative position r_rel(t) = r_0 + v_rel * t, shortest distance d_min = |r_0 x v_rel| / |v_rel|, collision condition: relative velocity vector points directly along initial separation line.',
      estimatedHours: 5,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Kinematics is the building block of all Mechanics. JEE Main questions heavily test variable acceleration calculus, river-boat minimum drift when v_r > v_m, projectile trajectory relations, and radius of curvature.',
    ncertPointers: [
      'For two angles of projection theta and (90 - theta) with the same initial speed u, the horizontal range R is identical, but heights H1 and H2 differ. In this case: R = 4 * sqrt(H1 * H2) and T1 * T2 = 2R / g.',
      'Galileo\'s Law of Odd Numbers: For an object dropped from rest under gravity, the distances traversed in successive equal time intervals are in the ratio 1 : 3 : 5 : 7 : 9...',
      'In relative motion, the path of a projectile as seen from another projectile moving under gravity is ALWAYS a STRAIGHT LINE (because relative acceleration a_rel = g - g = 0!).',
      'The velocity vector is always tangential to the trajectory, but acceleration vector points toward the concave side of the curve.'
    ],
    commonTraps: [
      'Applying v = u + at when acceleration depends on position or velocity! For example, if a = -k v, you MUST separate variables: dv / v = -k dt => v(t) = v_0 e^(-k t).',
      'River-boat zero drift trap: When river speed v_r is GREATER than boat speed v_m, zero drift is physically IMPOSSIBLE. The boat can only achieve minimum drift by aiming at sin theta = v_m / v_r upstream.',
      'Trajectory equation parameter confusion: In y = x tan theta (1 - x/R), remember R is the FULL ground-to-ground range. This form saves 3 minutes when given point (x, y) through which projectile passes.',
      'Tower projectile time of flight: If a stone is thrown UPWARDS from height h, initial vertical displacement is -h (s = -h, u_y = +u sin theta, a_y = -g).'
    ],
    shortcutsVsConcepts: [
      'Radius of Curvature Shortcut: R_c = v^2 / a_perp. At maximum height, v = u cos theta, a_perp = g, so R_c = (u cos theta)^2 / g.',
      'Height from Flight Times: H = g * T^2 / 8. If flight time T = 4 s, then H = 10 * 16 / 8 = 20 m instantly.',
      'Range and Height relation: R tan theta = 4 H. If R = 4 H, then tan theta = 1 => theta = 45 degrees.'
    ]
  }
};
