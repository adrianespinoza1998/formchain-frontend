import { DropdownsList } from "../../../../components/form/buttons/dropdown/DropdownsList";
import { AddComponentProps } from "../../../../types/ui";

export const AddComponent = ({
  isDropdown,
  optionList,
  handleClick,
}: AddComponentProps) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-slate-200">
      <button
        className="bg-slate-200 hover:bg-slate-100 text-slate-400 py-2 px-4 rounded"
        onClick={handleClick}
      >
        +
      </button>
      {isDropdown && (
        <DropdownsList optionList={optionList} handleClick={handleClick} />
      )}
    </div>
  );
};
