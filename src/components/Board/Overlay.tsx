import * as React from "react";
export interface OverlayProps {
  show: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ show, children }) => {
  return (
    <span
      className={`absolute inset-0 grid text-white bg-black ${
        show ? "opacity-75" : "opacity-0"
      } transition-opacity ease-in-out duration-150 md:text-3xl place-items-center`}
    >
      {children}
    </span>
  );
};

export default Overlay;
