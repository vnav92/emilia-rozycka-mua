import React from "react";
import classNames from "classnames";

import { Link } from "gatsby";

import {
  NavbarProps,
  getFormattedPhoneNumber,
  useIsOnHomePage,
} from "../../shared";
import { NavbarLink } from "../navbar-link";

import * as styles from "./desktop-navbar.module.scss";

export const DesktopNavbar: React.FC<NavbarProps> = ({
  menuElements,
  contactNumber,
}) => {
  const isOnHomePage = useIsOnHomePage();

  return (
    <>
      <ul className={styles.menuItemsList}>
        {menuElements.map(({ href, label }, index) => (
          <li className={styles.menuItem} key={index}>
            <NavbarLink
              to={href}
              className={classNames(
                isOnHomePage
                  ? styles.darkBackgroundTextColor
                  : styles.lightBackgroundTextColor
              )}
            >
              {label}
            </NavbarLink>
          </li>
        ))}
      </ul>
      <Link
        className={classNames(
          styles.contactNumberLink,
          isOnHomePage
            ? styles.darkBackgroundTextColor
            : styles.lightBackgroundTextColor
        )}
        to={`tel:${contactNumber}`}
      >
        {getFormattedPhoneNumber(contactNumber)}
      </Link>
    </>
  );
};
