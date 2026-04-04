import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/',        label: 'Home'    },
  { to: '/work',    label: 'Work'    },
  { to: '/about',   label: 'About'   },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo text-display">
          Darcidious
        </Link>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' navbar__link--active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
