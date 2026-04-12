import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/press')({
  component: PressPage,
})

function PressPage() {
  const coverage = [
    {
      outlet: 'The New York Times',
      description:
        'In-depth reporting on Todd Scott\'s case and the broader questions it raises about New York\'s parole system.',
      label: 'Read Article',
      href: 'https://drive.google.com/file/d/1qs2cosJ9AeiLDDd2D9uPMn0fAnBO1pd_/view',
    },
    {
      outlet: 'KCRW — Press Play',
      description:
        'Madeleine Brand speaks with advocates about Todd\'s decades of rehabilitation and the HBO documentary.',
      label: 'Listen to Coverage',
      href: 'https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/musk-trump-parole-sf-photog/nature-crime',
    },
  ]

  return (
    <>
      {/* Page header */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', backgroundColor: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '2rem', padding: '0.3rem 1.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
          Press &amp; Media
        </div>
        <h1 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
          Todd Scott in the News
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>
          Coverage, documentary, and community letters documenting Todd's story and the movement for his release.
        </p>
      </div>

      {/* HBO Documentary — featured */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'var(--navy-light)', borderRadius: '1rem', padding: '2.5rem', border: '1px solid rgba(201,168,76,0.3)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '2rem', padding: '0.25rem 0.875rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                HBO Documentary
              </div>
              <h2 style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.2 }}>
                Nature of the Crime
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.975rem' }}>
                The HBO documentary tells Todd's story in his own words — from the night of the crime through 35 years of transformation, mentorship, and advocacy from behind bars.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="https://www.hbomax.com/movies/nature-of-the-crime/a83494c0-f7f4-4f85-8ca9-975e9acdb47e" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: '0.9rem', padding: '0.75rem 1.25rem' }}>
                  Watch Full Film
                </a>
                <a href="https://www.youtube.com/watch?v=dKLcR_AFA4Y" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ fontSize: '0.9rem', padding: '0.75rem 1.25rem' }}>
                  Watch Trailer
                </a>
              </div>
            </div>
            <div style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)', aspectRatio: '16/9', background: 'var(--navy)' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dKLcR_AFA4Y"
                title="Nature of the Crime — Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'block', border: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press coverage */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Press Coverage
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {coverage.map((item, i) => (
              <div key={i} style={{ backgroundColor: 'var(--navy-light)', borderRadius: '0.75rem', padding: '1.75rem', border: '1px solid rgba(201,168,76,0.15)', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <div style={{ fontWeight: 800, color: 'white', fontSize: '1.05rem' }}>{item.outlet}</div>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.925rem', lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {item.description}
                </p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ fontSize: '0.875rem', padding: '0.625rem 1rem', textAlign: 'center' }}>
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Letters of Support */}
      <section style={{ padding: '0 1.5rem 7rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Letters of Support
          </h2>
          <div style={{ backgroundColor: 'var(--navy-light)', borderRadius: '0.75rem', padding: '2rem', border: '1px solid rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 800, color: 'white', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Community Support Letters</div>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.925rem', lineHeight: 1.7, margin: 0, maxWidth: '480px' }}>
                Letters of support from elected officials, clergy, educators, and community members submitted to the parole board on Todd's behalf.
              </p>
            </div>
            <a href="https://drive.google.com/file/d/13-RKVREMJfAH0px3Aj9Wf_zaVIHzwV1k/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem', whiteSpace: 'nowrap' }}>
              Read Letters
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
          Moved by Todd's story?
        </p>
        <a href="/#petition" className="btn-gold" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
          Sign the Petition
        </a>
      </div>

    </>
  )
}
