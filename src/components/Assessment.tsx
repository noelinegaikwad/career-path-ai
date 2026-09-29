import React, { useState, useEffect } from 'react';
import { AssessmentData, ProficiencyLevel, UserSkill } from '../types';
import { AVAILABLE_INTERESTS, AVAILABLE_STRENGTHS, INITIAL_SKILLS_LIBRARY } from '../data/careersData';
import { Check, ChevronRight, ChevronLeft, Plus, X, Sparkles, BookOpen, Layers, Heart, Sliders, Award, Target, RotateCcw } from 'lucide-react';

interface AssessmentProps {
  initialData?: AssessmentData | null;
  onSubmit: (data: AssessmentData) => void;
  onCancel?: () => void;
}

const BLANK_EDUCATION = {
  level: "Bachelor's Degree",
  degree: '',
  specialization: '',
  graduationYear: '',
  currentStatus: 'Student' as const,
  scoreOrCgpa: ''
};

const BLANK_WORK_PREFERENCES = {
  teamwork: 3,
  buildingVsAnalyzing: 3,
  creativeVsStructured: 3,
  remotePreference: 'Hybrid' as const,
  companyType: 'Flexible' as const,
  mathComfort: 3,
  publicSpeakingComfort: 3,
  leadershipInterest: 3,
  peopleFacing: 3,
  practicalVsTheoretical: 3
};

const BLANK_CAREER_GOALS = {
  desiredRole: '',
  preferredIndustry: 'Technology',
  preferredLocation: '',
  expectedSalaryRange: '',
  learningHoursPerWeek: 10,
  timelineIntent: 'Immediate Employment' as const,
  shortTermGoal: '',
  longTermGoal: ''
};

