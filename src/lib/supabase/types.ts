export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type ImovelFinalidade = 'venda' | 'aluguel' | 'temporada';
export type ImovelStatus = 'disponivel' | 'indisponivel' | 'reservado' | 'vendido' | 'alugado';

export type ImovelImagem = {
  id: string;
  imovel_id: string;
  url: string;
  ordem: number;
  capa: boolean;
  created_at?: string;
};

export type Imovel = {
  id: string;
  titulo: string;
  descricao: string | null;
  finalidade: ImovelFinalidade;
  tipo: string;
  status: ImovelStatus;
  preco: number;
  preco_condominio: number | null;
  preco_iptu: number | null;
  aceita_financiamento: boolean;
  quartos: number;
  suites: number;
  banheiros: number;
  vagas: number;
  area_util: number;
  area_total: number;
  cidade: string;
  bairro: string;
  uf: string;
  cep: string | null;
  rua: string | null;
  numero: string | null;
  latitude: number | null;
  longitude: number | null;
  caracteristicas: string[];
  destaque: boolean;
  is_demo?: boolean;
  created_at: string;
  updated_at: string;
  // Joins
  imoveis_imagens?: ImovelImagem[];
};

export type Lead = {
  id: string;
  imovel_id: string | null;
  nome: string | null;
  telefone: string | null;
  mensagem: string | null;
  origem: string | null;
  created_at: string;
};

export type TemaSite = 'dark' | 'light';

export type SiteSettings = {
  id: number;
  tema_padrao: TemaSite;
  updated_at: string;
};

export interface Database {
  public: {
    Tables: {
      imoveis: {
        Row: Imovel;
        Insert: Partial<Imovel> & {
          titulo: string;
          tipo: string;
          preco: number;
          cidade: string;
          bairro: string;
        };
        Update: Partial<Imovel>;
        Relationships: [];
      };
      imoveis_imagens: {
        Row: ImovelImagem;
        Insert: Partial<ImovelImagem> & {
          imovel_id: string;
          url: string;
        };
        Update: Partial<ImovelImagem>;
        Relationships: [];
      };
      leads: {
        Row: Lead;
        Insert: {
          id?: string;
          imovel_id?: string | null;
          nome?: string | null;
          telefone?: string | null;
          mensagem?: string | null;
          origem?: string | null;
          created_at?: string;
        };
        Update: Partial<Lead>;
        Relationships: [];
      };
      site_settings: {
        Row: {
          id: number;
          tema_padrao: TemaSite;
          updated_at: string;
        };
        Insert: {
          id?: number;
          tema_padrao?: TemaSite;
          updated_at?: string;
        };
        Update: {
          id?: number;
          tema_padrao?: TemaSite;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      imovel_finalidade: ImovelFinalidade;
      imovel_status: ImovelStatus;
    };
    CompositeTypes: Record<string, never>;
  };
}
