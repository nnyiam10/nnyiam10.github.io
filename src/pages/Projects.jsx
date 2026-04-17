import { useEffect } from 'react'
import PageContainer from '../components/PageContainer'

export default function Projects() {
	useEffect(() => {
		document.title = "Projects | Nten Nyiam"
	}, [])

	return (
		<PageContainer>
			<h1>Projects</h1>
			<p>Coming soon</p>
		</PageContainer>
	)
}
