  import React from "react";

const Footer = () => {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 border-custom-border bg-[#130f0a] text-gray-300">
      <div className="grid gap-8 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <img
              src="TC_Logo.webp"
              alt="logo"
              className="h-13 w-14"
            />
            <span className="text-2xl font-bold tracking-wide text-[#f4cf8b]">
              TECHFEST 2025<br/>
             Y U G S E T U <br/>Bridging Innovations through time
            </span>
          </a>
          <div className="mt-3 lg:max-w-xl">
            <p className="text-sm">
          

"Yug Setu" honors the timeless legacy of India’s ancient wisdom and its profound impact on today’s technological advancements. From the groundbreaking theories of Kanad and Aryabhatta to the inspiration behind modern aerospace and space exploration, this theme bridges the past and future. It celebrates how the brilliance of ancient minds continues to drive today’s innovations, shaping a brighter tomorrow

            </p>
          </div>
        </div>

        {/* Popular Courses & Topics */}
<div>
        <span className="text-2xl font-bold tracking-wide text-[#f4cf8b]">Developers</span>
         
        <ol className="mt-8">
          <li><a href ="https://www.linkedin.com/in/somesh-goyal/" target="#">SOMESH GOYAL</a></li>
<li><a href = "https://www.linkedin.com/in/krishna-srivastava-a84b65299" target="#">KRISHNA SRIVASTAVA</a></li>
<li><a href = "https://www.linkedin.com/in/jyotirmya-sharma-aa3485210/" target="#">JYOTIRMYA SHARMA</a></li>
 <li><a href="https://www.linkedin.com/in/kartikayverma56" target="#">KARTIKAY VERMA</a></li>
   <li><a href ="https://www.linkedin.com/in/abhijeet-anand-8315aa212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="#">ABHIJEET ANAND</a></li>

 </ol>
  </div>
        {/* App Availability & Contact */}
        <div>
          <p className="text-2xl font-bold tracking-wide mb-5 text-[#f4cf8b] ">
           Contacts
          </p>  
          <div className="flex">
            <p className="mr-1">Kartikay:</p>
            <a
              href="mailto:admin@company.com"
              title="send email"
              className="hover:underline text-[#f4cf8b]"
            >
              kartikayverma51@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1">Abhijeet:</p>
            <a
              href="mailto:admin@company.com"
              title="send email"
              className="hover:underline text-[#f4cf8b]"
            >
abhijeetanand72@gmail.com
</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col-reverse justify-between pt-2 pb-3 border-t border-gray-700 lg:flex-row">
        <p className="text-sm">© Copyright 2025 Yugsetu. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm transition-colors duration-300 hover:text-[#f4cf8b]"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm transition-colors duration-300 hover:text-[#f4cf8b]"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
