import { Chapter } from '@/types';

export const gravitationChapter: Chapter = {
  id: 'phy-c11-gravitation',
  subject: 'physics',
  classLevel: 11,
  name: 'Gravitation',
  unit: 'Mechanics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Newton\'s Law of Gravitation}: F = G \\frac{m_1 m_2}{r^2}, \\quad G = 6.674 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2',
    '\\text{Acceleration at Surface}: g = \\frac{G M}{R^2} = \\frac{4}{3}\\pi G \\rho R',
    '\\text{Variation with Altitude } h: g_h = \\frac{g}{\\left(1 + \\frac{h}{R}\\right)^2} \\approx g\\left(1 - \\frac{2h}{R}\\right) \\; (\\text{for } h \\ll R)',
    '\\text{Variation with Depth } d: g_d = g\\left(1 - \\frac{d}{R}\\right) \\quad (\\text{strictly linear to zero at center})',
    '\\text{Variation with Latitude } \\lambda: g_\\lambda = g - \\omega^2 R \\cos^2\\lambda \\quad (g_{\\text{equator}} = g - \\omega^2 R, \\; g_{\\text{pole}} = g)',
    '\\text{Gravitational Potential (Solid Sphere)}: V_{\\text{in}}(r) = -\\frac{GM}{2R^3}(3R^2 - r^2), \\quad V_{\\text{center}} = -\\frac{3}{2}\\frac{GM}{R} = 1.5 \\, V_{\\text{surface}}',
    '\\text{Gravitational Potential (Shell)}: V_{\\text{in}} = -\\frac{GM}{R} \\; (\\text{constant}), \\quad E_{\\text{in}} = 0',
    '\\text{Escape Velocity}: v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\approx 11.2\\text{ km/s}',
    '\\text{Orbital Velocity}: v_0 = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{g R^2}{R+h}}, \\quad v_e = \\sqrt{2}\\, v_0',
    '\\text{Satellite Period}: T = \\frac{2\\pi r^{3/2}}{\\sqrt{GM}} \\implies T^2 = \\left(\\frac{4\\pi^2}{GM}\\right) r^3',
    '\\text{Satellite Energy}: K = \\frac{GMm}{2r}, \\quad U = -\\frac{GMm}{r}, \\quad E = -\\frac{GMm}{2r} \\implies E = -K = \\frac{U}{2}',
    '\\text{Kepler\'s 2nd Law}: \\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}, \\quad v_p r_p = v_a r_a'
  ],
  topics: [
    {
      id: 'phy-grav-1-universal-law-cavity',
      name: '6.1 Universal Law of Gravitation & Cavity Fields',
      description: 'Point masses, vector form of gravitational force, principle of superposition, uniform gravitational field inside an eccentric spherical cavity in a solid sphere E = 4/3 pi G rho d.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-grav-2-g-variations',
      name: '6.2 Acceleration Due to Gravity (Altitude, Depth & Shape)',
      description: 'Derivation of g at surface; variation with height h (exact vs binomial approximation); variation with depth d; oblateness of the Earth (equatorial vs polar radius).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-grav-3-earth-rotation-latitude',
      name: '6.3 Earth\'s Diurnal Rotation & Apparent Gravity',
      description: 'Centrifugal pseudo-force effect on plumb lines, apparent gravity formula g_lambda = g - omega^2 R cos^2(lambda), critical rotation speed for weightlessness at the equator omega = sqrt(g/R).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-grav-4-potential-field-distributions',
      name: '6.4 Gravitational Field & Potential Distributions',
      description: 'Field E = -dV/dr; continuous distributions: thin spherical shell (Gauss\'s law analogy, zero internal field) vs uniform solid sphere (linear internal field, parabolic potential well).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-grav-5-pe-work-transfer',
      name: '6.5 Gravitational Potential Energy & Work Done',
      description: 'Zero reference at infinity, binding energy, work required to raise a mass m to height h: Delta U = m g h / (1 + h/R).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-grav-6-escape-velocity',
      name: '6.6 Escape Velocity & Atmospheric Retention',
      description: 'Energy conservation to escape planetary gravitational well, projection at an angle (escape speed is direction-independent), escape velocity for planets of varying density and radius, Jeans escape of planetary atmospheres.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-grav-7-orbital-velocity-satellites',
      name: '6.7 Satellite Orbiting Mechanics & Time Period',
      description: 'Centripetal balance F_g = m v^2 / r, orbital speed formula, near-Earth satellite speed 7.92 km/s, period of near-Earth satellite 84.6 minutes, calculation of planetary mass from moon orbits.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-grav-8-keplers-laws-ellipses',
      name: '6.8 Kepler\'s Laws & Elliptical Orbits',
      description: 'Elliptical orbits (semi-major axis a, perihelion r_p, aphelion r_a); conservation of angular momentum (areal velocity dA/dt = L/(2m)); Kepler\'s third law T^2 = (4 pi^2 / GM) a^3; speeds at apsides v_p * r_p = v_a * r_a.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-grav-9-satellite-energetics',
      name: '6.9 Energy of Orbiting Satellites & Orbital Transfers',
      description: 'Kinetic, potential, and total mechanical energy; Virial theorem (E = -K = U/2); binding energy; atmospheric drag leading to orbital decay and paradoxically increasing speed.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-grav-10-geostationary-polar',
      name: '6.10 Geostationary vs Polar Satellites',
      description: 'Geostationary orbit conditions: period 24h, equatorial orbital plane, west-to-east sense, altitude ~35,800 km; polar sun-synchronous satellites for weather and reconnaissance; weightlessness.',
      estimatedHours: 2,
      isHighWeightage: false
    }
  ],
  guide: {
    overview: 'Gravitation is a guaranteed 1-question chapter in JEE Main and a frequent subject of multi-concept orbital dynamics problems in JEE Advanced. The central concepts tested are: (1) Variation of g with altitude vs depth, (2) Potential inside solid spheres, (3) Escape velocity and projectile projection to finite heights, and (4) Kepler\'s laws with angular momentum conservation.',
    ncertPointers: [
      'The binomial formula $g_h = g(1 - 2h/R)$ is valid ONLY when $h \\ll R$ (typically $h < 300\\text{ km}$, less than 5% of Earth\'s radius). For large heights like $h = R$ or $h = 2R$, you MUST use the exact formula $g_h = \\frac{g}{(1 + h/R)^2}$.',
      'The gravitational potential inside a hollow spherical shell is CONSTANT and equals its surface value: $V_{\\text{inside}} = -\\frac{GM}{R}$. The field is zero. Inside a uniform solid sphere, the potential is a parabolic function with minimum at the center: $V_{\\text{center}} = -1.5 \\frac{GM}{R}$.',
      'Escape speed from a planet is INDEPENDENT of the angle of projection! A projectile fired at $30^\\circ, 45^\\circ$, or vertically upwards with $v = v_e$ will escape to infinity, provided it does not hit the planet surface.',
      'A satellite in circular orbit around Earth has TOTAL energy $E = -\\frac{GMm}{2r}$. If atmospheric drag does negative work, total energy decreases (becomes more negative), which means the orbital radius $r$ DECREASES, and speed $v = \\sqrt{GM/r}$ actually INCREASES!',
      'Inside an orbiting satellite, everything is in state of free-fall with acceleration $a = g_{\\text{orbit}}$. The normal reaction between any object and the spacecraft is ZERO (apparent weightlessness).'
    ],
    commonTraps: [
      'Equal change in $g$ trap: $g_h = g_d \\implies g(1 - 2h/R) = g(1 - d/R) \\implies d = 2h$. This is true ONLY for small $h \\ll R$. If $h = R$, $g_h = g/4$, which occurs at depth $d = \\frac{3}{4} R = 0.75 R$, NOT $d = 2R$ (which is outside the Earth!).',
      'Escape velocity from height $h$: To escape from an orbit at radius $r = R + h$, the escape speed is $v = \\sqrt{\\frac{2GM}{r}}$, NOT $\\sqrt{\\frac{2GM}{R}}$!',
      'Satellite projection speed vs escape speed: If a satellite is projected with speed $v$ from surface: if $v = v_0 = \\sqrt{gR}$, it enters near-Earth circular orbit; if $v_0 < v < v_e$, it enters an elliptical orbit; if $v = v_e = \\sqrt{2gR}$, it escapes along a parabolic trajectory; if $v > v_e$, it escapes along a hyperbolic trajectory with residual speed $v_\\infty = \\sqrt{v^2 - v_e^2}$.',
      'Latitude variation angle trap: $\\lambda$ is the LATITUDE angle measured from the EQUATOR. If the question gives the CO-LATITUDE $\\phi$ (angle from the pole), then $\\lambda = 90^\\circ - \\phi$, so $\\cos^2\\lambda = \\sin^2\\phi$.'
    ],
    shortcutsVsConcepts: [
      'Height reached by vertical projectile: If fired with speed $v = f \\, v_e$ ($0 < f < 1$), the maximum height reached is $h = R \\frac{f^2}{1 - f^2}$. (e.g., if $v = v_e/2$, $f = 1/2 \\implies h = R \\frac{1/4}{3/4} = R/3$). Instant 10-second solution.',
      'Residual Speed at Infinity: By energy conservation, $\\frac{1}{2} m v^2 - \\frac{GMm}{R} = \\frac{1}{2} m v_\\infty^2 \\implies v_\\infty = \\sqrt{v^2 - v_e^2}$.',
      'Kepler\'s Apsidal Speed Shortcut: In an elliptical orbit, $v_p r_p = v_a r_a$. Since $r_p = a(1 - e)$ and $r_a = a(1 + e)$, the ratio of speeds is $\\frac{v_p}{v_a} = \\frac{1 + e}{1 - e}$.'
    ]
  }
};
