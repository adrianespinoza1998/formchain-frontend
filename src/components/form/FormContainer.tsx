import { useState } from "react";
import { Form } from "./Form";

export const FormContainer = () => {
  const [forms, setForms] = useState<JSX.Element[]>([]);

  const handleAddForm = () => {
    const lista = [...forms, <div>Hola</div>];
    setForms(lista);
  };

  return <Form handleAddComponent={handleAddForm} />;
};
