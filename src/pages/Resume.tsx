import PageContainer from '../components/PageContainer'
import ExperienceList from '../components/ExperienceList'

export default function Resume() {
  return (
    <PageContainer>
      <h2 className='resume-category'>Work Experience</h2>
      <ExperienceList />
    </PageContainer>
  )
}
