// ============================================================
// L'Atelier Rio — Dados Mock para desenvolvimento
// Substitua por dados reais do Supabase em produção
// ============================================================
import type { Product, Category, Review, Look } from '@/types';

// ——————————————————————————————————————————
// Categorias
// ——————————————————————————————————————————
export const mockCategories: Category[] = [
  {
    id: '1', name: 'Vestidos', slug: 'vestidos',
    description: 'Vestidos para todas as ocasiões',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
    productCount: 24,
  },
  {
    id: '2', name: 'Blusas', slug: 'blusas',
    description: 'Blusas e tops premium',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
    productCount: 18,
  },
  {
    id: '3', name: 'Calças', slug: 'calcas',
    description: 'Calças e pantalonas elegantes',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
    productCount: 12,
  },
  {
    id: '4', name: 'Saias', slug: 'saias',
    description: 'Saias midi e longas',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80',
    productCount: 10,
  },
  {
    id: '5', name: 'Conjuntos', slug: 'conjuntos',
    description: 'Looks completos prontos para usar',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    productCount: 8,
  },
  {
    id: '6', name: 'Acessórios', slug: 'acessorios',
    description: 'Bolsas, cintos e joias',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    productCount: 15,
  },
];

// ——————————————————————————————————————————
// Produtos
// ——————————————————————————————————————————
export const mockProducts: Product[] = [
  {
    id: '1', name: 'Vestido Midi Plissado', slug: 'vestido-midi-plissado',
    description: 'Vestido midi plissado em tecido fluido. Modelagem solta e elegante, perfeita para ocasiões especiais ou dia a dia refinado. Comprimento midi valoriza a silhueta com leveza e sofisticação.',
    price: 48900, originalPrice: 62000,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    ],
    category: 'vestidos', categoryName: 'Vestidos', stock: 8,
    sizes: ['PP', 'P', 'M', 'G'],
    colors: [
      { name: 'Nude', hex: '#C4A882', available: true },
      { name: 'Preto', hex: '#0A0A0A', available: true },
      { name: 'Off-white', hex: '#F5F0EB', available: false },
    ],
    isFeatured: true, isNew: true, isBestSeller: false,
    installments: 6, material: '100% Viscose',
    care: ['Lavar à mão', 'Não torcer', 'Secar à sombra'],
    createdAt: '2026-05-01T00:00:00Z',
  },
  {
    id: '2', name: 'Blazer Oversized Linho', slug: 'blazer-oversized-linho',
    description: 'Blazer oversized em linho premium. Corte estruturado com ombros marcados. Peça-chave para composições elegantes no trabalho ou eventos especiais.',
    price: 58900,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    ],
    category: 'blusas', categoryName: 'Blusas', stock: 5,
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Areia', hex: '#C9B99A', available: true },
      { name: 'Preto', hex: '#0A0A0A', available: true },
    ],
    isFeatured: true, isNew: false, isBestSeller: true,
    installments: 6, material: '55% Linho, 45% Viscose',
    createdAt: '2026-04-15T00:00:00Z',
  },
  {
    id: '3', name: 'Calça Wide Leg Premium', slug: 'calca-wide-leg-premium',
    description: 'Calça wide leg de cintura alta em crepe premium. Caimento impecável que alonga a silhueta. Versátil para looks casuais e formais.',
    price: 42900, originalPrice: 52900,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80',
    ],
    category: 'calcas', categoryName: 'Calças', stock: 12,
    sizes: ['34', '36', '38', '40', '42'],
    colors: [
      { name: 'Preto', hex: '#0A0A0A', available: true },
      { name: 'Camel', hex: '#B8865C', available: true },
      { name: 'Branco', hex: '#FAFAFA', available: true },
    ],
    isFeatured: false, isNew: true, isBestSeller: true,
    installments: 4, material: '100% Crepe',
    createdAt: '2026-05-10T00:00:00Z',
  },
  {
    id: '4', name: 'Saia Midi Assimétrica', slug: 'saia-midi-assimetrica',
    description: 'Saia midi com barra assimétrica em seda sintética. Design único e sofisticado. Perfeita para eventos e jantares especiais.',
    price: 36900,
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    ],
    category: 'saias', categoryName: 'Saias', stock: 6,
    sizes: ['PP', 'P', 'M', 'G'],
    colors: [
      { name: 'Nude', hex: '#C4A882', available: true },
      { name: 'Vinho', hex: '#6B2B3E', available: true },
    ],
    isFeatured: false, isNew: false, isBestSeller: false,
    installments: 4, material: '100% Poliéster Premium',
    createdAt: '2026-03-20T00:00:00Z',
  },
  {
    id: '5', name: 'Conjunto Cropped + Calça', slug: 'conjunto-cropped-calca',
    description: 'Conjunto com top cropped e calça flare em malha canelada premium. Look completo e elegante que dispensa combinação.',
    price: 72900, originalPrice: 89900,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    ],
    category: 'conjuntos', categoryName: 'Conjuntos', stock: 4,
    sizes: ['P', 'M', 'G'],
    colors: [
      { name: 'Off-white', hex: '#F5F0EB', available: true },
      { name: 'Preto', hex: '#0A0A0A', available: true },
    ],
    isFeatured: true, isNew: true, isBestSeller: true,
    installments: 8, material: 'Malha Canelada Premium',
    createdAt: '2026-05-20T00:00:00Z',
  },
  {
    id: '6', name: 'Vestido Longo Fenda', slug: 'vestido-longo-fenda',
    description: 'Vestido longo com fenda lateral em cetim. Elegância máxima para ocasiões especiais. Decote V e alças finas.',
    price: 64900,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    ],
    category: 'vestidos', categoryName: 'Vestidos', stock: 3,
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Preto', hex: '#0A0A0A', available: true },
      { name: 'Champagne', hex: '#E8D5B0', available: true },
    ],
    isFeatured: true, isNew: false, isBestSeller: true,
    installments: 6, material: '100% Cetim de Poliéster',
    createdAt: '2026-04-01T00:00:00Z',
  },
  {
    id: '7', name: 'Blusa Transpassada Seda', slug: 'blusa-transpassada-seda',
    description: 'Blusa transpassada com laço em seda italiana. Caimento fluido e feminino. Combina com calças, saias e jeans.',
    price: 28900,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    ],
    category: 'blusas', categoryName: 'Blusas', stock: 9,
    sizes: ['PP', 'P', 'M', 'G'],
    colors: [
      { name: 'Nude', hex: '#C4A882', available: true },
      { name: 'Preto', hex: '#0A0A0A', available: true },
      { name: 'Branco', hex: '#FAFAFA', available: true },
    ],
    isFeatured: false, isNew: false, isBestSeller: true,
    installments: 3, material: '100% Seda Italiana',
    createdAt: '2026-02-10T00:00:00Z',
  },
  {
    id: '8', name: 'Vestido Chemise Linho', slug: 'vestido-chemise-linho',
    description: 'Vestido chemise em linho lavado com botões frontais. Casual chic para o dia a dia. Cinto incluso para ajuste da silhueta.',
    price: 39900, originalPrice: 48900,
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    ],
    category: 'vestidos', categoryName: 'Vestidos', stock: 7,
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Areia', hex: '#C9B99A', available: true },
      { name: 'Branco', hex: '#FAFAFA', available: true },
    ],
    isFeatured: false, isNew: true, isBestSeller: false,
    installments: 4, material: '100% Linho',
    createdAt: '2026-05-25T00:00:00Z',
  },
];

