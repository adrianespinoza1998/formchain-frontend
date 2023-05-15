import { CheckbuttonProps } from "../../types/ui";

export const Textarea = ({ uuid }: CheckbuttonProps) => {
  return (
    <div>
      <label
        htmlFor={`messages${uuid}`}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Your message:
      </label>
      <textarea
        id={`messages${uuid}`}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};
