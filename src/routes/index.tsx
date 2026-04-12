import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'

export const Route = createFileRoute('/')({
  component: FreeToddScott,
})

function FreeToddScott() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [petitionState, handlePetitionSubmit] = useForm('xpqkakra')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { href: '#who', label: 'Who is Todd' },
    { href: '#journey', label: 'His Journey' },
    { href: '#problem', label: 'The Problem' },
    { href: '#voices', label: 'Voices' },
    { href: '#action', label: 'Take Action' },
    { href: '#petition', label: 'Petition' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div style={{ backgroundColor: 'var(--navy)', color: 'white', minHeight: '100vh' }}>
      {/* Sticky Nav */}
      <nav className="sticky-nav">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
            <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--gold)', fontWeight: 900, fontSize: '1.125rem', letterSpacing: '-0.01em' }}>
                #FreeToddScott
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '0.5rem',
              }}
              aria-label="Toggle menu"
            >
              <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--gold)', display: 'block' }} />
              <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--gold)', display: 'block' }} />
              <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--gold)', display: 'block' }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: 'var(--navy)',
            borderTop: '1px solid rgba(201,168,76,0.2)',
            padding: '1rem 1.5rem 1.5rem',
          }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{ display: 'block', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: '1rem' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 60%, #0d2844 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '4rem',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute', top: '10%', right: '5%',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '0',
          width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-block',
              backgroundColor: 'rgba(201,168,76,0.15)',
              color: 'var(--gold)',
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: '2rem',
              padding: '0.4rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              35+ Years Incarcerated · Demanding Justice
            </span>
          </div>

          <h1 className="hero-title" style={{ color: 'var(--gold)', marginBottom: '1.5rem', textShadow: '0 2px 20px rgba(201,168,76,0.3)' }}>
            Free Todd Scott
          </h1>

          <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
            Give Todd Scott the Opportunity to Prove His Growth, Redemption,
            and Potential to Become a Trusted Community Advocate.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#petition" className="btn-gold" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
              Sign the Petition
            </a>
            <a href="#action" className="btn-outline-gold" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
              Join the Movement
            </a>
          </div>
        </div>

        {/* Full-bleed hero photo */}
        <div style={{ width: '100%', height: '480px', overflow: 'hidden', position: 'relative', marginTop: '2rem' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to bottom, var(--navy), transparent)', zIndex: 1, pointerEvents: 'none' }} />
          <img
            src={`${import.meta.env.BASE_URL}todd-hero.jpg`}
            alt="A scene from the HBO documentary Nature of the Crime"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, var(--navy), transparent)', zIndex: 1, pointerEvents: 'none' }} />
        </div>
      </section>

      {/* Who is Todd Scott */}
      <section id="who" style={{ backgroundColor: 'var(--cream)', color: 'var(--navy)', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              {/* Portrait placeholder */}
              {/* Portrait — replace /todd-portrait.jpg in public/ with a real photo */}
            <div style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '3px solid var(--gold)',
              background: 'rgba(10,22,40,0.08)',
              height: '420px',
            }}>
              <img
                src={`${import.meta.env.BASE_URL}todd-portrait.jpg`}
                alt="Todd Scott portrait"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => {
                  const el = e.currentTarget
                  el.style.display = 'none'
                  const parent = el.parentElement!
                  parent.style.display = 'flex'
                  parent.style.alignItems = 'center'
                  parent.style.justifyContent = 'center'
                  parent.style.flexDirection = 'column'
                  parent.style.gap = '0.75rem'
                  parent.innerHTML = `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--navy-mid)" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg><span style="color:rgba(10,22,40,0.4);font-size:0.9rem">Add todd-portrait.jpg to public/</span>`
                }}
              />
            </div>
            </div>

            <div>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--gold)', color: 'var(--navy)', padding: '0.3rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Who is Todd Scott
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>
                A Man Transformed<br />Over 35 Years
              </h2>
              <div style={{ lineHeight: 1.85, fontSize: '1.05rem', color: '#2a3a50' }}>
                <p style={{ marginBottom: '1.25rem' }}>
                  In <strong>1989</strong>, at just <strong>19 years old</strong>, Todd Scott was convicted for his involvement in the murder of NYPD Officer Edward Byrne. He was sentenced to <strong>25 years to life</strong> in prison — a sentence that has now stretched beyond 35 years.
                </p>
                <p style={{ marginBottom: '1.25rem' }}>
                  That young man and the man Todd Scott is today are not the same person. Today, Todd is a <strong>devoted father</strong>, a <strong>loving husband</strong>, a trusted <strong>mentor</strong>, a <strong>devout Muslim</strong>, and a recognized <strong>community leader</strong> within the walls of the correctional system.
                </p>
                <p style={{ marginBottom: '1.25rem' }}>
                  If granted parole, Todd plans to return to <strong>Jamaica, Queens</strong> where he will work with <strong>Teens Against Crime</strong> — channeling his lived experience into preventing others from making the same mistakes he did at 19.
                </p>
                <p>
                  Todd Scott is not asking for the past to be forgotten. He is asking for the future to count.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Todd's Rehabilitative Journey */}
      <section id="journey" style={{ backgroundColor: 'var(--navy)', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '2rem', padding: '0.3rem 1.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Decades of Dedication
            </div>
            <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
              Todd's Rehabilitative Journey
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Over 35 years, Todd has consistently demonstrated the kind of transformation that rehabilitation programs are designed to achieve.
            </p>
          </div>

          <div className="timeline">
            {[
              { label: 'GED Earned — 1992', text: 'Earned his GED just three years into his sentence, setting the tone for decades of self-improvement.' },
              { label: 'Certified Educator', text: 'Became certified in HIV/AIDS awareness and health education, teaching fellow incarcerated individuals.' },
              { label: 'Y.A.P. Mentor', text: 'Joined the Youth Assistance Program, guiding at-risk youth through the consequences of crime.' },
              { label: 'Spiritual Leader', text: 'Became a recognized spiritual guide and community leader within the correctional facility.' },
              { label: 'Rehab Programs', text: 'Completed multiple rehabilitation and self-development programs throughout his incarceration.' },
              { label: 'YMCA Fundraiser', text: 'Organized fundraisers from behind bars supporting the YMCA and broader community initiatives.' },
              { label: 'Food Bank Donor', text: 'Donated to food banks in upstate New York — giving back to the community even while incarcerated.' },
              { label: 'No Infractions — 10+ Years', text: 'Has maintained a spotless disciplinary record for over a decade, a testament to sustained personal growth.' },
            ].map((item, i) => (
              <div key={i} className="timeline-item fade-in">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div style={{ fontWeight: 700, color: 'var(--gold)', fontSize: '0.875rem', marginBottom: '0.375rem', letterSpacing: '0.02em' }}>{item.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.95rem', lineHeight: 1.65 }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem With Parole */}
      <section id="problem" style={{ backgroundColor: '#07111f', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '2rem', padding: '0.3rem 1.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              A Broken System
            </div>
            <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
              The Problem With Parole
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
              New York State's parole system is broken. Instead of evaluating who a person <em>is today</em>, it fixates on who they were at the moment of their worst decision.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {[
              { stat: '85%', desc: 'of parole-eligible individuals who complete rehabilitation programs remain incarcerated' },
              { stat: '60%', desc: 'of parole denials cite "nature of the crime" — not the person before them today' },
              { stat: '$60K', desc: 'per year — the cost to New York taxpayers to keep one person incarcerated' },
            ].map((item, i) => (
              <div key={i} className="stat-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold)', lineHeight: 1, marginBottom: '0.875rem' }}>{item.stat}</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div style={{
            borderLeft: '4px solid var(--gold)',
            backgroundColor: 'var(--navy-light)',
            borderRadius: '0 0.75rem 0.75rem 0',
            padding: '2rem 2.25rem',
            maxWidth: '760px',
            margin: '0 auto',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--gold)" style={{ marginBottom: '1rem', opacity: 0.7 }}>
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', lineHeight: 1.75, margin: '0 0 1.25rem' }}>
              Giving a man legitimate hope is a laudable goal; giving him false hope is utterly inhumane.
            </blockquote>
            <cite style={{ color: 'var(--gold)', fontWeight: 700, fontStyle: 'normal', fontSize: '0.95rem' }}>
              — John MacKenzie
            </cite>
          </div>
        </div>
      </section>

      {/* Testimonials / Voices */}
      <section id="voices" style={{ backgroundColor: 'var(--navy)', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '2rem', padding: '0.3rem 1.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Community Support
            </div>
            <h2 className="section-title" style={{ color: 'white' }}>
              Words from Community Leaders<br />& Loved Ones
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                quote: 'In all my dealings with Mr. Scott, he was respectful and positive. I have always considered him to be a model inmate.',
                name: 'Superintendent Dale Artus',
                title: 'Attica Correctional Facility',
              },
              {
                quote: 'Mr. Scott has worked to turn his life around in prison...Today, I believe he is ready to come home and contribute to the community.',
                name: 'Assembly Member Eddie Gibbs',
                title: 'New York State Assembly',
              },
              {
                quote: 'We do not ask for mercy; we ask for recognition of redemption...',
                name: 'Sabrina Scott',
                title: "Todd's Wife",
              },
              {
                quote: 'Granting Mr. Scott parole would demonstrate New York\'s strong commitment to and belief in fairness and the power of personal transformation...',
                name: 'Senator Julia Salazar',
                title: 'New York State Senate',
              },
            ].map((t, i) => (
              <div key={i} className="quote-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--gold)" style={{ marginBottom: '1rem', opacity: 0.6 }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote style={{ fontSize: '1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, margin: '0 0 1.5rem' }}>
                  "{t.quote}"
                </blockquote>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--gold)', fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', marginTop: '0.2rem' }}>{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement / Action */}
      <section id="action" style={{ backgroundColor: 'var(--cream)', color: 'var(--navy)', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', backgroundColor: 'var(--gold)', color: 'var(--navy)', borderRadius: '2rem', padding: '0.3rem 1.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Take Action Now
            </div>
            <h2 className="section-title" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
              Join the Movement
            </h2>
            <p style={{ color: '#4a5a70', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Every action you take — no matter how small — adds to the chorus demanding justice and recognition of Todd's transformation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* HBO Documentary */}
            <div style={{ backgroundColor: 'var(--navy)', borderRadius: '0.75rem', padding: '1.75rem', border: '1px solid rgba(201,168,76,0.3)', transition: 'transform 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Watch the HBO Documentary</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Watch <em>"Nature of the Crime"</em> — the HBO documentary that tells Todd's story in his own words.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <a href="https://www.hbomax.com/movies/nature-of-the-crime/a83494c0-f7f4-4f85-8ca9-975e9acdb47e" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ textAlign: 'center', padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
                  Watch Full Film
                </a>
                <a href="https://www.youtube.com/watch?v=dKLcR_AFA4Y" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textAlign: 'center', padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
                  Watch Trailer on YouTube
                </a>
              </div>
            </div>

            {/* Write a Letter */}
            <div style={{ backgroundColor: 'var(--navy)', borderRadius: '0.75rem', padding: '1.75rem', border: '1px solid rgba(201,168,76,0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Write a Letter of Support</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Your voice matters. Send a letter of support directly to the parole board. Use our template to get started.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <a href="mailto:bringtoddscotthome57@gmail.com" className="btn-gold" style={{ textAlign: 'center', padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
                  Email Your Support
                </a>
                <a href="https://docs.google.com/document/d/1yxAjOUE5FnvN-JBnmtVWLN7klAVxpmFHNFbJJOAZ850/edit" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textAlign: 'center', padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
                  Download Letter Template
                </a>
              </div>
            </div>

            {/* Read & Share */}
            <div style={{ backgroundColor: 'var(--navy)', borderRadius: '0.75rem', padding: '1.75rem', border: '1px solid rgba(201,168,76,0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Read & Share the Story</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Read coverage from major outlets and letters of support from community members.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <a href="https://drive.google.com/file/d/1qs2cosJ9AeiLDDd2D9uPMn0fAnBO1pd_/view" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ textAlign: 'center', padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
                  NYTimes Article
                </a>
                <a href="https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/musk-trump-parole-sf-photog/nature-crime" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textAlign: 'center', padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
                  KCRW Coverage
                </a>
                <a href="https://drive.google.com/file/d/13-RKVREMJfAH0px3Aj9Wf_zaVIHzwV1k/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', padding: '0.625rem 1rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'underline', display: 'block', transition: 'color 0.2s' }}>
                  Read Letters of Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Petition Section */}
      <section id="petition" style={{ backgroundColor: '#07111f', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '2rem', padding: '0.3rem 1.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Add Your Name
            </div>
            <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
              Sign the Petition
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Add your name to the growing list of people demanding that Todd Scott be given a fair chance at parole — based on who he is today, not who he was at 19.
            </p>
          </div>

          {petitionState.succeeded ? (
            <div style={{
              backgroundColor: 'var(--navy-light)',
              border: '2px solid var(--gold)',
              borderRadius: '0.875rem',
              padding: '3rem',
              textAlign: 'center',
            }}>
              <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ color: 'var(--gold)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>Thank You!</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                Your signature has been recorded. Please share this page with friends and family to amplify Todd's story.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('I just signed the petition to #FreeToddScott — 35+ years incarcerated, a transformed man demanding a fair chance. Add your name: https://freetoddscott.github.io/')}`} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ fontSize: '0.9rem', padding: '0.625rem 1.25rem' }}>
                  Share on X (Twitter)
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://freetoddscott.github.io/')}`} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ fontSize: '0.9rem', padding: '0.625rem 1.25rem' }}>
                  Share on Facebook
                </a>
              </div>
            </div>
          ) : (
            <form
              className="petition-form"
              onSubmit={handlePetitionSubmit}
              style={{ backgroundColor: 'var(--navy-light)', borderRadius: '0.875rem', padding: '2.5rem', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label htmlFor="pet-name">Full Name *</label>
                  <input
                    id="pet-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                  <ValidationError field="name" errors={petitionState.errors} style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }} />
                </div>
                <div>
                  <label htmlFor="pet-email">Email Address *</label>
                  <input
                    id="pet-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                  <ValidationError field="email" errors={petitionState.errors} style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label htmlFor="pet-city">City</label>
                  <input
                    id="pet-city"
                    name="city"
                    type="text"
                    placeholder="Your city"
                  />
                </div>
                <div>
                  <label htmlFor="pet-state">State</label>
                  <input
                    id="pet-state"
                    name="state"
                    type="text"
                    placeholder="Your state"
                  />
                </div>
              </div>
              <div style={{ marginBottom: '1.75rem' }}>
                <label htmlFor="pet-message">Personal Message (Optional)</label>
                <textarea
                  id="pet-message"
                  name="message"
                  rows={3}
                  placeholder="Why do you support Todd's release? (Optional)"
                  style={{ resize: 'vertical' }}
                />
              </div>
              <ValidationError errors={petitionState.errors} style={{ color: '#f87171', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center', display: 'block' }} />
              <button
                type="submit"
                className="btn-gold"
                disabled={petitionState.submitting}
                style={{ width: '100%', fontSize: '1.05rem', padding: '1rem', opacity: petitionState.submitting ? 0.7 : 1 }}
              >
                {petitionState.submitting ? 'Submitting…' : 'Sign the Petition — Free Todd Scott'}
              </button>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '1rem', textAlign: 'center', lineHeight: 1.5 }}>
                Your information will only be used in support of Todd Scott's parole advocacy and will not be shared with third parties.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Write a Letter of Support */}
      <section id="letter" style={{ backgroundColor: 'var(--navy)', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '2rem', padding: '0.3rem 1.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Make Your Voice Heard
          </div>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1.25rem' }}>
            Write a Letter of Support
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Letters of support from community members carry significant weight with the parole board. Your words can make a direct difference. We've prepared a template to make it easy for you.
          </p>

          <div style={{ backgroundColor: 'var(--navy-light)', borderRadius: '1rem', padding: '2.5rem', border: '1px solid rgba(201,168,76,0.25)', marginBottom: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'left', marginBottom: '2rem' }}>
              <div>
                <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Step 1</div>
                <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>Download our letter template with talking points already included.</div>
              </div>
              <div>
                <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Step 2</div>
                <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>Personalize the letter with your own message and relationship to the community.</div>
              </div>
              <div>
                <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Step 3</div>
                <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>Email your letter to <strong style={{ color: 'var(--gold)' }}>bringtoddscotthome57@gmail.com</strong></div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://docs.google.com/document/d/1yxAjOUE5FnvN-JBnmtVWLN7klAVxpmFHNFbJJOAZ850/edit" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Download Letter Template
              </a>
              <a href="mailto:bringtoddscotthome57@gmail.com" className="btn-outline-gold">
                Send Your Letter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ backgroundColor: '#07111f', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1.25rem' }}>
            Get in Touch
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            For questions, media inquiries, or to coordinate advocacy efforts, reach out directly.
          </p>
          <a href="mailto:bringtoddscotthome57@gmail.com" className="btn-gold" style={{ fontSize: '1.05rem', wordBreak: 'break-all' }}>
            bringtoddscotthome57@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--navy)', borderTop: '1px solid rgba(201,168,76,0.2)', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ color: 'var(--gold)', fontWeight: 900, fontSize: '1.25rem', marginBottom: '1rem' }}>
            #FreeToddScott
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link" style={{ fontSize: '0.8rem' }}>
                {link.label}
              </a>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            This website is maintained by supporters of Todd Scott's release. All information is provided for advocacy purposes.
          </p>
        </div>
      </footer>
    </div>
  )
}
