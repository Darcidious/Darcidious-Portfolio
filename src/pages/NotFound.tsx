import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-placeholder">
      <p className="text-display" style={{ fontSize: '6rem', color: 'var(--clr-accent)' }}>
        404
      </p>
      <h1 style={{ fontSize: '1.5rem' }}>Page not found</h1>
      <p className="text-muted">This frame doesn&apos;t exist in the timeline.</p>
      <Link to="/" className="btn-ghost" style={{ marginTop: '1rem' }}>
        ← Go Home
      </Link>
    </div>
  )
}
