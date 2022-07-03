import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import { Typography, TypographyFontFamily } from "../typography";

import * as styles from "./image-link.module.scss";

type ImageLinkProps = {
  imageUrl: string;
  to: string;
  // @TODO remove optional
  alt?: string;
  imageClassName?: string;
  children: React.ReactNode;
};

export const ImageLink: React.FC<ImageLinkProps> = ({
  imageUrl,
  to,
  alt = "",
  imageClassName,
  children,
}) => (
  <Link to={to} className={styles.link}>
    <img
      src={imageUrl}
      alt={alt}
      className={classNames(styles.image, imageClassName)}
    />
    <Typography
      as="span"
      className={styles.linkLabel}
      fontFamily={TypographyFontFamily.SECONDARY}
    >
      {children}
    </Typography>
  </Link>
);
