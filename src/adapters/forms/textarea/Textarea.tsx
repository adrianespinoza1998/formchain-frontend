import { CheckbuttonPresentationalProps } from "../../../types/ui";

export const Textarea = ({
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
        htmlFor={`messages${uuid}`}
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
      <textarea
        id={`messages${uuid}`}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
        disabled
      ></textarea>
    </div>
  );
};
