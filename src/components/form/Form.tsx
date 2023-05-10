import { FormProps } from "../../types/ui";
import { ComponentListContainer } from "../component-list/ComponentListContainer";
import { CreatedComponentContainer } from "../created-components/CreatedComponentContainer";
import { SelectComponentContainer } from "../select-component/SelectComponentContainer";

export const Form = ({
  components,
  isOpen,
  isCreate,
  setIsCreate,
  handleAddComponent,
}: FormProps) => {
  return (
    <div className="p-20">
      <CreatedComponentContainer components={components} isOpen={isOpen} />
      <SelectComponentContainer
        isOpen={isOpen}
        isCreate={isCreate}
        setIsCreate={setIsCreate}
      />
      {isCreate && (
        <ComponentListContainer handleAddComponent={handleAddComponent} />
      )}
    </div>
  );
};
