import React from "react";

import { Link } from "gatsby";

import { NavbarLink } from "../navbar-link";

import * as styles from "./desktop-navbar.module.scss";

type MenuElement = {
  label: string;
  href: string;
};

type DesktopNavbarProps = {
  menuElements: MenuElement[];
  logoUrl: string;
  contactNumber: string;
};

const getFormattedPhoneNumber = (unformattedPhoneNumber: string) => {
  const phoneNumberToArray = unformattedPhoneNumber
    .split("")
    .filter(item => item !== " ");

  phoneNumberToArray.splice(3, 0, " ");
  phoneNumberToArray.splice(7, 0, "-");
  phoneNumberToArray.splice(11, 0, "-");

  return phoneNumberToArray.reduce((acc, curr) => {
    acc += curr;

    return acc;
  }, "");
};

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  menuElements,
  logoUrl,
  contactNumber,
}) => {
  return (
    <nav className={styles.desktopNavbarWrapper}>
      {/* @TODO add image link */}
      <div>
        <img src={logoUrl} alt="Company logo" />
      </div>
      <ul className={styles.menuItemsList}>
        {menuElements.map(({ href, label }, index) => (
          <li className={styles.menuItem} key={index}>
            <NavbarLink to={href} className={styles.navbarLinkText}>
              {label}
            </NavbarLink>
            <a>hello</a>
          </li>
        ))}
      </ul>
      <Link className={styles.contactNumberLink} to={`tel:${contactNumber}`}>
        {getFormattedPhoneNumber(contactNumber)}
      </Link>
    </nav>
  );
};
