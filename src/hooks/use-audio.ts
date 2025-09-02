import { useCallback, useRef } from 'react';
import transitionSoundUrl from '../assets/whoosh-sci-fi-portal-hd-374800.mp3';

export const useAudio = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const transitionAudioRef = useRef<HTMLAudioElement | null>(null);

  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const initTransitionAudio = useCallback(() => {
    if (!transitionAudioRef.current) {
      transitionAudioRef.current = new Audio(transitionSoundUrl);
      transitionAudioRef.current.preload = 'auto';
      transitionAudioRef.current.volume = 0.7; // Adjust volume as needed
    }
    return transitionAudioRef.current;
  }, []);

  const playTreasureChest = useCallback(() => {
    const audioContext = initAudioContext();

    // Create a treasure chest opening sound using Web Audio API
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Treasure chest sound: deep resonant tone with metallic clink
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.3);

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.type = 'sawtooth';
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  }, [initAudioContext]);

  const playDing = useCallback(() => {
    const audioContext = initAudioContext();

    // Create a magical ding sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Magical ding: bright, crystalline tone
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.type = 'sine';
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  }, [initAudioContext]);

  const playTransitionSoundtrack = useCallback(async () => {
    try {
      const audio = initTransitionAudio();
      audio.currentTime = 0; // Reset to beginning
      await audio.play();
      return audio;
    } catch (error) {
      console.warn('Could not play transition soundtrack:', error);
      return null;
    }
  }, [initTransitionAudio]);

  const stopTransitionSoundtrack = useCallback(() => {
    if (transitionAudioRef.current) {
      transitionAudioRef.current.pause();
      transitionAudioRef.current.currentTime = 0;
    }
  }, []);

  return {
    playTreasureChest,
    playDing,
    playTransitionSoundtrack,
    stopTransitionSoundtrack
  };
};