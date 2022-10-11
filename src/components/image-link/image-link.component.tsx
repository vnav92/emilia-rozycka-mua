import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import { Typography, TypographyFontFamily } from "../typography";
import { Image } from "../../shared";

import * as styles from "./image-link.module.scss";

type ImageLinkProps = {
  image: Image;
  to: string;
  imageClassName?: string;
  linkClassName?: string;
  children: React.ReactNode;
};

export const ImageLink: React.FC<ImageLinkProps> = ({
  image,
  to,
  imageClassName,
  linkClassName,
  children,
}) => (
  <Link to={to} className={classNames(styles.link, linkClassName)}>
    <div className={classNames(styles.imageWrapper)}>
      <img
        src={image.mediaItemUrl}
        alt={image.altText}
        className={classNames(styles.image, imageClassName)}
      />
    </div>
    <div className={classNames(styles.infoSlider)}>
      <Typography as="h5" className={styles.linkLabel}>
        {children}
      </Typography>
      <Typography as="p">Zobacz szczegóły</Typography>
    </div>
  </Link>
);
