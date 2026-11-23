import { Chapter } from '@/types';

export const unitsAndErrorsChapter: Chapter = {
  id: 'phy-c11-units-errors',
  subject: 'physics',
  classLevel: 11,
  name: 'Units, Dimensions and Experimental Errors',
  unit: 'General Physics & Measurement',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Homogeneity}: [LHS] = [RHS] = [\\text{each additive term}]',
    '\\text{Conversion}: n_1 [M_1^a L_1^b T_1^c] = n_2 [M_2^a L_2^b T_2^c] \\implies n_2 = n_1 \\left(\\frac{M_1}{M_2}\\right)^a \\left(\\frac{L_1}{L_2}\\right)^b \\left(\\frac{T_1}{T_2}\\right)^c',
    '\\text{Fractional Error}: \\frac{\\Delta A}{A}, \\quad \\text{Percentage Error}: \\frac{\\Delta A}{A} \\times 100\\%',
    'Z = A^x B^y C^{-z} \\implies \\left(\\frac{\\Delta Z}{Z}\\right)_{\\text{max}} = x\\left|\\frac{\\Delta A}{A}\\right| + y\\left|\\frac{\\Delta B}{B}\\right| + z\\left|\\frac{\\Delta C}{C}\\right|',
    'Z = A \\pm B \\implies \\Delta Z_{\\text{max}} = \\Delta A + \\Delta B \\quad (\\text{absolute errors always add})',
    '\\text{Least Count (Vernier)} = 1\\text{ MSD} - 1\\text{ VSD} = 1\\text{ MSD}\\left(1 - \\frac{n-1}{n}\\right) = \\frac{1}{n}\\text{ MSD}',
    '\\text{Least Count (Screw Gauge)} = \\frac{\\text{Pitch}}{\\text{Total Circular Scale Divisions}} = \\frac{\\text{Distance moved in } N \\text{ rotations}}{N \\times \\text{Divisions}}',
    '\\text{True Reading} = \\text{Main Scale Reading} + (\\text{Coinciding Division} \\times \\text{Least Count}) - (\\pm \\text{Zero Error})',
    '\\text{Simple Pendulum}: g = \\frac{4\\pi^2 L}{T^2} \\implies \\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta T}{T} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta t}{t} \\; (t = \\text{time for } N \\text{ oscillations})'
  ],
  topics: [
    {
      id: 'phy-u1-si-units',
      name: '1.1 SI Base Units, Derived Units & Dimensions',
      description: 'The 7 base quantities (kg, m, s, A, K, mol, cd), supplementary units (plane angle in radians, solid angle in steradians), and derived physical dimensions.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-u2-constants-dims',
      name: '1.2 Dimensional Formulas of Universal Physical Constants',
      description: 'Gravitational constant G [M^-1 L^3 T^-2], Planck constant h [M L^2 T^-1], Permittivity epsilon_0 [M^-1 L^-3 T^4 A^2], Permeability mu_0 [M L T^-2 A^-2], Stefan constant sigma, Boltzmann constant k_B, Solar constant.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-u3-homogeneity',
      name: '1.3 Principle of Homogeneity & Dimensional Applications',
      description: 'Testing equation correctness, finding unknown powers, and deducing relations between physical quantities assuming power-law dependencies.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-u4-dims-limitations',
      name: '1.4 Limitations of Dimensional Analysis',
      description: 'Cannot determine dimensionless constants (like 1/2 or 2*pi), cannot derive equations involving trigonometric, logarithmic, or exponential functions, or additions of multi-term quantities.',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-u5-sig-figures',
      name: '1.5 Significant Figures & Rounding Off Rules',
      description: 'Leading vs trailing zeroes with and without decimal points, addition/subtraction (least decimal places rule) vs multiplication/division (least significant digits rule).',
      estimatedHours: 2,
      isHighWeightage: true
    },
    {
      id: 'phy-u6-types-errors',
      name: '1.6 Systematic, Random & Instrumental Errors',
      description: 'Causes and mitigation of systematic errors (calibration, zero errors), random errors (reduced by repeated N measurements: standard deviation decreases by sqrt(N)).',
      estimatedHours: 2,
      isHighWeightage: false
    },
    {
      id: 'phy-u7-error-prop',
      name: '1.7 Propagation & Combination of Errors',
      description: 'Calculus-based error analysis (dZ/Z), absolute vs relative vs percentage errors, maximum permissible error in quotient, products, and powers.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-u8-vernier',
      name: '1.8 Vernier Calipers & Zero Error Calibration',
      description: 'Standard 9 MSD = 10 VSD and non-standard Vernier setups where n VSD = (n-1) MSD, positive zero error (VSD zero lies to the right of MSD zero) and negative zero error (VSD zero lies to the left).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-u9-screw-gauge',
      name: '1.9 Screw Gauge, Spherometer & Backlash Error',
      description: 'Pitch determination, circular scale readings, positive and negative zero corrections, backlash error caused by loose threads and gear wear, radius of curvature using spherometer h/2 + a^2/(6h).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-u10-pendulum-exp',
      name: '1.10 Acceleration Due to Gravity (g) Experiment',
      description: 'Simple pendulum g = 4*pi^2 * L / T^2, timing N oscillations with a stopwatch to reduce Delta T / T, meter scale resolution for length L, error budget optimization.',
      estimatedHours: 3,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'This chapter carries 1-2 guaranteed questions (4-8 marks) in every JEE Main session and frequent multi-concept questions in JEE Advanced. The focus has decisively shifted toward experimental apparatus (Vernier calipers, screw gauge with non-standard zero errors) and combination of errors with powers.',
    ncertPointers: [
      'In Vernier Calipers, if the zero of the Vernier scale lies to the RIGHT of the main scale zero, the zero error is POSITIVE and must be SUBTRACTED from the observed reading.',
      'If the zero of the Vernier scale lies to the LEFT of the main scale zero, the zero error is NEGATIVE and its magnitude is [Total VSD - Coinciding VSD] * LC, which must be ADDED to the observed reading.',
      'Plane angle (radian) and Solid angle (steradian) are DIMENSIONLESS physical quantities that still possess UNITS.',
      'Relative permittivity (dielectric constant) and relative permeability are dimensionless and unitless.',
      'To reduce the fractional error in measuring time period T of a pendulum, measure the time for a large number of oscillations N (e.g., 50 or 100 oscillations), because Delta T / T = Delta t / t, where t is the total measured time.'
    ],
    commonTraps: [
      'Error subtraction trap: Students frequently write Delta Z / Z = x (Delta A/A) - z (Delta C/C) when C is in the denominator. IN ERROR ANALYSIS, POWERS ALWAYS CONTRIBUTE POSITIVELY TO MAXIMUM PERMISSIBLE ERROR (z is always positive!).',
      'Negative zero error on screw gauge: If the circular scale zero is 5 divisions BELOW the reference line when jaws touch, zero error is +5 divisions. If it is 5 divisions ABOVE the reference line, the error is negative (-5 divisions or 95 divisions on a 100-div scale).',
      'Significant figure trap in addition: In 12.58 + 3.1, the answer must be rounded to ONE decimal place (15.7), regardless of total significant digits.',
      'Significant figure trap in multiplication: In 2.5 * 1.25, the answer must have TWO significant figures (3.1), reflecting the least precise factor (2.5).'
    ],
    shortcutsVsConcepts: [
      'Dimensional Elimination: When solving physics questions where options are algebraic formulas, find the dimension of the target variable and test each option. In ~40% of JEE Main questions, 2 or 3 options can be ruled out in under 15 seconds.',
      'Logarithmic Differentiation for Errors: For any relation Z = (A^a * B^b) / (C^c * D^d), take natural log: ln Z = a ln A + b ln B - c ln C - d ln D. Differentiating: dZ / Z = a (dA/A) + b (dB/B) + c (dC/C) + d (dD/D). Instant formula derivation without memorization.',
      'Quick Screw Gauge True Reading: True Thickness = Pitch Reading + (Circular Div * LC) - Zero Error.'
    ]
  }
};
