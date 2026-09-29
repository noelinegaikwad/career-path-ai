import React from 'react';
import { Compass, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Layers, BookOpen, Target, Globe, ShieldCheck, ChevronRight } from 'lucide-react';

interface HomeProps {
  onStartAssessment: () => void;
  onExploreCareers: () => void;
  onViewResults: () => void;
  hasAssessment: boolean;
}

export const Home: React.FC<HomeProps> = ({
  onStartAssessment,
  onExploreCareers,
  onViewResults,
  hasAssessment
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background radial gradient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.18),rgba(15,23,42,0))]" />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 rounded-md">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Deterministic Multi-Dimensional Career Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight">
            Your skills can tell a story.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-sky-300">
              Let AI help you find the next chapter.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed text-balance max-w-2xl mx-auto">
            CareerPath AI analyzes your interests, skills, education and preferences to suggest career paths and create a personalized learning roadmap.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onStartAssessment}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span>Take Career Assessment</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={onExploreCareers}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Compass className="h-4 w-4 text-indigo-400" />
              <span>Explore Careers</span>
            </button>

            {hasAssessment && (
              <button
                onClick={onViewResults}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-indigo-300 hover:text-white transition-colors"
              >
                <span>View Previous Results</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Premium Dashboard Live Preview Mockup */}
        <div className="mt-16 sm:mt-20 relative mx-auto max-w-5xl rounded-xl border border-slate-800/90 bg-slate-900/70 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">careerpath.platform / analytics-view</span>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span>Candidate Profile</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-medium">Evaluation Complete</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Top Match Card */}
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-slate-400">Primary Recommendation</div>
                <div className="mt-1 text-lg font-bold text-white">Software Developer</div>
                <div className="mt-1 text-xs text-slate-400 flex items-center gap-1.5">
                  <span>Technology</span>
                  <span aria-hidden="true">·</span>
                  <span>Software Systems</span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-extrabold text-indigo-400 tabular-nums">87%</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Profile Match</span>
                </div>

                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  Your core Java, REST APIs foundation and analytical problem-solving directly align with backend engineering requirements.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Entry: $65k–$105k</span>
                <span className="text-indigo-400 font-medium">4 Phases · 16 Wks</span>
              </div>
            </div>

            {/* Skill Gap Progress Mockup */}
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-slate-400">Skill Alignment Analysis</div>
                <div className="mt-1 text-sm font-semibold text-white">Prerequisite Competencies</div>

                <div className="mt-4 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Java & Object-Oriented Design</span>
                      <span className="font-mono text-emerald-400 tabular-nums">Met (85%)</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>PostgreSQL & Relational Data</span>
                      <span className="font-mono text-emerald-400 tabular-nums">Met (75%)</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[75%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Docker & CI/CD Pipelines</span>
                      <span className="font-mono text-amber-400 tabular-nums">To Develop (30%)</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full w-[30%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                <span>Critical Gaps: 1 Skill</span>
                <span className="text-slate-300 font-medium">Estimated: 3 Weeks</span>
              </div>
            </div>

            {/* Roadmap Status Mockup */}
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-slate-400">Personalized Roadmap</div>
                <div className="mt-1 text-sm font-semibold text-white">Execution Milestones</div>

                <div className="mt-4 space-y-2.5 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="line-through text-slate-500">OOP & Git Version Control</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <div className="h-4 w-4 rounded-full border border-indigo-400 flex items-center justify-center shrink-0">
                      <div className="h-2 w-2 rounded-full bg-indigo-400" />
                    </div>
                    <span className="font-medium text-white">REST API Architecture & Auth</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="h-4 w-4 rounded-full border border-slate-700 shrink-0" />
                    <span>Microservices & Containerization</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="h-4 w-4 rounded-full border border-slate-700 shrink-0" />
                    <span>Portfolio Deployment & Interviews</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Roadmap Progress</span>
                <span className="font-mono text-indigo-400 font-semibold tabular-nums">25% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (5 Steps) */}
      <section className="border-t border-slate-800/80 bg-slate-900/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Structured Methodology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How CareerPath AI Works
            </p>
            <p className="mt-3 text-sm text-slate-400">
              A transparent, five-stage process transforming your qualifications into actionable career milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Tell us about yourself',
                desc: 'Share your education, existing skills, personal interests, work style, and career goals in our 6-step questionnaire.'
              },
              {
                step: '02',
                title: 'Explore possibilities',
                desc: 'Compare your traits against our extensible occupational taxonomy covering technology, healthcare, sciences, trades, and arts.'
              },
              {
                step: '03',
                title: 'Discover matches',
                desc: 'Review deterministic Profile Match scores with transparent mathematical breakdowns of helping and lowering factors.'
              },
              {
                step: '04',
                title: 'Identify skill gaps',
                desc: 'Analyze where your current proficiency meets employer criteria and pinpoint the exact missing skills to acquire.'
              },
              {
                step: '05',
                title: 'Follow your roadmap',
                desc: 'Execute a milestone-driven, 4-phase learning roadmap scaled directly to your weekly learning time.'
              }
            ].map((item, idx) => (
              <div
                key={item.step}
                className="relative rounded-lg border border-slate-800 bg-slate-950/70 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-indigo-400">{item.step}.</span>
                  <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Platform Capabilities</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineered for Complete Career Clarity
            </p>
            <p className="mt-3 text-sm text-slate-400">
              Everything required to explore, evaluate, and pursue multi-disciplinary occupations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sparkles className="h-5 w-5 text-indigo-400" />,
                title: 'AI-Assisted Recommendations',
                desc: 'Weighted multi-factor matching examining skills (35%), interests (20%), goals (15%), and work styles.'
              },
              {
                icon: <Globe className="h-5 w-5 text-sky-400" />,
                title: 'Global Career Exploration',
                desc: 'Cross-industry library covering 20+ disciplines from engineering and healthcare to skilled trades and public policy.'
              },
              {
                icon: <Target className="h-5 w-5 text-emerald-400" />,
                title: 'Skill-Gap Analysis',
                desc: 'Direct comparison of your verified competencies against industry standards with prioritized top next skills.'
              },
              {
                icon: <BookOpen className="h-5 w-5 text-amber-400" />,
                title: 'Personalized Roadmap',
                desc: 'Interactive 4-phase curricula with weekly schedules, practical project milestones, and self-paced tracking.'
              },
              {
                icon: <Layers className="h-5 w-5 text-purple-400" />,
                title: 'Career Comparison',
                desc: 'Side-by-side evaluation of up to 3 target paths across salary, required skills, and roadmap length.'
              },
              {
                icon: <TrendingUp className="h-5 w-5 text-indigo-400" />,
                title: 'Progress Tracking',
                desc: 'Persistent completion tracking, notes per module, and completion percentage updates across your journey.'
              },
              {
                icon: <ShieldCheck className="h-5 w-5 text-rose-400" />,
                title: 'Assessment History',
                desc: 'Maintain chronological logs of all career evaluations to observe changing interests and skill growth over time.'
              },
              {
                icon: <Compass className="h-5 w-5 text-teal-400" />,
                title: 'Saved Career Dossiers',
                desc: 'Bookmark potential occupations for rapid reference, comparison, and customized roadmap execution.'
              }
            ].map(f => (
              <div
                key={f.title}
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/80 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Regulatory & Guidance Disclaimer */}
      <section className="border-t border-slate-800/80 bg-slate-950 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Advisory Disclaimer</h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              "Career recommendations are guidance based on the information provided. They are not guarantees of employment, income, or future outcomes."
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-slate-500">
              <span>Deterministic Scoring</span>
              <span aria-hidden="true">·</span>
              <span>Transparent Algorithmic Rules</span>
              <span aria-hidden="true">·</span>
              <span>No Black-Box Probabilities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
