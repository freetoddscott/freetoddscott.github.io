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
              'My name is Todd Scott, and I have been incarcerated for 38 years on a 25-to-life sentence. I am not writing to ask anyone to forget what I did, nor am I writing to excuse it. There is no excuse. I am writing because I owe the truth—to the victims, their families, and to anyone willing to hear my story.',
              'In 1988, I was responsible for taking part in acts that ended human life. That truth has never left me. It is the greatest regret I will ever carry. No amount of time, reflection, or remorse can restore the lives that were taken or erase the pain that was inflicted upon the families who have lived with that loss every day since. I think about that life often—far more than I can ever put into words. My remorse is not something I express only when asked about my crime. It is something I live with every single day. It is present in my quietest moments, in my prayers, in my memories, and in the weight I carry in my heart. I will carry that burden for the rest of my life.',
              'I was born addicted to heroin and raised in the South Jamaica Houses, where violence, addiction, and survival were part of everyday life. Those circumstances shaped my childhood, but they do not excuse the choices I made. Many people experience hardship without taking another person\'s life. I did, and I accept full responsibility for my actions without reservation.',
              'For 38 years, prison has forced me to confront the man I once was. There has been no escaping the truth. Every day has required me to look honestly at the devastation I caused and the person I became. Through decades of reflection, education, mentoring, counseling, and service to others, I have worked to become someone who contributes rather than destroys. But no amount of positive change can erase what I did. If anything, becoming a better man has made me understand even more deeply the magnitude of the pain I caused.',
              'There are still nights when sleep does not come easily. I think about the victims. I think about the families and the lives that were forever changed because of my actions. I think about birthdays that were never celebrated, milestones that were never reached, and the countless moments that were stolen forever. Those thoughts humble me. They remind me that true remorse is not measured by words but by how honestly a person accepts responsibility and how they choose to live every day afterward.',
              'Every morning, I wake knowing that someone else never had that opportunity because of me. That reality has become part of who I am. It has taught me that life is precious, that every decision carries consequences, and that one terrible choice can leave generations of pain. I can never undo what happened, but I can choose every day to live in a way that honors the value of the life I once failed to respect.',
              'For nearly four decades, I have prayed not only for myself but for the person whose life was taken and for the family who continues to live with unimaginable loss. I pray for their healing, even knowing I may never be deserving of their forgiveness. I pray for the strength to continue carrying the responsibility for what I did with honesty and humility. Those prayers are not about easing my own conscience—they are about remembering, every day, the life that can never be returned.',
              'I am not the same nineteen-year-old who entered prison in 1988. Age alone did not change me. Time alone did not change me. Accountability changed me. Reflection changed me. Accepting responsibility changed me. The countless hours spent examining my failures, helping others avoid the path I chose, and striving to live with integrity have changed me. The man writing this letter understands the value of human life in a way the young man who committed this crime never did.',
              'I understand that some people may believe nothing I do can ever outweigh the harm I caused. I respect that perspective. I do not ask anyone to forget the past or to ignore the suffering my actions created. I ask only that I be judged not solely by the worst decision I made at nineteen years old, but also by the man I have worked tirelessly to become over the last 38 years.',
              'If I am granted the opportunity to return to society, I will spend the remainder of my life honoring that chance through service, accountability, and helping others avoid making the same irreversible mistakes that changed so many lives, including my own.',
              'I cannot change yesterday. I can only continue living with honesty today and strive to make tomorrow meaningful.',
              'Thank you for taking the time to read my words.',
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
