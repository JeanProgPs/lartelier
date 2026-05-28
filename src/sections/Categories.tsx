// ============================================================
// L'Atelier Rio — Categorias Home
// ============================================================
import Link from 'next/link';
import Image from 'next/image';
import { mockCategories } from '@/lib/mock-data';

export default function Categories() {
  // Vamos exibir apenas as 4 categorias principais na home
  const categories = mockCategories.slice(0, 4);

  return (
    <section className="py-20 bg-brand-gray-50">
      <div className="store-container">
        
        <div className="text-center mb-16">
          <span className="section-label block mb-4">Descubra</span>
          <h2 className="section-title">Nossas Categorias</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/categorias/${category.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-brand-gray-100"
            >
              {/* Imagem de Fundo */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              {/* Overlay Escuro Inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

              {/* Conteúdo */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h3 className="font-display text-2xl md:text-3xl text-brand-white mb-2 transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  {category.name}
                </h3>
                <div className="overflow-hidden">
                  <span className="block text-brand-white/90 text-sm tracking-widest uppercase transform translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    Explorar
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
