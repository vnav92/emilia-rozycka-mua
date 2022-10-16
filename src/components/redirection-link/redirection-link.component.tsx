import React from "react";
import classNames from "classnames";
import { GatsbyLinkProps, Link } from "gatsby";

import {
  Typography,
  TypographyColor,
  TypographyFontFamily,
} from "../typography";

import * as styles from "./redirection-link.module.scss";

type RedirectionLinkProps = {
  href: string;
  isTargetBlank?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const RedirectionLink: React.FC<RedirectionLinkProps> = ({
  href,
  isTargetBlank = true,
  className,
  children,
}) => {
  const LinkElement = isTargetBlank ? "a" : Link;
  return (
    <LinkElement
      {...((isTargetBlank
        ? { href, target: "_blank" }
        : { to: href }) as GatsbyLinkProps<unknown>)}
      className={classNames(styles.redirectionLink, className)}
    >
      <Typography
        as="span"
        className={styles.redirectionLinkText}
        fontFamily={TypographyFontFamily.SECONDARY}
      >
        {children}
      </Typography>
    </LinkElement>
  );
};
