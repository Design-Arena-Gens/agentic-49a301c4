export default function Footer() {
  return (
    <footer className="mt-20 border-t border-clay-100 bg-ivory/70">
      <div className="mandala-divider" />
      <div className="container-width py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src="/icons/pot.svg" alt="logo" className="h-7 w-7" />
            <span className="font-heading text-lg">Mitti & Mitti</span>
          </div>
          <p className="text-clay-600">Artisan terracotta and ceramic crafts inspired by the soils of India.</p>
        </div>
        <div>
          <p className="font-semibold text-clay-800 mb-2">Visit</p>
          <p>Jaipur, Rajasthan, India</p>
          <p>Open: Mon?Sat, 10am?7pm</p>
        </div>
        <div>
          <p className="font-semibold text-clay-800 mb-2">Contact</p>
          <p>+91 98765 43210</p>
          <p>hello@mittiandmitti.in</p>
        </div>
      </div>
      <div className="text-center text-xs text-clay-500 pb-8">? {new Date().getFullYear()} Mitti & Mitti. All rights reserved.</div>
    </footer>
  );
}
