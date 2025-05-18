'use client';
import React from 'react';

function HeroSection() {
  const handleClick = () => {

    const phoneNumber = "+905345155355"; // Example: +1 555-555-5555
    const message = encodeURIComponent("Hello! Can you give me more information about universities.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect the user to WhatsApp
    window.open(url, "_blank");
  };
  return (
    <section className=" text-white py-2 bg-[#242D4B]">
          <div className="mx-auto flex  max-w-[90vw] flex-col items-center px-4 xl:container md:h-[85vh] md:flex-row md:px-10 ">
              <div className=''>
                    <img
                        src="grad.png" // replace with your image URL
                        alt="Hero"
                        className="flex-1 w-full h-auto"
                    />
              </div>
        <div className="flex-1  p-8 flex flex-col justify-center">
          <h1 className="mb-[10px] text-white text-[1.44rem] font-bold !leading-[1.35] text-primary text-opacity-80 md:text-3xl lg:mb-[25px] lg:text-[2.5rem] text-center">Yeldar Education</h1>
          <h2 className="mb-[11px] text-[1.44rem] font-bold text-secondary md:text-xl lg:mb-[25px] lg:text-[1.5rem]">Don't Miss The Chance, Register now in the best Turkish universities</h2>  
          {/* <h1 className="text-5xl font-semibold">Yeldar Education</h1>
            <h2 className="text-3xl font-semibold">Don't Miss The Chance, Register now in the best Turkish universities</h2> */}
            {/* <p className="mt-4 text-lg">
                Register now in the best Turkish universities
            </p> */}
            <div className="flex md:flex-row flex-col gap-4 mt-6">
                <button className="md:w-1/2 py-3 bg-white text-[#242D4B] font-bold rounded-full" onClick={handleClick}>
                Contact Us
                </button>
                <button className="md:w-1/2 py-3 bg-[#242D4B] text-white rounded-full font-bold border-white border">
                Our Services
                </button>
            </div>
            </div>
    </div>
  </section>
);
}

export default HeroSection;
