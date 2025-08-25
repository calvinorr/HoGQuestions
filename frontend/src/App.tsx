import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Games from './components/Games';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GamepadIcon, HelpCircle, Trophy, BarChart3, Settings, Users, Menu, X } from 'lucide-react';
import './App.css'
import Container from '@/components/ui/container';

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Container maxWidth="5xl" className="py-8">
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 border"
          style={{
            background:
              'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(99, 102, 241, 0.15) 100%)',
            backdropFilter: 'blur(15px)',
            borderColor: 'rgba(148, 163, 184, 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="relative max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-16 w-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
                  boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4)',
                }}
              >
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 12h.01M12 12h.01M18 12h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h1
                  className="text-5xl font-bold tracking-tight mb-2"
                  style={{
                    background:
                      'linear-gradient(90deg, #60a5fa 0%, #a855f7 50%, #4f46e5 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(96, 165, 250, 0.3)',
                  }}
                >
                  House of Games
                </h1>
                <p className="text-xl font-medium" style={{ color: '#93c5fd' }}>
                  Professional Admin Dashboard
                </p>
              </div>
            </div>
            <p className="text-xl max-w-3xl leading-relaxed" style={{ color: '#e2e8f0' }}>
              Experience the ultimate admin interface for BBC's House of Games. Manage all 22 game formats,
              create engaging quiz experiences, and deliver professional quiz sessions with style.
            </p>
          </div>
        </div>
      </Container>

      {/* Stat Cards */}
      <Container maxWidth="5xl" className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="w-full card-gradient-blue hover-lift hover-glow group card-constrain">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-2">Total Games</p>
                  <p className="text-3xl font-bold text-blue-100 group-hover:scale-105 transition-transform duration-200">22</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 12h.01M12 12h.01M18 12h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full card-gradient-green hover-lift hover-glow group card-constrain">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-2">Questions</p>
                  <p className="text-3xl font-bold text-emerald-100 group-hover:scale-105 transition-transform duration-200">156</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-md">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 12h.01M12 12h.01M18 12h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full card-gradient-purple hover-lift hover-glow group card-constrain">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">Quiz Sessions</p>
                  <p className="text-3xl font-bold text-purple-100 group-hover:scale-105 transition-transform duration-200">12</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-md">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 12h.01M12 12h.01M18 12h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full card-gradient-orange hover-lift hover-glow group card-constrain">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-orange-300 uppercase tracking-wider mb-2">Active Players</p>
                  <p className="text-3xl font-bold text-orange-100 group-hover:scale-105 transition-transform duration-200">48</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-md">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 12h.01M12 12h.01M18 12h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Management Tools */}
      <Container maxWidth="7xl" className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold heading-gradient">Management Tools</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">Access professional-grade administrative functions designed for seamless quiz management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <div className="w-full group hover-lift glass-card relative overflow-hidden cursor-pointer card-constrain">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/5"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 12h.01M12 12h.01M18 12h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="px-3 py-1 bg-blue-500/20 text-blue-300 border-blue-500/30 font-semibold rounded-md">22 Types</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Game Management</h3>
              <p className="text-foreground/70 leading-relaxed text-base mb-4">
                Configure and manage all 22 House of Games formats including Answer Smash, Rhyme Time, and more.
              </p>
              <a href="/games" className="block">
                <button className="w-full btn-primary text-white font-semibold py-3 text-base">Manage Games</button>
              </a>
            </div>
          </div>

          <div className="w-full group hover-lift glass-card relative overflow-hidden opacity-70 card-constrain">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center shadow-md">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 12h.01M12 12h.01M18 12h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="px-3 py-1 bg-gray-500/20 text-gray-300 border-gray-500/30 font-semibold rounded-md">Coming Soon</div>
              </div>
              <h3 className="text-xl font-bold text-foreground/60 mb-3">Question Library</h3>
              <p className="text-foreground/50 leading-relaxed text-base mb-4">
                Create, edit, and organize questions for each game type.
              </p>
              <button className="w-full bg-gray-600/50 text-gray-300 py-3 text-base cursor-not-allowed" disabled>Manage Questions</button>
            </div>
          </div>

          <div className="w-full group hover-lift glass-card relative overflow-hidden opacity-70 card-constrain">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center shadow-md">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 12h.01M12 12h.01M18 12h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="px-3 py-1 bg-gray-500/20 text-gray-300 border-gray-500/30 font-semibold rounded-md">Coming Soon</div>
              </div>
              <h3 className="text-xl font-bold text-foreground/60 mb-3">Quiz Sessions</h3>
              <p className="text-foreground/50 leading-relaxed text-base mb-4">
                Create live quiz sessions with real-time player interactions.
              </p>
              <button className="w-full bg-gray-600/50 text-gray-300 py-3 text-base cursor-not-allowed" disabled>Create Session</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
        {/* Stunning Modern Navigation (responsive with mobile slide-over) */}
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-900/75 border-b border-slate-700/50 shadow-xl">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <GamepadIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">House of Games</span>
                  <span className="block text-sm text-blue-300/80 font-medium -mt-1">Professional Admin</span>
                </div>
              </Link>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-3">
                <Link to="/">
                  <Button variant="ghost" className="gap-2 text-slate-300 hover:text-white hover:bg-slate-800/50 px-4 py-2">
                    <BarChart3 className="h-5 w-5" />
                    Dashboard
                  </Button>
                </Link>
                <Link to="/games">
                  <Button variant="ghost" className="gap-2 text-slate-300 hover:text-white hover:bg-slate-800/50 px-4 py-2">
                    <GamepadIcon className="h-5 w-5" />
                    Games
                  </Button>
                </Link>
                <Button variant="ghost" size="icon" className="ml-4 h-12 w-12 hover:bg-slate-800/50 rounded-xl text-slate-300 hover:text-white" aria-label="Settings">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(true)} aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile slide-over */}
          <div className={`${mobileOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="fixed inset-0 z-50">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
              <aside className="absolute right-0 top-0 h-full w-72 bg-slate-900 p-6 border-l border-slate-700/30">
                <div className="flex items-center justify-between mb-6">
                  <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <GamepadIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-foreground">House of Games</div>
                    </div>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="flex flex-col gap-2">
                  <Link to="/" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800/50">Dashboard</Link>
                  <Link to="/games" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800/50">Games</Link>
                  <Link to="#" className="px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800/50">Settings</Link>
                </nav>
              </aside>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
