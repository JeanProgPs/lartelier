// ============================================================
// L'Atelier Rio — TypeScript Types
// Definição central de todos os tipos do projeto
// ============================================================

// ——————————————————————————————————————————
// Produto
// ——————————————————————————————————————————

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;                  // Preço em centavos (ex: 29900 = R$299,00)
  originalPrice?: number;         // Preço original (se houver desconto)
  images: string[];               // Array de URLs das imagens
  category: string;               // Slug da categoria
  categoryName: string;           // Nome da categoria exibível
  stock: number;                  // Quantidade em estoque
  sizes: string[];                // Ex: ['P', 'M', 'G', 'GG'] ou ['36', '37', ...]
  colors: ProductColor[];
  isFeatured: boolean;            // Destaque na home
  isNew: boolean;                 // Badge "Novo"
  isBestSeller: boolean;          // Mais vendido
  installments?: number;          // Número de parcelas sem juros
  material?: string;
  care?: string[];                // Instruções de lavagem
  createdAt: string;
}

export interface ProductColor {
  name: string;       // Ex: "Preto", "Nude", "Off-white"
  hex: string;        // Ex: "#0A0A0A"
  available: boolean; // Se há estoque nessa cor
}

// ——————————————————————————————————————————
// Categoria
// ——————————————————————————————————————————

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;        // URL da imagem da categoria
  productCount?: number;
}

// ——————————————————————————————————————————
// Carrinho
// ——————————————————————————————————————————

export interface CartItem {
  productId: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  originalPrice?: number;
  size: string;
  color: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

// ——————————————————————————————————————————
// Wishlist
// ——————————————————————————————————————————

export interface WishlistItem {
  productId: string;
  name: string;
  slug: string;
  image: string;
  price: number;
}

// ——————————————————————————————————————————
// Pedido / Checkout
// ——————————————————————————————————————————

export type PaymentMethod = 'pix' | 'credit_card' | 'boleto';

export type OrderStatus =
  | 'pending'
  | 'payment_confirmed'
  | 'preparing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;      // Em centavos
  shippingAmount: number;   // Em centavos
  discountAmount: number;   // Em centavos
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  name: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

// ——————————————————————————————————————————
// Avaliação
// ——————————————————————————————————————————

export interface Review {
  id: string;
  productId: string;
  authorName: string;
  authorAvatar?: string;
  rating: number;        // 1 a 5
  comment: string;
  createdAt: string;
  verified: boolean;     // Compra verificada
}

// ——————————————————————————————————————————
// Filtros de busca
// ——————————————————————————————————————————

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sizes?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  sortBy?: 'price_asc' | 'price_desc' | 'newest' | 'best_seller';
}

// ——————————————————————————————————————————
// Look completo (Compre o Look)
// ——————————————————————————————————————————

export interface Look {
  id: string;
  name: string;
  image: string;
  products: Product[];
}
