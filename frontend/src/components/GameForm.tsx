import { useState } from 'react';
import type { Game, GameType } from '../types';
import { gameApi } from '../services/api';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Save } from 'lucide-react';
import * as z from 'zod';

const gameTypes: { value: GameType; label: string; description: string }[] = [
  { value: 'ANSWER_SMASH', label: 'Answer Smash', description: 'Combine two answers to make one' },
  { value: 'RHYME_TIME', label: 'Rhyme Time', description: 'Two rhyming words describe the answer' },
  { value: 'ANSWERS_IN_QUESTION', label: 'Answers in Question', description: 'Questions containing their answers' },
  { value: 'BACKWARDS_ROUND', label: 'Backwards Round', description: 'Work backwards from the answer' },
  { value: 'SORRY_WRONG_NUMBER', label: 'Sorry Wrong Number', description: 'Phone number based questions' },
  { value: 'WELL_DONE_IF_YOU_SAID', label: 'Well Done If You Said', description: 'Multiple correct answers possible' },
  { value: 'INTERNET_HISTORY', label: 'Internet History', description: 'Web and technology questions' },
  { value: 'POP_ART', label: 'Pop Art', description: 'Visual pop culture questions' },
  { value: 'CAN_YOU_FEEL_IT', label: 'Can You Feel It', description: 'Sensory-based questions' },
  { value: 'BROKEN_KARAOKE', label: 'Broken Karaoke', description: 'Song lyrics with words missing' },
  { value: 'SIZE_MATTERS', label: 'Size Matters', description: 'Questions about measurements' },
  { value: 'THE_NICE_ROUND', label: 'The Nice Round', description: 'Pleasant, easy questions' },
  { value: 'THE_RICH_LIST', label: 'The Rich List', description: 'Wealth and money based questions' },
  { value: 'BUILD_YOUR_OWN', label: 'Build Your Own', description: 'Construction and assembly questions' },
  { value: 'CORRECTION_CENTRE', label: 'Correction Centre', description: 'Spot the mistakes' },
  { value: 'DIM_SUMS', label: 'Dim Sums', description: 'Mathematical puzzles' },
  { value: 'DISTINCTLY_AVERAGE', label: 'Distinctly Average', description: 'Middle-ground questions' },
  { value: 'WHERE_IS_KAZAKHSTAN', label: 'Where Is Kazakhstan', description: 'Geography questions' },
  { value: 'PUT_FINGER_ON_IT', label: 'Put Finger On It', description: 'Touch and identification questions' },
  { value: 'IS_IT_ME', label: 'Is It Me', description: 'Personal identification questions' },
  { value: 'CINE_NYMS', label: 'Cine-nyms', description: 'Movie synonym questions' },
  { value: 'AND_ANSWER_ISNT', label: 'And Answer Isnt', description: 'Trick questions with obvious wrong answers' },
];

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  type: z.enum([
    'ANSWER_SMASH', 'RHYME_TIME', 'ANSWERS_IN_QUESTION', 'BACKWARDS_ROUND',
    'SORRY_WRONG_NUMBER', 'WELL_DONE_IF_YOU_SAID', 'INTERNET_HISTORY',
    'POP_ART', 'CAN_YOU_FEEL_IT', 'BROKEN_KARAOKE', 'SIZE_MATTERS',
    'THE_NICE_ROUND', 'THE_RICH_LIST', 'BUILD_YOUR_OWN', 'CORRECTION_CENTRE',
    'DIM_SUMS', 'DISTINCTLY_AVERAGE', 'WHERE_IS_KAZAKHSTAN', 'PUT_FINGER_ON_IT',
    'IS_IT_ME', 'CINE_NYMS', 'AND_ANSWER_ISNT'
  ]),
  description: z.string().optional().or(z.literal('')),
  rules: z.string().optional().or(z.literal('')),
  round: z.number().min(1).max(5).optional().nullable(),
  isActive: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

interface GameFormProps {
  game?: Game;
  onSubmit?: (game: Game) => void;
  onCancel?: () => void;
}

