import './Contact.css'

export default function Contact() {
  return (
    <section className="contact section">
      <div className="container contact__inner">

        <div className="contact__intro">
          <p className="section-label">Contact</p>
          <h1 className="contact__heading text-display">
            Let&apos;s<br/>Work
          </h1>
          <p className="contact__sub text-muted">
            Available for freelance, collaborations, and studio contracts.
          </p>

          <div className="contact__socials">
            <a
              href="https://www.youtube.com/@BlenderDummy/videos"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              YouTube
            </a>
            <a
              href="mailto:darjo31w@gmail.com"
              className="btn-ghost"
            >
              darjo31w@gmail.com
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="project">Project type</label>
            <input id="project" type="text" placeholder="VFX, Compositing, Motion..." />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={6} placeholder="Tell me about your project..." required />
          </div>

          <button type="submit" className="btn-accent">Send Message</button>
        </form>

      </div>
    </section>
  )
}
