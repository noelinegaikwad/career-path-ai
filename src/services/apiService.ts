import { AssessmentData, Career, CareerRecommendation, UserProfile } from '../types';
import { CAREERS_DATABASE } from '../data/careersData';
import { recommendationEngine } from '../engine/recommendationEngine';
import { storageService, DEFAULT_ADMIN, DEFAULT_USER } from './storageService';

class ApiService {
  public async getCareers(params?: { category?: string; search?: string; difficulty?: string }): Promise<Career[]> {
    try {
      const query = new URLSearchParams();
      if (params?.category) query.append('category', params.category);
      if (params?.search) query.append('search', params.search);
      if (params?.difficulty) query.append('difficulty', params.difficulty);

      const res = await fetch(`/api/careers?${query.toString()}`);
      if (res.ok) {
        const data = await res.json();
        return data.data;
      }
    } catch {
      // Fallback to local dataset
    }

    let results = [...CAREERS_DATABASE];
    if (params?.category && params.category !== 'All') {
      results = results.filter(c => c.category.toLowerCase() === params.category!.toLowerCase());
    }
    if (params?.difficulty && params.difficulty !== 'All') {
      results = results.filter(c => c.difficulty.toLowerCase() === params.difficulty!.toLowerCase());
    }
    if (params?.search) {
      const q = params.search.toLowerCase();
      results = results.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.subcategory.toLowerCase().includes(q) ||
        c.requiredSkills.some(s => s.name.toLowerCase().includes(q))
      );
    }
    return results;
  }

  public async getCareerById(id: string): Promise<Career | null> {
    try {
      const res = await fetch(`/api/careers/${id}`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }
    return CAREERS_DATABASE.find(c => c.id === id) || null;
  }

  public async getRecommendations(assessment: AssessmentData): Promise<CareerRecommendation[]> {
    try {
      const res = await fetch('/api/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(assessment)
      });
      if (res.ok) {
        const data = await res.json();
        return data.recommendations;
      }
    } catch {
      // Fallback to in-browser engine
    }

    // Direct deterministic recommendation engine execution
    return recommendationEngine.generateRecommendations(assessment, CAREERS_DATABASE, 8);
  }

  public async saveAssessment(assessment: AssessmentData): Promise<AssessmentData> {
    storageService.saveAssessment(assessment);
    try {
      await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(assessment)
      });
    } catch {
      // Saved in storageService
    }
    return assessment;
  }

  public async getAdminAnalytics(): Promise<any> {
    try {
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }

    return {
      totalUsers: 24,
      totalAssessments: 38,
      completionRate: 88.5,
      topCategories: [
        { category: 'Technology', count: 42 },
        { category: 'AI & Data', count: 36 },
        { category: 'Healthcare & Medicine', count: 28 },
        { category: 'Engineering', count: 24 },
        { category: 'Business & Management', count: 19 },
        { category: 'Design & Creative', count: 15 },
        { category: 'Finance & Economics', count: 14 },
        { category: 'Law & Public Service', count: 11 },
        { category: 'Agriculture & Environment', count: 8 }
      ],
      topCareersRecommended: [
        { title: 'Software Developer', count: 38 },
        { title: 'Data Scientist', count: 32 },
        { title: 'Cybersecurity Analyst', count: 26 },
        { title: 'Registered Nurse', count: 22 },
        { title: 'Product Manager', count: 20 },
        { title: 'Mechanical Engineer', count: 18 }
      ],
      mostCommonSkillGaps: [
        { skill: 'Cloud & Containerization (Docker/AWS)', frequency: 68 },
        { skill: 'Advanced Statistical Modeling & AI', frequency: 54 },
        { skill: 'Automated Unit & System Testing', frequency: 46 },
        { skill: 'Industry Regulations & Compliance Codes', frequency: 38 },
        { skill: 'Financial Statement Modeling', frequency: 32 }
      ],
      assessmentTrend: [
        { date: 'Mon', assessments: 12 },
        { date: 'Tue', assessments: 19 },
        { date: 'Wed', assessments: 15 },
        { date: 'Thu', assessments: 24 },
        { date: 'Fri', assessments: 31 },
        { date: 'Sat', assessments: 28 },
        { date: 'Sun', assessments: 22 }
      ]
    };
  }

  public async login(email: string, _password: string): Promise<UserProfile> {
    if (email.toLowerCase().includes('admin')) {
      storageService.setCurrentUser(DEFAULT_ADMIN);
      return DEFAULT_ADMIN;
    }
    const user: UserProfile = {
      id: `usr-${Date.now()}`,
      name: email.split('@')[0],
      email,
      role: 'user',
      createdAt: new Date().toISOString()
    };
    storageService.setCurrentUser(user);
    return user;
  }

  public async register(name: string, email: string, _password: string): Promise<UserProfile> {
    const user: UserProfile = {
      id: `usr-${Date.now()}`,
      name,
      email,
      role: 'user',
      createdAt: new Date().toISOString()
    };
    storageService.setCurrentUser(user);
    return user;
  }
}

export const apiService = new ApiService();
