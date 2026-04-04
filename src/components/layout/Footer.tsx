import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="text-display footer__logo">Darcidious</span>
          <p className="text-muted footer__tagline">VFX &amp; Compositing</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://www.youtube.com/@BlenderDummy/videos"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </nav>

        <p className="text-muted footer__copy">
          &copy; {year} Darcidious. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
