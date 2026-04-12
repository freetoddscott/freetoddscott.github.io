import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useState } from 'react'

import '../styles.css'

const navLinks = [
  { href: '/#who', label: 'Who is Todd' },
  { href: '/#problem', label: 'The Problem' },
  { href: '/#action', label: 'HBO Documentary' },
  { href: '/#petition', label: 'Petition' },
  { href: '/press', label: 'Press' },
]

function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky-nav">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '0.5rem' }}
            aria-label="Toggle menu"
          >
            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--gold)', display: 'block' }} />
            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--gold)', display: 'block' }} />
            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--gold)', display: 'block' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: 'var(--navy)', borderTop: '1px solid rgba(201,168,76,0.2)', padding: '1rem 1.5rem 1.5rem' }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{ display: 'block', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: '1rem' }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export const Route = createRootRoute({
  component: () => (
    <div style={{ backgroundColor: 'var(--navy)', color: 'white', minHeight: '100vh' }}>
      <SiteNav />
      <Outlet />
      <footer style={{ backgroundColor: 'var(--navy)', borderTop: '1px solid rgba(201,168,76,0.2)', padding: '2rem 1.5rem', textAlign: 'center' }}>
        <div style={{ color: 'var(--gold)', fontWeight: 900, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          #FreeToddScott
        </div>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', margin: 0 }}>
          This website is maintained by supporters of Todd Scott's release. All information is provided for advocacy purposes.
        </p>
      </footer>
    </div>
  ),
})
