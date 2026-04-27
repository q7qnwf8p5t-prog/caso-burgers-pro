import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'À Propos' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-[#E8540A] flex items-center justify-center font-display font-bold text-white text-lg leading-none">
              C
            </div>
            <span
              className="font-display text-xl font-semibold tracking-widest uppercase text-[#F5F0E8] group-hover:text-[#E8540A] transition-colors"
            >
              CAS'O<span className="text-[#E8540A]"> Burgers</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium tracking-wider uppercase transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#E8540A]'
                    : 'text-[#D4CEC4] hover:text-[#F5F0E8]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+262693500734"
              className="flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-[#F5F0E8] transition-colors"
            >
              <Phone size={14} />
              <span className="font-body">+262 693 50 07 34</span>
            </a>
            <Link
              to="/contact"
              className="ml-2 px-5 py-2 bg-[#E8540A] hover:bg-[#FF6B20] text-white font-display text-sm font-medium tracking-wider uppercase rounded transition-colors duration-200"
            >
              Commander
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[#F5F0E8] hover:text-[#E8540A] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#2A2A2A]">
          <nav className="flex flex-col px-4 pt-4 pb-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 px-4 rounded font-display text-base tracking-widest uppercase transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#E8540A] bg-[#1A1A1A]'
                    : 'text-[#D4CEC4] hover:text-[#F5F0E8] hover:bg-[#1A1A1A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 px-4">
              <a
                href="tel:+262693500734"
                className="flex items-center gap-2 text-sm text-[#8A8A8A]"
              >
                <Phone size={14} />
                <span>+262 693 50 07 34</span>
              </a>
              <Link
                to="/contact"
                className="py-3 text-center bg-[#E8540A] text-white font-display text-sm tracking-wider uppercase rounded"
              >
                Commander maintenant
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
