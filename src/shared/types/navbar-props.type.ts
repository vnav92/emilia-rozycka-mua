// TODO delete `route` when final version of page will be introduced
type MenuElement = {
  label: string;
  href: string;
  route?: string;
};

export type NavbarProps = {
  isDark: boolean;
  menuElements: MenuElement[];
  contactNumber: string;
  className?: string;
};
