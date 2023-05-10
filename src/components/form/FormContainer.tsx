import { useState } from "react";
import { Form } from "./Form";
import { SidebarProps } from "../../types/ui";

export const FormContainer = ({ isOpen }: SidebarProps) => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [components, setComponents] = useState<string[]>([]);

  const handleAddComponent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const lista = [...components, e.currentTarget.name];
    setComponents(lista);
    setIsCreate(!isCreate);
  };
  return (
    <Form
      components={components}
      isCreate={isCreate}
      setIsCreate={setIsCreate}
      isOpen={isOpen}
      handleAddComponent={handleAddComponent}
    />
  );
};
