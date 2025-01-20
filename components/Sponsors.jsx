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
      <div className="mx-auto w-auto h-auto flex flex-col items-center">
        <div
          id="1"
          className="w-[70%] h-80 bg-transparent border-4 border-[#F4CF8B] m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group"
        >
          <div className="absolute inset-0 flex item-center bg-no-repeat bg-center">
            <a
              href="https://growli.ai"
              target="blank"
              className="absolute inset-0 flex item-center bg-no-repeat bg-center"
            >
              <img
                src="/growli.svg"
                className="mx-auto my-auto scale-[1] md:scale-[3] sm:scale-[2]"
                alt=""
              />
            </a>
          </div>
          <div
            id="2"
            className="absolute inset-0 mb-5 flex items-end justify-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-2xl mfont-bold tracking-wide text-[#f4cf8b] flex flex-col flex-wrap sm:whitespace-normal">
              <span className="text-4xl font-serif tracking-widest">
                TITLE SPONSOR
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-evenly mt-10">
          <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group">
            <a
              href="https://www.instagram.com/waffle99.official/"
              target="blank"
            >
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url("/sponsor1.png")`,
                  backgroundSize: "cover",
                  scale: "2.2",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transform: "rotate(-45deg)",
                }}
              ></div>
            </a>
          </div>

        

          <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group">
            <a
              href="https://www.instagram.com/ramenoz_pizza_jaipur/"
              target="blank"
            >
              <div className="absolute inset-0 overflow-hidden bg-black bg-no-repeat m-2">
                <a
                  href="https://www.instagram.com/ramenoz_pizza_jaipur/"
                  target="blank"
                >
                  <div
                    className="absolute inset-0  bg-cover bg-no-repeat bg-center  "
                    style={{
                      backgroundColor: `black`,
                      backgroundImage: `url("/Ramenoz.jpeg")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center -12px",
                      transform: "rotate(-45deg)",
                    }}
                  ></div>
                </a>
              </div>
            </a>
          </div>
          <div className="absolute inset-0 overflow-hidden bg-black bg-no-repeat m-2">
                <a
                  href="https://www.instagram.com/ramenoz_pizza_jaipur/"
                  target="blank"
                >
                  <div
                    className="absolute inset-0  bg-cover bg-no-repeat bg-center  "
                    style={{
                      backgroundColor: `black`,
                      backgroundImage: `url("/past3.png")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center -12px",
                      transform: "rotate(-45deg)",
                    }}
                  ></div>
                </a>
              </div>
            </a>
          </div>

          <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group">
            <a href="https://www.instagram.com/timejaipur" target="blank">
              <div className="absolute inset-0 overflow-hidden bg-white bg-no-repeat m-2">
                <a href="https://www.instagram.com/timejaipur" target="blank">
                  <div
                    className="absolute inset-0 bg-no-repeat bg-center  "
                    style={{
                      backgroundColor: `white`,
                      backgroundImage: `url("/time.png")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      transform: "rotate(-45deg)",
                    }}
                  ></div>
                </a>
              </div>
            </a>
          </div>
       <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group">
            <a href="https://www.instagram.com/timejaipur" target="blank">
              <div className="absolute inset-0 overflow-hidden bg-white bg-no-repeat m-2">
                <a href="https://www.instagram.com/timejaipur" target="blank">
                  <div
                    className="absolute inset-0 bg-no-repeat bg-center  "
                    style={{
                      backgroundColor: `white`,
                      backgroundImage: `url("/time.png")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      transform: "rotate(-45deg)",
                    }}
                  ></div>
                </a>
              </div>
            </a>
          </div>


          <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group">
            <a
              href="https://www.instagram.com/astrodivinevision18?utm_source=qr&igsh=MXQyNnFuajZrM2Vrdg=="
              target="blank"
            >
              <div className="absolute inset-0 overflow-hidden bg-black bg-no-repeat m-2">
                <a
                  href="https://www.instagram.com/astrodivinevision18?utm_source=qr&igsh=MXQyNnFuajZrM2Vrdg=="
                  target="blank"
                >
                  <div
                    className="absolute inset-0 bg-no-repeat bg-center  "
                    style={{
                      backgroundColor: `black`,
                      backgroundImage: `url("/astrodivine.jpg")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      transform: "rotate(-45deg)",
                    }}
                  ></div>
                </a>
              </div>
            </a>
          </div>
          <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group">
            <a
              href="https://www.instagram.com/waraahijaipur/?hl=en"
              target="blank"
            >
              <div className="absolute inset-0 overflow-hidden bg-black bg-no-repeat m-2">
                <a
              href="https://www.instagram.com/waraahijaipur/?hl=en"
              target="blank"
                >
                  <div
                    className="absolute inset-0 bg-no-repeat bg-center  "
                    style={{
                      backgroundColor: `black`,
                      backgroundImage: `url("/waraahi.png")`,
                      backgroundSize: "contain",
                      backgroundPosition: "center 0px",
                      backgroundRepeat: "no-repeat",
                      transform: "rotate(-45deg)",
                    }}
                  ></div>
                </a>
              </div>
            </a>
          </div>
          <div className="w-40 h-40 bg-transparent border-4 border-[#F4CF8B] rotate-45 m-16 overflow-hidden flex flex-col flex-end transform transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,215,0,0.7),0_0_20px_rgba(0,0,0,0.5)] text-center relative group">
            <a
              href="https://www.instagram.com/jaipur_soya_king_/"
              target="blank"
            >
              <div className="absolute inset-0 overflow-hidden bg-black bg-no-repeat m-2">
                <a
              href="https://www.instagram.com/jaipur_soya_king_/"
              target="blank"
                >
                  <div
                    className="absolute inset-0 bg-no-repeat bg-center  "
                    style={{
                      backgroundColor: `black`,
                      backgroundImage: `url("/soyaking.jpg")`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      transform: "rotate(-45deg) scale(1.8)",
                    }}
                  ></div>
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>

      <PastSponsors />
    </div>
  );
};

export default Sponsors;
