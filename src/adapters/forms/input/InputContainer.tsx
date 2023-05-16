import { CheckbuttonProps } from "../../../types/ui";
import { Input } from "./Input";
import { useEditLabel } from "../../../hooks/useEditLabel";

export const InputContainer = ({ uuid }: CheckbuttonProps) => {
  const { isEditing, label, handleBlur, handleChange, handleDoubleClick } =
    useEditLabel("Radio Button");
  return (
    <Input
      uuid={uuid}
      isEditing={isEditing}
      label={label}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleDoubleClick={handleDoubleClick}
    />
  );
};
