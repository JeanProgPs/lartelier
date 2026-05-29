import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
