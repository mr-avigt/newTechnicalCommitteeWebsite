import React from "react";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import {
  useGLTF,
  Stage,
  PresentationControls,
  Environment,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
function Model(props) {
  const { scene } = useGLTF("/Orinthopter.glb");
  const modelRef = useRef();

  // Add continuous rotation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}
const HOMEpage = () => {
  const lenisRef = useRef(null);
  const box = useRef();
  const [SideImgVisible, setSideImgVisible] = useState(false);
  const [BottomImgVisible, setBottomImgVisible] = useState(false);
  const [showdropdown, setShowdropdown] = useState(true);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const checkVisibility = () => {
      const sideimg = document.querySelector(".sideimg");
      const bottomimg = document.querySelector(".bottomimg");

      if (sideimg) {
        const sideimgPosition = sideimg.getBoundingClientRect().left;

        // Check if sideimg is visible
        if (sideimgPosition === 0) {
          setSideImgVisible(true);
        } else {
          setSideImgVisible(false);
        }
      }

      if (bottomimg) {
        const bottomimgPosition = bottomimg.getBoundingClientRect().bottom;

        // Check if bottomimg is visible
        if (bottomimgPosition === 0) {
          setBottomImgVisible(true);
        } else {
          setBottomImgVisible(false);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", checkVisibility);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []); // Run this effect only once when the component mounts

  useGSAP(
    () => {
      let t = gsap.timeline({
        scrollTrigger: {
          trigger: ".outer",
          start: "top top",
          end: "700% top",
          pin: true,
          scrub: 2,
          markers: true,
        },
      });

      t.to(".inner", {
        scale: 3,
        ease: "none",
        duration: 7, // Adjust as needed
      }).to(
        ".base",
        {
          opacity: 1,
          ease: "none",
          duration: 1, // Adjust to match the `.inner` scaling duration
        },
        "<" // Ensures the animations happen at the same time
      );

      t.to(".Events", {
        opacity: 1,

        duration: 4, // Increase this for slower, longer animation
      });

      const cardsContainer = document.querySelector(".cards");
      if (cardsContainer) {
        const cardHeight =
          cardsContainer.querySelector(".card").offsetHeight + 16; // Card height + gap
        const gridColumns =
          window.innerWidth < 768 // Check if screen width is less than 768px (phone)
            ? 1 // Mobile: single column
            : window
                .getComputedStyle(cardsContainer)
                .gridTemplateColumns.split(" ").length; // Desktop: grid column count
        const totalRows = Math.ceil(
          cardsContainer.childElementCount / gridColumns
        );
        const totalHeight =
          totalRows * cardHeight -
          cardsContainer.querySelector(".card").offsetHeight;

        t.to(
          cardsContainer.querySelectorAll(".card"),
          {
            y: `-${totalHeight}px`, // Move cards up dynamically
            ease: "none",
            duration: totalRows * 2, // Adjust speed dynamically based on rows
          },
          "+=1"
        );
      }

      if (window.matchMedia("(min-width: 768px)").matches) {
        t.to(
          [".sideimg"],
          {
            opacity: 1,
            left: 0,
            duration: 7,
          },
          "-=3"
        );
      }
      t.to(
        [".bottomimg"],
        {
          opacity: 1,
          bottom: 0,
          duration: 7,
        },
        "-=3"
      );

      gsap.utils.toArray(".page").forEach((page) => {
        t.to(page, {
          opacity: 1,
          duration: 4,
        });
        t.to(
          [page.querySelector(".sqimg"), page.querySelector(".section2")],
          {
            opacity: 1,
            bottom: 0,
            right: (index, target) =>
              target.classList.contains("sqimg") ? 0 : undefined, // Ensures sqimg animates right
            duration: 5, // Simultaneous entry
            // Start overlapping with the previous animation
          },
          "-=0.5"
        );
        t.to([page.querySelector(".sqimg"), page.querySelector(".section2")], {
          opacity: 0,
          bottom: (index, target) =>
            target.classList.contains("sqimg") ? "-100%" : "100%", // Ensures different animations for .sqimg and .section2
          right: "-90%",
          duration: 5, // Smooth exit
          delay: 1,
        });
      }, "-=1.5");
    },
    { scope: box }
  );
  useLayoutEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      damping: 0.1, // Lower values = slower scroll, Higher = faster
      // Control the scroll speed sensitivity
      smoothWheel: true, // Enable smooth scrolling for wheel events
      wheelMultiplier: 0.7, // Adjust scroll sensitivity for mouse wheels (default is 1)
      smoothTouch: true, // Enable smooth scrolling for touch devices
      touchMultiplier: 1.5, // Adjust scroll sensitivity for touch gestures (default is 2)
      infinite: false, // Disable infinite scroll if enabled
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time); // Update Lenis on every animation frame
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Update ScrollTrigger to sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    gsap.to(".circle-glyph", {
      rotate: 180,
      opacity: 0.3,
      duration: 3.5, // Longer duration for smoother animation
      ease: "expo.out", // Use exponential easing for a polished look
    });
    return () => {
      lenis.destroy();
    };
  }, []); // Run once when the component mounts

  return (
    <>
      <div className="HOME h-screen relative w-full flex z-10 items-center justify-center">
        <div className="borderbox border-[1.3px] border-custom-border w-[98%] h-[96%] absolute  rounded-br-3xl rounded-3xl">
          {/* <Canvas
            dpr={[1, 2]}
            shadows
            camera={{ fov: 45 }}
            style={{
              position: "relative",
              zIndex: "1",
              left: "10vw",
              top: "10vh",
              width: "80%",
              height: "80%",
              backgroundColor: "transparent",
            }}
          >
            <color attach="backgroundColor" args={["transparent"]} />
            <ambientLight intensity={0.3} />
            <directionalLight
              position={[10, 10, 10]}
              intensity={1}
              castShadow
            />
            <pointLight position={[5, 5, 5]} intensity={0.8} />

            <PresentationControls
              speed={1.5}
              global
              zoom={2}
              polar={[-Math.PI / 2, Math.PI / 2]}
              azimuth={[-Infinity, Infinity]}
              minZoom={0}
              maxZoom={0}
            >
              <Stage environment={null}>
                <Model scale={0.02} style={{ scale: "0.8" }} />
              </Stage>
            </PresentationControls>
          </Canvas> */}
          <div className="top absolute right-3 top-2 ">
            <ul className="menu2 items-center justify-end h-full hidden lg:flex">
              {/* <span className="line  text-white w-[80%]"></span> */}
              {/* <li className="relative border flex items-center justify-center">
                <span className="relative cursor-pointer flex items-center justify-center">
                  <span className="sides"></span>
                  <span className="sides absolute inset-0"></span>
                  <svg
                    width="45px"
                    height="45px"
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
              <span className="line"></span> */}
              <li className="relative flex items-center justify-center group">
                {/* Background SVG (Social Icon) */}
                <span className="[&>svg]:h-4 [&>svg]:w-4 absolute z-10 invert-[1] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </span>
                {/* Diamond-Shaped Structure */}
                <span className="relative flex cursor-pointer items-center justify-center">
                  {/* Sides span */}
                  <span className="sides z-20"></span>
                  {/* Diamond Polygon */}
                  <svg
                    width="45px"
                    height="45px"
                    viewBox="8 2 45 38"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon
                      stroke="#f4cf8b"
                      fill="none"
                      strokeWidth={1.5}
                      points="9 21 31 0 52 21 31 43"
                      className="transition duration-500 ease-in-out z-10 group-hover:fill-[#482d4e] group-hover:stroke-[#d9b5e2]"
                    ></polygon>
                  </svg>
                </span>
              </li>
              <span className="line"></span>
              <li className="relative flex items-center justify-center group">
                {/* Background SVG (Social Icon) */}
                <span className="[&>svg]:h-4 [&>svg]:w-4 absolute z-10 invert">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
                {/* Diamond-Shaped Structure */}
                <span className="relative flex cursor-pointer items-center justify-center">
                  {/* Sides span */}
                  <span className="sides z-20"></span>
                  {/* Diamond Polygon */}
                  <svg
                    width="45px"
                    height="45px"
                    viewBox="8 2 45 38"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon
                      stroke="#f4cf8b"
                      fill="none"
                      strokeWidth={1.5}
                      points="9 21 31 0 52 21 31 43"
                      className="transition duration-500 ease-in-out z-10 group-hover:fill-[#482d4e] group-hover:stroke-[#d9b5e2]"
                    ></polygon>
                  </svg>
                </span>
              </li>

              <span className="line"></span>
              <li className="relative flex items-center justify-center group">
                {/* Background SVG (Social Icon) */}
                <span className="[&>svg]:h-4 [&>svg]:w-4 absolute z-10 invert-[1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 505"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6-7.8 34.7-22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
                {/* Diamond-Shaped Structure */}
                <span className="relative flex cursor-pointer items-center justify-center">
                  {/* Sides span */}
                  <span className="sides z-20"></span>
                  {/* Diamond Polygon */}
                  <svg
                    width="45px"
                    height="45px"
                    viewBox="8 2 45 38"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon
                      stroke="#f4cf8b"
                      fill="none"
                      strokeWidth={1.5}
                      points="9 21 31 0 52 21 31 43"
                      className="transition duration-500 ease-in-out z-10 group-hover:fill-[#482d4e] group-hover:stroke-[#d9b5e2]"
                    ></polygon>
                  </svg>
                </span>
              </li>
              {/* <span className="line  text-white w-[20px]"></span> */}
            </ul>
          </div>
        </div>
        <div className="drone w-full h-full flex items-center justify-center">
          <svg
            className="circle-glyph opacity-0 absolute opacity-30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1373 1373"
            width="70%" // Set width and height as per your need
            height="70%"
            strokeWidth={1.5}
          >
            <path
              stroke="#ffffff"
              d="M201.051 201.051h970.899v970.899H201.051z"
              strokeWidth={1.5}
            ></path>
            <path
              d="M.707 686.5 686.5.707 1372.29 686.5 686.5 1372.29.707 686.5Z"
              stroke="#ffffff"
              strokeWidth={1.5}
            ></path>
            <circle cx="686.5" cy="686.5" r="686" stroke="#ffffff"></circle>
            <path
              d="M201.454 201.454 686.5.541l485.05 200.913L1372.46 686.5l-200.91 485.05-485.05 200.91-485.046-200.91L.541 686.5l200.913-485.046Z"
              stroke="#ffffff"
              strokeWidth={1.5}
            ></path>
            <path
              d="M1172.45 1172.45 200.551 200.551"
              stroke="#ffffff"
              strokeWidth={1.5}
            ></path>
            <path
              d="m200.551 1172.45 971.899-971.899"
              stroke="#ffffff"
              strokeWidth={1.5}
            ></path>
          </svg>
        </div>
        <div className="navigation z-10 items-center absolute bottom-[2%] w-[40vw] border-t-[1.5px] border-[#F4CF8B] rounded-t-xl h-[7%] hidden lg:flex">
          <ul className="main-menu laptop_home_bottom_menu flex text-[#F4CF8B] xl:text-md lg:text-sm w-full  h-full items-center justify">
            <li className=" h-full flex flex-col w-1/3 items-center justify-center">
              <div className="w-full h-full border-r-2 border-custom-border"></div>
              <span className="w-full text-center tracking-widest font-semibold">
                HOME
              </span>
              <span className="w-full border-r-2 h-full border-custom-border"></span>
            </li>
            <li className=" h-full flex flex-col w-1/2 items-center justify-center">
              <div className="w-full h-full border-r-2 border-custom-border"></div>
              <span className="w-full text-center h-1/2 font-semibold  tracking-widest ">
                CHARACTERS
              </span>
              <span className="w-full border-r-2 h-full border-custom-border"></span>
            </li>
            <li className=" h-full flex flex-col w-1/3 items-center justify-center">
              <div className="w-full h-full border-r-2 border-custom-border"></div>
              <span className="w-full text-center h-1/2 font-semibold tracking-widest">
                CITIES
              </span>
              <span className="w-full border-r-2 h-full border-custom-border"></span>
            </li>
            <li className=" h-full flex flex-col w-1/2 items-center justify-center">
              <div className="w-full h-full "></div>
              <span className="w-full text-center h-1/2 font-semibold tracking-widest">
                CREATURES
              </span>
              <span className="w-full h-full"></span>
            </li>
          </ul>
        </div>
        <div className="menu-button lg:hidden absolute top-[4%] right-[0%] z-20 h-10 flex gap-1 items-center w-[130px]">
          {/* Line with Gradient */}
          <div className="bg-gradient-to-l from-[#F4CF8B] to-transparent h-[2px] w-[45%]"></div>

          {/* Diamond Menu Button */}
          <div
            className="cursor-pointer transform rotate-45 border-[1.5px] border-custom-border w-8 h-8 flex items-center justify-center shadow-md"
            onClick={() => {
              setShowdropdown(!showdropdown);
            }}
          >
            {/* Actual Menu Button inside the diamond */}
            <div
              className={`menu-button flex flex-col justify-center items-center space-y-1 transform -rotate-45 transition-all`}
            >
              <div
                className={`w-4 h-[1px] border border-custom-border ${
                  !showdropdown ? "opacity-0" : "opacity-100"
                } transition-opacity duration-200`}
              ></div>
              <div
                className={`w-4 h-[1px] border border-custom-border ${
                  !showdropdown ? "opacity-0" : "opacity-100"
                } transition-opacity duration-500`}
              ></div>
              <div
                className={`w-4 h-[1px] border border-custom-border ${
                  !showdropdown ? "opacity-0" : "opacity-100"
                } transition-opacity duration-1000`}
              ></div>
              <div
                className={` h-[1px] top-[2px] absolute border rotate-45 border-custom-border ${
                  !showdropdown ? "w-[120%]" : "w-0 opacity-0"
                } transition-all duration-700`}
              ></div>
              <div
                className={` h-[1px] top-[2px] absolute border rotate-[135deg] border-custom-border ${
                  !showdropdown ? "w-[120%]" : "w-0 opacity-0"
                } transition-all duration-1000`}
              ></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#F4CF8B] to-transparent h-[2px] w-[20%]"></div>
        </div>
        <div
          id="drawer-navigation"
          className={`text-white absolute z-10 left-0 text-center w-full  top-0 right-0 h-full ${
            showdropdown ? "-translate-x-full" : "-translate-x"
          } overflow-y-auto transition-transform duration-1000`}
        >
          <ul className="menu-items text-xl tracking-wider h-[50%] w-full mt-20 flex flex-col items-center justify-center">
            <li className="relative menu-item h-1/6 flex items-center  w-full">
              <a
                href="#"
                className="menu-link active flex items-center group relative w-full h-full"
                data-menu-link=""
              >
                {/* Title */}
                <span className="menu-link-wrapper  transition ml-8 ">
                  HOME
                </span>

                {/* Hover SVG (Vertical Pink) */}
                <svg
                  className="absolute left-0 top-1/2 transform -translate-y-1/2  scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100  transition-opacity duration-1000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="55"
                  viewBox="0 0 6 60"
                >
                  <path
                    opacity=".5"
                    d="M0 5v54l3 5V0L0 5Z"
                    fill="url(#a)"
                  ></path>
                  <path fill="url(#b)" d="M2 15H1V49h1V15z"></path>
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0"
                      y1="64"
                      x2="0"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E39DE3" stopOpacity="0"></stop>
                      <stop offset=".234" stopColor="#E39DE3"></stop>
                      <stop offset=".766" stopColor="#E39DE3"></stop>
                      <stop
                        offset="1"
                        stopColor="#E39DE3"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="2"
                      y1="49"
                      x2="1"
                      y2="15"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E39DE3" stopOpacity="0"></stop>
                      <stop offset=".234" stopColor="#E39DE3"></stop>
                      <stop offset=".766" stopColor="#E39DE3"></stop>
                      <stop
                        offset="1"
                        stopColor="#E39DE3"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>
            <li className="relative menu-item h-1/6 flex items-center  w-full">
              <a
                href="#"
                className="menu-link active flex items-center group relative w-full h-full"
                data-menu-link=""
              >
                {/* Title */}
                <span className="menu-link-wrapper  ml-8 ">CHARACTERS</span>
                {/* Hover SVG (Vertical Pink) */}
                <svg
                  className="absolute left-0 top-1/2 transform -translate-y-1/2  scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100  transition-opacity duration-1000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="55"
                  viewBox="0 0 6 60"
                >
                  <path
                    opacity=".3"
                    d="M0 5v54l3 5V0L0 5Z"
                    fill="url(#a)"
                  ></path>
                  <path fill="url(#b)" d="M2 15H1V49h1V15z"></path>
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0"
                      y1="64"
                      x2="0"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E39DE3" stopOpacity="0"></stop>
                      <stop offset=".234" stopColor="#E39DE3"></stop>
                      <stop offset=".766" stopColor="#E39DE3"></stop>
                      <stop
                        offset="1"
                        stopColor="#E39DE3"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="2"
                      y1="49"
                      x2="1"
                      y2="15"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E39DE3" stopOpacity="0"></stop>
                      <stop offset=".234" stopColor="#E39DE3"></stop>
                      <stop offset=".766" stopColor="#E39DE3"></stop>
                      <stop
                        offset="1"
                        stopColor="#E39DE3"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>
            <li className="relative menu-item h-1/6 flex items-center  w-full">
              <a
                href="#"
                className="menu-link active flex items-center group relative w-full h-full"
                data-menu-link=""
              >
                {/* Title */}
                <span className="menu-link-wrapper  transition ml-8 ">
                  CITIES
                </span>

                {/* Hover SVG (Vertical Pink) */}
                <svg
                  className="absolute left-0 top-1/2 transform -translate-y-1/2  scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100  transition-opacity duration-1000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="55"
                  viewBox="0 0 6 60"
                >
                  <path
                    opacity=".3"
                    d="M0 5v54l3 5V0L0 5Z"
                    fill="url(#a)"
                  ></path>
                  <path fill="url(#b)" d="M2 15H1V49h1V15z"></path>
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0"
                      y1="64"
                      x2="0"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E39DE3" stopOpacity="0"></stop>
                      <stop offset=".234" stopColor="#E39DE3"></stop>
                      <stop offset=".766" stopColor="#E39DE3"></stop>
                      <stop
                        offset="1"
                        stopColor="#E39DE3"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="2"
                      y1="49"
                      x2="1"
                      y2="15"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E39DE3" stopOpacity="0"></stop>
                      <stop offset=".234" stopColor="#E39DE3"></stop>
                      <stop offset=".766" stopColor="#E39DE3"></stop>
                      <stop
                        offset="1"
                        stopColor="#E39DE3"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>
            <li className="relative menu-item h-1/6 flex items-center  w-full">
              <a
                href="#"
                className="menu-link active flex items-center group relative w-full h-full"
                data-menu-link=""
              >
                {/* Title */}
                <span className="menu-link-wrapper transition ml-8 ">
                  FEATURES
                </span>

                {/* Hover SVG (Vertical Pink) */}
                <svg
                  className="absolute left-0 top-1/2 transform -translate-y-1/2  scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100  transition-opacity duration-1000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="55"
                  viewBox="0 0 6 60"
                >
                  <path
                    opacity=".3"
                    d="M0 5v54l3 5V0L0 5Z"
                    fill="url(#a)"
                  ></path>
                  <path fill="url(#b)" d="M2 15H1V49h1V15z"></path>
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0"
                      y1="64"
                      x2="0"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E39DE3" stopOpacity="0"></stop>
                      <stop offset=".234" stopColor="#E39DE3"></stop>
                      <stop offset=".766" stopColor="#E39DE3"></stop>
                      <stop
                        offset="1"
                        stopColor="#E39DE3"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="2"
                      y1="49"
                      x2="1"
                      y2="15"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E39DE3" stopOpacity="0"></stop>
                      <stop offset=".234" stopColor="#E39DE3"></stop>
                      <stop offset=".766" stopColor="#E39DE3"></stop>
                      <stop
                        offset="1"
                        stopColor="#E39DE3"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section
        ref={box}
        className="vid_container relative z-30  overflow-hidden border-red-500"
      >
        <div className="outer h-[100vh] flex w-full relative items-center justify-center">
          <svg
            className="circle-glyph2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1373 1373"
            width="120%" // Set width and height as per your need
            height="120%"
            opacity={0.2}
          >
            <path
              stroke="#f4cf8b"
              d="M201.051 201.051h970.899v970.899H201.051z"
            ></path>
            <path
              d="M.707 686.5 686.5.707 1372.29 686.5 686.5 1372.29.707 686.5Z"
              stroke="#f4cf8b"
            ></path>
            <circle cx="686.5" cy="686.5" r="686" stroke="#f4cf8b"></circle>
            <path
              d="M201.454 201.454 686.5.541l485.05 200.913L1372.46 686.5l-200.91 485.05-485.05 200.91-485.046-200.91L.541 686.5l200.913-485.046Z"
              stroke="#f4cf8b"
            ></path>
            <path d="M1172.45 1172.45 200.551 200.551" stroke="#f4cf8b"></path>
            <path d="m200.551 1172.45 971.899-971.899" stroke="#f4cf8b"></path>
          </svg>
          <div className="flex items-center absolute justify-center h-full w-[33.4%] sm:w-[33.1%] lg:w-[25%] 2xl:w-[27%] ">
            <div className="inner relative flex border border-custom-border h-[33.2%] sm:h-[31%] md:h-auto">
              <span className="frame ">
                <div className="left"></div>
                <div className="right"></div>
              </span>
              <video
                className="base h-auto object-cover opacity-50"
                src="../src/assets/video.mp4"
                muted
                loop
                autoPlay
                playsInline
              ></video>
            </div>
          </div>
          <div className="Events opacity-0 flex justify-center items-center h-full w-full bg-[#23201d] absolute border-green-500">
            <svg
              className="circle-glyph2 absolute"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1373 1373"
              width="110%"
              height="110%"
              opacity={0.4}
            >
              <path
                stroke="#f4cf8b"
                d="M201.051 201.051h970.899v970.899H201.051z"
              ></path>
              <path
                d="M.707 686.5 686.5.707 1372.29 686.5 686.5 1372.29.707 686.5Z"
                stroke="#f4cf8b"
              ></path>
              <circle cx="686.5" cy="686.5" r="686" stroke="#f4cf8b"></circle>
              <path
                d="M201.454 201.454 686.5.541l485.05 200.913L1372.46 686.5l-200.91 485.05-485.05 200.91-485.046-200.91L.541 686.5l200.913-485.046Z"
                stroke="#f4cf8b"
              ></path>
              <path
                d="M1172.45 1172.45 200.551 200.551"
                stroke="#f4cf8b"
              ></path>
              <path
                d="m200.551 1172.45 971.899-971.899"
                stroke="#f4cf8b"
              ></path>
            </svg>
            <div className="container2 relative  h-full w-full  p-8">
              <h2 className="text-xl text-white mb-4 text-center">
                LATEST NEWS
              </h2>
              <div
                className={`cards ${BottomImgVisible ? "md:grid" : ""} ${
                  SideImgVisible ? "md:z-0" : ""
                } absolute left-0 z-50 p-8 overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}
              >
                {/* Card Components */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card, index) => (
                  <div
                    key={index}
                    className="card cursor-pointer border-[1.5px] border-custom-border relative"
                  >
                    <div className="flex flex-col m-1 border-[1.5px] border-[#5C4033]">
                      <div className="thumbnail">
                        <img src="../src/assets/thumb1.png" alt="" />
                      </div>
                      <div className="content relative border-t-[1.5px] p-2 border-t-[#5C4033]">
                        <div className="absolute left-[45%] -top-[25%]">
                          <div className="w-7 h-7 rotate-45 border-[#5C4033] border-t border-l">
                            <div className="absolute inset-0 bg-[#23201d]"></div>
                            <div className="absolute inset-1 border-[1.5px] border-[#faa9ff] bg-[#482d4e]"></div>
                            <div className="absolute inset-2 m-[0.5px] bg-[#faa9ff] "></div>
                          </div>
                        </div>
                        <h3 className="text-lg mt-3 font-medium text-[#f4cf8b] m-1">
                          Communinet Signal #{card}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`sideimg hidden md:flex  absolute w-full h-full -left-[150%]  ${
              SideImgVisible ? "z-[50]" : "z-[30]"
            }`}
          ></div>
          <div
            className={`bottomimg flex md:hidden absolute w-full h-full  ${
              BottomImgVisible ? "z-[50]" : "z-[30]"
            } -bottom-[150%]`}
          ></div>
          <div className="page page1 bg-blue-500 flex-col md:flex-row absolute w-full h-full flex opacity-0 ">
            <div className="section1 border border-red-500 h-full w-[25%]"></div>
            <div className="section2 opacity-0 border flex-col absolute left-[25%] -bottom-[90%] border-green-500 flex items-center justify-center text-white p-2 h-full w-[35%]">
              <p>page1</p>
              <p>line2</p>
              <p>line3</p>
            </div>
            <div className="section3 absolute right-0  border border-blue-500 flex items-center justify-center h-full w-[40%]">
              <div className="square  overflow-hidden rotate-45  h-[27vw] w-[27vw] border-custom-border border">
                <img
                  className="sqimg opacity-0 w-full absolute -bottom-[100%] -right-[100%] h-full"
                  src="../src/assets/dummy1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="page page2 absolute w-full h-full flex opacity-0 bg-blue-900">
            <div className="section1 border border-red-500 h-full w-[25%]"></div>
            <div className="section2 opacity-0 border flex-col absolute left-[25%] -bottom-[90%] border-green-500 flex items-center justify-center text-white p-2 h-full w-[35%]">
              <p>page2</p>
              <p>line2</p>
              <p>line3</p>
            </div>
            <div className="section3 absolute right-0  border border-blue-500 flex items-center justify-center h-full w-[40%]">
              <div className="square  overflow-hidden rotate-45  h-[27vw] w-[27vw] border-custom-border border">
                <img
                  className="sqimg opacity-0 w-full absolute -bottom-[100%] -right-[100%] h-full"
                  src="../src/assets/dummy1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HOMEpage;
