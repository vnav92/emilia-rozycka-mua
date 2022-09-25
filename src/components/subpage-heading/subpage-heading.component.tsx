import React from "react";

import { Typography, TypographyFontFamily } from "../typography";
import { MessengerContactLink } from "../messenger-contact-link";
import { SocialIconLink } from "../social-icon-link";

import * as styles from "./subpage-heading.module.scss";

type SubpageHeadingProps = {
  secondaryTitle: React.ReactNode;
  primaryTitle: React.ReactNode;
  facebookLink: string;
  instagramLink: string;
  emailAddress: string;
};

export const SubpageHeading: React.FC<SubpageHeadingProps> = ({
  secondaryTitle,
  primaryTitle,
  instagramLink,
  facebookLink,
  emailAddress,
}) => (
  <div className={styles.subpageHeadingWrapper}>
    <div className={styles.titleWrapper}>
      <Typography
        as="h2"
        fontFamily={TypographyFontFamily.SECONDARY}
        className={styles.secondaryTitle}
      >
        {secondaryTitle}
      </Typography>
      <Typography as="h1" className={styles.primaryTitle}>
        {primaryTitle}
      </Typography>
    </div>
    <div className={styles.socialLinksWrapper}>
      <MessengerContactLink
        iconVariant="dark-background"
        buttonVariant="outlined-contrast"
        linkUrl={facebookLink}
      >
        Wyślij wiadomość
      </MessengerContactLink>
      <SocialIconLink href={instagramLink} socialMediaType="instagram" />
      <SocialIconLink href={`mailto:${emailAddress}`} socialMediaType="email" />
    </div>
  </div>
);
