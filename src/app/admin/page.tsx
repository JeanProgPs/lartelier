// ============================================================
// L'Atelier Rio — Admin Dashboard
// ============================================================
import { Package, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-display text-3xl mb-8 text-brand-black">Dashboard</h1>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <MetricCard title="Vendas Hoje" value="R$ 4.250" icon={<DollarSign size={24} />} trend="+12%" />
        <MetricCard title="Pedidos Pendentes" value="14" icon={<Package size={24} />} />
        <MetricCard title="Visitas" value="1.204" icon={<Users size={24} />} trend="+5%" />
        <MetricCard title="Conversão" value="3.2%" icon={<TrendingUp size={24} />} trend="-1%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Últimos Pedidos */}
        <div className="lg:col-span-2 bg-brand-white p-6 border border-brand-gray-200">
          <h2 className="font-medium text-lg mb-6">Últimos Pedidos</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-brand-gray-400 border-b border-brand-gray-100">
                <tr>
                  <th className="pb-3 font-medium">Pedido</th>
                  <th className="pb-3 font-medium">Cliente</th>
                  <th className="pb-3 font-medium">Data</th>
                  <th className="pb-3 font-medium">Valor</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gray-100 text-brand-gray-600">
                <tr>
                  <td className="py-4">#12345</td>
                  <td className="py-4">Maria Silva</td>
                  <td className="py-4">Hoje, 14:30</td>
                  <td className="py-4">R$ 489,00</td>
                  <td className="py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-sm text-xs font-medium">Pendente</span></td>
                </tr>
                <tr>
                  <td className="py-4">#12344</td>
                  <td className="py-4">Ana Costa</td>
                  <td className="py-4">Hoje, 11:15</td>
                  <td className="py-4">R$ 1.250,00</td>
                  <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-sm text-xs font-medium">Aprovado</span></td>
                </tr>
                <tr>
                  <td className="py-4">#12343</td>
                  <td className="py-4">Beatriz Santos</td>
                  <td className="py-4">Ontem, 16:45</td>
                  <td className="py-4">R$ 369,00</td>
                  <td className="py-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-sm text-xs font-medium">Enviado</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Produtos Populares */}
        <div className="bg-brand-white p-6 border border-brand-gray-200">
          <h2 className="font-medium text-lg mb-6">Mais Vendidos</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <p className="font-medium text-brand-black">Blazer Oversized Linho</p>
                <p className="text-brand-gray-400">12 unidades</p>
              </div>
              <span className="text-sm font-medium">R$ 589,00</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <p className="font-medium text-brand-black">Calça Wide Leg Premium</p>
                <p className="text-brand-gray-400">8 unidades</p>
              </div>
              <span className="text-sm font-medium">R$ 429,00</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <p className="font-medium text-brand-black">Vestido Midi Plissado</p>
                <p className="text-brand-gray-400">5 unidades</p>
              </div>
              <span className="text-sm font-medium">R$ 489,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend?: string }) {
  const isPositive = trend?.startsWith('+');
  
  return (
    <div className="bg-brand-white p-6 border border-brand-gray-200 flex flex-col">
      <div className="flex justify-between items-start mb-4 text-brand-gray-400">
        <h3 className="font-medium text-sm">{title}</h3>
        {icon}
      </div>
      <div className="flex items-end gap-3 mt-auto">
        <span className="text-2xl font-bold text-brand-black">{value}</span>
        {trend && (
          <span className={`text-xs font-medium mb-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
