import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ivory/80 border-b border-clay-100">
      <div className="container-width flex items-center justify-between py-3">
        <Link href="#" className="flex items-center gap-3 group">
          <span className="inline-flex h-9 w-9 rounded-full items-center justify-center border border-gold/40 shadow-gold bg-white">
            <img src="/icons/pot.svg" alt="logo" className="h-6 w-6" />
          </span>
          <span className="font-heading text-xl tracking-wide text-clay-800">Mitti & Mitti</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#shop" className="hover:text-clay-600">Shop</a>
          <a href="#about" className="hover:text-clay-600">About</a>
          <a href="#contact" className="hover:text-clay-600">Visit Us</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://wa.me/919876543210?text=Hi%20Mitti%20%26%20Mitti!" target="_blank" className="btn btn-ghost">
            <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-5 w-5 mr-2" /> WhatsApp
          </a>
        </div>
      </div>
      <div className="mandala-divider" />
    </header>
  );
}
