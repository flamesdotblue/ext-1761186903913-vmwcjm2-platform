import { MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="location" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white font-bold">PZ</span>
            <span className="text-lg font-semibold">Pizzaro</span>
          </div>
          <p className="mt-3 text-sm text-neutral-600 max-w-sm">We bake simple, honest pizzas with top-shelf ingredients and a whole lot of soul. See you around the oven!</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">Visit</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>123 Stone Oven Way, Brooklyn, NY 11211</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5" />
              <a href="tel:+1234567890" className="hover:text-red-600">(123) 456-7890</a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5" />
              <span>Sun–Thu 11:00 AM – 10:00 PM · Fri–Sat 11:00 AM – 11:00 PM</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">Newsletter</h4>
          <p className="mt-3 text-sm text-neutral-600">Get weekly specials and secret menu drops.</p>
          <form
            className="mt-3 flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thanks for subscribing to Pizzaro!')
            }}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button type="submit" className="rounded-full bg-red-600 text-white text-sm font-semibold px-4 py-2 hover:bg-red-700">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Pizzaro. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-700">Privacy</a>
            <a href="#" className="hover:text-neutral-700">Terms</a>
            <a href="#" className="hover:text-neutral-700">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
