import { ChangeEvent, useState } from "react";
import { Button } from "./Button";

export const ButtonContainer = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("Button");

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };
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
