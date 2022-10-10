import React from "react";

import {
  LimitedWidthContent,
  SectionHeader,
  TypographyColor,
  Typography,
  TypographyFontFamily,
} from "..";

import * as styles from "./cooperation-item.module.scss";

type CooperationItemProps = {
    itemDescription: string;
    itemTitleIcon: React.ReactNode;
};

export const CooperationItem: React.FC<CooperationItemProps> = ({
    itemTitleIcon,
    itemDescription
}) => {
  return (
    <div>
      <img src={itemTitleIcon} alt="" />
      <p>{itemDescription}</p>
    </div>
  );
};
