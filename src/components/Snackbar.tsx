import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

interface SnackbarProps {
  message: string;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, onClose }) => {
  const snackbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = snackbarRef.current;

    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }

    const timer = setTimeout(() => {
      if (el) {
        gsap.to(el, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => onClose(),
        });
      } else {
        onClose();
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      ref={snackbarRef}
      className="fixed bottom-2 left-1/2 z-50 flex w-[60%] max-w-md -translate-x-1/2 transform items-center rounded-xl border border-gray-200 bg-violet-950 px-4 py-3 shadow-lg"
    >
      <div className="flex-grow text-xs text-gray-50">{message}</div>

      <ArrowRight className="ml-4 h-12 w-12 text-gray-50" />
    </div>
  );
};

export default Snackbar;
