import React from "react";

export interface InstructionsProps {
  onKeyDown: (e: { key: string }) => void;
  charsLeft: number;
  hidden: boolean;
}

const Instructions: React.FC<InstructionsProps> = ({
  onKeyDown,
  charsLeft,
  hidden,
}) => {
  if (hidden) return null;
  return (
    <div className="md:mx-12">
      <div className="my-6 text-center md:mr-6">
        <p
          className="font-light leading-loose select-none md:text-xl text-gray-50 text-shadow md:mb-6"
          id="instructions"
          onClick={(e) => {
            const target: any = e.target;
            target.nodeName === "KBD" && onKeyDown({ key: target.innerText });
          }}
        >
          <span className="hidden md:inline">Type</span>
          <span className="md:hidden">Click</span> <kbd>0</kbd> for empty,
          <br className="md:hidden" /> <kbd>1</kbd>
          <kbd>2</kbd>
          <kbd>3</kbd>
          <kbd>4</kbd>
          <kbd>5</kbd>
          <kbd>6</kbd>
          <kbd>7</kbd>
          <kbd>8</kbd>
          <kbd>9</kbd> for values <br className="md:hidden" /> and{" "}
          <kbd>Backspace</kbd> for delete
        </p>
        <div className="inline-block mt-4 ml-5 italic font-light leading-4 text-white">
          <span className="mr-1 text-3xl font-normal">{charsLeft}</span>
          character left
        </div>
      </div>
    </div>
  );
};

export default Instructions;
