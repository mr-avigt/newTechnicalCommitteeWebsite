import React from "react";
import PastSponsors from "./PastSponsors";

const Sponsors = () => {
  return (
    <div className="bg-[url('/contactus_bgd.webp')] bg-cover bg-no-repeat bg-center bg-[#23201d] p-2 sm:p-4 bg- h-auto max-w-[100vw] flex flex-col items-start justify-start p-10 overflow-x-hidden">
      <div class="h-auto w-full p-1 flex flex-row items-center justify-center">
        <div className="fady-box" style={{ scale: "1" }}>
          <div className="b_line  bg-gradient-to-l  from-[#F4CF8B] absolute  to-transparent h-[2px] w-20"></div>
          SPONSORS
          <div className="borders absolute">
            <div className="before"></div>
            <div className="after ml-[27px] mb-[1px]"></div>
          </div>
          <div className="r_line bg-gradient-to-r from-[#F4CF8B] absolute to-transparent h-[2px] w-20"></div>
        </div>
      </div>
      <div className="mx-auto w-auto h-auto flex flex-row flex-wrap justify-evenly">
        <div
          id="1"
          className="w-[70%] h-80 bg-transparent border-4 border-[#F4CF8B] m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105  hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group"
        >
          <div className="absolute inset-0 bg-[url('/GrowliAI.png')] bg-cover bg-no-repeat bg-center"></div>
          <div
            id="2"
            className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
          >
          <span className="text-2xl font-bold tracking-wide text-[#f4cf8b] flex flex-col flex-wrap sm:whitespace-normal">
  Grownli <br className="sm:hidden" /> AI
  <span className="text-base">(OUR TITLE SPONSOR)</span>
</span>


          </div>
        </div>

        <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group">
          {" "}
          <div className="absolute inset-0 bg-[url('/TC_Logo.webp')]  bg-cover bg-no-repeat bg-center rotate-[-45deg]"></div>
          <div
            id="2"
            className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
            style={{ rotate: "-45deg" }}
          >
            <span className="text-xl font-bold tracking-wide text-[#f4cf8b] ">
              S P O N S O R<br />
            </span>
          </div>
        </div>
        <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group">
          {" "}
          <div className="absolute inset-0 bg-[url('/TC_Logo.webp')]  bg-cover bg-no-repeat bg-center rotate-[-45deg]"></div>
          <div
            id="2"
            className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
            style={{ rotate: "-45deg" }}
          >
            <span className="text-xl font-bold tracking-wide text-[#f4cf8b]">
              S P O N S O R<br />
            </span>
          </div>
        </div>
        <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group">
          {" "}
          <div className="absolute inset-0 bg-[url('/TC_Logo.webp')]  bg-cover bg-no-repeat bg-center rotate-[-45deg]"></div>
          <div
            id="2"
            className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
            style={{ rotate: "-45deg" }}
          >
            <span className="text-xl font-bold tracking-wide text-[#f4cf8b]">
              S P O N S O R<br />
            </span>
          </div>
        </div>
        <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group ">
          {" "}
          <div className="absolute inset-0 bg-[url('/TC_Logo.webp')]  bg-cover bg-no-repeat bg-center rotate-[-45deg]"></div>
          <div
            id="2"
            className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 rotate"
            style={{ rotate: "-45deg" }}
          >
            <span className="text-xl font-bold tracking-wide text-[#f4cf8b]">
              S P O N S O R<br />
            </span>
          </div>
        </div>
      </div>
      <PastSponsors />
    </div>
  );
};

export default Sponsors;
