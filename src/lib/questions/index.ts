import { Question } from '@/types';

// =============================================================================
// PHYSICS QUESTION IMPORTS (25 CHAPTERS)
// =============================================================================
import { unitsAndErrorsQuestions } from './physics/units-and-errors';
import { kinematicsQuestions } from './physics/kinematics';
import { lawsOfMotionQuestions } from './physics/laws-of-motion';
import { workEnergyPowerQuestions } from './physics/work-energy-power';
import { rotationalMotionQuestions } from './physics/rotational-motion';
import { gravitationQuestions } from './physics/gravitation';
import { solidsElasticityQuestions } from './physics/solids-elasticity';
import { fluidsQuestions } from './physics/fluids';
import { thermalPhysicsQuestions } from './physics/thermal-physics';
import { oscillationsQuestions } from './physics/oscillations';
import { wavesSoundQuestions } from './physics/waves-sound';
import { electrostaticsQuestions } from './physics/electrostatics';
import { capacitanceQuestions } from './physics/capacitance';
import { currentElectricityQuestions } from './physics/current-electricity';
import { movingChargesMagnetismQuestions } from './physics/magnetism';
import { magnetismMatterQuestions } from './physics/magnetism-matter';
import { emiQuestions } from './physics/emi';
import { acQuestions } from './physics/ac';
import { emWavesQuestions } from './physics/em-waves';
import { rayOpticsQuestions } from './physics/ray-optics';
import { waveOpticsQuestions } from './physics/wave-optics';
import { dualNatureQuestions } from './physics/dual-nature';
import { atomsQuestions } from './physics/atoms';
import { nucleiQuestions } from './physics/nuclei';
import { semiconductorsQuestions } from './physics/semiconductors';

// =============================================================================
// CHEMISTRY QUESTION IMPORTS (21 CHAPTERS)
// =============================================================================
import { moleConceptQuestions } from './chemistry/mole-concept';
import { atomicStructureQuestions } from './chemistry/atomic-structure';
import { chemicalThermodynamicsQuestions } from './chemistry/thermodynamics';
import { chemicalEquilibriumQuestions } from './chemistry/equilibrium';
import { solutionsQuestions } from './chemistry/solutions';
import { electrochemistryQuestions } from './chemistry/electrochemistry';
import { chemicalKineticsQuestions } from './chemistry/chemical-kinetics';
import { redoxReactionsQuestions } from './chemistry/redox-reactions';
import { classificationPeriodicityQuestions } from './chemistry/classification-periodicity';
import { chemicalBondingQuestions } from './chemistry/chemical-bonding';
import { pBlockQuestions } from './chemistry/p-block';
import { dAndFBlockQuestions } from './chemistry/d-f-block';
import { coordinationCompoundsQuestions } from './chemistry/coordination-compounds';
import { gocQuestions } from './chemistry/goc';
import { hydrocarbonsQuestions } from './chemistry/hydrocarbons';
import { haloalkanesHaloarenesQuestions } from './chemistry/haloalkanes-haloarenes';
import { alcoholsPhenolsEthersQuestions } from './chemistry/alcohols-phenols-ethers';
import { aldehydesKetonesQuestions } from './chemistry/aldehydes-ketones';
import { carboxylicAcidsDerivativesQuestions } from './chemistry/carboxylic-acids-derivatives';
import { aminesQuestions } from './chemistry/amines';
import { biomoleculesQuestions } from './chemistry/biomolecules';

