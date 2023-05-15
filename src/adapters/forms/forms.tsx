import { v4 as uuidv4 } from "uuid";
import { Checkbutton } from "./Checkbutton";
import { Radiobutton } from "./Radiobutton";
import { Input } from "./Input";
import { Select } from "./Select";
import { Textarea } from "./Textarea";
import { Table } from "./Table";
import { TitleContainer } from "./title/TitleContainer";
import { ButtonContainer } from "./button/ButtonContainer";

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
      return <Checkbutton uuid={uuid} />;
    case "Radio":
      return <Radiobutton uuid={uuid} />;
    case "Input":
      return <Input uuid={uuid} />;
    case "Select":
      return <Select uuid={uuid} />;
    case "Textarea":
      return <Textarea uuid={uuid} />;
    case "Table":
      return <Table />;
    default:
      return <></>;
  }
};
