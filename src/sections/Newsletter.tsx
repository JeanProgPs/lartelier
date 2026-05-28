// ============================================================
// L'Atelier Rio — Newsletter
// ============================================================
'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulação de API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset status after 3s
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 md:py-24 bg-brand-gray-50 border-t border-brand-gray-100">
      <div className="store-container">
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-brand-nude-light/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-nude">
            <Mail size={24} strokeWidth={1.5} />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl mb-4">Mundo L'Atelier</h2>
          <p className="text-brand-gray-600 mb-10 text-sm md:text-base leading-relaxed">
            Inscreva-se para receber acesso antecipado a novas coleções, convites para eventos exclusivos e <span className="font-semibold">10% de desconto</span> em sua primeira compra.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
            <input 
              type="email" 
              placeholder="Seu endereço de e-mail" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status !== 'idle'}
              className="input-premium bg-brand-white h-[54px]"
            />
            <button 
              type="submit" 
              disabled={status !== 'idle'}
              className="btn btn-primary h-[54px] min-w-[140px]"
            >
              {status === 'loading' ? 'Enviando...' : 'Inscrever'}
            </button>
            
            {status === 'success' && (
              <div className="absolute -bottom-8 left-0 right-0 text-xs text-green-600 font-medium animate-fade-in text-center">
                Obrigado! Verifique sua caixa de entrada.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
