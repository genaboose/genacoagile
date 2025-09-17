'use client';
import FlowXRayScorecard from "@/components/FlowXRayScorecard";
import Link from "next/link";

export default function FlowXRAYPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-sm font-semibold text-emerald-700">Diagnose in 7 Tagen</div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Flow X‑Ray</h1>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Wir quantifizieren versteckte Verzögerungskosten (Handoffs, Warten, Rework) und liefern ein
          6‑Folie‑Board‑Memo mit 2–3 Quick‑Wins. Wenn kein Wert entsteht: keine Rechnung.
        </p>
        <div className="mt-4"><Link href="/" className="text-emerald-700 hover:underline">Zurück zur Startseite</Link></div>
        <div className="mt-8"><FlowXRayScorecard /></div>
      </div>
    </div>
  );
}
