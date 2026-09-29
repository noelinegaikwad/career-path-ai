import React from 'react';
import { Career, UserSkill } from '../types';
import { X, Bookmark, BookmarkCheck, ArrowRight, CheckCircle2, AlertCircle, Building2, GraduationCap, DollarSign, Clock, Layers } from 'lucide-react';

interface CareerDetailModalProps {
  career: Career | null;
  userSkills: UserSkill[];
  isSaved: boolean;
  onToggleSave: () => void;
  onClose: () => void;
  onStartRoadmap: (career: Career) => void;
}

export const CareerDetailModal: React.FC<CareerDetailModalProps> = ({
  career,
  userSkills,
  isSaved,
  onToggleSave,
  onClose,
  onStartRoadmap
}) => {
  if (!career) return null;

  const userSkillMap = new Map<string, string>();
  userSkills.forEach(s => userSkillMap.set(s.name.toLowerCase(), s.proficiency));

  const alreadyHaveSkills: string[] = [];
  const skillsToDevelop: { name: string; target: string; importance: number }[] = [];

  career.requiredSkills.forEach(req => {
    const norm = req.name.toLowerCase();
    const userProf = userSkillMap.get(norm);
    if (userProf) {
      alreadyHaveSkills.push(`${req.name} (${userProf})`);
    } else {
      skillsToDevelop.push({
        name: req.name,
        target: req.minProficiency,
        importance: req.importance
      });
    }
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl p-6 sm:p-8 space-y-8 my-auto">
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              {career.category} → {career.subcategory}
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
              {career.title}
            </h2>
            <div className="mt-1 text-xs font-mono text-slate-400">
              Occupation Code: {career.occupationCode} · {career.difficulty} Level
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleSave}
              className={`p-2 rounded-lg border transition-colors ${
                isSaved ? 'border-indigo-500 bg-indigo-950 text-indigo-300' : 'border-slate-700 bg-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Bookmark career"
            >
              {isSaved ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Section 1: What this role does & Environment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
              <Building2 className="h-4 w-4 text-indigo-400" />
              <span>What This Role Does</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {career.description}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Work Environment:</span> {career.workEnvironment}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-emerald-400" />
                <span>Compensation & Horizons</span>
              </h3>
              <div className="grid grid-cols-3 gap-2 text-center text-xs mt-3">
                <div className="rounded bg-slate-900 p-2 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Entry Level</span>
                  <span className="font-mono font-bold text-slate-200">{career.salaryRange.entry}</span>
                </div>
                <div className="rounded bg-slate-900 p-2 border border-indigo-900/60">
                  <span className="text-[11px] text-indigo-300 block">Median</span>
                  <span className="font-mono font-bold text-indigo-400">{career.salaryRange.median}</span>
                </div>
                <div className="rounded bg-slate-900 p-2 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Senior Lead</span>
                  <span className="font-mono font-bold text-slate-200">{career.salaryRange.senior}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Roadmap Runway:</span>
              <span className="font-semibold text-white">{career.typicalDurationMonths} Months</span>
            </div>
          </div>
        </div>

        {/* Section 2: Skills Alignment & Gap Analysis */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-indigo-400">
            Skill Alignment & Gap Breakdown
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* You already have */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mb-3">
                <CheckCircle2 className="h-4 w-4" />
                <span>Competencies You Already Possess ({alreadyHaveSkills.length})</span>
              </div>

              {alreadyHaveSkills.length > 0 ? (
                <ul className="space-y-2 text-xs text-slate-300">
                  {alreadyHaveSkills.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  No direct overlap detected with your currently listed skills.
                </p>
              )}
            </div>

            {/* Skills to develop */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 mb-3">
                <AlertCircle className="h-4 w-4" />
                <span>Required Skills To Develop ({skillsToDevelop.length})</span>
              </div>

              <div className="space-y-2.5">
                {skillsToDevelop.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">{s.name}</span>
                    <span className="font-mono text-[11px] text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">
                      Target: {s.target} (Imp: {s.importance}/5)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Typical Entry-Level Roles */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Typical Entry-Level Role Titles
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {career.entryLevelRoles.map(role => (
              <span
                key={role}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-medium"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Section 4: 5-Stage Career Progression Pathway */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            5-Stage Career Progression Pathway
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {career.careerProgression.map((stage, idx) => (
              <div
                key={stage.stage}
                className="rounded-lg border border-slate-800 bg-slate-950/70 p-3.5 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-[10px] text-indigo-400 font-bold uppercase">
                    Stage {idx + 1}
                  </div>
                  <div className="mt-1 font-bold text-white">{stage.title}</div>
                  <div className="mt-1 text-[11px] text-slate-400">{stage.typicalExperience}</div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-300 leading-tight">
                  {stage.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Education Pathways */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <GraduationCap className="h-4 w-4 text-indigo-400" />
            <span>Recommended Educational Pathways</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
            {career.educationPathways.map((path, idx) => (
              <li key={idx}>{path}</li>
            ))}
          </ul>
        </div>

        {/* Action Button: Start Roadmap */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Dossier
          </button>
          <button
            onClick={() => {
              onStartRoadmap(career);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]"
          >
            <span>Activate Personalized Roadmap</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