// =============================================================================
// MATHEMATICS QUESTION IMPORTS (25 CHAPTERS)
// =============================================================================
import { setsRelationsFunctionsQuestions } from './mathematics/sets-relations-functions';
import { trigonometricFunctionsQuestions } from './mathematics/trigonometric-functions';
import { complexNumbersQuestions } from './mathematics/complex-numbers';
import { quadraticEquationsQuestions } from './mathematics/quadratic-equations';
import { permutationsCombinationsQuestions } from './mathematics/permutations-combinations';
import { binomialTheoremQuestions } from './mathematics/binomial-theorem';
import { sequencesSeriesQuestions } from './mathematics/sequences-series';
import { straightLinesQuestions } from './mathematics/straight-lines';
import { circlesQuestions } from './mathematics/circles';
import { conicSectionsQuestions } from './mathematics/conic-sections';
import { statisticsQuestions } from './mathematics/statistics';
import { relationsFunctionsQuestions } from './mathematics/relations-functions';
import { inverseTrigFunctionsQuestions } from './mathematics/inverse-trigonometric-functions';
import { matricesQuestions } from './mathematics/matrices';
import { determinantsLinearEquationsQuestions } from './mathematics/determinants-linear-equations';
import { limitsContinuityDifferentiabilityQuestions } from './mathematics/limits-continuity-differentiability';
import { differentiationQuestions } from './mathematics/differentiation';
import { applicationOfDerivativesQuestions } from './mathematics/application-of-derivatives';
import { indefiniteIntegrationQuestions } from './mathematics/indefinite-integration';
import { definiteIntegralsQuestions } from './mathematics/definite-integrals';
import { areaUnderCurvesQuestions } from './mathematics/area-under-curves';
import { differentialEquationsQuestions } from './mathematics/differential-equations';
import { vectorAlgebraQuestions } from './mathematics/vector-algebra';
import { threeDimensionalGeometryQuestions } from './mathematics/three-dimensional-geometry';
import { probabilityQuestions } from './mathematics/probability';

import { SEED_QUESTIONS } from './seed';

// Unified question aggregator
export const ALL_QUESTIONS: Question[] = SEED_QUESTIONS;

export {
  // Physics
  unitsAndErrorsQuestions,
  kinematicsQuestions,
  lawsOfMotionQuestions,
  workEnergyPowerQuestions,
  rotationalMotionQuestions,
  gravitationQuestions,
  solidsElasticityQuestions,
  fluidsQuestions,
  thermalPhysicsQuestions,
  oscillationsQuestions,
  wavesSoundQuestions,
  electrostaticsQuestions,
  capacitanceQuestions,
  currentElectricityQuestions,
  movingChargesMagnetismQuestions,
  magnetismMatterQuestions,
  emiQuestions,
  acQuestions,
  emWavesQuestions,
  rayOpticsQuestions,
  waveOpticsQuestions,
  dualNatureQuestions,
  atomsQuestions,
  nucleiQuestions,
  semiconductorsQuestions,

  // Chemistry
  moleConceptQuestions,
  atomicStructureQuestions,
  chemicalThermodynamicsQuestions,
  chemicalEquilibriumQuestions,
  solutionsQuestions,
  electrochemistryQuestions,
  chemicalKineticsQuestions,
  redoxReactionsQuestions,
  classificationPeriodicityQuestions,
  chemicalBondingQuestions,
  pBlockQuestions,
  dAndFBlockQuestions,
  coordinationCompoundsQuestions,
  gocQuestions,
  hydrocarbonsQuestions,
  haloalkanesHaloarenesQuestions,
  alcoholsPhenolsEthersQuestions,
  aldehydesKetonesQuestions,
  carboxylicAcidsDerivativesQuestions,
  aminesQuestions,
  biomoleculesQuestions,

  // Mathematics
  setsRelationsFunctionsQuestions,
  trigonometricFunctionsQuestions,
  complexNumbersQuestions,
  quadraticEquationsQuestions,
  permutationsCombinationsQuestions,
  binomialTheoremQuestions,
  sequencesSeriesQuestions,
  straightLinesQuestions,
  circlesQuestions,
  conicSectionsQuestions,
  statisticsQuestions,
  relationsFunctionsQuestions,
  inverseTrigFunctionsQuestions,
  matricesQuestions,
  determinantsLinearEquationsQuestions,
  limitsContinuityDifferentiabilityQuestions,
  differentiationQuestions,
  applicationOfDerivativesQuestions,
  indefiniteIntegrationQuestions,
  definiteIntegralsQuestions,
  areaUnderCurvesQuestions,
  differentialEquationsQuestions,
  vectorAlgebraQuestions,
  threeDimensionalGeometryQuestions,
  probabilityQuestions,
};
