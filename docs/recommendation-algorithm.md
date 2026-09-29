# CareerPath AI — Recommendation Algorithm Specification

## 1. Overview & Architectural Philosophy

The CareerPath AI recommendation engine is built on **deterministic, transparent, and multi-factor matching**. In career guidance, black-box systems and hallucinated probabilities damage candidate trust and mislead educational investments. 

Our algorithm:
1. **Never guesses arbitrary employment chances** (e.g., "94% chance of getting hired").
2. **Computes a bounded, deterministic Profile Match score** ($0 \dots 100$).
3. **Explains every driver** (both positive matches and critical gaps).
4. **Is fully extensible** to 10,000+ occupations without touching algorithm code.

---

## 2. Multi-Factor Scoring Formula

The Profile Match score is a linear weighted sum of 6 normalized dimensions:

$$\text{ProfileMatch} = \text{round}\Big( 0.35 \cdot S + 0.20 \cdot I + 0.15 \cdot G + 0.10 \cdot E + 0.10 \cdot T + 0.10 \cdot W \Big)$$

Where:
- $S \in [0, 100]$: **Skill Match Score** (Weight: 35%)
- $I \in [0, 100]$: **Interest Match Score** (Weight: 20%)
- $G \in [0, 100]$: **Career Goal Match Score** (Weight: 15%)
- $E \in [0, 100]$: **Education Compatibility Score** (Weight: 10%)
- $T \in [0, 100]$: **Transferable Strength Match Score** (Weight: 10%)
- $W \in [0, 100]$: **Work Preference Euclidean Similarity** (Weight: 10%)

---

## 3. Dimension Specifications

### 3.1 Skill Match Score ($S$) — Weight 35%
For each required skill $k \in K$ of an occupation:
- Target numerical proficiency $t_k$: Beginner = 40, Intermediate = 70, Advanced = 100.
- User declared proficiency $u_k$: Beginner = 35, Intermediate = 70, Advanced = 100.
- Importance weight $w_k \in \{1, 2, 3, 4, 5\}$.

If candidate possesses skill $k$:
$$\text{EarnedPoints}_k = \min\left(1.0, \frac{u_k}{t_k}\right) \cdot w_k \cdot 100$$

If candidate does not possess skill $k$, partial credit (discount factor 0.85) is checked via substring/transferable skill aliases.

Total skill score:
$$S = \frac{\sum_{k \in K} \text{EarnedPoints}_k}{\sum_{k \in K} (w_k \cdot 100)} \times 100$$

### 3.2 Interest Match Score ($I$) — Weight 20%
Measures alignment between candidate's declared interests $U_{\text{int}}$ and the career's matching domains $C_{\text{int}}$:
$$I = \min\left(100, \frac{|U_{\text{int}} \cap C_{\text{int}}|}{|C_{\text{int}}|} \times 100\right)$$
If a user selects the broad parent category (e.g., "Healthcare"), bonus intersection is automatically recognized.

### 3.3 Career Goal Match ($G$) — Weight 15%
Evaluates three sub-criteria:
1. **Industry Alignment (+25 pts)**: Candidate's preferred industry overlaps with the career's operational industries.
2. **Target Role Keyword Overlap (+25 pts)**: Candidate's desired role matches titles or entry-level roles.
3. **Weekly Learning Capacity Feasibility (+10 to -10 pts)**: Penalizes careers requiring $>12$ months runway if candidate has $<8$ weekly study hours available.

### 3.4 Education Compatibility ($E$) — Weight 10%
- Degree/discipline keyword hits against career requirements ($+25$ to $+40$ pts).
- Education level hierarchy adequacy (Doctorate $= 5$, Master's $= 4$, Bachelor's $= 3$, Associate $= 2$, High School $= 1$).

### 3.5 Transferable Strengths ($T$) — Weight 10%
Measures overlap of cognitive and interpersonal strengths:
$$T = \frac{|U_{\text{strength}} \cap C_{\text{strength}}|}{|C_{\text{strength}}|} \times 100$$

### 3.6 Work Preference Similarity ($W$) — Weight 10%
Calculated via normalized Euclidean distance across 6 normalized vectors ($1 \dots 5$ scale):
- Teamwork vs Solo Focus
- Building Products vs Analyzing Data
- Creative Freedom vs Structured Rules
- Mathematics Comfort
- People-Facing vs Machine-Centric
- Practical Hands-On vs Conceptual Theoretical

$$d = \sqrt{\sum_{i=1}^6 (u_i - c_i)^2}, \quad d_{\text{max}} = \sqrt{6 \times 4^2} \approx 9.79$$
$$W = \max\left(20, \left(1 - \frac{d}{d_{\text{max}}}\right) \times 100\right)$$

---

## 4. Explanation Generation Mechanics

Every recommendation emits two distinct factor sets:
- **Factors Helping Your Match**: Specific skills already possessed with $\ge \text{target}$ level, high-priority interest overlaps, and matching cognitive strengths.
- **Factors Lowering Alignment**: High-importance missing skills ($\text{importance} \ge 4$), work style divergences, or study timeline gaps.
- **Recommended Next Step**: Pinpoints the single highest-leverage missing skill to prioritize in Phase 1 of the personalized roadmap.
