'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Gauge, LineChart, Users, Sparkles, Shield, Clock } from "lucide-react";

export default function Page() {
  const features = [
    { icon: <Users className="w-6 h-6" />, title: "Team-as-a-Service", text: "Ein eingespieltes Expertenteam – ein Vertrag, klare Verantwortung, messbare Outcomes." },
    { icon: <Gauge className="w-6 h-6" />, title: "Flow statt Gefühl", text: "Wir messen Lead-/Cycle Time, Durchsatz & Engpässe – und reduzieren Verzögerungskosten." },
    { icon: <LineChart className="w-6 h-6" />, title: "Sprints mit Impact", text: "2–4-Wochen-Sprints mit Review, KPIs & Transparenz auf einem gemeinsamen Board." },
    { icon: <Sparkles className="w-6 h-6" />, title: "KI-Assistenz integriert", text: "Research, Doku, Tests & Automatisierung – KI hebt Qualität und Tempo." },
    { icon: <Shield className="w-6 h-6" />, title: "Standards & Qualität", text: "DoR/DoD, Playbooks, Peer-Reviews, DSGVO-konforme Zusammenarbeit." },
    { icon: <Clock className="w-6 h-6" />, title: "Schnell startklar", text: "Kickoff in 10–15 Werktagen, Discovery-Sprint vor Delivery." },
  ];
  const metrics = [
    { label: "Lead-Time", value: "−20–35%" },
    { label: "Durchsatz", value: "+15–30%" },
    { label: "Defects", value: "−20–40%" },
    { label: "Stakeholder-NPS", value: "+1.5–3.0" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/DieGraphik.png" alt="" width={28} height={28} className="rounded-sm" />
            <Image src="/GENACOAgile.png" alt="GENACO Agile" width={150} height={42} priority />
            <span className="ml-3 text-sm text-slate-500 hidden md:inline">Wir sind Ihr agiles Team.</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#angebot" className="hover:text-brand-navy">Angebot</a>
            <Link href="/flow-xray" className="hover:text-brand-navy">Flow X-Ray</Link>
            <a href="#team" className="hover:text-brand-navy">Team</a>
            <a href="#kontakt" className="hover:text-brand-navy">Kontakt</a>
          </nav>
          <a
            href="/booking"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-gold text-brand-navy hover:opacity-90 text-sm font-medium"
          >
            Gespräch buchen <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ffcd5924] via-white to-[#0c255d12]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Ein eingespieltes <span className="text-brand-navy">Expertenteam</span> auf Abruf
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Statt einzelner Freelancer koordinieren Sie ein Team mit klarer Verantwortung, Standards
              und messbaren Ergebnissen. Flow statt Gefühl – in planbaren Sprints.
            </p>

