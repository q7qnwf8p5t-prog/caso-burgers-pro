import { useState } from 'react'
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: 'commande',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-3">
            On est là pour vous
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold uppercase text-[#F5F0E8]">
            Contact &<br />
            <span className="text-[#E8540A]">Commande</span>
          </h1>
          <p className="font-body text-[#8A8A8A] mt-4 max-w-xl mx-auto">
            Pour commander, poser une question ou nous donner votre avis.
            Nous répondons rapidement !
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone CTA */}
            <a
              href="tel:+262693500734"
              className="flex items-center gap-4 bg-[#E8540A] hover:bg-[#FF6B20] text-white rounded-2xl p-6 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-display text-xs tracking-widest uppercase opacity-80 mb-0.5">
                  Appeler maintenant
                </p>
                <p className="font-display text-xl font-semibold">+262 693 50 07 34</p>
              </div>
            </a>

            {/* Info cards */}
            {[
              {
                icon: <MapPin size={20} />,
                title: 'Adresse',
                lines: ['Rue Raphaël Barquisseau', 'Fleurimont, 97410 La Réunion'],
              },
              {
                icon: <Clock size={20} />,
                title: 'Horaires',
                lines: [
                  'Lun–Ven : 11h30–14h30 / 18h–22h',
                  'Samedi : 11h30–23h00',
                  'Dimanche : 12h00–21h00',
                ],
              },
            ].map((info) => (
              <div
                key={info.title}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#E8540A]">{info.icon}</div>
                  <h3 className="font-display text-sm tracking-widest uppercase text-[#F5F0E8]">
                    {info.title}
                  </h3>
                </div>
                {info.lines.map((line) => (
                  <p key={line} className="font-body text-sm text-[#8A8A8A] leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            ))}

            {/* Social */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <h3 className="font-display text-sm tracking-widest uppercase text-[#F5F0E8] mb-4">
                Réseaux Sociaux
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/20 text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors font-body text-sm"
                >
                  <FacebookIcon />
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500/20 transition-colors font-body text-sm"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </div>
            </div>

            {/* Map — GPS Rue Raphaël Barquisseau, Fleurimont */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden">
              <iframe
                title="Localisation CAS'O Burgers — Rue Raphaël Barquisseau, Fleurimont"
                src="https://maps.google.com/maps?q=Rue+Rapha%C3%ABl+Barquisseau%2C+Fleurimont%2C+La+R%C3%A9union&output=embed&z=16"
                width="100%"
                height="220"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <CheckCircle size={56} className="text-green-400 mb-4" />
                  <h2 className="font-display text-3xl font-bold uppercase text-[#F5F0E8] mb-3">
                    Message envoyé !
                  </h2>
                  <p className="font-body text-[#8A8A8A] mb-6">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.<br />
                    Pour commander rapidement, appelez-nous directement.
                  </p>
                  <a
                    href="tel:+262693500734"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8540A] text-white font-display text-sm tracking-widest uppercase rounded"
                  >
                    <Phone size={15} />
                    +262 693 50 07 34
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold uppercase text-[#F5F0E8] mb-2">
                    Envoyez-nous un message
                  </h2>
                  <p className="font-body text-sm text-[#8A8A8A] mb-8">
                    Pour toute question, commande groupée ou collaboration.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-display text-xs tracking-widest uppercase text-[#D4CEC4] mb-2"
                        >
                          Nom complet *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm font-body text-[#F5F0E8] placeholder-[#4A4A4A] focus:outline-none focus:border-[#E8540A] transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-display text-xs tracking-widest uppercase text-[#D4CEC4] mb-2"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jean@exemple.com"
                          className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm font-body text-[#F5F0E8] placeholder-[#4A4A4A] focus:outline-none focus:border-[#E8540A] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-display text-xs tracking-widest uppercase text-[#D4CEC4] mb-2"
                        >
                          Téléphone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+262 ..."
                          className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm font-body text-[#F5F0E8] placeholder-[#4A4A4A] focus:outline-none focus:border-[#E8540A] transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block font-display text-xs tracking-widest uppercase text-[#D4CEC4] mb-2"
                        >
                          Objet *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm font-body text-[#F5F0E8] focus:outline-none focus:border-[#E8540A] transition-colors appearance-none"
                        >
                          <option value="commande">Commande groupée</option>
                          <option value="question">Question sur le menu</option>
                          <option value="evenement">Événement / Privatisation</option>
                          <option value="partenariat">Partenariat</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-display text-xs tracking-widest uppercase text-[#D4CEC4] mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre demande..."
                        className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm font-body text-[#F5F0E8] placeholder-[#4A4A4A] focus:outline-none focus:border-[#E8540A] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-[#E8540A] hover:bg-[#FF6B20] disabled:opacity-60 disabled:cursor-not-allowed text-white font-display text-sm tracking-widest uppercase rounded-xl transition-all duration-200"
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send size={15} />
                      )}
                      {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>

                    <p className="font-body text-xs text-[#4A4A4A] text-center">
                      * Champs obligatoires. Pour commander rapidement :{' '}
                      <a href="tel:+262693500734" className="text-[#E8540A] hover:underline">
                        +262 693 50 07 34
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
