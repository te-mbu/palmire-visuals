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
}

const Carousel: React.FC<CarouselProps> = ({ selectedVideos }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const variants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const handleClick = () => {};

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{ transformOrigin: "top" }}
      className="overflow-hidden"
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
        onClick={handleClick}
      >
        {selectedVideos.map((video, index) => (
          <div
            key={index}
            className="relative aspect-square w-10/12 sm:w-[400px] h-auto flex-none m-2"
          >
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-contain"
            />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;
