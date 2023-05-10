import { FormProps } from "../../types/ui";
import { CreatedComponent } from "./CreatedComponent";

export const CreatedComponentContainer = ({ components }: FormProps) => {
  return <CreatedComponent componentes={components} />;
};
