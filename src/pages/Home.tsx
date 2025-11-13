import { ArrowDown, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* 背景流体图案 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-900 opacity-80" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-brand-700/40 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-brand-600/30 to-transparent rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-600 text-xs text-gray-300">
        <Sparkles className="w-3 h-3" />
        Crafting Unique Digital Workflows
      </div>

      <h1 className="display-header max-w-4xl">
        Templates that you
        <br />
        need Indeed
      </h1>

      <p className="mt-6 max-w-2xl text-gray-300 text-lg">
        Elevate your productivity with premium Notion, Framer and n8n templates. Built for
        creators who want to ship faster and think bigger.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a href="#products" className="btn-capsule">
          Browse Templates
        </a>
        <a href="/about" className="btn-capsule">
          Learn More
        </a>
      </div>

      <div className="absolute bottom-8 flex items-center gap-2 text-xs text-gray-400">
        <span>Scroll down</span>
        <div className="w-px h-4 bg-gray-600" />
        <span>to see projects</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}