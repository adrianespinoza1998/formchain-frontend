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

export type BasicFormProps = CreateComponentButtonProps &
  ShowComponentsProps & {
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
