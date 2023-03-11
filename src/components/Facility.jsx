import React from "react";

const Facility = () => {
  return (
    <div className="pt-24">
      <div className="relative">
        <h1 className="uppercase text-7xl text-h1-color font-[40] px-8 pb-4   ">
          our
        </h1>
        <h1 className="uppercase text-7xl text-h1-color font-[400] leading-[60px] px-8 pb-4   ">
          faci
        </h1>
        <h1 className="uppercase text-7xl text-h1-color font-[400] leading-[60px] px-8 pb-12 pseudo ">
          lities
        </h1>
        <div className="absolute uppercase top-0 right-0 text-[16px] font-[500] leading-[19.2px] text-h1-color pr-3">
          Art & Congress <br /> halls
        </div>
      </div>
      <div className="flex justify-center px-24">
        <img src="images/image-.png" alt="/" className="w-full block" />
      </div>
      <div className="py-12 ">
        <p className="float-right text-[14px] font-[500] text-h1-color leading-[19.36px]">
          Bank Hotel offers you a wide range of <br /> additional services and
          facilities. Visit <br /> our restaurant to try exclusive meals, <br />{" "}
          book a confrence hall to organize a <br /> business meeting, or relax
          in the art-bar
        </p>
      </div>
      <div className="mx-auto px-3">
        <img
          src="images/facility-space-mobile.png"
          alt=""
          className="w-full py-12"
        />
      </div>
      <div className="flex">
        <div className="px-3 basis-1/3">
          <div>
            <h1 className="text-[#1b3b36] text-3xl font-[300] pb-10">01</h1>
          </div>
          <div className="flex gap-12">
            <img
              src="images/mobile-button - default.png"
              alt="/"
              className="w-[50px]"
            />
          </div>
        </div>

        <div className="basis-2/3">
          <h1 className="text-[40px] font-[500] text-h1-color">
            Ice <br /> Restaurant
          </h1>
          <div className="text-[14px] font-[500] text-h1-color">
            The Hotels exclusive infra-structure is <br /> complemented by the
            unique <br /> atmosphere of the Safe Restaurant. <br /> Author's
            menu, extensive wine card, <br /> and live music will set you up for
            the correct mood.
          </div>
        </div>
      </div>
      <div className="relative my-20 mx-3">
        <div className="flex justify-center items-center">
          <img src="images/confr.png" alt="/" />
        </div>
        <div>
          <h1 className="absolute uppercase top-0 right-0 text-[30px] font-[500] text-h1-color">
            02
          </h1>
        </div>
        <div className="pt-10 text-center text-h1-color text-4xl capitalize">
          <h1>conference hall</h1>
        </div>
      </div>
      <div className="relative py-20 mx-3 bg-primary-color pt-20">
        <div className="flex justify-center items-center">
          <img src="images/winebar.png" alt="/" />
        </div>
        <div>
          <h1 className="absolute uppercase top-0 right-0 text-[30px] font-[500] text-h1-color">
            03
          </h1>
        </div>
        <div className="pt-10 text-center text-h1-color text-4xl capitalize">
          <h1>wine bar "reserve" </h1>
        </div>
      </div>
      <div className="relative mx-auto px-3">
        <img src="images/space-mob-large.png" alt="/" className="w-full" />
        <div>
          <h1 className="text-[50px] leading-[60px] absolute top-16 left-5 text-secondary-color uppercase">
            Best Apartments
          </h1>
        </div>
        <div className="float-right text-secondary-color absolute bottom-10 right-16 text-[18px] font-[400] leading-[21.6px]">
          All room <br /> decoration was <br /> made with <br /> ecological
          certified <br />
          and safe materials.
        </div>
      </div>
    </div>
  );
};

export default Facility;
