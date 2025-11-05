export default function AboutSection() {
  return (
    <section id="about" className="section bg-ivory/60">
      <div className="container-width grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-heading text-3xl md:text-4xl text-clay-800">Our Story</h2>
          <p className="mt-4 text-clay-700 leading-relaxed">
            In the heart of Rajasthan, our artisans shape earth into heirlooms. Each piece is hand-thrown, sun-dried, and fired with care?an ode to ancient Indian techniques and modern minimalism. We work with natural materials, fair wages, and zero-waste glazes.
          </p>
          <p className="mt-3 text-clay-700 leading-relaxed">
            Patterns are inspired by temple mandalas, neem leaves, and riverbed motifs. The result: soulful objects with warm textures and timeless silhouettes.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="card p-4">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-clay-100 via-ivory to-sandstone-100 flex items-center justify-center">
              <img src="/illustrations/wheel.svg" alt="Potter's wheel" className="h-56 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
