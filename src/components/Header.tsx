import { Link } from 'react-router-dom'
import { Grid3X3, Star } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-900/80 backdrop-blur border-b border-brand-700">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-white">
          <Grid3X3 className="w-5 h-5" />
          <span className="font-bold text-lg">BridgeAI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/products" className="hover:text-white">Templates</Link>
          <Link to="/about" className="hover:text-white">About</Link>
        </nav>
        <a
          href="https://bridgeai.lemonsqueezy.com"
          target="_blank"
          rel="noreferrer"
          className="btn-capsule"
        >
          <Star className="w-4 h-4" />
          Get Template
        </a>
      </div>
    </header>
  )
}