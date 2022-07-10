import * as React from "react";

import {
  LimitedWidthContent,
  Typography,
  TypographyFontFamily,
  Button,
  MessengerContactLink,
  SocialIconLink,
} from "../../../components";

import * as styles from "./primary-screen.module.scss";

type PrimaryScreenProps = {
  ownerJobTitle: string;
  ownerName: string;
  primaryImageUrl: string;
};

export const PrimaryScreen: React.FC<PrimaryScreenProps> = ({
  ownerJobTitle,
  ownerName,
  primaryImageUrl,
}) => {
  return (
    <section>
      <LimitedWidthContent
        className={styles.introductionSection}
        contentWrapperClassName={styles.primaryContent}
        renderAs="div"
      >
        <div className={styles.ownerInfoWrapper}>
          <Typography
            as="h2"
            fontFamily={TypographyFontFamily.SECONDARY}
            className={styles.ownerJobTitle}
          >
            {ownerJobTitle}
          </Typography>
          <Typography as="h1" className={styles.ownerName}>
            {ownerName}
          </Typography>
        </div>
        <div className={styles.socialLinksWrapper}>
          <MessengerContactLink
            iconVariant="dark-background"
            buttonVariant="outlined-contrast"
            linkUrl=""
          >
            Wyślij wiadomość
          </MessengerContactLink>
          <SocialIconLink href="" socialMediaType="instagram" />
          <SocialIconLink href="" socialMediaType="email" />
        </div>
        <Button
          onClick={() => {}}
          variant="secondary"
          className={styles.scrollDownButton}
        >
          down
        </Button>
      </LimitedWidthContent>
      <div
        className={styles.primaryPhotoSection}
        style={{ backgroundImage: `url("${primaryImageUrl}")` }}
      />
    </section>
  );
};
