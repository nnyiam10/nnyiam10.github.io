import { Link } from 'react-router-dom'
import jobs from '../data/jobs'

const minYear = 2021
const maxYear = 2027

export default function Timeline() {

  const years = [
    2021,
    2022,
    2023,
    2024,
    2025,
    2026,
    2027
  ]
  
  return (
    <>
      <div className='timeline-wrapper'>
        <div className="timeline">
          <div className="timeline-axis-label">
            Scope & Responsibility
          </div>
          {years.map(year => (
              <div
                key={year}
                className="timeline-gridline"
                style={{
                    left: `${((year-minYear)/(maxYear-minYear))*100}%`
                }}
              >
                <span>{year}</span>
              </div>
          ))}

          {jobs.map(job => {
            const left = ((job.start-minYear)/(maxYear-minYear))*100
            const rawWidth = ((job.end-job.start)/(maxYear-minYear))*100
            const width = Math.max(rawWidth, 5)
            const top = 300 - (job.level*70)
            
            return (
              <div
                key={job.id}
                className="timeline-item"
                style={{
                    left:`${left}%`,
                    top:`${top}px`,
                    width:`${width}%`
                }}
              >

                <div className="timeline-company">
                    {job.company}

                    {job.internship && ' (intern)'}
                </div>

                <div className='timeline-hover-wrapper'>
                  <div className='timeline-tooltip'>
                    <div className='tooltip-role'>
                      {job.role}
                    </div>

                    <div>
                      {job.city}
                    </div>

                    <div>
                      {job.dateLabel}
                    </div>
                  </div> 

                  <Link
                    to={`/resume/${job.id}`}
                    className="timeline-row"
                  >
                    <img
                        src={job.logo}
                        alt={job.company}
                        className="timeline-logo"
                    />

                    <div
                      className="timeline-bar"
                      style={{
                          background:job.color
                      }}
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <p className="timeline-note">
        Click a company to read about what I worked on.
      </p>
    </>
  )
}