"use client";

import { useState, useEffect, useCallback } from "react";
import NextImage from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import type { ImovelImagem } from "@/lib/supabase/types";

interface GaleriaImovelProps {
  imagens: ImovelImagem[];
  titulo: string;
}

export function GaleriaImovel({ imagens, titulo }: GaleriaImovelProps) {
  // Ordenar imagens por campo 'ordem'
  const listaImagens = (imagens && imagens.length > 0)
    ? [...imagens].sort((a, b) => a.ordem - b.ordem)
    : [
        {
          id: "placeholder",
          imovel_id: "",
          url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
          ordem: 1,
          capa: true,
        },
      ];

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [lightboxAberto, setLightboxAberto] = useState(false);

  const irParaProxima = useCallback(() => {
    setIndiceAtual((prev) => (prev + 1) % listaImagens.length);
  }, [listaImagens.length]);

  const irParaAnterior = useCallback(() => {
    setIndiceAtual((prev) => (prev - 1 + listaImagens.length) % listaImagens.length);
  }, [listaImagens.length]);

  // Teclado para lightbox (ESC, Setas)
  useEffect(() => {
    if (!lightboxAberto) return;

    const lidarComTeclas = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxAberto(false);
      if (e.key === "ArrowRight") irParaProxima();
      if (e.key === "ArrowLeft") irParaAnterior();
    };

    window.addEventListener("keydown", lidarComTeclas);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", lidarComTeclas);
      document.body.style.overflow = "auto";
    };
  }, [lightboxAberto, irParaProxima, irParaAnterior]);

  return (
    <div className="space-y-3">
      {/* Imagem Principal */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#141414] group">
        <NextImage
          src={listaImagens[indiceAtual]?.url}
          alt={`${titulo} - Imagem ${indiceAtual + 1}`}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-102 cursor-pointer"
          sizes="(max-width: 1024px) 100vw, 65vw"
          onClick={() => setLightboxAberto(true)}
        />

        {/* Botão de Expandir Lightbox */}
        <button
          type="button"
          onClick={() => setLightboxAberto(true)}
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-[#0A0A0A]/80 px-3.5 py-2 text-xs font-semibold text-[#F5F5F0] backdrop-blur-md border border-[#2A2A2A] transition-all duration-200 hover:border-[#D4AF37] hover:text-[#EAD2A8]"
          aria-label="Abrir galeria em tela cheia"
        >
          <Maximize2 className="h-3.5 w-3.5 text-[#D4AF37]" />
          <span>Ver Fotos ({listaImagens.length})</span>
        </button>

        {/* Contador no topo */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-mono text-[#A3A3A3] backdrop-blur-sm border border-[#2A2A2A]">
          <Images className="h-3.5 w-3.5 text-[#D4AF37]" />
          <span>
            {indiceAtual + 1} / {listaImagens.length}
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      {listaImagens.length > 1 && (
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
          {listaImagens.map((img, idx) => {
            const isAtiva = idx === indiceAtual;
            return (
              <button
                key={img.id || idx}
                type="button"
                onClick={() => setIndiceAtual(idx)}
                className={`relative h-16 w-24 sm:h-20 sm:w-28 shrink-0 overflow-hidden rounded-xl border transition-all duration-200 ${
                  isAtiva
                    ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/30 scale-[1.02]"
                    : "border-[#2A2A2A] opacity-60 hover:opacity-100 hover:border-[#444]"
                }`}
              >
                <NextImage
                  src={img.url}
                  alt={`Miniatura ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal Fullscreen */}
      {lightboxAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-200">
          {/* Botão Fechar */}
          <button
            type="button"
            onClick={() => setLightboxAberto(false)}
            className="absolute top-5 right-5 z-50 flex items-center gap-1 rounded-full bg-[#1A1A1A] p-3 text-[#F5F5F0] border border-[#2A2A2A] hover:border-[#D4AF37] hover:text-[#EAD2A8] transition-colors"
            aria-label="Fechar galeria"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navegação Anterior */}
          {listaImagens.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                irParaAnterior();
              }}
              className="absolute left-4 sm:left-8 z-50 rounded-full bg-[#1A1A1A]/80 p-3 text-[#F5F5F0] border border-[#2A2A2A] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Imagem Central no Lightbox */}
          <div className="relative max-h-[85vh] max-w-[90vw] w-full h-full flex items-center justify-center">
            <div className="relative h-[80vh] w-full max-w-5xl">
              <NextImage
                src={listaImagens[indiceAtual]?.url}
                alt={`${titulo} - Visualização cheia`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Contador de fotos no rodapé do lightbox */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#1A1A1A]/90 px-4 py-1.5 text-xs font-mono text-[#D4AF37] border border-[#2A2A2A]">
              Foto {indiceAtual + 1} de {listaImagens.length}
            </div>
          </div>

          {/* Navegação Próxima */}
          {listaImagens.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                irParaProxima();
              }}
              className="absolute right-4 sm:right-8 z-50 rounded-full bg-[#1A1A1A]/80 p-3 text-[#F5F5F0] border border-[#2A2A2A] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
