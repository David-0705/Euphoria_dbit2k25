const Label = ({ title, date }) => (
  <div className="relative w-72 h-28 flex items-center justify-center">
    {/* MASKED BACKGROUND */}
    <div
      className="absolute inset-0 bg-white"
      style={{
        WebkitMaskImage: `url(${label})`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",

        maskImage: `url(${label})`,
        maskRepeat: "no-repeat",
        maskSize: "contain",
        maskPosition: "center",
      }}
    />

    {/* TEXT */}
    <div className="relative z-10 text-black font-black uppercase text-center pointer-events-none">
      <h2 className="text-2xl tracking-wider">{title}</h2>
      <h4 className="text-sm mt-1">{date}</h4>
    </div>
  </div>
);
