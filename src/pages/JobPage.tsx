import { Navigate, useParams } from 'react-router-dom'
import jobs from '../data/jobs'

import PageContainer
from '../components/PageContainer'

export default function JobPage(){
  const { jobId } = useParams()

  const authorized = 
    sessionStorage.getItem(
        'resumeAuthorized'
    ) === 'true'

  if (!authorized) {
    return (
        <Navigate to="/resume"/>
    )
  }
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

  return(
    <PageContainer>
      <h1>
        {job.company}
      </h1>
     
     <p>
        {job.role}
      </p>

      <ul>
      {job.bullets.map(
          (bullet,index)=>(

          <li key={index}>
              {bullet}
          </li>
      ))}
      </ul>
    </PageContainer>
  )
}