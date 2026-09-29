import { Career } from '../types';

export const CAREER_CATEGORIES = [
  'All',
  'Technology',
  'AI & Data',
  'Cybersecurity',
  'Engineering',
  'Healthcare & Medicine',
  'Science & Research',
  'Business & Management',
  'Finance & Economics',
  'Marketing & Sales',
  'Design & Creative',
  'Media & Communication',
  'Law & Public Service',
  'Education & Pedagogy',
  'Architecture & Built Environment',
  'Agriculture & Environment',
  'Hospitality & Tourism',
  'Aviation & Transportation',
  'Sports & Fitness',
  'Social & Community',
  'Skilled Trades',
] as const;

export const CAREERS_DATABASE: Career[] = [
  // 1. TECHNOLOGY - SOFTWARE DEVELOPER
  {
    id: 'software-developer',
    title: 'Software Developer',
    category: 'Technology',
    subcategory: 'Software Engineering',
    industries: ['Technology', 'Finance', 'Healthcare', 'E-Commerce'],
    occupationCode: '15-1252.00',
    description: 'Designs, develops, tests, and maintains scalable software applications, enterprise systems, and client-facing digital platforms.',
    workEnvironment: 'Agile tech teams, corporate office, or remote digital environments with continuous code collaboration.',
    difficulty: 'Moderate',
    typicalDurationMonths: 6,
    requiredSkills: [
      { name: 'Java', importance: 5, minProficiency: 'Intermediate', category: 'Programming' },
      { name: 'Python', importance: 4, minProficiency: 'Intermediate', category: 'Programming' },
      { name: 'REST APIs', importance: 5, minProficiency: 'Intermediate', category: 'Web' },
      { name: 'PostgreSQL', importance: 4, minProficiency: 'Intermediate', category: 'Database' },
      { name: 'Git', importance: 4, minProficiency: 'Intermediate', category: 'DevOps' },
      { name: 'Data Structures & Algorithms', importance: 5, minProficiency: 'Intermediate', category: 'Computer Science' }
    ],
    matchingInterests: ['Technology', 'AI/ML', 'Engineering', 'Problem Solving'],
    matchingStrengths: ['Problem solving', 'Logical thinking', 'Attention to detail', 'Analytical thinking'],
    educationPathways: [
      'Bachelor’s in Computer Science, Information Technology, or Software Engineering',
      'Related STEM degree with software development portfolio and technical certifications'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 2, // building
      creativeVsStructured: 3,
      mathComfort: 3,
      peopleFacing: 2,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Junior Software Developer', 'Associate Backend Engineer', 'Application Development Trainee'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Junior Software Engineer', typicalExperience: '0-2 years', focus: 'Bug fixes, feature implementation, code reviews' },
      { stage: 'Junior', title: 'Software Engineer II', typicalExperience: '2-4 years', focus: 'Module ownership, API design, testing automation' },
      { stage: 'Mid Level', title: 'Senior Software Engineer', typicalExperience: '4-7 years', focus: 'Architecture, performance tuning, mentorship' },
      { stage: 'Senior', title: 'Staff / Principal Engineer', typicalExperience: '7-10+ years', focus: 'Cross-team technical vision and platform scalability' },
      { stage: 'Lead / Specialist', title: 'Director of Engineering / VP Tech', typicalExperience: '10+ years', focus: 'Engineering strategy, organizational architecture' }
    ],
    salaryRange: { entry: '$65,000', median: '$105,000', senior: '$155,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'sd-1',
        phase: 1,
        phaseTitle: 'Foundational Programming & Tooling',
        weekRange: 'Weeks 1–4',
        title: 'Core Object-Oriented Programming & Version Control',
        description: 'Master language syntax, OOP principles, data structures, and standard Git workflow.',
        keySkills: ['Java', 'Git', 'Data Structures & Algorithms'],
        projectMilestone: 'Build a modular CLI-based inventory management application with unit tests.'
      },
      {
        id: 'sd-2',
        phase: 2,
        phaseTitle: 'Web Frameworks & Database Engineering',
        weekRange: 'Weeks 5–8',
        title: 'Backend REST API & Relational Database Integration',
        description: 'Implement secure RESTful services, database connections, migrations, and query optimization.',
        keySkills: ['REST APIs', 'PostgreSQL', 'Spring Boot / Node.js'],
        projectMilestone: 'Develop a full multi-tier REST API with JWT authentication and relational storage.'
      },
      {
        id: 'sd-3',
        phase: 3,
        phaseTitle: 'Architecture, Testing & Deployment',
        weekRange: 'Weeks 9–12',
        title: 'Containerization, Microservices & CI/CD Pipelines',
        description: 'Package applications using Docker, configure automated tests, and deploy to cloud environments.',
        keySkills: ['Docker', 'Automated Testing', 'CI/CD'],
        projectMilestone: 'Deploy containerized web service with automated test suites on cloud provider.'
      },
      {
        id: 'sd-4',
        phase: 4,
        phaseTitle: 'Production Readiness & Portfolio',
        weekRange: 'Weeks 13–16',
        title: 'System Design, Security Audits & Technical Interviews',
        description: 'Prepare scalable architectural diagrams, review security practices, and solve algorithmic challenges.',
        keySkills: ['System Design', 'Code Optimization', 'Technical Communication'],
        projectMilestone: 'Publish comprehensive open-source portfolio project with documentation and benchmarks.'
      }
    ]
  },

  // 2. AI & DATA - DATA SCIENTIST
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'AI & Data',
    subcategory: 'Data Science & Machine Learning',
    industries: ['Technology', 'Finance', 'Healthcare', 'Research', 'Retail'],
    occupationCode: '15-2051.00',
    description: 'Extracts actionable insights from complex datasets using statistical modeling, machine learning algorithms, and predictive analytics.',
    workEnvironment: 'Data analytics hubs, research labs, tech companies, and corporate decision centers.',
    difficulty: 'Advanced',
    typicalDurationMonths: 8,
    requiredSkills: [
      { name: 'Python', importance: 5, minProficiency: 'Advanced', category: 'Programming' },
      { name: 'Statistics', importance: 5, minProficiency: 'Advanced', category: 'Data/AI' },
      { name: 'Machine Learning', importance: 5, minProficiency: 'Intermediate', category: 'Data/AI' },
      { name: 'PostgreSQL', importance: 4, minProficiency: 'Intermediate', category: 'Database' },
      { name: 'Data Visualization', importance: 4, minProficiency: 'Intermediate', category: 'Data/AI' },
      { name: 'Excel', importance: 3, minProficiency: 'Intermediate', category: 'Data/AI' }
    ],
    matchingInterests: ['AI/ML', 'Data', 'Mathematics', 'Research', 'Technology'],
    matchingStrengths: ['Analytical thinking', 'Problem solving', 'Logical thinking', 'Research'],
    educationPathways: [
      'Bachelor’s or Master’s in Data Science, Statistics, Mathematics, or Computer Science',
      'Applied quantitative degree with hands-on machine learning project portfolio'
    ],
    workPreferenceAlignment: {
      teamwork: 3,
      buildingVsAnalyzing: 5, // analyzing
      creativeVsStructured: 3,
      mathComfort: 5,
      peopleFacing: 3,
      practicalVsTheoretical: 3
    },
    entryLevelRoles: ['Junior Data Analyst', 'Associate Data Scientist', 'Quantitative Research Assistant'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Junior Data Scientist', typicalExperience: '0-2 years', focus: 'Data cleaning, exploratory data analysis, baseline models' },
      { stage: 'Junior', title: 'Data Scientist', typicalExperience: '2-4 years', focus: 'Feature engineering, algorithm tuning, business experimentation' },
      { stage: 'Mid Level', title: 'Senior Data Scientist', typicalExperience: '4-7 years', focus: 'Production ML pipelines, statistical rigor, business strategy' },
      { stage: 'Senior', title: 'Lead Data Scientist', typicalExperience: '7-10 years', focus: 'Algorithmic governance, research direction, cross-functional leadership' },
      { stage: 'Lead / Specialist', title: 'Head of Data Science / Chief Data Officer', typicalExperience: '10+ years', focus: 'Enterprise AI strategy, data monetization' }
    ],
    salaryRange: { entry: '$72,000', median: '$118,000', senior: '$165,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'ds-1',
        phase: 1,
        phaseTitle: 'Python, Math & Exploratory Data Analysis',
        weekRange: 'Weeks 1–4',
        title: 'Probability, Linear Algebra & Pandas Mastery',
        description: 'Understand core statistical distributions, matrix operations, and tabular data manipulation.',
        keySkills: ['Python', 'Statistics', 'Pandas / NumPy'],
        projectMilestone: 'Perform thorough exploratory data analysis on a real-world multi-source public dataset.'
      },
      {
        id: 'ds-2',
        phase: 2,
        phaseTitle: 'Supervised & Unsupervised Machine Learning',
        weekRange: 'Weeks 5–8',
        title: 'Regression, Classification & Clustering Models',
        description: 'Train, evaluate, and tune machine learning models with scikit-learn, avoiding data leakage.',
        keySkills: ['Machine Learning', 'Model Evaluation', 'Feature Engineering'],
        projectMilestone: 'Build an end-to-end customer churn or clinical risk prediction model with ROC-AUC tuning.'
      },
      {
        id: 'ds-3',
        phase: 3,
        phaseTitle: 'Advanced Modeling & Deep Learning Primer',
        weekRange: 'Weeks 9–12',
        title: 'Neural Networks, NLP & Time-Series Forecasting',
        description: 'Explore neural network architectures, text embeddings, and sequential forecasting models.',
        keySkills: ['Deep Learning', 'NLP', 'Time Series'],
        projectMilestone: 'Develop a sentiment analysis pipeline or multi-step financial time series model.'
      },
      {
        id: 'ds-4',
        phase: 4,
        phaseTitle: 'Model Deployment & Business Presentation',
        weekRange: 'Weeks 13–16',
        title: 'MLOps, API Serving & Executive Stakeholder Storytelling',
        description: 'Package models as microservices with FastAPI/Flask and create executive visualization dashboards.',
        keySkills: ['Model Deployment', 'Data Visualization', 'Business Communication'],
        projectMilestone: 'Deploy live interactive machine learning application with monitored inference API.'
      }
    ]
  },

  // 3. CYBERSECURITY - CYBERSECURITY ANALYST
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    category: 'Cybersecurity',
    subcategory: 'Information Security & SOC Operations',
    industries: ['Defense', 'Banking', 'Healthcare', 'Government', 'Technology'],
    occupationCode: '15-1212.00',
    description: 'Protects enterprise networks, systems, and data assets from cyber threats, monitoring security alerts, and investigating breaches.',
    workEnvironment: 'Security Operations Centers (SOC), enterprise IT departments, and government defense agencies.',
    difficulty: 'Moderate',
    typicalDurationMonths: 6,
    requiredSkills: [
      { name: 'Network Security', importance: 5, minProficiency: 'Intermediate', category: 'Security' },
      { name: 'Incident Response', importance: 5, minProficiency: 'Intermediate', category: 'Security' },
      { name: 'Linux', importance: 4, minProficiency: 'Intermediate', category: 'Systems' },
      { name: 'Python', importance: 3, minProficiency: 'Intermediate', category: 'Scripting' },
      { name: 'SIEM Tools', importance: 4, minProficiency: 'Intermediate', category: 'Security' },
      { name: 'Ethical Hacking', importance: 3, minProficiency: 'Beginner', category: 'Security' }
    ],
    matchingInterests: ['Cybersecurity', 'Technology', 'Law', 'Research'],
    matchingStrengths: ['Attention to detail', 'Analytical thinking', 'Problem solving', 'Decision making'],
    educationPathways: [
      'Bachelor’s in Cybersecurity, Computer Networks, or Information Assurance',
      'Industry certifications (CompTIA Security+, CEH, CISSP, CySA+) alongside practical lab experience'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 4,
      creativeVsStructured: 1, // highly structured/procedural
      mathComfort: 3,
      peopleFacing: 2,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Junior SOC Analyst', 'Information Security Associate', 'Vulnerability Assessment Trainee'],
    careerProgression: [
      { stage: 'Entry Level', title: 'SOC Analyst Tier 1', typicalExperience: '0-2 years', focus: 'Triage alerts, initial incident containment, log analysis' },
      { stage: 'Junior', title: 'Security Analyst Tier 2', typicalExperience: '2-4 years', focus: 'Deep incident investigation, threat mitigation, SIEM tuning' },
      { stage: 'Mid Level', title: 'Senior Incident Responder / Threat Hunter', typicalExperience: '4-7 years', focus: 'Proactive hunting, malware analysis, forensic recovery' },
      { stage: 'Senior', title: 'Security Architect / Lead Engineer', typicalExperience: '7-10 years', focus: 'Zero Trust architecture, defense-in-depth infrastructure' },
      { stage: 'Lead / Specialist', title: 'Chief Information Security Officer (CISO)', typicalExperience: '10+ years', focus: 'Enterprise risk management, regulatory compliance' }
    ],
    salaryRange: { entry: '$60,000', median: '$98,000', senior: '$148,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'sec-1',
        phase: 1,
        phaseTitle: 'Networking Fundamentals & Operating Systems',
        weekRange: 'Weeks 1–4',
        title: 'TCP/IP Architecture, OSI Model & Linux Hardening',
        description: 'Understand packet flows, subnetting, network protocols, and core Linux administration.',
        keySkills: ['Networking', 'Linux', 'Security Fundamentals'],
        projectMilestone: 'Configure a hardened Linux server and perform comprehensive network traffic packet analysis.'
      },
      {
        id: 'sec-2',
        phase: 2,
        phaseTitle: 'Defensive Security & SIEM Operations',
        weekRange: 'Weeks 5–8',
        title: 'Log Ingestion, Correlation Rules & SOC Playbooks',
        description: 'Set up Splunk/Wazuh/ELK SIEM, ingest authentication logs, and draft containment playbooks.',
        keySkills: ['SIEM Tools', 'Log Analysis', 'Incident Response'],
        projectMilestone: 'Simulate brute-force attack in lab and verify automated SIEM alert and containment playbook.'
      },
      {
        id: 'sec-3',
        phase: 3,
        phaseTitle: 'Vulnerability Assessment & Threat Intelligence',
        weekRange: 'Weeks 9–12',
        title: 'Vulnerability Scanning, CVE Assessment & Remediation',
        description: 'Run automated vulnerability scans, assess CVSS scores, and advise system owners on patches.',
        keySkills: ['Vulnerability Assessment', 'Threat Intelligence', 'Remediation'],
        projectMilestone: 'Perform full vulnerability scan report with prioritized risk matrix and remediation steps.'
      },
      {
        id: 'sec-4',
        phase: 4,
        phaseTitle: 'Certification Prep & SOC Simulation Labs',
        weekRange: 'Weeks 13–16',
        title: 'CompTIA Security+ Exam Prep & Real-World Lab Scenarios',
        description: 'Complete hands-on incident response scenarios and prepare professional security documentation.',
        keySkills: ['Security Policy', 'Forensic Reporting', 'Security+ Preparation'],
        projectMilestone: 'Compile an incident response audit report following NIST cybersecurity framework.'
      }
    ]
  },

  // 4. ENGINEERING - MECHANICAL ENGINEER
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    category: 'Engineering',
    subcategory: 'Mechanical & Systems Engineering',
    industries: ['Manufacturing', 'Automotive', 'Aerospace', 'Energy', 'Robotics'],
    occupationCode: '17-2141.00',
    description: 'Designs, analyzes, develops, and tests mechanical systems, thermal equipment, and manufacturing mechanisms.',
    workEnvironment: 'Engineering design offices, prototyping workshops, industrial testing labs, and manufacturing plants.',
    difficulty: 'Advanced',
    typicalDurationMonths: 12,
    requiredSkills: [
      { name: 'CAD Modeling (SolidWorks/AutoCAD)', importance: 5, minProficiency: 'Advanced', category: 'Engineering' },
      { name: 'Thermodynamics & Heat Transfer', importance: 4, minProficiency: 'Intermediate', category: 'Science' },
      { name: 'Finite Element Analysis (FEA)', importance: 4, minProficiency: 'Intermediate', category: 'Engineering' },
      { name: 'Materials Science', importance: 4, minProficiency: 'Intermediate', category: 'Engineering' },
      { name: 'Manufacturing Processes', importance: 4, minProficiency: 'Intermediate', category: 'Engineering' }
    ],
    matchingInterests: ['Engineering', 'Technology', 'Science', 'Skilled Trades'],
    matchingStrengths: ['Problem solving', 'Logical thinking', 'Attention to detail', 'Analytical thinking'],
    educationPathways: [
      'Bachelor of Science in Mechanical Engineering (ABET-accredited preferred)',
      'Professional Engineer (PE) or Fundamentals of Engineering (FE) licensure pathway'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 3,
      creativeVsStructured: 2,
      mathComfort: 5,
      peopleFacing: 2,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Junior Mechanical Designer', 'Manufacturing Engineering Associate', 'Test & Validation Trainee'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Associate Mechanical Engineer', typicalExperience: '0-2 years', focus: 'CAD drafting, tolerancing, lab testing assistance' },
      { stage: 'Junior', title: 'Mechanical Engineer', typicalExperience: '2-5 years', focus: 'Sub-system design, vendor qualification, structural simulations' },
      { stage: 'Mid Level', title: 'Senior Mechanical Systems Engineer', typicalExperience: '5-8 years', focus: 'Lead mechanical architecture, cost optimization, reliability' },
      { stage: 'Senior', title: 'Principal Mechanical Architect', typicalExperience: '8-12 years', focus: 'Next-generation product platforms and strategic IP development' },
      { stage: 'Lead / Specialist', title: 'VP of Hardware Engineering', typicalExperience: '12+ years', focus: 'Global hardware engineering direction and manufacturing scale' }
    ],
    salaryRange: { entry: '$68,000', median: '$95,000', senior: '$140,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'me-1',
        phase: 1,
        phaseTitle: 'Engineering Mechanics & 3D Parametric CAD',
        weekRange: 'Weeks 1–4',
        title: 'Statics, Dynamics & Parametric Part Modeling',
        description: 'Understand force equilibrium, stress-strain curves, and build dimensionally constrained 3D CAD parts.',
        keySkills: ['CAD Modeling', 'Statics', 'Engineering Drawings'],
        projectMilestone: 'Design a multi-component gearbox housing with standard tolerancing (GD&T).'
      },
      {
        id: 'me-2',
        phase: 2,
        phaseTitle: 'Material Selection & Structural Simulation',
        weekRange: 'Weeks 5–8',
        title: 'FEA Stress Analysis & Thermal Dissipation',
        description: 'Simulate structural loading, factor of safety, and thermal conduction using simulation packages.',
        keySkills: ['FEA Simulation', 'Materials Science', 'Thermal Analysis'],
        projectMilestone: 'Run FEA structural optimization on a load-bearing bracket to minimize mass while preserving factor of safety.'
      },
      {
        id: 'me-3',
        phase: 3,
        phaseTitle: 'Design for Manufacturing & Prototyping',
        weekRange: 'Weeks 9–12',
        title: 'DFM/DFA Principles, CNC Machining & 3D Prototyping',
        description: 'Optimize parts for injection molding, CNC milling, sheet metal bending, and assembly constraints.',
        keySkills: ['DFM / DFA', 'Prototyping', 'Assembly Modeling'],
        projectMilestone: 'Prototype physical assembly with laser cutting/3D printing and document bill of materials (BOM).'
      },
      {
        id: 'me-4',
        phase: 4,
        phaseTitle: 'Validation Testing & Engineering Portfolio',
        weekRange: 'Weeks 13–16',
        title: 'Physical Testing, Failure Analysis & FE Exam Readiness',
        description: 'Conduct strain gauge experiments, fatigue cycle calculations, and compile professional engineering portfolio.',
        keySkills: ['Validation Testing', 'Failure Modes Analysis', 'Technical Documentation'],
        projectMilestone: 'Produce complete engineering package with CAD models, simulation reports, and fabrication drawings.'
      }
    ]
  },

  // 5. HEALTHCARE - REGISTERED NURSE / HEALTHCARE SPECIALIST
  {
    id: 'registered-nurse',
    title: 'Registered Nurse',
    category: 'Healthcare & Medicine',
    subcategory: 'Clinical Patient Care',
    industries: ['Healthcare', 'Hospitals', 'Community Clinics', 'Public Health', 'Research'],
    occupationCode: '29-1141.00',
    description: 'Provides critical direct patient care, administers medications, monitors vital signs, and collaborates with physicians to optimize patient recovery.',
    workEnvironment: 'Hospital wards, intensive care units, outpatient clinics, surgical suites, and emergency rooms.',
    difficulty: 'Moderate',
    typicalDurationMonths: 12,
    requiredSkills: [
      { name: 'Patient Assessment & Triage', importance: 5, minProficiency: 'Advanced', category: 'Clinical Care' },
      { name: 'Pharmacology Administration', importance: 5, minProficiency: 'Advanced', category: 'Medical' },
      { name: 'Anatomy & Physiology', importance: 5, minProficiency: 'Advanced', category: 'Medical Science' },
      { name: 'Medical Emergency Response', importance: 4, minProficiency: 'Intermediate', category: 'Clinical Care' },
      { name: 'Electronic Health Records (EHR)', importance: 4, minProficiency: 'Intermediate', category: 'Healthcare Tech' }
    ],
    matchingInterests: ['Healthcare', 'Science', 'Social Impact', 'Public Service'],
    matchingStrengths: ['Empathy', 'Communication', 'Attention to detail', 'Decision making', 'Adaptability'],
    educationPathways: [
      'Bachelor of Science in Nursing (BSN) or Associate Degree in Nursing (ADN)',
      'Passing NCLEX-RN national licensing examination and state board certification'
    ],
    workPreferenceAlignment: {
      teamwork: 5,
      buildingVsAnalyzing: 3,
      creativeVsStructured: 1, // highly regulated clinical protocols
      mathComfort: 3,
      peopleFacing: 5, // constant patient and family interaction
      practicalVsTheoretical: 1 // hands-on bedside care
    },
    entryLevelRoles: ['Staff Nurse', 'Clinical Bedside Nurse', 'Outpatient Care Nurse'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Staff Registered Nurse', typicalExperience: '0-2 years', focus: 'Bedside care, medication titration, patient education' },
      { stage: 'Junior', title: 'Charge Nurse', typicalExperience: '2-4 years', focus: 'Shift coordination, acute patient triage, mentoring newer nurses' },
      { stage: 'Mid Level', title: 'Nurse Specialist / Nurse Educator', typicalExperience: '4-7 years', focus: 'Specialized clinical procedures, quality improvement, training' },
      { stage: 'Senior', title: 'Nurse Practitioner (NP) / Clinical Nurse Specialist', typicalExperience: '6-10 years (with MSN/DNP)', focus: 'Autonomous diagnosis, treatment plans, prescriptions' },
      { stage: 'Lead / Specialist', title: 'Chief Nursing Officer (CNO)', typicalExperience: '10+ years', focus: 'Hospital clinical governance, patient safety policies' }
    ],
    salaryRange: { entry: '$58,000', median: '$82,000', senior: '$120,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'rn-1',
        phase: 1,
        phaseTitle: 'Human Biology & Foundational Health Sciences',
        weekRange: 'Weeks 1–4',
        title: 'Anatomy, Physiology & Pathophysiology Principles',
        description: 'Understand human organ systems, cellular mechanisms, and disease pathology.',
        keySkills: ['Anatomy & Physiology', 'Medical Terminology', 'Pathology Basics'],
        projectMilestone: 'Case study analysis mapping cardiovascular disease symptoms to physiological root causes.'
      },
      {
        id: 'rn-2',
        phase: 2,
        phaseTitle: 'Pharmacology, Dosages & Clinical Protocols',
        weekRange: 'Weeks 5–8',
        title: 'Drug Classifications, Safe Dose Calculations & Infection Control',
        description: 'Master medication administration safety (the 5 rights), sterile techniques, and aseptic procedures.',
        keySkills: ['Pharmacology', 'Dosage Calculations', 'Aseptic Technique'],
        projectMilestone: 'Complete 100 accurate clinical dosage scenario simulations without error.'
      },
      {
        id: 'rn-3',
        phase: 3,
        phaseTitle: 'Clinical Assessment & Emergency Simulation',
        weekRange: 'Weeks 9–12',
        title: 'Head-to-Toe Physical Assessment & BLS / ACLS Readiness',
        description: 'Practice vital sign interpretation, lung sound auscultation, and rapid triage responses.',
        keySkills: ['Patient Assessment', 'Basic Life Support (BLS)', 'EHR Documentation'],
        projectMilestone: 'Document comprehensive patient EHR charts across three acute simulated clinical encounters.'
      },
      {
        id: 'rn-4',
        phase: 4,
        phaseTitle: 'Licensing Examination (NCLEX) & Clinical Residency',
        weekRange: 'Weeks 13–16',
        title: 'NCLEX Comprehensive Practice & Transition to Practice',
        description: 'Complete high-yield adaptive questions, clinical reasoning scenarios, and ethical decision-making.',
        keySkills: ['Clinical Judgment', 'Ethics in Care', 'NCLEX Mastery'],
        projectMilestone: 'Achieve 85%+ on full-length NCLEX diagnostic simulation exam.'
      }
    ]
  },

  // 6. HEALTHCARE - CLINICAL PSYCHOLOGIST
  {
    id: 'clinical-psychologist',
    title: 'Clinical Psychologist',
    category: 'Healthcare & Medicine',
    subcategory: 'Mental Health & Behavioral Sciences',
    industries: ['Healthcare', 'Private Practice', 'Academic Institutions', 'Mental Health Clinics'],
    occupationCode: '19-3031.00',
    description: 'Diagnoses and treats mental health disorders, conducts psychometric assessments, and provides evidence-based psychotherapy.',
    workEnvironment: 'Consultation offices, psychiatric hospital clinics, universities, and telehealth platforms.',
    difficulty: 'Advanced',
    typicalDurationMonths: 24,
    requiredSkills: [
      { name: 'Psychological Assessment & Diagnosis', importance: 5, minProficiency: 'Advanced', category: 'Psychology' },
      { name: 'Cognitive Behavioral Therapy (CBT)', importance: 5, minProficiency: 'Advanced', category: 'Therapy' },
      { name: 'Active Listening & Counseling', importance: 5, minProficiency: 'Advanced', category: 'Interpersonal' },
      { name: 'Research & Statistical Methods', importance: 4, minProficiency: 'Intermediate', category: 'Research' },
      { name: 'Crisis Intervention', importance: 4, minProficiency: 'Intermediate', category: 'Clinical Care' }
    ],
    matchingInterests: ['Healthcare', 'Science', 'Social Impact', 'Research'],
    matchingStrengths: ['Empathy', 'Communication', 'Analytical thinking', 'Problem solving', 'Decision making'],
    educationPathways: [
      'Doctorate in Clinical Psychology (Psy.D. or Ph.D.)',
      'Master’s in Counseling Psychology or Clinical Social Work (LMFT / LPC / LCSW)'
    ],
    workPreferenceAlignment: {
      teamwork: 2,
      buildingVsAnalyzing: 5,
      creativeVsStructured: 3,
      mathComfort: 3,
      peopleFacing: 5,
      practicalVsTheoretical: 3
    },
    entryLevelRoles: ['Mental Health Counselor Associate', 'Psychology Intern', 'Behavioral Health Case Worker'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Post-Doctoral Psychology Resident', typicalExperience: '0-2 years', focus: 'Supervised clinical hours, psychometric battery evaluations' },
      { stage: 'Junior', title: 'Licensed Clinical Psychologist', typicalExperience: '2-5 years', focus: 'Independent therapy caseload, specialized diagnostic clinics' },
      { stage: 'Mid Level', title: 'Senior Psychologist / Clinical Supervisor', typicalExperience: '5-8 years', focus: 'Supervising trainees, complex multi-morbidity consultations' },
      { stage: 'Senior', title: 'Clinical Director / Private Practice Owner', typicalExperience: '8-12 years', focus: 'Practice leadership, specialized treatment protocols' },
      { stage: 'Lead / Specialist', title: 'Department Chair / Research Fellow', typicalExperience: '12+ years', focus: 'National mental health policy, evidence-based research trials' }
    ],
    salaryRange: { entry: '$65,000', median: '$98,000', senior: '$150,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'psy-1',
        phase: 1,
        phaseTitle: 'Psychological Theories & Psychopathology',
        weekRange: 'Weeks 1–4',
        title: 'DSM-5 Diagnostic Criteria & Developmental Models',
        description: 'Study neurotic, affective, and personality disorders alongside biopsychosocial frameworks.',
        keySkills: ['Psychopathology', 'DSM-5', 'Developmental Psychology'],
        projectMilestone: 'Differential diagnosis formulation paper on complex case presentation.'
      },
      {
        id: 'psy-2',
        phase: 2,
        phaseTitle: 'Therapeutic Modalities & CBT Interventions',
        weekRange: 'Weeks 5–8',
        title: 'Cognitive Restructuring & Behavioral Activation',
        description: 'Learn evidence-based interventions for anxiety, depression, and trauma.',
        keySkills: ['CBT Techniques', 'Behavioral Modification', 'Therapeutic Alliance'],
        projectMilestone: 'Develop a 12-week cognitive behavioral treatment plan for major depressive disorder.'
      },
      {
        id: 'psy-3',
        phase: 3,
        phaseTitle: 'Psychometric Testing & Evaluation Batteries',
        weekRange: 'Weeks 9–12',
        title: 'Cognitive, Personality & Neuropsychological Assessment',
        description: 'Administer and interpret standardized instruments (WAIS, MMPI, BDI).',
        keySkills: ['Psychometric Testing', 'Test Scoring', 'Diagnostic Reporting'],
        projectMilestone: 'Score and interpret a mock psychometric battery and write comprehensive clinical evaluation.'
      },
      {
        id: 'psy-4',
        phase: 4,
        phaseTitle: 'Clinical Ethics, Jurisprudence & Licensure',
        weekRange: 'Weeks 13–16',
        title: 'Confidentiality, Duty to Warn & Licensure Examination (EPPP)',
        description: 'Master legal and ethical codes of conduct and clinical jurisprudence requirements.',
        keySkills: ['Clinical Ethics', 'Crisis Protocols', 'Licensure Preparation'],
        projectMilestone: 'Mock crisis intervention role-play with emergency safety plan documentation.'
      }
    ]
  },

  // 7. FINANCE - FINANCIAL ANALYST
  {
    id: 'financial-analyst',
    title: 'Financial Analyst',
    category: 'Finance & Economics',
    subcategory: 'Corporate Finance & Investment',
    industries: ['Investment Banking', 'Corporate Finance', 'Asset Management', 'Consulting', 'Fintech'],
    occupationCode: '13-2051.00',
    description: 'Evaluates financial data, builds forecast models, and advises leadership on investments, capital allocation, and budgetary performance.',
    workEnvironment: 'Financial institutions, corporate headquarters, consulting firms, and investment funds.',
    difficulty: 'Moderate',
    typicalDurationMonths: 6,
    requiredSkills: [
      { name: 'Financial Modeling', importance: 5, minProficiency: 'Advanced', category: 'Finance' },
      { name: 'Excel', importance: 5, minProficiency: 'Advanced', category: 'Data' },
      { name: 'Accounting Principles (GAAP/IFRS)', importance: 4, minProficiency: 'Intermediate', category: 'Finance' },
      { name: 'Data Visualization (Power BI/Tableau)', importance: 4, minProficiency: 'Intermediate', category: 'Data' },
      { name: 'Valuation Methodologies (DCF, Comps)', importance: 4, minProficiency: 'Intermediate', category: 'Finance' }
    ],
    matchingInterests: ['Finance', 'Business', 'Data', 'Mathematics'],
    matchingStrengths: ['Analytical thinking', 'Problem solving', 'Attention to detail', 'Decision making'],
    educationPathways: [
      'Bachelor’s in Finance, Accounting, Economics, or Business Administration',
      'Chartered Financial Analyst (CFA) or Financial Modeling and Valuation Analyst (FMVA) certification'
    ],
    workPreferenceAlignment: {
      teamwork: 3,
      buildingVsAnalyzing: 5,
      creativeVsStructured: 2,
      mathComfort: 5,
      peopleFacing: 3,
      practicalVsTheoretical: 3
    },
    entryLevelRoles: ['Junior Financial Analyst', 'Budget Analyst Trainee', 'Investment Research Associate'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Financial Analyst', typicalExperience: '0-2 years', focus: 'Financial statement variance analysis, KPI tracking, reporting' },
      { stage: 'Junior', title: 'Senior Financial Analyst', typicalExperience: '2-5 years', focus: 'Strategic 3-statement forecasting, capital budgeting, M&A due diligence' },
      { stage: 'Mid Level', title: 'Finance Manager / FP&A Lead', typicalExperience: '5-8 years', focus: 'Departmental budget ownership, board presentations, strategic planning' },
      { stage: 'Senior', title: 'Director of Finance / VP Finance', typicalExperience: '8-12 years', focus: 'Treasury, capital raising, investor relations' },
      { stage: 'Lead / Specialist', title: 'Chief Financial Officer (CFO)', typicalExperience: '12+ years', focus: 'Enterprise balance sheet strategy, fiscal stewardship, M&A exits' }
    ],
    salaryRange: { entry: '$65,000', median: '$95,000', senior: '$150,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'fa-1',
        phase: 1,
        phaseTitle: 'Financial Accounting & Advanced Spreadsheet Modeling',
        weekRange: 'Weeks 1–4',
        title: '3-Statement Financial Modeling & Dynamic Excel Formulas',
        description: 'Link Income Statement, Balance Sheet, and Cash Flow statement with zero hardcoding.',
        keySkills: ['Financial Accounting', 'Advanced Excel', 'Statement Linking'],
        projectMilestone: 'Build a fully dynamic 3-statement financial model for a publicly listed company.'
      },
      {
        id: 'fa-2',
        phase: 2,
        phaseTitle: 'Corporate Valuation & Scenario Analysis',
        weekRange: 'Weeks 5–8',
        title: 'Discounted Cash Flow (DCF) & Comparable Company Analysis',
        description: 'Calculate Weighted Average Cost of Capital (WACC), terminal value, and sensitivity tables.',
        keySkills: ['Valuation Methods', 'WACC Calculation', 'Sensitivity Analysis'],
        projectMilestone: 'Produce a comprehensive equity valuation report with DCF model and peer multiples.'
      },
      {
        id: 'fa-3',
        phase: 3,
        phaseTitle: 'Business Intelligence & Executive Dashboards',
        weekRange: 'Weeks 9–12',
        title: 'Power BI Financial Analytics & Variance Reporting',
        description: 'Connect operational databases to automated reporting dashboards showing revenue leakage and margins.',
        keySkills: ['Power BI', 'Variance Analysis', 'Executive Communication'],
        projectMilestone: 'Create an executive dashboard visualizing revenue, burn rate, and operational runway.'
      },
      {
        id: 'fa-4',
        phase: 4,
        phaseTitle: 'Strategic Capital Allocation & CFA Level 1 Readiness',
        weekRange: 'Weeks 13–16',
        title: 'Capital Budgeting, Net Present Value & Professional Pitch Deck',
        description: 'Evaluate ROI on major capital expenditure investments and deliver pitch deck to leadership.',
        keySkills: ['Capital Budgeting', 'CFA Concepts', 'Presentation Skills'],
        projectMilestone: 'Pitch an M&A or capital investment thesis backed by complete model and sensitivity bounds.'
      }
    ]
  },

  // 8. BUSINESS - PRODUCT MANAGER
  {
    id: 'product-manager',
    title: 'Product Manager',
    category: 'Business & Management',
    subcategory: 'Product Strategy & Innovation',
    industries: ['Technology', 'E-Commerce', 'SaaS', 'Healthcare', 'Fintech'],
    occupationCode: '11-1021.00',
    description: 'Guides product strategy, roadmaps, and feature execution at the intersection of business goals, technical feasibility, and user needs.',
    workEnvironment: 'Cross-functional agile product teams, executive boardrooms, and modern tech workspaces.',
    difficulty: 'Moderate',
    typicalDurationMonths: 6,
    requiredSkills: [
      { name: 'Product Strategy & Roadmapping', importance: 5, minProficiency: 'Advanced', category: 'Management' },
      { name: 'User Research & Discovery', importance: 4, minProficiency: 'Intermediate', category: 'Design/UX' },
      { name: 'Agile & Scrum Methodologies', importance: 5, minProficiency: 'Intermediate', category: 'Management' },
      { name: 'Data Analytics & Metric Definition (A/B Testing)', importance: 4, minProficiency: 'Intermediate', category: 'Data' },
      { name: 'Cross-Functional Stakeholder Management', importance: 5, minProficiency: 'Advanced', category: 'Leadership' }
    ],
    matchingInterests: ['Business', 'Technology', 'Design', 'Entrepreneurship'],
    matchingStrengths: ['Leadership', 'Communication', 'Problem solving', 'Decision making', 'Analytical thinking'],
    educationPathways: [
      'Bachelor’s in Business, Computer Science, Engineering, or Design',
      'MBA or certified Product Management credentials (e.g. Pragmatic Institute, Reforge)'
    ],
    workPreferenceAlignment: {
      teamwork: 5,
      buildingVsAnalyzing: 3,
      creativeVsStructured: 4,
      mathComfort: 3,
      peopleFacing: 5,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Associate Product Manager (APM)', 'Product Analyst', 'Junior Scrum Master'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Associate Product Manager', typicalExperience: '0-2 years', focus: 'User stories, sprint coordination, telemetry analysis' },
      { stage: 'Junior', title: 'Product Manager', typicalExperience: '2-4 years', focus: 'Feature domain ownership, roadmap prioritization, customer interviews' },
      { stage: 'Mid Level', title: 'Senior Product Manager', typicalExperience: '4-7 years', focus: 'Multi-squad strategy, product-market fit expansion, revenue impact' },
      { stage: 'Senior', title: 'Group / Principal Product Manager', typicalExperience: '7-10 years', focus: 'Product line portfolio, product organizational design' },
      { stage: 'Lead / Specialist', title: 'Chief Product Officer (CPO) / VP Product', typicalExperience: '10+ years', focus: 'Company product vision, market disruption strategy' }
    ],
    salaryRange: { entry: '$75,000', median: '$120,000', senior: '$175,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'pm-1',
        phase: 1,
        phaseTitle: 'Product Discovery & Customer Empathy',
        weekRange: 'Weeks 1–4',
        title: 'User Persona Mapping, Customer Interviews & Problem Statements',
        description: 'Conduct structured customer interviews to validate painful problem statements without jumping to solutions.',
        keySkills: ['User Discovery', 'Market Research', 'Problem Framing'],
        projectMilestone: 'Draft a Product Opportunity Assessment and conduct 5 customer problem interviews.'
      },
      {
        id: 'pm-2',
        phase: 2,
        phaseTitle: 'Product Roadmapping & PRD Authoring',
        weekRange: 'Weeks 5–8',
        title: 'Product Requirements Documents (PRD), User Stories & Acceptance Criteria',
        description: 'Translate ambiguous goals into crystal-clear engineering specifications with measurable KPIs.',
        keySkills: ['PRD Writing', 'Roadmap Prioritization', 'Feature Scoping'],
        projectMilestone: 'Write a comprehensive PRD for a new high-impact feature with success metrics and edge cases.'
      },
      {
        id: 'pm-3',
        phase: 3,
        phaseTitle: 'Agile Delivery & Analytics Instrumentation',
        weekRange: 'Weeks 9–12',
        title: 'Sprint Backlog Management, A/B Test Design & Funnel Optimization',
        description: 'Run sprint planning, define North Star metrics, and instrument product telemetry funnels.',
        keySkills: ['Agile / Scrum', 'A/B Testing', 'Product Analytics'],
        projectMilestone: 'Launch prototype feature experiment and evaluate user onboarding conversion funnel.'
      },
      {
        id: 'pm-4',
        phase: 4,
        phaseTitle: 'Go-To-Market (GTM) & Executive Strategy',
        weekRange: 'Weeks 13–16',
        title: 'Launch Strategy, Competitive Moats & Executive Product Review',
        description: 'Coordinate cross-functional marketing, sales, and support readiness for commercial launch.',
        keySkills: ['GTM Strategy', 'Stakeholder Alignment', 'Executive Presentation'],
        projectMilestone: 'Present complete Product Strategy Deck simulating executive committee signoff.'
      }
    ]
  },

  // 9. DESIGN - UI/UX PRODUCT DESIGNER
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Product Designer',
    category: 'Design & Creative',
    subcategory: 'Digital Product & Interaction Design',
    industries: ['Technology', 'Design Agencies', 'E-Commerce', 'Fintech', 'Media'],
    occupationCode: '27-1024.00',
    description: 'Creates intuitive, accessible, and aesthetically engaging digital experiences through user research, wireframing, and interactive design systems.',
    workEnvironment: 'Product design studios, tech startup workspaces, creative agencies, and remote collaborative teams.',
    difficulty: 'Moderate',
    typicalDurationMonths: 6,
    requiredSkills: [
      { name: 'Figma & Design Systems', importance: 5, minProficiency: 'Advanced', category: 'Design Tools' },
      { name: 'User Experience (UX) Research', importance: 5, minProficiency: 'Intermediate', category: 'UX' },
      { name: 'Interaction Design & Prototyping', importance: 4, minProficiency: 'Intermediate', category: 'Design' },
      { name: 'Information Architecture', importance: 4, minProficiency: 'Intermediate', category: 'UX' },
      { name: 'Accessibility (WCAG 2.2)', importance: 4, minProficiency: 'Intermediate', category: 'Standards' }
    ],
    matchingInterests: ['Design', 'Technology', 'Art', 'Research'],
    matchingStrengths: ['Creativity', 'Empathy', 'Attention to detail', 'Problem solving', 'Communication'],
    educationPathways: [
      'Bachelor’s in Interaction Design, Graphic Design, Human-Computer Interaction (HCI), or Arts',
      'Portfolio-based certification with demonstrated case studies showing end-to-end design thinking'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 2,
      creativeVsStructured: 5,
      mathComfort: 1,
      peopleFacing: 4,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Junior UI Designer', 'Associate UX Researcher', 'Junior Product Designer'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Junior Product Designer', typicalExperience: '0-2 years', focus: 'UI asset creation, design system maintenance, basic wireframes' },
      { stage: 'Junior', title: 'Product Designer', typicalExperience: '2-4 years', focus: 'End-to-end user flows, usability testing, component architecture' },
      { stage: 'Mid Level', title: 'Senior Product Designer', typicalExperience: '4-7 years', focus: 'Complex interaction design, multi-platform design systems, mentorship' },
      { stage: 'Senior', title: 'Staff Designer / Principal Designer', typicalExperience: '7-10 years', focus: 'Brand experience cohesion, design vision across multiple product suites' },
      { stage: 'Lead / Specialist', title: 'Head of Design / VP of Design', typicalExperience: '10+ years', focus: 'Design team leadership, company aesthetic brand culture' }
    ],
    salaryRange: { entry: '$58,000', median: '$92,000', senior: '$145,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'des-1',
        phase: 1,
        phaseTitle: 'Visual Design Foundations & Figma Tooling',
        weekRange: 'Weeks 1–4',
        title: 'Typography, Color Theory, Layout Grids & Figma Components',
        description: 'Master auto-layout, design tokens, responsive constraints, and visual hierarchy.',
        keySkills: ['Figma', 'Visual Hierarchy', 'Typography & Color'],
        projectMilestone: 'Build a modular 24-component design system with interactive component states.'
      },
      {
        id: 'des-2',
        phase: 2,
        phaseTitle: 'User Research & Wireframing Flows',
        weekRange: 'Weeks 5–8',
        title: 'Information Architecture, Journey Maps & Low-Fi Wireframing',
        description: 'Map user mental models, perform card sorting, and create structured user journey flows.',
        keySkills: ['UX Research', 'Information Architecture', 'Wireframing'],
        projectMilestone: 'Conduct usability audit on an existing application and draft improved low-fi user flow.'
      },
      {
        id: 'des-3',
        phase: 3,
        phaseTitle: 'Interactive Prototyping & Usability Testing',
        weekRange: 'Weeks 9–12',
        title: 'Micro-Interactions, High-Fi Clickable Prototypes & User Testing',
        description: 'Create realistic Figma smart animations and execute moderated user usability testing sessions.',
        keySkills: ['High-Fi Prototyping', 'Usability Testing', 'Interaction Design'],
        projectMilestone: 'Deliver interactive clickable prototype with synthesis notes from 5 user test recordings.'
      },
      {
        id: 'des-4',
        phase: 4,
        phaseTitle: 'Design System Handoff & Portfolio Case Studies',
        weekRange: 'Weeks 13–16',
        title: 'Developer Handoff Specs, WCAG Accessibility & Case Study Story',
        description: 'Document component tokens for developers, ensure AA/AAA contrast, and write portfolio case studies.',
        keySkills: ['Design System Handoff', 'WCAG Accessibility', 'Case Study Writing'],
        projectMilestone: 'Publish two production-grade case studies demonstrating problem, process, iterations, and outcome.'
      }
    ]
  },

  // 10. LAW - CORPORATE LAWYER / LEGAL CONSULTANT
  {
    id: 'corporate-lawyer',
    title: 'Corporate Lawyer',
    category: 'Law & Public Service',
    subcategory: 'Corporate Law & Commercial Transactions',
    industries: ['Legal Practice', 'Corporate Enterprises', 'Banking & Finance', 'Government'],
    occupationCode: '23-1011.00',
    description: 'Advises businesses on their legal rights and obligations, drafts contracts, negotiates commercial agreements, and ensures regulatory compliance.',
    workEnvironment: 'Law firm offices, corporate legal departments, negotiation rooms, and regulatory courts.',
    difficulty: 'Advanced',
    typicalDurationMonths: 24,
    requiredSkills: [
      { name: 'Contract Drafting & Negotiation', importance: 5, minProficiency: 'Advanced', category: 'Law' },
      { name: 'Corporate Governance & Compliance', importance: 5, minProficiency: 'Advanced', category: 'Law' },
      { name: 'Legal Research & Analysis', importance: 5, minProficiency: 'Advanced', category: 'Research' },
      { name: 'M&A Due Diligence', importance: 4, minProficiency: 'Intermediate', category: 'Corporate' },
      { name: 'Intellectual Property Protection', importance: 3, minProficiency: 'Intermediate', category: 'Law' }
    ],
    matchingInterests: ['Law', 'Business', 'Public Service', 'Finance'],
    matchingStrengths: ['Logical thinking', 'Negotiation', 'Attention to detail', 'Communication', 'Analytical thinking'],
    educationPathways: [
      'Juris Doctor (J.D.) or Bachelor of Laws (LL.B.) from an accredited law school',
      'Admission to the State Bar / Bar Council licensing examination'
    ],
    workPreferenceAlignment: {
      teamwork: 3,
      buildingVsAnalyzing: 5,
      creativeVsStructured: 1, // highly structured statutory frameworks
      mathComfort: 2,
      peopleFacing: 4,
      practicalVsTheoretical: 3
    },
    entryLevelRoles: ['Legal Associate', 'Junior Corporate Counsel', 'Legal Compliance Specialist'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Junior Associate', typicalExperience: '0-2 years', focus: 'Contract reviews, due diligence indexing, regulatory research' },
      { stage: 'Junior', title: 'Associate Attorney', typicalExperience: '2-5 years', focus: 'Drafting commercial agreements, transaction management, client advisory' },
      { stage: 'Mid Level', title: 'Senior Associate / In-House Counsel', typicalExperience: '5-8 years', focus: 'Leading negotiations, major deal structuring, compliance oversight' },
      { stage: 'Senior', title: 'Partner / Deputy General Counsel', typicalExperience: '8-12 years', focus: 'Client development, strategic dispute settlement, firm governance' },
      { stage: 'Lead / Specialist', title: 'General Counsel / Senior Partner', typicalExperience: '12+ years', focus: 'Executive legal strategy, board advisory, enterprise risk management' }
    ],
    salaryRange: { entry: '$80,000', median: '$135,000', senior: '$220,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'law-1',
        phase: 1,
        phaseTitle: 'Contract Law & Commercial Terminology',
        weekRange: 'Weeks 1–4',
        title: 'Offer, Acceptance, Consideration & Breach Remedies',
        description: 'Analyze legal enforceability, boilerplate clauses, warranties, indemnities, and limitations of liability.',
        keySkills: ['Contract Law', 'Legal Writing', 'Statutory Interpretation'],
        projectMilestone: 'Redline and draft comprehensive Master Services Agreement (MSA) with protective indemnity clauses.'
      },
      {
        id: 'law-2',
        phase: 2,
        phaseTitle: 'Corporate Governance & Entity Formation',
        weekRange: 'Weeks 5–8',
        title: 'Articles of Incorporation, Fiduciary Duties & Board Bylaws',
        description: 'Understand differences between LLC, C-Corp, and partnership structures and director liability.',
        keySkills: ['Corporate Governance', 'Entity Structuring', 'Board Resolutions'],
        projectMilestone: 'Draft complete corporate formation package including shareholder agreement and board minutes.'
      },
      {
        id: 'law-3',
        phase: 3,
        phaseTitle: 'Regulatory Compliance & Due Diligence',
        weekRange: 'Weeks 9–12',
        title: 'M&A Due Diligence Audits & Privacy/Antitrust Regulations',
        description: 'Conduct virtual data room reviews, uncover legal liabilities, and evaluate regulatory clearances.',
        keySkills: ['Due Diligence', 'Regulatory Compliance', 'Risk Auditing'],
        projectMilestone: 'Prepare detailed Due Diligence Summary Report identifying critical intellectual property risks.'
      },
      {
        id: 'law-4',
        phase: 4,
        phaseTitle: 'Commercial Negotiation & Bar Examination',
        weekRange: 'Weeks 13–16',
        title: 'High-Stakes Deal Negotiation & Bar Exam Preparation',
        description: 'Simulate multivariable commercial dispute negotiations and master ethical professional conduct rules.',
        keySkills: ['Legal Negotiation', 'Professional Ethics', 'Bar Exam Mastery'],
        projectMilestone: 'Conduct mock commercial contract negotiation session with recorded concessions and finalized deal term sheet.'
      }
    ]
  },

  // 11. EDUCATION - STEM HIGH SCHOOL / COLLEGE EDUCATOR
  {
    id: 'stem-educator',
    title: 'STEM Educator / Lecturer',
    category: 'Education & Pedagogy',
    subcategory: 'Higher & Secondary Education',
    industries: ['Education', 'Universities', 'High Schools', 'EdTech', 'Research'],
    occupationCode: '25-1052.00',
    description: 'Teaches science, technology, engineering, or mathematics concepts, designing engaging curricula and mentoring students toward academic mastery.',
    workEnvironment: 'Classrooms, university lecture halls, science laboratories, and interactive online learning portals.',
    difficulty: 'Moderate',
    typicalDurationMonths: 12,
    requiredSkills: [
      { name: 'Curriculum & Instructional Design', importance: 5, minProficiency: 'Advanced', category: 'Education' },
      { name: 'STEM Subject Mastery (Math/Physics/CS)', importance: 5, minProficiency: 'Advanced', category: 'Academic' },
      { name: 'Public Speaking & Pedagogy', importance: 5, minProficiency: 'Advanced', category: 'Communication' },
      { name: 'Student Assessment & Rubric Design', importance: 4, minProficiency: 'Intermediate', category: 'Education' },
      { name: 'Educational Technology & LMS', importance: 4, minProficiency: 'Intermediate', category: 'Tech' }
    ],
    matchingInterests: ['Education', 'Science', 'Technology', 'Social Impact'],
    matchingStrengths: ['Communication', 'Empathy', 'Creativity', 'Organization', 'Adaptability'],
    educationPathways: [
      'Bachelor’s or Master’s in Education or specific STEM discipline (Mathematics, Physics, Chemistry, CS)',
      'State Teaching Credential / National Board Certification or Ph.D. for college lecturing'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 3,
      creativeVsStructured: 3,
      mathComfort: 4,
      peopleFacing: 5,
      practicalVsTheoretical: 3
    },
    entryLevelRoles: ['Junior Science Teacher', 'Graduate Teaching Assistant', 'STEM Curriculum Associate'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Teacher / Lecturer Trainee', typicalExperience: '0-2 years', focus: 'Lesson planning, classroom management, grading' },
      { stage: 'Junior', title: 'Certified STEM Teacher / Instructor', typicalExperience: '2-5 years', focus: 'Interactive labs, differentiated instruction, student mentorship' },
      { stage: 'Mid Level', title: 'Department Head / Senior Lecturer', typicalExperience: '5-8 years', focus: 'Curriculum overhaul, faculty mentoring, interdisciplinary programs' },
      { stage: 'Senior', title: 'Assistant Professor / Academic Dean', typicalExperience: '8-12 years', focus: 'Pedagogical research, academic policy, institutional accreditation' },
      { stage: 'Lead / Specialist', title: 'Distinguished Professor / Provost', typicalExperience: '12+ years', focus: 'University governance, national STEM education policy' }
    ],
    salaryRange: { entry: '$48,000', median: '$68,000', senior: '$110,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'edu-1',
        phase: 1,
        phaseTitle: 'Learning Theories & Pedagogical Models',
        weekRange: 'Weeks 1–4',
        title: 'Bloom’s Taxonomy, Constructivism & Classroom Engagement',
        description: 'Structure learning objectives across cognitive domains and design active learning experiences.',
        keySkills: ['Pedagogy', 'Learning Objectives', 'Active Learning'],
        projectMilestone: 'Develop a 4-week inquiry-based STEM curriculum unit with scaffolded exercises.'
      },
      {
        id: 'edu-2',
        phase: 2,
        phaseTitle: 'Hands-on Laboratory & Interactive Tech Integration',
        weekRange: 'Weeks 5–8',
        title: 'Virtual Simulations, Lab Safety Protocols & LMS Setup',
        description: 'Integrate PhET simulations, coding notebooks, and automated quiz platforms into Canvas/Google Classroom.',
        keySkills: ['EdTech Platforms', 'Lab Safety', 'Formative Assessment'],
        projectMilestone: 'Design a hybrid online/in-person laboratory exercise with real-time student check-ins.'
      },
      {
        id: 'edu-3',
        phase: 3,
        phaseTitle: 'Differentiated Instruction & Inclusive Classrooms',
        weekRange: 'Weeks 9–12',
        title: 'Universal Design for Learning (UDL) & Individualized Learning',
        description: 'Adapt instruction for varied learning styles, neurodivergent students, and English language learners.',
        keySkills: ['UDL Framework', 'Inclusive Teaching', 'Mentorship'],
        projectMilestone: 'Create differentiated assessment rubrics accommodating three distinct student learning profiles.'
      },
      {
        id: 'edu-4',
        phase: 4,
        phaseTitle: 'Teaching Portfolio, Microteaching & Credentialing',
        weekRange: 'Weeks 13–16',
        title: 'Recorded Lesson Demonstrations & Certification Review',
        description: 'Deliver recorded microteaching lessons, receive peer critiques, and finalize teaching philosophy statement.',
        keySkills: ['Microteaching', 'Public Presentation', 'Certification Prep'],
        projectMilestone: 'Complete 30-minute high-engagement microteaching demonstration and portfolio review.'
      }
    ]
  },

  // 12. AGRICULTURE - AGRONOMIST & CROP SCIENTIST
  {
    id: 'agronomist-crop-scientist',
    title: 'Agronomist & Crop Scientist',
    category: 'Agriculture & Environment',
    subcategory: 'Agricultural Science & Sustainable Farming',
    industries: ['Agriculture', 'Food Production', 'Environmental Research', 'Biotechnology', 'Government'],
    occupationCode: '19-1011.00',
    description: 'Improves crop yield, soil health, and farming sustainability by applying biological science, precision agronomy, and pest management techniques.',
    workEnvironment: 'Agricultural fields, plant research greenhouses, soil testing laboratories, and agribusiness offices.',
    difficulty: 'Moderate',
    typicalDurationMonths: 8,
    requiredSkills: [
      { name: 'Soil Science & Nutrient Management', importance: 5, minProficiency: 'Advanced', category: 'Agriculture' },
      { name: 'Crop Physiology & Genetics', importance: 5, minProficiency: 'Advanced', category: 'Biology' },
      { name: 'Integrated Pest Management (IPM)', importance: 4, minProficiency: 'Intermediate', category: 'Agriculture' },
      { name: 'Precision Agriculture (GPS/GIS & Drones)', importance: 4, minProficiency: 'Intermediate', category: 'Tech' },
      { name: 'Data Analysis & Statistical Trials', importance: 3, minProficiency: 'Intermediate', category: 'Data' }
    ],
    matchingInterests: ['Agriculture', 'Environment', 'Science', 'Research'],
    matchingStrengths: ['Analytical thinking', 'Problem solving', 'Research', 'Attention to detail', 'Adaptability'],
    educationPathways: [
      'Bachelor’s or Master’s in Agronomy, Crop Science, Agricultural Engineering, or Soil Science',
      'Certified Crop Adviser (CCA) certification'
    ],
    workPreferenceAlignment: {
      teamwork: 3,
      buildingVsAnalyzing: 4,
      creativeVsStructured: 2,
      mathComfort: 3,
      peopleFacing: 3,
      practicalVsTheoretical: 1 // strong hands-on outdoor field presence
    },
    entryLevelRoles: ['Junior Agronomist', 'Crop Scout Specialist', 'Soil Laboratory Technician'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Field Agronomist', typicalExperience: '0-2 years', focus: 'Soil sampling, crop scouting, grower consultations' },
      { stage: 'Junior', title: 'Senior Agronomist / Seed Specialist', typicalExperience: '2-5 years', focus: 'Variety trial management, fertilizer recipe optimization, drone analytics' },
      { stage: 'Mid Level', title: 'Regional Agronomy Manager', typicalExperience: '5-8 years', focus: 'Large-scale farm portfolio advising, sustainable crop rotation strategy' },
      { stage: 'Senior', title: 'Principal Agricultural Scientist', typicalExperience: '8-12 years', focus: 'Climate-resilient crop breeding, carbon sequestration protocols' },
      { stage: 'Lead / Specialist', title: 'VP of Agricultural Science / Chief Agronomist', typicalExperience: '12+ years', focus: 'Global food security strategy, agribusiness executive leadership' }
    ],
    salaryRange: { entry: '$52,000', median: '$76,000', senior: '$120,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'agr-1',
        phase: 1,
        phaseTitle: 'Soil Chemistry & Nutrient Cycles',
        weekRange: 'Weeks 1–4',
        title: 'Nitrogen-Phosphorus-Potassium Cycles & Soil Texture Analysis',
        description: 'Understand soil pH, cation exchange capacity (CEC), and nutrient deficiency symptoms.',
        keySkills: ['Soil Chemistry', 'Nutrient Cycling', 'Sample Collection'],
        projectMilestone: 'Analyze 5 soil test lab assays and prescribe precise variable-rate fertilizer amendments.'
      },
      {
        id: 'agr-2',
        phase: 2,
        phaseTitle: 'Crop Genetics & Plant Protection',
        weekRange: 'Weeks 5–8',
        title: 'Crop Growth Stages, Weed Science & Integrated Pest Control',
        description: 'Identify common fungal pathogens, parasitic weeds, and beneficial predatory insects.',
        keySkills: ['Crop Scouting', 'Pest Identification', 'IPM Strategy'],
        projectMilestone: 'Develop an eco-friendly Integrated Pest Management plan minimizing chemical runoff.'
      },
      {
        id: 'agr-3',
        phase: 3,
        phaseTitle: 'Precision Farming & Remote Sensing',
        weekRange: 'Weeks 9–12',
        title: 'Satellite NDVI Imagery, Drone Mapping & Yield Monitors',
        description: 'Interpret multispectral vegetation indices to pinpoint drought stress and disease clusters.',
        keySkills: ['GIS & NDVI', 'Precision Agriculture', 'Yield Data Analysis'],
        projectMilestone: 'Map field variability using NDVI satellite imagery and create targeted prescription maps.'
      },
      {
        id: 'agr-4',
        phase: 4,
        phaseTitle: 'Sustainable Agronomy & Crop Adviser Credential',
        weekRange: 'Weeks 13–16',
        title: 'Cover Cropping, Water Conservation & CCA Exam Review',
        description: 'Learn regenerative farming practices and prepare for the Certified Crop Adviser licensing exam.',
        keySkills: ['Regenerative Farming', 'Water Conservation', 'CCA Preparation'],
        projectMilestone: 'Write comprehensive 3-year crop rotation and carbon-smart farm management plan.'
      }
    ]
  },

  // 13. SKILLED TRADES - INDUSTRIAL ELECTRICIAN & AUTOMATION TECHNICIAN
  {
    id: 'industrial-electrician',
    title: 'Industrial Electrician & Automation Tech',
    category: 'Skilled Trades',
    subcategory: 'Electrical & Industrial Automation',
    industries: ['Manufacturing', 'Energy & Utilities', 'Automotive', 'Logistics', 'Construction'],
    occupationCode: '47-2111.00',
    description: 'Installs, maintains, troubleshoots, and repairs high-voltage electrical distribution systems, programmable logic controllers (PLCs), and robotic machinery.',
    workEnvironment: 'Industrial factories, power distribution facilities, automated warehouses, and production plants.',
    difficulty: 'Moderate',
    typicalDurationMonths: 12,
    requiredSkills: [
      { name: 'Electrical Schematics & Blueprints', importance: 5, minProficiency: 'Advanced', category: 'Electrical' },
      { name: 'PLC Programming (Ladder Logic)', importance: 4, minProficiency: 'Intermediate', category: 'Automation' },
      { name: 'National Electrical Code (NEC)', importance: 5, minProficiency: 'Advanced', category: 'Safety/Code' },
      { name: 'Multimeter & Diagnostic Testing', importance: 5, minProficiency: 'Advanced', category: 'Diagnostics' },
      { name: 'Industrial Motor Controls', importance: 4, minProficiency: 'Intermediate', category: 'Electrical' }
    ],
    matchingInterests: ['Skilled Trades', 'Engineering', 'Technology'],
    matchingStrengths: ['Problem solving', 'Attention to detail', 'Logical thinking', 'Decision making'],
    educationPathways: [
      'Apprenticeship program or Associate Degree in Electrical Technology / Industrial Automation',
      'Journeyman Electrician License and OSHA 30 certification'
    ],
    workPreferenceAlignment: {
      teamwork: 3,
      buildingVsAnalyzing: 2,
      creativeVsStructured: 1, // strict adherence to safety standards
      mathComfort: 3,
      peopleFacing: 2,
      practicalVsTheoretical: 1 // completely hands-on physical mastery
    },
    entryLevelRoles: ['Electrical Apprentice', 'Maintenance Technician Trainee', 'Field Service Assistant'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Electrical Apprentice', typicalExperience: '0-2 years', focus: 'Conduit bending, wire pulling, basic schematic reading' },
      { stage: 'Junior', title: 'Journeyman Industrial Electrician', typicalExperience: '2-5 years', focus: 'Motor controls, high-voltage switchgear, breaker diagnostics' },
      { stage: 'Mid Level', title: 'Master Electrician / Automation Specialist', typicalExperience: '5-8 years', focus: 'PLC reprogramming, SCADA integration, safety interlocks' },
      { stage: 'Senior', title: 'Plant Electrical Supervisor / Reliability Lead', typicalExperience: '8-12 years', focus: 'Preventive maintenance programs, factory power redundancy' },
      { stage: 'Lead / Specialist', title: 'Director of Facilities / Chief Electrical Inspector', typicalExperience: '12+ years', focus: 'Enterprise energy infrastructure, safety compliance standards' }
    ],
    salaryRange: { entry: '$50,000', median: '$74,000', senior: '$115,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'elec-1',
        phase: 1,
        phaseTitle: 'Electrical Theory & Safety Standards',
        weekRange: 'Weeks 1–4',
        title: 'Ohm’s Law, AC/DC Circuits & OSHA / NFPA 70E Safety',
        description: 'Understand voltage drops, phase angles, arc-flash protection, and Lockout/Tagout (LOTO).',
        keySkills: ['Circuit Theory', 'Electrical Safety', 'LOTO Procedures'],
        projectMilestone: 'Wire and measure single-phase and three-phase simulated distribution test circuits.'
      },
      {
        id: 'elec-2',
        phase: 2,
        phaseTitle: 'Industrial Motor Controls & Schematics',
        weekRange: 'Weeks 5–8',
        title: 'Relays, Contactors, Starters & Variable Frequency Drives (VFDs)',
        description: 'Read industrial ladder diagrams and wire forward-reverse motor control circuits.',
        keySkills: ['Motor Controls', 'VFD Configuration', 'Schematic Reading'],
        projectMilestone: 'Build a working 3-phase motor control circuit with start/stop interlocks and emergency stop.'
      },
      {
        id: 'elec-3',
        phase: 3,
        phaseTitle: 'PLC Programming & Industrial Sensors',
        weekRange: 'Weeks 9–12',
        title: 'Allen-Bradley / Siemens Ladder Logic & Proximity Sensors',
        description: 'Program digital and analog I/O routines, timers, counters, and safety alarms in PLC environments.',
        keySkills: ['PLC Programming', 'Sensor Integration', 'Ladder Logic'],
        projectMilestone: 'Program a simulated conveyor belt sorting system using PLC ladder logic and optical sensors.'
      },
      {
        id: 'elec-4',
        phase: 4,
        phaseTitle: 'Troubleshooting & Journeyman Licensing Prep',
        weekRange: 'Weeks 13–16',
        title: 'Systematic Fault Finding, Thermal Imaging & NEC Code Calculations',
        description: 'Troubleshoot simulated ground faults, short circuits, and calculate wire sizing under NEC code.',
        keySkills: ['Fault Diagnostics', 'Thermal Imaging', 'NEC Mastery'],
        projectMilestone: 'Diagnose and resolve 5 complex electrical faults in a simulated industrial control panel.'
      }
    ]
  },

  // 14. AVIATION - COMMERCIAL AIRLINE PILOT
  {
    id: 'commercial-airline-pilot',
    title: 'Commercial Airline Pilot',
    category: 'Aviation & Transportation',
    subcategory: 'Aeronautics & Flight Operations',
    industries: ['Aviation', 'Commercial Airlines', 'Cargo Transport', 'Corporate Charter'],
    occupationCode: '53-2011.00',
    description: 'Operates commercial passenger or cargo aircraft, navigating airspace, conducting pre-flight checks, and ensuring safe transit under all weather conditions.',
    workEnvironment: 'Aircraft flight decks, airports, flight simulators, and international airspace.',
    difficulty: 'Advanced',
    typicalDurationMonths: 24,
    requiredSkills: [
      { name: 'Flight Navigation & Instrument Flying', importance: 5, minProficiency: 'Advanced', category: 'Aviation' },
      { name: 'Aviation Meteorology', importance: 5, minProficiency: 'Advanced', category: 'Science' },
      { name: 'Crew Resource Management (CRM)', importance: 5, minProficiency: 'Advanced', category: 'Leadership' },
      { name: 'Aerodynamics & Aircraft Systems', importance: 4, minProficiency: 'Advanced', category: 'Engineering' },
      { name: 'FAA / ICAO Flight Regulations', importance: 4, minProficiency: 'Advanced', category: 'Law/Regulation' }
    ],
    matchingInterests: ['Aviation', 'Travel', 'Technology', 'Engineering'],
    matchingStrengths: ['Decision making', 'Attention to detail', 'Communication', 'Adaptability', 'Problem solving'],
    educationPathways: [
      'Bachelor’s degree in Aviation, Aeronautical Science, or STEM field',
      'FAA Commercial Pilot Certificate, Instrument Rating, Multi-Engine Rating, and Airline Transport Pilot (ATP) license'
    ],
    workPreferenceAlignment: {
      teamwork: 5,
      buildingVsAnalyzing: 3,
      creativeVsStructured: 1, // checklist and procedural discipline
      mathComfort: 4,
      peopleFacing: 3,
      practicalVsTheoretical: 1 // high physical and situational mastery
    },
    entryLevelRoles: ['Flight Instructor (CFI)', 'Regional Cargo Pilot', 'Banner Towing / Survey Pilot'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Certified Flight Instructor / First Officer (Regional)', typicalExperience: '0-2 years (1500 hours flight time)', focus: 'Building turbine hours, regional hops, CRM' },
      { stage: 'Junior', title: 'Regional Airline Captain', typicalExperience: '2-5 years', focus: 'Pilot in Command (PIC) decision-making, adverse weather ops' },
      { stage: 'Mid Level', title: 'Major Airline First Officer', typicalExperience: '5-9 years', focus: 'Wide-body international routes, transoceanic navigation' },
      { stage: 'Senior', title: 'Major Airline Captain', typicalExperience: '9-15 years', focus: 'Senior line pilot, emergency preparedness, flight deck command' },
      { stage: 'Lead / Specialist', title: 'Chief Pilot / Fleet Standards Captain', typicalExperience: '15+ years', focus: 'Airline flight operations policy, simulator training certification' }
    ],
    salaryRange: { entry: '$60,000', median: '$130,000', senior: '$250,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'av-1',
        phase: 1,
        phaseTitle: 'Private Pilot Ground School & Basic Flight',
        weekRange: 'Weeks 1–4',
        title: 'Aerodynamics, Airspace Classes, Flight Instruments & Radio Comms',
        description: 'Master lift, drag, thrust, weight, stalls, and standard air traffic control phraseology.',
        keySkills: ['Aerodynamics', 'Airspace Knowledge', 'Radio Communication'],
        projectMilestone: 'Pass FAA Private Pilot written knowledge examination with 90%+ score.'
      },
      {
        id: 'av-2',
        phase: 2,
        phaseTitle: 'Instrument Rating & Aviation Weather',
        weekRange: 'Weeks 5–8',
        title: 'IFR Procedures, ILS Approaches, METAR/TAF Weather Decoding',
        description: 'Learn to pilot aircraft solely by reference to instruments inside clouds and night conditions.',
        keySkills: ['Instrument Flying', 'Aviation Meteorology', 'Approach Charts'],
        projectMilestone: 'Complete simulated IFR cross-country flight through severe IMC weather conditions.'
      },
      {
        id: 'av-3',
        phase: 3,
        phaseTitle: 'Commercial Multi-Engine Rating',
        weekRange: 'Weeks 9–12',
        title: 'Engine-Out Aerodynamics (Vmc), Complex Systems & High Performance',
        description: 'Execute multi-engine emergency single-engine feathering procedures and precision steep turns.',
        keySkills: ['Multi-Engine Operations', 'Emergency Procedures', 'Commercial Maneuvers'],
        projectMilestone: 'Complete multi-engine practical checkride simulating critical engine failure on takeoff.'
      },
      {
        id: 'av-4',
        phase: 4,
        phaseTitle: 'Airline Transport Pilot (ATP) & CRM Simulation',
        weekRange: 'Weeks 13–16',
        title: 'Jet Transition, High-Altitude Aerodynamics & Glass Cockpit FMS',
        description: 'Train on multi-crew glass cockpit Flight Management Systems (FMS) and threat management.',
        keySkills: ['Glass Cockpit Avionics', 'Crew Resource Management', 'ATP Standards'],
        projectMilestone: 'Execute full airline line-oriented flight training (LOFT) scenario in Level D simulator.'
      }
    ]
  },

  // 15. SCIENCE - BIOTECHNOLOGIST & GENOMIC RESEARCHER
  {
    id: 'biotechnologist',
    title: 'Biotechnologist & Genomic Researcher',
    category: 'Science & Research',
    subcategory: 'Biotechnology & Molecular Biology',
    industries: ['Pharmaceuticals', 'Biotech', 'Genomics', 'Agriculture', 'Academic Research'],
    occupationCode: '19-1021.00',
    description: 'Researches cellular mechanisms, genetic engineering, and biomolecular processes to develop therapeutics, vaccines, and agricultural bio-solutions.',
    workEnvironment: 'Biosafety wet laboratories, pharmaceutical R&D facilities, and computational biology centers.',
    difficulty: 'Advanced',
    typicalDurationMonths: 12,
    requiredSkills: [
      { name: 'Molecular Biology Techniques (PCR, Gel Electrophoresis)', importance: 5, minProficiency: 'Advanced', category: 'Lab' },
      { name: 'Cell Culture & Aseptic Wet Lab', importance: 5, minProficiency: 'Advanced', category: 'Lab' },
      { name: 'Bioinformatics & DNA Sequencing Analysis', importance: 4, minProficiency: 'Intermediate', category: 'Data' },
      { name: 'CRISPR & Gene Editing Fundamentals', importance: 4, minProficiency: 'Intermediate', category: 'Genetics' },
      { name: 'Good Laboratory Practice (GLP)', importance: 4, minProficiency: 'Intermediate', category: 'Quality' }
    ],
    matchingInterests: ['Science', 'Healthcare', 'Research', 'Technology'],
    matchingStrengths: ['Research', 'Attention to detail', 'Analytical thinking', 'Problem solving'],
    educationPathways: [
      'Bachelor’s or Master’s in Biotechnology, Molecular Biology, Biochemistry, or Bioengineering',
      'Ph.D. for leading experimental drug discovery and genomic research teams'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 4,
      creativeVsStructured: 2,
      mathComfort: 4,
      peopleFacing: 2,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Lab Research Associate', 'Quality Control Bio-Analyst', 'Junior Assay Specialist'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Research Associate I', typicalExperience: '0-2 years', focus: 'Assay execution, plasmid purification, maintaining cell lines' },
      { stage: 'Junior', title: 'Biotechnologist II / Scientist', typicalExperience: '2-5 years', focus: 'Protocol optimization, bioinformatic pipeline runs, patent filings' },
      { stage: 'Mid Level', title: 'Senior Scientist / Project Lead', typicalExperience: '5-8 years', focus: 'Target validation, clinical candidate selection, team management' },
      { stage: 'Senior', title: 'Principal Investigator / Associate Director', typicalExperience: '8-12 years', focus: 'Translational medicine strategy, pipeline portfolio oversight' },
      { stage: 'Lead / Specialist', title: 'Chief Scientific Officer (CSO)', typicalExperience: '12+ years', focus: 'Biotech company scientific vision, venture capital fundraising' }
    ],
    salaryRange: { entry: '$58,000', median: '$88,000', senior: '$145,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'bio-1',
        phase: 1,
        phaseTitle: 'Cell Biology & Lab Pipetting Foundations',
        weekRange: 'Weeks 1–4',
        title: 'Buffer Preparations, Spectrophotometry & DNA Extraction',
        description: 'Master micropipetting accuracy, molar calculations, sterilization, and genomic DNA extraction.',
        keySkills: ['Wet Lab Protocols', 'DNA Extraction', 'Lab Math & Molarity'],
        projectMilestone: 'Isolate high-yield genomic DNA from bacterial cultures and quantify with spectrophotometer.'
      },
      {
        id: 'bio-2',
        phase: 2,
        phaseTitle: 'Gene Amplification & Recombinant DNA',
        weekRange: 'Weeks 5–8',
        title: 'Polymerase Chain Reaction (PCR), Restriction Clones & Gel Electrophoresis',
        description: 'Design specific primers, perform qPCR amplification, and verify molecular weight on agarose gels.',
        keySkills: ['PCR / qPCR', 'Gel Electrophoresis', 'Cloning'],
        projectMilestone: 'Clone target fluorescent reporter gene into expression plasmid with restriction enzymes.'
      },
      {
        id: 'bio-3',
        phase: 3,
        phaseTitle: 'Bioinformatics & Next-Gen Sequencing (NGS)',
        weekRange: 'Weeks 9–12',
        title: 'BLAST, Python for Genomics, Variant Calling & FASTA Analysis',
        description: 'Process RNA-Seq fastq files, align reads with reference genomes, and call mutation variants.',
        keySkills: ['Bioinformatics', 'Python Biopython', 'NGS Analysis'],
        projectMilestone: 'Run differential gene expression pipeline identifying cancer biomarker upregulations.'
      },
      {
        id: 'bio-4',
        phase: 4,
        phaseTitle: 'Gene Editing & Regulatory Bio-Standards',
        weekRange: 'Weeks 13–16',
        title: 'CRISPR-Cas9 Guide RNA Design & FDA Regulatory Filings',
        description: 'Design sgRNA for CRISPR knockouts, assess off-target binding, and compile GLP validation reports.',
        keySkills: ['CRISPR Guide Design', 'GLP Documentation', 'Biotech IP'],
        projectMilestone: 'Author a complete pre-clinical assay validation dossier for novel target therapeutic.'
      }
    ]
  },

  // 16. MARKETING - DIGITAL MARKETING & GROWTH STRATEGIST
  {
    id: 'digital-marketing-strategist',
    title: 'Digital Marketing Strategist',
    category: 'Marketing & Sales',
    subcategory: 'Growth Marketing & Brand Strategy',
    industries: ['E-Commerce', 'Technology', 'Consumer Brands', 'Agencies', 'Media'],
    occupationCode: '13-1161.00',
    description: 'Plans and executes multi-channel customer acquisition campaigns, analyzing conversion funnels, SEO rankings, and paid performance advertising.',
    workEnvironment: 'Marketing agencies, brand war rooms, tech startups, and remote growth teams.',
    difficulty: 'Entry',
    typicalDurationMonths: 4,
    requiredSkills: [
      { name: 'Search Engine Optimization (SEO)', importance: 5, minProficiency: 'Intermediate', category: 'Marketing' },
      { name: 'Performance Marketing (Google/Meta Ads)', importance: 5, minProficiency: 'Intermediate', category: 'Marketing' },
      { name: 'Web Analytics (GA4)', importance: 4, minProficiency: 'Intermediate', category: 'Data' },
      { name: 'Content Marketing & Copywriting', importance: 4, minProficiency: 'Intermediate', category: 'Creative' },
      { name: 'Email Marketing & Marketing Automation', importance: 3, minProficiency: 'Intermediate', category: 'Marketing' }
    ],
    matchingInterests: ['Marketing', 'Business', 'Media', 'Communication'],
    matchingStrengths: ['Creativity', 'Communication', 'Analytical thinking', 'Adaptability'],
    educationPathways: [
      'Bachelor’s in Marketing, Communications, Business, or Public Relations',
      'Industry certifications (Google Ads, Meta Certified Digital Marketing Associate, HubSpot Inbound)'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 3,
      creativeVsStructured: 4,
      mathComfort: 3,
      peopleFacing: 4,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Digital Marketing Coordinator', 'SEO Associate', 'Junior Growth Specialist'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Marketing Specialist', typicalExperience: '0-2 years', focus: 'Social media management, campaign copy, ad testing' },
      { stage: 'Junior', title: 'Growth Marketer', typicalExperience: '2-4 years', focus: 'Budget allocation, CAC/LTV optimization, automated email drips' },
      { stage: 'Mid Level', title: 'Marketing Manager', typicalExperience: '4-7 years', focus: 'Cross-channel strategy, agency management, product launches' },
      { stage: 'Senior', title: 'Director of Growth / Marketing', typicalExperience: '7-10 years', focus: 'Brand positioning, multi-million dollar annual budgets' },
      { stage: 'Lead / Specialist', title: 'Chief Marketing Officer (CMO)', typicalExperience: '10+ years', focus: 'Global brand equity, enterprise demand generation' }
    ],
    salaryRange: { entry: '$48,000', median: '$78,000', senior: '$135,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'mkt-1',
        phase: 1,
        phaseTitle: 'Search Engine Optimization & Content Architecture',
        weekRange: 'Weeks 1–4',
        title: 'Keyword Research, On-Page SEO & Search Intent Mapping',
        description: 'Perform competitive gap analysis, optimize meta titles, schema markup, and internal linking.',
        keySkills: ['SEO', 'Keyword Research', 'Copywriting'],
        projectMilestone: 'Execute comprehensive SEO audit and content strategy increasing organic search traffic.'
      },
      {
        id: 'mkt-2',
        phase: 2,
        phaseTitle: 'Paid Performance Media & Conversion Tracking',
        weekRange: 'Weeks 5–8',
        title: 'Google Search Ads, Meta Retargeting & GA4 Conversions',
        description: 'Set up Google Tag Manager events, create ad copy variants, and manage budget bidding strategies.',
        keySkills: ['Google Ads', 'GA4 Analytics', 'Ad Optimization'],
        projectMilestone: 'Launch a live PPC campaign achieving a target Customer Acquisition Cost (CAC).'
      },
      {
        id: 'mkt-3',
        phase: 3,
        phaseTitle: 'Lifecycle Marketing & Automation Funnels',
        weekRange: 'Weeks 9–12',
        title: 'Email Segmentation, Lead Nurture Flows & Retention',
        description: 'Build automated behavioral email sequences that increase customer lifetime value (LTV).',
        keySkills: ['Email Automation', 'Funnel Optimization', 'A/B Testing'],
        projectMilestone: 'Build a 5-step automated onboarding email nurture workflow with 35%+ open rate.'
      },
      {
        id: 'mkt-4',
        phase: 4,
        phaseTitle: 'Brand Strategy, Attribution & Executive Reporting',
        weekRange: 'Weeks 13–16',
        title: 'Multi-Touch Attribution, Marketing ROI & Campaign Presentations',
        description: 'Synthesize data across channels into executive dashboards demonstrating clear ROI.',
        keySkills: ['Attribution Modeling', 'Marketing Strategy', 'ROI Reporting'],
        projectMilestone: 'Deliver full-year comprehensive marketing plan with financial budget models.'
      }
    ]
  },

  // 17. ARCHITECTURE - LICENSED ARCHITECT
  {
    id: 'licensed-architect',
    title: 'Licensed Architect',
    category: 'Architecture & Built Environment',
    subcategory: 'Architectural Design & Urban Planning',
    industries: ['Architecture Firms', 'Urban Planning', 'Construction', 'Real Estate Development'],
    occupationCode: '17-1011.00',
    description: 'Envisions, designs, and oversees the construction of functional, safe, and aesthetically striking buildings and urban spaces.',
    workEnvironment: 'Architectural design studios, client boardrooms, and active municipal construction job sites.',
    difficulty: 'Advanced',
    typicalDurationMonths: 24,
    requiredSkills: [
      { name: 'BIM & Revit Architecture', importance: 5, minProficiency: 'Advanced', category: 'Software' },
      { name: 'Building Codes & Life Safety (IBC)', importance: 5, minProficiency: 'Advanced', category: 'Codes' },
      { name: 'Spatial Design & Conceptual Sketching', importance: 4, minProficiency: 'Advanced', category: 'Design' },
      { name: 'Sustainable Architecture (LEED)', importance: 4, minProficiency: 'Intermediate', category: 'Sustainability' },
      { name: 'Construction Documentation & Detailing', importance: 5, minProficiency: 'Advanced', category: 'Drafting' }
    ],
    matchingInterests: ['Architecture', 'Design', 'Engineering', 'Art'],
    matchingStrengths: ['Creativity', 'Attention to detail', 'Problem solving', 'Communication', 'Visual thinking'],
    educationPathways: [
      'Professional Bachelor of Architecture (B.Arch) or Master of Architecture (M.Arch) from an accredited NAAB program',
      'Completion of Architectural Experience Program (AXP) and passing the Architect Registration Examination (ARE)'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 2,
      creativeVsStructured: 4,
      mathComfort: 3,
      peopleFacing: 4,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Architectural Designer I', 'Junior Drafter / BIM Specialist', 'Intern Architect'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Architectural Intern / Designer I', typicalExperience: '0-3 years', focus: 'BIM modeling, redline corrections, 3D renderings' },
      { stage: 'Junior', title: 'Project Architect / Associate', typicalExperience: '3-6 years', focus: 'Code compliance, consultant coordination, construction administration' },
      { stage: 'Mid Level', title: 'Senior Project Architect', typicalExperience: '6-10 years', focus: 'Complete project leadership, client relationships, contractor negotiations' },
      { stage: 'Senior', title: 'Design Principal / Studio Leader', typicalExperience: '10-15 years', focus: 'Firm design philosophy, major competition entries, firm ownership' },
      { stage: 'Lead / Specialist', title: 'Managing Partner / Fellow (FAIA)', typicalExperience: '15+ years', focus: 'National architectural leadership, landmark civic commissions' }
    ],
    salaryRange: { entry: '$58,000', median: '$90,000', senior: '$145,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'arch-1',
        phase: 1,
        phaseTitle: 'BIM Software & Parametric Architectural Modeling',
        weekRange: 'Weeks 1–4',
        title: 'Autodesk Revit Modeling, Families & Sheet Setups',
        description: 'Model walls, curtain systems, roofs, stairs, and link structural/MEP consultant models.',
        keySkills: ['Revit BIM', 'Architectural Detailing', 'Drafting Standards'],
        projectMilestone: 'Construct a complete 3-story mixed-use commercial Revit model with parametric families.'
      },
      {
        id: 'arch-2',
        phase: 2,
        phaseTitle: 'Building Codes, Egress & Life Safety',
        weekRange: 'Weeks 5–8',
        title: 'International Building Code (IBC), ADA Accessibility & Occupancy Loads',
        description: 'Calculate egress widths, fire separations, travel distances, and accessible restroom layouts.',
        keySkills: ['IBC Code', 'ADA Compliance', 'Life Safety Plans'],
        projectMilestone: 'Draft a full Life Safety Code compliance plan including occupant load calculations.'
      },
      {
        id: 'arch-3',
        phase: 3,
        phaseTitle: 'Sustainable Systems & Building Envelopes',
        weekRange: 'Weeks 9–12',
        title: 'Thermal Envelopes, Rain Screens, Solar Orientation & LEED Principles',
        description: 'Design waterproof building facades, vapor barrier assemblies, and energy-efficient shading.',
        keySkills: ['Building Envelope', 'LEED Design', 'Passive Solar'],
        projectMilestone: 'Draw detailed wall section details showing rainscreen cladding, thermal insulation, and flashing.'
      },
      {
        id: 'arch-4',
        phase: 4,
        phaseTitle: 'Construction Documents & ARE Exam Review',
        weekRange: 'Weeks 13–16',
        title: 'Full Construction Document (CD) Set & Project Management',
        description: 'Compile specifications, schedules, plan sets, and review Practice Management (PcM) exam modules.',
        keySkills: ['Construction Documents', 'Project Management', 'ARE Prep'],
        projectMilestone: 'Produce a 20-sheet coordinated Construction Document drawing set ready for municipal permit review.'
      }
    ]
  },

  // 18. SOCIAL IMPACT - CLINICAL SOCIAL WORKER
  {
    id: 'clinical-social-worker',
    title: 'Clinical Social Worker / Counselor',
    category: 'Social & Community',
    subcategory: 'Community Health & Family Services',
    industries: ['Community Services', 'Healthcare', 'Government', 'Non-Profits', 'Schools'],
    occupationCode: '21-1022.00',
    description: 'Supports vulnerable individuals, families, and communities through counseling, crisis intervention, resource navigation, and systemic advocacy.',
    workEnvironment: 'Community health centers, hospitals, non-profit organizations, family courts, and social agencies.',
    difficulty: 'Moderate',
    typicalDurationMonths: 12,
    requiredSkills: [
      { name: 'Crisis Intervention & De-escalation', importance: 5, minProficiency: 'Advanced', category: 'Counseling' },
      { name: 'Case Management & Needs Assessment', importance: 5, minProficiency: 'Advanced', category: 'Services' },
      { name: 'Trauma-Informed Care', importance: 5, minProficiency: 'Advanced', category: 'Counseling' },
      { name: 'Community Resource Navigation', importance: 4, minProficiency: 'Intermediate', category: 'Advocacy' },
      { name: 'Social Welfare Policy & Ethics', importance: 4, minProficiency: 'Intermediate', category: 'Policy' }
    ],
    matchingInterests: ['Social Impact', 'Public Service', 'Healthcare', 'Law'],
    matchingStrengths: ['Empathy', 'Communication', 'Problem solving', 'Adaptability', 'Decision making'],
    educationPathways: [
      'Master of Social Work (MSW) or Bachelor of Social Work (BSW) from a CSWE-accredited institution',
      'Licensed Clinical Social Worker (LCSW) licensure'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 3,
      creativeVsStructured: 2,
      mathComfort: 1,
      peopleFacing: 5,
      practicalVsTheoretical: 1
    },
    entryLevelRoles: ['Case Manager', 'Family Support Specialist', 'Intake Coordinator'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Case Manager / Social Worker', typicalExperience: '0-2 years', focus: 'Needs assessment, benefit applications, home visits' },
      { stage: 'Junior', title: 'Licensed Social Worker (LMSW)', typicalExperience: '2-4 years', focus: 'Individual counseling, crisis triage, court documentation' },
      { stage: 'Mid Level', title: 'Licensed Clinical Social Worker (LCSW)', typicalExperience: '4-7 years', focus: 'Independent clinical psychotherapy, supervision of case workers' },
      { stage: 'Senior', title: 'Program Director / Clinical Supervisor', typicalExperience: '7-10 years', focus: 'Community program budgeting, policy advocacy, agency leadership' },
      { stage: 'Lead / Specialist', title: 'Executive Director / Non-Profit CEO', typicalExperience: '10+ years', focus: 'Systemic community reform, philanthropy, legislative testimony' }
    ],
    salaryRange: { entry: '$45,000', median: '$62,000', senior: '$92,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'sw-1',
        phase: 1,
        phaseTitle: 'Social Welfare Policy & Human Behavior',
        weekRange: 'Weeks 1–4',
        title: 'Social Determinants of Health & Systemic Inequality',
        description: 'Understand community ecosystems, systemic barriers, and ethical standards (NASW Code of Ethics).',
        keySkills: ['Social Policy', 'Ethics in Care', 'Systems Theory'],
        projectMilestone: 'Conduct a comprehensive community needs assessment identifying health disparity gaps.'
      },
      {
        id: 'sw-2',
        phase: 2,
        phaseTitle: 'Trauma-Informed Counseling & Assessment',
        weekRange: 'Weeks 5–8',
        title: 'Biopsychosocial Assessments & Motivational Interviewing',
        description: 'Practice active de-escalation, suicide prevention screening, and empathetic client engagement.',
        keySkills: ['Motivational Interviewing', 'Biopsychosocial Assessment', 'De-escalation'],
        projectMilestone: 'Draft three complete biopsychosocial intake assessments with actionable client goal plans.'
      },
      {
        id: 'sw-3',
        phase: 3,
        phaseTitle: 'Crisis De-escalation & Multi-Agency Coordination',
        weekRange: 'Weeks 9–12',
        title: 'Crisis Triage, Protective Services & Legal Mandates',
        description: 'Navigate mandatory reporting requirements, safety plans, and emergency shelter coordination.',
        keySkills: ['Crisis Management', 'Mandatory Reporting', 'Community Resources'],
        projectMilestone: 'Develop a multidisciplinary crisis intervention safety plan for family in acute distress.'
      },
      {
        id: 'sw-4',
        phase: 4,
        phaseTitle: 'Clinical Licensure (LCSW) & Advocacy Leadership',
        weekRange: 'Weeks 13–16',
        title: 'Clinical Supervision Practice & Licensure Examination',
        description: 'Master clinical DSM diagnostic skills and prepare for state licensure board examinations.',
        keySkills: ['Clinical Supervision', 'LCSW Exam Prep', 'Policy Advocacy'],
        projectMilestone: 'Pass full-length LCSW diagnostic practice exam and present policy reform testimony brief.'
      }
    ]
  },

  // 19. HOSPITALITY - EXECUTIVE CHEF & CULINARY DIRECTOR
  {
    id: 'executive-chef',
    title: 'Executive Chef & Culinary Director',
    category: 'Hospitality & Tourism',
    subcategory: 'Culinary Arts & Food Operations',
    industries: ['Fine Dining', 'Luxury Hotels', 'Culinary Brands', 'Event Catering', 'Cruise Lines'],
    occupationCode: '35-1011.00',
    description: 'Leads kitchen operations, develops seasonal culinary menus, manages food procurement costs, and ensures culinary excellence and sanitation standards.',
    workEnvironment: 'Professional commercial kitchens, restaurant dining rooms, luxury hotel banquet spaces, and test kitchens.',
    difficulty: 'Moderate',
    typicalDurationMonths: 12,
    requiredSkills: [
      { name: 'Culinary Techniques & Menu Development', importance: 5, minProficiency: 'Advanced', category: 'Culinary' },
      { name: 'Kitchen Operations & Brigade Leadership', importance: 5, minProficiency: 'Advanced', category: 'Management' },
      { name: 'Food Costing & Inventory Control', importance: 5, minProficiency: 'Advanced', category: 'Finance' },
      { name: 'Food Safety & Sanitation (ServSafe Manager)', importance: 5, minProficiency: 'Advanced', category: 'Safety' },
      { name: 'Staff Training & Quality Control', importance: 4, minProficiency: 'Intermediate', category: 'Leadership' }
    ],
    matchingInterests: ['Food & Culinary', 'Hospitality', 'Business', 'Art'],
    matchingStrengths: ['Creativity', 'Leadership', 'Time management', 'Attention to detail', 'Decision making'],
    educationPathways: [
      'Degree or Diploma in Culinary Arts or Hospitality Management',
      'American Culinary Federation (ACF) certification (Certified Executive Chef - CEC)'
    ],
    workPreferenceAlignment: {
      teamwork: 5,
      buildingVsAnalyzing: 2,
      creativeVsStructured: 4,
      mathComfort: 3,
      peopleFacing: 4,
      practicalVsTheoretical: 1
    },
    entryLevelRoles: ['Line Cook', 'Prep Cook', 'Junior Sous Chef'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Commis / Line Cook', typicalExperience: '0-2 years', focus: 'Station prep, knife skills, line speed during service rush' },
      { stage: 'Junior', title: 'Chef de Partie (Station Chef)', typicalExperience: '2-4 years', focus: 'Station mastery (sauté, grill, pastry), apprentice training' },
      { stage: 'Mid Level', title: 'Sous Chef', typicalExperience: '4-7 years', focus: 'Day-to-day kitchen supervision, expediting service, ordering' },
      { stage: 'Senior', title: 'Executive Chef', typicalExperience: '7-12 years', focus: 'Menu creation, labor and food margin targets, culinary branding' },
      { stage: 'Lead / Specialist', title: 'Culinary Director / Restaurateur', typicalExperience: '12+ years', focus: 'Multi-property restaurant groups, concept development, TV/media' }
    ],
    salaryRange: { entry: '$45,000', median: '$75,000', senior: '$125,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'cul-1',
        phase: 1,
        phaseTitle: 'Knife Skills & Classical Culinary Techniques',
        weekRange: 'Weeks 1–4',
        title: 'The 5 French Mother Sauces, Stocks & Precision Cuts',
        description: 'Master brunoise, julienne, mirepoix, stock reductions, and protein fabrication.',
        keySkills: ['Knife Skills', 'Classical Sauces', 'Food Safety'],
        projectMilestone: 'Prepare and plate a 3-course classical meal executing two distinct mother sauces flawlessly.'
      },
      {
        id: 'cul-2',
        phase: 2,
        phaseTitle: 'Sanitation, HACCP & Food Cost Accounting',
        weekRange: 'Weeks 5–8',
        title: 'ServSafe Manager Certification & Kitchen Recipe Costing',
        description: 'Calculate yield percentages, portion costs, and set target 28-32% food cost margins.',
        keySkills: ['Food Costing', 'HACCP Safety', 'Inventory Systems'],
        projectMilestone: 'Create a standardized 15-item seasonal restaurant menu with detailed cost cards and margin projections.'
      },
      {
        id: 'cul-3',
        phase: 3,
        phaseTitle: 'Brigade De Cuisine & Expediting High-Volume Service',
        weekRange: 'Weeks 9–12',
        title: 'Kitchen Flow, Pass Expediting & Timing Coordination',
        description: 'Master the kitchen pass, coordinating multi-course ticket timing during high-volume peak rush.',
        keySkills: ['Kitchen Expediting', 'Time Management', 'Brigade Leadership'],
        projectMilestone: 'Expedite a simulated 50-cover dinner service rush maintaining consistent plate standards.'
      },
      {
        id: 'cul-4',
        phase: 4,
        phaseTitle: 'Executive Menu Conception & Restaurant Leadership',
        weekRange: 'Weeks 13–16',
        title: 'Culinary Philosophy, Purveyor Relations & Kitchen Labor Management',
        description: 'Establish local farm-to-table supplier relationships and optimize kitchen scheduling.',
        keySkills: ['Menu Conceptualization', 'Vendor Negotiation', 'Kitchen P&L'],
        projectMilestone: 'Produce a complete restaurant concept prospectus including tasting menu and operating budget.'
      }
    ]
  },

  // 20. SPORTS - SPORTS PERFORMANCE ANALYST & KINESIOLOGIST
  {
    id: 'sports-performance-analyst',
    title: 'Sports Performance Analyst & Kinesiologist',
    category: 'Sports & Fitness',
    subcategory: 'Athletic Performance & Sports Science',
    industries: ['Professional Sports Teams', 'Athletic Academies', 'Fitness Tech', 'Collegiate Athletics'],
    occupationCode: '29-1128.00',
    description: 'Applies biomechanics, data analytics, and physiological monitoring to optimize athletic performance and reduce injury risks.',
    workEnvironment: 'Professional training stadiums, athletic performance gyms, motion-capture labs, and sidelines.',
    difficulty: 'Moderate',
    typicalDurationMonths: 6,
    requiredSkills: [
      { name: 'Biomechanics & Movement Screening', importance: 5, minProficiency: 'Advanced', category: 'Kinesiology' },
      { name: 'GPS & Athletic Wearable Telemetry', importance: 4, minProficiency: 'Intermediate', category: 'Sports Tech' },
      { name: 'Strength & Conditioning Programming', importance: 5, minProficiency: 'Advanced', category: 'Fitness' },
      { name: 'Data Analysis (Python / Excel / Tableau)', importance: 4, minProficiency: 'Intermediate', category: 'Data' },
      { name: 'Injury Risk Mitigation Protocols', importance: 4, minProficiency: 'Intermediate', category: 'Health' }
    ],
    matchingInterests: ['Sports', 'Healthcare', 'Data', 'Science'],
    matchingStrengths: ['Analytical thinking', 'Problem solving', 'Communication', 'Attention to detail'],
    educationPathways: [
      'Bachelor’s or Master’s in Kinesiology, Exercise Science, or Sports Analytics',
      'Certified Strength and Conditioning Specialist (CSCS) via NSCA'
    ],
    workPreferenceAlignment: {
      teamwork: 5,
      buildingVsAnalyzing: 4,
      creativeVsStructured: 3,
      mathComfort: 3,
      peopleFacing: 5,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Junior Performance Analyst', 'Assistant Strength Coach', 'Sports Science Intern'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Sports Science Intern / Assistant', typicalExperience: '0-2 years', focus: 'GPS vest data downloads, daily jump testing, athlete surveys' },
      { stage: 'Junior', title: 'Performance Analyst', typicalExperience: '2-4 years', focus: 'Training load dashboards, match velocity breakdowns, coaching briefs' },
      { stage: 'Mid Level', title: 'Lead Sports Scientist', typicalExperience: '4-7 years', focus: 'Integrated injury prevention algorithms, return-to-play coordination' },
      { stage: 'Senior', title: 'Director of High Performance', typicalExperience: '7-12 years', focus: 'Overseeing medical, conditioning, and analytics across all team squads' },
      { stage: 'Lead / Specialist', title: 'Vice President of Player Performance', typicalExperience: '12+ years', focus: 'Franchise-level athletic strategy, sports science innovation' }
    ],
    salaryRange: { entry: '$46,000', median: '$72,000', senior: '$120,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'spt-1',
        phase: 1,
        phaseTitle: 'Human Movement Anatomy & Functional Biomechanics',
        weekRange: 'Weeks 1–4',
        title: 'Force-Velocity Curves, Kinetic Chains & Joint Kinematics',
        description: 'Understand force plates, deceleration mechanics, ground reaction forces, and torque.',
        keySkills: ['Functional Anatomy', 'Biomechanics', 'Force Plate Diagnostics'],
        projectMilestone: 'Conduct functional movement screening and force plate jump analysis on 5 athletes.'
      },
      {
        id: 'spt-2',
        phase: 2,
        phaseTitle: 'Wearable Technology & Training Load Monitoring',
        weekRange: 'Weeks 5–8',
        title: 'Catapult / STATSports GPS Telemetry & Acute:Chronic Workload Ratios',
        description: 'Calculate high-speed running metrics, sprint distances, and identify overtraining risk thresholds.',
        keySkills: ['GPS Telemetry', 'Workload Monitoring', 'Excel / Python'],
        projectMilestone: 'Build an automated training load dashboard flagging high-risk fatigue spikes.'
      },
      {
        id: 'spt-3',
        phase: 3,
        phaseTitle: 'Periodization & Strength Conditioning Design',
        weekRange: 'Weeks 9–12',
        title: 'Block Periodization, Velocity-Based Training (VBT) & CSCS Prep',
        description: 'Design macrocycles, mesocycles, and microcycles aligned with competitive in-season schedules.',
        keySkills: ['Periodization', 'CSCS Preparation', 'VBT Training'],
        projectMilestone: 'Design a 16-week annual periodized training program for a collegiate team sport.'
      },
      {
        id: 'spt-4',
        phase: 4,
        phaseTitle: 'Coaching Communication & Tactical Video Integration',
        weekRange: 'Weeks 13–16',
        title: 'Translating Data into Coaching Insights & Tactical Video Tagging',
        description: 'Integrate physical performance stats directly with tactical video footage (Hudl / Dartfish).',
        keySkills: ['Video Tagging', 'Data Storytelling', 'Coach Communication'],
        projectMilestone: 'Deliver a pre-game tactical performance presentation to a head coach with actionable match recommendations.'
      }
    ]
  },

  // 21. HEALTHCARE - MEDICAL DOCTOR (PHYSICIAN)
  {
    id: 'medical-doctor-physician',
    title: 'Medical Doctor (Physician)',
    category: 'Healthcare & Medicine',
    subcategory: 'Clinical Medicine & Diagnosis',
    industries: ['Healthcare', 'Hospitals', 'Outpatient Clinics', 'Academic Medicine', 'Government Health'],
    occupationCode: '29-1228.00',
    description: 'Diagnoses illnesses, prescribes treatments, interprets clinical diagnostic tests, and manages acute and chronic medical conditions.',
    workEnvironment: 'Hospitals, specialty outpatient clinics, academic medical centers, and emergency trauma facilities.',
    difficulty: 'Advanced',
    typicalDurationMonths: 24,
    requiredSkills: [
      { name: 'Clinical Diagnosis & Pathology', importance: 5, minProficiency: 'Advanced', category: 'Medical Science' },
      { name: 'Pharmacotherapy & Treatment Protocols', importance: 5, minProficiency: 'Advanced', category: 'Medical' },
      { name: 'Patient Assessment & Triage', importance: 5, minProficiency: 'Advanced', category: 'Clinical Care' },
      { name: 'Anatomy & Physiology', importance: 5, minProficiency: 'Advanced', category: 'Medical Science' },
      { name: 'Medical Ethics & Decision Making', importance: 5, minProficiency: 'Advanced', category: 'Clinical' }
    ],
    matchingInterests: ['Healthcare', 'Science', 'Research', 'Social Impact'],
    matchingStrengths: ['Decision making', 'Analytical thinking', 'Problem solving', 'Empathy', 'Attention to detail'],
    educationPathways: [
      'Doctor of Medicine (M.D.) or Doctor of Osteopathic Medicine (D.O.)',
      'Medical Licensing Examination (USMLE / PLAB / FMGE) and accredited Clinical Residency'
    ],
    workPreferenceAlignment: {
      teamwork: 5,
      buildingVsAnalyzing: 5,
      creativeVsStructured: 1,
      mathComfort: 4,
      peopleFacing: 5,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Medical Resident Physician', 'Clinical Fellow', 'Hospital House Officer'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Resident Physician (PGY-1 to PGY-3)', typicalExperience: '0-3 years', focus: 'Supervised clinical rotations, patient management, overnight call' },
      { stage: 'Junior', title: 'Attending Physician', typicalExperience: '3-6 years', focus: 'Autonomous clinical practice, patient caseload, clinical investigations' },
      { stage: 'Mid Level', title: 'Senior Attending / Associate Clinical Professor', typicalExperience: '6-10 years', focus: 'Clinical subspecialty, resident mentorship, quality committees' },
      { stage: 'Senior', title: 'Department Chair / Chief of Service', typicalExperience: '10-15 years', focus: 'Departmental clinical standards, hospital protocol leadership' },
      { stage: 'Lead / Specialist', title: 'Chief Medical Officer (CMO)', typicalExperience: '15+ years', focus: 'Hospital clinical strategy, executive health network governance' }
    ],
    salaryRange: { entry: '$68,000 (Resident)', median: '$220,000', senior: '$380,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'med-1',
        phase: 1,
        phaseTitle: 'Pre-Clinical Biological & Chemical Foundations',
        weekRange: 'Weeks 1–4',
        title: 'Cellular Biochemistry, Anatomy & Human Physiology',
        description: 'Understand organ systems, homeostatic feedback loops, and cellular disease mechanisms.',
        keySkills: ['Anatomy & Physiology', 'Medical Science', 'Biochemistry'],
        projectMilestone: 'Clinical case study solving complex multi-system physiological endocrine disorder.'
      },
      {
        id: 'med-2',
        phase: 2,
        phaseTitle: 'Pathology & Pharmacology Foundations',
        weekRange: 'Weeks 5–8',
        title: 'Disease Pathogenesis, Microbiology & Pharmacodynamics',
        description: 'Learn cellular pathology, bacterial/viral mechanisms, and pharmacotherapeutic drug classes.',
        keySkills: ['Pharmacotherapy', 'Pathology', 'Clinical Diagnostics'],
        projectMilestone: 'Develop a differential diagnosis and evidence-based pharmacotherapy plan for acute sepsis.'
      },
      {
        id: 'med-3',
        phase: 3,
        phaseTitle: 'Clinical Clerkship & Bedside Diagnostic Reasoning',
        weekRange: 'Weeks 9–12',
        title: 'Patient History Taking, Physical Exam & Clinical Lab Interpretation',
        description: 'Practice diagnostic reasoning, EKG interpretation, and imaging requisition analysis.',
        keySkills: ['Patient Assessment', 'Diagnostic Reasoning', 'Lab Analysis'],
        projectMilestone: 'Formulate 10 complete SOAP clinical notes across diverse internal medicine admissions.'
      },
      {
        id: 'med-4',
        phase: 4,
        phaseTitle: 'Medical Licensing & Residency Readiness',
        weekRange: 'Weeks 13–16',
        title: 'High-Yield Clinical Case Simulations & Licensing Preparation',
        description: 'Complete comprehensive medical licensing board question banks and medical ethics review.',
        keySkills: ['Medical Ethics', 'Board Prep', 'Emergency Triage'],
        projectMilestone: 'Achieve 85%+ on full-length comprehensive clinical knowledge simulation examination.'
      }
    ]
  },

  // 22. AI & DATA - MACHINE LEARNING ENGINEER
  {
    id: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    category: 'AI & Data',
    subcategory: 'Applied Machine Learning & MLOps',
    industries: ['Technology', 'Autonomous Vehicles', 'Finance', 'Healthcare', 'Robotics'],
    occupationCode: '15-1299.08',
    description: 'Designs, builds, and deploys production machine learning pipelines, optimizing model inference latency and feature store architectures.',
    workEnvironment: 'AI engineering labs, high-growth technology companies, and distributed AI research hubs.',
    difficulty: 'Advanced',
    typicalDurationMonths: 8,
    requiredSkills: [
      { name: 'Python', importance: 5, minProficiency: 'Advanced', category: 'Programming' },
      { name: 'Machine Learning', importance: 5, minProficiency: 'Advanced', category: 'Data/AI' },
      { name: 'Deep Learning', importance: 5, minProficiency: 'Intermediate', category: 'Data/AI' },
      { name: 'Docker', importance: 4, minProficiency: 'Intermediate', category: 'Cloud/DevOps' },
      { name: 'REST APIs', importance: 4, minProficiency: 'Intermediate', category: 'Web' },
      { name: 'Data Structures & Algorithms', importance: 4, minProficiency: 'Intermediate', category: 'Programming' }
    ],
    matchingInterests: ['AI/ML', 'Technology', 'Data', 'Engineering', 'Mathematics'],
    matchingStrengths: ['Problem solving', 'Logical thinking', 'Analytical thinking', 'Attention to detail'],
    educationPathways: [
      'Bachelor’s or Master’s in Computer Science, Artificial Intelligence, or Data Science',
      'Demonstrated production MLOps portfolio deploying models to cloud environments'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 2, // strong engineering build focus
      creativeVsStructured: 3,
      mathComfort: 5,
      peopleFacing: 2,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Associate ML Engineer', 'Junior MLOps Engineer', 'AI Software Trainee'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Associate Machine Learning Engineer', typicalExperience: '0-2 years', focus: 'Data pipelines, baseline model training, unit tests' },
      { stage: 'Junior', title: 'Machine Learning Engineer', typicalExperience: '2-4 years', focus: 'MLOps pipelines, distributed training, latency optimization' },
      { stage: 'Mid Level', title: 'Senior ML Engineer', typicalExperience: '4-7 years', focus: 'Model serving architectures, feature stores, drift detection' },
      { stage: 'Senior', title: 'Staff AI Engineer / Lead Architect', typicalExperience: '7-10 years', focus: 'Company-wide foundational model strategies, multi-GPU clusters' },
      { stage: 'Lead / Specialist', title: 'Head of Applied AI / VP AI Engineering', typicalExperience: '10+ years', focus: 'Enterprise generative AI initiatives, research translation' }
    ],
    salaryRange: { entry: '$85,000', median: '$135,000', senior: '$190,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'mle-1',
        phase: 1,
        phaseTitle: 'Python Engineering & Advanced Model Training',
        weekRange: 'Weeks 1–4',
        title: 'PyTorch, Tensor Operations & Feature Engineering',
        description: 'Build robust data loaders, loss functions, and train custom neural network architectures.',
        keySkills: ['Python', 'PyTorch', 'Machine Learning'],
        projectMilestone: 'Train a deep classification model with custom dataset transformations and checkpointing.'
      },
      {
        id: 'mle-2',
        phase: 2,
        phaseTitle: 'Model Serving & High-Throughput APIs',
        weekRange: 'Weeks 5–8',
        title: 'FastAPI, ONNX Runtime, Quantization & Batching',
        description: 'Quantize weights (INT8/FP16) and serve models with dynamic batching under 20ms latency.',
        keySkills: ['FastAPI', 'Model Optimization', 'REST APIs'],
        projectMilestone: 'Deploy an optimized inference microservice serving predictions with sub-30ms p95 latency.'
      },
      {
        id: 'mle-3',
        phase: 3,
        phaseTitle: 'MLOps Automation & Monitoring',
        weekRange: 'Weeks 9–12',
        title: 'Docker, MLflow, Data Drift & Automated Retraining',
        description: 'Track experiments, version models, and trigger automated retraining pipelines upon data drift.',
        keySkills: ['Docker', 'MLOps / MLflow', 'Data Drift Detection'],
        projectMilestone: 'Set up an end-to-end automated MLOps pipeline with CI/CD and Evidently AI drift alarms.'
      },
      {
        id: 'mle-4',
        phase: 4,
        phaseTitle: 'Distributed Systems & Production Deployment',
        weekRange: 'Weeks 13–16',
        title: 'Kubernetes Model Serving (KServe/Triton) & Portfolio',
        description: 'Deploy auto-scaling model clusters on cloud providers and package full open-source portfolio.',
        keySkills: ['Kubernetes', 'Cloud Deployment', 'System Architecture'],
        projectMilestone: 'Deploy high-availability production ML system processing real-time telemetry streams.'
      }
    ]
  },

  // 23. ENGINEERING - CIVIL & STRUCTURAL ENGINEER
  {
    id: 'civil-structural-engineer',
    title: 'Civil & Structural Engineer',
    category: 'Engineering',
    subcategory: 'Infrastructure & Structural Design',
    industries: ['Construction', 'Civil Infrastructure', 'Consulting Firms', 'Municipal Government', 'Transportation'],
    occupationCode: '17-2051.00',
    description: 'Designs, plans, and oversees the construction of critical infrastructure including bridges, highway systems, water treatment plants, and skyscrapers.',
    workEnvironment: 'Civil engineering design offices, government municipal departments, and active field construction job sites.',
    difficulty: 'Advanced',
    typicalDurationMonths: 12,
    requiredSkills: [
      { name: 'CAD Modeling (SolidWorks/AutoCAD)', importance: 5, minProficiency: 'Advanced', category: 'Engineering' },
      { name: 'Structural Analysis (STAAD / SAP2000)', importance: 5, minProficiency: 'Advanced', category: 'Engineering' },
      { name: 'Building Codes & Life Safety (IBC)', importance: 4, minProficiency: 'Intermediate', category: 'Codes' },
      { name: 'Materials Science (Concrete/Steel)', importance: 4, minProficiency: 'Intermediate', category: 'Engineering' },
      { name: 'Geotechnical & Soil Mechanics', importance: 4, minProficiency: 'Intermediate', category: 'Science' }
    ],
    matchingInterests: ['Engineering', 'Architecture', 'Environment', 'Public Service'],
    matchingStrengths: ['Problem solving', 'Attention to detail', 'Logical thinking', 'Analytical thinking'],
    educationPathways: [
      'Bachelor of Science in Civil Engineering (ABET-accredited)',
      'Fundamentals of Engineering (FE) exam and Professional Engineer (PE) licensure'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 2,
      creativeVsStructured: 1,
      mathComfort: 5,
      peopleFacing: 3,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Junior Structural Designer', 'Civil Field Engineer Trainee', 'Municipal Engineering Assistant'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Civil Engineer Intern / EIT', typicalExperience: '0-2 years', focus: 'Site grading calculations, stormwater runoff plans, structural drafting' },
      { stage: 'Junior', title: 'Licensed Professional Civil Engineer (PE)', typicalExperience: '2-5 years', focus: 'Seismic structural design, foundation analysis, permit submittals' },
      { stage: 'Mid Level', title: 'Senior Project Civil Engineer', typicalExperience: '5-9 years', focus: 'Infrastructure contract management, multidisciplinary coordination' },
      { stage: 'Senior', title: 'Principal Structural Engineer / Associate', typicalExperience: '9-14 years', focus: 'Major municipal bridges, high-rise structural systems, firm equity' },
      { stage: 'Lead / Specialist', title: 'Chief Infrastructure Officer / VP Civil Engineering', typicalExperience: '14+ years', focus: 'Regional infrastructure master plans, major civic commissions' }
    ],
    salaryRange: { entry: '$64,000', median: '$92,000', senior: '$138,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'civ-1',
        phase: 1,
        phaseTitle: 'Statics, Mechanics of Materials & AutoCAD Civil',
        weekRange: 'Weeks 1–4',
        title: 'Shear Force, Bending Moments & Civil Drafting Standards',
        description: 'Calculate beam deflection, trusses, and draft precise topographic site plans in Civil 3D.',
        keySkills: ['AutoCAD', 'Structural Mechanics', 'Site Topography'],
        projectMilestone: 'Produce a complete grading and drainage plan for a 5-acre commercial development.'
      },
      {
        id: 'civ-2',
        phase: 2,
        phaseTitle: 'Reinforced Concrete & Structural Steel Design',
        weekRange: 'Weeks 5–8',
        title: 'ACI 318 Concrete Codes, AISC Steel Specifications & Load Combinations',
        description: 'Size rebar reinforcement, steel wide-flange beams, and calculate lateral wind and seismic loads.',
        keySkills: ['Concrete Design', 'Steel Design', 'Building Codes'],
        projectMilestone: 'Design a 4-story steel-framed structure with seismic bracing calculations.'
      },
      {
        id: 'civ-3',
        phase: 3,
        phaseTitle: 'Geotechnical Foundation Engineering',
        weekRange: 'Weeks 9–12',
        title: 'Soil Bearing Capacity, Deep Piles & Retaining Wall Stability',
        description: 'Interpret soil boring logs, calculate foundation settlement, and size retaining walls.',
        keySkills: ['Soil Mechanics', 'Foundation Engineering', 'Retaining Walls'],
        projectMilestone: 'Design a cantilevered retaining wall package with safety factor calculations.'
      },
      {
        id: 'civ-4',
        phase: 4,
        phaseTitle: 'Construction Management & PE Exam Readiness',
        weekRange: 'Weeks 13–16',
        title: 'Civil Construction Specs, Cost Estimation & Licensure Preparation',
        description: 'Compile construction contract documents, manage bidding processes, and review PE exam modules.',
        keySkills: ['Cost Estimation', 'Contract Specs', 'PE Exam Prep'],
        projectMilestone: 'Compile complete civil construction specification document ready for municipal permit sign-off.'
      }
    ]
  },

  // 24. TECHNOLOGY - CLOUD SOLUTIONS ARCHITECT
  {
    id: 'cloud-solutions-architect',
    title: 'Cloud Solutions Architect',
    category: 'Technology',
    subcategory: 'Cloud Infrastructure & Enterprise Systems',
    industries: ['Technology', 'Finance', 'Enterprise SaaS', 'Consulting', 'Healthcare'],
    occupationCode: '15-1299.09',
    description: 'Envisions and designs highly available, fault-tolerant, and secure enterprise cloud architectures across AWS, Azure, and Google Cloud.',
    workEnvironment: 'Enterprise technology consulting, corporate IT headquarters, and distributed remote tech teams.',
    difficulty: 'Advanced',
    typicalDurationMonths: 8,
    requiredSkills: [
      { name: 'AWS', importance: 5, minProficiency: 'Advanced', category: 'Cloud/DevOps' },
      { name: 'Azure', importance: 4, minProficiency: 'Intermediate', category: 'Cloud/DevOps' },
      { name: 'Docker', importance: 4, minProficiency: 'Intermediate', category: 'Cloud/DevOps' },
      { name: 'Linux', importance: 4, minProficiency: 'Intermediate', category: 'Systems' },
      { name: 'Network Security', importance: 4, minProficiency: 'Intermediate', category: 'Security' },
      { name: 'REST APIs', importance: 4, minProficiency: 'Intermediate', category: 'Web' }
    ],
    matchingInterests: ['Technology', 'Engineering', 'Business', 'Cybersecurity'],
    matchingStrengths: ['Problem solving', 'Logical thinking', 'Communication', 'Decision making'],
    educationPathways: [
      'Bachelor’s in Computer Science, Information Technology, or Cloud Systems Engineering',
      'AWS Certified Solutions Architect Professional or Azure Solutions Architect Expert'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 3,
      creativeVsStructured: 3,
      mathComfort: 3,
      peopleFacing: 4,
      practicalVsTheoretical: 2
    },
    entryLevelRoles: ['Junior Cloud Engineer', 'Cloud Operations Associate', 'DevOps Specialist'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Cloud Operations Engineer', typicalExperience: '0-2 years', focus: 'VM provisioning, monitoring alerts, backup schedules' },
      { stage: 'Junior', title: 'Cloud Systems Engineer', typicalExperience: '2-5 years', focus: 'Terraform IaC, VPC networking, container orchestration' },
      { stage: 'Mid Level', title: 'Solutions Architect', typicalExperience: '5-8 years', focus: 'Multi-region disaster recovery, cost optimization, security reviews' },
      { stage: 'Senior', title: 'Principal Cloud Architect', typicalExperience: '8-12 years', focus: 'Enterprise cloud migration, zero-trust cloud security governance' },
      { stage: 'Lead / Specialist', title: 'Chief Cloud Officer / VP Infrastructure', typicalExperience: '12+ years', focus: 'Multi-million dollar cloud agreements, global uptime reliability' }
    ],
    salaryRange: { entry: '$75,000', median: '$128,000', senior: '$180,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'csa-1',
        phase: 1,
        phaseTitle: 'Cloud Networking & Core Compute Services',
        weekRange: 'Weeks 1–4',
        title: 'Virtual Private Clouds (VPC), Subnetting, IAM & EC2 Compute',
        description: 'Build isolated cloud networks with route tables, NAT gateways, and least-privilege IAM policies.',
        keySkills: ['AWS', 'Cloud Networking', 'IAM Security'],
        projectMilestone: 'Deploy an auto-scaling, multi-AZ web compute cluster behind an Application Load Balancer.'
      },
      {
        id: 'csa-2',
        phase: 2,
        phaseTitle: 'Storage, Databases & Infrastructure as Code (IaC)',
        weekRange: 'Weeks 5–8',
        title: 'Terraform / OpenTofu, S3 Buckets, RDS Multi-AZ & Serverless',
        description: 'Define declarative infrastructure code to provision databases, storage lifecycle, and Lambdas.',
        keySkills: ['Terraform', 'Relational Databases', 'Serverless'],
        projectMilestone: 'Author a modular Terraform blueprint provisioning a complete 3-tier cloud application environment.'
      },
      {
        id: 'csa-3',
        phase: 3,
        phaseTitle: 'Container Orchestration & Microservices',
        weekRange: 'Weeks 9–12',
        title: 'Kubernetes (EKS/AKS), Service Meshes & Observability',
        description: 'Deploy containerized microservices with ingress controllers, secret managers, and Prometheus logs.',
        keySkills: ['Docker', 'Kubernetes', 'Observability'],
        projectMilestone: 'Deploy a resilient microservices architecture on managed Kubernetes with automated canary rollouts.'
      },
      {
        id: 'csa-4',
        phase: 4,
        phaseTitle: 'Disaster Recovery & Architect Certification',
        weekRange: 'Weeks 13–16',
        title: 'Active-Active Multi-Region DR, FinOps & Solutions Architect Exam',
        description: 'Design multi-region database replication, calculate FinOps cost savings, and pass professional exams.',
        keySkills: ['Disaster Recovery', 'FinOps Cost Optimization', 'AWS Certification'],
        projectMilestone: 'Present a complete Enterprise Cloud Migration & Disaster Recovery Blueprint document.'
      }
    ]
  },

  // 25. FINANCE - INVESTMENT BANKER
  {
    id: 'investment-banker',
    title: 'Investment Banker',
    category: 'Finance & Economics',
    subcategory: 'Mergers & Acquisitions and Capital Markets',
    industries: ['Investment Banking', 'Private Equity', 'Capital Markets', 'Corporate Development'],
    occupationCode: '13-2051.01',
    description: 'Advises corporations and institutions on mergers, acquisitions, debt issuances, and Initial Public Offerings (IPOs).',
    workEnvironment: 'Investment banking divisions, financial capitals, corporate client negotiations, and transaction desks.',
    difficulty: 'Advanced',
    typicalDurationMonths: 6,
    requiredSkills: [
      { name: 'Financial Modeling', importance: 5, minProficiency: 'Advanced', category: 'Finance' },
      { name: 'Valuation Methodologies (DCF, Comps)', importance: 5, minProficiency: 'Advanced', category: 'Finance' },
      { name: 'Excel', importance: 5, minProficiency: 'Advanced', category: 'Finance' },
      { name: 'Accounting Principles (GAAP/IFRS)', importance: 4, minProficiency: 'Advanced', category: 'Finance' },
      { name: 'M&A Due Diligence', importance: 4, minProficiency: 'Intermediate', category: 'Corporate' }
    ],
    matchingInterests: ['Finance', 'Business', 'Economics', 'Negotiation'],
    matchingStrengths: ['Analytical thinking', 'Attention to detail', 'Time management', 'Negotiation', 'Problem solving'],
    educationPathways: [
      'Bachelor’s in Finance, Economics, Business, or STEM from a competitive university',
      'MBA or Master’s in Financial Engineering; FINRA Series 79 & Series 63 licensing'
    ],
    workPreferenceAlignment: {
      teamwork: 4,
      buildingVsAnalyzing: 5,
      creativeVsStructured: 2,
      mathComfort: 5,
      peopleFacing: 4,
      practicalVsTheoretical: 3
    },
    entryLevelRoles: ['Investment Banking Analyst', 'M&A Research Trainee', 'Capital Markets Associate'],
    careerProgression: [
      { stage: 'Entry Level', title: 'Investment Banking Analyst', typicalExperience: '0-3 years', focus: 'Pitch books, complex DCF models, comparable company valuation' },
      { stage: 'Junior', title: 'Investment Banking Associate', typicalExperience: '3-6 years', focus: 'Deal execution management, client presentation leads, analyst supervision' },
      { stage: 'Mid Level', title: 'Vice President (VP)', typicalExperience: '6-9 years', focus: 'Day-to-day transaction leadership, key client negotiations, deal structuring' },
      { stage: 'Senior', title: 'Managing Director (MD)', typicalExperience: '9-15 years', focus: 'Client origination, multi-billion dollar M&A mandates, fee revenue generation' },
      { stage: 'Lead / Specialist', title: 'Head of Global Investment Banking', typicalExperience: '15+ years', focus: 'Firm executive committee, global cross-border market transactions' }
    ],
    salaryRange: { entry: '$105,000 + Bonus', median: '$175,000 + Bonus', senior: '$350,000+ to Millions', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'ib-1',
        phase: 1,
        phaseTitle: 'Financial Accounting & Advanced LBO Modeling',
        weekRange: 'Weeks 1–4',
        title: '3-Statement Linking, Debt Schedules & Leveraged Buyout (LBO) Mechanics',
        description: 'Build robust dynamic LBO models with senior and mezzanine debt tranches and returns tables.',
        keySkills: ['Financial Modeling', 'Accounting Principles', 'LBO Modeling'],
        projectMilestone: 'Build a fully functional Leveraged Buyout (LBO) model calculating IRR and MoIC returns.'
      },
      {
        id: 'ib-2',
        phase: 2,
        phaseTitle: 'M&A Accretion / Dilution & Merger Modeling',
        weekRange: 'Weeks 5–8',
        title: 'Synergy Valuation, Purchase Price Allocation & EPS Accretion',
        description: 'Model stock vs cash financing, tax impacts, goodwill creation, and combined company balance sheets.',
        keySkills: ['M&A Modeling', 'Valuation Methods', 'Due Diligence'],
        projectMilestone: 'Produce a comprehensive M&A transaction pitch deck with accretion/dilution analysis.'
      },
      {
        id: 'ib-3',
        phase: 3,
        phaseTitle: 'Pitch Book Construction & Capital Markets',
        weekRange: 'Weeks 9–12',
        title: 'Equity Capital Markets (ECM), Debt Issuances & Board Pitch Decks',
        description: 'Structure debt covenants, IPO roadshows, and draft executive board materials.',
        keySkills: ['Pitch Books', 'Capital Markets', 'Executive Presentation'],
        projectMilestone: 'Draft a 30-slide confidential strategic alternatives pitch deck for an enterprise client.'
      },
      {
        id: 'ib-4',
        phase: 4,
        phaseTitle: 'Transaction Closing & FINRA Series 79 Prep',
        weekRange: 'Weeks 13–16',
        title: 'Data Room Reviews, Fairness Opinions & Licensing Review',
        description: 'Conduct virtual data room due diligence and review FINRA Series 79 regulatory requirements.',
        keySkills: ['Deal Closing', 'FINRA Series 79', 'Commercial Law'],
        projectMilestone: 'Mock transaction negotiation simulation defending valuation multiples to opposing counsel.'
      }
    ]
  },

  // 26. SKILLED TRADES - HVAC & REFRIGERATION TECHNICIAN
  {
    id: 'hvac-technician',
    title: 'HVAC & Commercial Refrigeration Specialist',
    category: 'Skilled Trades',
    subcategory: 'Thermal Systems & Climate Control',
    industries: ['Commercial Real Estate', 'Industrial Facilities', 'Hospitals', 'Cold Storage Logistics'],
    occupationCode: '49-9021.00',
    description: 'Installs, diagnoses, retrofits, and maintains commercial heating, ventilation, air conditioning, and refrigeration systems.',
    workEnvironment: 'Industrial mechanical rooms, rooftop commercial plants, hospital chiller bays, and active job sites.',
    difficulty: 'Moderate',
    typicalDurationMonths: 8,
    requiredSkills: [
      { name: 'Refrigerant Diagnostics & EPA 608', importance: 5, minProficiency: 'Advanced', category: 'HVAC' },
      { name: 'Electrical Schematics & Blueprints', importance: 4, minProficiency: 'Intermediate', category: 'Electrical' },
      { name: 'Thermodynamics & Heat Transfer', importance: 4, minProficiency: 'Intermediate', category: 'Science' },
      { name: 'Airflow & Duct Balancing', importance: 4, minProficiency: 'Intermediate', category: 'HVAC' },
      { name: 'Multimeter & Diagnostic Testing', importance: 4, minProficiency: 'Intermediate', category: 'Diagnostics' }
    ],
    matchingInterests: ['Skilled Trades', 'Engineering', 'Technology'],
    matchingStrengths: ['Problem solving', 'Attention to detail', 'Decision making', 'Adaptability'],
    educationPathways: [
      'Trade Apprenticeship or Vocational Technical Diploma in HVAC/R Technology',
      'EPA Section 608 Universal Certification and State Mechanical / Contractor License'
    ],
    workPreferenceAlignment: {
      teamwork: 3,
      buildingVsAnalyzing: 2,
      creativeVsStructured: 1,
      mathComfort: 3,
      peopleFacing: 3,
      practicalVsTheoretical: 1
    },
    entryLevelRoles: ['HVAC Apprentice', 'Field Service Helper', 'Preventive Maintenance Tech'],
    careerProgression: [
      { stage: 'Entry Level', title: 'HVAC Apprentice / Helper', typicalExperience: '0-2 years', focus: 'Filter replacement, condenser cleaning, refrigerant recovery' },
      { stage: 'Junior', title: 'Journeyman Service Technician', typicalExperience: '2-5 years', focus: 'Compressor changeouts, electrical troubleshooting, TXV valve tuning' },
      { stage: 'Mid Level', title: 'Commercial Chiller Specialist', typicalExperience: '5-8 years', focus: 'Centrifugal chillers, cooling towers, building automation (BMS)' },
      { stage: 'Senior', title: 'HVAC Field Supervisor / Master Mechanic', typicalExperience: '8-12 years', focus: 'Fleet dispatch oversight, complex retrofits, customer contract bids' },
      { stage: 'Lead / Specialist', title: 'Director of Mechanical Operations / Contractor Owner', typicalExperience: '12+ years', focus: 'Mechanical contracting firm ownership, industrial thermal design' }
    ],
    salaryRange: { entry: '$46,000', median: '$68,000', senior: '$105,000+', currency: 'USD' },
    sampleRoadmap: [
      {
        id: 'hvac-1',
        phase: 1,
        phaseTitle: 'Refrigeration Cycle & EPA 608 Certification',
        weekRange: 'Weeks 1–4',
        title: 'Compression, Condensation, Expansion & Evaporation Physics',
        description: 'Understand superheat, subcooling, pressure-temperature (P/T) charts, and EPA recovery rules.',
        keySkills: ['Refrigeration Cycle', 'EPA 608', 'Pressure Gauges'],
        projectMilestone: 'Pass EPA Section 608 Universal Certification and measure superheat on live test bench.'
      },
      {
        id: 'hvac-2',
        phase: 2,
        phaseTitle: 'HVAC Electrical Diagnostics & Motors',
        weekRange: 'Weeks 5–8',
        title: 'Transformers, Contactors, Capacitors & Thermostats',
        description: 'Troubleshoot control voltage circuits (24V), line voltage (240/480V), and ECM blower motors.',
        keySkills: ['Electrical Schematics', 'Multimeter Testing', 'Motor Controls'],
        projectMilestone: 'Troubleshoot and repair 5 wired electrical faults on an industrial air handler control board.'
      },
      {
        id: 'hvac-3',
        phase: 3,
        phaseTitle: 'Air Distribution, Psychrometrics & Gas Heating',
        weekRange: 'Weeks 9–12',
        title: 'Psychrometric Charts, Static Pressure & Gas Furnace Safety',
        description: 'Measure external static pressure, calculate CFM airflow, and inspect heat exchangers for cracks.',
        keySkills: ['Psychrometrics', 'Airflow Balancing', 'Gas Heating'],
        projectMilestone: 'Perform complete combustion analysis and static pressure duct balance audit.'
      },
      {
        id: 'hvac-4',
        phase: 4,
        phaseTitle: 'Commercial Building Automation & Journeyman Licensing',
        weekRange: 'Weeks 13–16',
        title: 'BACnet Controls, Chiller Plant Maintenance & Contractor Exam Review',
        description: 'Monitor building automation systems, program variable frequency drives, and review codes.',
        keySkills: ['Building Automation', 'Chiller Maintenance', 'Licensing Prep'],
        projectMilestone: 'Compile preventive maintenance protocol and energy efficiency audit for a 50,000 sq ft building.'
      }
    ]
  }
];

