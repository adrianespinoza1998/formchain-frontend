import { BasicFormProps } from "../../../types/ui";
import { AddButton } from "../buttons/AddButton";
import { DeleteButton } from "../buttons/DeleteButton";

export const BasicForm = ({
  handleAddComponent,
  handleRemoveComponent,
  components,
}: BasicFormProps) => {
  return (
    <div className="min-h-fit rounded bg-gray-50 my-2">
      <div>
        {components.map((component: JSX.Element, i: number) => {
          return <div key={i}>{component}</div>;
        })}
      </div>
      <div className="flex- items-end justify-items-end">
        <AddButton handleClick={handleAddComponent} label="+" />
        <DeleteButton handleClick={handleRemoveComponent} label="-" />
      </div>
    </div>
  );
};
