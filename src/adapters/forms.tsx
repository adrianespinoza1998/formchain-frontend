import { v4 as uuidv4 } from "uuid";

export const getForms: () => string[] = () => {
  return [
    "Title",
    "Button",
    "Checkbutton",
    "Radio",
    "Input",
    "Select",
    "Textarea",
    "Table",
  ];
};

export const getComponent: (description: string) => JSX.Element = (
  description: string
) => {
  const uuid = uuidv4();
  switch (description) {
    case "Title":
      return (
        <h1 className="mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl">
          Title
        </h1>
      );
    case "Button":
      return (
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Button
        </button>
      );
    case "Checkbutton":
      return (
        <div className="flex items-center mb-4">
          <input
            id={`checkbox${uuid}`}
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={`checkbox${uuid}`}
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Checkbox
          </label>
        </div>
      );
    case "Radio":
      return (
        <div className="flex items-center mb-4">
          <input
            id={`radio${uuid}`}
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={`radio${uuid}`}
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Radio Button
          </label>
        </div>
      );
    case "Input":
      return (
        <div>
          <label
            htmlFor={`input${uuid}`}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Input:
          </label>
          <input
            type="text"
            id={`input${uuid}`}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      );
    case "Select":
      return (
        <div>
          <label
            htmlFor={`countries${uuid}`}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select an option:
          </label>
          <select
            id={`countries${uuid}`}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      );
    case "Textarea":
      return (
        <div>
          <label
            htmlFor={`messages${uuid}`}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message:
          </label>
          <textarea
            id={`messages${uuid}`}
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
      );
    case "Table":
      return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4 text-gray-800">Silver</td>
                <td className="px-6 py-4 text-gray-800">Laptop</td>
                <td className="px-6 py-4 text-gray-800">$2999</td>
                <td className="px-6 py-4 text-gray-800">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    default:
      return <></>;
  }
};
