import { Career, ProficiencyLevel } from '../types';
import { CareerScoreBreakdown } from './scoringEngine';
import { ExtractedFeatures } from './featureExtractor';

export interface ExplanationResult {
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

export class ExplanationEngine {
  public generateExplanation(
    career: Career,
    breakdown: CareerScoreBreakdown,
    features: ExtractedFeatures
  ): ExplanationResult {
    const positiveFactors: string[] = [];
    const loweringFactors: string[] = [];

    // 1. Skill evaluation factors
    if (breakdown.matchedSkills.length > 0) {
      const topSkills = breakdown.matchedSkills.slice(0, 3).map(s => s.name).join(', ');
      positiveFactors.push(
        `Demonstrated competencies in ${topSkills} directly satisfy core prerequisite requirements for this role.`
      );
    } else {
      loweringFactors.push(
        `No direct foundational skills currently overlap with ${career.title}'s technical baseline.`
      );
    }

    // 2. Interest evaluation factors
    if (breakdown.matchedInterests.length > 0) {
      const interestNames = breakdown.matchedInterests.slice(0, 2).join(' & ');
      positiveFactors.push(
        `Expressed strong career interest in ${interestNames}, which provides intrinsic motivation for this field.`
      );
    } else {
      loweringFactors.push(
        `Your declared primary interests do not directly match the core domain of ${career.category}.`
      );
    }

    // 3. Strengths evaluation factors
    if (breakdown.matchedStrengths.length > 0) {
      const strengths = breakdown.matchedStrengths.slice(0, 3).join(', ');
      positiveFactors.push(
        `Key transferable strengths (${strengths}) align with high-performance criteria in this career.`
      );
    }

    // 4. Missing critical skills
    const criticalMissing = breakdown.missingSkills.filter(s => s.importance >= 4);
    if (criticalMissing.length > 0) {
      const missingNames = criticalMissing.slice(0, 3).map(s => s.name).join(', ');
      loweringFactors.push(
        `Critical high-priority skills required by employers (${missingNames}) are not yet present in your profile.`
      );
    }

    // 5. Work preference alignment factor
    if (breakdown.workPreferenceMatchScore >= 80) {
      positiveFactors.push(
        `Your preferred collaboration mode and working balance closely match standard daily workflows in ${career.subcategory}.`
      );
    } else if (breakdown.workPreferenceMatchScore < 55) {
      loweringFactors.push(
        `Daily job characteristics (e.g. structured guidelines or team dynamics) differ somewhat from your declared work preferences.`
      );
    }

    // 6. Learning time factor
    if (career.typicalDurationMonths >= 12 && features.learningHoursCapacity < 10) {
      loweringFactors.push(
        `This career typically requires ${career.typicalDurationMonths} months of study, which may take longer with your current weekly learning time of ${features.learningHoursCapacity} hours.`
      );
    }

    // Compile Skills to Develop
    const skillsToDevelop = career.requiredSkills.map(req => {
      const userNorm = req.name.toLowerCase();
      let currentProficiency: ProficiencyLevel | 'None' = 'None';

      const foundScore = features.skillMap.get(userNorm);
      if (foundScore !== undefined) {
        if (foundScore >= 80) currentProficiency = 'Advanced';
        else if (foundScore >= 50) currentProficiency = 'Intermediate';
        else currentProficiency = 'Beginner';
      }

      return {
        name: req.name,
        importance: req.importance,
        currentProficiency,
        targetProficiency: req.minProficiency
      };
    });

    // Sort: missing high importance first, then lower proficiency
    skillsToDevelop.sort((a, b) => {
      if (a.currentProficiency === 'None' && b.currentProficiency !== 'None') return -1;
      if (a.currentProficiency !== 'None' && b.currentProficiency === 'None') return 1;
      return b.importance - a.importance;
    });

    // Recommend immediate next step
    const topMissing = skillsToDevelop.find(s => s.currentProficiency === 'None' || s.currentProficiency === 'Beginner');
    const recommendedNextStep = topMissing
      ? `Prioritize building foundational competency in ${topMissing.name} (${topMissing.targetProficiency} level) while following Phase 1 of the personalized roadmap.`
      : `Advance your hands-on practical project portfolio and prepare for entry-level roles such as ${career.entryLevelRoles[0] || 'Junior Specialist'}.`;

    return {
      positiveFactors: positiveFactors.slice(0, 4),
      loweringFactors: loweringFactors.slice(0, 3),
      skillsToDevelop,
      recommendedNextStep
    };
  }
}
