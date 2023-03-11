import React, { useState } from "react";
const navbar = () => {
  const [nav, setNav] = useState(false);
  const [btn, setBtn] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const imageUrl = btn ? "/images/Group 148.png" : "/images/icon-svg.svg";
  const toggleNav = () => {
    setNav(!nav);
    setBtn(!btn);
  };

  const toggleActive = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <div className="bg-primary-color flex justify-between items-center text-white px-3 text-sm pt-6 pb-2 w-full ">
        <div className="text-[16px] font-[500]">BankHotel</div>
        <div className="hidden lg:block">
          <ul className="flex justify-between items-center gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li>
              <a href="#">Restaurant</a>
            </li>
            <li>
              <a href="#">Conference Hall</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">+38 032 297 50 20</div>
        <div className="lg:hidden h-[5px] ">
          <img
            src={imageUrl}
            onClick={toggleNav}
            className={btn ? "close-button" : ""}
          />
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={
          nav
            ? "bg-primary-color text-white-color h-screen pt-10 transition-all duration-500 ease-in-out  lg:hidden"
            : "bg-primary-color text-white-color h-0 opacity-0"
        }
      >
        <ul className="flex flex-col justify-between  space-y-6 text-[30px] font-[400] leading-[30px] pb-6 px-4 py-9 uppercase ">
          <li>
            <a
              href="#"
              className={activeLink === 0 ? "active" : ""}
              onClick={() => toggleActive(0)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 1 ? "active" : ""}
              onClick={() => toggleActive(1)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 2 ? "active" : ""}
              onClick={() => toggleActive(2)}
            >
              Rooms
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 3 ? "active" : ""}
              onClick={() => toggleActive(3)}
            >
              Restaurant
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 4 ? "active" : ""}
              onClick={() => toggleActive(4)}
            >
              Conference Hall
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 5 ? "active" : ""}
              onClick={() => toggleActive(5)}
            >
              Contacts
            </a>
          </li>
        </ul>
        <div className="text-center underline mt-10 mb5  text-[12px] font-[500] leading-[20px] text-white-color">
          +38 032 297 50 20
        </div>
        <div className="text-center mb-5 text-[12px] font-[500] tracking-widest text-white-color uppercase pt-5">
          8 Lystopadovoho Chynu,Lviv
        </div>
        <div className="flex justify-center items-center space-x-5">
          <p className="text-[12px] font-[500] leading-[20px] text-white-color uppercase after:content-[''] after:w-full after:bg-white after:opacity-[12%] after:h-[1px] after:block">
            Facebook
          </p>
          <p className="text-[12px] font-[500] leading-[20px] text-white-color uppercase after:content-[''] after:w-full after:bg-white after:opacity-[12%] after:h-[1px] after:block">
            Instagram
          </p>
          <p className="text-[12px] font-[500] leading-[20px] text-white-color uppercase after:content-[''] after:w-full after:bg-white after:opacity-[12%] after:h-[1px] after:block">
            Twitter
          </p>
        </div>
      </div>
    </div>
  );
};
export default navbar;
