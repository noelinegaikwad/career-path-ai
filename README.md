# CareerPath AI — AI-Based Career Recommendation & Roadmap Platform

> **"Know your strengths. Build your path."**  
> *"Turn your skills and interests into a career roadmap."*

CareerPath AI is a professional, multi-disciplinary career discovery and roadmapping platform designed for students, fresh graduates, and career switchers across global occupations.

---

## 🌟 Key Highlights & Architectural Strengths

- **Not Limited to Tech/IT**: Covers 20+ distinct occupational sectors including Healthcare & Medicine, Mechanical & Aerospace Engineering, Data & AI, Corporate Law, Sustainable Agriculture, Commercial Aviation, Sports Kinesiology, Skilled Trades, and Product Design.
- **Deterministic Multi-Factor Scoring**: Transparent, verifiable Profile Match scoring ($0 \dots 100$) based on Skill Match (35%), Interest Match (20%), Career Goals (15%), Education Compatibility (10%), Transferable Strengths (10%), and Work Preference Euclidean Similarity (10%).
- **Explainable Evidence Generation**: Explains both positive match factors and critical gaps without generating hallucinated percentages or claiming to predict anyone's future.
- **Dynamic 4-Phase Roadmap Engine**: Generates customized learning roadmaps scaled to the user's available weekly study hours (5 hrs/wk vs 20 hrs/wk) with practical project milestones and progress tracking.
- **Side-by-Side Comparison**: Compare up to 3 careers simultaneously across core skills, entry roles, compensation, and roadmap duration.
- **Spring Boot 3.x Migration Ready**: The modular Node.js/Express REST API in `server.ts` is structured specifically to mirror a Spring Boot controller/service/repository architecture.
- **Relational PostgreSQL Schema**: Normalized schema (`database/schema.sql`) and seed data (`database/seed.sql`) ready to scale to 10,000+ O*NET/ISCO standardized occupations.
- **Administrative Telemetry Dashboard**: Visual analytics including top explored categories, assessment growth trend, and cohort skill gaps.

---

## 🚀 Live Navigation & Features

1. **Home**: Hero presentation, live interactive preview mockup, 5-stage process methodology, and ethical advisory disclaimer.
2. **Career Assessment (6 Steps)**:
   - Step 1: Education (Degree, Level, Specialization, Score, Status)
   - Step 2: Skills (Categorized chips, Custom skill input, Beginner/Intermediate/Advanced proficiencies)
   - Step 3: Interests (22 multi-disciplinary domains)
   - Step 4: Work Preferences (10 environmental and cognitive style axes)
   - Step 5: Strengths (15 transferable cognitive and interpersonal traits)
   - Step 6: Career Goals (Timeline, Target salary, Learning hours/week, Immediate horizon)
   - *Quick Pre-fill buttons available for instant 1-click evaluation: Tech/BCA, Healthcare, Finance, and Creative.*
3. **Career Explorer**: Filter by 20+ categories, search by keywords, filter by difficulty, sort by match score, and bookmark saved careers.
4. **My Results**: Primary recommendation spotlight, breakdown of helping vs lowering factors, sub-scores, and chronological assessment history.
5. **Personalized Roadmap**: 4-phase curricula (Foundation, Core Skills, Applied Projects, Career Prep) with interactive check-offs and note-taking.
6. **Skills Gap Analysis**: Target career selector, breakdown of satisfied vs to-improve vs critical missing competencies, and recommended next 3 skills to learn.
7. **Career Comparison**: Side-by-side factual evaluation of up to 3 target paths.
8. **Admin Dashboard**: Real-time KPI cards, SVG category bar charts, weekly assessment trend line charts, and cohort skill gap rankings.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide Icons, Motion.
- **Backend**: Node.js Express layered REST API (`server.ts`).
- **Database**: PostgreSQL DDL schema (`database/schema.sql`) & Seed DML (`database/seed.sql`).
- **Design Constitution**: Follows strict zero-pill discipline, WCAG AA contrast, tabular numerals (`tabular-nums`), and single-elevation cards.

---

## 📋 Quick Start & Evaluation Guide

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Instant Demo Evaluation
- Click **"Take Career Assessment"** from the top bar or hero.
- Click any of the **Quick Demo** buttons (e.g. `Tech / BCA`, `Healthcare`, `Finance`, `Creative`) to populate all 6 steps in 1 click.
- Click through to **"Analyze My Career"** to view deterministic recommendations, factor breakdowns, and generated roadmaps.
- Visit **"Career Explorer"** to search across 20+ non-technical and technical disciplines.
- Use the **Admin Console** (accessible from the footer or by logging in as `admin@careerpath.ai`).

---

## ⚖️ Ethical AI & Advisory Disclaimer

> *"Career recommendations are guidance based on the information provided. They are not guarantees of employment, income, or future outcomes."*
