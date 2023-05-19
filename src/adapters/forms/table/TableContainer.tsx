import { useState } from "react";
import { Table } from "./Table";

export const TableContainer = () => {
  const [rows, setRows] = useState<string[]>([
    "Header 1",
    "Header 2",
    "Header 3",
  ]);

  const addRows = () => {
    setRows([...rows, `Header ${rows.length + 1}`]);
  };

  const removeRows = () => {
    const newRows = rows.slice(0, -1);
    setRows(newRows);
  };
  return <Table rows={rows} addRows={addRows} removeRows={removeRows} />;
};
