import React from "react";

import {
  TypographyColor,
  Typography,
  TypographyFontFamily,
} from "..";

import * as styles from "./reservations-item.module.scss";

type ReservationsItemProps = {
    itemNumber: string;
    itemHeading: string;
    itemDescription: string;
};

export const ReservationsItem: React.FC<ReservationsItemProps> = ({
    itemNumber,
    itemHeading,
    itemDescription
}) => {
  return (
    <div className={styles.reservationsItemWrapper}>
      <Typography 
        as="h3" 
        color={TypographyColor.DARK_PRIMARY}
        className={styles.itemNumber}
      >
        {itemNumber}
      </Typography>

      <Typography 
        as="p" 
        fontFamily={TypographyFontFamily.SECONDARY}
        color={TypographyColor.DARK_PRIMARY}
        className={styles.itemHeading}
      >
        {itemHeading}
      </Typography>

      <Typography 
        as="p" 
        fontFamily={TypographyFontFamily.SECONDARY}
        color={TypographyColor.DARK_PRIMARY}
        className={styles.itemDescription}
      >
        {itemDescription}
      </Typography>
    </div>
  );
};
