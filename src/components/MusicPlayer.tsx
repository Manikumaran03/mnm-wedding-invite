import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;

      // Attempt to autoplay
      const tryPlay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (err) {
          console.warn('Autoplay was blocked. Awaiting user interaction.');
          setIsPlaying(false);
        }
      };

      tryPlay();
    }
  }, []);

  const togglePlay = (): void => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error('Playback error:', err));
    }
  };

  return (
    <div className="fixed bottom-9 left-4 z-50">
      <audio
        ref={audioRef}
        src="/mnm-wedding-invite/wedding_music.mp3"
        autoPlay
        loop
        preload="auto"
      />
      <button
        onClick={togglePlay}
        className="rounded-full bg-purple-600/50 p-3 shadow-md transition hover:bg-purple-600/80"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default MusicPlayer;
