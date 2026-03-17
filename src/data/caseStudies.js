export const caseStudies = {
  clonos: {
    title: 'CLONOS Desktop Platform',
    headline: 'Reducing Unplanned Downtime by 68% Through Intelligent Asset Management',
    heroImage: '/images/projects/clonos.png',
    meta: {
      role: 'UI/UX Designer',
      duration: '8 months',
      platform: 'Desktop Web Application',
      team: 'Cross-functional: Engineering, Product, Business',
      tools: ['Figma', 'Miro'],
    },
    overview:
      'I led the design of a comprehensive desktop platform that digitized critical workflows for plant engineers, transforming paper-based processes into a streamlined digital system that improved asset reliability and optimized maintenance operations.',
    background:
      'CLONOS is an Enterprise Asset Management company delivering IoT-driven predictive maintenance and real-time monitoring solutions. The desktop platform serves as the command center for plant engineers, enabling them to manage assets, schedule maintenance, and optimize processes using predictive analytics.',
    problemIntro:
      'Engineers at industrial plants were struggling with inefficient paper-based systems for managing critical asset maintenance. This created several problems:',
    painPoints: [
      {
        title: 'Manual Data Collection',
        description:
          'Paper logs were time-consuming and error-prone. Engineers received paper logs from operators and had to manually transcribe data into spreadsheets with no real-time visibility.',
      },
      {
        title: 'Lack of Accountability',
        description:
          "No way to verify if tasks were completed on time. Operators could backdate entries, and there were missing or incomplete log submissions.",
      },
      {
        title: 'Reactive Maintenance Culture',
        description:
          'Maintenance happened after equipment failed. No predictive capabilities led to costly emergency repairs and production losses.',
      },
      {
        title: 'Data Silos',
        description:
          'Information scattered across paper records, spreadsheets, and emails. Difficult to get complete asset history or identify trends. Audit preparation was a nightmare.',
      },
    ],
    goals: [
      'Digitize log creation and submission processes',
      'Implement verification systems for task completion',
      'Create asset management tools with inventory tracking',
      'Develop maintenance scheduling capabilities',
      'Enable data-driven reliability predictions',
      'Design process optimization tooling',
    ],
    responsibilities: [
      'User Research',
      'Information Architecture',
      'Wireframing & Prototyping',
      'Visual Design',
      'Design System',
      'Usability Testing',
      'Developer Collaboration',
    ],
    research: {
      interviews: {
        count: 12,
        description:
          'Conducted in-depth sessions with 12 plant engineers across different facilities to understand their workflows, pain points, and information needs.',
        keyQuestions: [
          'How do you currently manage maintenance logs?',
          'What challenges do you face with paper-based systems?',
          'How do you plan and schedule maintenance activities?',
          'What information do you need for decision-making?',
        ],
      },
      contextualInquiry: {
        description:
          'Shadowed engineers in their actual work environment to observe real workflows and identify inefficiencies.',
        observations: [
          'Engineers spent 3-4 hours daily compiling paper reports',
          'No way to verify if field operators completed tasks on time',
          'Difficulty retrieving historical data for analysis',
          'Manual processes delayed critical maintenance decisions',
        ],
      },
      marketAnalysis: {
        description: 'Evaluated existing asset management solutions to identify gaps and opportunities.',
        findings: [
          'Most solutions were either too complex or too simplified',
          'Poor integration between different modules',
          'Limited predictive capabilities',
          'Weak data visualization',
        ],
      },
    },
    personas: [
      {
        title: 'Manager (Plant Head)',
        image: '/images/projects/Manager image.png',
        traits: [
          'Senior leadership role',
          'Travels frequently between sites',
          'Needs critical alerts immediately',
          'Makes quick decisions from trends',
        ],
      },
      {
        title: 'Engineer (Asset Manager)',
        image: '/images/projects/Engineer Image.png',
        traits: [
          'Plans maintenance schedules',
          'Analyzes equipment performance data',
          'Manages work orders and inventory',
          'Needs verification of field tasks',
        ],
      },
      {
        title: 'Operator (Field Technician)',
        image: '/images/projects/Operator.png',
        traits: [
          'Performs equipment inspections',
          'Limited technical experience',
          'Works in harsh industrial conditions',
          'Prefers native language interface',
        ],
      },
    ],
    designProcess: {
      happyPaths: [
        'Creating a log and reviewing it',
        'Reusable templates',
        'Predictive maintenance',
        'Tracking parameters',
        'Creating workorders',
        'Import 3D elements into Digital twin',
      ],
      iaImage: '/images/projects/MAMS System.png',
      ia: [
        'Dashboard — Overview (KPIs, alerts, recent activities)',
        'Logs — Create, Assigned, Submitted, Templates',
        'Assets — List, Details, Hierarchy, Inventory',
        'Maintenance — Work Orders, Scheduled, Emergency, History',
        'Analytics — Reliability, Process Optimization, Reports',
        'Settings — Users, Templates, Notifications',
      ],
      ideation: [
        { title: 'Whiteboard Session 1', caption: 'Early sketching — mapping the log entry structure and field relationships', image: '/images/projects/Whiteboard Logs 1.jpg' },
        { title: 'Whiteboard Session 2', caption: 'Exploring submission states, engineer review flow, and escalation paths', image: '/images/projects/Whiteboard Logs 2.jpg' },
        { title: 'Whiteboard Session 3', caption: 'Refining the task assignment loop and operator acknowledgement model', image: '/images/projects/Whiteboard Logs 3.jpg' },
      ],
      userFlows: [
        {
          title: 'Work Order Flow',
          caption: 'How a maintenance work order is created, assigned to a technician, and closed',
          image: '/images/projects/Clonos - work order flow.png',
        },
        {
          title: 'Log Creation Flow',
          caption: 'End-to-end journey — operator submits a log, engineer reviews, and the record is filed',
          image: '/images/projects/Clonos Log Complete flow.png',
        },
      ],
    },
    features: [
      {
        title: 'Digital Log Management System',
        problem: 'Engineers had no visibility into whether operators were completing log entries accurately or on time.',
        solution: 'Created a comprehensive digital log system with automated timestamping and real-time tracking.',
        impact: 'Eliminated manual transcription errors. Reduced log processing time by 75%.',
        image: '/images/projects/Logs Gif.gif',
      },
      {
        title: 'Predictive Maintenance Scheduling',
        problem: 'Maintenance was reactive, happening after equipment failed. This led to costly emergency repairs.',
        solution: 'Designed an intelligent scheduling system using historical data and patterns to predict maintenance needs.',
        impact: 'Shifted from 80% reactive to 70% predictive. Reduced unplanned downtime by 68%.',
        image: '/images/projects/Schedule Maintenance Gif.gif',
      },
      {
        title: 'Reliability Analytics & Optimization',
        problem: 'Engineers lacked tools to analyze asset performance trends. Data existed but wasn\'t actionable.',
        solution: 'Created comprehensive analytics dashboards that transformed raw data into meaningful insights.',
        impact: 'Data-driven decision making. Reduced maintenance costs by 40%.',
        image: '/images/projects/Asset parameter compare Gif.gif',
      },
      {
        title: 'Template Library System',
        problem: 'Creating logs, work orders, and procedures from scratch was time-consuming and led to inconsistencies.',
        solution: 'Built a comprehensive template system for all common tasks and procedures.',
        impact: '60% faster log and work order creation. Standardized processes across facilities.',
        image: '/images/projects/Task Library Gif.gif',
      },
    ],
    results: {
      adoption: [
        { value: '68%', label: 'Reduction in unplanned downtime' },
        { value: '40%', label: 'Decrease in maintenance costs' },
        { value: '75%', label: 'Reduction in log processing time' },
        { value: '85%', label: 'Of engineers actively using platform' },
        { value: '100%', label: 'Reduction in paper-based processes' },
        { value: '3×', label: 'Faster audit preparation turnaround' },
      ],
    },
    testimonials: [
      {
        quote:
          'This platform has fundamentally changed how we approach asset management. Tasks that previously consumed hours are now completed in minutes, and the predictive maintenance capabilities have allowed us to intervene before failures occur — something we simply could not do before.',
        author: 'Senior Engineer',
        company: 'ONGC',
      },
      {
        quote:
          'For the first time, I have full visibility into whether operators are submitting logs on time and with complete data. The system prevents entries from being backdated or submitted after the designated log window — that level of accountability was missing entirely with our previous process.',
        author: 'Engineer',
        company: 'Kaleesuwari Refinery Private Limited',
      },
      {
        quote:
          'The analytics dashboard surfaces optimization opportunities that would have gone unnoticed under our old paper-based system. Having reliable, real-time data at this level has meaningfully changed how we make maintenance decisions.',
        author: 'Manager',
        company: 'Kaleesuwari Refinery Private Limited',
      },
    ],
    learnings: {
      worked: [
        { title: 'User-Centered Approach', description: 'Starting with extensive user research ensured we solved real problems. Engineers felt heard and were invested in the solution\'s success.' },
        { title: 'Iterative Design Process', description: 'Multiple rounds of testing and refinement led to a more polished product. Early user feedback prevented costly development mistakes.' },
        { title: 'Template System', description: 'The template library was unexpectedly popular. Engineers loved the time savings and consistency it provided.' },
        { title: 'Visual Hierarchy', description: 'Clear information architecture made complex data accessible. Engineers could find what they needed quickly.' },
      ],
      challenges: [
        { title: 'Change Management', description: 'Some engineers were resistant to moving away from paper. Addressed through hands-on training and demonstrating quick wins.' },
        { title: 'Technical Integration', description: 'Integrating with existing plant systems (DCS) was complex. Close collaboration with IT teams was crucial.' },
        { title: 'Performance Optimization', description: 'Initial designs were too data-heavy. Optimized by implementing lazy loading and better caching strategies.' },
      ],
      differently: [
        'Earlier developer involvement to identify technical constraints sooner',
        'Testing with a wider range of facility types to uncover edge cases',
        'A more structured onboarding experience to accelerate adoption',
      ],
    },
    ecosystem: {
      description: 'This desktop platform was part of a larger asset management ecosystem:',
      platforms: [
        { title: 'Tablet App', description: 'For field operators to complete logs', link: '/projects/clonos-tablet' },
        { title: 'Digital Twin', description: 'For process simulation and optimization', link: '/projects/clonos-digital-twin' },
        { title: 'VR Training', description: 'For operator education and safety', link: '/projects/vr-training-simulator' },
      ],
    },
    navigation: {
      prev: { title: 'VR Training Simulator', link: '/projects/vr-training-simulator' },
      next: { title: 'CLONOS Tablet', link: '/projects/clonos-tablet' },
    },
  },

  'clonos-tablet': {
    title: 'CLONOS Tablet Platform',
    headline: 'Empowering Field Workers with Multilingual, Touch-First Data Collection',
    heroImage: '/images/projects/clonos Tablet.png',
    meta: {
      role: 'Product Designer / UI/UX Designer',
      duration: '6 months',
      platform: 'Tablet (Android / iOS)',
      team: 'Cross-functional: Field Operators, Engineering, Developers, Training',
      tools: ['Figma', 'Maze'],
    },
    overview:
      'Designed a tablet-based platform for field operators and maintenance personnel to complete assigned tasks, submit logs, and update maintenance records directly from industrial environments.',
    background:
      'Part of the CLONOS Enterprise Asset Management ecosystem that transformed paper-based field operations into streamlined digital workflows, eliminating manual processes and improving data accuracy across facilities.',
    problemIntro:
      'Field operators struggled with inefficient paper-based systems that created barriers to effective maintenance execution and data accuracy.',
    painPoints: [
      {
        title: 'Technical Barriers',
        description: 'Many field workers had limited experience with digital tools, making adoption of new systems challenging without proper interface simplification.',
      },
      {
        title: 'Language Barriers',
        description: 'A diverse workforce with varying language proficiency needed multilingual support to reduce comprehension errors and improve confidence.',
      },
      {
        title: 'Environmental Constraints',
        description: 'Tablets needed to be usable under bright sunlight, with dirty or gloved hands, in noisy environments — conditions standard interfaces fail to address.',
      },
      {
        title: 'Accountability Issues',
        description: 'Manual paper processes made it impossible to verify task completion timestamps or data accuracy, leading to incomplete and unreliable records.',
      },
    ],
    goals: [
      'Create an intuitive interface accessible to users with limited technical experience',
      'Support multiple languages for a diverse industrial workforce',
      'Design for challenging environments with glare, moisture, and gloved operation',
      'Enable efficient task completion with minimal text input required',
      'Provide clear feedback on task status and completion',
      'Maintain visual consistency with the desktop platform while reducing complexity',
    ],
    responsibilities: [
      'User Research',
      'Field Observation',
      'Interaction Design',
      'Visual Design',
      'Accessibility Design',
      'Usability Testing',
      'Developer Collaboration',
    ],
    research: {
      interviews: {
        count: 15,
        description:
          'Conducted interviews with operators of varying experience levels to understand daily workflows, technical comfort, and language preferences across facilities.',
        keyQuestions: [
          'How do you currently complete and record maintenance tasks?',
          'What challenges do you face with paper-based processes?',
          'How comfortable are you with digital tools and tablets?',
          'What language do you prefer for work instructions?',
        ],
      },
      contextualInquiry: {
        description:
          'Shadowed field operators during their daily rounds to observe real working conditions and identify environmental constraints that lab testing would miss.',
        observations: [
          'Operators preferred to complete full rounds before recording data — batch entry mode was needed',
          'Many relied on visual and tactile cues rather than reading instructions',
          'Noise and lighting conditions significantly impacted interface legibility',
          'Language support dramatically affected operator confidence and submission accuracy',
        ],
      },
      marketAnalysis: {
        description: 'Evaluated existing field data collection tools and their limitations in industrial environments.',
        findings: [
          'Most tools were not designed for harsh outdoor industrial conditions',
          'Limited multilingual support in competing field applications',
          'Touch targets too small for gloved operation in existing solutions',
          'Simplified interactions consistently outperformed feature-rich interfaces for this user group',
        ],
      },
    },
    personas: [
      {
        title: 'Experienced Operator',
        image: '/images/projects/tablet-persona-operator.png',
        traits: [
          '15+ years of field experience',
          'Minimal digital tool usage',
          'Completes full rounds before documenting',
          'Relies on muscle memory',
        ],
      },
      {
        title: 'Multilingual Junior Operator',
        image: '/images/projects/tablet-persona-junior.png',
        traits: [
          '2–3 years of experience',
          'Non-native language speaker',
          'Seeks visual confirmation of actions',
          'Frequently checks with colleagues',
        ],
      },
      {
        title: 'Maintenance Technician',
        image: '/images/projects/tablet-persona-technician.png',
        traits: [
          'Technical background',
          'Works across multiple areas',
          'Documents issues with photos',
          'Operates under time pressure',
        ],
      },
    ],
    designProcess: {
      ia: [
        'Home — Assigned Tasks, Pending Logs, Notifications',
        'Logs — Create, Assigned, Submitted, Templates',
        'Work Orders — Active, Completed, Step-by-step Guidance',
        'Help — Language Toggle, Tooltips, Reference Materials',
        'Profile — Language Preference, Settings',
      ],
      userFlows: [
        {
          title: 'Log Submission Flow',
          caption: 'Step-by-step: how a field operator completes and submits a log from the plant floor',
          image: '/images/projects/tablet-log-flow.png',
        },
        {
          title: 'AR Tab Flow',
          caption: 'Tab navigation and AR-assisted data entry across the tablet interface',
          image: '/images/projects/AR Tab flow.png',
        },
      ],
    },
    features: [
      {
        title: 'Simplified Log Entry',
        problem: 'Paper logs were time-consuming, error-prone, and required manual transcription after operators completed their rounds.',
        solution: 'Streamlined digital forms with minimal typing, pre-populated fields based on context, visual guidance for numerical ranges, and inline validation.',
        impact: 'Reduced log completion time by 40%, eliminated transcription errors, and significantly improved data accuracy.',
        image: '/images/projects/tablet-log-entry.png',
      },
      {
        title: 'Multilingual Support',
        problem: 'Language barriers created comprehension issues and reduced confidence among the diverse workforce.',
        solution: 'Native language toggle in main navigation with a fully translated interface, consistent terminology across all languages, and regional number formatting.',
        impact: 'Increased adoption among non-native speakers, reduced errors from misunderstood instructions, improved workforce inclusion.',
        image: '/images/projects/tablet-multilingual.png',
      },
      {
        title: 'Contextual Help System',
        problem: 'Varying technical experience meant users needed different levels of guidance without disrupting their active workflow.',
        solution: 'Toggleable sidebar tooltips, visual walkthroughs for complex tasks, context-sensitive help based on the current screen, and quick access to reference materials.',
        impact: 'Reduced training time, increased user confidence, and enabled self-service problem solving in the field.',
        image: '/images/projects/tablet-help-system.png',
      },
      {
        title: 'Work Order Management',
        problem: 'Operators had delayed awareness of assigned tasks and unclear step-by-step guidance, leading to inefficient and inconsistent execution.',
        solution: 'Clear visualisation of assigned tasks, step-by-step procedure guidance, visual confirmation of completed steps, and simplified photo documentation.',
        impact: 'Improved task completion efficiency, ensured consistent procedure execution, and enhanced documentation quality.',
        image: '/images/projects/tablet-work-orders.png',
      },
      {
        title: 'High-Contrast Industrial Design',
        problem: 'Outdoor lighting conditions and dirty screens made standard interfaces nearly unreadable in real field conditions.',
        solution: 'Large touch targets designed for gloved operation, a high-contrast colour palette, typography optimised for outdoor readability, and minimal reliance on audio feedback.',
        impact: 'Maintained full usability in challenging environments, reduced interaction errors, and supported gloved operation without friction.',
        image: '/images/projects/tablet-high-contrast.png',
      },
    ],
    results: {
      adoption: [
        { value: '40%', label: 'Reduction in task completion time' },
        { value: '100%', label: 'Elimination of manual transcription errors' },
        { value: '3×', label: 'Increase in multilingual user adoption' },
        { value: '100%', label: 'Timestamped verification on all submissions' },
        { value: '60%', label: 'Reduction in onboarding and training time' },
        { value: 'Real-time', label: 'Field task visibility for engineering teams' },
      ],
    },
    testimonials: [
      {
        quote: 'The language support made a huge difference. I finally feel confident submitting logs without worrying I misunderstood something.',
        author: 'Field Operator',
        company: 'Manufacturing Facility',
      },
      {
        quote: 'What used to take half an hour on paper now takes five minutes. The pre-filled fields and simple forms are exactly what we needed.',
        author: 'Maintenance Technician',
        company: '',
      },
    ],
    learnings: {
      worked: [
        { title: 'Design for the Least Confident', description: 'Designing for the least technically confident users improved the experience for everyone — not just the struggling minority.' },
        { title: 'Native Language Support', description: 'Language support dramatically increased both adoption rates and data quality across the entire workforce.' },
        { title: 'Field Testing', description: 'Shadowing operators in actual industrial environments revealed critical requirements that lab testing would never have surfaced.' },
        { title: 'Simplicity Over Features', description: 'Simplified, focused interactions consistently proved more valuable than feature richness for this user base.' },
      ],
      challenges: [
        { title: 'Simplicity vs. Completeness', description: 'Balancing data completeness with interface simplicity for low-tech-comfort users was a persistent tension throughout the project.' },
        { title: 'Offline Reliability', description: 'Designing for offline operation with reliable synchronisation required extremely close collaboration with the engineering team.' },
        { title: 'Gloved Touch Interactions', description: 'Creating effective touch interactions that worked reliably with industrial gloves and in varied body positions required significant iteration.' },
      ],
      differently: [
        'Would have conducted more extensive multilingual user testing earlier in the process',
        'Would have prototyped offline synchronisation scenarios more thoroughly before finalising the design',
        'Would have explored voice input as an option for hands-free data entry in high-noise environments',
      ],
    },
    ecosystem: {
      description: 'The tablet platform connects field operations to the rest of the CLONOS ecosystem:',
      platforms: [
        { title: 'CLONOS Desktop', description: 'Engineers assign tasks and receive real-time field data', link: '/projects/clonos' },
        { title: 'VR Training Simulator', description: 'Operators practice procedures in VR before executing on tablet', link: '/projects/vr-training-simulator' },
        { title: 'Digital Twin', description: 'Field data feeds into process simulation and optimisation', link: '/projects/clonos-digital-twin' },
      ],
    },
    navigation: {
      prev: { title: 'CLONOS Desktop', link: '/projects/clonos' },
      next: { title: 'VR Training Simulator', link: '/projects/vr-training-simulator' },
    },
  },

  'vr-training-simulator': {
    title: 'CLONOS VR Training Simulator',
    headline: 'Helping Plant Workers Practice Daily Operations and Emergency Scenarios Safely Before Stepping onto the Plant Floor',
    heroImage: '/images/projects/vr-training-simulator.png',
    meta: {
      role: 'Product Designer / UI/UX Designer (VR Interface Design)',
      duration: '7 months',
      platform: 'VR — Meta Quest 3',
      team: 'Cross-functional: Training Specialists, VR Developers, Plant Operators, Business',
      tools: ['Figma', 'Miro', 'Google Sheets'],
    },
    overview:
      'Designed a Virtual Reality training simulator for Meta Quest 3 that allows plant workers to practise daily operations and emergency scenarios in a safe, immersive environment before stepping onto the actual plant floor — enabling them to make mistakes and learn at their own pace.',
    background:
      'Rather than wasting production resources with in-field training, we created a VR environment where operators could test operations, make mistakes safely, and experience daily plant life. The platform prepares workers for both routine operations and emergency scenarios including fire, equipment breakdowns, and other critical situations.',
    problemIntro:
      'Industrial training struggled with safety risks, limited practice opportunities for emergencies, and operators being unprepared for critical situations.',
    painPoints: [
      {
        title: 'Safety Risks',
        description: 'Traditional training in hazardous environments posed injury concerns. Learning on actual equipment introduced risks of damage or catastrophic incidents during practice.',
      },
      {
        title: 'No Emergency Practice',
        description: 'There was no safe way to practise emergency responses. Operators simply did not know what to do when accidents, fires, or equipment failures occurred.',
      },
      {
        title: 'Training Inconsistency',
        description: 'Training quality varied across locations and instructors, creating inconsistent operator preparation and uneven safety standards across shifts.',
      },
      {
        title: 'Resource Waste',
        description: 'On-job training disrupted active production and wasted valuable resources — pulling equipment offline and occupying engineers during critical operational hours.',
      },
    ],
    goals: [
      'Create realistic simulations of standard operating procedures with accurate equipment representation',
      'Design emergency scenario simulations for fire, breakdowns, and chemical exposure',
      'Develop intuitive VR interfaces with minimal UI that does not obstruct the operator\'s view',
      'Provide clear feedback when operators make mistakes or perform actions incorrectly',
      'Enable trainers to control and customise scenarios for different training needs',
      'Design for operators with limited technical background and education',
    ],
    responsibilities: [
      'VR Interface Design',
      'Spatial UX',
      'User Research',
      'Interaction Design',
      'Visual Design',
      'Feedback System Design',
      'Developer Collaboration',
    ],
    research: {
      interviews: {
        count: 4,
        description:
          'Spoke with industry trainers, engineering managers, engineers who play major roles in operator routines, and directly with operators themselves — the primary users of the system.',
        keyQuestions: [
          'What does current operator training look like, and where does it fall short?',
          'What happens when operators encounter emergency situations they have never practised?',
          'What are the biggest costs and risks of on-job training?',
          'What feedback mechanisms work best for operators with limited technical backgrounds?',
        ],
      },
      contextualInquiry: {
        description:
          'Observed training sessions and plant floor operations to understand spatial relationships, environmental conditions, and the gap between classroom knowledge and real execution.',
        observations: [
          'Current training was not sufficient for emergency scenarios — this was the most critical gap identified',
          'Managers and engineers were highly skeptical of on-job training due to production costs and resource waste',
          'Operators are not highly qualified and need interfaces that avoid technical jargon entirely',
          'Experiential and environmental learning far outperformed instruction-based approaches for this user group',
        ],
      },
      marketAnalysis: {
        description: 'Evaluated existing VR training platforms to understand what approaches worked and what to avoid.',
        findings: [
          'Most VR training solutions had intrusive HUD interfaces that obstructed the operator\'s view',
          'Trainer control and real-time customisation was largely absent in existing platforms',
          'Emergency scenario coverage was insufficient in available industrial VR tools',
          'Multimodal feedback (visual, audio, haptic) was underutilised despite strong evidence for effectiveness',
        ],
      },
    },
    personas: [
      {
        title: 'New Operator (VR Trainee)',
        image: '/images/projects/vr-persona-new.png',
        traits: [
          'Fresh hire with no plant experience',
          'Anxious about making costly mistakes',
          'Limited technical background',
          'Needs safe space to learn and repeat',
        ],
      },
      {
        title: 'Training Engineer (VR Trainer)',
        image: '/images/projects/vr-persona-trainer.png',
        traits: [
          'Controls VR scenarios from desktop',
          'Customises training difficulty',
          'Tracks trainee performance',
          'Responsible for operator certification',
        ],
      },
      {
        title: 'Plant Manager',
        image: '/images/projects/vr-persona-manager.png',
        traits: [
          'Oversees safety and readiness',
          'Concerned about production costs',
          'Wants standardised training across shifts',
          'Needs assurance operators are prepared',
        ],
      },
    ],
    designProcess: {
      iaImage: '/images/projects/VR - Info Architecture.png',
      ia: [
        'Home — Training Modules, Progress Overview, Certifications',
        'Standard Procedures — Daily Operations, Equipment Interactions, Step Guidance',
        'Emergency Scenarios — Fire, Equipment Failure, Chemical Exposure, Debrief',
        'Progress — Performance Records, Completion History, Skill Tracking',
        'Trainer Dashboard — Scenario Controls, Trainee Management, Custom Triggers',
      ],
      userFlows: [
        {
          title: 'Emergency Response Training Flow',
          caption: 'Trainee path through a simulated emergency — from scenario trigger to debrief',
          image: '/images/projects/vr-training-flow.png',
        },
      ],
    },
    features: [
      {
        title: 'Immersive Plant Environment',
        problem: 'Trainees lacked familiarity with equipment layout and spatial relationships, leading to orientation challenges and safety risks when entering the real plant.',
        solution: 'Realistic 3D recreation of industrial facilities with accurate equipment models, interactive components matching real-world counterparts, and environmental factors like noise and lighting.',
        impact: 'Enabled safe practice before entering the real plant, reduced orientation time, and allowed operators to experience plant life without disrupting production.',
        image: '/images/projects/vr-plant-environment.png',
      },
      {
        title: 'Glassmorphic Interface Design',
        problem: 'Traditional VR interfaces were intrusive and obstructed the operator\'s view, making it difficult to focus on training content and scenarios.',
        solution: 'Semi-transparent, see-through UI elements present without obstructing the complete view, with contextual information panels appearing only when needed and minimal visual clutter.',
        impact: 'Operators responded very positively to the new experience, maintaining full focus on training content while keeping necessary information accessible.',
        image: '/images/projects/vr-glassmorphic-ui.png',
      },
      {
        title: 'Standard Operating Procedures',
        problem: 'Operators needed to learn daily routines and standard procedures before entering the plant, but traditional methods provided no hands-on practice opportunity.',
        solution: 'Step-by-step guidance for routine operations, interactive equipment controls matching real interfaces, and practice of daily workflows in a consequence-free environment.',
        impact: 'Operators could experience their full daily plant routine in VR before their first real shift, building confidence and reducing errors from day one.',
        image: '/images/projects/vr-sop-training.png',
      },
      {
        title: 'Trainer-Controlled Emergency Scenarios',
        problem: 'There was no safe way to practise emergency responses — operators were entirely unprepared for fires, equipment breakdowns, or chemical exposure.',
        solution: 'Desktop control panel for trainers to customise and trigger emergency scenarios in real time — tweaking values to simulate fires, chemical exposure, and equipment failures on demand.',
        impact: 'Trainers could create controlled, progressive emergency experiences. Operators built real muscle memory for crisis response without any real-world risk.',
        image: '/images/projects/vr-emergency-scenario.png',
      },
      {
        title: 'Multimodal Feedback System',
        problem: 'Operators with limited technical experience needed clear, immediate confirmation when performing actions correctly or making mistakes.',
        solution: 'Visual, audio, and haptic feedback for all operator actions, with error triggers and correction cues designed by the UX team and implemented by Unity developers.',
        impact: 'Operators received instant, unambiguous guidance on performance, learned from mistakes in the moment, and built confidence through consistent and clear feedback.',
        image: '/images/projects/vr-feedback-system.png',
      },
    ],
    results: {
      adoption: [
        { value: '0', label: 'Production disruptions from training' },
        { value: '100%', label: 'Standardised training across all locations and shifts' },
        { value: 'Safe', label: 'Emergency practice with zero real-world risk' },
        { value: '↓', label: 'Resource waste from pulling equipment offline for training' },
        { value: '↑', label: 'Operator confidence entering the plant for the first time' },
        { value: '3×', label: 'Emergency scenarios practiced vs. traditional training' },
      ],
    },
    testimonials: [
      {
        quote: 'Practising the fire emergency in VR gave me the confidence to handle a real incident. I knew exactly what to do and where to go.',
        author: 'Plant Operator',
        company: 'Manufacturing Facility',
      },
      {
        quote: 'Being able to trigger scenarios from my dashboard while the operator is in VR changed how we run training entirely. It\'s far more effective.',
        author: 'Training Engineer',
        company: '',
      },
    ],
    learnings: {
      worked: [
        { title: 'Glassmorphic Design', description: 'The see-through interface approach was highly effective — operators loved that the UI never blocked their view of the training environment.' },
        { title: 'Minimal UI', description: 'Keeping interface elements minimal kept full focus on training content rather than the interface itself, which translated directly to better learning outcomes.' },
        { title: 'Trainer Control', description: 'Giving trainers real-time control over emergency scenarios allowed customised, progressively difficult training that adapted to each operator\'s pace.' },
        { title: 'Multimodal Feedback', description: 'Visual, audio, and haptic feedback combined significantly improved learning outcomes, especially for operators who struggled with text-heavy instruction.' },
      ],
      challenges: [
        { title: 'VR Interaction Complexity', description: 'Balancing realistic equipment operation with simple VR interactions required extensive iteration and very close collaboration with Unity developers.' },
        { title: 'Motion Sickness', description: 'Managing motion sickness concerns while keeping scenarios engaging was a persistent challenge, particularly for older operators with no prior VR exposure.' },
        { title: 'Feedback Coordination', description: 'Designing and handing off error triggers and feedback interactions to Unity developers required precise documentation and multiple review rounds.' },
      ],
      differently: [
        'Would integrate AI features allowing operators to ask questions and interact with a virtual assistant during training',
        'Would have tested with a broader age range earlier — VR comfort varies significantly',
        'Would have implemented voice-based interactions for hands-free guidance in complex scenarios',
        'Would have created more granular difficulty progression for complex multi-step procedures',
      ],
    },
    ecosystem: {
      description: 'The VR simulator connects to the broader CLONOS training and operations ecosystem:',
      platforms: [
        { title: 'CLONOS Desktop', description: 'Trainers control VR scenarios from the desktop interface', link: '/projects/clonos' },
        { title: 'CLONOS Tablet', description: 'VR trains operators on the same procedures they execute on tablet', link: '/projects/clonos-tablet' },
        { title: 'Digital Twin', description: 'VR environments mirror the Digital Twin\'s virtual plant models', link: '/projects/clonos-digital-twin' },
      ],
    },
    navigation: {
      prev: { title: 'CLONOS Tablet', link: '/projects/clonos-tablet' },
      next: { title: 'CLONOS Digital Twin', link: '/projects/clonos-digital-twin' },
    },
  },

  'clonos-digital-twin': {
    title: 'CLONOS Digital Twin Platform',
    headline: 'Enabling Engineers to Monitor and Control Physical Plant Operations Remotely Through a Real-Time 3D Digital Replica',
    heroImage: '/images/projects/clonos Digital Twin.png',
    meta: {
      role: 'Product Designer / UI/UX Designer',
      duration: '12 months',
      platform: 'Web + Desktop',
      team: 'Cross-functional: Engineering, Product, Data Team, Business',
      tools: ['Figma', 'Miro', 'Google Sheets'],
    },
    overview:
      'The Digital Twin Platform converts physical plant assets into 3D models placed in an immersive virtual environment, replicating real-world operations in real-time through DCS and sensor connections — enabling remote monitoring and control from anywhere in the world.',
    background:
      'The platform allows engineers to digitally monitor and manage plant operations without physical presence. An operator in India can oversee a plant in Africa. Real-time data including value fluctuations, tank levels, and alarms are communicated directly to the digital twin through connected sensors and control systems.',
    problemIntro:
      'Traditional plant monitoring relied on lengthy alert chains and required physical presence, creating significant delays and inefficiencies in issue detection and resolution.',
    painPoints: [
      {
        title: 'Lengthy Alert Chain',
        description: 'Sensor → DCS/IoT Platform → Operator → Resolution — too many handoffs meant critical alerts were stale by the time anyone could act on them.',
      },
      {
        title: 'Required Physical Presence',
        description: 'Operators had to be on-site to inspect assets and verify issues, making remote facilities costly and time-consuming to oversee.',
      },
      {
        title: 'Inefficient Escalation',
        description: 'No way to determine if issues could be resolved remotely or required physical human intervention, so every alert triggered an unnecessary site visit.',
      },
      {
        title: 'Fragmented Tools',
        description: 'Engineers switched between monitoring platforms, simulation tools (DWSIM), and control systems — breaking workflow and losing context at every transition.',
      },
    ],
    goals: [
      'Enable direct real-time alerts to Digital Twin Engineers, bypassing intermediate steps',
      'Provide an immersive 3D environment for remote plant inspection and monitoring',
      'Allow engineers to assess issues and assign field operators only when physical intervention is truly needed',
      'Integrate DWSIM simulation tools within the platform to eliminate tool-switching',
      'Create real-time asset status visibility across the entire facility in spatial context',
      'Design minimal UI that keeps focus on the 3D plant environment without visual clutter',
    ],
    responsibilities: [
      'User Research',
      'Information Architecture',
      'Spatial UI Design',
      'Interaction Design',
      'Visual Design',
      'Systems Integration Design',
      'Developer Collaboration',
    ],
    research: {
      interviews: {
        count: 8,
        description:
          'Interviewed plant operators and engineers to understand current workflow challenges, alert response inefficiencies, and the real cost of requiring on-site presence for routine inspection.',
        keyQuestions: [
          'How does your current alert chain work, and where does it slow down?',
          'How often do you travel to a site only to find the issue could have been resolved remotely?',
          'What information do you need to decide whether a problem requires physical intervention?',
          'How do you currently use DWSIM, and how much time is lost switching between tools?',
        ],
      },
      contextualInquiry: {
        description:
          'Analysed existing alert chains and monitored real response workflows to identify bottlenecks and measure the gap between issue trigger and resolution.',
        observations: [
          'Alert chains were too long — critical issues often took hours from trigger to first response',
          'Engineers needed remote inspection capability to verify issues without costly site visits',
          'Switching between monitoring, simulation, and control platforms was a major time drain',
          'Engineers wanted spatial understanding of plant layout to better diagnose complex, interdependent issues',
        ],
      },
      marketAnalysis: {
        description: 'Evaluated existing industrial monitoring and digital twin platforms to understand the current state of spatial interface design.',
        findings: [
          'Most platforms overlaid heavy dashboards on 3D environments, obstructing the spatial view',
          'Alert systems in existing tools relied on manual escalation with no direct routing to responsible engineers',
          'DWSIM and monitoring tools were universally separate, requiring constant context switching',
          'No existing platform offered combined 3D walkthrough, real-time status, and simulation in one interface',
        ],
      },
    },
    personas: [
      {
        title: 'Digital Twin Operator',
        image: '/images/projects/dt-persona-operator.png',
        traits: [
          'Takes virtual walkthrough of the plant',
          'Monitors assets and alerts remotely',
          'Manages multiple facilities from one location',
          'Assigns field operators when physical intervention is needed',
        ],
      },
      {
        title: 'Plant Operations Manager',
        image: '/images/projects/dt-persona-manager.png',
        traits: [
          'Oversees all logging and maintenance tasks',
          'Tracks asset productivity and health remotely',
          'Needs centralised visibility across locations',
          'Accesses historical records for trend analysis',
        ],
      },
      {
        title: 'Field Operator',
        image: '/images/projects/dt-persona-field.png',
        traits: [
          'Receives assignments from Digital Twin team',
          'Performs physical maintenance when remote resolution fails',
          'Updates task status in the integrated system',
          'Limited digital monitoring access while in the field',
        ],
      },
    ],
    designProcess: {
      ia: [
        'Dashboard — Plant Overview, Active Alerts, Asset Health Summary',
        '3D Plant View — Asset Walkthrough, Status Indicators, Layer Controls',
        'Alert Management — Real-time Alerts, Severity Triage, Assignment',
        'Simulation — DWSIM Integration, Process Optimisation, What-if Scenarios',
        'Work Orders — Remote Assignment, Field Operator Coordination, Status Tracking',
      ],
      userFlows: [
        {
          title: 'Alert to Resolution Flow',
          image: '/images/projects/dt-alert-flow.png',
        },
      ],
    },
    features: [
      {
        title: 'Real-Time Alert Management',
        problem: 'Engineers received delayed alerts — by the time they were notified through the sensor chain, the issue window had already passed, making effective response impossible.',
        solution: 'Replaced the sensor-based delayed alert chain with a real-time, seconds-based system. Alerts appear in the Digital Twin the moment they are triggered, with full context and severity triage.',
        impact: '73% improvement in alert response time, instant notification for critical issues, prevented escalation of problems due to late awareness.',
        image: '/images/projects/dt-alert-management.png',
      },
      {
        title: 'Immersive 3D Plant Walkthrough',
        problem: 'Engineers had to physically visit the plant to inspect assets, verify operator activity, and investigate errors — time-consuming and dependent on geographic presence.',
        solution: 'A fully immersive 3D digital twin environment with minimal, unobtrusive UI. Clean icon-based left sidebar, contextual asset cards, and flexible 2D/3D view controls enable complete spatial exploration without visual clutter.',
        impact: '60% of issues resolved remotely without site visits, saved significant travel costs, enabled verification of operator activities from anywhere in the world.',
        image: '/images/projects/dt-plant-walkthrough.png',
      },
      {
        title: 'Real-Time Asset Status Monitoring',
        problem: 'Engineers could not see current operational status of assets without visiting the plant or checking across multiple disconnected monitoring systems.',
        solution: 'Real-time 3D visualisation showing asset status directly in the immersive environment — running (green), breakdown (red), or standby (yellow) — visible at a glance within the spatial plant context.',
        impact: 'Instant plant-wide asset health visibility, quick identification of problem areas, eliminated the need to check multiple monitoring systems simultaneously.',
        image: '/images/projects/dt-asset-status.png',
      },
      {
        title: 'Integrated DWSIM Simulation',
        problem: 'Engineers used external DWSIM tools to simulate process changes, then had to return to the monitoring platform to test results — fragmented and time-consuming.',
        solution: 'Integrated DWSIM simulation engine directly into the Digital Twin platform, allowing engineers to simulate efficiency improvements, output optimisation, and process modifications within a single unified interface.',
        impact: 'Eliminated tool-switching entirely, streamlined simulation workflow, enabled faster testing of process improvements, reduced time from hypothesis to implementation.',
        image: '/images/projects/dt-dwsim-integration.png',
      },
      {
        title: 'Minimal Spatial UI Design',
        problem: 'Traditional industrial interfaces overwhelmed users with dense information displays that obscured the plant view and created cognitive overload during high-pressure monitoring.',
        solution: 'Minimal, unobtrusive UI with a clean icon-based left sidebar, bottom view controls (2D/3D toggle, layers, compare, rotate), and contextual asset cards that appear only when needed — keeping the 3D environment always in focus.',
        impact: 'Maintained full focus on the spatial plant environment, reduced visual clutter, enabled intuitive navigation for engineers monitoring complex multi-asset facilities.',
        image: '/images/projects/dt-minimal-ui.png',
      },
    ],
    results: {
      adoption: [
        { value: '73%', label: 'Improvement in alert response time' },
        { value: '60%', label: 'Of issues resolved remotely without site visits' },
        { value: '0', label: 'Tool switching between monitoring and simulation' },
        { value: 'Real-time', label: 'Asset status visibility across entire facility' },
        { value: '↓', label: 'Travel costs for routine inspection and verification' },
        { value: '↑', label: 'Spatial understanding of complex plant relationships' },
      ],
    },
    testimonials: [
      {
        quote: 'I can now inspect a plant in Africa from my desk in Chennai. The 3D walkthrough gives me the same spatial understanding as being there in person.',
        author: 'Digital Twin Engineer',
        company: 'Manufacturing Facility',
      },
      {
        quote: 'The alert system changed everything. We used to find out about issues hours later — now we know in seconds and can decide immediately whether to send someone.',
        author: 'Plant Operations Manager',
        company: '',
      },
    ],
    learnings: {
      worked: [
        { title: '3D Spatial Interface', description: 'The immersive 3D environment provided far superior plant understanding compared to 2D dashboards, especially for diagnosing spatially complex issues.' },
        { title: 'Minimal UI Philosophy', description: 'Designing contextual information that appeared only when needed kept full focus on the plant environment — engineers consistently praised this approach.' },
        { title: 'Real-Time Alerts', description: 'Eliminating the alert chain and delivering direct, instant notifications dramatically improved the team\'s ability to respond to critical issues.' },
        { title: 'DWSIM Integration', description: 'Bringing simulation into the same platform eliminated the constant context-switching that was slowing down engineering workflows.' },
      ],
      challenges: [
        { title: 'Multi-System Integration', description: 'Integrating DCS, DWSIM, and sensor data feeds into one unified interface required careful architecture and close collaboration with the data team.' },
        { title: 'Real-Time Performance', description: 'Ensuring real-time data synchronisation across all integrated systems while maintaining 3D rendering performance was a persistent technical challenge.' },
        { title: 'Minimal vs. Accessible', description: 'Balancing a minimal UI that didn\'t obstruct the immersive environment with keeping all necessary controls discoverable and accessible required significant iteration.' },
      ],
      differently: [
        'Would add collaborative features allowing multiple engineers to inspect the digital twin simultaneously',
        'Would integrate voice commands for hands-free navigation during plant walkthrough',
        'Would add historical playback to replay past incidents in 3D for root cause analysis',
        'Would develop a mobile companion app for lightweight monitoring on the go',
        'Would implement VR support for even more immersive plant inspection experiences',
      ],
    },
    ecosystem: {
      description: 'The Digital Twin connects physical plant data with every layer of the CLONOS ecosystem:',
      platforms: [
        { title: 'CLONOS Desktop', description: 'Asset data and maintenance records sync with the Digital Twin', link: '/projects/clonos' },
        { title: 'CLONOS Tablet', description: 'Engineers assign physical interventions to field operators when remote resolution is not possible', link: '/projects/clonos-tablet' },
        { title: 'VR Simulator', description: 'Operators practise procedures in the same 3D plant environment used for live monitoring', link: '/projects/vr-training-simulator' },
      ],
    },
    navigation: {
      prev: { title: 'VR Training Simulator', link: '/projects/vr-training-simulator' },
      next: { title: 'Taqumart', link: '/projects/taqumart' },
    },
  },
};
