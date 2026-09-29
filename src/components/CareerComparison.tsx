import React from 'react';
import { Career, CareerRecommendation, UserSkill } from '../types';
import { X, Check, ArrowRight, Layers, DollarSign, Clock, Building2, GraduationCap } from 'lucide-react';

interface CareerComparisonProps {
  selectedCareers: Career[];
  recommendations: CareerRecommendation[];
  userSkills: UserSkill[];
  onRemoveCareer: (careerId: string) => void;
  onClose: () => void;
  onStartRoadmap: (career: Career) => void;
}

export const CareerComparison: React.FC<CareerComparisonProps> = ({
  selectedCareers,
  recommendations,
  userSkills,
  onRemoveCareer,
  onClose,
  onStartRoadmap
}) => {
  if (selectedCareers.length === 0) return null;

  // Build quick map of profile match scores
  const scoreMap = new Map<string, number>();
  recommendations.forEach(r => scoreMap.set(r.career.id, r.profileMatch));

  const userSkillNames = new Set(userSkills.map(s => s.name.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl p-6 sm:p-8 space-y-6 my-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Side-by-Side Career Comparison</h2>
            <p className="mt-1 text-xs text-slate-400">
              Objective comparison of core competencies, compensation, education pathways, and roadmap timelines.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="py-3 px-4 text-slate-400 font-semibold w-1/4">Criteria</th>
                {selectedCareers.map(career => {
                  const match = scoreMap.get(career.id);
                  return (
                    <th key={career.id} className="py-3 px-4 text-white font-bold align-top">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-sm font-extrabold text-white">{career.title}</div>
                          <div className="text-[11px] text-slate-400 font-normal">{career.category}</div>
                        </div>
                        <button
                          onClick={() => onRemoveCareer(career.id)}
                          className="p-1 text-slate-500 hover:text-rose-400"
                          title="Remove from comparison"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      {match !== undefined && (
                        <div className="mt-2 flex items-baseline gap-1.5">
                          <span className="font-mono text-2xl font-extrabold text-indigo-400 tabular-nums">
                            {match}%
                          </span>
                          <span className="text-[10px] uppercase font-semibold text-slate-400">
                            Profile Match
                          </span>
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {/* Row 1: Compensation */}
              <tr>
                <td className="py-3 px-4 text-slate-400 font-medium">Estimated Compensation</td>
                {selectedCareers.map(career => (
                  <td key={career.id} className="py-3 px-4 text-slate-200">
                    <div className="font-mono font-bold text-emerald-400">{career.salaryRange.median} median</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Entry: {career.salaryRange.entry} · Senior: {career.salaryRange.senior}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row 2: Required Skills */}
              <tr>
                <td className="py-3 px-4 text-slate-400 font-medium">Core Required Skills</td>
                {selectedCareers.map(career => (
                  <td key={career.id} className="py-3 px-4 text-slate-300">
                    <div className="space-y-1">
                      {career.requiredSkills.map(req => {
                        const hasSkill = userSkillNames.has(req.name.toLowerCase());
                        return (
                          <div key={req.name} className="flex items-center gap-1.5">
                            <span className={hasSkill ? 'text-emerald-400' : 'text-slate-600'}>
                              {hasSkill ? '✓' : '○'}
                            </span>
                            <span className={hasSkill ? 'text-white font-medium' : 'text-slate-400'}>
                              {req.name} ({req.minProficiency})
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row 3: Education & Entry Routes */}
              <tr>
                <td className="py-3 px-4 text-slate-400 font-medium">Education Prerequisites</td>
                {selectedCareers.map(career => (
                  <td key={career.id} className="py-3 px-4 text-slate-300 leading-relaxed">
                    <ul className="space-y-1 list-disc list-inside text-[11px]">
                      {career.educationPathways.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Row 4: Entry Level Roles */}
              <tr>
                <td className="py-3 px-4 text-slate-400 font-medium">Typical Entry-Level Roles</td>
                {selectedCareers.map(career => (
                  <td key={career.id} className="py-3 px-4 text-slate-300">
                    <div className="flex flex-wrap gap-1">
                      {career.entryLevelRoles.map(r => (
                        <span key={r} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px]">
                          {r}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row 5: Work Environment & Collaboration */}
              <tr>
                <td className="py-3 px-4 text-slate-400 font-medium">Work Environment & Style</td>
                {selectedCareers.map(career => (
                  <td key={career.id} className="py-3 px-4 text-slate-300 text-[11px] leading-relaxed">
                    <div>{career.workEnvironment}</div>
                    <div className="mt-1 text-slate-400">
                      Teamwork: {career.workPreferenceAlignment.teamwork}/5 · Math Focus: {career.workPreferenceAlignment.mathComfort}/5
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row 6: Roadmap Duration & Action */}
              <tr>
                <td className="py-3 px-4 text-slate-400 font-medium">Roadmap Runway</td>
                {selectedCareers.map(career => (
                  <td key={career.id} className="py-3 px-4">
                    <div className="font-mono font-bold text-white mb-2">
                      {career.typicalDurationMonths} Months (4 Phases)
                    </div>
                    <button
                      onClick={() => {
                        onStartRoadmap(career);
                        onClose();
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors whitespace-nowrap"
                    >
                      <span>Activate Roadmap</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
