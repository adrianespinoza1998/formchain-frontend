import { ChangeEvent, useState } from "react";
import { CheckbuttonProps } from "../../../types/ui";
import { Checkbutton } from "./Checkbutton";

export const CheckbuttonContainer = ({ uuid }: CheckbuttonProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("Checkbox");

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
    <Checkbutton
      uuid={uuid}
      isEditing={isEditing}
      label={label}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleDoubleClick={handleDoubleClick}
    />
  );
};
