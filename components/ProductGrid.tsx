"use client";
import { useState } from 'react';
import Image from 'next/image';
import { products, type Product } from '@/data/products';
import QuickViewModal from './QuickViewModal';

export default function ProductGrid() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="shop" className="section">
      <div className="container-width">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-clay-800">Shop</h2>
            <p className="text-clay-600">Terracotta pots, lamps, vases, diyas, cups, plates, and more.</p>
          </div>
          <div className="hidden md:block badge-gold">Free shipping over ?1999</div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="card overflow-hidden group">
              <div className="relative aspect-square overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <button
                  onClick={() => setSelected(p)}
                  className="absolute right-3 top-3 btn btn-ghost bg-white/80"
                >
                  Quick view
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-clay-800">{p.name}</h3>
                <p className="text-clay-600 text-sm">{p.category}</p>
                <p className="mt-2 font-heading text-xl text-clay-700">?{p.price.toLocaleString('en-IN')}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <QuickViewModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
