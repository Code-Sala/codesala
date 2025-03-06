import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import sampleMusic from "../assets/sound/sampleMusic.mp3";
import "./music.css";

function OpenMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const analyzerRef = useRef(null);
  const dataArrayRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      const analyzer = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaElementSource(audio);

      source.connect(analyzer);
      analyzer.connect(audioContextRef.current.destination);
      analyzer.fftSize = 256;

      analyzerRef.current = analyzer;
      dataArrayRef.current = new Uint8Array(analyzer.frequencyBinCount);
    }
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!isPlaying || !analyzerRef.current || !dataArrayRef.current) return;

      requestAnimationFrame(animate);
      analyzerRef.current.getByteFrequencyData(dataArrayRef.current);

      const avgFrequency =
        dataArrayRef.current.reduce((a, b) => a + b, 0) /
        dataArrayRef.current.length;
      const glowIntensity = Math.min(60, avgFrequency / 2);
      const scaleSize = 1 + avgFrequency / 200;

      document.documentElement.style.setProperty(
        "--glow-intensity",
        `${glowIntensity}px`
      );
      document.documentElement.style.setProperty("--scale-size", scaleSize);
    };

    if (isPlaying) {
      audioContextRef.current.resume().then(() => animate());
    }
  }, [isPlaying]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src={sampleMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div
        onClick={toggleAudio}
        className={`audio-control cursor-pointer fixed bottom-25 right-4 z-90 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:scale-110 shadow-lg transition-all duration-300 
        ${isPlaying ? "playing" : ""}`}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </div>
    </div>
  );
}

export default OpenMusic;
