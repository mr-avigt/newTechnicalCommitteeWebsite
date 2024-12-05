import React from "react";

const Navbar = () => {
  return (
    <nav className="text-orange-300  font-base flex  justify-between h-[15%] backdrop-blur-md backdrop-saturate-25 z-10 items-center text-xl  drop-shadow-[0px_35px_30px_rgba(0,0,0,0.35)] w-full fixed">
      {/* <span className="w-full border border-red-500 absolute bg-none h-full "></span> */}
      <div className="text-xl text-white border ">Dune Awakening</div>
      <div className="container2 flex items-center justify-end gap-8 h-full border">
        <ul className="main-menu flex gap-4  h-full items-center justify-around border border-blue-400">
          <li className="border h-full p-2 flex items-center ">Home</li>
          <li className="border h-full p-2 flex items-center">Home</li>
          <li className="border h-full p-2 flex items-center">Home</li>
          <li className="border h-full p-2 flex items-center">Home</li>
          <li className="border h-full p-2 flex items-center">Home</li>
        </ul>
        <ul className="menu2 flex items-center  border h-full pr-8">
          <li>
            <span className="relative flex items-center justify-center">
              <span class="sides"></span>
              <span className="sides absolute inset-0"></span>
              <svg
                width="35px"
                height="35px"
                viewBox="8 2 45 38"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <polygon
                  stroke="#f4cf8b"
                  fill="none"
                  strokeWidth={1.5}
                  points="9 21 31 0 52 21 31 43"
                ></polygon>
              </svg>
            </span>
          </li>
          <span className="line"></span>
          <li>
            <span className="relative flex items-center justify-center">
              <span class="sides"></span>
              <span className="sides absolute inset-0"></span>
              <svg
                width="35px"
                height="35px"
                viewBox="8 2 45 38"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <polygon
                  stroke="#f4cf8b"
                  fill="none"
                  strokeWidth={1.5}
                  points="9 21 31 0 52 21 31 43"
                ></polygon>
              </svg>
            </span>
          </li>
          <span className="line"></span>
          <li>
            <span className="relative flex items-center justify-center">
              <span class="sides"></span>
              <span className="sides absolute inset-0"></span>
              <svg
                width="35px"
                height="35px"
                viewBox="8 2 45 38"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <polygon
                  stroke="#f4cf8b"
                  fill="none"
                  strokeWidth={1.5}
                  points="9 21 31 0 52 21 31 43"
                ></polygon>
              </svg>
            </span>
          </li>
          <span className="line"></span>
          <li>
            <span className="relative flex items-center justify-center ">
              <span className="sides "></span>
              <svg
                width="35px"
                height="35px"
                viewBox="8 2 45 38"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <polygon
                  stroke="#f4cf8b"
                  fill="none"
                  strokeWidth={1.5}
                  points="9 21 31 0 52 21 31 43"
                ></polygon>
              </svg>
            </span>
          </li>
          <span className="line"></span>
          <li className="flex items-center justify-center relative bottom-[0.5px]">
            <span className="sides"></span>
            <span className="line absolute left-0"></span>
            <svg
              width="35px"
              height="35px"
              viewBox="9 2 3 38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31 43 L9 21 L31 0"
                stroke="#f4cf8b"
                fill="none"
                stroke-width="1"
              />
            </svg>

            <span className="border-t border-b  border-custom-border items-center flex justify-center w-full  text-center text-md">
              Wishlist on Steam
            </span>

            <svg
              width="35px"
              height="35px"
              viewBox="9 2 40 38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0 L31 21 L9 43"
                stroke="#f4cf8b"
                fill="none"
                stroke-width="1"
              />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