export default function GameForm({ game, onSubmit, onCancel }: GameFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: game?.name || '',
      type: game?.type || 'ANSWER_SMASH',
      description: game?.description || '',
      rules: game?.rules || '',
      round: game?.round || undefined,
      isActive: game?.isActive ?? true,
    },
  });

  const handleSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      setError(null);

      let response;
      const gameData = {
        ...data,
        round: data.round || undefined, // Convert null to undefined
      };
      
      if (game) {
        // Update existing game
        response = await gameApi.update(game.id, gameData);
      } else {
        // Create new game
        response = await gameApi.create(gameData as Omit<Game, 'id' | 'createdAt' | 'updatedAt'>);
      }

      if (response.success && response.data && onSubmit) {
        onSubmit(response.data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Games
          </Button>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            {game ? 'Edit Game' : 'Create New Game'}
          </h2>
          <p className="text-sm text-foreground/70">
            {game ? 'Update the game configuration' : 'Configure a new House of Games format'}
          </p>
        </div>
        {error && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-red-400"></div>
              </div>
              <p className="text-sm text-red-400 font-medium">{error}</p>
            </div>
          </div>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-medium text-foreground">Game Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter game name..."
                      {...field}
                      className="bg-slate-800/40 border-slate-700/50 text-foreground placeholder:text-slate-500"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-medium text-foreground">Game Type *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-slate-800/40 border-slate-700/50 text-foreground">
                        <SelectValue placeholder="Select a game type..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-slate-800/90 border-slate-700/50 backdrop-blur-sm">
                      {gameTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="text-foreground hover:bg-slate-700/50">
                          <div className="space-y-1">
                            <div className="font-medium text-foreground">{type.label}</div>
                            <div className="text-xs text-slate-400">{type.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-xs text-slate-400">
                    {form.watch('type') && gameTypes.find(t => t.value === form.watch('type'))?.description}
                  </FormDescription>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-medium text-foreground">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Optional description of this game..."
                      rows={3}
                      {...field}
                      className="bg-slate-800/40 border-slate-700/50 text-foreground placeholder:text-slate-500 resize-none"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rules"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-medium text-foreground">Rules</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Optional rules and instructions..."
                      rows={4}
                      {...field}
                      className="bg-slate-800/40 border-slate-700/50 text-foreground placeholder:text-slate-500 resize-none"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="round"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-medium text-foreground">Round Number</FormLabel>
                  <Select onValueChange={(value) => field.onChange(value ? Number(value) : undefined)}
                          defaultValue={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger className="bg-slate-800/40 border-slate-700/50 text-foreground">
                        <SelectValue placeholder="Select round (optional)..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-slate-800/90 border-slate-700/50 backdrop-blur-sm">
                      <SelectItem value="null" className="text-foreground hover:bg-slate-700/50">No round specified</SelectItem>
                      <SelectItem value="1" className="text-foreground hover:bg-slate-700/50">Round 1</SelectItem>
                      <SelectItem value="2" className="text-foreground hover:bg-slate-700/50">Round 2</SelectItem>
                      <SelectItem value="3" className="text-foreground hover:bg-slate-700/50">Round 3</SelectItem>
                      <SelectItem value="4" className="text-foreground hover:bg-slate-700/50">Round 4</SelectItem>
                      <SelectItem value="5" className="text-foreground hover:bg-slate-700/50">Round 5</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-xs text-slate-400">
                    Leave empty if this game can be used in any round
                  </FormDescription>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border border-slate-700/50 p-4 bg-slate-800/20">
                  <div className="space-y-1">
                    <FormLabel className="text-sm font-medium text-foreground">Active Game</FormLabel>
                    <FormDescription className="text-xs text-slate-400">
                      Only active games will be available for quiz sessions
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-slate-600"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-6">
              <Button type="submit" disabled={loading} className="gap-2 btn-primary">
                <Save className="h-4 w-4" />
                {loading ? 'Saving...' : (game ? 'Update Game' : 'Create Game')}
              </Button>
              <Button type="button" variant="outline" onClick={onCancel} disabled={loading} className="h-10">
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}