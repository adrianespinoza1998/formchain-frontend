import { CheckbuttonPresentationalProps } from "../../../types/ui";

export const Radiobutton = ({
  uuid,
  label,
  isEditing,
  handleBlur,
  handleChange,
  handleDoubleClick,
}: CheckbuttonPresentationalProps) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={`radio${uuid}`}
        type="radio"
        value=""
        name="default-radio"
        disabled
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={`radio${uuid}`}
        className="ml-2 text-sm font-medium text-gray-900"
        onDoubleClick={handleDoubleClick}
      >
        {isEditing ? (
          <input
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={label}
            onKeyDown={(e) => e.key === "Enter" && handleBlur()}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        ) : (
          label
        )}
      </label>
    </div>
  );
};
