// import { ChangeEvent, useState } from "react";
import { Title } from "./Title";
import { useEditLabel } from "../../../hooks/useEditLabel";

export const TitleContainer = () => {
  const { isEditing, label, handleBlur, handleChange, handleDoubleClick } =
    useEditLabel("Title");

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
