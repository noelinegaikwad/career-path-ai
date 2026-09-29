-- ============================================================================
-- CareerPath AI — Seed Data for PostgreSQL
-- Seeds Categories, Skills, Occupations across 20+ Global Disciplines
-- ============================================================================

-- 1. SEED CATEGORIES
INSERT INTO career_categories (name, slug, description, sort_order) VALUES
('Technology', 'technology', 'Software engineering, systems architecture, cloud computing, and DevOps.', 1),
('AI & Data', 'ai-data', 'Machine learning, quantitative data science, NLP, and computer vision.', 2),
('Cybersecurity', 'cybersecurity', 'Information assurance, SOC operations, network defense, and ethical penetration testing.', 3),
('Engineering', 'engineering', 'Mechanical, civil, electrical, aerospace, and robotics engineering disciplines.', 4),
('Healthcare & Medicine', 'healthcare-medicine', 'Clinical nursing, medical practice, pharmaceutical science, and behavioral therapy.', 5),
('Science & Research', 'science-research', 'Biotechnology, genomic research, chemistry, physics, and laboratory exploration.', 6),
('Business & Management', 'business-management', 'Product management, strategic consulting, agile project leadership, and operations.', 7),
('Finance & Economics', 'finance-economics', 'Corporate finance, investment analysis, accounting, and quantitative risk.', 8),
('Marketing & Sales', 'marketing-sales', 'Digital growth marketing, performance advertising, SEO, and brand communication.', 9),
('Design & Creative', 'design-creative', 'UI/UX digital product design, industrial design, motion animation, and architecture.', 10),
('Law & Public Service', 'law-public-service', 'Corporate jurisprudence, regulatory compliance, public policy, and civil administration.', 11),
('Education & Pedagogy', 'education-pedagogy', 'STEM teaching, university lecturing, instructional design, and pedagogical guidance.', 12),
('Architecture & Built Environment', 'architecture-built-environment', 'Sustainable architecture, urban planning, BIM detailing, and structural design.', 13),
('Agriculture & Environment', 'agriculture-environment', 'Precision agronomy, crop science, soil conservation, and environmental science.', 14),
('Hospitality & Tourism', 'hospitality-tourism', 'Culinary arts, luxury hotel management, food safety, and travel operations.', 15),
('Aviation & Transportation', 'aviation-transportation', 'Aeronautical flight operations, commercial piloting, and air traffic systems.', 16),
('Sports & Fitness', 'sports-fitness', 'Athletic biomechanics, sports performance telemetry, and kinesiology.', 17),
('Social & Community', 'social-community', 'Clinical social work, crisis de-escalation, and community health advocacy.', 18),
('Skilled Trades', 'skilled-trades', 'Industrial electrical systems, PLC automation, precision machining, and fabrication.', 19)
ON CONFLICT (name) DO NOTHING;

-- 2. SEED DEFAULT USERS
INSERT INTO users (id, email, password_hash, role) VALUES
('00000000-0000-0000-0000-000000000001', 'admin@careerpath.ai', '$2a$12$e8O4KzK3iF8gH2q6Zz1vqe7k5X1U3w4Y5Z6A7B8C9D0E1F2G3H4I5J', 'admin'),
('00000000-0000-0000-0000-000000000002', 'alex.chen@university.edu', '$2a$12$e8O4KzK3iF8gH2q6Zz1vqe7k5X1U3w4Y5Z6A7B8C9D0E1F2G3H4I5J', 'user')
ON CONFLICT (email) DO NOTHING;

-- 3. SEED USER PROFILES
INSERT INTO profiles (user_id, full_name, degree, specialization, graduation_year, current_status, cgpa_or_percentage) VALUES
('00000000-0000-0000-0000-000000000002', 'Alex Chen', 'Bachelor of Computer Applications (BCA)', 'Software Systems', 2026, 'Student', '8.6 CGPA')
ON CONFLICT (user_id) DO NOTHING;

-- 4. SEED SKILLS
INSERT INTO skills (name, category, description) VALUES
('Java', 'Programming', 'Object-oriented programming language for enterprise backends and Android.'),
('Python', 'Programming', 'High-level language ubiquitous in machine learning, scripting, and web.'),
('PostgreSQL', 'Database', 'Open-source object-relational database system with advanced indexing.'),
('REST APIs', 'Web', 'Standard architectural style for distributed web services and HTTP communication.'),
('Git', 'Cloud/DevOps', 'Distributed version control system for source code tracking and collaboration.'),
('Statistics', 'Data/AI', 'Probability distributions, hypothesis testing, and inferential modeling.'),
('Machine Learning', 'Data/AI', 'Supervised and unsupervised predictive models and feature engineering.'),
('Network Security', 'Security', 'Firewall protocols, packet analysis, IDS/IPS, and TCP/IP security.'),
('CAD Modeling (SolidWorks/AutoCAD)', 'Engineering', 'Parametric 3D mechanical computer-aided drafting and assembly tolerancing.'),
('Patient Assessment & Triage', 'Healthcare', 'Clinical physical evaluations, vital signs monitoring, and triage urgency scoring.'),
('Financial Modeling', 'Finance', 'Dynamic 3-statement forecasting and Discounted Cash Flow valuation.'),
('Figma & Design Systems', 'Design', 'Auto-layout, design tokens, interactive prototyping, and component architecture.'),
('Contract Drafting & Negotiation', 'Law', 'Drafting commercial contracts, warranties, indemnities, and MSAs.'),
('Curriculum & Instructional Design', 'Education', 'Learning objectives design, pedagogical frameworks, and Bloom’s taxonomy.'),
('Soil Science & Nutrient Management', 'Agriculture', 'Cation exchange capacity, soil chemistry, and variable-rate nutrient plans.'),
('PLC Programming (Ladder Logic)', 'Skilled Trades', 'Programmable logic controller routines, sensors, and industrial motor controls.'),
('Flight Navigation & Instrument Flying', 'Aviation', 'IFR approach procedures, aeronautical meteorology, and flight deck systems.'),
('Biomechanics & Movement Screening', 'Sports', 'Joint torque kinematics, ground reaction forces, and functional movement screens.')
ON CONFLICT (name) DO NOTHING;
