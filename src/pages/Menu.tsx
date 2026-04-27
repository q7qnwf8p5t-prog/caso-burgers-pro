import { useState } from 'react'
import { Phone } from 'lucide-react'
import { burgers, categories, drinks, frozenBars, FROZEN_BAR_PRICE, supplements } from '../data/menu'
import type { MenuCategory } from '../types'

const badgeStyles: Record<string, string> = {
  bestseller: 'bg-[#E8540A]/20 text-[#E8540A] border-[#E8540A]/30',
  new:        'bg-blue-500/20 text-blue-400 border-blue-500/30',
  spicy:      'bg-red-500/20 text-red-400 border-red-500/30',
  vegan:      'bg-green-500/20 text-green-400 border-green-500/30',
  premium:    'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
}

const badgeLabels: Record<string, string> = {
  bestseller: '🔥 Best-seller',
  new:        '✨ Ardoise',
  spicy:      '🌶 Épicé',
  vegan:      '🌿 Végétarien',
  premium:    '⭐ Premium',
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('burgers')

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-[#E8540A] mb-3">
            Carte officielle
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold uppercase text-[#F5F0E8]">
            Notre <span className="text-[#E8540A]">Menu</span>
          </h1>
          <p className="font-body text-[#8A8A8A] mt-4 max-w-xl mx-auto">
            Préparé à la minute, avec des produits frais. Vente à emporter uniquement.
          </p>

          {/* Engagements */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              '🍞 Pain artisanal boulanger',
              '🥩 Viande bœuf origine France',
              '🥬 Légumes agriculture raisonnée',
            ].map((mention) => (
              <span
                key={mention}
                className="px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-body text-[#8A8A8A]"
              >
                {mention}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Pricing reminder */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8540A]/10 border border-[#E8540A]/20 flex items-center justify-center text-2xl shrink-0">
              🍔
            </div>
            <div>
              <div className="font-display text-sm tracking-widest uppercase text-[#F5F0E8]">Burger Seul</div>
              <div className="font-body text-xs text-[#8A8A8A] mt-0.5">Le burger, sans accompagnement</div>
            </div>
          </div>
          <div className="flex-1 bg-[#1A1A1A] border border-[#E8540A]/30 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8540A]/20 border border-[#E8540A]/30 flex items-center justify-center text-2xl shrink-0">
              🍟
            </div>
            <div>
              <div className="font-display text-sm tracking-widest uppercase text-[#E8540A]">Menu + Frites</div>
              <div className="font-body text-xs text-[#8A8A8A] mt-0.5">+3€ · Burger + frites maison</div>
            </div>
          </div>
        </div>

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

        {/* ── BURGERS ── */}
        {activeCategory === 'burgers' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {burgers.map((item) => (
              <div
                key={item.id}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-5 hover:border-[#E8540A]/40 transition-colors duration-200 flex flex-col"
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
                <p className="font-body text-sm text-[#8A8A8A] leading-relaxed mb-5 flex-1">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[#2A2A2A]">
                  <div>
                    <div className="font-display text-xl font-bold text-[#E8540A]">
                      {item.priceAlone.toFixed(2)} €
                      <span className="text-[#8A8A8A] text-xs font-body font-normal ml-1">seul</span>
                    </div>
                    <div className="font-display text-sm text-[#D4CEC4]">
                      {item.priceMenu.toFixed(2)} €
                      <span className="text-[#8A8A8A] text-xs font-body font-normal ml-1">menu + frites</span>
                    </div>
                  </div>
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
        )}

        {/* ── BOISSONS ── */}
        {activeCategory === 'boissons' && (
          <div className="overflow-hidden rounded-2xl border border-[#2A2A2A]">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1A1A1A] border-b border-[#2A2A2A]">
                  <th className="text-left px-5 py-3 font-display text-xs tracking-widest uppercase text-[#8A8A8A]">Boisson</th>
                  <th className="text-center px-5 py-3 font-display text-xs tracking-widest uppercase text-[#8A8A8A]">Format</th>
                  <th className="text-right px-5 py-3 font-display text-xs tracking-widest uppercase text-[#8A8A8A]">Prix</th>
                </tr>
              </thead>
              <tbody>
                {drinks.map((drink, i) => (
                  <tr
                    key={drink.id}
                    className={`border-b border-[#2A2A2A] last:border-0 ${i % 2 === 0 ? 'bg-[#111111]' : 'bg-[#141414]'}`}
                  >
                    <td className="px-5 py-3 font-body text-sm text-[#F5F0E8]">{drink.name}</td>
                    <td className="px-5 py-3 font-body text-sm text-[#8A8A8A] text-center">{drink.format}</td>
                    <td className="px-5 py-3 font-display text-base font-bold text-[#E8540A] text-right">
                      {drink.price.toFixed(2)} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── SUPPLÉMENTS ── */}
        {activeCategory === 'supplements' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supplements.map((sup) => (
              <div
                key={sup.id}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-5 py-4 flex items-center justify-between hover:border-[#E8540A]/40 transition-colors"
              >
                <span className="font-body text-sm text-[#D4CEC4]">{sup.name}</span>
                <span className="font-display text-lg font-bold text-[#E8540A] shrink-0 ml-4">
                  +{sup.price.toFixed(2)} €
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ── BARRES GLACÉES ── */}
        {activeCategory === 'barres-glacees' && (
          <div className="max-w-md">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-xl font-bold uppercase text-[#F5F0E8]">
                  Barres Glacées
                </h2>
                <span className="font-display text-2xl font-bold text-[#E8540A]">
                  {FROZEN_BAR_PRICE.toFixed(2)} €
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {frozenBars.map((bar) => (
                  <span
                    key={bar.name}
                    className="px-4 py-2 rounded-full bg-[#111111] border border-[#2A2A2A] font-body text-sm text-[#D4CEC4]"
                  >
                    🍫 {bar.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
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
              0693 50 07 34
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
