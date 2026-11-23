import { Chapter } from '@/types';

export const rayOpticsChapter: Chapter = {
  id: 'phy-c12-ray-optics',
  subject: 'physics',
  classLevel: 12,
  name: 'Ray Optics and Optical Instruments',
  unit: 'Optics & Modern Physics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Mirror Formula}: \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} = \\frac{2}{R}, \\quad m = -\\frac{v}{u} = \\frac{f}{f - u} = \\frac{f - v}{f}',
    '\\text{Snell\'s Law}: n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2, \\quad \\text{Apparent Depth}: d\' = \\frac{d}{\\mu}, \\quad \\text{Shift}: \\Delta x = d\\left(1 - \\frac{1}{\\mu}\\right)',
    '\\text{Critical Angle & TIR}: \\sin\\theta_c = \\frac{1}{\\mu}, \\quad \\mu_{\\text{core}} > \\mu_{\\text{cladding}}',
    '\\text{Prism Equation}: A = r_1 + r_2, \\quad \\delta = i + e - A',
    '\\text{Minimum Deviation}: i = e, \\; r_1 = r_2 = \\frac{A}{2} \\implies \\mu = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}, \\quad \\delta \\approx (\\mu - 1)A \\; (\\text{thin prism})',
    '\\text{Refraction at Spherical Interface}: \\frac{\\mu_2}{v} - \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R}',
    '\\text{Lens Maker\'s Formula}: \\frac{1}{f} = \\left(\\frac{\\mu_{\\text{lens}}}{\\mu_{\\text{med}}} - 1\\right) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)',
    '\\text{Thin Lens Formula}: \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad m = \\frac{v}{u} = \\frac{f}{f + u}',
    '\\text{Combination of Thin Lenses}: \\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{d}{f_1 f_2}, \\quad P_{\\text{eq}} = P_1 + P_2 - d P_1 P_2',
    '\\text{Silvering of Lens}: P_{\\text{eq}} = 2 P_L + P_M \\implies \\frac{1}{F_{\\text{eq}}} = \\frac{2}{f_L} - \\frac{1}{f_M}',
    '\\text{Compound Microscope}: M = -\\frac{v_o}{u_o} \\left(1 + \\frac{D}{f_e}\\right) \\; (\\text{at } D), \\quad M = -\\frac{L}{f_o} \\frac{D}{f_e} \\; (\\text{relaxed/normal})',
    '\\text{Astronomical Telescope}: M = -\\frac{f_o}{f_e}, \\quad L = f_o + f_e \\; (\\text{normal adjustment})'
  ],
  topics: [
    {
      id: 'phy-ro-1-spherical-mirrors',
      name: '12.9.1 Reflection at Spherical Mirrors & Sign Conventions',
      description: 'Cartesian coordinate sign convention; paraxial rays; derivation of mirror formula 1/v + 1/u = 1/f; transverse magnification m = -v/u; longitudinal magnification m_L = -m^2; concave vs convex mirror ray tracing and virtual/real images.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-ro-2-refraction-apparent-depth',
      name: '12.9.2 Refraction at Plane Interfaces, Apparent Depth & Shifts',
      description: 'Snell\'s law; principle of optical reversibility; apparent depth of an object submerged in single and multiple immiscible liquid layers d\' = sum(d_i / mu_i); normal shift; lateral displacement through a glass slab t sin(i - r) / cos(r).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-ro-3-tir-optical-fibres',
      name: '12.9.3 Total Internal Reflection (TIR) & Critical Angle',
      description: 'Condition for TIR (denser to rarer medium, angle of incidence > critical angle); sin theta_c = 1/mu; illuminating circle of light from point source underwater (radius r = h / sqrt(mu^2 - 1)); optical fibres, acceptance angle, and numerical aperture.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-ro-4-prisms-dispersion',
      name: '12.9.4 Refraction through Prisms & Minimum Deviation',
      description: 'Geometry of prism: A = r_1 + r_2, deviation delta = i + e - A; symmetric path at minimum deviation delta_m where i = e and r_1 = r_2 = A/2; refractive index formula mu = sin((A + delta_m)/2) / sin(A/2); condition of no emergence; dispersion by thin prisms.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-ro-5-spherical-refraction-lens-makers',
      name: '12.9.5 Spherical Refracting Surfaces & Lens Maker\'s Formula',
      description: 'Derivation of mu_2/v - mu_1/u = (mu_2 - mu_1)/R; Lens Maker\'s formula 1/f = (mu - 1)(1/R_1 - 1/R_2); effect of surrounding medium on focal length (divergent behavior when immersed in denser liquid); plano-convex, bi-convex, and meniscus lenses.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-ro-6-lenses-cutting-silvering',
      name: '12.9.6 Cutting of Lenses & Silvering Combinations',
      description: 'Cutting a symmetrical lens along principal axis vs perpendicular to principal axis; power and focal length of combined thin lenses in contact and separated by distance d; silvering of plane and curved surfaces of lenses; equivalent focal length 1/F = 2/f_L - 1/f_M.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-ro-7-optical-instruments',
      name: '12.9.7 Microscopes and Telescopes',
      description: 'Simple magnifier; compound microscope: objective lens, eyepiece, magnifying power for image at near point D (25 cm) and at infinity (relaxed eye), tube length L; astronomical telescope: magnifying power M = f_o/f_e, tube length L = f_o + f_e; terrestrial and reflecting telescopes (Cassegrain).',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'When a convex lens of refractive index mu_L is immersed in a liquid of refractive index mu_m > mu_L, its converging behavior reverses and it behaves as a diverging lens with negative focal length.',
    'A light ray incident normally on a refracting surface suffers zero deviation (i = 0 implies r = 0), but its speed and wavelength still decrease according to v = c/mu and lambda = lambda_0/mu.',
    'At minimum deviation through an equilateral or isosceles prism, the refracted ray inside the prism travels parallel to its base.',
    'For relaxed eye observation (normal adjustment), the final image is formed at infinity, which allows the eye ciliary muscles to remain completely relaxed without fatigue.',
    'The resolving power of optical instruments depends on aperture diameter; reflecting telescopes (Cassegrain) avoid chromatic aberration and spherical aberration (using parabolic mirrors).'
  ],
  commonTraps: [
    'Applying mirror formula sign conventions inconsistently: Always measure distances from the optical centre/pole. Distances in direction of incident ray are positive, opposite are negative.',
    'Ignoring the sign of R_1 and R_2 in Lens Maker\'s formula: For an equiconvex lens, R_1 is positive (+R) and R_2 is negative (-R), giving (1/R_1 - 1/R_2) = (1/R - (-1/R)) = 2/R. Do not write 0!',
    'Forgetting the 2 factor for lens transmission in silvering: Light passes through the lens TWICE (once before reflection, once after reflection), so P_eq = 2 P_L + P_M.',
    'Confusing tube length definitions: In a compound microscope in normal adjustment, L is the separation between objective and eyepiece, whereas in telescope L = f_o + f_e.',
    'Assuming critical angle exists for light traveling from rarer to denser medium: Total Internal Reflection occurs EXCLUSIVELY when light attempts to travel from an optically denser medium into a rarer medium.'
  ]
};
