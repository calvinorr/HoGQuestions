import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Games from './components/Games';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GamepadIcon, HelpCircle, Trophy, BarChart3, Settings, Users } from 'lucide-react';
import './App.css'
import Container from '@/components/ui/container';
import Dashboard from '@/components/Dashboard';

/**
 * Home element renders the Dashboard component
 */
function Home() {
  return <Dashboard />;
}

/**
 * AppLayout contains the top navigation and an Outlet for child routes.
 * It holds the mobileOpen state used by the mobile slide-over.
 */
function AppLayout() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      {/* Top navigation */}
      <nav className="sticky top-0 z-50 w-full nav-glass" aria-label="Main navigation">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <GamepadIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">House of Games</span>
                <span className="block text-sm text-foreground/70 font-medium -mt-1">Professional Admin</span>
              </div>
            </Link>

            {/* Primary Links (always visible) */}
            <div className="flex items-center gap-4 flex-wrap" role="navigation" aria-label="Primary">
              <nav className="flex items-center gap-2 flex-wrap">
                <Link to="/" className="nav-item inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800/50">
                  <BarChart3 className="h-5 w-5 text-slate-200" />
                  <span className="nav-label">Dashboard</span>
                </Link>

                <Link to="/games" className="nav-item inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800/50">
                  <GamepadIcon className="h-5 w-5 text-slate-200" />
                  <span className="nav-label">Games</span>
                </Link>

                <Link to="/questions" className="nav-item inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800/50">
                  <HelpCircle className="h-5 w-5 text-slate-200" />
                  <span className="nav-label">Questions</span>
                </Link>

                <Link to="/players" className="nav-item inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800/50">
                  <Users className="h-5 w-5 text-slate-200" />
                  <span className="nav-label">Players</span>
                </Link>
              </nav>

              <div className="relative ml-4">
                <input aria-label="Search" placeholder="Search..." className="bg-slate-800/40 placeholder-slate-400 text-sm rounded-full px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-slate-800/30 text-white" aria-label="Profile">
                  <span className="sr-only">Open profile</span>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-semibold">A</div>
                </Button>

                <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-slate-800/50 rounded-xl text-slate-300 hover:text-white" aria-label="Settings">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>

          </div>
        </div>

      </nav>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

/**
 * Create the router and enable the v7_startTransition future flag to silence the dev warning
 * and opt-in to the upcoming behavior.
 */
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'games', element: <Games /> },
      ],
    },
  ],
  {
    // Opt into upcoming React Router v7 behavior.
    // Cast to `any` to avoid TypeScript type mismatch in this dev-time flag.
    future: ({ v7_startTransition: true } as any),
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
