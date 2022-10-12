import React from "react";
import classNames from "classnames";

import { Typography } from "../";
import { TypographyColor } from "../typography";
import { Image } from "../../shared";

import * as styles from "./section-header.module.scss";

type SectionHeaderProps = {
  as: "h2" | "h3" | "h4" | "h5" | "h6";
  color?: TypographyColor;
  icon: Image;
  className?: string;
  children: React.ReactNode;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  as,
  color = TypographyColor.LIGHT_PRIMARY,
  icon,
  className,
  children,
}) => {
  return (
    <Typography
      as={as}
      color={color}
      className={classNames(styles.sectionHeader, className)}
    >
      <span className={styles.sectionHeaderText}>{children}</span>
      <img src={icon.mediaItemUrl} alt={icon.altText} className={styles.icon} />
    </Typography>
  );
};
