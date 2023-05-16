import { TableHeaderContainer } from "./th/TableHeaderContainer";

export const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-800">
          <tr>
            {/* <th scope="col" className="px-6 py-3">
              Header 1
            </th>
            <th scope="col" className="px-6 py-3">
              Header 2
            </th>
            <th scope="col" className="px-6 py-3">
              Header 3
            </th> */}
            <TableHeaderContainer label="Header 1" />
            <TableHeaderContainer label="Header 2" />
            <TableHeaderContainer label="Header 3" />
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-200">
            <td className="px-6 py-4 text-gray-800">Value 1</td>
            <td className="px-6 py-4 text-gray-800">Value 2</td>
            <td className="px-6 py-4 text-gray-800">Value 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
