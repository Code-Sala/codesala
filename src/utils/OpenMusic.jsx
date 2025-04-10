import { useEffect, useRef, useState } from "react";
// import { Headphones, HeadphoneOff } from "lucide-react";
import sampleMusic from "../assets/sound/meditationalmusic.mp3";
import "./music.css";

// import volumeoff from "../assets/svg/volumeoff.svg";
// import volumeon from "../assets/svg/volumeon.svg";
import { Check, X } from "lucide-react";

function OpenMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const audioContextRef = useRef(null);
  const analyzerRef = useRef(null);
  const dataArrayRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      const analyzer = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaElementSource(
        audioRef.current
      );

      source.connect(analyzer);
      analyzer.connect(audioContextRef.current.destination);
      analyzer.fftSize = 256;

      analyzerRef.current = analyzer;
      dataArrayRef.current = new Uint8Array(analyzer.frequencyBinCount);
    }
  }, []);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenMusicModal");
    if (hasSeenModal) {
      setShowModal(false);
    }
  }, []);

  useEffect(() => {
    if (showModal) return;

    if (isPlaying) {
      audioContextRef.current.resume().then(() => {
        audioRef.current?.play();
      });
    }
  }, [showModal, isPlaying]);

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
        className={`audio-control fixed bottom-6 right-6 z-150 bg-white text-white p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110`}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ec07c7", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#138bff", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M18.36 5.64a9 9 0 0 1 0 12.73"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ec07c7", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#138bff", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="22" y1="9" x2="16" y2="15"></line>
            <line x1="16" y1="9" x2="22" y2="15"></line>
          </svg>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-150 flex items-center justify-center bg-gray-900/99">
          <div className=" text-center">
            <h2 className="text-[2rem] text-gray-200 font-medium">
              Set the mood with music?
            </h2>
            <div className="mt-4 flex justify-center gap-6 group:">
              <span
                className="text-white cursor-pointer hover:underline text-2xl p-4 rounded-full bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] hover:animate-gradient hover:shadow hover:shadow-deep-purple hover:scale-105"
                onClick={() => {
                  localStorage.setItem("hasSeenMusicModal", "true");
                  setShowModal(false);
                  setIsPlaying(true);
                }}
              >
                <Check />
              </span>
              <span
                className="text-white cursor-pointer hover:underline text-2xl p-4  rounded-full bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] hover:animate-gradient hover:shadow hover:shadow-deep-purple hover:scale-105"
                onClick={() => {
                  localStorage.setItem("hasSeenMusicModal", "true");
                  setShowModal(false);
                }}
              >
                <X />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenMusic;
