import { ComponentGridPresentationProps } from "../../../types/ui";

export const ComponentGrid = ({
  components,
}: ComponentGridPresentationProps) => {
  return (
    <div
      className={`grid grid-cols-${components.length} gap-2 font-mono text-slate-600 text-sm text-center font-bold leading-6 bg-stripes-gray rounded-lg my-3`}
    >
      {components.map((component, index) => {
        return <div key={index}>{component}</div>;
      })}
    </div>
  );
};
