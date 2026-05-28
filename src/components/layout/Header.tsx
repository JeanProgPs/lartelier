// ============================================================
// L'Atelier Rio — Header Global
// ============================================================
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/useCart';

const MAIN_MENU = [
  { label: 'Novidades', href: '/novidades' },
  { label: 'Vestidos', href: '/categorias/vestidos' },
  { label: 'Blusas', href: '/categorias/blusas' },
  { label: 'Conjuntos', href: '/categorias/conjuntos' },
  { label: 'Acessórios', href: '/categorias/acessorios' },
  { label: 'Sale', href: '/sale', highlight: true },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, openCart } = useCart();

  // Mudar cor do header no scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao trocar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  
  // Se estiver na Home e não scrollou, o header fica transparente (assumindo Hero escuro ou imagem)
  // Caso contrário, fica branco
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isTransparent
            ? 'bg-transparent text-brand-white py-6'
            : 'bg-brand-white/95 backdrop-blur-md text-brand-black py-4 shadow-sm'
        )}
      >
        <div className="store-container flex items-center justify-between">
          
          {/* Menu Mobile Toggle */}
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link 
            href="/" 
            className="font-display text-2xl md:text-3xl font-medium tracking-tight relative z-10"
          >
            L'Atelier Rio
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {MAIN_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors hover:opacity-70',
                  item.highlight && isTransparent ? 'text-brand-nude-light' : '',
                  item.highlight && !isTransparent ? 'text-brand-nude-dark' : ''
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Ícones (Busca, Conta, Wishlist, Carrinho) */}
          <div className="flex items-center gap-4 md:gap-6 relative z-10">
            <button className="p-1 hover:opacity-70 transition-opacity hidden md:block">
              <Search size={22} strokeWidth={1.5} />
            </button>
            <Link href="/conta" className="p-1 hover:opacity-70 transition-opacity hidden md:block">
              <User size={22} strokeWidth={1.5} />
            </Link>
            <Link href="/wishlist" className="p-1 hover:opacity-70 transition-opacity hidden md:block">
              <Heart size={22} strokeWidth={1.5} />
            </Link>
            <button 
              className="p-1 hover:opacity-70 transition-opacity relative group"
              onClick={openCart}
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-nude text-brand-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-brand-white shadow-2xl flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between p-6 border-b border-brand-gray-100">
              <span className="font-display text-xl">L'Atelier Rio</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-brand-gray-600 hover:text-brand-black"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-6">
              <nav className="flex flex-col gap-6">
                {MAIN_MENU.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-lg font-medium tracking-wide',
                      item.highlight ? 'text-brand-nude-dark' : 'text-brand-black'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-12 pt-6 border-t border-brand-gray-100 flex flex-col gap-6">
                <Link href="/conta" className="flex items-center gap-4 text-brand-gray-600">
                  <User size={20} strokeWidth={1.5} />
                  <span>Minha Conta</span>
                </Link>
                <Link href="/wishlist" className="flex items-center gap-4 text-brand-gray-600">
                  <Heart size={20} strokeWidth={1.5} />
                  <span>Favoritos</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
