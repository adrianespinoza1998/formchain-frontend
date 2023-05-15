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
