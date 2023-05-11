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
};

export type BasicFormProps = CreateComponentButtonProps &
  ShowComponentsProps &
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

export type AnchorDropdownProps = Omit<BasicButtonProps, "handleClick">;
