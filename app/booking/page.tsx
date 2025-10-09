'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ShieldCheck, Sparkles } from 'lucide-react';

type Tab = 'discovery' | 'kickoff';

// 👉 Links anpassen:
const CALENDLY_DISCOVERY = 'https://calendly.com/georgnauerz/erstgesprach';
const CALENDLY_KICKOFF   = 'https://calendly.com/your-org/flow-xray-kickoff-45';

// Optional: HubSpot Meetings-Links gehen genauso (einfach iframe src tauschen)

export default function BookingPage() {
  const [tab, setTab] = useState<Tab>('discovery');
  const [allowIframe, setAllowIframe] = useState(true);

  // Simple check: blockt der Browser evtl. Third-party iframes?
  useEffect(() => {
    const t = setTimeout(() => setAllowIframe(true), 300);
    return () => clearTimeout(t);
  }, []);

  const src = tab === 'discovery' ? CALENDLY_DISCOVERY : CALENDLY_KICKOFF;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <Image src="/DieGraphik.png" alt="" width={24} height={24} />
          <Image src="/GENACOAgile.png" alt="GENACO Agile" width={120} height={34} />
          <Link href="/" className="ml-auto text-sm text-brand-navy hover:underline">Zur Startseite</Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: info / value props */}
          <section className="lg:col-span-1">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Gespräch buchen</h1>
            <p className="mt-2 text-slate-600">
              Wählen Sie Ihren Slot – wir bestätigen automatisch und senden eine Kalendereinladung.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border p-4 text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-brand-navy" /> 20-Min Discovery-Call
                </div>
                <p className="mt-1 text-slate-600">
                  Erstes Kennenlernen, Zielbild, nächster sinnvoller Schritt.
                </p>
                <button
                  onClick={() => setTab('discovery')}
                  className={`mt-2 px-3 py-2 rounded-xl border text-sm ${tab === 'discovery' ? 'bg-brand-navy text-white' : 'hover:bg-slate-50'}`}
                >
                  Auswählen
                </button>
              </div>

              <div className="rounded-2xl border p-4 text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <Calendar className="w-4 h-4 text-brand-navy" /> Flow X-Ray Kickoff (45-60 Min)
                </div>
                <p className="mt-1 text-slate-600">
                  Start in die 7-Tage-Analyse, Datenquellen & Hypothesen.
                </p>
                <button
                  onClick={() => setTab('kickoff')}
                  className={`mt-2 px-3 py-2 rounded-xl border text-sm ${tab === 'kickoff' ? 'bg-brand-navy text-white' : 'hover:bg-slate-50'}`}
                >
                  Auswählen
                </button>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><ShieldCheck className="w-4 h-4 text-brand-navy" /> DSGVO-konform, EU-Server bei Bedarf</li>
                <li className="flex gap-2"><Sparkles className="w-4 h-4 text-brand-navy" /> Automatische Zeitumrechnung & Kalendereinladung</li>
              </ul>
            </div>
          </section>

          {/* Right: embed */}
          <section className="lg:col-span-2">
            <div className="rounded-3xl border">
              {allowIframe ? (
                <iframe
                  title={tab === 'discovery' ? 'Discovery Call' : 'Flow X-Ray Kickoff'}
                  src={src}
                  className="w-full h-[840px] rounded-3xl"
                  style={{ border: '0' }}
                />
              ) : null}
            </div>

            {/* Fallback, wenn iframe blockiert */}
            <div className="mt-4 text-sm text-slate-600">
              <p>
                Lässt sich der Kalender nicht laden? Buchen Sie per E-Mail:
                {' '}
                <a
                  className="text-brand-navy underline"
                  href={`mailto:hello@genacoagile.de?subject=${encodeURIComponent(tab === 'discovery' ? 'Discovery-Call' : 'Flow X-Ray Kickoff')}`}
                >
                  hello@genacoagile.de
                </a>
                {' '}– wir schlagen Ihnen umgehend 3 Slots vor.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
