type MenuElement = {
  label: string;
  href: string;
};

export type NavbarProps = {
  isDark: boolean;
  menuElements: MenuElement[];
  contactNumber: string;
  className?: string;
};
