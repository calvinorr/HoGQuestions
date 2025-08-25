import { useState } from 'react';
import type { Game } from '../types';
import GameList from './GameList';
import GameForm from './GameForm';
import Container from '@/components/ui/container';

type View = 'list' | 'add' | 'edit';

export default function Games() {
  const [currentView, setCurrentView] = useState<View>('list');
  const [selectedGame, setSelectedGame] = useState<Game | undefined>(undefined);

  const handleAdd = () => {
    setSelectedGame(undefined);
    setCurrentView('add');
  };

  const handleEdit = (game: Game) => {
    setSelectedGame(game);
    setCurrentView('edit');
  };

  const handleFormSubmit = () => {
    setCurrentView('list');
    setSelectedGame(undefined);
  };

  const handleCancel = () => {
    setCurrentView('list');
    setSelectedGame(undefined);
  };

  const handleDelete = () => {
    // Game list handles deletion internally
  };

  return (
    <Container maxWidth="7xl" className="py-8">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-1 heading-gradient">
                Game Management
              </h1>
              <p className="text-sm text-foreground/70">
                Configure and manage all 22 House of Games formats
              </p>
            </div>
            <div className="px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-500/30 font-semibold rounded-md">
              22 Types
            </div>
          </div>
        </div>

        {currentView === 'list' ? (
          <GameList
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <GameForm
            game={selectedGame}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
          />
        )}
      </div>
    </Container>
  );
}
