import { useState, useEffect } from 'react';
import type { Game, GameType } from '../types';
import { gameApi } from '../services/api';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit2, Trash2, Plus, RefreshCw } from 'lucide-react';

interface GameListProps {
  onEdit?: (game: Game) => void;
  onDelete?: (gameId: string) => void;
  onAdd?: () => void;
}

const formatGameType = (type: GameType): string => {
  return type
    .split('_')
    .map(word => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
};

export default function GameList({ onEdit, onDelete, onAdd }: GameListProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchGames = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await gameApi.getAll();
      if (response.success) {
        setGames(response.data);
      } else {
        setError(response.error || 'Failed to fetch games');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    fetchGames();
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleDelete = async (gameId: string, gameName: string) => {
    const gameWithQuestions = games.find(game => game.id === gameId);
    const questionCount = gameWithQuestions?.questions?.length || 0;
    
    let confirmMessage = `Are you sure you want to delete "${gameName}"?`;
    if (questionCount > 0) {
      confirmMessage += `\n\nThis will also delete ${questionCount} question${questionCount === 1 ? '' : 's'} associated with this game.`;
    }
    confirmMessage += '\n\nThis action cannot be undone.';
    
    if (window.confirm(confirmMessage)) {
      try {
        await gameApi.delete(gameId);
        setGames(games.filter(game => game.id !== gameId));
        if (onDelete) onDelete(gameId);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to delete game');
      }
    }
  };

  if (loading) {
    return (
      <div className="glass-card rounded-2xl p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
            <RefreshCw className="h-6 w-6 text-blue-400 animate-spin" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Loading Games</h3>
          <p className="text-muted-foreground">Fetching game data from the server...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card rounded-2xl p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/20 mb-4">
            <RefreshCw className="h-6 w-6 text-red-400" />
          </div>
          <div className="text-red-600 mb-4 font-medium">Error: {error}</div>
          <div className="text-sm text-muted-foreground mb-6">
            Attempt {retryCount + 1} of 3
          </div>
          <Button onClick={handleRetry} className="gap-2 btn-primary">
            <RefreshCw className="h-4 w-4" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-foreground">Game Types</h3>
          <p className="text-sm text-foreground/70">
            All available House of Games formats
          </p>
        </div>
        {onAdd && (
          <Button onClick={onAdd} className="gap-2 btn-primary">
            <Plus className="h-4 w-4" />
            Add Game
          </Button>
        )}
      </div>
      <div>
        {games.length === 0 ? (
          <div className="text-center py-12">
            <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Edit2 className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No games found</h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Get started by adding your first House of Games format. You can configure 
              any of the 22 different game types.
            </p>
            {onAdd && (
              <Button onClick={onAdd} className="gap-2">
                <Plus className="h-4 w-4" />
                Add Your First Game
              </Button>
            )}
          </div>
        ) : (
          <div className="rounded-lg border border-slate-200/10 bg-slate-900/50 backdrop-blur-sm">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-b border-slate-200/10">
                  <TableHead className="font-semibold text-foreground/80 w-[30%]">Name</TableHead>
                  <TableHead className="font-semibold text-foreground/80 w-[20%]">Type</TableHead>
                  <TableHead className="font-semibold text-foreground/80 w-[10%]">Round</TableHead>
                  <TableHead className="font-semibold text-foreground/80 w-[12%]">Status</TableHead>
                  <TableHead className="font-semibold text-foreground/80 w-[12%]">Questions</TableHead>
                  <TableHead className="font-semibold text-foreground/80 w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {games.map((game) => (
                  <TableRow
                    key={game.id}
                    className="group border-b border-slate-200/5 hover:bg-slate-800/30 transition-colors"
                  >
                    <TableCell className="font-medium text-foreground">{game.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-medium bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {formatGameType(game.type)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {game.round ? `Round ${game.round}` : 'Any Round'}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={game.isActive ? 'default' : 'secondary'}
                        className={game.isActive
                          ? 'bg-green-500/20 text-green-300 border-green-500/30'
                          : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
                        }
                      >
                        {game.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1">
                        <span className="font-medium text-foreground">
                          {game.questions ? game.questions.length : 0}
                        </span>
                        <span className="text-muted-foreground text-sm">questions</span>
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 focus-within:opacity-100 transition-all duration-200">
                        {onEdit && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onEdit(game)}
                            aria-label={`Edit ${game.name}`}
                            className="h-8 w-8 hover:bg-slate-700/50"
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(game.id, game.name)}
                          aria-label={`Delete ${game.name}`}
                          className="h-8 w-8 hover:bg-red-500/20 text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
