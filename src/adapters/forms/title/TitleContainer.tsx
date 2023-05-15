import { ChangeEvent, useState } from "react";
import { Title } from "./Title";

export const TitleContainer = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("Title");

  const handleDoubleClick = () => {
    console.log("double click");
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  return (
    <Title
      isEditing={isEditing}
      label={label}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleDoubleClick={handleDoubleClick}
    />
  );
};
