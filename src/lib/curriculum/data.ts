import { Chapter, Subject } from '@/types';
import { unitsAndErrorsChapter } from './physics/class11/units-and-errors';
import { kinematicsChapter } from './physics/class11/kinematics';
import { lawsOfMotionChapter } from './physics/class11/laws-of-motion';
import { workEnergyPowerChapter } from './physics/class11/work-energy-power';
import { rotationalMotionChapter } from './physics/class11/rotational-motion';
import { gravitationChapter } from './physics/class11/gravitation';
import { solidsElasticityChapter } from './physics/class11/solids-elasticity';
import { fluidsChapter } from './physics/class11/fluids';
import { thermalPhysicsChapter } from './physics/class11/thermal-physics';
import { oscillationsChapter } from './physics/class11/oscillations';
import { wavesSoundChapter } from './physics/class11/waves-sound';
import { electrostaticsChapter } from './physics/class12/electrostatics';
import { capacitanceChapter } from './physics/class12/capacitance';
import { currentElectricityChapter } from './physics/class12/current-electricity';
import { movingChargesMagnetismChapter } from './physics/class12/magnetism';
import { magnetismMatterChapter } from './physics/class12/magnetism-matter';
import { emiChapter } from './physics/class12/emi';
import { acChapter } from './physics/class12/ac';
import { emWavesChapter } from './physics/class12/em-waves';
import { rayOpticsChapter } from './physics/class12/ray-optics';
import { waveOpticsChapter } from './physics/class12/wave-optics';
import { dualNatureChapter } from './physics/class12/dual-nature';
import { atomsChapter } from './physics/class12/atoms';
import { nucleiChapter } from './physics/class12/nuclei';
import { semiconductorsChapter } from './physics/class12/semiconductors';

// Chemistry — Physical Chemistry
import { moleConceptChapter } from './chemistry/physical/mole-concept';
import { atomicStructureChapter } from './chemistry/physical/atomic-structure';
import { chemicalThermodynamicsChapter } from './chemistry/physical/thermodynamics';
import { chemicalEquilibriumChapter } from './chemistry/physical/equilibrium';
import { solutionsChapter } from './chemistry/physical/solutions';
import { electrochemistryChapter } from './chemistry/physical/electrochemistry';
import { chemicalKineticsChapter } from './chemistry/physical/chemical-kinetics';
import { redoxReactionsChapter } from './chemistry/physical/redox-reactions';

// Chemistry — Inorganic Chemistry
import { classificationPeriodicityChapter } from './chemistry/inorganic/classification-periodicity';
import { chemicalBondingChapter } from './chemistry/inorganic/chemical-bonding';
import { pBlockChapter } from './chemistry/inorganic/p-block';
import { dAndFBlockChapter } from './chemistry/inorganic/d-f-block';
import { coordinationCompoundsChapter } from './chemistry/inorganic/coordination-compounds';

// Chemistry — Organic Chemistry
import { gocChapter } from './chemistry/organic/goc';
import { hydrocarbonsChapter } from './chemistry/organic/hydrocarbons';
import { haloalkanesHaloarenesChapter } from './chemistry/organic/haloalkanes-haloarenes';
import { alcoholsPhenolsEthersChapter } from './chemistry/organic/alcohols-phenols-ethers';
import { aldehydesKetonesChapter } from './chemistry/organic/aldehydes-ketones';
import { carboxylicAcidsDerivativesChapter } from './chemistry/organic/carboxylic-acids-derivatives';
import { aminesChapter } from './chemistry/organic/amines';
import { biomoleculesChapter } from './chemistry/organic/biomolecules';

// Mathematics — Class 11
import { setsRelationsFunctionsClass11Chapter } from './mathematics/class11/sets-relations-functions';
import { trigonometricFunctionsChapter } from './mathematics/class11/trigonometric-functions';
import { complexNumbersChapter } from './mathematics/class11/complex-numbers';
import { quadraticEquationsChapter } from './mathematics/class11/quadratic-equations';
import { permutationsCombinationsChapter } from './mathematics/class11/permutations-combinations';
import { binomialTheoremChapter } from './mathematics/class11/binomial-theorem';
import { sequencesSeriesChapter } from './mathematics/class11/sequences-series';
import { straightLinesChapter } from './mathematics/class11/straight-lines';
import { circlesChapter } from './mathematics/class11/circles';
import { conicSectionsChapter } from './mathematics/class11/conic-sections';
import { statisticsChapter } from './mathematics/class11/statistics';

