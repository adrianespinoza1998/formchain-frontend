import { DropdownsListProps } from "../../../../types/ui";
import { AnchorDropdown } from "./AnchorDropdown";

export const DropdownsList = ({
  optionList,
  handleClick,
}: DropdownsListProps) => {
  return (
    <div
      className="right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div className="py-1" role="none">
        {optionList.map((ol: string, index: number) => {
          return (
            <AnchorDropdown key={index} label={ol} handleClick={handleClick} />
          );
        })}
      </div>
    </div>
  );
};
