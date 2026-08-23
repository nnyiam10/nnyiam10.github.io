import PageContainer from '../components/PageContainer'
import ResumeCaptcha from '../components/ResumeCaptcha'
import ExperienceList from '../components/ExperienceList'

import { useState } from 'react'


export default function Resume() {
  const [authorized, setAuthorized] = useState(sessionStorage.getItem('resumeAuthorized') == 'true')

  if (!authorized) {
    return (
      <PageContainer>
        <ResumeCaptcha
          setAuthorized={
            setAuthorized
          }
        />
      </PageContainer>
    )
  }
  
  return (
    <PageContainer>
      <h2 className='resume-category'>Work Experience</h2>
      <ExperienceList />
    </PageContainer>
  )
}
