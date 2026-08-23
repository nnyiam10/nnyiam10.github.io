import { Link } from 'react-router-dom'
import jobs from '../data/jobs'

export default function ExperienceList() {
  return (
    <div className="experience-list">
      {[...jobs].reverse().map(job => (
        <Link
          key={job.id}
          to={`/resume/${job.id}`}
          className="experience-row"
          aria-label={`View ${job.role} role at ${job.company}`}
        >
          <div className="experience-details">
            <h3>{job.role}</h3>
            <p className="experience-date">{job.dateLabel}</p>
            <p className="experience-company">
              {job.company} <span aria-hidden="true">—</span> {job.city}
            </p>
          </div>

          <span className="experience-arrow" aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  )
}
