import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "GENACO Agile – Wir sind Ihr agiles Team",
  description: "Team‑as‑a‑Service: zentral orchestrierte Expertenteams mit klaren Outcomes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
