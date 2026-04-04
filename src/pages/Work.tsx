import { useState } from 'react'
import PROJECTS from '../data/projects'
import ProjectCard from '../components/ui/ProjectCard'
import './Work.css'

const CATEGORIES = ['All', 'Still Render', 'Animation']

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active)

  return (
    <section className="work section">
      <div className="container">
        <p className="section-label">Selected Work</p>
        <h1 className="work__heading text-display">Projects</h1>

        {/* Filter pills */}
        <div className="work__filters" role="tablist" aria-label="Filter projects">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`work__filter${active === cat ? ' work__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="work__grid">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {/* YouTube */}
        <div className="work__yt-cta">
          <p className="text-muted">More work on YouTube</p>
          <a
            href="https://www.youtube.com/@BlenderDummy/videos"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            ↗ YouTube Channel
          </a>
        </div>
      </div>
    </section>
  )
}
