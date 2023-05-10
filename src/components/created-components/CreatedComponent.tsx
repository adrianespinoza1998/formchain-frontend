import { CreatedComponentProps } from "../../types/ui";

export const CreatedComponent = ({ componentes }: CreatedComponentProps) => {
  return (
    <div>
      <ul className="list-disc">
        {componentes.map((com) => (
          <li>{com}</li>
        ))}
      </ul>
    </div>
  );
};
