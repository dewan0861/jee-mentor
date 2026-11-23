import { Chapter } from '@/types';

export const waveOpticsChapter: Chapter = {
  id: 'phy-c12-wave-optics',
  subject: 'physics',
  classLevel: 12,
  name: 'Wave Optics',
  unit: 'Optics & Modern Physics',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Phase & Path Difference}: \\Delta \\phi = \\frac{2\\pi}{\\lambda} \\Delta x',
    '\\text{Resultant Intensity}: I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi = 4I_0 \\cos^2\\left(\\frac{\\phi}{2}\\right) \\; (\\text{if } I_1 = I_2 = I_0)',
    '\\text{Max & Min Intensity}: I_{\\text{max}} = (\\sqrt{I_1} + \\sqrt{I_2})^2, \\quad I_{\\text{min}} = (\\sqrt{I_1} - \\sqrt{I_2})^2, \\quad \\frac{I_{\\text{max}}}{I_{\\text{min}}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2',
    '\\text{YDSE Path Difference}: \\Delta x = d \\sin\\theta \\approx \\frac{yd}{D}',
    '\\text{YDSE Maxima & Minima}: y_n = n \\frac{\\lambda D}{d} \\; (\\text{bright}), \\quad y_n = \\left(n - \\frac{1}{2}\\right) \\frac{\\lambda D}{d} \\; (\\text{dark})',
    '\\text{Fringe Width}: \\beta = \\frac{\\lambda D}{d}, \\quad \\theta_0 = \\frac{\\beta}{D} = \\frac{\\lambda}{d} \\; (\\text{angular width})',
    '\\text{Slab Fringe Shift}: \\Delta y = \\frac{(\\mu - 1)t D}{d} = \\frac{(\\mu - 1)t}{\\lambda} \\beta',
    '\\text{Immersion in Medium}: \\lambda\' = \\frac{\\lambda}{\\mu} \\implies \\beta\' = \\frac{\\beta}{\\mu}',
    '\\text{Single Slit Minima}: a \\sin\\theta = n \\lambda \\quad (n = 1, 2, 3, \\dots)',
    '\\text{Central Maxima Width}: 2\\theta = \\frac{2\\lambda}{a}, \\quad 2y_0 = \\frac{2\\lambda D}{a} = 2\\beta_d'
  ],
  topics: [
    {
      id: 'phy-wo-1-huygens-wavefronts',
      name: '12.10.1 Wavefronts, Huygens\' Principle & Reflection/Refraction Proofs',
      description: 'Definition of wavefront (locus of all points having constant phase); spherical, cylindrical, and plane wavefronts; Huygens\' secondary wavelets and construction of forward envelope; wave theory proofs of laws of reflection and Snell\'s law of refraction; frequency invariance across interfaces.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wo-2-interference-coherence',
      name: '12.10.2 Interference of Light & Coherent Sources',
      description: 'Superposition principle for coherent waves; relation between phase difference phi and path difference Delta x; constructive interference (bright, Delta x = n lambda) and destructive interference (dark, Delta x = (2n-1) lambda / 2); formula for resultant intensity I = I_1 + I_2 + 2 sqrt(I_1 I_2) cos phi; why two independent light bulbs cannot produce steady interference.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-wo-3-ydse-geometry-fringes',
      name: '12.10.3 Young\'s Double Slit Experiment (YDSE)',
      description: 'Experimental setup; derivation of geometric path difference Delta x = y d / D; positions of bright and dark fringes on screen; fringe width beta = lambda D / d; angular fringe width theta = lambda / d; intensity distribution on screen as function of y.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-wo-4-ydse-slabs-mediums',
      name: '12.10.4 YDSE with Thin Transparent Slab & Liquid Immersion',
      description: 'Introduction of thin dielectric slab of thickness t and refractive index mu in front of one slit; extra optical path (mu - 1)t; rigid lateral shift of entire fringe pattern Delta y = (mu - 1)t D / d without altering fringe width beta; effect of immersing entire apparatus in a liquid of refractive index mu (beta decreases to beta / mu).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-wo-5-single-slit-diffraction',
      name: '12.10.5 Fraunhofer Diffraction at a Single Slit',
      description: 'Physical distinction between interference and diffraction; division of slit into secondary wavelet strips; condition for diffraction minima a sin theta = n lambda; secondary maxima condition a sin theta = (n + 1/2) lambda; width of central bright maximum 2 lambda D / a (double the width of secondary maxima); rapid decrease in secondary peak intensities.',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'When light passes from one optical medium to another, its frequency remains strictly unchanged, whereas its speed and wavelength decrease in denser media according to v = c/mu and lambda = lambda_0/mu.',
    'In Young\'s Double Slit Experiment, all interference fringes (bright and dark) have exactly equal width beta = lambda D / d, whereas in single slit diffraction, the central maximum is twice as wide as the secondary maxima.',
    'Energy is strictly conserved in interference: it is simply redistributed from points of destructive interference (dark fringes) to points of constructive interference (bright fringes).',
    'Introducing a thin transparent sheet in front of one slit shifts the entire interference fringe pattern towards the side of the covered slit by Delta y = (mu - 1)t D / d, but does NOT change the fringe spacing beta.',
    'Two independent monochromatic sodium lamps can NEVER produce sustained interference because their spontaneous atomic emissions have random phase jumps on timescales of 10^-10 s (incoherent).'
  ],
  commonTraps: [
    'Confusing minima condition of diffraction with maxima condition of interference: In single slit diffraction, a sin theta = n lambda gives MINIMA (dark fringes), NOT bright fringes!',
    'Writing the central maximum width in diffraction as lambda D / a: The full width of the central maximum is from the first minimum on one side to the first minimum on the other side, so it is 2 lambda D / a.',
    'Assuming fringe width changes when a thin sheet covers one slit: The sheet merely shifts the position of the fringes (optical path shift). The fringe width beta = lambda D / d remains completely unchanged.',
    'Confusing intensity ratio with amplitude ratio: I_max / I_min = ((A_1 + A_2) / (A_1 - A_2))^2 = ((sqrt(I_1) + sqrt(I_2)) / (sqrt(I_1) - sqrt(I_2)))^2. Do not forget the square.',
    'Using paraxial approximation y/D when angle theta is large: If d is comparable to lambda, sin theta cannot be replaced with tan theta = y/D.'
  ]
};
