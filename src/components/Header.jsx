import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      <div className="right">
        <Link to="/" className={pathname === '/' ? 'active' : ''}>about</Link>
        <Link to="/projects" className={pathname === '/projects' ? 'active' : ''}>projects</Link>
        <Link to="/resume" className={pathname === '/resume' ? 'active' : ''}>resume</Link>
      </div>
    </nav>
  )
}