"use client";

// ============================================================
// L'Atelier Rio — Admin Dashboard Premium
// ============================================================
import { Package, TrendingUp, Users, DollarSign, MoreHorizontal, ArrowUpRight, ArrowDownRight, Plus, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-semibold text-3xl text-gray-900 tracking-tight font-sans">
            Visão Geral
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            Acompanhe o desempenho da sua marca em tempo real.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4.5 py-2.5 bg-white border border-gray-200 text-sm font-medium text-gray-700 rounded-xl shadow-sm hover:bg-gray-50 active:scale-98 transition-all">
            <Download size={16} />
            Exportar Relatório
          </button>
          <button className="flex items-center gap-2 px-4.5 py-2.5 bg-zinc-900 border border-transparent text-sm font-medium text-white rounded-xl shadow-md shadow-zinc-950/10 hover:bg-zinc-800 active:scale-98 transition-all">
            <Plus size={16} className="text-amber-400" />
            Novo Produto
          </button>
        </div>
      </div>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Receita Total" 
          value="R$ 12.450,00" 
          icon={<DollarSign size={20} />} 
          trend="+15%" 
          trendText="vs. semana passada"
          color="amber"
          delay={0.1} 
        />
        <MetricCard 
          title="Novos Pedidos" 
          value="48" 
          icon={<Package size={20} />} 
          trend="+8%" 
          trendText="vs. ontem"
          color="zinc"
          delay={0.2} 
        />
        <MetricCard 
          title="Visitantes Ativos" 
          value="3.204" 
          icon={<Users size={20} />} 
          trend="+12%" 
          trendText="vs. ontem"
          color="zinc"
          delay={0.3} 
        />
        <MetricCard 
          title="Taxa de Conversão" 
          value="4.2%" 
          icon={<TrendingUp size={20} />} 
          trend="-2%" 
          trendText="vs. semana anterior"
          color="rose"
          delay={0.4} 
        />
      </div>

      {/* Dashboard Tables & Side Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Últimos Pedidos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="lg:col-span-2 bg-white rounded-2xl border border-gray-100/80 shadow-sm shadow-gray-200/50 flex flex-col overflow-hidden"
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-50">
            <div>
              <h2 className="font-semibold text-lg text-gray-900">Últimos Pedidos</h2>
              <p className="text-xs text-gray-400 mt-0.5">Últimas transações realizadas na loja</p>
            </div>
            <button className="text-xs font-semibold text-amber-600 hover:text-amber-700 hover:underline transition-colors px-3 py-1.5 rounded-lg hover:bg-amber-50">
              Ver todos
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="text-gray-400 border-b border-gray-100 bg-gray-50/50 text-[11px] font-semibold tracking-wider uppercase">
                  <th className="py-4.5 px-6">Pedido</th>
                  <th className="py-4.5 px-6">Cliente</th>
                  <th className="py-4.5 px-6">Data</th>
                  <th className="py-4.5 px-6">Valor</th>
                  <th className="py-4.5 px-6">Status</th>
                  <th className="py-4.5 px-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-600">
                <TableRow id="#10045" client="Maria Silva" date="Hoje, 14:30" value="R$ 489,00" status="Pendente" />
                <TableRow id="#10044" client="Ana Costa" date="Hoje, 11:15" value="R$ 1.250,00" status="Aprovado" />
                <TableRow id="#10043" client="Beatriz Santos" date="Ontem, 16:45" value="R$ 369,00" status="Enviado" />
                <TableRow id="#10042" client="Carla Dias" date="Ontem, 14:20" value="R$ 890,00" status="Aprovado" />
                <TableRow id="#10041" client="Julia Mendes" date="12 Mai, 09:30" value="R$ 250,00" status="Cancelado" />
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Top Produtos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100/80 shadow-sm shadow-gray-200/50 p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-semibold text-lg text-gray-900">Top Produtos</h2>
                <p className="text-xs text-gray-400 mt-0.5">Mais vendidos este mês</p>
              </div>
            </div>
            <div className="space-y-5">
              <ProductRow name="Blazer Oversized Linho" sales="32 vendas" price="R$ 589,00" stock="12 em estoque" gradient="from-neutral-900 to-neutral-700" />
              <ProductRow name="Calça Wide Leg Premium" sales="28 vendas" price="R$ 429,00" stock="8 em estoque" gradient="from-zinc-800 to-zinc-500" />
              <ProductRow name="Vestido Midi Plissado" sales="24 vendas" price="R$ 489,00" stock="5 em estoque" gradient="from-stone-900 to-stone-600" />
              <ProductRow name="Top Cropped Seda" sales="19 vendas" price="R$ 259,00" stock="18 em estoque" gradient="from-amber-950 to-amber-850" />
            </div>
          </div>
          <button className="w-full mt-6 py-2.5 border border-gray-200 hover:border-gray-300 text-xs font-semibold text-gray-700 rounded-xl hover:bg-gray-50 active:scale-98 transition-all">
            Ver Relatório de Vendas
          </button>
        </motion.div>
      </div>
    </div>
  );
}

function MetricCard({ 
  title, 
  value, 
  icon, 
  trend, 
  trendText, 
  color, 
  delay 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  trend: string; 
  trendText: string; 
  color: 'amber' | 'rose' | 'zinc'; 
  delay: number; 
}) {
  const isPositive = trend.startsWith('+');

  const colorStyles = {
    amber: {
      bg: 'bg-amber-50 text-amber-700 border-amber-100',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    rose: {
      bg: 'bg-rose-50 text-rose-700 border-rose-100',
      badge: 'bg-rose-50 text-rose-700 border-rose-100',
    },
    zinc: {
      bg: 'bg-zinc-100/70 text-zinc-800 border-zinc-200/50',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ 
        y: -4, 
        boxShadow: "0 12px 30px -10px rgba(0, 0, 0, 0.04), 0 4px 12px -5px rgba(0, 0, 0, 0.02)",
        borderColor: "rgba(0,0,0,0.08)"
      }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-5">
          <div className={`p-3 rounded-xl border ${colorStyles[color].bg} flex items-center justify-center`}>
            {icon}
          </div>
          <div className={`flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full border ${isPositive ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>
            {isPositive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
            {trend}
          </div>
        </div>
        
        <h3 className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">{title}</h3>
        <span className="text-2xl font-bold text-gray-900 tracking-tight font-sans">{value}</span>
      </div>
      
      <p className="text-[11px] text-gray-400 mt-4 font-medium">{trendText}</p>
    </motion.div>
  );
}

function TableRow({ id, client, date, value, status }: { id: string, client: string, date: string, value: string, status: string }) {
  const getStatusStyle = (s: string) => {
    switch (s) {
      case 'Pendente': return 'bg-amber-50 text-amber-700 border-amber-200/50 dot-amber';
      case 'Aprovado': return 'bg-emerald-50 text-emerald-700 border-emerald-200/50 dot-emerald';
      case 'Enviado': return 'bg-blue-50 text-blue-700 border-blue-200/50 dot-blue';
      case 'Cancelado': return 'bg-rose-50 text-rose-700 border-rose-200/50 dot-rose';
      default: return 'bg-gray-50 text-gray-700 border-gray-200 dot-gray';
    }
  };

  const getDotColor = (s: string) => {
    switch (s) {
      case 'Pendente': return 'bg-amber-500';
      case 'Aprovado': return 'bg-emerald-500';
      case 'Enviado': return 'bg-blue-500';
      case 'Cancelado': return 'bg-rose-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <tr className="group hover:bg-gray-50/40 transition-colors">
      <td className="py-4 px-6 font-semibold text-gray-900 font-mono text-xs">{id}</td>
      <td className="py-4 px-6 font-medium text-gray-700">{client}</td>
      <td className="py-4 px-6 text-gray-400 text-xs font-medium">{date}</td>
      <td className="py-4 px-6 font-semibold text-gray-900">{value}</td>
      <td className="py-4 px-6">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 border rounded-full text-xs font-semibold ${getStatusStyle(status)}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${getDotColor(status)}`}></span>
          {status}
        </span>
      </td>
      <td className="py-4 px-6 text-right">
        <button className="text-gray-400 hover:text-gray-900 transition-colors p-1.5 rounded-lg hover:bg-gray-100">
          <MoreHorizontal size={16} />
        </button>
      </td>
    </tr>
  );
}

function ProductRow({ 
  name, 
  sales, 
  price, 
  stock, 
  gradient 
}: { 
  name: string; 
  sales: string; 
  price: string; 
  stock: string; 
  gradient: string; 
}) {
  const isLowStock = stock.includes('5') || stock.includes('8');
  
  return (
    <div className="flex items-center gap-4 group cursor-pointer p-1 rounded-xl hover:bg-gray-50/50 transition-all duration-200">
      {/* High-end gradient abstraction placeholder for premium look */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${gradient} flex items-center justify-center flex-shrink-0 border border-gray-100 shadow-inner overflow-hidden transition-transform duration-300 group-hover:scale-105`}>
        <div className="w-6 h-6 opacity-10 bg-white rounded-md rotate-12 transform group-hover:rotate-45 transition-transform duration-500"></div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 text-xs truncate group-hover:text-amber-600 transition-colors">{name}</h4>
        <div className="flex items-center gap-2 mt-0.5 text-[11px] text-gray-400 font-medium">
          <span>{sales}</span>
          <span className="w-0.75 h-0.75 bg-gray-200 rounded-full"></span>
          <span className={isLowStock ? 'text-amber-600 font-semibold' : ''}>{stock}</span>
        </div>
      </div>
      <div className="text-xs font-bold text-gray-900">
        {price}
      </div>
    </div>
  );
}

