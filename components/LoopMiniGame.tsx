'use client';

import { useMemo, useState } from 'react';
import type { LoopGame } from '@/lib/loops';

function formatScore(score: number) {
  return score.toLocaleString('en-US');
}

export function LoopMiniGame({ loop }: { loop: LoopGame }) {
  const [score, setScore] = useState(0);
  const [plays, setPlays] = useState(0);
  const [activeTile, setActiveTile] = useState(0);

  const instruction = useMemo(() => {
    if (loop.template === 'dodge-blocks') return 'Tap left or right to dodge';
    if (loop.template === 'tap-jump') return 'Tap to jump';
    if (loop.template === 'memory-match') return 'Repeat the glowing tile';
    if (loop.template === 'reaction-timer') return 'Tap when it flashes';
    return 'Tap the target';
  }, [loop.template]);

  function scorePoint(tile?: number) {
    setPlays((current) => current + 1);
    if (loop.template === 'memory-match') {
      if (tile === activeTile) setScore((current) => current + 1);
      setActiveTile(Math.floor(Math.random() * 4));
      return;
    }
    setScore((current) => current + 1);
  }

  if (loop.template === 'memory-match') {
    return (
      <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/15 bg-black/25 p-4 backdrop-blur-md">
        {[0, 1, 2, 3].map((tile) => (
          <button
            key={tile}
            onClick={() => scorePoint(tile)}
            className={`aspect-square rounded-3xl border border-white/15 transition active:scale-95 ${tile === activeTile ? loop.accent : 'bg-white/10'}`}
            aria-label={`Memory tile ${tile + 1}`}
          />
        ))}
        <div className="col-span-2 text-center text-sm text-white/80">{instruction}</div>
        <div className="col-span-2 text-center text-3xl font-black">{formatScore(score)}</div>
      </div>
    );
  }

  if (loop.template === 'dodge-blocks') {
    return (
      <div className="rounded-3xl border border-white/15 bg-black/25 p-4 backdrop-blur-md">
        <div className="mb-4 flex h-56 items-end justify-center overflow-hidden rounded-3xl bg-black/25 p-4">
          <div className="mr-6 h-16 w-10 rounded-xl bg-white/20" />
          <div className={`h-12 w-12 rounded-2xl ${loop.accent} shadow-2xl`} />
          <div className="ml-6 h-24 w-10 rounded-xl bg-white/20" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => scorePoint()} className="rounded-2xl bg-white/15 py-3 font-bold active:scale-95">Left</button>
          <button onClick={() => scorePoint()} className="rounded-2xl bg-white/15 py-3 font-bold active:scale-95">Right</button>
        </div>
        <div className="mt-3 text-center text-sm text-white/80">{instruction} • Score {formatScore(score)}</div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/15 bg-black/25 p-5 text-center backdrop-blur-md">
      <button
        onClick={() => scorePoint()}
        className={`mx-auto flex h-36 w-36 items-center justify-center rounded-full ${loop.accent} text-6xl shadow-2xl transition active:scale-90`}
        aria-label="Play loop"
      >
        {loop.emoji}
      </button>
      <div className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">{instruction}</div>
      <div className="mt-2 text-5xl font-black">{formatScore(score)}</div>
      <div className="mt-1 text-xs text-white/60">{plays === 0 ? 'First tap starts the loop' : `${plays} taps played`}</div>
    </div>
  );
}
