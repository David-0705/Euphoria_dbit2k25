import React, { useRef, useState, useEffect } from "react";
import Header from "./Header";

const ThemeVideoOverlay = ({ open, onClose, videoSrc }) => {
  const videoRef = useRef(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setEnded(false);
      setTimeout(() => videoRef.current?.play(), 100);
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <Header darkMode={false} />
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={() => setEnded(true)}
      />

      {ended && (
        <div className="absolute bottom-10 w-full flex justify-center">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-white text-black text-lg font-semibold rounded-full animate-fadeIn"
          >
            Continue →
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeVideoOverlay;
