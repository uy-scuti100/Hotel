import React from "react";

const OurGallery = () => {
  return (
    <div>
      <div className="bg-primary-color mx-3 md:hidden">
        <div className="flex justify-center pt-20">
          <img src="images/labella.png" alt="/" />
        </div>
        <div className="flex flex-col justify-center items-center pt-5 text-secondary-color">
          <h1 className="uppercase text-5xl">our</h1>
          <h1 className="uppercase text-5xl">gallery</h1>
        </div>
        <div className="text-[13px] leading-[23px] text-center font-[400] text-white-color px-3">
          Explore our spacious rooms with the gorgeous view to the historical
          part of the city. Each room has an exclusive interior design decorated
          with modern art pieces that will make your stay unforgettable.
        </div>
        <div className="pt-2 relative">
          <div className="p-2  relative bg-primary-color top-0 right-0 left-0 pt-20 h-[600px]">
            <img
              src="images/ab-1.png"
              alt="/"
              className="absolute left-[10px] top-[150px]"
            />
            <img
              src="images/ab-2.png"
              alt="/"
              className="absolute right-[10px] top-[50px] z-10"
            />
            <img
              src="images/ab-3.png"
              alt="/"
              className="absolute right-0 top-[100px] opacity-20"
            />
            <img
              src="images/ab-4.png"
              alt="/"
              className="absolute top-[250px] translate-x-[45%]"
            />
            <img
              src="images/ab-5.png"
              alt="/"
              className="absolute left-0 top-[400px]"
            />
          </div>

          <div className="flex items-center justify-between gap-4 pb-20 px-3">
            <div className="mobile-fill-btn w-[70px] h-[50px] "></div>
            <span className="italic font-[400] text-[16px] leading-[19.2px] text-white-color capitalize ">
              It is our pleasure to meet your most unrealistic expectations.
            </span>
          </div>
        </div>
      </div>
      {/* tablet our gallery */}
      <div className="hidden md:block lg:hidden">
        <div className="bg-primary-color pb-[100px]">
          <div className=" flex basis-1/2 gap-x-52 p-3">
            <p className="uppercase text-white-color font-[400]">
              Art & congress <br /> Hall
            </p>
            <img
              src="images/mobile-label.png"
              alt="/"
              className="-rotate-[45deg]"
            />
          </div>
          <div>
            <h1 className="uppercase text-7xl text-secondary-color text-center pt-10">
              our gallery
            </h1>
            <p className="text-white-color text-[13px] font-[400] leading-[23px] text-center">
              Explore our spacious rooms with the gorgeous view to the <br />
              historical part of the city. Each room has an exclusive <br />{" "}
              interior design decorated with modern art pieces that will <br />{" "}
              make your stay unforgettable.
            </p>
          </div>
        </div>

        <div className="bg-primary-color relative">
          <div>
            <img
              src="images/med-gala-1.png "
              alt="/"
              className="absolute left-0 -top-8"
            />
            <img
              src="images/med-gala-2.png "
              alt="/"
              className="absolute left-1/4 top-20 "
            />
            <img
              src="images/med-gala-3.png "
              alt="/"
              className="absolute -right-6 -top-[40px] "
            />
            <img
              src="images/med-gala-4.png "
              alt="/"
              className="absolute right-3 top-[400px]"
            />
            <img
              src="images/med-gala-5.png "
              alt="/"
              className="absolute left-2 top-[300px]"
            />
          </div>
          <div className="text-[5vw] font-[400] pt-[530px] leading-[80px] pb-20 -ml-[20px] flex-nowrap overflow-x-hidden text-[#5E5E5E]">
            <h1>
              Bank Hotel
              <span className="text-white-color "> Bank__hotel </span>
              Bank hotel Bank hotel Bank Hotel Bank hotel Bank hotel Bank bank
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
