import { Career, ProficiencyLevel } from '../types';
import { ExtractedFeatures } from './featureExtractor';

export interface CareerScoreBreakdown {
  careerId: string;
  profileMatch: number;
  skillMatchScore: number;
  interestMatchScore: number;
  educationMatchScore: number;
  strengthMatchScore: number;
  workPreferenceMatchScore: number;
  careerGoalMatchScore: number;
  matchedSkills: { name: string; userScore: number; reqScore: number }[];
  missingSkills: { name: string; importance: number; minProficiency: ProficiencyLevel }[];
  matchedInterests: string[];
  matchedStrengths: string[];
}

const PROFICIENCY_TARGETS: Record<ProficiencyLevel, number> = {
  Beginner: 40,
  Intermediate: 70,
  Advanced: 100,
};

export class ScoringEngine {
  public calculateScore(career: Career, features: ExtractedFeatures): CareerScoreBreakdown {
    // 1. Skill Match (35%)
    const skillResult = this.computeSkillMatch(career, features);

    // 2. Interest Match (20%)
    const interestResult = this.computeInterestMatch(career, features);

    // 3. Education Match (10%)
    const educationScore = this.computeEducationMatch(career, features);

    // 4. Strength Match (10%)
    const strengthResult = this.computeStrengthMatch(career, features);

    // 5. Work Preference Match (10%)
    const workPreferenceScore = this.computeWorkPreferenceMatch(career, features);

    // 6. Career Goal Match (15%)
    const goalScore = this.computeCareerGoalMatch(career, features);

    // Composite Deterministic Formula
    const compositeScore = Math.round(
      skillResult.score * 0.35 +
      interestResult.score * 0.20 +
      educationScore * 0.10 +
      strengthResult.score * 0.10 +
      workPreferenceScore * 0.10 +
      goalScore * 0.15
    );

    // Bound between 0 and 100
    const profileMatch = Math.min(100, Math.max(5, compositeScore));

    return {
      careerId: career.id,
      profileMatch,
      skillMatchScore: Math.round(skillResult.score),
      interestMatchScore: Math.round(interestResult.score),
      educationMatchScore: Math.round(educationScore),
      strengthMatchScore: Math.round(strengthResult.score),
      workPreferenceMatchScore: Math.round(workPreferenceScore),
      careerGoalMatchScore: Math.round(goalScore),
      matchedSkills: skillResult.matchedSkills,
      missingSkills: skillResult.missingSkills,
      matchedInterests: interestResult.matched,
      matchedStrengths: strengthResult.matched,
    };
  }

  private computeSkillMatch(career: Career, features: ExtractedFeatures) {
    if (!career.requiredSkills || career.requiredSkills.length === 0) {
      return { score: 70, matchedSkills: [], missingSkills: [] };
    }

    let earnedWeightedScore = 0;
    let maxPossibleWeight = 0;
    const matchedSkills: { name: string; userScore: number; reqScore: number }[] = [];
    const missingSkills: { name: string; importance: number; minProficiency: ProficiencyLevel }[] = [];

    career.requiredSkills.forEach(req => {
      const importanceWeight = req.importance || 3;
      maxPossibleWeight += importanceWeight * 100;

      const normName = req.name.toLowerCase();
      let userScore = features.skillMap.get(normName);

      // Check partial substring match (e.g. 'Python' in 'Python for Genomics')
      if (userScore === undefined) {
        for (const [userSkillName, score] of features.skillMap.entries()) {
          if (normName.includes(userSkillName) || userSkillName.includes(normName)) {
            userScore = score * 0.85; // slight discount for indirect match
            break;
          }
        }
      }

      const reqTarget = PROFICIENCY_TARGETS[req.minProficiency] || 70;

      if (userScore !== undefined) {
        // If user meets or exceeds target, grant full points proportional to user proficiency
        const ratio = Math.min(1.0, userScore / reqTarget);
        earnedWeightedScore += ratio * 100 * importanceWeight;
        matchedSkills.push({
          name: req.name,
          userScore,
          reqScore: reqTarget
        });
      } else {
        missingSkills.push({
          name: req.name,
          importance: req.importance,
          minProficiency: req.minProficiency
        });
      }
    });

    const rawPercentage = (earnedWeightedScore / (maxPossibleWeight || 1)) * 100;
    return {
      score: Math.min(100, Math.max(0, rawPercentage)),
      matchedSkills,
      missingSkills
    };
  }

