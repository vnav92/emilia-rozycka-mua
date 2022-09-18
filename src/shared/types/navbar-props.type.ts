import { Image } from "./image.type";

type MenuElement = {
  label: string;
  href: string;
};

export type NavbarProps = {
  menuElements: MenuElement[];
  logo: Image;
  contactNumber: string;
  className?: string;
};