export const INITIAL_SKILLS_LIBRARY = [
  // Programming & CS
  { name: 'Java', category: 'Programming' },
  { name: 'Python', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'C', category: 'Programming' },
  { name: 'C++', category: 'Programming' },
  { name: 'PHP', category: 'Programming' },
  { name: 'Data Structures & Algorithms', category: 'Programming' },

  // Web & Frameworks
  { name: 'HTML', category: 'Web' },
  { name: 'CSS', category: 'Web' },
  { name: 'React', category: 'Web' },
  { name: 'Node.js', category: 'Web' },
  { name: 'REST APIs', category: 'Web' },

  // Database
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },

  // Data & AI
  { name: 'Excel', category: 'Data/AI' },
  { name: 'Power BI', category: 'Data/AI' },
  { name: 'Statistics', category: 'Data/AI' },
  { name: 'Machine Learning', category: 'Data/AI' },
  { name: 'Deep Learning', category: 'Data/AI' },
  { name: 'NLP', category: 'Data/AI' },
  { name: 'Data Visualization', category: 'Data/AI' },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud/DevOps' },
  { name: 'Azure', category: 'Cloud/DevOps' },
  { name: 'Docker', category: 'Cloud/DevOps' },
  { name: 'Git', category: 'Cloud/DevOps' },
  { name: 'Linux', category: 'Cloud/DevOps' },

  // Healthcare & Medicine
  { name: 'Patient Assessment & Triage', category: 'Healthcare' },
  { name: 'Pharmacology Administration', category: 'Healthcare' },
  { name: 'Anatomy & Physiology', category: 'Healthcare' },
  { name: 'Psychological Assessment & Diagnosis', category: 'Healthcare' },
  { name: 'Cognitive Behavioral Therapy (CBT)', category: 'Healthcare' },

  // Engineering & Hardware
  { name: 'CAD Modeling (SolidWorks/AutoCAD)', category: 'Engineering' },
  { name: 'Thermodynamics & Heat Transfer', category: 'Engineering' },
  { name: 'Finite Element Analysis (FEA)', category: 'Engineering' },
  { name: 'Electrical Schematics & Blueprints', category: 'Engineering' },
  { name: 'PLC Programming (Ladder Logic)', category: 'Engineering' },

  // Business, Finance & Law
  { name: 'Financial Modeling', category: 'Finance' },
  { name: 'Accounting Principles (GAAP/IFRS)', category: 'Finance' },
  { name: 'Valuation Methodologies (DCF, Comps)', category: 'Finance' },
  { name: 'Product Strategy & Roadmapping', category: 'Business' },
  { name: 'Agile & Scrum Methodologies', category: 'Business' },
  { name: 'Contract Drafting & Negotiation', category: 'Law' },
  { name: 'Corporate Governance & Compliance', category: 'Law' },

  // Design, Arts & Media
  { name: 'Figma & Design Systems', category: 'Design' },
  { name: 'User Experience (UX) Research', category: 'Design' },
  { name: 'Search Engine Optimization (SEO)', category: 'Marketing' },
  { name: 'Content Marketing & Copywriting', category: 'Marketing' },
  { name: 'BIM & Revit Architecture', category: 'Architecture' },

  // Natural Sciences, Trades, Education & Sports
  { name: 'Soil Science & Nutrient Management', category: 'Agriculture' },
  { name: 'Molecular Biology Techniques (PCR, Gel Electrophoresis)', category: 'Science' },
  { name: 'Flight Navigation & Instrument Flying', category: 'Aviation' },
  { name: 'Curriculum & Instructional Design', category: 'Education' },
  { name: 'Culinary Techniques & Menu Development', category: 'Culinary' },
  { name: 'Biomechanics & Movement Screening', category: 'Sports' }
];

export const AVAILABLE_INTERESTS = [
  'Technology',
  'AI/ML',
  'Data',
  'Science',
  'Healthcare',
  'Business',
  'Finance',
  'Design',
  'Engineering',
  'Education',
  'Law',
  'Marketing',
  'Media',
  'Research',
  'Environment',
  'Agriculture',
  'Travel',
  'Sports',
  'Public Service',
  'Entrepreneurship',
  'Social Impact',
  'Skilled Trades'
];

export const AVAILABLE_STRENGTHS = [
  'Problem solving',
  'Logical thinking',
  'Communication',
  'Creativity',
  'Leadership',
  'Attention to detail',
  'Analytical thinking',
  'Adaptability',
  'Time management',
  'Teamwork',
  'Empathy',
  'Decision making',
  'Research',
  'Organization',
  'Negotiation'
];
