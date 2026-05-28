// ============================================================
// L'Atelier Rio — Instagram Grid
// ============================================================
import Image from 'next/image';
import { Camera } from 'lucide-react';

const INSTAGRAM_PHOTOS = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
  'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80',
  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
  'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
];

export default function InstagramGrid() {
  return (
    <section className="py-0">
      <div className="text-center mb-10 px-4 pt-20 md:pt-32">
        <h2 className="section-title mb-4">#LAtelierRio</h2>
        <p className="text-brand-gray-600">Compartilhe seu look conosco marcando @latelier_rio no Instagram</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
        {INSTAGRAM_PHOTOS.map((photo, i) => (
          <a 
            key={i} 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative aspect-square block group overflow-hidden bg-brand-gray-100"
          >
            <Image
              src={photo}
              alt="Instagram photo"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Overlay com Ícone */}
            <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Camera size={32} className="text-brand-white" strokeWidth={1.5} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
