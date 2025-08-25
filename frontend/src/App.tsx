import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Games from './components/Games';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GamepadIcon, HelpCircle, Trophy, BarChart3, Settings, Users } from 'lucide-react';
import './App.css'

function Home() {
  return (
    <div className="w-full">
      <div className="space-y-12 px-4 sm:px-6 lg:px-8 py-8">
        {/* Stunning Hero Section */}
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 border" style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(99, 102, 241, 0.15) 100%)', 
        backdropFilter: 'blur(15px)',
        borderColor: 'rgba(148, 163, 184, 0.2)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        <div className="relative max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)', 
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4)'
            }}>
              <GamepadIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-2" style={{
                background: 'linear-gradient(90deg, #60a5fa 0%, #a855f7 50%, #4f46e5 100%)', 
                backgroundClip: 'text', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(96, 165, 250, 0.3)'
              }}>
                House of Games
              </h1>
              <p className="text-xl font-medium" style={{color: '#93c5fd'}}>Professional Admin Dashboard</p>
            </div>
          </div>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: '#e2e8f0'}}>
            Experience the ultimate admin interface for BBC's House of Games. Manage all 22 game formats, 
            create engaging quiz experiences, and deliver professional quiz sessions with style.
          </p>
        </div>
      </div>

        {/* Beautiful Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        <Card className="card-gradient-blue hover-lift hover-glow group">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-2">Total Games</p>
                <p className="text-4xl font-bold text-blue-100 group-hover:scale-105 transition-transform duration-200">22</p>
              </div>
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <GamepadIcon className="h-7 w-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient-green hover-lift hover-glow group">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-2">Questions</p>
                <p className="text-4xl font-bold text-emerald-100 group-hover:scale-105 transition-transform duration-200">156</p>
              </div>
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                <HelpCircle className="h-7 w-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient-purple hover-lift hover-glow group">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">Quiz Sessions</p>
                <p className="text-4xl font-bold text-purple-100 group-hover:scale-105 transition-transform duration-200">12</p>
              </div>
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg">
                <Trophy className="h-7 w-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient-orange hover-lift hover-glow group">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-300 uppercase tracking-wider mb-2">Active Players</p>
                <p className="text-4xl font-bold text-orange-100 group-hover:scale-105 transition-transform duration-200">48</p>
              </div>
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg">
                <Users className="h-7 w-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

        {/* Professional Management Tools */}
        <div className="animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4 heading-gradient">
            Management Tools
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Access professional-grade administrative functions designed for seamless quiz management
          </p>
        </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <Card className="group hover-lift glass-card relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/5"></div>
            <CardHeader className="relative pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                  <GamepadIcon className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1 font-semibold">
                  22 Types
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground group-hover:text-blue-300 transition-colors">
                Game Management
              </CardTitle>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <p className="text-foreground/70 leading-relaxed text-base">
                Configure and manage all 22 House of Games formats including Answer Smash, 
                Rhyme Time, and more. Professional tools for rules, difficulty levels, and scoring systems.
              </p>
              <Link to="/games" className="block">
                <Button className="w-full btn-primary text-white font-semibold py-3 text-base group-hover:shadow-2xl">
                  Manage Games
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover-lift glass-card relative overflow-hidden opacity-70">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5"></div>
            <CardHeader className="relative pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center shadow-xl">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30 px-3 py-1 font-semibold">
                  Coming Soon
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground/60">
                Question Library
              </CardTitle>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <p className="text-foreground/50 leading-relaxed text-base">
                Create, edit, and organize questions for each game type. Advanced tools for 
                importing from external sources and AI-powered question generation.
              </p>
              <Button className="w-full bg-gray-600/50 text-gray-300 py-3 text-base cursor-not-allowed" disabled>
                Manage Questions
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover-lift glass-card relative overflow-hidden opacity-70">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5"></div>
            <CardHeader className="relative pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center shadow-xl">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30 px-3 py-1 font-semibold">
                  Coming Soon
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground/60">
                Quiz Sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <p className="text-foreground/50 leading-relaxed text-base">
                Create live quiz sessions with real-time player interactions. Professional-grade 
                scoring systems perfect for events, competitions, and broadcasts.
              </p>
              <Button className="w-full bg-gray-600/50 text-gray-300 py-3 text-base cursor-not-allowed" disabled>
                Create Session
              </Button>
            </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
        {/* Stunning Modern Navigation */}
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
              
              <div className="flex items-center gap-3">
                <Link to="/">
                  <Button variant="ghost" className="gap-2 text-slate-300 hover:text-white hover:bg-slate-800/50 px-6 py-3">
                    <BarChart3 className="h-5 w-5" />
                    Dashboard
                  </Button>
                </Link>
                <Link to="/games">
                  <Button variant="ghost" className="gap-2 text-slate-300 hover:text-white hover:bg-slate-800/50 px-6 py-3">
                    <GamepadIcon className="h-5 w-5" />
                    Games
                  </Button>
                </Link>
                <Button variant="ghost" size="icon" className="ml-4 h-12 w-12 hover:bg-slate-800/50 rounded-xl text-slate-300 hover:text-white">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="w-full max-w-7xl mx-auto">
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
