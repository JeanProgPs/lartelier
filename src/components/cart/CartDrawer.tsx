// ============================================================
// L'Atelier Rio — Cart Drawer (Carrinho Lateral)
// ============================================================
'use client';

import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { formatPrice, cn } from '@/lib/utils';
import Image from 'next/image';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-brand-white shadow-2xl flex flex-col animate-slide-in-right">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-gray-100">
          <h2 className="font-display text-2xl font-medium tracking-tight flex items-center gap-2">
            <ShoppingBag size={24} strokeWidth={1.5} />
            Carrinho
          </h2>
          <button 
            onClick={closeCart}
            className="p-2 -mr-2 text-brand-gray-400 hover:text-brand-black transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 bg-brand-gray-50 rounded-full flex items-center justify-center text-brand-gray-200">
                <ShoppingBag size={40} strokeWidth={1} />
              </div>
              <div>
                <p className="text-lg font-medium mb-2">Seu carrinho está vazio</p>
                <p className="text-brand-gray-600 text-sm">Descubra nossa nova coleção e adicione seus itens favoritos.</p>
              </div>
              <button 
                onClick={closeCart}
                className="btn btn-primary w-full max-w-[200px]"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-4">
                  
                  {/* Imagem */}
                  <div className="w-24 aspect-[3/4] bg-brand-gray-50 relative overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <Link 
                          href={`/produto/${item.slug}`}
                          onClick={closeCart}
                          className="font-medium hover:text-brand-gray-600 transition-colors line-clamp-2 leading-snug"
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.productId, item.size, item.color)}
                          className="text-brand-gray-400 hover:text-brand-black p-1 -mr-1"
                        >
                          <X size={16} strokeWidth={2} />
                        </button>
                      </div>
                      
                      <div className="mt-1 text-xs text-brand-gray-600 flex gap-2">
                        <span>Tam: {item.size}</span>
                        <span>|</span>
                        <span>Cor: {item.color}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantidade */}
                      <div className="flex items-center border border-brand-gray-200 rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                          className="p-1.5 hover:bg-brand-gray-50 text-brand-gray-600"
                        >
                          <Minus size={14} strokeWidth={2} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                          className="p-1.5 hover:bg-brand-gray-50 text-brand-gray-600"
                        >
                          <Plus size={14} strokeWidth={2} />
                        </button>
                      </div>

                      {/* Preço */}
                      <div className="text-right">
                        <p className="font-medium">{formatPrice(item.price)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="border-t border-brand-gray-100 p-6 bg-brand-gray-50/50">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-brand-gray-600 text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-brand-gray-600 text-sm">
                <span>Frete</span>
                <span>Calculado no checkout</span>
              </div>
              <div className="flex justify-between text-lg font-medium pt-3 border-t border-brand-gray-200">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
            </div>
            
            <Link 
              href="/checkout"
              onClick={closeCart}
              className="btn btn-primary w-full text-[13px] py-4"
            >
              Finalizar Compra
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
