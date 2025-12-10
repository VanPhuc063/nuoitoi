import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

export const useKonamiCode = () => {
  const [success, setSuccess] = useState(false);
  const [input, setInput] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setInput((prev) => {
        const newInput = [...prev, e.key];
        if (newInput.length > KONAMI_CODE.length) {
          newInput.shift();
        }
        return newInput;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (input.join(',') === KONAMI_CODE.join(',')) {
      setSuccess(true);
      setInput([]);
      const audio = new Audio('https://www.soundjay.com/misc/sounds/magic-chime-01.mp3');
      audio.play().catch(() => {});
    }
  }, [input]);

  return { success, reset: () => setSuccess(false) };
};