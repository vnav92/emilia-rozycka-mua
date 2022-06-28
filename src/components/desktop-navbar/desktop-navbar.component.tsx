import React from "react";

import { NavbarLink } from "../navbar-link";
// import { SocialMediaContainer } from '../social-media-container';

import * as styles from "./desktop-navbar.module.scss";

type MenuElement = {
  label: string;
  href: string;
};

type DesktopNavbarProps = {
  menuElements: MenuElement[];
  contactNumber?: string;
};

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  menuElements,
  contactNumber,
}) => {
  return (
    <nav className={styles.desktopNavbarWrapper}>
      <div className={styles.logoWrapper}>
        <div className={styles.fakeLogo}></div>
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
      {/* <SocialMediaContainer /> */}
    </nav>
  );
};
