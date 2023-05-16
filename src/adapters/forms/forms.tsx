import { v4 as uuidv4 } from "uuid";
import { TitleContainer } from "./title/TitleContainer";
import { ButtonContainer } from "./button/ButtonContainer";
import { CheckbuttonContainer } from "./checkbutton/CheckbuttonContainer";
import { RadiobuttonContainer } from "./radio-button/RadiobuttonContainer";
import { InputContainer } from "./input/InputContainer";
import { SelectContainer } from "./select/SelectContainer";
import { TextareaContainer } from "./textarea/TextareaContainer";
import { TableContainer } from "./table/TableContainer";

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
    default:
      return <></>;
  }
};
