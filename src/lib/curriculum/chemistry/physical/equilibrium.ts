import { Chapter } from '@/types';

export const chemicalEquilibriumChapter: Chapter = {
  id: 'chem-c11-equilibrium',
  subject: 'chemistry',
  classLevel: 11,
  name: 'Equilibrium: Chemical and Ionic',
  unit: 'Physical Chemistry',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{Kp vs Kc}: K_p = K_c(RT)^{\\Delta n_g}',
    '\\text{van \'t Hoff Equation}: \\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)',
    '\\text{Water Ion Product}: K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14} \\; (298\\,\\text{K}), \\quad \\text{pH} + \\text{pOH} = \\text{pK}_w',
    '\\text{Ostwald Dilution Law}: \\alpha = \\sqrt{\\frac{K_a}{C}} \\; (\\alpha \\le 0.05), \\quad [\\text{H}^+] = C\\alpha = \\sqrt{K_a C}',
    '\\text{pH of Weak Acid}: \\text{pH} = \\frac{1}{2}(\\text{pK}_a - \\log_{10} C)',
    '\\text{Salt Hydrolysis (WA + SB)}: \\text{pH} = 7 + \\frac{1}{2}\\text{pK}_a + \\frac{1}{2}\\log_{10} C, \\quad K_h = \\frac{K_w}{K_a}',
    '\\text{Salt Hydrolysis (SA + WB)}: \\text{pH} = 7 - \\frac{1}{2}\\text{pK}_b - \\frac{1}{2}\\log_{10} C, \\quad K_h = \\frac{K_w}{K_b}',
    '\\text{Salt Hydrolysis (WA + WB)}: \\text{pH} = 7 + \\frac{1}{2}\\text{pK}_a - \\frac{1}{2}\\text{pK}_b, \\quad K_h = \\frac{K_w}{K_a K_b}',
    '\\text{Henderson Buffer (Acidic)}: \\text{pH} = \\text{pK}_a + \\log_{10}\\left(\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}\\right)',
    '\\text{Henderson Buffer (Basic)}: \\text{pOH} = \\text{pK}_b + \\log_{10}\\left(\\frac{[\\text{Conjugate Acid}]}{[\\text{Base}]}\\right)',
    '\\text{Solubility Product}: A_x B_y(s) \\rightleftharpoons x A^{y+} + y B^{x-}, \\quad K_{sp} = x^x y^y s^{x+y}',
    '\\text{Precipitation Criterion}: Q_{sp} > K_{sp} \\implies \\text{Precipitate forms}'
  ],
  topics: [
    {
      id: 'chem-eq-1-chemical-kp-kc',
      name: '11.4.1 Chemical Equilibrium: Dynamic Nature, Kp & Kc',
      description: 'Dynamic reversible equilibrium; Law of Mass Action; expressions for equilibrium constants K_c and K_p; derivation of K_p = K_c (RT)^(Delta n_g); reaction quotient Q and predicting spontaneous reaction direction (Q < K forward, Q > K backward); units of K_p and K_c; degree of dissociation alpha in terms of vapor density.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-eq-2-le-chatelier-principle',
      name: '11.4.2 Le Chatelier\'s Principle & Equilibrium Shifts',
      description: 'Effect of concentration changes; temperature dependence via van \'t Hoff equation (endothermic reactions shift forward with increasing T, exothermic reactions shift backward); pressure and volume effects for reactions with Delta n_g != 0; addition of inert gas at constant volume (no shift) versus constant pressure (shifts toward larger number of moles); effect of catalyst (accelerates approach without changing K).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-eq-3-ionic-ph-water-ostwald',
      name: '11.4.3 Ionic Equilibrium: Acid-Base Theories & pH of Weak Acids/Bases',
      description: 'Arrhenius, Brønsted-Lowry, and Lewis definitions; conjugate acid-base pairs; autoionization of water, K_w = 1.0 x 10^-14 at 25 deg C (increases with T, making pure water neutral at pH < 7 at higher temperatures); pH and pOH calculations; Ostwald\'s dilution law for weak electrolytes; pH of polyprotic acids (H2SO4, H3PO4).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'chem-eq-4-salt-hydrolysis',
      name: '11.4.4 Hydrolysis of Salts & pH Calculations',
      description: 'Cationic and anionic hydrolysis; four salt categories: strong acid-strong base (neutral, no hydrolysis), weak acid-strong base (anionic hydrolysis, basic pH = 7 + 1/2 pK_a + 1/2 log C), strong acid-weak base (cationic hydrolysis, acidic pH = 7 - 1/2 pK_b - 1/2 log C), and weak acid-weak base (pH = 7 + 1/2 pK_a - 1/2 pK_b, concentration independent).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-eq-5-buffer-solutions',
      name: '11.4.5 Buffer Solutions & Henderson-Hasselbalch Equation',
      description: 'Mechanism of buffer action resisting pH change; acidic buffers (e.g. CH3COOH + CH3COONa) and Henderson equation pH = pK_a + log([Salt]/[Acid]); basic buffers (e.g. NH4OH + NH4Cl) and pOH = pK_b + log([Salt]/[Base]); buffer range (pK_a +/- 1); buffer capacity and conditions for maximum buffer capacity ([Salt] = [Acid]).',
      estimatedHours: 5,
      isHighWeightage: true
    },
    {
      id: 'chem-eq-6-solubility-ksp-precipitation',
      name: '11.4.6 Solubility Product (Ksp), Common Ion Effect & Precipitation',
      description: 'Equilibrium in saturated solutions of sparingly soluble salts; relationship between molar solubility s and K_sp for different salt stoichiometries (AB: s^2, AB2: 4s^3, A2B3: 108s^5); suppression of solubility by common ion; precipitation criterion (ionic product Q_sp > K_sp); fractional and selective precipitation in qualitative inorganic analysis (e.g. Group II vs Group IV sulfides).',
      estimatedHours: 5,
      isHighWeightage: true
    }
  ],
  ncertPointers: [
    'Pure water is strictly NEUTRAL at all temperatures because [H+] = [OH-], even though K_w increases with temperature (e.g. at 60 deg C, K_w = 10^-13, so neutral pH = 6.5, NOT 7.0!).',
    'Adding an inert gas to an equilibrium mixture at CONSTANT VOLUME produces ZERO shift because partial pressures of the reacting gases remain unchanged.',
    'For a salt of weak acid and weak base (e.g. Ammonium Acetate), the pH of the solution is: pH = 7 + (1/2) pK_a - (1/2) pK_b, which is completely independent of the concentration of the salt.',
    'In Henderson-Hasselbalch buffer calculations, the ratio [Conjugate Base]/[Acid] can be taken directly as the ratio of MOLES (or millimoles) because the volume of the solution is common to both.',
    'Common ion effect decreases the solubility of a sparingly soluble salt, but the numerical value of the solubility product K_sp remains strictly CONSTANT at a given temperature.'
  ],
  commonTraps: [
    'Calculating pH of extremely dilute strong acid ($10^{-8}\\text{ M HCl}$) as 8: An acid solution CAN NEVER have a basic pH! At concentrations $< 10^{-6}\\text{ M}$, you MUST add autoionization of water ($10^{-7}\\text{ M}$), yielding $\\text{pH} \\approx 6.96$.',
    'Applying Ostwald\'s dilution law when $\\alpha > 0.05$ (5%): If $\\alpha > 0.05$, you CANNOT approximate $(1 - \\alpha) \\approx 1$. You must solve the exact quadratic equation $K_a = \\frac{C\\alpha^2}{1 - \\alpha}$.',
    'Confusing $K_p$ and $K_c$ units: $\\Delta n_g$ counts ONLY gases! For $\\text{NH}_4\\text{HS}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{H}_2\\text{S}(g)$, $\\Delta n_g = 2 - 0 = 2$. Do NOT count solid $\\text{NH}_4\\text{HS}$.',
    'Writing Henderson equation upside down: $\\text{pH} = \\text{pK}_a + \\log\\frac{[\\text{Salt}]}{[\\text{Acid}]}$. If acid concentration exceeds salt, $\\text{pH} < \\text{pK}_a$.',
    'Inverting the solubility product exponent: For an $A_2 B_3$ salt, $K_{sp} = [2s]^2 [3s]^3 = 4s^2 \\cdot 27s^3 = 108 s^5$. Do NOT write $108 s^6$ or $6s^5$.'
  ]
};
