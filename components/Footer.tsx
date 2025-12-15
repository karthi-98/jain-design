import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full h-[40vh] min-h-[300px] flex flex-col justify-end overflow-hidden bg-gray-900">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/footer.jpg"
          alt="Green Abstract 3D Landscape"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Darker overlay to ensure white text remains legible on the bright green background */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-black/20 to-black/10 pointer-events-none" />
      </div>

      {/* Top Gradient Blend: Merges footer with the white section above */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

      {/* Main Visual: Giant Text */}
      <div className="relative z-10 flex-grow flex items-center justify-center w-full px-4">
        <h1 className="text-[9vw] md:text-[9vw] font-bold leading-none tracking-tighter select-none text-center translate-y-8">
          <span className="bg-gradient-to-b from-white via-white/80 to-transparent bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,255,255,0.8)]">
            Design With Karthick
          </span>
        </h1>
      </div>

      {/* Minimal Bottom Bar */}
      <div className="relative z-20 w-full max-w-[90%] mx-auto pb-8 md:pb-12">
        <div className="h-px w-full bg-white/30 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-white/90 text-xs md:text-sm font-medium tracking-wide">
          <p>© 2025 Design With Karthick. All rights reserved.</p>
          {/* <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Terms & Conditions</a>
          </div> */}
        </div>
      </div>

    </footer>
  );
};

export default Footer;