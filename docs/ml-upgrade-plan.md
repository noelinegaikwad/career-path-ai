# CareerPath AI — Machine Learning (ML) Upgrade Architecture Plan

## 1. Executive Summary

The current CareerPath AI architecture employs a deterministic, multi-factor weighted scoring model (`ScoringEngine`). This ensures transparency, reproducibility, and explainability.

This document outlines the **phased migration strategy** to transition from rule-based weighted scoring to a **supervised Learning-to-Rank (LTR) and Two-Tower Neural Recommendation Engine** without altering the client-facing UI, explanation interfaces, or roadmap engines.

---

## 2. Decoupled Architecture Preservation

The application interface is structured as follows:

```
User Input Assessment
        │
        ▼
FeatureExtractor  ──► [Feature Vector: Dense + Sparse]
        │
        ▼
ScoringEngine     ──► [Drop-In Replacement with ML Inference Service]
        │
        ▼
ExplanationEngine ──► [SHAP / Integrated Gradients Feature Importance]
        │
        ▼
RoadmapEngine     ──► [Personalized Curricula Execution]
```

Because `ScoringEngine` implements a clean interface `calculateScore(career: Career, features: ExtractedFeatures)`, an ML model serving container (e.g. Triton, TorchServe, or FastAPI ONNX Runtime) can be swapped in seamlessly.

---

## 3. Data Collection & Flywheel Protocol

### A. Cold-Start Problem Mitigation
- **Deterministic Baseline**: The current deterministic engine serves as the cold-start ground truth.
- **Implicit Telemetry Collection**:
  - Saved careers (`saved_careers` table)
  - Roadmaps activated (`user_progress` table)
  - Modules marked complete vs abandoned
  - Time spent viewing detailed career dossiers

### B. Positive & Negative Engagement Labels
- **Positive Label ($y = 1$)**: User saves career, completes $\ge 2$ roadmap modules, or ranks it in top comparison.
- **Negative Label ($y = 0$)**: User receives recommendation in top 3 but ignores or discards it for an alternate path.

---

## 4. Proposed ML Model Architectures

### Phase 1: Gradient Boosted Trees (LightGBM / XGBoost Ranker)
- **Objective**: `lambdarank` with NDCG@5 optimization.
- **Input Features**:
  - Candidate vector: Normalized skill frequencies, educational rank, work preference vector (6 dimensions).
  - Career vector: O*NET complexity index, prerequisite skill count, median salary.
  - Interaction features: Cosine similarity between candidate skill embeddings and career prerequisite embeddings.
- **Benefits**: Extremely fast inference ($< 5\text{ms}$), native handling of tabular features, high interpretability via TreeSHAP.

### Phase 2: Two-Tower Neural Network (Embedding-Based Retrieval)
```
[User Profile Features]          [Career Occupational Metadata]
           │                                     │
           ▼                                     ▼
     User Tower (MLP)                     Career Tower (MLP)
           │                                     │
           ▼                                     ▼
User Embedding u in R^128            Career Embedding c in R^128
           └──────────────────┬──────────────────┘
                              │ Dot Product / Cosine
                              ▼
                        Score = u . c
```
- **Vector Search Engine**: Ingest Career Embeddings into pgvector (PostgreSQL Vector Extension) or Milvus for sub-millisecond retrieval across 50,000+ global occupations.

---

## 5. Offline Evaluation & Fairness Checks

Before deploying any trained model to production, the pipeline must pass:
1. **NDCG@5 and MAP (Mean Average Precision)** benchmarks exceeding the deterministic baseline.
2. **Demographic Parity & Bias Audits**: Verify recommendations do not cluster disproportionately on gender-correlated occupations or socioeconomic indicators.
3. **Calibrated Explanation Pipeline**: Convert neural model weights into human-readable explanations via KernelSHAP or attention weights.
