import React from "react";
import classNames from "classnames";
import { GatsbyLinkProps, Link } from "gatsby";

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
}) => {
  // TODO remove additional logic after final version will be introduced
  // (just a 'Link' should be rendered without additional logic)
  const isTargetBlank = to.startsWith("http");
  const LinkElement = isTargetBlank ? "a" : Link;

  return (
    <LinkElement
      className={classNames(styles.navbarLink, className)}
      {...((isTargetBlank ? { href: to, target: '_blank' } : { to }) as GatsbyLinkProps<unknown>)}
    >
      {children}
    </LinkElement>
  );
};
