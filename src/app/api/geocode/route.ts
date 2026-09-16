import type { NextRequest } from "next/server";

const PHOTON_URL = "https://photon.komoot.io/api/";

const UF_POR_ESTADO: Record<string, string> = {
  "Acre": "AC",
  "Alagoas": "AL",
  "Amapá": "AP",
  "Amazonas": "AM",
  "Bahia": "BA",
  "Ceará": "CE",
  "Distrito Federal": "DF",
  "Espírito Santo": "ES",
  "Goiás": "GO",
  "Maranhão": "MA",
  "Mato Grosso": "MT",
  "Mato Grosso do Sul": "MS",
  "Minas Gerais": "MG",
  "Pará": "PA",
  "Paraíba": "PB",
  "Paraná": "PR",
  "Pernambuco": "PE",
  "Piauí": "PI",
  "Rio de Janeiro": "RJ",
  "Rio Grande do Norte": "RN",
  "Rio Grande do Sul": "RS",
  "Rondônia": "RO",
  "Roraima": "RR",
  "Santa Catarina": "SC",
  "São Paulo": "SP",
  "Sergipe": "SE",
  "Tocantins": "TO",
};

interface SugestaoEndereco {
  rotulo: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  latitude: number | null;
  longitude: number | null;
}

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q");
  if (!q || q.trim().length < 3) {
    return Response.json({ sugestoes: [] as SugestaoEndereco[] });
  }

  try {
    const url = new URL(PHOTON_URL);
    url.searchParams.set("q", q.trim());
    url.searchParams.set("limit", "8");

    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      throw new Error(`Photon respondeu com status ${res.status}`);
    }

    const data = (await res.json()) as {
      features?: Array<{
        properties?: Record<string, unknown>;
        geometry?: { coordinates?: number[] };
      }>;
    };

    const features = data.features ?? [];

    const sugestoes: SugestaoEndereco[] = features
      // Manter apenas resultados do Brasil
      .filter((f) => String(f.properties?.countrycode ?? "").toLowerCase() === "br")
      .map((f) => {
        const p = f.properties ?? {};
        const coords = f.geometry?.coordinates ?? [];
        const estadoCompleto = String(p.state ?? "");
        const uf = UF_POR_ESTADO[estadoCompleto] ?? estadoCompleto;
        const via = String(p.street ?? p.name ?? "");

        const partes = [via, p.housenumber, p.district, p.city, uf]
          .map((v) => String(v ?? "").trim())
          .filter((v) => v !== "");

        return {
          rotulo: partes
            .filter((v, idx) => v.toLowerCase() !== partes[idx - 1]?.toLowerCase())
            .join(", "),
          rua: via,
          numero: String(p.housenumber ?? ""),
          bairro: String(p.district ?? p.locality ?? ""),
          cidade: String(p.city ?? ""),
          uf,
          cep: String(p.postcode ?? ""),
          latitude: coords.length === 2 ? coords[1] : null,
          longitude: coords.length === 2 ? coords[0] : null,
        };
      });

    return Response.json({ sugestoes });
  } catch (err) {
    console.error("Erro ao consultar o Photon (geocoding):", err);
    return Response.json({ sugestoes: [] as SugestaoEndereco[] });
  }
}