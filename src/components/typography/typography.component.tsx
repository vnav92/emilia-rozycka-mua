import React from "react";
import classNames from "classnames";

import * as styles from "./typography.module.scss";

export enum TypographyColor {
  PRIMARY = "primary",
  PRIMARY_CONTRAST = "primaryContrast",
  LIGHT = "light",

  DARK_PRIMARY = "textDarkPrimary",
  DARK_SECONDARY = "textDarkSecondary",

  LIGHT_PRIMARY = "textLightPrimary",
  LIGHT_SECONDARY = "textLightSecondary",
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
  color = TypographyColor.LIGHT_SECONDARY,
  fontFamily = TypographyFontFamily.PRIMARY,
  className,
  children,
}) => {
  return (
    <As
      className={classNames(
        styles.typography,
        {
          [styles.textDarkPrimary]: color === TypographyColor.DARK_PRIMARY,
          [styles.textLightPrimary]: color === TypographyColor.LIGHT_PRIMARY,
          [styles.textDarkSecondary]: color === TypographyColor.DARK_SECONDARY,
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
