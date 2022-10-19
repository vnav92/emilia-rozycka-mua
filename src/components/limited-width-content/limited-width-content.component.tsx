import React from "react";

import classNames from "classnames";

import * as styles from "./limited-width-content.module.scss";

type LimitedWidthContentProps = {
  renderAs?: keyof JSX.IntrinsicElements;
  id?: string;
  className?: string;
  contentWrapperClassName?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const LimitedWidthContent: React.FC<LimitedWidthContentProps> = ({
  renderAs: ElementToRender = "section",
  id,
  className,
  contentWrapperClassName,
  children,
}) => (
    <ElementToRender className={classNames(styles.wrapper, className)} id={id}>
      <div
        className={classNames(styles.contentWrapper, contentWrapperClassName)}
      >
        {children}
      </div>
    </ElementToRender>
  )
