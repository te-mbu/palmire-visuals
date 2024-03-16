import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

interface CarouselProps {
  selectedVideos: Video[];
  setShowVideo: (show: boolean) => void;
  setSelectedVideoSrc: (src: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  selectedVideos,
  setShowVideo,
  setSelectedVideoSrc,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const variants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.1, ease: "easeOut" } },
  };

  const handleClick = (src: string) => {
    setShowVideo(true);
    setSelectedVideoSrc(src);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{ transformOrigin: "top" }}
      className="overflow-hidden border -b border-b-black"
    >
      <div
        ref={scrollContainerRef}
        onWheel={(e) => {
          const scrollSpeed = 1;
          const amount = (e.deltaY + e.deltaX) * scrollSpeed;
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += amount;
            e.preventDefault();
          }
        }}
        className="flex overflow-x-auto scrollbar-hide"
      >
        {selectedVideos.map((video, index) => (
          <div className="flex flex-col w-full items-center bg-light py-2">
            <div
              key={index}
              className="relative aspect-square w-10/12 sm:w-[400px] h-auto flex-none mb-0"
              onClick={() => handleClick(video.src)}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="w-10/12 sm:w-[400px] flex flex-col bg-light mx-2 shadow-md">
              <p className=" pl-1 text-start overflow-hidden break-words">
                {video.title}
              </p>
              <p className=" pl-1 text-start overflow-hidden break-words">
                "{video.description}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;
