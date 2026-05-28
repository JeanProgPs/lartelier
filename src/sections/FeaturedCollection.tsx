// ============================================================
// L'Atelier Rio — Coleção Destaque
// ============================================================
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedCollection() {
  return (
    <section className="py-20 md:py-32">
      <div className="store-container">
        <div className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden bg-brand-gray-50 flex items-center">
          
          {/* Imagem de Fundo */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
              alt="Coleção Essenciais"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 md:bg-black/10" />
          </div>

          {/* Conteúdo Centralizado/Lateral */}
          <div className="relative z-10 p-8 md:p-16 lg:p-24 max-w-xl text-center md:text-left mx-auto md:mx-0">
            <span className="badge bg-brand-white text-brand-black mb-6">Coleção Cápsula</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 drop-shadow-md">
              Atemporal & Essencial
            </h2>
            <p className="text-brand-white/90 mb-10 text-sm md:text-base leading-relaxed drop-shadow">
              Uma seleção curada de peças fundamentais que transitam perfeitamente entre o casual elegante e o sofisticado urbano.
            </p>
            <Link 
              href="/colecoes/essenciais"
              className="btn bg-brand-white text-brand-black hover:bg-brand-black hover:text-brand-white"
            >
              Ver Coleção Completa
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
