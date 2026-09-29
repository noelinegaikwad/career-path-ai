import { Career, ProficiencyLevel, UserSkill } from '../types';

export interface SkillGapItem {
  name: string;
  category: string;
  importance: number; // 1 to 5
  userLevel: ProficiencyLevel | 'None';
  targetLevel: ProficiencyLevel;
  gapStatus: 'Met' | 'Needs Improvement' | 'Critical Missing' | 'Secondary Missing';
  recommendedWeeks: number;
}

export interface SkillGapReport {
  careerId: string;
  careerTitle: string;
  strongSkills: SkillGapItem[];
  skillsToImprove: SkillGapItem[];
  criticalMissingSkills: SkillGapItem[];
  secondaryMissingSkills: SkillGapItem[];
  overallAlignmentPercentage: number;
  topPrioritySkills: SkillGapItem[];
}

const LEVEL_RANKS: Record<ProficiencyLevel | 'None', number> = {
  None: 0,
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3
};

export class SkillGapEngine {
  public analyzeGaps(career: Career, userSkills: UserSkill[], hoursPerWeek: number = 10): SkillGapReport {
    const userSkillMap = new Map<string, ProficiencyLevel>();
    userSkills.forEach(s => {
      userSkillMap.set(s.name.trim().toLowerCase(), s.proficiency);
    });

    const strongSkills: SkillGapItem[] = [];
    const skillsToImprove: SkillGapItem[] = [];
    const criticalMissingSkills: SkillGapItem[] = [];
    const secondaryMissingSkills: SkillGapItem[] = [];

    let totalPoints = 0;
    let earnedPoints = 0;

    career.requiredSkills.forEach(req => {
      const normName = req.name.trim().toLowerCase();
      let userLevel: ProficiencyLevel | 'None' = userSkillMap.get(normName) || 'None';

      // Check partial substring match if direct match not found
      if (userLevel === 'None') {
        for (const [uName, uProf] of userSkillMap.entries()) {
          if (normName.includes(uName) || uName.includes(normName)) {
            userLevel = uProf;
            break;
          }
        }
      }

      const userRank = LEVEL_RANKS[userLevel];
      const targetRank = LEVEL_RANKS[req.minProficiency];

      const itemWeight = req.importance * 20;
      totalPoints += itemWeight;

      // Estimate learning weeks based on gap and hours per week
      const rankGap = Math.max(0, targetRank - userRank);
      // Rough base hours: 25 hrs per rank step
      const estimatedHours = rankGap * 30;
      const recommendedWeeks = Math.max(1, Math.ceil(estimatedHours / Math.max(4, hoursPerWeek)));

      const gapItem: SkillGapItem = {
        name: req.name,
        category: req.category,
        importance: req.importance,
        userLevel,
        targetLevel: req.minProficiency,
        gapStatus: 'Critical Missing',
        recommendedWeeks
      };

      if (userRank >= targetRank) {
        gapItem.gapStatus = 'Met';
        earnedPoints += itemWeight;
        strongSkills.push(gapItem);
      } else if (userRank > 0 && userRank < targetRank) {
        gapItem.gapStatus = 'Needs Improvement';
        earnedPoints += itemWeight * (userRank / targetRank);
        skillsToImprove.push(gapItem);
      } else if (req.importance >= 4) {
        gapItem.gapStatus = 'Critical Missing';
        criticalMissingSkills.push(gapItem);
      } else {
        gapItem.gapStatus = 'Secondary Missing';
        secondaryMissingSkills.push(gapItem);
      }
    });

    const overallAlignmentPercentage = totalPoints > 0
      ? Math.round((earnedPoints / totalPoints) * 100)
      : 50;

    // Top 3 priority skills: Critical missing first (sorted by importance), then skills to improve
    const topPrioritySkills = [
      ...criticalMissingSkills.sort((a, b) => b.importance - a.importance),
      ...skillsToImprove.sort((a, b) => b.importance - a.importance),
      ...secondaryMissingSkills.sort((a, b) => b.importance - a.importance)
    ].slice(0, 3);

    return {
      careerId: career.id,
      careerTitle: career.title,
      strongSkills,
      skillsToImprove,
      criticalMissingSkills,
      secondaryMissingSkills,
      overallAlignmentPercentage,
      topPrioritySkills
    };
  }
}
