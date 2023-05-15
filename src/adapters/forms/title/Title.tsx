import { TitleProps } from "../../../types/ui";

export const Title = ({
  isEditing,
  label,
  handleBlur,
  handleChange,
  handleDoubleClick,
}: TitleProps) => {
  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          id={`input${label}`}
          onBlur={handleBlur}
          onKeyDown={(e) => e.key === "Enter" && handleBlur()}
          onChange={handleChange}
          value={label}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      ) : (
        <div onDoubleClick={handleDoubleClick}>
          <h1
            className="mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl"
            onDoubleClick={handleDoubleClick}
          >
            {label}
          </h1>
        </div>
      )}
    </div>
  );
};
