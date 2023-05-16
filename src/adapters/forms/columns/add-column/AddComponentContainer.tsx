import { useEffect, useState, useCallback } from "react";
import { AddComponent } from "./AddComponent";
import { getComponent, getForms } from "../../forms";

export const AddComponentContainer = () => {
  const [optionList, setOptionList] = useState<string[]>([]);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [components, setComponents] = useState<JSX.Element[]>([]);

  const handleClick = useCallback(
    (e: HTMLButtonElement) => {
      const component = getComponent(e.textContent || "");
      setComponents([...components, component]);
      setIsDropdown(!isDropdown);
    },
    [components, isDropdown]
  );

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const handleRemoveComponent = useCallback(
    (index: number) => {
      setComponents(components.filter((_, i) => i !== index));
    },
    [components, setComponents]
  );

  useEffect(() => {
    setOptionList(getForms());
  }, []);
  return (
    <AddComponent
      isDropdown={isDropdown}
      optionList={optionList}
      handleClick={handleClick}
      components={components}
      handleDropdown={handleDropdown}
      handleRemoveComponent={handleRemoveComponent}
    />
  );
};
