import { ChangeEvent, useState } from "react";
import { TableHeaderProps } from "../../../../types/ui";
import { TableHeader } from "./TableHeader";

export const TableHeaderContainer = ({ label }: TableHeaderProps) => {
  const [newLabel, setNewLabel] = useState<string>(label);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewLabel(e.target.value);
  };

  return (
    <TableHeader
      label={newLabel}
      isEditing={isEditing}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleDoubleClick={handleDoubleClick}
    />
  );
};
