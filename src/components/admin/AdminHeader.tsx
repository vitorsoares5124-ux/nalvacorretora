"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <header className="lg:hidden sticky top-0 z-40 border-b border-[#2A2A2A] bg-[#111111]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between">
      <Link href="/admin" className="flex items-center gap-2">
        <div className="relative h-9 w-24">
          <Image
            src="/images/logo.png"
            alt="RA Imóveis"
            fill
            className="object-contain"
            sizes="96px"
          />
        </div>
      </Link>

      <div className="flex items-center gap-1.5 text-xs">
        <Link
          href="/admin/imoveis"
          className={`p-2 rounded-lg ${
            pathname.startsWith("/admin/imoveis")
              ? "bg-[#D4AF37] text-black"
              : "text-[#A3A3A3] hover:text-white"
          }`}
          title="Imóveis"
        >
          <Building2 className="h-4 w-4" />
        </Link>
        <Link
          href="/admin/imoveis/novo"
          className="p-2 rounded-lg bg-[#1F1F1F] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
          title="Novo Imóvel"
        >
          <PlusCircle className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="p-2 rounded-lg text-red-400 hover:bg-red-500/10"
          title="Sair"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
