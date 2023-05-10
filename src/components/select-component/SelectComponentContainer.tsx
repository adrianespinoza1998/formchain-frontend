import { SelectComponentProps } from "../../types/ui";
import { SelectComponent } from "./SelectComponent";

export const SelectComponentContainer = ({
  isOpen,
  isCreate,
  setIsCreate,
}: SelectComponentProps) => {
  return (
    <div className="p-10">
      <SelectComponent
        isOpen={isOpen}
        isCreate={isCreate}
        setIsCreate={setIsCreate}
      />
    </div>
  );
};
