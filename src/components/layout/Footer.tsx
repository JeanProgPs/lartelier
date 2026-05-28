// ============================================================
// L'Atelier Rio — Footer Global
// ============================================================
import Link from 'next/link';
import { Camera, Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white pt-20 pb-10 border-t border-brand-gray-800">
      <div className="store-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Coluna 1: Marca */}
          <div className="space-y-6">
            <Link href="/" className="inline-block font-display text-3xl font-medium tracking-tight">
              L'Atelier Rio
            </Link>
            <p className="text-brand-gray-400 text-sm max-w-xs leading-relaxed">
              Moda premium com design autoral. Elevando a essência carioca à sofisticação cosmopolita.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-brand-gray-400 hover:text-brand-nude transition-colors p-2 -ml-2">
                <Camera size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-brand-gray-400 hover:text-brand-nude transition-colors p-2">
                <Globe size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-brand-gray-400 hover:text-brand-nude transition-colors p-2">
                <MessageCircle size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-display text-lg mb-6 tracking-wide">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="/novidades" className="text-brand-gray-400 hover:text-brand-nude transition-colors text-sm">Novidades</Link></li>
              <li><Link href="/categorias/vestidos" className="text-brand-gray-400 hover:text-brand-nude transition-colors text-sm">Vestidos</Link></li>
              <li><Link href="/categorias/alfaiataria" className="text-brand-gray-400 hover:text-brand-nude transition-colors text-sm">Alfaiataria</Link></li>
              <li><Link href="/colecoes" className="text-brand-gray-400 hover:text-brand-nude transition-colors text-sm">Coleções</Link></li>
              <li><Link href="/sale" className="text-brand-gray-400 hover:text-brand-nude transition-colors text-sm">Sale</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Ajuda */}
          <div>
            <h4 className="font-display text-lg mb-6 tracking-wide">Atendimento</h4>
            <ul className="space-y-4">
              <li><Link href="/faq" className="text-brand-gray-400 hover:text-brand-nude transition-colors text-sm">Dúvidas Frequentes</Link></li>
              <li><Link href="/trocas" className="text-brand-gray-400 hover:text-brand-nude transition-colors text-sm">Trocas e Devoluções</Link></li>
              <li><Link href="/prazos" className="text-brand-gray-400 hover:text-brand-nude transition-colors text-sm">Prazos de Entrega</Link></li>
              <li><Link href="/guia-medidas" className="text-brand-gray-400 hover:text-brand-nude transition-colors text-sm">Guia de Medidas</Link></li>
              <li><Link href="/contato" className="text-brand-gray-400 hover:text-brand-nude transition-colors text-sm">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="font-display text-lg mb-6 tracking-wide">Contato</h4>
            <ul className="space-y-4 text-sm text-brand-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-nude" />
                <span>Rua Garcia d'Avila, 100<br/>Ipanema, Rio de Janeiro - RJ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brand-nude" />
                <span>+55 (21) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brand-nude" />
                <span>contato@latelierrio.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 border-t border-brand-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-gray-600">
          <p>© {new Date().getFullYear()} L'Atelier Rio. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-brand-gray-400 transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-brand-gray-400 transition-colors">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
