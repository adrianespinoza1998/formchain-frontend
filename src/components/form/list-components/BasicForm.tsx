import { BasicFormProps } from "../../../types/ui";
import { AddButton } from "../buttons/AddButton";
// import { AddButtonDropdown } from "../buttons/AddButtonDropdown";
import { DeleteButton } from "../buttons/DeleteButton";
import { DropdownsList } from "../buttons/dropdown/DropdownsList";

export const BasicForm = ({
  handleAddComponent,
  handleRemoveComponent,
  components,
  isDropdown,
  handleDropdown,
}: BasicFormProps) => {
  return (
    <div className="min-h-fit rounded bg-gray-50 my-2">
      <div>
        {components.map((component: JSX.Element, i: number) => {
          return <div key={i}>{component}</div>;
        })}
      </div>
      <div className="flex- items-end justify-items-end">
        <AddButton handleClick={handleDropdown} label="+" />
        {/* <AddButtonDropdown /> */}
        <DeleteButton handleClick={handleRemoveComponent} label="-" />
        {isDropdown && <DropdownsList />}
      </div>
    </div>
  );
};
