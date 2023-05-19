import { BasicBlueButton } from "../../../components/form/buttons/basic-buttons/BasicBlueButton";
import { BasicRedButton } from "../../../components/form/buttons/basic-buttons/BasicRedButton";
import { TableProps } from "../../../types/ui";
import { TableDataContainer } from "./td/TableDataContainer";
import { TableHeaderContainer } from "./th/TableHeaderContainer";

export const Table = ({ addRows, removeRows, rows }: TableProps) => {
  return (
    <div className="flex flex-row">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-90">
        <table className="w-full text-sm text-left dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-800">
            <tr>
              {/* <TableHeaderContainer label="Header 1" />
              <TableHeaderContainer label="Header 2" />
              <TableHeaderContainer label="Header 3" /> */}
              {rows.map((row, i) => {
                return <TableHeaderContainer key={i} label={row} />;
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-200">
              {/* <TableDataContainer />
              <TableDataContainer />
              <TableDataContainer /> */}
              {rows.map((_, i) => {
                return <TableDataContainer key={i} />;
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="ml-3">
        <BasicBlueButton label="+" handleClick={addRows} />
        <BasicRedButton label="-" handleClick={removeRows} />
      </div>
    </div>
  );
};
