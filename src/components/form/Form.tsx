import { FormProps } from "../../types/ui";
import { CreateComponentButton } from "./create-component-button/CreateComponentButton";

export const Form = ({ handleAddComponent }: FormProps) => {
  return (
    <div className="p-20">
      <CreateComponentButton handleAddComponent={handleAddComponent} />
    </div>
  );
};
