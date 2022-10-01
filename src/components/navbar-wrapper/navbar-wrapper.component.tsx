import React from "react";
import { Link } from 'gatsby';

import classNames from "classnames";

import { Image } from "../../shared";

import * as styles from "./navbar-wrapper.module.scss";

type NavbarWrapperProps = {
  logo: Image;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const NavbarWrapper: React.FC<NavbarWrapperProps> = ({
  logo,
  className,
  children,
}) => (
  <nav className={classNames(styles.desktopNavbarWrapper, className)}>
    <Link to="/" className={styles.logoWrapper}>
      {logo && <img src={logo.mediaItemUrl} alt={logo.altText} />}
    </Link>
    {children}
  </nav>
);