export const Assessment: React.FC<AssessmentProps> = ({
  initialData,
  onSubmit,
  onCancel
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Education (Starts completely blank)
  const [education, setEducation] = useState(initialData?.education || BLANK_EDUCATION);

  // Step 2: Skills (Starts empty)
  const [skills, setSkills] = useState<UserSkill[]>(initialData?.skills || []);
  const [customSkillInput, setCustomSkillInput] = useState('');
  const [customSkillProficiency, setCustomSkillProficiency] = useState<ProficiencyLevel>('Intermediate');

  // Step 3: Interests (Starts empty)
  const [interests, setInterests] = useState<string[]>(initialData?.interests || []);

  // Step 4: Work Preferences (Neutral 3/5 baseline)
  const [workPreferences, setWorkPreferences] = useState(initialData?.workPreferences || BLANK_WORK_PREFERENCES);

  // Step 5: Strengths (Starts empty)
  const [strengths, setStrengths] = useState<string[]>(initialData?.strengths || []);

  // Step 6: Career Goals (Starts completely blank)
  const [careerGoals, setCareerGoals] = useState(initialData?.careerGoals || BLANK_CAREER_GOALS);

  // Reset form to blank slate
  const handleResetToBlank = () => {
    setEducation(BLANK_EDUCATION);
    setSkills([]);
    setInterests([]);
    setWorkPreferences(BLANK_WORK_PREFERENCES);
    setStrengths([]);
    setCareerGoals(BLANK_CAREER_GOALS);
    setValidationError(null);
    setCurrentStep(1);
  };

  // Synchronize when initialData prop changes
  useEffect(() => {
    if (initialData) {
      setEducation(initialData.education || BLANK_EDUCATION);
      setSkills(initialData.skills || []);
      setInterests(initialData.interests || []);
      setWorkPreferences(initialData.workPreferences || BLANK_WORK_PREFERENCES);
      setStrengths(initialData.strengths || []);
      setCareerGoals(initialData.careerGoals || BLANK_CAREER_GOALS);
    } else {
      handleResetToBlank();
    }
  }, [initialData]);

  const [validationError, setValidationError] = useState<string | null>(null);

  // Skill management helpers
  const handleToggleSkill = (skillName: string, category: string) => {
    const existingIndex = skills.findIndex(s => s.name.toLowerCase() === skillName.toLowerCase());
    if (existingIndex >= 0) {
      setSkills(skills.filter((_, idx) => idx !== existingIndex));
    } else {
      setSkills([...skills, { name: skillName, proficiency: 'Intermediate', category }]);
    }
  };

  const handleUpdateProficiency = (skillName: string, level: ProficiencyLevel) => {
    setSkills(skills.map(s => s.name.toLowerCase() === skillName.toLowerCase() ? { ...s, proficiency: level } : s));
  };

  const handleAddCustomSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSkillInput.trim()) return;
    const norm = customSkillInput.trim();
    if (!skills.some(s => s.name.toLowerCase() === norm.toLowerCase())) {
      setSkills([...skills, { name: norm, proficiency: customSkillProficiency, category: 'Custom' }]);
    }
    setCustomSkillInput('');
  };

  // Interests toggle
  const handleToggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  // Strengths toggle
  const handleToggleStrength = (st: string) => {
    if (strengths.includes(st)) {
      setStrengths(strengths.filter(s => s !== st));
    } else {
      setStrengths([...strengths, st]);
    }
  };

  // Quick Demo Profiles
  const loadQuickDemo = (profileType: 'tech' | 'health' | 'finance' | 'creative') => {
    if (profileType === 'tech') {
      setEducation({
        level: "Bachelor's Degree",
        degree: 'Bachelor of Computer Applications (BCA)',
        specialization: 'Software Engineering',
        graduationYear: '2026',
        currentStatus: 'Student',
        scoreOrCgpa: '8.8 CGPA'
      });
      setSkills([
        { name: 'Java', proficiency: 'Intermediate', category: 'Programming' },
        { name: 'Python', proficiency: 'Intermediate', category: 'Programming' },
        { name: 'PostgreSQL', proficiency: 'Intermediate', category: 'Database' },
        { name: 'REST APIs', proficiency: 'Intermediate', category: 'Web' },
        { name: 'Git', proficiency: 'Intermediate', category: 'Cloud/DevOps' },
        { name: 'Data Structures & Algorithms', proficiency: 'Beginner', category: 'Programming' }
      ]);
      setInterests(['Technology', 'AI/ML', 'Engineering', 'Problem Solving']);
      setWorkPreferences({
        teamwork: 4,
        buildingVsAnalyzing: 2,
        creativeVsStructured: 3,
        remotePreference: 'Hybrid',
        companyType: 'Flexible',
        mathComfort: 4,
        publicSpeakingComfort: 3,
        leadershipInterest: 3,
        peopleFacing: 2,
        practicalVsTheoretical: 2
      });
      setStrengths(['Problem solving', 'Logical thinking', 'Attention to detail', 'Analytical thinking']);
      setCareerGoals({
        desiredRole: 'Software Developer',
        preferredIndustry: 'Technology',
        preferredLocation: 'Bangalore / Remote',
        expectedSalaryRange: '$65,000 - $95,000',
        learningHoursPerWeek: 14,
        timelineIntent: 'Immediate Employment',
        shortTermGoal: 'Land a software engineer role building distributed backend APIs.',
        longTermGoal: 'Grow into a Principal Solutions Architect.'
      });
    } else if (profileType === 'health') {
      setEducation({
        level: "Bachelor's Degree",
        degree: 'Bachelor of Science (B.Sc)',
        specialization: 'Biomedical Science & Nursing',
        graduationYear: '2025',
        currentStatus: 'Recent Graduate',
        scoreOrCgpa: '3.8 GPA'
      });
      setSkills([
        { name: 'Patient Assessment & Triage', proficiency: 'Advanced', category: 'Healthcare' },
        { name: 'Anatomy & Physiology', proficiency: 'Advanced', category: 'Healthcare' },
        { name: 'Pharmacology Administration', proficiency: 'Intermediate', category: 'Healthcare' }
      ]);
      setInterests(['Healthcare', 'Science', 'Social Impact', 'Public Service']);
      setWorkPreferences({
        teamwork: 5,
        buildingVsAnalyzing: 3,
        creativeVsStructured: 1,
        remotePreference: 'Office',
        companyType: 'Established',
        mathComfort: 3,
        publicSpeakingComfort: 4,
        leadershipInterest: 4,
        peopleFacing: 5,
        practicalVsTheoretical: 1
      });
      setStrengths(['Empathy', 'Communication', 'Attention to detail', 'Decision making']);
      setCareerGoals({
        desiredRole: 'Clinical Healthcare Specialist / Registered Nurse',
        preferredIndustry: 'Healthcare',
        preferredLocation: 'Regional Hospital Hub',
        expectedSalaryRange: '$55,000 - $80,000',
        learningHoursPerWeek: 10,
        timelineIntent: 'Immediate Employment',
        shortTermGoal: 'Obtain clinical licensing and begin hospital bedside care.',
        longTermGoal: 'Become a Clinical Nurse Specialist or Hospital Department Director.'
      });
    } else if (profileType === 'finance') {
      setEducation({
        level: "Bachelor's Degree",
        degree: 'Bachelor of Commerce (B.Com)',
        specialization: 'Finance & Accounting',
        graduationYear: '2025',
        currentStatus: 'Student',
        scoreOrCgpa: '3.9 GPA'
      });
      setSkills([
        { name: 'Excel', proficiency: 'Advanced', category: 'Data/AI' },
        { name: 'Financial Modeling', proficiency: 'Intermediate', category: 'Finance' },
        { name: 'Accounting Principles (GAAP/IFRS)', proficiency: 'Intermediate', category: 'Finance' },
        { name: 'Statistics', proficiency: 'Intermediate', category: 'Data/AI' }
      ]);
      setInterests(['Finance', 'Business', 'Data', 'Mathematics']);
      setWorkPreferences({
        teamwork: 3,
        buildingVsAnalyzing: 5,
        creativeVsStructured: 2,
        remotePreference: 'Hybrid',
        companyType: 'Established',
        mathComfort: 5,
        publicSpeakingComfort: 3,
        leadershipInterest: 3,
        peopleFacing: 3,
        practicalVsTheoretical: 3
      });
      setStrengths(['Analytical thinking', 'Attention to detail', 'Problem solving', 'Logical thinking']);
      setCareerGoals({
        desiredRole: 'Financial Analyst',
        preferredIndustry: 'Finance',
        preferredLocation: 'Financial Capital',
        expectedSalaryRange: '$65,000 - $90,000',
        learningHoursPerWeek: 12,
        timelineIntent: 'Immediate Employment',
        shortTermGoal: 'Join an FP&A team or investment research desk.',
        longTermGoal: 'Attain CFA designation and become Corporate Finance Director.'
      });
    } else {
      // Creative
      setEducation({
        level: "Bachelor's Degree",
        degree: 'Bachelor of Design / Arts',
        specialization: 'Visual Communication',
        graduationYear: '2024',
        currentStatus: 'Career Switcher',
        scoreOrCgpa: '3.7 GPA'
      });
      setSkills([
        { name: 'Figma & Design Systems', proficiency: 'Advanced', category: 'Design' },
        { name: 'User Experience (UX) Research', proficiency: 'Intermediate', category: 'Design' },
        { name: 'Content Marketing & Copywriting', proficiency: 'Intermediate', category: 'Marketing' }
      ]);
      setInterests(['Design', 'Technology', 'Media', 'Business']);
      setWorkPreferences({
        teamwork: 4,
        buildingVsAnalyzing: 2,
        creativeVsStructured: 5,
        remotePreference: 'Remote',
        companyType: 'Startup',
        mathComfort: 2,
        publicSpeakingComfort: 4,
        leadershipInterest: 3,
        peopleFacing: 4,
        practicalVsTheoretical: 2
      });
      setStrengths(['Creativity', 'Empathy', 'Communication', 'Attention to detail']);
      setCareerGoals({
        desiredRole: 'UI/UX Product Designer',
        preferredIndustry: 'Technology',
        preferredLocation: 'Remote',
        expectedSalaryRange: '$60,000 - $85,000',
        learningHoursPerWeek: 15,
        timelineIntent: 'Immediate Employment',
        shortTermGoal: 'Complete 2 UX case studies and transition into product design.',
        longTermGoal: 'Lead design systems as a Principal UX Architect.'
      });
    }
  };

  const validateCurrentStep = (): boolean => {
    setValidationError(null);
    if (currentStep === 1) {
      if (!education.degree.trim()) {
        setValidationError('Please enter your degree or qualification name.');
        return false;
      }
    } else if (currentStep === 2) {
      if (skills.length === 0) {
        setValidationError('Please select or add at least one current skill.');
        return false;
      }
    } else if (currentStep === 3) {
      if (interests.length === 0) {
        setValidationError('Please select at least one field of interest.');
        return false;
      }
    } else if (currentStep === 5) {
      if (strengths.length === 0) {
        setValidationError('Please select at least one core strength.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < 6) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Final submit
        const payload: AssessmentData = {
          education,
          skills,
          interests,
          workPreferences,
          strengths,
          careerGoals
        };
        onSubmit(payload);
      }
    }
  };

  const handleBack = () => {
    setValidationError(null);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onCancel) {
      onCancel();
    }
  };

  const stepsList = [
    { num: 1, title: 'Education', icon: <BookOpen className="h-4 w-4" /> },
    { num: 2, title: 'Skills', icon: <Layers className="h-4 w-4" /> },
    { num: 3, title: 'Interests', icon: <Heart className="h-4 w-4" /> },
    { num: 4, title: 'Work Style', icon: <Sliders className="h-4 w-4" /> },
    { num: 5, title: 'Strengths', icon: <Award className="h-4 w-4" /> },
    { num: 6, title: 'Goals', icon: <Target className="h-4 w-4" /> },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header & Quick Profiles */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Career Assessment
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Provide your background to generate deterministic profile matches and tailored roadmaps.
            </p>
          </div>

          {/* Quick Demo Pre-fill Buttons & Reset */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-slate-500 mr-1">Sample Profiles:</span>
            <button
              type="button"
              onClick={() => loadQuickDemo('tech')}
              className="px-2.5 py-1 text-xs font-medium text-indigo-300 bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-800/80 rounded transition-colors"
            >
              Tech / BCA
            </button>
            <button
              type="button"
              onClick={() => loadQuickDemo('health')}
              className="px-2.5 py-1 text-xs font-medium text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/80 rounded transition-colors"
            >
              Healthcare
            </button>
            <button
              type="button"
              onClick={() => loadQuickDemo('finance')}
              className="px-2.5 py-1 text-xs font-medium text-amber-300 bg-amber-950/80 hover:bg-amber-900 border border-amber-800/80 rounded transition-colors"
            >
              Finance
            </button>
            <button
              type="button"
              onClick={() => loadQuickDemo('creative')}
              className="px-2.5 py-1 text-xs font-medium text-purple-300 bg-purple-950/80 hover:bg-purple-900 border border-purple-800/80 rounded transition-colors"
            >
              Creative
            </button>
            <button
              type="button"
              onClick={handleResetToBlank}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded transition-colors"
              title="Clear all fields to blank"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Clear to Blank</span>
            </button>
          </div>
        </div>

        {/* Step Progress Bar */}
        <div className="mt-8 border-y border-slate-800 py-4">
          <div className="grid grid-cols-6 gap-2">
            {stepsList.map(s => {
              const isPast = currentStep > s.num;
              const isCurrent = currentStep === s.num;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => {
                    if (s.num < currentStep || validateCurrentStep()) {
                      setCurrentStep(s.num);
                    }
                  }}
                  className={`text-left group focus:outline-none transition-colors ${
                    isCurrent ? 'text-indigo-400 font-semibold' : isPast ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className={`flex h-5 w-5 items-center justify-center rounded text-[11px] font-mono ${
                      isCurrent ? 'bg-indigo-600 text-white font-bold' : isPast ? 'bg-slate-800 text-indigo-300' : 'bg-slate-900 text-slate-600'
                    }`}>
                      {isPast ? '✓' : s.num}
                    </span>
                    <span className="hidden sm:inline truncate">{s.title}</span>
                  </div>
                  <div className={`mt-2 h-1 w-full rounded-full transition-colors ${
                    isCurrent ? 'bg-indigo-500' : isPast ? 'bg-indigo-900' : 'bg-slate-800'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Error state */}
      {validationError && (
        <div className="mb-6 rounded-lg border border-rose-800/80 bg-rose-950/50 p-4 text-xs font-medium text-rose-300">
          {validationError}
        </div>
      )}

      {/* Main Step Content Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm">
        {/* STEP 1: EDUCATION */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Step 1 — Education & Academic Background</h2>
              <p className="mt-1 text-xs text-slate-400">
                Understanding your educational foundation helps calibrate academic prerequisite matching.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Education Level</label>
                <select
                  value={education.level}
                  onChange={e => setEducation({ ...education, level: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="High School">High School (12th / Diploma)</option>
                  <option value="Diploma / Associate">Diploma / Associate Degree</option>
                  <option value="Bachelor's Degree">Bachelor's Degree (BCA / B.Tech / B.Sc / B.Com / MBBS)</option>
                  <option value="Master's Degree">Master's Degree (MCA / M.Tech / M.Sc / MBA / MS)</option>
                  <option value="Doctorate / PhD">Doctorate / Ph.D.</option>
                  <option value="Other / Self-Taught">Other / Self-Taught</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Current Candidate Status</label>
                <select
                  value={education.currentStatus}
                  onChange={e => setEducation({ ...education, currentStatus: e.target.value as any })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="Student">Current Student</option>
                  <option value="Recent Graduate">Recent Graduate</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="Career Switcher">Career Switcher</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Degree / Course Name</label>
                <input
                  type="text"
                  placeholder="e.g. BCA, B.Tech, B.Sc Nursing, B.Com"
                  value={education.degree}
                  onChange={e => setEducation({ ...education, degree: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Specialization / Major</label>
                <input
                  type="text"
                  placeholder="e.g. Computer Science, Mechanical, Finance, Biology"
                  value={education.specialization}
                  onChange={e => setEducation({ ...education, specialization: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Graduation Year / Expected Year</label>
                <input
                  type="text"
                  placeholder="e.g. 2026"
                  value={education.graduationYear}
                  onChange={e => setEducation({ ...education, graduationYear: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">CGPA / Percentage / Grade</label>
                <input
                  type="text"
                  placeholder="e.g. 8.5 CGPA or 82%"
                  value={education.scoreOrCgpa}
                  onChange={e => setEducation({ ...education, scoreOrCgpa: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: SKILLS */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Step 2 — Current Skills & Competencies</h2>
              <p className="mt-1 text-xs text-slate-400">
                Select your existing skills and specify your proficiency level (Beginner, Intermediate, Advanced).
              </p>
            </div>

            {/* Custom Skill Input */}
            <form onSubmit={handleAddCustomSkill} className="flex flex-col sm:flex-row gap-2 pb-4 border-b border-slate-800">
              <input
                type="text"
                placeholder="Type a custom skill not listed below..."
                value={customSkillInput}
                onChange={e => setCustomSkillInput(e.target.value)}
                className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
              <select
                value={customSkillProficiency}
                onChange={e => setCustomSkillProficiency(e.target.value as ProficiencyLevel)}
                className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors whitespace-nowrap"
              >
                <Plus className="h-4 w-4" />
                <span>Add Skill</span>
              </button>
            </form>

            {/* Selected Skills List with Proficiency Toggles */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                <span>Your Selected Skills ({skills.length})</span>
                <span className="text-[11px] text-slate-500 font-normal">Click proficiency to adjust</span>
              </div>

              {skills.length === 0 ? (
                <div className="rounded-lg border border-dashed border-slate-800 p-6 text-center text-xs text-slate-500">
                  No skills selected yet. Click any skill from the categories below or add your own.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {skills.map(s => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs"
                    >
                      <span className="font-medium text-white truncate max-w-[140px]">{s.name}</span>
                      <div className="flex items-center gap-1">
                        {(['Beginner', 'Intermediate', 'Advanced'] as ProficiencyLevel[]).map(lvl => (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => handleUpdateProficiency(s.name, lvl)}
                            className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${
                              s.proficiency === lvl
                                ? 'bg-indigo-600 text-white font-semibold'
                                : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => handleToggleSkill(s.name, s.category || 'General')}
                          className="ml-1 p-1 text-slate-500 hover:text-rose-400 transition-colors"
                          title="Remove skill"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Skills Catalog by Category */}
            <div className="pt-4 border-t border-slate-800 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Explore & Add Standard Skills
              </div>

              {['Programming', 'Web', 'Database', 'Data/AI', 'Cloud/DevOps', 'Healthcare', 'Engineering', 'Finance', 'Design'].map(cat => {
                const catSkills = INITIAL_SKILLS_LIBRARY.filter(s => s.category === cat);
                if (catSkills.length === 0) return null;
                return (
                  <div key={cat} className="space-y-1.5">
                    <span className="text-[11px] font-medium text-slate-400">{cat}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {catSkills.map(item => {
                        const isSelected = skills.some(s => s.name.toLowerCase() === item.name.toLowerCase());
                        return (
                          <button
                            key={item.name}
                            type="button"
                            onClick={() => handleToggleSkill(item.name, item.category)}
                            className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
                              isSelected
                                ? 'border-indigo-500 bg-indigo-950/80 text-indigo-200 font-medium'
                                : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                            }`}
                          >
                            {isSelected && <span className="mr-1 text-indigo-400">✓</span>}
                            {item.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: INTERESTS */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Step 3 — Professional & Academic Interests</h2>
              <p className="mt-1 text-xs text-slate-400">
                Select domains you are curious about or enjoy spending time exploring. Choose as many as apply.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {AVAILABLE_INTERESTS.map(interest => {
                const isSelected = interests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleToggleInterest(interest)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left text-xs transition-colors ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-950/70 text-white font-medium'
                        : 'border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <span>{interest}</span>
                    {isSelected && <Check className="h-3.5 w-3.5 text-indigo-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span>Selected {interests.length} interest areas</span>
              <span>Interests account for 20% of your Profile Match</span>
            </div>
          </div>
        )}

        {/* STEP 4: WORK PREFERENCES */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Step 4 — Work Preferences & Environment</h2>
              <p className="mt-1 text-xs text-slate-400">
                Calibrate daily work characteristics to align with how you work best.
              </p>
            </div>

            <div className="space-y-5">
              {/* Slider 1: Team vs Individual */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                  <span>Solo / Independent Focus (1)</span>
                  <span className="font-semibold text-indigo-400 font-mono">
                    {workPreferences.teamwork <= 2 ? 'Independent' : workPreferences.teamwork >= 4 ? 'Collaborative' : 'Balanced'} ({workPreferences.teamwork}/5)
                  </span>
                  <span>Heavy Team Collaboration (5)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={workPreferences.teamwork}
                  onChange={e => setWorkPreferences({ ...workPreferences, teamwork: parseInt(e.target.value) })}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              {/* Slider 2: Building vs Analyzing */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                  <span>Building / Crafting Products (1)</span>
                  <span className="font-semibold text-indigo-400 font-mono">
                    {workPreferences.buildingVsAnalyzing <= 2 ? 'Building' : workPreferences.buildingVsAnalyzing >= 4 ? 'Analyzing' : 'Balanced'} ({workPreferences.buildingVsAnalyzing}/5)
                  </span>
                  <span>Analyzing Data & Research (5)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={workPreferences.buildingVsAnalyzing}
                  onChange={e => setWorkPreferences({ ...workPreferences, buildingVsAnalyzing: parseInt(e.target.value) })}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              {/* Slider 3: Creative vs Structured */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                  <span>Highly Structured / Rules-Based (1)</span>
                  <span className="font-semibold text-indigo-400 font-mono">
                    {workPreferences.creativeVsStructured <= 2 ? 'Structured' : workPreferences.creativeVsStructured >= 4 ? 'Creative' : 'Balanced'} ({workPreferences.creativeVsStructured}/5)
                  </span>
                  <span>Highly Open-Ended / Creative (5)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={workPreferences.creativeVsStructured}
                  onChange={e => setWorkPreferences({ ...workPreferences, creativeVsStructured: parseInt(e.target.value) })}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              {/* Slider 4: Mathematics comfort */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                  <span>Low Math / Qualitative (1)</span>
                  <span className="font-semibold text-indigo-400 font-mono">
                    Math Comfort ({workPreferences.mathComfort}/5)
                  </span>
                  <span>Advanced Quantitative / Math (5)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={workPreferences.mathComfort}
                  onChange={e => setWorkPreferences({ ...workPreferences, mathComfort: parseInt(e.target.value) })}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              {/* Slider 5: People facing */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                  <span>Backstage / Machine-Centric (1)</span>
                  <span className="font-semibold text-indigo-400 font-mono">
                    People-Facing ({workPreferences.peopleFacing}/5)
                  </span>
                  <span>Client / Patient / People-Facing (5)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={workPreferences.peopleFacing}
                  onChange={e => setWorkPreferences({ ...workPreferences, peopleFacing: parseInt(e.target.value) })}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              {/* Discrete Selectors: Remote & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Workplace Setting</label>
                  <select
                    value={workPreferences.remotePreference}
                    onChange={e => setWorkPreferences({ ...workPreferences, remotePreference: e.target.value as any })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="Remote">Remote Preferred</option>
                    <option value="Hybrid">Hybrid (Mix of office & remote)</option>
                    <option value="Office">On-Site / Physical Facility</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Organization Type</label>
                  <select
                    value={workPreferences.companyType}
                    onChange={e => setWorkPreferences({ ...workPreferences, companyType: e.target.value as any })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="Startup">Early-Stage Startup</option>
                    <option value="Established">Established Corporate / Hospital / Agency</option>
                    <option value="Flexible">Open / Flexible</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: STRENGTHS */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Step 5 — Core Transferable Strengths</h2>
              <p className="mt-1 text-xs text-slate-400">
                Identify transferable cognitive and interpersonal strengths that colleagues or mentors recognize in you.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {AVAILABLE_STRENGTHS.map(st => {
                const isSelected = strengths.includes(st);
                return (
                  <button
                    key={st}
                    type="button"
                    onClick={() => handleToggleStrength(st)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left text-xs transition-colors ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-950/70 text-white font-medium'
                        : 'border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <span>{st}</span>
                    {isSelected && <Check className="h-3.5 w-3.5 text-indigo-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span>Selected {strengths.length} core strengths</span>
              <span>Strengths account for 10% of match alignment</span>
            </div>
          </div>
        )}

        {/* STEP 6: CAREER GOALS */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Step 6 — Career Goals & Learning Commitment</h2>
              <p className="mt-1 text-xs text-slate-400">
                Define your immediate timeline, target compensation, and weekly learning capacity to scale roadmap phases.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Desired Role / Title Keyword</label>
                <input
                  type="text"
                  placeholder="e.g. Software Engineer, Clinical Nurse, Financial Analyst"
                  value={careerGoals.desiredRole}
                  onChange={e => setCareerGoals({ ...careerGoals, desiredRole: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Preferred Industry</label>
                <select
                  value={careerGoals.preferredIndustry}
                  onChange={e => setCareerGoals({ ...careerGoals, preferredIndustry: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="Technology">Technology & Software</option>
                  <option value="Healthcare">Healthcare & Medicine</option>
                  <option value="Finance">Finance & Banking</option>
                  <option value="Engineering">Engineering & Manufacturing</option>
                  <option value="Science">Science & Research</option>
                  <option value="Design">Design & Creative Media</option>
                  <option value="Law">Law & Public Policy</option>
                  <option value="Agriculture">Agriculture & Environment</option>
                  <option value="Aviation">Aviation & Transport</option>
                  <option value="Trades">Skilled Technical Trades</option>
                  <option value="Any">Flexible / Cross-Disciplinary</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Immediate Horizon</label>
                <select
                  value={careerGoals.timelineIntent}
                  onChange={e => setCareerGoals({ ...careerGoals, timelineIntent: e.target.value as any })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="Immediate Employment">Immediate Full-Time Employment</option>
                  <option value="Higher Studies">Higher Studies (Master's / Ph.D. / Specialist Degree)</option>
                  <option value="Both">Both (Work + Part-Time Study)</option>
                  <option value="Exploring">Currently Exploring Career Options</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Available Learning Commitment (Hours / Week)
                </label>
                <select
                  value={careerGoals.learningHoursPerWeek}
                  onChange={e => setCareerGoals({ ...careerGoals, learningHoursPerWeek: parseInt(e.target.value) })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="5">5 Hours / Week (Casual / Evenings)</option>
                  <option value="10">10 Hours / Week (Moderate)</option>
                  <option value="15">15 Hours / Week (Dedicated Part-Time)</option>
                  <option value="20">20+ Hours / Week (Full-Time Accelerated)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Expected Starting Compensation</label>
                <input
                  type="text"
                  placeholder="e.g. $65,000 - $85,000"
                  value={careerGoals.expectedSalaryRange}
                  onChange={e => setCareerGoals({ ...careerGoals, expectedSalaryRange: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Preferred Work Location</label>
                <input
                  type="text"
                  placeholder="e.g. Remote / Metro Hub / Flexible"
                  value={careerGoals.preferredLocation}
                  onChange={e => setCareerGoals({ ...careerGoals, preferredLocation: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Short-Term Career Objective (1-2 Years)</label>
              <textarea
                rows={2}
                placeholder="What is your immediate milestone (e.g. land first junior role, pass certification exam)?"
                value={careerGoals.shortTermGoal}
                onChange={e => setCareerGoals({ ...careerGoals, shortTermGoal: e.target.value })}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Wizard Navigation Footer */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-950 border border-slate-800 rounded-lg transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>{currentStep === 1 ? 'Cancel' : 'Back'}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <span>{currentStep === 6 ? 'Analyze My Career' : 'Next Step'}</span>
            {currentStep === 6 ? (
              <Sparkles className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
