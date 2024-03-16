"use client";
import React, { useEffect, useState } from "react";
import videosData from "../../public/data/videosData";
import Carousel from "./Carousel";

interface Video {
  title: string;
  thumbnail: string;
  description: string;
  src: string;
  index: {
    title: string;
    year: string;
  };
}

interface IndexRowProps {
  title: string;
  year: string;
  isOpen: boolean;
  onClick: () => void;
}

const IndexRow: React.FC<IndexRowProps> = ({
  title,
  year,
  isOpen,
  onClick,
}) => {
  const [selectedVideos, setSelectedVideos] = useState<Video[]>([]);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState<string>("");
  const [showVideo, setShowVideo] = useState<Boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const filteredVideos = videosData.filter(
        (video) => video.index.title === title
      );
      setSelectedVideos(filteredVideos);
    }
  }, [isOpen, title]);

  return (
    <>
      <div className="flex flex-col gap-0 w-full">
        <div className="w-full  flex justify-between bg-light border-b border-b-dark pl-1">
          <p>{title}</p>
          <div className="w-[30%] flex justify-between px-[1%]">
            <p>{year}</p>
            <p className="cursor-pointer" onClick={onClick}>
              {isOpen ? "-" : "+"}
            </p>
          </div>
        </div>

        {isOpen && (
          <Carousel
            selectedVideos={selectedVideos}
            setShowVideo={setShowVideo}
            setSelectedVideoSrc={setSelectedVideoSrc}
          />
        )}
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
                src={selectedVideoSrc}
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

export default IndexRow;
