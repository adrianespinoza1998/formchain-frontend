import { BasicBlueButton } from "../../../components/form/buttons/basic-buttons/BasicBlueButton";
import { BasicRedButton } from "../../../components/form/buttons/basic-buttons/BasicRedButton";
import { TableDataContainer } from "./td/TableDataContainer";
import { TableHeaderContainer } from "./th/TableHeaderContainer";

export const Table = () => {
  return (
    <div className="flex flex-row">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-90">
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
      <div className="ml-3">
        <BasicBlueButton label="+" handleClick={() => {}} />
        {/* <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
          -
        </button> */}
        <BasicRedButton label="-" handleClick={() => {}} />
      </div>
    </div>
  );
};
