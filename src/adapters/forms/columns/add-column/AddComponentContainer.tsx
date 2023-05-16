import { useEffect, useState } from "react";
import { AddComponent } from "./AddComponent";
import { getForms } from "../../forms";

export const AddComponentContainer = () => {
  const [optionList, setOptionList] = useState<string[]>([]);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  const handleClick = () => {
    setIsDropdown(!isDropdown);
  };

  useEffect(() => {
    setOptionList(getForms());
  }, []);
  return (
    <AddComponent
      isDropdown={isDropdown}
      optionList={optionList}
      handleClick={handleClick}
    />
  );
};
