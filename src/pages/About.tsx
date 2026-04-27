import { Link } from 'react-router-dom'
import { ArrowRight, Heart, MapPin, Users, Award } from 'lucide-react'

const teamImages = [
  'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=500&q=80',
  'https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?w=500&q=80',
]

const values = [
  {
    icon: <Heart size={24} />,
    title: 'Passion',
    desc: 'Chaque burger est une œuvre. Nous mettons tout notre amour de la cuisine dans chaque préparation.',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Local',
    desc: 'Nos fournisseurs sont réunionnais. Épices, légumes, fruits – tout vient de notre île bien-aimée.',
  },
  {
    icon: <Users size={24} />,
    title: 'Communauté',
    desc: 'CAS\'O Burgers, c\'est aussi une famille. Nos clients sont nos voisins, nos amis, notre raison d\'être.',
  },
  {
    icon: <Award size={24} />,
    title: 'Qualité',
    desc: 'Aucun compromis sur la qualité. Pain brioche artisanal, viande sélectionnée, sauces élaborées en maison.',
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
            Notre histoire
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase text-[#F5F0E8] mb-5">
            À Propos de<br />
            <span className="text-[#E8540A]">CAS'O Burgers</span>
          </h1>
          <p className="font-body text-[#D4CEC4] max-w-2xl mx-auto text-lg leading-relaxed">
            Une aventure gastronomique née à La Réunion, portée par la passion,
            les saveurs locales et l'envie de vous offrir des burgers comme nulle part ailleurs.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-3">
                Les débuts
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F5F0E8] mb-6">
                Une Histoire<br />
                <span className="text-[#E8540A]">d'Authenticité</span>
              </h2>
              <div className="space-y-4 font-body text-[#D4CEC4] leading-relaxed">
                <p>
                  CAS'O Burgers est né d'un rêve simple : créer des burgers à la hauteur de la
                  richesse culinaire de La Réunion. Installés rue Raphaël Barquisseau à Fleurimont,
                  nous avons ouvert nos portes avec une conviction : la qualité n'a pas de compromis.
                </p>
                <p>
                  Dès le premier jour, notre approche a été claire. Nous travaillons avec des
                  producteurs locaux, sélectionnons chaque ingrédient avec soin, et préparons tout
                  maison – des pains brioche aux sauces exclusives.
                </p>
                <p className="text-[#8A8A8A] text-sm">
                  Le résultat ? Des burgers qui racontent l'histoire de notre île, avec ses épices
                  créoles, ses fruits exotiques et ses saveurs uniques au monde.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {teamImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Équipe CAS'O Burgers ${i + 1}`}
                  className={`rounded-xl object-cover w-full ${i === 0 ? 'h-64 mt-0' : 'h-52 mt-12'}`}
                  loading="lazy"
                />
              ))}
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

      {/* Local ingredients highlight */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1540914124281-342587941389?w=800&q=80"
                alt="Ingrédients locaux de La Réunion"
                className="rounded-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-5 max-w-[200px]">
                <div className="font-display text-4xl font-bold text-[#E8540A]">100%</div>
                <div className="font-body text-sm text-[#8A8A8A] mt-1">
                  Ingrédients locaux ou sélectionnés
                </div>
              </div>
            </div>

            <div>
              <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-3">
                Terroir réunionnais
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F5F0E8] mb-6">
                Le Goût de<br />
                <span className="text-[#E8540A]">Notre Île</span>
              </h2>
              <div className="space-y-4 font-body text-[#D4CEC4] leading-relaxed mb-8">
                <p>
                  La Réunion est une île aux mille saveurs. Nous avons choisi d'en faire le cœur
                  de notre identité culinaire. Rougail mangue, piment cabri, vanille Bourbon,
                  curcuma de Cilaos – chaque ingrédient local est une invitation au voyage.
                </p>
                <p>
                  Nous travaillons en direct avec les producteurs locaux pour garantir la fraîcheur
                  et soutenir l'économie de notre île. Manger chez CAS'O, c'est aussi soutenir
                  les agriculteurs réunionnais.
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Piment cabri local',
                  'Vanille Bourbon',
                  'Mangue de Réunion',
                  'Curcuma de Cilaos',
                  'Citron de montagne',
                  'Fruits de la passion',
                ].map((ingredient) => (
                  <li key={ingredient} className="flex items-center gap-2 text-sm font-body text-[#8A8A8A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8540A] shrink-0" />
                    {ingredient}
                  </li>
                ))}
              </ul>

              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8540A] hover:bg-[#FF6B20] text-white font-display text-sm tracking-widest uppercase rounded transition-all duration-200"
              >
                Découvrir nos burgers
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 sm:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#F5F0E8]">
              Notre <span className="text-[#E8540A]">Parcours</span>
            </h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#2A2A2A] hidden md:block" />
            <div className="space-y-10">
              {[
                {
                  year: '2022',
                  title: 'Ouverture',
                  desc: 'CAS\'O Burgers ouvre ses portes à Fleurimont avec une carte de 8 burgers.',
                  side: 'left',
                },
                {
                  year: '2023',
                  title: 'Expansion du menu',
                  desc: 'Lancement des burgers spéciaux créoles et des formules. La carte double.',
                  side: 'right',
                },
                {
                  year: '2024',
                  title: 'Reconnaissance locale',
                  desc: 'Plus de 200 avis 5 étoiles. CAS\'O devient une référence burgers sur l\'île.',
                  side: 'left',
                },
                {
                  year: '2025',
                  title: 'Nouvelles recettes',
                  desc: 'Introduction du Black Burger et du Bourbon, innovations gastronomiques.',
                  side: 'right',
                },
              ].map((milestone) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    milestone.side === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-full md:w-5/12 ${milestone.side === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#E8540A]/40 transition-colors">
                      <div className="font-display text-3xl font-bold text-[#E8540A] mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="font-display text-lg font-semibold uppercase text-[#F5F0E8] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-body text-sm text-[#8A8A8A]">{milestone.desc}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#E8540A] border-2 border-[#0A0A0A] ring-2 ring-[#E8540A]/30" />
                  </div>
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