// ——————————————————————————————————————————
// Avaliações simuladas
// ——————————————————————————————————————————
export const mockReviews: Review[] = [
  {
    id: '1', productId: '1', authorName: 'Mariana Costa', rating: 5,
    comment: 'Amei o vestido! O tecido é delicioso, cai muito bem no corpo. Chegou super rápido e a embalagem é premium. Comprei no M e ficou perfeito.',
    createdAt: '2026-05-10T00:00:00Z', verified: true,
  },
  {
    id: '2', productId: '2', authorName: 'Fernanda Oliveira', rating: 5,
    comment: 'O blazer é incrível, qualidade absurda. Comprei no P e ficou perfeito. Atendimento excelente, chegou antes do prazo.',
    createdAt: '2026-04-28T00:00:00Z', verified: true,
  },
  {
    id: '3', productId: '3', authorName: 'Juliana Santos', rating: 4,
    comment: 'Calça linda, caimento perfeito. O tecido é premium mesmo. Só tomei uma numeração acima do normal. Vale muito!',
    createdAt: '2026-05-15T00:00:00Z', verified: true,
  },
  {
    id: '4', productId: '1', authorName: 'Amanda Rodrigues', rating: 5,
    comment: "L'Atelier Rio tem o melhor custo-benefício entre as boutiques. Peças lindíssimas e bem acabadas. Já é minha loja favorita!",
    createdAt: '2026-05-20T00:00:00Z', verified: false,
  },
  {
    id: '5', productId: '5', authorName: 'Beatriz Mendes', rating: 5,
    comment: 'Conjunto perfeito! Usei em um evento e recebi muitos elogios. Qualidade superior, vale cada centavo.',
    createdAt: '2026-05-22T00:00:00Z', verified: true,
  },
];

// ——————————————————————————————————————————
// Looks "Compre o Look"
// ——————————————————————————————————————————
export const mockLooks: Look[] = [
  {
    id: '1', name: 'Look Sofisticado',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    products: [mockProducts[0], mockProducts[1], mockProducts[3]],
  },
  {
    id: '2', name: 'Look Casual Chic',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    products: [mockProducts[2], mockProducts[6]],
  },
];

// ——————————————————————————————————————————
// Helpers
// ——————————————————————————————————————————
export const getFeaturedProducts = () => mockProducts.filter((p) => p.isFeatured);
export const getNewProducts = () => mockProducts.filter((p) => p.isNew);
export const getBestSellers = () => mockProducts.filter((p) => p.isBestSeller);
export const getProductBySlug = (slug: string) => mockProducts.find((p) => p.slug === slug);
export const getProductsByCategory = (categorySlug: string) =>
  mockProducts.filter((p) => p.category === categorySlug);
export const getRelatedProducts = (product: Product, limit = 4) =>
  mockProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
