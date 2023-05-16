// import { ChangeEvent, useState } from "react";
import { useEditLabel } from "../../../hooks/useEditLabel";
import { CheckbuttonProps } from "../../../types/ui";
import { Textarea } from "./Textarea";

export const TextareaContainer = ({ uuid }: CheckbuttonProps) => {
  const { isEditing, label, handleBlur, handleChange, handleDoubleClick } =
    useEditLabel("Textarea");
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
