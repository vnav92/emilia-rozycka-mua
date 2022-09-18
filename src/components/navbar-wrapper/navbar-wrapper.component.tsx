import React from "react";

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
}) => {
  return (
    <nav className={classNames(styles.desktopNavbarWrapper, className)}>
      <div className={styles.logoWrapper}>
        <img src={logo.mediaItemUrl} alt={logo.altText} />
      </div>
      {children}
    </nav>
  );
};
