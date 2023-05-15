import { CheckbuttonProps } from "../../types/ui";

export const Checkbutton = ({ uuid }: CheckbuttonProps) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={`checkbox${uuid}`}
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={`checkbox${uuid}`}
        className="ml-2 text-sm font-medium text-gray-900"
      >
        Checkbox
      </label>
    </div>
  );
};
