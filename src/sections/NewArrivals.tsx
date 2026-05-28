// ============================================================
// L'Atelier Rio — Novidades da Semana
// ============================================================
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import { getNewProducts } from '@/lib/mock-data';
import { ArrowRight } from 'lucide-react';

export default function NewArrivals() {
  const products = getNewProducts().slice(0, 4); // Pega apenas os 4 primeiros

  return (
    <section className="py-20 md:py-32">
      <div className="store-container">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="section-label block mb-4">Just In</span>
            <h2 className="section-title">Novidades da Semana</h2>
          </div>
          
          <Link 
            href="/novidades" 
            className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-brand-black hover:text-brand-nude transition-colors"
          >
            Ver Todas 
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
