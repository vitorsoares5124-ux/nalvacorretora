"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  ExternalLink,
  LogOut,
  Shield,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const navItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      ativo: pathname === "/admin",
    },
    {
      label: "Imóveis",
      href: "/admin/imoveis",
      icon: Building2,
      ativo: pathname === "/admin/imoveis" || pathname.startsWith("/admin/imoveis/"),
    },
    {
      label: "Novo Imóvel",
      href: "/admin/imoveis/novo",
      icon: PlusCircle,
      ativo: pathname === "/admin/imoveis/novo",
    },
  ];

  return (
    <aside className="w-64 shrink-0 border-r border-line bg-surface flex flex-col justify-between h-screen sticky top-0 hidden lg:flex">
      <div className="p-6 space-y-8">
        {/* Logo Oficial */}
        <Link href="/admin" className="block">
          <div className="relative h-12 w-32">
            <Image
              src="/images/logo.png"
              alt="RA Imóveis"
              fill
              className="object-contain object-left"
              sizes="128px"
            />
          </div>
          <span className="mt-1 block text-[10px] font-mono uppercase tracking-widest text-gold-primary">
            Painel de Gestão
          </span>
        </Link>

        {/* Navegação Principal */}
        <nav className="space-y-1.5">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted px-3 pb-2">
            Menu Administrativo
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all ${
                  item.ativo
                    ? "bg-gold-primary text-on-gold shadow-md shadow-gold-primary/20"
                    : "text-ink-soft hover:bg-card hover:text-ink"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Seção Inferior: Link Vitrine e Logout */}
      <div className="p-6 border-t border-line-faint space-y-3">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-xl border border-line bg-surface px-3.5 py-2.5 text-xs text-ink-soft hover:border-gold-primary hover:text-gold-light transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="h-3.5 w-3.5 text-gold-primary" />
            <span>Ver Vitrine Pública</span>
          </span>
          <span className="text-[10px] text-ink-muted">↗</span>
        </a>

        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Sair da Conta</span>
        </button>
      </div>
    </aside>
  );
}
