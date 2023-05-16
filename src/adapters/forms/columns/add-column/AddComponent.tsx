import { DropdownsList } from "../../../../components/form/buttons/dropdown/DropdownsList";
import { AddComponentProps } from "../../../../types/ui";

export const AddComponent = ({
  isDropdown,
  optionList,
  handleClick,
  components,
  handleDropdown,
}: AddComponentProps) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-slate-200">
      <div>
        {components.map((component: JSX.Element, i: number) => {
          return <div key={i}>{component}</div>;
        })}
      </div>
      {components.length === 0 && (
        <button
          className="bg-slate-200 hover:bg-slate-100 text-slate-400 py-2 px-4 rounded"
          onClick={handleDropdown}
        >
          +
        </button>
      )}
      {isDropdown && (
        <DropdownsList optionList={optionList} handleClick={handleClick} />
      )}
    </div>
  );
};
