import { useEffect, useState } from "react";
import { TableData } from "./TableData";
import { v4 } from "uuid";
import { getDataTypes } from "../../forms";

export const TableDataContainer = () => {
  const [dataTypes, setDataTypes] = useState<string[]>([]);
  const [uuid, setUuid] = useState<string>("");
  const [dataType, setDataType] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataType(e.target.value);
  };

  useEffect(() => {
    const data = getDataTypes();
    setDataTypes(data);
    setUuid(v4());
    setDataType(data[0]);
  }, []);

  return (
    <TableData
      uuid={uuid}
      dataTypes={dataTypes}
      handleChange={handleChange}
      dataType={dataType}
    />
  );
};
