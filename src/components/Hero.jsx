import React from "react";

const hero = () => {
  return (
    // mobile screen
    <div>
      <div className="bg-primary-color md:hidden">
        <h1 className="text-[80px] text-center text-white-color pt-5 px-1 mx-auto">
          Bank<span className="text-secondary-color">Hotel</span>
        </h1>
        <p className="uppercase text-secondary-color text-[12px] leading-[12.4px] text-center font-[400] after:content-[''] after:w-[50%] after:bg-white after:opacity-[12%] after:h-[1px] after:block after:mx-auto after:mt-7">
          rooms // restaurant // congress hall // wine bar
        </p>
        <div className="text-white-color text-center font-[400] text-[14px]leading-[23px] pt-6">
          The luxurious hotel in the most beautiful <br /> European city with an
          exclusive restaurant,
          <br /> conference-hall, and art-bar.
        </div>
        <div className="relative">
          <img
            src="images/spacer.png"
            alt="/"
            className="h-[425px] object-cover mx-auto bg-center bg-no-repeat w-full pt-7"
          />
          <a
            href="#"
            className="mobile-fill-btn absolute  bottom-6 right-12 cursor-pointer"
          >
            Book a room
          </a>
        </div>
        <div className="uppercase font-[400] text-[12px] leading-[14.4px] italic px-3 text-white-color">
          Art & congress <br /> hall
        </div>
      </div>

      {/* tablet */}
      <div className="hidden md:block bg-primary-color lg:hidden">
        <div className="grid grid-cols-4 justify-between items-center  px-4">
          <div className="col-span-2">
            <h1 className="text-[90px] text-white-color pt-5">
              Bank<span className="text-secondary-color">Hotel</span>
            </h1>
          </div>
          <div className="col-span-1 justify-center flex items-center">
            <img
              src="/images/button - default.png"
              className="w-[50px] cursor-pointer"
            />
          </div>
          <div className="font-400 text-[12px] leading-[23px] text-white-color col-span-1 ">
            The luxurious hotel in the most <br /> beautiful European city with
            an <br />
            exclusive restaurant, conference- <br /> hall, and art-bar.
          </div>
        </div>
        <div>
          <p className="uppercase text-secondary-color text-[14px] leading-[14.4px] font-[400] px-3">
            rooms // restaurant // congress hall // wine bar
          </p>
        </div>

        {/* hero part */}
        <div>
          <div className="relative">
            <div>
              <img
                src="images/medium-hero.png"
                alt="/"
                className="h-[425px] object-cover mx-auto bg-center bg-no-repeat w-full pt-7 px-3"
              />
            </div>

            <div className="contact cursor-pointer">
              <div className="flex justify-between bg-dark-btn text-white-color text-[14px] font-[500] leading-[20px] p-6 h-[60px] w-[180px] text-center">
                CHECK-IN
                <img
                  src="/images/Vector 4.png"
                  alt="/"
                  className="w-[10px] h-[10px]"
                />
              </div>
              <div className="flex justify-between bg-dark-btn text-white-color text-[14px] font-[500] leading-[20px] p-6 h-[60px] w-[180px] text-center">
                CHECK-OUT
                <img
                  src="/images/Vector 4.png"
                  alt="/"
                  className="w-[10px] h-[10px]"
                />
              </div>
              <div className="bg-secondary-color text-black text-[14px] font-[500] leading-[20px] p-6 h-[60px] w-[180px] text-center">
                BOOK ROOM
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-3 uppercase text-white-color font-[400] text-[14px] leading-5">
          <div className="gap-3">
            <p className="text-secondary-color">+38 032 297 50 20</p>
            <p>8 Lystopadovoho Chynu,Lviv</p>
          </div>
          <div>
            Art & Congress <br /> hall
          </div>
        </div>
      </div>

      {/* laptop */}
      <div className="hidden lg:block  bg-primary-color ">
        <div className="grid grid-cols-4 justify-between items-center  px-4">
          <div className="col-span-2">
            <h1 className="text-[90px] text-white-color pt-5">
              Bank<span className="text-secondary-color">Hotel</span>
            </h1>
          </div>
          <div className="font-400 text-[12px] text-white-color col-span-1 gap-1">
            <div className="rounded-xl border border-slate-600 p-2 w-[150px] ">
              <img
                src="images/small-star.png"
                alt=""
                className="inline-block"
              />
              <div className="inline-block text-white-color font-[500] text-[15px]">
                {" "}
                Since 1973
              </div>
            </div>
          </div>
          <div className="col-span-1 justify-center flex items-center">
            <img
              src="/images/button - default.png"
              className="w-[50px] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center space-x-40 flex-start">
          <div>
            <p className="uppercase text-secondary-color text-[14px] leading-[14.4px] font-[400] px-3">
              rooms // restaurant // congress hall // wine bar
            </p>
          </div>
          <div className="font-400 text-[12px] leading-[23px] text-white-color">
            The luxurious hotel in the most beautiful <br /> European city with
            an exclusive restaurant,
            <br /> conference-hall, and art-bar.
          </div>
        </div>
        {/* hero part */}
        <div className="relative">
          <div>
            <img
              src="images/large-hero.png"
              alt="/"
              className="h-[425px] object-cover mx-auto bg-center bg-no-repeat w-full mt-10 px-3"
            />
          </div>

          <div className="contact-2 cursor-pointer">
            <div className="flex justify-between bg-dark-btn text-white-color text-[14px] font-[500] leading-[20px] p-6 h-[60px] w-[180px] text-center">
              CHECK-IN
              <img
                src="/images/Vector 4.png"
                alt="/"
                className="w-[10px] h-[10px]"
              />
            </div>
            <div className="flex justify-between bg-dark-btn text-white-color text-[14px] font-[500] leading-[20px] p-6 h-[60px] w-[180px] text-center">
              CHECK-OUT
              <img
                src="/images/Vector 4.png"
                alt="/"
                className="w-[10px] h-[10px]"
              />
            </div>
            <div className="bg-secondary-color text-black text-[14px] font-[500] leading-[20px] p-6 h-[60px] w-[180px] text-center">
              BOOK ROOM
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-3 uppercase text-white-color font-[400] text-[14px] leading-5">
          <div className="gap-3">
            <p className="text-secondary-color">+38 032 297 50 20</p>
            <p>8 Lystopadovoho Chynu,Lviv</p>
          </div>
          <div>
            Art & Congress <br /> hall
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
