import { Career, RoadmapModule, UserSkill } from '../types';

export class RoadmapEngine {
  public generatePersonalizedRoadmap(
    career: Career,
    userSkills: UserSkill[],
    hoursPerWeek: number = 10,
    savedProgressModuleIds: string[] = []
  ): RoadmapModule[] {
    const userSkillNames = new Set(
      userSkills.map(s => s.name.trim().toLowerCase())
    );

    // Speed multiplier: 10 hrs/wk is 1.0x baseline.
    // 5 hrs/wk stretches by 1.6x, 20 hrs/wk shortens by 0.7x
    const speedFactor = hoursPerWeek <= 5 ? 1.6 : hoursPerWeek >= 20 ? 0.7 : 1.0;

    const baseRoadmap = career.sampleRoadmap || [];
    let currentWeekOffset = 1;

    return baseRoadmap.map((mod, idx) => {
      // Calculate dynamic week ranges
      const baseDurationWeeks = 4;
      const scaledDurationWeeks = Math.max(2, Math.round(baseDurationWeeks * speedFactor));
      const startWeek = currentWeekOffset;
      const endWeek = currentWeekOffset + scaledDurationWeeks - 1;
      currentWeekOffset = endWeek + 1;

      // Determine if user already has the key skills in this module
      const matchedCount = mod.keySkills.filter(skill => {
        const norm = skill.toLowerCase();
        for (const u of userSkillNames) {
          if (norm.includes(u) || u.includes(norm)) return true;
        }
        return false;
      }).length;

      let status: 'Not Started' | 'In Progress' | 'Completed' = 'Not Started';
      let completed = false;

      // Check if user had previously marked this completed in progress storage
      if (savedProgressModuleIds.includes(mod.id)) {
        status = 'Completed';
        completed = true;
      } else if (matchedCount > 0 && matchedCount === mod.keySkills.length) {
        // All key skills already known
        status = 'Completed';
        completed = true;
      } else if (matchedCount > 0) {
        status = 'In Progress';
      }

      return {
        ...mod,
        weekRange: `Weeks ${startWeek}–${endWeek}`,
        status,
        completed,
      };
    });
  }
}
