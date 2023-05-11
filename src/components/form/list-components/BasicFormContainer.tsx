import { BasicFormContainerProps } from "../../../types/ui";
import { BasicForm } from "./BasicForm";
import { useState } from "react";

export const BasicFormContainer = ({
  setComponents,
  components,
  index,
}: BasicFormContainerProps) => {
  const [innerComponents, setInnerComponents] = useState<JSX.Element[]>([]);

  const handleAddComponent = () => {
    const lista = [...innerComponents, <h1>Components</h1>];
    setInnerComponents(lista);
  };

  const handleRemoveComponent = () => {
    setComponents(components.filter((_, i) => i !== index));
  };

  return (
    <BasicForm
      handleAddComponent={handleAddComponent}
      handleRemoveComponent={handleRemoveComponent}
      components={innerComponents}
    />
  );
};
