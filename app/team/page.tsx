'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, Link2, Calendar, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

type Member = {
  name: string;
  role: string;
  brand: string;
  tags: string[];
  image?: string;        // Pfad unter /public (optional)
  linkedin?: string;
  booking?: string;      // individueller Calendly/HubSpot-Link (optional)
};

const MEMBERS: Member[] = [
  {
    name: 'Georg Nauerz',
    role: 'Agiles Organisationsdesign & Delivery',
    brand: 'GNC Georg Nauerz Consulting',
    tags: ['Operating Model', 'Scaling', 'Flow'],
    image: '/team/georg.jpg',
    linkedin: 'https://www.linkedin.com/in/georgnauerz',
  },
  {
    name: 'Stephan Druckrey',
    role: 'Agile Change & Executive Coaching',
    brand: 'Druckrey Coaching',
    tags: ['Leadership', 'Change', 'Coaching'],
    image: '/team/stephan.jpg',
    linkedin: 'https://www.linkedin.com/in/stephandruckrey',
  },
  {
    name: 'Bianca Wenz',
    role: 'Retail-Prozessoptimierung & KVP',
    brand: 'GBW Consulting',
    tags: ['Retail', 'KVP', 'Prozesse'],
    image: '/team/bianca.jpg',
    linkedin: 'https://www.linkedin.com/in/bianca-wenz-gemeinsam-besser-werden',
  },
  {
    name: 'Kate Kraemer',
    role: 'Operational Excellence & Business Operations',
    brand: '—',
    tags: ['OpEx', 'PMO', 'Scaling'],
    image: '/team/kate.jpg',
    linkedin: 'https://www.linkedin.com/in/katekraemer-zw',
  },
  {
    name: 'Nicole Jordan',
    role: 'Team- & Organisationsentwicklung',
    brand: 'JORDAN SOLUTIONS',
    tags: ['Teamentwicklung', 'Konflikte', 'Facilitation'],
    image: '/team/nicole.jpg',
    linkedin: 'https://www.linkedin.com/in/nicole-jordan-solutions',
  },
];

const ALL_TAGS = Array.from(
  new Set(MEMBERS.flatMap(m => m.tags))
).sort();

export default function TeamPage() {
  const [q, setQ] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return MEMBERS.filter(m => {
      const inSearch =
        !q ||
        m.name.toLowerCase().includes(q.toLowerCase()) ||
        m.role.toLowerCase().includes(q.toLowerCase()) ||
        m.brand.toLowerCase().includes(q.toLowerCase());
      const hasTags =
        activeTags.length === 0 ||
        activeTags.every(t => m.tags.includes(t));
      return inSearch && hasTags;
    });
  }, [q, activeTags]);

  const toggleTag = (t: string) =>
    setActiveTags(prev => (prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]));

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header mini */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Team</h1>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Statt einzelne Generalisten zu koordinieren, arbeiten Sie mit einem eingespielten Team:
            komplementäre Stärken, gemeinsame Playbooks, Qualitätssicherung und Vertretung bei Abwesenheiten.
            Das reduziert Ihren Koordinationsaufwand, beschleunigt die Umsetzung und macht Ergebnisse verlässlich planbar.
          </p>
            <ul className="mt-4 text-sm text-slate-700 space-y-1">
              <li>• Ein Team, ein Vertrag, eine Verantwortung</li>
              <li>• Komplementäre Skills statt All-in-one-Generalist</li>
              <li>• Gemeinsame Standards & Review-Takt → konstante Qualität</li>
              <li>• Vertretung & Skalierung → keine Ausfälle, schneller Ramp-up</li>
              <li>• Transparente Boards & Metriken → planbare Ergebnisse</li>
            </ul>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full border rounded-xl pl-9 pr-3 py-2 text-sm"
              placeholder="Suche nach Name, Rolle oder Marke…"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map(t => (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={
                  'px-3 py-1.5 rounded-full text-sm border ' +
                  (activeTags.includes(t)
                    ? 'bg-brand-navy text-white border-brand-navy'
                    : 'hover:bg-slate-50')
                }
              >
                {t}
              </button>
            ))}
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="px-3 py-1.5 rounded-full text-sm border hover:bg-slate-50"
              >
                Filter zurücksetzen
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(m => (
            <article key={m.name} className="rounded-2xl border p-5 hover:shadow-sm transition">
              <div className="flex items-center gap-4">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#ffcd5914]" />
                )}
                <div>
                  <h3 className="font-semibold leading-tight">{m.name}</h3>
                  <p className="text-xs text-slate-500">{m.brand}</p>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-700">{m.role}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {m.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border bg-[#ffcd5914] text-brand-navy">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2">
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm text-brand-navy hover:underline"
                  >
                    <Link2 className="w-4 h-4" /> LinkedIn
                  </a>
                )}
                <div className="mx-1 text-slate-300">•</div>
                <Link
                  href={m.booking || '/booking'}
                  className="inline-flex items-center gap-1.5 text-sm text-brand-navy hover:underline"
                >
                  <Calendar className="w-4 h-4" /> Gespräch buchen
                </Link>
                <div className="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Briefcase className="w-3.5 h-3.5" /> DACH · Remote-first
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Hinweis */}
        <p className="mt-8 text-xs text-slate-500">
          Hinweis: Für individuelle Kickoff-Links (z. B. mit Stephan) hinterlege im Member-Objekt die Eigenschaft
          <code className="mx-1 rounded bg-slate-100 px-1">booking</code> mit der persönlichen Kalender-URL.
        </p>
      </main>
    </div>
  );
}
