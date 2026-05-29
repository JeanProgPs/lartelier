import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      
      {/* O children deve preencher o espaço total para que o HeroBanner encoste no topo (no caso da Home) */}
      <main className="min-h-screen">
        {children}
      </main>
      
      <Footer />
      <CartDrawer />
    </>
  );
}
