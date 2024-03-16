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

  useEffect(() => {
    if (isOpen) {
      const filteredVideos = videosData.filter(
        (video) => video.index.title === title
      );
      setSelectedVideos(filteredVideos);
    }
  }, [isOpen, title]);

  return (
    <div className="flex flex-col gap-0 w-full">
      <div className="w-full  flex justify-between bg-light border-b border-b-dark pl-1 group">
        <p>{title}</p>
        <div className="w-[30%] flex justify-between px-[1%]">
          <p>{year}</p>
          <p className="group-hover:scale-105" onClick={onClick}>
            {isOpen ? "-" : "+"}
          </p>
        </div>
      </div>

      {isOpen && <Carousel selectedVideos={selectedVideos} />}
    </div>
  );
};

export default IndexRow;
