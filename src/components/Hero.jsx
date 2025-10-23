import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1542282811-943ef1a977c3?q=80&w=2000&auto=format&fit=crop"
          alt="Wood-fired pizza"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-28 md:py-36 text-white">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <Star className="h-3.5 w-3.5 text-yellow-300" />
            <span>Stone-fired. Fresh. Unforgettable.</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow">Authentic Neapolitan Pizza, crafted with love.</h1>
          <p className="mt-4 text-neutral-100/90 text-lg">Hand-stretched dough, San Marzano tomatoes, and the finest fior di latte. Baked to perfection in our 800° stone oven.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 font-semibold hover:bg-red-700">Order Now</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 font-semibold hover:bg-white/20">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
