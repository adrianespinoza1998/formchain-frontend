import { SelectComponentProps } from "../../types/ui";

export const SelectComponent = ({
  isCreate,
  setIsCreate,
}: SelectComponentProps) => {
  return (
    <div className="flex">
      <button
        className={
          isCreate
            ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        }
        onClick={() => setIsCreate && setIsCreate(!isCreate)}
      >
        {isCreate ? "-" : "+"}
      </button>
    </div>
  );
};
