export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-6">About BridgeAI</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        BridgeAI is a one-person studio founded by a seasoned full-stack engineer obsessed with productivity systems.
        We build minimal, high-impact digital templates that bridge the gap between idea and execution.
      </p>
      <p className="text-gray-300 leading-relaxed mb-4">
        From Notion dashboards that run your entire life, to Framer kits that launch in hours, to n8n blueprints that
        automate the boring — every product is battle-tested in real workflows before it reaches you.
      </p>
      <p className="text-gray-300 leading-relaxed mb-8">
        Need a custom bridge for your unique process? Let's talk.
      </p>
      <div className="flex gap-4">
        <a href="mailto:hello@bridgeai.site" className="btn-capsule">Email Us</a>
        <a href="https://twitter.com/bridgeai" target="_blank" rel="noreferrer" className="btn-capsule">Twitter</a>
      </div>
    </section>
  )
}