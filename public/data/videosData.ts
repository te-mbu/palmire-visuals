// src/data/videosData.ts or /data/videosData.ts based on your project structure

interface VideoData {
  title: string;
  thumbnail: string;
  description: string;
  src: string;
}

const videosData: VideoData[] = [
  {
    title: "Ousmane Dieng",
    thumbnail: "/default.jpeg",
    description: "Description de la video Ousmane",
    src: "/videos/video-1.mp4",
  },
  {
    title: "El reno",
    thumbnail: "/default.jpeg",
    description: "Description de la video El Reno",
    src: "/videos/video-2.mp4",
  },
  {
    title: "Ousmane Dieng",
    thumbnail: "/default.jpeg",
    description: "Description de la video Ousmane",
    src: "/videos/video-1.mp4",
  },
  {
    title: "El reno",
    thumbnail: "/default.jpeg",
    description: "Description de la video El Reno",
    src: "/videos/video-2.mp4",
  },
];

export default videosData;
