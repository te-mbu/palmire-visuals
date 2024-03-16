import React from "react";

interface ProfileProps {
  setShowProfile: (show: boolean) => void;
}

const HomepageBanner: React.FC<ProfileProps> = ({ setShowProfile }) => {
  return (
    <div className="w-full flex flex-col items-center z-30">
      <p className="text-grey-50 font-[500] leading-tight text-vw">
        <button onClick={() => setShowProfile(true)} className="text-light">
          PALMIRE MBU
        </button>
        , VIDEOGRAPHER & EDITOR
      </p>
      <p className="text-grey-50 font-[500] text-vw">
        CURRENTLY BASED IN PARIS (FRANCE)
      </p>
    </div>
  );
};

export default HomepageBanner;
