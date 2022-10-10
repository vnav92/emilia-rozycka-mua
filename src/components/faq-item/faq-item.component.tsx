import React from "react";
import accordionIcon from "../../../static/graphics/faq/accordion-icon.svg";

import {
  TypographyColor,
  Typography,
  TypographyFontFamily,
  MessengerContactLink
} from "..";

import * as styles from "./faq-item.module.scss";

type FaqItemProps = {
    itemHeading: string;
    itemDescription: string;
};

export const FaqItem: React.FC<FaqItemProps> = ({
    itemHeading,
    itemDescription,
}) => {
  return (
    <div className={styles.faqItemWrapper}>
      <div>
        <Typography 
          as="p" 
          fontFamily={TypographyFontFamily.SECONDARY}
          color={TypographyColor.LIGHT_PRIMARY}
          className={styles.itemHeading}
        >
          {itemHeading}
        </Typography>
        <button
          className={styles.accordionButton}
        >
          <img src={accordionIcon} alt={'accordion expand button icon'}/>
        </button>
      </div>

      <Typography 
        as="p" 
        fontFamily={TypographyFontFamily.SECONDARY}
        color={TypographyColor.LIGHT_PRIMARY}
        className={styles.itemDescription}
      >
        {itemDescription}
      </Typography>
    </div>
  );
};
