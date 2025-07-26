import { useState, useEffect } from 'react';

export const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const getTimeRemaining = (target: number) => {
    const now = new Date().getTime();
    const distance = target - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const isComplete = distance <= 0;

    return {
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
      isComplete,
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(countDownDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(countDownDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return timeLeft;
};
