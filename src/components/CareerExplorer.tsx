import React, { useState, useMemo } from 'react';
import { Career, CareerRecommendation } from '../types';
import { CAREER_CATEGORIES } from '../data/careersData';
import { Search, Filter, Bookmark, BookmarkCheck, ArrowRight, Layers, ArrowUpDown, Clock, Check, X } from 'lucide-react';

interface CareerExplorerProps {
  careers: Career[];
  recommendations: CareerRecommendation[];
  savedCareerIds: string[];
  onToggleSaveCareer: (careerId: string) => void;
  onViewCareerDetail: (career: Career) => void;
  onStartRoadmap: (career: Career) => void;
  selectedCompareCareers: Career[];
  onToggleCompareCareer: (career: Career) => void;
  onOpenComparisonModal: () => void;
  onClearCompare: () => void;
}

export const CareerExplorer: React.FC<CareerExplorerProps> = ({
  careers,
  recommendations,
  savedCareerIds,
  onToggleSaveCareer,
  onViewCareerDetail,
  onStartRoadmap,
  selectedCompareCareers,
  onToggleCompareCareer,
  onOpenComparisonModal,
  onClearCompare
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'match' | 'title' | 'duration'>('match');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  // Map careerId to profile match score if recommendations exist
  const matchScoreMap = useMemo(() => {
    const map = new Map<string, number>();
    recommendations.forEach(r => map.set(r.career.id, r.profileMatch));
    return map;
  }, [recommendations]);

  // Filtered and sorted careers
  const filteredCareers = useMemo(() => {
    return careers.filter(career => {
      // Saved filter
      if (showSavedOnly && !savedCareerIds.includes(career.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && career.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'All' && career.difficulty.toLowerCase() !== selectedDifficulty.toLowerCase()) {
        return false;
      }

      // Search query (matches title, description, skills, category, entry roles)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = career.title.toLowerCase().includes(q);
        const matchesCategory = career.category.toLowerCase().includes(q) || career.subcategory.toLowerCase().includes(q);
        const matchesDesc = career.description.toLowerCase().includes(q);
        const matchesSkills = career.requiredSkills.some(s => s.name.toLowerCase().includes(q));
        const matchesRoles = career.entryLevelRoles.some(r => r.toLowerCase().includes(q));
        const matchesIndustry = career.industries.some(i => i.toLowerCase().includes(q));

        if (!matchesTitle && !matchesCategory && !matchesDesc && !matchesSkills && !matchesRoles && !matchesIndustry) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'match') {
        const scoreA = matchScoreMap.get(a.id) || 0;
        const scoreB = matchScoreMap.get(b.id) || 0;
        return scoreB - scoreA;
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'duration') {
        return a.typicalDurationMonths - b.typicalDurationMonths;
      }
      return 0;
    });
  }, [careers, searchQuery, selectedCategory, selectedDifficulty, sortBy, showSavedOnly, savedCareerIds, matchScoreMap]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 pb-32">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-2 px-2.5 py-1 text-[11px] font-medium text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 rounded-md">
            <span>O*NET & ISCO-08 Standardized Global Taxonomy</span>
            <span aria-hidden="true">·</span>
            <span>Extensible to 10,000+ Occupations</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Global Career Explorer
          </h1>
          <p className="mt-1 text-xs text-slate-400 max-w-2xl">
            Explore occupations across 20+ disciplines. The platform is architected around scalable international labor standards so new careers can be ingested without changing the recommendation engine.
          </p>
        </div>
      </div>

      {/* Search & Control Bar */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 mb-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by career, skill (Java, Python, Anatomy, CAD), industry, or role..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-slate-500 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Difficulty Dropdown */}
          <div className="flex items-center gap-2">
            <select
              value={selectedDifficulty}
              onChange={e => setSelectedDifficulty(e.target.value)}
              aria-label="Filter by difficulty"
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-300 focus:border-indigo-500 focus:outline-none"
            >
              <option value="All">All Levels</option>
              <option value="Entry">Entry Level</option>
              <option value="Moderate">Moderate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              aria-label="Sort careers by"
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-300 focus:border-indigo-500 focus:outline-none"
            >
              <option value="match">Sort by Profile Match</option>
              <option value="title">Sort by Title (A–Z)</option>
              <option value="duration">Sort by Roadmap Duration</option>
            </select>

            {/* Saved Toggle */}
            <button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap ${
                showSavedOnly
                  ? 'border-indigo-500 bg-indigo-950 text-indigo-200'
                  : 'border-slate-700 bg-slate-950 text-slate-400 hover:text-white'
              }`}
            >
              Saved ({savedCareerIds.length})
            </button>
          </div>
        </div>

        {/* Category Horizontal Filter Buttons */}
        <div className="pt-2 border-t border-slate-800/80">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            {CAREER_CATEGORIES.map(cat => {
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Count & Active Filters Indicator */}
      <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
        <div>
          Showing <span className="font-mono text-white font-bold tabular-nums">{filteredCareers.length}</span> careers
          {selectedCategory !== 'All' && <span> in <span className="text-indigo-400 font-medium">{selectedCategory}</span></span>}
        </div>
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedDifficulty('All');
              setShowSavedOnly(false);
            }}
            className="text-xs text-indigo-400 hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Careers Grid */}
      {filteredCareers.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-12 text-center">
          <Layers className="mx-auto h-10 w-10 text-slate-600 mb-3" />
          <h3 className="text-base font-semibold text-white">No Matching Careers Found</h3>
          <p className="mt-1 text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search keywords, switching categories, or resetting difficulty filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map(career => {
            const isSaved = savedCareerIds.includes(career.id);
            const isComparing = selectedCompareCareers.some(c => c.id === career.id);
            const profileMatch = matchScoreMap.get(career.id);

            return (
              <div
                key={career.id}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                      <span>{career.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{career.subcategory}</span>
                    </div>

                    <button
                      onClick={() => onToggleSaveCareer(career.id)}
                      className={`p-1.5 rounded-md transition-colors ${
                        isSaved ? 'text-indigo-400 bg-indigo-950/60' : 'text-slate-500 hover:text-white'
                      }`}
                      title="Bookmark career"
                    >
                      {isSaved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                    </button>
                  </div>

                  <h3 className="mt-2 text-base font-bold text-white">{career.title}</h3>

                  {/* Profile match score (if assessment completed) */}
                  {profileMatch !== undefined && (
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-mono text-xl font-bold text-indigo-400 tabular-nums">
                        {profileMatch}%
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                        Profile Match
                      </span>
                    </div>
                  )}

                  <p className="mt-3 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {career.description}
                  </p>

                  {/* Core skills */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-medium text-slate-400">Core Required Skills:</span>
                    <div className="mt-1.5 text-xs text-slate-300 flex flex-wrap gap-1">
                      {career.requiredSkills.slice(0, 3).map((s, idx) => (
                        <span key={s.name}>
                          {s.name}{idx < 2 ? ' · ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Entry roles & duration */}
                  <div className="mt-3 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Entry Roles: {career.entryLevelRoles[0] || 'Junior Specialist'}</span>
                    <span className="font-mono text-slate-300">{career.typicalDurationMonths} Mo</span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <label className="flex items-center gap-1.5 text-xs text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isComparing}
                      onChange={() => onToggleCompareCareer(career)}
                      className="rounded border-slate-700 text-indigo-600 focus:ring-0"
                    />
                    <span>Compare</span>
                  </label>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onViewCareerDetail(career)}
                      className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-md transition-colors"
                    >
                      Dossier
                    </button>
                    <button
                      onClick={() => onStartRoadmap(career)}
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
      )}

      {/* Floating Bottom Comparison Dock (When 1-3 careers selected) */}
      {selectedCompareCareers.length > 0 && (
        <div className="fixed bottom-4 left-4 right-4 max-w-2xl mx-auto z-30 rounded-xl border border-indigo-500/50 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-md flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-mono font-bold text-white">
              {selectedCompareCareers.length}
            </span>
            <div className="text-xs">
              <span className="text-white font-medium">Selected for Comparison: </span>
              <span className="text-slate-400">
                {selectedCompareCareers.map(c => c.title).join(', ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClearCompare}
              className="px-2.5 py-1 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Clear
            </button>
            <button
              onClick={onOpenComparisonModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
            >
              <span>Compare Now</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
