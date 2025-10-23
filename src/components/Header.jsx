import { ShoppingCart, Phone } from 'lucide-react'

export default function Header({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white font-bold">PZ</span>
          <span className="text-xl font-semibold tracking-tight">Pizzaro</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#menu" className="hover:text-red-600 transition-colors">Menu</a>
          <a href="#about" className="hover:text-red-600 transition-colors">About</a>
          <a href="#location" className="hover:text-red-600 transition-colors">Location</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+1234567890" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5 text-sm hover:border-neutral-400">
            <Phone className="h-4 w-4" />
            <span className="font-medium">(123) 456-7890</span>
          </a>
          <button className="relative inline-flex items-center gap-2 rounded-full bg-red-600 text-white px-3 py-1.5 hover:bg-red-700">
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm font-medium">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white text-red-600 text-xs font-bold px-1.5 shadow">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
