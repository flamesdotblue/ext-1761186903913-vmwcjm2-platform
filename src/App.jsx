import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => setCartCount((c) => c + 1)

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <Menu onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  )
}

export default App
