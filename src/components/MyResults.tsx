import React, { useState } from 'react';
import { AssessmentData, Career, CareerRecommendation } from '../types';
import { Bookmark, BookmarkCheck, ArrowRight, RotateCcw, CheckCircle2, AlertTriangle, Layers, Award, Sparkles, ChevronRight, BookOpen, Clock } from 'lucide-react';

interface MyResultsProps {
  assessment: AssessmentData | null;
  recommendations: CareerRecommendation[];
  savedCareerIds: string[];
  onToggleSaveCareer: (careerId: string) => void;
  onViewCareerDetail: (career: Career) => void;
  onStartRoadmap: (career: Career) => void;
  onRetakeAssessment: () => void;
  onSelectCompare: (career: Career) => void;
  isCareerSelectedForCompare: (careerId: string) => boolean;
  assessmentHistory: AssessmentData[];
  onSelectHistoryAssessment: (assessment: AssessmentData) => void;
}

export const MyResults: React.FC<MyResultsProps> = ({
  assessment,
  recommendations,
  savedCareerIds,
  onToggleSaveCareer,
  onViewCareerDetail,
  onStartRoadmap,
  onRetakeAssessment,
  onSelectCompare,
  isCareerSelectedForCompare,
  assessmentHistory,
  onSelectHistoryAssessment
}) => {
  const [activeTab, setActiveTab] = useState<'matches' | 'history'>('matches');

  if (!assessment || recommendations.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-indigo-400">
          <Layers className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold text-white">No Assessment Found</h2>
        <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
          Complete our 6-step assessment to generate deterministic career alignment scores and custom roadmaps.
        </p>
        <button
          onClick={onRetakeAssessment}
          className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md transition-colors"
        >
          <span>Take Assessment</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  const primaryRecommendation = recommendations[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Top Banner & Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-indigo-400 font-medium mb-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Deterministic Scoring Result</span>
            <span aria-hidden="true">·</span>
            <span>Evaluated {assessment.createdAt ? new Date(assessment.createdAt).toLocaleDateString() : 'Today'}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Your Career Profile
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Based on your education in {assessment.education.degree}, {assessment.skills.length} skills, and declared work preferences.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Segmented control for Matches vs History */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setActiveTab('matches')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'matches'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Recommended Paths ({recommendations.length})
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'history'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Assessment History ({assessmentHistory.length})
            </button>
          </div>

          <button
            onClick={onRetakeAssessment}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors whitespace-nowrap"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Retake</span>
          </button>
        </div>
      </div>

      {activeTab === 'matches' ? (
        <>
          {/* Primary Top Match Spotlight Card */}
          {primaryRecommendation && (
            <div className="mt-8 rounded-xl border border-indigo-500/40 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs text-indigo-300 font-semibold tracking-wide uppercase">
                    <span>Highest Alignment Path</span>
                    <span aria-hidden="true">·</span>
                    <span>{primaryRecommendation.career.category}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {primaryRecommendation.career.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {primaryRecommendation.career.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 pt-2">
                    <div>
                      <span className="text-slate-500">Industry:</span>{' '}
                      <span className="text-slate-200">{primaryRecommendation.career.industries.join(', ')}</span>
                    </div>
                    <span aria-hidden="true">·</span>
                    <div>
                      <span className="text-slate-500">Typical Salary:</span>{' '}
                      <span className="text-slate-200 font-mono">{primaryRecommendation.career.salaryRange.median}</span>
                    </div>
                    <span aria-hidden="true">·</span>
                    <div>
                      <span className="text-slate-500">Roadmap:</span>{' '}
                      <span className="text-slate-200">{primaryRecommendation.career.typicalDurationMonths} Months</span>
                    </div>
                  </div>
                </div>

                {/* Score badge & quick actions */}
                <div className="flex flex-col sm:items-end justify-between gap-4 shrink-0">
                  <div className="text-left sm:text-right">
                    <div className="flex items-baseline sm:justify-end gap-1.5">
                      <span className="font-mono text-5xl font-extrabold text-indigo-400 tabular-nums">
                        {primaryRecommendation.profileMatch}%
                      </span>
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Profile Match
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleSaveCareer(primaryRecommendation.career.id)}
                      className={`p-2 rounded-lg border transition-colors ${
                        savedCareerIds.includes(primaryRecommendation.career.id)
                          ? 'border-indigo-500 bg-indigo-950 text-indigo-300'
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                      title="Save Career"
                    >
                      {savedCareerIds.includes(primaryRecommendation.career.id) ? (
                        <BookmarkCheck className="h-4 w-4" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </button>

                    <button
                      onClick={() => onViewCareerDetail(primaryRecommendation.career)}
                      className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => onStartRoadmap(primaryRecommendation.career)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                    >
                      <span>Start Roadmap</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Explanations & Next Steps for Top Match */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-4">
                  <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Factors Helping Your Match</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-300 leading-relaxed list-disc list-inside">
                    {primaryRecommendation.positiveFactors.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-4">
                  <div className="font-semibold text-amber-400 flex items-center gap-1.5 mb-2">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Factors Lowering Alignment / Gaps</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-300 leading-relaxed list-disc list-inside">
                    {primaryRecommendation.loweringFactors.length > 0 ? (
                      primaryRecommendation.loweringFactors.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))
                    ) : (
                      <li>No significant negative detractors identified.</li>
                    )}
                  </ul>
                  <div className="mt-3 pt-2 border-t border-slate-800/60 text-[11px] text-indigo-300">
                    <span className="font-semibold">Recommended Next Step:</span> {primaryRecommendation.recommendedNextStep}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Recommended Career Cards Grid */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">All Suitable Career Matches</h3>
                <p className="text-xs text-slate-400">
                  Multiple career pathways ranked deterministically by your multi-factor profile match.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map(rec => {
                const isSaved = savedCareerIds.includes(rec.career.id);
                const isComparing = isCareerSelectedForCompare(rec.career.id);

                return (
                  <div
                    key={rec.career.id}
                    className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
                  >
                    <div>
                      {/* Category & Save button */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-xs text-slate-400 flex items-center gap-1.5">
                          <span>{rec.career.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{rec.career.subcategory}</span>
                        </div>
                        <button
                          onClick={() => onToggleSaveCareer(rec.career.id)}
                          className={`p-1.5 rounded-md transition-colors ${
                            isSaved ? 'text-indigo-400 bg-indigo-950/60' : 'text-slate-500 hover:text-white'
                          }`}
                          title="Bookmark career"
                        >
                          {isSaved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                        </button>
                      </div>

                      <h4 className="mt-2 text-base font-bold text-white">{rec.career.title}</h4>

                      {/* Profile Match Score */}
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="font-mono text-2xl font-bold text-indigo-400 tabular-nums">
                          {rec.profileMatch}%
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                          Profile Match
                        </span>
                      </div>

                      <p className="mt-3 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {rec.career.description}
                      </p>

                      {/* Sub-scores preview */}
                      <div className="mt-4 grid grid-cols-3 gap-1.5 pt-3 border-t border-slate-800/80 text-[11px]">
                        <div className="rounded bg-slate-950/60 p-1.5 text-center">
                          <span className="text-slate-500 block">Skills</span>
                          <span className="font-mono font-semibold text-slate-200 tabular-nums">{rec.skillMatchScore}%</span>
                        </div>
                        <div className="rounded bg-slate-950/60 p-1.5 text-center">
                          <span className="text-slate-500 block">Interests</span>
                          <span className="font-mono font-semibold text-slate-200 tabular-nums">{rec.interestMatchScore}%</span>
                        </div>
                        <div className="rounded bg-slate-950/60 p-1.5 text-center">
                          <span className="text-slate-500 block">Work Style</span>
                          <span className="font-mono font-semibold text-slate-200 tabular-nums">{rec.workPreferenceMatchScore}%</span>
                        </div>
                      </div>

                      {/* Required Core Skills */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80">
                        <span className="text-[11px] font-medium text-slate-400">Core Skills Needed:</span>
                        <div className="mt-1.5 text-xs text-slate-300 flex flex-wrap gap-1">
                          {rec.career.requiredSkills.slice(0, 3).map((s, idx) => (
                            <span key={s.name}>
                              {s.name}{idx < 2 ? ' · ' : ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <label className="flex items-center gap-1.5 text-xs text-slate-400 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isComparing}
                          onChange={() => onSelectCompare(rec.career)}
                          className="rounded border-slate-700 text-indigo-600 focus:ring-0"
                        />
                        <span>Compare</span>
                      </label>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onViewCareerDetail(rec.career)}
                          className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-md transition-colors"
                        >
                          Dossier
                        </button>
                        <button
                          onClick={() => onStartRoadmap(rec.career)}
                          className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors"
                        >
                          Roadmap
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        /* ASSESSMENT HISTORY TAB */
        <div className="mt-8">
          <div className="mb-4">
            <h3 className="text-base font-bold text-white">Your Evaluation Logs</h3>
            <p className="text-xs text-slate-400">
              Review prior assessments, inspect changes in skill profiles, and reload historical results.
            </p>
          </div>

          {assessmentHistory.length === 0 ? (
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-8 text-center text-xs text-slate-400">
              No historical assessments logged. Take additional assessments over time to track your progress.
            </div>
          ) : (
            <div className="space-y-3">
              {assessmentHistory.map((hist, idx) => {
                const dateStr = hist.createdAt ? new Date(hist.createdAt).toLocaleString() : `Assessment #${idx + 1}`;
                return (
                  <div
                    key={hist.id || idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{dateStr}</span>
                      </div>
                      <div className="mt-1 text-sm font-semibold text-white">
                        {hist.education.degree} · {hist.education.specialization || 'General'}
                      </div>
                      <div className="mt-1 text-xs text-slate-400 flex flex-wrap gap-2">
                        <span>Skills Declared: {hist.skills.length}</span>
                        <span aria-hidden="true">·</span>
                        <span>Interests: {hist.interests.join(', ')}</span>
                        <span aria-hidden="true">·</span>
                        <span>Target Role: {hist.careerGoals?.desiredRole || 'Unspecified'}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onSelectHistoryAssessment(hist);
                        setActiveTab('matches');
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <span>Load Recommendations</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
