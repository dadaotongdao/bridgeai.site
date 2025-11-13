export default function Products() {
  return (
    <section id="products" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Premium Templates</h2>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        Hand-crafted Notion, Framer & n8n templates to 10× your productivity. New drops every month.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 示例卡片 */}
        {[
          { title: 'Ultimate Notion OS', desc: 'All-in-one dashboard for creators', price: '$29', tag: 'Notion' },
          { title: 'Framer Landing Kit', desc: 'High-convert sections in minutes', price: '$39', tag: 'Framer' },
          { title: 'n8n Automation Pack', desc: '50+ ready workflows', price: '$49', tag: 'n8n' },
        ].map((p) => (
          <div key={p.title} className="rounded-2xl border border-brand-700 bg-brand-800/40 p-5 flex flex-col">
            <div className="h-40 mb-4 rounded-lg bg-brand-700/30 flex items-center justify-center text-gray-400 text-sm">
              Preview
            </div>
            <div className="mb-2 text-xs text-gray-400 uppercase">{p.tag}</div>
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 text-sm mb-4 flex-1">{p.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-white font-bold">{p.price}</span>
              <a
                href="https://bridgeai.lemonsqueezy.com"
                target="_blank"
                rel="noreferrer"
                className="btn-capsule text-sm"
              >
                Get it
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-400 mb-2">Want custom templates or bulk deals?</p>
        <a href="mailto:hello@bridgeai.site" className="btn-capsule">Contact Us</a>
      </div>
    </section>
  )
}