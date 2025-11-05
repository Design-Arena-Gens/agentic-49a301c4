export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container-width grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl text-clay-800">Visit Us</h2>
          <p className="mt-3 text-clay-700">We welcome you to our studio and store in Jaipur.</p>
          <div className="mt-4 card overflow-hidden">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Jaipur%20Rajasthan%20India&output=embed"
              className="w-full h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex gap-3">
            <a href="https://wa.me/919876543210?text=Hi%20Mitti%20%26%20Mitti!" target="_blank" className="btn btn-primary">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-5 w-5 mr-2" /> Chat on WhatsApp
            </a>
            <a href="mailto:hello@mittiandmitti.in" className="btn btn-ghost">Email Us</a>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-heading text-2xl text-clay-800">Inquiry Form</h3>
          <form className="mt-4 grid gap-4" action="/api/inquiry" method="post">
            <div>
              <label className="block text-sm text-clay-700 mb-1" htmlFor="name">Name</label>
              <input id="name" name="name" required className="w-full rounded-lg border border-clay-200 px-4 py-3 bg-white/70" />
            </div>
            <div>
              <label className="block text-sm text-clay-700 mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required className="w-full rounded-lg border border-clay-200 px-4 py-3 bg-white/70" />
            </div>
            <div>
              <label className="block text-sm text-clay-700 mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-clay-200 px-4 py-3 bg-white/70" />
            </div>
            <button className="btn btn-primary" type="submit">Send Inquiry</button>
            <p className="text-xs text-clay-500">We typically reply within 24 hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
