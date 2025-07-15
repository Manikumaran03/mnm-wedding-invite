import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;
      audio.muted = true;

      const tryPlay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
          console.log(isMuted);
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
      audio.muted = false;
      setIsMuted(false);
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error('Playback error:', err));
    }
  };

  return (
    <div className="fixed bottom-6 left-4 z-50">
      <audio
        ref={audioRef}
        src="/mnm-wedding-invite/wedding_music.mp3"
        autoPlay
        loop
        preload="auto"
        muted
      />
      <button
        onClick={togglePlay}
        className={`relative rounded-full p-3 shadow-md transition ${isPlaying ? 'bg-purple-600/50 hover:bg-purple-600/80' : 'bg-purple-400/60 hover:bg-purple-500/80'} `}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {/* Pulsating ring when not playing */}
        {!isPlaying && (
          <span
            className="absolute -inset-1 animate-ping rounded-full bg-purple-500/40"
            aria-hidden="true"
          />
        )}
        {isPlaying ? (
          <Pause className="h-5 w-5 text-white" />
        ) : (
          <Play className="h-5 w-5 text-white" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
