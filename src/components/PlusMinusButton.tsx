import React from "react";

interface PlusMinusButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const PlusMinusButton: React.FC<PlusMinusButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <span className="block  h-[0.10rem] w-[0.8rem bg-dark "></span>
      <span
        className={`block h-[0.10rem] w-[0.8rem] bg-dark ${
          isOpen ? "duration-200 opacity-0" : "opacity-1 duration-200 rotate-90"
        }`}
      ></span>
    </div>
  );
};

export default PlusMinusButton;
