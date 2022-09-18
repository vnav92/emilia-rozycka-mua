import React from "react";

import { Link } from "gatsby";

import { NavbarProps, getFormattedPhoneNumber } from "../../shared";
import { NavbarLink } from "../navbar-link";
import { NavbarWrapper } from "../";

import * as styles from "./desktop-navbar.module.scss";

export const DesktopNavbar: React.FC<NavbarProps> = ({
  menuElements,
  logo,
  contactNumber,
  className,
}) => {
  return (
    <NavbarWrapper logo={logo} className={className}>
      <ul className={styles.menuItemsList}>
        {menuElements.map(({ href, label }, index) => (
          <li className={styles.menuItem} key={index}>
            <NavbarLink to={href} className={styles.navbarLinkText}>
              {label}
            </NavbarLink>
          </li>
        ))}
      </ul>
      <Link className={styles.contactNumberLink} to={`tel:${contactNumber}`}>
        {getFormattedPhoneNumber(contactNumber)}
      </Link>
    </NavbarWrapper>
  );
};
