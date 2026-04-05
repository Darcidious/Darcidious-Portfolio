import './About.css'

const SKILLS = [
  'Blender', 'DaVinci Resolve',
  'Rotoscoping', 'Motion Tracking', 'Color Grading', 'VFX',
  'Particle Simulation', 'Lighting', 'Rendering',
]

export default function About() {
  return (
    <section className="about section">
      <div className="container about__inner">

        {/* Left — image */}
        <div className="about__media">
          <img
            src="/Darcidious.png"
            alt="Darcidious Logo"
            className="about__media-img"
          />
        </div>

        {/* Right — bio */}
        <div className="about__content">
          <p className="section-label">About</p>

          <h1 className="about__heading text-display">
            Crafting<br/>Invisible<br/>Worlds
          </h1>

          <p className="about__bio">
            Darcidious is a VFX artist and compositor with a passion for
            photorealistic integration, procedural effects, and cutting-edge
            post-production workflows.
          </p>

          <div className="about__skills">
            {SKILLS.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <a href="/contact" className="btn-accent">
              Work Together
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
