import React, { useState, useEffect } from 'react';
import { AssessmentData, Career, CareerRecommendation, UserProfile } from './types';
import { CAREERS_DATABASE } from './data/careersData';
import { storageService, DEFAULT_ADMIN, DEFAULT_USER } from './services/storageService';
import { apiService } from './services/apiService';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Assessment } from './components/Assessment';
import { AnalysisLoading } from './components/AnalysisLoading';
import { MyResults } from './components/MyResults';
import { CareerExplorer } from './components/CareerExplorer';
import { CareerDetailModal } from './components/CareerDetailModal';
import { CareerComparison } from './components/CareerComparison';
import { PersonalizedRoadmap } from './components/PersonalizedRoadmap';
import { SkillsAnalysis } from './components/SkillsAnalysis';
import { AdminDashboard } from './components/AdminDashboard';
import { About } from './components/About';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [currentAssessment, setCurrentAssessment] = useState<AssessmentData | null>(null);
  const [assessmentHistory, setAssessmentHistory] = useState<AssessmentData[]>([]);
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);
  const [savedCareerIds, setSavedCareerIds] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [pendingAssessmentData, setPendingAssessmentData] = useState<AssessmentData | null>(null);

  // Modals & Navigation targets
  const [selectedDetailCareer, setSelectedDetailCareer] = useState<Career | null>(null);
  const [selectedCompareCareers, setSelectedCompareCareers] = useState<Career[]>([]);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [activeRoadmapCareer, setActiveRoadmapCareer] = useState<Career | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize data on mount
  useEffect(() => {
    // Clear any sample placeholder so the user starts with a completely blank slate
    storageService.clearSeedIfUnmodified();

    const user = storageService.getCurrentUser() || DEFAULT_USER;
    setCurrentUser(user);

    const assessment = storageService.getCurrentAssessment();
    setCurrentAssessment(assessment);

    const history = storageService.getAssessmentHistory();
    setAssessmentHistory(history);

    const saved = storageService.getSavedCareerIds();
    setSavedCareerIds(saved);

    if (assessment) {
      apiService.getRecommendations(assessment).then(recs => {
        setRecommendations(recs);
        if (recs.length > 0 && !activeRoadmapCareer) {
          setActiveRoadmapCareer(recs[0].career);
        }
      });
    }
  }, []);

  // Handle Assessment submission
  const handleAssessmentSubmit = (data: AssessmentData) => {
    setPendingAssessmentData(data);
    setIsAnalyzing(true);
  };

  // Called when Analysis animation completes
  const handleAnalysisComplete = async () => {
    if (!pendingAssessmentData) {
      setIsAnalyzing(false);
      return;
    }

    const saved = await apiService.saveAssessment(pendingAssessmentData);
    setCurrentAssessment(saved);
    setAssessmentHistory(storageService.getAssessmentHistory());

    const recs = await apiService.getRecommendations(saved);
    setRecommendations(recs);
    if (recs.length > 0) {
      setActiveRoadmapCareer(recs[0].career);
    }

    setIsAnalyzing(false);
    setPendingAssessmentData(null);
    setActiveTab('results');
    setToastMessage('Assessment evaluated successfully! Explore your personalized profile.');
  };

  // Toggle Save Career
  const handleToggleSaveCareer = (careerId: string) => {
    const isNowSaved = storageService.toggleSaveCareer(careerId);
    setSavedCareerIds(storageService.getSavedCareerIds());
    const career = CAREERS_DATABASE.find(c => c.id === careerId);
    setToastMessage(isNowSaved ? `Added "${career?.title}" to Saved Careers` : `Removed "${career?.title}" from Saved Careers`);
  };

  // Compare toggling (up to 3)
  const handleToggleCompareCareer = (career: Career) => {
    if (selectedCompareCareers.some(c => c.id === career.id)) {
      setSelectedCompareCareers(selectedCompareCareers.filter(c => c.id !== career.id));
    } else {
      if (selectedCompareCareers.length >= 3) {
        setToastMessage('You can compare a maximum of 3 careers simultaneously.');
        return;
      }
      setSelectedCompareCareers([...selectedCompareCareers, career]);
      setToastMessage(`Added "${career.title}" to Comparison`);
    }
  };

  const handleStartRoadmap = (career: Career) => {
    setActiveRoadmapCareer(career);
    setActiveTab('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setToastMessage(`Loaded learning roadmap for "${career.title}"`);
  };

  const handleLogout = () => {
    storageService.setCurrentUser(null);
    setCurrentUser(null);
    setToastMessage('You have logged out.');
  };

  const handleAuthSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    setToastMessage(`Welcome back, ${user.name}!`);
    if (user.role === 'admin') {
      setActiveTab('admin');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
        savedCareersCount={savedCareerIds.length}
      />

      {/* Main Viewport Routing */}
      <main className="flex-1">
        {isAnalyzing ? (
          <AnalysisLoading onComplete={handleAnalysisComplete} />
        ) : (
          <>
            {activeTab === 'home' && (
              <Home
                onStartAssessment={() => setActiveTab('assessment')}
                onExploreCareers={() => setActiveTab('explorer')}
                onViewResults={() => setActiveTab('results')}
                hasAssessment={Boolean(currentAssessment)}
              />
            )}

            {activeTab === 'assessment' && (
              <Assessment
                initialData={currentAssessment}
                onSubmit={handleAssessmentSubmit}
                onCancel={() => setActiveTab('home')}
              />
            )}

            {activeTab === 'results' && (
              <MyResults
                assessment={currentAssessment}
                recommendations={recommendations}
                savedCareerIds={savedCareerIds}
                onToggleSaveCareer={handleToggleSaveCareer}
                onViewCareerDetail={career => setSelectedDetailCareer(career)}
                onStartRoadmap={handleStartRoadmap}
                onRetakeAssessment={() => {
                  setCurrentAssessment(null);
                  setActiveTab('assessment');
                }}
                onSelectCompare={handleToggleCompareCareer}
                isCareerSelectedForCompare={id => selectedCompareCareers.some(c => c.id === id)}
                assessmentHistory={assessmentHistory}
                onSelectHistoryAssessment={hist => {
                  setCurrentAssessment(hist);
                  apiService.getRecommendations(hist).then(recs => setRecommendations(recs));
                  setToastMessage('Loaded historical evaluation results.');
                }}
              />
            )}

            {activeTab === 'explorer' && (
              <CareerExplorer
                careers={CAREERS_DATABASE}
                recommendations={recommendations}
                savedCareerIds={savedCareerIds}
                onToggleSaveCareer={handleToggleSaveCareer}
                onViewCareerDetail={career => setSelectedDetailCareer(career)}
                onStartRoadmap={handleStartRoadmap}
                selectedCompareCareers={selectedCompareCareers}
                onToggleCompareCareer={handleToggleCompareCareer}
                onOpenComparisonModal={() => setIsComparisonModalOpen(true)}
                onClearCompare={() => setSelectedCompareCareers([])}
              />
            )}

            {activeTab === 'roadmap' && (
              <PersonalizedRoadmap
                currentCareer={activeRoadmapCareer || (recommendations[0]?.career ?? CAREERS_DATABASE[0])}
                userSkills={currentAssessment?.skills || []}
                learningHoursPerWeek={currentAssessment?.careerGoals?.learningHoursPerWeek || 12}
                onSelectCareer={career => setActiveRoadmapCareer(career)}
                onShowToast={msg => setToastMessage(msg)}
              />
            )}

            {activeTab === 'skills' && (
              <SkillsAnalysis
                currentCareer={activeRoadmapCareer || (recommendations[0]?.career ?? CAREERS_DATABASE[0])}
                userSkills={currentAssessment?.skills || []}
                onSelectCareer={career => setActiveRoadmapCareer(career)}
                onStartRoadmap={handleStartRoadmap}
              />
            )}

            {activeTab === 'about' && <About />}

            {activeTab === 'admin' && (
              <AdminDashboard onBackToApp={() => setActiveTab('results')} />
            )}
          </>
        )}
      </main>

      {/* Global Modals */}
      <CareerDetailModal
        career={selectedDetailCareer}
        userSkills={currentAssessment?.skills || []}
        isSaved={selectedDetailCareer ? savedCareerIds.includes(selectedDetailCareer.id) : false}
        onToggleSave={() => selectedDetailCareer && handleToggleSaveCareer(selectedDetailCareer.id)}
        onClose={() => setSelectedDetailCareer(null)}
        onStartRoadmap={handleStartRoadmap}
      />

      {isComparisonModalOpen && (
        <CareerComparison
          selectedCareers={selectedCompareCareers}
          recommendations={recommendations}
          userSkills={currentAssessment?.skills || []}
          onRemoveCareer={id => setSelectedCompareCareers(selectedCompareCareers.filter(c => c.id !== id))}
          onClose={() => setIsComparisonModalOpen(false)}
          onStartRoadmap={handleStartRoadmap}
        />
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      {/* Toast Notification Container */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Clean Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-10 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">CareerPath AI</span>
            <span>·</span>
            <span>Turn your skills and interests into a career roadmap.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">
              Methodology
            </button>
            <span>·</span>
            <button onClick={() => setActiveTab('explorer')} className="hover:text-white transition-colors">
              Global Library
            </button>
            <span>·</span>
            <button
              onClick={() => {
                storageService.setCurrentUser(DEFAULT_ADMIN);
                setCurrentUser(DEFAULT_ADMIN);
                setActiveTab('admin');
                setToastMessage('Switched to Administrator account.');
              }}
              className="text-amber-400/80 hover:text-amber-300 transition-colors"
            >
              Admin Console
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
