// ============================================================
// L'Atelier Rio — Hero Banner
// ============================================================
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Imagem de Fundo Fullscreen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80"
          alt="L'Atelier Rio Collection"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        {/* Overlay Escuro para Legibilidade */}
        <div className="absolute inset-0 bg-brand-black/30" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center text-brand-white px-4 flex flex-col items-center mt-16 md:mt-0">
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-sm"
        >
          Coleção Inverno 26
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 drop-shadow-lg max-w-4xl"
        >
          Elegância Essencial
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-sm md:text-base mb-12 max-w-md mx-auto drop-shadow-md text-brand-white/90"
        >
          Descubra a nova coleção. Peças atemporais com caimento impecável e tecidos premium.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link 
            href="/colecoes/inverno-26"
            className="inline-flex items-center justify-center bg-brand-white text-brand-black px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-brand-black hover:text-brand-white transition-all duration-400 ease-in-out"
          >
            Descobrir
          </Link>
        </motion.div>
      </div>

      {/* Indicador de Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-white/70">Scroll</span>
        <div className="w-[1px] h-12 bg-brand-white/30 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-brand-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
