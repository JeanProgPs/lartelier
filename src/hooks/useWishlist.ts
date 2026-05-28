// ============================================================
// L'Atelier Rio — Wishlist Hook
// Hook global para gerenciar a lista de desejos (favoritos)
// ============================================================
'use client';

import { useState, useEffect, useCallback } from 'react';
import type { WishlistItem, Product } from '@/types';

const WISHLIST_STORAGE_KEY = 'latelier_wishlist';

export function useWishlist() {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar do localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Erro ao carregar wishlist:', e);
    }
    setIsLoaded(true);
  }, []);

  // Salvar no localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoaded]);

  // Sincronizar abas
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === WISHLIST_STORAGE_KEY && e.newValue) {
        setItems(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const isInWishlist = useCallback((productId: string) => {
    return items.some((item) => item.productId === productId);
  }, [items]);

  const toggleItem = useCallback((product: Product) => {
    setItems((prev) => {
      const exists = prev.some((item) => item.productId === product.id);
      
      if (exists) {
        return prev.filter((item) => item.productId !== product.id);
      }
      
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          slug: product.slug,
          image: product.images[0],
          price: product.price,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
  }, []);

  const clearWishlist = useCallback(() => setItems([]), []);

  return {
    items,
    isLoaded,
    count: items.length,
    isInWishlist,
    toggleItem,
    removeItem,
    clearWishlist,
  };
}
