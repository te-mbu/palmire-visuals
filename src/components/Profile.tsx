import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileProps {
  setShowProfile: (show: boolean) => void;
}

const Profile: React.FC<ProfileProps> = ({ setShowProfile }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowProfile]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 w-full md:max-w-xl h-full bg-dark border-r border-r-grey-50"
      style={{ zIndex: 800 }}
      ref={modalRef}
    >
      <button
        className="relative text-light text-start w-full pl-1 border-b border-b-grey-50"
        onClick={() => setShowProfile(false)}
      >
        Close
      </button>
      <div className="relative aspect-auto w-full h-full ">
        <p className="absolute z-40 p-4 w-[50%] sm:w-full sm:max-w-[70%] text-black">
          Following his Photography MFA at EFTI, Madrid, he moved to Paris
          developing his career for several years linking up with London, and
          later on, Amsterdam, where he studied at Gerrit Rietveld Academie.
          <br />
          <br />
          He started producing meticulously detailed staged images and films
          that examine the semiotics and seduction tools of contemporary image
          production navigating both, the art world and commercial.
          <br />
          <br />
          Studio
          <br />
          hola@geraymena.com
          <br />
          UK +44 (0) 7723631060
          <br />
          ES +34 611 063512
          <br />
          instagram
          <br />
          models.com
          <br />
          <br />
          Sara Miguel
          <br />
          Design & Development
          <br />
          sara@geraymena.com
        </p>
        <Image
          src={"/palmire.jpeg"}
          alt="Palmire"
          fill
          className="object-cover opacity-50"
        />
      </div>
    </motion.div>
  );
};

export default Profile;
