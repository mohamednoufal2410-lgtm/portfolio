export const caseStudies = {
  clonos: {
    title: 'CLONOS Desktop Platform',
    headline: 'Reducing Unplanned Downtime by 28% Through Intelligent Asset Management',
    heroImage: '/images/projects/clonos.png',
    meta: {
      role: 'UI/UX Designer',
      duration: '8 months',
      platform: 'Desktop Web Application',
      team: '1 PM, 1 PD, 4 Engineers, 2 Operations leads',
      tools: ['Figma', 'Miro'],
    },
    overview:
      'I led the design of a comprehensive desktop platform that digitized critical workflows for plant engineers, transforming paper-based processes into a streamlined digital system that improved asset reliability and optimized maintenance operations.',
    metrics: [
      { value: '28.3%', label: 'Reduction in unplanned downtime' },
      { value: '40%', label: 'Decrease in maintenance costs' },
      { value: '75%', label: 'Reduction in log processing time' },
      { value: '4.5/5', label: 'User satisfaction score' },
    ],
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
      'Conducting user research and contextual inquiry with plant engineers',
      'Developing information architecture and user flows',
      'Creating wireframes and interactive prototypes',
      'Designing high-fidelity UI mockups',
      'Building and maintaining the design system',
      'Conducting usability testing and iterations',
      'Collaborating with developers for implementation',
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
        name: 'Rajesh',
        title: 'Senior Plant Engineer',
        age: 45,
        experience: '20 years',
        description: 'Manages 50+ critical assets. Needs reliable data for maintenance planning. Frustrated with paper-based verification.',
        values: ['Efficiency', 'Accuracy', 'Reliability'],
      },
      {
        name: 'Priya',
        title: 'Maintenance Planning Engineer',
        age: 32,
        experience: '8 years',
        description: 'Responsible for scheduling and resource allocation. Struggles with coordinating teams and equipment availability.',
        values: ['Clear schedules', 'Resource optimization'],
      },
      {
        name: 'Ahmed',
        title: 'Reliability Engineer',
        age: 38,
        experience: '12 years',
        description: 'Focuses on predicting failures and optimizing processes. Needs historical data and trend analysis.',
        values: ['Data accuracy', 'Analytical tools'],
      },
    ],
    designProcess: {
      ia: [
        'Dashboard — Overview (KPIs, alerts, recent activities)',
        'Logs — Create, Assigned, Submitted, Templates',
        'Assets — List, Details, Hierarchy, Inventory',
        'Maintenance — Work Orders, Scheduled, Emergency, History',
        'Analytics — Reliability, Process Optimization, Reports',
        'Settings — Users, Templates, Notifications',
      ],
      userFlows: [
        {
          title: 'Scheduling Maintenance',
          steps: [
            'Engineer navigates to Maintenance section',
            'Creates work order or uses template',
            'Defines scope, requirements, parts needed',
            'Assigns to maintenance team',
            'Sets priority and deadline',
            'System checks resource availability',
            'Progress tracked in real-time',
          ],
        },
        {
          title: 'Analyzing Asset Reliability',
          steps: [
            'Engineer opens Analytics dashboard',
            'Selects asset or asset group',
            'Views performance trends and predictions',
            'Identifies potential failure patterns',
            'Reviews maintenance recommendations',
            'Plans preventive actions',
            'Exports report for stakeholders',
          ],
        },
      ],
      iterations: [
        { before: 'Dashboard initially showed too much data', after: 'Simplified to key metrics only' },
        { before: 'Asset hierarchy was confusing', after: 'Added visual tree structure' },
        { before: 'Work order form was too long', after: 'Broke into logical steps' },
        { before: 'Charts were hard to understand', after: 'Simplified with clear labels' },
      ],
    },
    keyScreens: [
      {
        title: 'Dashboard Overview',
        description:
          'Top metrics: total assets, active work orders, overdue tasks, uptime %. Alert banner for critical issues. Quick action buttons, recent activities timeline, asset health chart, and maintenance calendar widget.',
        rationale:
          'Provides engineers with immediate situational awareness. Showing critical information first lets engineers quickly identify issues. Modular widget design allows customization.',
        image: '/images/projects/clonos-dashboard.png',
      },
      {
        title: 'Log Management Interface',
        description:
          'Filterable list of all logs with status indicators. Quick search by asset, operator, or date range. Status columns: Assigned, In Progress, Submitted, Overdue.',
        rationale:
          'Engineers needed to manage hundreds of logs efficiently. Table format allows quick scanning, while status indicators provide immediate visual feedback.',
        image: '/images/projects/clonos-logs.png',
      },
      {
        title: 'Asset Detail View',
        description:
          'Asset information header with tabs for Overview, Specifications, Maintenance History, and Performance. Real-time status indicators with related spare parts and inventory levels.',
        rationale:
          'Consolidates all relevant information in one place. Engineers can understand asset status, review history, and take action without navigating multiple screens.',
        image: '/images/projects/clonos-asset.png',
      },
      {
        title: 'Reliability Analytics Dashboard',
        description:
          'Asset performance trends, failure prediction indicators, MTBF metrics, maintenance cost analysis, and process optimization recommendations.',
        rationale:
          'Transforms complex data into actionable insights. Clear visualizations help engineers identify patterns and make data-driven decisions.',
        image: '/images/projects/clonos-analytics.png',
      },
    ],
    features: [
      {
        title: 'Digital Log Management System',
        problem: 'Engineers had no visibility into whether operators were completing log entries accurately or on time.',
        solution: 'Created a comprehensive digital log system with automated timestamping and real-time tracking.',
        impact: 'Eliminated manual transcription errors. Reduced log processing time by 75%.',
        image: '/images/projects/clonos-feature-logs.png',
      },
      {
        title: 'Intelligent Asset Management',
        problem: 'Asset information was scattered across multiple systems and paper records.',
        solution: 'Built a centralized asset management system with hierarchical organization and automated inventory tracking.',
        impact: 'Single source of truth for asset data. Reduced parts stockouts by 45%.',
        image: '/images/projects/clonos-feature-assets.png',
      },
      {
        title: 'Predictive Maintenance Scheduling',
        problem: 'Maintenance was reactive, happening after equipment failed. This led to costly emergency repairs.',
        solution: 'Designed an intelligent scheduling system using historical data and patterns to predict maintenance needs.',
        impact: 'Shifted from 80% reactive to 70% predictive. Reduced unplanned downtime by 28.3%.',
        image: '/images/projects/clonos-feature-maintenance.png',
      },
      {
        title: 'Reliability Analytics & Optimization',
        problem: 'Engineers lacked tools to analyze asset performance trends. Data existed but wasn\'t actionable.',
        solution: 'Created comprehensive analytics dashboards that transformed raw data into meaningful insights.',
        impact: 'Data-driven decision making. Reduced maintenance costs by 40%.',
        image: '/images/projects/clonos-feature-analytics.png',
      },
      {
        title: 'Template Library System',
        problem: 'Creating logs, work orders, and procedures from scratch was time-consuming and led to inconsistencies.',
        solution: 'Built a comprehensive template system for all common tasks and procedures.',
        impact: '60% faster log and work order creation. Standardized processes across facilities.',
        image: '/images/projects/clonos-feature-templates.png',
      },
    ],
    results: {
      adoption: [
        { value: '95%', label: 'of engineers actively using platform' },
        { value: '87%', label: 'reduction in paper-based processes' },
        { value: '4.5/5', label: 'average user satisfaction score' },
        { value: '89%', label: 'would recommend to other facilities' },
      ],
    },
    testimonials: [
      {
        quote:
          'This platform has transformed how we manage our assets. What used to take hours now takes minutes. The predictive capabilities have helped us prevent multiple equipment failures.',
        author: 'Senior Engineer',
        company: 'Manufacturing Facility',
      },
      {
        quote:
          'Finally, I can trust that operators are completing their logs on time and accurately. The real-time visibility has been a game-changer.',
        author: 'Maintenance Planning Engineer',
        company: '',
      },
      {
        quote:
          'The analytics dashboard helps me identify optimization opportunities I never would have found with our old paper-based system.',
        author: 'Reliability Engineer',
        company: '',
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
        { title: 'Technical Integration', description: 'Integrating with existing plant systems (DCS, SCADA) was complex. Close collaboration with IT teams was crucial.' },
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
};
