import React, { useEffect, useState } from "react";
import videosData from "../../public/data/videosData";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// Définition des types pour les props du composant.
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

// Le composant fonctionnel IndexRow.
const IndexRow: React.FC<IndexRowProps> = ({
  title,
  year,
  isOpen,
  onClick,
}) => {
  // État local pour gérer les vidéos sélectionnées.
  const [selectedVideos, setSelectedVideos] = useState<Video[]>([]);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState<string>("");
  const [showVideo, setShowVideo] = useState<Boolean>(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  // Effect pour ajuster l'état en fonction de la taille de l'écran.
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  // Effect pour filtrer les vidéos en fonction du titre.
  useEffect(() => {
    if (isOpen) {
      const filteredVideos = videosData.filter(
        (video) => video.index.title === title
      );
      setSelectedVideos(filteredVideos);
    }
  }, [isOpen, title]);

  // Effect pour gérer la lecture plein écran sur mobile.
  useEffect(() => {
    if (selectedVideoSrc && isMobileScreen) {
      const videoElement = document.createElement("video");
      videoElement.src = selectedVideoSrc;
      videoElement.setAttribute("playsInline", "true");
      document.body.appendChild(videoElement);

      const enterFullScreen = () => {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.webkitEnterFullscreen) {
          videoElement.webkitEnterFullscreen();
        }
        videoElement.play();
      };

      enterFullScreen();

      return () => {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
        videoElement.pause();
        document.body.removeChild(videoElement);
      };
    }
  }, [selectedVideoSrc, isMobileScreen]);

  // Render du composant.
  return (
    <>
      <div className="flex flex-col gap-0 w-full">
        <div
          className={`${
            isOpen ? "border border-b border-b-light" : "border-b border-dark"
          } w-full flex justify-between bg-light py-3 pl-1 sm:py-0`}
          onClick={onClick} // Ajouté pour permettre la manipulation de l'état isOpen de l'extérieur
        >
          <p>{title}</p>
          <div className="w-1/3 flex justify-between items-center px-1">
            <p>{year}</p>
            {isOpen ? (
              <motion.div
                key="minus"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </motion.div>
            )}
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
            <video
              className="object-contain w-auto h-[90vh] sm:h-full"
              src={selectedVideoSrc}
              autoPlay
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default IndexRow;
