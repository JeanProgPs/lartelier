// ============================================================
// L'Atelier Rio — Checkout Mock
// ============================================================
'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { formatPrice, cn } from '@/lib/utils';
import { CheckCircle, CreditCard, Box, MapPin } from 'lucide-react';
import Link from 'next/link';

type Step = 'cart' | 'identification' | 'payment' | 'success';
type PaymentMethod = 'credit_card' | 'pix' | 'boleto';

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>('identification');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit_card');
  const [isProcessing, setIsProcessing] = useState(false);

  const shipping = 2500; // R$ 25,00
  const total = cartTotal + shipping;

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <Box size={48} className="text-brand-gray-200 mb-6" />
        <h1 className="font-display text-3xl mb-4">Carrinho Vazio</h1>
        <p className="text-brand-gray-600 mb-8">Não há itens no seu carrinho para finalizar a compra.</p>
        <Link href="/" className="btn btn-primary">Voltar para Loja</Link>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[60vh] bg-brand-gray-50/30">
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} strokeWidth={2} />
        </div>
        <h1 className="font-display text-3xl md:text-4xl mb-4 text-brand-black">Pedido Confirmado!</h1>
        <p className="text-brand-gray-600 mb-2">Obrigado por comprar na L'Atelier Rio.</p>
        <p className="text-sm text-brand-gray-500 mb-8">Número do pedido: #{Math.floor(Math.random() * 100000).toString().padStart(6, '0')}</p>
        <Link href="/" className="btn btn-primary">Voltar para Loja</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-32 bg-brand-gray-50/30 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <h1 className="font-display text-3xl mb-8 md:mb-12 text-center">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Coluna Principal: Formulários */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1 flex flex-col gap-6">
            
            {/* Identificação & Endereço */}
            <div className={cn("bg-brand-white p-6 md:p-8 border border-brand-gray-200 transition-opacity", step !== 'identification' && "opacity-60")}>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-brand-gray-100">
                <div className="w-8 h-8 rounded-full bg-brand-black text-brand-white flex items-center justify-center font-bold text-sm">1</div>
                <h2 className="font-display text-xl">Identificação e Entrega</h2>
              </div>

              {step === 'identification' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nome Completo" className="input-premium" defaultValue="Maria Joaquina" />
                    <input type="email" placeholder="E-mail" className="input-premium" defaultValue="maria@exemplo.com" />
                    <input type="text" placeholder="CPF" className="input-premium" defaultValue="123.456.789-00" />
                    <input type="tel" placeholder="Celular" className="input-premium" defaultValue="(21) 99999-9999" />
                  </div>
                  
                  <div className="pt-4 border-t border-brand-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" placeholder="CEP" className="input-premium" defaultValue="22410-000" />
                    <input type="text" placeholder="Rua" className="input-premium md:col-span-2" defaultValue="Rua Garcia d'Avila" />
                    <input type="text" placeholder="Número" className="input-premium" defaultValue="100" />
                    <input type="text" placeholder="Complemento" className="input-premium md:col-span-2" defaultValue="Apto 101" />
                  </div>

                  <button 
                    onClick={() => setStep('payment')}
                    className="btn btn-primary w-full mt-4"
                  >
                    Ir para Pagamento
                  </button>
                </div>
              )}
            </div>

            {/* Pagamento */}
            <div className={cn("bg-brand-white p-6 md:p-8 border border-brand-gray-200 transition-opacity", step !== 'payment' && "opacity-60")}>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-brand-gray-100">
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors", step === 'payment' ? "bg-brand-black text-brand-white" : "bg-brand-gray-200 text-brand-gray-600")}>2</div>
                <h2 className="font-display text-xl">Pagamento</h2>
              </div>

              {step === 'payment' && (
                <div className="space-y-8 animate-fade-in">
                  
                  {/* Abas de Método de Pagamento */}
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setPaymentMethod('credit_card')}
                      className={cn("flex-1 py-3 px-4 border text-sm font-medium transition-colors", paymentMethod === 'credit_card' ? "border-brand-black bg-brand-gray-50" : "border-brand-gray-200 text-brand-gray-500 hover:border-brand-gray-400")}
                    >
                      Cartão de Crédito
                    </button>
                    <button 
                      onClick={() => setPaymentMethod('pix')}
                      className={cn("flex-1 py-3 px-4 border text-sm font-medium transition-colors", paymentMethod === 'pix' ? "border-brand-black bg-brand-gray-50" : "border-brand-gray-200 text-brand-gray-500 hover:border-brand-gray-400")}
                    >
                      PIX
                    </button>
                  </div>

                  {/* Formulário de Cartão (Mock) */}
                  {paymentMethod === 'credit_card' && (
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Número do Cartão" className="input-premium col-span-2" />
                      <input type="text" placeholder="Nome Impresso" className="input-premium col-span-2" />
                      <input type="text" placeholder="Validade (MM/AA)" className="input-premium" />
                      <input type="text" placeholder="CVV" className="input-premium" />
                      <select className="input-premium col-span-2 bg-brand-white appearance-none">
                        <option>1x de {formatPrice(total)} sem juros</option>
                        <option>2x de {formatPrice(total / 2)} sem juros</option>
                        <option>3x de {formatPrice(total / 3)} sem juros</option>
                      </select>
                    </div>
                  )}

                  {/* Instruções PIX */}
                  {paymentMethod === 'pix' && (
                    <div className="text-center p-6 bg-brand-gray-50 border border-brand-gray-200">
                      <p className="text-brand-gray-600 mb-4">Ao finalizar a compra, um QR Code será gerado para o pagamento via PIX.</p>
                      <p className="text-xs text-brand-gray-400">Aprovação imediata.</p>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4 border-t border-brand-gray-100">
                    <button 
                      onClick={() => setStep('identification')}
                      className="btn btn-secondary w-full"
                    >
                      Voltar
                    </button>
                    <button 
                      onClick={handleSimulatePayment}
                      disabled={isProcessing}
                      className="btn btn-primary w-full"
                    >
                      {isProcessing ? 'Processando...' : 'Confirmar Pagamento'}
                    </button>
                  </div>

                </div>
              )}
            </div>

          </div>

          {/* Coluna Lateral: Resumo do Pedido */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 bg-brand-white p-6 md:p-8 border border-brand-gray-200 sticky top-24">
            <h2 className="font-display text-xl mb-6 pb-6 border-b border-brand-gray-100">Resumo do Pedido</h2>
            
            <div className="space-y-4 mb-6 pb-6 border-b border-brand-gray-100 max-h-[40vh] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={`${item.productId}-${item.size}-${item.color}`} className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm font-medium text-brand-black line-clamp-1">{item.name}</p>
                    <p className="text-xs text-brand-gray-500 mt-1">Tam: {item.size} | Cor: {item.color}</p>
                    <p className="text-xs text-brand-gray-500">Qtd: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium text-brand-black shrink-0">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-brand-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-brand-gray-600">
                <span>Frete (Expresso)</span>
                <span>{formatPrice(shipping)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-brand-gray-200">
              <span className="font-medium text-lg">Total</span>
              <span className="font-display text-2xl text-brand-black">{formatPrice(total)}</span>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}
