// ============================================================
// L'Atelier Rio — Product Card Premium
// ============================================================
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { cn, formatPrice, formatInstallments } from '@/lib/utils';
import type { Product } from '@/types';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  // Imagem primária e secundária (se houver)
  const mainImage = product.images[0];
  const hoverImage = product.images[1] || mainImage;

  // Lógica de badge
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  const handleQuickAdd = (e: React.MouseEvent, size: string) => {
    e.preventDefault(); // Evita navegar para a página do produto
    addItem(product, size, product.colors[0]?.name || 'Única');
  };

  return (
    <div 
      className={cn("group flex flex-col relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container de Imagem */}
      <Link href={`/produto/${product.slug}`} className="relative aspect-product overflow-hidden bg-brand-gray-50 mb-4 block">
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
          {product.isNew && <span className="badge badge-new">Novo</span>}
          {hasDiscount && <span className="badge badge-sale">Sale</span>}
        </div>

        {/* Imagem Principal */}
        <Image
          src={mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className={cn(
            "object-cover transition-opacity duration-700 ease-out z-10",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        
        {/* Imagem de Hover */}
        <Image
          src={hoverImage}
          alt={`${product.name} - Detalhe`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className={cn(
            "object-cover transition-all duration-700 ease-out absolute inset-0 z-0",
            isHovered ? "scale-105 opacity-100" : "scale-100 opacity-0"
          )}
        />

        {/* Quick Add (Hover Menu) - Desktop Only */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent z-20 transition-transform duration-300 translate-y-full hidden lg:flex flex-col gap-3",
          isHovered && "translate-y-0"
        )}>
          <div className="flex gap-2 justify-center">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => handleQuickAdd(e, size)}
                className="w-10 h-10 bg-brand-white text-brand-black text-xs font-bold flex items-center justify-center hover:bg-brand-black hover:text-brand-white transition-colors uppercase"
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-center text-brand-white text-xs font-medium drop-shadow-md">
            Adição Rápida
          </p>
        </div>
      </Link>

      {/* Informações do Produto */}
      <div className="flex flex-col gap-1">
        
        {/* Nome & Preço */}
        <div className="flex justify-between items-start gap-4">
          <Link href={`/produto/${product.slug}`} className="font-medium text-sm md:text-base leading-snug hover:text-brand-gray-600 transition-colors line-clamp-2">
            {product.name}
          </Link>
          <div className="text-right shrink-0 flex flex-col items-end">
            {hasDiscount && (
              <span className="text-xs text-brand-gray-400 line-through mb-0.5">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
            <span className={cn("font-medium", hasDiscount ? "text-brand-nude-dark" : "text-brand-black")}>
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        {/* Parcelamento */}
        {product.installments && (
          <span className="text-xs text-brand-gray-400">
            {formatInstallments(product.price, product.installments)}
          </span>
        )}

        {/* Swatches de Cor */}
        {product.colors && product.colors.length > 1 && (
          <div className="flex gap-1.5 mt-2">
            {product.colors.map((color) => (
              <div 
                key={color.name}
                className="w-3.5 h-3.5 rounded-full border border-brand-gray-200"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            <span className="text-[10px] text-brand-gray-400 ml-1 mt-0.5">+{product.colors.length} cores</span>
          </div>
        )}
      </div>
    </div>
  );
}
