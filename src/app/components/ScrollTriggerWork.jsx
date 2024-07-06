"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { roadmapData } from "./common/Helper";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerWork = () => {
  const sectionsRef = useRef([]);
  const linesRef = useRef([]);

  useEffect(() => {
    roadmapData.forEach((_, index) => {
      gsap.fromTo(
        sectionsRef.current[index],
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionsRef.current[index],
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            markers: true,
            onEnter: () => {
              gsap.to(linesRef.current[index], {
                height: "100%",
                backgroundColor: "rgb(29 78 216 )",
                ease: "none",
              });
            },
            onLeaveBack: () => {
              gsap.to(linesRef.current[index], {
                height: "0%",
                backgroundColor: "rgb(29 78 216 )",
                ease: "none",
              });
            },
          },
          duration: 1,
          delay: index * 0.3,
        }
      );
    });

    gsap.utils.toArray(".line-segment").forEach((line, index) => {
      if (index > 0) {
        gsap.fromTo(
          line,
          { height: 0 },
          {
            height: "100%",
            scrollTrigger: {
              trigger: sectionsRef.current[index],
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
              markers: true,
              onEnter: () => {
                gsap.to(line, {
                  height: "100%",
                  backgroundColor: "rgb(29 78 216)",
                  ease: "none",
                });
              },
              onLeaveBack: () => {
                gsap.to(line, {
                  height: "0%",
                  backgroundColor: "rgb(29 78 216 )",
                  ease: "none",
                });
              },
            },
            ease: "none",
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-gray-900">
      <div className="h-screen"></div>
      <div className="bg-gray-900 text-white py-12 sm:py-16 lg:py-24 px-4 lg:px-10">
        <div className="container max-w-[1164px] px-3 mx-auto pb-32">
          <h1 className="text-3xl font-bold text-center mb-10">
            FlipVault Roadmap
          </h1>
          <div className="relative">
            <div className="pt-10 md:pt-12">
              {roadmapData.map((obj, index) => (
                <div
                  key={obj.id}
                  className={`flex ${
                    index % 2 === 0
                      ? " justify-end md:justify-start"
                      : "justify-end"
                  } relative`}
                  ref={(el) => (sectionsRef.current[index] = el)}
                >
                  <div
                    className={`bg-gray-800 p-6 rounded-lg shadow-md w-full sm:max-w-md md:max-w-[300px] lg:max-w-[350px] xl:max-w-md ${
                      index % 2 === 0
                        ? "max-[500px]:ml-12 ml-20 md:ml-5 "
                        : "max-[500px]:ml-12 ml-20 md:mr-5"
                    }`}
                  >
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      {obj.title}
                    </h3>
                    <p className="mt-4 text-sm lg:text-base">
                      {obj.description}
                    </p>
                  </div>
                  <div className="circleBox2 absolute top-0 left-[1%] md:left-1/2 z-10 -translate-x-1/2 bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    {obj.id}
                  </div>
                  <div
                    ref={(el) => (linesRef.current[index] = el)}
                    className={`boxLine w-0.5 h-0 bg-blue-700 absolute left-[1%] md:left-1/2 md:-translate-x-1/2 z-[1] ${
                      index === roadmapData.length - 1 ? "" : "line-segment"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default ScrollTriggerWork;
