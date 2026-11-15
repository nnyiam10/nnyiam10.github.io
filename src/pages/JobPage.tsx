import { Link, useParams } from 'react-router-dom'
import jobs from '../data/jobs'

import PageContainer
from '../components/PageContainer'

export default function JobPage(){
  const { jobId } = useParams()
  
  const job=jobs.find(
      j=>j.id===jobId
  )


  if(!job){
    return(
      <PageContainer>
        Job not found
      </PageContainer>
    )
  }

  const currentIndex = 
    jobs.findIndex(
      j => j.id === jobId
    )

  const nextJob = 
    currentIndex < jobs.length - 1
      ? jobs[currentIndex + 1]
      : null
  const prevJob =
    currentIndex > 0
      ? jobs[currentIndex - 1]
      : null

  return(
    <PageContainer>
      <div className='job-header'>
        <div>
          <h1 className='job-company'>
            {job.company}
          </h1>

          <p className='job-role'>
            {job.role}
          </p>

          <p className='job-subtitle'>
            {job.city}
            {' • '}
            {job.dateLabel}
          </p>
        </div>
      </div>

      <div className='job-nav'>
        {prevJob ? (
          <Link to={`/resume/${prevJob.id}`} className='job-prev'>
            ← Previous
          </Link>
        ) : (
          <div />
        )}

        {nextJob && (
          <Link to={`/resume/${nextJob.id}`} className='job-next'>
            Next →
          </Link>
        )}
      </div>

      
      <hr />

      <div className='job-intro'>
        {job.intro.map(
          (paragraph, index)=>(
            <p key={index}>
              {paragraph}
            </p>
          )
        )}
      </div>

      <h2>
        Key Contributions
      </h2>

      <div className='job-card'>
        <div
          className='tech-stack'  
        >
          {job.technologies.map(
            tech=>(
              <span
                key={tech}
                className='tech-pill'
              >
                {tech}
              </span>
            )
          )}
        </div>
        
        <ul>
          {job.bullets.map(
            (bullet, index)=>(
              <li key={index}>
                {bullet}
              </li>
            )
          )}
        </ul>
      </div>

    </PageContainer>
  )
}
