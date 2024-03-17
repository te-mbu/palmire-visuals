import React, { useEffect, useState } from "react";
import videosData from "../../public/data/videosData";
import Carousel from "./Carousel";
import PlusMinusButton from "./PlusMinusButton";

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
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 640); // 640px peut être ajusté selon vos points de rupture CSS
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize(); // Initialisez l'état selon la taille initiale de l'écran

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const filteredVideos = videosData.filter(
        (video) => video.index.title === title
      );
      setSelectedVideos(filteredVideos);
    }
  }, [isOpen, title]);

  // Effect for handling video full screen in mobile
  useEffect(() => {
    if (selectedVideoSrc && isMobileScreen) {
      const videoElement = document.createElement("video");
      videoElement.src = selectedVideoSrc;
      videoElement.setAttribute("playsInline", "true"); // Important for iOS
      document.body.appendChild(videoElement);

      const enterFullScreen = () => {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.webkitEnterFullscreen) {
          videoElement.webkitEnterFullscreen(); // For iOS Safari
        }
        videoElement.play(); // Start the video automatically
      };

      enterFullScreen();

      // Clean up: stop the video and remove it when unmounting
      return () => {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
        videoElement.pause();
        document.body.removeChild(videoElement);
      };
    }
  }, [selectedVideoSrc, isMobileScreen]);

  return (
    <>
      <div className="flex flex-col gap-0 w-full">
        <div
          className={`${
            isOpen ? "border border-b border-b-light" : "border-b border-dark"
          } w-full flex justify-between bg-light py-3 pl-1 sm:py-0`}
        >
          <p>{title}</p>
          <div className="w-1/3 flex justify-between items-center px-1">
            <p>{year}</p>
            <PlusMinusButton isOpen={isOpen} onClick={onClick} />
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
      {showVideo && !isMobileScreen && (
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
                playsInline // Ajout pour améliorer la compatibilité mobile
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
