import { AddComponentContainer } from "./add-column/AddComponentContainer";

export const TwoColumns = () => {
  return (
    <div className="grid grid-cols-2 gap-2 font-mono text-slate-600 text-sm text-center font-bold leading-6 bg-stripes-gray rounded-lg my-3">
      <AddComponentContainer />
      <AddComponentContainer />
    </div>
  );
};
