import { BasicFormProps } from "../../../types/ui";
import { AddButton } from "../buttons/AddButton";
import { DeleteButton } from "../buttons/DeleteButton";
import { DropdownsList } from "../buttons/dropdown/DropdownsList";

export const BasicForm = ({
  //   handleAddComponent,
  handleRemoveComponent,
  components,
  isDropdown,
  handleDropdown,
  optionList,
  handleClick,
}: BasicFormProps) => {
  return (
    <div className="min-h-fit rounded bg-gray-50 my-2 p-4">
      <div>
        {components.map((component: JSX.Element, i: number) => {
          return <div key={i}>{component}</div>;
        })}
      </div>
      <div className="flex- items-end justify-items-end">
        <AddButton handleClick={handleDropdown} label="+" />
        <DeleteButton handleClick={handleRemoveComponent} label="-" />
        {isDropdown && (
          <DropdownsList optionList={optionList} handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};
