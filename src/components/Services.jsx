import React from "react";

import { marathon } from "../assets";
import logo from "../assets/hero/EuohoriaLogo.webp";
import matchUpImg from "../assets/DSC00767.webp";
import crown from "../assets/elements/_Group_ 7.png";
import label from "../assets/label/_Group_ 2.png";
import label1 from "../assets/label/_Group_ 3.png";
import lightning from "../assets/elements/A_Group_ 2.png";
import diamond from "../assets/elements/_Group_.png";
import doller from "../assets/elements/E_Group_ 7.png";

import "./ServicesVS.css";

export default function Services() {
  const handleMarathonClick = () => {
    window.open(
      "https://drive.google.com/drive/folders/1q8fif1LsAwa6AkUY9TSrGcafAuoY4b1H",
      "_blank"
    );
  };

  const Label = ({ title, date, src }) => (
    <div className="relative w-96 h-[500px] flex items-center justify-center">
      <img
        src={src}
        alt="Label"
        className="absolute inset-0 w-full h-full object-contain"
      />
      <div className="relative z-10 text-slate-950 font-black uppercase text-center">
        <h2 className="text-2xl tracking-wider">{title}</h2>
        {date && <h4 className="text-sm mt-1">{date}</h4>}
      </div>
    </div>
  );

  return (
    <section
      id="Events"
      className="
        relative
        w-full
        min-h-screen
        flex
        flex-col
        items-center
        gap-24
        px-6 sm:px-12 md:block
        md:h-[65rem]
        mt-20 mb-40
      "
    >
      <h1 className="text-5xl sm:text-6xl font-black uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-neonGraffiti mb-12">
  Upcoming Events
</h1>


      {/* ================= LOGO ================= */}
      <div className="relative mt-24 flex justify-center md:absolute md:top-36 md:right-60 md:rotate-[15deg] md:z-30">
        <div className="relative flex items-center justify-center animate-floatLogo">
          <img
            src={lightning}
            className="absolute -left-14 top-1/2 -translate-y-1/2 w-20 -rotate-45 animate-lightningPulse"
            alt=""
          />

          <img
            src={logo}
            alt="Logo"
            className="
              w-52 mt-7
              drop-shadow-[0_0_20px_rgba(255,200,0,0.7)]
              drop-shadow-[0_0_30px_rgba(255,120,0,0.5)]
            "
          />

          <img
            src={lightning}
            className="absolute -right-14 top-1/2 -translate-y-1/2 w-20 rotate-45 scale-x-[-1] animate-lightningPulse"
            alt=""
          />

          <img
            src={crown}
            alt="Crown"
            className="absolute -top-20 left-3 -translate-x-1/2 w-36 animate-floatCrown"
          />
        </div>
      </div>

      {/* ================= MARATHON ================= */}
      <div className="relative mt-10 w-full max-w-[95%] h-[36rem] sm:h-[38rem] md:absolute md:top-0 md:left-0 md:w-[70%] md:h-[40rem] md:z-20 p-4 md:p-0">
        <div
          onClick={handleMarathonClick}
          className="
            relative w-full h-full overflow-hidden cursor-pointer
            rounded-2xl
            bg-cyan-400/10
            shadow-[0_0_25px_rgba(0,255,255,0.6)]
            md:bg-transparent md:shadow-none md:rounded-none
            vs-mask-1
          "
        >
          <img
            src={marathon}
            alt="Marathon"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Label title="Marathon" date="January 24th" src={label} />
          </div>
        </div>
      </div>

      {/* ================= MATCHUPS ================= */}
      <div className="relative w-full max-w-[95%] h-[32rem] md:absolute md:bottom-0 md:right-0 md:w-[70%] md:h-[40rem] md:z-10 md:translate-x-16 md:translate-y-16 p-4 md:p-0">
        <a href="#/schedules">
          <div
            className="
              relative w-full h-full overflow-hidden
              rounded-2xl
              bg-cyan-400/10
              shadow-[0_0_25px_rgba(0,255,255,0.6)]
              md:bg-transparent md:shadow-none md:rounded-none
              vs-mask-2
            "
          >
            <img
              src={matchUpImg}
              alt="Matchups"
              className="w-full h-full object-cover brightness-75 contrast-110 saturate-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Label title="Matchups" src={label1} />
            </div>
          </div>
        </a>
      </div>

      {/* ================= DIAMOND ================= */}
      <div className="relative mb-24 flex justify-center md:absolute md:bottom-40 md:left-60 md:z-40 p-4 md:p-0">
        <div className="relative w-60 h-40">
          <img
            src={diamond}
            alt="Diamond"
            className="
              w-60 rotate-[-15deg] animate-floatLogo
              drop-shadow-[0_0_20px_rgba(255,200,0,0.7)]
              drop-shadow-[0_0_30px_rgba(255,120,0,0.5)]
            "
          />

          {[
            "-top-6 left-8 rotate-[-20deg]",
            "-top-8 right-0 rotate-[15deg]",
            "bottom-2 -left-8 rotate-[10deg]",
            "-bottom-6 right-4 rotate-[-10deg]",
          ].map((pos, i) => (
            <img
              key={i}
              src={doller}
              alt=""
              className={`absolute ${pos} w-12 opacity-75 animate-dollarShake`}
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
