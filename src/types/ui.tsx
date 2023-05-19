export type NavbarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export type CreateComponentButtonProps = {
  handleAddComponent: () => void;
};

export type ShowComponentsProps = {
  components: JSX.Element[];
};

export type FormProps = CreateComponentButtonProps & ShowComponentsProps;

export type DropdownsListProps = {
  optionList: string[];
  handleClick: (e: HTMLButtonElement) => void;
};

export type BasicFormProps = ShowComponentsProps &
  DropdownsListProps & {
    handleRemoveComponent: () => void;
    handleDropdown: () => void;
    isDropdown: boolean;
  };

export type BasicFormContainerProps = ShowComponentsProps & {
  index: number;
  setComponents: (components: JSX.Element[]) => void;
};

export type BasicButtonProps = {
  handleClick: () => void;
  label: string;
};

export type AnchorDropdownProps = Omit<BasicButtonProps, "handleClick"> & {
  handleClick: (e: HTMLButtonElement) => void;
};

export type CheckbuttonProps = {
  uuid: string;
};

export type TitleProps = {
  isEditing: boolean;
  label: string;
  handleDoubleClick: () => void;
  handleBlur: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CheckbuttonPresentationalProps = CheckbuttonProps & TitleProps;

export type TableHeaderProps = {
  label: string;
};

export type ComponentGridProps = {
  numRows: number;
};

export type ComponentGridPresentationProps = ShowComponentsProps & {
  numRows: number;
};

export type AddComponentProps = Omit<
  BasicFormProps,
  "handleRemoveComponent"
> & {
  handleRemoveComponent: (index: number) => void;
};

export type TableDataProps = CheckbuttonProps & {
  dataTypes: string[];
  dataType: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type TableProps = {
  addRows: () => void;
  removeRows: () => void;
  rows: string[];
};
