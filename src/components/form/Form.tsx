import { FormProps } from "../../types/ui";
import { CreateComponentButton } from "./create-component-button/CreateComponentButton";
import { ShowComponents } from "./show-components/ShowComponents";

export const Form = ({ handleAddComponent, components }: FormProps) => {
  return (
    <div className="p-20">
      <ShowComponents components={components} />
      <CreateComponentButton handleAddComponent={handleAddComponent} />
    </div>
  );
};
