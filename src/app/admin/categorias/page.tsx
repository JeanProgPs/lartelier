"use client";

import { Tag, Plus } from 'lucide-react';

export default function AdminCategorias() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-semibold text-3xl text-gray-900 tracking-tight">Categorias</h1>
          <p className="text-gray-400 mt-1 text-sm">Organize seus produtos em categorias e coleções.</p>
        </div>
        <button className="flex items-center gap-2 px-4.5 py-2.5 bg-zinc-900 text-sm font-medium text-white rounded-xl shadow-md hover:bg-zinc-800 transition-all">
          <Plus size={16} className="text-amber-400" />
          Nova Categoria
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100/80 shadow-sm p-12 text-center flex flex-col items-center justify-center space-y-4">
        <div className="p-4 bg-amber-50 rounded-full border border-amber-100 text-amber-600">
          <Tag size={32} />
        </div>
        <div className="max-w-md">
          <h3 className="text-lg font-semibold text-gray-900">Gerenciador de Categorias</h3>
          <p className="text-gray-400 text-sm mt-1">Esta seção está sendo preparada. Em breve você poderá gerenciar coleções sazonais e categorias de roupas.</p>
        </div>
      </div>
    </div>
  );
}
