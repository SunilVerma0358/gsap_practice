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
    const it = gsap;
    it.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        backgroundColor: "#09184F",
        boxShadow: "0px 4px 10px #09184F",
        borderRadius: "12px",
        ease: "power3.out",
        delay: 1,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 2.5,
        backgroundColor: "#101629",
        duration: 1,
        delay: 1,
        ease: "power3.out",
      }
    );

    it.fromTo(
      cardsRefTwo.current,
      {
        opacity: 0,
        y: 100,
        backgroundColor: "#09184F",
        boxShadow: "0px 4px 10px #09184F",
        borderRadius: "12px",
        duration: 1,
        ease: "power3.out",
        delay: 1.5,
      },
      {
        opacity: 1,
        y: -51,
        stagger: 2.5,
        backgroundColor: "#101629",
        duration: 0.7,
        ease: "power3.out",
        delay: 1.5,
      }
    );
    it.fromTo(
      ".boxLine",
      {
        maxWidth: 0,
      },
      { maxWidth: 900, duration: 12, ease: "power2.out" }
    );
    it.fromTo(
      ".boxLine2",
      {
        Height: 0,
        duration: 6,
      },
      { stagger: 2, Height: 500, duration: 7, ease: "power2.out" }
    );
    it.fromTo(
      ".circleBox",
      {
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power3.out",
      },
      {
        stagger: 1.3,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
    it.fromTo(
      ".circleBox2",
      {
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power3.out",
      },
      {
        stagger: 1.3,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
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
                className="max-w-[300px] sm:max-w-[250px] lg:max-w-[300px] ms-auto sm:mx-0"
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
          <div className="max-md:boxLine2 h-[924px] sm:h-[500px] w-[1px] bg-white bg-opacity-[16%] absolute top-[5%] sm:top-[20%] left-[2%] sm:left-[50%] sm:translate-x-1/2 md:hidden">
            <div className="-translate-y-0 flex gap-28 sm:gap-10 items-center flex-col">
              <div className="circleBox2 relative top-[-60%]">
                <span className=" number_series">1</span>
                <span className="absolute z-[-1] bottom-[-10%] max-sm:right-[-45%] sm:bottom-[-6%] sm:left-[-20%] md:bottom-[77%] md:left-[45%] max-md:-rotate-90 max-sm:rotate-90">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="circleBox2 relative top-[-50%]">
                <span className=" number_series">2</span>
                <span className="absolute top-[10%] md:top-[75%] -right-[45%] max-md:-rotate-90 md:left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
              <div className="circleBox2 relative top-[-50%]">
                <span className="number_series">3</span>
                <span className="absolute z-[-1] bottom-[-10%] max-sm:right-[-45%] sm:bottom-[-6%] sm:left-[-20%] md:bottom-[77%] md:left-[45%] max-md:-rotate-90 max-sm:rotate-90">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="circleBox2 relative top-[-50%]">
                <span className="number_series">4</span>
                <span className="absolute top-[10%] md:top-[75%] -right-[45%] max-md:-rotate-90 md:left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
              <div className="circleBox2 relative top-[-50%]">
                <span className="number_series">5</span>{" "}
                <span className="absolute z-[-1] bottom-[-10%] max-sm:right-[-45%] sm:bottom-[-6%] sm:left-[-20%] md:bottom-[77%] md:left-[45%] max-md:-rotate-90 max-sm:rotate-90">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="circleBox2 relative top-[-50%] z-[1]">
                <span className="number_series">6</span>
                <span className="absolute top-[10%] md:top-[75%] -right-[45%] max-md:-rotate-90 md:left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="boxLine h-[1px] bg-white bg-opacity-[16%] md:translate-y-1 max-md:hidden"></div>
            <div className="max-md:hidden flex flex-col md:flex-row items-center md:justify-between -translate-y-0 md:-translate-y-[45%] sm:items-center max-w-[900px]">
              <div className="circleBox relative top-[-60%]">
                <span className="number_series">1</span>
                <span className="absolute z-[-1] bottom-[77%] left-[45%]">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="circleBox relative top-[-50%]">
                <span className=" number_series">2</span>
                <span className="absolute z-[-1] top-[75%] left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
              <div className="circleBox relative top-[-50%]">
                <span className="number_series">3</span>
                <span className="absolute z-[-1] bottom-[77%] left-[45%]">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="circleBox relative top-[-50%]">
                <span className="number_series">4</span>
                <span className="absolute z-[-1] top-[75%] left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
              <div className="circleBox relative top-[-50%]">
                <span className="number_series">5</span>{" "}
                <span className="absolute z-[-1] bottom-[77%] left-[45%]">
                  <BlueLineIcon />
                </span>
              </div>
              <div className="circleBox relative top-[-50%] z-[1]">
                <span className="number_series">6</span>
                <span className="absolute md:top-[75%] -right-[45%] max-md:-rotate-90 md:left-[45%]">
                  <BlueLineTopIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-w-[996px] md:ms-auto gap-4 lg:gap-8 xl:gap-12 md:pt-4 max-md:translate-y-[51px]">
            {ourWorktwo.map((obj, index) => (
              <div
                key={index}
                className="max-w-[300px] sm:max-w-[250px] lg:max-w-[300px] ms-auto sm:ms-auto sm:mr-0"
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
