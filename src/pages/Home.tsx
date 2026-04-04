import { useEffect, useState } from 'react'
import './Home.css'

// Cycling background images (converted to WebP for fast load)
const BACKGROUNDS = [
  '/Backgrounds/webp/1.webp',
  '/Backgrounds/webp/2.webp',
  '/Backgrounds/webp/3.webp',
  '/Backgrounds/webp/4.webp',
  '/Backgrounds/webp/5.webp',
]

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % BACKGROUNDS.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      {/* Background images — crossfade between them */}
      <div className="hero__bg" aria-hidden="true">
        {BACKGROUNDS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`hero__bg-img${i === bgIndex ? ' hero__bg-img--active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__content">
        <p className="section-label">VFX &amp; Compositing</p>

        <h1 className="hero__title text-display">
          Darcidious
        </h1>

        <p className="hero__sub">
          Crafting worlds through light, fire, and fracture.
        </p>

        <div className="hero__actions">
          <a href="/work" className="btn-accent">View Work</a>
          <a href="/contact" className="btn-ghost">Get in Touch</a>
        </div>
      </div>

      {/* Background dots nav */}
      <div className="hero__dots" aria-hidden="true">
        {BACKGROUNDS.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === bgIndex ? ' hero__dot--active' : ''}`}
            onClick={() => setBgIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
