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
    bullets: string[]
    logo: string
    level: number
    internship?: boolean
}

const jobs: Job[] = [
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
    bullets: [
      'Currently working on marketing review systems!',
    ],
    level: 2,
    logo: '/logos/hadrius.svg'
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

    bullets: [
      'Founding team member (engineer #6, employee #15), contributing to core platform development over a period of 3x ARR growth.',
      'Mocked up and implemented state-transition for prior authorizations, allowing us to trace changes and form auditable chains of authorization updates.',
      'Built and maintained  prior authorization automation pipelines. Including a  pre-submission OCR workflow using Azure Document Intelligence and LLM-based field extraction; rule based overrides for said extraced fields and customizable prompting based on payor, provider, specialty, etc; and backtesting against existing completed prior authorizaitons (ground truth) to identify systematic errors'

    ],
    level: 1.8,
    logo: '/logos/silna.svg'
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
    bullets: [
      'Developed a check name verification system to counter check washing fraud, processing hundreds of checks per day and improving verification accuracy from ~90% to 99.5%.',
      'Built a large portion of the backed for Ramp Business Accounts, specifcally allowing pushing and pulling via ACH Credit, Wire, or Real Time Payment.',
      'Built out real-time check tracking by surfacing status and location transitions to users as they occured.',
      'Developed an automated balance top-up system for delinquent accounts, using Celery to schedule daily asynchronous balance replenishment worflows.'
    ],
    level: 1,
    logo: '/logos/ramp.svg'
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
    bullets: [
      'Worked with the Enhanced Datamart (EDM) team on an automated AWS key rotation system for enterprise healthcare data clients, replacing a manual credential rotation workflow.',
      'Added frontend enhancements to internal React-based subscription management tooling, including feature flagged UI support for automated key rotation controls.',
      'Worked on a hackathon project to improve the speed and accuracy of medical data abstraction workflows.'
    ],
    level: 0,
    logo: '/logos/flatiron.svg',
    internship: true,
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
    bullets: [
      'Automated group and user management for the internal engineering platform using a scheduled, asynchronous Kotlin workflow that ingested data from multiple APIs into CockroachDB.',
      'Resolved collision issues on the CockroachDB table for group data, decreasing the latency of fetching group info from ~700ms to ~80ms.'
    ],
    level: 0,
    logo: '/logos/doordash.svg',
    internship: true,
  },
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
    bullets: [
      'Developed a full-stack admin tool to manage employee account access in fulfillment centers using React, Node.js, and serverless AWS infrastructure'
    ],
    level: 0,
    logo: '/logos/amazon.svg',
    internship: true,
  }
]

export default jobs