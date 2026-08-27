import type { Metadata } from "next";
import "./globals.css";
import "./global-header-overrides.css";
import "./global-mega-menu.css";

export const metadata: Metadata = { title: "Premier Bank | Banking made personal", description: "Modern Sharia-compliant banking for Somalia." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
