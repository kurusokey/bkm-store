import { type NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/adminAuth";

/*
  ── Mode pause de la boutique ──────────────────────────────────────
  Activer  : variable d'environnement PAUSE_BOUTIQUE = 1 (Vercel → Production)
  Désactiver : supprimer la variable ou la passer à 0, puis redéployer.

  Quand la pause est active :
  - toutes les pages publiques redirigent vers /pause (307, temporaire)
  - /api/order, /api/checkout et /api/webhook répondent 503 : aucune
    commande ne peut plus être enregistrée, même par appel direct
  - l'admin, le contact, la newsletter et les pages légales restent
    accessibles
  ───────────────────────────────────────────────────────────────────
*/
const PAUSE = process.env.PAUSE_BOUTIQUE === "1";

const ALLOWED_PATHS = [
  "/pause",
  "/contact",
  "/newsletter",
  "/mentions-legales",
  "/confidentialite",
  "/cgv",
  "/acces-refuse",
];

const BLOCKED_APIS = ["/api/order", "/api/checkout", "/api/webhook"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── Admin : comportement inchangé, accessible même pendant la pause ──
  if (pathname === "/admin/login" || pathname.startsWith("/api/admin/auth")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/admin")) {
    if (!verifyAdminToken(request)) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    if (!verifyAdminToken(request)) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // ── Pause ──
  if (PAUSE) {
    if (BLOCKED_APIS.some((p) => pathname.startsWith(p))) {
      return NextResponse.json(
        { error: "La boutique est temporairement fermée." },
        { status: 503 },
      );
    }

    // Les autres API (contact, newsletter) restent ouvertes
    if (pathname.startsWith("/api/")) {
      return NextResponse.next();
    }

    const isAllowed = ALLOWED_PATHS.some(
      (p) => pathname === p || pathname.startsWith(p + "/"),
    );

    if (!isAllowed) {
      return NextResponse.redirect(new URL("/pause", request.url), 307);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|icon.svg|apple-icon.png|images|icons|og-image.jpg|robots.txt|sitemap.xml).*)",
  ],
};
