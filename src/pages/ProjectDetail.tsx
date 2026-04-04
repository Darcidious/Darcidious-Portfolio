import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import PROJECTS from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = PROJECTS.find((p) => p.slug === slug)

  const [showTexture, setShowTexture] = useState(false)

  if (!project) {
    return (
      <div className="page-placeholder">
        <p className="text-display" style={{ fontSize: '4rem', color: 'var(--clr-accent)' }}>404</p>
        <p className="text-muted">Project not found.</p>
        <Link to="/work" className="btn-ghost" style={{ marginTop: '1rem' }}>← Back to Work</Link>
      </div>
    )
  }

  const isVideo = project.mediaType === 'video'
  const hasTexture = isVideo ? !!project.textureVideoSrc : !!project.textureThumbnail
  const activeImage = hasTexture && showTexture ? project.textureThumbnail! : project.thumbnail
  const activeVideo = hasTexture && showTexture ? project.textureVideoSrc! : project.videoSrc

  return (
    <article className="project-detail section">
      <div className="container">

        <Link to="/work" className="project-detail__back text-muted">
          ← Back to Work
        </Link>

        <header className="project-detail__header">
          <p className="section-label">{project.category}</p>
          <h1 className="project-detail__title text-display">{project.title}</h1>
          <div className="project-detail__meta">
            <span className="text-muted">Year: <strong>{project.year}</strong></span>
          </div>
          <div className="project-detail__tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </header>

        {/* Main media */}
        <div className="project-detail__media">
          {isVideo ? (
            <div className="project-detail__image-wrap">
              <video
                src={activeVideo}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="project-detail__video"
              />
              {hasTexture && (
                <button
                  className={`project-detail__toggle${showTexture ? ' project-detail__toggle--active' : ''}`}
                  onClick={() => setShowTexture((v) => !v)}
                >
                  {showTexture ? 'Beauty Pass' : (project.textureLabel ?? 'Texture Pass')}
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="project-detail__image-wrap">
                <img
                  src={activeImage}
                  alt={project.title}
                  className="project-detail__img"
                />
                {hasTexture && (
                  <button
                    className={`project-detail__toggle${showTexture ? ' project-detail__toggle--active' : ''}`}
                    onClick={() => setShowTexture((v) => !v)}
                  >
                    {showTexture ? 'Beauty Pass' : (project.textureLabel ?? 'Texture Pass')}
                  </button>
                )}
              </div>

              {/* Additional detail images */}
              {project.detailImages && project.detailImages.length > 1 && (
                <div className="project-detail__gallery">
                  {project.detailImages.map((src, i) => (
                    <img key={i} src={src} alt={`${project.title} — ${i + 1}`} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <div className="project-detail__desc">
          <p>{project.description}</p>

          <a
            href="https://www.youtube.com/@BlenderDummy/videos"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            style={{ marginTop: '1.5rem', display: 'inline-flex' }}
          >
            ↗ More on YouTube
          </a>
        </div>

      </div>
    </article>
  )
}
