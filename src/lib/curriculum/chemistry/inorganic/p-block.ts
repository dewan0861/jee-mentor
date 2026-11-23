import { Chapter } from '@/types';

export const pBlockChapter: Chapter = {
  id: 'chem-c11-c12-p-block',
  subject: 'chemistry',
  classLevel: 12,
  name: 'The p-Block Elements (Groups 13 to 18)',
  unit: 'Inorganic Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Inert Pair Effect}: \\text{Reluctance of } ns^2 \\text{ valence electrons to ionize/hybridize due to poor shielding of } 4f^{14}/5d^{10}',
    '\\text{Group 13 Stability}: +3 \\text{ state: } \\text{B} > \\text{Al} > \\text{Ga} > \\text{In} > \\text{Tl}; \\quad +1 \\text{ state: } \\text{Tl} > \\text{In} > \\text{Ga} > \\text{Al}',
    '\\text{Group 14 Stability}: +4 \\text{ state: } \\text{C} > \\text{Si} > \\text{Ge} > \\text{Sn} > \\text{Pb}; \\quad +2 \\text{ state: } \\text{Pb} > \\text{Sn} > \\text{Ge}',
    '\\text{Lewis Acidity of Boron Halides}: \\text{BI}_3 > \\text{BBr}_3 > \\text{BCl}_3 > \\text{BF}_3 \\quad (2p-2p \\; \\pi \\text{ back-bonding in } \\text{BF}_3 \\text{ relieves electron deficiency})',
    '\\text{Diborane Bonding}: \\text{B}_2\\text{H}_6 \\text{ has two 3-center 2-electron (3c-2e) } \\text{B}-\\text{H}-\\text{B} \\text{ banana bonds and four 2c-2e terminal bonds}',
    '\\text{Reducing Power of P-Oxoacids}: \\text{Number of P}-\\text{H bonds}: \\text{H}_3\\text{PO}_2 \\text{ (2 P-H, strongest)} > \\text{H}_3\\text{PO}_3 \\text{ (1 P-H)} > \\text{H}_3\\text{PO}_4 \\text{ (0 P-H)}',
    '\\text{Halogen Bond Dissociation Enthalpy}: \\text{Cl}_2 > \\text{Br}_2 > \\text{F}_2 > \\text{I}_2 \\quad (\\text{lone pair repulsion weakens } \\text{F}-\\text{F} \\text{ bond})',
    '\\text{Acidic Strength of Hydracids}: \\text{HF} < \\text{HCl} < \\text{HBr} < \\text{HI} \\quad (\\text{governed by decreasing } \\text{H}-\\text{X} \\text{ bond dissociation energy})',
    '\\text{Acidic Strength of Chlorine Oxoacids}: \\text{HClO} < \\text{HClO}_2 < \\text{HClO}_3 < \\text{HClO}_4 \\quad (\\text{higher oxidation state and resonance stabilization of anion})'
  ],
  topics: [
    {
      id: 'chem-pblk-1-general-trends-inert-pair',
      name: '12.4.1 General Trends, Inert Pair Effect & Anomalous First Member',
      description: 'Valence shell electron configuration ns2 np1-6; oxidation state range from group number to (group number - 8); Inert Pair Effect in heavier elements (Tl, Pb, Bi): valence ns2 pair resists unpairing due to relativistic contraction and poor screening of intervening d10 and f14 subshells; anomalous behavior of 2nd period elements (B, C, N, O, F) owing to small size, high EN, and complete absence of vacant d-orbitals limiting maximum covalency to 4 (e.g. BF4- exists but BF6^3- cannot; NCl5 does not exist while PCl5 does).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-pblk-2-group-13-boron',
      name: '12.4.2 Group 13 Elements (Boron Family)',
      description: 'Oxidation states (+3 and +1); Tl+ stability (inert pair effect); Lewis acid behavior of trivalent halides and anomalous order BI3 > BBr3 > BCl3 > BF3 explained by p(pi)-p(pi) back-bonding; Diborane B2H6: synthesis, structure (two 3-center 2-electron B-H-B banana bonds, four terminal 2-center 2-electron bonds), reaction with ammonia (inorganic benzene / borazine B3N3H6); Borax bead test; Orthoboric acid H3BO3 as a weak monobasic Lewis acid (accepts OH- from water: B(OH)3 + 2 H2O <=> [B(OH)4]- + H3O+).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-pblk-3-group-14-carbon',
      name: '12.4.3 Group 14 Elements (Carbon Family)',
      description: 'Oxidation states (+4 and +2); Pb(IV) acting as powerful oxidizing agent (PbO2) and Sn(II) as reducing agent (SnCl2); Catenation tendency (C >> Si > Ge ≈ Sn) driven by C-C single bond strength; Allotropes of Carbon: Diamond (sp3, 3D tetrahedral network, hardest natural substance, electrical insulator), Graphite (sp2, hexagonal layered lattice with delocalized pi electrons, anisotropic electrical conductor, lubricant), Fullerenes (C60 buckminsterfullerene, soccer ball structure with 20 six-membered and 12 five-membered rings); Silicates and silicones overview.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-pblk-4-group-15-nitrogen-phosphorus',
      name: '12.4.4 Group 15 Elements (Nitrogen Family)',
      description: 'Dinitrogen N2 (inertness due to triple bond N≡N, bond energy 941 kJ/mol); Ammonia NH3 (Haber process, basicity, complexation); Oxides of nitrogen (N2O, NO, N2O3, NO2, N2O4, N2O5 oxidation states and magnetic properties); Nitric acid HNO3 (Ostwald process, oxidizing action on Cu and Zn in dilute vs concentrated acid); Allotropes of phosphorus: White phosphorus (P4 tetrahedral, angle strain 60°, highly reactive, glows in dark/chemiluminescence, poisonous, soluble in CS2) vs Red phosphorus (polymeric chain, non-poisonous, insoluble in CS2); Oxoacids of phosphorus: H3PO2 (monobasic, strong reducing agent), H3PO3 (dibasic, reducing), H3PO4 (tribasic, non-reducing); disproportionation of H3PO3 on heating to H3PO4 and PH3.',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-pblk-5-group-16-oxygen-sulfur',
      name: '12.4.5 Group 16 Elements (Chalcogens)',
      description: 'Anomalous properties of oxygen; Allotropes of sulfur: Rhombic (alpha, yellow, S8 puckered crown ring, stable below 369 K) and Monoclinic (beta, needle-like, stable above 369 K; transition temperature 369 K where both allotropes coexist); paramagnetism of S2 vapor at 1000 K (two unpaired electrons in pi* MOs similar to O2); Oxoacids of sulfur: Sulfurous acid H2SO3, Sulfuric acid H2SO4 (Contact process, dehydrating agent), Peroxomonosulfuric acid H2SO5 (Caro’s acid), Peroxodisulfuric acid H2S2O8 (Marshall’s acid), Pyrosulfuric acid H2S2O7 (Oleum).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-pblk-6-group-17-halogens',
      name: '12.4.6 Group 17 Elements (Halogens)',
      description: 'Oxidizing power trend F2 > Cl2 > Br2 > I2; Bond dissociation enthalpy anomaly: Cl2 (242.6 kJ/mol) > Br2 (192.8) > F2 (158.8) > I2 (151.1) caused by intense lone pair-lone pair repulsion across the short F-F bond; Hydracids: HF < HCl < HBr < HI acidity order and reducing power; Oxoacids of chlorine: HClO, HClO2, HClO3, HClO4 (acidity and oxidizing power trends); Interhalogen compounds: XX\', XX\'3, XX\'5, XX\'7 (e.g. ClF3 T-shaped, IF5 square pyramidal, IF7 pentagonal bipyramidal; interhalogens are more reactive than parent halogens except F2 due to weaker X-X\' polar bonds).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-pblk-7-group-18-noble-gases',
      name: '12.4.7 Group 18 Elements (Noble Gases)',
      description: 'Inertness due to stable ns2 np6 octet; Neil Bartlett’s discovery of first noble gas compound XePtF6 based on comparable first ionization enthalpy of O2 (1175 kJ/mol) and Xe (1170 kJ/mol); Xenon fluorides: XeF2 (sp3d, linear, 3 equatorial lone pairs), XeF4 (sp3d2, square planar, 2 trans lone pairs), XeF6 (sp3d3, distorted octahedral, 1 lone pair); Hydrolysis of xenon fluorides: complete hydrolysis of XeF6 yields explosive solid XeO3 (sp3, trigonal pyramidal), partial hydrolysis yields XeOF4 and XeO2F2; complete hydrolysis of XeF4 produces Xe, XeO3, HF, and O2.',
      estimatedHours: 4,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Boric acid ($\\text{H}_3\\text{BO}_3$) is NOT a protic acid! It does not donate its own protons; instead, it acts as a weak Lewis acid by accepting an $\\text{OH}^-$ ion from water: $\\text{B(OH)}_3 + 2\\text{H}_2\\text{O} \\rightleftharpoons [\\text{B(OH)}_4]^- + \\text{H}_3\\text{O}^+$.',
    'White phosphorus consists of discrete $\\text{P}_4$ tetrahedral units with a bond angle of only $60^\\circ$. The resulting angular strain makes it highly reactive, causing it to catch fire spontaneously in air to form dense white fumes of $\\text{P}_4\\text{O}_{10}$.',
    'Bond dissociation enthalpy of Halogens: $\\text{Cl}_2 > \\text{Br}_2 > \\text{F}_2 > \\text{I}_2$. Fluorine is anomalously lower than $\\text{Cl}_2$ and $\\text{Br}_2$ due to intense electrostatic repulsion between non-bonding lone pairs on the compact $2p$ orbitals of closely spaced F atoms.',
    'In the vapor phase at elevated temperatures ($\sim 1000\\,\\text{K}$), sulfur exists predominantly as $\\text{S}_2$ molecules. Like $\\text{O}_2$, $\\text{S}_2$ is PARAMAGNETIC because it possesses two unpaired electrons in degenerate $\\pi^*$ antibonding molecular orbitals.',
    'Interhalogen compounds (like $\\text{ClF}_3, \\text{BrF}_5$) are more reactive than parent halogens (except $\\text{F}_2$) because the polar $X-X\'$ bond in interhalogens is weaker than the homonuclear $X-X$ bond in halogens.'
  ],
  commonTraps: [
    'Assuming Lewis acidity of boron halides follows electronegativity: Students incorrectly guess $\\text{BF}_3 > \\text{BCl}_3 > \\text{BBr}_3 > \\text{BI}_3$. The TRUE order is strictly $\\text{BI}_3 > \\text{BBr}_3 > \\text{BCl}_3 > \\text{BF}_3$ because $2p-2p$ back-bonding from F to B is maximally effective, drastically neutralizing B\'s electron deficiency.',
    'Basicity of phosphorus oxoacids: Basicity is determined ONLY by the number of ionizable $\\text{P}-\\text{OH}$ bonds, NOT total hydrogen atoms! $\\text{H}_3\\text{PO}_2$ is monobasic, $\\text{H}_3\\text{PO}_3$ is dibasic, and $\\text{H}_3\\text{PO}_4$ is tribasic.',
    'Confusing reducing character with basicity: Reducing property arises from $\\text{P}-\\text{H}$ bonds. $\\text{H}_3\\text{PO}_2$ has TWO $\\text{P}-\\text{H}$ bonds and is the strongest reducing agent among phosphorus oxoacids (reduces $\\text{AgNO}_3$ to metallic $\\text{Ag}$).',
    'Oxidation of $\\text{HCl}$ by $\\text{PbO}_2$: Since $\\text{Pb}^{4+}$ is unstable due to the inert pair effect, $\\text{PbO}_2$ acts as a strong oxidant, oxidizing $\\text{HCl}$ to $\\text{Cl}_2$: $\\text{PbO}_2 + 4\\text{HCl} \\rightarrow \\text{PbCl}_2 + \\text{Cl}_2 + 2\\text{H}_2\\text{O}$.'
  ]
};
