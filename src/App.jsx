import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/resume" element={<Resume />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App