import { Button } from "./Button";
import { useEditLabel } from "../../../hooks/useEditLabel";

export const ButtonContainer = () => {
  const { isEditing, label, handleBlur, handleChange, handleDoubleClick } =
    useEditLabel("Button");

  return (
    <Button
      isEditing={isEditing}
      label={label}
      handleDoubleClick={handleDoubleClick}
      handleBlur={handleBlur}
      handleChange={handleChange}
    />
  );
};
