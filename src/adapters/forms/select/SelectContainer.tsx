import { CheckbuttonProps } from "../../../types/ui";
import { Select } from "./Select";
import { useEditLabel } from "../../../hooks/useEditLabel";

export const SelectContainer = ({ uuid }: CheckbuttonProps) => {
  const { isEditing, label, handleBlur, handleChange, handleDoubleClick } =
    useEditLabel("Select");
  return (
    <Select
      uuid={uuid}
      isEditing={isEditing}
      label={label}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleDoubleClick={handleDoubleClick}
    />
  );
};
