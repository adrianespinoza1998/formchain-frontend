import { BasicButtonProps } from "../../../types/ui";

export const DeleteButton = ({ handleClick, label }: BasicButtonProps) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 border-b-4 border-red-600 hover:border-red-500 rounded"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
