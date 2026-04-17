import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import { useEffect } from 'react'

const titles = {
  '/': 'Nten Nyiam',
  '/projects': 'Projects | Nten Nyiam',
  '/resume': 'Resume | Nten Nyiam'
}

function TitleUpdater() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    document.title = titles[pathname] || 'Nten Nyiam'
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
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