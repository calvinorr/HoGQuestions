import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Games from './components/Games';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GamepadIcon, HelpCircle, Trophy, BarChart3, Settings, Users, Menu, X } from 'lucide-react';
import './App.css'
import Container from '@/components/ui/container';
import Dashboard from '@/components/Dashboard';

function Home() {
  return <Dashboard />;
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
