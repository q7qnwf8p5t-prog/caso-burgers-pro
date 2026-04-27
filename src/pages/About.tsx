import { Link } from 'react-router-dom'
import { ArrowRight, Heart, MapPin, Users, Award } from 'lucide-react'

const values = [
  {
    icon: <Heart size={24} />,
    title: 'Passion',
    desc: 'Chaque burger est préparé avec soin. Les sauces, les garnitures, le pain — tout est pensé pour que chaque bouchée soit mémorable.',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Ancrage Local',
    desc: 'Installés à Fleurimont dans l\'ouest réunionnais, nous servons avant tout notre communauté. Nos clients sont nos voisins.',
  },
  {
    icon: <Users size={24} />,
    title: 'Proximité',
    desc: 'Une adresse de quartier devenue une référence. CAS\'O Burgers, c\'est un lien de confiance construit bite après bite avec les habitants de l\'ouest.',
  },
  {
    icon: <Award size={24} />,
    title: 'Qualité',
    desc: 'Pain artisanal boulanger, steack haché bœuf 125g origine France, légumes issus d\'une agriculture raisonnée. Aucun compromis.',
  },
]

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 to-[#0A0A0A]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-3">
            Qui sommes-nous
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase text-[#F5F0E8] mb-5">
            À Propos de<br />
            <span className="text-[#E8540A]">CAS'O Burgers</span>
          </h1>
          <p className="font-body text-[#D4CEC4] max-w-xl mx-auto text-lg leading-relaxed">
            Une adresse de l'ouest réunionnais, proche de sa clientèle,
            devenue une référence du burger artisanal à La Réunion.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-3">
                Notre histoire
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F5F0E8] mb-6">
                Une Référence<br />
                <span className="text-[#E8540A]">dans l'Ouest</span>
              </h2>
              <div className="space-y-4 font-body text-[#D4CEC4] leading-relaxed">
                <p>
                  CAS'O Burgers s'est installé rue Raphaël Barquisseau, à Fleurimont,
                  dans l'ouest de La Réunion. Dès le départ, l'ambition était simple :
                  proposer de vrais burgers artisanaux, préparés à la commande, avec des
                  produits de qualité.
                </p>
                <p>
                  Proche de sa clientèle locale, l'adresse s'est imposée comme une
                  référence dans l'ouest réunionnais. Les habitués reviennent pour la
                  régularité, la générosité des portions et l'authenticité des recettes.
                </p>
                <p>
                  Le pain est fabriqué par un boulanger artisan. La viande de bœuf
                  vient de France. Les légumes sont issus d'une agriculture raisonnée.
                  Et le miel ? C'est celui de Julien, de la Ruche La Kour — un miel
                  réunionnais de baies roses que vous retrouvez dans le Burger Le Chèvre.
                </p>
              </div>
            </div>

            {/* Food photos only — no invented team shots */}
            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80"
                alt="Burger artisanal CAS'O"
                className="rounded-xl w-full h-56 object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80"
                alt="Burger garni"
                className="rounded-xl w-full h-56 object-cover mt-8"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80"
                alt="Ingrédients frais"
                className="rounded-xl w-full h-36 object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80"
                alt="Burger servi"
                className="rounded-xl w-full h-36 object-cover mt-4"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-2">
              Ce qui nous anime
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F5F0E8]">
              Nos <span className="text-[#E8540A]">Valeurs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#E8540A]/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8540A]/10 border border-[#E8540A]/20 flex items-center justify-center text-[#E8540A] mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display text-lg font-semibold uppercase text-[#F5F0E8] mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-[#8A8A8A] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements produits */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542574271-7f3b92e6c821?w=800&q=80"
                alt="Burger CAS'O Burgers"
                className="rounded-2xl w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-5 max-w-[200px]">
                <div className="font-display text-4xl font-bold text-[#E8540A]">100%</div>
                <div className="font-body text-sm text-[#8A8A8A] mt-1">
                  Préparé à la commande
                </div>
              </div>
            </div>

            <div>
              <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-3">
                Nos engagements
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F5F0E8] mb-6">
                La Qualité<br />
                <span className="text-[#E8540A]">Avant Tout</span>
              </h2>
              <div className="space-y-4 font-body text-[#D4CEC4] leading-relaxed mb-8">
                <p>
                  Chez CAS'O Burgers, chaque détail compte. On ne fait pas de compromis
                  sur les produits, et on ne prépare rien à l'avance.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  '🍞 Pain artisanal fabriqué par un boulanger',
                  '🥩 Steack haché 125g — viande bœuf origine France',
                  '🥬 Légumes issus d\'une agriculture raisonnée',
                  '🍯 Miel réunionnais de la Ruche La Kour (chez Julien)',
                  '🍗 Poulet citron, crispy, végétarien et poisson : faits maison',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-body text-[#D4CEC4]">
                    <span className="shrink-0 mt-0.5">{item.split(' ')[0]}</span>
                    <span>{item.split(' ').slice(1).join(' ')}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8540A] hover:bg-[#FF6B20] text-white font-display text-sm tracking-widest uppercase rounded transition-all duration-200"
              >
                Voir la carte
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
