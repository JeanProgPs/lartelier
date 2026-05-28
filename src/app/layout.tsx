import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  title: "L'Atelier Rio | Moda Premium Autoral",
  description: "Moda premium com design autoral. Elevando a essência carioca à sofisticação cosmopolita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        
        {/* O children deve preencher o espaço total para que o HeroBanner encoste no topo (no caso da Home) */}
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
