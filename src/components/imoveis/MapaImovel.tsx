import { MapPin } from "lucide-react";

interface MapaImovelProps {
  latitude?: number | null;
  longitude?: number | null;
  bairro: string;
  cidade: string;
  uf: string;
}

export function MapaImovel({
  latitude,
  longitude,
  bairro,
  cidade,
  uf,
}: MapaImovelProps) {
  // Conforme CORREÇÃO 3: Só renderiza se latitude e longitude existirem
  if (latitude === null || latitude === undefined || longitude === null || longitude === undefined) {
    return null;
  }

  const lat = Number(latitude);
  const lng = Number(longitude);

  const delta = 0.005;
  const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`;
  const iframeSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className="space-y-3 rounded-2xl border border-line bg-card p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-gold-primary" />
          <h3 className="text-base font-semibold text-ink">
            Localização Aproximada
          </h3>
        </div>
        <span className="text-xs text-ink-soft">
          {bairro}, {cidade} - {uf}
        </span>
      </div>

      <p className="text-xs text-ink-muted">
        Por razões de segurança e privacidade dos proprietários, exibimos a região aproximada do imóvel. O endereço exato é fornecido mediante agendamento prévio com Roberto Andrade.
      </p>

      {/* Iframe estático do OpenStreetMap com zero bibliotecas JS adicionais */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-xl border border-line bg-surface">
        <iframe
          title={`Mapa de localização em ${bairro}, ${cidade}`}
          src={iframeSrc}
          className="h-[calc(100%+3.5rem)] w-full border-0 opacity-90"
          style={{ filter: "var(--map-filter)" }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
