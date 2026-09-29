# CareerPath AI — System Architecture & Spring Boot Migration Guide

## 1. System Overview

CareerPath AI is designed as a **modern, decoupled full-stack platform** consisting of:
- **Presentation Layer**: SPA built with HTML5, TypeScript, Tailwind CSS, clean semantic layouts, and zero-pill typographic discipline.
- **RESTful API Service Layer**: Modular layered endpoints for career taxonomy, recommendation calculation, roadmap tracking, and analytics.
- **Recommendation & Scoring Domain Layer**: Feature extractor, scoring engine, explanation generator, and dynamic roadmap scheduler.
- **Data Persistence Layer**: PostgreSQL relational schema supporting high-throughput candidate assessments and 10,000+ occupation records.

```
┌────────────────────────────────────────────────────────┐
│                   Frontend Client (SPA)                │
│  Home · Assessment (6 Steps) · Explorer · Results ·    │
│  Personalized Roadmap · Skill-Gap Analysis · Admin     │
└───────────────────────────┬────────────────────────────┘
                            │ REST / JSON (HTTP)
┌───────────────────────────▼────────────────────────────┐
│                    API Gateway & Routing               │
│  /api/careers · /api/recommendations · /api/roadmaps   │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                  Business Domain Services              │
│  ├── RecommendationEngine (Multi-Factor Scoring)       │
│  ├── FeatureExtractor (Vector Normalization)           │
│  ├── ExplanationEngine (Evidence Derivation)           │
│  ├── SkillGapEngine (Deficit Analysis)                 │
│  └── RoadmapEngine (Dynamic Scheduling)               │
└───────────────────────────┬────────────────────────────┘
                            │ SQL / Connection Pool
┌───────────────────────────▼────────────────────────────┐
│               PostgreSQL Relational Storage            │
│  users · profiles · skills · careers · career_skills   │
│  assessments · recommendations · roadmaps · progress   │
└────────────────────────────────────────────────────────┘
```

---

## 2. Layered Architecture Principles

1. **Separation of Concerns**: Controllers only handle HTTP request parsing and response formatting. All domain logic resides in dedicated services and engines.
2. **Deterministic Reproducibility**: Given an identical assessment payload, the recommendation engine produces identical, verifiable scores.
3. **Graceful Offline / Sandbox Degradation**: The frontend includes storage service fallbacks, allowing instant evaluation in sandboxed environments without requiring live database credentials.

---

## 3. Java Spring Boot Migration Guide

The Node.js Express REST API in `server.ts` is explicitly structured to mirror a standard Spring Boot 3.x enterprise layered hierarchy:

### Spring Boot Package Mapping:
```
com.careerpath.ai/
├── controller/
│   ├── CareerController.java          <-->  GET /api/careers, /api/careers/{id}
│   ├── RecommendationController.java  <-->  POST /api/recommendations
│   ├── AssessmentController.java      <-->  POST /api/assessments, GET /api/assessments/history
│   ├── RoadmapController.java         <-->  GET/POST /api/roadmaps/{careerId}
│   ├── AdminAnalyticsController.java  <-->  GET /api/admin/stats
│   └── AuthController.java            <-->  POST /api/auth/login, /api/auth/register
│
├── service/
│   ├── CareerService.java
│   ├── AssessmentService.java
│   └── RoadmapService.java
│
├── engine/
│   ├── FeatureExtractor.java          <-->  Normalizes AssessmentDTO to double[] vector
│   ├── ScoringEngine.java             <-->  Deterministic multi-factor calculation
│   ├── ExplanationEngine.java         <-->  Generates positive & negative drivers
│   ├── SkillGapEngine.java            <-->  Computes strong, to-improve, missing skills
│   └── RoadmapEngine.java             <-->  Generates 4-phase milestone curricula
│
├── model/ (JPA Entities)
│   ├── User.java                      <-->  users table
│   ├── Profile.java                   <-->  profiles table
│   ├── Skill.java                     <-->  skills table
│   ├── Career.java                    <-->  careers table
│   ├── CareerSkill.java               <-->  career_skills table
│   ├── Assessment.java                <-->  assessments table
│   └── RoadmapModule.java             <-->  roadmap_modules table
│
└── repository/ (Spring Data JPA)
    ├── CareerRepository.java
    ├── SkillRepository.java
    └── AssessmentRepository.java
```

### Zero Frontend Changes:
Because JSON request and response contracts (documented in `docs/api.md`) are strictly defined, replacing the Express backend with Spring Boot requires **zero changes** to frontend components, routing, or state stores.
