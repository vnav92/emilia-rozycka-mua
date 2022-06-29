import React from "react";
import classNames from "classnames";

import * as styles from "./button.module.scss";

type ButtonProps = {
  className?: string;
  variant?: "primary" | "secondary";
  isCircleShape?: boolean;
  children: React.ReactNode | React.ReactNode[];
} & ({ onClick: () => void } | { href: string });

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  isCircleShape,
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
          [styles.circleButton]: isCircleShape,
        },
        className
      )}
      {...("href" in props ? { href: props.href } : { onClick: props.onClick })}
    >
      {children}
    </ButtonElement>
  );
};
