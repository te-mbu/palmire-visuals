// src/data/videosData.ts or /data/videosData.ts based on your project structure

interface VideoData {
  title: string;
  thumbnail: string;
  description: string;
  src: string;
  index: {
    title: string;
    year: string;
  };
}

const videosData: VideoData[] = [
  {
    title: "Ousmane lalala lalaal alalallalalal alalalla",
    thumbnail: "/default.jpeg",
    description: "Description de la video Ousmane",
    src: "/videos/video-2.mp4",
    index: {
      title: "G-League",
      year: "2024",
    },
  },
  {
    title: "El reno",
    thumbnail: "/default.jpeg",
    description: "Description de la video El Reno",
    src: "/videos/video-1.mp4",
    index: {
      title: "El Reno High School",
      year: "2024",
    },
  },
  {
    title: "Ousmane Dieng",
    thumbnail: "/default.jpeg",
    description: "Description de la video Ousmane",
    src: "/videos/video-2.mp4",
    index: {
      title: "G-League",
      year: "2024",
    },
  },
  {
    title: "Ousmane Dieng",
    thumbnail: "/default.jpeg",
    description: "Description de la video Ousmane",
    src: "/videos/video-2.mp4",
    index: {
      title: "G-League",
      year: "2024",
    },
  },
  {
    title: "Ousmane Dieng",
    thumbnail: "/default.jpeg",
    description: "Description de la video Ousmane",
    src: "/videos/video-2.mp4",
    index: {
      title: "G-League",
      year: "2024",
    },
  },
  {
    title: "Ousmane Dieng",
    thumbnail: "/default.jpeg",
    description: "Description de la video Ousmane",
    src: "/videos/video-2.mp4",
    index: {
      title: "G-League",
      year: "2024",
    },
  },
  {
    title: "El reno",
    thumbnail: "/default.jpeg",
    description: "Description de la video El Reno",
    src: "/videos/video-1.mp4",
    index: {
      title: "El Reno High School",
      year: "2024",
    },
  },
];

export default videosData;
