import React from "react";

export interface PresetsProps {
  onPresetSelect: (preset: string) => void;
  selected: string;
}

const HARD =
  "000004105070005903000923040809000500020050070051006000307200000000400200000560801";
const MEDIUM =
  "071000382000001000300008006060102430040560010800000009000000620030014000100607940";
const EASY =
  "390020780001000040500910306009002430600849017200030500467001050005006170000300000";
const EMPTY =
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000";

const PRESET = [
  ["EMPTY", EMPTY],
  ["EASY", EASY],
  ["MEDIUM", MEDIUM],
  ["HARD", HARD],
];

const Presets: React.FC<PresetsProps> = ({ onPresetSelect, selected }) => {
  return (
    <div className="flex flex-col mb-2 text-white md:p-4 md:mb-6">
      <h2 className="mb-1 font-normal text-center md:mb-3 md:text-2xl">
        Presets
      </h2>
      <ul
        className="flex justify-center gap-4"
        onClick={(e: any) => {
          onPresetSelect(e.target?.dataset?.preset);
        }}
      >
        {PRESET.map(([key, value]) => (
          <li
            key={key}
            className={`p-2 text-xs font-semibold border rounded-md cursor-pointer md:text-base border-gray-50 hover:bg-white hover:text-blue-400 select-none ${
              selected === value ? "bg-white text-yellow-600" : ""
            }`}
            data-preset={value}
          >
            {key}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Presets;
