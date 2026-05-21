export interface Job {
    id: string
    
    company: string
    website: string
    role: string
    
    start: number
    end: number
    dateLabel: string

    city: string
    color: string
    logo: string
    level: number
    internship?: boolean

    technologies: string[]
    intro: string[]
    bullets: string[]
}

const jobs: Job[] = [
  {
    id: 'amazon',
    company: 'Amazon',
    website: 'https://amazon.com/',
    role: 'Software Engineering Intern',

    start: 2021.5,
    end: 2021.75,
    dateLabel: 'June 2021 – September 2021',

    city: 'Seattle, WA',
    color: '#F59E0B',
    logo: '/logos/amazon.svg',
    level: 0,
    internship: true,
    
    bullets: [
      'Developed a full-stack admin tool to manage employee account access in fulfillment centers using React, Node.js, and serverless AWS infrastructure'
    ],
    technologies: [
      'React',
      'Node.js',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB'
    ],
    intro: ['By the start of my sophomore year, I had declared a major in Computer Science and Molecular Biology. The previous summer, I leaned more into the molecular biology part of the major — doing research with the Garg Lab via the UROP program at MIT. This summer, I sought to explore industry for a change of pace.',
       'I was woefully unprepared for the process of applying to software engineering internships and ended up only applying to two companies: Amazon and JPMorgan Chase. I didn’t get past the OA for JPMorgan but was fortunate enough to receive an offer from Amazon.',
    ]
  },
  {
    id: 'doordash',
    company: 'DoorDash',
    website: 'https://www.doordash.com/',
    role: 'Software Engineering Intern',

    start: 2022.4,
    end: 2022.7,
    dateLabel: 'May 2022 – August 2022',

    city: 'San Francisco, CA',
    color: '#EF4444',
    logo: '/logos/doordash.svg',
    level: 0,
    internship: true,

    bullets: [
      'Automated group and user management for the internal engineering platform using a scheduled, asynchronous Kotlin workflow that ingested data from multiple APIs into CockroachDB.',
      'Resolved collision issues on the CockroachDB table for group data, decreasing the latency of fetching group info from ~700ms to ~80ms.'
    ],
    technologies: [],
    intro: [],
  },
  {
    id: 'flatiron',
    company: 'Flatiron Health',
    website: 'https://flatiron.com/',
    role: 'Software Engineering Intern',

    start: 2023.5,
    end: 2023.75,
    dateLabel: 'June 2023 – August 2023',

    city: 'New York, NY',
    color: '#3982F5',
    logo: '/logos/flatiron.svg',
    level: 0,
    internship: true,

    
    bullets: [
      'Worked with the Enhanced Datamart (EDM) team on an automated AWS key rotation system for enterprise healthcare data clients, replacing a manual credential rotation workflow.',
      'Added frontend enhancements to internal React-based subscription management tooling, including feature flagged UI support for automated key rotation controls.',
      'Worked on a hackathon project to improve the speed and accuracy of medical data abstraction workflows.'
    ],
    technologies: [],
    intro: [],
  },
  {
    id: 'ramp',
    company: 'Ramp',
    website: 'https://ramp.com/',
    role: 'Backend Software Engineer',

    start: 2024.4,
    end: 2025.25,
    dateLabel: 'May 2024 – April 2025',

    city: 'New York, NY',
    color: '#D9F20F',
    logo: '/logos/ramp.svg',
    level: 1,

    bullets: [
      'Developed a check name verification system to counter check washing fraud, processing hundreds of checks per day and improving verification accuracy from ~90% to 99.5%.',
      'Built a large portion of the backed for Ramp Business Accounts, specifcally allowing pushing and pulling via ACH Credit, Wire, or Real Time Payment.',
      'Built out real-time check tracking by surfacing status and location transitions to users as they occured.',
      'Developed an automated balance top-up system for delinquent accounts, using Celery to schedule daily asynchronous balance replenishment worflows.'
    ],
    technologies: [],
    intro: [],
  },
  {
    id: 'silna',

    company: 'Silna Health',
    website: 'https://www.silnahealth.com/',

    role: 'Software Engineer',

    start: 2025.25,
    end: 2026.2,

    dateLabel: 'April 2025 – March 2026',

    city: 'New York, NY',

    color: '#32073D',
    logo: '/logos/silna.svg',
    level: 1.8,

    bullets: [
      'Founding team member (engineer #6, employee #15), contributing to core platform development over a period of 3x ARR growth.',
      'Mocked up and implemented state-transition for prior authorizations, allowing us to trace changes and form auditable chains of authorization updates.',
      'Built and maintained  prior authorization automation pipelines. Including a  pre-submission OCR workflow using Azure Document Intelligence and LLM-based field extraction; rule based overrides for said extraced fields and customizable prompting based on payor, provider, specialty, etc; and backtesting against existing completed prior authorizaitons (ground truth) to identify systematic errors'

    ],
    technologies: [],
    intro: [],
  },
  {
    id: 'hadrius',
    company: 'Hadrius',
    website: 'https://www.hadrius.com/',
    role: 'Software Engineer',

    start: 2026.2,
    end: 2027,
    dateLabel: 'March 2026 – Present',

    city: 'New York, NY',
    color: '#614BE0',
    logo: '/logos/hadrius.svg',
    level: 2,
    
    bullets: [
      'Currently working on marketing review systems!',
    ],
    technologies: [],
    intro: [],
  }
]

export default jobs