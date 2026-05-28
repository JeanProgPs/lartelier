// ============================================================
// L'Atelier Rio — Admin Layout
// Isola a área admin do Header/Footer global da loja
// ============================================================
import { LayoutDashboard, Package, Tag, ShoppingBag, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-brand-gray-50">
      
      {/* Sidebar Admin */}
      <aside className="w-64 bg-brand-black text-brand-white flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="p-6 border-b border-brand-gray-800">
          <h1 className="font-display text-xl">L'Atelier Admin</h1>
        </div>
        
        <nav className="flex-1 py-6 flex flex-col gap-2 px-4">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm bg-brand-white/10 text-brand-white">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link href="/admin/produtos" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm text-brand-gray-400 hover:text-brand-white hover:bg-brand-white/5 transition-colors">
            <Package size={18} />
            Produtos
          </Link>
          <Link href="/admin/categorias" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm text-brand-gray-400 hover:text-brand-white hover:bg-brand-white/5 transition-colors">
            <Tag size={18} />
            Categorias
          </Link>
          <Link href="/admin/pedidos" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm text-brand-gray-400 hover:text-brand-white hover:bg-brand-white/5 transition-colors">
            <ShoppingBag size={18} />
            Pedidos
          </Link>
        </nav>

        <div className="p-6 border-t border-brand-gray-800">
          <Link href="/" className="flex items-center gap-3 text-sm font-medium text-brand-gray-400 hover:text-brand-white transition-colors">
            <LogOut size={18} />
            Sair para a Loja
          </Link>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
      
    </div>
  );
}
