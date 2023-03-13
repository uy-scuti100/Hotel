import React from "react";

const Facility = () => {
  return (
    // mobile facilities
    <div>
      <div className="pt-24 md:hidden overflow-x-hidden">
        <div className="relative">
          <h1 className="uppercase text-[15vw] text-h1-color font-[40] px-8 pb-4   ">
            our
          </h1>
          <h1 className="uppercase text-[15vw] text-h1-color font-[400] leading-[60px] px-8 pb-4   ">
            faci
          </h1>
          <h1 className="uppercase text-[15vw] text-h1-color font-[400] leading-[60px] px-8 pb-12 pseudo ">
            lities
          </h1>
          <div className="absolute uppercase top-0 right-0 text-[16px] font-[500] leading-[19.2px] text-h1-color pr-3">
            Art & Congress <br /> halls
          </div>
        </div>
        <div className="flex justify-center px-24">
          <img src="images/image-.png" alt="/" className="w-full block" />
        </div>
        <div className="py-12 px-3 ">
          <p className="float-right text-[14px] font-[500] text-h1-color leading-[19.36px]">
            Bank Hotel offers you a wide range of <br /> additional services and
            facilities. Visit <br /> our restaurant to try exclusive meals,{" "}
            <br /> book a confrence hall to organize a <br /> business meeting,
            or relax in the art-bar
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
              The Hotels exclusive infra-structure is complemented by the unique{" "}
              <br /> atmosphere of the Safe Restaurant. <br /> Author's menu,
              extensive wine card, <br /> and live music will set you up for the
              correct mood.
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
            <h1 className="absolute uppercase top-0 right-0 text-[30px] font-[500] text-white">
              03
            </h1>
          </div>
          <div className="pt-10 text-center text-white text-4xl capitalize">
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
          <div className="text-secondary-color absolute bottom-10 left-8 text-[18px] font-[400] leading-[21.6px]">
            All room <br /> decoration was <br /> made with <br /> ecological
            certified <br />
            and safe materials.
          </div>
        </div>
      </div>
      {/* tablet facility page */}
      <div className="hidden md:block lg:hidden pt-20 overflow-x-hidden">
        <div className="flex justify-between gap-10">
          <div className="px-3 self-center">
            <img src="images/tab-faci-img.png" alt="/" />
          </div>
          <div>
            <div className="relative">
              <h1 className="uppercase text-8xl text-h1-color font-[400] pb-4">
                our
              </h1>
              <h1 className="uppercase text-8xl text-h1-color font-[400] leading-[80px] pb-4   ">
                faci
              </h1>
              <h1 className="uppercase text-8xl text-h1-color font-[400] leading-[80px] pb-12 pseudo ml-32 ">
                lities
              </h1>

              <p className="text-[13px] font-[400] leading-[23px] text-h1-color ">
                Bank Hotel offers you a wide range of <br /> additional services
                and facilities. Visit our <br /> restaurant to try exclusive
                meals, book a <br /> conference hall to organize a business{" "}
                <br /> meeting, or relax in the art-bar.{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="italic uppercase text-[18px] font-[400] leading-[21.6px] text-h1-color">
              Art & Congress <br /> halls
            </div>
          </div>
        </div>
        <div className="flex px-3 py-20 gap-5 justify-center items-center">
          <div className="basis-1/3 self-start mt-20">
            <img
              src="images/med-right-arr-room.png"
              alt="/"
              className="w-[90px] rotate-90"
            />
          </div>
          <div className="basis-1/3 mx-8 self-start mt-20">
            <div className="flex  justify-between flex-col items-start">
              <h1 className="text-h1-color self- start text-[36px] leading-[43.85px] font-[400] pb-20">
                01
              </h1>
              <h1 className="text-h1-color text-[36px] leading-[43.85px] font-[400] pb-5">
                Ice <br /> Restaurant
              </h1>
              <p className="text-h1-color font-[400] text-[13px] leading-[23px] ">
                The hotel’s exclusive infrastructure is complemented by the
                unique atmosphere of the Safe Restaurant. Author’s menu,
                extensive wine card, and live music will set you for the correct
                mood.
              </p>
            </div>
          </div>
          <div className="basis-1/3 relative">
            <img src="images/tab-table.png" alt="/" className="object-cover" />
            <p className="uppercase pt-10">
              Art & congress <br /> hall
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 px-3">
          <div className="flex justify-between items-center">
            <img src="images/med-conf-pic.png" alt="/" />
            <h1 className="text-h1-color text-[36px] leading-[43.85px] font-[400]">
              02
            </h1>
            <h1 className="text-h1-color text-[36px] leading-[43.85px] font-[400]">
              {" "}
              Conference Hall
            </h1>
            <img src="images/med-arrow.png" alt="/" />
          </div>
          <div className="flex justify-between items-center">
            <img src="images/med-conf-pic-2.png" alt="/" />
            <h1 className="text-h1-color text-[36px] leading-[43.85px] font-[400]">
              03
            </h1>
            <h1 className="text-h1-color text-[36px] leading-[43.85px] font-[400]">
              Wine Bar "Reserve"
            </h1>
            <img src="images/med-arrow.png" alt="/" />
          </div>
        </div>
        <div className="mt-32 relative">
          <img src="images/med-best.png" alt="/" className="object-fit" />
          <div>
            <h1 className="text-[50px] leading-[60px] absolute top-8 left-5 text-secondary-color uppercase">
              Best <br /> Apartments
            </h1>
          </div>
          <div className="text-secondary-color absolute bottom-32 left-8 text-[18px] font-[400] leading-[21.6px]">
            All room <br /> decoration was <br /> made with <br /> ecological
            certified <br />
            and safe materials.
          </div>
          <div className="absolute bottom-5 left-0 right-0">
            <img src="images/med-tiny.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
