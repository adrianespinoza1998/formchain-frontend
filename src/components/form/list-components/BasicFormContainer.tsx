import { BasicFormContainerProps } from "../../../types/ui";
import { BasicForm } from "./BasicForm";
import { useState } from "react";

export const BasicFormContainer = ({
  setComponents,
  components,
  index,
}: BasicFormContainerProps) => {
  const [innerComponents, setInnerComponents] = useState<JSX.Element[]>([]);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<string[]>([
    "Title",
    "Button",
    "Checkbutton",
    "Radio",
    "Input",
    "Select",
    "Textarea",
    "Table",
  ]);

  //   const handleAddComponent = () => {
  //     const lista = [...innerComponents, <h1>Components</h1>];
  //     setInnerComponents(lista);
  //   };

  const handleRemoveComponent = () => {
    setComponents(components.filter((_, i) => i !== index));
  };

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const handleSelectDropdown = (e: HTMLButtonElement) => {
    console.log(e.textContent);
    setIsDropdown(!isDropdown);
  };

  return (
    <BasicForm
      //   handleAddComponent={handleAddComponent}
      handleRemoveComponent={handleRemoveComponent}
      components={innerComponents}
      isDropdown={isDropdown}
      handleDropdown={handleDropdown}
      optionList={optionList}
      handleClick={handleSelectDropdown}
      //   setIsDropdown={setIsDropdown}
    />
  );
};
