import { useState } from 'react';
import type { Game } from '../types';
import GameList from './GameList';
import GameForm from './GameForm';

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
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Game Management
            </h1>
            <p className="text-slate-400 text-lg">
              Configure and manage all 22 House of Games formats
            </p>
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
    </div>
  );
}
