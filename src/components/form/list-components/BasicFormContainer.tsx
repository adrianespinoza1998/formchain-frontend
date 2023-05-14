import { getComponent, getForms } from "../../../adapters/forms";
import { BasicFormContainerProps } from "../../../types/ui";
import { BasicForm } from "./BasicForm";
import { useEffect, useState } from "react";

export const BasicFormContainer = ({
  setComponents,
  components,
  index,
}: BasicFormContainerProps) => {
  const [innerComponents, setInnerComponents] = useState<JSX.Element[]>([]);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<string[]>([]);

  const handleRemoveComponent = () => {
    setComponents(components.filter((_, i) => i !== index));
  };

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const handleSelectDropdown = (e: HTMLButtonElement) => {
    // console.log(e.textContent);
    const component = getComponent(e.textContent || "");
    setInnerComponents([...innerComponents, component]);
    setIsDropdown(!isDropdown);
  };

  useEffect(() => {
    setOptionList(getForms());
  }, [index]);

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
