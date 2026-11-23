import { Question } from '@/types';

export const rayOpticsQuestions: Question[] = [
  {
    id: 'phy-ro-pyq-1',
    subject: 'physics',
    topicId: 'phy-ro-5-spherical-refraction-lens-makers',
    chapterId: 'phy-c12-ray-optics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'A thin biconvex lens of glass (refractive index $\\mu_g = 1.5$) has both surfaces of radius of curvature $R = 20\\,\\text{cm}$. Its focal length in air is $f_{\\text{air}}$. When completely immersed in water (refractive index $\\mu_w = 4/3$), its new focal length $f_{\\text{water}}$ becomes:',
    options: [
      '$80\\,\\text{cm}$',
      '$40\\,\\text{cm}$',
      '$20\\,\\text{cm}$',
      '$160\\,\\text{cm}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Lens Maker's formula in air**
$$\\frac{1}{f_{\\text{air}}} = (\\mu_g - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$
For an equiconvex lens: $R_1 = +20\\,\\text{cm}$ and $R_2 = -20\\,\\text{cm}$.
$$\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) = \\frac{1}{20} - \\left(-\\frac{1}{20}\\right) = \\frac{2}{20} = \\frac{1}{10}\\,\\text{cm}^{-1}$$
With $\\mu_g = 1.5$:
$$\\frac{1}{f_{\\text{air}}} = (1.5 - 1) \\times \\frac{1}{10} = 0.5 \\times \\frac{1}{10} = \\frac{1}{20}\\,\\text{cm}^{-1} \\implies f_{\\text{air}} = 20\\,\\text{cm}$$

**Step 2: Lens Maker's formula in water**
When immersed in a medium of refractive index $\\mu_w = 4/3$:
$$\\frac{1}{f_{\\text{water}}} = \\left(\\frac{\\mu_g}{\\mu_w} - 1\\right) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$
Calculate relative refractive index:
$$\\frac{\\mu_g}{\\mu_w} = \\frac{1.5}{4/3} = \\frac{3/2}{4/3} = \\frac{9}{8}$$
Thus:
$$\\frac{\\mu_g}{\\mu_w} - 1 = \\frac{9}{8} - 1 = \\frac{1}{8}$$
Therefore:
$$\\frac{1}{f_{\\text{water}}} = \\frac{1}{8} \\times \\frac{1}{10} = \\frac{1}{80}\\,\\text{cm}^{-1} \\implies f_{\\text{water}} = 80\\,\\text{cm}$$

*(Standard shortcut: for glass in water, $f_{\\text{water}} = 4 f_{\\text{air}} = 4 \\times 20 = 80\\,\\text{cm}$.)*

Hence, the focal length in water is $80\\,\\text{cm}$.`,
    hints: [
      'In a medium, replace $(\\mu - 1)$ with $(\\mu_{\\text{lens}} / \\mu_{\\text{med}} - 1)$.',
      'For glass ($\\mu = 1.5$) immersed in water ($\\mu = 4/3$), focal length increases by a factor of 4.'
    ]
  },
  {
    id: 'phy-ro-pyq-2',
    subject: 'physics',
    topicId: 'phy-ro-6-lenses-cutting-silvering',
    chapterId: 'phy-c12-ray-optics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'A plano-convex lens made of glass ($\\mu = 1.5$) has a curved surface of radius of curvature $R = 30\\,\\text{cm}$. If its curved surface is silvered, the system behaves as a concave mirror of focal length:',
    options: [
      '$10\\,\\text{cm}$',
      '$15\\,\\text{cm}$',
      '$30\\,\\text{cm}$',
      '$7.5\\,\\text{cm}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Formula for equivalent focal length of a silvered lens**
When a lens is silvered, light refracts through the lens, reflects off the silvered surface, and refracts back out. The equivalent optical power is:
$$P_{\\text{eq}} = 2 P_L + P_M$$
Since power of an equivalent mirror is $P_{\\text{eq}} = -\\frac{1}{F}$, power of lens is $P_L = \\frac{1}{f_L}$, and power of mirror is $P_M = -\\frac{1}{f_M}$:
$$-\\frac{1}{F} = 2\\left(\\frac{1}{f_L}\\right) - \\frac{1}{f_M} \\implies \\frac{1}{F} = -\\left(\\frac{2}{f_L} + \\frac{1}{f_M}\\right)$$

**Step 2: Calculate the focal length of the plano-convex lens ($f_L$)**
$$\\frac{1}{f_L} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$
Here, light enters the plane face first ($R_1 = \\infty$) and hits the convex curved face ($R_2 = -30\\,\\text{cm}$):
$$\\frac{1}{f_L} = (1.5 - 1)\\left(0 - \\left(-\\frac{1}{30}\\right)\\right) = 0.5 \\times \\frac{1}{30} = \\frac{1}{60}\\,\\text{cm}^{-1} \\implies f_L = 60\\,\\text{cm}$$

**Step 3: Calculate the focal length of the silvered curved mirror ($f_M$)**
The silvered curved surface forms a concave mirror of radius $R = 30\\,\\text{cm}$:
$$f_M = -\\frac{R}{2} = -\\frac{30}{2} = -15\\,\\text{cm}$$

**Step 4: Calculate equivalent focal length $F$**
$$\\frac{1}{F} = \\frac{2}{f_L} - \\frac{1}{f_M} = \\frac{2}{60} - \\left(-\\frac{1}{15}\\right) = \\frac{1}{30} + \\frac{1}{15} = \\frac{3}{30} = \\frac{1}{10}\\,\\text{cm}^{-1}$$
$$F = -10\\,\\text{cm}$$
The negative sign signifies that the system behaves as a converging (concave) mirror of focal length $10\\,\\text{cm}$.`,
    hints: [
      'Equivalent power of silvered lens: $P = 2P_L + P_M$.',
      'Plano-convex lens has $f_L = R/(\\mu - 1) = 30/0.5 = 60\\,\\text{cm}$. Mirror has $f_M = R/2 = 15\\,\\text{cm}$.'
    ]
  },
  {
    id: 'phy-ro-pyq-3',
    subject: 'physics',
    topicId: 'phy-ro-4-prisms-dispersion',
    chapterId: 'phy-c12-ray-optics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2024,
    text: 'A monochromatic ray of light is incident at an angle $i$ on one face of an equilateral prism of refractive index $\\mu = \\sqrt{3}$. If the ray suffers minimum deviation, the angle of incidence $i$ and angle of minimum deviation $\\delta_m$ are:',
    options: [
      '$i = 60^\\circ, \\; \\delta_m = 60^\\circ$',
      '$i = 45^\\circ, \\; \\delta_m = 30^\\circ$',
      '$i = 60^\\circ, \\; \\delta_m = 30^\\circ$',
      '$i = 30^\\circ, \\; \\delta_m = 60^\\circ$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Prism geometry at minimum deviation**
For an equilateral prism, the prism angle is $A = 60^\\circ$.
At minimum deviation:
$$r_1 = r_2 = r = \\frac{A}{2} = \\frac{60^\\circ}{2} = 30^\\circ$$
Also, $i = e$.

**Step 2: Apply Snell\'s law at the first interface**
$$1 \\times \\sin i = \\mu \\times \\sin r$$
Given $\\mu = \\sqrt{3}$ and $r = 30^\\circ$:
$$\\sin i = \\sqrt{3} \\times \\sin 30^\\circ = \\sqrt{3} \\times \\frac{1}{2} = \\frac{\\sqrt{3}}{2}$$
$$i = 60^\\circ$$

**Step 3: Calculate minimum deviation $\\delta_m$**
$$\\delta_m = 2i - A = 2(60^\\circ) - 60^\\circ = 120^\\circ - 60^\\circ = 60^\\circ$$

Thus, $i = 60^\\circ$ and $\\delta_m = 60^\\circ$.`,
    hints: [
      'At minimum deviation in an equilateral prism ($A = 60^\\circ$), the angle of refraction is $r = A/2 = 30^\\circ$.',
      'Use Snell\'s law $\\sin i = \\mu \\sin r$ to find the incidence angle, then $\\delta_m = 2i - A$.'
    ]
  },
  {
    id: 'phy-ro-pyq-4',
    subject: 'physics',
    topicId: 'phy-ro-3-tir-optical-fibres',
    chapterId: 'phy-c12-ray-optics',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2021,
    text: 'A point light source is placed at a depth $h = \\sqrt{7}\\,\\text{m}$ below the surface of water of refractive index $\\mu = \\frac{4}{3}$. Light emerges from the water surface through a circular patch. The radius of this circular patch of light is:',
    options: [
      '$3\\,\\text{m}$',
      '$\\sqrt{7}\\,\\text{m}$',
      '$4\\,\\text{m}$',
      '$\\frac{3}{\\sqrt{7}}\\,\\text{m}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Understand the boundary condition for light emergence**
Rays of light striking the water-air interface at angles less than the critical angle $\\theta_c$ will refract into air. Rays striking at angles $\\theta \\ge \\theta_c$ undergo total internal reflection (TIR).
Therefore, the emerging rays form a circle of illuminance with radius $R$ subtended by semi-vertical angle $\\theta_c$:
$$\\tan\\theta_c = \\frac{R}{h} \\implies R = h \\tan\\theta_c$$

**Step 2: Express $\\tan\\theta_c$ in terms of refractive index $\\mu$**
From Snell\'s law for TIR:
$$\\sin\\theta_c = \\frac{1}{\\mu}$$
Constructing the right-angled triangle with opposite side $1$ and hypotenuse $\\mu$:
$$\\cos\\theta_c = \\sqrt{1 - \\sin^2\\theta_c} = \\sqrt{1 - \\frac{1}{\\mu^2}} = \\frac{\\sqrt{\\mu^2 - 1}}{\\mu}$$
Thus:
$$\\tan\\theta_c = \\frac{\\sin\\theta_c}{\\cos\\theta_c} = \\frac{1/\\mu}{\\sqrt{\\mu^2 - 1}/\\mu} = \\frac{1}{\\sqrt{\\mu^2 - 1}}$$
The radius of the circular patch is:
$$R = \\frac{h}{\\sqrt{\\mu^2 - 1}}$$

**Step 3: Substitute the given numerical values**
Given:
- $h = \\sqrt{7}\\,\\text{m}$
- $\\mu = \\frac{4}{3} \\implies \\mu^2 = \\frac{16}{9}$

$$\\mu^2 - 1 = \\frac{16}{9} - 1 = \\frac{7}{9}$$
$$\\sqrt{\\mu^2 - 1} = \\sqrt{\\frac{7}{9}} = \\frac{\\sqrt{7}}{3}$$

Now calculate $R$:
$$R = \\frac{\\sqrt{7}}{\\frac{\\sqrt{7}}{3}} = 3\\,\\text{m}$$

Hence, the radius of the circular patch is $3\\,\\text{m}$.`,
    hints: [
      'The boundary ray strikes at the critical angle $\\theta_c$ where $\\sin\\theta_c = 1/\\mu$.',
      'The radius of the circular patch is $R = \\frac{h}{\\sqrt{\\mu^2 - 1}}$.'
    ]
  },
  {
    id: 'phy-ro-pyq-5',
    subject: 'physics',
    topicId: 'phy-ro-7-optical-instruments',
    chapterId: 'phy-c12-ray-optics',
    classLevel: 12,
    difficulty: 'medium',
    examType: 'JEE Main',
    year: 2023,
    text: 'A compound microscope consists of an objective lens of focal length $f_o = 1.0\\,\\text{cm}$ and an eyepiece of focal length $f_e = 5.0\\,\\text{cm}$. An object is placed at a distance of $1.1\\,\\text{cm}$ from the objective lens. If the final virtual image is formed at the least distance of distinct vision ($D = 25\\,\\text{cm}$), the total magnifying power of the microscope is:',
    options: [
      '$60$',
      '$50$',
      '$11$',
      '$30$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Find the image distance $v_o$ formed by the objective lens**
Apply the thin lens formula for the objective:
$$\\frac{1}{v_o} - \\frac{1}{u_o} = \\frac{1}{f_o}$$
Given:
- $u_o = -1.1\\,\\text{cm}$
- $f_o = +1.0\\,\\text{cm}$

$$\\frac{1}{v_o} = \\frac{1}{f_o} + \\frac{1}{u_o} = \\frac{1}{1.0} + \\frac{1}{-1.1} = 1 - \\frac{10}{11} = \\frac{1}{11}\\,\\text{cm}^{-1}$$
$$v_o = +11\\,\\text{cm}$$

**Step 2: Linear magnification of the objective lens ($m_o$)**
$$m_o = \\left|\\frac{v_o}{u_o}\\right| = \\frac{11}{1.1} = 10$$

**Step 3: Angular magnification of the eyepiece ($m_e$) for image at near point $D$**
When the final image is formed at $D = 25\\,\\text{cm}$:
$$m_e = 1 + \\frac{D}{f_e} = 1 + \\frac{25}{5.0} = 1 + 5 = 6$$

**Step 4: Total magnification of the compound microscope ($M$)**
$$M = m_o \\times m_e = 10 \\times 6 = 60$$

Hence, the total magnifying power is $60$.`,
    hints: [
      'Magnification of a compound microscope is $M = m_o \\times m_e$.',
      'For image at distinct vision: $m_o = |v_o / u_o|$ and $m_e = 1 + D/f_e$.'
    ]
  },
  {
    id: 'phy-ro-pyq-6',
    subject: 'physics',
    topicId: 'phy-ro-5-spherical-refraction-lens-makers',
    chapterId: 'phy-c12-ray-optics',
    classLevel: 12,
    difficulty: 'hard',
    examType: 'JEE Advanced',
    year: 2023,
    text: 'A solid glass sphere of radius $R = 10\\,\\text{cm}$ and refractive index $\\mu = 1.5$ is placed in air. A small air bubble inside the sphere is located at a distance of $4\\,\\text{cm}$ from the center along a diameter. When viewed from the side nearest to the bubble, the apparent distance of the bubble from the surface of the sphere is:',
    options: [
      '$5.0\\,\\text{cm}$',
      '$6.0\\,\\text{cm}$',
      '$4.0\\,\\text{cm}$',
      '$3.0\\,\\text{cm}$'
    ],
    correctAnswer: 0,
    solution: `**Step 1: Identify coordinates and refraction interface**
- Center of sphere is $C$. Radius $R = 10\\,\\text{cm}$.
- The bubble is at distance $4\\,\\text{cm}$ from $C$.
- The viewing surface is nearest to the bubble, so the real distance of the bubble from this nearest surface pole $P$ is:
  $$u = -(10 - 4) = -6\\,\\text{cm}$$
- Measuring from pole $P$, both the bubble and the center of curvature $C$ lie in the direction opposite to that of refracted light emergence, so:
  $$u = -6\\,\\text{cm}, \\quad R_c = -10\\,\\text{cm}$$
- Light travels from glass (medium 1, $\\mu_1 = 1.5$) into air (medium 2, $\\mu_2 = 1.0$).

**Step 2: Apply refraction at spherical interface formula**
$$\\frac{\\mu_2}{v} - \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R_c}$$

Substitute the values:
$$\\frac{1.0}{v} - \\frac{1.5}{-6} = \\frac{1.0 - 1.5}{-10}$$
$$\\frac{1}{v} + \\frac{1}{4} = \\frac{-0.5}{-10} = \\frac{1}{20}$$
$$\\frac{1}{v} = \\frac{1}{20} - \\frac{1}{4} = \\frac{1 - 5}{20} = -\\frac{4}{20} = -\\frac{1}{5}\\,\\text{cm}^{-1}$$
$$v = -5.0\\,\\text{cm}$$

The negative sign indicates that the virtual image is formed inside the glass at an apparent distance of $5.0\\,\\text{cm}$ from the surface.`,
    hints: [
      'Use spherical interface formula $\\frac{\\mu_2}{v} - \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R}$.',
      'Pay careful attention to the medium of the object (glass) and the observer (air).'
    ]
  }
];
