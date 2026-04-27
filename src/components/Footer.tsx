import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#111111] border-t border-[#2A2A2A] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#E8540A] flex items-center justify-center font-display font-bold text-white">
                C
              </div>
              <span className="font-display text-lg font-semibold tracking-widest uppercase">
                CAS'O<span className="text-[#E8540A]"> Burgers</span>
              </span>
            </div>
            <p className="text-[#8A8A8A] text-sm leading-relaxed font-body">
              Des burgers artisanaux généreux, préparés avec des ingrédients locaux
              frais. Le goût de La Réunion dans chaque bouchée.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook CAS'O Burgers"
                className="w-9 h-9 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] flex items-center justify-center text-[#8A8A8A] hover:text-[#E8540A] hover:border-[#E8540A] transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram CAS'O Burgers"
                className="w-9 h-9 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] flex items-center justify-center text-[#8A8A8A] hover:text-[#E8540A] hover:border-[#E8540A] transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm tracking-widest uppercase text-[#F5F0E8] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Accueil' },
                { path: '/menu', label: 'Notre Menu' },
                { path: '/about', label: 'À Propos' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#8A8A8A] hover:text-[#E8540A] transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm tracking-widest uppercase text-[#F5F0E8] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#E8540A] mt-0.5 shrink-0" />
                <span className="text-sm text-[#8A8A8A] font-body">
                  Rue Raphaël Barquisseau<br />Fleurimont, La Réunion
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#E8540A] shrink-0" />
                <a
                  href="tel:+262693500734"
                  className="text-sm text-[#8A8A8A] hover:text-[#E8540A] transition-colors font-body"
                >
                  +262 693 50 07 34
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-display text-sm tracking-widest uppercase text-[#F5F0E8] mb-4">
              Horaires
            </h3>
            <ul className="space-y-2">
              {[
                { days: 'Lun – Ven', hours: '11h30 – 14h30 / 18h – 22h' },
                { days: 'Samedi', hours: '11h30 – 23h00' },
                { days: 'Dimanche', hours: '12h00 – 21h00' },
              ].map((item) => (
                <li key={item.days} className="flex items-start gap-3">
                  <Clock size={13} className="text-[#E8540A] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#F5F0E8] font-medium font-body block">
                      {item.days}
                    </span>
                    <span className="text-xs text-[#8A8A8A] font-body">{item.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-green-400 font-body">Ouvert maintenant</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#8A8A8A] font-body">
            © {year} CAS'O Burgers. Tous droits réservés.
          </p>
          <p className="text-xs text-[#8A8A8A] font-body">
            Fait avec ❤️ à La Réunion
          </p>
        </div>
      </div>
    </footer>
  )
}
