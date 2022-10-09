import React from "react";
import classNames from "classnames";

import {
  Typography,
  TypographyColor,
  LimitedWidthContent,
  MessengerContactLink,
} from "../";

import * as styles from "./offer-item-section.module.scss";
import * as typographyStyles from "../typography/typography.module.scss";

type OfferItemSectionProps = {
  title: string;
  content: string;
  price: string;
};

export const OfferItemSection: React.FC<OfferItemSectionProps> = ({
  title,
  content,
  price,
}) => {
  return (
    <LimitedWidthContent contentWrapperClassName={styles.sectionWrapper}>
      <div className={styles.textContentWrapper}>
        <Typography
          color={TypographyColor.PRIMARY}
          className={classNames(styles.title, typographyStyles.bodyTextXL)}
        >
          {title}
        </Typography>
        <div
          className={styles.descriptionWrapper}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div>
        <Typography
          as="span"
          color={TypographyColor.PRIMARY}
          className={classNames(styles.price, typographyStyles.bodyTextLG)}
        >
          {price}
        </Typography>
        <MessengerContactLink
          buttonVariant="outlined"
          iconVariant="light-background"
        >
          Rezerwuję
        </MessengerContactLink>
      </div>
    </LimitedWidthContent>
  );
};
