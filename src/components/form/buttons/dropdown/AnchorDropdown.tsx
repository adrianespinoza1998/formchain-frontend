import { AnchorDropdownProps } from "../../../../types/ui";

export const AnchorDropdown = ({ label, handleClick }: AnchorDropdownProps) => {
  return (
    <button
      //   href="#"
      className="text-gray-700 block px-4 py-2 text-sm w-full text-left"
      role="menuitem"
      name={label}
      onClick={(e) => handleClick(e.currentTarget)}
      //   id="menu-item-0"
    >
      {label}
    </button>
  );
};
