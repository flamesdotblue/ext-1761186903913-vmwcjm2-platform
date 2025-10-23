import { Pizza, Clock } from 'lucide-react'

const items = [
  {
    id: 'margherita',
    name: 'Margherita',
    desc: 'San Marzano tomatoes, fior di latte, basil, extra virgin olive oil.',
    price: 12,
    badge: 'Classic'
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    desc: 'Hand-cut pepperoni, fresh mozzarella, oregano, honey drizzle.',
    price: 14,
    badge: 'Popular'
  },
  {
    id: 'fungi',
    name: 'Funghi',
    desc: 'Roasted mushrooms, thyme, garlic confit, pecorino.',
    price: 15
  },
  {
    id: 'diavola',
    name: 'Diavola',
    desc: 'Spicy soppressata, Calabrian chilies, chili oil, mozzarella.',
    price: 16,
    badge: 'Spicy'
  },
  {
    id: 'prosciutto',
    name: 'Prosciutto e Rucola',
    desc: 'Parma prosciutto, arugula, shaved parmesan, balsamic.',
    price: 17
  },
  {
    id: 'vegan',
    name: 'Vegan Verde',
    desc: 'Cashew mozzarella, pesto, zucchini, cherry tomatoes.',
    price: 15,
  },
]

export default function Menu({ onAddToCart }) {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Menu</h2>
          <p className="mt-2 text-neutral-600">Baked to order in 90 seconds. Fresh dough daily. No compromises.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-600">
          <Clock className="h-4 w-4" />
          <span>Open today 11:00 AM – 10:00 PM</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.id} className="group rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-40 w-full bg-neutral-100">
              <img
                src={`https://source.unsplash.com/collection/8881461/600x400?sig=${item.id}`}
                alt={`${item.name} pizza`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {item.badge && (
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-red-600/90 text-white text-xs font-semibold px-2 py-1">
                  <Pizza className="h-3.5 w-3.5" />
                  {item.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-sm font-semibold">${item.price}</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              <div className="mt-4">
                <button
                  onClick={onAddToCart}
                  className="w-full inline-flex items-center justify-center rounded-full bg-red-600 text-white font-semibold px-4 py-2 hover:bg-red-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
