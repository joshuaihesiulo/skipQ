import { useState, useEffect, useCallback } from 'react';

const LINKS = [
  { href: '#why', label: 'What we do' },
  { href: '#how', label: 'How it works' },
  { href: '#why', label: 'Your shop' },
  { href: '#values', label: 'Our values' },
  { href: '#contact', label: 'Contact' },
];

export default function Header({ onWaitlist }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const header = document.querySelector('header.sec');
      if (header && !header.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [closeMenu]);

  return (
    <header className="sec" aria-label="Primary navigation">
      <button
        aria-controls="site-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="mobile-menu-toggle"
        type="button"
        onClick={toggleMenu}
      >
        &#x22EE;
      </button>

      <a href="#top" className="logo-link">
        <img alt="SkipQ" className="logo-img" src="/logo.png" />
      </a>

      <nav className={`site-navigation ${menuOpen ? 'menu-open' : ''}`} id="site-navigation">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="mobile-menu-cta btn" href="#waitlist" onClick={closeMenu}>
          Join the waitlist
        </a>
      </nav>

      <a className="btn" href="#waitlist" onClick={onWaitlist}>
        Join the waitlist
      </a>
    </header>
  );
}
