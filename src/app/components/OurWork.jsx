"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ourWork, ourWorktwo } from "./common/Helper";
import { BlueLineIcon, BlueLineTopIcon } from "./common/Icon";

const OurWork = () => {
  const cardsRef = useRef([]);
  const cardsRefTwo = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    const removeShadow = (card) => {
      gsap.to(card, {
        backgroundColor: "#101629",
        boxShadow: "0px 0px 0px #09184F",
        duration: 0.3,
      });
    };
    cardsRef.current.forEach((card, index) => {
      tl.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          backgroundColor: "#101629",
          boxShadow: "0px 4px 10px #09184F",
          borderRadius: "12px",
        },
        {
          opacity: 1,
          y: 0,
          backgroundColor: "#09184F",
          boxShadow: "0px 4px 10px #09184F",
          borderRadius: "12px",
          ease: "power2.out",
          onComplete: () => removeShadow(card),
        },
        index * 0.3
      );
    });

    cardsRefTwo.current.forEach((card, index) => {
      tl.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          backgroundColor: "#101629",
          boxShadow: "0px 4px 10px #09184F",
          borderRadius: "12px",
        },
        {
          opacity: 1,
          y: 0,
          backgroundColor: "#09184F",
          boxShadow: "0px 4px 10px #09184F",
          borderRadius: "12px",
          ease: "power2.out",
          onComplete: () => removeShadow(card),
        },
        (ourWork.length + index) * 0.3
      );
    });
  }, []);

  return (
    <div className="bg-blue-section py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-x-clip">
      <div className="max-w-[1164px] px-3 mx-auto">
        <h2 className="font-Inter font-semibold text-white text-3xl md:text-4xl xl:text-5xl !leading-[116%] text-center">
          Our Work Process
        </h2>
        <div className="sm:flex sm:flex-row md:flex-col gap-4 md:gap-[51px] pt-7 sm:pt-16 max-md:justify-between max-md:items-center max-sm:relative">
          <div className="flex flex-col md:flex-row max-w-[996px] gap-4 lg:gap-8 xl:gap-12 pb-4">
            {ourWork.map((obj, index) => (
              <div
                key={index}
                className="max-w-[300px] sm:max-w-[250px] lg:max-w-[300px] mx-auto sm:mx-0"
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div className="bg-transparent rounded-xl p-6 h-full relative">
                  <span>
                    <Image src={obj.src} width={40} height={40} alt="mask" />
                  </span>
                  <p className="font-Inter font-medium text-base md:text-lg lg:text-xl text-white leading-[130%] mt-6 max-w-[252px]">
                    {obj.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[924px] sm:h-[500px] w-[1px] bg-white bg-opacity-[16%] absolute top-[5%] sm:top-[20%] left-[2%] sm:left-[50%] sm:translate-x-1/2 md:hidden">
            <div className="-translate-y-0 flex gap-28 sm:gap-10 items-center flex-col">
              <div className="relative top-[-60%]">
                <span className="number_series">1</span>
                <span className="absolute z-[-1] bottom-[-10%] max-sm:right-[-45%] sm:bottom-[-6%] sm:left-[-20%] md:bottom-[77%] md:left-[45%] max-md:-rotate-90 max-sm:rotate-90">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="relative top-[-50%]">
                <span className="number_series">2</span>
                <span className="absolute top-[10%] md:top-[75%] -right-[45%] max-md:-rotate-90 md:left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
              <div className="relative top-[-50%]">
                <span className="number_series">3</span>
                <span className="absolute z-[-1] bottom-[-10%] max-sm:right-[-45%] sm:bottom-[-6%] sm:left-[-20%] md:bottom-[77%] md:left-[45%] max-md:-rotate-90 max-sm:rotate-90">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="relative top-[-50%]">
                <span className="number_series">4</span>
                <span className="absolute top-[10%] md:top-[75%] -right-[45%] max-md:-rotate-90 md:left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
              <div className="relative top-[-50%]">
                <span className="number_series">5</span>{" "}
                <span className="absolute z-[-1] bottom-[-10%] max-sm:right-[-45%] sm:bottom-[-6%] sm:left-[-20%] md:bottom-[77%] md:left-[45%] max-md:-rotate-90 max-sm:rotate-90">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="relative top-[-50%] z-[1]">
                <span className="number_series">6</span>
                <span className="absolute top-[10%] md:top-[75%] -right-[45%] max-md:-rotate-90 md:left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-[900px] h-[1px] bg-white bg-opacity-[16%] md:translate-y-0 max-md:hidden">
            <div className="flex flex-col md:flex-row items-center md:justify-between -translate-y-0 md:-translate-y-[45%] sm:items-center">
              <div className="relative top-[-60%]">
                <span className="number_series">1</span>
                <span className="absolute z-[-1] bottom-[77%] left-[45%]">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="relative top-[-50%]">
                <span className="number_series">2</span>
                <span className="absolute z-[-1] top-[75%] left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
              <div className="relative top-[-50%]">
                <span className="number_series">3</span>
                <span className="absolute z-[-1] bottom-[77%] left-[45%]">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="relative top-[-50%]">
                <span className="number_series">4</span>
                <span className="absolute z-[-1] top-[75%] left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
              <div className="relative top-[-50%]">
                <span className="number_series">5</span>{" "}
                <span className="absolute z-[-1] bottom-[77%] left-[45%]">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="relative top-[-50%] z-[1]">
                <span className="number_series">6</span>
                <span className="absolute md:top-[75%] -right-[45%] max-md:-rotate-90 md:left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-w-[996px] md:ms-auto gap-4 lg:gap-8 xl:gap-12 sm:pt-4 ">
            {ourWorktwo.map((obj, index) => (
              <div
                key={index}
                className="max-w-[300px] sm:max-w-[250px] lg:max-w-[300px] mx-auto sm:ms-auto sm:mr-0"
                ref={(el) => (cardsRefTwo.current[index] = el)}
              >
                <div className="bg-transparent rounded-xl p-6 h-full relative">
                  <span>
                    <Image src={obj.src} width={40} height={40} alt="mask" />
                  </span>
                  <p className="font-Inter font-medium text-base md:text-lg lg:text-xl text-white leading-[130%] mt-6">
                    {obj.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
