"use client";
import React, { useState } from "react";
import IndexRow from "@/components/IndexRow";
import videosData from "../../../public/data/videosData";

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

const uniqueIndices: Video[] = videosData.reduce<Video[]>((acc, current) => {
  const x = acc.find(
    (item) =>
      item.index.title === current.index.title &&
      item.index.year === current.index.year
  );
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);

const Portfolio: React.FC = () => {
  const [openRow, setOpenRow] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-0 w-full bg-light h-full">
      <div className="w-full flex justify-between mt-1 border-b py-2 border-b-dark pl-1 sm:py-0">
        <p>Album</p>
        <div className="w-1/3 flex justify-between items-center px-1">
          <p>Year</p>
          <p>Details</p>
        </div>
      </div>
      {uniqueIndices.map((video, i) => (
        <IndexRow
          key={i}
          title={video.index.title}
          year={video.index.year}
          isOpen={openRow === video.index.title}
          onClick={() =>
            setOpenRow(openRow === video.index.title ? null : video.index.title)
          }
        />
      ))}
    </div>
  );
};

export default Portfolio;