// Mathematics — Class 12
import { relationsFunctionsClass12Chapter } from './mathematics/class12/relations-functions';
import { inverseTrigFunctionsChapter } from './mathematics/class12/inverse-trigonometric-functions';
import { matricesChapter } from './mathematics/class12/matrices';
import { determinantsLinearEquationsChapter } from './mathematics/class12/determinants-linear-equations';
import { limitsContinuityDifferentiabilityChapter } from './mathematics/class12/limits-continuity-differentiability';
import { differentiationChapter } from './mathematics/class12/differentiation';
import { applicationOfDerivativesChapter } from './mathematics/class12/application-of-derivatives';
import { indefiniteIntegrationChapter } from './mathematics/class12/indefinite-integration';
import { definiteIntegralsChapter } from './mathematics/class12/definite-integrals';
import { areaUnderCurvesChapter } from './mathematics/class12/area-under-curves';
import { differentialEquationsChapter } from './mathematics/class12/differential-equations';
import { vectorAlgebraChapter } from './mathematics/class12/vector-algebra';
import { threeDimensionalGeometryChapter } from './mathematics/class12/three-dimensional-geometry';
import { probabilityChapter } from './mathematics/class12/probability';

export const JEE_CURRICULUM: Chapter[] = [
  // =========================================================================
  // PHYSICS — CLASS 11 (EXHAUSTIVE SYLLABUS — COMPLETE 11 CHAPTERS)
  // =========================================================================
  unitsAndErrorsChapter,
  kinematicsChapter,
  lawsOfMotionChapter,
  workEnergyPowerChapter,
  rotationalMotionChapter,
  gravitationChapter,
  solidsElasticityChapter,
  fluidsChapter,
  thermalPhysicsChapter,
  oscillationsChapter,
  wavesSoundChapter,

  // =========================================================================
  // PHYSICS — CLASS 12 (EXHAUSTIVE SYLLABUS — COMPLETE 14 CHAPTERS)
  // =========================================================================
  electrostaticsChapter,
  capacitanceChapter,
  currentElectricityChapter,
  movingChargesMagnetismChapter,
  magnetismMatterChapter,
  emiChapter,
  acChapter,
  emWavesChapter,
  rayOpticsChapter,
  waveOpticsChapter,
  dualNatureChapter,
  atomsChapter,
  nucleiChapter,
  semiconductorsChapter,

  // =========================================================================
  // CHEMISTRY — PHYSICAL, INORGANIC & ORGANIC (21 EXHAUSTIVE CHAPTERS)
  // =========================================================================
  // Physical Chemistry (8 Chapters)
  moleConceptChapter,
  atomicStructureChapter,
  chemicalThermodynamicsChapter,
  chemicalEquilibriumChapter,
  solutionsChapter,
  electrochemistryChapter,
  chemicalKineticsChapter,
  redoxReactionsChapter,

  // Inorganic Chemistry (5 Chapters)
  classificationPeriodicityChapter,
  chemicalBondingChapter,
  pBlockChapter,
  dAndFBlockChapter,
  coordinationCompoundsChapter,

  // Organic Chemistry (8 Chapters)
  gocChapter,
  hydrocarbonsChapter,
  haloalkanesHaloarenesChapter,
  alcoholsPhenolsEthersChapter,
  aldehydesKetonesChapter,
  carboxylicAcidsDerivativesChapter,
  aminesChapter,
  biomoleculesChapter,

  // =========================================================================
  // MATHEMATICS — CLASS 11 (11 EXHAUSTIVE CHAPTERS)
  // =========================================================================
  setsRelationsFunctionsClass11Chapter,
  trigonometricFunctionsChapter,
  complexNumbersChapter,
  quadraticEquationsChapter,
  permutationsCombinationsChapter,
  binomialTheoremChapter,
  sequencesSeriesChapter,
  straightLinesChapter,
  circlesChapter,
  conicSectionsChapter,
  statisticsChapter,

  // =========================================================================
  // MATHEMATICS — CLASS 12 (14 EXHAUSTIVE CHAPTERS)
  // =========================================================================
  relationsFunctionsClass12Chapter,
  inverseTrigFunctionsChapter,
  matricesChapter,
  determinantsLinearEquationsChapter,
  limitsContinuityDifferentiabilityChapter,
  differentiationChapter,
  applicationOfDerivativesChapter,
  indefiniteIntegrationChapter,
  definiteIntegralsChapter,
  areaUnderCurvesChapter,
  differentialEquationsChapter,
  vectorAlgebraChapter,
  threeDimensionalGeometryChapter,
  probabilityChapter
];

export function getChapterById(id: string): Chapter | undefined {
  return JEE_CURRICULUM.find(c => c.id === id);
}

export function getChaptersBySubject(subject: Subject): Chapter[] {
  return JEE_CURRICULUM.filter(c => c.subject === subject);
}

export function getChaptersByClass(classLevel: 11 | 12): Chapter[] {
  return JEE_CURRICULUM.filter(c => c.classLevel === classLevel);
}

export function getRationalizedCurriculum(): Chapter[] {
  return JEE_CURRICULUM.filter(c => c.isRationalizedJEE2027);
}
