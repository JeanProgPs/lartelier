// ============================================================
// L'Atelier Rio — Product Actions
// ============================================================
'use client';

import { useState } from 'react';
import { Heart, Ruler } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product } from '@/types';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

export default function ProductActions({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || '');
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor, selecione um tamanho.');
      return;
    }
    addItem(product, selectedSize, selectedColor, 1);
  };

  const isWished = isInWishlist(product.id);

  return (
    <div className="flex flex-col gap-8">
      
      {/* Seleção de Cor */}
      {product.colors.length > 0 && (
        <div>
          <span className="block text-sm font-medium text-brand-black mb-3">
            Cor: <span className="font-normal text-brand-gray-600">{selectedColor}</span>
          </span>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                disabled={!color.available}
                onClick={() => setSelectedColor(color.name)}
                className={cn(
                  "w-10 h-10 rounded-full border-2 transition-all",
                  selectedColor === color.name ? "border-brand-black p-0.5" : "border-transparent",
                  !color.available && "opacity-30 cursor-not-allowed"
                )}
              >
                <div 
                  className="w-full h-full rounded-full border border-brand-gray-200"
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Seleção de Tamanho */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-brand-black">Tamanho</span>
          <button className="flex items-center gap-1.5 text-xs text-brand-gray-600 hover:text-brand-black transition-colors">
            <Ruler size={14} />
            Guia de Medidas
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "min-w-[3rem] h-12 px-3 border flex items-center justify-center text-sm font-medium transition-colors",
                selectedSize === size 
                  ? "border-brand-black bg-brand-black text-brand-white" 
                  : "border-brand-gray-200 bg-brand-white text-brand-black hover:border-brand-gray-400"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Ações (Comprar / Wishlist) */}
      <div className="flex gap-4">
        <button 
          onClick={handleAddToCart}
          className="btn btn-primary flex-1 h-[54px]"
        >
          Adicionar ao Carrinho
        </button>
        <button 
          onClick={() => toggleItem(product)}
          className={cn(
            "w-[54px] h-[54px] shrink-0 border flex items-center justify-center transition-colors",
            isWished 
              ? "border-brand-nude text-brand-nude bg-brand-nude/5" 
              : "border-brand-gray-200 text-brand-black hover:border-brand-black"
          )}
        >
          <Heart size={20} strokeWidth={isWished ? 2.5 : 1.5} className={cn(isWished && "fill-brand-nude")} />
        </button>
      </div>

    </div>
  );
}
