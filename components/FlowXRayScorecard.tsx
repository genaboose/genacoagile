'use client';
import { useMemo, useState } from "react";
import { Check, Clipboard, ClipboardCheck, TrendingUp } from "lucide-react";

const QUESTIONS = [
  { id: 1, text: "Wird Arbeit Ende-zu-Ende sichtbar (inkl. WIP-Limits)?" },
  { id: 2, text: "Sind Sprints/Takt fix – Releases aber unabhängig?" },
  { id: 3, text: "Gibt es ≤ 3 Übergaben von Idee bis Umsetzung?" },
  { id: 4, text: "Liegt ungeplante Arbeit im Sprint bei < 10 %?" },
  { id: 5, text: "Gibt es eine eindeutige Priorisierung (eine Stelle/Person)?" },
  { id: 6, text: "Ist Zykluszeit bekannt – und wird aktiv verbessert?" },
  { id: 7, text: "Existiert eine Definition of Done inkl. Qualitätsmetriken?" },
  { id: 8, text: "Reduziert das Tooling Arbeit (keine Doppelpflege)?" },
  { id: 9, text: "Haben Schlüsselrollen < 15 Meetings pro Woche?" },
  { id: 10, text: "Bearbeitet jedes Team ≤ 5 aktive Vorhaben gleichzeitig?" },
];

function classify(score: number) {
  if (score <= 4) return { label: "Rot – hohes Potenzial", color: "bg-red-500", hint: "Hohe versteckte Verzögerungskosten. 7-Tage Flow X-Ray empfohlen." };
  if (score <= 7) return { label: "Gelb – spürbares Potenzial", color: "bg-amber-500", hint: "Gute Basis – mit 2–3 Quick Wins deutlich schneller." };
  return { label: "Grün – reif", color: "bg-green-600", hint: "Weiter so – Feintuning über gezielte Bottleneck-Analysen." };
}

export default function FlowXRayScorecard({ onBook }: { onBook?: () => void }) {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>(Object.fromEntries(QUESTIONS.map(q => [q.id, null])));
  const [meta, setMeta] = useState({ company: "", name: "", email: "" });
  const [copied, setCopied] = useState(false);

  const { score, result } = useMemo(() => {
    const values = Object.values(answers);
    const score = values.reduce((acc, v) => acc + (v ? 1 : 0), 0);
    return { score, result: classify(score) };
  }, [answers]);

  const percent = Math.round((Object.values(answers).filter(v => v !== null).length / QUESTIONS.length) * 100);

  const handleCopy = async () => {
    const lines = [
      `Flow X-Ray Scorecard`,
      `Unternehmen: ${meta.company || "—"}`,
      `Kontakt: ${meta.name || "—"} <${meta.email || "—"}>`,
      `Score: ${score}/10 (${result.label})`,
      `---`,
      ...QUESTIONS.map(q => `${q.id}. ${q.text} — ${answers[q.id] ? "Ja" : "Nein"}`)
    ];
    await navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Flow X-Ray Scorecard</h1>
        <p className="mt-2 text-slate-600">10 Fragen – sofortige Einordnung & nächste Schritte.</p>
      </div>

      <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
        <div className={`h-2 rounded-full ${percent < 100 ? "bg-slate-400" : "bg-emerald-600"}`} style={{ width: `${percent}%` }} />
      </div>
      <div className="text-right text-xs text-slate-500 mb-6">{percent}% ausgefüllt</div>

      <div className="grid gap-4">
        {QUESTIONS.map(q => (
          <div key={q.id} className="border rounded-2xl p-4 hover:shadow-sm transition">
            <div className="flex items-start justify-between gap-4">
              <p className="font-medium leading-snug">{q.id}. {q.text}</p>
              <div className="flex items-center gap-3 shrink-0">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input type="radio" name={`q-${q.id}`} className="w-4 h-4" onChange={() => setAnswers(a => ({ ...a, [q.id]: true }))} />
                  <span>Ja</span>
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input type="radio" name={`q-${q.id}`} className="w-4 h-4" onChange={() => setAnswers(a => ({ ...a, [q.id]: false }))} />
                  <span>Nein</span>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-3">
        <input className="border rounded-xl px-3 py-2 w-full" placeholder="Unternehmen (optional)" value={meta.company} onChange={e => setMeta({ ...meta, company: e.target.value })} />
        <input className="border rounded-xl px-3 py-2 w-full" placeholder="Ihr Name (optional)" value={meta.name} onChange={e => setMeta({ ...meta, name: e.target.value })} />
        <input className="border rounded-xl px-3 py-2 w-full" placeholder="E-Mail (optional)" value={meta.email} onChange={e => setMeta({ ...meta, email: e.target.value })} />
      </div>

      <div className="mt-6 border rounded-2xl p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-slate-500">Score</div>
            <div className="text-2xl font-bold">{score}/10</div>
            <div className="text-sm text-slate-600">{result.hint}</div>
          </div>
          <div className="min-w-[180px]">
            <div className="text-xs font-medium mb-1">Einstufung</div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className={`h-2 rounded-full ${result.color}`} style={{ width: `${(score / 10) * 100}%` }} />
            </div>
            <div className="text-xs mt-2 text-slate-600">{result.label}</div>
          </div>
        </div>

        <div className="mt-4 grid gap-2 text-sm">
          <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Individuelle Kurzempfehlung in 20 Min. – kostenlos.</div>
          <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> 7-Tage Flow X-Ray (Festpreis) als nächster Schritt.</div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button onClick={handleCopy} className="px-3 py-2 rounded-xl border hover:bg-slate-50 inline-flex items-center gap-2">
            {copied ? <ClipboardCheck className="w-4 h-4" /> : <Clipboard className="w-4 h-4" />} Ergebnis kopieren
          </button>
          <a className="px-3 py-2 rounded-xl border hover:bg-slate-50"
             href={`mailto:sales@genacoagile.de?subject=Flow%20X-Ray%20Scorecard&body=${encodeURIComponent(
              `Unternehmen: ${meta.company}\\nName: ${meta.name}\\nE-Mail: ${meta.email}\\nScore: ${score}/10 (${result.label})\\n\\nAntworten:\\n` +
              QUESTIONS.map(q => `${q.id}. ${q.text} — ${answers[q.id] ? 'Ja' : 'Nein'}`).join('\\n'))}`}>
            Per E-Mail senden
          </a>
          <button onClick={onBook || (() => (window.location.href = "/booking"))}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium hover:opacity-90">
            20-Min Termin buchen
          </button>
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-4">Hinweis: Diese Selbst-Einschätzung ersetzt keine detaillierte Analyse. Für eine valide Baseline empfehlen wir das 7-Tage Flow X-Ray (inkl. Board-Memo).</p>
    </div>
  );
}

