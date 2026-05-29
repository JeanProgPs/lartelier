// ============================================================
// L'Atelier Rio — Product Gallery
// ============================================================
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function ProductGallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 sticky top-32">
      
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "relative w-20 aspect-[3/4] overflow-hidden bg-brand-gray-50 border transition-all shrink-0",
              activeIndex === idx ? "border-brand-black opacity-100" : "border-transparent opacity-60 hover:opacity-100"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {/* Imagem Principal */}
      <div className="relative w-full aspect-[3/4] bg-brand-gray-50 overflow-hidden cursor-crosshair">
        <Image
          src={images[activeIndex]}
          alt="Imagem do Produto Principal"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

    </div>
  );
}
