import { useEffect, useRef, useState } from "react";
// import { Headphones, HeadphoneOff } from "lucide-react";
import sampleMusic from "../assets/sound/meditationalmusic.mp3";
import "./music.css";

import volumeoff from "../assets/svg/volumeoff.svg";
import volumeon from "../assets/svg/volumeon.svg";
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
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src={sampleMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button */}
      <div
        onClick={toggleAudio}
        className={`audio-control fixed bottom-6 right-6 z-150 bg-white text-white p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110`}
      >
        {isPlaying ? (
          <img src={volumeon} alt="img1" />
        ) : (
          <img src={volumeoff} alt="img1" />
        )}
      </div>

      {/* Minimal Modal */}
      {showModal && (
        <div className="fixed inset-0 z-150 flex items-center justify-center bg-gray-900/99">
          <div className=" text-center   ">
            {/* <Music size={32} className="text-gray-800 text-center mb-3" /> */}
            <h2 className="text-[2rem] text-gray-200 font-medium">
              Set the mood with music?
            </h2>
            <div className="mt-4 flex justify-center gap-6">
              <span
                className="text-white cursor-pointer hover:underline text-2xl rounded-full bg-vibrant-pink p-4"
                onClick={() => {
                  setShowModal(false);
                  setIsPlaying(true);
                }}
              >
                <Check />
              </span>
              <span
                className="text-vibrant-pink cursor-pointer hover:underline text-2xl p-4  rounded-full border-vibrant-pink border-2"
                onClick={() => setShowModal(false)}
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
