import { ShowComponentsProps } from "../../../types/ui";

export const ShowComponents = ({ components }: ShowComponentsProps) => {
  return (
    <div>
      {components.map((comp: JSX.Element, index: number) => {
        return <div key={index}>{comp}</div>;
      })}
    </div>
  );
};
