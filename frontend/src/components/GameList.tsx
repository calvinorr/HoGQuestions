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
import { Edit2, Trash2, Plus } from 'lucide-react';

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

  const fetchGames = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await gameApi.getAll();
      if (response.success) {
        setGames(response.data);
      } else {
        setError('Failed to fetch games');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
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
      <Card>
        <CardContent className="p-6">
          <div className="text-center">Loading games...</div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-red-600">Error: {error}</div>
          <Button onClick={fetchGames} className="mt-4">
            Retry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <CardTitle className="text-xl">Game Types</CardTitle>
            <p className="text-sm text-muted-foreground">
              All available House of Games formats
            </p>
          </div>
          {onAdd && (
            <Button onClick={onAdd} className="gap-2 shadow-sm">
              <Plus className="h-4 w-4" />
              Add Game
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
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
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  <TableHead className="font-semibold">Round</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Questions</TableHead>
                  <TableHead className="font-semibold w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {games.map((game) => (
                  <TableRow key={game.id} className="group">
                    <TableCell className="font-medium">{game.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-medium">
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
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                          : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                        }
                      >
                        {game.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1">
                        <span className="font-medium">
                          {game.questions ? game.questions.length : 0}
                        </span>
                        <span className="text-muted-foreground text-sm">questions</span>
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 focus-within:opacity-100 transition-opacity">
                        {onEdit && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onEdit(game)}
                            aria-label={`Edit ${game.name}`}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(game.id, game.name)}
                          aria-label={`Delete ${game.name}`}
                          className="text-destructive hover:text-destructive"
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
      </CardContent>
    </Card>
  );
}
