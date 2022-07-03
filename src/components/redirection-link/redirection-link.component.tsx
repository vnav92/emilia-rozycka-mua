import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

import { BiRightArrowAlt } from "react-icons/bi";

import { Typography, TypographyColor } from "../typography";

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
    <BiRightArrowAlt className={styles.icon} />
    <Typography as="span" color={TypographyColor.LIGHT}>
      {children}
    </Typography>
  </Link>
);
