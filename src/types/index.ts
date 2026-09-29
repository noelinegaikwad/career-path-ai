export type ProficiencyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface UserSkill {
  name: string;
  proficiency: ProficiencyLevel;
  category?: string;
}

export interface CareerSkillRequirement {
  name: string;
  importance: number; // 1 to 5
  minProficiency: ProficiencyLevel;
  category: string;
}

export interface WorkPreferences {
  teamwork: number; // 1 (solo) to 5 (heavy teamwork)
  buildingVsAnalyzing: number; // 1 (building/crafting) to 5 (analyzing/research)
  creativeVsStructured: number; // 1 (highly structured) to 5 (highly creative)
  remotePreference: 'Remote' | 'Hybrid' | 'Office';
  companyType: 'Startup' | 'Established' | 'Flexible';
  mathComfort: number; // 1 (low) to 5 (expert)
  publicSpeakingComfort: number; // 1 to 5
  leadershipInterest: number; // 1 to 5
  peopleFacing: number; // 1 (independent/machines) to 5 (client/patient/people-facing)
  practicalVsTheoretical: number; // 1 (practical/hands-on) to 5 (theoretical/conceptual)
}

export interface EducationInfo {
  level: string; // High School, Diploma, Bachelor's, Master's, Doctorate, Other
  degree: string;
  specialization: string;
  graduationYear: string;
  currentStatus: 'Student' | 'Recent Graduate' | 'Working Professional' | 'Career Switcher';
  scoreOrCgpa: string;
}

export interface CareerGoals {
  desiredRole: string;
  preferredIndustry: string;
  preferredLocation: string;
  expectedSalaryRange: string;
  learningHoursPerWeek: number; // e.g. 5, 10, 20
  timelineIntent: 'Immediate Employment' | 'Higher Studies' | 'Both' | 'Exploring';
  shortTermGoal: string;
  longTermGoal: string;
}

export interface AssessmentData {
  id?: string;
  userId?: string;
  createdAt?: string;
  education: EducationInfo;
  skills: UserSkill[];
  interests: string[];
  workPreferences: WorkPreferences;
  strengths: string[];
  careerGoals: CareerGoals;
}

export interface CareerProgressionStage {
  stage: 'Entry Level' | 'Junior' | 'Mid Level' | 'Senior' | 'Lead / Specialist';
  title: string;
  typicalExperience: string;
  focus: string;
}

export interface RoadmapModule {
  id: string;
  phase: number;
  phaseTitle: string;
  weekRange: string;
  title: string;
  description: string;
  keySkills: string[];
  projectMilestone: string;
  completed?: boolean;
  status?: 'Not Started' | 'In Progress' | 'Completed';
  notes?: string;
  completedAt?: string;
}

export interface Career {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  industries: string[];
  occupationCode: string; // e.g. O*NET/ISCO code
  description: string;
  workEnvironment: string;
  difficulty: 'Entry' | 'Moderate' | 'Advanced';
  typicalDurationMonths: number;
  requiredSkills: CareerSkillRequirement[];
  matchingInterests: string[];
  matchingStrengths: string[];
  educationPathways: string[];
  workPreferenceAlignment: {
    teamwork: number;
    buildingVsAnalyzing: number;
    creativeVsStructured: number;
    mathComfort: number;
    peopleFacing: number;
    practicalVsTheoretical: number;
  };
  entryLevelRoles: string[];
  careerProgression: CareerProgressionStage[];
  salaryRange: {
    entry: string;
    median: string;
    senior: string;
    currency: string;
  };
  sampleRoadmap: RoadmapModule[];
}

export interface CareerScoreFactor {
  category: 'Skill' | 'Interest' | 'Education' | 'Strength' | 'Work Preference' | 'Career Goal';
  type: 'positive' | 'negative';
  description: string;
  weightImpact: number;
}

export interface CareerRecommendation {
  career: Career;
  profileMatch: number; // 0 to 100
  skillMatchScore: number;
  interestMatchScore: number;
  educationMatchScore: number;
  strengthMatchScore: number;
  workPreferenceMatchScore: number;
  careerGoalMatchScore: number;
  positiveFactors: string[];
  loweringFactors: string[];
  skillsToDevelop: {
    name: string;
    importance: number;
    currentProficiency: ProficiencyLevel | 'None';
    targetProficiency: ProficiencyLevel;
  }[];
  recommendedNextStep: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface UserProgressRecord {
  careerId: string;
  roadmapId: string;
  completedModules: string[];
  itemNotes: Record<string, string>;
  lastUpdated: string;
}

export interface AdminAnalytics {
  totalUsers: number;
  totalAssessments: number;
  completionRate: number;
  topCategories: { category: string; count: number }[];
  topCareersRecommended: { title: string; count: number }[];
  mostCommonSkillGaps: { skill: string; frequency: number }[];
  assessmentTrend: { date: string; assessments: number }[];
}
