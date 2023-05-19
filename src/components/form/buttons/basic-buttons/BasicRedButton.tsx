import { BasicButtonProps } from "../../../../types/ui";

export const BasicRedButton = ({ handleClick, label }: BasicButtonProps) => {
  return (
    <button
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
