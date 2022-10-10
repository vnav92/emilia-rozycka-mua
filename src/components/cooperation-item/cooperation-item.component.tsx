import React from "react";

import {
  TypographyColor,
  TypographyWidth,
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
    <div className={styles.cooperationItemWrapper}>
      <img src={itemTitleIcon} alt="" />
      <Typography 
        as="p" 
        fontFamily={TypographyFontFamily.SECONDARY}
        color={TypographyColor.DARK_PRIMARY}
        className={styles.itemDescriptionText}
      >
        {itemDescription}
      </Typography>
    </div>
  );
};
