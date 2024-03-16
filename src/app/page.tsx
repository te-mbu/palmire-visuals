import React from "react";
import Work from "@/components/Work";
import videosData from "../../public/data/videosData"; // Make sure the path matches where your JSON file is

interface Video {
  title: string;
  thumbnail: string;
  description: string;
  src: string;
}

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {videosData.map((video: Video, index: number) => (
        <Work
          key={index}
          title={video.title}
          thumbnail={video.thumbnail}
          description={video.description}
          src={video.src}
        />
      ))}
    </div>
  );
};

export default Home;
