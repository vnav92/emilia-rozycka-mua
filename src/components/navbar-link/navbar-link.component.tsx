import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

import * as styles from "./navbar-link.module.scss";

type NavbarLinkProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  to,
  className,
  children,
}) => (
  <Link className={classNames(styles.navbarLink, className)} to={to}>
    {children}
  </Link>
);
