import React, { useState } from 'react';
import { Career, UserSkill } from '../types';
import { CAREERS_DATABASE } from '../data/careersData';
import { recommendationEngine } from '../engine/recommendationEngine';
import { Target, CheckCircle2, AlertTriangle, ArrowRight, BookOpen, Layers, Award, Sparkles, TrendingUp } from 'lucide-react';

interface SkillsAnalysisProps {
  currentCareer: Career | null;
  userSkills: UserSkill[];
  onSelectCareer: (career: Career) => void;
  onStartRoadmap: (career: Career) => void;
}

export const SkillsAnalysis: React.FC<SkillsAnalysisProps> = ({
  currentCareer,
  userSkills,
  onSelectCareer,
  onStartRoadmap
}) => {
  const activeCareer = currentCareer || CAREERS_DATABASE[0];
  const [selectedCareerId, setSelectedCareerId] = useState<string>(activeCareer.id);

  const targetCareer = CAREERS_DATABASE.find(c => c.id === selectedCareerId) || activeCareer;
  const skillGapEngine = recommendationEngine.getSkillGapEngine();
  const gapReport = skillGapEngine.analyzeGaps(targetCareer, userSkills, 10);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-indigo-400 font-medium mb-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Target Competency Breakdown</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Skill-Gap Analysis
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Compare your verified proficiencies against employer prerequisite standards for any occupation.
          </p>
        </div>

        {/* Target Career Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400 whitespace-nowrap">Benchmark Career:</label>
          <select
            value={targetCareer.id}
            onChange={e => {
              setSelectedCareerId(e.target.value);
              const found = CAREERS_DATABASE.find(c => c.id === e.target.value);
              if (found) onSelectCareer(found);
            }}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-semibold text-white focus:border-indigo-500 focus:outline-none"
          >
            {CAREERS_DATABASE.map(c => (
              <option key={c.id} value={c.id}>
                {c.title} ({c.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <span className="text-xs text-slate-400 block">Overall Alignment</span>
          <span className="mt-1 font-mono text-3xl font-extrabold text-indigo-400 tabular-nums">
            {gapReport.overallAlignmentPercentage}%
          </span>
          <span className="text-[11px] text-slate-500 block mt-1">Prerequisite Coverage</span>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <span className="text-xs text-emerald-400 block flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Satisfied Skills</span>
          </span>
          <span className="mt-1 font-mono text-3xl font-extrabold text-white tabular-nums">
            {gapReport.strongSkills.length}
          </span>
          <span className="text-[11px] text-slate-500 block mt-1">Meets or Exceeds Level</span>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <span className="text-xs text-amber-400 block flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Skills to Improve</span>
          </span>
          <span className="mt-1 font-mono text-3xl font-extrabold text-white tabular-nums">
            {gapReport.skillsToImprove.length}
          </span>
          <span className="text-[11px] text-slate-500 block mt-1">Requires Level Advancement</span>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <span className="text-xs text-rose-400 block flex items-center gap-1.5">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Critical Missing</span>
          </span>
          <span className="mt-1 font-mono text-3xl font-extrabold text-white tabular-nums">
            {gapReport.criticalMissingSkills.length}
          </span>
          <span className="text-[11px] text-slate-500 block mt-1">High-Priority Gaps</span>
        </div>
      </div>

      {/* Top 3 Recommended Next Skills Section */}
      <div className="mt-8 rounded-xl border border-indigo-500/40 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 p-6 sm:p-7 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Target className="h-4 w-4 text-indigo-400" />
              <span>Recommended Next 3 Skills to Learn</span>
            </h2>
            <p className="text-xs text-slate-400">
              Prioritized by market importance and potential impact on closing your target role gap.
            </p>
          </div>
          <button
            onClick={() => onStartRoadmap(targetCareer)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
          >
            <span>View Learning Roadmap</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gapReport.topPrioritySkills.map((item, idx) => (
            <div
              key={item.name}
              className="rounded-lg border border-slate-800 bg-slate-950/80 p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono text-indigo-400 font-bold">Priority #{idx + 1}</span>
                  <span className="text-[11px]">Importance: {item.importance}/5</span>
                </div>
                <div className="text-sm font-bold text-white">{item.name}</div>
                <div className="mt-2 text-xs text-slate-300">
                  Target Proficiency: <span className="font-semibold text-indigo-300">{item.targetLevel}</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Current: <span className="text-slate-300">{item.userLevel}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Estimated Runway:</span>
                <span className="font-mono text-slate-200 font-semibold">{item.recommendedWeeks} Weeks</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Skill Audit Lists */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strong & To-Improve Skills */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Satisfied & In-Progress Skills ({gapReport.strongSkills.length + gapReport.skillsToImprove.length})</span>
          </h3>

          <div className="space-y-3">
            {[...gapReport.strongSkills, ...gapReport.skillsToImprove].map(item => (
              <div
                key={item.name}
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className={`font-mono text-[11px] px-2 py-0.5 rounded font-medium ${
                    item.gapStatus === 'Met' ? 'text-emerald-300 bg-emerald-950/60 border border-emerald-800/60' : 'text-amber-300 bg-amber-950/60 border border-amber-800/60'
                  }`}>
                    {item.gapStatus === 'Met' ? 'Requirement Satisfied' : 'Level Increase Needed'}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Your Level: <strong className="text-slate-200">{item.userLevel}</strong></span>
                  <span>Required Level: <strong className="text-slate-200">{item.targetLevel}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-rose-400" />
            <span>Missing Competencies To Acquire ({gapReport.criticalMissingSkills.length + gapReport.secondaryMissingSkills.length})</span>
          </h3>

          <div className="space-y-3">
            {[...gapReport.criticalMissingSkills, ...gapReport.secondaryMissingSkills].map(item => (
              <div
                key={item.name}
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="font-mono text-[11px] text-rose-300 bg-rose-950/60 border border-rose-800/60 px-2 py-0.5 rounded font-medium">
                    {item.gapStatus}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Category: {item.category}</span>
                  <span>Target: <strong className="text-slate-200">{item.targetLevel}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
