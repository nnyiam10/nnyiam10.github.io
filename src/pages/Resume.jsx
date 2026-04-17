import { useEffect } from 'react'
import PageContainer from '../components/PageContainer'

export default function Resume() {
	useEffect(() => {
		document.title = "Resume | Nten Nyiam"
	}, [])

	return (
		<PageContainer>
			<h1>Resume</h1>
			<p>Coming soon.</p>
		</PageContainer>
	)
}