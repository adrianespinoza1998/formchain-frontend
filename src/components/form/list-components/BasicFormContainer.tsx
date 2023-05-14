import { getComponent, getForms } from "../../../adapters/forms";
import { BasicFormContainerProps } from "../../../types/ui";
import { BasicForm } from "./BasicForm";
import { useEffect, useState, useCallback } from "react";

export const BasicFormContainer = ({
  setComponents,
  components,
  index,
}: BasicFormContainerProps) => {
  const [innerComponents, setInnerComponents] = useState<JSX.Element[]>([]);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<string[]>([]);

  const handleRemoveComponent = useCallback(() => {
    setComponents(components.filter((_, i) => i !== index));
  }, [components, setComponents, index]);

  const handleDropdown = useCallback(() => {
    setIsDropdown(!isDropdown);
  }, [isDropdown]);

  const handleSelectDropdown = useCallback(
    (e: HTMLButtonElement) => {
      const component = getComponent(e.textContent || "");
      setInnerComponents([...innerComponents, component]);
      setIsDropdown(!isDropdown);
    },
    [innerComponents, isDropdown]
  );

  useEffect(() => {
    setOptionList(getForms());
  }, [index]);

  return (
    <BasicForm
      handleRemoveComponent={handleRemoveComponent}
      components={innerComponents}
      isDropdown={isDropdown}
      handleDropdown={handleDropdown}
      optionList={optionList}
      handleClick={handleSelectDropdown}
    />
  );
};
