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
