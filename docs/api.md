# CareerPath AI — REST API Documentation

Base URL: `/api`

All endpoints accept and return `application/json`.

---

## 1. Careers API

### `GET /api/careers`
Retrieves a list of occupations from the global library.

**Query Parameters:**
- `category` (optional, string): Filter by career category (e.g. `Technology`, `Healthcare & Medicine`, `Engineering`).
- `difficulty` (optional, string): Filter by complexity (`Entry`, `Moderate`, `Advanced`).
- `search` (optional, string): Case-insensitive keyword search across title, skills, description, and industry.

**Sample Response:**
```json
{
  "total": 20,
  "data": [
    {
      "id": "software-developer",
      "title": "Software Developer",
      "category": "Technology",
      "subcategory": "Software Engineering",
      "occupationCode": "15-1252.00",
      "difficulty": "Moderate",
      "typicalDurationMonths": 6,
      "salaryRange": {
        "entry": "$65,000",
        "median": "$105,000",
        "senior": "$155,000+",
        "currency": "USD"
      }
    }
  ]
}
```

### `GET /api/careers/:id`
Retrieves full dossier for a specific career by ID.

---

## 2. Recommendation Engine API

### `POST /api/recommendations`
Evaluates a candidate's 6-step assessment payload and returns ranked career recommendations with deterministic profile match scores and explanations.

**Request Body:**
```json
{
  "education": {
    "level": "Bachelor's Degree",
    "degree": "Bachelor of Computer Applications (BCA)",
    "specialization": "Software Engineering",
    "graduationYear": "2026",
    "currentStatus": "Student",
    "scoreOrCgpa": "8.8 CGPA"
  },
  "skills": [
    { "name": "Java", "proficiency": "Intermediate", "category": "Programming" },
    { "name": "PostgreSQL", "proficiency": "Intermediate", "category": "Database" }
  ],
  "interests": ["Technology", "AI/ML", "Engineering"],
  "workPreferences": {
    "teamwork": 4,
    "buildingVsAnalyzing": 2,
    "creativeVsStructured": 3,
    "mathComfort": 4,
    "peopleFacing": 2,
    "practicalVsTheoretical": 2,
    "remotePreference": "Hybrid",
    "companyType": "Flexible"
  },
  "strengths": ["Problem solving", "Logical thinking", "Attention to detail"],
  "careerGoals": {
    "desiredRole": "Software Developer",
    "preferredIndustry": "Technology",
    "learningHoursPerWeek": 12,
    "expectedSalaryRange": "$65,000 - $95,000",
    "timelineIntent": "Immediate Employment"
  }
}
```

**Response (200 OK):**
```json
{
  "assessmentId": "asm-1774872134567",
  "count": 6,
  "recommendations": [
    {
      "career": { "id": "software-developer", "title": "Software Developer" },
      "profileMatch": 87,
      "skillMatchScore": 85,
      "interestMatchScore": 90,
      "educationMatchScore": 85,
      "strengthMatchScore": 90,
      "workPreferenceMatchScore": 88,
      "careerGoalMatchScore": 85,
      "positiveFactors": [
        "Demonstrated competencies in Java directly satisfy core prerequisite requirements for this role."
      ],
      "loweringFactors": [
        "Critical high-priority skills required by employers (REST APIs, Git) are not yet present in your profile."
      ],
      "recommendedNextStep": "Prioritize building foundational competency in REST APIs (Intermediate level) while following Phase 1 of the personalized roadmap."
    }
  ]
}
```

---

## 3. Roadmap & Progress API

### `GET /api/roadmaps/:careerId`
Retrieves progress for a specific career roadmap.

### `POST /api/roadmaps/:careerId`
Updates module completion status and notes.

**Request Body:**
```json
{
  "completedModules": ["sd-1"],
  "itemNotes": {
    "sd-1": "Completed Java OOP exercises and GitHub repo setup."
  }
}
```

---

## 4. Admin Analytics API

### `GET /api/admin/stats`
Retrieves aggregated telemetry for the administrator console (requires admin role).

**Sample Response:**
```json
{
  "totalUsers": 24,
  "totalAssessments": 38,
  "completionRate": 88.5,
  "topCategories": [
    { "category": "Technology", "count": 42 },
    { "category": "AI & Data", "count": 36 }
  ],
  "topCareersRecommended": [
    { "title": "Software Developer", "count": 38 }
  ],
  "mostCommonSkillGaps": [
    { "skill": "Cloud & Containerization (Docker/AWS)", "frequency": 68 }
  ]
}
```
