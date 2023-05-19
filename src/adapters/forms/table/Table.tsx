import { TableDataContainer } from "./td/TableDataContainer";
import { TableHeaderContainer } from "./th/TableHeaderContainer";

export const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-800">
          <tr>
            <TableHeaderContainer label="Header 1" />
            <TableHeaderContainer label="Header 2" />
            <TableHeaderContainer label="Header 3" />
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-200">
            <TableDataContainer />
            <TableDataContainer />
            <TableDataContainer />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
