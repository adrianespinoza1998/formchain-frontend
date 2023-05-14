import { useCallback, useState } from "react";
import { Form } from "./Form";
import { BasicFormContainer } from "./list-components/BasicFormContainer";

export const FormContainer = () => {
  const [forms, setForms] = useState<JSX.Element[]>([]);

  const handleAddForm = useCallback(() => {
    const lista = [
      ...forms,
      <BasicFormContainer
        components={forms}
        setComponents={setForms}
        index={forms.length}
      />,
    ];
    setForms(lista);
  }, [forms]);

  return <Form handleAddComponent={handleAddForm} components={forms} />;
};
