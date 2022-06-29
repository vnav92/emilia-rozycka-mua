import React from "react";

import classNames from "classnames";

import * as styles from "./limited-width-content.module.scss";

type LimitedWidthContentProps = {
  renderAs?: string;
  className?: string;
  contentWrapperClassName?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const LimitedWidthContent: React.FC<LimitedWidthContentProps> = ({
  renderAs: ElementToRender = "section",
  className,
  contentWrapperClassName,
  children,
}) => {
  return (
    <ElementToRender className={classNames(styles.wrapper, className)}>
      <div
        className={classNames(styles.contentWrapper, contentWrapperClassName)}
      >
        {children}
      </div>
    </ElementToRender>
  );
};
