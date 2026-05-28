// ============================================================
// L'Atelier Rio — Avaliações (Testimonials)
// ============================================================
import { Star } from 'lucide-react';
import { mockReviews } from '@/lib/mock-data';

export default function Testimonials() {
  // Pega apenas as 3 melhores avaliações
  const reviews = mockReviews.filter(r => r.rating === 5).slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-brand-white">
      <div className="store-container">
        
        <div className="text-center mb-16">
          <span className="section-label block mb-4">Aprovado</span>
          <h2 className="section-title">O Que Dizem Nossas Clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center p-6 md:p-8 border border-brand-gray-100 rounded-sm">
              <div className="flex gap-1 mb-6 text-brand-nude">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-display text-lg md:text-xl leading-relaxed text-brand-black mb-8 italic">
                "{review.comment}"
              </p>
              <span className="text-sm font-semibold tracking-widest uppercase text-brand-gray-600">
                — {review.authorName}
              </span>
              {review.verified && (
                <span className="text-xs text-brand-gray-400 mt-2">Compra Verificada</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
