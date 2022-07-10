import React from "react";
import classNames from "classnames";

import * as styles from "./button.module.scss";

type ButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "outlined" | "outlined-contrast";
  isCircleShape?: boolean;
  imageUrl?: string;
} & ({ onClick: () => void } | { href: string }) &
  (
    | { imageUrl: string; children?: React.ReactNode | React.ReactNode[] }
    | { children?: React.ReactNode | React.ReactNode[] }
  );

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  isCircleShape,
  imageUrl,
  children,
  ...props
}) => {
  const ButtonElement = "href" in props ? "a" : "button";

  return (
    <ButtonElement
      className={classNames(
        styles.buttonElement,
        {
          [styles.primaryButton]: variant === "primary",
          [styles.secondaryButton]: variant === "secondary",
          [styles.outlinedButton]: variant === "outlined",
          [styles.outlinedContrastButton]: variant === "outlined-contrast",
          [styles.circleButton]: isCircleShape,
        },
        className
      )}
      {...("href" in props ? { href: props.href } : { onClick: props.onClick })}
    >
      {imageUrl && <img src={imageUrl} className={styles.buttonImage} />}
      {children}
    </ButtonElement>
  );
};
