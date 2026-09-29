import { AssessmentData, CareerRecommendation, UserProfile, UserProgressRecord } from '../types';

const STORAGE_KEYS = {
  CURRENT_USER: 'careerpath_current_user',
  CURRENT_ASSESSMENT: 'careerpath_current_assessment',
  ASSESSMENT_HISTORY: 'careerpath_assessment_history',
  SAVED_CAREERS: 'careerpath_saved_careers',
  ROADMAP_PROGRESS: 'careerpath_roadmap_progress',
  ADMIN_ANALYTICS: 'careerpath_admin_analytics'
};

export const DEFAULT_ADMIN: UserProfile = {
  id: 'usr-admin-1',
  name: 'System Administrator',
  email: 'admin@careerpath.ai',
  role: 'admin',
  createdAt: '2026-01-01T00:00:00Z'
};

export const DEFAULT_USER: UserProfile = {
  id: 'usr-demo-1',
  name: 'Alex Chen',
  email: 'alex.chen@university.edu',
  role: 'user',
  createdAt: '2026-03-15T00:00:00Z'
};

class StorageService {
  // Current user / auth session
  public getCurrentUser(): UserProfile | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  public setCurrentUser(user: UserProfile | null): void {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    }
  }

  // Current Assessment
  public getCurrentAssessment(): AssessmentData | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CURRENT_ASSESSMENT);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  public saveAssessment(assessment: AssessmentData): void {
    const timestamped: AssessmentData = {
      ...assessment,
      id: assessment.id || `asm-${Date.now()}`,
      createdAt: assessment.createdAt || new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEYS.CURRENT_ASSESSMENT, JSON.stringify(timestamped));

    // Also push to history
    const history = this.getAssessmentHistory();
    const existingIndex = history.findIndex(h => h.id === timestamped.id);
    if (existingIndex >= 0) {
      history[existingIndex] = timestamped;
    } else {
      history.unshift(timestamped);
    }
    localStorage.setItem(STORAGE_KEYS.ASSESSMENT_HISTORY, JSON.stringify(history.slice(0, 20)));
  }

  public getAssessmentHistory(): AssessmentData[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ASSESSMENT_HISTORY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  // Saved Careers
  public getSavedCareerIds(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_CAREERS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  public toggleSaveCareer(careerId: string): boolean {
    const ids = this.getSavedCareerIds();
    const index = ids.indexOf(careerId);
    let isSaved = false;
    if (index >= 0) {
      ids.splice(index, 1);
      isSaved = false;
    } else {
      ids.push(careerId);
      isSaved = true;
    }
    localStorage.setItem(STORAGE_KEYS.SAVED_CAREERS, JSON.stringify(ids));
    return isSaved;
  }

  // Roadmap Progress
  public getRoadmapProgress(careerId: string): UserProgressRecord {
    try {
      const all = localStorage.getItem(STORAGE_KEYS.ROADMAP_PROGRESS);
      const recordMap: Record<string, UserProgressRecord> = all ? JSON.parse(all) : {};
      return recordMap[careerId] || {
        careerId,
        roadmapId: `rdm-${careerId}`,
        completedModules: [],
        itemNotes: {},
        lastUpdated: new Date().toISOString()
      };
    } catch {
      return {
        careerId,
        roadmapId: `rdm-${careerId}`,
        completedModules: [],
        itemNotes: {},
        lastUpdated: new Date().toISOString()
      };
    }
  }

  public saveRoadmapProgress(progress: UserProgressRecord): void {
    try {
      const all = localStorage.getItem(STORAGE_KEYS.ROADMAP_PROGRESS);
      const recordMap: Record<string, UserProgressRecord> = all ? JSON.parse(all) : {};
      recordMap[progress.careerId] = {
        ...progress,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.ROADMAP_PROGRESS, JSON.stringify(recordMap));
    } catch (e) {
      console.error('Failed to save roadmap progress:', e);
    }
  }

  // Clear default/sample seed assessment so candidate starts with a clean blank slate
  public clearSeedIfUnmodified(): void {
    try {
      const current = this.getCurrentAssessment();
      if (current && (current.id === 'asm-seed-001' || current.education?.degree?.includes('Bachelor of Computer Applications (BCA)'))) {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_ASSESSMENT);
        const history = this.getAssessmentHistory().filter(h => h.id !== 'asm-seed-001' && !h.education?.degree?.includes('Bachelor of Computer Applications (BCA)'));
        localStorage.setItem(STORAGE_KEYS.ASSESSMENT_HISTORY, JSON.stringify(history));
      }
    } catch (e) {
      console.error('Failed to clear seed assessment:', e);
    }
  }

  public clearCurrentAssessment(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_ASSESSMENT);
    } catch {}
  }
}

export const storageService = new StorageService();
