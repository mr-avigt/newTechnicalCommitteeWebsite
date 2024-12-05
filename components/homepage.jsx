import React from "react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
const Homepage = () => {
  const lenisRef = useRef(null);
  const box = useRef();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      let t = gsap.timeline({
        scrollTrigger: {
          trigger: ".outer",
          start: "top top",
          end: "150% top",
          pin: true,
          scrub: 1,
          markers: true,
        },
      });
      t.to(".inner", {
        scale: 3.5,
      });
    },
    { scope: box }
  );
  useLayoutEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 2.8, // Higher value for slower scroll speed
      lerp: 0.08, // Lower value decreases sensitivity (default is 0.1)
      smooth: true, // Enable smooth scrolling
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time); // Update Lenis on every animation frame
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Update ScrollTrigger to sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    // Smooth fade-in for the homewall
    gsap.to(".homewall", {
      opacity: 1,
      delay: 1,
      duration: 1.5, // Smooth transition
      ease: "power1.out", // Soft easing for opacity
    });

    // Animation for the fest name
    gsap.to(".festname", {
      top: "100px",
      duration: 1.5,
      delay: 1,
      ease: "power2.out", // Add easing for smooth movement
    });

    // Animation for the fest title
    gsap.to(".festtitle", {
      opacity: 1,
      top: "280px",
      duration: 2.5, // Longer duration for smoother animation
      delay: 1.5,
      ease: "expo.out", // Use exponential easing for a polished look
    });
  }, []); // Run once when the component mounts

  return (
    <>
      <div className="homewall h-full opacity-0 relative">
        <div className="festname absolute top-44 w-[55%] h-1/4 right-16 "></div>
        <div className="festtitle absolute top-[400px] w-[55%] right-16 text-center flex flex-col text-xl opacity-0 border-red-500">
          COMING TO PC EARLY 2025
        </div>
        {/* <ul className="buttons">
          <li className="button1">
          </li>
          <li className="button2">

          </li>
        </ul> */}
      </div>
      <div ref={box} className="container border-4  border-red-500">
        <div className="outer h-[100vh] border-2 border-green-400 flex w-full bg-black relative items-center justify-center">
          <div className="inner absolute  w-[25%] h-[23%] bg-blue-500 flex  border border-red-500">
            hello
          </div>
        </div>
        <div className="outer2  w-full h-[100vh] border-2 border-blue-500 flex  justify-center">
          <div className="inner2 w-40 h-10 bg-blue-500 flex my-full border border-red-500">
            hello
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
