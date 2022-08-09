type MenuElement = {
  label: string;
  href: string;
};

export type NavbarProps = {
  menuElements: MenuElement[];
  logoUrl: string;
  contactNumber: string;
  className?: string;
};
