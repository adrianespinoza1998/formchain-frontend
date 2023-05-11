import { BasicButtonProps } from "../../../types/ui";

export const AddButton = ({ handleClick, label }: BasicButtonProps) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
