import { useEffect, useState } from "react";
import { ComponentGridProps } from "../../../types/ui";
import { ComponentGrid } from "./ComponentGrid";
import { AddComponentContainer } from "./add-column/AddComponentContainer";

export const ComponentGridContainer = ({ numRows }: ComponentGridProps) => {
  const [components, setComponents] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const lista: JSX.Element[] = [];

    for (let i = 0; i < numRows; i++) {
      lista.push(<AddComponentContainer />);
    }

    setComponents(lista);
  }, [numRows]);

  return <ComponentGrid components={components} numRows={components.length} />;
};
