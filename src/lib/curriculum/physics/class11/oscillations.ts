import { Chapter } from '@/types';

export const oscillationsChapter: Chapter = {
  id: 'phy-c11-oscillations',
  subject: 'physics',
  classLevel: 11,
  name: 'Oscillations and Simple Harmonic Motion',
  unit: 'Oscillations and Waves',
  weightage: 'high',
  isRationalizedJEE2027: true,
  formulaList: [
    '\\text{SHM Equation}: \\frac{d^2x}{dt^2} + \\omega^2 x = 0, \\quad a(x) = -\\omega^2 x, \\quad \\omega = 2\\pi f = \\frac{2\\pi}{T}',
    '\\text{Kinematics}: x(t) = A\\sin(\\omega t + \\phi), \\quad v(x) = \\omega\\sqrt{A^2 - x^2}, \\quad v_{\\text{max}} = \\omega A, \\quad a_{\\text{max}} = \\omega^2 A',
    '\\text{Phase Relations}: \\Delta\\phi(x, v) = \\frac{\\pi}{2}, \\quad \\Delta\\phi(x, a) = \\pi, \\quad \\Delta\\phi(v, a) = \\frac{\\pi}{2}',
    '\\text{Energies}: K = \\frac{1}{2}m\\omega^2(A^2 - x^2), \\quad U = \\frac{1}{2}m\\omega^2 x^2, \\quad E = \\frac{1}{2}m\\omega^2 A^2 = \\text{constant}',
    '\\text{Average Energies}: \\langle K \\rangle_{\\text{time}} = \\langle U \\rangle_{\\text{time}} = \\frac{1}{4}m\\omega^2 A^2 = \\frac{E}{2}, \\quad \\text{Freq of energy oscillation} = 2f',
    '\\text{Spring-Mass}: T = 2\\pi\\sqrt{\\frac{m}{k}}, \\quad k_{\\text{cut}} \\propto \\frac{1}{L}, \\quad k_{\\text{series}} = \\frac{k_1 k_2}{k_1 + k_2}, \\quad k_{\\text{parallel}} = k_1 + k_2',
    '\\text{Two Masses on Spring}: T = 2\\pi\\sqrt{\\frac{\\mu}{k}} \\quad \\left(\\mu = \\frac{m_1 m_2}{m_1 + m_2}\\right)',
    '\\text{Simple Pendulum}: T = 2\\pi\\sqrt{\\frac{L}{g_{\\text{eff}}}}, \\quad \\text{Infinite Length}: T = 2\\pi\\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ min}',
    '\\text{Physical Pendulum}: T = 2\\pi\\sqrt{\\frac{I}{m g d}} = 2\\pi\\sqrt{\\frac{k^2 + d^2}{g d}} \\quad (T_{\\text{min}} \\text{ when } d = k)',
    '\\text{Superposition (Same } \\omega\\text{)}: A_{\\text{res}} = \\sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \\cos\\phi}',
    '\\text{Damped Amplitude}: A(t) = A_0 e^{-\\frac{b t}{2m}}, \\quad E(t) = E_0 e^{-\\frac{b t}{m}}, \\quad \\omega\' = \\sqrt{\\omega_0^2 - \\left(\\frac{b}{2m}\\right)^2}'
  ],
  topics: [
    {
      id: 'phy-osc-1-shm-kinematics-phasors',
      name: '10.1 SHM Definition, Kinematics & Phasor Representation',
      description: 'Restoring force F = -kx, differential equation, displacement, velocity, acceleration; rotating reference circle (phasor diagrams) for finding time to travel between coordinates.',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-osc-2-energy-shm',
      name: '10.2 Kinetic, Potential & Total Energy in SHM',
      description: 'Spatial and temporal variations of K and U; equal energy crossover point x = A / sqrt(2); time averages vs position averages; energy frequency doubling f_energy = 2 f_shm.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-osc-3-spring-block-systems',
      name: '10.3 Spring-Mass Oscillations & Spring Cutting',
      description: 'Effective spring constant k * L = constant; cutting springs in ratio m:n; series and parallel combinations; massive spring correction (effective mass m + m_spring/3).',
      estimatedHours: 4,
      isHighWeightage: true
    },
    {
      id: 'phy-osc-4-two-body-oscillations',
      name: '10.4 Two-Body Oscillations & Reduced Mass',
      description: 'Two free blocks connected by a spring on a frictionless surface; stationary center of mass; reduced mass mu = (m1 * m2) / (m1 + m2); oscillation period T = 2 pi sqrt(mu / k).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-osc-5-simple-pendulum-accelerating',
      name: '10.5 Simple Pendulum & Accelerated Reference Frames',
      description: 'Torque equation, small-angle approximation sin theta approx theta, effective gravity g_eff in accelerating lifts, horizontally accelerating carts (g_eff = sqrt(g^2 + a^2)), and electric fields.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-osc-6-physical-torsional-pendulum',
      name: '10.6 Physical Pendulum, Center of Oscillation & Torsional SHM',
      description: 'Compound pendulum T = 2 pi sqrt(I / (mgd)), radius of gyration, condition for minimum time period (d = k), conjugate points of suspension and oscillation; torsional pendulum.',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-osc-7-fluid-floating-shm',
      name: '10.7 Oscillations in Fluids (U-Tube & Floating Cylinders)',
      description: 'Restoring force due to Archimedes buoyancy: vertical oscillations of floating block T = 2 pi sqrt(h / g), oscillations of liquid column in U-tube T = 2 pi sqrt(L / (2g)).',
      estimatedHours: 3,
      isHighWeightage: false
    },
    {
      id: 'phy-osc-8-superposition-shm',
      name: '10.8 Superposition of Collinear and Perpendicular SHMs',
      description: 'Collinear SHMs with same frequency: vector addition of amplitudes A_res = sqrt(A1^2 + A2^2 + 2A1A2 cos phi); perpendicular SHMs leading to Lissajous figures (circle, ellipse, straight line).',
      estimatedHours: 3,
      isHighWeightage: true
    },
    {
      id: 'phy-osc-9-damped-forced-resonance',
      name: '10.9 Damped and Forced Oscillations & Resonance',
      description: 'Viscous damping force F_d = -b v, exponential amplitude decay A(t) = A0 exp(-bt / 2m), forced driving oscillator, amplitude resonance at driving frequency omega_d approx omega_0.',
      estimatedHours: 3,
      isHighWeightage: true
    }
  ],
  guide: {
    overview: 'Oscillations and SHM is a high-yield, conceptually elegant chapter that accounts for 1-2 questions in JEE Main and intricate mechanics-synthesis questions in JEE Advanced. The phasor method and reduced mass approach provide enormous competitive advantages in solving complex problems in seconds.',
    ncertPointers: [
      'In SHM, velocity LEADS displacement by a phase of $\\pi/2$ ($90^\\circ$), and acceleration LEADS displacement by $\\pi$ ($180^\\circ$). Acceleration and displacement are ALWAYS oppositely directed.',
      'The frequency of oscillation of Kinetic Energy and Potential Energy is TWICE the frequency of the SHM itself ($f_{\\text{energy}} = 2 f_{\\text{shm}}$), because energy reaches its maximum twice during one complete cycle.',
      'At position $x = \\pm \\frac{A}{\\sqrt{2}}$, Kinetic Energy equals Potential Energy ($K = U = E/2$). At $x = \\pm A/2$, $U = E/4$ and $K = \\frac{3}{4}E$.',
      'If a spring of spring constant $k$ and length $L$ is cut into two pieces of lengths $L_1$ and $L_2$ in the ratio $1 : 2$, the spring constants are $k_1 = 3k$ and $k_2 = \\frac{3}{2}k$. The SHORTER spring is STIFFER ($k L = \\text{constant}$).',
      'For a simple pendulum of extremely large length (approaching Earth\'s radius $R$): the period DOES NOT become infinite! As $L \\to \\infty$, $T = 2\\pi\\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ minutes}$.'
    ],
    commonTraps: [
      'Time to travel from 0 to $A/2$ vs $A/2$ to $A$: In SHM starting from mean position: time to go from $0$ to $A/2$ is $t_1 = T/12$, while time to go from $A/2$ to $A$ is $t_2 = T/6$ (TWICE as long!). Students often erroneously assume motion is uniform and write $T/8$.',
      'Average energy trap: Time average of Kinetic Energy over a complete cycle is $\\langle K \\rangle_t = E/2 = \\frac{1}{4} m \\omega^2 A^2$. But the POSITION average over $x \\in [-A, A]$ is $\\langle K \\rangle_x = \\frac{2}{3} E$!',
      'Two blocks on a spring: For two free masses $m_1$ and $m_2$ connected by a spring, the time period is $T = 2\\pi\\sqrt{\\frac{\\mu}{k}}$ where $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$. Never use $(m_1 + m_2)$ in the numerator!',
      'Damped oscillation energy decay rate: Energy decays twice as fast as amplitude! If amplitude decays as $e^{-\\gamma t}$, energy decays as $e^{-2\\gamma t} = e^{-\\frac{b t}{m}}$.'
    ],
    shortcutsVsConcepts: [
      'Phasor Circle Method: Project SHM onto a reference circle of radius $A$ rotating at constant angular velocity $\\omega$. Moving from $x = 0$ to $x = A/2$ corresponds to an angle rotation $\\Delta\\theta = 30^\\circ = \\pi/6$, so time is $t = \\frac{\\pi/6}{\\omega} = \\frac{T}{12}$. Moving from $A/2$ to $A$ corresponds to rotation from $30^\\circ$ to $90^\\circ$ ($\\Delta\\theta = 60^\\circ = \\pi/3$), so time is $t = \\frac{T}{6}$. Instantaneous graphical solution!',
      'Compound Pendulum Minimum Period Shortcut: $T = 2\\pi\\sqrt{\\frac{k^2 + d^2}{gd}}$. Differentiating gives minimum period when suspension distance $d = k$ (radius of gyration about COM), yielding $T_{\\text{min}} = 2\\pi\\sqrt{\\frac{2k}{g}}$.',
      'Liquid Column in U-Tube: For a liquid column of total length $L$ in a U-tube, restoring force is $-2\\rho A g x$, so $T = 2\\pi\\sqrt{\\frac{L}{2g}}$.'
    ]
  }
};
