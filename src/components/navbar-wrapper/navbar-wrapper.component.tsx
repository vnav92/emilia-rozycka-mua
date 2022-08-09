import React from "react";

import classNames from "classnames";

import * as styles from "./navbar-wrapper.module.scss";

type NavbarWrapperProps = {
  logoUrl: string;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const NavbarWrapper: React.FC<NavbarWrapperProps> = ({
  logoUrl,
  className,
  children,
}) => {
  return (
    <nav className={classNames(styles.desktopNavbarWrapper, className)}>
      <div className={styles.logoWrapper}>
        <img src={logoUrl} alt="Company logo" />
      </div>
      {children}
    </nav>
  );
};
