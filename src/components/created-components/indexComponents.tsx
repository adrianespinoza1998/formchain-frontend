interface IComponentList {
  [key: string]: JSX.Element;
}

export const ComponentList: IComponentList = {
  input: <input />,
  button: (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      hola
    </button>
  ),
  select: <select />,
  checkbox: <input type="checkbox" />,
  radio: <input type="radio" />,
  textarea: <textarea />,
  label: <label placeholder="hola" />,
  //   form: <form />,
};
