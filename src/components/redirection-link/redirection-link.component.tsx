import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

import { Typography, TypographyColor, TypographyFontFamily } from "../typography";

import * as styles from "./redirection-link.module.scss";

type RedirectionLink = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

export const RedirectionLink: React.FC<RedirectionLink> = ({
  to,
  className,
  children,
}) => (
  <Link to={to} className={classNames(styles.redirectionLink, className)}>
    <Typography as="span" className={styles.redirectionLinkText} fontFamily={TypographyFontFamily.SECONDARY}>
      {children}
    </Typography>
  </Link>
);
