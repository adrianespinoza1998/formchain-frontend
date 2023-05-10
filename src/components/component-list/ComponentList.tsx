import { ComponentListProps } from "../../types/ui";

export const ComponentList = ({
  components,
  handleAddComponent,
}: ComponentListProps) => {
  return (
    <div className="container mx-auto mt-12">
      <ul className="list-disc">
        {components &&
          components.map((component: string, index: number) => {
            return (
              <li key={index}>
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  name={component}
                  onClick={handleAddComponent}
                >
                  {component}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
