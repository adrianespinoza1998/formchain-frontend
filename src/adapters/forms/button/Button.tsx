import { TitleProps } from "../../../types/ui";

export const Button = ({
  isEditing,
  label,
  handleBlur,
  handleChange,
  handleDoubleClick,
}: TitleProps) => {
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
    </button>
  );
};
