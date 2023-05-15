import { ChangeEvent, useState } from "react";
import { CheckbuttonProps } from "../../../types/ui";
import { Input } from "./Input";

export const InputContainer = ({ uuid }: CheckbuttonProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("Radio Button");

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
