import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { SearchBar } from "@/components/imoveis/SearchBar";
import { getTema } from "@/lib/tema";

export async function Hero() {
  const temaClaro = (await getTema()) === "light";

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-line">
      {/* Imagem de Fundo de Alta Resolução com Filtro Arquitetônico */}
      <div className="absolute inset-0 z-0">
        <Image
          src={temaClaro ? "/images/hero-mobile-light.png" : "/images/hero-mobile.png"}
          alt="Propriedade de Luxo RA Imóveis"
          fill
          priority
          className="object-cover object-[center_30%] brightness-[1] contrast-[1.05] opacity-0 sm:hidden"
          style={{ objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <Image
          src={temaClaro ? "/images/bg-light.png" : "/images/bg.png"}
          alt="Propriedade de Luxo RA Imóveis"
          fill
          priority
          className={
            temaClaro
              ? "hidden sm:block object-cover object-center brightness-[1] contrast-[1.02] opacity-10"
              : "hidden sm:block object-cover object-center brightness-[0.59] contrast-[1.05] opacity-10"
          }
          sizes="100vw"
        />
        {/* Camada de gradiente para contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        {/* Título Principal de Impacto */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.1] max-w-4xl mx-auto">
          Imóveis que traduzem seu estilo de vida com{" "}
          <span className="gold-gradient-text block sm:inline font-bold">sofisticação</span>
        </h1>

        {/* Subtítulo Institucional */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
          Curadoria criteriosa de coberturas, residências em condomínios fechados e investimentos exclusivos com atendimento consultivo por Roberto Andrade.
        </p>

        {/* Barra de Pesquisa */}
        <div className="mt-8 sm:mt-10">
          <SearchBar large />
        </div>

        {/* CTA Principal */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#destaques"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl gold-gradient-btn px-8 py-4 text-sm font-bold uppercase tracking-wider text-on-gold shadow-lg shadow-gold-primary/20 active:scale-95"
          >
            <span>Explorar Coleção</span>
            <ArrowDown className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/5511966747811?text=Ol%C3%A1%20Roberto%2C%20gostaria%20de%20uma%20consultoria%20para%20encontrar%20meu%20im%C3%B3vel."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-line-strong bg-surface/80 px-8 py-4 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-gold-primary/60 hover:text-gold-light"
          >
            Solicitar Consultoria
          </a>
        </div>
      </div>
    </section>
  );
}
