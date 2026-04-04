import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import './ProjectCard.css'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const [showTexture, setShowTexture] = useState(false)

  const hasTexture = !!project.textureThumbnail
  const activeThumbnail =
    hasTexture && showTexture ? project.textureThumbnail! : project.thumbnail

  return (
    <Link to={`/work/${project.slug}`} className="project-card">
      <div className="project-card__thumb">
        {project.mediaType === 'video' ? (
          <video
            className="project-card__video"
            src={project.videoSrc}
            muted
            autoPlay
            loop
            playsInline
          />
        ) : (
          <img
            src={activeThumbnail}
            alt={project.title}
            loading="lazy"
            decoding="async"
          />
        )}

        <div className="project-card__overlay">
          <span className="project-card__cta">View Project →</span>
        </div>

        {/* Texture toggle — stop Link navigation when clicking this */}
        {hasTexture && (
          <button
            className={`project-card__toggle${showTexture ? ' project-card__toggle--active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setShowTexture((v) => !v)
            }}
            title={showTexture ? 'Show beauty' : `Show ${project.textureLabel ?? 'texture'}`}
          >
            {showTexture ? 'Beauty' : (project.textureLabel ?? 'Texture')}
          </button>
        )}
      </div>

      <div className="project-card__meta">
        <div className="project-card__info">
          <h2 className="project-card__title">{project.title}</h2>
          <span className="text-muted project-card__year">{project.year}</span>
        </div>
        <div className="project-card__tags">
          <span className="tag">{project.category}</span>
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
