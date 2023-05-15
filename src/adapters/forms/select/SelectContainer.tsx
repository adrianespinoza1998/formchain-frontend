import { ChangeEvent, useState } from "react";
import { CheckbuttonProps } from "../../../types/ui";
import { Select } from "./Select";

export const SelectContainer = ({ uuid }: CheckbuttonProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("Select");

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
