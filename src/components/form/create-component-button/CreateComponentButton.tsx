import { CreateComponentButtonProps } from "../../../types/ui";

export const CreateComponentButton = ({
  handleAddComponent,
}: CreateComponentButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <hr className="w-full h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
      <button
        className="absolute bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded"
        onClick={handleAddComponent}
      >
        +
      </button>
      <hr className="bg-blue-500 border-blue-600" />
    </div>
  );
};
