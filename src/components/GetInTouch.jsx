import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <div className="md:hidden ">
        {" "}
        <div className="px-3 py-32">
          <div className="text-[18px] leading-[21.6px] font-[500] text-h1-color underline pb-24">
            +38 032 297 50 20
          </div>
          <div className="float-right text-[19px] leading-[21.6px] font-[400] text-h1-color uppercase pb-24">
            8 Lystopadovoho <br /> Chynu,Lviv
          </div>
        </div>
        <div className="px-3 relative ">
          <h1 className="text-8xl text-h1-color uppercase get inline-block ">
            Get in
          </h1>
          <h1 className="text-8xl text-secondary-color uppercase float-right">
            touch
          </h1>
          <div className="absolute bottom-[-180px] right-5 -z-10">
            <img src="images/touch-pic-mob.png" alt="/" />
          </div>
        </div>
        <div className="border-b-2 p-40 border-slate-400 m-6"></div>
        <div className="text-[14px] font-[400] leading-[24px] text-center text-slate-500 pb-10">
          ©2021 All rights reserved. BankHotel
        </div>
      </div>
      {/* tablet get in touch */}
      <div className="hidden md:block lg:hidden">
        <div>
          {" "}
          <div className="px-3 py-32">
            <div className="text-[18px] leading-[21.6px] font-[500] text-h1-color underline pb-24">
              +38 032 297 50 20
            </div>
            <div className="float-right text-[19px] leading-[21.6px] font-[400] text-h1-color uppercase pb-24">
              8 Lystopadovoho <br /> Chynu,Lviv
            </div>
          </div>
          <div className="px-3 relative ">
            <h1 className="text-[12vw] text-h1-color uppercase get inline-block ">
              Get in
            </h1>
            <h1 className="text-[12vw] text-secondary-color uppercase float-right">
              touch
            </h1>
            <div className="absolute bottom-[-50px] right-5 -z-10">
              <img src="images/touch-pic-mob.png" alt="/" />
            </div>
          </div>
          <div className="pt-[210px]">
            <p className="font-[400] px-3 uppercase text-[18px] leading-[21.6px] text-h1-color py-6">
              Find a room
            </p>
            <div className="flex px-3">
              <div className="flex justify-between text-primary-color text-[14px] font-[500] leading-[20px] p-6 h-[60px] w-[180px] text-center border border-r-0 border-primary-color">
                CHECK-IN
                <img
                  src="/images/Vector 4.png"
                  alt="/"
                  className="w-[10px] h-[10px]"
                />
              </div>
              <div className="flex justify-between text-primary-color text-[14px] font-[500] leading-[20px] p-6 h-[60px] w-[180px] text-center border border-primary-color">
                CHECK-OUT
                <img
                  src="/images/Vector 4.png"
                  alt="/"
                  className="w-[10px] h-[10px]"
                />
              </div>
              <div className="bg-h1-color text-white-color text-[14px] font-[500] leading-[20px] p-6 h-[60px] w-[180px] text-center">
                BOOK ROOM
              </div>
            </div>
          </div>
          <div className="border-b p-5 border-slate-400 m-6"></div>
          <div className="flex items-start justify-between font-[400] text-slate-500 pb-10 px-6">
            <div className="flex flex-col gap-5">
              <p className="uppercase font-bold  text-h1-color">about us</p>
              <p className="text-[12px]">
                The five-star hotel in a beautiful <br /> European city with a
                modern <br />
                restaurant, conference-hall, and art-bar.
              </p>
              <p className="text-[12px] pt-8">
                ©2021 All rights reserved. BankHotel
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="uppercase font-bold text-h1-color">new</p>
              <p className="text-[12px]">
                Sign up to our newsletter not to miss <br /> exclusive offers
                and information about <br /> the upcoming events.
              </p>
              <div className="flex justify-between gap-28 items-center text-[14px] font-[500] leading-[20px] p-6 h-[50px] border border-slate-400">
                {" "}
                EMAIL
                <img src="images/arrow.png" alt="/" className="w-[50px]" />
              </div>
            </div>
            <div className="flex flex-col uppercase gap-5 pb-20">
              <p className="uppercase font-bold text-h1-color">socials</p>
              <p className="font-bold text-black text-[12px]">facebook</p>
              <p className="font-bold text-black text-[12px]">instagram</p>
              <p className="font-bold text-black text-[12px]">twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
