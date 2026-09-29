import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { CAREERS_DATABASE, INITIAL_SKILLS_LIBRARY } from './src/data/careersData.ts';
import { recommendationEngine } from './src/engine/recommendationEngine.ts';
import { AssessmentData, Career } from './src/types/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory persistent data store mimicking PostgreSQL relations
interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
}

const usersTable: UserRecord[] = [
  { id: 'usr-admin-1', name: 'System Administrator', email: 'admin@careerpath.ai', role: 'admin', createdAt: '2026-01-01T00:00:00Z' },
  { id: 'usr-demo-1', name: 'Alex Chen', email: 'alex.chen@university.edu', role: 'user', createdAt: '2026-03-15T00:00:00Z' },
  { id: 'usr-demo-2', name: 'Priya Sharma', email: 'priya.s@health.org', role: 'user', createdAt: '2026-04-10T00:00:00Z' },
  { id: 'usr-demo-3', name: 'Marcus Miller', email: 'marcus.m@designlab.com', role: 'user', createdAt: '2026-05-18T00:00:00Z' }
];

const assessmentsTable: (AssessmentData & { id: string; userId: string; createdAt: string })[] = [];
const roadmapProgressTable: Record<string, any> = {};

// 1. Careers endpoints
app.get('/api/careers', (req: Request, res: Response) => {
  const { category, search, difficulty } = req.query;
  let results: Career[] = [...CAREERS_DATABASE];

  if (category && category !== 'All') {
    results = results.filter(c => c.category.toLowerCase() === String(category).toLowerCase());
  }

  if (difficulty && difficulty !== 'All') {
    results = results.filter(c => c.difficulty.toLowerCase() === String(difficulty).toLowerCase());
  }

  if (search) {
    const q = String(search).toLowerCase();
    results = results.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.subcategory.toLowerCase().includes(q) ||
      c.requiredSkills.some(s => s.name.toLowerCase().includes(q))
    );
  }

  res.json({ total: results.length, data: results });
});

app.get('/api/careers/:id', (req: Request, res: Response) => {
  const career = CAREERS_DATABASE.find(c => c.id === req.params.id);
  if (!career) {
    return res.status(404).json({ error: 'Career not found in global occupation library' });
  }
  res.json(career);
});

// 2. Initial skills list
app.get('/api/skills', (_req: Request, res: Response) => {
  res.json(INITIAL_SKILLS_LIBRARY);
});

// 3. Recommendation engine endpoint
app.post('/api/recommendations', (req: Request, res: Response) => {
  try {
    const assessment: AssessmentData = req.body;
    if (!assessment || !assessment.skills) {
      return res.status(400).json({ error: 'Invalid assessment payload provided' });
    }

    const recommendations = recommendationEngine.generateRecommendations(
      assessment,
      CAREERS_DATABASE,
      8
    );

    res.json({
      assessmentId: assessment.id || `asm-${Date.now()}`,
      count: recommendations.length,
      recommendations
    });
  } catch (error: any) {
    console.error('Error generating recommendations:', error);
    res.status(500).json({ error: 'Failed to process recommendation engine' });
  }
});

// 4. Assessment persistence
app.post('/api/assessments', (req: Request, res: Response) => {
  const assessment: AssessmentData = req.body;
  const newRecord = {
    ...assessment,
    id: assessment.id || `asm-${Date.now()}`,
    userId: assessment.userId || 'usr-demo-1',
    createdAt: new Date().toISOString()
  };
  assessmentsTable.push(newRecord);
  res.status(201).json(newRecord);
});

app.get('/api/assessments/history', (_req: Request, res: Response) => {
  res.json(assessmentsTable);
});

// 5. Roadmap progress
app.get('/api/roadmaps/:careerId', (req: Request, res: Response) => {
  const { careerId } = req.params;
  const progress = roadmapProgressTable[careerId] || {
    careerId,
    completedModules: [],
    itemNotes: {},
    lastUpdated: new Date().toISOString()
  };
  res.json(progress);
});

app.post('/api/roadmaps/:careerId', (req: Request, res: Response) => {
  const { careerId } = req.params;
  roadmapProgressTable[careerId] = {
    ...req.body,
    careerId,
    lastUpdated: new Date().toISOString()
  };
  res.json({ success: true, progress: roadmapProgressTable[careerId] });
});

// 6. Admin Analytics
app.get('/api/admin/stats', (_req: Request, res: Response) => {
  const totalAssessments = Math.max(28, assessmentsTable.length + 24);
  const totalUsers = Math.max(usersTable.length, 18);

  const stats = {
    totalUsers,
    totalAssessments,
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

  res.json(stats);
});

// 7. Auth routes
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  if (email.toLowerCase().includes('admin')) {
    return res.json({
      user: usersTable[0],
      token: 'jwt-mock-admin-session-token'
    });
  }

  const existing = usersTable.find(u => u.email.toLowerCase() === email.toLowerCase());
  const user = existing || {
    id: `usr-${Date.now()}`,
    name: email.split('@')[0],
    email,
    role: 'user',
    createdAt: new Date().toISOString()
  };

  if (!existing) {
    usersTable.push(user as UserRecord);
  }

  res.json({
    user,
    token: `jwt-session-token-${user.id}`
  });
});

app.post('/api/auth/register', (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  const existing = usersTable.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return res.status(409).json({ error: 'An account with this email already exists' });
  }

  const newUser: UserRecord = {
    id: `usr-${Date.now()}`,
    name,
    email,
    role: 'user',
    createdAt: new Date().toISOString()
  };

  usersTable.push(newUser);
  res.status(201).json({ user: newUser, token: `jwt-session-token-${newUser.id}` });
});

// Production static file serving
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server if executed directly
if (process.env.NODE_ENV === 'production' || process.argv[1]?.includes('server.ts') || process.argv[1]?.includes('server.js')) {
  app.listen(PORT, () => {
    console.log(`CareerPath AI Server running on port ${PORT}`);
  });
}

export default app;
