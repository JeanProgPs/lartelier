// ============================================================
// L'Atelier Rio — Compre o Look
// ============================================================
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { mockLooks } from '@/lib/mock-data';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/hooks/useCart';

export default function ShopTheLook() {
  const look = mockLooks[0]; // Pegar o primeiro look de destaque
  const { addItem } = useCart();

  const handleAddAllToCart = () => {
    look.products.forEach((product) => {
      // Adiciona o primeiro tamanho e cor por padrão
      addItem(product, product.sizes[0], product.colors[0]?.name || 'Única');
    });
  };

  return (
    <section className="py-20 md:py-32 bg-brand-gray-50">
      <div className="store-container">
        
        <div className="text-center mb-16 md:mb-24">
          <span className="section-label block mb-4">Styling</span>
          <h2 className="section-title">Compre o Look</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Imagem do Look Principal */}
          <div className="w-full lg:w-1/2 relative aspect-[3/4] md:aspect-[4/5] bg-brand-gray-100">
            <Image
              src={look.image}
              alt={look.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Produtos Relacionados */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
            <h3 className="font-display text-2xl md:text-3xl mb-4">Composição</h3>
            
            <div className="flex flex-col gap-6">
              {look.products.map((product) => (
                <div key={product.id} className="flex gap-4 items-center bg-brand-white p-4 group">
                  <Link href={`/produto/${product.slug}`} className="relative w-20 aspect-[3/4] shrink-0 bg-brand-gray-50 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex-1 flex flex-col gap-1">
                    <Link href={`/produto/${product.slug}`} className="font-medium text-sm md:text-base hover:text-brand-gray-600 transition-colors">
                      {product.name}
                    </Link>
                    <span className="text-sm font-medium">{formatPrice(product.price)}</span>
                    <button 
                      onClick={() => addItem(product, product.sizes[0], product.colors[0]?.name || 'Única')}
                      className="text-xs uppercase tracking-widest font-bold text-brand-gray-400 hover:text-brand-black w-max mt-2 transition-colors"
                    >
                      + Adicionar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-brand-gray-200">
              <button 
                onClick={handleAddAllToCart}
                className="btn btn-primary w-full sm:w-auto"
              >
                Comprar Look Completo
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
