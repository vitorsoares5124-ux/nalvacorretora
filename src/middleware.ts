import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Intercepta rotas sob /admin e rotas de autenticação,
     * ignorando arquivos estáticos, chunks do Next.js e imagens.
     */
    "/admin/:path*",
  ],
};
