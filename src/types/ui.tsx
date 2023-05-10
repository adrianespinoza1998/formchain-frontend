export type NavbarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export type SidebarProps = Omit<NavbarProps, "setIsOpen">;

export type SelectComponentProps = Omit<NavbarProps, "setIsOpen"> & {
  isCreate?: boolean;
  setIsCreate?: (isCreate: boolean) => void;
};

// export type CreatedComponentProps = {
//   componentes: string[];
// };

export type FormProps = SelectComponentProps & {
  components: string[];
  handleAddComponent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ComponentListProps = {
  components?: string[];
  handleAddComponent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
