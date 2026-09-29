import React, { useState, useEffect } from 'react';
import { Career, RoadmapModule, UserProgressRecord, UserSkill } from '../types';
import { CAREERS_DATABASE } from '../data/careersData';
import { recommendationEngine } from '../engine/recommendationEngine';
import { storageService } from '../services/storageService';
import { CheckCircle2, Circle, Clock, Check, Save, ArrowRight, BookOpen, Layers, Sparkles, MessageSquare } from 'lucide-react';

interface PersonalizedRoadmapProps {
  currentCareer: Career | null;
  userSkills: UserSkill[];
  learningHoursPerWeek: number;
  onSelectCareer: (career: Career) => void;
  onShowToast: (message: string) => void;
}

export const PersonalizedRoadmap: React.FC<PersonalizedRoadmapProps> = ({
  currentCareer,
  userSkills,
  learningHoursPerWeek,
  onSelectCareer,
  onShowToast
}) => {
  const activeCareer = currentCareer || CAREERS_DATABASE[0];

  const [modules, setModules] = useState<RoadmapModule[]>([]);
  const [completedModuleIds, setCompletedModuleIds] = useState<string[]>([]);
  const [notesMap, setNotesMap] = useState<Record<string, string>>({});
  const [activeNoteModalModuleId, setActiveNoteModalModuleId] = useState<string | null>(null);
  const [tempNoteText, setTempNoteText] = useState('');

  // Load or generate roadmap for active career
  useEffect(() => {
    if (!activeCareer) return;

    const savedProgress: UserProgressRecord = storageService.getRoadmapProgress(activeCareer.id);
    setCompletedModuleIds(savedProgress.completedModules || []);
    setNotesMap(savedProgress.itemNotes || {});

    const generatedModules = recommendationEngine.getRoadmapEngine().generatePersonalizedRoadmap(
      activeCareer,
      userSkills,
      learningHoursPerWeek,
      savedProgress.completedModules || []
    );

    setModules(generatedModules);
  }, [activeCareer, userSkills, learningHoursPerWeek]);

  // Toggle module completion
  const handleToggleModule = (modId: string) => {
    let updated: string[];
    if (completedModuleIds.includes(modId)) {
      updated = completedModuleIds.filter(id => id !== modId);
    } else {
      updated = [...completedModuleIds, modId];
    }
    setCompletedModuleIds(updated);

    // Save to storage
    const progressRecord: UserProgressRecord = {
      careerId: activeCareer.id,
      roadmapId: `rdm-${activeCareer.id}`,
      completedModules: updated,
      itemNotes: notesMap,
      lastUpdated: new Date().toISOString()
    };
    storageService.saveRoadmapProgress(progressRecord);
    onShowToast(updated.includes(modId) ? 'Module marked as completed!' : 'Module marked in progress');
  };

  const handleSaveNote = () => {
    if (!activeNoteModalModuleId) return;
    const updatedNotes = {
      ...notesMap,
      [activeNoteModalModuleId]: tempNoteText
    };
    setNotesMap(updatedNotes);

    const progressRecord: UserProgressRecord = {
      careerId: activeCareer.id,
      roadmapId: `rdm-${activeCareer.id}`,
      completedModules: completedModuleIds,
      itemNotes: updatedNotes,
      lastUpdated: new Date().toISOString()
    };
    storageService.saveRoadmapProgress(progressRecord);
    setActiveNoteModalModuleId(null);
    onShowToast('Notes updated successfully');
  };

  // Calculate percentage
  const totalCount = modules.length;
  const doneCount = completedModuleIds.filter(id => modules.some(m => m.id === id)).length;
  const progressPercent = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Top Header & Career Selector */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-indigo-400 font-medium mb-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Curriculum Scaled to {learningHoursPerWeek} Hours / Week</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Personalized Learning Roadmap
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            A 4-phase structured pathway tailored to your verified skills and target milestones.
          </p>
        </div>

        {/* Career Selector Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400 whitespace-nowrap">Target Career:</label>
          <select
            value={activeCareer.id}
            onChange={e => {
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

      {/* Progress Metric Banner */}
      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-950/80 border border-indigo-800/80 text-indigo-400">
            <BookOpen className="h-7 w-7" />
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Active Objective</div>
            <div className="text-lg font-bold text-white">{activeCareer.title}</div>
            <div className="text-xs text-slate-400">
              {doneCount} of {totalCount} Phases Mastered · {activeCareer.typicalDurationMonths} Months Estimated Runway
            </div>
          </div>
        </div>

        <div className="w-full sm:w-64 space-y-2">
          <div className="flex justify-between text-xs text-slate-300">
            <span>Overall Roadmap Progress</span>
            <span className="font-mono font-bold text-indigo-400 tabular-nums">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Roadmap Modules List */}
      <div className="mt-10 space-y-6">
        {modules.map((mod, idx) => {
          const isDone = completedModuleIds.includes(mod.id);
          const hasNote = Boolean(notesMap[mod.id]);

          return (
            <div
              key={mod.id}
              className={`rounded-xl border transition-all ${
                isDone
                  ? 'border-emerald-900/60 bg-emerald-950/10'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              } p-6 sm:p-7`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono font-semibold text-indigo-400 uppercase">
                      Phase {mod.phase}: {mod.phaseTitle}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{mod.weekRange}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{mod.title}</span>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                    {mod.description}
                  </p>

                  {/* Key Skills Chip Set */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="text-slate-400 text-[11px] mr-1">Target Competencies:</span>
                    {mod.keySkills.map(sk => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300 font-medium text-[11px]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                  {/* Practical Milestone Project */}
                  <div className="mt-3 rounded-lg border border-slate-800/80 bg-slate-950/60 p-3 text-xs">
                    <span className="font-semibold text-indigo-300">Phase Portfolio Milestone:</span>{' '}
                    <span className="text-slate-300">{mod.projectMilestone}</span>
                  </div>

                  {/* Note display if saved */}
                  {hasNote && (
                    <div className="mt-2 text-xs text-amber-300/90 bg-amber-950/30 border border-amber-900/40 rounded p-2.5">
                      <span className="font-semibold">Candidate Notes: </span>
                      {notesMap[mod.id]}
                    </div>
                  )}
                </div>

                {/* Right controls: Checkbox & Note Button */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0 pt-2 sm:pt-0">
                  <button
                    onClick={() => handleToggleModule(mod.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                      isDone
                        ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {isDone ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <Circle className="h-4 w-4 text-slate-500" />
                        <span>Mark Done</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setActiveNoteModalModuleId(mod.id);
                      setTempNoteText(notesMap[mod.id] || '');
                    }}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-indigo-300 transition-colors"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>{hasNote ? 'Edit Notes' : 'Add Notes'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note modal dialog */}
      {activeNoteModalModuleId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-4">
            <h3 className="text-base font-bold text-white">Add Phase Notes / Progress Details</h3>
            <textarea
              rows={4}
              value={tempNoteText}
              onChange={e => setTempNoteText(e.target.value)}
              placeholder="Record tutorials completed, code repository links, study hours, or questions..."
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-xs text-white focus:border-indigo-500 focus:outline-none"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setActiveNoteModalModuleId(null)}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNote}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
