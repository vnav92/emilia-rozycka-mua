import React from "react";

import {
  LimitedWidthContent,
  Typography,
  TypographyColor,
  MessengerContactLink,
} from "../../../components";

import * as styles from "./future-bookings.module.scss";

type FutureBookingsProps = {
  lineOne: string;
  lineTwo: string;
  lineThree: string;
  linkText: string;
  linkUrl: string;
  backgroundImageUrl: string;
};

export const FutureBookings: React.FC<FutureBookingsProps> = ({
  lineOne,
  lineTwo,
  lineThree,
  linkText,
  linkUrl,
  backgroundImageUrl,
}) => {
  return (
    <section
      className={styles.futureBookingsSection}
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <LimitedWidthContent
        renderAs="div"
        contentWrapperClassName={styles.contentWrapper}
      >
        <Typography color={TypographyColor.PRIMARY} className={styles.lineOne}>
          {lineOne}
        </Typography>
        <div>
          <Typography
            color={TypographyColor.PRIMARY}
            className={styles.lineTwo}
          >
            {lineTwo}
          </Typography>
          <Typography
            as="h4"
            color={TypographyColor.PRIMARY}
            className={styles.lineThree}
          >
            {lineThree}
          </Typography>
        </div>
        <MessengerContactLink
          linkUrl={linkUrl}
          buttonVariant="outlined"
          iconVariant="light-background"
        >
          {linkText}
        </MessengerContactLink>
      </LimitedWidthContent>
    </section>
  );
};
