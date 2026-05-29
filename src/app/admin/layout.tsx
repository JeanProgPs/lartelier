"use client";

// ============================================================
// L'Atelier Rio — Admin Layout Premium
// Isola a área admin do Header/Footer global da loja
// ============================================================
import { LayoutDashboard, Package, Tag, ShoppingBag, LogOut, Search, Bell, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/produtos', label: 'Produtos', icon: Package },
    { href: '/admin/categorias', label: 'Categorias', icon: Tag },
    { href: '/admin/pedidos', label: 'Pedidos', icon: ShoppingBag },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] text-gray-800 antialiased font-sans">
      
      {/* Sidebar Admin (Deep Luxury Dark Mode) */}
      <aside 
        style={{ width: '256px', minWidth: '256px' }}
        className="bg-[#09090B] text-white flex flex-col fixed inset-y-0 left-0 z-50 border-r border-white/[0.05] shadow-[4px_0_24px_rgba(0,0,0,0.3)]"
      >
        {/* Brand Header */}
        <div className="h-20 flex items-center justify-center border-b border-white/[0.06] px-6">
          <Link href="/admin" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 shadow-[0_0_8px_#fbbf24]"></span>
            <h1 className="font-semibold text-lg tracking-[0.2em] text-white uppercase transition-colors group-hover:text-amber-200">
              L'Atelier
            </h1>
            <span className="text-[9px] tracking-widest text-amber-400 uppercase font-mono px-1.5 py-0.5 rounded border border-amber-400/20 bg-amber-400/5">
              PRO
            </span>
          </Link>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 py-8 flex flex-col gap-1.5 px-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.href}
                href={item.href} 
                className={`relative flex items-center gap-3.5 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 group overflow-hidden ${
                  isActive 
                    ? 'text-white font-semibold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-white/[0.07] border-l-2 border-amber-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <Icon 
                  size={18} 
                  className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'text-amber-400' : 'text-gray-400 group-hover:text-white'
                  }`} 
                />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/[0.06]">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all duration-200 group"
          >
            <LogOut size={18} className="transition-transform group-hover:-translate-x-1" />
            <span>Sair para a Loja</span>
          </Link>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main 
        style={{ marginLeft: '256px' }}
        className="flex-1 flex flex-col min-h-screen pl-1"
      >
        {/* Top Bar (Ultra premium Glassmorphic Header) */}
        <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40 shadow-sm shadow-gray-100/20">
          {/* Search bar */}
          <div className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-amber-500/10 focus-within:border-amber-500/40 px-4 py-2.5 rounded-xl border border-gray-200/80 w-96 transition-all duration-300">
            <Search size={18} className="text-gray-400 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Pesquisar pedidos, produtos..." 
              className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder:text-gray-400 font-sans"
            />
          </div>

          {/* User profile & notifications */}
          <div className="flex items-center gap-6">
            <button className="relative p-2.5 hover:bg-gray-50 active:bg-gray-100 rounded-xl transition-all duration-200 text-gray-500 hover:text-gray-800 border border-transparent hover:border-gray-100">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 ring-2 ring-white rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-3.5 pl-6 border-l border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#18181B] to-[#3F3F46] flex items-center justify-center text-white shadow-md shadow-zinc-950/10 border border-zinc-700/30">
                <User size={18} className="text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900 leading-tight">Administrador</span>
                <span className="text-xs text-gray-400 font-medium mt-0.5">Gestor L'Atelier</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content Area */}
        <div className="p-8 flex-1 bg-gradient-to-b from-gray-50/50 to-gray-100/30">
          {children}
        </div>
      </main>
      
    </div>
  );
}

