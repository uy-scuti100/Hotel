import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <div className="px-3 py-32 ">
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
  );
};

export default GetInTouch;