  private computeInterestMatch(career: Career, features: ExtractedFeatures) {
    if (!career.matchingInterests || career.matchingInterests.length === 0) {
      return { score: 60, matched: [] };
    }

    const matched: string[] = [];
    career.matchingInterests.forEach(interest => {
      const norm = interest.toLowerCase();
      if (features.interestSet.has(norm)) {
        matched.push(interest);
      }
    });

    // Also check category match (e.g. user selected 'Healthcare' and career category is 'Healthcare & Medicine')
    const categoryNorm = career.category.toLowerCase();
    for (const userInt of features.interestSet) {
      if (categoryNorm.includes(userInt) && !matched.includes(career.category)) {
        matched.push(career.category);
      }
    }

    const matchRatio = matched.length / Math.max(1, career.matchingInterests.length);
    const score = Math.min(100, Math.round(matchRatio * 100));

    return { score, matched };
  }

  private computeEducationMatch(career: Career, features: ExtractedFeatures): number {
    let score = 50; // baseline

    // Check degree keyword matches
    const careerText = `${career.title} ${career.category} ${career.subcategory} ${career.educationPathways.join(' ')}`.toLowerCase();
    let keywordHits = 0;
    features.degreeKeywords.forEach(kw => {
      if (careerText.includes(kw)) {
        keywordHits++;
      }
    });

    if (keywordHits >= 2) {
      score += 40;
    } else if (keywordHits === 1) {
      score += 25;
    }

    // Education level adequacy
    if (career.difficulty === 'Advanced') {
      if (features.educationLevelRank >= 3) {
        score += 10;
      } else {
        score -= 15;
      }
    } else {
      score += 10;
    }

    return Math.min(100, Math.max(15, score));
  }

  private computeStrengthMatch(career: Career, features: ExtractedFeatures) {
    if (!career.matchingStrengths || career.matchingStrengths.length === 0) {
      return { score: 70, matched: [] };
    }

    const matched: string[] = [];
    career.matchingStrengths.forEach(st => {
      if (features.strengthSet.has(st.toLowerCase())) {
        matched.push(st);
      }
    });

    const ratio = matched.length / Math.max(1, career.matchingStrengths.length);
    const score = Math.min(100, Math.round(ratio * 100));
    return { score, matched };
  }

  private computeWorkPreferenceMatch(career: Career, features: ExtractedFeatures): number {
    const user = features.workPreferencesVector;
    const target = career.workPreferenceAlignment;

    if (!target) return 75;

    // Calculate normalized Euclidean distance on a 1-5 scale across 6 dimensions
    const keys: (keyof typeof target)[] = [
      'teamwork',
      'buildingVsAnalyzing',
      'creativeVsStructured',
      'mathComfort',
      'peopleFacing',
      'practicalVsTheoretical'
    ];

    let sumSquaredDiff = 0;
    keys.forEach(k => {
      const uVal = user[k] || 3;
      const tVal = target[k] || 3;
      sumSquaredDiff += Math.pow(uVal - tVal, 2);
    });

    const maxDistance = Math.sqrt(keys.length * Math.pow(4, 2)); // max diff is 4 per dimension
    const actualDistance = Math.sqrt(sumSquaredDiff);
    const similarity = 1 - (actualDistance / maxDistance);

    return Math.min(100, Math.max(20, Math.round(similarity * 100)));
  }

  private computeCareerGoalMatch(career: Career, features: ExtractedFeatures): number {
    let score = 50;

    // 1. Industry match
    if (features.preferredIndustry) {
      const careerIndustries = career.industries.map(i => i.toLowerCase());
      if (careerIndustries.some(i => i.includes(features.preferredIndustry) || features.preferredIndustry.includes(i))) {
        score += 25;
      }
    } else {
      score += 10;
    }

    // 2. Desired role match
    if (features.desiredRoleKeywords.length > 0) {
      const careerRoleText = `${career.title} ${career.entryLevelRoles.join(' ')}`.toLowerCase();
      let matchedKw = 0;
      features.desiredRoleKeywords.forEach(kw => {
        if (careerRoleText.includes(kw)) {
          matchedKw++;
        }
      });

      if (matchedKw >= 2) {
        score += 25;
      } else if (matchedKw === 1) {
        score += 15;
      }
    }

    // 3. Learning capacity feasibility
    if (career.typicalDurationMonths > 12 && features.learningHoursCapacity < 8) {
      score -= 10;
    } else if (features.learningHoursCapacity >= 15) {
      score += 10;
    }

    return Math.min(100, Math.max(10, score));
  }
}
