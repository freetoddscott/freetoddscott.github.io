import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hear-from-todd')({
  component: HearFromToddPage,
})

function HearFromToddPage() {
  return (
    <>
      {/* Page header */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', backgroundColor: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '2rem', padding: '0.3rem 1.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
          In His Own Words
        </div>
        <h1 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
          Hear from Todd
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>
          A letter from Todd Scott — written with honesty, accountability, and the hope of being truly heard.
        </p>
      </div>

      {/* Letter */}
      <section style={{ padding: '0 1.5rem 8rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: 'var(--navy-light)',
            borderRadius: '1rem',
            border: '1px solid rgba(201,168,76,0.3)',
            padding: 'clamp(2rem, 6vw, 4rem)',
          }}>
            {/* Decorative quote mark */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--gold)" style={{ marginBottom: '2rem', opacity: 0.5 }}>
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '2.5rem' }}>
              To the Public,
            </p>

            {[
              'My name is Todd Scott, and I have been incarcerated for 38 years on a 25-to-life sentence. I am not writing to excuse what I did. There is no excuse. I am writing because I owe the truth—to the victim, to their family, and to anyone willing to hear it.',
              'In 1988, I was part of something that took a human life. That fact defines the deepest regret I carry. I cannot undo it. I cannot soften it. A person is gone because of choices I made, and a family has lived with that loss every single day. I think about that often—more often than I can put into words. My remorse is not something that comes and goes; it is constant. It lives with me in the quiet moments, in my thoughts, and in my dreams. I carry the weight of that life I helped take, and I will carry it for the rest of my own.',
              'I was born addicted to heroin and raised in the South Jamaica Projects, where survival came before understanding. But I want to be clear: my upbringing explains some things, but it does not excuse anything. Many people face hardship and do not take a life. I did, and I take full responsibility for that.',
              'Prison has given me time—decades of it—to reflect deeply on who I was and what I became. Over these 38 years, I have had to confront the reality of my actions without running from them. I have learned the value of human life in a way I failed to understand when it mattered most. I have worked to change—not just in words, but in how I think, how I act, and how I hold myself accountable every day. But growth does not erase guilt. If anything, it has made me more aware of the harm I caused.',
              'There are nights when I cannot sleep because of what I did. There are moments when the reality of it feels just as heavy as it must have felt to those I hurt. Remorse, for me, is not just saying "I\'m sorry." It is living with the understanding that no apology can ever be enough.',
              'Behind these walls, I pray every morning—not only for myself, but for the person whose life I took and for the family who continues to carry that loss. I pray for strength to keep facing what I\'ve done. And I pray for the chance, someday, to live in a way that reflects the man I have worked to become, even knowing I can never make things right.',
              'I am not the same person I was in 1988. Time, accountability, and reflection have changed me in ways that only years of honest confrontation can. I am asking you to see that change—not to forget what I did, but to recognize that I have spent nearly four decades trying to understand it, to take responsibility for it, and to become better than the person who made that irreversible decision.',
              'I am asking for a chance at freedom—not because I believe I deserve to escape my past, but because I have dedicated my life to facing it, learning from it, and living with its consequences every single day.',
            ].map((para, i) => (
              <p key={i} style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1.1rem',
                lineHeight: 1.9,
                marginBottom: '1.75rem',
              }}>
                {para}
              </p>
            ))}

            {/* Signature */}
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '0.5rem' }}>Respectfully,</p>
              <p style={{ color: 'var(--gold)', fontSize: '1.3rem', fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif", margin: 0 }}>
                Todd Scott
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', marginBottom: '1.5rem' }}>
              Moved by Todd's words? Add your voice.
            </p>
            <a href="/#petition" className="btn-gold" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
              Sign the Petition
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
