"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

interface SearchBarProps {
  large?: boolean;
  placeholder?: string;
}

export function SearchBar({ large = false, placeholder }: SearchBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [termo, setTermo] = useState(searchParams.get("busca") || "");
  const ultimaBuscaEnviada = useRef("");

  // Aplica o termo digitado aos filtros /imoveis preservando os demais params
  const aplicarBusca = (limpo: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    if (limpo) {
      params.set("busca", limpo);
    } else {
      params.delete("busca");
    }
    ultimaBuscaEnviada.current = limpo;
    router.push(`/imoveis?${params.toString()}`, { scroll: false });
  };

  // Filtro ao vivo (debounce): só dentro de /imoveis, sem precisar clicar
  useEffect(() => {
    if (pathname !== "/imoveis") return;
    const timer = setTimeout(() => {
      const limpo = termo.trim();
      if (limpo !== (searchParams.get("busca") || "")) {
        aplicarBusca(limpo);
      }
    }, 400);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termo, pathname]);

  // Sincroniza o input quando a URL muda externamente (ex: Limpar todos)
  useEffect(() => {
    const urlBusca = searchParams.get("busca") || "";
    if (urlBusca !== ultimaBuscaEnviada.current) {
      setTermo(urlBusca);
    }
  }, [searchParams]);

  const aoSubmeter = (e: React.FormEvent) => {
    e.preventDefault();
    const limpo = termo.trim();

    // Ao pesquisar de dentro da listagem, preserva os filtros já aplicados
    if (pathname === "/imoveis") {
      aplicarBusca(limpo);
    } else {
      router.push(limpo ? `/imoveis?busca=${encodeURIComponent(limpo)}` : "/imoveis");
    }
  };

  return (
    <form
      onSubmit={aoSubmeter}
      role="search"
      className={`flex items-center gap-2 ${
        large
          ? "rounded-full border border-gold-primary/40 bg-surface/85 backdrop-blur-md p-2 shadow-2xl shadow-black/50 max-w-2xl mx-auto"
          : "rounded-full border border-line bg-surface p-1.5 shadow-lg"
      }`}
    >
      <div
        className={`flex items-center gap-2.5 pl-3 flex-1 min-w-0 ${
          large ? "sm:pl-5" : "sm:pl-4"
        }`}
      >
        <Search className={`shrink-0 text-gold-primary ${large ? "h-5 w-5" : "h-4 w-4"}`} />
        <input
          type="search"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          placeholder={placeholder || "Cidade, bairro ou tipo de imóvel..."}
          className={`w-full bg-transparent text-ink placeholder-ink-muted focus:outline-none ${
            large ? "text-sm sm:text-base" : "text-xs sm:text-sm"
          }`}
          aria-label="Buscar imóveis"
        />
      </div>

      <button
        type="submit"
        className={`shrink-0 gold-gradient-btn flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-on-gold transition-all active:scale-95 ${
          large
            ? "rounded-full px-5 py-3 text-xs sm:px-8 sm:py-3.5 sm:text-sm"
            : "rounded-full px-4 py-2.5 text-[11px] sm:px-6 sm:text-xs"
        }`}
      >
        <Search className={`${large ? "h-4 w-4" : "h-3.5 w-3.5"}`} />
        <span>Buscar</span>
      </button>
    </form>
  );
}