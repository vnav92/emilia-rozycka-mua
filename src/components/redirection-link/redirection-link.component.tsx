import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

import { BiRightArrowAlt } from "react-icons/bi";

<<<<<<< HEAD
import { Typography, TypographyColor } from "../typography";

import * as styles from "./redirection-link.module.scss";
=======
import * as styles from "./redirection-link.module.scss";
import { Typography, TypographyColor } from "../typography";
>>>>>>> 050ab538f01d34eccc61c5f2f1b3a3b915b16203

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
