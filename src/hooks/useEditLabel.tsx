import { ChangeEvent, useState } from "react";

export const useEditLabel = (initLabel: string) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [label, setLabel] = useState<string>(initLabel);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };
  return { isEditing, label, handleBlur, handleChange, handleDoubleClick };
};
