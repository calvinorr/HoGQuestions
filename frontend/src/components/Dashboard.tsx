import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/container';
import { GamepadIcon } from 'lucide-react';

/**
 * Dashboard component composed of three columns:
 * - Left: Quick Stats
 * - Center: Management Tools
 * - Right: Activity / Shortcuts
 *
 * This file keeps the subcomponents colocated for now to simplify the initial integration.
 */

function LeftStats() {
  return (
    <aside className="space-y-6">
      <div className="rounded-2xl overflow-hidden glass-card p-4">
        <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>

        <div className="space-y-4">
          <div className="rounded-xl p-4 card-gradient-blue stat-tile">
            <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">Total Games</p>
            <p className="stat-number text-3xl font-extrabold text-blue-100">22</p>
          </div>

          <div className="rounded-xl p-4 card-gradient-green stat-tile">
            <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">Questions</p>
            <p className="stat-number text-3xl font-extrabold text-emerald-100">156</p>
          </div>

          <div className="rounded-xl p-4 card-gradient-purple stat-tile">
            <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">Quiz Sessions</p>
            <p className="stat-number text-3xl font-extrabold text-purple-100">12</p>
          </div>

          <div className="rounded-xl p-4 card-gradient-orange stat-tile">
            <p className="text-xs font-semibold text-orange-300 uppercase tracking-wider mb-2">Active Players</p>
            <p className="stat-number text-3xl font-extrabold text-orange-100">48</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl glass-card p-4">
        <p className="text-sm text-foreground/70">© 2025 House of Games — Admin Interface</p>
      </div>
    </aside>
  );
}

function CenterPanel() {
  return (
    <section>
      <div className="mb-6">
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 border"
          style={{
            background:
              'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(147, 51, 234, 0.06) 50%, rgba(99, 102, 241, 0.10) 100%)',
            backdropFilter: 'blur(10px)',
            borderColor: 'rgba(148, 163, 184, 0.08)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="h-16 w-16 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4)',
              }}
            >
              <GamepadIcon className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-1 heading-gradient">House of Games</h1>
              <p className="text-sm text-foreground/70">Access professional-grade administrative functions designed for seamless quiz management</p>
            </div>
          </div>

          <p className="text-base text-foreground/70 max-w-3xl leading-relaxed">
            Configure and manage game formats, assemble quiz sessions, and preview player activity — all from a single admin interface.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="glass-card rounded-2xl overflow-hidden p-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-indigo-500/6"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                <GamepadIcon className="h-6 w-6 text-white" />
              </div>
              <div className="px-3 py-1 bg-blue-500/20 text-blue-300 border-blue-500/30 font-semibold rounded-md">22 Types</div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">Game Management</h3>
            <p className="text-foreground/70 leading-relaxed text-base mb-4">
              Configure and manage all House of Games formats including Answer Smash, Rhyme Time, and more.
            </p>
            <Link to="/games" className="block">
              <button className="w-full btn-primary text-white font-semibold py-3 text-base">Manage Games</button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-2">Question Library</h4>
            <p className="text-foreground/60 mb-4">Create, edit, and organize questions for each game type.</p>
            <button className="w-full bg-gray-600/50 text-gray-300 py-3 text-base cursor-not-allowed" disabled>Manage Questions</button>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-2">Session Builder</h4>
            <p className="text-foreground/60 mb-4">Assemble playlists, set timings and live options.</p>
            <button className="w-full bg-gray-600/50 text-gray-300 py-3 text-base cursor-not-allowed" disabled>Create Session</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function RightPanel() {
  return (
    <aside className="space-y-6">
      <div className="glass-card rounded-2xl p-4">
        <h4 className="font-semibold mb-3">Activity</h4>
        <ul className="text-foreground/70 list-disc pl-4 space-y-2">
          <li>New question added: Rhyme Time — <span className="text-foreground">Rhyme Round</span></li>
          <li>Player joined: 7 new</li>
          <li>Session scheduled: Quiz Night — 19:00</li>
        </ul>
      </div>

      <div className="glass-card rounded-2xl p-4">
        <h5 className="font-semibold mb-2">Recent Sessions</h5>
        <div className="rounded-md bg-slate-800/40 p-3">
          <div className="text-sm">12 Aug · Pub Quiz</div>
          <div className="text-sm text-foreground/60 mt-2">11 Aug · Kids Special</div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-4">
        <h5 className="font-semibold mb-2">Shortcuts</h5>
        <ul className="text-foreground/70 space-y-1">
          <li className="text-blue-300">+ Create Session</li>
          <li className="text-blue-300">+ Add Question</li>
          <li className="text-blue-300">Player Inbox</li>
        </ul>
      </div>
    </aside>
  );
}

export default function Dashboard() {
  return (
    <Container maxWidth="7xl" className="py-8" role="main" aria-label="Dashboard">
      <div className="dashboard-grid" role="region" aria-label="Dashboard Grid">
        <div className="dashboard-left">
          <LeftStats />
        </div>

        <div>
          <CenterPanel />
        </div>

        <div className="dashboard-right">
          <RightPanel />
        </div>
      </div>
    </Container>
  );
}
