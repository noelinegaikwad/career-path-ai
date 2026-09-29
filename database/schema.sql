-- ============================================================================
-- CareerPath AI — Comprehensive Relational PostgreSQL Database Schema
-- Scalable to 10,000+ Global Occupations and Millions of User Assessments
-- ============================================================================

-- Enable UUID extension for robust distributed keys
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin', 'counselor')),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);

-- 2. USER PROFILES TABLE
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    country VARCHAR(100) DEFAULT 'Global',
    current_education_level VARCHAR(100),
    degree VARCHAR(255),
    specialization VARCHAR(255),
    graduation_year INT,
    current_status VARCHAR(50) CHECK (current_status IN ('Student', 'Recent Graduate', 'Working Professional', 'Career Switcher')),
    cgpa_or_percentage VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_profiles_user UNIQUE (user_id)
);

-- 3. STANDARDIZED SKILLS REPOSITORY
CREATE TABLE IF NOT EXISTS skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_skills_name ON skills(name);
CREATE INDEX idx_skills_category ON skills(category);

-- 4. OCCUPATIONAL CATEGORIES TAXONOMY
CREATE TABLE IF NOT EXISTS career_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL UNIQUE,
    slug VARCHAR(150) NOT NULL UNIQUE,
    description TEXT,
    icon_identifier VARCHAR(100),
    sort_order INT DEFAULT 0
);

-- 5. GLOBAL CAREERS TABLE (Extensible to 10,000+ occupations)
CREATE TABLE IF NOT EXISTS careers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    category_id UUID NOT NULL REFERENCES career_categories(id) ON DELETE RESTRICT,
    subcategory VARCHAR(255) NOT NULL,
    occupation_code VARCHAR(100), -- Standard O*NET-SOC or ISCO-08 code
    description TEXT NOT NULL,
    work_environment TEXT NOT NULL,
    difficulty_level VARCHAR(50) NOT NULL DEFAULT 'Moderate' CHECK (difficulty_level IN ('Entry', 'Moderate', 'Advanced')),
    typical_duration_months INT NOT NULL DEFAULT 6,
    salary_entry_usd VARCHAR(50),
    salary_median_usd VARCHAR(50),
    salary_senior_usd VARCHAR(50),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_careers_slug ON careers(slug);
CREATE INDEX idx_careers_category ON careers(category_id);
CREATE INDEX idx_careers_occupation_code ON careers(occupation_code);

-- 6. CAREER SKILL PREREQUISITES MAPPING
CREATE TABLE IF NOT EXISTS career_skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    career_id UUID NOT NULL REFERENCES careers(id) ON DELETE CASCADE,
    skill_id UUID NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
    importance_weight INT NOT NULL DEFAULT 3 CHECK (importance_weight BETWEEN 1 AND 5),
    min_proficiency VARCHAR(50) NOT NULL CHECK (min_proficiency IN ('Beginner', 'Intermediate', 'Advanced')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_career_skills UNIQUE (career_id, skill_id)
);

CREATE INDEX idx_career_skills_career ON career_skills(career_id);
CREATE INDEX idx_career_skills_skill ON career_skills(skill_id);

-- 7. CAREER INTERESTS MAPPING
CREATE TABLE IF NOT EXISTS career_interests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    career_id UUID NOT NULL REFERENCES careers(id) ON DELETE CASCADE,
    interest_domain VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_career_interests UNIQUE (career_id, interest_domain)
);

-- 8. CAREER PROGRESSION PATHWAY STAGES
CREATE TABLE IF NOT EXISTS career_progression_stages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    career_id UUID NOT NULL REFERENCES careers(id) ON DELETE CASCADE,
    stage_index INT NOT NULL CHECK (stage_index BETWEEN 1 AND 5),
    stage_title VARCHAR(150) NOT NULL,
    typical_experience VARCHAR(100) NOT NULL,
    focus_responsibilities TEXT NOT NULL
);

