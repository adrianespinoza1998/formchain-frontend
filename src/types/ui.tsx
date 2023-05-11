export type NavbarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export type CreateComponentButtonProps = {
  handleAddComponent: () => void;
};

export type FormProps = CreateComponentButtonProps;
