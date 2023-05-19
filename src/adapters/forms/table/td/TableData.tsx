import { TableDataProps } from "../../../../types/ui";

export const TableData = ({
  uuid,
  dataTypes,
  dataType,
  handleChange,
}: TableDataProps) => {
  return (
    <td className="px-6 py-4 text-gray-800">
      <label
        htmlFor={`dataTypes${uuid}`}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Data type:
      </label>
      <select
        id={`dataTypes${uuid}`}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={dataType}
        onChange={handleChange}
      >
        {/* <option selected>String</option>
        <option>Number</option>
        <option>Date</option> */}
        {dataTypes.map((dt: string, i: number) => {
          return (
            <option key={i} value={dt}>
              {dt}
            </option>
          );
        })}
      </select>
    </td>
  );
};
