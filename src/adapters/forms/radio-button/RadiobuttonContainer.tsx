import { CheckbuttonProps } from "../../../types/ui";
import { Radiobutton } from "./Radiobutton";
import { useEditLabel } from "../../../hooks/useEditLabel";

export const RadiobuttonContainer = ({ uuid }: CheckbuttonProps) => {
  const { isEditing, label, handleBlur, handleChange, handleDoubleClick } =
    useEditLabel("Radio Button");
  return (
    <Radiobutton
      uuid={uuid}
      isEditing={isEditing}
      label={label}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleDoubleClick={handleDoubleClick}
    />
  );
};
