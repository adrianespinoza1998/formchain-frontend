import { ComponentListProps } from "../../types/ui";
import { ComponentList } from "./ComponentList";

export const ComponentListContainer = ({
  handleAddComponent,
}: ComponentListProps) => {
  const components = [
    "input",
    "button",
    "select",
    "checkbox",
    "radio",
    "textarea",
    "label",
    "form",
  ];

  return (
    <ComponentList
      components={components}
      handleAddComponent={handleAddComponent}
    />
  );
};
