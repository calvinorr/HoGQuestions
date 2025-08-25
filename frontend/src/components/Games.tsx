import { useState } from 'react';
import type { Game } from '../types';
import GameList from './GameList';
import GameForm from './GameForm';
import Container from '@/components/ui/container';
import designSystem from '../lib/design-system';

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
    <Container maxWidth="7xl" style={{ padding: designSystem.spacing[8] }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: designSystem.spacing[8] }}>
        {/* Page Header */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          transition: 'all 0.3s ease',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h1 style={{
                fontSize: '1.875rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 50%, rgba(99, 102, 241, 0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.25,
              }}>
                Game Management
              </h1>
              <p style={{
                fontSize: '0.875rem',
                color: 'rgba(148, 163, 184, 0.7)',
                lineHeight: 1.5,
              }}>
                Configure and manage all 22 House of Games formats
              </p>
            </div>
            <div style={{
              padding: '0.25rem 0.625rem',
              background: 'rgba(59, 130, 246, 0.1)',
              color: 'rgba(96, 165, 250, 0.9)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              fontWeight: 600,
              borderRadius: '0.25rem',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
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
