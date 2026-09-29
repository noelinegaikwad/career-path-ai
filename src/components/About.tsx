import React from 'react';
import { Compass, Sparkles, ShieldCheck, Scale, Cpu, Database, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 rounded-md">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          <span>Platform Methodology & Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          About CareerPath AI
        </h1>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-2xl">
          An open, evidence-based career discovery platform delivering transparent career recommendations, comprehensive skill-gap analysis, and milestone-driven roadmaps.
        </p>
      </div>

      {/* Philosophy Section */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Compass className="h-5 w-5 text-indigo-400" />
          <span>Core Mission: Global, Cross-Disciplinary Discovery</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Career guidance platforms often default to narrow subsets of technical programming jobs, ignoring the vast spectrum of human vocations. CareerPath AI is designed from the ground up as a global occupational discovery engine covering over 20 industries, including:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-2">
          {[
            'Technology & Software',
            'Healthcare & Medicine',
            'Aerospace & Mechanical',
            'Biotech & Life Sciences',
            'Corporate Law & Policy',
            'Finance & Investment',
            'Design & Creative Arts',
            'Sustainable Agriculture',
            'Aviation & Transport',
            'Sports Performance',
            'Skilled Industrial Trades',
            'Public Service & NGOs'
          ].map(d => (
            <div key={d} className="rounded bg-slate-950 p-2 border border-slate-800/80 text-slate-300">
              {d}
            </div>
          ))}
        </div>
      </section>

      {/* Deterministic Scoring Engine Section */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Scale className="h-5 w-5 text-indigo-400" />
            <span>Deterministic Scoring Model</span>
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            We avoid hallucinated percentages, black-box random guesses, or claims of predicting someone's future. Our scoring formula is mathematically transparent:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          {[
            { label: 'Skill Match', weight: '35%', desc: 'Overlap between user competencies and employer requirements.' },
            { label: 'Interest Match', weight: '20%', desc: 'Jaccard alignment with occupational domain enthusiasm.' },
            { label: 'Career Goal Alignment', weight: '15%', desc: 'Role title, industry preference, and weekly study capacity.' },
            { label: 'Education Prerequisites', weight: '10%', desc: 'Degree level and discipline relevance check.' },
            { label: 'Transferable Strengths', weight: '10%', desc: 'Cognitive and interpersonal trait matches.' },
            { label: 'Work Preferences', weight: '10%', desc: 'Euclidean similarity across 6 daily environment axes.' },
          ].map(w => (
            <div key={w.label} className="rounded-lg border border-slate-800 bg-slate-950/80 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono font-bold text-indigo-400 mb-1">
                  <span>{w.label}</span>
                  <span className="tabular-nums">{w.weight}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scalable Architecture & Machine Learning Upgrade */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Cpu className="h-5 w-5 text-indigo-400" />
          <span>Extensible Architecture & Future ML Roadmap</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          The platform decouples Feature Extraction, Scoring, Explanation, and Roadmap Generation. This ensures that:
        </p>
        <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
          <li>Thousands of occupations can be ingested directly into the relational schema without changing the frontend or scoring pipeline.</li>
          <li>A supervised learning neural ranker (e.g. LightGBM, Two-Tower Embedding Model) can replace the deterministic ScoringEngine module in future releases without touching explanation or roadmap generation.</li>
          <li>Cold-start handling is solved gracefully by combining explicit skill overlap with transferable strengths.</li>
        </ul>
      </section>

      {/* Ethical Guidance Disclaimer */}
      <section className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Ethical AI & Career Guidance Standards</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed max-w-xl mx-auto">
          "Career recommendations are guidance based on the information provided. They are not guarantees of employment, income, or future outcomes."
        </p>
      </section>
    </div>
  );
};
