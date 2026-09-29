import React, { useState, useEffect } from 'react';
import { AdminAnalytics } from '../types';
import { apiService } from '../services/apiService';
import { Users, FileText, CheckCircle2, TrendingUp, BarChart2, PieChart, ShieldAlert, Award, AlertCircle } from 'lucide-react';

interface AdminDashboardProps {
  onBackToApp: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToApp }) => {
  const [stats, setStats] = useState<AdminAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getAdminAnalytics().then(data => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  if (loading || !stats) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-slate-400">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent mb-3" />
        <p className="text-xs">Loading analytics repository...</p>
      </div>
    );
  }

  // Find max category count for SVG bar chart scaling
  const maxCategoryCount = Math.max(...stats.topCategories.map(c => c.count), 1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>Administrator Telemetry Console</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Platform Analytics & Trends
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Real-time assessment volume, occupational category interest distribution, and global skill gap trends.
          </p>
        </div>

        <button
          onClick={onBackToApp}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          Return to Portal
        </button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Total Registered Candidates</span>
            <Users className="h-4 w-4 text-indigo-400" />
          </div>
          <div className="mt-2 font-mono text-3xl font-extrabold text-white tabular-nums">
            {stats.totalUsers}
          </div>
          <div className="mt-1 text-[11px] text-emerald-400 flex items-center gap-1">
            <span>+14% new this month</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Assessments Processed</span>
            <FileText className="h-4 w-4 text-sky-400" />
          </div>
          <div className="mt-2 font-mono text-3xl font-extrabold text-white tabular-nums">
            {stats.totalAssessments}
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            Avg 4.8 recommendations / run
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Completion Rate</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="mt-2 font-mono text-3xl font-extrabold text-white tabular-nums">
            {stats.completionRate}%
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            6-step questionnaire funnel
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Roadmap Engagement</span>
            <TrendingUp className="h-4 w-4 text-purple-400" />
          </div>
          <div className="mt-2 font-mono text-3xl font-extrabold text-white tabular-nums">
            74.2%
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            Active milestone tracking
          </div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Horizontal Bar Chart: Category Distribution */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <BarChart2 className="h-4 w-4 text-indigo-400" />
              <span>Most Explored Career Categories</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">Volume</span>
          </div>

          <div className="space-y-3 pt-2">
            {stats.topCategories.map(cat => {
              const barWidth = Math.round((cat.count / maxCategoryCount) * 100);
              return (
                <div key={cat.category} className="space-y-1 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span className="truncate pr-2">{cat.category}</span>
                    <span className="font-mono text-slate-400 tabular-nums">{cat.count}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Activity Line Chart & Doughnut Split */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-sky-400" />
                <span>Weekly Assessment Traffic Trend</span>
              </h2>
              <span className="text-xs text-slate-500 font-mono">7-Day Trajectory</span>
            </div>

            {/* SVG Line Chart */}
            <div className="h-44 w-full pt-4">
              <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal gridlines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="#1e293b" strokeDasharray="3 3" />
                <line x1="0" y1="70" x2="400" y2="70" stroke="#1e293b" strokeDasharray="3 3" />
                <line x1="0" y1="110" x2="400" y2="110" stroke="#1e293b" />

                {/* Line coordinates */}
                <path
                  d="M 20 80 Q 80 45, 140 65 T 260 25 T 380 40 L 380 110 L 20 110 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M 20 80 Q 80 45, 140 65 T 260 25 T 380 40"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Data points */}
                {[
                  { x: 20, y: 80, val: 12 },
                  { x: 80, y: 50, val: 19 },
                  { x: 140, y: 65, val: 15 },
                  { x: 200, y: 40, val: 24 },
                  { x: 260, y: 25, val: 31 },
                  { x: 320, y: 32, val: 28 },
                  { x: 380, y: 40, val: 22 },
                ].map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r="4"
                    fill="#312e81"
                    stroke="#a5b4fc"
                    strokeWidth="2"
                  />
                ))}
              </svg>
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1 px-1">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* Education background breakdown */}
          <div className="pt-4 border-t border-slate-800 text-xs">
            <span className="font-semibold text-white block mb-2">Candidate Education Distribution</span>
            <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
              <div className="rounded bg-slate-950 p-2 border border-slate-800">
                <span className="text-slate-400 block">Undergraduate</span>
                <span className="font-mono text-indigo-400 font-bold">58%</span>
              </div>
              <div className="rounded bg-slate-950 p-2 border border-slate-800">
                <span className="text-slate-400 block">Postgraduate</span>
                <span className="font-mono text-indigo-400 font-bold">26%</span>
              </div>
              <div className="rounded bg-slate-950 p-2 border border-slate-800">
                <span className="text-slate-400 block">Career Switcher</span>
                <span className="font-mono text-indigo-400 font-bold">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Tables: Most Common Skill Gaps & Top Recommended Careers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most common skill gaps */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-400" />
            <span>Most Common Candidate Skill Gaps Across Cohorts</span>
          </h2>
          <p className="text-xs text-slate-400">
            Skills most frequently missing when matching against target job prerequisites.
          </p>

          <div className="space-y-2 pt-2 text-xs">
            {stats.mostCommonSkillGaps.map((item, idx) => (
              <div
                key={item.skill}
                className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-950/60"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-500 font-semibold">#{idx + 1}</span>
                  <span className="text-slate-200">{item.skill}</span>
                </div>
                <span className="font-mono text-amber-400 font-bold tabular-nums">
                  {item.frequency}% of users
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top recommended careers */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <Award className="h-4 w-4 text-emerald-400" />
            <span>Top Recommended Careers (Most Frequent Matches)</span>
          </h2>
          <p className="text-xs text-slate-400">
            Occupations generating the highest composite Profile Match ratings.
          </p>

          <div className="space-y-2 pt-2 text-xs">
            {stats.topCareersRecommended.map((item, idx) => (
              <div
                key={item.title}
                className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-950/60"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-indigo-400 font-semibold">#{idx + 1}</span>
                  <span className="text-slate-200 font-medium">{item.title}</span>
                </div>
                <span className="font-mono text-slate-300 font-semibold tabular-nums">
                  {item.count} matches
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
