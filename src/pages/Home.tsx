import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Clock, Star, ChefHat, Leaf, Zap } from 'lucide-react'
import { burgers } from '../data/menu'

const featured = burgers.filter((b) => b.badge === 'bestseller').slice(0, 3)

const burgerImgs = [
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
  'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80',
  'https://images.unsplash.com/photo-1542574271-7f3b92e6c821?w=600&q=80',
]

const heroImg = 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1400&q=90'

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImg}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8540A]/40 bg-[#E8540A]/10 text-[#E8540A] text-xs font-display tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8540A] animate-pulse" />
              Fleurimont, La Réunion
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-none tracking-tight text-[#F5F0E8] mb-6">
              Des Burgers<br />
              <span className="text-[#E8540A]">Qui Déchirent</span>
            </h1>

            <p className="font-body text-base sm:text-lg text-[#D4CEC4] leading-relaxed max-w-lg mb-8">
              Artisanaux, généreux, irrésistibles. Chaque burger est préparé à la minute
              avec des produits frais. Le goût de La Réunion dans chaque bouchée.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8540A] hover:bg-[#FF6B20] text-white font-display text-sm tracking-widest uppercase rounded transition-all duration-200 hover:scale-105"
              >
                Voir le menu
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+262693500734"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#2A2A2A] hover:border-[#E8540A] text-[#D4CEC4] hover:text-[#F5F0E8] font-display text-sm tracking-widest uppercase rounded transition-all duration-200"
              >
                <Phone size={14} />
                Commander
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-[#2A2A2A]">
              <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                <MapPin size={14} className="text-[#E8540A]" />
                <span className="font-body">Rue R. Barquisseau, Fleurimont</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                <Clock size={14} className="text-[#E8540A]" />
                <span className="font-body">11h30 – 22h00</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={12} className="text-[#F59E0B] fill-[#F59E0B]" />
                ))}
                <span className="ml-1 text-[#8A8A8A] font-body">4.9 / 200+ avis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-[#E8540A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { value: '11', label: 'Burgers au menu' },
              { value: '7€', label: 'À partir de' },
              { value: '+3€', label: 'Menu + frites' },
              { value: '100%', label: 'Fait maison' },
            ].map((stat) => (
              <div key={stat.label} className="py-2">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="font-body text-xs text-white/80 tracking-wide mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS ── */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-2">
                Nos incontournables
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F5F0E8] leading-tight">
                Les Best<br />
                <span className="text-[#E8540A]">Sellers</span>
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-sm font-display tracking-wider uppercase text-[#8A8A8A] hover:text-[#E8540A] transition-colors group"
            >
              Tout le menu
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <Link
                key={item.id}
                to="/menu"
                className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden hover:border-[#E8540A]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={burgerImgs[i]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#E8540A] text-white text-xs font-display tracking-widest uppercase rounded">
                    Best-seller
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold uppercase text-[#F5F0E8] mb-1.5">
                    {item.name}
                  </h3>
                  <p className="font-body text-sm text-[#8A8A8A] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="font-display text-2xl font-bold text-[#E8540A]">
                        {item.priceAlone.toFixed(2)} €
                      </div>
                      <div className="font-body text-xs text-[#8A8A8A]">
                        Menu + frites : {item.priceMenu.toFixed(2)} €
                      </div>
                    </div>
                    <span className="text-xs font-body text-[#8A8A8A] group-hover:text-[#E8540A] transition-colors uppercase tracking-wider">
                      Commander →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ── */}
      <section className="py-20 sm:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-2">
              Notre engagement
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F5F0E8]">
              Pourquoi <span className="text-[#E8540A]">CAS'O ?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <ChefHat size={28} />,
                title: 'Pain Artisanal',
                desc: 'Notre pain brioche est fabriqué par un boulanger artisan local. Moelleux, savoureux, à la hauteur de nos garnitures.',
              },
              {
                icon: <Leaf size={28} />,
                title: 'Produits de Qualité',
                desc: 'Steack haché 125g bœuf origine France, légumes issus d\'une agriculture raisonnée, miel réunionnais de la Ruche La Kour.',
              },
              {
                icon: <Zap size={28} />,
                title: 'Fait Maison',
                desc: 'Poulet citron, poulet crispy, steack végétarien et poisson sont préparés maison. Tout est frais, à la commande.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-7 hover:border-[#E8540A]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8540A]/10 border border-[#E8540A]/20 flex items-center justify-center text-[#E8540A] mb-5">
                  {card.icon}
                </div>
                <h3 className="font-display text-xl font-semibold uppercase text-[#F5F0E8] mb-2">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-[#8A8A8A] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80" alt="Burger artisanal" className="rounded-xl w-full h-52 object-cover" />
                <img src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80" alt="Ingrédients frais" className="rounded-xl w-full h-52 object-cover mt-8" />
                <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&q=80" alt="Préparation" className="rounded-xl w-full h-40 object-cover" />
                <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80" alt="Food truck" className="rounded-xl w-full h-40 object-cover mt-4" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#E8540A] text-white rounded-2xl p-4 text-center hidden sm:block">
                <div className="font-display text-3xl font-bold leading-none">7€</div>
                <div className="font-body text-xs mt-1 leading-tight">à partir de</div>
              </div>
            </div>

            <div>
              <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-3">
                Notre histoire
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F5F0E8] leading-tight mb-5">
                Nés de la<br />
                <span className="text-[#E8540A]">Passion</span>
              </h2>
              <p className="font-body text-[#D4CEC4] leading-relaxed mb-4">
                CAS'O Burgers est né d'une passion pour la street food de qualité et d'un amour
                profond pour La Réunion. Nos recettes fusionnent les saveurs créoles authentiques
                avec les techniques de la restauration moderne.
              </p>
              <p className="font-body text-[#8A8A8A] leading-relaxed text-sm mb-8">
                Chaque ingrédient est choisi avec soin, chaque burger est assemblé à la minute.
                Parce que vous méritez ce qu'il y a de meilleur.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#E8540A] text-[#E8540A] hover:bg-[#E8540A] hover:text-white font-display text-sm tracking-widest uppercase rounded transition-all duration-200"
              >
                Notre histoire
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-20 sm:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-2">
              Avis clients
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F5F0E8]">
              Ils <span className="text-[#E8540A]">Adorent</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Marie-Claude R.',
                text: 'Le Chèvre avec son miel de baies roses de la Ruche La Kour est une tuerie ! Jamais mangé quelque chose d\'aussi original. Je reviens chaque semaine !',
                rating: 5,
              },
              {
                name: 'Sébastien M.',
                text: 'Pain brioche artisanal ultra moelleux, viande juteuse bœuf France, frites maison. Le Foie Gras est un chef-d\'œuvre. Impossible de revenir en arrière.',
                rating: 5,
              },
              {
                name: 'Anaïs V.',
                text: 'Le Végétarien est parfait même pour les non-végétariens. La persillade maison est incroyable. Service rapide, super sympa, prix honnêtes !',
                rating: 5,
              },
            ].map((review) => (
              <div key={review.name} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="font-body text-sm text-[#D4CEC4] leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
                <p className="font-body text-xs font-medium text-[#8A8A8A]">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase text-[#F5F0E8] mb-4">
            Prêt à<br />
            <span className="text-[#E8540A]">Vous Régaler ?</span>
          </h2>
          <p className="font-body text-[#8A8A8A] text-lg mb-10">
            Appelez-nous et récupérez votre commande en quelques minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+262693500734"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8540A] hover:bg-[#FF6B20] text-white font-display text-base tracking-widest uppercase rounded transition-all duration-200 hover:scale-105"
            >
              <Phone size={18} />
              0693 50 07 34
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#2A2A2A] hover:border-[#E8540A] text-[#D4CEC4] hover:text-[#F5F0E8] font-display text-base tracking-widest uppercase rounded transition-all duration-200"
            >
              Consulter le menu
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
