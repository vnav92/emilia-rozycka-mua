import React from "react";
import classNames from "classnames";

import { Image } from "../../shared";

import * as styles from "./button.module.scss";

type ButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "outlined" | "outlined-contrast";
  isCircleShape?: boolean;
  isBorderDisabled?: boolean;
  image?: Image;
  ariaLabel?: string;
} & ({ onClick: () => void } | { href: string }) &
  (
    | { imageUrl: string; children?: React.ReactNode | React.ReactNode[] }
    | { children?: React.ReactNode | React.ReactNode[] }
  );

export const Button = React.forwardRef<any, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      isCircleShape,
      isBorderDisabled,
      image,
      ariaLabel,
      children,
      ...props
    },
    ref
  ) => {
    const ButtonElement = "href" in props ? "a" : "button";

    return (
      <ButtonElement
        aria-label={ariaLabel}
        ref={ref}
        className={classNames(
          styles.buttonElement,
          {
            [styles.primaryButton]: variant === "primary",
            [styles.secondaryButton]: variant === "secondary",
            [styles.outlinedButton]: variant === "outlined",
            [styles.outlinedContrastButton]: variant === "outlined-contrast",
            [styles.circleButton]: isCircleShape,
            [styles.disabledBorder]: isBorderDisabled,
          },
          className
        )}
        {...("href" in props
          ? { href: props.href, target: '_blank' }
          : { onClick: props.onClick })}
      >
        <div className={styles.contentWrapper}>
          {image && (
            <img
              src={image.mediaItemUrl}
              alt={image.altText}
              className={styles.buttonImage}
            />
          )}
          {children}
        </div>
      </ButtonElement>
    );
  }
);
