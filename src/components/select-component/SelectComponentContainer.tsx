// import { useState } from "react";
import { SelectComponentProps } from "../../types/ui";
import { SelectComponent } from "./SelectComponent";
// import { CreatedComponentContainer } from "../created-components/CreatedComponentContainer";

export const SelectComponentContainer = ({
  isOpen,
  isCreate,
  setIsCreate,
}: SelectComponentProps) => {
  //   const [isCreate, setIsCreate] = useState<boolean>(false);
  //   const [components, setComponents] = useState<string[]>([]);

  //   const handleAddComponent = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     const lista = [...components, e.currentTarget.name];
  //     setComponents(lista);
  //     setIsCreate(!isCreate);
  //   };

  return (
    <div className="p-10">
      {/* <CreatedComponentContainer componentes={components} /> */}
      <SelectComponent
        isOpen={isOpen}
        isCreate={isCreate}
        setIsCreate={setIsCreate}
      />
      {/* {isCreate && (
        <div className="container mx-auto mt-12">
          <ul className="list-disc">
            <li>
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                name="text"
                onClick={handleAddComponent}
              >
                Text
              </button>
            </li>
            <li>
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                name="button"
                onClick={handleAddComponent}
              >
                Button
              </button>
            </li>
            <li>
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                name="textarea"
                onClick={handleAddComponent}
              >
                Textarea
              </button>
            </li>
            <li>
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                name="date picker"
                onClick={handleAddComponent}
              >
                Date picker
              </button>
            </li>
            <li>
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                name="number"
                onClick={handleAddComponent}
              >
                Number
              </button>
            </li>
            <li>
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                name="slider"
                onClick={handleAddComponent}
              >
                Slider
              </button>
            </li>
          </ul>
        </div>
      )} */}
    </div>
  );
};
