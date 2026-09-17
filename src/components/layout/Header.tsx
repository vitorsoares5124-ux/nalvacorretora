import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Search } from "lucide-react";

const WHATSAPP_NUMBER = "5511966747811";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-canvas/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Oficial */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-24 sm:h-14 sm:w-32 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="RA Imóveis"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 112px, 128px"
            />
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          <Link
            href="/imoveis"
            className="hover:text-gold-light transition-colors py-1 relative group flex items-center gap-1.5"
          >
            <Search className="h-3.5 w-3.5 text-gold-primary" />
            <span>Buscar Imóveis</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/#destaques"
            className="hover:text-gold-light transition-colors py-1 relative group"
          >
            Destaques
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/#sobre"
            className="hover:text-gold-light transition-colors py-1 relative group"
          >
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Ações de Contato / WhatsApp */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/imoveis"
            className="md:hidden flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-3 py-1.5 text-xs font-semibold text-gold-primary hover:border-gold-primary"
            aria-label="Buscar imóveis"
          >
            <Search className="h-3.5 w-3.5" />
            <span>Buscar</span>
          </Link>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Olá Roberto, gostaria de informações sobre os imóveis."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-emerald px-3 py-1.5 text-xs sm:px-4 sm:py-2.5 sm:text-sm font-semibold text-white shadow-lg shadow-emerald/20 hover:bg-emerald-dark hover:shadow-emerald/40 transition-all duration-300 active:scale-95"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Fale Conosco</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
