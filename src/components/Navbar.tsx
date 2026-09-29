import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Menu, X, User, Shield, Compass, Sparkles, BookOpen, Layers, Info } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: UserProfile | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  savedCareersCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  onOpenAuth,
  onLogout,
  savedCareersCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'assessment', label: 'Career Assessment' },
    { id: 'explorer', label: 'Career Explorer' },
    { id: 'results', label: 'My Results' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
  ];

  if (currentUser?.role === 'admin') {
    navLinks.push({ id: 'admin', label: 'Admin' });
  }

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand title, one line wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2 text-left focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-sm ring-1 ring-white/20 transition-transform group-hover:scale-105">
              <Compass className="h-5 w-5 text-indigo-100" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-indigo-300">
              CareerPath AI
            </span>
          </button>
        </div>

        {/* Zone 2: 4-6 nav links, 1-2 word labels, single line */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
          {navLinks.map(link => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-1.5 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-indigo-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {currentUser ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs font-semibold text-slate-200 truncate max-w-[130px]">
                  {currentUser.name}
                </span>
                <span className="text-[11px] text-slate-500">
                  {currentUser.role === 'admin' ? 'Administrator' : 'Student / Candidate'}
                </span>
              </div>
              <button
                onClick={() => handleNavClick(currentUser.role === 'admin' ? 'admin' : 'results')}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors ring-1 ring-slate-700/60"
                title="Account Profile"
              >
                {currentUser.role === 'admin' ? (
                  <Shield className="h-4 w-4 text-amber-400" />
                ) : (
                  <User className="h-4 w-4 text-indigo-300" />
                )}
              </button>
              <button
                onClick={onLogout}
                className="hidden sm:inline-flex px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAuth}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap"
              >
                Log In
              </button>
              <button
                onClick={() => handleNavClick('assessment')}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                Take Assessment
              </button>
            </div>
          )}

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map(link => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-950/60 text-indigo-300 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            {currentUser ? (
              <div className="flex items-center justify-between px-2 pt-1">
                <div>
                  <div className="text-sm font-medium text-white">{currentUser.name}</div>
                  <div className="text-xs text-slate-400">{currentUser.email}</div>
                </div>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 text-xs text-rose-400 border border-rose-900/60 rounded-md hover:bg-rose-950/40"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    onOpenAuth();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg text-center"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleNavClick('assessment')}
                  className="flex-1 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg text-center"
                >
                  Start Assessment
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
