import { v4 as uuidv4 } from "uuid";
import { TitleContainer } from "./title/TitleContainer";
import { ButtonContainer } from "./button/ButtonContainer";
import { CheckbuttonContainer } from "./checkbutton/CheckbuttonContainer";
import { RadiobuttonContainer } from "./radio-button/RadiobuttonContainer";
import { InputContainer } from "./input/InputContainer";
import { SelectContainer } from "./select/SelectContainer";
import { TextareaContainer } from "./textarea/TextareaContainer";
import { TableContainer } from "./table/TableContainer";
import { ComponentGridContainer } from "./columns/ComponentGridContainer";
import { FourColumns } from "./columns/FourColumns";
import { TreeColumns } from "./columns/TreeColumns";
import { TwoColumns } from "./columns/TwoColumns";

export const getForms: () => string[] = () => {
  return [
    "Title",
    "Button",
    "Checkbutton",
    "Radio",
    "Input",
    "Select",
    "Textarea",
    "Table",
  ];
};

export const getColumnNumbers: () => string[] = () => {
  return ["1 Column", "2 Columns", "3 Columns", "4 Columns"];
};

export const getDataTypes: () => string[] = () => {
  return ["String", "Number", "Date"];
};

export const getComponent: (description: string) => JSX.Element = (
  description: string
) => {
  const uuid = uuidv4();
  switch (description) {
    case "Title":
      return <TitleContainer />;
    case "Button":
      return <ButtonContainer />;
    case "Checkbutton":
      return <CheckbuttonContainer uuid={uuid} />;
    case "Radio":
      return <RadiobuttonContainer uuid={uuid} />;
    case "Input":
      return <InputContainer uuid={uuid} />;
    case "Select":
      return <SelectContainer uuid={uuid} />;
    case "Textarea":
      return <TextareaContainer uuid={uuid} />;
    case "Table":
      return <TableContainer />;
    case "1 Column":
      return <ComponentGridContainer numRows={1} />;
    case "2 Columns":
      return <TwoColumns />;
    case "3 Columns":
      return <TreeColumns />;
    case "4 Columns":
      return <FourColumns />;
    default:
      return <></>;
  }
};
