import { useEffect, useState } from "react";
import { ComponentGridProps } from "../../../types/ui";
import { ComponentGrid } from "./ComponentGrid";
import { AddComponent } from "./AddComponent";

export const ComponentGridContainer = ({ numRows }: ComponentGridProps) => {
  const [components, setComponents] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const lista: JSX.Element[] = [];

    for (let i = 0; i < numRows; i++) {
      lista.push(<AddComponent />);
    }

    setComponents(lista);
  }, [numRows]);

  return <ComponentGrid components={components} />;
};
