import Navbar from "@/components/Navbar";
import "../style/globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-[#0f172a]">
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
