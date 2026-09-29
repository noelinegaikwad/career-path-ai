import React, { useEffect, useState } from 'react';
import { Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface AnalysisLoadingProps {
  onComplete: () => void;
}

const ANALYSIS_STAGES = [
  'Analyzing your profile...',
  'Comparing your skills...',
  'Mapping your interests...',
  'Evaluating career alignment...',
  'Identifying skill gaps...',
  'Building your recommended roadmap...'
];

export const AnalysisLoading: React.FC<AnalysisLoadingProps> = ({ onComplete }) => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStageIdx(prev => {
        if (prev < ANALYSIS_STAGES.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, [onComplete]);

  const progressPercent = Math.round(((currentStageIdx + 1) / ANALYSIS_STAGES.length) * 100);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl backdrop-blur-md">
        <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-950/80 border border-indigo-800/80">
          <Compass className="h-8 w-8 text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
          <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-indigo-300 animate-pulse" />
        </div>

        <h2 className="text-xl font-bold text-white">Generating Career Alignment</h2>
        <p className="mt-1 text-xs text-slate-400">
          Processing deterministic weighted scoring model
        </p>

        {/* Progress Bar */}
        <div className="mt-6 mb-4">
          <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-mono">
            <span>Evaluating taxonomy</span>
            <span className="text-indigo-400 font-semibold tabular-nums">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Step-by-step verification checklist */}
        <div className="mt-6 space-y-2 text-left">
          {ANALYSIS_STAGES.map((msg, idx) => {
            const isFinished = currentStageIdx > idx;
            const isCurrent = currentStageIdx === idx;
            return (
              <div
                key={msg}
                className={`flex items-center gap-2.5 text-xs transition-opacity ${
                  isCurrent ? 'text-white font-medium' : isFinished ? 'text-slate-400' : 'text-slate-600 opacity-40'
                }`}
              >
                {isFinished ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                ) : isCurrent ? (
                  <div className="h-4 w-4 rounded-full border-2 border-indigo-400 border-t-transparent animate-spin shrink-0" />
                ) : (
                  <div className="h-4 w-4 rounded-full border border-slate-700 shrink-0" />
                )}
                <span>{msg}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
