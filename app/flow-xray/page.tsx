'use client';
import FlowXRayScorecard from "../../components/FlowXRayScorecard";
export default function FlowXRAYPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Flow X-Ray</h1>
        <p className="mt-3 text-slate-600">7-Tage-Analyse mit Board-Memo & Quick Wins.</p>
        <div className="mt-8"><FlowXRayScorecard /></div>
      </div>
    </div>
  );
}
