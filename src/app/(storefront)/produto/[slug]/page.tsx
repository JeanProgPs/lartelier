// ============================================================
// L'Atelier Rio — Página de Produto
// ============================================================
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { mockProducts, getProductBySlug, getRelatedProducts } from '@/lib/mock-data';
import { formatPrice, formatInstallments } from '@/lib/utils';
import ProductGallery from './ProductGallery';
import ProductActions from './ProductActions';
import ProductCard from '@/components/product/ProductCard';

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-32">
      <div className="store-container">
        
        {/* Breadcrumb */}
        <nav className="text-xs tracking-widest uppercase font-semibold text-brand-gray-400 mb-8 md:mb-12">
          <a href="/" className="hover:text-brand-black transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href={`/categorias/${product.category}`} className="hover:text-brand-black transition-colors">{product.categoryName}</a>
          <span className="mx-2">/</span>
          <span className="text-brand-black">{product.name}</span>
        </nav>

        {/* Produto: Topo */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24 md:mb-32">
          
          {/* Galeria de Imagens (Client Component) */}
          <div className="w-full lg:w-[55%]">
            <ProductGallery images={product.images} />
          </div>

          {/* Info do Produto e Ações (Client Component) */}
          <div className="w-full lg:w-[45%] lg:py-4">
            <div className="flex flex-col gap-2 mb-6 md:mb-8">
              {product.isNew && <span className="badge badge-new w-max mb-2">Novo</span>}
              <h1 className="font-display text-3xl md:text-4xl text-brand-black leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-end gap-4 mt-2">
                <span className="text-2xl font-medium text-brand-black">
                  {formatPrice(product.price)}
                </span>
                {hasDiscount && (
                  <span className="text-lg text-brand-gray-400 line-through pb-0.5">
                    {formatPrice(product.originalPrice!)}
                  </span>
                )}
              </div>
              
              {product.installments && (
                <span className="text-sm text-brand-gray-600">
                  ou {formatInstallments(product.price, product.installments)}
                </span>
              )}
            </div>

            <p className="text-brand-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Client Component para seleção de cor, tamanho e add to cart */}
            <ProductActions product={product} />

            {/* Informações Extras (Acordeão simplificado) */}
            <div className="mt-12 border-t border-brand-gray-200 divide-y divide-brand-gray-200">
              <details className="group py-6" open>
                <summary className="font-medium flex justify-between cursor-pointer list-none">
                  <span>Detalhes & Material</span>
                  <span className="transition group-open:rotate-180">↓</span>
                </summary>
                <div className="pt-4 text-sm text-brand-gray-600 space-y-2">
                  <p><span className="font-medium text-brand-black">Material:</span> {product.material || 'Não especificado'}</p>
                  <p><span className="font-medium text-brand-black">SKU:</span> LAT-{product.id.padStart(4, '0')}</p>
                </div>
              </details>
              <details className="group py-6">
                <summary className="font-medium flex justify-between cursor-pointer list-none">
                  <span>Cuidados com a Peça</span>
                  <span className="transition group-open:rotate-180">↓</span>
                </summary>
                <ul className="pt-4 text-sm text-brand-gray-600 space-y-1 list-disc list-inside">
                  {product.care?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </details>
              <details className="group py-6">
                <summary className="font-medium flex justify-between cursor-pointer list-none">
                  <span>Envio & Devoluções</span>
                  <span className="transition group-open:rotate-180">↓</span>
                </summary>
                <div className="pt-4 text-sm text-brand-gray-600 space-y-2">
                  <p>Frete grátis para compras acima de R$ 500.</p>
                  <p>Troca grátis em até 30 dias após o recebimento.</p>
                </div>
              </details>
            </div>
            
          </div>
        </div>

        {/* Produtos Relacionados */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-brand-gray-200 pt-20">
            <h2 className="font-display text-3xl mb-12 text-center">Você Também Pode Gostar</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
