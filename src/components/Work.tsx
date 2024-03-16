"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface WorkProps {
  title: string;
  thumbnail: string;
  description: string;
  src: string;
}

const Work: React.FC<WorkProps> = ({ title, thumbnail, description, src }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleMouseMove = (e: any) => {
    const { width, top, height } = e.target.getBoundingClientRect();

    const mouseY = e.clientY - height;
    const movePercentY = mouseY / height;
    const maxMoveY = height;
    const titleP = e.target.querySelector("p.left-0");

    if (titleP) {
      titleP.style.transform = `translate(${movePercentY}px, ${
        movePercentY * maxMoveY * 0.5
      }px)`;
    }

    const newMouseY = e.clientY - top;
    const newMovePercentY = newMouseY / height;
    const descriptionP = e.target.querySelector("p.bottom-0");
    if (descriptionP) {
      const descriptionWidth = descriptionP.offsetWidth || 100;
      const maxX = width - descriptionWidth;
      descriptionP.style.transform = `translateX(${maxX * newMovePercentY}px)`;
    }
  };

  return (
    <>
      <div
        className="relative bg-light hover:bg-[#a3a3a3] border-2 hover:border-yellow-300 border-dark h-96 flex justify-center items-center cursor-pointer z-10 group"
        onMouseMove={handleMouseMove}
        onClick={() => setShowVideo(true)}
      >
        <div className="absolute w-full h-full bg-transparent z-30">
          <p className=" absolute pl-1 left-0 top-[50%] text-xl font-bold text-yellow-300 z-40 hidden group-hover:block">
            {title}
          </p>
          <p className="absolute left-0 bottom-0 text-sm font-semibold text-yellow-300 z-40 hidden group-hover:block">
            "{description}"
          </p>
        </div>
        <div className="relative aspect-square w-2/3 h-2/3 bg-black z-20">
          <Image
            alt="default"
            src={thumbnail}
            fill
            className="object-cover opacity-10 "
            style={{ zIndex: 5 }}
          />
        </div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-40">
          <div className=" bg-light">
            <button
              className="pl-1 text-dark z-40"
              onClick={() => setShowVideo(false)}
            >
              Close
            </button>
            <div className="relative w-auto sm:max-h-[90vh] sm:w-auto h-auto">
              <video
                className="object-contain w-auto h-[90vh] sm:h-full"
                src={src}
                autoPlay
                loop
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
