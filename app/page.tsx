'use client';
import { ArrowRight, CheckCircle2, Gauge, LineChart, Users, Sparkles, Shield, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const features = [
    { icon: <Users className="w-6 h-6" />, title: "Team‑as‑a‑Service", text: "Ein eingespieltes Expertenteam – ein Vertrag, klare Verantwortung, messbare Outcomes." },
    { icon: <Gauge className="w-6 h-6" />, title: "Flow statt Gefühl", text: "Wir messen Lead-/Cycle Time, Durchsatz & Engpässe – und reduzieren Verzögerungskosten." },
    { icon: <LineChart className="w-6 h-6" />, title: "Sprints mit Impact", text: "2–4‑Wochen‑Sprints mit Review, KPIs & Transparenz auf einem gemeinsamen Board." },
    { icon: <Sparkles className="w-6 h-6" />, title: "KI‑Assistenz integriert", text: "Research, Doku, Tests & Automatisierung – KI hebt Qualität und Tempo." },
    { icon: <Shield className="w-6 h-6" />, title: "Standards & Qualität", text: "DoR/DoD, Playbooks, Peer‑Reviews, DSGVO‑konforme Zusammenarbeit." },
    { icon: <Clock className="w-6 h-6" />, title: "Schnell startklar", text: "Kickoff in 10–15 Werktagen, Discovery‑Sprint vor Delivery." },
  ];
  const metrics = [
    { label: "Lead‑Time", value: "−20–35%" },
    { label: "Durchsatz", value: "+15–30%" },
    { label: "Defects", value: "−20–40%" },
    { label: "Stakeholder‑NPS", value: "+1.5–3.0" },
  ];
  const team = [
    { name: "Georg Nauerz", role: "Agiles Organisationsdesign & Delivery", brand: "GNC Georg Nauerz Consulting" },
    { name: "Stephan Druckrey", role: "Agile Change & Executive Coaching", brand: "Druckrey Coaching" },
    { name: "Bianca Wenz", role: "Retail‑Prozessoptimierung & KVP", brand: "GBW Consulting" },
    { name: "Kate Kraemer", role: "Operational Excellence & Business Operations", brand: "—" },
    { name: "Nicole Jordan", role: "Team‑ & Organisationsentwicklung", brand: "JORDAN SOLUTIONS" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/DieGraphik.png" alt="" width={28} height={28} className="rounded-sm" />
          <Image src="/GENACOAgile.png" alt="GENACO Agile" width={150} height={42} priority />
        </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#angebot" className="hover:text-emerald-navy">Angebot</a>
            <Link href="/flow-xray" className="hover:text-emerald-navy">Flow X‑Ray</Link>
            <a href="#team" className="hover:text-emerald-navy">Team</a>
            <a href="#kontakt" className="hover:text-emerald-navy">Kontakt</a>
          </nav>
          <a href="/booking" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-navy text-white hover:opacity-90 text-sm">
            Gespräch buchen <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ffcd5924] via-white to-[#0c255d12]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Ein eingespieltes <span className="text-emerald-navy">Expertenteam</span> auf Abruf
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Statt einzelner Freelancer koordinieren Sie ein Team mit klarer Verantwortung, Standards
              und messbaren Ergebnissen. Flow statt Gefühl – in planbaren Sprints.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/flow-xray" className="px-4 py-3 rounded-xl bg-emerald-navy text-white font-medium hover:opacity-90">Flow X‑Ray starten</Link>
              <a href="/booking" className="px-4 py-3 rounded-xl border font-medium hover:bg-slate-50">20‑Min Call</a>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border p-3">
                  <div className="text-2xl font-extrabold">{m.value}</div>
                  <div className="text-xs text-slate-500">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative md:h-[460px] h-72 border rounded-3xl bg-white shadow-sm flex items-center justify-center">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(12,37,93,0.10),transparent_60%)]" />
            <div className="text-center max-w-sm">
              <p className="text-sm uppercase tracking-widest text-emerald-navy font-semibold">Wir sind Ihr agiles Team</p>
              <h3 className="text-2xl font-bold mt-2">Team‑as‑a‑Service</h3>
              <ul className="mt-4 text-sm text-slate-600 space-y-2 text-left">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Ein Team, ein Vertrag, klare Outcomes</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Skalierbar: Skills just‑in‑time</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Transparente KPIs & Standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="angebot" className="py-14 md:py-20 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Was Sie bekommen</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">Zentral orchestrierte Expertenteams, die in kurzen Takten liefern – mit klaren Spielregeln, Qualitätssicherung und KI‑Assistenz.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border p-5 hover:shadow-sm transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  {f.icon}
                </div>
                <div className="font-semibold">{f.title}</div>
                <p className="text-sm text-slate-600 mt-1">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Das Team</h3>
          <p className="mt-2 text-slate-600 max-w-2xl">Dual Branding: Wir treten als GENACO Agile auf – und bewahren gleichzeitig die individuelle Autorenschaft unserer Expert:innen.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-200" />
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-xs text-slate-500">{m.brand}</div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-slate-700">{m.role}</div>
                <div className="mt-4 text-xs text-slate-500">Verfügbar für Einsätze in DACH · Remote‑first</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-16 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Lassen Sie uns starten</h3>
            <p className="mt-2 text-slate-600">Schreiben Sie uns kurz Ihr Anliegen oder buchen Sie direkt einen Termin. Wir melden uns innerhalb von 24h (Werktage).</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="mailto:hello@genacoagile.de" className="px-4 py-3 rounded-xl border font-medium hover:bg-white">hello@genacoagile.de</a>
              <a href="/booking" className="px-4 py-3 rounded-xl bg-emerald-navy text-white font-medium hover:opacity-90">Gespräch buchen</a>
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-5">
            <div className="text-sm text-slate-500">Alternativ: Schreiben Sie uns eine E‑Mail</div>
            <div className="mt-3 text-sm text-slate-600">Wir antworten werktags innerhalb von 24 Stunden.</div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-sm text-slate-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-navy" />
            <div>
              <div className="font-semibold">GENACO Agile</div>
              <div className="text-xs">Wir sind Ihr agiles Team.</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-emerald-navy">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-emerald-navy">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
