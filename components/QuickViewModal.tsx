"use client";
import Image from 'next/image';
import { type Product } from '@/data/products';

export default function QuickViewModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="card max-w-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <div className="p-5">
            <div className="badge-gold mb-3">{product.category}</div>
            <h3 className="font-heading text-2xl text-clay-800">{product.name}</h3>
            <p className="mt-2 text-clay-700">{product.description}</p>
            <p className="mt-4 font-heading text-2xl text-clay-700">?{product.price.toLocaleString('en-IN')}</p>
            <div className="mt-6 flex gap-3">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-ghost" onClick={onClose}>Close</button>
            </div>
            <p className="mt-4 text-xs text-clay-500">Made with locally sourced clay and fired sustainably.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
