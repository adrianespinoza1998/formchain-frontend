import { CheckbuttonPresentationalProps } from "../../../types/ui";

export const Select = ({
  uuid,
  isEditing,
  label,
  handleBlur,
  handleChange,
  handleDoubleClick,
}: CheckbuttonPresentationalProps) => {
  return (
    <div>
      <label
        htmlFor={`countries${uuid}`}
        className="block mb-2 text-sm font-medium text-gray-900"
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
      <select
        id={`countries${uuid}`}
        disabled
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Option 1</option>
      </select>
    </div>
  );
};
