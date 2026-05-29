"use client";

import { ShoppingBag } from 'lucide-react';

export default function AdminPedidos() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-semibold text-3xl text-gray-900 tracking-tight">Pedidos</h1>
          <p className="text-gray-400 mt-1 text-sm">Gerencie transações, envios e status de pedidos.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100/80 shadow-sm p-12 text-center flex flex-col items-center justify-center space-y-4">
        <div className="p-4 bg-amber-50 rounded-full border border-amber-100 text-amber-600">
          <ShoppingBag size={32} />
        </div>
        <div className="max-w-md">
          <h3 className="text-lg font-semibold text-gray-900">Gerenciador de Pedidos</h3>
          <p className="text-gray-400 text-sm mt-1">Esta seção está sendo preparada. Em breve você poderá atualizar status de faturamento e rastreamento de entregas.</p>
        </div>
      </div>
    </div>
  );
}
