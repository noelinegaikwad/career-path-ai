import { AssessmentData, ProficiencyLevel } from '../types';

export interface ExtractedFeatures {
  skillMap: Map<string, number>; // normalized 0 to 100
  interestSet: Set<string>;
  strengthSet: Set<string>;
  educationLevelRank: number; // 1 (High School) to 5 (Doctorate)
  degreeKeywords: string[];
  workPreferencesVector: {
    teamwork: number; // 1 to 5
    buildingVsAnalyzing: number;
    creativeVsStructured: number;
    mathComfort: number;
    peopleFacing: number;
    practicalVsTheoretical: number;
  };
  preferredIndustry: string;
  desiredRoleKeywords: string[];
  learningHoursCapacity: number;
  timelineIntent: string;
}

const PROFICIENCY_SCORES: Record<ProficiencyLevel, number> = {
  Beginner: 35,
  Intermediate: 70,
  Advanced: 100,
};

const EDUCATION_LEVEL_RANKS: Record<string, number> = {
  'High School': 1,
  'Diploma / Associate': 2,
  "Bachelor's Degree": 3,
  "Master's Degree": 4,
  'Doctorate / PhD': 5,
  'Other / Self-Taught': 2,
};

export function extractFeatures(assessment: AssessmentData): ExtractedFeatures {
  const skillMap = new Map<string, number>();

  (assessment.skills || []).forEach(skill => {
    const normName = skill.name.trim().toLowerCase();
    const score = PROFICIENCY_SCORES[skill.proficiency] || 35;
    skillMap.set(normName, score);
  });

  const interestSet = new Set(
    (assessment.interests || []).map(i => i.trim().toLowerCase())
  );

  const strengthSet = new Set(
    (assessment.strengths || []).map(s => s.trim().toLowerCase())
  );

  const eduLevel = assessment.education?.level || "Bachelor's Degree";
  const educationLevelRank = EDUCATION_LEVEL_RANKS[eduLevel] || 3;

  const rawDegree = `${assessment.education?.degree || ''} ${assessment.education?.specialization || ''}`;
  const degreeKeywords = rawDegree
    .toLowerCase()
    .split(/[\s,/-]+/)
    .filter(w => w.length > 2);

  const wp = assessment.workPreferences || {
    teamwork: 3,
    buildingVsAnalyzing: 3,
    creativeVsStructured: 3,
    remotePreference: 'Hybrid',
    companyType: 'Flexible',
    mathComfort: 3,
    publicSpeakingComfort: 3,
    leadershipInterest: 3,
    peopleFacing: 3,
    practicalVsTheoretical: 3
  };

  const workPreferencesVector = {
    teamwork: wp.teamwork || 3,
    buildingVsAnalyzing: wp.buildingVsAnalyzing || 3,
    creativeVsStructured: wp.creativeVsStructured || 3,
    mathComfort: wp.mathComfort || 3,
    peopleFacing: wp.peopleFacing || 3,
    practicalVsTheoretical: wp.practicalVsTheoretical || 3
  };

  const desiredRole = assessment.careerGoals?.desiredRole || '';
  const desiredRoleKeywords = desiredRole
    .toLowerCase()
    .split(/[\s,/-]+/)
    .filter(w => w.length > 2);

  return {
    skillMap,
    interestSet,
    strengthSet,
    educationLevelRank,
    degreeKeywords,
    workPreferencesVector,
    preferredIndustry: (assessment.careerGoals?.preferredIndustry || '').toLowerCase(),
    desiredRoleKeywords,
    learningHoursCapacity: assessment.careerGoals?.learningHoursPerWeek || 10,
    timelineIntent: assessment.careerGoals?.timelineIntent || 'Immediate Employment'
  };
}
