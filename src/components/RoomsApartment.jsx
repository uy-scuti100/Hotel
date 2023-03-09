import React from "react";

const RoomsApartment = () => {
  return (
    <div className="bg-primary-color">
      <div className="w-[50%] mr-auto md:hidden ">
        <h1 className="text-5xl text-secondary-color pt-24 font-[400] text-[60px] px-3">
          ABOUT
        </h1>
        <h1 className="text-5xl text-secondary-color font-[400] text-[60px] text-right">
          US
        </h1>
      </div>
      <div className="px-3 mx-auto ">
        <img
          src="images/mobile-about.png"
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div className="pt-10">
        <h1 className="text-[30px] text-white-color px-3 py-6 leading-[30px] font-[400] ">
          High Quality
        </h1>
      </div>
      <div className="flex pb-20">
        <p className="font-[400] text-[13px] px-3 text-white-color leading-[23px]">
          The hotel was reopened to visitors in 2016. The <br /> building was
          renovated and modernized to meet <br /> the expectations of the most
          demanding guests. <br />
          We offer luxurious rooms, numerous facilities, and <br /> exceptional
          service. The hotel is located near the <br /> city center, which makes
          it the best option for <br /> those who travel for business and travel
          purposes.
        </p>
        <img
          src="images/mobile-label.png"
          alt="/"
          className="w-[80px] h-[80px] translate"
        />
      </div>
      <div className="bg-white-color pt-20 px-3">
        <div className="font-[500] text-[#1B3B36] text-[18px] pb-20 text-right leading-[19.2px] ">
          70rooms
        </div>
        <div className="text-[80px] pb-20 text-[#1B3B36] font-[500] leading-[60px]">
          <h1>
            Rooms & <br /> Apartments
          </h1>
        </div>
        <div className="font-[500] text-[#1B3B36] pb-20 text-[15px] leading-[16px] ">
          All room decoration <br /> was made with <br /> ecological certified{" "}
          <br /> and safe materials.
        </div>
        <div className="mx-auto pb-20 relative">
          <img
            src="images/mobile-book-a-room-img.png"
            alt=""
            className="w-full object-cover"
          />
          <a
            href="#"
            className="mobile-fill-btn absolute  bottom-32 right-12 cursor-pointer"
          >
            Book a room
          </a>
        </div>
        <div className="">
          <p className="text-right leading text-[16px] leading-[19.2px] font-[500] text-[#1b3b36] pb-10">
            {" "}
            01 &nbsp; &nbsp;
            <span className="text-[#68666666]">/ &nbsp; &nbsp;04</span>
          </p>
        </div>
        <div>
          <h1 className="text-[#1b3b36] text-3xl font-[400] pb-10">
            Superior Twin
          </h1>
        </div>
        <div className="flex gap-12 pb-[70px] border-b-2 border-primary">
          <div>
            <img
              src="images/mobile-button - default.png"
              alt="/"
              className="w-[500px]"
            />
          </div>

          <div className="text-[15px] font-[500] leading-6 text-left text-[#1B3B36]">
            The Superior twin is perfect for those who plan to stay long. The
            spacious and bright room is equipped with deluxe Italian furniture
            and has a beautiful view to the historical part of the city. Stylish
            interior design and comfortable beds will make your stay cozy and
            pleasant.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsApartment;
