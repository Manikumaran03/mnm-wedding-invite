import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // The isMuted state can be removed if you don't intend to have a separate mute toggle.
  // For now, we'll keep it for clarity with the initial muted state of the audio element.
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;
      // The audio will initially be muted, and unmutes when the user presses play.
      audio.muted = true;
    }
  }, []); // Empty dependency array means this runs once on mount

  const togglePlay = (): void => {
    const audio = audioRef.current;
    console.log(isMuted);
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Unmute the audio when the user initiates playback
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
      <audio ref={audioRef} src="/mnm-wedding-invite/wedding_music.mp3" loop />

      <button
        id="play-music"
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
