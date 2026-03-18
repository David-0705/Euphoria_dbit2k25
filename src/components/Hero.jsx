import { useState } from "react";
import Loop from "../assets/hero/loop.mp4";
import GlitchButton from "./HeroButton/HeroButton";
import ThreeScene from "./3D/ThreeScene";
import ThemeVideoOverlay from "./ThemeVideoOverlay";
import CompanyLogos from "./CompanyLogos";
import themeVid from "../assets/videos/euphotheme.mp4";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const yOffset = 0; // adjust if you have sticky header
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="hero_body">
      {/* Background Video + 3D Scene */}
      <div className="relative aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] rounded-b-[0.9rem] overflow-hidden">
        <video
          src={Loop}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {!showVideo && (
          <div className="h-64 sm:h-80 md:h-96 lg:h-[90vh]">
            <ThreeScene />
          </div>
        )}
      </div>

      {/* LEFT BUTTON */}
      <div
        className="
          absolute z-20
          left-[25vw] bottom-[50vh] scale-75
          sm:left-[25vw] sm:bottom-[calc(12vh+100px)] sm:scale-90
          md:left-[20vw] md:bottom-[15vh] md:scale-100
          lg:left-[4vw] lg:bottom-[15vh] lg:scale-100
          xl:left-[4vw] xl:bottom-[15vh] xl:scale-100
          origin-bottom-left
          transition-transform duration-300
        "
      >
        <GlitchButton text="Explore Euphoria" onClick={() => scrollToSection("Events")} />
      </div>

      {/* RIGHT BUTTON */}
      <div
        className="
          absolute z-20
          right-[20vw] bottom-[40vh] scale-75
          sm:right-[20vw] sm:bottom-[calc(12vh+500px)] sm:scale-90
          md:right-[15vw] md:bottom-[15vh] md:scale-100
          lg:right-[4vw] lg:bottom-[15vh] lg:scale-100
          xl:right-[4vw] xl:bottom-[15vh] xl:scale-100
          origin-bottom-right
          transition-transform duration-300
        "
      >
        <GlitchButton
          text="Reveal Theme"
          flip
          primary="#8b5cf6"
          accent="#22d3ee"
          onClick={() => setShowVideo(true)}
        />
      </div>

      {/* Video Overlay */}
      <ThemeVideoOverlay
        open={showVideo}
        onClose={() => setShowVideo(false)}
        videoSrc={themeVid}
      />

      {/* Scroll target anchor */}
      <div id="Events" className="relative w-full">
        {/* Content of Events section */}
        <CompanyLogos className="relative z-10 mt-20 lg:block" />
      </div>
    </div>
  );
};

export default Hero;
