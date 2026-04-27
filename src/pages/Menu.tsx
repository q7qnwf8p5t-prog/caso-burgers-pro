import { useState } from 'react'
import { Phone } from 'lucide-react'
import { categories, menuItems, menuFormulas } from '../data/menu'
import type { MenuCategory } from '../types'

const badgeStyles: Record<string, string> = {
  bestseller: 'bg-[#E8540A]/20 text-[#E8540A] border-[#E8540A]/30',
  new: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  spicy: 'bg-red-500/20 text-red-400 border-red-500/30',
  vegan: 'bg-green-500/20 text-green-400 border-green-500/30',
}

const badgeLabels: Record<string, string> = {
  bestseller: '🔥 Best-seller',
  new: '✨ Nouveau',
  spicy: '🌶 Épicé',
  vegan: '🌿 Vegan',
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('burgers-classiques')

  const filtered = menuItems.filter((item) => item.category === activeCategory)
  const activeCat = categories.find((c) => c.id === activeCategory)

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-3">
            Carte complète
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold uppercase text-[#F5F0E8]">
            Notre <span className="text-[#E8540A]">Menu</span>
          </h1>
          <p className="font-body text-[#8A8A8A] mt-4 max-w-xl mx-auto">
            Des ingrédients frais, des recettes créatives, le tout préparé à la minute.
            Vente à emporter uniquement.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Formulas */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold uppercase text-[#F5F0E8] mb-6">
            🎯 Nos Formules
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {menuFormulas.map((formula) => (
              <div
                key={formula.id}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#E8540A]/5 rounded-full -translate-y-6 translate-x-6" />
                <h3 className="font-display text-lg font-semibold uppercase text-[#F5F0E8] mb-1">
                  {formula.name}
                </h3>
                <p className="font-body text-sm text-[#8A8A8A] mb-4">{formula.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-[#E8540A]">
                    {formula.price.toFixed(2)} €
                  </span>
                  <span className="text-xs font-body text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">
                    {formula.savings}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-none flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-xs tracking-widest uppercase transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#E8540A] border-[#E8540A] text-white'
                  : 'bg-[#1A1A1A] border-[#2A2A2A] text-[#8A8A8A] hover:border-[#E8540A]/50 hover:text-[#F5F0E8]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Category description */}
        {activeCat && (
          <p className="font-body text-sm text-[#8A8A8A] mb-8 italic">
            {activeCat.description}
          </p>
        )}

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-5 hover:border-[#E8540A]/40 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-base font-semibold uppercase text-[#F5F0E8] leading-snug">
                  {item.name}
                </h3>
                {item.badge && (
                  <span
                    className={`flex-none text-[10px] font-body font-medium px-2 py-0.5 rounded-full border whitespace-nowrap ${badgeStyles[item.badge]}`}
                  >
                    {badgeLabels[item.badge]}
                  </span>
                )}
              </div>
              <p className="font-body text-sm text-[#8A8A8A] leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#2A2A2A]">
                <span className="font-display text-2xl font-bold text-[#E8540A]">
                  {item.price.toFixed(2)} €
                </span>
                <a
                  href="tel:+262693500734"
                  className="flex items-center gap-1.5 text-xs font-body text-[#8A8A8A] hover:text-[#E8540A] transition-colors uppercase tracking-wider"
                >
                  <Phone size={11} />
                  Commander
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#111111] border-t border-[#2A2A2A] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#1A1A1A] border border-[#E8540A]/20 rounded-2xl p-8">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-[#F5F0E8] mb-1">
                Envie de commander ?
              </h2>
              <p className="font-body text-sm text-[#8A8A8A]">
                Appelez-nous et récupérez votre commande en quelques minutes.
              </p>
            </div>
            <a
              href="tel:+262693500734"
              className="flex-none inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8540A] hover:bg-[#FF6B20] text-white font-display text-sm tracking-widest uppercase rounded transition-all duration-200 hover:scale-105"
            >
              <Phone size={15} />
              +262 693 50 07 34
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
