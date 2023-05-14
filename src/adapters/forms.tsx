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
      return <h1>Title</h1>;
    case "Button":
      return <button>Button</button>;
    case "Checkbutton":
      return (
        <div>
          <label
            htmlFor={`checkbox${uuid}`}
            style={{ display: "inline-block" }}
          >
            Checkbox
          </label>
          <input
            type="checkbox"
            id={`checkbox${uuid}`}
            aria-label="checkbutton"
          />
        </div>
      );
    case "Radio":
      return <input type="radio" aria-label="Radio button" />;
    case "Input":
      return <input type="text" placeholder="input" />;
    case "Select":
      return (
        <select>
          <option>--Select--</option>
        </select>
      );
    case "Textarea":
      return <textarea></textarea>;
    case "Table":
      return (
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
            </tr>
          </tbody>
        </table>
      );
    default:
      return <></>;
  }
};
