"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isPause = pathname?.startsWith("/pause");
  const bare = isAdmin || isPause;

  return (
    <>
      {!bare && <Header />}
      <main className="min-h-screen">{children}</main>
      {!bare && <Footer />}
    </>
  );
}
