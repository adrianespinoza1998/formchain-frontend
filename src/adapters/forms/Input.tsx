import { CheckbuttonProps } from "../../types/ui";

export const Input = ({ uuid }: CheckbuttonProps) => {
  return (
    <div>
      <label
        htmlFor={`input${uuid}`}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Input:
      </label>
      <input
        type="text"
        id={`input${uuid}`}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};
