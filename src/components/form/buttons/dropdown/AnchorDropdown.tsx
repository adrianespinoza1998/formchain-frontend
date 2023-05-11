import { AnchorDropdownProps } from "../../../../types/ui";

export const AnchorDropdown = ({ label }: AnchorDropdownProps) => {
  return (
    <a
      href="#"
      className="text-gray-700 block px-4 py-2 text-sm"
      role="menuitem"
      id="menu-item-0"
    >
      {label}
    </a>
  );
};
