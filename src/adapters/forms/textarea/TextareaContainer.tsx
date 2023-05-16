import { ChangeEvent, useState } from "react";
import { CheckbuttonProps } from "../../../types/ui";
import { Textarea } from "./Textarea";

export const TextareaContainer = ({ uuid }: CheckbuttonProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("Textarea");

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
    <Textarea
      uuid={uuid}
      isEditing={isEditing}
      label={label}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleDoubleClick={handleDoubleClick}
    />
  );
};
