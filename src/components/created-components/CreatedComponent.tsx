import { FormProps } from "../../types/ui";
import { ComponentList } from "./indexComponents";

export const CreatedComponent = ({ components }: FormProps) => {
  return (
    <div>
      <ul className="list-disc">
        {components.map((com: string) => (
          <li>{ComponentList[com]}</li>
        ))}
      </ul>
    </div>
  );
};
