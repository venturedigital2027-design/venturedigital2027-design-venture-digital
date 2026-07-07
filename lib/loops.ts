export type LoopTemplate =
  | 'tap-target'
  | 'dodge-blocks'
  | 'tap-jump'
  | 'memory-match'
  | 'reaction-timer';

export type LoopGame = {
  id: string;
  title: string;
  creator: string;
  description: string;
  template: LoopTemplate;
  challenge: string;
  timeLimit: number;
  likes: number;
  comments: number;
  saves: number;
  gradient: string;
  accent: string;
  emoji: string;
};

export const seedLoops: LoopGame[] = [
  {
    id: 'laser-ninja',
    title: 'Laser Ninja',
    creator: '@looplabs',
    description: 'Tap to jump the neon lasers before the timer hits zero.',
    template: 'tap-jump',
    challenge: 'Survive 20 seconds',
    timeLimit: 20,
    likes: 12800,
    comments: 842,
    saves: 2100,
    gradient: 'from-fuchsia-700 via-purple-800 to-slate-950',
    accent: 'bg-fuchsia-400',
    emoji: '🥷'
  },
  {
    id: 'pirate-coins',
    title: 'Pirate Coin Rush',
    creator: '@captainbyte',
    description: 'Catch as many coins as possible before the ship escapes.',
    template: 'tap-target',
    challenge: 'Score 10 coins',
    timeLimit: 15,
    likes: 9400,
    comments: 311,
    saves: 1500,
    gradient: 'from-amber-600 via-orange-800 to-slate-950',
    accent: 'bg-amber-300',
    emoji: '🏴‍☠️'
  },
  {
    id: 'dragon-dodge',
    title: 'Dragon Dodge',
    creator: '@ember',
    description: 'Slide through fireballs in this quick survival loop.',
    template: 'dodge-blocks',
    challenge: 'Dodge 12 fireballs',
    timeLimit: 25,
    likes: 22100,
    comments: 1900,
    saves: 4800,
    gradient: 'from-red-700 via-rose-900 to-black',
    accent: 'bg-red-400',
    emoji: '🐉'
  },
  {
    id: 'math-blitz',
    title: 'Math Blitz',
    creator: '@brainpop',
    description: 'Answer fast. Wrong answers cost time.',
    template: 'reaction-timer',
    challenge: 'Beat 5 questions',
    timeLimit: 30,
    likes: 7600,
    comments: 204,
    saves: 980,
    gradient: 'from-blue-700 via-cyan-800 to-slate-950',
    accent: 'bg-cyan-300',
    emoji: '⚡'
  },
  {
    id: 'memory-pop',
    title: 'Memory Pop',
    creator: '@minimaker',
    description: 'Watch the pattern once, then repeat it clean.',
    template: 'memory-match',
    challenge: 'Repeat 4 tiles',
    timeLimit: 20,
    likes: 5100,
    comments: 177,
    saves: 640,
    gradient: 'from-emerald-700 via-teal-900 to-black',
    accent: 'bg-emerald-300',
    emoji: '🧠'
  }
];
