import { CheckbuttonPresentationalProps } from "../../../types/ui";

export const Input = ({
  uuid,
  isEditing,
  label,
  handleBlur,
  handleChange,
  handleDoubleClick,
}: CheckbuttonPresentationalProps) => {
  return (
    <div className="text-left">
      <label
        htmlFor={`input${uuid}`}
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
      <input
        type="text"
        id={`input${uuid}`}
        disabled
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};
