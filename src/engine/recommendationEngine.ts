import { AssessmentData, Career, CareerRecommendation } from '../types';
import { extractFeatures, ExtractedFeatures } from './featureExtractor';
import { ScoringEngine } from './scoringEngine';
import { ExplanationEngine } from './explanationEngine';
import { RoadmapEngine } from './roadmapEngine';
import { SkillGapEngine } from './skillGapEngine';

export class RecommendationEngine {
  private scoringEngine: ScoringEngine;
  private explanationEngine: ExplanationEngine;
  private roadmapEngine: RoadmapEngine;
  private skillGapEngine: SkillGapEngine;

  constructor() {
    this.scoringEngine = new ScoringEngine();
    this.explanationEngine = new ExplanationEngine();
    this.roadmapEngine = new RoadmapEngine();
    this.skillGapEngine = new SkillGapEngine();
  }

  /**
   * Evaluates all careers in the library against a user's assessment data.
   * Returns top matching careers sorted deterministically by Profile Match score.
   */
  public generateRecommendations(
    assessment: AssessmentData,
    careers: Career[],
    topN: number = 6
  ): CareerRecommendation[] {
    const features: ExtractedFeatures = extractFeatures(assessment);

    const scoredCareers: CareerRecommendation[] = careers.map(career => {
      const breakdown = this.scoringEngine.calculateScore(career, features);
      const explanation = this.explanationEngine.generateExplanation(career, breakdown, features);

      return {
        career,
        profileMatch: breakdown.profileMatch,
        skillMatchScore: breakdown.skillMatchScore,
        interestMatchScore: breakdown.interestMatchScore,
        educationMatchScore: breakdown.educationMatchScore,
        strengthMatchScore: breakdown.strengthMatchScore,
        workPreferenceMatchScore: breakdown.workPreferenceMatchScore,
        careerGoalMatchScore: breakdown.careerGoalMatchScore,
        positiveFactors: explanation.positiveFactors,
        loweringFactors: explanation.loweringFactors,
        skillsToDevelop: explanation.skillsToDevelop,
        recommendedNextStep: explanation.recommendedNextStep
      };
    });

    // Sort descending by Profile Match, then by Skill Match as tie-breaker
    scoredCareers.sort((a, b) => {
      if (b.profileMatch !== a.profileMatch) {
        return b.profileMatch - a.profileMatch;
      }
      return b.skillMatchScore - a.skillMatchScore;
    });

    return scoredCareers.slice(0, topN);
  }

  public getRoadmapEngine(): RoadmapEngine {
    return this.roadmapEngine;
  }

  public getSkillGapEngine(): SkillGapEngine {
    return this.skillGapEngine;
  }
}

export const recommendationEngine = new RecommendationEngine();
