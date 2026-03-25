export const caseStudies = {
  clonos: {
    title: 'CLONOS Desktop Platform',
    heading: 'Digitizing Asset Management Workflows for Industrial Plant Engineers',
    headline: 'Reducing Unplanned Downtime by 68% Through Intelligent Asset Management',
    prototypeUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/8vmjoBfUc4xVB5eGMq0Da3/CLONOS-Developer-s-Space-1?node-id=54699-186604&viewport=2410%2C1502%2C0.15&t=Wy9NRi5a5mmZK9za-0&scaling=contain&content-scaling=fixed&starting-point-node-id=54699%3A186604',
    heroImage: '/images/projects/clonos.png',
    meta: {
      role: 'UI/UX Designer',
      duration: '8 months',
      platform: 'Desktop Web Application',
      team: 'Cross-functional: Engineering, Product, Business',
      tools: ['Figma', 'Miro'],
    },
    summary:
      'Designed end-to-end UX for CLONOS Desktop — transforming paper-based industrial maintenance workflows into a real-time digital system that reduced unplanned downtime by 68% and drove 85% user adoption across plant sites.',
    myRole: {
      description:
        'I was the sole UX designer on this project, owning the full design process from discovery research through final developer handoff. I collaborated closely with the product manager to define scope and worked directly with frontend engineers during implementation.',
      responsibilities: [
        'User Research & Interviews',
        'Information Architecture',
        'Wireframing & Prototyping',
        'Visual Design System',
        'Stakeholder Presentations',
        'Developer Handoff',
      ],
    },
    overview:
      'I led the design of a comprehensive desktop platform that digitized critical workflows for plant engineers, transforming paper-based processes into a streamlined digital system that improved asset reliability and optimized maintenance operations.',
    background:
      'CLONOS is an Enterprise Asset Management company delivering IoT-driven predictive maintenance and real-time monitoring solutions. The desktop platform serves as the command center for plant engineers, enabling them to manage assets, schedule maintenance, and optimize processes using predictive analytics.',
    context: {
      headline: 'How industrial plant maintenance works today',
      description: 'In manufacturing and process plants, engineers depend on manual rounds and paper-based logs to track the health of hundreds of critical assets — motors, pumps, compressors, and control valves.',
      currentReality: [
        'Operators walk rounds every 4–8 hours, filling paper checklists by hand',
        'Engineers collect sheets and manually transcribe readings into spreadsheets',
        'Maintenance is scheduled on fixed calendar intervals, not actual asset condition',
        'When something breaks, root cause is traced through stacks of paper logs',
      ],
      contextCard: {
        title: 'A typical maintenance day at a plant',
        items: [
          { label: 'Asset Monitoring', value: 'Manual rounds every shift' },
          { label: 'Log Method', value: 'Paper checklists + clipboard' },
          { label: 'Data Entry', value: 'Manual Excel transcription' },
          { label: 'Work Orders', value: 'Verbal + written handoffs' },
          { label: 'Alert System', value: 'None — reactive only' },
        ],
        note: 'All of this coordination happens through paper, phone calls, and spreadsheets.',
      },
      comparison: {
        before: 'What engineers experienced',
        after: 'What they actually needed',
        rows: [
          { before: 'Paper logs with no timestamps or traceability', after: 'Real-time digital entries with location and time stamps' },
          { before: 'No visibility into which assets were at risk', after: 'A live dashboard showing asset health at a glance' },
          { before: 'Maintenance on fixed schedules regardless of condition', after: 'Predictive alerts triggered by actual sensor thresholds' },
          { before: 'Work orders communicated verbally or on scraps of paper', after: 'Digital work orders with full assignment and audit trail' },
        ],
      },
    },
    problemIntro:
      'Engineers at industrial plants were struggling with inefficient paper-based systems for managing critical asset maintenance. This created several problems:',
    painPoints: [
      {
        title: 'Manual Data Collection',
        description:
          'Paper logs were time-consuming and error-prone. Engineers received paper logs from operators and had to manually transcribe data into spreadsheets with no real-time visibility.',
        issues: [
          'Operators fill paper checklists on rounds, then hand them to engineers for manual transcription',
          'No timestamps or verification — entries could be backdated or left incomplete without any system catching it',
        ],
        resultsIn: [
          'Engineers spent 3–4 hours daily on data entry instead of actual engineering and decision-making',
          'Critical asset anomalies went unnoticed until the next manual round, hours later',
        ],
        linkedFeatureIndex: 0,
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
    hmwStatement: 'How might we digitize and unify the entire asset maintenance workflow for plant engineers and operators so that data collection, task accountability, predictive maintenance, and audit readiness all live in one intelligent system — eliminating the inefficiency, errors, and blind spots of paper-based operations?',
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
    designPhases: [
      {
        phase: 'Empathize',
        accent: 'blue',
        activities: [
          'User research with 12 plant engineers',
          'Market research across EAM platforms',
          'User persona — pain points, frustrations & needs',
          'User journey mapping across maintenance workflows',
        ],
      },
      {
        phase: 'Define',
        accent: 'purple',
        activities: [
          'Competitor analysis of existing EAM tools',
          'Synthesising research into core problem statements',
          'Identifying critical gaps in current workflows',
        ],
      },
      {
        phase: 'Ideate',
        accent: 'yellow',
        activities: [
          'User flows for all primary scenarios',
          'Storyboarding key operator and engineer journeys',
          'Information architecture for the full platform',
        ],
      },
      {
        phase: 'Prototype',
        accent: 'green',
        activities: [
          'Paper wireframes for rapid concept validation',
          'Low-fidelity design & interactive prototype',
          'High-fidelity design across all 10+ modules',
        ],
      },
      {
        phase: 'Test',
        accent: 'pink',
        activities: [
          'Internal usability testing with the product team',
          'External testing with plant engineers at ONGC',
          'Iterative refinement based on session findings',
        ],
      },
    ],
    designProcess: {
      wireframes: [
        { label: 'Log Management', wireframeImage: '/images/projects/Logs-Wireframe.png', finalImage: '/images/projects/Logs-Final.png' },
        { label: 'Dashboard', wireframeImage: '/images/projects/Dashboard-Wireframe.png', finalImage: '/images/projects/Dashboard-Final.png' },
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
    nextSteps: {
      description: 'Post-launch feedback and usage data revealed clear opportunities to improve and expand the platform further.',
      items: [
        {
          title: 'Mobile Companion App',
          description: 'Engineers need quick access on the plant floor without going to a desktop terminal. A lightweight mobile view for alerts, task updates, and equipment scanning is the next design priority.',
        },
        {
          title: 'AI-Powered Predictions',
          description: 'Surface predictive maintenance recommendations directly inside the work order flow — proactively flagging at-risk assets before failure occurs rather than reacting after the fact.',
        },
        {
          title: 'Role-Based Dashboards',
          description: 'Tailor the dashboard experience for different user types — plant manager vs. field technician — so each role surfaces only the KPIs most relevant to their daily decisions.',
        },
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
    headline: 'Empowering Field Workers with AR-Guided, Touch-First Data Collection',
    heroImage: '/images/projects/clonos Tablet.png',
    prototypes: [
      { label: 'Log Submission Flow', url: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/MTfbILa2tMwsjGsyMAWgBs/Portfolio-Prototype?node-id=2-6169%26scaling=contain%26content-scaling=fixed%26starting-point-node-id=2%3A6169' },
      { label: 'AR SOP Flow', url: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/MTfbILa2tMwsjGsyMAWgBs/Portfolio-Prototype?node-id=1-13929%26scaling=contain%26content-scaling=fixed%26starting-point-node-id=1%3A13929' },
      { label: 'Work Order Flow', url: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/MTfbILa2tMwsjGsyMAWgBs/Portfolio-Prototype?node-id=1-11475%26scaling=contain%26content-scaling=fixed%26starting-point-node-id=1%3A11475' },
    ],
    meta: {
      role: 'Product Designer / UI/UX Designer',
      duration: '6 months',
      platform: 'Tablet (Android / iOS)',
      team: 'Cross-functional: Field Operators, Engineering, Developers, Training',
      tools: ['Figma', 'Mural', 'Miro'],
    },
    myRole: {
      description:
        'I was the sole designer on the tablet product, owning end-to-end design from field research through developer handoff. I conducted on-site observations with operators in real industrial conditions and iterated based on what actually worked on the floor.',
      responsibilities: [
        'User Research',
        'Field Observation',
        'Interaction Design',
        'Visual Design',
        'Accessibility Design',
        'Developer Handoff',
      ],
    },
    overview:
      'Designed a tablet-based platform for field operators and maintenance personnel to complete assigned tasks, submit logs, and update maintenance records directly from industrial environments.',
    background:
      'Part of the CLONOS Enterprise Asset Management ecosystem that transformed paper-based field operations into streamlined digital workflows, eliminating manual processes and improving data accuracy across facilities.',
    currentProcess: {
      headline: 'Why paper-based field operations had to change',
      logFlow: {
        label: 'The data logging problem — every reading entered twice',
        steps: [
          {
            image: '/images/projects/Log book.png',
            label: 'Paper Logbook',
            caption: 'Step 1 — Written by hand during rounds',
            description: 'Operators fill checklists manually during every shift round. Entries are handwritten, undated, and impossible to verify or audit remotely.',
          },
          {
            image: '/images/projects/Excel Logbook.png',
            label: 'Excel Transcription',
            caption: 'Step 2 — Re-entered into spreadsheets',
            description: 'Engineers collect the paper sheets and manually re-key the same data into Excel — every reading entered twice, every single day.',
          },
        ],
      },
      sopProblem: {
        image: '/images/projects/SOP Book.png',
        label: 'The SOP problem — a separate issue entirely',
        description: 'When machinery needs repair or maintenance, operators are handed a thick physical SOP manual. These books are entirely text-based — no visuals, no diagrams, no step-by-step guidance. In a noisy, high-pressure industrial environment, no operator has the time or the ability to flip through dense pages to find the right procedure. Most don\'t bother.',
        solution: 'Going digital means SOPs become interactive — step-by-step with 3D models, AR overlays, and embedded video guides. Operators can see exactly what needs to be done, not just read about it.',
      },
      insight: 'Every data point is entered twice — once on paper, once in Excel. And when something breaks, operators are handed a book of text and expected to figure it out.',
      digitalShift: [
        'One entry, submitted instantly from the tablet — no paper, no re-transcription',
        'SOPs become interactive: step-by-step guidance with 3D models and procedure videos',
        'On-demand video guides replace hours of classroom training — operators learn by doing',
        'Engineers verify submissions in real time with automatic timestamps and operator attribution',
      ],
    },
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
        title: 'Operator',
        image: '/images/projects/Operator.png',
        traits: [
          'Varies from 2 to 15+ years of field experience',
          'Minimal digital tool usage',
          'May be a non-native language speaker',
          'Needs visual confirmation before submitting logs',
          'Completes rounds before documenting',
        ],
      },
      {
        title: 'Plant Engineer',
        image: '/images/projects/Engineer Image.png',
        traits: [
          'Reviews and verifies logs submitted by operators',
          'Flags incomplete or suspicious entries',
          'Needs full traceability — who submitted, when, and where',
          'Acts on field data to raise work orders',
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
      wireframes: [
        {
          label: 'Logs — Tablet',
          wireframeImage: '/images/projects/Logs Tablet -Wireframe.png',
          finalImage: '/images/projects/Logs Tablet -Final.png',
        },
      ],
    },
    features: [
      {
        title: 'Simplified Log Entry',
        problem: 'Paper logs were time-consuming, error-prone, and required manual transcription after operators completed their rounds. There was no visibility into overdue or pending logs.',
        solution: 'A structured log list showing each entry with real-time status tags — Scheduled, Overdue, Revised — and a countdown timer so operators always know what needs attention. QR scan and Sync Now keep data instantly up to date.',
        impact: 'Reduced log completion time by 40%, eliminated transcription errors, and gave engineers real-time visibility into submission status across the plant floor.',
        image: '/images/projects/Logs Tablet.gif',
      },
      {
        title: 'AR Model Based Help System',
        problem: 'Operators faced uncertainty during maintenance tasks with no visual guidance — text-based SOPs were impractical and rarely referenced in the field.',
        solution: 'Point the tablet camera at any asset and scan its QR code to instantly pull up AR-guided maintenance procedures, 3D model overlays, and embedded video references — all in the live camera view without leaving the workflow.',
        impact: 'Eliminated dependency on physical SOP manuals, significantly cut on-site training time, and gave operators the confidence to handle complex procedures independently.',
        image: '/images/projects/AR SOP Tablet.gif',
      },
      {
        title: 'Work Order Management',
        problem: 'Operators had no structured view of assigned tasks — work orders were communicated verbally or on paper with no step-by-step guidance, parts list, or accountability trail.',
        solution: 'Detailed digital work orders with priority tags, step-by-step task breakdowns, parts required and replaced tracking, tools needed, and attached documents — all in one place with assignee and team visibility.',
        impact: 'Improved task completion consistency, ensured every procedure was followed in the correct sequence, and created a full digital audit trail for every work order executed.',
        image: '/images/projects/Work order.gif',
      },
    ],
    results: {
      adoption: [
        { value: '40%', label: 'Reduction in task completion time' },
        { value: '100%', label: 'Elimination of manual transcription errors' },
        { value: '100%', label: 'Timestamped verification on all submissions' },
        { value: '60%', label: 'Reduction in onboarding and training time' },
        { value: 'Live', label: 'Field task visibility for engineering teams' },
      ],
    },
    testimonials: [
      {
        quote: 'What used to take half an hour on paper now takes five minutes. The pre-filled fields and simple forms are exactly what we needed.',
        author: 'Maintenance Technician',
        company: '',
      },
      {
        quote: 'The AR guidance is a game changer. I can scan the asset and know exactly what to do without flipping through any manual.',
        author: 'Field Operator',
        company: 'Manufacturing Facility',
      },
    ],
    learnings: {
      worked: [
        { title: 'Design for the Least Confident', description: 'Designing for the least technically confident users improved the experience for everyone — not just the struggling minority.' },
        { title: 'AR as a Training Replacement', description: 'Embedding AR guidance directly into the workflow reduced the need for formal training sessions and gave operators confidence on the floor.' },
        { title: 'Field Testing', description: 'Shadowing operators in actual industrial environments revealed critical requirements that lab testing would never have surfaced.' },
        { title: 'Simplicity Over Features', description: 'Simplified, focused interactions consistently proved more valuable than feature richness for this user base.' },
      ],
      challenges: [
        { title: 'Simplicity vs. Completeness', description: 'Balancing data completeness with interface simplicity for low-tech-comfort users was a persistent tension throughout the project.' },
        { title: 'Offline Reliability', description: 'Designing for offline operation with reliable synchronisation required extremely close collaboration with the engineering team.' },
        { title: 'Gloved Touch Interactions', description: 'Creating effective touch interactions that worked reliably with industrial gloves and in varied body positions required significant iteration.' },
      ],
      differently: [
        'Would have prototyped the AR guidance flow earlier to validate the QR scan interaction with real operators',
        'Would have prototyped offline synchronisation scenarios more thoroughly before finalising the design',
        'Would have integrated multilingual support directly into the AR guidance system — so operators could receive step-by-step procedure instructions in their native language overlaid on the asset, rather than it being a separate consideration.',
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
    title: 'CLONOS VR Training',
    headline: 'Designing the End-to-End Trainer Experience for a VR-Based Industrial Training Platform',
    heroImage: '/images/projects/clonos VR.png',
    meta: {
      role: 'UI/UX Designer',
      duration: '4 months',
      platform: 'Web Dashboard + Meta Quest 3',
      team: 'Cross-functional: Training Specialists, VR Developers, Plant Operators, Business',
      tools: ['Figma', 'Miro', 'Google Sheets'],
    },
    myRole: {
      description:
        'I owned the trainer-facing web dashboard end-to-end — from the initial flow mapping through to developer handoff. My brief was to design a single interface that replaced three disconnected tools, giving trainers full control over the VR training cycle without adding cognitive load to what were already high-pressure pre-shift windows.',
      responsibilities: [
        'Trainer Flow Design',
        'Web Dashboard UI/UX',
        'VR Session Handoff Design',
        'User Research',
        'Interaction Design',
        'Certificate System Design',
        'Developer Handoff',
      ],
    },
    overview:
      'Designed the end-to-end trainer experience for CLONOS VR Training — a web dashboard that gives industrial trainers full control over the VR training cycle, from scenario assignment and live session monitoring to post-session review and compliance certificate generation, all from a single interface.',
    background:
      'CLONOS is an enterprise asset management and digital twin platform for heavy industry, built at Crion Technologies, IIT-M Research Park. One of its key modules is a VR-based training system that lets industrial trainers assign scenario-based simulations and track trainee progress without stepping onto the plant floor. My brief was to design the trainer-facing web dashboard: an 8-stage flow that replaces a scheduling spreadsheet, a separate LMS, and manual certificate creation with one unified interface.',
    problemIntro:
      'Industrial trainers managing VR-based safety training had no unified interface for the full training cycle — three disconnected tools created reporting gaps and made live session monitoring impossible from a single screen.',
    painPoints: [
      {
        title: 'Fragmented Toolset',
        description: 'The existing process used a scheduling spreadsheet, a separate LMS, and manual certificate creation. Trainers context-switched constantly, and records lived in three places with no single source of truth.',
      },
      {
        title: 'No Live Session Visibility',
        description: 'Once a trainee put on the headset, the trainer had no visibility into what was happening inside the VR session — no progress indicators, no alert triggers, no way to intervene or adapt the scenario.',
      },
      {
        title: 'Manual Compliance Documentation',
        description: 'Industrial training records are regulatory artefacts. Trainers had to manually create certificates after every session — a time-consuming process prone to errors that created audit risk.',
      },
      {
        title: 'System Boundary Ambiguity',
        description: 'The VR session itself runs on a third-party headset OS. Without a clear handoff state, trainers were confused about what CLONOS controlled vs. what happened inside the headset.',
      },
    ],
    hmwStatement:
      'How might we give industrial trainers complete visibility and control over the full VR training cycle — from scenario assignment to compliance documentation — without multiplying tools or cognitive load?',
    goals: [
      'Replace three disconnected tools with a single unified trainer dashboard',
      'Design an 8-stage flow: Login → Dashboard → Module Selection → Trainee Assignment → VR Handoff → Live Monitoring → Post-Session Review → Certificate Generation',
      'Communicate the VR session handoff clearly without implying CLONOS controls the headset environment',
      'Treat certificate generation as a first-class screen — audit-ready and printable from day one',
      'Keep cognitive load low for trainers working in high-pressure pre-shift windows',
    ],
    responsibilities: [
      'Trainer Flow Design',
      'Web Dashboard UI/UX',
      'Interaction Design',
      'Visual Design',
      'Research & Synthesis',
      'Developer Handoff',
    ],
    research: {
      interviews: {
        count: 4,
        description:
          'Spoke with industrial trainers, engineering managers, and safety officers to understand the full training cycle — from how modules were currently assigned to how compliance records were filed.',
        keyQuestions: [
          'Walk me through how you currently run a VR training session from start to finish.',
          'Where do you lose time or make errors in the existing process?',
          'What happens when a trainee struggles mid-session — how do you know and what can you do?',
          'How are training completion records filed today, and who checks them?',
        ],
      },
      contextualInquiry: {
        description:
          'Observed trainers running sessions and filing records to understand the real workflow gaps between tools and identify where the most time was lost.',
        observations: [
          'Trainers spent significant time before each session locating the right scenario in the LMS and cross-referencing the schedule spreadsheet',
          'Certificate creation happened days after sessions — trainers often had to reconstruct completion data from memory',
          'No way to know if a trainee was struggling inside the headset without physically walking over and asking',
        ],
      },
      marketAnalysis: {
        description: 'Reviewed enterprise LMS and VR training management platforms to identify gaps and established patterns.',
        findings: [
          'Most LMS platforms were designed for digital course delivery — not for managing live VR sessions with physical handoff moments',
          'Trainer-facing dashboards in VR platforms were typically afterthoughts with minimal live session visibility',
          'No platform we reviewed handled the third-party VR handoff state with a clear UX narrative',
          'Compliance certificate generation was universally manual or bolt-on — never treated as a primary design surface',
          'No existing platform provided a structured pre-session entry screen — trainees were dropped into VR with no context or language setup',
        ],
      },
    },
    personas: [
      {
        title: 'Training Engineer (Trainer)',
        image: '/images/projects/vr-persona-trainer.png',
        traits: [
          'Runs VR training sessions for new and existing operators',
          'Works in high-pressure pre-shift windows with limited setup time',
          'Responsible for compliance documentation and operator certification',
          'Needs to assign modules to entire shift groups without repeating steps',
        ],
      },
      {
        title: 'Plant Manager',
        image: '/images/projects/vr-persona-manager.png',
        traits: [
          'Oversees safety readiness across the facility',
          'Reviews training completion records for audit purposes',
          'Wants standardised training outcomes across shifts and locations',
          'Needs assurance that operators are certified before stepping on the floor',
        ],
      },
      {
        title: 'New Operator (VR Trainee)',
        image: '/images/projects/vr-persona-new.png',
        traits: [
          'Fresh hire with no plant floor experience',
          'Assigned to VR modules by the trainer before their first shift',
          'Completes scenarios inside the Meta Quest 3 headset',
          'Receives a completion certificate once training is verified',
        ],
      },
    ],
    designProcess: {
      iaImage: '/images/projects/VR - Info Architecture.png',
      ia: [
        'Dashboard — Active Sessions, Trainee Progress, Upcoming Assignments',
        'Module Library — Scenario Cards, Illustration Preview, Configuration',
        'Assignment Flow — Module Select → Scenario Confirm → Trainee Assign',
        'Session Monitor — VR Handoff State, Live Progress, Real-Time Alerts',
        'Post-Session — Performance Review, Completion Records, Trend Analysis',
        'Certificates — Auto-Generation, Trainee Records, Audit Export',
      ],
    },
    features: [
      {
        title: 'Stepped Assignment Flow',
        problem: 'Trainers had to navigate between multiple tools to configure and assign a training module — the process had no clear sequence and was easy to get wrong under time pressure.',
        solution: 'Structured the flow into four confirmed steps — Mode Select (Guided or Certification) → Trainee Select → Scenario Select (based on completion status) → Module Play — matching the exact sequence a trainer follows and surfacing only relevant scenarios at each step.',
        impact: 'Eliminated the need to cross-reference a schedule spreadsheet and LMS simultaneously. Trainers completed assignments faster with fewer configuration errors.',
        image: '/images/projects/VR OTS.gif',
      },
      {
        title: 'Intricate Detailed Video Lessons',
        problem: 'Trainees had no way to understand the internal workings of complex machinery before operating it — text-based SOPs gave no spatial context and were ignored in practice.',
        solution: 'Embedded step-by-step video lessons inside the VR environment show the internal mechanics of each machine — how pistons fire, how valves sequence, how control handles map to output — before trainees interact with the equipment.',
        impact: 'Trainees arrived at each interaction point with a clear mental model of what was happening inside the machine, leading to higher task completion rates and fewer procedural errors in post-VR assessments.',
        image: '/images/projects/VR Immersive.gif',
      },
      {
        title: 'Pre-Session Module Entry Screen',
        problem: 'There was no designed entry point for the VR module. Trainees launched directly into the headset with no context set and no language preference captured upfront.',
        solution: 'Designed a pre-session screen with the module title, a written overview of the glass bottle forming process, a VR environment thumbnail, and an audio language selector — giving trainees context before they put on the headset.',
        impact: 'The screen became a standard pattern across all CLONOS VR modules and served as a key touchpoint for language setup and session readiness.',
        image: '/images/projects/VR Immersive 2.gif',
      },
    ],
    results: {
      adoption: [
        { value: '1', label: 'Unified dashboard replacing 3 disconnected tools' },
        { value: '0', label: 'Manual steps required for certificate generation' },
        { value: '↓', label: 'Pre-session setup time for module assignment' },
        { value: '↑', label: 'Trainer visibility into live VR session progress' },
      ],
    },
    testimonials: [
      {
        quote: 'Being able to trigger scenarios from my dashboard while the operator is in VR changed how we run training entirely. I can finally see what\'s happening without walking onto the floor.',
        author: 'Training Engineer',
        company: 'Crion Technologies',
      },
      {
        quote: 'The certificate is ready the moment the session ends. What used to take me an hour of reconstruction now takes zero steps.',
        author: 'Senior Trainer',
        company: 'Industrial Facility',
      },
    ],
    learnings: {
      worked: [
        { title: 'Stepped Flow Over a Single Form', description: 'Breaking assignment into discrete confirmed steps matched how trainers actually think about the process and dramatically reduced configuration errors during high-pressure pre-shift windows.' },
        { title: 'Owning the Handoff Moment', description: 'Designing the VR session passthrough as a first-class UX state — rather than a loading screen — resolved trainer confusion about system boundaries and built trust in the interface.' },
        { title: 'Certificate as a Design Surface', description: 'Treating the completion certificate as a primary screen rather than an export afterthought made compliance documentation feel native to the workflow, not bolted on.' },
      ],
      challenges: [
        { title: 'System Boundary Ambiguity', description: 'The VR session is owned by a third-party headset OS. Designing clear handoff and re-entry states without implying CLONOS controlled the VR environment required careful copy and UX framing.' },
        { title: 'Compliance as a UX Requirement', description: 'Industrial training records are regulatory artefacts. Treating certificate generation as a UX requirement from day one — not a post-design checkbox — required early alignment with safety officers.' },
        { title: 'Role Separation Without Two Systems', description: 'The dashboard is trainer-only, but the broader platform has a trainee view. Maintaining clear role separation without building two design systems required thoughtful component reuse and access scoping.' },
      ],
      differently: [
        'Would have involved safety officers in early research rather than late validation — compliance requirements shaped the certificate design more than anticipated',
        'Would have explored an embedded live feed or screen-share from the VR headset to give trainers richer session visibility without breaking the handoff model',
        'Would have designed a trainer onboarding flow for first-time dashboard users — the platform assumed familiarity that new trainers often did not have',
      ],
    },
    ecosystem: {
      description: 'The VR trainer dashboard connects to the broader CLONOS training and operations ecosystem:',
      platforms: [
        { title: 'CLONOS Desktop', description: 'Asset data and maintenance records inform the scenarios trainers assign in VR', link: '/projects/clonos' },
        { title: 'CLONOS Tablet', description: 'VR trains operators on the same procedures they execute on tablet in the field', link: '/projects/clonos-tablet' },
        { title: 'Digital Twin', description: 'VR environments mirror the Digital Twin\'s virtual plant models for spatial consistency', link: '/projects/clonos-digital-twin' },
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
    prototypeUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/MTfbILa2tMwsjGsyMAWgBs/Portfolio-Prototype?node-id=13-8028%26scaling=contain%26content-scaling=fixed%26starting-point-node-id=13%3A8028',
    meta: {
      role: 'Product Designer / UI/UX Designer',
      duration: '12 months',
      platform: 'Web + Desktop',
      team: 'Cross-functional: Engineering, Product, Data Team, Business',
      tools: ['Figma', 'Miro', 'Google Sheets'],
    },
    myRole: {
      description:
        'I led the UX design for the Digital Twin platform, translating complex real-time engineering data into an intuitive visual interface. I worked alongside the data team and engineers to ensure every design decision supported real operational workflows and remote monitoring needs.',
      responsibilities: [
        'UX Research',
        'Information Architecture',
        'Data Visualisation Design',
        'Interaction Design',
        'Visual Design',
        'Developer Handoff',
      ],
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
        title: 'Plant Manager',
        image: '/images/projects/Plant Manager.png',
        traits: [
          'Oversees all logging and maintenance tasks',
          'Tracks asset productivity and health remotely',
          'Needs centralised visibility across locations',
          'Accesses historical records for trend analysis',
        ],
      },
      {
        title: 'Digital Twin Operator',
        image: '/images/projects/Digital Twin Operator Image.png',
        traits: [
          'Takes virtual walkthrough of the plant',
          'Monitors assets and alerts remotely',
          'Manages multiple facilities from one location',
          'Assigns field operators when physical intervention is needed',
        ],
      },
    ],
    designProcess: {
      iaImage: '/images/projects/CLONOS - DT.png',
      ia: [
        'Dashboard — Plant Overview, Active Alerts, Asset Health Summary',
        '3D Plant View — Asset Walkthrough, Status Indicators, Layer Controls',
        'Alert Management — Real-time Alerts, Severity Triage, Assignment',
        'Simulation — DWSIM Integration, Process Optimisation, What-if Scenarios',
        'Work Orders — Remote Assignment, Field Operator Coordination, Status Tracking',
      ],
      wireframes: [
        {
          label: 'Digital Twin',
          wireframeImage: '/images/projects/DT-Wireframe.png',
          finalImage: '/images/projects/DT-Final.png',
        },
      ],
      iterationSlider: {
        label: 'Design Iteration — V1 to V4',
        beforeImage: '/images/projects/DT V-1.png',
        afterImage: '/images/projects/DT V-4.png',
        beforeLabel: 'V1 — Previous Version',
        afterLabel: 'V4 — Redesigned',
      },
    },
    features: [
      {
        title: 'Real-Time Alert Management',
        problem: 'Engineers received delayed alerts — by the time they were notified through the sensor chain, the issue window had already passed, making effective response impossible.',
        solution: 'Replaced the sensor-based delayed alert chain with a real-time, seconds-based system. Alerts appear in the Digital Twin the moment they are triggered, with full context and severity triage.',
        impact: '73% improvement in alert response time, instant notification for critical issues, prevented escalation of problems due to late awareness.',
        image: '/images/projects/DT.gif',
      },
      {
        title: 'Immersive 3D Plant Monitoring',
        problem: 'Engineers had to physically visit the plant to inspect assets and verify activity, while asset status was scattered across disconnected systems with no unified spatial view.',
        solution: 'A fully immersive 3D digital twin environment where asset health is visible in real time — running (green), breakdown (red), standby (yellow) — directly within the spatial plant context. Clean icon-based sidebar and flexible 2D/3D controls enable complete exploration without visual clutter.',
        impact: '60% of issues resolved remotely without site visits, instant plant-wide asset health visibility, and eliminated the need to cross-reference multiple monitoring systems.',
        image: '/images/projects/DT Immersive.gif',
      },
      {
        title: 'Integrated DWSIM Simulation',
        problem: 'Engineers used external DWSIM tools to simulate process changes, then had to return to the monitoring platform to test results — fragmented and time-consuming.',
        solution: 'Integrated DWSIM simulation engine directly into the Digital Twin platform, allowing engineers to simulate efficiency improvements, output optimisation, and process modifications within a single unified interface.',
        impact: 'Eliminated tool-switching entirely, streamlined simulation workflow, enabled faster testing of process improvements, reduced time from hypothesis to implementation.',
        image: '/images/projects/DW-Sim.gif',
      },
      {
        title: 'Minimal Spatial UI Design',
        problem: 'Traditional industrial interfaces overwhelmed users with dense information displays that obscured the plant view and created cognitive overload during high-pressure monitoring.',
        solution: 'Minimal, unobtrusive UI with a clean icon-based left sidebar, bottom view controls (2D/3D toggle, layers, compare, rotate), and contextual asset cards that appear only when needed — keeping the 3D environment always in focus.',
        impact: 'Maintained full focus on the spatial plant environment, reduced visual clutter, enabled intuitive navigation for engineers monitoring complex multi-asset facilities.',
        image: '/images/projects/Minimal DT.gif',
      },
    ],
    results: {
      adoption: [
        { value: '73%', label: 'Improvement in alert response time' },
        { value: '60%', label: 'Of issues resolved remotely without site visits' },
        { value: '0', label: 'Tool switching between monitoring and simulation' },
        { value: 'Live', label: 'Asset status visibility across entire facility' },
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
