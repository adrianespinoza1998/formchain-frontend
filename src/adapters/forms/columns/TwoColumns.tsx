export const TwoColumns = () => {
  return (
    <div className="grid grid-cols-2 gap-2 font-mono text-slate-600 text-sm text-center font-bold leading-6 bg-stripes-gray rounded-lg my-3">
      <div className="p-4 rounded-lg shadow-lg bg-slate-200">
        <button className="bg-slate-200 hover:bg-slate-100 text-slate-400 py-2 px-4 rounded">
          +
        </button>
      </div>
      <div className="p-4 rounded-lg shadow-lg bg-slate-200">
        <button className="bg-slate-200 hover:bg-slate-100 text-slate-400 py-2 px-4 rounded">
          +
        </button>
      </div>
    </div>
  );
};
