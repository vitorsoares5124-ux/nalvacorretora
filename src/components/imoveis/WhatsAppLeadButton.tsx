"use client";

import { MessageCircle } from "lucide-react";
import { registrarLeadWhatsApp } from "@/app/actions/lead-action";

interface WhatsAppLeadButtonProps {
  imovelId: string;
  titulo: string;
  preco?: number;
  className?: string;
  isStickyMobile?: boolean;
}

export function WhatsAppLeadButton({
  imovelId,
  titulo,
  preco,
  className = "",
  isStickyMobile = false,
}: WhatsAppLeadButtonProps) {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511966747811";

  const handleClick = () => {
    // Link absoluto do anúncio específico (usa o domínio atual do site)
    const link =
      typeof window !== "undefined"
        ? `${window.location.origin}/imoveis/${imovelId}`
        : `/imoveis/${imovelId}`;

    const mensagemTexto = `Olá! Quero saber mais sobre o imóvel "${titulo}".\n${link}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      mensagemTexto
    )}`;

    // 1. Abre IMEDIATAMENTE o WhatsApp sem qualquer await (Correction 2)
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // 2. Dispara a gravação de lead em background (fire-and-forget paralelo)
    registrarLeadWhatsApp({
      imovel_id: imovelId,
      titulo_imovel: titulo,
      origem: "whatsapp_detalhe",
    }).catch((err) => {
      console.warn("Log de lead silencioso:", err);
    });
  };

  if (isStickyMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-line bg-canvas/95 p-3.5 backdrop-blur-lg shadow-2xl">
        <div className="mx-auto flex max-w-md items-center justify-between gap-3">
          {preco && (
            <div className="flex flex-col">
              <span className="text-[11px] text-ink-soft uppercase tracking-wider">
                Valor
              </span>
              <span className="text-base font-bold text-gold-primary">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 0,
                }).format(preco)}
              </span>
            </div>
          )}

          <button
            onClick={handleClick}
            type="button"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald/25 transition-all duration-200 hover:bg-emerald-dark active:scale-95"
            aria-label="Falar com corretor no WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`flex items-center justify-center gap-2 rounded-xl bg-emerald px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald/20 transition-all duration-300 hover:bg-emerald-dark hover:shadow-emerald/40 active:scale-95 ${className}`}
      aria-label="Falar com corretor no WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span>Falar no WhatsApp</span>
    </button>
  );
}
