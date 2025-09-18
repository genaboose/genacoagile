'use client';

import Image from "next/image";
import Link from "next/link";
import FlowXRayScorecard from "../../components/FlowXRayScorecard";

export default function FlowXRAYPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <Image src="/DieGraphik.png" alt="" width={24} height={24} />
          <Image src="/GENACOAgile.png" alt="GENACO Agile" width={120} height={34} />
          <Link href="/" className="ml-auto text-sm text-brand-navy hover:underline">Zur Startseite</Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-sm font-semibold text-brand-navy">Diagnose in 7 Tagen</div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Flow X-Ray</h1>
        <p className="mt-3 text-slate-600">
          Wir quantifizieren versteckte Verzögerungskosten (Handoffs, Warten, Rework) und liefern ein
          6-Folie-Board-Memo mit 2–3 Quick-Wins. Wenn kein Wert entsteht: keine Rechnung.
        </p>
        <div className="mt-8"><FlowXRayScorecard /></div>
      </div>
    </div>
  );
}
