export default function Hero() {
  return (
    <section className="section bg-paper-texture">
      <div className="container-width grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge-gold">Handcrafted in India</span>
          <h1 className="mt-4 font-heading text-4xl md:text-6xl text-clay-800 leading-tight">
            Crafted by Hands, <span className="text-sandstone-400">Shaped by Heart</span>
          </h1>
          <p className="mt-5 text-clay-700 text-lg">
            Terracotta and ceramic masterpieces rooted in Indian heritage, made with love and sustainable craft practices.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#shop" className="btn btn-primary">Explore Collection</a>
            <a href="#about" className="btn btn-ghost">Our Story</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full gold-accent blur-xl opacity-30"></div>
          <div className="card p-4">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-sandstone-200 via-ivory to-clay-50 flex items-center justify-center">
              <img src="/illustrations/hero-pots.svg" alt="Handcrafted pottery" className="h-64 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
