import React from "react";
import classNames from "classnames";

import * as styles from "./typography.module.scss";

export enum TypographyColor {
  PRIMARY = "primary",
  PRIMARY_CONTRAST = "primaryContrast",
  REDUCED_VISIBILITY = "reducedVisibility",
}

export enum TypographyFontFamily {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type TypographyProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: TypographyColor;
  fontFamily?: TypographyFontFamily;
  className?: string;
  children: React.ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({
  as: As = "p",
  color = TypographyColor.PRIMARY_CONTRAST,
  fontFamily = TypographyFontFamily.PRIMARY,
  className,
  children,
}) => {
  return (
    <As
      className={classNames(
        styles.typography,
        {
          [styles.primaryColor]: color === TypographyColor.PRIMARY,
          [styles.primaryContrastColor]:
            color === TypographyColor.PRIMARY_CONTRAST,
          [styles.reducedVisibilityColor]:
            color === TypographyColor.REDUCED_VISIBILITY,
          [styles.primaryFontFamily]:
            fontFamily === TypographyFontFamily.PRIMARY,
          [styles.secondaryFontFamily]:
            fontFamily === TypographyFontFamily.SECONDARY,
        },
        className
      )}
    >
      {children}
    </As>
  );
};
