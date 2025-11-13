export default function Footer() {
  return (
    <footer className="bg-brand-800 border-t border-brand-700 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} BridgeAI. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://twitter.com/bridgeai" target="_blank" rel="noreferrer" className="hover:text-white">Twitter</a>
          <a href="https://github.com/bridgeai" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  )
}