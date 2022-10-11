import React, {useState} from "react";
import accordionIcon from "../../../static/graphics/faq/accordion-icon.svg";

import {
  TypographyColor,
  Typography,
  TypographyFontFamily,
  MessengerContactLink
} from "..";

import * as styles from "./faq-item.module.scss";
import classNames from "classnames";

type FaqItemProps = {
    itemHeading: string;
    itemDescription: string;
    faqRedirectionLinkText?: string;
};

export const FaqItem: React.FC<FaqItemProps> = ({
    itemHeading,
    itemDescription,
    faqRedirectionLinkText
}) => {
  const [isAccordionClosed, setIsAccordionClosed] = useState(true);

  return (
    <div className={styles.faqItemWrapper}>
      <div className={styles.accordionHeadWrapper}>
        <Typography 
          as="p" 
          fontFamily={TypographyFontFamily.SECONDARY}
          color={TypographyColor.LIGHT_PRIMARY}
          className={styles.itemHeading}
        >
          {itemHeading}
        </Typography>
        <button
          onClick={() => setIsAccordionClosed(isAccordionClosed => !isAccordionClosed)}
          className={styles.accordionButton}
        >
          <img src={accordionIcon} alt={'accordion expand button icon'}/>
        </button>
      </div>

      <div className={
        classNames(styles.accordionDescriptionWrapper,
          isAccordionClosed ? styles.displayNone : ''
        )}>
        <Typography 
          as="p" 
          fontFamily={TypographyFontFamily.SECONDARY}
          className={styles.itemDescription}
        >
          {itemDescription}
        </Typography>

        {
          faqRedirectionLinkText &&

          <MessengerContactLink
              buttonVariant="outlined"
              iconVariant="light-background"
            >
              {faqRedirectionLinkText}
          </MessengerContactLink>
        }
      </div>
    </div>
  );
};