-- 9. USER ASSESSMENTS TABLE
CREATE TABLE IF NOT EXISTS assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL, -- Nullable for Guest Mode assessments
    session_id VARCHAR(255),
    degree VARCHAR(255) NOT NULL,
    specialization VARCHAR(255),
    work_pref_teamwork INT NOT NULL CHECK (work_pref_teamwork BETWEEN 1 AND 5),
    work_pref_building_analyzing INT NOT NULL CHECK (work_pref_building_analyzing BETWEEN 1 AND 5),
    work_pref_creative_structured INT NOT NULL CHECK (work_pref_creative_structured BETWEEN 1 AND 5),
    work_pref_math_comfort INT NOT NULL CHECK (work_pref_math_comfort BETWEEN 1 AND 5),
    work_pref_people_facing INT NOT NULL CHECK (work_pref_people_facing BETWEEN 1 AND 5),
    work_pref_practical_theoretical INT NOT NULL CHECK (work_pref_practical_theoretical BETWEEN 1 AND 5),
    workplace_setting VARCHAR(50) DEFAULT 'Hybrid',
    desired_role VARCHAR(255),
    preferred_industry VARCHAR(150),
    expected_salary_range VARCHAR(100),
    learning_hours_per_week INT NOT NULL DEFAULT 10,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_assessments_user ON assessments(user_id);
CREATE INDEX idx_assessments_created ON assessments(created_at);

-- 10. USER ASSESSED SKILLS (ANSWERS)
CREATE TABLE IF NOT EXISTS assessment_skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    skill_name VARCHAR(255) NOT NULL,
    proficiency VARCHAR(50) NOT NULL CHECK (proficiency IN ('Beginner', 'Intermediate', 'Advanced')),
    category VARCHAR(100)
);

CREATE INDEX idx_assessment_skills_asm ON assessment_skills(assessment_id);

-- 11. USER ASSESSED INTERESTS & STRENGTHS
CREATE TABLE IF NOT EXISTS assessment_interests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    interest_domain VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS assessment_strengths (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    strength_name VARCHAR(100) NOT NULL
);

-- 12. GENERATED RECOMMENDATION RESULTS
CREATE TABLE IF NOT EXISTS recommendations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    career_id UUID NOT NULL REFERENCES careers(id) ON DELETE CASCADE,
    profile_match_score INT NOT NULL CHECK (profile_match_score BETWEEN 0 AND 100),
    skill_match_score INT NOT NULL,
    interest_match_score INT NOT NULL,
    education_match_score INT NOT NULL,
    strength_match_score INT NOT NULL,
    work_pref_match_score INT NOT NULL,
    career_goal_match_score INT NOT NULL,
    positive_factors JSONB NOT NULL DEFAULT '[]'::JSONB,
    lowering_factors JSONB NOT NULL DEFAULT '[]'::JSONB,
    recommended_next_step TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_asm_career_rec UNIQUE (assessment_id, career_id)
);

CREATE INDEX idx_recommendations_asm ON recommendations(assessment_id);

-- 13. SAVED CAREERS BOOKMARKS
CREATE TABLE IF NOT EXISTS saved_careers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    career_id UUID NOT NULL REFERENCES careers(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_user_saved_career UNIQUE (user_id, career_id)
);

-- 14. PERSONALIZED ROADMAPS
CREATE TABLE IF NOT EXISTS roadmaps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    career_id UUID NOT NULL REFERENCES careers(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    assessment_id UUID REFERENCES assessments(id) ON DELETE SET NULL,
    total_phases INT NOT NULL DEFAULT 4,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 15. ROADMAP MODULES
CREATE TABLE IF NOT EXISTS roadmap_modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    roadmap_id UUID NOT NULL REFERENCES roadmaps(id) ON DELETE CASCADE,
    phase_number INT NOT NULL,
    phase_title VARCHAR(255) NOT NULL,
    week_range VARCHAR(50) NOT NULL,
    module_title VARCHAR(255) NOT NULL,
    module_description TEXT NOT NULL,
    key_skills JSONB NOT NULL DEFAULT '[]'::JSONB,
    milestone_project TEXT NOT NULL,
    sort_order INT NOT NULL DEFAULT 1
);

-- 16. USER ROADMAP PROGRESS & NOTES
CREATE TABLE IF NOT EXISTS user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    roadmap_module_id UUID NOT NULL REFERENCES roadmap_modules(id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL DEFAULT 'Not Started' CHECK (status IN ('Not Started', 'In Progress', 'Completed')),
    notes TEXT,
    completed_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_user_module_progress UNIQUE (user_id, roadmap_module_id)
);
