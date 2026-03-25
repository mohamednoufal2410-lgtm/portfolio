export const personal = {
  name: 'Mohamed Noufal',
  role: 'Product Designer',
  greeting: 'Hello, great to have you here',
  headline: "I'm a Product Designer crafting intuitive digital experiences",
  subtext:
    'I blend user research, interaction design, and visual storytelling to build products people love. Currently open to new opportunities.',
  email: 'mohamednoufal.design@gmail.com',
  resumeUrl: '/images/projects/Mohamed Noufal - UI UX Designer - Updated.pdf',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-noufal-k-b2063b1b4/', icon: 'linkedin' },
    { label: 'Behance', url: 'https://www.behance.net/mnoufal', icon: 'behance' },
  ],
};

export const marqueeItems = [
  'User-Centric',
  'Product Design',
  'Design Thinking',
  'Prototyping',
  'User Research',
  'Interaction Design',
  'Visual Design',
  'Usability Testing',
  'Design Systems',
  'Figma',
  'Wireframing',
  'Information Architecture',
];

export const projects = [
  {
    id: 'clonos',
    title: 'CLONOS Desktop',
    heading: 'Digitizing Asset Management Workflows for Industrial Plant Engineers',
    platform: 'Desktop',
    description:
      'A comprehensive command center for plant engineers to digitize critical asset management workflows. This platform enabled log creation and management, asset tracking with inventory linking, maintenance scheduling and work order systems.',
    image: '/images/projects/clonos.png',
    accent: '#4D5BFF',
    link: '/projects/clonos',
  },
  {
    id: 'clonos-tablet',
    title: 'CLONOS Tablet',
    heading: 'Empowering Field Workers with AR-Guided, Touch-First Data Collection',
    platform: 'Tablet',
    description:
      'Designed a tablet-first companion interface for on-the-floor operators to control and monitor robotic systems in real time.',
    image: '/images/projects/clonos Tablet.png',
    accent: '#00FF66',
    link: '/projects/clonos-tablet',
  },
  {
    id: 'clonos-digital-twin',
    title: 'CLONOS Digital Twin',
    heading: 'Optimizing Industrial Processes Through Virtual Simulation and 3D Visualization',
    platform: 'Desktop',
    description:
      'Built the design for a real-time digital twin dashboard that mirrors physical robot states for predictive maintenance and simulation.',
    image: '/images/projects/clonos Digital Twin.png',
    accent: '#F08D32',
    link: '/projects/clonos-digital-twin',
  },
  {
    id: 'vr-training-simulator',
    title: 'VR Training Simulator',
    heading: 'Improving Knowledge Retention by Immersive Safety Training',
    platform: 'VR',
    description:
      'Created an immersive VR training environment for industrial safety, bringing spatial awareness and hands-on practice to high-risk scenarios.',
    image: '/images/projects/clonos VR.png',
    accent: '#8B5CF6',
    link: '/projects/vr-training-simulator',
  },
  {
    id: 'taqumart',
    title: 'Taqumart',
    heading: 'Creating an Intuitive Shopping Flow',
    platform: 'Mobile',
    description:
      'Crafted the end-to-end e-commerce marketplace experience — from product discovery to checkout — optimized for conversion.',
    image: '/images/projects/taqumart.png',
    accent: '#00FF66',
    link: '/projects/taqumart',
    comingSoon: true,
  },
  {
    id: 'pariksha-guru-student',
    title: 'PARIKक्षा Guru Student App',
    heading: 'Designing an Intuitive Onboarding Flow for Competitive Exam Students',
    platform: 'Mobile',
    description:
      'Designed an EdTech exam preparation app focused on accessible learning experiences for students across India.',
    image: '/images/projects/pariksha-guru-student.png',
    accent: '#FF2D87',
    link: '/projects/pariksha-guru-student',
    comingSoon: true,
  },
  {
    id: 'pariksha-guru-admin',
    title: 'PARIKक्षा Guru Admin Panel',
    heading: 'Designing an End-to-End Admin Platform for Educators',
    platform: 'Web',
    description:
      'Built a comprehensive admin dashboard for educators to create, manage, and analyze exam content and student performance.',
    image: '/images/projects/pariksha-guru-admin.png',
    accent: '#4D5BFF',
    link: '/projects/pariksha-guru-admin',
    comingSoon: true,
  },
];

export const skills = [
  {
    name: 'Design Systems',
    description: 'Comprehensive frameworks that I create to streamline & standardize the design process.',
    image: '/images/projects/Design System.png',
  },
  {
    name: 'User Research',
    description: 'Understanding user needs and behaviours to inform and improve design decisions.',
    image: '/images/projects/User research.png',
  },
  {
    name: 'Visual Design',
    description: 'Crafting engaging interfaces that enhance user experience and product growth.',
    image: '/images/projects/Visual Design.png',
  },
  {
    name: 'Interaction Design',
    description: 'Designing intuitive flows and micro-interactions that delight users.',
    image: '/images/projects/Interaction Design.png',
  },
];

export const experience = [
  {
    company: 'Crion Technologies',
    role: 'Junior UI UX Designer cum Product Designer',
    period: 'Aug 2023 – Mar 2026',
    location: 'IIT-M Research Park, Chennai',
    projectIds: ['clonos', 'clonos-tablet', 'clonos-digital-twin', 'vr-training-simulator'],
  },
  {
    company: 'Taqumart',
    role: 'UI / UX Designer',
    period: 'Feb 2025 – Feb 2025',
    location: 'Remote',
    projectIds: ['taqumart'],
  },
  {
    company: 'PARIKक्षा Guru',
    role: 'UI / UX Designer',
    period: 'Mar 2025 – Apr 2025',
    location: 'Remote',
    projectIds: ['pariksha-guru-student', 'pariksha-guru-admin'],
  },
];

export const testimonials = [
  {
    quote:
      "Noufal has an extraordinary ability to translate complex requirements into elegant, user-friendly designs. He's the designer every PM dreams of working with.",
    author: 'Mohamed Thariff',
    title: 'Project Manager, Crion Technologies',
  },
  {
    quote:
      "What stood out was how quickly he got the context. We didn't have to explain the problem twice — he'd already spotted things we hadn't even noticed.",
    author: 'Raja Kumar',
    title: 'Pariksha Guru',
  },
  {
    quote:
      "He takes feedback really well and never loses sight of the user. Every revision felt like a step forward, not just a change.",
    author: 'Vishnuvaradhan',
    title: 'Crion Technologies',
  },
];
